window.Yconsole = {
    log:function(v){
        console.log("%c   log > %c"+v,"color:#CD5B45;padding-left:20px;line-height:24px;background:url(http://rmain.gitee.io/yconsole/img/log.png) no-repeat left center / 16px 16px","margin-left:6px;color:#333;");
    },
    info:function(v){
        console.log("%c  info > %c"+v,"color:#5CACEE;padding-left:20px;line-height:24px;background:url(http://rmain.gitee.io/yconsole/img/info.png) no-repeat left center / 16px 16px","margin-left:6px;color:#333;");
    },
    warn:function(v){
        console.log("%c  warn > %c"+v,"color:#EE7600;padding-left:20px;line-height:24px;background:url(http://rmain.gitee.io/yconsole/img/warn.png) no-repeat left center / 16px 16px","margin-left:6px;color:#333;");
    },
    error:function(v){
        console.log("%c error > %c"+v,"color:#CD2626;padding-left:20px;line-height:24px;background:url(http://rmain.gitee.io/yconsole/img/error.png) no-repeat left center / 16px 16px","margin-left:6px;color:#333;");
    }
}