function add(id){
    document.getElementById(id).innerText++;
}

function remove(id){
    let el = document.getElementById(id);
    if(el.innerText > 0) el.innerText--;
}

function calcular(){

    let total = 0;
    let resumo = "";

    let pacote = document.getElementById("pacote").value;
    let comentario = document.getElementById("comentario").value;

    if(comentario.trim() === ""){
        alert("Descreva seu evento!");
        return;
    }

    function calcularPar(qtd, valorPar){
        return (qtd / 2) * valorPar;
    }

    function addItem(nome, qtd, valor){
        if(qtd > 0){
            resumo += `${nome}: ${qtd} unidade(s)\n`;
            total += valor;
        }
    }

    if(pacote != "nenhum"){
        total += Number(pacote);
        resumo += "Pacote selecionado\n";
    } else {

        let goldQtd = Number(gold.innerText);
        let blgQtd = Number(blg.innerText);
        let eletroQtd = Number(eletro.innerText);
        let qscQtd = Number(qsc.innerText);
        let rsfQtd = Number(rsf.innerText);
        let caixaxQtd = Number(caixax.innerText);

        addItem("GOLD", goldQtd, calcularPar(goldQtd, 250));
        addItem("BLG", blgQtd, calcularPar(blgQtd, 250));
        addItem("ELETROVOICE", eletroQtd, calcularPar(eletroQtd, 300));
        addItem("QSC", qscQtd, calcularPar(qscQtd, 400));
        addItem("RSF", rsfQtd, calcularPar(rsfQtd, 400));
        addItem("CAIXA X", caixaxQtd, calcularPar(caixaxQtd, 550));

        let totalCaixas = goldQtd + blgQtd + eletroQtd + qscQtd + rsfQtd + caixaxQtd;

        let subQtd = Number(sub.innerText);
        let valorSub = totalCaixas > 0 ? 150 : 250;

        addItem("Sub Grave", subQtd, calcularPar(subQtd, valorSub));

        let pedestalQtd = Number(pedestal.innerText);
        addItem("Pedestal", pedestalQtd, pedestalQtd * 8);

        let retornoQtd = Number(retorno.innerText);
        addItem("Retorno", retornoQtd, retornoQtd * 5);

        let mesaValor = Number(document.getElementById("mesa").value);
        total += mesaValor;
        resumo += "Mesa de som selecionada\n";
    }

    if(total === 0){
        alert("Selecione pelo menos um item!");
        return;
    }

    document.getElementById("total").innerText = "R$ " + total.toFixed(2);
    document.getElementById("resumo").innerText = resumo;
}

function enviarWhatsApp(){

    let resumo = document.getElementById("resumo").innerText;
    let total = document.getElementById("total").innerText;
    let comentario = document.getElementById("comentario").value;

    if(resumo.trim() === ""){
        alert("Calcule o orçamento primeiro!");
        return;
    }

    let msg = `Orçamento Barata Som:

${comentario}

Itens:
${resumo}

Total: ${total}`;

    let url = `https://wa.me/5511997064744?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");
}

function selecionarLine(){
    alert("Sistema Line apenas via WhatsApp.");
}

function voltarPagina(){
    window.history.back();
}

const sections = document.querySelectorAll(".fade-in");

function animarScroll() {
    const alturaTela = window.innerHeight;

    sections.forEach(sec => {
        const topo = sec.getBoundingClientRect().top;

        // ANIMAÇÃO
        if (topo < alturaTela - 100) {
            sec.classList.add("visible");
        }

        // DESTAQUE
        if (topo < alturaTela / 2 && topo > -alturaTela / 2) {
            sec.classList.add("ativa");
        } else {
            sec.classList.remove("ativa");
        }
    });
}

window.addEventListener("scroll", animarScroll);
animarScroll();

function toggleCard(card){

    const todos = document.querySelectorAll(".card");

    // fecha todos
    todos.forEach(c => {
        if(c !== card){
            c.classList.remove("active");
        }
    });

    // alterna o clicado
    card.classList.toggle("active");
}