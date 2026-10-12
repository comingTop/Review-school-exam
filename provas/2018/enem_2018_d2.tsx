import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2018_D2: QuizQuestion[] = [
  {
    id: 91,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Pesquisas demonstram que nanodispositivos baseados em movimentos de dimensões atômicas, induzidos por 
luz, poderão ter aplicações em tecnologias futuras, substituindo micromotores, sem a necessidade de componentes 
mecânicos. Exemplo de movimento molecular induzido pela luz pode ser observado pela flexão de uma lâmina delgada de 
silício, ligado a um polímero de azobenzeno e a um material suporte, em dois comprimentos de onda, conforme ilustrado na figura. 
Com a aplicação de luz ocorrem reações reversíveis da cadeia do polímero, que promovem o movimento observado. 
365 nm 
420 nm 
TOMA, H. E. A nanotecnologia das moléculas. Química Nova na Escola , n. 21, maio 2005 (adaptado). 
O fenômeno de movimento molecular, promovido pela incidência de luz, decorre do(a)`,
    images: ['/enem/2018/images/enem_2018_d2_q91.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `movimento vibracional dos átomos, que leva ao encurtamento e à relaxação das ligações.` },
      { id: 'B', type: 'text', value: `isomerização das ligações N = N, sendo a forma cis do polímero mais compacta que a trans.` },
      { id: 'C', type: 'text', value: `tautomerização das unidades monoméricas do polímero, que leva a um composto mais compacto.` },
      { id: 'D', type: 'text', value: `ressonância entre os elétrons π do grupo azo e os do anel aromático que encurta as ligações duplas.` },
      { id: 'E', type: 'text', value: `variação conformacional das ligações N = N, que resulta em estruturas com diferentes áreas de superfície.` },
    ],
    correct: 'B',
    explanation: `Quando os grupamentos iguais estão do mesmo lado no plano de simetria temos um composto cis e quando estão em lados opostos temos um composto trans. Portanto é o composto cis que tem movimento molecular promovido pela incidência de luz.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 92,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O carro flex é uma realidade no Brasil. Estes veículos estão equipados com motor que tem a capacidade de
funcionar com mais de um tipo de combustível. No entanto, as pessoas que têm esse tipo de veículo, na hora
do abastecimento, têm sempre a dúvida: álcool ou gasolina? Para avaliar o consumo desses combustíveis,
realizou-se um percurso com um veículo flex, consumindo 40 litros de gasolina e no percurso de volta utilizou-se etanol.
Foi considerado o mesmo consumo de energia tanto no percurso de ida quanto no de volta.
O quadro resume alguns dados aproximados sobre esses combustíveis.
Combustível — Densidade (g/mL) — Calor de combustão (kcal/g)
Etanol — 0,8 — −6
Gasolina — 0,7 — −10
O volume de etanol combustível, em litro, consumido no percurso de volta é mais próximo de`,
    images: ['/enem/2018/images/enem_2018_d2_q92.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `27.` },
      { id: 'B', type: 'text', value: `32.` },
      { id: 'C', type: 'text', value: `37.` },
      { id: 'D', type: 'text', value: `58.` },
      { id: 'E', type: 'text', value: `67.` },

    ],
    correct: 'D',
    explanation: `40 L de gasolina (d = 0,7 g.mL -1 ) 40 L = 40000 mL &nbsp; d = m (g) / V (mL) 0,7 = m (g) / 40000 mL m = 28000 g de Gasolina &nbsp; 1 g Gasolina ____ 10 kcal 280000 g ____ x x = 280000 kcal (energia liberada) Etanol (d = 0,8 g.mL -1 ) 1 g Etanol ____ 6 kcal y ____ 280000 kcal y = 46667 g de Etanol d = m (g) / V (mL) 0,8 g.mL -1 = 46667 g / V (mL) V = 58 mL de Etanol`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 93,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Em 1938 o arqueólogo alemão Wilhelm König, diretor 
do Museu Nacional do Iraque, encontrou um objeto 
estranho na coleção da instituição, que poderia ter sido 
usado como uma pilha, similar às utilizadas em nossos 
dias. A suposta pilha, datada de cerca de 200 a.C., é 
constituída de um pequeno vaso de barro (argila) no qual 
foram instalados um tubo de cobre, uma barra de ferro 
(aparentemente corroída por ácido) e uma tampa de 
betume (asfalto), conforme ilustrado. Considere os
potenciais-padrão de redução: E(Fe²⁺|Fe) = −0,44 V;
E(H⁺|H₂) = 0,00 V; e E(Cu²⁺|Cu) = +0,34 V.
Tampa de 
betume 
Barra de ferro 
Tubo de cobre 
Vestígio 
de ácido 
Vaso de 
barro 
As pilhas de Bagdá e a acupuntura . Disponível em: http://jornalggn.com.br. 
Acesso em: 14 dez. 2014 (adaptado). 
Nessa suposta pilha, qual dos componentes atuaria como 
cátodo?`,
    images: ['/enem/2018/images/enem_2018_d2_q93.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A tampa de betume.` },
      { id: 'B', type: 'text', value: `O vestígio de ácido.` },
      { id: 'C', type: 'text', value: `A barra de ferro.` },
      { id: 'D', type: 'text', value: `O tubo de cobre.` },
      { id: 'E', type: 'text', value: `O vaso de barro.` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 94,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Anabolismo e catabolismo são processos celulares 
antagônicos, que são controlados principalmente pela 
ação hormonal. Por exemplo, no fígado a insulina atua 
como um hormônio com ação anabólica, enquanto o 
glucagon tem ação catabólica e ambos são secretados 
em resposta ao nível de glicose sanguínea. 
Em caso de um indivíduo com hipoglicemia, o hormônio 
citado que atua no catabolismo induzirá o organismo a`,
    alternatives: [
      { id: 'A', type: 'text', value: `realizar a fermentação lática.` },
      { id: 'B', type: 'text', value: `metabolizar aerobicamente a glicose.` },
      { id: 'C', type: 'text', value: `produzir aminoácidos a partir de ácidos graxos.` },
      { id: 'D', type: 'text', value: `transformar ácidos graxos em glicogênio.` },
      { id: 'E', type: 'text', value: `estimular a utilização do glicogênio.` },
    ],
    correct: 'E',
    explanation: `O glucagon é secretado em situações de hipoglicemia, mobilizando reservas energéticas, como o glicogênio hepático.`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 95,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Usando um densímetro cuja menor divisão da escala, 
isto é, a diferença entre duas marcações consecutivas, 
é de 5,0 × 10⁻² g/cm³, um estudante realizou um teste 
de densidade: colocou este instrumento na água pura e 
observou que ele atingiu o repouso na posição mostrada. 
Legenda: 
Densímetro 
Água 
Em dois outros recipientes A e B contendo 2 litros de 
água pura, em cada um, ele adicionou 100 g e 200 g de 
NaCl, respectivamente. 
Quando o cloreto de sódio é adicionado à água 
pura ocorre sua dissociação formando os íons Na⁺ e
Cl⁻. Considere que esses íons ocupam os espaços 
intermoleculares na solução. 
Nestes recipientes, a posição de equilíbrio do densímetro 
está representada em: 
A 
B 
A 
A 
B 
B`,
    images: ['/enem/2018/images/enem_2018_d2_q95.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['fis'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 96,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Para serem absorvidos pelas células do intestino 
humano, os lipídios ingeridos precisam ser primeiramente 
emulsificados. Nessa etapa da digestão, torna-se 
necessária a ação dos ácidos biliares, visto que os 
lipídios apresentam uma natureza apolar e são insolúveis 
em água. 
Esses ácidos atuam no processo de modo a`,
    alternatives: [
      { id: 'A', type: 'text', value: `hidrolisar os lipídios.` },
      { id: 'B', type: 'text', value: `agir como detergentes.` },
      { id: 'C', type: 'text', value: `tornar os lipídios anfifílicos.` },
      { id: 'D', type: 'text', value: `promover a secreção de lipases.` },
      { id: 'E', type: 'text', value: `estimular o trânsito intestinal dos lipídios.` },
    ],
    correct: 'B',
    explanation: `Durante a digestão temos a liberação da bile, produzida no fígado e liberada pela vesícula biliar, na região do duodeno. A função dela é de emulsificar a gordura, ou seja, atuar como um “detergente”, aumentando a superfície de contato e facilitando a atuação das enzimas lipases.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 97,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A tecnologia de comunicação da etiqueta RFID 
(chamada de etiqueta inteligente) é usada há anos 
para rastrear gado, vagões de trem, bagagem aérea e 
carros nos pedágios. Um modelo mais barato dessas 
etiquetas pode funcionar sem baterias e é constituído 
por três componentes: um microprocessador de silício; 
uma bobina de metal, feita de cobre ou de alumínio, que 
é enrolada em um padrão circular; e um encapsulador, 
que é um material de vidro ou polímero envolvendo 
o microprocessador e a bobina. Na presença de um 
campo de radiofrequência gerado pelo leitor, a etiqueta 
transmite sinais. A distância de leitura é determinada 
pelo tamanho da bobina e pela potência da onda de 
rádio emitida pelo leitor. 
Disponível em: http://eletronicos.hsw.uol.com.br. Acesso em: 27 fev. 2012 (adaptado). 
A etiqueta funciona sem pilhas porque o campo`,
    alternatives: [
      { id: 'A', type: 'text', value: `elétrico da onda de rádio agita elétrons da bobina.` },
      { id: 'B', type: 'text', value: `elétrico da onda de rádio cria uma tensão na bobina.` },
      { id: 'C', type: 'text', value: `magnético da onda de rádio induz corrente na bobina.` },
      { id: 'D', type: 'text', value: `magnético da onda de rádio aquece os fios da bobina.` },
      { id: 'E', type: 'text', value: `magnético da onda de rádio diminui a ressonância no 
interior da bobina.` },
    ],
    correct: 'C',
    explanation: `Com a bobina posicionada em um campo magnético variável, há indução de corrente elétrica (lei de Faraday-Lenz), o que aciona a transmissão de sinais.`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 98,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Corredores ecológicos visam mitigar os efeitos da 
fragmentação dos ecossistemas promovendo a ligação 
entre diferentes áreas, com o objetivo de proporcionar o 
deslocamento de animais, a dispersão de sementes e o 
aumento da cobertura vegetal. São instituídos com base 
em informações como estudos sobre o deslocamento 
de espécies, sua área de vida (área necessária para o 
suprimento de suas necessidades vitais e reprodutivas) e 
a distribuição de suas populações. 
Disponível em: www.mma.gov.br. Acesso em: 30 nov. 2017 (adaptado). 
Nessa estratégia, a recuperação da biodiversidade é 
efetiva porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `propicia o fluxo gênico.` },
      { id: 'B', type: 'text', value: `intensifica o manejo de espécies.` },
      { id: 'C', type: 'text', value: `amplia o processo de ocupação humana.` },
      { id: 'D', type: 'text', value: `aumenta o número de indivíduos nas populações.` },
      { id: 'E', type: 'text', value: `favorece a formação de ilhas de proteção integral.` },
    ],
    correct: 'A',
    explanation: `Os corredores ecológicos favorecem a migração e o encontro de populações de diferentes fragmentos, permitindo assim o fluxo gênico entre elas.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 99,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A identificação de riscos de produtos perigosos para o 
transporte rodoviário é obrigatória e realizada por meio da 
sinalização composta por um painel de segurança, de cor 
alaranjada, e um rótulo de risco. As informações inseridas 
no painel de segurança e no rótulo de risco, conforme 
determina a legislação, permitem que se identifique o 
produto transportado e os perigos a ele associados. 
A sinalização mostrada identifica uma substância que 
está sendo transportada em um caminhão. 
268 
1005 
GAS 
TÓXICO 
2 
Os três algarismos da parte superior do painel indicam 
o “Número de risco”. O número 268 indica tratar-se de um 
gás (2), tóxico (6) e corrosivo (8). Os quatro dígitos da 
parte inferior correspondem ao “Número ONU”, que 
identifica o produto transportado. 
BRASIL. Resolução n. 420 , de 12/02/2004, da Agência Nacional de Transportes Terrestres 
(ANTT)/Ministério dos Transportes (adaptado). 
ABNT. NBR 7500 : identificação para o transporte terrestre, manuseio, movimentação e 
armazenamento de produtos. Rio de Janeiro, 2004 (adaptado). 
Considerando a identificação apresentada no caminhão, 
o código 1005 corresponde à substância`,
    images: ['/enem/2018/images/enem_2018_d2_q99.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `eteno (C₂ H₄ ).` },
      { id: 'B', type: 'text', value: `nitrogênio (N₂ ).` },
      { id: 'C', type: 'text', value: `amônia (NH₃ ).` },
      { id: 'D', type: 'text', value: `propano (C₃ H₈ ).` },
      { id: 'E', type: 'text', value: `dióxido de carbono (CO₂ ).` },
    ],
    correct: 'C',
    explanation: `O composto apresentado deve ser um gás, tóxico e corrosivo. Dentre os apresentados somente a amônia (NH₃ ) possui tais características.`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 100,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `No ciclo celular atuam moléculas reguladoras. Dentre 
elas, a proteína p53 é ativada em resposta a mutações 
no DNA, evitando a progressão do ciclo até que os danos 
sejam reparados, ou induzindo a célula à autodestruição. 
ALBERTS, B. et al. Fundamentos da biologia celular . 
Porto Alegre: Artmed, 2011 (adaptado). 
A ausência dessa proteína poderá favorecer a`,
    alternatives: [
      { id: 'A', type: 'text', value: `redução da síntese de DNA, acelerando o ciclo celular.` },
      { id: 'B', type: 'text', value: `saída imediata do ciclo celular, antecipando a proteção 
do DNA.` },
      { id: 'C', type: 'text', value: `ativação de outras proteínas reguladoras, induzindo 
a apoptose.` },
      { id: 'D', type: 'text', value: `manutenção da estabilidade genética, favorecendo a 
longevidade.` },
      { id: 'E', type: 'text', value: `proliferação 
celular 
exagerada, 
resultando 
na 
formação de um tumor.` },
    ],
    correct: 'E',
    explanation: `Como a proteína P53 regula o ciclo de divisão celular, impedindo a multiplicação de células mutantes, a ausência desta favorecerá a proliferação celular exagerada, resultando na formação de tumores.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 101,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O deserto é um bioma que se localiza em regiões de 
pouca umidade. A fauna é, predominantemente, composta 
por animais roedores, aves, répteis e artrópodes. 
Uma adaptação, associada a esse bioma, presente nos 
seres vivos dos grupos citados é o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `existência de numerosas glândulas sudoríparas na 
epiderme.` },
      { id: 'B', type: 'text', value: `eliminação de excretas nitrogenadas de forma 
concentrada.` },
      { id: 'C', type: 'text', value: `desenvolvimento do embrião no interior de ovo com casca.` },
      { id: 'D', type: 'text', value: `capacidade de controlar a temperatura corporal.` },
      { id: 'E', type: 'text', value: `respiração realizada por pulmões foliáceos.` },
    ],
    correct: 'B',
    explanation: `A eliminação de urina mais concentrada reduz a perda de água, evitando a desidratação em ambientes secos. Isso acontece pois há liberação do hormônio ADH, que promove o aumento da permeabilidade e a reabsorção de água no sistema excretor, além de estruturas glomerulares pequenas e uma alça néfrica desenvolvida, como no caso dos roedores. Já as aves, répteis e artrópodes excretam ácido úrico, que é insolúvel em água e evita a perda deste recurso.`,
    subject: ['bio'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 102,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O sulfeto de mercúrio(II) foi usado como pigmento 
vermelho para pinturas de quadros e murais. Esse 
pigmento, conhecido como vermilion , escurece com 
o passar dos anos, fenômeno cuja origem é alvo de 
pesquisas. Aventou-se a hipótese de que o vermilion 
seja decomposto sob a ação da luz, produzindo uma fina 
camada de mercúrio metálico na superfície. Essa reação 
seria catalisada por íon cloreto presente na umidade do ar. 
WOGAN, T. Mercury's Dark Influence on Art . Disponível em: www.chemistryworld.com. 
Acesso em: 26 abr. 2018 (adaptado). 
Segundo a hipótese proposta, o íon cloreto atua na 
decomposição fotoquímica do vermilion`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `reagindo como agente oxidante.` },
      { id: 'B', type: 'text', value: `deslocando o equilíbrio químico.` },
      { id: 'C', type: 'text', value: `diminuindo a energia de ativação.` },
      { id: 'D', type: 'text', value: `precipitando cloreto de mercúrio.` },
      { id: 'E', type: 'text', value: `absorvendo a energia da luz visível.` },
    ],
    correct: 'C',
    explanation: `O íon cloreto age como catalisador, portanto ele irá diminuir a energia de ativação da reação.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 103,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O sonorizador é um dispositivo físico implantado 
sobre a superfície de uma rodovia de modo que provoque 
uma trepidação e ruído quando da passagem de um 
veículo sobre ele, alertando para uma situação atípica à 
frente, como obras, pedágios ou travessia de pedestres. 
Ao passar sobre os sonorizadores, a suspensão do veículo 
sofre vibrações que produzem ondas sonoras, resultando em 
um barulho peculiar. Considere um veículo que passe com 
velocidade constante igual a 108 km 
h sobre um sonorizador 
cujas faixas são separadas por uma distância de 8 cm. 
Disponível em: www.denatran.gov.br. Acesso em: 2 set. 2015 (adaptado). 
A frequência da vibração do automóvel percebida pelo 
condutor durante a passagem nesse sonorizador é mais 
próxima de`,
    alternatives: [
      { id: 'A', type: 'text', value: `8,6 hertz.` },
      { id: 'B', type: 'text', value: `13,5 hertz.` },
      { id: 'C', type: 'text', value: `375 hertz.` },
      { id: 'D', type: 'text', value: `1 350 hertz.` },
      { id: 'E', type: 'text', value: `4 860 hertz.` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 104,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `As pessoas que utilizam objetos cujo princípio de 
funcionamento é o mesmo do das alavancas aplicam 
uma força, chamada de força potente, em um dado ponto 
da barra, para superar ou equilibrar uma segunda força, 
chamada de resistente, em outro ponto da barra. Por causa 
das diferentes distâncias entre os pontos de aplicação das 
forças, potente e resistente, os seus efeitos também são 
diferentes. A figura mostra alguns exemplos desses objetos. 
Em qual dos objetos a força potente é maior que a força 
resistente?`,
    images: ['/enem/2018/images/enem_2018_d2_q104.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Pinça.` },
      { id: 'B', type: 'text', value: `Alicate.` },
      { id: 'C', type: 'text', value: `Quebra-nozes.` },
      { id: 'D', type: 'text', value: `Carrinho de mão.` },
      { id: 'E', type: 'text', value: `Abridor de garrafa.` },
    ],
    correct: 'A',
    explanation: `A situação A situação em que a força potente está mais perto do ponto fixo do que a força resistente é a pinça. em que a força potente está mais perto do ponto fixo do que a força resistente é a pinça.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 105,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Na mitologia grega, Nióbia era a filha de Tântalo, dois 
personagens conhecidos pelo sofrimento. O elemento 
químico de número atômico (Z) igual a 41 tem propriedades 
químicas e físicas tão parecidas com as do elemento de 
número atômico 73 que chegaram a ser confundidos. 
Por isso, em homenagem a esses dois personagens da 
mitologia grega, foi conferido a esses elementos os nomes 
de nióbio (Z = 41) e tântalo (Z = 73). Esses dois elementos 
químicos adquiriram grande importância econômica na 
metalurgia, na produção de supercondutores e em outras 
aplicações na indústria de ponta, exatamente pelas 
propriedades químicas e físicas comuns aos dois. 
KEAN, S. A colher que desaparece : e outras histórias reais de loucura, amor e morte a 
partir dos elementos químicos. Rio de Janeiro: Zahar, 2011 (adaptado). 
A importância econômica e tecnológica desses elementos, 
pela similaridade de suas propriedades químicas e físicas, 
deve-se a`,
    alternatives: [
      { id: 'A', type: 'text', value: `terem elétrons no subnível f .` },
      { id: 'B', type: 'text', value: `serem elementos de transição interna.` },
      { id: 'C', type: 'text', value: `pertencerem ao mesmo grupo na tabela periódica.` },
      { id: 'D', type: 'text', value: `terem seus elétrons mais externos nos níveis 4 e 5, 
respectivamente.` },
      { id: 'E', type: 'text', value: `estarem localizados na família dos alcalinos terrosos 
e alcalinos, respectivamente.` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 106,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O processo de formação de novas espécies é lento e repleto de nuances e estágios intermediários, havendo uma 
diminuição da viabilidade entre cruzamentos. Assim, plantas originalmente de uma mesma espécie que não cruzam 
mais entre si podem ser consideradas como uma espécie se diferenciando. Um pesquisador realizou cruzamentos 
entre nove populações - denominadas de acordo com a localização onde são encontradas - de uma espécie 
de orquídea ( Epidendrum denticulatum ). No diagrama estão os resultados dos cruzamentos entre as populações. 
Considere que o doador fornece o pólen para o receptor. 
RESULTADOS DOS 
CRUZAMENTOS 
PETI 
PETI 
PÃO DE 
AÇÚCAR 
ITIRAPINA 
ITAPEVA 
BERTIOGA 
MARAMBAIA 
MASSAMBABA 
DOADOR RECEPTOR - Polinização induzida bem-sucedida 
DOADOR RECEPTOR - Polinização induzida inviável ou nula 
Mata Atlântica 
Cerrado 
FIORAVANTI, C. Os primeiros passos de novas espécies: plantas e animais se diferenciam por meio de mecanismos surpreendentes. Pesquisa Fapesp , out. 2013 (adaptado). 
Em populações de quais localidades se observa um processo de especiação evidente?`,
    images: ['/enem/2018/images/enem_2018_d2_q106.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Bertioga e Marambaia; Alcobaça e Olivença.` },
      { id: 'B', type: 'text', value: `Itirapina e Itapeva; Marambaia e Massambaba.` },
      { id: 'C', type: 'text', value: `Itirapina e Marambaia; Alcobaça e Itirapina.` },
      { id: 'D', type: 'text', value: `Itirapina e Peti; Alcobaça e Marambaia.` },
      { id: 'E', type: 'text', value: `Itirapina e Olivença; Marambaia e Peti.` },
    ],
    correct: 'D',
    explanation: `De acordo com o conceito biológico de espécie, a interrupção do fluxo gênico caracteriza a formação de novas espécies. A polinização inviável ou nula entre Itirapina e Peti, e entre Alcobaça e Marambaia indicam que fluxo gênico foi interrompido e o processo de especiação ocorreu.`,
    subject: ['bio'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 107,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O cruzamento de duas espécies da família das Anonáceas, a cherimoia ( Annona cherimola ) com a fruta-pinha 
( Annona squamosa ), resultou em uma planta híbrida denominada de atemoia. Recomenda-se que o seu plantio seja 
por meio de enxertia. 
Um dos benefícios dessa forma de plantio é a`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `ampliação da variabilidade genética.` },
      { id: 'B', type: 'text', value: `produção de frutos das duas espécies.` },
      { id: 'C', type: 'text', value: `manutenção do genótipo da planta híbrida.` },
      { id: 'D', type: 'text', value: `reprodução de clones das plantas parentais.` },
      { id: 'E', type: 'text', value: `modificação do genoma decorrente da transgenia.` },
    ],
    correct: 'C',
    explanation: `A enxertia é um tipo de reprodução assexuada que mantém a carga genética, podendo ter alterações somente por mutações (processo que gera variabilidade genética, porém ocorre de maneira rara e aleatória). Como a atemoia é a planta de interesse, este tipo de plantio manterá as mesmas características genéticas nas próximas gerações.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 108,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Ao pesquisar um resistor feito de um novo tipo 
de material, um cientista observou o comportamento 
mostrado no gráfico tensão versus corrente. 
120 
100 
80 
Tensão (V) 
60 
40 
20 
0 
1 
2 
3 
4 
5 
6 
7 
Corrente (A) 
Após a análise do gráfico, ele concluiu que a tensão 
em função da corrente é dada pela equação V = 10 i + i 2 . 
O gráfico da resistência elétrica ( R ) do resistor em função 
da corrente ( i ) é 
20 
15 
R (Ω) 
10`,
    images: ['/enem/2018/images/enem_2018_d2_q108.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 109,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A hidroxilamina (NH₂ OH) é extremamente reativa 
em reações de substituição nucleofílica, justificando 
sua utilização em diversos processos. A reação de 
substituição nucleofílica entre o anidrido acético e a 
hidroxilamina está representada. 
O 
O 
O 
NH₂ 
 + 
OH 
O 
O 
Produto A 
+ NH₂ OH 
O 
O 
O 
Anidrido 
acético 
OH 
N 
 + 
OH 
H 
Produto B 
O produto A é favorecido em relação ao B, por um 
fator de 10 5 . Em um estudo de possível substituição 
do uso de hidroxilamina, foram testadas as móleculas 
numeradas de 1 a 5. 
HO 
HO 
N 
HO 
N 
O 
N 
NH₂ 
N 
O 
H 
H 
1 
2 
3 
5 
4 
Dentre as moléculas testadas, qual delas apresentou 
menor reatividade?`,
    images: ['/enem/2018/images/enem_2018_d2_q109_1.jpg', '/enem/2018/images/enem_2018_d2_q109_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `5` },
    ],
    correct: 'D',
    explanation: `O ataque nucleofílico ocorre pelo par de elétrons do nitrogênio. Existe um impedimento espacial nas moléculas 4 e 5, dificultando com que a reação ocorra. Porém na molécula 4 os ligantes do nitrogênio são maiores, tendo um maior impedimento.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 110,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Um estudante relatou que o mapeamento do DNA da 
cevada foi quase todo concluído e seu código genético 
desvendado. Chamou atenção para o número de genes 
que compõem esse código genético e que a semente da 
cevada, apesar de pequena, possui um genoma mais 
complexo que o humano, sendo boa parte desse código 
constituída de sequências repetidas. Nesse contexto, 
o conceito de código genético está abordado de forma 
equivocada. 
Cientificamente esse conceito é definido como`,
    alternatives: [
      { id: 'A', type: 'text', value: `trincas de nucleotídeos que codificam os aminoácidos.` },
      { id: 'B', type: 'text', value: `localização de todos os genes encontrados em um 
genoma.` },
      { id: 'C', type: 'text', value: `codificação de sequências repetidas presentes em 
um genoma.` },
      { id: 'D', type: 'text', value: `conjunto de todos os RNAs mensageiros transcritos 
em um organismo.` },
      { id: 'E', type: 'text', value: `todas as sequências de pares de bases presentes em 
um organismo.` },
    ],
    correct: 'A',
    explanation: `O conceito de código genético é definido pelos nucleotídeos, que podem conter adenina, timina, citosina e guanina como bases nitrogenadas presentes no DNA. Cada trinca de nucleotídeos (códon) codifica um aminoácido no processo de tradução, que ocorre nos ribossomos da célula.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 111,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A polinização, que viabiliza o transporte do grão de 
pólen de uma planta até o estigma de outra, pode ser 
realizada biótica ou abioticamente. Nos processos 
abióticos, as plantas dependem de fatores como o vento 
e a água. 
A estratégia evolutiva que resulta em polinização mais 
eficiente quando esta depende do vento é o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `diminuição do cálice.` },
      { id: 'B', type: 'text', value: `alongamento do ovário.` },
      { id: 'C', type: 'text', value: `disponibilização do néctar.` },
      { id: 'D', type: 'text', value: `intensificação da cor das pétalas.` },
      { id: 'E', type: 'text', value: `aumento do número de estames.` },
    ],
    correct: 'E',
    explanation: `O aumento do número de estames aumenta também a produção de grão de pólen, o que compensa as possíveis perdas no processo de polinização pelo vento (anemofilia).`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 112,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Muitos smartphones e tablets não precisam mais 
de teclas, uma vez que todos os comandos podem ser 
dados ao se pressionar a própria tela. Inicialmente 
essa tecnologia foi proporcionada por meio das telas 
resistivas, formadas basicamente por duas camadas de 
material condutor transparente que não se encostam até 
que alguém as pressione, modificando a resistência total 
do circuito de acordo com o ponto onde ocorre o toque. 
A imagem é uma simplificação do circuito formado pelas 
placas, em que A e B representam pontos onde o circuito 
pode ser fechado por meio do toque. 
4 kΩ 
4 kΩ 
4 kΩ 
+ 
ε 
A 
- 
4 kΩ 
B 
Qual é a resistência equivalente no circuito provocada por 
um toque que fecha o circuito no ponto A ?`,
    images: ['/enem/2018/images/enem_2018_d2_q112.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1,3 kΩ` },
      { id: 'B', type: 'text', value: `4,0 kΩ` },
      { id: 'C', type: 'text', value: `6,0 kΩ` },
      { id: 'D', type: 'text', value: `6,7 kΩ` },
      { id: 'E', type: 'text', value: `12,0 kΩ` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 113,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Companhias que fabricam jeans usam cloro para 
o clareamento, seguido de lavagem. Algumas estão 
substituindo o cloro por substâncias ambientalmente mais 
seguras como peróxidos, que podem ser degradados 
por enzimas chamadas peroxidases. Pensando nisso, 
pesquisadores 
inseriram 
genes 
codificadores 
de 
peroxidases em leveduras cultivadas nas condições de 
clareamento e lavagem dos jeans e selecionaram as 
sobreviventes para produção dessas enzimas. 
TORTORA, G. J.; FUNKE, B. R.; CASE, C. L. Microbiologia . 
 Rio de Janeiro: Artmed, 2016 (adaptado). 
Nesse caso, o uso dessas leveduras modificadas objetiva`,
    alternatives: [
      { id: 'A', type: 'text', value: `reduzir a quantidade de resíduos tóxicos nos efluentes 
da lavagem.` },
      { id: 'B', type: 'text', value: `eliminar a necessidade de tratamento da água 
consumida.` },
      { id: 'C', type: 'text', value: `elevar a capacidade de clareamento dos jeans .` },
      { id: 'D', type: 'text', value: `aumentar a resistência do jeans a peróxidos.` },
      { id: 'E', type: 'text', value: `associar ação bactericida ao clareamento.` },
    ],
    correct: 'A',
    explanation: `Ao inserirem codificadores de peroxidases em leveduras, elas passam a produzir esta enzima para degradação dos peróxidos, diminuindo o consumo de cloro e reduzindo assim a quantidade de resíduos tóxicos nos efluentes da lavagem.`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 114,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Por meio de reações químicas que envolvem 
carboidratos, lipídeos e proteínas, nossas células obtêm 
energia e produzem gás carbônico e água. A oxidação 
da glicose no organismo humano libera energia, conforme 
ilustra a equação química, sendo que aproximadamente 
40% dela é disponibilizada para atividade muscular. 
C 6 H 12 O 6 (s) + 6 O 2 (g) → 6 CO 2 (g) + 6 H 2 O (l) ∆ c H = −2 800 kJ 
Considere as massas molares (em g mol −1 ): H = 1; 
C = 12; O = 16. 
LIMA, L. M.; FRAGA, C. A. M.; BARREIRO, E. J. Química na saúde. 
São Paulo: Sociedade Brasileira de Química, 2010 (adaptado). 
Na oxidação de 1,0 grama de glicose, a energia obtida 
para atividade muscular, em quilojoule, é mais próxima de`,
    alternatives: [
      { id: 'A', type: 'text', value: `6,2.` },
      { id: 'B', type: 'text', value: `15,6.` },
      { id: 'C', type: 'text', value: `70,0.` },
      { id: 'D', type: 'text', value: `622,2.` },
      { id: 'E', type: 'text', value: `1 120,0.` },
    ],
    correct: 'A',
    explanation: `180 g = Massa molar da glicose C 6 H 12 O 6 + 6O 2 à 6CO 2 + 6H 2 O DH = &#8211; 2800 kJ 180 g &#8212;- -2800 kJ 1 g &#8212;- x . 0,4 ( 0,4 = 40% para atividade muscular) &nbsp; x = 6,2 kJ`,
    subject: ['bio'],
    topics: ['Histologia básica (tecidos – leitura de figura)', 'Questões aleatórias'],
  },
  {
    id: 115,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Alguns peixes, como o poraquê, a enguia-elétrica da 
Amazônia, podem produzir uma corrente elétrica quando 
se encontram em perigo. Um poraquê de 1 metro de 
comprimento, em perigo, produz uma corrente em torno 
de 2 ampères e uma voltagem de 600 volts. 
O quadro apresenta a potência aproximada de 
equipamentos elétricos. 
 
O equipamento elétrico que tem potência similar àquela 
produzida por esse peixe em perigo é o(a)`,
    images: ['/enem/2018/images/enem_2018_d2_q115.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `exaustor.` },
      { id: 'B', type: 'text', value: `computador.` },
      { id: 'C', type: 'text', value: `aspirador de pó.` },
      { id: 'D', type: 'text', value: `churrasqueira elétrica.` },
      { id: 'E', type: 'text', value: `secadora de roupas.` },
    ],
    correct: 'D',
    explanation: `Aplicando diretamente a equação da potência P = Ui, resulta P = 600.2=1200W, que equivale à potência consumida pela churrasqueira elétrica.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 116,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Células solares à base de TiO₂ sensibilizadas por corantes (S) são promissoras e poderão vir a substituir as células de 
silício. Nessas células, o corante adsorvido sobre o TiO₂ é responsável por absorver a energia luminosa ( h ν ), e o corante 
excitado (S*) é capaz de transferir elétrons para o TiO₂ . Um esquema dessa célula e os processos envolvidos estão 
ilustrados na figura. A conversão de energia solar em elétrica ocorre por meio da sequência de reações apresentadas. 
Corante 
Eletrodo de Pt 
Eletrodo de TiO₂ 
com corante 
e − 
S* 
h v 
Mediador de
 carga
I₃⁻
I −
S/S +
e − 
e − 
e − 
e − 
LONGO, C.; DE PAOLI, M.-A. Dye-Sensitized Solar Cells: A Successful Combination of Materials. Journal of the Brazilian Chemical Society , n. 6, 2003 (adaptado). 
A reação 3 é fundamental para o contínuo funcionamento da célula solar, pois`,
    images: ['/enem/2018/images/enem_2018_d2_q116.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `reduz íons I − a I₃⁻.` },
      { id: 'B', type: 'text', value: `regenera o corante.` },
      { id: 'C', type: 'text', value: `garante que a reação 4 ocorra.` },
      { id: 'D', type: 'text', value: `promove a oxidação do corante.` },
      { id: 'E', type: 'text', value: `transfere elétrons para o eletrodo de TiO₂ .` },
    ],
    correct: 'B',
    explanation: `O TiO₂ adsorve o corante para que a reação ocorra (reação 1), e o mesmo é regenerado na reação 3.`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
  },
  {
    id: 117,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O nível metabólico de uma célula pode ser determinado pela taxa de síntese de RNAs e proteínas, processos 
dependentes de energia. Essa diferença na taxa de síntese de biomoléculas e refletida na abundancia e características 
morfológicas dos componentes celulares. Em uma empresa de produção de hormônios proteicos a partir do cultivo de 
células animais, um pesquisador deseja selecionar uma linhagem com o metabolismo de síntese mais elevado, dentre 
as cinco esquematizadas na figura. 
Qual linhagem deve ser escolhida pelo pesquisador?`,
    images: ['/enem/2018/images/enem_2018_d2_q117.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I` },
      { id: 'B', type: 'text', value: `II` },
      { id: 'C', type: 'text', value: `III` },
      { id: 'D', type: 'text', value: `IV` },
      { id: 'E', type: 'text', value: `V` },
    ],
    correct: 'D',
    explanation: `A linhagem 4 é a que possui um nucléolo mais desenvolvido e também uma maior região de eucromatina (região ativa de DNA), juntamente com uma maior quantidade de retículo endoplasmático granular. O nucléolo mais desenvolvido garante maior produção de RNAs, que serão traduzidos nos ribossomos presentes no retículo, para síntese de proteínas. Como esses processos dependem de energia, um grande número de mitocôndrias também é necessário.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 118,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Alguns materiais sólidos são compostos por átomos 
que interagem entre si formando ligações que podem 
ser covalentes, iônicas ou metálicas. A figura apresenta 
a energia potencial de ligação em função da distância 
interatômica em um sólido cristalino. Analisando essa 
figura, observa-se que, na temperatura de zero kelvin, 
a distância de equilíbrio da ligação entre os átomos ( R 0 ) 
corresponde ao valor mínimo de energia potencial. Acima 
dessa temperatura, a energia térmica fornecida aos átomos 
aumenta sua energia cinética e faz com que eles oscilem 
em torno de uma posição de equilíbrio média (círculos 
cheios), que é diferente para cada temperatura. A distância 
de ligação pode variar sobre toda a extensão das linhas 
horizontais, identificadas com o valor da temperatura, de 
T 1 a T 4 (temperaturas crescentes). 
Energia de ligação 
Distância interatômica 
R 
0 
0 
T 
T 
T 
T 
4 
3 
2 
1 
T = 0 K 
O deslocamento observado na distância média revela o 
fenômeno da`,
    images: ['/enem/2018/images/enem_2018_d2_q118.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `ionização.` },
      { id: 'B', type: 'text', value: `dilatação.` },
      { id: 'C', type: 'text', value: `dissociação.` },
      { id: 'D', type: 'text', value: `quebra de ligações covalentes.` },
      { id: 'E', type: 'text', value: `formação de ligações metálicas.` },
    ],
    correct: 'B',
    explanation: `É possível ver no gráfico que há uma variação no comprimento da ligação conforme a temperatura se altera, caracterizando uma dilatação no composto.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 119,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A utilização de extratos de origem natural tem 
recebido a atenção de pesquisadores em todo o mundo, 
principalmente nos países em desenvolvimento que 
são altamente acometidos por doenças infecciosas e 
parasitárias. Um bom exemplo dessa utilização são os 
produtos de origem botânica que combatem insetos. 
O uso desses produtos pode auxiliar no controle da`,
    alternatives: [
      { id: 'A', type: 'text', value: `esquistossomose.` },
      { id: 'B', type: 'text', value: `leptospirose.` },
      { id: 'C', type: 'text', value: `leishmaniose.` },
      { id: 'D', type: 'text', value: `hanseníase.` },
      { id: 'E', type: 'text', value: `aids.` },
    ],
    correct: 'C',
    explanation: `Como a leishmaniose é uma doença transmitida pelo mosquito palha, também conhecido como birigui, que é um inseto. Como a substância tem ação inseticida, auxilia no controle dos vetores dessa doença.`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 120,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Nos manuais de instalação de equipamentos de som 
há o alerta aos usuários para que observem a correta 
polaridade dos fios ao realizarem as conexões das caixas 
de som. As figuras ilustram o esquema de conexão das 
caixas de som de um equipamento de som mono, no qual 
os alto-falantes emitem as mesmas ondas. No primeiro 
caso, a ligação obedece às especificações do fabricante 
e no segundo mostra uma ligação na qual a polaridade 
está invertida. 
Polaridade correta 
Saídas do equipamento de som 
D 
E 
E 
D 
Caixa de som 
Caixa de som 
Polaridade invertida 
Saídas do equipamento de som 
D 
E 
E 
D 
Caixa de som 
Caixa de som 
O que ocorre com os alto-falantes E e D se forem 
conectados de acordo com o segundo esquema?`,
    images: ['/enem/2018/images/enem_2018_d2_q120.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `O alto-falante E funciona normalmente e o D entra em
curto-circuito e não emite som.` },
      { id: 'B', type: 'text', value: `O alto-falante E emite ondas sonoras com frequências
ligeiramente diferentes do alto-falante D provocando
o fenômeno de batimento.` },
      { id: 'C', type: 'text', value: `O alto-falante E emite ondas sonoras com frequências
e fases diferentes do alto-falante D provocando o
fenômeno conhecido como ruído.` },
      { id: 'D', type: 'text', value: `O alto-falante E emite ondas sonoras que apresentam
um lapso de tempo em relação às emitidas pelo alto-falante D provocando o fenômeno de reverberação.` },
      { id: 'E', type: 'text', value: `O alto-falante E emite ondas sonoras em oposição
de fase às emitidas pelo alto-falante D provocando
o fenômeno de interferência destrutiva nos pontos
equidistantes aos alto-falantes.` },

    ],
    correct: 'E',
    explanation: `Para que haja a produção de onda mecânica do som é necessário o deslocamento da caixa em relação ao ar. As polaridades alteram o sentido de movimentação da caixa, ou seja, se a ligação correta impactar o ar para frente, a ligação não ideal impactará o ar para trás, o que produzirá ondas em fases opostas emitidas simultaneamente. Para pontos equidistantes aos alto-falantes, há interferência destrutiva.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 121,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O manejo adequado do solo possibilita a manutenção 
de sua fertilidade à medida que as trocas de nutrientes 
entre matéria orgânica, água, solo e o ar são mantidas 
para garantir a produção. Algumas espécies iônicas de 
alumínio são tóxicas, não só para a planta, mas para 
muitos organismos como as bactérias responsáveis 
pelas transformações no ciclo do nitrogênio. O alumínio 
danifica as membranas das células das raízes e restringe 
a expansão de suas paredes, com isso, a planta não 
cresce adequadamente. Para promover benefícios para a 
produção agrícola, é recomendada a remediação do solo 
utilizando calcário (CaCO 3 ). 
BRADY, N. C.; WEIL, R. R. Elementos da natureza e propriedades dos solos . 
Porto Alegre: Bookman, 2013 (adaptado). 
Essa remediação promove no solo o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `diminuição do pH, deixando-o fértil.` },
      { id: 'B', type: 'text', value: `solubilização do alumínio, ocorrendo sua lixiviação 
pela chuva.` },
      { id: 'C', type: 'text', value: `interação do íon cálcio com o íon alumínio, produzindo 
uma liga metálica.` },
      { id: 'D', type: 'text', value: `reação do carbonato de cálcio com os íons alumínio, 
formando alumínio metálico.` },
      { id: 'E', type: 'text', value: `aumento da sua alcalinidade, tornando os íons 
alumínio menos disponíveis.` },
    ],
    correct: 'E',
    explanation: `Hidrolise do carbonato de cálcio: Ca2+ + CO32- + H2O Ca2+ + HCO3- + OH-`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 122,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Visando a melhoria estética de um veículo, o 
vendedor de uma loja sugere ao consumidor que ele 
troque as rodas de seu automóvel de aro 15 polegadas 
para aro 17 polegadas, o que corresponde a um diâmetro 
maior do conjunto roda e pneu. 
Duas consequências provocadas por essa troca de 
aro são:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Elevar a posição do centro de massa do veículo 
tornando-o mais instável e aumentar a velocidade do 
automóvel em relação à indicada no velocímetro.` },
      { id: 'B', type: 'text', value: `Abaixar a posição do centro de massa do veículo 
tornando-o mais instável e diminuir a velocidade do 
automóvel em relação à indicada no velocímetro.` },
      { id: 'C', type: 'text', value: `Elevar a posição do centro de massa do veículo 
tornando-o mais estável e aumentar a velocidade do 
automóvel em relação à indicada no velocímetro.` },
      { id: 'D', type: 'text', value: `Abaixar a posição do centro de massa do veículo 
tornando-o mais estável e diminuir a velocidade do 
automóvel em relação à indicada no velocímetro.` },
      { id: 'E', type: 'text', value: `Elevar a posição do centro de massa do veículo 
tornando-o mais estável e diminuir a velocidade do 
automóvel em relação à indicada no velocímetro.` },
    ],
    correct: 'A',
    explanation: ``,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 123,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `As células e os organismos precisam realizar trabalho 
para permanecerem vivos e se reproduzirem. A energia 
metabólica necessária para a realização desse trabalho é 
oriunda da oxidação de combustíveis, gerados no ciclo do 
carbono, por meio de processos capazes de interconverter 
diferentes formas da energia. 
NÉLSON, D. L.; COX, M. M. Lehninger : princípios de bioquímica. 
São Paulo: Sarvier, 2002 (adaptado). 
Nesse ciclo, a formação de combustíveis está vinculada à 
conversão de energia`,
    images: ['/enem/2018/images/enem_2018_d2_q123.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `térmica em cinética.` },
      { id: 'B', type: 'text', value: `química em térmica.` },
      { id: 'C', type: 'text', value: `eletroquímica em calor.` },
      { id: 'D', type: 'text', value: `cinética em eletromagnética.` },
      { id: 'E', type: 'text', value: `eletromagnética em química.` },
    ],
    correct: 'E',
    explanation: `A energia transportada por radiação eletromagnética proveniente do Sol é convertida em energia química.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 124,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O petróleo é uma fonte de energia de baixo custo 
e de larga utilização como matéria-prima para uma 
grande variedade de produtos. É um óleo formado 
de várias substâncias de origem orgânica, em sua 
maioria hidrocarbonetos de diferentes massas molares. 
São utilizadas técnicas de separação para obtenção 
dos 
componentes 
comercializáveis 
do 
petróleo. 
Além disso, para aumentar a quantidade de frações 
comercializáveis, otimizando o produto de origem fóssil, 
utiliza-se o processo de craqueamento. 
O que ocorre nesse processo?`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `Transformação das frações do petróleo em outras 
moléculas menores.` },
      { id: 'B', type: 'text', value: `Reação de óxido-redução com transferência de 
elétrons entre as moléculas.` },
      { id: 'C', type: 'text', value: `Solubilização das frações do petróleo com a utilização 
de diferentes solventes.` },
      { id: 'D', type: 'text', value: `Decantação das moléculas com diferentes massas 
molares pelo uso de centrífugas.` },
      { id: 'E', type: 'text', value: `Separação dos diferentes componentes do petróleo 
em função de suas temperaturas de ebulição.` },
    ],
    correct: 'A',
    explanation: `O craqueamento do petróleo é responsável pela quebra de frações maiores do petróleo em frações menores. Vale ressaltar que a destilação fracionada é responsável pela separação das frações do petróleo e não pelo seu craqueamento.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 125,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A figura representa um prisma óptico, constituído de um material transparente, cujo índice de refração e crescente com 
a frequência da luz que sobre ele incide. Um feixe luminoso, composto por luzes vermelha, azul e verde, incide na face A, 
emerge na face B e, após ser refletido por um espelho, incide num filme para fotografia colorida, revelando tres pontos. 
Amarelo 
Laranja 
Violeta 
Verde 
Azul 
400 
450 
500 
550 
600 
650 
700 
750 
(nm) 
Face A 
Face B 
Feixe incidente 
Prisma 
Observando os pontos luminosos revelados no filme, de baixo para cima, constatam-se as seguintes cores:`,
    images: ['/enem/2018/images/enem_2018_d2_q125.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Vermelha, verde, azul.` },
      { id: 'B', type: 'text', value: `Verde, vermelha, azul.` },
      { id: 'C', type: 'text', value: `Azul, verde, vermelha.` },
      { id: 'D', type: 'text', value: `Verde, azul, vermelha.` },
      { id: 'E', type: 'text', value: `Azul, vermelha, verde.` },
    ],
    correct: 'A',
    explanation: `Na dispersão luminosa, a cor vermelha, de maior comprimento de onda, sofre menor desvio em relação à trajetória inicial da luz e, das citadas, o azul desvia mais por ter menor comprimento de onda.`,
    subject: ['fis'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 126,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Tensoativos são compostos orgânicos que possuem comportamento anfifílico, isto e, possuem duas regiões, 
uma hidrofóbica e outra hidrofílica. O principal tensoativo aniônico sintético surgiu na década de 1940 e teve grande 
aceitação no mercado de detergentes em razão do melhor desempenho comparado ao do sabão. No entanto, o uso 
desse produto provocou grandes problemas ambientais, dentre eles a resistência a degradação biológica, por causa 
dos diversos carbonos terciários na cadeia que compõe a porção hidrofóbica desse tensoativo aniônico. As ramificações 
na cadeia dificultam sua degradação, levando à persistência no meio ambiente por longos períodos. Isso levou a sua 
substituição na maioria dos países por tensoativos biodegradáveis, ou seja, com cadeias alquílicas lineares. 
PENTEADO, J.`,
    images: ['/enem/2018/images/enem_2018_d2_q126_A.jpg', '/enem/2018/images/enem_2018_d2_q126_B.jpg', '/enem/2018/images/enem_2018_d2_q126_C.jpg', '/enem/2018/images/enem_2018_d2_q126_D.jpg', '/enem/2018/images/enem_2018_d2_q126_E.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'B',
    explanation: ``,
    subject: ['qui'],
    topics: ['Meio ambiente e sustentabilidade', 'Questões aleatórias'],
  },
  {
    id: 127,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Considere, em um fragmento ambiental, uma árvore matriz com frutos (M) e outras cinco que produziram flores 
e são apenas doadoras de pólen (DP1, DP2, DP3, DP4 e DP5). Foi excluída a capacidade de autopolinização das 
árvores. Os genótipos da matriz, da semente (S1) e das prováveis fontes de pólen foram obtidos pela analise de dois 
locos (loco A e loco B) de marcadores de DNA, conforme a figura.
COLLEVATTI, R. G.; TELLES, M. P.; SOARES, T. N. Dispersão do pólen entre pequizeiros: uma atividade para a genética do ensino superior. Genética na Escola , n. 1, 2013 (adaptado).
A progênie S1 recebeu o pólen de qual doadora?`,
    images: ['/enem/2018/images/enem_2018_d2_q127.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `DP1` },
      { id: 'B', type: 'text', value: `DP2` },
      { id: 'C', type: 'text', value: `DP3` },
      { id: 'D', type: 'text', value: `DP4` },
      { id: 'E', type: 'text', value: `DP5` },
    ],
    correct: 'E',
    explanation: `Ao analisar um espectro de eletroforese, temos que ver quais bandas são compatíveis entre os indivíduos observados: quanto mais bandas iguais, maior a proximidade genética. O alelo 2 do loco A presente em S1 também está presente em DP5, assim como o alelo 3 do loco B, que é o único presente nestas duas espécies.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 128,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Em desenhos animados é comum vermos a personagem tentando impulsionar um barco soprando ar contra
a vela para compensar a falta de vento. Algumas vezes usam o próprio fôlego, foles ou ventiladores. Estudantes
de um laboratório didático resolveram investigar essa possibilidade. Para isso, usaram dois pequenos carros de
plástico, A e B, instalaram sobre estes pequenas ventoinhas e fixaram verticalmente uma cartolina de curvatura
parabólica para desempenhar uma função análoga à vela de um barco. No carro B inverteu-se o sentido da
ventoinha e manteve-se a vela, a fim de manter as características físicas do barco, massa e formato da cartolina.
As figuras representam os carros produzidos. A montagem do carro A busca simular a situação dos desenhos
animados, pois a ventoinha está direcionada para a vela.
Com os carros orientados de acordo com as figuras, os estudantes ligaram as ventoinhas, aguardaram o fluxo de
ar ficar permanente e determinaram os módulos das velocidades médias dos carros A (VA) e B (VB) para o mesmo
intervalo de tempo.
A respeito das intensidades das velocidades médias e do sentido de movimento do carro A, os estudantes observaram que:`,
    images: ['/enem/2018/images/enem_2018_d2_q128.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `VA = 0; VB > 0; o carro A não se move.` },
      { id: 'B', type: 'text', value: `0 < VA < VB; o carro A se move para a direita.` },
      { id: 'C', type: 'text', value: `0 < VA < VB; o carro A se move para a esquerda.` },
      { id: 'D', type: 'text', value: `0 < VB < VA; o carro A se move para a direita.` },
      { id: 'E', type: 'text', value: `0 < VB < VA; o carro A se move para a esquerda.` },

    ],
    correct: 'B',
    explanation: `Com o ventilador virado para a vela, o vento resvala nas laterais curvadas deslocando massa de ar para trás, de acordo com o principio da conservação de movimento a vela iria para a frente, porém em baixa velocidade, porque parte da força do vento se anula ao ser aplicada na parte perpendicular da vela, pois a mesma força será agirá em sentido contrário de acordo com a terceira lei de Newton, dessa forma, parte das forças se anulam. Já na situação com o ventilador contrária à vela, o ventilador empurra o ar para trás e o ar empurra o ventilador para frente, fazendo com o barco entre em movimento com maior velocidade`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 129,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Muitos primatas, incluindo nós humanos, possuem 
visão tricromática: têm três pigmentos visuais na retina 
sensíveis à luz de uma determinada faixa de comprimentos 
de onda. Informalmente, embora os pigmentos em si não 
possuam cor, estes são conhecidos como pigmentos 
“azul”, “verde” e “vermelho” e estão associados à cor 
que causa grande excitação (ativação). A sensação que 
temos ao observar um objeto colorido decorre da ativação 
relativa dos três pigmentos. Ou seja, se estimulássemos 
a retina com uma luz na faixa de 530 nm (retângulo I no 
gráfico), não excitaríamos o pigmento “azul”, o pigmento 
“verde” seria ativado ao máximo e o “vermelho” seria 
ativado em aproximadamente 75%, e isso nos daria 
a sensação de ver uma cor amarelada. Já uma luz na 
faixa de comprimento de onda de 600 nm (retângulo II) 
estimularia o pigmento “verde” um pouco e o “vermelho” 
em cerca de 75%, e isso nos daria a sensação de ver 
laranja-avermelhado. No entanto, há características 
genéticas presentes em alguns indivíduos, conhecidas 
coletivamente como Daltonismo, em que um ou mais 
pigmentos não funcionam perfeitamente. 
I 
II 
“azul” 
“verde” 
“vermelho” 
100 
Ativação (%) 
50 
verde 
roxo 
amarelo laranja vermelho 
400 
450 
500 
550 
600 
650 
azul 
Comprimento de onda (nm) 
Disponível em: www.comprehensivephysiology.com. Acesso em: 3 ago. 2012 (adaptado). 
Caso estimulássemos a retina de um indivíduo com essa 
característica, que não possuísse o pigmento conhecido 
como “verde”, com as luzes de 530 nm e 600 nm na mesma 
intensidade luminosa, esse indivíduo seria incapaz de`,
    images: ['/enem/2018/images/enem_2018_d2_q129.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `identificar o comprimento de onda do amarelo, uma 
vez que não possui o pigmento “verde”.` },
      { id: 'B', type: 'text', value: `ver o estímulo de comprimento de onda laranja, pois 
não haveria estimulação de um pigmento visual.` },
      { id: 'C', type: 'text', value: `detectar ambos os comprimentos de onda, uma vez 
que a estimulação dos pigmentos estaria prejudicada.` },
      { id: 'D', type: 'text', value: `visualizar o estímulo do comprimento de onda roxo, 
já que este se encontra na outra ponta do espectro.` },
      { id: 'E', type: 'text', value: `distinguir os dois comprimentos de onda, pois 
ambos estimulam o pigmento “vermelho” na mesma 
intensidade.` },
    ],
    correct: 'E',
    explanation: `O comando da questão pede para comparar o indivíduo “normal” com o indivíduo com características do daltonismo. Na situação proposta, o indivíduo normal é estimulado com luz de 530nm, percebendo uma cor amarelada (75% vermelho e 100% verde), além de ser estimulado com luz de 600nm, percebendo um laranja-avermelhado (75% vermelho e “um pouco” de verde). Ao submeter o indivíduo com características daltônicas ao mesmo estímulo, não haverá percepção do verde. Portanto, ele irá perceber tanto o estimulo luminoso de 530nm quanto o de 600nm como sendo correspondentes ao vermelho.`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 130,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O grafeno é uma forma alotrópica do carbono 
constituído por uma folha planar (arranjo bidimensional) 
de átomos de carbono compactados e com a espessura 
de apenas um átomo. Sua estrutura é hexagonal, 
conforme a figura. 
Nesse arranjo, os átomos de carbono possuem hibridação`,
    images: ['/enem/2018/images/enem_2018_d2_q130_1.jpg', '/enem/2018/images/enem_2018_d2_q130_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `sp de geometria linear.` },
      { id: 'B', type: 'text', value: `sp 2 de geometria trigonal planar.` },
      { id: 'C', type: 'text', value: `sp 3 alternados com carbonos com hibridação sp de 
geometria linear.` },
      { id: 'D', type: 'text', value: `sp 3 d de geometria planar.` },
      { id: 'E', type: 'text', value: `sp 3 d 2 com geometria hexagonal planar.` },
    ],
    correct: 'B',
    explanation: `O grafeno possui em sua estrutura todos os carbonos com ligação dupla, caracterizando a hibridização sp 2 , cuja geometria é trigonal plana.`,
    subject: ['fis'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 131,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Um projetista deseja construir um brinquedo que 
lance um pequeno cubo ao longo de um trilho horizontal, 
e o dispositivo precisa oferecer a opção de mudar a 
velocidade de lançamento. Para isso, ele utiliza uma mola 
e um trilho onde o atrito pode ser desprezado, conforme 
a figura. 
Para que a velocidade de lançamento do cubo seja 
aumentada quatro vezes, o projetista deve`,
    images: ['/enem/2018/images/enem_2018_d2_q131.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `manter a mesma mola e aumentar duas vezes a sua 
deformação.` },
      { id: 'B', type: 'text', value: `manter a mesma mola e aumentar quatro vezes a sua 
deformação.` },
      { id: 'C', type: 'text', value: `manter a mesma mola e aumentar dezesseis vezes a 
sua deformação.` },
      { id: 'D', type: 'text', value: `trocar a mola por outra de constante elástica duas 
vezes maior e manter a deformação.` },
      { id: 'E', type: 'text', value: `trocar a mola por outra de constante elástica quatro 
vezes maior e manter a deformação.` },
    ],
    correct: 'B',
    explanation: ``,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 132,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `As abelhas utilizam a sinalização química para 
distinguir a abelha-rainha de uma operária, sendo 
capazes de reconhecer diferenças entre moléculas. 
A rainha produz o sinalizador químico conhecido como 
ácido 9-hidroxidec-2-enoico, enquanto as abelhas- 
-operárias 
produzem 
ácido 
10-hidroxidec-2-enoico. 
Nós podemos distinguir as abelhas-operárias e rainhas 
por sua aparência, mas, entre si, elas usam essa 
sinalização química para perceber a diferença. Pode-se 
dizer que veem por meio da química. 
LE COUTEUR, P.; BURRESON, J. Os botões de Napoleão : as 17 moléculas 
que mudaram a história. Rio de Janeiro: Jorge Zahar, 2006 (adaptado). 
As moléculas dos sinalizadores químicos produzidas 
pelas abelhas rainha e operária possuem diferença na`,
    alternatives: [
      { id: 'A', type: 'text', value: `fórmula estrutural.` },
      { id: 'B', type: 'text', value: `fórmula molecular.` },
      { id: 'C', type: 'text', value: `identificação dos tipos de ligação.` },
      { id: 'D', type: 'text', value: `contagem do número de carbonos.` },
      { id: 'E', type: 'text', value: `identificação dos grupos funcionais.` },
    ],
    correct: 'A',
    explanation: ``,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 133,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Insetos podem apresentar três tipos de desenvolvimento. 
Um deles, a holometabolia (desenvolvimento completo), 
é constituído pelas fases de ovo, larva, pupa e adulto 
sexualmente maduro, que ocupam diversos hábitats. 
Os insetos com holometabolia pertencem às ordens mais 
numerosas em termos de espécies conhecidas. 
Esse tipo de desenvolvimento está relacionado a um 
maior número de espécies em razão da`,
    alternatives: [
      { id: 'A', type: 'text', value: `proteção na fase de pupa, favorecendo a sobrevivência 
de adultos férteis.` },
      { id: 'B', type: 'text', value: `produção de muitos ovos, larvas e pupas, aumentando 
o número de adultos.` },
      { id: 'C', type: 'text', value: `exploração 
de 
diferentes 
nichos, 
evitando 
a 
competição entre as fases da vida.` },
      { id: 'D', type: 'text', value: `ingestão de alimentos em todas as fases de vida, 
garantindo o surgimento do adulto.` },
      { id: 'E', type: 'text', value: `utilização do mesmo alimento em todas as fases, 
otimizando a nutrição do organismo.` },
    ],
    correct: 'C',
    explanation: `Em indivíduos holometábolos temos a metamorfose completa do organismo. Isso garante que, nestas diferentes fases de desenvolvimento dele, não ocorrerá sobreposição de nichos, evitando assim competição intraespecífica.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 134,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Talvez você já tenha bebido suco usando dois 
canudinhos iguais. Entretanto, pode-se verificar que, se 
colocar um canudo imerso no suco e outro do lado de 
fora do líquido, fazendo a sucção simultaneamente em 
ambos, você terá dificuldade em bebê-lo. 
Essa dificuldade ocorre porque o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `força necessária para a sucção do ar e do suco 
simultaneamente dobra de valor.` },
      { id: 'B', type: 'text', value: `densidade do ar é menor que a do suco, portanto, o 
volume de ar aspirado é muito maior que o volume 
de suco.` },
      { id: 'C', type: 'text', value: `velocidade com que o suco sobe deve ser constante 
nos dois canudos, o que é impossível com um dos 
canudos de fora.` },
      { id: 'D', type: 'text', value: `peso da coluna de suco é consideravelmente maior 
que o peso da coluna de ar, o que dificulta a sucção 
do líquido.` },
      { id: 'E', type: 'text', value: `pressão no interior da boca assume praticamente o 
mesmo valor daquela que atua sobre o suco.` },
    ],
    correct: 'E',
    explanation: `Com o canudo do lado de fora do líquido, não existe diferença de pressão capaz de provocar a subida do líquido, já que a pressão no interior da boca é igual à pressão atmosférica.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 135,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O alemão Fritz Haber recebeu o Prêmio Nobel de 
química de 1918 pelo desenvolvimento de um processo 
viável para a síntese da amônia (NH 3 ). Em seu discurso 
de premiação, Haber justificou a importância do feito 
dizendo que: 
“Desde a metade do século passado, tornou-se 
conhecido que um suprimento de nitrogênio é uma 
necessidade básica para o aumento das safras de 
alimentos; entretanto, também se sabia que as plantas 
não podem absorver o nitrogênio em sua forma simples, 
que é o principal constituinte da atmosfera. Elas precisam 
que o nitrogênio seja combinado [...] para poderem 
assimilá-lo. 
Economias agrícolas basicamente mantêm o balanço 
do nitrogênio ligado. No entanto, com o advento da era 
industrial, os produtos do solo são levados de onde cresce 
a colheita para lugares distantes, onde são consumidos, 
fazendo com que o nitrogênio ligado não retorne à terra 
da qual foi retirado. 
Isso tem gerado a necessidade econômica mundial 
de abastecer o solo com nitrogênio ligado. [...] A demanda 
por nitrogênio, tal como a do carvão, indica quão diferente 
nosso modo de vida se tornou com relação ao das 
pessoas que, com seus próprios corpos, fertilizam o solo 
que cultivam. 
Desde a metade do último século, nós vínhamos 
aproveitando o suprimento de nitrogênio do salitre que 
a natureza tinha depositado nos desertos montanhosos 
do Chile. Comparando o rápido crescimento da demanda 
com a extensão calculada desses depósitos, ficou 
claro que em meados do século atual uma emergência 
seríssima seria inevitável, a menos que a química 
encontrasse uma saída.” 
HABER, F. The Synthesis of Ammonia from its Elements . 
Disponível em: www.nobelprize.org. Acesso em: 13 jul. 2013 (adaptado). 
De acordo com os argumentos de Haber, qual fenômeno 
teria provocado o desequilíbrio no “balanço do nitrogênio 
ligado”?`,
    alternatives: [
      { id: 'A', type: 'text', value: `O esgotamento das reservas de salitre no Chile.` },
      { id: 'B', type: 'text', value: `O aumento da exploração de carvão vegetal e carvão 
mineral.` },
      { id: 'C', type: 'text', value: `A redução da fertilidade do solo nas economias 
agrícolas.` },
      { id: 'D', type: 'text', value: `A intensificação no fluxo de pessoas do campo para 
as cidades.` },
      { id: 'E', type: 'text', value: `A necessidade das plantas de absorverem sais de 
nitrogênio disponíveis no solo.` },
    ],
    correct: 'D',
    explanation: `O consumo dos produtos nitrogenados em locais distantes de sua produção, como nas cidades, compromete o ciclo do nitrogênio, já que essas substâncias não estão retornando ao local de onde foram retiradas, no caso, as regiões de campos agrícolas.`,
    subject: ['bio'],
    topics: ['Agricultura e pecuária', 'Questões aleatórias'],
  },
  {
    id: 136,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A Transferência Eletrônica Disponível (TED) é uma 
transação financeira de valores entre diferentes bancos. 
Um economista decide analisar os valores enviados por 
meio de TEDs entre cinco bancos (1, 2, 3, 4 e 5) durante 
um mês. Para isso, ele dispõe esses valores em uma 
matriz A = [ a ij 
 ], em que 1 ≤ i ≤ 5 e 1 ≤ j ≤ 5, e o elemento 
a ij corresponde ao total proveniente das operações feitas 
via TED, em milhão de real, transferidos do banco i para 
o banco j durante o mês. Observe que os elementos 
a ii = 0, uma vez que TED é uma transferência entre bancos 
distintos. Esta é a matriz obtida para essa análise: 
0 
2 
2 
0 
0 
2 
1 
0 
1 
2 
0 
1 
1 
0 
2 
2 
0 
0 
3 
0 
1 
1 
0 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A = 
 
 
Com base nessas informações, o banco que transferiu a 
maior quantia via TED é o banco`,
    images: ['/enem/2018/images/enem_2018_d2_q136.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `2.` },
      { id: 'C', type: 'text', value: `3.` },
      { id: 'D', type: 'text', value: `4.` },
      { id: 'E', type: 'text', value: `5.` },
    ],
    correct: 'A',
    explanation: ``,
    subject: ['mat'],
    topics: ['Matrizes e determinantes', 'Questões aleatórias'],
  },
  {
    id: 137,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Um contrato de empréstimo prevê que quando uma 
parcela é paga de forma antecipada, conceder-se-á uma 
redução de juros de acordo com o período de antecipação. 
Nesse caso, paga-se o valor presente, que é o valor, 
naquele momento, de uma quantia que deveria ser paga 
em uma data futura. Um valor presente P submetido a 
juros compostos com taxa i , por um período de tempo n , 
produz um valor futuro V determinado pela fórmula 
V 
P 
i n 
= 
⋅ 
+ 
1 
Em um contrato de empréstimo com sessenta 
parcelas fixas mensais, de R$ 820,00, a uma taxa de 
juros de 1,32% ao mês, junto com a trigésima parcela 
será paga antecipadamente uma outra parcela, desde 
que o desconto seja superior a 25% do valor da parcela. 
Utilize 0,2877 como aproximação para In 
4 
3 
 e 
0,0131 como aproximação para In (1,0132). 
A primeira das parcelas que poderá ser antecipada junto 
com a 30 a é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `56 a` },
      { id: 'B', type: 'text', value: `55 a` },
      { id: 'C', type: 'text', value: `52 a` },
      { id: 'D', type: 'text', value: `51 a` },
      { id: 'E', type: 'text', value: `45 a` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 138,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Um jogo pedagógico utiliza-se de uma interface 
algébrico-geométrica do seguinte modo: os alunos devem 
eliminar os pontos do plano cartesiano dando “tiros”, 
seguindo trajetórias que devem passar pelos pontos 
escolhidos. Para dar os tiros, o aluno deve escrever em 
uma janela do programa a equação cartesiana de uma 
reta ou de uma circunferência que passa pelos pontos 
e pela origem do sistema de coordenadas. Se o tiro for 
dado por meio da equação da circunferência, cada ponto 
diferente da origem que for atingido vale 2 pontos. Se 
o tiro for dado por meio da equação de uma reta, cada 
ponto diferente da origem que for atingido vale 1 ponto. 
Em uma situação de jogo, ainda restam os seguintes 
pontos para serem eliminados:`,
    images: ['/enem/2018/images/enem_2018_d2_q138.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `(0 ; 4),` },
      { id: 'B', type: 'text', value: `(4 ; 4),` },
      { id: 'C', type: 'text', value: `(4 ; 0),` },
      { id: 'D', type: 'text', value: `(2 ; 2) e` },
      { id: 'E', type: 'text', value: `(0 ; 2). y 5 A B 4 3 D E 2 1 x C 1 0 6 5 4 3 2 Passando pelo ponto A , qual equação forneceria a maior pontuação?` },
    ],
    correct: 'E',
    explanation: ``,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 139,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Sobre um sistema cartesiano considera-se uma 
malha formada por circunferências de raios com medidas 
dadas por números naturais e por 12 semirretas com 
extremidades na origem, separadas por ângulos de π/6 rad,
conforme a figura.
Suponha que os objetos se desloquem apenas pelas 
semirretas e pelas circunferências dessa malha, não 
podendo passar pela origem (0 ; 0). 
Considere o valor de π com aproximação de, pelo 
menos, uma casa decimal. 
Para realizar o percurso mais curto possível ao longo da 
malha, do ponto B até o ponto A , um objeto deve percorrer 
uma distância igual a`,
    images: ['/enem/2018/images/enem_2018_d2_q139.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `(2·π·1)/3 + 8` },
      { id: 'B', type: 'text', value: `(2·π·2)/3 + 6` },
      { id: 'C', type: 'text', value: `(2·π·3)/3 + 4` },
      { id: 'D', type: 'text', value: `(2·π·4)/3 + 2` },
      { id: 'E', type: 'text', value: `(2·π·5)/3 + 2` },
    ],
    correct: 'A',
    explanation: null,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 140,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Um artesão possui potes cilíndricos de tinta cujas 
medidas externas são 4 cm de diâmetro e 6 cm de 
altura. Ele pretende adquirir caixas organizadoras para 
armazenar seus potes de tinta, empilhados verticalmente 
com tampas voltadas para cima, de forma que as caixas 
possam ser fechadas. 
No mercado, existem cinco opções de caixas 
organizadoras, com tampa, em formato de paralelepípedo 
reto retângulo, vendidas pelo mesmo preço, possuindo as 
seguintes dimensões internas: 
Modelo 
Comprimento 
(cm) 
Largura 
(cm) 
Altura 
(cm) 
I 
8 
8 
40 
II 
8 
20 
14 
III 
18 
5 
35 
IV 
20 
12 
12 
V 
24 
8 
14 
Qual desses modelos o artesão deve adquirir para 
conseguir armazenar o maior número de potes por caixa?`,
    images: ['/enem/2018/images/enem_2018_d2_q140.jpg'],
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
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 141,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A prefeitura de um pequeno município do interior 
decide colocar postes para iluminação ao longo de 
uma estrada retilínea, que inicia em uma praça central 
e termina numa fazenda na zona rural. Como a praça 
já possui iluminação, o primeiro poste será colocado a 
80 metros da praça, o segundo, a 100 metros, o terceiro, 
a 120 metros, e assim sucessivamente, mantendo-se 
sempre uma distância de vinte metros entre os postes, 
até que o último poste seja colocado a uma distância de 
1 380 metros da praça. 
Se a prefeitura pode pagar, no máximo, R$ 8 000,00 por 
poste colocado, o maior valor que poderá gastar com a 
colocação desses postes é`,
    alternatives: [
      { id: 'A', type: 'text', value: `R$ 512 000,00.` },
      { id: 'B', type: 'text', value: `R$ 520 000,00.` },
      { id: 'C', type: 'text', value: `R$ 528 000,00.` },
      { id: 'D', type: 'text', value: `R$ 552 000,00.` },
      { id: 'E', type: 'text', value: `R$ 584 000,00.` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 142,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `De acordo com a Lei Universal da Gravitação, proposta
por Isaac Newton, a intensidade da força gravitacional F
que a Terra exerce sobre um satélite em órbita circular
é proporcional à massa m do satélite e inversamente
proporcional ao quadrado do raio r da órbita, ou seja,
F = km / r².
No plano cartesiano, três satélites, A, B e C, estão
representados, cada um, por um ponto (m ; r) cujas
coordenadas são, respectivamente, a massa do satélite
e o raio da sua órbita em torno da Terra.
Com base nas posições relativas dos pontos no
gráfico, deseja-se comparar as intensidades FA, FB e FC
da força gravitacional que a Terra exerce sobre os satélites
A, B e C, respectivamente.
As intensidades FA, FB e FC expressas no gráfico
satisfazem a relação`,
    images: ['/enem/2018/images/enem_2018_d2_q142.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `FC = FA < FB` },
      { id: 'B', type: 'text', value: `FA = FB < FC` },
      { id: 'C', type: 'text', value: `FA < FB < FC` },
      { id: 'D', type: 'text', value: `FA < FC < FB` },
      { id: 'E', type: 'text', value: `FC < FA < FB` },

    ],
    correct: 'E',
    explanation: ``,
    subject: ['mat'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 143,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Os tipos de prata normalmente vendidos são 975, 
950 e 925. Essa classificação é feita de acordo com a 
sua pureza. Por exemplo, a prata 975 é a substância 
constituída de 975 partes de prata pura e 25 partes de 
cobre em 1 000 partes da substância. Já a prata 950 é 
constituída de 950 partes de prata pura e 50 de cobre em 
1 000; e a prata 925 é constituída de 925 partes de prata 
pura e 75 partes de cobre em 1 000. Um ourives possui 
10 gramas de prata 925 e deseja obter 40 gramas de 
prata 950 para produção de uma joia. 
Nessas condições, quantos gramas de prata e de cobre, 
respectivamente, devem ser fundidos com os 10 gramas 
de prata 925?`,
    alternatives: [
      { id: 'A', type: 'text', value: `29,25 e 0,75` },
      { id: 'B', type: 'text', value: `28,75 e 1,25` },
      { id: 'C', type: 'text', value: `28,50 e 1,50` },
      { id: 'D', type: 'text', value: `27,75 e 2,25` },
      { id: 'E', type: 'text', value: `25,00 e 5,00` },
    ],
    correct: 'B',
    explanation: `&nbsp;`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 144,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Em um aeroporto, os passageiros devem submeter 
suas bagagens a uma das cinco máquinas de raio-X 
disponíveis ao adentrarem a sala de embarque. Num 
dado instante, o tempo gasto por essas máquinas para 
escanear a bagagem de cada passageiro é o número de 
pessoas presentes em cada fila estão apresentados em 
um painel, como mostrado na figura. 
Máquina 5 
Máquina 4 
Máquina 3 
Máquina 2
Máquina 1 
35 segundos 
5 pessoas 
25 segundos 
6 pessoas 
22 segundos 
7 pessoas 
40 segundos 
4 pessoas 
20 segundos 
8 pessoas 
Um passageiro, ao chegar à sala de embarque desse 
aeroporto no instante indicado, visando esperar o menor 
tempo possível, deverá se dirigir à máquina`,
    images: ['/enem/2018/images/enem_2018_d2_q144.jpg'],
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
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 145,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A Comissão Interna de Prevenção de Acidentes 
(CIPA) de uma empresa, observando os altos custos 
com os frequentes acidentes de trabalho ocorridos, fez, a 
pedido da diretoria, uma pesquisa do número de acidentes 
sofridos por funcionários. Essa pesquisa, realizada com 
uma amostra de 100 funcionários, norteará as ações da 
empresa na política de segurança no trabalho. 
Os resultados obtidos estão no quadro. 
Número de 
acidentes sofridos 
Número de 
trabalhadores 
0 
50 
1 
17 
2 
15 
3 
10 
4 
6 
5 
2 
A média do número de acidentes por funcionário na 
amostra que a CIPA apresentará à diretoria da empresa é`,
    images: ['/enem/2018/images/enem_2018_d2_q145.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0,15.` },
      { id: 'B', type: 'text', value: `0,30.` },
      { id: 'C', type: 'text', value: `0,50.` },
      { id: 'D', type: 'text', value: `1,11.` },
      { id: 'E', type: 'text', value: `2,22.` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['mat'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 146,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Numa atividade de treinamento realizada no Exército 
de um determinado país, três equipes - Alpha, Beta 
e Gama - foram designadas a percorrer diferentes 
caminhos, todos com os mesmos pontos de partida e de 
chegada. 
• A equipe Alpha realizou seu percurso em 90 minutos 
com uma velocidade média de 6,0 km/h. 
• A equipe Beta também percorreu sua trajetória 
em 90 minutos, mas sua velocidade média foi 
de 5,0 km/h. 
• Com uma velocidade média de 6,5 km/h, a equipe 
Gama concluiu seu caminho em 60 minutos. 
Com base nesses dados, foram comparadas as 
distâncias d Beta ; d Alpha e d Gama percorridas pelas três equipes. 
A ordem das distâncias percorridas pelas equipes Alpha, 
Beta e Gama é`,
    alternatives: [
      { id: 'A', type: 'text', value: `< < d d d Gama Beta Alpha` },
      { id: 'B', type: 'text', value: `= < d d d Alpha Beta Gama` },
      { id: 'C', type: 'text', value: `< = d d d Gama Beta Alpha` },
      { id: 'D', type: 'text', value: `< < d d d Beta Alpha Gama` },
      { id: 'E', type: 'text', value: `< < d d d Gama Alpha Beta` },
    ],
    correct: 'A',
    explanation: ``,
    subject: ['mat'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 147,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O colesterol total de uma pessoa é obtido pela 
soma da taxa do seu “colesterol bom” com a taxa do 
seu “colesterol ruim”. Os exames periódicos, realizados 
em um paciente adulto, apresentaram taxa normal 
de “colesterol bom”, porém, taxa do “colesterol ruim” 
(também chamado LDL) de 280 mg/dL. 
O quadro apresenta uma classificação de acordo com 
as taxas de LDL em adultos. 
 
Disponível em: www.minhavida.com.br. Acesso em: 15 out. 2015 (adaptado). 
O paciente, seguindo as recomendações médicas 
sobre estilo de vida e alimentação, realizou o exame 
logo após o primeiro mês, e a taxa de LDL reduziu 25%. 
No mês seguinte, realizou novo exame e constatou uma 
redução de mais 20% na taxa de LDL. 
De acordo com o resultado do segundo exame, a 
classificação da taxa de LDL do paciente é`,
    images: ['/enem/2018/images/enem_2018_d2_q147.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `ótima.` },
      { id: 'B', type: 'text', value: `próxima de ótima.` },
      { id: 'C', type: 'text', value: `limite.` },
      { id: 'D', type: 'text', value: `alta.` },
      { id: 'E', type: 'text', value: `muito alta.` },
    ],
    correct: 'D',
    explanation: `Pelo enunciado, vemos que a taxa inicial é igual a 280 mg/dL. Esta reduzirá, em um mês, 25%. Ou seja, a taxa foi para 280 . 0,75 = 210 mg/dL. No segundo mês, ele reduziu em 20% sua taxa em relação ao mês anterior. Dessa forma, a taxa final dele, é de 210 . 0,8 = 168 mg/dL. Consultando a tabela, sua taxa será considerada alta.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 148,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Uma empresa deseja iniciar uma campanha 
publicitária divulgando uma promoção para seus 
possíveis consumidores. Para esse tipo de campanha, 
os meios mais viáveis são a distribuição de panfletos 
na rua e anúncios na rádio local. Considera-se que a 
população alcançada pela distribuição de panfletos seja 
igual à quantidade de panfletos distribuídos, enquanto 
que a alcançada por um anúncio na rádio seja igual à 
quantidade de ouvintes desse anúncio. O custo de cada 
anúncio na rádio é de R$ 120,00, e a estimativa é de 
que seja ouvido por 1 500 pessoas. Já a produção e 
a distribuição dos panfletos custam R$ 180,00 cada 
1 000 unidades. Considerando que cada pessoa será 
alcançada por um único desses meios de divulgação, a 
empresa pretende investir em ambas as mídias. 
Considere X e Y os valores (em real) gastos em 
anúncios na rádio e com panfletos, respectivamente. 
O número de pessoas alcançadas pela campanha será 
dado pela expressão`,
    alternatives: [
      { id: 'A', type: 'text', value: `(50X / 4) + (50Y / 9)` },
      { id: 'B', type: 'text', value: `(50X / 9) + (50Y / 4)` },
      { id: 'C', type: 'text', value: `(4X / 50) + (4Y / 50)` },
      { id: 'D', type: 'text', value: `(50 / 4X) + (50 / 9Y)` },
      { id: 'E', type: 'text', value: `(50 / 9X) + (50Y / 4)` },

    ],
    correct: 'A',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 149,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A inclinação de uma rampa é calculada da seguinte maneira: para cada metro medido na horizontal, mede-se x 
centímetros na vertical. Diz-se, nesse caso, que a rampa tem inclinação de x %, como no exemplo da figura: 
20 cm 
1 m 
A figura apresenta um projeto de uma rampa de acesso a uma garagem residencial cuja base, situada 2 metros 
abaixo do nível da rua, tem 8 metros de comprimento. 
Portão 
Nível da rua 
Garagem 
2 m 
Rampa 
Nível da base 
da garagem 
8 m 
Depois de projetada a rampa, o responsável pela obra foi informado de que as normas técnicas do município onde 
ela está localizada exigem que a inclinação máxima de uma rampa de acesso a uma garagem residencial seja de 20%. 
Se a rampa projetada tiver inclinação superior a 20%, o nível da garagem devera ser alterado para diminuir o 
percentual de inclinação, mantendo o comprimento da base da rampa. 
Para atender às normas técnicas do município, o nível da garagem devera ser`,
    images: ['/enem/2018/images/enem_2018_d2_q149_1.jpg', '/enem/2018/images/enem_2018_d2_q149_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `elevado em 40 cm.` },
      { id: 'B', type: 'text', value: `elevado em 50 cm.` },
      { id: 'C', type: 'text', value: `mantido no mesmo nível.` },
      { id: 'D', type: 'text', value: `rebaixado em 40 cm.` },
      { id: 'E', type: 'text', value: `rebaixado em 50 cm.` },
    ],
    correct: 'A',
    explanation: ``,
    subject: ['mat'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 150,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Para ganhar um prêmio, uma pessoa deverá retirar, 
sucessivamente e sem reposição, duas bolas pretas de 
uma mesma urna. 
Inicialmente, as quantidades e cores das bolas são 
como descritas a seguir: 
• Urna A - Possui três bolas brancas, duas bolas 
pretas e uma bola verde; 
• Urna B - Possui seis bolas brancas, três bolas 
pretas e uma bola verde; 
• Urna C - Possui duas bolas pretas e duas bolas 
verdes; 
• Urna D - Possui três bolas brancas e três bolas 
pretas. 
A pessoa deve escolher uma entre as cinco opções 
apresentadas: 
• Opção 1 - Retirar, aleatoriamente, duas bolas da urna A; 
• Opção 2 - Retirar, aleatoriamente, duas bolas da 
urna B; 
• Opção 3 - Passar, aleatoriamente, uma bola da urna 
C para a urna A; após isso, retirar, aleatoriamente, 
duas bolas da urna A; 
• Opção 4 - Passar, aleatoriamente, uma bola da urna 
D para a urna C; após isso, retirar, aleatoriamente, 
duas bolas da urna C; 
• Opção 5 - Passar, aleatoriamente, uma bola da urna 
C para a urna D; após isso, retirar, aleatoriamente, 
duas bolas da urna D. 
Com o objetivo de obter a maior probabilidade possível de 
ganhar o prêmio, a pessoa deve escolher a opção`,
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
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 151,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A Ecofont possui design baseado na velha fonte 
Vera Sans. Porém, ela tem um diferencial: pequenos 
buraquinhos circulares congruentes, e em todo o seu corpo, 
presentes em cada símbolo. Esses furos proporcionam 
um gasto de tinta menor na hora da impressão. 
Disponível em: www.goo.gl. Acesso em: 2 dez. 2017 (adaptado). 
Suponha que a palavra ECO esteja escrita nessa fonte, 
com tamanho 192, e que seja composta por letras formadas 
por quadrados de lados x com furos circulares de raio 
x 
3 
r = 
. Para que a área a ser pintada seja reduzida a 1 
16 
da área inicial, pretende-se reduzir o tamanho da fonte. 
Sabe-se que, ao alterar o tamanho da fonte, o tamanho 
da letra é alterado na mesma proporção. 
Nessas condições, o tamanho adequado da fonte será`,
    images: ['/enem/2018/images/enem_2018_d2_q151.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `64.` },
      { id: 'B', type: 'text', value: `48.` },
      { id: 'C', type: 'text', value: `24.` },
      { id: 'D', type: 'text', value: `21.` },
      { id: 'E', type: 'text', value: `12.` },
    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 152,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Para criar um logotipo, um profissional da área de 
design gráfico deseja construí-lo utilizando o conjunto de 
pontos do plano na forma de um triângulo, exatamente 
como mostra a imagem. 
y 
15 
10 
5 
x 
0 
− 15 
− 10 
− 5 
5 
15 
10 
− 5 
− 10 
− 15 
Para construir tal imagem utilizando uma ferramenta 
gráfica, será necessário escrever algebricamente o 
conjunto que representa os pontos desse gráfico. 
Esse conjunto é dado pelos pares ordenados (x ; y) ∈  ×  , 
tais que`,
    images: ['/enem/2018/images/enem_2018_d2_q152.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0 ≤ x ≤ y ≤ 10` },
      { id: 'B', type: 'text', value: `0 ≤ y ≤ x ≤ 10` },
      { id: 'C', type: 'text', value: `0 ≤ x ≤ 10, 0 ≤ y ≤ 10` },
      { id: 'D', type: 'text', value: `0 ≤ x + y ≤ 10` },
      { id: 'E', type: 'text', value: `0 ≤ x + y ≤ 20` },
    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 153,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A figura mostra uma praça circular que contém
um chafariz em seu centro e, em seu entorno, um
passeio. Os círculos que definem a praça e o chafariz
são concêntricos.
O passeio terá seu piso revestido com ladrilhos. Sem
condições de calcular os raios, pois o chafariz está cheio,
um engenheiro fez a seguinte medição: esticou uma
trena tangente ao chafariz, medindo a distância entre
dois pontos A e B , conforme a figura. Com isso, obteve a
medida do segmento de reta AB : 16 m.
Dispondo apenas dessa medida, o engenheiro
calculou corretamente a medida da área do passeio, em 
metro quadrado. 
A medida encontrada pelo engenheiro foi`,
    images: ['/enem/2018/images/enem_2018_d2_q153_1.jpg', '/enem/2018/images/enem_2018_d2_q153_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `4 π` },
      { id: 'B', type: 'text', value: `8 π` },
      { id: 'C', type: 'text', value: `48 π` },
      { id: 'D', type: 'text', value: `64 π` },
      { id: 'E', type: 'text', value: `192 π` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 154,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Um designer de jogos planeja um jogo que faz uso 
de um tabuleiro de dimensão n × n , com n ≥ 2, no qual 
cada jogador, na sua vez, coloca uma peça sobre uma 
das casas vazias do tabuleiro. Quando uma peça é 
posicionada, a região formada pelas casas que estão na 
mesma linha ou coluna dessa peça é chamada de zona 
de combate dessa peça. Na figura está ilustrada a zona 
de combate de uma peça colocada em uma das casas de 
um tabuleiro de dimensão 8 × 8. 
O tabuleiro deve ser dimensionado de forma que a 
probabilidade de se posicionar a segunda peça 
aleatoriamente, seguindo a regra do jogo, e esta ficar 
sobre a zona de combate da primeira, seja inferior a 1 
5 
. 
A dimensão mínima que o designer deve adotar para 
esse tabuleiro é`,
    images: ['/enem/2018/images/enem_2018_d2_q154.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `4 × 4.` },
      { id: 'B', type: 'text', value: `6 × 6.` },
      { id: 'C', type: 'text', value: `9 × 9.` },
      { id: 'D', type: 'text', value: `10 × 10.` },
      { id: 'E', type: 'text', value: `11 × 11` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 155,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O remo de assento deslizante é um esporte que faz 
uso de um barco e dois remos do mesmo tamanho. 
A figura mostra uma das posições de uma técnica 
chamada afastamento. 
Disponível em: www.remobrasil.com. Acesso em: 6 dez. 2017 (adaptado). 
Nessa posição, os dois remos se encontram no ponto 
A e suas outras extremidades estão indicadas pelos 
pontos B e C . Esses três pontos formam um triângulo 
ABC cujo ângulo BÂC tem medida de 170°. 
O tipo de triângulo com vértices nos pontos A , B e C , no 
momento em que o remador está nessa posição, é`,
    images: ['/enem/2018/images/enem_2018_d2_q155.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `retângulo escaleno.` },
      { id: 'B', type: 'text', value: `acutângulo escaleno.` },
      { id: 'C', type: 'text', value: `acutângulo isósceles.` },
      { id: 'D', type: 'text', value: `obtusângulo escaleno.` },
      { id: 'E', type: 'text', value: `obtusângulo isósceles.` },
    ],
    correct: 'E',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 156,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Um rapaz estuda em uma escola que fica longe de 
sua casa, e por isso precisa utilizar o transporte público. 
Como é muito observador, todos os dias ele anota a hora 
exata (sem considerar os segundos) em que o ônibus 
passa pelo ponto de espera. Também notou que nunca 
consegue chegar ao ponto de ônibus antes de 6 h 15 min 
da manhã. Analisando os dados coletados durante o mês 
de fevereiro, o qual teve 21 dias letivos, ele concluiu que 
6 h 21 min foi o que mais se repetiu, e que a mediana do 
conjunto de dados é 6 h 22 min. 
A probabilidade de que, em algum dos dias letivos de 
fevereiro, esse rapaz tenha apanhado o ônibus antes de 
6 h 21 min da manhã é, no máximo,`,
    alternatives: [
      { id: 'A', type: 'text', value: `4 
21` },
      { id: 'B', type: 'text', value: `5 
21` },
      { id: 'C', type: 'text', value: `6 
21` },
      { id: 'D', type: 'text', value: `7 
21` },
      { id: 'E', type: 'text', value: `8 
21` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 157,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Um mapa é a representação reduzida e simplificada 
de uma localidade. Essa redução, que é feita com o 
uso de uma escala, mantém a proporção do espaço 
representado em relação ao espaço real. 
Certo mapa tem escala 1 : 58 000 000. 
Disponível em: http://oblogdedaynabrigth.blogspot.com.br. Acesso em: 9 ago. 2012. 
Considere que, nesse mapa, o segmento de reta que 
liga o navio à marca do tesouro meça 7,6 cm. 
A medida real, em quilômetro, desse segmento de reta é`,
    images: ['/enem/2018/images/enem_2018_d2_q157.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `4 408.` },
      { id: 'B', type: 'text', value: `7 632.` },
      { id: 'C', type: 'text', value: `44 080.` },
      { id: 'D', type: 'text', value: `76 316.` },
      { id: 'E', type: 'text', value: `440 800.` },
    ],
    correct: 'A',
    explanation: `Como escala é a razão entra a medida do desenho e a da realidade, temos que: 1/58 000 000 = 7,6 cm/x Resolvendo a equação, encontramos x = 4 408 km.`,
    subject: ['mat'],
    topics: ['Cartografia', 'Questões aleatórias'],
  },
  {
    id: 158,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Um produtor de milho utiliza uma área de 160 hectares 
para as suas atividades agrícolas. Essa área é dividida em 
duas partes: uma de 40 hectares, com maior produtividade, 
e outra, de 120 hectares, com menor produtividade. 
A produtividade é dada pela razão entre a produção, 
em tonelada, e a área cultivada. Sabe-se que a área de 
40 hectares tem produtividade igual a 2,5 vezes à 
da outra. Esse fazendeiro pretende aumentar sua 
produção total em 15%, aumentando o tamanho da 
sua propriedade. Para tanto, pretende comprar uma 
parte de uma fazenda vizinha, que possui a mesma 
produtividade da parte de 120 hectares de suas terras. 
Qual é a área mínima, em hectare, que o produtor 
precisará comprar?`,
    alternatives: [
      { id: 'A', type: 'text', value: `36` },
      { id: 'B', type: 'text', value: `33` },
      { id: 'C', type: 'text', value: `27` },
      { id: 'D', type: 'text', value: `24` },
      { id: 'E', type: 'text', value: `21` },
    ],
    correct: 'B',
    explanation: `Sejam p1 e p2, respectivamente, a produtividade de 120 hectares e a produtividade da área de 40 hectares, com p2 = 2,5 . p1. Logo, sendo q1 e 12, respectivamente, a produção da área de 120 hectares e a produção de 40 hectares, temos q1 = 120 . p1 e q2 = 220 . p1 A produção total antes da aquisição é dada por: q1 + q2 = 120 . p1 + 100 . p1 = 220 . p1 Portanto, sofrendo um aumento de 15%, a produção passará a ser 1,15 . 220 . p1 = 253 . p1. Em consequência, se x é o resultado procurado, então: (120 + x) . p1 + 100 . p1 = 253 . p1 -> 120 + x + 100 = 253 -> x = 33ha.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 159,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Minecraft é um jogo virtual que pode auxiliar no desenvolvimento de conhecimentos relacionados a espaço e forma. 
É possível criar casas, edifícios, monumentos e até naves espaciais, tudo em escala real, através do empilhamento 
de cubinhos. 
Um jogador deseja construir um cubo com dimensões 4 × 4 × 4. Ele ja empilhou alguns dos cubinhos necessários, 
conforme a figura. 
+ 
+ 
+ 
Os cubinhos que ainda faltam empilhar para finalizar a construção do cubo, juntos, formam uma peca única, capaz 
de completar a tarefa. 
O formato da peça capaz de completar o cubo 4 × 4 × 4 é`,
    images: ['/enem/2018/images/enem_2018_d2_q159.jpg'],
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
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 160,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `De acordo com um relatório recente da Agência 
Internacional de Energia (AIE), o mercado de veículos 
elétricos atingiu um novo marco em 2016, quando foram 
vendidos mais de 750 mil automóveis da categoria. 
Com isso, o total de carros elétricos vendidos no mundo 
alcançou a marca de 2 milhões de unidades desde que 
os primeiros modelos começaram a ser comercializados 
em 2011. 
No Brasil, a expansão das vendas também se verifica. 
A marca A, por exemplo, expandiu suas vendas no ano de 
2016, superando em 360 unidades as vendas de 2015, 
conforme representado no gráfico. 
Disponível em: www.tecmundo.com.br. Acesso em: 5 dez. 2017. 
A média anual do número de carros vendidos pela 
marca A, nos anos representados no gráfico, foi de`,
    images: ['/enem/2018/images/enem_2018_d2_q160.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `192.` },
      { id: 'B', type: 'text', value: `240.` },
      { id: 'C', type: 'text', value: `252.` },
      { id: 'D', type: 'text', value: `320.` },
      { id: 'E', type: 'text', value: `420.` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['mat'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 161,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Para apagar os focos A e B de um incêndio, que 
estavam a uma distância de 30 m um do outro, os 
bombeiros de um quartel decidiram se posicionar de 
modo que a distância de um bombeiro ao foco A, de 
temperatura mais elevada, fosse sempre o dobro da 
distância desse bombeiro ao foco B, de temperatura 
menos elevada. 
Nestas condições, a maior distância, em metro, que dois 
bombeiros poderiam ter entre eles é`,
    alternatives: [
      { id: 'A', type: 'text', value: `30.` },
      { id: 'B', type: 'text', value: `40.` },
      { id: 'C', type: 'text', value: `45.` },
      { id: 'D', type: 'text', value: `60.` },
      { id: 'E', type: 'text', value: `68.` },
    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 162,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Torneios de tênis, em geral, são disputados em 
sistema de eliminatória simples. Nesse sistema, são 
disputadas partidas entre dois competidores, com a 
eliminação do perdedor e promoção do vencedor para 
a fase seguinte. Dessa forma, se na 1 a fase o torneio 
conta com 2 n competidores, então na 2 a fase restarão n 
competidores, e assim sucessivamente até a partida final. 
Em um torneio de tênis, disputado nesse sistema, 
participam 128 tenistas. 
Para se definir o campeão desse torneio, o número de 
partidas necessárias é dado por`,
    images: ['/enem/2018/images/enem_2018_d2_q162.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `× 2 128` },
      { id: 'B', type: 'text', value: `+ + + + + 64 32 16 8 4 2` },
      { id: 'C', type: 'text', value: `+ + + + + + + 128 64 32 16 8 4 2 1` },
      { id: 'D', type: 'text', value: `+ + + + + + 128 64 32 16 8 4 2` },
      { id: 'E', type: 'text', value: `+ + + + + + 64 32 16 8 4 2 1` },
    ],
    correct: 'E',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 163,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O artigo 33 da lei brasileira sobre drogas prevê a 
pena de reclusão de 5 a 15 anos para qualquer pessoa 
que seja condenada por tráfico ilícito ou produção não 
autorizada de drogas. Entretanto, caso o condenado seja 
réu primário, com bons antecedentes criminais, essa 
pena pode sofrer uma redução de um sexto a dois terços. 
Suponha que um réu primário, com bons 
antecedentes criminais, foi condenado pelo artigo 33 da 
lei brasileira sobre drogas. 
Após o benefício da redução de pena, sua pena poderá 
variar de`,
    alternatives: [
      { id: 'A', type: 'text', value: `1 ano e 8 meses a 12 anos e 6 meses.` },
      { id: 'B', type: 'text', value: `1 ano e 8 meses a 5 anos.` },
      { id: 'C', type: 'text', value: `3 anos e 4 meses a 10 anos.` },
      { id: 'D', type: 'text', value: `4 anos e 2 meses a 5 anos.` },
      { id: 'E', type: 'text', value: `4 anos e 2 meses a 12 anos e 6 meses.` },
    ],
    correct: 'A',
    annulled: true,
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 164,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Um edifício tem a numeração dos andares iniciando 
no térreo ( T ), e continuando com primeiro, segundo, 
terceiro, ..., até o último andar. Uma criança entrou no 
elevador e, tocando no painel, seguiu uma sequência 
de andares, parando, abrindo e fechando a porta em 
diversos andares. A partir de onde entrou a criança, o 
elevador subiu sete andares, em seguida desceu dez, 
desceu mais treze, subiu nove, desceu quatro e parou no 
quinto andar, finalizando a sequência. Considere que, no 
trajeto seguido pela criança, o elevador parou uma vez no 
último andar do edifício. 
De acordo com as informações dadas, o último andar do 
edifício é o`,
    alternatives: [
      { id: 'A', type: 'text', value: `16 o` },
      { id: 'B', type: 'text', value: `22 o` },
      { id: 'C', type: 'text', value: `23 o` },
      { id: 'D', type: 'text', value: `25 o` },
      { id: 'E', type: 'text', value: `32 o` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 165,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O Salão do Automóvel de São Paulo é um evento
no qual vários fabricantes expõem seus modelos mais
recentes de veículos, mostrando, principalmente, suas
inovações em design e tecnologia.
Disponível em: http://g1.globo.com. Acesso em: 4 fev. 2015 (adaptado).
Uma montadora pretende participar desse evento
com dois estandes, um na entrada e outro na região
central do salão, expondo, em cada um deles, um carro
compacto e uma caminhonete.
Para compor os estandes, foram disponibilizados
pela montadora quatro carros compactos, de modelos
distintos, e seis caminhonetes de diferentes cores para
serem escolhidos aqueles que serão expostos. A posição
dos carros dentro de cada estande é irrelevante.
Uma expressão que fornece a quantidade de maneiras
diferentes que os estandes podem ser compostos é`,
    alternatives: [
      { id: 'A', type: 'text', value: `A(10, 4)` },
      { id: 'B', type: 'text', value: `C(10, 4)` },
      { id: 'C', type: 'text', value: `C(4, 2) × C(6, 2) × 2 × 2` },
      { id: 'D', type: 'text', value: `A(4, 2) × A(6, 2) × 2 × 2` },
      { id: 'E', type: 'text', value: `C(4, 2) × C(6, 2)` },

    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 166,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Os alunos da disciplina de estatística, em um curso 
universitário, realizam quatro avaliações por semestre 
com os pesos de 20%, 10%, 30% e 40%, respectivamente. 
No final do semestre, precisam obter uma média nas 
quatro avaliações de, no mínimo, 60 pontos para serem 
aprovados. Um estudante dessa disciplina obteve os 
seguintes pontos nas três primeiras avaliações: 46, 60 e 
50, respectivamente. 
O mínimo de pontos que esse estudante precisa obter na 
quarta avaliação para ser aprovado é`,
    alternatives: [
      { id: 'A', type: 'text', value: `29,8.` },
      { id: 'B', type: 'text', value: `71,0.` },
      { id: 'C', type: 'text', value: `74,5.` },
      { id: 'D', type: 'text', value: `75,5.` },
      { id: 'E', type: 'text', value: `84,0.` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 167,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O gerente do setor de recursos humanos de uma 
empresa está organizando uma avaliação em que uma 
das etapas é um jogo de perguntas e respostas. Para 
essa etapa, ele classificou as perguntas, pelo nível de 
dificuldade, em fácil, médio e difícil, e escreveu cada 
pergunta em cartões para colocação em uma urna. 
Contudo, após depositar vinte perguntas de diferentes 
níveis na urna, ele observou que 25% delas eram de nível 
fácil. Querendo que as perguntas de nível fácil sejam a 
maioria, o gerente decidiu acrescentar mais perguntas 
de nível fácil à urna, de modo que a probabilidade de o 
primeiro participante retirar, aleatoriamente, uma pergunta 
de nível fácil seja de 75%. 
Com essas informações, a quantidade de perguntas de 
nível fácil que o gerente deve acrescentar à urna é igual a`,
    alternatives: [
      { id: 'A', type: 'text', value: `10.` },
      { id: 'B', type: 'text', value: `15.` },
      { id: 'C', type: 'text', value: `35.` },
      { id: 'D', type: 'text', value: `40.` },
      { id: 'E', type: 'text', value: `45.` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 168,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A raiva é uma doença viral e infecciosa, transmitida 
por mamíferos. A campanha nacional de vacinação 
antirrábica tem o objetivo de controlar a circulação 
do vírus da raiva canina e felina, prevenindo a raiva 
humana. O gráfico mostra a cobertura (porcentagem 
de vacinados) da campanha, em cães, nos anos de 
2013, 2015 e 2017, no município de Belo Horizonte, 
em Minas Gerais. Os valores das coberturas dos 
anos de 2014 e 2016 não estão informados no 
gráfico e deseja-se estimá-los. Para tal, levou-se 
em consideração que a variação na cobertura de 
vacinação da campanha antirrábica, nos períodos de 
2013 a 2015 e de 2015 a 2017, deu-se de forma linear. 
67% 
59% 
61% 
2013 
2014 
2015 
2016 
2017 
Disponível em: http://pni.datasus.gov.br. Acesso em: 5 nov. 2017. 
Qual teria sido a cobertura dessa campanha no ano de 2014?`,
    images: ['/enem/2018/images/enem_2018_d2_q168.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `62,3%` },
      { id: 'B', type: 'text', value: `63,0%` },
      { id: 'C', type: 'text', value: `63,5%` },
      { id: 'D', type: 'text', value: `64,0%` },
      { id: 'E', type: 'text', value: `65,5%` },
    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 169,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Uma empresa de comunicação tem a tarefa de 
elaborar um material publicitário de um estaleiro para 
divulgar um novo navio, equipado com um guindaste de 
15 m de altura e uma esteira de 90 m de comprimento. 
No desenho desse navio, a representação do guindaste 
deve ter sua altura entre 0,5 cm e 1 cm, enquanto a 
esteira deve apresentar comprimento superior a 4 cm. 
Todo o desenho deverá ser feito em uma escala 1 : X. 
Os valores possíveis para X são, apenas,`,
    alternatives: [
      { id: 'A', type: 'text', value: `X > 1 500.` },
      { id: 'B', type: 'text', value: `X < 3 000.` },
      { id: 'C', type: 'text', value: `1 500 < X < 2 250.` },
      { id: 'D', type: 'text', value: `1 500 < X < 3 000.` },
      { id: 'E', type: 'text', value: `2 250 < X < 3 000.` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 170,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Em 2014 foi inaugurada a maior roda-gigante do 
mundo, a High Roller , situada em Las Vegas. A figura 
representa um esboço dessa roda-gigante, no qual o 
ponto A representa uma de suas cadeiras: 
A 
O 
Solo 
Solo 
Disponível em: http://en.wikipedia.org. Acesso em: 22 abr. 2014 (adaptado). 
A partir da posição indicada, em que o segmento OA 
se encontra paralelo ao plano do solo, rotaciona-se a 
High Roller no sentido anti-horário, em torno do ponto O . 
Sejam t o ângulo determinado pelo segmento OA em 
relação à sua posição inicial, e f a função que descreve 
a altura do ponto A , em relação ao solo, em função de t . 
Após duas voltas completas, f tem o seguinte gráfico: 
(metro) 
f 
168 
88 
π 
π 
π 
0 
/2 
2 
t (radiano) 
4 
A expressão da função altura é dada por`,
    images: ['/enem/2018/images/enem_2018_d2_q170_1.jpg', '/enem/2018/images/enem_2018_d2_q170_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `= + f ( t ) 80 sen ( t ) 88` },
      { id: 'B', type: 'text', value: `= + f ( t ) 80 cos ( t ) 88` },
      { id: 'C', type: 'text', value: `= + f ( t ) 88 cos ( t ) 168` },
      { id: 'D', type: 'text', value: `= + f ( t ) 168 sen ( t ) 88 cos ( t )` },
      { id: 'E', type: 'text', value: `= + f ( t ) 88 sen ( t ) 168 cos ( t )` },
    ],
    correct: 'A',
    explanation: ``,
    subject: ['mat'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 171,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A rosa dos ventos é uma figura que representa oito 
sentidos, que dividem o círculo em partes iguais. 
Uma câmera de vigilância está fixada no teto de um 
shopping e sua lente pode ser direcionada remotamente, 
através de um controlador, para qualquer sentido. A lente 
da câmera está apontada inicialmente no sentido Oeste 
e o seu controlador efetua três mudanças consecutivas, 
a saber: 
• 1 a mudança: 135º no sentido anti-horário; 
• 2 a mudança: 60º no sentido horário; 
• 3 a mudança: 45º no sentido anti-horário. 
Após a 3 a mudança, ele é orientado a reposicionar 
a câmera, com a menor amplitude possível, no sentido 
Noroeste ( NO ) devido a um movimento suspeito de 
um cliente. 
Qual mudança de sentido o controlador deve efetuar para 
reposicionar a câmera?`,
    images: ['/enem/2018/images/enem_2018_d2_q171.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `75º no sentido horário.` },
      { id: 'B', type: 'text', value: `105º no sentido anti-horário.` },
      { id: 'C', type: 'text', value: `120º no sentido anti-horário.` },
      { id: 'D', type: 'text', value: `135º no sentido anti-horário.` },
      { id: 'E', type: 'text', value: `165º no sentido horário.` },
    ],
    correct: 'E',
    explanation: ``,
    subject: ['mat'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 172,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Na teoria das eleições, o Método de Borda sugere 
que, em vez de escolher um candidato, cada juiz deve 
criar um ranking de sua preferência para os concorrentes 
(isto é, criar uma lista com a ordem de classificação 
dos concorrentes). A este ranking é associada uma 
pontuação: um ponto para o último colocado no ranking , 
dois pontos para o penúltimo, três para o antepenúltimo, 
e assim sucessivamente. Ao final, soma-se a pontuação 
atribuída a cada concorrente por cada um dos juízes. 
Em uma escola houve um concurso de poesia no qual 
cinco alunos concorreram a um prêmio, sendo julgados 
por 25 juízes. Para a escolha da poesia vencedora 
foi utilizado o Método de Borda. Nos quadros, estão 
apresentados os rankings dos juízes e a frequência de 
cada 
5 o 
Edu 
Bia 
Dani 
Caio 
 
A poesia vencedora foi a de`,
    images: ['/enem/2018/images/enem_2018_d2_q172_1.jpg', '/enem/2018/images/enem_2018_d2_q172_2.jpg', '/enem/2018/images/enem_2018_d2_q172_3.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Edu.` },
      { id: 'B', type: 'text', value: `Dani.` },
      { id: 'C', type: 'text', value: `Caio.` },
      { id: 'D', type: 'text', value: `Bia.` },
      { id: 'E', type: 'text', value: `Ana.` },
    ],
    correct: 'E',
    explanation: `As pontuações dos alunos foram as seguintes:Edu: 1&#215;4 + 3&#215;9 + 2&#215;7 + 5&#215;5 = 70 Dani: 2&#215;4 + 5&#215;9 + 1&#215;7 + 3&#215;5 = 75 Caio: 3&#215;4 + 4&#215;9 + 3&#215;7 + 1&#215;5 = 74 Bia: 4&#215;4 + 1&#215;9 + 5&#215;7 + 2&#215;5 = 70 Ana: 5&#215;4 + 2&#215;9 + 4&#215;7 + 4&#215;5 = 86 Portanto, como Ana teve a maior pontuação, segue que a sua poesia foi a vencedora.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 173,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Os guindastes são fundamentais em canteiros de obras, no manejo de materiais pesados como vigas de aco.`,
    images: ['/enem/2018/images/enem_2018_d2_q173.jpg'],
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
    id: 174,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Com o avanço em ciência da computação, estamos 
próximos do momento em que o número de transistores no 
processador de um computador pessoal será da mesma 
ordem de grandeza que o número de neurônios em um 
cérebro humano, que é da ordem de 100 bilhões. 
Uma das grandezas determinantes para o desempenho 
de um processador é a densidade de transistores, que 
é o número de transistores por centímetro quadrado. 
Em 1986, uma empresa fabricava um processador 
contendo 100 000 transistores distribuídos em 0,25 cm² 
de área. Desde então, o número de transistores por 
centímetro quadrado que se pode colocar em um 
processador dobra a cada dois anos (Lei de Moore). 
Disponível em: www.pocket-lint.com. Acesso em: 1 dez. 2017 (adaptado). 
Considere 0,30 como aproximação para log 10 2. 
Em que ano a empresa atingiu ou atingirá a densidade de 
100 bilhões de transistores?`,
    alternatives: [
      { id: 'A', type: 'text', value: `1999` },
      { id: 'B', type: 'text', value: `2002` },
      { id: 'C', type: 'text', value: `2022` },
      { id: 'D', type: 'text', value: `2026` },
      { id: 'E', type: 'text', value: `2146` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 175,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Uma loja vende automóveis em N parcelas iguais 
sem juros. No momento de contratar o financiamento, 
caso o cliente queira aumentar o prazo, acrescentando 
mais 5 parcelas, o valor de cada uma das parcelas 
diminui R$ 200,00, ou se ele quiser diminuir o prazo, 
com 4 parcelas a menos, o valor de cada uma das 
parcelas sobe R$ 232,00. Considere ainda que, nas três 
possibilidades de pagamento, o valor do automóvel é o 
mesmo, todas são sem juros e não é dado desconto em 
nenhuma das situações. 
Nessas condições, qual é a quantidade N de parcelas a 
serem pagas de acordo com a proposta inicial da loja?`,
    alternatives: [
      { id: 'A', type: 'text', value: `20` },
      { id: 'B', type: 'text', value: `24` },
      { id: 'C', type: 'text', value: `29` },
      { id: 'D', type: 'text', value: `40` },
      { id: 'E', type: 'text', value: `58` },
    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 176,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O salto ornamental é um esporte em que cada 
competidor realiza seis saltos. A nota em cada salto é 
calculada pela soma das notas dos juízes, multiplicada 
pela nota de partida (o grau de dificuldade de cada salto). 
Fica em primeiro lugar o atleta que obtiver a maior soma 
das seis notas recebidas. 
O atleta 10 irá realizar o último salto da final. 
Ele observa no Quadro 1, antes de executar o salto, 
o recorte do quadro parcial de notas com a sua 
classificação e a dos três primeiros lugares até aquele 
momento. 
 
6 o 
10 
687,5 
Ele precisa decidir com seu treinador qual salto 
deverá realizar. Os dados dos possíveis tipos de salto 
estão no Quadro 2. 
 
O atleta optará pelo salto com a maior probabilidade 
de obter a nota estimada, de maneira que lhe permita 
alcançar o primeiro lugar. 
Considerando essas condições, o salto que o atleta 
deverá escolher é o de tipo`,
    images: ['/enem/2018/images/enem_2018_d2_q176_1.jpg', '/enem/2018/images/enem_2018_d2_q176_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `T1.` },
      { id: 'B', type: 'text', value: `T2.` },
      { id: 'C', type: 'text', value: `T3.` },
      { id: 'D', type: 'text', value: `T4.` },
      { id: 'E', type: 'text', value: `T5.` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 177,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Devido ao não cumprimento das metas definidas 
para a campanha de vacinação contra a gripe comum 
e o vírus H1N1 em um ano, o Ministério da Saúde 
anunciou a prorrogação da campanha por mais uma 
semana. A tabela apresenta as quantidades de pessoas 
vacinadas dentre os cinco grupos de risco até a data de 
início da prorrogação da campanha. 
 
Disponível em: http://portalsaude.saude.gov.br. Acesso em: 16 ago. 2012. 
Qual é a porcentagem do total de pessoas desses grupos 
de risco já vacinadas?`,
    images: ['/enem/2018/images/enem_2018_d2_q177.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `12` },
      { id: 'B', type: 'text', value: `18` },
      { id: 'C', type: 'text', value: `30` },
      { id: 'D', type: 'text', value: `40` },
      { id: 'E', type: 'text', value: `50` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['mat'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 178,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Durante uma festa de colégio, um grupo de alunos 
organizou uma rifa. Oitenta alunos faltaram à festa e não 
participaram da rifa. Entre os que compareceram, alguns 
compraram três bilhetes, 45 compraram 2 bilhetes, e 
muitos compraram apenas um. O total de alunos que 
comprou um único bilhete era 20% do número total de 
bilhetes vendidos, e o total de bilhetes vendidos excedeu 
em 33 o número total de alunos do colégio. 
Quantos alunos compraram somente um bilhete?`,
    alternatives: [
      { id: 'A', type: 'text', value: `34` },
      { id: 'B', type: 'text', value: `42` },
      { id: 'C', type: 'text', value: `47` },
      { id: 'D', type: 'text', value: `48` },
      { id: 'E', type: 'text', value: `79` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 179,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Um quebra-cabeça consiste em recobrir um quadrado 
com triângulos retângulos isósceles, como ilustra a figura. 
Uma artesã confecciona um quebra-cabeça como 
o descrito, de tal modo que a menor das peças é um 
triângulo retângulo isósceles cujos catetos medem 2 cm. 
O quebra-cabeça, quando montado, resultará em um 
quadrado cuja medida do lado, em centímetro, é`,
    images: ['/enem/2018/images/enem_2018_d2_q179.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `14` },
      { id: 'B', type: 'text', value: `12` },
      { id: 'C', type: 'text', value: `7 2` },
      { id: 'D', type: 'text', value: `6 
4 2 
+` },
      { id: 'E', type: 'text', value: `6 
2 2 
+` },
    ],
    correct: 'A',
    explanation: ``,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 180,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Para decorar um cilindro circular reto será usada uma 
faixa retangular de papel transparente, na qual está 
desenhada em negrito uma diagonal que forma 30° com a 
6 cm, e ao 
borda inferior. O raio da base do cilindro mede π 
enrolar a faixa obtém-se uma linha em formato de hélice, 
como na figura. 
30° 
O valor da medida da altura do cilindro, em centímetro, é`,
    images: ['/enem/2018/images/enem_2018_d2_q180.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `36 3` },
      { id: 'B', type: 'text', value: `24 3` },
      { id: 'C', type: 'text', value: `4 3` },
      { id: 'D', type: 'text', value: `36` },
      { id: 'E', type: 'text', value: `72` },
    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
];

export default ENEM_2018_D2;
