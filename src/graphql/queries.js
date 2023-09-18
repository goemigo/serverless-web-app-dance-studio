/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getClass = /* GraphQL */ `
  query GetClass($id: ID!) {
    getClass(id: $id) {
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
export const listClasses = /* GraphQL */ `
  query ListClasses(
    $filter: ModelClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const classOrderByClassOrder = /* GraphQL */ `
  query ClassOrderByClassOrder(
    $id: ID!
    $class_idOrder_id: ModelClassOrderByClassOrderCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelClassOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    classOrderByClassOrder(
      id: $id
      class_idOrder_id: $class_idOrder_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
          __typename
        }
        order {
          id
          user
          date
          total
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
      nextToken
      __typename
    }
  }
`;
export const classOrderByOrder = /* GraphQL */ `
  query ClassOrderByOrder(
    $id: ID!
    $order_idClass_id: ModelClassOrderByOrderCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelClassOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    classOrderByOrder(
      id: $id
      order_idClass_id: $order_idClass_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
          __typename
        }
        order {
          id
          user
          date
          total
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
      nextToken
      __typename
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
