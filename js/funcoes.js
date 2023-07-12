// API Marvel
const chavePrivada = "f65e770a0cf29bfbcbd4744690ba49a66a0d87f2";
const chavePublica = "492d5b2bb110ba99c25609c4048c8cac";
const limiteItens = 100
var data = ''

// Função hash md5
var md5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

// Função para criar o hash e realizar requests
function hashRequest(timestamp) {

    const timeChaves = timestamp + chavePrivada + chavePublica;
    const hash = md5(timeChaves);
    return hash;
}

// Função que realiza request na API e retorna a lista de personagens
async function getListaPersonagens(offset, name_busca) {
    // if(offset == undefined ? 0 : offset)
    const timestamp = Date.now().toString();
    const hash = hashRequest(timestamp);
    var apiMarvel

    if(name_busca == undefined || name_busca == ''){
        apiMarvel = "https://gateway.marvel.com/v1/public/characters?limit=4&offset="+offset+"&ts="+timestamp+"&apikey="+chavePublica+"&hash="+hash;
    }
    else{
        apiMarvel = "https://gateway.marvel.com:443/v1/public/characters?name="+name_busca+"&limit=4&offset=0&apikey="+chavePublica+"&hash="+hash+"&ts="+timestamp
    }

    var requestPersonagens = await new XMLHttpRequest();
    requestPersonagens.onreadystatechange = await function() {
        if (this.readyState == 4 && this.status == 200) {
            data = JSON.parse(this.responseText);
            montaTabela(data.data)
        }
        else{
            return false
        }
    };

    requestPersonagens.open("GET", apiMarvel, true);
    requestPersonagens.send();
    
}

function montaTabela(personagens){

    document.querySelector('#table-personagens tbody').innerHTML = "";

    (personagens.results).map(element => {
        document.querySelector('#table-personagens tbody').insertAdjacentHTML("beforeend",'\
        <tr onclick="selecionaPersonagem('+ element.id +')">\
        <td> <div class="img-span"> <div> <img src="'+ element.thumbnail.path + '.' + element.thumbnail.extension + '"> </div> <div> <span>' + element.name + '</span> </div>  </div> </td>\
        <td id="series-p'+ element.id +'">' +'</td>\
        <td id="eventos-p'+ element.id +'">' +'</td>\
        </tr>\
        ')
    });
    
    // Insere as séries do personagem
    (personagens.results).forEach(element => {
        (element.series.items).slice(0,3).forEach(element_serie => {
            document.querySelector('#series-p'+ element.id).insertAdjacentHTML("beforeend",
            '<p>' + element_serie.name + '</p>')
        })
    });
    
    // Insere os eventos do personagem
    (personagens.results).forEach(element => {
        (element.events.items).slice(0,3).forEach(element_event => {
            document.querySelector('#eventos-p'+ element.id).insertAdjacentHTML("beforeend",
            '<p>' + element_event.name + '</p>')
        })
    });
}

let perPage = 4
const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(limiteItens / perPage),
    maxVisibleButtons: 5
}

const html = {
    get(element){
        return document.querySelector(element)
    }
}

const controls = {
    next(){
        state.page++

        const lastPage = state.page > state.totalPage
        if(lastPage){
            state.page--
        }
    },
    prev(){
        state.page--

        if(state.page < 1){
            state.page++
        }
    },
    goTo(page){
        
        if(page < 1){
            state.page = 1
        }
        state.page = +page

        if(page > state.totalPage){
            state.page = state.totalPage
        }
    },
    createListeners(){
        html.get('.first').addEventListener('click', () =>  {
            controls.goTo(1)
            update()
        }) 
        html.get('.last').addEventListener('click', () =>  {
            controls.goTo(state.totalPage)
            update()
        }) 
        html.get('.next').addEventListener('click', () =>  {
            controls.next()
            update()
        }) 
        html.get('.prev').addEventListener('click', () =>  {
            controls.prev()
            update()
        }) 
    }
}

const list = {
    update(){
        html.get('#table-personagens tbody').innerHTML = ""
        
        let page = state.page - 1

        getListaPersonagens(page * perPage, '')
    }
}

const buttons = {
    element: html.get('.controls .numbers'),
    create(number){
        const button = document.createElement('div')

        button.innerHTML = number

        if(state.page == number){
            button.classList.add('active')
        }

        button.addEventListener('click', (event) => {
            const page = event.target.innerText

            controls.goTo(page)
            update()
        })
        html.get('.controls .numbers').appendChild(button)
    },
    update(){
        html.get('.controls .numbers').innerHTML = ""
        const {maxLeft, maxRight} = buttons.calculateMaxVisible()

        for(let page = maxLeft; page <= maxRight; page++){
            buttons.create(page)
        }
    },
    calculateMaxVisible(){
        let maxLeft = (state.page - Math.floor(state.maxVisibleButtons / 2))
        let maxRight = (state.page + Math.floor(state.maxVisibleButtons / 2))

        if(maxLeft < 1) {
            maxLeft = 1
            maxRight = state.maxVisibleButtons
        }

        if(maxRight > state.totalPage) {
            maxLeft = state.totalPage - (state.maxVisibleButtons - 1)
            maxRight = state.totalPage

            if(maxLeft < 1){
                maxLeft = 1
            }
        }

        return {maxLeft, maxRight}
    }
}

function update(){
    buttons.update()
    list.update()
}

async function init(){
    await getListaPersonagens()
    update()
    controls.createListeners()
}

init()

document.getElementById("btn-search").addEventListener('click', function() {
    var busca = document.getElementById("input-busca").value.toLowerCase();

    getListaPersonagens(state.page - 1 * perPage, busca)
})

async function selecionaPersonagem(id_personagem){
    const timestamp = Date.now().toString();
    const hash = hashRequest(timestamp);
    var apiMarvel = "https://gateway.marvel.com:443/v1/public/characters/"+id_personagem+"?&apikey="+chavePublica+"&hash="+hash+"&ts="+timestamp
    let retorno
    var requestPersonagem = await new XMLHttpRequest();
    requestPersonagem.onreadystatechange = await function() {
        if (this.readyState == 4 && this.status == 200) {
            retorno = JSON.parse(this.responseText);
            montaPagina(retorno.data)
        }
        else{
            return false
        }
    };

    requestPersonagem.open("GET", apiMarvel, true);
    requestPersonagem.send();

    document.querySelector('#table-personagens tbody').innerHTML = "";

}

function montaPagina(personagem) {
    document.querySelector('#table-personagem tbody').innerHTML = "";
    
    (personagem.results).map(element => {
        document.querySelector('#table-personagem tbody').insertAdjacentHTML("beforeend",'\
        <tr>\
        <td colspan="3"> <div class="img-span"> <div> <img src="'+ element.thumbnail.path + '.' + element.thumbnail.extension + '"> </div> <div class="div-span"> <span>' + element.name + '</span> </div>  </div> </td>\
        </tr>\
        <tr>\
        <td id="series-p'+ element.id +'"> <span class="titulo"> Séries </span>' +'</td>\
        <td id="eventos-p'+ element.id +'"> <span class="titulo"> Eventos </span>' +'</td>\
        <td id="historias-p'+ element.id +'"> <span class="titulo"> Histórias em quadrinhos </span>' +'</td>\
        </tr>\
        ')
    });

    document.querySelector('.detalhes').classList.add('active');
    document.querySelector('.conteudo').classList.add('desactive');
    document.querySelector('#paginate').classList.add('desactive');
    
    // Insere as séries do personagem
    (personagem.results).map(element => {
        (element.series.items).map(element_serie => {
            document.querySelector('#series-p'+ element.id).insertAdjacentHTML("beforeend",
            '<a href="'+ element_serie.resourceURI+ '  "target="_blank"> <p>' +  element_serie.name + '</p> </a>')
        })
    });
    
    // Insere os eventos do personagem
    (personagem.results).map(element => {
        (element.events.items).map(element_event => {
            document.querySelector('#eventos-p'+ element.id).insertAdjacentHTML("beforeend",
            '<a href="'+ element_event.resourceURI + '" target="_blank"> <p>' +  element_event.name + '</p> </a>')
        })
    });

    // Insere as histórias em quadrinhos do personagem
    (personagem.results).map(element => {
        (element.comics.items).map(element_comic => {
            document.querySelector('#historias-p'+ element.id).insertAdjacentHTML("beforeend",
            '<a href="'+ element_comic.resourceURI + ' "target="_blank"> <p>' +  element_comic.name + '</p> </a>')
        })
    });
}