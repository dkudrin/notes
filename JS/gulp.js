npm i gulpjs/gulp#4.0 -D

В pakcage.json прописываем локальный галп, чтобы не ставить его глобально

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "gulp": "./node_modules/.bin/gulp"
  },
  
 Запускаем через 
 npm run gulp