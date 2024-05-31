
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum PaymentStatus {
    PAID = "PAID",
    UNPAID = "UNPAID"
}

export class CreateCategoryInput {
    name: string;
}

export class UpdateCategoryInput {
    name: string;
}

export class CreateProductInput {
    name: string;
    description?: Nullable<string>;
    price: number;
}

export class UpdateProductInput {
    id: number;
}

export class CreateOrderInput {
    userId: string;
    productId: number;
    quantity: number;
    discount: number;
}

export class UpdatePaymentInput {
    id: string;
    statusTransaction: PaymentStatus;
}

export class RegisterInput {
    firstName: string;
    lastName?: Nullable<string>;
    email: string;
}

export class UpdateUserInput {
    id: string;
    firstName: string;
    lastName?: Nullable<string>;
}

export class Category {
    id: number;
    name: string;
}

export abstract class IMutation {
    abstract createCategory(createCategoryInput: CreateCategoryInput): Category | Promise<Category>;

    abstract updateCategory(updateCategoryInput: UpdateCategoryInput): Category | Promise<Category>;

    abstract removeCategory(id: string): Category | Promise<Category>;

    abstract createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;

    abstract updateProduct(updateProductInput: UpdateProductInput): Product | Promise<Product>;

    abstract removeProduct(id: number): Product | Promise<Product>;

    abstract createOrder(createOrderInput: Nullable<CreateOrderInput>[]): Order | Promise<Order>;

    abstract updatePayment(updatePaymentInput: UpdatePaymentInput): Payment | Promise<Payment>;

    abstract register(registerInput: RegisterInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
}

export abstract class IQuery {
    abstract categories(): Category[] | Promise<Category[]>;

    abstract category(id: string): Nullable<Category> | Promise<Nullable<Category>>;

    abstract products(): Product[] | Promise<Product[]>;

    abstract product(id: number): Nullable<Product> | Promise<Nullable<Product>>;

    abstract orders(): Nullable<Order>[] | Promise<Nullable<Order>[]>;

    abstract order(id: number): Nullable<Order> | Promise<Nullable<Order>>;

    abstract orderByUser(userId: string): Nullable<Order>[] | Promise<Nullable<Order>[]>;

    abstract payment(id: string): Nullable<Payment> | Promise<Nullable<Payment>>;

    abstract meProfile(userId: string): User | Promise<User>;
}

export class Product {
    id: number;
    name: string;
    description?: Nullable<string>;
    price: number;
    slug: string;
}

export class Order {
    id?: Nullable<number>;
    user: User;
    orderNumber: string;
    orderDate?: Nullable<string>;
    payment: Payment;
}

export class Payment {
    id?: Nullable<number>;
    user: User;
    transactionNumber: string;
    total: number;
    statusTransaction?: Nullable<PaymentStatus>;
    order: Order;
}

export class User {
    id: string;
    firstName: string;
    lastName?: Nullable<string>;
    email: string;
    isActive?: Nullable<boolean>;
}

type Nullable<T> = T | null;
