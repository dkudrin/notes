/* Устанавливаем в проект на node драйвер для работы с mysql
npm i mysql --save

Уставнавливаем сам mysql сервер на ubuntu
sudo apt-get install mysql-server

Корректируем конфиг как показано здесь http://help.ubuntu.ru/wiki/mysql
sudo nano -w /etc/mysql/my.cnf

Рестартим сервис mySQL
sudo service mysql restart

Заходим под пользователем root в CLI mysql
mysql -u root -p



Статус сервиса mysql
sudo service mysql status

ССЫЛКА НА REFERENCE
http://dev.mysql.com/doc/refman/5.7/en/
*/


/* ПОДГОТОВКА БД MYSQL на Cloud9 для переноса сайта на Wordpress  */
UPDATE mysql.user SET Password=PASSWORD('admin_pass') WHERE User='root';
FLUSH PRIVILEGES;
CREATE DATABASE db_name;
CREATE USER db_user_name@localhost IDENTIFIED BY 'db_user_pass';
GRANT ALL PRIVILEGES ON db_name.* TO db_user_name@localhost;
FLUSH PRIVILEGES;