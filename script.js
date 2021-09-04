function book(title,author,totPages,haveRead){
    this.title=title;
    this.author=author;
    this.pages=totPages;
    this.haveRead=haveRead;
    this.info=function (){
        let str= this.title+" By "+this.author+", "+this.totPages+" pages"+", ";
        if(this.haveRead){
            str+="have read"
        }
        else{
            str+="not read yet"
        }
        return str;
    }
}

let book1= new book('oog choog','Dan',194,true);
