const { v4: uuidv4 } = require("uuid");
const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

const ORDER_TABLE = "<order_table_name>";
const ORDER_TYPE = "Order";
const CLASS_ORDER_TABLE = "<class_order_table name>";
const CLASS_ORDER_TYPE = "ClassOrder";

const createOrder = async (payload) => {
  const { order_id, username, email, total } = payload;
  var params = {
    TableName: ORDER_TABLE,
    Item: {
      id: order_id,
      __typename: ORDER_TYPE,
      customer: email,
      user: username,
      total: total,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString()
    }
  };
  console.log(params);
  await documentClient.put(params).promise();
};

const createClassOrder = async (payload) => {
  let classOrders = [];
  for (i = 0; i < payload.cart.length; i++) {
    const cartItem = payload.cart[i];
    classOrders.push({
      PutRequest: {
        Item: {
          id: uuidv4(),
          __typename: CLASS_ORDER_TYPE,
          class_id: cartItem.id,
          order_id: payload.order_id,
          customer: payload.email,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      }
    });
  }
  let params = {
    RequestItems: {}
  };
  params["RequestItems"][CLASS_ORDER_TABLE] = classOrders;
  console.log(params);
  await documentClient.batchWrite(params).promise();
};

/*
 * Get order details from processPayment lambda
 * Create an order
 * Link classes to the order - Users can see the past orders and admins can view orders by user
 * Email the user (Will be added later)
 */
exports.handler = async (event) => {
  try {
    let payload = event.prev.result;
    payload.order_id = uuidv4();

    // create a new order
    await createOrder(payload);

    // links classes with the order
    await createClassOrder(payload);

    // add another function to email to the user

    return "SUCCESS";
  } catch (err) {
    console.log(err);
    return new Error(err);
  }
};
