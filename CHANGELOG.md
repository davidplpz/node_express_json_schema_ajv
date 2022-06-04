# main

- Se añaden los rutas signup y pay con un primer ejemplo de validación del body.

## 01_add_user_data

- Se añaden datos extra al esquema de signup

## 02_add_additional_properties

- Se añade al campo de la dirección de user_data un nuevo atributo, no queremos datos extras.

## 03_ref_schemas

- Se añade un nuevo schema para lo que podria ser un producto y al momento de llamar a /pay, se comprueba que se envie el producto asociado a ese pago
