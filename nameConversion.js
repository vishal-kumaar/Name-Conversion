function camelCase(text){
    result = "";
    words = text.split(" ");
    
    for (let i = 0; i < words.length; i++){
        if (i == 0){
            result += words[i].toLowerCase();
        }
        else{
            result += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
        }
    }

    return result;
}

function pascalCase(text){
    result = "";
    words = text.split(" ");

    for (let word of words){
        result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    return result;
}

function snakeCase(text){
    result = "";
    words = text.split(" ");

    for (let i = 0; i < words.length; i++){
        result += words[i].toLowerCase();
        if (i < words.length - 1){
            result += "_";
        }
    }

    return result; 
}

function screamingSnakeCase(text){
    result = "";
    words = text.split(" ");
    for (let i = 0; i < words.length; i++){
        result += words[i].toUpperCase();
        if (i < words.length - 1){
            result += "_";
        }
    }

    return result; 
}

function kebabCase(text){
    result = "";
    words = text.split(" ");
    for (let i = 0; i < words.length; i++){
        result += words[i].toLowerCase();
        if (i < words.length - 1){
            result += "-";
        }
    }

    return result; 
}

function screamingKebabCase(text){
    result = "";
    words = text.split(" ");
    for (let i = 0; i < words.length; i++){
        result += words[i].toUpperCase();
        if (i < words.length - 1){
            result += "-";
        }
    }
    
    return result; 
}

let convert_btn = document.getElementById("convert-btn");

convert_btn.addEventListener('click', () => {
    let input = document.getElementById("text").value;
    document.getElementById("camel-case").innerHTML =  camelCase(input);
    document.getElementById("pascal-case").innerHTML =  pascalCase(input);
    document.getElementById("snake-case").innerHTML =  snakeCase(input);
    document.getElementById("screaming-snake-case").innerHTML =  screamingSnakeCase(input);
    document.getElementById("kebab-case").innerHTML =  kebabCase(input);
    document.getElementById("screaming-kebab-case").innerHTML =  screamingKebabCase(input);
})