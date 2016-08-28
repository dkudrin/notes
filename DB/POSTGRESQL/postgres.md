# Postgresql
* Add new deb repository to apt-get: `sudo touch /etc/apt/sources.list.d/pgdg.list`
* Add lines to file: 
* `sudo vim /etc/apt/sources.list.d/pgdg.list`
* `deb http://apt.postgresql.org/pub/repos/apt/ trusty-pgdg main`
* Import the repository signing key, and update the package lists:
* `wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | \`
* `sudo apt-key add -`
* `sudo apt-get update`
* Install: `sudo apt-get install postgresql-9.5`

### DO THIS!!! Set new password to ubuntu user
`sudo passwd postgres`

* Add possibility of incoming connections: `sudo vim /etc/postgresql/9.5/main/postgresql.conf`
* Change line to: `listen_addresses = 'localhost'`
* Check post must be: `5432`

* Check current Server version: `pg_config --version`
* Check current Client version: `psql --version`
* Start service: `sudo service postgresql start`

### Enter to psql
`su - postgres`

`psql`

### Change password of user postgres
`ALTER USER postgres PASSWORD 'newPassword';`

### To exit from user postgres to normal user
`exit`

* Change autontification methode for user postgres: `sudo vim /etc/postgresql/9.5/main/pg_hba.conf`
* Change line to: `local all postgres md5`
* Restart service: `sudo service postgresql restart`

###################################################################################################
Restore db from tar

`sudo time pg_restore --dbname=cleaner --jobs=4 dev/delorean-full.tar -U postgres -W --role=postgres`

###################################################################################################

### List DBs and tables

* List all DBs: `\l`
* What db am I conneted: `\conninfo`
* Connect to specific DB: `\connect <dbname>`
* List all tables in DB: `\dt`



### Output query result to CSV file
Output file must be placed in root dir (for example tmp)
`COPY (SELECT * FROM public."Devices" LIMIT 10) TO '/tmp/query.csv' (format csv, delimiter ';');`


* Create new Schema
`CREATE SCHEMA <shemaname>;`
* Create new user
`CREATE USER xxx PASSWORD 'yyy';`
* Change existing user
`ALTER USER <username> with encrypted password '<password>';`

`ALTER USER postgres with encrypted password 'your_password';`

* Grant privileges to create shema to user
`GRANT ALL ON SCHEMA <shemaname> TO <username>;`
* Grant privileges to insert lines in tables to user
`GRANT ALL ON ALL TABLES IN SCHEMA <shemaname> TO <username>;`

## DROP or CREATE DB

* Drop DB
`DROP DATABASE <dbname>`
* Create DB
`CREATE DATABASE <dbname>;`

# DUMPs

* Restore DB from .tar
`pg_restore -c -i -U postgres -d <dbname> -v "/tmp/<filename>.tar" -W`
* Create SQL dump file
`pg_dump delorean > /tmp/<filename>.sql`



# SQL QUERIES
### Create new table
`CREATE TABLE test.test (coltest varchar(20));`

### Insert new line
`INSERT INTO <table_name> VALUES ('UA502', 'Bananas', 105, '1971-07-13', 'Comedy', '82 minutes');`

### Update lines
`UPDATE <table_name> SET <field_name> = 'Dramatic' WHERE <field_name> = 'Drama';`

### Delete lines
`DELETE FROM films WHERE kind <> 'Musical';`

### Delete ALL lines in table
`DELETE FROM films`

### Selects
`SELECT * FROM public."Devices", public."Drivers" WHERE "Devices".id = "Drivers".id;`

### Joins
`SELECT * FROM people AS mother JOIN people AS child ON mother.id = child.mother_id;`
`SELECT * FROM projects INNER JOIN users ON projects.userId = users.id AND users.active = true'`




[node] sequelize-auto -h <host> -d <database> -u <user> -x [password] -p [port]  --dialect [dialect] -c [/path/to/config] -o [/path/to/models] -t [tableName]

Options:
  -h, --host        IP/Hostname for the database.   [required]
  -d, --database    Database name.                  [required]
  -u, --user        Username for database.
  -x, --pass        Password for database.
  -p, --port        Port number for database.
  -c, --config      JSON file for Sequelize's constructor "options" flag object as defined here: https://sequelize.readthedocs.org/en/latest/api/sequelize/
  -o, --output      What directory to place the models.
  -e, --dialect     The dialect/engine that you're using: postgres, mysql, sqlite
  -a, --additional  Path to a json file containing model definitions (for all tables) which are to be defined within a model's configuration parameter. For more info: https://sequelize.readthedocs.org/en/latest/docs/models-definition/#configuration
  -t, --tables      Comma-separated names of tables to import
  
  sequelize-auto -h localhost -d delorean -u postgres -x perliament -p 5432 --dialect postgres -t Shirem




  
SELECT pg_terminate_backend(3969) FROM pg_stat_activity WHERE pg_stat_activity.datname = 'TARGET_DB' AND pid <> pg_backend_pid();



* Список всех конфигураций полнотекстового поиска:
\dF

* Посомтреть какие словари названчены на какой из типов распарсенных слов:
\dF+ название конфигурации

* ! Список словарей полнотекстового поиска:
\dFd

* ! Список парсеров
\dFp


Посмотреть список всех словарей на сервере Postgres:
SELECT dictname FROM pg_catalog.pg_ts_dict;




=============================== Создание словаря синонимов ==============================

Создать фаил drp_synonym.syn с данными в формате:
examplesyn xmplsyn

Разместить тут:
/usr/share/postgresql/9.5/tsearch_data/drp_synonym.syn

Создать словарь синонимов по шаблону synonym:
CREATE TEXT SEARCH DICTIONARY drp_synonym ( TEMPLATE = synonym, SYNONYMS = drp_synonym );

Создать поисковую конфигурацию:
CREATE TEXT SEARCH CONFIGURATION drp_simple ( PARSER = pg_catalog.default );

Создать словарь simple для отбрасывания стоп-слов:
CREATE TEXT SEARCH DICTIONARY drp_simple_stop ( TEMPLATE = pg_catalog.simple, STOPWORDS = drp_stopwords );

Привязать распознание asciiword и word к словарям drp_synonym, simple:
ALTER TEXT SEARCH CONFIGURATION drp_simple ADD MAPPING FOR asciiword WITH drp_synonym, drp_simple_stop;
ALTER TEXT SEARCH CONFIGURATION drp_simple ADD MAPPING FOR word WITH drp_synonym, drp_simple_stop;

Проверка:
SELECT * FROM ts_debug('drp_simple','examplesyn'); // Вернет xmplsyn

Обновление словаря после изменения файла с синонимами:
ALTER TEXT SEARCH DICTIONARY drp_synonym ( SYNONYMS = drp_synonym );

=========================================================================================






================================= Работа с функциями и bash из Postgres ==============================
const createDictFiles = async () => {
  await sequelize.query(`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    CREATE OR REPLACE FUNCTION exec(cmd text) RETURNS text AS $$
      DECLARE
        output text;
        tmp text;
      BEGIN
        cmd := quote_literal(cmd);
        tmp := quote_ident(uuid_generate_v4()::text);

        EXECUTE 'CREATE TEMP TABLE ' || tmp || ' (output text)';
        EXECUTE 'COPY ' || tmp || ' FROM PROGRAM ' || cmd;
        EXECUTE 'SELECT output FROM ' || tmp INTO output;
        EXECUTE 'DROP TABLE ' || tmp;

        RETURN output;
      END;
    $$ LANGUAGE plpgsql VOLATILE;


    CREATE OR REPLACE FUNCTION build_dicts_string() RETURNS text AS $$
      DECLARE
        exec_string text;
      BEGIN
        exec_string := 'touch ' || exec('pg_config --sharedir') || '/tsearch_data/drp_stopwords.stop';
        SELECT exec(exec_string);
        RETURN exec_string;
      END;
    $$ LANGUAGE plpgsql VOLATILE;

  `)
}
=========================================================================================================





====================== Убить всех пользователей кроме меня и клонировтаь БД =============================
Убить всех пользователей кроме меня

SELECT 
    pg_terminate_backend(pid) 
FROM 
    pg_stat_activity 
WHERE 
    -- don't kill my own connection!
    pid <> pg_backend_pid()
    -- don't kill the connections to other databases
    AND datname = 'deloreantest'
    ;

Создать бд на оснве шаблона (склонировать)
CREATE DATABASE delorean WITH TEMPLATE deloreantest OWNER postgres;

==========================================================================================================