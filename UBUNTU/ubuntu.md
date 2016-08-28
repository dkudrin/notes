# APT-GET

### Install specific package
`sudo apt-get install ttttt-10.10`

### Uninstall specific package
`sudo apt-get remove ttttt-10.10`

### Check what versions of util are avalible in apt-get repos:
`apt-cache madison postgresql`

# USERS
`http://help.ubuntu.ru/wiki/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D0%B8_%D0%B8_%D0%B3%D1%80%D1%83%D0%BF%D0%BF%D1%8B`

### View list of all ubuntu users
`sudo less /etc/passwd`

### Create new ubuntu user
`sudo useradd vasyapupkin -m`

### Set new password to ubuntu user
`sudo passwd vasyapupkin`

### Add user to sudoers
`sudo usermod -a -G sudo hduser`

# GOOD COMMANDS
* List all files and dirs: `ls -la`
* Create new file and place in it string: `echo "aaa" > <file_name>`
* View whole history of cli commands: `history`
* Find somefile in system: `sudo find / -name 'apache2.conf'`
* Find replace article: `https://help.ubuntu.com/community/find`
* Show all env vars: `printenv`
* Set EXISTING env var: `<ENV_VAR_NAME>=<value>`
* Create NEW env var: `<SHELL_VAR_NAME>=<value>` `export <SHELL_VAR_NAME>`; or `export <ENV_VAR_NAME>=<value>`
* Create Symlink: `ln -s <file_name> <link_name>`

RUNNING SERVICES: service --status-all

SHOW OPEN PORTS: sudo netstat -tulpn
SHOW Who is listening on which port: netstat -an | grep LISTEN
OPEN PORT 8080: sudo iptables -I INPUT -p tcp -m tcp --dport 8080 -j ACCEPT


Для импорта записей разрешите трансфер зоны (Allow-transfer) нашему серверу zen.nic.ru (194.85.61.60)

Если DNS-сервер откажет в трансфере зоны, будут импортированы только стандартные записи.

