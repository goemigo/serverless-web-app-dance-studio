/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const createClass = /* GraphQL */ `
  mutation CreateClass(
    $input: CreateClassInput!
    $condition: ModelClassConditionInput
  ) {
    createClass(input: $input, condition: $condition) {
      id
      title
      location
      time
      image
      instructor
      price
      orders {
        items {
          id
          class_id
          order_id
          createdAt
          updatedAt
          classOrdersId
          orderClassesId
          customer
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateClass = /* GraphQL */ `
  mutation UpdateClass(
    $input: UpdateClassInput!
    $condition: ModelClassConditionInput
  ) {
    updateClass(input: $input, condition: $condition) {
      id
      title
      location
      time
      image
      instructor
      price
      orders {
        items {
          id
          class_id
          order_id
          createdAt
          updatedAt
          classOrdersId
          orderClassesId
          customer
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteClass = /* GraphQL */ `
  mutation DeleteClass(
    $input: DeleteClassInput!
    $condition: ModelClassConditionInput
  ) {
    deleteClass(input: $input, condition: $condition) {
      id
      title
      location
      time
      image
      instructor
      price
      orders {
        items {
          id
          class_id
          order_id
          createdAt
          updatedAt
          classOrdersId
          orderClassesId
          customer
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createClassOrder = /* GraphQL */ `
  mutation CreateClassOrder(
    $input: CreateClassOrderInput!
    $condition: ModelClassOrderConditionInput
  ) {
    createClassOrder(input: $input, condition: $condition) {
      id
      class_id
      order_id
      class {
        id
        title
        location
        time
        image
        instructor
        price
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      order {
        id
        user
        date
        total
        classes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        customer
        __typename
      }
      createdAt
      updatedAt
      classOrdersId
      orderClassesId
      customer
      __typename
    }
  }
`;
export const updateClassOrder = /* GraphQL */ `
  mutation UpdateClassOrder(
    $input: UpdateClassOrderInput!
    $condition: ModelClassOrderConditionInput
  ) {
    updateClassOrder(input: $input, condition: $condition) {
      id
      class_id
      order_id
      class {
        id
        title
        location
        time
        image
        instructor
        price
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      order {
        id
        user
        date
        total
        classes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        customer
        __typename
      }
      createdAt
      updatedAt
      classOrdersId
      orderClassesId
      customer
      __typename
    }
  }
`;
export const deleteClassOrder = /* GraphQL */ `
  mutation DeleteClassOrder(
    $input: DeleteClassOrderInput!
    $condition: ModelClassOrderConditionInput
  ) {
    deleteClassOrder(input: $input, condition: $condition) {
      id
      class_id
      order_id
      class {
        id
        title
        location
        time
        image
        instructor
        price
        orders {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      order {
        id
        user
        date
        total
        classes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        customer
        __typename
      }
      createdAt
      updatedAt
      classOrdersId
      orderClassesId
      customer
      __typename
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      classes {
        items {
          id
          class_id
          order_id
          createdAt
          updatedAt
          classOrdersId
          orderClassesId
          customer
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      customer
      __typename
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      classes {
        items {
          id
          class_id
          order_id
          createdAt
          updatedAt
          classOrdersId
          orderClassesId
          customer
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      customer
      __typename
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      classes {
        items {
          id
          class_id
          order_id
          createdAt
          updatedAt
          classOrdersId
          orderClassesId
          customer
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      customer
      __typename
    }
  }
`;
