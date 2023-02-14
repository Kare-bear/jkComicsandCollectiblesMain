create table inventoryDetails(
ProductIndex int,
ProductName varchar(200),
ProductNotes varchar(200),
TFClass varchar(200),
TFSubline varchar(200),
PricePaid int,
ProductImageURL varchar(200)
);


create table users(
	UserID int,
	DateCreated varchar,
	FirstName varchar,
	LastName varchar,
	EmailAddress varchar,
	UserName varchar,
	Passkey varchar,
	ShippingAddress varchar,
	BillingAddress varchar
);
