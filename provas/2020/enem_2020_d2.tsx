import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2020_D2: QuizQuestion[] = [
  {
    id: 91,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Por qual motivo ocorre a eletrização ilustrada na tirinha?`,
    images: ['/enem/2020/images/enem_2020_d2_q91.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Troca de átomos entre a calça e os pelos do gato.` },
      { id: 'B', type: 'text', value: `Diminuição do número de prótons nos pelos do gato.` },
      { id: 'C', type: 'text', value: `Criação de novas partículas eletrizadas nos pelos do gato.` },
      { id: 'D', type: 'text', value: `Movimentação de elétrons entre a calça e os pelos do gato.` },
      { id: 'E', type: 'text', value: `Repulsão entre partículas elétricas da calça e dos pelos do gato.` },
    ],
    correct: 'D',
    explanation: `A charge apresenta a eletrização por atrito, o que significa que ao atritar o pelo do gato na calça da pessoa, cargas se movimentam de um corpo para o outro (eletronegatividade). Sabemos que os prótons estão dentro do núcleo, portanto não se movem. Apenas os elétrons, livres na eletrosfera, que passam de um corpo pro outro.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 92,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `A enorme quantidade de resíduos gerados pelo consumo crescente da sociedade traz para a humanidade 
uma preocupação socioambiental, em especial pela quantidade de lixo produzido. Além da reciclagem e do 
reúso, pode-se melhorar ainda mais a qualidade de vida, substituindo polímeros convencionais por polímeros 
biodegradáveis. 
Esses polímeros têm grandes vantagens socioambientais em relação aos convencionais porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `não são tóxicos.` },
      { id: 'B', type: 'text', value: `não precisam ser reciclados.` },
      { id: 'C', type: 'text', value: `não causam poluição ambiental quando descartados.` },
      { id: 'D', type: 'text', value: `são degradados em um tempo bastante menor que os convencionais.` },
      { id: 'E', type: 'text', value: `apresentam propriedades mecânicas semelhantes aos convencionais.` },
    ],
    correct: 'D',
    explanation: `Questão sobre polímeros biodegradáveis e seus impactos ao meio ambiente. O descarte de ambos de forma inadequada ao meio ambiente é prejudicial. Porém um polímero biodegradável apresenta a característica de serem consumidos mais rapidamente por microrganismos. Em contrapartida, os polímeros convencionais permanecem mais tempo no meio ambiente.`,
    subject: ['bio'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 93,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Uma pessoa percebe que a bateria de seu veículo fica descarregada após cinco dias sem uso. No início
desse período, a bateria funcionava normalmente e estava com o total de sua carga nominal, de 60 Ah. Pensando
na possibilidade de haver uma corrente de fuga, que se estabelece mesmo com os dispositivos elétricos do
veículo desligados, ele associa um amperímetro digital ao circuito do veículo.
Qual dos esquemas indica a maneira com que o amperímetro deve ser ligado e a leitura por ele realizada?`,
    images: ['/enem/2020/images/enem_2020_d2_q93_A.jpg', '/enem/2020/images/enem_2020_d2_q93_B.jpg', '/enem/2020/images/enem_2020_d2_q93_C.jpg', '/enem/2020/images/enem_2020_d2_q93_D.jpg', '/enem/2020/images/enem_2020_d2_q93_E.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'B',
    explanation: `A questão aborda o funcionamento de uma bateria durante o período de 5 dias (lembre-se de converter a tempo para horas para concordar com a unidade de carga). No início desse período, a bateria apresentava uma calor de carga igual a 60Ah. Com isso, podemos calcular a corrente que será encontrada no amperímetro. &nbsp; i = Q/ Δt i = 60/5.24 = 60/120 = 0,5 A &nbsp; Agora que sabemos o valor do amperímetro, basta saber como ligar o aparelho. Para que seja possível medir a corrente que passará pelo circuito do carro, basta ligar em paralelo. &nbsp;`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 94,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Um microempresário do ramo de cosméticos utiliza óleos essenciais e quer produzir um creme com fragrância
de rosas. O principal componente do óleo de rosas tem cadeia poli-insaturada e hidroxila em carbono terminal. O
catálogo dos óleos essenciais apresenta, para escolha da essência, estas estruturas químicas:
Qual substância o empresário deverá utilizar?`,
    images: ['/enem/2020/images/enem_2020_d2_q94.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `5` },

    ],
    correct: 'A',
    explanation: `Questão que citava as características de uma molécula orgânica presente em um óleo essencial. A molécula escolhida deveria apresentar cadeia poli-insaturada e com hidroxila (OH) terminal. Dentre as opções, a única que satisfazia as características citadas acima era a molécula da alternativa A. Essa molécula apresenta duas ligações duplas e uma hidroxila ligada a um carbono primário, o que caracteriza uma hidroxila terminal.`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 95,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `A fragmentação dos hábitats é caracterizada pela 
formação de ilhas da paisagem original, circundadas 
por áreas transformadas. Esse tipo de interferência no 
ambiente ameaça a biodiversidade. Imagine que uma 
população de onças foi isolada em uma mata pequena. 
Elas se extinguiriam mesmo sem terem sido abatidas. 
Diversos componentes da ilha de hábitat, como o 
tamanho, a heterogeneidade, o seu entorno, a sua 
conectividade e o efeito de borda são determinantes para 
a persistência ou não das espécies originais. 
Uma medida que auxilia na conservação da biodiversidade 
nas ilhas mencionadas no texto compreende a`,
    alternatives: [
      { id: 'A', type: 'text', value: `formação de micro-hábitats.` },
      { id: 'B', type: 'text', value: `ampliação do efeito de borda.` },
      { id: 'C', type: 'text', value: `construção de corredores ecológicos.` },
      { id: 'D', type: 'text', value: `promoção da sucessão ecológica.` },
      { id: 'E', type: 'text', value: `introdução de novas espécies de animais e vegetais.` },
    ],
    correct: 'C',
    explanation: `O uso de corredores ecológicos entre fragmentos florestais permite o trânsito de indivíduos entre os diversos fragmentos. Dessa forma, mantém-se uma elevada variabilidade genética reduzindo a ação da deriva genética (perda de variabilidade por acaso, mais comum em populações pequenas). Populações isoladas tendem a perder variabilidade genética, já que os cruzamentos sempre ocorrem entre indivíduos de parentesco próximo. Além disso, em habitats restritos (como matas pequenas) podem sofrer com competição intraespecífica, e a presença de corredores também permite a migração de indivíduos entre diferentes localidades.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 96,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `A sacarase (ou invertase) é uma enzima que atua no 
intestino humano hidrolisando o dissacarídeo sacarose 
nos monossacarídeos glicose e frutose. Em um estudo 
cinético da reação de hidrólise da sacarose (C 12 H 22 O 11 ), 
foram dissolvidos 171 g de sacarose em 500 mL de 
água. Observou-se que, a cada 100 minutos de reação, 
a concentração de sacarose foi reduzida à metade, 
qualquer que fosse o momento escolhido como tempo 
inicial. As massas molares dos elementos H, C e O são 
iguais a 1, 12 e 16 g mol −1 , respectivamente. 
Qual é a concentração de sacarose depois de 400 minutos 
do início da reação de hidrólise?`,
    alternatives: [
      { id: 'A', type: 'text', value: `2,50 × 10⁻³ mol L −1` },
      { id: 'B', type: 'text', value: `6,25 × 10⁻² mol L −1` },
      { id: 'C', type: 'text', value: `1,25 × 10⁻¹ mol L −1` },
      { id: 'D', type: 'text', value: `2,50 × 10⁻¹ mol L −1` },
      { id: 'E', type: 'text', value: `4,27 × 10⁻¹ mol L −1` },
    ],
    correct: 'B',
    explanation: `Questão de unidade de concentração (mol/L). Tendo o candidato que calcular a concentração de C 12 H 22 O 11 em 500 ml de uma solução contendo 171g dessa espécie. Calculando concentração mol/L: 171 g &#8212;&#8211; 500 mL X &#8212;&#8211; 1000 mL X = 342 g/L M = 342/342 = 1 mol/L A concentração obtida foi 1 mol/L e o texto dizia que essa concentração caía à metade a cada 100 min. Logo, após 400 min, que era a pergunta, temos: 1 mol → 0,5 mol → 0,25 mol → 0,125 mol → 0,0625 mol Sendo assim, a concentração ficava em 6,25.10 -2 mol/L.`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 97,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Grandes reservatórios de óleo leve de melhor 
qualidade e que produz petróleo mais fino foram 
descobertos 
no 
litoral 
brasileiro 
numa 
camada 
denominada pré-sal, formada há 150 milhões de anos. 
A utilização desse recurso energético acarreta para o 
ambiente um desequilíbrio no ciclo do`,
    alternatives: [
      { id: 'A', type: 'text', value: `nitrogênio, 
devido 
à 
nitrificação 
ambiental 
transformando amônia em nitrito.` },
      { id: 'B', type: 'text', value: `nitrogênio, devido ao aumento dos compostos 
nitrogenados no ambiente terrestre.` },
      { id: 'C', type: 'text', value: `carbono, devido ao aumento dos carbonatos 
dissolvidos no ambiente marinho.` },
      { id: 'D', type: 'text', value: `carbono, devido à liberação das cadeias carbônicas 
aprisionadas abaixo dos sedimentos.` },
      { id: 'E', type: 'text', value: `fósforo, devido à liberação dos fosfatos acumulados 
no ambiente marinho.` },
    ],
    correct: 'D',
    explanation: `O problema do uso do petróleo e outros combustíveis fósseis é a de disponibilizar novamente ao ciclo do carbono um carbono fóssil que estava aprisionado na forma de depósitos fósseis, aumentando a quantidade de carbono que participa diretamente do ciclo.`,
    subject: ['bio'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 98,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Em uma usina geradora de energia elétrica, seja 
através de uma queda-d’água ou através de vapor 
sob pressão, as pás do gerador são postas a girar. 
O movimento relativo de um ímã em relação a um 
conjunto de bobinas produz um fluxo magnético variável 
através delas, gerando uma diferença de potencial em 
seus terminais. Durante o funcionamento de um dos 
geradores, o operador da usina percebeu que houve um 
aumento inesperado da diferença de potencial elétrico 
nos terminais das bobinas. 
Nessa situação, o aumento do módulo da diferença de 
potencial obtida nos terminais das bobinas resulta do 
aumento do(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `intervalo de tempo em que as bobinas ficam imersas no 
campo magnético externo, por meio de uma diminuição 
de velocidade no eixo de rotação do gerador.` },
      { id: 'B', type: 'text', value: `fluxo magnético através das bobinas, por meio de 
um aumento em sua área interna exposta ao campo 
magnético aplicado.` },
      { id: 'C', type: 'text', value: `intensidade do campo magnético no qual as bobinas 
estão imersas, por meio de aplicação de campos 
magnéticos mais intensos.` },
      { id: 'D', type: 'text', value: `rapidez com que o fluxo magnético varia através das 
bobinas, por meio de um aumento em sua velocidade 
angular.` },
      { id: 'E', type: 'text', value: `resistência interna do condutor que constitui as bobinas, 
por meio de um aumento na espessura dos terminais.` },
    ],
    correct: 'D',
    explanation: `Segundo a Lei de Faraday , para que haja um aumento da ddp produzida será necessário variar o fluxo magnético no menor tempo possível. &nbsp;`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 99,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Você foi contratado para sincronizar os quatro
semáforos de uma avenida, indicados pelas letras O, A,
B e C, conforme a figura.
Os semáforos estão separados por uma distância
de 500 m. Segundo os dados estatísticos da companhia 
controladora de trânsito, um veículo, que está 
inicialmente parado no semáforo O, tipicamente parte 
com aceleração constante de 1 m s −2 até atingir a 
velocidade de 72 km h −1 e, a partir daí, prossegue com 
velocidade constante. Você deve ajustar os semáforos 
A, B e C de modo que eles mudem para a cor verde 
quando o veículo estiver a 100 m de cruzá-los, para 
que ele não tenha que reduzir a velocidade em nenhum 
momento. 
Considerando 
essas 
condições, 
aproximadamente 
quanto tempo depois da abertura do semáforo O os 
semáforos A, B e C devem abrir, respectivamente?`,
    images: ['/enem/2020/images/enem_2020_d2_q99.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `20 s, 45 s e 70 s.` },
      { id: 'B', type: 'text', value: `25 s, 50 s e 75 s.` },
      { id: 'C', type: 'text', value: `28 s, 42 s e 53 s.` },
      { id: 'D', type: 'text', value: `30 s, 55 s e 80 s.` },
      { id: 'E', type: 'text', value: `35 s, 60 s e 85 s.` },
    ],
    correct: 'D',
    explanation: `Portanto, os sinais devem abrir nos instantes: t 1 = 30s t 2 = 30 + 25 = 55s t 3 = 55 + 25 = 80s`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 100,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Nos dias atuais, o amplo uso de objetos de plástico 
gera bastante lixo, que muitas vezes é eliminado pela 
população por meio da queima. Esse procedimento é 
prejudicial ao meio ambiente por lançar substâncias 
poluentes. Para constatar esse problema, um estudante 
analisou a decomposição térmica do policloreto de 
vinila (PVC), um tipo de plástico, cuja estrutura é 
representada na figura. 
Policloreto de vinila (PVC) 
Para realizar esse experimento, o estudante colocou 
uma amostra de filme de PVC em um tubo de ensaio e o 
aqueceu, promovendo a decomposição térmica. Houve a 
liberação majoritária de um gás diatômico heteronuclear 
que foi recolhido em um recipiente acoplado ao tubo 
de ensaio. Esse gás, quando borbulhado em solução 
alcalina diluída contendo indicador ácido-base, alterou a 
cor da solução. Além disso, em contato com uma solução 
aquosa de carbonato de sódio (Na 2 CO 3 ), liberou gás 
carbônico. 
Qual foi o gás liberado majoritariamente na decomposição 
térmica desse tipo de plástico?`,
    images: ['/enem/2020/images/enem_2020_d2_q100.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `H 2` },
      { id: 'B', type: 'text', value: `Cl 2` },
      { id: 'C', type: 'text', value: `CO` },
      { id: 'D', type: 'text', value: `CO 2` },
      { id: 'E', type: 'text', value: `HCl` },
    ],
    correct: 'E',
    explanation: `Questão que dava as características da espécie liberada após a decomposição do PVC. A espécie liberada era um gás diatômico e heteronuclear,ou seja, formada por dois átomos diferentes. Além disso, esse gás era capaz de neutralizar uma solução alcalina e reagir com Na 2 CO 3 . Para neutralizar uma solução alcalina nós precisamos de uma substância ácida. O que levaria o candidato a marcar a opção contendo o cloreto de hidrogênio (HCl), visto que, ele é um ácido e satisfaz todas as características citadas.`,
    subject: ['fis'],
    topics: ['Física moderna', 'Questões aleatórias'],
  },
  {
    id: 101,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Uma população (momento A) sofre isolamento 
em duas subpopulações (momento B) por um fator de 
isolamento (I). Passado um tempo, essas subpopulações 
apresentam características fenotípicas e genotípicas que 
as distinguem (momento C), representadas na figura 
pelas tonalidades de cor. O posterior desaparecimento 
do fator de isolamento I pode levar, no momento D, às 
situações D1 e D2. 
B 
C 
D 
A 
D1 
D2 
Tempo 
 
A representação indica que, no momento D, na situação`,
    images: ['/enem/2020/images/enem_2020_d2_q101.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `D1 ocorre um novo fator de isolamento geográfico.` },
      { id: 'B', type: 'text', value: `D1 existe uma única população distribuída em 
gradiente.` },
      { id: 'C', type: 'text', value: `D1 ocorrem duas populações separadas por 
isolamento reprodutivo.` },
      { id: 'D', type: 'text', value: `D2 coexistem duas populações com características 
fenotípicas distintas.` },
      { id: 'E', type: 'text', value: `D2 foram preservadas as mesmas características 
fenotípicas da população original A.` },
    ],
    correct: 'C',
    explanation: `Observa-se em D1 que mesmo na ausência da barreira geográfica, as diferenças entre as populações são mantidas. Isso deve ocorrer pela incapacidade de reprodução entre seus indivíduos, ou seja, pelo isolamento reprodutivo.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 102,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `A obtenção de óleos vegetais, de maneira geral, passa pelas etapas descritas no quadro. 
 
 
Qual das subetapas do processo é realizada em função apenas da polaridade das substancias?`,
    images: ['/enem/2020/images/enem_2020_d2_q102.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Trituração.` },
      { id: 'B', type: 'text', value: `Cozimento.` },
      { id: 'C', type: 'text', value: `Prensagem.` },
      { id: 'D', type: 'text', value: `Extração.` },
      { id: 'E', type: 'text', value: `Destilação.` },
    ],
    correct: 'D',
    explanation: `A questão abordava as etapas do processo de obtenção dos óleos vegetais. O comando da questão queria saber qual das subetapas era realizada apenas em função da polaridade. Na subetapa de extração, nós podemos observar que houve a obtenção de óleo bruto com hexano. Sendo assim, podemos entender que houve a adição de uma solvente apolar (hexano). Como a maioria dos óleos são praticamente apolares e o hexano é apolar, podemos afirmar que essa subetapa ocorre em função apenas da polaridade das substâncias.`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 103,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `O dióxido de carbono passa para o estado sólido (gelo seco) a −78 °C e retorna ao estado gasoso a temperatura 
ambiente. O gás é facilmente solubilizado em água, capaz de absorver radiação infravermelha da superfície da terra 
e não conduz eletricidade. Ele é utilizado como matéria-prima para a fotossíntese até o limite de saturação. Após a fixação 
pelos organismos autotróficos, o gás retorna ao meio ambiente pela respiração aeróbica, fermentação, decomposição 
ou por resíduos industriais, queima de combustíveis fósseis e queimadas. Apesar da sua importância ecológica, seu 
excesso causa perturbações no equilíbrio ambiental. 
Considerando as propriedades descritas, o aumento atmosférico da substância afetará os organismos aquáticos em 
razão da`,
    alternatives: [
      { id: 'A', type: 'text', value: `redução do potencial hidrogeniônico da água.` },
      { id: 'B', type: 'text', value: `restrição da aerobiose pelo excesso de poluentes.` },
      { id: 'C', type: 'text', value: `diminuição da emissão de oxigênio pelos autótrofos.` },
      { id: 'D', type: 'text', value: `limitação de transferência de energia entre os seres vivos.` },
      { id: 'E', type: 'text', value: `retração dos oceanos pelo congelamento do gás nos polos.` },
    ],
    correct: 'A',
    explanation: `O aumento do CO2 atmosférico promove aumento da concentração desse gás no meio aquoso. Nos corpos d’água, o CO2 reage com a H2O formando ácido carbônico que reduz o pH do meio.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 104,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Grupos de proteção ao meio ambiente conseguem resgatar muitas aves aquáticas vítimas de vazamentos de 
petróleo. Essas aves são lavadas com água e detergente neutro para a retirada completa do óleo de seu corpo e, 
posteriormente, são aquecidas, medicadas, desintoxicadas e alimentadas. Mesmo após esses cuidados, o retorno ao 
ambiente não pode ser imediato, pois elas precisam recuperar a capacidade de flutuação. 
Para flutuar, essas aves precisam`,
    alternatives: [
      { id: 'A', type: 'text', value: `recuperar o tônus muscular.` },
      { id: 'B', type: 'text', value: `restaurar a massa corporal.` },
      { id: 'C', type: 'text', value: `substituir as penas danificadas.` },
      { id: 'D', type: 'text', value: `restabelecer a capacidade de homeotermia.` },
      { id: 'E', type: 'text', value: `refazer a camada de cera impermeabilizante das penas.` },
    ],
    correct: 'E',
    explanation: `A recuperação da camada de lipídio sobre as penas é fundamental para que a ave torne-se impermeabilizada, evitando assim que ela encharque as penas em dias chuvosos ou ao mergulhar ou flutuar na água.`,
    subject: ['bio'],
    topics: ['Urbanização', 'Questões aleatórias'],
  },
  {
    id: 105,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Os 
manuais 
de 
refrigerador 
apresentam 
a 
recomendação de que o equipamento não deve ser 
instalado próximo a fontes de calor, como fogão e 
aquecedores, ou em local onde incida diretamente a 
luz do sol. A instalação em local inadequado prejudica 
o funcionamento do refrigerador e aumenta o consumo 
de energia. 
O não atendimento dessa recomendação resulta em 
aumento do consumo de energia porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `o fl uxo de calor por condução no condensador sofre 
considerável redução.` },
      { id: 'B', type: 'text', value: `a 
temperatura 
da 
substância 
refrigerante 
no 
condensador diminui mais rapidamente.` },
      { id: 'C', type: 'text', value: `o fl uxo de calor promove signifi cativa elevação da 
temperatura no interior do refrigerador.` },
      { id: 'D', type: 'text', value: `a 
liquefação 
da 
substância 
refrigerante 
no 
condensador exige mais trabalho do compressor.` },
      { id: 'E', type: 'text', value: `as correntes de convecção nas proximidades do 
condensador ocorrem com maior difi culdade.` },
    ],
    correct: 'D',
    explanation: `A questão deixa margem para mais de uma opção correta. A opção A responde ao fato de, uma vez que o meio externo está a elevada temperatura, as trocas de calor entre a geladeira e o meio externo serão dificultadas, exigindo maior energia elétrica para o processo. Por outro lado, respondendo ao comando da questão quanto ao fato da conta de energia elétrica aumentar, o que produz efetivamente esse evento é um trabalho através de mais ciclos do compressor, operando mais vezes para manter a temperatura interna em níveis mais baixos. Logo, a opção D é a mais viável.`,
    subject: ['fis'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 106,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Um mergulhador fi ca preso ao explorar uma caverna 
no oceano. Dentro da caverna formou-se um bolsão de 
ar, como mostrado na fi gura, onde o mergulhador se 
abrigou. 
Durante o resgate, para evitar danos a seu 
organismo, foi necessário que o mergulhador passasse 
por um processo de descompressão antes de retornar 
à superfície para que seu corpo fi casse novamente sob 
pressão atmosférica. O gráfi co mostra a relação entre 
os tempos de descompressão recomendados para 
indivíduos nessa situação e a variação de pressão. 
Tempo de 
descompressão (min) 
100 
80 
60 
40 
20 
100 
200 
300 
400 
500 
600 
700 
Variação de pressão (kPa) 
Considere que a aceleração da gravidade seja 
igual a 10 m s −2 e que a densidade da água seja de 
ρ = 1 000 kg m −3 . 
Em minutos, qual é o tempo de descompressão a que o 
mergulhador deverá ser submetido?`,
    images: ['/enem/2020/images/enem_2020_d2_q106_1.jpg', '/enem/2020/images/enem_2020_d2_q106_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `100` },
      { id: 'B', type: 'text', value: `80` },
      { id: 'C', type: 'text', value: `60` },
      { id: 'D', type: 'text', value: `40` },
      { id: 'E', type: 'text', value: `20` },
    ],
    correct: 'C',
    explanation: `A pressão do ar confinado é sempre igual a da linha de líquido que veda ele. Isso significa dizer que a pressão do ambiente do mergulhador será a mesma de 50 m de profundidade em água. P total = P atm + P hidro = 1.10 5 + 10³.10.50 = 600 kPa &nbsp; Com isso, sabemos que a diferença de pressão entre os dois pontos é: Do gráfico, temos que 500kPa corresponde ao tempo de 60 minutos..`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 107,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `A Torre Eiﬀ el, com seus 324 metros de altura, feita 
com treliças de ferro, pesava 7 300 toneladas quando 
terminou de ser construída em 1889. Um arquiteto 
resolve construir um protótipo dessa torre em escala 
1:100, usando os mesmos materiais (cada dimensão 
linear em escala de 1:100 do monumento real). 
Considere que a torre real tenha uma massa M torre 
e exerça na fundação sobre a qual foi erguida uma 
pressão P torre . O modelo construído pelo arquiteto terá 
uma massa M modelo e exercerá uma pressão P modelo . 
Como a pressão exercida pela torre se compara com a 
pressão exercida pelo protótipo? Ou seja, qual é a razão 
entre as pressões (P torre )/(P modelo ) ?`,
    images: ['/enem/2020/images/enem_2020_d2_q107.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `10 0` },
      { id: 'B', type: 'text', value: `10 1` },
      { id: 'C', type: 'text', value: `10 2` },
      { id: 'D', type: 'text', value: `10 4` },
      { id: 'E', type: 'text', value: `10 6` },
    ],
    correct: 'C',
    explanation: `A questão dizia que a miniatura era constituída do mesmo material da torre original, portanto = 100 = 10 2`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 108,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Na indústria farmacêutica, é muito comum o emprego 
de substâncias de revestimento em medicamentos de uso 
oral, pois trazem uma série de benefícios como alteração de 
sabor em medicamentos que tenham gosto ruim, melhoria 
da assimilação do composto, entre outras ações. Alguns 
compostos poliméricos à base do polissacarídeo celulose 
são utilizados para garantir que o fármaco somente seja 
liberado quando em contato com soluções aquosas cujo pH 
se encontre próximo da faixa da neutralidade. 
BORTOLINI, K. et al . Análise de perfil de dissolução de cápsulas gastrorresistentes 
utilizando polímeros industriais com aplicação em farmácias magistrais. 
Revista da Unifebe , n. 12, 2013 (adaptado). 
Qual é a finalidade do uso desse revestimento à base de 
celulose?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Diminuir a absorção do princípio ativo no intestino.` },
      { id: 'B', type: 'text', value: `Impedir que o fármaco seja solubilizado no intestino.` },
      { id: 'C', type: 'text', value: `Garantir que o fármaco não seja afetado pelas 
secreções gástricas.` },
      { id: 'D', type: 'text', value: `Permitir a liberação do princípio ativo pela ação das 
amilases salivares.` },
      { id: 'E', type: 'text', value: `Facilitar a liberação do fármaco pela ação dos sais 
biliares sobre o revestimento.` },
    ],
    correct: 'C',
    explanation: `O revestimento de medicamentos com polímeros a base de celulose protege o fármaco do pH estomacal, permitindo que no intestino, com pH próximo ao neutro (8), o fármaco seja liberado. Outra função associada ao revestimento que se encontra no enunciado é evitar a recepção de sabor ruim na cavidade bucal.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 109,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `As panelas de pressão reduzem o tempo de 
cozimento dos alimentos por elevar a temperatura de 
ebulição da água. Os usuários conhecedores do utensílio 
normalmente abaixam a intensidade do fogo em panelas 
de pressão após estas iniciarem a saída dos vapores. 
Ao abaixar o fogo, reduz-se a chama, pois assim evita-se o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `aumento da pressão interna e os riscos de explosão.` },
      { id: 'B', type: 'text', value: `dilatação da panela e a desconexão com sua tampa.` },
      { id: 'C', type: 'text', value: `perda da qualidade nutritiva do alimento.` },
      { id: 'D', type: 'text', value: `deformação da borracha de vedação.` },
      { id: 'E', type: 'text', value: `consumo de gás desnecessário.` },
    ],
    correct: 'E',
    explanation: `Uma vez que a temperatura de ebulição da água aumenta, permanecer com o fogo no máximo resulta em desperdício de gás. Os alimentos serão cozidos nessa temperatura, e um alto fluxo de calor na chama não muda nem agiliza esse processo.`,
    subject: ['fis'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 110,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `A nanotecnologia pode ser caracterizada quando os 
compostos estão na ordem de milionésimos de milímetros, 
como na utilização de nanomateriais catalíticos nos 
processos industriais. O uso desses materiais aumenta 
a eficiência da produção, consome menos energia e gera 
menores quantidades de resíduos. O sucesso dessa 
aplicação tecnológica muitas vezes está relacionado ao 
aumento da velocidade da reação química envolvida. 
O êxito da aplicação dessa tecnologia é por causa 
da realização de reações químicas que ocorrem em 
condições de`,
    alternatives: [
      { id: 'A', type: 'text', value: `alta pressão.` },
      { id: 'B', type: 'text', value: `alta temperatura.` },
      { id: 'C', type: 'text', value: `excesso de reagentes.` },
      { id: 'D', type: 'text', value: `maior superfície de contato.` },
      { id: 'E', type: 'text', value: `elevada energia de ativação.` },
    ],
    correct: 'D',
    explanation: `Com o fato de ser utilizado uma partícula em escala nanométrica (partícula pequena), a área de contato irá aumentar e, assim, a velocidade aumentará.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 111,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Os fones de ouvido tradicionais transmitem a música 
diretamente para os nossos ouvidos. Já os modelos 
dotados de tecnologia redutora de ruído - Cancelamento 
de Ruído (CR) - além de transmitirem música, também 
reduzem todo ruído inconsistente à nossa volta, como 
o barulho de turbinas de avião e aspiradores de pó. Os 
fones de ouvido CR não reduzem realmente barulhos 
irregulares como discursos e choros de bebês. Mesmo 
assim, a supressão do ronco das turbinas do avião 
contribui para reduzir a “fadiga de ruído”, um cansaço 
persistente provocado pela exposição a um barulho alto 
por horas a fio. Esses aparelhos também permitem que 
nós ouçamos músicas ou assistamos a vídeos no trem ou 
no avião a um volume muito menor (e mais seguro). 
Disponível em: http://tecnologia.uol.com.br. Acesso em: 21 abr. 2015 (adaptado). 
A tecnologia redutora de ruído CR utilizada na produção 
de fones de ouvido baseia-se em qual fenômeno 
ondulatório?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Absorção.` },
      { id: 'B', type: 'text', value: `Interferência.` },
      { id: 'C', type: 'text', value: `Polarização.` },
      { id: 'D', type: 'text', value: `Reflexão.` },
      { id: 'E', type: 'text', value: `Difração.` },
    ],
    correct: 'B',
    explanation: `Mais uma vez o ENEM abordou o fone anti-ruido. Para eliminar os ruídos, ele deve produzir uma onda de mesma frequência da incidente mas em oposição de fase para gerar uma interferência destrutiva.`,
    subject: ['bio'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 112,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Para garantir que produtos eletrônicos estejam 
armazenados de forma adequada antes da venda, 
algumas empresas utilizam cartões indicadores de 
umidade nas embalagens desses produtos. Alguns 
desses cartões contêm um sal de cobalto que 
muda de cor em presença de água, de acordo com 
a equação química: 
∆ H < 0 
(azul) 
(rosa) 
Como você procederia para reutilizar, num curto 
intervalo de tempo, um cartão que já estivesse com a 
coloração rosa?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Resfriaria no congelador.` },
      { id: 'B', type: 'text', value: `Borrifaria com spray de água.` },
      { id: 'C', type: 'text', value: `Envolveria com papel alumínio.` },
      { id: 'D', type: 'text', value: `Aqueceria com secador de cabelos.` },
      { id: 'E', type: 'text', value: `Embrulharia em guardanapo de papel.` },
    ],
    correct: 'D',
    explanation: `Questão que envolvia equilíbrio de Le Chatelie de uma reação de caráter exotérmico ( Δ H &lt; 0). Como o texto dizia que o aproveitamento do cartão só aconteceria se ele passasse de rosa para azul, a opção correta seria aquela que desloca-se o equilíbrio no sentido inverso. Como a reação é exotérmica no sentido direto ( Δ H &lt; 0), o aumento da temperatura irá favorecer o sentido indireto, visto que nesse sentido a reação é endotérmica. Portanto, o aquecimento do cartão com um secador de cabelo, permitirá um deslocamento do equilíbrio no sentido inverso, permitindo o aparecimento da coloração azul.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 113,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Nos desenhos animados, com frequência se vê um 
personagem correndo na direção de um abismo, mas, ao 
invés de cair, ele continua andando no vazio e só quando 
percebe que não há nada sob seus pés é que ele para 
de andar e cai verticalmente. No entanto, para observar 
uma trajetória de queda num experimento real, pode-se 
lançar uma bolinha, com velocidade constante (V 0 ), sobre 
a superfície de uma mesa e verificar o seu movimento de 
queda até o chão. 
Qual figura melhor representa a trajetória de queda da bolinha? 
V 0 
Mesa`,
    images: ['/enem/2020/images/enem_2020_d2_q113_A.jpg', '/enem/2020/images/enem_2020_d2_q113_B.jpg', '/enem/2020/images/enem_2020_d2_q113_C.jpg', '/enem/2020/images/enem_2020_d2_q113_D.jpg', '/enem/2020/images/enem_2020_d2_q113_E.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'D',
    explanation: `A questão apresentava uma situação de uma esfera que deslizava sobre uma mesa e, ao sair dela, entrava em movimento livre com a gravidade atuando na vertical. Nesta situação, temos um lançamento horizontal, que possui um MRU no eixo x e uma queda livre no eixo Y, o que gera uma trajetória em arco de parábola.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 114,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Dois engenheiros estão verificando se uma cavidade 
perfurada no solo está de acordo com o planejamento 
de uma obra, cuja profundidade requerida é de 30 m. 
O teste é feito por um dispositivo denominado oscilador 
de áudio de frequência variável, que permite relacionar 
a profundidade com os valores da frequência de duas 
ressonâncias consecutivas, assim como em um tubo 
sonoro fechado. A menor frequência de ressonância que 
o aparelho mediu foi 135 Hz. Considere que a velocidade 
do som dentro da cavidade perfurada é de 360 m s - 1 . 
Se a profundidade estiver de acordo com o projeto, qual 
será o valor da próxima frequência de ressonância que 
será medida?`,
    alternatives: [
      { id: 'A', type: 'text', value: `137 Hz.` },
      { id: 'B', type: 'text', value: `138 Hz.` },
      { id: 'C', type: 'text', value: `141 Hz.` },
      { id: 'D', type: 'text', value: `144 Hz.` },
      { id: 'E', type: 'text', value: `159 Hz.` },
    ],
    correct: 'C',
    explanation: `A questão tratava a menor frequência medida como 135Hz, o que não significa dizer que se trata do primeiro harmônico. Com isso, o tamanho do tubo do projeto era de 30m. Sendo o tubo fechado: N = 45 Como o tubo é fechado “N” precisa ser um número inteiro e ímpar, portanto a próxima frequência será N = 47. &nbsp;`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 115,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Instituições acadêmicas e de pesquisa no mundo estão 
inserindo genes em genomas de plantas que possam 
codificar produtos de interesse farmacológico. No Brasil, 
está sendo desenvolvida uma variedade de soja com um 
viricida ou microbicida capaz de prevenir a contaminação 
pelo vírus causador da aids. Essa leguminosa está sendo 
induzida a produzir a enzima cianovirina-N, que tem 
eficiência comprovada contra o vírus. 
OLIVEIRA, M. Remédio na planta. Pesquisa Fapesp , n. 206, abr. 2013. 
A técnica para gerar essa leguminosa é um exemplo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `hibridismo.` },
      { id: 'B', type: 'text', value: `transgenia.` },
      { id: 'C', type: 'text', value: `conjugação.` },
      { id: 'D', type: 'text', value: `terapia gênica.` },
      { id: 'E', type: 'text', value: `melhoramento genético.` },
    ],
    correct: 'B',
    explanation: `A produção da enzima cianovirina pela soja depende da inserção de genes oriundos de outra espécie &#8211; como essa inserção é feita através da engenharia genética, o procedimento trata-se da confecção de um transgênico.`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
  },
  {
    id: 116,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Um estudante tem uma fonte de tensão com corrente
contínua que opera em tensão fixa de 12 V. Como
precisa alimentar equipamentos que operam em tensões
menores, ele emprega quatro resistores de 100 Ω para
construir um divisor de tensão. Obtém-se este divisor
associando os resistores, como exibido na figura. Os
aparelhos podem ser ligados entre os pontos, dependendo da tensão especificada.
Ele tem um equipamento que opera em 9,0 V com
uma resistência interna de 10 kΩ.
Entre quais pontos do divisor de tensão esse equipamento
deve ser ligado para funcionar corretamente e qual será o
valor da intensidade da corrente nele estabelecida?`,
    images: ['/enem/2020/images/enem_2020_d2_q116.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Entre A e C; 30 mA.` },
      { id: 'B', type: 'text', value: `Entre B e E; 30 mA.` },
      { id: 'C', type: 'text', value: `Entre A e D; 1,2 mA.` },
      { id: 'D', type: 'text', value: `Entre B e E; 0,9 mA.` },
      { id: 'E', type: 'text', value: `Entre A e E; 0,9 mA.` },

    ],
    correct: 'D',
    explanation: `Resolver a questão calculando a Req consumiria muito tempo do aluno, portanto a melhor opção de resolução seria excluir opções até se chegar na resposta. A questão queria que um aparelho de 10.000Ω funcionasse com 9V, para isto: U = R.i 9 = 10.000 . i i = 0,0009 A = 0,9 mA. Com isso o gabarito só poderia ser letra D ou Letra E. A letra E tinha a corrente de 0,9mA, mas a conexão feita teria 12V (ddp da bateria), portanto o gabarito precisa ser letra D. O primeiro resistor de 100 (entre A e B) deve consumir 3V para sobrar os 9V para a associação em paralelo entre B e E.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 117,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Pesquisadores dos Estados Unidos desenvolveram 
uma nova técnica, que utiliza raios de luz infravermelha 
(invisíveis a olho nu) para destruir tumores. Primeiramente, 
o paciente recebe uma injeção com versões modificadas 
de anticorpos que têm a capacidade de “grudar” apenas 
nas células cancerosas. Sozinhos, eles não fazem nada 
contra o tumor. Entretanto, esses anticorpos estão ligados 
a uma molécula, denominada IR700, que funcionará como 
uma “microbomba”, que irá destruir o câncer. Em seguida, o 
paciente recebe raios infravermelhos. Esses raios penetram 
no corpo e chegam até a molécula IR700, que é ativada e 
libera uma substância que ataca a célula cancerosa. 
Disponível em: http://super.abril.com.br. Acesso em: 13 dez. 2012 (adaptado). 
Com base nas etapas de desenvolvimento, o nome 
apropriado para a técnica descrita é:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Radioterapia.` },
      { id: 'B', type: 'text', value: `Cromoterapia.` },
      { id: 'C', type: 'text', value: `Quimioterapia.` },
      { id: 'D', type: 'text', value: `Fotoimunoterapia.` },
      { id: 'E', type: 'text', value: `Terapia magnética.` },
    ],
    correct: 'D',
    explanation: `Embora a fotoimunoterapia seja procedimento pouco conhecido, a interpretação permite a resolução da questão uma vez que os medicamentos são associados a anticorpos específicos (imunoterapia) e ativados pela radiação infravermelha (como se trata de luz, utiliza-se o radical foto).`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 118,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Aranhas, escorpiões, carrapatos e ácaros são 
representantes da classe dos Aracnídeos . Esses animais 
são terrestres em sua grande maioria e ocupam os mais 
variados hábitats, tais como montanhas altas, pântanos, 
desertos e solos arenosos. Podem ter sido os primeiros 
representantes do filo Arthropoda a habitar a terra seca. 
A característica que justifica o sucesso adaptativo desse 
grupo na ocupação do ambiente terrestre é a presença de`,
    alternatives: [
      { id: 'A', type: 'text', value: `quelíceras e pedipalpos que coordenam o movimento 
corporal.` },
      { id: 'B', type: 'text', value: `excreção de ácido úrico que confere estabilidade ao 
pH corporal.` },
      { id: 'C', type: 'text', value: `exoesqueleto constituído de quitina que auxilia no 
controle hídrico corporal.` },
      { id: 'D', type: 'text', value: `circulação sanguínea aberta que impede a desidratação 
dos tecidos corporais.` },
      { id: 'E', type: 'text', value: `sistema nervoso ganglionar que promove a coordenação 
central do movimento corporal.` },
    ],
    correct: 'C',
    explanation: `O exoesqueleto dos aracnídeos (e demais artrópodes) evita a perda excessiva de água permitindo a grande irradiação adaptativa desses animais no ambiente terrestre.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 119,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Pesquisadores coletaram amostras de água de um 
rio em pontos diferentes, distantes alguns quilômetros 
um do outro. Ao longo do rio, há locais de águas limpas, 
como também locais que recebem descarga de esgoto 
de área urbana, e locais onde há decomposição ativa 
com ausência de peixes. Os pesquisadores analisaram 
dois parâmetros: oxigênio dissolvido (OD) e demanda 
bioquímica de oxigênio (DBO) em cada ponto de coleta 
de água, obtendo o gráfico: 
14 
+ 
12 
10 
OD e DBO (mg L − 1 ) 
Legenda: 
∗ 
+ 
OD 
8 
+ 
DBO 
∗ 
6 
+ 
+ 
∗ 
∗ 
∗ 
4 
∗ 
2 
+ 
1 
2 
3 
4 
5 
Pontos de amostragem 
Valores limites permitidos para águas doces destinadas ao abastecimento 
para o consumo humano após tratamento convencional, segundo Resolução 
Conama n. 357/2005: 
OD ≥ 5 mg L − 1 e DBO ≤ 5 mg L − 1 . 
O OD é proveniente da atmosfera e da fotossíntese 
que ocorre no curso-d’água e sua concentração é 
função das variáveis físicas, químicas e bioquímicas 
locais. A DBO é a quantidade de oxigênio consumido 
por microrganismos em condições aeróbicas para 
degradar uma determinada quantidade de matéria 
orgânica, durante um período de tempo, numa 
temperatura de incubação específica. 
Disponível em: www.programaaguaazul.rn.gov.br. Acesso em: 16 ago. 2014 (adaptado). 
Qual ponto de amostragem da água do rio está mais 
próximo ao local em que o rio recebe despejo de esgoto?`,
    images: ['/enem/2020/images/enem_2020_d2_q119.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `5` },
    ],
    correct: 'A',
    explanation: `De acordo com o enunciado foram feitas análises em três tipos de localidades: localidades com lançamento de esgoto, localidades com baixa poluição e localidades com decomposição ativa e ausência de peixes. A de lançamento de esgoto deve apresentar alta demanda bioquímica de oxigênio (DBO) em função da abundância de matéria orgânica e consequente decomposição aeróbica. A localidade III com baixa DBO deve corresponder àquelas onde o acúmulo de poluentes já é crônico, determinando a mortalidade de todos os seres aeróbicos, inclusive os peixes.`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 120,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `O crescimento da frota de veículos em circulação 
no mundo tem levado à busca e desenvolvimento 
de tecnologias que permitam minimizar emissões de 
poluentes atmosféricos. O uso de veículos elétricos é 
uma das propostas mais propagandeadas por serem de 
emissão zero. Podemos comparar a emissão de carbono 
na forma de CO 2 (massa molar igual a 44 g mol −1 ) para os 
dois tipos de carros (a combustão e elétrico). Considere 
que os veículos tradicionais a combustão, movidos a 
etanol (massa molar igual a 46 g mol −1 ), emitem uma 
média de 2,6 mol de CO 2 por quilômetro rodado, e os 
elétricos emitem o equivalente a 0,45 mol de CO 2 por 
quilômetro rodado (considerando as emissões na geração 
e transmissão da eletricidade). A reação de combustão 
do etanol pode ser representada pela equação química: 
C 2 H 5 OH (l) + 3 O 2 (g) → 2 CO 2 (g) + 3 H 2 O (g) 
Foram analisadas as emissões de CO 2 envolvidas 
em dois veículos, um movido a etanol e outro elétrico, 
em um mesmo trajeto de 1 000 km. 
CHIARADIA, C. A. Estudo da viabilidade da implantação de frotas de veículos elétricos 
e híbridos elétricos no atual cenário econômico, político, energético e ambiental brasileiro. 
Guaratinguetá: Unesp, 2015 (adaptado). 
A quantidade equivalente de etanol economizada, em 
quilograma, com o uso do veículo elétrico nesse trajeto, 
é mais próxima de`,
    alternatives: [
      { id: 'A', type: 'text', value: `50.` },
      { id: 'B', type: 'text', value: `60.` },
      { id: 'C', type: 'text', value: `95.` },
      { id: 'D', type: 'text', value: `99.` },
      { id: 'E', type: 'text', value: `120.` },
    ],
    correct: 'A',
    explanation: `Questão de estequiometria onde foi estabelecida uma comparação entre a quantidade de CO₂ liberado por um carro elétrico e outro com etanol. Com base na reação de combustão do etanol e de posse do dado que o carro a etanol liberava 2,6 mol de CO₂ por km e o elétrico liberava 0,45 mol de CO₂ por 1000 km, o candidato teria que, para cada um dos carros, calcular a quantidade de CO₂ para 1000Km. Calculando o número de mol em cada caso: Etanol 2,6 mol CO₂ &#8212;&#8211; 1 Km X &#8212;&#8211; 1000 Km X = 2600 mol CO₂ Elétrico 0,45 mol CO₂ &#8212;&#8211; 1 Km Y &#8212;&#8211; 1000 Km Y = 450 mol CO₂ Agora relacionando a diferença de CO₂ liberado em cada um dos carros. 2600 mol &#8211; 450 mol = 2150 mol CO₂ Essa valor de 2150 mol de CO₂ é a quantidade de CO₂ liberado a mais em comparação ao carro elétrico. Aplicando a proporção estequiométrica pela reação fornecida 1 mol etanol : 2 mol de CO₂ 46 g Etanol &#8212;&#8211; 2 mol CO₂ Z &#8212;&#8211; 2150 mol CO₂ Z = 49450 g = 49,45 Kg ≅ 50 Kg &nbsp;`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 121,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Em uma aula sobre metabolismo energético, 
foi apresentado um experimento clássico realizado 
por Engelmann. Um recipiente contendo bactérias 
aeróbias e uma alga verde filamentosa foi submetido 
à iluminação de uma fonte de luz, representada 
pelo microespectro. Após a explicação, um aluno 
esquematizou na lousa o resultado do referido 
experimento. 
Bactérias aeróbias 
Filamento de alga verde 
Vermelho 
Amarelo 
Violeta 
Verde 
Azul 
Anil 
Microespectro 
Considerando a figura, a faixa do microespectro em que a 
alga possui maior taxa de realização fotossintética é a do:`,
    images: ['/enem/2020/images/enem_2020_d2_q121.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Anil.` },
      { id: 'B', type: 'text', value: `Verde.` },
      { id: 'C', type: 'text', value: `Violeta.` },
      { id: 'D', type: 'text', value: `Amarelo.` },
      { id: 'E', type: 'text', value: `Vermelho.` },
    ],
    correct: 'E',
    explanation: `Bactérias aeróbicas usam o oxigênio em seu metabolismo. O maior acúmulo dessas bactérias ao redor da região da alga onde incidia a luz vermelha indica que essa faixa do espectro luminoso é a mais utilizada no processo fotossintético.`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 122,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `O exame parasitológico de fezes é utilizado para 
detectar ovos de parasitos. Um dos métodos utilizados, 
denominado 
de 
centrífugo-flutuação, 
considera 
a 
densidade dos ovos em relação a uma solução de 
densidade 1,15 g mL −1 . Assim, ovos que flutuam na 
superfície dessa solução são detectados. Os dados 
de densidade dos ovos de alguns parasitos estão 
apresentados na tabela. 
 
ZERBINI, A. M. Identificação e análise de viabilidade de ovos de helmintos em um 
sistema de tratamento de esgotos domésticos constituídos de reatores anaeróbios e 
rampas de escoamento superficial . Belo Horizonte: Prosab, 2001 (adaptado). 
Considerando-se a densidade dos ovos e da solução, ovos 
de quais parasitos podem ser detectados por esse método? 
A A. lumbricoides,`,
    images: ['/enem/2020/images/enem_2020_d2_q122.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `suum e S. mansoni.` },
      { id: 'B', type: 'text', value: `S. mansoni, T. saginata e Ancylostoma.` },
      { id: 'C', type: 'text', value: `Ancylostoma, A. lumbricoides e A. suum.` },
      { id: 'D', type: 'text', value: `T. saginata, S. mansoni e A. lumbricoides.` },
      { id: 'E', type: 'text', value: `A. lumbricoides, A. suum e T. saginata.` },
    ],
    correct: 'C',
    explanation: `Questão envolvendo conceito de densidade onde o enunciado cita que ovos colocados em uma solução de densidade 1,15g/cm³ , se boiassem seriam de parasitos. Analisando as densidades dos ovos, podemos observar que o Ancylostoma, A. lumbricoides e A. suum, possuem as respectivas densidades, 1,06, 1,11 e 1,13. Como elas são menores do que a solução (1,15), esses ovos irão flutuar na solução. Sendo assim, estes são de parasitos.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 123,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Em seu laboratório, um técnico em química foi 
incumbido de tratar um resíduo, evitando seu descarte 
direto no meio ambiente. Ao encontrar o frasco, observou 
a seguinte informação: “ Resíduo: mistura de acetato de 
etila e água ”. 
Considere os dados do acetato de etila: 
• Baixa solubilidade em água; 
• Massa específica = 0,9 g cm −3 ; 
• Temperatura de fusão = −83 °C; 
• Pressão de vapor maior que a da água. 
A fim de tratar o resíduo, recuperando o acetato de etila, 
o técnico deve`,
    alternatives: [
      { id: 'A', type: 'text', value: `evaporar o acetato de etila sem alterar o conteúdo de 
água.` },
      { id: 'B', type: 'text', value: `filtrar a mistura utilizando um funil comum e um papel 
de filtro.` },
      { id: 'C', type: 'text', value: `realizar uma destilação simples para separar a água do 
acetato de etila.` },
      { id: 'D', type: 'text', value: `proceder a uma centrifugação da mistura para remover 
o acetato de etila.` },
      { id: 'E', type: 'text', value: `decantar a mistura separando os dois componentes em 
um funil adequado.` },
    ],
    correct: 'E',
    explanation: `Questão citava algumas características do acetato de etila. Entre elas: Baixa solubilidade em água Densidade menor do que a da água Ponto de fusão igual a &#8211; 83°C Pressão de vapor (conferir na prova) De acordo com essas características, podemos afirmar que ambas as substâncias são líquidas e imiscíveis. Dessa forma temos uma mistura heterogênea, sendo assim, podemos utilizar a técnica de decantação para recuperar o acetato de etila. Essa decantação deve ser realizada em um funil adequado, chamado também de funil de decantação.`,
    subject: ['qui'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 124,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Em 2011, uma falha no processo de perfuração 
realizado por uma empresa petrolífera ocasionou 
derramamento de petróleo na bacia hidrográfica de 
Campos, no Rio de Janeiro. 
Os impactos decorrentes desse derramamento ocorrem 
porque os componentes do petróleo`,
    alternatives: [
      { id: 'A', type: 'text', value: `reagem com a água do mar e sofrem degradação, 
gerando compostos com elevada toxicidade.` },
      { id: 'B', type: 'text', value: `acidificam o meio, promovendo o desgaste das 
conchas calcárias de moluscos e a morte de corais.` },
      { id: 'C', type: 'text', value: `dissolvem-se na água, causando a mortandade dos 
seres marinhos por ingestão da água contaminada.` },
      { id: 'D', type: 'text', value: `têm caráter hidrofóbico e baixa densidade, impedindo 
as trocas gasosas entre o meio aquático e a atmosfera.` },
      { id: 'E', type: 'text', value: `têm 
cadeia 
pequena 
e 
elevada 
volatilidade, 
contaminando a atmosfera local e regional em função 
dos ventos nas orlas marítimas.` },
    ],
    correct: 'D',
    explanation: `A questão vem trazendo um vazamento de petróleo ocorrido na bacia de Campos e perguntava qual os impactos ambientais seriam gerados ao meio ambiente. Pelo fato do petróleo ser insolúvel em água e apresentar uma baixa densidade, ele irá permanecer sobre a água e formará uma camada que irá impedir as trocas gasosas entre o meio aquático e a atmosfera.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 125,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Uma população encontra-se em equilíbrio genético 
quanto ao sistema ABO, em que 25% dos indivíduos 
pertencem ao grupo O e 16%, ao grupo A homozigotos. 
Considerando que: p = frequência de I A ; q = frequência 
de I B ; e r = frequência de i, espera-se encontrar: 
Grupo 
Genótipos 
Frequências 
A 
I A I A e I A i 
p 2 + 2pr 
B 
I B I B e I B i 
q 2 + 2qr 
AB 
I A I B 
2pq 
O 
ii 
r 2 
A porcentagem de doadores compatíveis para alguém do 
grupo B nessa população deve ser de`,
    images: ['/enem/2020/images/enem_2020_d2_q125.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `11%.` },
      { id: 'B', type: 'text', value: `19%.` },
      { id: 'C', type: 'text', value: `26%.` },
      { id: 'D', type: 'text', value: `36%.` },
      { id: 'E', type: 'text', value: `60%.` },
    ],
    correct: 'D',
    explanation: `Sendo a frequência de indivíduos O = 25 %, tem-se que: F(ii) = r2 ; logo r = Raiz de 25/100 = 0,5 Sendo a frequência de indivíduos homozigotos A = 16% tem-se que: F(IAIA) = p2 ; logo p = Raiz de 16/100 = 0,4 &nbsp; Dessa forma a frequência de IB = 1 &#8211; (0,5 + 0,4) = 0,1 &nbsp; Podem doar sangue para o indivíduo B indivíduos IBIB + IBi + ii = q2 + 2qr + r2 = 0,01 + 0,1 + 0,25 = 0,36 = 36%`,
    subject: ['fis'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 126,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Embora a energia nuclear possa ser utilizada 
para fins pacíficos, recentes conflitos geopolíticos 
têm trazido preocupações em várias partes do 
planeta e estimulado discussões visando o combate 
ao uso de armas de destruição em massa. Além do 
potencial destrutivo da bomba atômica, uma grande 
preocupação associada ao emprego desse artefato 
bélico é a poeira radioativa deixada após a bomba 
ser detonada. 
Qual é o processo envolvido na detonação dessa bomba?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Fissão nuclear do urânio, provocada por nêutrons.` },
      { id: 'B', type: 'text', value: `Fusão nuclear do hidrogênio, provocada por 
prótons.` },
      { id: 'C', type: 'text', value: `Desintegração nuclear do plutônio, provocada por 
elétrons.` },
      { id: 'D', type: 'text', value: `Associação em cadeia de chumbo, provocada por 
pósitrons.` },
      { id: 'E', type: 'text', value: `Decaimento radioativo do carbono, provocado por 
partículas beta.` },
    ],
    correct: 'A',
    explanation: `A questão relacionava conceitos de radioatividade (transmutação artificial &#8211; bombardeamento). A reação que ocorre em uma bomba nuclear precisa liberar uma quantidade muito grande de energia. Uma reação nuclear capaz de liberar toda essa quantidade de energia é a fissão nuclear. Dentre as opções temos o bombardeamento de átomos de urânio por nêutrons, que geral uma enorme liberação de energia.`,
    subject: ['fis'],
    topics: ['Física moderna', 'Questões aleatórias'],
  },
  {
    id: 127,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Plantas pioneiras são as que iniciam o processo 
natural de cicatrização de uma área desprovida de 
vegetação. Em geral, têm pequeno porte e crescem 
muito rápido, desenvolvem-se a pleno sol e são pouco 
exigentes quanto às condições do solo. Produzem 
grande quantidade de sementes e possuem ciclo de 
vida curto. 
BLUM, C. T. Lista preliminar de espécies vegetais pioneiras nativas do Paraná - versão 
2008. Disponível em: www.chaua.org.br. Acesso em: 10 fev. 2015. 
Essas plantas são importantes em um projeto de 
restauração ambiental, pois promovem, no solo,`,
    alternatives: [
      { id: 'A', type: 'text', value: `aumento da incidência de luz solar.` },
      { id: 'B', type: 'text', value: `diminuição da absorção de água.` },
      { id: 'C', type: 'text', value: `estabilização da umidade.` },
      { id: 'D', type: 'text', value: `elevação de temperatura.` },
      { id: 'E', type: 'text', value: `liberação de oxigênio.` },
    ],
    correct: 'C',
    explanation: `Em uma sucessão ecológica em ambientes terrestres, as espécies pioneiras aumentam a retenção de água e nutrientes no solo, favorecendo o estabelecimento de novas espécies.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 128,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Mesmo para peixes de aquário, como o peixe 
arco-íris, a temperatura da água fora da faixa ideal 
(26 °C a 28 °C), bem como sua variação brusca, pode 
afetar a saúde do animal. Para manter a temperatura 
da água dentro do aquário na média desejada, utilizam- 
se dispositivos de aquecimento com termostato. Por 
exemplo, para um aquário de 50 L, pode-se utilizar um 
sistema de aquecimento de 50 W otimizado para suprir 
sua taxa de resfriamento. Essa taxa pode ser considerada 
praticamente constante, já que a temperatura externa ao 
aquário é mantida pelas estufas. Utilize para a água o 
calor específico 4,0 kJ kg −1 K −1 e a densidade 1 kg L −1 . 
Se o sistema de aquecimento for desligado por 1 h, qual 
o valor mais próximo para a redução da temperatura da 
água do aquário?`,
    alternatives: [
      { id: 'A', type: 'text', value: `4,0 °C` },
      { id: 'B', type: 'text', value: `3,6 °C` },
      { id: 'C', type: 'text', value: `0,9 °C` },
      { id: 'D', type: 'text', value: `0,6 °C` },
      { id: 'E', type: 'text', value: `0,3 °C` },
    ],
    correct: 'C',
    explanation: `A questão apresenta um exemplo de um aquário de 50L precisando de um aquecedor de 50W para suprir a necessidade e diz que essa taxa pode ser considerada constante, logo, temos uma taxa 1:1 entre potência e litros de água. &nbsp; Essa mesma linha de pensamento pode ser levada para a densidade. Já que temos uma densidade de 1kg/L para a água, temos uma proporção 1:1 para a massa e o volume. Com isso, podemos juntar os dois dados e dizer que 1W de potência aquece 1kg de água. &nbsp; Utilizando os dados da questão (não esqueça de converter o calor específico para c = 4000 J/kg.K).`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 129,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Em uma pesquisa estão sendo testados 
cinco quimioterápicos quanto à sua capacidade 
antitumoral. No entanto, para o tratamento de 
pacientes, sabe-se que é necessário verificar também 
o quanto cada composto agride células normais. Para o 
experimento, partiu-se de cultivos de células tumorais 
(colunas escuras na figura) e células normais (colunas 
claras) com o mesmo número de células iniciais. 
Dois grupos-controle não receberam quimioterápicos: 
controle de células tumorais (CT) e de células normais 
(CN). As colunas I, II, III, IV e V correspondem aos 
grupos tratados com os cinco compostos. O número de 
células viáveis após os tratamentos está representado 
pelas colunas. 
60
Número de células (milhão)
50 
40 
30 
20 
10 
0 
CT 
I 
II 
III 
IV 
V 
CN 
I 
II 
III 
IV 
V 
Qual quimioterápico deve ser escolhido para tratamento 
desse tipo de tumor?`,
    images: ['/enem/2020/images/enem_2020_d2_q129.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I` },
      { id: 'B', type: 'text', value: `II` },
      { id: 'C', type: 'text', value: `III` },
      { id: 'D', type: 'text', value: `IV` },
      { id: 'E', type: 'text', value: `V` },
    ],
    correct: 'B',
    explanation: `O tratamento/medicamento II foi o que determinou uma maior diferença na sobrevivência entre as células tumorais e normais em comparação com o controle, determinando maior mortalidade de células tumorais e aumento da sobrevivência de células normais. Inclusive, o quimioterápico II é o único que apresenta células saudáveis (coluna clara) viáveis em maior número do que células tumorais (coluna escura)`,
    subject: ['bio'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 130,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Herschel, em 1880, começou a escrever sobre a condensação da luz solar no foco de uma lente e queria verificar
de que maneira os raios coloridos contribuem para o aquecimento. Para isso, ele projetou sobre um anteparo o espectro
solar obtido com um prisma, colocou termômetros nas diversas faixas de cores e verificou nos dados obtidos que um
dos termômetros iluminados indicou um aumento de temperatura maior para uma determinada faixa de frequências.
SAYURI, M.; GASPAR, M. B. Infravermelho na sala de aula. Disponível em: www.cienciamao.usp.br. Acesso em: 15 ago. 2016 (adaptado).
Para verificar a hipótese de Herschel, um estudante montou o dispositivo apresentado na figura. Nesse aparato,
cinco recipientes contendo água, à mesma temperatura inicial, e separados por um material isolante térmico e refletor são
posicionados lado a lado (A, B, C, D e E) no interior de uma caixa de material isolante térmico e opaco. A luz solar, ao entrar
na caixa, atravessa o prisma e incide sobre os recipientes. O estudante aguarda até que ocorra o aumento da temperatura
e a afere em cada recipiente.
Em qual dos recipientes a água terá maior temperatura ao final do experimento?`,
    images: ['/enem/2020/images/enem_2020_d2_q130.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },

    ],
    correct: 'A',
    explanation: `A radiação infravermelha &#8211; conhecida comumente como ondas de calor &#8211; são as capazes de aumentar a temperatura da água e, portanto, o recipiente A será o mais aquecido.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 131,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `A Química Verde é um ramo da química que prega o desenvolvimento de processos eficientes, que transformem a maior
parte do reagente em produto, de forma mais rápida e seletiva, que utilizem poucos reagentes, que produzam somente o
produto desejado, evitando a formação de coprodutos, e que utilizem solventes não agressivos ao meio ambiente. Assim,
as indústrias contornariam problemas relacionados à poluição ambiental e ao desperdício de água e energia.
O perfil de um processo que segue todos os princípios desse ramo da química pode ser representado por:`,
    alternatives: [
      { id: 'A', type: 'text', value: `A + B + C → D (a reação ocorre a altas pressões).` },
      { id: 'B', type: 'text', value: `A + B → C + D (a reação é fortemente endotérmica).` },
      { id: 'C', type: 'text', value: `A + 3B → C (a reação ocorre com uso de solvente orgânico).` },
      { id: 'D', type: 'text', value: `3A + 2B → 2C → 3D + 2E (a reação ocorre sob pressão atmosférica).` },
      { id: 'E', type: 'text', value: `A + 1−2B → C (a reação ocorre com o uso de um catalisador contendo um metal não tóxico).` },

    ],
    correct: 'E',
    explanation: `Questão onde o candidato teria que escolher a reação que se enquadrasse nas características citadas com base na Química verde. As características eram; &#8211; Reação rápida e seletiva &#8211; Poucos regantes &#8211; Somente o produto desejado &#8211; Sem desperdício de H 2 O e energia Sendo assim, entre as opções, apenas a reação da alternativa E, satisfaz todas as características. A reação ocorre com o uso de catalisador não tóxico. O que possibilita diminuir a sua energia de ativação, fazendo com que a reação ocorra mais rapidamente e gastando menos energia, além de não agredir o ambiente por ser não tóxico. Como obtemos apenas um produto, podemos dizer que ela é seletiva, não produzindo coprodutos. E pela estequiometria da reação, podemos ver que ela utiliza poucos reagentes.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 132,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Megaespetáculos com queima de grande quantidade 
de fogos de artifício em festas de final de ano são muito 
comuns no Brasil. Após a queima, grande quantidade 
de material particulado permanece suspensa no ar. 
Entre os resíduos, encontram-se compostos de sódio, 
potássio, bário, cálcio, chumbo, antimônio, cromo, além 
de percloratos e gases, como os dióxidos de nitrogênio 
e enxofre. 
BRUNNING, A. The Chemistry of Firework Pollution . Disponível em: 
www.compoundchem.com. Acesso em: 1 dez. 2017 (adaptado). 
Esses espetáculos promovem riscos ambientais, porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `as substâncias resultantes da queima de fogos de 
artifício são inflamáveis.` },
      { id: 'B', type: 'text', value: `os resíduos produzidos na queima de fogos de 
artifício ainda são explosivos.` },
      { id: 'C', type: 'text', value: `o sódio e o potássio são os principais responsáveis 
pela toxicidade do produto da queima.` },
      { id: 'D', type: 'text', value: `os produtos da queima contêm metais pesados e 
gases tóxicos que resultam em poluição atmosférica.` },
      { id: 'E', type: 'text', value: `o material particulado gerado se deposita na superfície 
das folhas das plantas impedindo os processos de 
respiração celular.` },
    ],
    correct: 'D',
    explanation: `A questão comentava sobre os produtos que eram liberados após o espetáculo dos fogos de artifício. Eram eles: Na, K, Ba, Ca, Pb, Sb, Cr, ClO 4 &#8211; , NO 2 e SO 2 . O comando da questão queria saber os riscos ambientais causados por esses produtos. Entre as opções temos a liberação de metais pesados e gases tóxicos resultando em poluição ambiental.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 133,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Há muitos mitos em relação a como se proteger de 
raios, cobrir espelhos e não pegar em facas, garfos e 
outros objetos metálicos, por exemplo. Mas, de fato, se 
houver uma tempestade com raios, alguns cuidados são 
importantes, como evitar ambientes abertos. Um bom 
abrigo para proteção é o interior de um automóvel, desde 
que este não seja conversível. 
OLIVEIRA, A. Raios nas tempestades de verão . Disponível em: 
http://cienciahoje.uol.com.br. Acesso em: 10 dez. 2014 (adaptado). 
Qual o motivo físico da proteção fornecida pelos 
automóveis, conforme citado no texto?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Isolamento elétrico dos pneus.` },
      { id: 'B', type: 'text', value: `Efeito de para-raios da antena.` },
      { id: 'C', type: 'text', value: `Blindagem pela carcaça metálica.` },
      { id: 'D', type: 'text', value: `Escoamento da água pela lataria.` },
      { id: 'E', type: 'text', value: `Aterramento pelo fio terra da bateria.` },
    ],
    correct: 'C',
    explanation: `A questão aborda uma situação clássica de gaiola de Faraday. No exemplo mencionado, o carro funciona como uma gaiola, onde a pessoa fica protegida no interior do carro por conta do carro funcionar como uma blindagem eletrostática, mantendo as cargas na superfície metálica.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 134,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `As moedas despertam o interesse de colecionadores,
numismatas e investidores há bastante tempo. Uma
moeda de 100% cobre, circulante no período do Brasil
Colônia, pode ser bastante valiosa. O elevado valor gera
a necessidade de realização de testes que validem a
procedência da moeda, bem como a veracidade de sua
composição. Sabendo que a densidade do cobre metálico
é próxima de 9 g cm − ³, um investidor negocia a aquisição
de um lote de quatro moedas A, B, C e D fabricadas
supostamente de 100% cobre e massas 26 g, 27 g, 10 g
e 36 g, respectivamente. Com o objetivo de testar a
densidade das moedas, foi realizado um procedimento
em que elas foram sequencialmente inseridas em uma
proveta contendo 5 mL de água, conforme esquematizado.
Com base nos dados obtidos, o investidor adquiriu as moedas`,
    images: ['/enem/2020/images/enem_2020_d2_q134.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A e B.` },
      { id: 'B', type: 'text', value: `A e C.` },
      { id: 'C', type: 'text', value: `B e C.` },
      { id: 'D', type: 'text', value: `B e D.` },
      { id: 'E', type: 'text', value: `C e D.` },

    ],
    correct: 'D',
    explanation: `A questão envolvia o conceito de densidade, onde o candidato deveria através de uma análise gráfica, achar o volume de cada uma das moedas e com a massa, determinar as suas respectivas densidades. Para determinar o volume de cada moeda, nós precisamos encontrar no gráfico a variação de volume em cada proveta. Essa análise é possível de ser feita porque quando adicionamos um sólido em um líquido, o volume de líquido deslocado é igual ao volume do sólido adicionado. Volumes: Moeda A: 2 cm³ Moeda B: 3 cm³ Moeda C: 2 cm³ Moeda D: 4 cm³ Densidades das moedas: Moeda A: d = 26 g/2 cm³ = 13 g/cm³ Moeda B: d = 27 g/3 cm³ = 9 g/cm³ Moeda C: d = 10 g/2 cm³ = 5 g/cm³ Moeda D: d = 36 g/4 cm³ = 9 g/cm³ De posse das densidades bastava comparar com a densidade do cobre para saber as moedas verdadeiramente confeccionadas com esse elemento.`,
    subject: ['fis'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 135,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Os diferentes tipos de café que consumimos nem 
sempre vêm da mesma espécie de planta. As duas 
espécies de café mais utilizadas são Coffea canephora 
e Coffea arábica . A primeira é diploide (2n = 22) e a 
segunda é tetraploide (2n = 44). Acredita-se que a 
espécie tetraploide surgiu de um cruzamento natural 
entre C . canephora e C . eugenioides , ambas diploides, 
há milhões de anos. De fato, as análises genéticas atuais 
nos cromossomos de C . arábica detectam os alelos de 
ambas as origens. 
A alteração cromossômica que poderia explicar o 
surgimento do café da espécie C . arábica é:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Duplicação em uma das plantas parentais antes do 
cruzamento.` },
      { id: 'B', type: 'text', value: `Inversão durante a meiose gamética em ambas as 
plantas parentais.` },
      { id: 'C', type: 'text', value: `Separação desigual na meiose gamética de uma das 
plantas parentais.` },
      { id: 'D', type: 'text', value: `Falha na separação durante a meiose gamética em 
ambas as plantas parentais.` },
      { id: 'E', type: 'text', value: `Deleções durante as primeiras mitoses zigóticas na 
planta descendente C . arábica .` },
    ],
    correct: 'A',
    annulled: true,
    explanation: `Para dois indivíduos diplóides originarem um indivíduo tetraplóide o erro a disjunção cromossomial / mutação deve ocorrer em AMBOS os parentais (caso contrário seria formado um indivíduo triplóide) &#8211; como a única opção que aponta o erro em dois parentais (letra D) aponta erro em meiose gamética a questão deverá ser anulada, haja visto que a meiose nas plantas é espórica. A letra A está incorreta, pois o erro ocorreu em AMBOS os parentais. Para que o erro ocorra como duplicação em um único parental ele deve apresentar DUAS DUPLICAÇÕES EM TODO GENOMA, fazendo assim um gameta 3N que se fundirá ao gameta N do outro parental. A opção é a menos errada, mas entendemos que a questão deveria ser anulada.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 136,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `A fabricação da Bandeira Nacional deve obedecer ao 
descrito na Lei n. 5.700, de 1º de setembro de 1971, que 
trata dos Símbolos Nacionais. No artigo que se refere às 
dimensões da Bandeira, observa-se: 
“Para cálculos das dimensões, será tomada por base 
a largura, dividindo-a em 14 (quatorze) partes iguais, 
sendo que cada uma das partes será considerada uma 
medida ou módulo (M). Os demais requisitos dimensionais 
seguem o critério abaixo: 
I. 
Comprimento será de vinte módulos (20 M); 
II. A distância dos vértices do losango amarelo ao 
quadro externo será de um módulo e sete décimos 
(1,7 M); 
III. O raio do círculo azul no meio do losango 
amarelo será de três módulos e meio (3,5 M).” 
BRASIL. Lei n. 5.700, de 1º de setembro de 1971.Disponível em: www.planalto.gov.br. 
Acesso em: 15 set. 2015. 
A figura indica as cores da bandeira do Brasil e 
localiza o quadro externo a que se refere a Lei n. 5.700. 
Largura do quadro externo 
Comprimento do quadro externo 
Um torcedor, preparando-se para a Copa do Mundo 
e dispondo de cortes de tecidos verde (180 cm x 150 cm) 
e amarelo (o quanto baste), deseja confeccionar a maior 
Bandeira Nacional possível a partir das medidas do tecido 
verde. 
Qual a medida, em centímetro, do lado do menor 
quadrado de tecido azul que deverá ser comprado para 
confecção do círculo da bandeira desejada?`,
    images: ['/enem/2020/images/enem_2020_d2_q136.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `27` },
      { id: 'B', type: 'text', value: `32` },
      { id: 'C', type: 'text', value: `53` },
      { id: 'D', type: 'text', value: `63` },
      { id: 'E', type: 'text', value: `90` },
    ],
    correct: 'D',
    explanation: `A questão fala que a bandeira terá (180cm x 150cm). Agora, com base nos requisitos da questão, O comprimento será dividido em 20M, tomando que o comprimento é a maior dimensão que é dada por 180cm, podemos calcular o valor de 1 módulo: 1 Módulo=180÷20=9cm Outro requisito é que o raio do círculo tem por medida 3,5M, como o diâmetro é o dobro do raio, então o diâmetro do círculo tem 2×3,5=7M . Como já sabemos que 1 módulo vale 9cm, podemos calcular o valor de 7 módulos: 7×9=69cm A questão quer saber o lado do menor quadrado de tecido para confeccionar o círculo da bandeira. O quadrado de menor lado terá a mesma medida do diâmetro do círculo que é 69cm.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 137,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Uma empresa de ônibus utiliza um sistema de 
vendas de passagens que fornece a imagem de todos 
os assentos do ônibus, diferenciando os assentos já 
vendidos, por uma cor mais escura, dos assentos ainda 
disponíveis. A empresa monitora, permanentemente, 
o número de assentos já vendidos e compara-o com 
o número total de assentos do ônibus para avaliar a 
necessidade de alocação de veículos extras. 
Na imagem tem-se a informação dos assentos já 
vendidos e dos ainda disponíveis em um determinado 
instante. 
A razão entre o número de assentos já vendidos e o total 
de assentos desse ônibus, no instante considerado na 
imagem, é`,
    images: ['/enem/2020/images/enem_2020_d2_q137.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `16 
42` },
      { id: 'B', type: 'text', value: `16 
26` },
      { id: 'C', type: 'text', value: `26 
42` },
      { id: 'D', type: 'text', value: `42 
26` },
      { id: 'E', type: 'text', value: `42 
16` },
    ],
    correct: 'A',
    explanation: `Calcularemos a probabilidade por: O total de assentos é dado por 42. Os assentos vendidos são 16. Assim:`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 138,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `A caixa-d’água de um edifício terá a forma de um 
paralelepípedo retângulo reto com volume igual a 
28 080 litros. Em uma maquete que representa o edifício, 
a caixa-d’água tem dimensões 2 cm × 3,51 cm × 4 cm. 
Dado: 1 dm³ = 1 L. 
A escala usada pelo arquiteto foi`,
    alternatives: [
      { id: 'A', type: 'text', value: `1 : 10` },
      { id: 'B', type: 'text', value: `1 : 100` },
      { id: 'C', type: 'text', value: `1 : 1 000` },
      { id: 'D', type: 'text', value: `1 : 10 000` },
      { id: 'E', type: 'text', value: `1 : 100 000` },
    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 139,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Os gráficos representam a produção de peças em 
uma indústria e as horas trabalhadas dos funcionários 
no período de cinco dias. Em cada dia, o gerente 
de produção aplica uma metodologia diferente de 
trabalho. Seu objetivo é avaliar a metodologia mais 
eficiente para utilizá-la como modelo nos próximos 
períodos. Sabe-se que, neste caso, quanto maior 
for a razão entre o número de peças produzidas e o 
número de horas trabalhadas, maior será a eficiência 
da metodologia. 
Em qual dia foi aplicada a metodologia mais eficiente?`,
    images: ['/enem/2020/images/enem_2020_d2_q139.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `5` },
    ],
    correct: 'C',
    explanation: `Faremos a razão entre o número de peças produzidas e o número de horas trabalhadas em cada dia: Como a maior razão ocorre no dia 3, essa é a nossa solução.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 140,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `O proprietário de um apartamento decidiu instalar 
porcelanato no piso da sala. Essa sala tem formato 
retangular com 3,2 m de largura e 3,6 m de comprimento. 
As peças do porcelanato têm formato de um quadrado 
com lado medindo 80 cm. Esse porcelanato é vendido em 
dois tipos de caixas, com os preços indicados a seguir. 
• Caixas do tipo A: 4 unidades de piso, R$ 35,00; 
• Caixas do tipo B: 3 unidades de piso, R$ 27,00. 
Na instalação do porcelanato, as peças podem ser 
recortadas e devem ser assentadas sem espaçamento 
entre elas, aproveitando-se ao máximo os recortes 
feitos. 
A compra que atende às necessidades do proprietário,
proporciona a menor sobra de pisos e resulta no menor
preço é`,
    alternatives: [
      { id: 'A', type: 'text', value: `5 caixas do tipo A.` },
      { id: 'B', type: 'text', value: `1 caixa do tipo A e 4 caixas do tipo B.` },
      { id: 'C', type: 'text', value: `3 caixas do tipo A e 2 caixas do tipo B.` },
      { id: 'D', type: 'text', value: `5 caixas do tipo A e 1 caixa do tipo B.` },
      { id: 'E', type: 'text', value: `6 caixas do tipo B.` },
    ],
    correct: 'C',
    explanation: `Área da sala: Área de cada peça de porcelanato: Assim, cabem peças de porcelanato. Dentre as alternativas, aquela que resulta em um total de 18 peças é a letra C, em que temos 3 caixas do tipo A e 2 caixas do tipo B`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 141,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Um hotel de 3 andares está sendo construído. Cada 
andar terá 100 quartos. Os quartos serão numerados de 
100 a 399 e cada um terá seu número afixado à porta. 
Cada número será composto por peças individuais, cada 
uma simbolizando um único algarismo. 
Qual a quantidade mínima de peças, simbolizando o 
algarismo 2, necessárias para identificar o número de 
todos os quartos?`,
    alternatives: [
      { id: 'A', type: 'text', value: `160` },
      { id: 'B', type: 'text', value: `157` },
      { id: 'C', type: 'text', value: `130` },
      { id: 'D', type: 'text', value: `120` },
      { id: 'E', type: 'text', value: `60` },
    ],
    correct: 'A',
    explanation: `Iremos listar todos os números de 100 a 199 que possuem o algarismo 2. São eles: 102, 112, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 132, 142, 152, 162, 172, 182, 192. Se contarmos, são 20 vezes que usamos o algarismo 2. &nbsp; Assim, também usamos a mesma quantidade de 300 a 399. &nbsp; Porém, de 200 a 299 temos 100 algarismos e, além dos 20 que contamos para a quantidade que contamos nas centenas anteriores, vamos considerar que em cada número de 200 a 299 tem um “2” no algarismo da centena. Isto é: &nbsp; De 100 a 199: 20 dígitos “2” De 200 a 299: 20 + 100 = 120 dígitos “2” De 300 a 399: 20 dígitos “2” &nbsp; Total: 20+120+20=160 dígitos.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 142,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `O Estatuto do Idoso, no Brasil, prevê certos 
direitos às pessoas com idade avançada, concedendo 
a estas, entre outros benefícios, a restituição de 
imposto de renda antes dos demais contribuintes. A 
tabela informa os nomes e as idades de 12 idosos 
que aguardam suas restituições de imposto de 
renda. Considere que, entre os idosos, a restituição 
seja concedida em ordem decrescente de idade e 
que, em subgrupos de pessoas com a mesma idade, 
a ordem seja decidida por sorteio. 
 
Nessas condições, a probabilidade de João ser a sétima 
pessoa do grupo a receber sua restituição é igual a`,
    images: ['/enem/2020/images/enem_2020_d2_q142.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 
12` },
      { id: 'B', type: 'text', value: `7 
12` },
      { id: 'C', type: 'text', value: `1 
8` },
      { id: 'D', type: 'text', value: `5 
6` },
      { id: 'E', type: 'text', value: `1 
4` },
    ],
    correct: 'E',
    explanation: `A questão diz que em subgrupos de pessoas da mesma idade, a ordem é decidida por sorteio. Temos que o João está no subgrupo dos 75 anos, onde possuem outros 3 idosos. A sétima pessoa da lista, será tirada desse subgrupo. Como será feito sorteio, a probabilidade terá 1 caso favorável (João ser sorteado) e 4 casos possíveis (João, Heloísa, Marisa e Pedro). Logo a probabilidade é dada por:`,
    subject: ['mat'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 143,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `No Brasil, o tempo necessário para um estudante 
realizar sua formação até a diplomação em um 
curso superior, considerando os 9 anos de ensino 
fundamental, os 3 anos do ensino médio e os 4 anos de 
graduação (tempo médio), é de 16 anos. No entanto, 
a realidade dos brasileiros mostra que o tempo médio 
de estudo de pessoas acima de 14 anos é ainda muito 
pequeno, conforme apresentado na tabela. 
Tempo médio de estudo de pessoas acima de 14 anos 
 
Disponível em: www.ibge.gov.br. Acesso em: 19 dez. 2012 (adaptado). 
Considere que o incremento no tempo de estudo, 
a cada período, para essas pessoas, se mantenha 
constante até o ano 2050, e que se pretenda chegar ao 
patamar de 70% do tempo necessário à obtenção do 
curso superior dado anteriormente. 
O ano em que o tempo médio de estudo de pessoas 
acima de 14 anos atingirá o percentual pretendido será`,
    images: ['/enem/2020/images/enem_2020_d2_q143.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `2018.` },
      { id: 'B', type: 'text', value: `2023.` },
      { id: 'C', type: 'text', value: `2031.` },
      { id: 'D', type: 'text', value: `2035.` },
      { id: 'E', type: 'text', value: `2043.` },
    ],
    correct: 'D',
    explanation: `Nesta questão temos duas sequências: a de ano da pesquisa e a de tempo de estudo. Ambas as questões são progressões aritméticas. A questão quer saber o tempo médio de estudo para as pessoas atingirem 70% do tempo necessário que é 16 anos. Primeiro vamos calcular 70% de 16. Observando que o tempo de estudo é uma p.a. de razão 0,6, vamos calcular agora, em quantos intervalos “n” o tempo de estudo atingirá 11,2 Agora que sabemos o n, vamos usar ele na outra progressão aritmética para descobrir o ano em que o tempo médio atinge 11,2 A p.a. do ano de pesquisa possui a razão igual a 4. Vamos substituir o n por 11 para encontrar a n Logo, o tempo médio atingirá 70% que é 11,2, em 2035.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 144,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Uma torneira está gotejando água em um balde 
com capacidade de 18 litros. No instante atual, o 
balde se encontra com ocupação de 50% de sua 
capacidade. A cada segundo caem 5 gotas de água 
da torneira, e uma gota é formada, em média, por 
5 × 10⁻² mL de água. 
Quanto tempo, em hora, será necessário para encher 
completamente o balde, partindo do instante atual?`,
    alternatives: [
      { id: 'A', type: 'text', value: `2 × 10¹` },
      { id: 'B', type: 'text', value: `1 × 10¹` },
      { id: 'C', type: 'text', value: `2 × 10⁻²` },
      { id: 'D', type: 'text', value: `1 × 10⁻²` },
      { id: 'E', type: 'text', value: `1 × 10⁻³` },
    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 145,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Um clube deseja produzir miniaturas em escala do 
troféu que ganhou no último campeonato. O troféu está 
representado na Figura 1 e é composto por uma base 
em formato de um paralelepípedo reto-retângulo de 
madeira, sobre a qual estão fi xadas três hastes verticais 
que sustentam uma esfera de 30 cm de diâmetro, que fi ca 
centralizada sobre a base de madeira. O troféu tem 100 cm 
de altura, incluída sua base. 
? 
8 cm 
50 cm 
50 cm 
10 cm 
Figura 1 
Figura 2 
A miniatura desse troféu deverá ser instalada 
no interior de uma caixa de vidro, em formato de 
paralelepípedo reto-retângulo, cujas dimensões internas 
de sua base estão indicadas na Figura 2, de modo que 
a base do troféu seja colada na base da caixa e distante 
das paredes laterais da caixa de vidro em pelo menos 1 cm. 
Deve ainda haver uma distância de exatos 2 cm entre o 
topo da esfera e a tampa dessa caixa de vidro. Nessas 
condições deseja-se fazer a maior miniatura possível. 
A medida da altura, em centímetro, dessa caixa de vidro 
deverá ser igual a`,
    images: ['/enem/2020/images/enem_2020_d2_q145.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `12.` },
      { id: 'B', type: 'text', value: `14.` },
      { id: 'C', type: 'text', value: `16.` },
      { id: 'D', type: 'text', value: `18.` },
      { id: 'E', type: 'text', value: `20.` },
    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 146,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Uma casa de dois andares está sendo projetada. 
É necessário incluir no projeto a construção de uma 
escada para o acesso ao segundo andar. Para o cálculo 
das dimensões dos degraus utilizam-se as regras: 
|2 h + b − 63,5| ≤ 1,5 e 16 ≤ h ≤ 19, 
nas quais h é a altura do degrau (denominada espelho) 
e b é a profundidade da pisada, como mostra a fi gura. 
Por conveniência, escolheu-se a altura do degrau como 
sendo h = 16. As unidades de h e b estão em centímetro. 
Nesse caso, o mais amplo intervalo numérico ao qual a 
profundidade da pisada ( b ) deve pertencer, para que as 
regras sejam satisfeitas é`,
    images: ['/enem/2020/images/enem_2020_d2_q146.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `30 ≤ b` },
      { id: 'B', type: 'text', value: `30 ≤ b ≤ 31,5` },
      { id: 'C', type: 'text', value: `30 ≤ b ≤ 33` },
      { id: 'D', type: 'text', value: `31,5 ≤ b ≤ 33` },
      { id: 'E', type: 'text', value: `b ≤ 33` },
    ],
    correct: 'C',
    explanation: `Antes do gabarito, relembremos a propriedade de inequação modular abaixo: Se | x| ≤ a , então -a ≤ x ≤ a . Conforme o enunciado devemos ter que: |32 + b &#8211; 63,5| ≤ 1,5 |b &#8211; 31,5| ≤ 1,5 -1,5 ≤ b &#8211; 31,5 ≤ 1,5 Separando em duas inequações: • -1,5 + 31,5 ≤ b → 30 ≤ b • b &#8211; 31,5 ≤ 1,5 → b ≤ 33 Assim, 30 ≤ b ≤ 33`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 147,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Muitos modelos atuais de veículos possuem 
computador de bordo. Os computadores informam em 
uma tela diversas variações de grandezas associadas 
ao desempenho do carro, dentre elas o consumo médio 
de combustível. Um veículo, de um determinado modelo, 
pode vir munido de um dos dois tipos de computadores 
de bordo: 
• Tipo A: informa a quantidade X de litro de 
combustível gasto para percorrer 100 quilômetros; 
• Tipo B: informa a quantidade de quilômetro que 
o veículo é capaz de percorrer com um litro de 
combustível. 
Um veículo utiliza o computador do Tipo A, e ao fi nal 
de uma viagem o condutor viu apresentada na tela a 
informação “ X /100”. 
Caso o seu veículo utilizasse o computador do Tipo B, o 
valor informado na tela seria obtido pela operação`,
    alternatives: [
      { id: 'A', type: 'text', value: `X ∙ 100` },
      { id: 'B', type: 'text', value: `X 
100` },
      { id: 'C', type: 'text', value: `100 
X` },
      { id: 'D', type: 'text', value: `1 
X` },
      { id: 'E', type: 'text', value: `1 ∙ X` },
    ],
    correct: 'C',
    explanation: `Consumimos X litros a cada 100 km . Assim, em 1 km consumimos litros. Dessa forma, podemos fazer a seguinte regra de três Multiplicando em cruz: Ou seja, irá aparecer no visor`,
    subject: ['mat'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 148,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `A Pesquisa Nacional por Amostra de Domicílios 
(Pnad) é uma pesquisa feita anualmente pelo IBGE, 
exceto nos anos em que há Censo. Em um ano, foram 
entrevistados 363 mil jovens para fazer um levantamento 
sobre suas atividades profissionais e/ou acadêmicas. Os 
resultados da pesquisa estão indicados no gráfico. 
Jovens em atividade entre 15 e 29 anos (%) 
45,2 
21,6 
19,6 
13,6 
Somente estuda 
Trabalha e estuda 
Somente 
Não trabalha 
trabalha 
nem estuda 
Disponível em: http://noticias.uol.com.br. Acesso em: 20 ago. 2014. 
De acordo com as informações dadas, o número de 
jovens entrevistados que trabalha é`,
    images: ['/enem/2020/images/enem_2020_d2_q148.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `114 708.` },
      { id: 'B', type: 'text', value: `164 076.` },
      { id: 'C', type: 'text', value: `213 444.` },
      { id: 'D', type: 'text', value: `284 592.` },
      { id: 'E', type: 'text', value: `291 582.` },
    ],
    correct: 'C',
    explanation: `Pela pesquisa, o total percentual de pessoas que trabalham é de 13,6 + 45,2 = 58,8% . Assim, temos um total de 363.000 ∙ 58,8% = 363.000 ∙ 0,588 = 213.444 pessoas.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 149,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `A Lei de Zipf, batizada com o nome do linguista
americano George Zipf, é uma lei empírica que
relaciona a frequência (f) de uma palavra em um
dado texto com o seu ranking (r). Ela é dada por
f = A/r^B.
O ranking da palavra é a sua posição ao ordenar as
palavras por ordem de frequência. Ou seja, r = 1 para a
palavra mais frequente, r = 2 para a segunda palavra mais
frequente e assim sucessivamente. A e B são constantes
positivas.
Diponível em: http://klein.sbm.org.br. Acesso em: 12 ago. 2020 (adatpado).
Com base nos valores de X = log(r) e Y = log(f), é
possível estimar valores para A e B.
No caso hipotético em que a lei é verificada exatamente,
a relação entre Y e X é`,
    alternatives: [
      { id: 'A', type: 'text', value: `Y = log(A) − B·X` },
      { id: 'B', type: 'text', value: `Y = log(A) / (X + log(B))` },
      { id: 'C', type: 'text', value: `Y = log(A)/B − X` },
      { id: 'D', type: 'text', value: `Y = log(A) / (B·X)` },
      { id: 'E', type: 'text', value: `Y = log(A) / X^B` },
    ],
    correct: 'A',
    explanation: `Para resolver essa questão, “tiraremos” o logaritmo dos dois lados da equação. Assim:`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 150,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Enquanto um ser está vivo, a quantidade de carbono 
14 nele existente não se altera. Quando ele morre, essa 
quantidade vai diminuindo. Sabe-se que a meia-vida do 
carbono 14 é de 5 730 anos, ou seja, num fóssil de um 
organismo que morreu há 5 730 anos haverá metade do 
carbono 14 que existia quando ele estava vivo. Assim, 
cientistas e arqueólogos usam a seguinte fórmula para 
− 
t 
5730 
saber a idade de um fóssil encontrado: Q t = Q 0 ∙ 2 
em que t é o tempo, medido em ano, Q t é a quantidade 
de carbono 14 medida no instante t e Q 0 é a quantidade 
de carbono 14 no ser vivo correspondente. 
Um grupo de arqueólogos, numa de suas expedições, 
encontrou 5 fósseis de espécies conhecidas e mediram 
a quantidade de carbono 14 neles existente. Na tabela 
temos esses valores juntamente com a quantidade de 
carbono 14 nas referidas espécies vivas. 
 
O fóssil mais antigo encontrado nessa expedição foi`,
    images: ['/enem/2020/images/enem_2020_d2_q150.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `2.` },
      { id: 'C', type: 'text', value: `3.` },
      { id: 'D', type: 'text', value: `4.` },
      { id: 'E', type: 'text', value: `5.` },
    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 151,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Uma das Sete Maravilhas do Mundo Moderno é o 
Templo de Kukulkán, localizado na cidade de Chichén 
Itzá, no México. Geometricamente, esse templo pode 
ser representado por um tronco reto de pirâmide de base 
quadrada. 
As quantidades de cada tipo de figura plana que formam 
esse tronco de pirâmide são`,
    alternatives: [
      { id: 'A', type: 'text', value: `2 quadrados e 4 retângulos.` },
      { id: 'B', type: 'text', value: `1 retângulo e 4 triângulos isósceles.` },
      { id: 'C', type: 'text', value: `2 quadrados e 4 trapézios isósceles.` },
      { id: 'D', type: 'text', value: `1 quadrado, 3 retângulos e 2 trapézios retângulos.` },
      { id: 'E', type: 'text', value: `2 retângulos, 2 quadrados e 2 trapézios retângulos.` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 152,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Um processo de aeração, que consiste na introdução 
de ar num líquido, acontece do seguinte modo: uma 
bomba B retira o líquido de um tanque T1 e o faz passar 
pelo aerador A1, que aumenta o volume do líquido em 
15%, e em seguida pelo aerador A2, ganhando novo 
aumento de volume de 10%. Ao final, ele fica armazenado 
num tanque T2, de acordo com a figura. 
A1 
A2 
T1 
B 
T2 
Os tanques T1 e T2 são prismas retos de bases 
retangulares, sendo que a base de T1 tem comprimento c e 
largura L, e a base de T2 tem comprimento c 
2 e largura 2L. 
Para 
finalizar 
o 
processo 
de 
aeração 
sem 
derramamento do líquido em T2, o responsável deve 
saber a relação entre a altura da coluna de líquido que já 
saiu de T1, denotada por X , e a altura da coluna de líquido 
que chegou a T2, denotada por y . 
Disponível em: www.dec.ufcg.edu.br. Acesso em: 21 abr. 2015. 
A equação que relaciona as medidas das alturas y e x é 
dada por`,
    images: ['/enem/2020/images/enem_2020_d2_q152.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `y = 1,265 x` },
      { id: 'B', type: 'text', value: `y = 1,250 x` },
      { id: 'C', type: 'text', value: `y = 1,150 x` },
      { id: 'D', type: 'text', value: `y = 1,125 x` },
      { id: 'E', type: 'text', value: `y = x` },
    ],
    correct: 'A',
    explanation: `O volume de T1 pode ser calculado por Como para chegar em T2 temos um aumento de 15% e depois de 10%, o volume de liquido dentro de T2 será Porém, o volume de T2 também pode ser calculado por Lembre-se eu não pode haver derramamento do líquido. Assim, essas duas equações para o volume de T2 são equivalentes e a equação que relaciona as duas alturas pode ser obtida por:`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 153,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Para chegar à universidade, um estudante utiliza 
um metrô e, depois, tem duas opções: 
• seguir num ônibus, percorrendo 2,0 km; 
• alugar uma bicicleta, ao lado da estação do metrô, 
seguindo 3,0 km pela ciclovia. 
O quadro fornece as velocidades médias do ônibus 
e da bicicleta, em km/h, no trajeto metrô−universidade. 
 
A fim de poupar tempo no deslocamento para a 
universidade, em quais dias o aluno deve seguir pela 
ciclovia?`,
    images: ['/enem/2020/images/enem_2020_d2_q153.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Às segundas, quintas e sextas-feiras.` },
      { id: 'B', type: 'text', value: `Às terças e quintas-feiras e aos sábados.` },
      { id: 'C', type: 'text', value: `Às segundas, quartas e sextas-feiras.` },
      { id: 'D', type: 'text', value: `Às terças, quartas e sextas-feiras.` },
      { id: 'E', type: 'text', value: `Às terças e quartas-feiras e aos sábados.` },
    ],
    correct: 'C',
    explanation: `A questão diz que De ônibus, é percorrido 2,0 km. De bicicleta, é percorrido 3,0 km. Vamos agora analisar o tempo que o aluno levaria de ônibus e de bicicleta em cada dia da semana. Para isso, vamos dividir a velocidade média por tempo que é percorrido de ônibus (2km) e de bicicleta(33km) Podemos ver que os únicos dias em que o tempo de bicicleta é menor do que o de ônibus é na segunda, quarta e sexta. São esses os dias em que o aluno deve seguir pela ciclovia.`,
    subject: ['mat'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 154,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Pesquisadores da Universidade de Tecnologia 
de Viena, na Áustria, produziram miniaturas de 
objetos em impressoras 3D de alta precisão. Ao 
serem ativadas, tais impressoras lançam feixes de 
laser sobre um tipo de resina, esculpindo o objeto 
desejado. O produto final da impressão é uma 
escultura microscópica de três dimensões, como 
visto na imagem ampliada. 
A escultura apresentada é uma miniatura de 
um carro de Fórmula 1, com 100 micrômetros de 
comprimento. Um micrômetro é a milionésima parte 
de um metro. 
Usando notação científica, qual é a representação do 
comprimento dessa miniatura, em metro?`,
    images: ['/enem/2020/images/enem_2020_d2_q154.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1,0 × 10 − 1` },
      { id: 'B', type: 'text', value: `1,0 × 10 − 3` },
      { id: 'C', type: 'text', value: `1,0 × 10 − 4` },
      { id: 'D', type: 'text', value: `1,0 × 10 − 6` },
      { id: 'E', type: 'text', value: `1,0 × 10 − 7` },
    ],
    correct: 'C',
    explanation: `A questão diz que a miniatura tem 100 micrômetros e que um micrômetro é a milionésima parte de um metro, ou seja: A questão quer saber qual é a representação, em metros, da miniatura. Devemos nos lembrar que a miniatura possui 100 micrômetros, e então temos que: &nbsp;`,
    subject: ['mat'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 155,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `O artista gráfico holandês Maurits Cornelius Escher criou belíssimas obras nas quais as imagens se repetiam, com diferentes tamanhos, induzindo ao raciocínio de repetição infinita das imagens. Inspirado por ele, um artista fez um rascunho de uma obra na qual propunha a ideia de construção de uma sequência de infinitos quadrados, cada vez menores, uns sob os outros, conforme indicado na figura.
O quadrado PRST, com lado de medida 1, é o ponto de partida. O segundo quadrado é construído sob ele tomando-se o ponto médio da base do quadrado anterior e criando-se um novo quadrado, cujo lado corresponde à metade dessa base. Essa sequência de construção se repete recursivamente.
Qual é a medida do lado do centésimo quadrado construído de acordo com esse padrão?`,
    images: ['/enem/2020/images/enem_2020_d2_q155.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `(1/2)¹⁰⁰` },
      { id: 'B', type: 'text', value: `(1/2)⁹⁹` },
      { id: 'C', type: 'text', value: `(1/2)⁹⁷` },
      { id: 'D', type: 'text', value: `(1/2)⁻⁹⁸` },
      { id: 'E', type: 'text', value: `(1/2)⁻⁹⁹` },
    
    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 156,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `O gerente de uma loja de cosméticos colocou à venda 
cinco diferentes tipos de perfume, tendo em estoque na 
loja as mesmas quantidades de cada um deles. O setor 
de controle de estoque encaminhou ao gerente registros 
gráficos descrevendo os preços unitários de cada 
perfume, em real, e a quantidade vendida de cada um 
deles, em percentual, ocorrida no mês de novembro. 
Preço do perfume por unidade (R$) 
200 
170 
150 
100 
80 
Perfume I 
Perfume II 
Perfume III 
Perfume IV 
Perfume V 
Porcentagem da quantidade vendida de 
cada perfume 
Perfume I 
13% 
Perfume II 
10% 
Perfume V 
32% 
Perfume III 
16% 
Perfume IV 
29% 
Dados a chegada do final de ano e o aumento das 
vendas, a gerência pretende aumentar a quantidade 
estocada do perfume do tipo que gerou a maior 
arrecadação em espécie, em real, no mês de novembro. 
Nessas condições, qual o tipo de perfume que deverá ter 
maior reposição no estoque?`,
    images: ['/enem/2020/images/enem_2020_d2_q156.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I` },
      { id: 'B', type: 'text', value: `II` },
      { id: 'C', type: 'text', value: `III` },
      { id: 'D', type: 'text', value: `IV` },
      { id: 'E', type: 'text', value: `V` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 157,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Amigo secreto é uma brincadeira tradicional nas festas
de fim de ano. Um grupo de amigos se reúne e cada um
deles sorteia o nome da pessoa que irá presentear. No dia
da troca de presentes, uma primeira pessoa presenteia
seu amigo secreto. Em seguida, o presenteado revela seu
amigo secreto e o presenteia. A brincadeira continua até que
todos sejam presenteados, mesmo no caso em que o ciclo
se fecha. Dez funcionários de uma empresa, entre eles um
casal, participarão de um amigo secreto. A primeira pessoa
a revelar será definida por sorteio.
Qual é a probabilidade de que a primeira pessoa a revelar
o seu amigo secreto e a última presenteada sejam as duas
pessoas do casal?`,
    alternatives: [
      { id: 'A', type: 'text', value: `1 
5` },
      { id: 'B', type: 'text', value: `1 
45` },
      { id: 'C', type: 'text', value: `1 
50` },
      { id: 'D', type: 'text', value: `1 
90` },
      { id: 'E', type: 'text', value: `1 
100` },

    ],
    correct: 'A',
    annulled: true,
    explanation: ``,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 158,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Três amigos, André, Bernardo e Carlos, moram em 
um condomínio fechado de uma cidade. O quadriculado 
representa a localização das ruas paralelas e 
perpendiculares, delimitando quadras de mesmo 
tamanho nesse condomínio, em que nos pontos A , B e C 
estão localizadas as casas de André, Bernardo e Carlos, 
respectivamente. 
B 
C 
A 
André deseja deslocar-se da sua casa até a casa 
de Bernardo, sem passar pela casa de Carlos, seguindo 
ao longo das ruas do condomínio, fazendo sempre 
deslocamentos para a direita ( → ) ou para cima ( ↑ ), 
segundo o esquema da figura. 
O número de diferentes caminhos que André poderá 
utilizar para realizar o deslocamento nas condições 
propostas é`,
    images: ['/enem/2020/images/enem_2020_d2_q158.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `4.` },
      { id: 'B', type: 'text', value: `14.` },
      { id: 'C', type: 'text', value: `17.` },
      { id: 'D', type: 'text', value: `35.` },
      { id: 'E', type: 'text', value: `48.` },
    ],
    correct: 'C',
    explanation: `Qualquer caminho de até deve ter 3 “passos” para cima e 4 “passos” para a direita. Assim, o número de caminhos de até corresponde ao número de anagramas da palavra . Ou seja. Número de caminhos de até . &nbsp; Para ir de até , passando por é um caminho do tipo . Para ir de até , devemos percorrer 2 “passos” para direita e 2 “passos” para cima. Ou seja, um total de: &nbsp; Para ir de até , devemos percorrer 2 “passos” para direita e 1 “passos” para cima. Ou seja, um total de: Número de caminhos de até , passando por . Como: &nbsp; Vale dizer que E temos então caminhos.`,
    subject: ['mat'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 159,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Uma pessoa precisa comprar 15 sacos de cimento
para uma reforma em sua casa. Faz pesquisa de preço em
cinco depósitos que vendem o cimento de sua preferência
e cobram frete para entrega do material, conforme a
distância do depósito à sua casa. As informações sobre
preço do cimento, valor do frete e distância do depósito
até a casa dessa pessoa estão apresentadas no quadro.
Depósito — Valor do saco de cimento (R$) — Valor do frete para cada quilômetro (R$) — Distância entre a casa e o depósito (km)
A — 23,00 — 1,00 — 10
B — 21,50 — 3,00 — 12
C — 22,00 — 1,50 — 14
D — 21,00 — 3,50 — 18
E — 24,00 — 2,50 — 2
A pessoa escolherá um desses depósitos para
realizar sua compra, considerando os preços do cimento
e do frete oferecidos em cada opção.
Se a pessoa decidir pela opção mais econômica, o depósito
escolhido para a realização dessa compra será o`,
    images: ['/enem/2020/images/enem_2020_d2_q159.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A.` },
      { id: 'B', type: 'text', value: `B.` },
      { id: 'C', type: 'text', value: `C.` },
      { id: 'D', type: 'text', value: `D.` },
      { id: 'E', type: 'text', value: `E.` },

    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 160,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Um motociclista planeja realizar uma viagem cujo 
destino fica a 500 km de sua casa. Sua moto consome 
5 litros de gasolina para cada 100 km rodados, e o 
tanque da moto tem capacidade para 22 litros. Pelo 
mapa, observou que no trajeto da viagem o último posto 
disponível para reabastecimento, chamado Estrela, fica a 
80 km do seu destino. Ele pretende partir com o tanque 
da moto cheio e planeja fazer somente duas paradas para 
reabastecimento, uma na ida e outra na volta, ambas no 
posto Estrela. No reabastecimento para a viagem de ida, 
deve considerar também combustível suficiente para se 
deslocar por 200 km no seu destino. 
A quantidade mínima de combustível, em litro, que 
esse motociclista deve reabastecer no posto Estrela na 
viagem de ida, que seja suficiente para fazer o segundo 
reabastecimento, é`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `13.` },
      { id: 'B', type: 'text', value: `14.` },
      { id: 'C', type: 'text', value: `17.` },
      { id: 'D', type: 'text', value: `18.` },
      { id: 'E', type: 'text', value: `21.` },
    ],
    correct: 'C',
    explanation: `O tanque tem capacidade para 22 L Temos que em 420 km, irá consumir: 420 km &#8211; x 100 km &#8211; 5 L Multiplicando cruzado temos que x = 21 L, Então, se o tanque cheio tem 22 L, como consumiu 21 L, sobrou 1 L. E em 80 km consome: 80 km &#8211; y 100 km &#8211; 5 L Multiplicando cruzado temos que y = 4 L E para deslocar por 200 km, irá consumir: 200 km &#8211; z 100 km &#8211; 5 L Multiplicando cruzado temos que z = 10 L &nbsp; Para chegar na cidade e ficar e voltar para o posto estrela, ele precisa então 4L + 10L + 4L = 18L Como havia sobrado 1L, então a quantidade mínima de combustível, em litro, que esse motociclista deve reabastecer no posto será 18L &#8211; 1L = 17 L`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 161,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Uma loja de materiais de construção vende dois tipos de 
caixas-d’água: tipo A e tipo B. Ambas têm formato cilíndrico e 
possuem o mesmo volume, e a altura da caixa-d’água do 
tipo B é igual a 25% da altura da caixa-d’água do tipo A. 
Se R denota o raio da caixa-d’água do tipo A, então o raio 
da caixa-d’água do tipo B é`,
    alternatives: [
      { id: 'A', type: 'text', value: `R 
2` },
      { id: 'B', type: 'text', value: `2 R` },
      { id: 'C', type: 'text', value: `4 R` },
      { id: 'D', type: 'text', value: `5 R` },
      { id: 'E', type: 'text', value: `16 R` },
    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 162,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `A lei municipal para a edificação de casas em lotes 
de uma cidade determina que sejam obedecidos os 
seguintes critérios: 
• afastamento mínimo de 4 m da rua; 
• afastamento mínimo de 1 m da divisa com outro lote; 
• área total construída da casa entre 40% e 50% da 
área total do lote. 
Um construtor submeteu para aprovação na 
prefeitura dessa cidade uma planta com propostas para a 
construção de casas em seus 5 lotes. Cada lote tem área 
medindo 200 m². 
A imagem apresenta um esquema, sem escala, 
no qual estão representados os lotes, as ruas e os 
afastamentos considerados nos projetos entre as 
casas e as divisas dos lotes. As medidas indicadas no 
esquema estão expressas em metro. 
1 
1 
4 
1 
1 
1 
Casa 1 
Casa 2 
Lote 
20 
20 
20 
4 
4 
10 
10 
Rua 
10 
10 
2 
4 
4 
2 
2 
1 
Lote 
Casa 3 
Casa 4 
Rua 
2 
4 
1 
4 
1 
Lote 
Casa 5 
1 
Lote 
A prefeitura aprovará apenas a planta da casa`,
    images: ['/enem/2020/images/enem_2020_d2_q162.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `2.` },
      { id: 'C', type: 'text', value: `3.` },
      { id: 'D', type: 'text', value: `4.` },
      { id: 'E', type: 'text', value: `5.` },
    ],
    correct: 'E',
    explanation: ``,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 163,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Nos livros Harry Potter , um anagrama do nome do 
personagem “TOM MARVOLO RIDDLE” gerou a frase 
“I AM LORD VOLDEMORT”. 
Suponha que Harry quisesse formar todos os 
anagramas da frase “I AM POTTER”, de tal forma 
que as vogais e consoantes aparecessem sempre 
intercaladas, e sem considerar o espaçamento entre 
as letras. 
Nessas condições, o número de anagramas formados 
é dado por`,
    alternatives: [
      { id: 'A', type: 'text', value: `9!` },
      { id: 'B', type: 'text', value: `4! 5!` },
      { id: 'C', type: 'text', value: `2 × 4! 5!` },
      { id: 'D', type: 'text', value: `9! 
2` },
      { id: 'E', type: 'text', value: `4! 5! 
2` },
    ],
    correct: 'E',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 164,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `A exposição a barulhos excessivos, como os que 
percebemos em geral em trânsitos intensos, casas 
noturnas e espetáculos musicais, podem provocar 
insônia, estresse, infarto, perda de audição, entre outras 
enfermidades. De acordo com a Organização Mundial 
da Saúde, todo e qualquer som que ultrapasse os 55 
decibéis (unidade de intensidade do som) já pode ser 
considerado nocivo para a saúde. O gráfico foi elaborado 
a partir da medição do ruído produzido, durante um dia, 
em um canteiro de obras. 
Decibel 
55 
0 
Hora 
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 
Disponível em: www.revistaencontro.com.br. Acesso em: 12 ago. 2020 (adaptado). 
Nesse dia, durante quantas horas o ruído esteve acima 
de 55 decibéis?`,
    images: ['/enem/2020/images/enem_2020_d2_q164.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `5` },
      { id: 'B', type: 'text', value: `8` },
      { id: 'C', type: 'text', value: `10` },
      { id: 'D', type: 'text', value: `11` },
      { id: 'E', type: 'text', value: `13` },
    ],
    correct: 'E',
    explanation: `Para calcular o total de horas, devemos olhar a parte do gráfico que ultrapassa 55 decibéis. A quantidade de horas que ultrapassa isso é dado, respectivamente, por: 3 + 3 + 3 + 1 + 3 = 13 horas.`,
    subject: ['mat'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 165,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `O técnico de um time de basquete pretende aumentar 
a estatura média de sua equipe de 1,93 m para, no 
mínimo, 1,99 m. Para tanto, dentre os 15 jogadores que 
fazem parte de sua equipe, irá substituir os quatro mais 
baixos, de estaturas: 1,78 m, 1,82 m, 1,84 m e 1,86 m. 
Para isso, o técnico contratou um novo jogador de 2,02 m. 
Os outros três jogadores que ele ainda precisa contratar 
devem satisfazer à sua necessidade de aumentar a média 
das estaturas da equipe. Ele fi xará a média das estaturas 
para os três jogadores que ainda precisa contratar dentro 
do critério inicialmente estabelecido. 
Qual deverá ser a média mínima das estaturas, em metro, 
que ele deverá fi xar para o grupo de três novos jogadores 
que ainda irá contratar?`,
    alternatives: [
      { id: 'A', type: 'text', value: `1,96` },
      { id: 'B', type: 'text', value: `1,98` },
      { id: 'C', type: 'text', value: `2,05` },
      { id: 'D', type: 'text', value: `2,06` },
      { id: 'E', type: 'text', value: `2,08` },
    ],
    correct: 'D',
    explanation: `Primeiro iremos achar a soma das alturas dos outros 11 jogadores e, para isso, iremos calcular a média. A média será dada pela somas das alturas dos jogadores sobre a quantidade de jogadores, logo: O técnico irá substituir os quatro mais baixos por outros para aumentar a média das alturas dos jogadores. Para isso, ele irá contratar um jogador com 2,02 m de altura e outros três afim de aumentar a média das alturas para, no mínimo, 1,99. Então temos que a nova média será dada por: Como temos que a soma das outras três alturas novas será 6,18 m, então para sabermos a média dessas três alturas, temos: Portanto, a média mínima das estaturas deverá ser 2,06 m.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 166,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `O consumo de espumantes no Brasil tem 
aumentado nos últimos anos. Uma das etapas do 
seu processo de produção consiste no envasamento 
da bebida em garrafas semelhantes às da imagem. 
Nesse processo, a vazão do líquido no interior da 
garrafa é constante e cessa quando atinge o nível de 
envasamento. 
Nível de envasamento 
da garrafa 
Qual esboço de gráfi co melhor representa a variação da 
altura do líquido em função do tempo, na garrafa indicada 
na imagem? 
altura`,
    images: ['/enem/2020/images/enem_2020_d2_q166.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'B',
    explanation: `Até o nível de envasamento da garrafa de espumante tem dois trechos, a contar de baixo para cima: &nbsp; Um trecho de largura constante, lembrando um cilindro. Um trecho de largura que varia, se afunilando, lembrando um tronco de cone. &nbsp; A vazão de água é constante. No trecho de largura constante, a altura vai aumentando linearmente, dada essa característica de largura homogênea. Isto é, o gráfico aumenta conforme uma função afim. No trecho de largura variável, o nível da água vai subindo cada vez mais rápido, uma vez que a taça vai afunilando, se tornando cada vez mais fina. Isto é, o gráfico a partir desse momento aumenta exponencialmente. &nbsp; A alternativa que mostra esse comportamento é a letra B.`,
    subject: ['mat'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 167,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `O quadro representa os gastos mensais, em real, 
de uma família com internet, mensalidade escolar e 
mesada do filho. 
Internet 
Mensalidade escolar 
Mesada do filho 
120 
700 
400 
No início do ano, a internet e a mensalidade escolar 
tiveram acréscimos, respectivamente, de 20% e 10%. 
Necessitando manter o valor da despesa mensal total 
com os itens citados, a família reduzirá a mesada do filho. 
Qual será a porcentagem da redução da mesada?`,
    alternatives: [
      { id: 'A', type: 'text', value: `15,0` },
      { id: 'B', type: 'text', value: `23,5` },
      { id: 'C', type: 'text', value: `30,0` },
      { id: 'D', type: 'text', value: `70,0` },
      { id: 'E', type: 'text', value: `76,5` },
    ],
    correct: 'B',
    explanation: `Temos que o total de gastos mensais será 120 + 700 + 400 = 1220 reais Como houve um acréscimo de 20% na internet e 10% na mensalidade escolar, temos então: &nbsp; Internet: &nbsp; Mensalidade escolar: &nbsp; Para manter o total de 1220, então mesada deverá ser: 144 + x + 770 = 1220 x + 914 = 1220 x = 1220 &#8211; 914 x = 306 &nbsp; Como 400 &#8211; 100% 306 &#8211; y &nbsp; Multiplicando cruzado, temos: &nbsp; Logo, 100% &#8211; 76,5% = 23,5% Portanto, a porcentagem de redução da mesada será 23,5%.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 168,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Num recipiente com a forma de paralelepípedo 
reto-retângulo, colocou-se água até a altura de 8 cm e 
um objeto, que ficou flutuando na superfície da água. 
Para retirar o objeto de dentro do recipiente, a altura 
da coluna de água deve ser de, pelo menos, 15 cm. Para 
a coluna de água chegar até essa altura, é necessário 
colocar dentro do recipiente bolinhas de volume igual a 
6 cm³ cada, que ficarão totalmente submersas. 
17 cm 
8 cm 
3 cm 
4 cm 
O número mínimo de bolinhas necessárias para que se 
possa retirar o objeto que flutua na água, seguindo as 
instruções dadas, é de`,
    images: ['/enem/2020/images/enem_2020_d2_q168.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `14.` },
      { id: 'B', type: 'text', value: `16.` },
      { id: 'C', type: 'text', value: `18.` },
      { id: 'D', type: 'text', value: `30.` },
      { id: 'E', type: 'text', value: `34.` },
    ],
    correct: 'A',
    explanation: ``,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 169,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Um grupo sanguíneo, ou tipo sanguíneo, baseia-se na 
presença ou ausência de dois antígenos, A e B, na superfície 
das células vermelhas do sangue. Como dois antígenos 
estão envolvidos, os quatro tipos sanguíneos distintos são: 
• Tipo A: apenas o antígeno A está presente; 
• Tipo B: apenas o antígeno B está presente; 
• Tipo AB: ambos os antígenos estão presentes; 
• Tipo O: nenhum dos antígenos está presente. 
Disponível em: http://saude.hsw.uol.com.br. Acesso em: 15 abr. 2012 (adaptado). 
Foram coletadas amostras de sangue de 200 pessoas 
e, após análise laboratorial, foi identificado que em 100 
amostras está presente o antígeno A, em 110 amostras 
há presença do antígeno B e em 20 amostras nenhum 
dos antígenos está presente. 
Dessas pessoas que foram submetidas à coleta de 
sangue, o número das que possuem o tipo sanguíneo A 
é igual a`,
    alternatives: [
      { id: 'A', type: 'text', value: `30.` },
      { id: 'B', type: 'text', value: `60.` },
      { id: 'C', type: 'text', value: `70.` },
      { id: 'D', type: 'text', value: `90.` },
      { id: 'E', type: 'text', value: `100.` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 170,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Antônio, Joaquim e José são sócios de uma 
empresa cujo capital é dividido, entre os três, em 
partes proporcionais a: 4, 6 e 6, respectivamente. Com 
a intenção de igualar a participação dos três sócios no 
capital da empresa, Antônio pretende adquirir uma fração 
do capital de cada um dos outros dois sócios. 
A fração do capital de cada sócio que Antônio deverá
adquirir é`,
    alternatives: [
      { id: 'A', type: 'text', value: `1/2` },
      { id: 'B', type: 'text', value: `1/3` },
      { id: 'C', type: 'text', value: `1/9` },
      { id: 'D', type: 'text', value: `2/3` },
      { id: 'E', type: 'text', value: `4/3` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 171,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Azulejo designa peça de cerâmica vitrificada e/ou 
esmaltada usada, sobretudo, no revestimento de paredes. A 
origem das técnicas de fabricação de azulejos é oriental, mas 
sua expansão pela Europa traz consigo uma diversificação 
de estilos, padrões e usos, que podem ser decorativos, 
utilitários e arquitetônicos. 
Disponível em: www.itaucultural.org.br. Acesso em: 31 jul. 2012. 
Azulejos no formato de octógonos regulares serão 
utilizados para cobrir um painel retangular conforme 
ilustrado na figura. 
Entre os octógonos e na borda lateral dessa área, 
será necessária a colocação de 15 azulejos de outros 
formatos para preencher os 15 espaços em branco do 
painel. Uma loja oferece azulejos nos seguintes formatos: 
1 - Triângulo retângulo isósceles; 
2 - Triângulo equilátero; 
3 - Quadrado. 
Os azulejos necessários para o devido preenchimento 
das áreas em branco desse painel são os de formato`,
    images: ['/enem/2020/images/enem_2020_d2_q171.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `3.` },
      { id: 'C', type: 'text', value: `1 e 2.` },
      { id: 'D', type: 'text', value: `1 e 3.` },
      { id: 'E', type: 'text', value: `2 e 3.` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 172,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `No período de fi m de ano, o síndico de um condomínio 
resolveu colocar, em um poste, uma iluminação natalina 
em formato de cone, lembrando uma árvore de Natal, 
conforme as fi guras 1 e 2. 
Poste 
h = 3 m 
c 
Figura 2 
Figura 1 
A árvore deverá ser feita colocando-se mangueiras 
de iluminação, consideradas segmentos de reta de 
mesmo comprimento, a partir de um ponto situado a 3 m 
de altura no poste até um ponto de uma circunferência de 
fi xação, no chão, de tal forma que esta fi que dividida em 
20 arcos iguais. O poste está fi xado no ponto C (centro 
da circunferência) perpendicularmente ao plano do chão. 
Para economizar, ele utilizará mangueiras de 
iluminação aproveitadas de anos anteriores, que juntas 
totalizaram pouco mais de 100 m de comprimento, dos 
quais ele decide usar exatamente 100 m e deixar o 
restante como reserva. 
Para que ele atinja seu objetivo, o raio, em metro, da 
circunferência deverá ser de`,
    images: ['/enem/2020/images/enem_2020_d2_q172.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `4,00.` },
      { id: 'B', type: 'text', value: `4,87.` },
      { id: 'C', type: 'text', value: `5,00.` },
      { id: 'D', type: 'text', value: `5,83.` },
      { id: 'E', type: 'text', value: `6,26.` },
    ],
    correct: 'A',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 173,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Pergolado é o nome que se dá a um tipo de cobertura 
projetada por arquitetos, comumente em praças e jardins, 
para criar um ambiente para pessoas ou plantas, no qual 
há uma quebra da quantidade de luz, dependendo da 
posição do sol. É feito como um estrado de vigas iguais, 
postas paralelas e perfeitamente em fi la, como ilustra a 
fi gura. 
30 cm 
30 cm 
Um arquiteto projeta um pergolado com vãos de 
30 cm de distância entre suas vigas, de modo que, no 
solstício de verão, a trajetória do sol durante o dia seja 
realizada num plano perpendicular à direção das vigas, 
e que o sol da tarde, no momento em que seus raios 
fi zerem 30° com a posição a pino, gere a metade da luz 
que passa no pergolado ao meio-dia. 
Para atender à proposta do projeto elaborado pelo 
arquiteto, as vigas do pergolado devem ser construídas 
de maneira que a altura, em centímetro, seja a mais 
próxima possível de`,
    images: ['/enem/2020/images/enem_2020_d2_q173.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `9.` },
      { id: 'B', type: 'text', value: `15.` },
      { id: 'C', type: 'text', value: `26.` },
      { id: 'D', type: 'text', value: `52.` },
      { id: 'E', type: 'text', value: `60.` },
    ],
    correct: 'C',
    explanation: `Com o sol a pino, ou seja, ao meio-dia, os raios de sol estão perpendiculares as vigas. Nesse momento a luminosidade que passa é 100% da área não protegida por elas. Como sabemos que, quando o sol está na posição pedida a iluminação é de metade da área total, ou seja, apenas 15 cm dos 30cm entre uma viga e outra. Assim, a situação pode ser representada pela imagem a seguir:`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 174,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `O fenômeno das manifestações populares de massa traz à discussão como estimar o número de pessoas
presentes nesse tipo de evento. Uma metodologia usada é: no momento do ápice do evento, é feita uma foto aérea
da via pública principal na área ocupada, bem como das vias afluentes que apresentem aglomerações de pessoas
que acessam a via principal. A foto é sobreposta por um mapa virtual das vias, ambos na mesma escala, fazendo-se
um esboço geométrico da situação. Em seguida, subdivide-se o espaço total em trechos, quantificando a densidade,
da seguinte forma:
• 4 pessoas por metro quadrado, se elas estiverem andando em uma mesma direção;
• 5 pessoas por metro quadrado, se elas estiverem se movimentando sem deixar o local;
• 6 pessoas por metro quadrado, se elas estiverem paradas.
É feito, então, o cálculo do total de pessoas, considerando os diversos trechos, e desconta-se daí 1 000 pessoas
para cada carro de som fotografado.
Com essa metodologia, procederam-se aos cálculos para estimar o número de participantes na manifestação cujo
esboço geométrico é dado na figura. Há três trechos na via principal: MN, NO e OP, e um trecho numa via afluente
da principal: QR.
Obs.: a figura não está em escala (considere as medidas dadas).
Segundo a metodologia descrita, o número estimado de pessoas presentes a essa manifestação foi igual a`,
    images: ['/enem/2020/images/enem_2020_d2_q174.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `110 000.` },
      { id: 'B', type: 'text', value: `104 000.` },
      { id: 'C', type: 'text', value: `93 000.` },
      { id: 'D', type: 'text', value: `92 000.` },
      { id: 'E', type: 'text', value: `87 000.` },

    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 175,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Um administrador resolve estudar o lucro de sua empresa e, para isso, traca o gráfico da receita e do custo de 
produção de seus itens, em real, em função da quantidade de itens produzidos. 
R$ 
55 
50 
45 
40 
35 
30 
25 
20 
15 
10 
5 
5 
10 
15 
20 
25 
30 
0 
O lucro é determinado pela diferença: Receita - Custo. 
O gráfico que representa o lucro dessa empresa, em função da quantidade de itens produzidos, e 
R$ 
40 
35 
30 
25 
20 
15`,
    images: ['/enem/2020/images/enem_2020_d2_q175.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'A',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 176,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Em um jogo desenvolvido para uso no computador, objetos tridimensionais vao descendo do alto da tela ate 
alcançarem o plano da base. O usuário pode mover ou girar cada objeto durante sua descida para posiciona-lo 
convenientemente no plano horizontal. Um desses objetos é formado pela justaposição de quatro cubos idênticos, 
formando assim um sólido rígido, como ilustrado na figura. 
Para facilitar a movimentação do objeto pelo usuário, o programa projeta ortogonalmente esse solido em tres 
planos quadriculados perpendiculares entre si, durante sua descida. 
A figura que apresenta uma possível posição desse sólido, com suas respectivas projeções ortogonais sobre os três 
planos citados, durante sua descida e`,
    images: ['/enem/2020/images/enem_2020_d2_q176.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'E',
    explanation: `A projeção ortogonal correta é a que vemos na letra E. Podemos perceber isso conectando os cantos dos blocos às paredes ortogonalmente.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 177,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `A Figura 1 apresenta uma casa e a planta do seu
telhado, em que as setas indicam o sentido do escoamento
da água de chuva. Um pedreiro precisa fazer a planta do
escoamento da água de chuva de um telhado que tem
três caídas de água, como apresentado na Figura 2.
A figura que representa a planta do telhado da Figura 2 com
o escoamento da água de chuva que o pedreiro precisa
fazer é`,
    images: ['/enem/2020/images/enem_2020_d2_q177.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'B',
    explanation: `No enunciado diz que o telhado é dividido em 3 partes. Com isso, pensaremos na alternativa que mostra a direção do escoamento da água. A alternativa que representa isso é a de letra B.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 178,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Suponha que uma equipe de corrida de automóveis 
disponha de cinco tipos de pneu (I, II, III, IV, V), em que 
o fator de eficiência climática EC (índice que fornece o 
comportamento do pneu em uso, dependendo do clima) 
é apresentado: 
• EC do pneu I: com chuva 6, sem chuva 3; 
• EC do pneu II: com chuva 7, sem chuva −4; 
• EC do pneu III: com chuva −2, sem chuva 10; 
• EC do pneu IV: com chuva 2, sem chuva 8; 
• EC do pneu V: com chuva − 6, sem chuva 7 . 
O coeficiente de rendimento climático (CRC) de um 
pneu é calculado como a soma dos produtos dos fatores 
de EC, com ou sem chuva, pelas correspondentes 
probabilidades de se ter tais condições climáticas: 
ele é utilizado para determinar qual pneu deve ser 
selecionado para uma dada corrida, escolhendo-se o 
pneu que apresentar o maior CRC naquele dia. No dia 
de certa corrida, a probabilidade de chover era de 70% 
e o chefe da equipe calculou o CRC de cada um dos 
cinco tipos de pneu. 
O pneu escolhido foi`,
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },
    ],
    correct: 'A',
    explanation: `O coeficiente de rendimento climático é calculado como a soma dos produtos dos fatores EC, pelas correspondentes probabilidades de se ter tais condições climáticas. Probabilidade de chover: 70% Probabilidade de não chover: 30% Assim, calcularemos o CRC de cada questão. 6 ∙ 70 + 3 ∙ 30 = 420 + 90 = 510 7 ∙ 70 + (-4) ∙ 30 = 490 – 120 = 370 -2 ∙ 70 + 10 ∙ 30 = -140 + 300 = 160 2 ∙ 70 + 8 ∙ 30 = 140 + 240 = 380 -6 ∙ 70 + 7 ∙ 30 = -420 + 210 = -210 Temos que o pneu escolhido foi o de número 1.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 179,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Um pé de eucalipto em idade adequada para o corte 
rende, em média, 20 mil folhas de papel A4. A densidade 
superficial do papel A4, medida pela razão da massa de 
uma folha desse papel por sua área, é de 75 gramas por 
metro quadrado, e a área de uma folha de A4 é 0,062 
metro quadrado. 
Disponível em: http://revistagalileu.globo.com. Acesso em: 28 fev. 2013 (adaptado). 
Nessas condições, quantos quilogramas de papel rende, 
em média, um pé de eucalipto?`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `4 301` },
      { id: 'B', type: 'text', value: `1 500` },
      { id: 'C', type: 'text', value: `930` },
      { id: 'D', type: 'text', value: `267` },
      { id: 'E', type: 'text', value: `93` },
    ],
    correct: 'E',
    explanation: ``,
    subject: ['mat'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 180,
    exam: 'enem',
    year: 2020,
    day: 2,
    text: `Com o objetivo de contratar uma empresa responsável 
pelo serviço de atendimento ao público, os executivos 
de uma agência bancária realizaram uma pesquisa de 
satisfação envolvendo cinco empresas especializadas 
nesse segmento. Os procedimentos analisados (com 
pesos que medem sua importância para a agência) e 
as respectivas notas que cada empresa recebeu estão 
organizados no quadro. 
 
A agência bancária contratará a empresa com a maior 
média ponderada das notas obtidas nos procedimentos 
analisados. 
Após a análise dos resultados da pesquisa de satisfação, 
os executivos da agência bancária contrataram a empresa`,
    images: ['/enem/2020/images/enem_2020_d2_q180.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `X.` },
      { id: 'B', type: 'text', value: `Y.` },
      { id: 'C', type: 'text', value: `Z.` },
      { id: 'D', type: 'text', value: `W.` },
      { id: 'E', type: 'text', value: `T.` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
];

export default ENEM_2020_D2;
