create table inventorydetails(
product_id int,
brand varchar(200),
line varchar(200),
item_name varchar(200),
item_type varchar(200),
item_sku int,
notes varchar(200),
sale_price money,
image_url_1 varchar(500),
image_url_2 varchar(500)
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
