//////////////// Вывод JSON в IE 6 ///////////////////// 
  let JSON = {}
  JSON.stringify = function (obj) {
    let t = typeof (obj);
    if (t != "object" || obj === null) {
      if (t == "string") obj = '"'+obj+'"';
      return String(obj);
    }
    else {
      let arr = (obj && obj.constructor == Array);
      let json = Object.keys(obj).map((n) => {
        let v = obj[n]
        let t = typeof(v)
        if (t == "string") {
          v = '"'+v+'"'
        } else if (t == "object" && v !== null) {
          v = JSON.stringify(v)
        }
        return ((arr ? "" : '"' + n + '":') + String(v))
      })
      return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
    }
  };

  let fso = new ActiveXObject("Scripting.FileSystemObject")
  let FileObject = fso.OpenTextFile("C:\\resJSON.txt", 8, true,-1) // 8=append, true=create if not exist, 0 = ASCII
  FileObject.write(JSON.stringify(res));
  FileObject.close()