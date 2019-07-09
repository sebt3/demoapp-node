-- create a new database
CREATE DATABASE demo_node_app;

-- create a user
create user 'demo'@'%' identified by 'demo';
grant ALL on demo_node_app.* to demo@'%';
create user 'demo'@'localhost' identified by 'demo';
grant ALL on demo_node_app.* to demo@'localhost';
flush privileges;


-- to use database
use demo_node_app;

-- creating a new table
CREATE TABLE customer (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone VARCHAR(15)
);

