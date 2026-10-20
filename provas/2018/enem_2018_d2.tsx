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
    explanation: `O polímero de azobenzeno possui ligações duplas N=N que, ao absorverem luz em diferentes comprimentos de onda (365 nm e 420 nm), sofrem fotoisomerização reversível entre as formas trans e cis. A forma cis é mais compacta (dobrada) do que a forma trans, mais estendida, de modo que a conversão de uma geometria para a outra encurta ou alonga a cadeia, provocando a flexão da lâmina. Esse movimento, portanto, decorre da isomerização das ligações N=N. Portanto, a resposta é a isomerização das ligações N=N, sendo a forma cis mais compacta que a trans (alternativa B).`,
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
    explanation: `A gasolina tem densidade 0,7 g/mL, de modo que 40 L correspondem a 40 000 mL × 0,7 = 28 000 g; com calor de combustão de 10 kcal/g, a energia liberada na ida é 28 000 × 10 = 280 000 kcal. Como o consumo de energia na volta é o mesmo, a massa de etanol necessária (calor de combustão 6 kcal/g) é 280 000 ÷ 6 ≈ 46 667 g. Dividindo pela densidade do etanol (0,8 g/mL), o volume é 46 667 ÷ 0,8 ≈ 58 333 mL ≈ 58 L. Portanto, o volume de etanol consumido é mais próximo de 58 litros (alternativa D).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 93,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Em 1938 o arqueólogo alemão Wilhelm König, diretor do Museu
Nacional do Iraque, encontrou um objeto estranho na coleção da
instituição, que poderia ter sido usado como uma pilha,
similar às utilizadas em nossos dias. A suposta pilha, datada
de cerca de 200 a.C., é constituída de um pequeno vaso de
barro (argila) no qual foram instalados um tubo de cobre, uma
barra de ferro (aparentemente corroída por ácido) e uma tampa
de betume (asfalto), conforme ilustrado. Considere os
potenciais-padrão de redução: E(Fe²⁺|Fe) = −0,44 V; E(H⁺|H₂) =
0,00 V; e E(Cu²⁺|Cu) = +0,34 V. Tampa de betume Barra de ferro
Tubo de cobre Vestígio de ácido Vaso de barro As pilhas de
Bagdá e a acupuntura . Disponível em: http://jornalggn.com.br.
Acesso em: 14 dez. 2014 (adaptado). Nessa suposta pilha, qual
dos componentes atuaria como cátodo?`,
    images: ['/enem/2018/images/enem_2018_d2_q93.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A tampa de betume.` },
      { id: 'B', type: 'text', value: `O vestígio de ácido.` },
      { id: 'C', type: 'text', value: `A barra de ferro.` },
      { id: 'D', type: 'text', value: `O tubo de cobre.` },
      { id: 'E', type: 'text', value: `O vaso de barro.` },
    ],
    correct: 'D',
    explanation: `Em uma pilha, o cátodo é o eletrodo onde ocorre a redução, que corresponde ao material de maior potencial-padrão de redução. Entre os componentes, o cobre tem E = +0,34 V e o ferro E = −0,44 V; como +0,34 V > −0,44 V, o cobre se reduz (cátodo) e o ferro se oxida (ânodo). Logo, é o tubo de cobre que atua como cátodo. Portanto, a resposta é o tubo de cobre (alternativa D).`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
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
    explanation: `Na hipoglicemia o organismo secreta glucagon, hormônio de ação catabólica no fígado. Sua função é elevar a glicemia, o que é feito principalmente pela glicogenólise, isto é, a quebra do glicogênio hepático para liberar glicose na corrente sanguínea. Assim, o glucagon induz o organismo a utilizar (degradar) o glicogênio armazenado. Portanto, a resposta é estimular a utilização do glicogênio (alternativa E).`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 95,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Usando um densímetro cuja menor divisão da escala, isto é, a
diferença entre duas marcações consecutivas, é de 5,0 × 10⁻²
g/cm³, um estudante realizou um teste de densidade: colocou
este instrumento na água pura e observou que ele atingiu o
repouso na posição mostrada. Legenda: Densímetro Água Em dois
outros recipientes A e B contendo 2 litros de água pura, em
cada um, ele adicionou 100 g e 200 g de NaCl, respectivamente.
Quando o cloreto de sódio é adicionado à água pura ocorre sua
dissociação formando os íons Na⁺ e Cl⁻. Considere que esses
íons ocupam os espaços intermoleculares na solução. Nestes
recipientes, a posição de equilíbrio do densímetro está
representada em:`,
    images: ['/enem/2018/images/enem_2018_d2_q95.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2018/images/enem_2018_d2_q95_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2018/images/enem_2018_d2_q95_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2018/images/enem_2018_d2_q95_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2018/images/enem_2018_d2_q95_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2018/images/enem_2018_d2_q95_E.jpg` },
    ],
    correct: 'D',
    explanation: `Em 2 L de água pura (2 000 g; 2 000 cm³) a adição de NaCl aumenta a massa sem alterar o volume, pois os íons ocupam os espaços intermoleculares, elevando a densidade. No recipiente A (100 g): d = 2 100 ÷ 2 000 = 1,05 g/cm³; no B (200 g): d = 2 200 ÷ 2 000 = 1,10 g/cm³. Como cada divisão da escala vale 5,0 × 10⁻² g/cm³, A fica uma divisão acima da marca da água pura e B fica duas divisões acima, e quanto maior a densidade mais o densímetro emerge. A figura que mostra o densímetro subindo uma divisão em A e duas em B é a da alternativa D.`,
    subject: ['fis'],
    topics: ['Hidrostática', 'Questões aleatórias'],
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
    explanation: `Os ácidos biliares são moléculas anfipáticas, com uma parte apolar que interage com os lipídios e uma parte polar voltada para a água. Por isso envolvem as gotículas de gordura e as fragmentam em micelas, aumentando a superfície de contato para a ação das lipases, exatamente como age um detergente. A emulsificação resulta dessa ação tensoativa (detergente) dos sais biliares, e não da hidrólise dos lipídios. Portanto, a resposta é agir como detergentes (alternativa B).`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
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
      { id: 'E', type: 'text', value: `magnético da onda de rádio diminui a ressonância no interior da bobina.` },
    ],
    correct: 'C',
    explanation: `A onda de rádio emitida pelo leitor é uma onda eletromagnética cujo campo magnético variável atravessa a bobina da etiqueta. Pela lei de Faraday, essa variação de fluxo magnético induz uma corrente elétrica na espira, que alimenta o microprocessador sem necessidade de bateria. É, portanto, a indução eletromagnética que faz a etiqueta funcionar. Portanto, a resposta é que o campo magnético da onda de rádio induz corrente na bobina (alternativa C).`,
    subject: ['fis'],
    topics: ['Eletromagnetismo/Indução', 'Questões aleatórias'],
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
    explanation: `Os corredores ecológicos reconectam fragmentos isolados, permitindo o deslocamento de indivíduos entre populações antes separadas. Esse trânsito possibilita o cruzamento entre indivíduos de diferentes fragmentos, promovendo o fluxo gênico. O aumento da troca de genes amplia a variabilidade genética e, com isso, recupera a biodiversidade de forma efetiva. Portanto, a estratégia é efetiva porque propicia o fluxo gênico (alternativa A).`,
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
alaranjada, e um rótulo de risco. As informações inseridas no
painel de segurança e no rótulo de risco, conforme determina a
legislação, permitem que se identifique o produto transportado
e os perigos a ele associados. A sinalização mostrada
identifica uma substância que está sendo transportada em um
caminhão. 268 1005 GAS TÓXICO 2 Os três algarismos da parte
superior do painel indicam o “Número de risco”. O número 268
indica tratar-se de um gás (2), tóxico (6) e corrosivo (8). Os
quatro dígitos da parte inferior correspondem ao “Número ONU”,
que identifica o produto transportado. BRASIL. Resolução n.
420 , de 12/02/2004, da Agência Nacional de Transportes
Terrestres (ANTT)/Ministério dos Transportes (adaptado). ABNT.
NBR 7500 : identificação para o transporte terrestre,
manuseio, movimentação e armazenamento de produtos. Rio de
Janeiro, 2004 (adaptado). Considerando a identificação
apresentada no caminhão, o código 1005 corresponde à
substância`,
    images: ['/enem/2018/images/enem_2018_d2_q99.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `eteno (C₂ H₄ ).` },
      { id: 'B', type: 'text', value: `nitrogênio (N₂ ).` },
      { id: 'C', type: 'text', value: `amônia (NH₃ ).` },
      { id: 'D', type: 'text', value: `propano (C₃ H₈ ).` },
      { id: 'E', type: 'text', value: `dióxido de carbono (CO₂ ).` },
    ],
    correct: 'C',
    explanation: `O número ONU, de quatro dígitos (1005), identifica especificamente a substância transportada, enquanto o número de risco 268 indica gás (2), tóxico (6) e corrosivo (8). O código 1005 corresponde à amônia (NH₃), que é efetivamente um gás tóxico e corrosivo, compatível com o número de risco informado. Portanto, a substância é a amônia (alternativa C).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
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
      { id: 'B', type: 'text', value: `saída imediata do ciclo celular, antecipando a proteção do DNA.` },
      { id: 'C', type: 'text', value: `ativação de outras proteínas reguladoras, induzindo a apoptose.` },
      { id: 'D', type: 'text', value: `manutenção da estabilidade genética, favorecendo a longevidade.` },
      { id: 'E', type: 'text', value: `proliferação celular exagerada, resultando na formação de um tumor.` },
    ],
    correct: 'E',
    explanation: `A proteína p53 detém o ciclo celular diante de danos no DNA, permitindo o reparo, ou induz a apoptose quando o dano é irreparável, atuando como supressora de tumor. Na sua ausência, células com DNA danificado prosseguem no ciclo e se dividem sem controle. O acúmulo dessas divisões descontroladas favorece a formação de tumores. Portanto, a ausência de p53 favorece a proliferação celular exagerada, resultando na formação de um tumor (alternativa E).`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `existência de numerosas glândulas sudoríparas na epiderme.` },
      { id: 'B', type: 'text', value: `eliminação de excretas nitrogenadas de forma concentrada.` },
      { id: 'C', type: 'text', value: `desenvolvimento do embrião no interior de ovo com casca.` },
      { id: 'D', type: 'text', value: `capacidade de controlar a temperatura corporal.` },
      { id: 'E', type: 'text', value: `respiração realizada por pulmões foliáceos.` },
    ],
    correct: 'B',
    explanation: `Nos desertos a água é escassa, de modo que a principal pressão seletiva é a economia de água. Roedores, aves, répteis e artrópodes compartilham a adaptação de excretar compostos nitrogenados de forma concentrada (como ácido úrico), eliminando pouca água junto com as excretas. As demais opções, como numerosas glândulas sudoríparas, implicariam perda de água e não seriam vantajosas nesse ambiente. Portanto, a adaptação comum é a eliminação de excretas nitrogenadas de forma concentrada (alternativa B).`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
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
    explanation: `O íon cloreto é descrito como catalisador da decomposição fotoquímica do vermilion. Um catalisador aumenta a velocidade da reação ao oferecer um caminho alternativo com menor energia de ativação, sem ser consumido no processo. Ele não desloca o equilíbrio, não age como oxidante nem absorve a luz. Portanto, o cloreto atua diminuindo a energia de ativação (alternativa C).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
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
    explanation: `A velocidade do veículo é 108 km/h = 108 ÷ 3,6 = 30 m/s, e as faixas estão separadas por 8 cm = 0,08 m. A frequência da trepidação é o número de faixas atravessadas por segundo: f = v ÷ d = 30 ÷ 0,08 = 375 Hz. Portanto, a frequência percebida é mais próxima de 375 hertz (alternativa C).`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
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
    explanation: `Numa alavanca, a força potente é maior que a resistente quando o braço da força potente é menor que o da resistente, o que ocorre na alavanca interpotente, em que a força é aplicada entre o apoio e a resistência. A pinça é exatamente esse caso: a mão aplica a força entre a articulação (apoio) e a extremidade que segura o objeto, exigindo força potente maior para equilibrar a resistência, em troca de maior precisão e alcance. Os demais objetos (alicate, quebra-nozes, carrinho de mão e abridor) multiplicam a força, com potente menor que a resistente. Portanto, a resposta é a pinça (alternativa A).`,
    subject: ['fis'],
    topics: ['Dinâmica', 'Questões aleatórias'],
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
      { id: 'D', type: 'text', value: `terem seus elétrons mais externos nos níveis 4 e 5, respectivamente.` },
      { id: 'E', type: 'text', value: `estarem localizados na família dos alcalinos terrosos e alcalinos, respectivamente.` },
    ],
    correct: 'C',
    explanation: `Nb (Z = 41) e Ta (Z = 73) têm propriedades químicas e físicas muito semelhantes porque pertencem ao mesmo grupo da tabela periódica (grupo 5), apresentando o mesmo número de elétrons na camada de valência. Elementos de um mesmo grupo têm configuração de valência análoga, o que determina comportamento químico parecido. Eles são metais de transição (bloco d), e não de transição interna nem alcalinos ou alcalino-terrosos. Portanto, a similaridade deve-se a pertencerem ao mesmo grupo na tabela periódica (alternativa C).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 106,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O processo de formação de novas espécies é lento e repleto de
nuances e estágios intermediários, havendo uma diminuição da
viabilidade entre cruzamentos. Assim, plantas originalmente de
uma mesma espécie que não cruzam mais entre si podem ser
consideradas como uma espécie se diferenciando. Um pesquisador
realizou cruzamentos entre nove populações - denominadas de
acordo com a localização onde são encontradas - de uma espécie
de orquídea ( Epidendrum denticulatum ). No diagrama estão os
resultados dos cruzamentos entre as populações. Considere que
o doador fornece o pólen para o receptor. RESULTADOS DOS
CRUZAMENTOS PETI PETI PÃO DE AÇÚCAR ITIRAPINA ITAPEVA BERTIOGA
MARAMBAIA MASSAMBABA DOADOR RECEPTOR - Polinização induzida
bem-sucedida DOADOR RECEPTOR - Polinização induzida inviável
ou nula Mata Atlântica Cerrado FIORAVANTI, C. Os primeiros
passos de novas espécies: plantas e animais se diferenciam por
meio de mecanismos surpreendentes. Pesquisa Fapesp , out. 2013
(adaptado). Em populações de quais localidades se observa um
processo de especiação evidente?`,
    images: ['/enem/2018/images/enem_2018_d2_q106.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Bertioga e Marambaia; Alcobaça e Olivença.` },
      { id: 'B', type: 'text', value: `Itirapina e Itapeva; Marambaia e Massambaba.` },
      { id: 'C', type: 'text', value: `Itirapina e Marambaia; Alcobaça e Itirapina.` },
      { id: 'D', type: 'text', value: `Itirapina e Peti; Alcobaça e Marambaia.` },
      { id: 'E', type: 'text', value: `Itirapina e Olivença; Marambaia e Peti.` },
    ],
    correct: 'D',
    explanation: `A especiação é evidente quando duas populações estão reprodutivamente isoladas, isto é, quando os cruzamentos entre elas são inviáveis nos dois sentidos (cada uma como doadora e como receptora de pólen). No diagrama, os pares Itirapina–Peti e Alcobaça–Marambaia apresentam polinização induzida inviável ou nula de forma recíproca, caracterizando o isolamento reprodutivo. Portanto, o processo de especiação evidente é observado em Itirapina e Peti; Alcobaça e Marambaia (alternativa D).`,
    subject: ['bio'],
    topics: ['Evolução', 'Questões aleatórias'],
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
    explanation: `A atemoia é uma planta híbrida, de genótipo heterozigoto, e sua reprodução por sementes recombinaria os genes, gerando descendentes diferentes da matriz. A enxertia é uma forma de propagação vegetativa (assexuada), que produz indivíduos geneticamente idênticos à planta de origem. Assim, seu benefício é preservar o genótipo da planta híbrida de interesse comercial. Portanto, a resposta é a manutenção do genótipo da planta híbrida (alternativa C).`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
  },
  {
    id: 108,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: ``,
    images: ['/enem/2018/images/enem_2018_d2_q108.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2018/images/enem_2018_d2_q108_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2018/images/enem_2018_d2_q108_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2018/images/enem_2018_d2_q108_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2018/images/enem_2018_d2_q108_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2018/images/enem_2018_d2_q108_E.jpg` },
    ],
    correct: 'D',
    explanation: `A resistência elétrica é definida por R = V ÷ i. Substituindo a equação dada, R = (10 i + i²) ÷ i = 10 + i. Trata-se, portanto, de uma função do primeiro grau: para i = 0 a resistência vale 10 Ω e cresce linearmente com a corrente. O gráfico que representa uma reta começando em 10 Ω e aumentando de forma linear com i é o da alternativa D.`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 109,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A hidroxilamina (NH₂ OH) é extremamente reativa em reações de
substituição nucleofílica, justificando sua utilização em
diversos processos. A reação de substituição nucleofílica
entre o anidrido acético e a hidroxilamina está representada.
O O O NH₂ + OH O O Produto A + NH₂ OH O O O Anidrido acético
OH N + OH H Produto B O produto A é favorecido em relação ao
B, por um fator de 10 5 . Em um estudo de possível
substituição do uso de hidroxilamina, foram testadas as
móleculas numeradas de 1 a 5. HO HO N HO N O N NH₂ N O H H 1 2
3 5 4 Dentre as moléculas testadas, qual delas apresentou
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
    explanation: `A elevada reatividade da hidroxilamina (NH₂OH) na substituição nucleofílica deve-se ao efeito alfa: o par de elétrons do nitrogênio é reforçado pelo oxigênio vizinho, e há um hidrogênio ligado ao N ou ao O que participa da reação. As cinco moléculas testadas são derivados de hidroxilamina (ligações HO–N / N–O), sem grupo carbonila. Entre elas, a molécula 4 é a única em que não há hidrogênio ligado ao oxigênio nem ao nitrogênio; sem esse H disponível, ela não consegue participar da reação do mesmo modo e apresenta o menor caráter nucleofílico. Por isso é a de menor reatividade. Portanto, a resposta é a alternativa D.`,
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
      { id: 'B', type: 'text', value: `localização de todos os genes encontrados em um genoma.` },
      { id: 'C', type: 'text', value: `codificação de sequências repetidas presentes em um genoma.` },
      { id: 'D', type: 'text', value: `conjunto de todos os RNAs mensageiros transcritos em um organismo.` },
      { id: 'E', type: 'text', value: `todas as sequências de pares de bases presentes em um organismo.` },
    ],
    correct: 'A',
    explanation: `Código genético é o conjunto de correspondências entre as trincas de nucleotídeos (códons) do material genético e os aminoácidos que elas especificam na síntese de proteínas. Ele não se confunde com a localização dos genes, com as sequências repetidas, com o conjunto de RNAs mensageiros nem com todo o pareamento de bases do organismo (que é o genoma). Portanto, o conceito correto é o de trincas de nucleotídeos que codificam os aminoácidos (alternativa A).`,
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
    explanation: `Na polinização pelo vento (anemofilia), os grãos de pólen são lançados ao acaso no ar e grande parte se perde antes de atingir outro estigma. A estratégia que aumenta a eficiência é a produção de enormes quantidades de pólen, obtida pelo aumento do número de estames. Recursos como néctar, pétalas coloridas e cálice destinam-se a atrair polinizadores na polinização biótica, não ao vento. Portanto, a estratégia é o aumento do número de estames (alternativa E).`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
  },
  {
    id: 112,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Muitos smartphones e tablets não precisam mais de teclas, uma
vez que todos os comandos podem ser dados ao se pressionar a
própria tela. Inicialmente essa tecnologia foi proporcionada
por meio das telas resistivas, formadas basicamente por duas
camadas de material condutor transparente que não se encostam
até que alguém as pressione, modificando a resistência total
do circuito de acordo com o ponto onde ocorre o toque. A
imagem é uma simplificação do circuito formado pelas placas,
em que A e B representam pontos onde o circuito pode ser
fechado por meio do toque. 4 kΩ 4 kΩ 4 kΩ + ε A - 4 kΩ B Qual
é a resistência equivalente no circuito provocada por um toque
que fecha o circuito no ponto A ?`,
    images: ['/enem/2018/images/enem_2018_d2_q112.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1,3 kΩ` },
      { id: 'B', type: 'text', value: `4,0 kΩ` },
      { id: 'C', type: 'text', value: `6,0 kΩ` },
      { id: 'D', type: 'text', value: `6,7 kΩ` },
      { id: 'E', type: 'text', value: `12,0 kΩ` },
    ],
    correct: 'C',
    explanation: `No toque em A, dois dos resistores de 4 kΩ ficam associados em paralelo, resultando em (4 × 4) ÷ (4 + 4) = 2 kΩ. Esse conjunto fica em série com outro resistor de 4 kΩ, de modo que a resistência equivalente é 4 + 2 = 6 kΩ. Portanto, a resistência equivalente é 6,0 kΩ (alternativa C).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 113,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Companhias que fabricam jeans usam cloro para o clareamento,
seguido de lavagem. Algumas estão substituindo o cloro por
substâncias ambientalmente mais seguras como peróxidos, que
podem ser degradados por enzimas chamadas peroxidases.
Pensando nisso, pesquisadores inseriram genes codificadores de
peroxidases em leveduras cultivadas nas condições de
clareamento e lavagem dos jeans e selecionaram as
sobreviventes para produção dessas enzimas. TORTORA, G. J.;
FUNKE, B. R.; CASE, C. L. Microbiologia . Rio de Janeiro:
Artmed, 2016 (adaptado). Nesse caso, o uso dessas leveduras
modificadas objetiva`,
    alternatives: [
      { id: 'A', type: 'text', value: `reduzir a quantidade de resíduos tóxicos nos efluentes da lavagem.` },
      { id: 'B', type: 'text', value: `eliminar a necessidade de tratamento da água consumida.` },
      { id: 'C', type: 'text', value: `elevar a capacidade de clareamento dos jeans .` },
      { id: 'D', type: 'text', value: `aumentar a resistência do jeans a peróxidos.` },
      { id: 'E', type: 'text', value: `associar ação bactericida ao clareamento.` },
    ],
    correct: 'A',
    explanation: `As peroxidases degradam os peróxidos usados no clareamento dos jeans, transformando-os em substâncias inofensivas. Ao inserir os genes dessas enzimas em leveduras, obtêm-se microrganismos capazes de decompor os peróxidos residuais do processo. O objetivo é, portanto, diminuir a carga de resíduos tóxicos lançada nos efluentes da lavagem, tornando o processo ambientalmente mais seguro. Portanto, a resposta é reduzir a quantidade de resíduos tóxicos nos efluentes da lavagem (alternativa A).`,
    subject: ['bio'],
    topics: ['Biotecnologia', 'Questões aleatórias'],
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
C₆H₁₂O₆ (s) + 6 O 2 (g) → 6 CO₂ (g) + 6 H₂O (l) ∆ c H = −2 800 kJ 
Considere as massas molares (em g mol⁻¹ ): H = 1; 
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
    explanation: `A massa molar da glicose (C₆H₁₂O₆) é 6×12 + 12×1 + 6×16 = 180 g/mol, de modo que 1,0 g corresponde a 1/180 mol. Com ΔcH = −2 800 kJ/mol, a energia liberada por grama é 2 800 ÷ 180 ≈ 15,6 kJ. Como apenas cerca de 40% fica disponível para a atividade muscular, tem-se 0,40 × 15,6 ≈ 6,2 kJ. Portanto, a energia obtida é mais próxima de 6,2 kJ (alternativa A).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
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
    explanation: `A potência elétrica produzida pelo peixe é P = U × i = 600 V × 2 A = 1 200 W. Procurando no quadro o equipamento com potência próxima de 1 200 W, a churrasqueira elétrica é a que apresenta valor semelhante. Portanto, o equipamento de potência similar é a churrasqueira elétrica (alternativa D).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 116,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Células solares à base de TiO₂ sensibilizadas por corantes (S)
são promissoras e poderão vir a substituir as células de
silício. Nessas células, o corante adsorvido sobre o TiO₂ é
responsável por absorver a energia luminosa ( h ν ), e o
corante excitado (S*) é capaz de transferir elétrons para o
TiO₂ . Um esquema dessa célula e os processos envolvidos estão
ilustrados na figura. A conversão de energia solar em elétrica
ocorre por meio da sequência de reações apresentadas. Corante
Eletrodo de Pt Eletrodo de TiO₂ com corante e − S* h v
Mediador de carga I₃⁻ I − S/S + e − e − e − e − LONGO, C.; DE
PAOLI, M.-A. Dye-Sensitized Solar Cells: A Successful
Combination of Materials. Journal of the Brazilian Chemical
Society , n. 6, 2003 (adaptado). A reação 3 é fundamental para
o contínuo funcionamento da célula solar, pois`,
    images: ['/enem/2018/images/enem_2018_d2_q116.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `reduz íons I − a I₃⁻.` },
      { id: 'B', type: 'text', value: `regenera o corante.` },
      { id: 'C', type: 'text', value: `garante que a reação 4 ocorra.` },
      { id: 'D', type: 'text', value: `promove a oxidação do corante.` },
      { id: 'E', type: 'text', value: `transfere elétrons para o eletrodo de TiO₂ .` },
    ],
    correct: 'B',
    explanation: `Quando o corante absorve luz e injeta elétrons no TiO₂, ele fica oxidado (S⁺) e precisa ser restaurado para continuar absorvendo luz. A reação 3 é a doação de elétrons pelo mediador de carga (par I⁻/I₃⁻) ao corante oxidado, convertendo-o de volta a S, isto é, regenerando-o. Sem essa etapa o corante não se renovaria e a célula deixaria de funcionar. Portanto, a reação 3 é fundamental porque regenera o corante (alternativa B).`,
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
    explanation: `Uma célula com metabolismo de síntese elevado precisa de abundante maquinaria para produzir RNAs e proteínas, o que se reflete em nucléolo desenvolvido, muitos ribossomos, retículo endoplasmático rugoso extenso e complexo de Golgi proeminente. Dentre as linhagens esquematizadas, deve-se escolher aquela com essas estruturas mais desenvolvidas, representada pela linhagem IV. Portanto, a linhagem a ser escolhida é a IV (alternativa D).`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 118,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Alguns materiais sólidos são compostos por átomos que
interagem entre si formando ligações que podem ser covalentes,
iônicas ou metálicas. A figura apresenta a energia potencial
de ligação em função da distância interatômica em um sólido
cristalino. Analisando essa figura, observa-se que, na
temperatura de zero kelvin, a distância de equilíbrio da
ligação entre os átomos ( R 0 ) corresponde ao valor mínimo de
energia potencial. Acima dessa temperatura, a energia térmica
fornecida aos átomos aumenta sua energia cinética e faz com
que eles oscilem em torno de uma posição de equilíbrio média
(círculos cheios), que é diferente para cada temperatura. A
distância de ligação pode variar sobre toda a extensão das
linhas horizontais, identificadas com o valor da temperatura,
de T 1 a T 4 (temperaturas crescentes). Energia de ligação
Distância interatômica R 0 0 T T T T 4 3 2 1 T = 0 K O
deslocamento observado na distância média revela o fenômeno da`,
    images: ['/enem/2018/images/enem_2018_d2_q118.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `ionização.` },
      { id: 'B', type: 'text', value: `dilatação.` },
      { id: 'C', type: 'text', value: `dissociação.` },
      { id: 'D', type: 'text', value: `quebra de ligações covalentes.` },
      { id: 'E', type: 'text', value: `formação de ligações metálicas.` },
    ],
    correct: 'B',
    explanation: `A curva de energia potencial em função da distância interatômica é assimétrica, mais inclinada no lado das pequenas distâncias e mais suave no das grandes. Ao aumentar a temperatura, os átomos oscilam com maior amplitude, e o ponto médio dessas oscilações (centro de cada linha horizontal) desloca-se para distâncias maiores. Esse aumento da distância média de ligação com a temperatura é justamente a dilatação térmica. Portanto, o fenômeno observado é a dilatação (alternativa B).`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
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
    explanation: `Produtos botânicos que combatem insetos auxiliam no controle de doenças transmitidas por vetores insetos. Entre as opções, a leishmaniose é transmitida pela picada do mosquito-palha (flebotomíneo), um inseto; já a esquistossomose depende de caramujos, a leptospirose de roedores, e hanseníase e aids não têm inseto como vetor. Portanto, o uso desses produtos auxilia no controle da leishmaniose (alternativa C).`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 120,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Nos manuais de instalação de equipamentos de som há o alerta
aos usuários para que observem a correta polaridade dos fios
ao realizarem as conexões das caixas de som. As figuras
ilustram o esquema de conexão das caixas de som de um
equipamento de som mono, no qual os alto-falantes emitem as
mesmas ondas. No primeiro caso, a ligação obedece às
especificações do fabricante e no segundo mostra uma ligação
na qual a polaridade está invertida. Polaridade correta Saídas
do equipamento de som D E E D Caixa de som Caixa de som
Polaridade invertida Saídas do equipamento de som D E E D
Caixa de som Caixa de som O que ocorre com os alto-falantes E
e D se forem conectados de acordo com o segundo esquema?`,
    images: ['/enem/2018/images/enem_2018_d2_q120.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `O alto-falante E funciona normalmente e o D entra em curto-circuito e não emite som.` },
      { id: 'B', type: 'text', value: `O alto-falante E emite ondas sonoras com frequências ligeiramente diferentes do alto-falante D provocando o fenômeno de batimento.` },
      { id: 'C', type: 'text', value: `O alto-falante E emite ondas sonoras com frequências e fases diferentes do alto-falante D provocando o fenômeno conhecido como ruído.` },
      { id: 'D', type: 'text', value: `O alto-falante E emite ondas sonoras que apresentam um lapso de tempo em relação às emitidas pelo alto-falante D provocando o fenômeno de reverberação.` },
      { id: 'E', type: 'text', value: `O alto-falante E emite ondas sonoras em oposição de fase às emitidas pelo alto-falante D provocando o fenômeno de interferência destrutiva nos pontos equidistantes aos alto-falantes.` },

    ],
    correct: 'E',
    explanation: `Com a polaridade de um dos alto-falantes invertida, ele passa a empurrar o ar quando o outro puxa, ou seja, emite ondas em oposição de fase (defasagem de meio comprimento de onda) em relação ao outro. Como ambos reproduzem o mesmo sinal, nos pontos equidistantes das caixas as ondas se encontram em fases opostas e se cancelam, caracterizando interferência destrutiva, e o som fica enfraquecido. Portanto, o alto-falante E emite ondas em oposição de fase às do D, provocando interferência destrutiva nos pontos equidistantes (alternativa E).`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
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
utilizando calcário (CaCO₃ ). 
BRADY, N. C.; WEIL, R. R. Elementos da natureza e propriedades dos solos . 
Porto Alegre: Bookman, 2013 (adaptado). 
Essa remediação promove no solo o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `diminuição do pH, deixando-o fértil.` },
      { id: 'B', type: 'text', value: `solubilização do alumínio, ocorrendo sua lixiviação pela chuva.` },
      { id: 'C', type: 'text', value: `interação do íon cálcio com o íon alumínio, produzindo uma liga metálica.` },
      { id: 'D', type: 'text', value: `reação do carbonato de cálcio com os íons alumínio, formando alumínio metálico.` },
      { id: 'E', type: 'text', value: `aumento da sua alcalinidade, tornando os íons alumínio menos disponíveis.` },
    ],
    correct: 'E',
    explanation: `O calcário (CaCO₃) tem caráter básico e, ao ser adicionado ao solo ácido, neutraliza a acidez e aumenta a alcalinidade (eleva o pH). Em pH mais alto, os íons de alumínio precipitam como hidróxido de alumínio, tornando-se menos solúveis e menos disponíveis para danificar as raízes e os microrganismos. Assim, reduz-se a toxicidade do alumínio. Portanto, a remediação promove o aumento da alcalinidade, tornando os íons alumínio menos disponíveis (alternativa E).`,
    subject: ['qui'],
    topics: ['Química Ambiental', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `Elevar a posição do centro de massa do veículo tornando-o mais instável e aumentar a velocidade do automóvel em relação à indicada no velocímetro.` },
      { id: 'B', type: 'text', value: `Abaixar a posição do centro de massa do veículo tornando-o mais instável e diminuir a velocidade do automóvel em relação à indicada no velocímetro.` },
      { id: 'C', type: 'text', value: `Elevar a posição do centro de massa do veículo tornando-o mais estável e aumentar a velocidade do automóvel em relação à indicada no velocímetro.` },
      { id: 'D', type: 'text', value: `Abaixar a posição do centro de massa do veículo tornando-o mais estável e diminuir a velocidade do automóvel em relação à indicada no velocímetro.` },
      { id: 'E', type: 'text', value: `Elevar a posição do centro de massa do veículo tornando-o mais estável e diminuir a velocidade do automóvel em relação à indicada no velocímetro.` },
    ],
    correct: 'A',
    explanation: `Pneus de maior diâmetro elevam a carroceria e, com ela, o centro de massa do veículo; quanto mais alto o centro de massa, menor a estabilidade, tornando o carro mais instável. Além disso, o velocímetro é calibrado para o aro original e conta as rotações da roda; com roda maior, a cada volta o carro percorre mais distância, de modo que a velocidade real fica maior do que a indicada. Portanto, a troca eleva o centro de massa (deixando o veículo mais instável) e aumenta a velocidade real em relação à indicada no velocímetro (alternativa A).`,
    subject: ['fis'],
    topics: ['Dinâmica', 'Questões aleatórias'],
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
    explanation: `Os combustíveis do ciclo do carbono (compostos orgânicos) são formados na fotossíntese, em que a energia da luz solar é captada e armazenada em ligações químicas. A luz é uma forma de energia eletromagnética, e os compostos orgânicos resultantes guardam energia química. Logo, a formação desses combustíveis corresponde à conversão de energia eletromagnética em química. Portanto, a resposta é eletromagnética em química (alternativa E).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 124,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O petróleo é uma fonte de energia de baixo custo e de larga
utilização como matéria-prima para uma grande variedade de
produtos. É um óleo formado de várias substâncias de origem
orgânica, em sua maioria hidrocarbonetos de diferentes massas
molares. São utilizadas técnicas de separação para obtenção
dos componentes comercializáveis do petróleo. Além disso, para
aumentar a quantidade de frações comercializáveis, otimizando
o produto de origem fóssil, utiliza-se o processo de
craqueamento. O que ocorre nesse processo?`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `Transformação das frações do petróleo em outras moléculas menores.` },
      { id: 'B', type: 'text', value: `Reação de óxido-redução com transferência de elétrons entre as moléculas.` },
      { id: 'C', type: 'text', value: `Solubilização das frações do petróleo com a utilização de diferentes solventes.` },
      { id: 'D', type: 'text', value: `Decantação das moléculas com diferentes massas molares pelo uso de centrífugas.` },
      { id: 'E', type: 'text', value: `Separação dos diferentes componentes do petróleo em função de suas temperaturas de ebulição.` },
    ],
    correct: 'A',
    explanation: `O craqueamento (cracking) consiste em quebrar moléculas grandes e de pouca saída comercial, presentes em frações pesadas do petróleo, transformando-as em moléculas menores, como as da gasolina. O processo não envolve óxido-redução, solubilização, decantação por centrífuga nem simples destilação por temperatura de ebulição. Portanto, no craqueamento ocorre a transformação das frações do petróleo em outras moléculas menores (alternativa A).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 125,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A figura representa um prisma óptico, constituído de um
material transparente, cujo índice de refração e crescente com
a frequência da luz que sobre ele incide. Um feixe luminoso,
composto por luzes vermelha, azul e verde, incide na face A,
emerge na face B e, após ser refletido por um espelho, incide
num filme para fotografia colorida, revelando tres pontos.
Amarelo Laranja Violeta Verde Azul 400 450 500 550 600 650 700
750 (nm) Face A Face B Feixe incidente Prisma Observando os
pontos luminosos revelados no filme, de baixo para cima,
constatam-se as seguintes cores:`,
    images: ['/enem/2018/images/enem_2018_d2_q125.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Vermelha, verde, azul.` },
      { id: 'B', type: 'text', value: `Verde, vermelha, azul.` },
      { id: 'C', type: 'text', value: `Azul, verde, vermelha.` },
      { id: 'D', type: 'text', value: `Verde, azul, vermelha.` },
      { id: 'E', type: 'text', value: `Azul, vermelha, verde.` },
    ],
    correct: 'A',
    explanation: `O índice de refração do prisma cresce com a frequência da luz, de modo que a luz azul (maior frequência) desvia-se mais e a vermelha (menor frequência) desvia-se menos, ficando a verde em posição intermediária. Após atravessar o prisma e ser refletida pelo espelho, os feixes atingem o filme separados segundo esse grau de desvio. Lendo os pontos de baixo para cima, obtêm-se as cores na ordem vermelha, verde e azul. Portanto, a resposta é vermelha, verde, azul (alternativa A).`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
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
PENTEADO, J. C. et al. Química Nova, 2006 (adaptado).
A fórmula estrutural do tensoativo persistente no meio ambiente, citado no texto, é`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2018/images/enem_2018_d2_q126_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2018/images/enem_2018_d2_q126_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2018/images/enem_2018_d2_q126_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2018/images/enem_2018_d2_q126_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2018/images/enem_2018_d2_q126_E.jpg` },
    ],
    correct: 'B',
    explanation: `O texto trata do tensoativo persistente (não biodegradável), que tem cadeia hidrofóbica RAMIFICADA, com diversos carbonos terciários que dificultam a degradação pelos microrganismos; os tensoativos biodegradáveis, ao contrário, têm cadeia alquílica linear. A estrutura procurada é, portanto, a que apresenta a cadeia carbônica ramificada (com carbonos terciários) ligada à porção hidrofílica. Essa estrutura ramificada é a representada na alternativa B. Portanto, a resposta é a alternativa B.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
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
    explanation: `Como foi excluída a autopolinização, a semente S1 recebeu um alelo de cada loco da matriz M e o outro alelo do pólen de uma das doadoras. Subtraindo do genótipo de S1 os alelos herdados de M nos locos A e B, o alelo restante de cada loco deve coincidir com os presentes na doadora. A única árvore que possui exatamente esses alelos complementares nos dois locos é a DP5. Portanto, a progênie S1 recebeu o pólen da doadora DP5 (alternativa E).`,
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
    explanation: `No carro A a ventoinha sopra ar contra a própria vela; parte do ar é redirecionada pela cartolina parabólica, de modo que não há cancelamento total e resulta uma pequena força efetiva para a frente, fazendo o carro se mover, porém pouco. No carro B a ventoinha sopra o ar diretamente para trás e, por ação e reação, o carro recebe o empuxo máximo para a frente. Logo, os dois se movem no mesmo sentido, mas com 0 < VA < VB. Portanto, 0 < VA < VB e o carro A se move para a direita (alternativa B).`,
    subject: ['fis'],
    topics: ['Leis de Newton', 'Questões aleatórias'],
  },
  {
    id: 129,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Muitos primatas, incluindo nós humanos, possuem visão
tricromática: têm três pigmentos visuais na retina sensíveis à
luz de uma determinada faixa de comprimentos de onda.
Informalmente, embora os pigmentos em si não possuam cor,
estes são conhecidos como pigmentos “azul”, “verde” e
“vermelho” e estão associados à cor que causa grande excitação
(ativação). A sensação que temos ao observar um objeto
colorido decorre da ativação relativa dos três pigmentos. Ou
seja, se estimulássemos a retina com uma luz na faixa de 530
nm (retângulo I no gráfico), não excitaríamos o pigmento
“azul”, o pigmento “verde” seria ativado ao máximo e o
“vermelho” seria ativado em aproximadamente 75%, e isso nos
daria a sensação de ver uma cor amarelada. Já uma luz na faixa
de comprimento de onda de 600 nm (retângulo II) estimularia o
pigmento “verde” um pouco e o “vermelho” em cerca de 75%, e
isso nos daria a sensação de ver laranja-avermelhado. No
entanto, há características genéticas presentes em alguns
indivíduos, conhecidas coletivamente como Daltonismo, em que
um ou mais pigmentos não funcionam perfeitamente. I II “azul”
“verde” “vermelho” 100 Ativação (%) 50 verde roxo amarelo
laranja vermelho 400 450 500 550 600 650 azul Comprimento de
onda (nm) Disponível em: www.comprehensivephysiology.com.
Acesso em: 3 ago. 2012 (adaptado). Caso estimulássemos a
retina de um indivíduo com essa característica, que não
possuísse o pigmento conhecido como “verde”, com as luzes de
530 nm e 600 nm na mesma intensidade luminosa, esse indivíduo
seria incapaz de`,
    images: ['/enem/2018/images/enem_2018_d2_q129.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `identificar o comprimento de onda do amarelo, uma vez que não possui o pigmento “verde”.` },
      { id: 'B', type: 'text', value: `ver o estímulo de comprimento de onda laranja, pois não haveria estimulação de um pigmento visual.` },
      { id: 'C', type: 'text', value: `detectar ambos os comprimentos de onda, uma vez que a estimulação dos pigmentos estaria prejudicada.` },
      { id: 'D', type: 'text', value: `visualizar o estímulo do comprimento de onda roxo, já que este se encontra na outra ponta do espectro.` },
      { id: 'E', type: 'text', value: `distinguir os dois comprimentos de onda, pois ambos estimulam o pigmento “vermelho” na mesma intensidade.` },
    ],
    correct: 'E',
    explanation: `Segundo o gráfico, tanto a luz de 530 nm quanto a de 600 nm ativam o pigmento "vermelho" em cerca de 75%. Num indivíduo sem o pigmento "verde", a distinção entre essas duas luzes dependeria da ativação diferencial do verde, que agora não existe, e o "azul" não é estimulado por nenhuma delas. Como ambas passam a estimular o "vermelho" na mesma intensidade, produzem a mesma resposta, impossibilitando diferenciá-las. Portanto, esse indivíduo seria incapaz de distinguir os dois comprimentos de onda, pois ambos estimulam o pigmento "vermelho" na mesma intensidade (alternativa E).`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
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
    images: ['/enem/2018/images/enem_2018_d2_q130_1.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `sp de geometria linear.` },
      { id: 'B', type: 'text', value: `sp 2 de geometria trigonal planar.` },
      { id: 'C', type: 'text', value: `sp 3 alternados com carbonos com hibridação sp de geometria linear.` },
      { id: 'D', type: 'text', value: `sp 3 d de geometria planar.` },
      { id: 'E', type: 'text', value: `sp 3 d 2 com geometria hexagonal planar.` },
    ],
    correct: 'B',
    explanation: `No grafeno, cada átomo de carbono liga-se a outros três átomos de carbono no mesmo plano, formando a rede hexagonal. Três ligações sigma coplanares correspondem à hibridação sp², cuja geometria é trigonal planar, com ângulos de 120°, sobrando um elétron em orbital p para o sistema de ligações pi deslocalizadas. Portanto, os átomos de carbono têm hibridação sp² de geometria trigonal planar (alternativa B).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `manter a mesma mola e aumentar duas vezes a sua deformação.` },
      { id: 'B', type: 'text', value: `manter a mesma mola e aumentar quatro vezes a sua deformação.` },
      { id: 'C', type: 'text', value: `manter a mesma mola e aumentar dezesseis vezes a sua deformação.` },
      { id: 'D', type: 'text', value: `trocar a mola por outra de constante elástica duas vezes maior e manter a deformação.` },
      { id: 'E', type: 'text', value: `trocar a mola por outra de constante elástica quatro vezes maior e manter a deformação.` },
    ],
    correct: 'B',
    explanation: `Pela conservação da energia, a energia potencial elástica da mola converte-se em energia cinética do cubo: ½ k x² = ½ m v², o que leva a v = x·√(k/m). Mantendo a mesma mola e a mesma massa, a velocidade é diretamente proporcional à deformação x. Logo, para que v aumente quatro vezes, basta aumentar quatro vezes a deformação da mola. Portanto, deve-se manter a mesma mola e aumentar quatro vezes a sua deformação (alternativa B).`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias'],
  },
  {
    id: 132,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `As abelhas utilizam a sinalização química para distinguir a
abelha-rainha de uma operária, sendo capazes de reconhecer
diferenças entre moléculas. A rainha produz o sinalizador
químico conhecido como ácido 9-hidroxidec-2-enoico, enquanto
as abelhas- -operárias produzem ácido 10-hidroxidec-2-enoico.
Nós podemos distinguir as abelhas-operárias e rainhas por sua
aparência, mas, entre si, elas usam essa sinalização química
para perceber a diferença. Pode-se dizer que veem por meio da
química. LE COUTEUR, P.; BURRESON, J. Os botões de Napoleão :
as 17 moléculas que mudaram a história. Rio de Janeiro: Jorge
Zahar, 2006 (adaptado). As moléculas dos sinalizadores
químicos produzidas pelas abelhas rainha e operária possuem
diferença na`,
    alternatives: [
      { id: 'A', type: 'text', value: `fórmula estrutural.` },
      { id: 'B', type: 'text', value: `fórmula molecular.` },
      { id: 'C', type: 'text', value: `identificação dos tipos de ligação.` },
      { id: 'D', type: 'text', value: `contagem do número de carbonos.` },
      { id: 'E', type: 'text', value: `identificação dos grupos funcionais.` },
    ],
    correct: 'A',
    explanation: `Os dois sinalizadores são o ácido 9-hidroxidec-2-enoico e o ácido 10-hidroxidec-2-enoico, que diferem apenas na posição do grupo hidroxila (carbono 9 ou 10). Tendo o mesmo número de átomos de cada elemento, possuem a mesma fórmula molecular, mas, pela posição diferente do grupo OH, apresentam fórmulas estruturais distintas (isomeria de posição). É essa diferença estrutural que as abelhas reconhecem. Portanto, a diferença está na fórmula estrutural (alternativa A).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `proteção na fase de pupa, favorecendo a sobrevivência de adultos férteis.` },
      { id: 'B', type: 'text', value: `produção de muitos ovos, larvas e pupas, aumentando o número de adultos.` },
      { id: 'C', type: 'text', value: `exploração de diferentes nichos, evitando a competição entre as fases da vida.` },
      { id: 'D', type: 'text', value: `ingestão de alimentos em todas as fases de vida, garantindo o surgimento do adulto.` },
      { id: 'E', type: 'text', value: `utilização do mesmo alimento em todas as fases, otimizando a nutrição do organismo.` },
    ],
    correct: 'C',
    explanation: `Na holometabolia, larva, pupa e adulto têm morfologia e hábitos muito distintos, ocupando hábitats e explorando recursos (nichos) diferentes. Com isso, as fases imaturas não competem com os adultos por alimento e espaço, reduzindo a competição ao longo da vida. Essa divisão de nichos entre as fases favorece a sobrevivência e contribui para a grande diversidade de espécies desses insetos. Portanto, a resposta é a exploração de diferentes nichos, evitando a competição entre as fases da vida (alternativa C).`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `força necessária para a sucção do ar e do suco simultaneamente dobra de valor.` },
      { id: 'B', type: 'text', value: `densidade do ar é menor que a do suco, portanto, o volume de ar aspirado é muito maior que o volume de suco.` },
      { id: 'C', type: 'text', value: `velocidade com que o suco sobe deve ser constante nos dois canudos, o que é impossível com um dos canudos de fora.` },
      { id: 'D', type: 'text', value: `peso da coluna de suco é consideravelmente maior que o peso da coluna de ar, o que dificulta a sucção do líquido.` },
      { id: 'E', type: 'text', value: `pressão no interior da boca assume praticamente o mesmo valor daquela que atua sobre o suco.` },
    ],
    correct: 'E',
    explanation: `Para sugar o suco é preciso reduzir a pressão dentro da boca abaixo da pressão atmosférica que atua sobre o líquido, criando uma diferença de pressão que empurra o suco para cima. Com um canudo fora do líquido, ao sugar entra ar pela boca e a pressão em seu interior se iguala praticamente à pressão atmosférica. Sem diferença de pressão apreciável, o suco não é empurrado para cima. Portanto, a dificuldade ocorre porque a pressão no interior da boca assume praticamente o mesmo valor daquela que atua sobre o suco (alternativa E).`,
    subject: ['fis'],
    topics: ['Hidrostática', 'Questões aleatórias'],
  },
  {
    id: 135,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `O alemão Fritz Haber recebeu o Prêmio Nobel de 
química de 1918 pelo desenvolvimento de um processo 
viável para a síntese da amônia (NH₃ ). Em seu discurso 
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
      { id: 'B', type: 'text', value: `O aumento da exploração de carvão vegetal e carvão mineral.` },
      { id: 'C', type: 'text', value: `A redução da fertilidade do solo nas economias agrícolas.` },
      { id: 'D', type: 'text', value: `A intensificação no fluxo de pessoas do campo para as cidades.` },
      { id: 'E', type: 'text', value: `A necessidade das plantas de absorverem sais de nitrogênio disponíveis no solo.` },
    ],
    correct: 'D',
    explanation: `Segundo Haber, as economias agrícolas tradicionais mantinham o balanço do nitrogênio porque os resíduos retornavam ao solo. Com a era industrial, os alimentos passaram a ser levados do campo, onde são cultivados, para as cidades distantes, onde são consumidos, de modo que o nitrogênio ligado não retorna ao solo de origem. Esse deslocamento acompanha a intensificação do fluxo de pessoas do campo para as cidades, que concentra o consumo longe da produção. Portanto, o fenômeno que desequilibrou o balanço do nitrogênio ligado foi a intensificação no fluxo de pessoas do campo para as cidades (alternativa D).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
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
    explanation: `O elemento a_ij representa o valor transferido do banco i para o banco j, logo o total enviado por cada banco é a soma de sua linha. Linha 1: 0+2+0+2+2=6; linha 2: 0+0+2+1+0=3; linha 3: 1+2+0+1+1=5; linha 4: 0+2+2+0+0=4; linha 5: 3+0+1+1+0=5. A maior soma é 6 (banco 1). Resposta: A.`,
    subject: ['mat'],
    topics: ['Matrizes e determinantes', 'Questões aleatórias'],
  },
  {
    id: 137,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Um contrato de empréstimo prevê que quando uma parcela é paga
de forma antecipada, conceder-se-á uma redução de juros de
acordo com o período de antecipação. Nesse caso, paga-se o
valor presente, que é o valor, naquele momento, de uma quantia
que deveria ser paga em uma data futura. Um valor presente P
submetido a juros compostos com taxa i , por um período de
tempo n , produz um valor futuro V determinado pela fórmula V
P i n = ⋅ + 1 Em um contrato de empréstimo com sessenta
parcelas fixas mensais, de R$ 820,00, a uma taxa de juros de
1,32% ao mês, junto com a trigésima parcela será paga
antecipadamente uma outra parcela, desde que o desconto seja
superior a 25% do valor da parcela. Utilize 0,2877 como
aproximação para In 4 3 e 0,0131 como aproximação para In
(1,0132). A primeira das parcelas que poderá ser antecipada
junto com a 30 a é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `56ª` },
      { id: 'B', type: 'text', value: `55ª` },
      { id: 'C', type: 'text', value: `52ª` },
      { id: 'D', type: 'text', value: `51ª` },
      { id: 'E', type: 'text', value: `45ª` },
    ],
    correct: 'C',
    explanation: `A parcela de ordem k (k>30) vence k−30 meses após o mês 30; seu valor presente nesse instante é P=820/(1,0132)^(k−30). O desconto 820−P deve ser maior que 25% de 820 = 205, ou seja P<615: 820/(1,0132)^(k−30)<615 → (1,0132)^(k−30)>820/615=4/3. Aplicando ln: (k−30)·ln(1,0132)>ln(4/3) → (k−30)·0,0131>0,2877 → k−30>21,96 → k−30≥22 → k≥52. A primeira é a 52ª. Resposta: C.`,
    subject: ['mat'],
    topics: ['Matemática financeira', 'Questões aleatórias'],
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
pontos para serem eliminados: A(0 ; 4), B(4 ; 4), C(4 ; 0),
D(2 ; 2) e E(0 ; 2).
Passando pelo ponto A, qual equação forneceria a maior pontuação?`,
    images: ['/enem/2018/images/enem_2018_d2_q138.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `x = 0` },
      { id: 'B', type: 'text', value: `y = 0` },
      { id: 'C', type: 'text', value: `x² + y² = 16` },
      { id: 'D', type: 'text', value: `x² + (y − 2)² = 4` },
      { id: 'E', type: 'text', value: `(x − 2)² + (y − 2)² = 8` },
    ],
    correct: 'E',
    explanation: `A equação deve passar por A(0;4) e pela origem; cada ponto (≠origem) atingido vale 2 (circunferência) ou 1 (reta). A circunferência (x−2)²+(y−2)²=8 passa pela origem (4+4=8) e por A (4+4=8), B(4;4) (4+4=8) e C(4;0) (4+4=8): atinge 3 pontos, totalizando 3·2=6 (a maior pontuação). As demais opções atingem menos pontos. Resposta: E.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
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
    explanation: `O trajeto é formado por trechos radiais (sobre as semirretas) mais um arco. Como o comprimento do arco cresce com o raio, convém fazê-lo na menor circunferência possível (raio 1), já que não se pode passar pela origem. Todas as opções têm arco de 120° (quatro setores de π/6); a de menor comprimento usa raio 1: (2·π·1)/3 + 8. Resposta: A.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 140,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Um artesão possui potes cilíndricos de tinta cujas medidas
externas são 4 cm de diâmetro e 6 cm de altura. Ele pretende
adquirir caixas organizadoras para armazenar seus potes de
tinta, empilhados verticalmente com tampas voltadas para cima,
de forma que as caixas possam ser fechadas. No mercado,
existem cinco opções de caixas organizadoras, com tampa, em
formato de paralelepípedo reto retângulo, vendidas pelo mesmo
preço, possuindo as seguintes dimensões internas: Modelo
Comprimento (cm) Largura (cm) Altura (cm) I 8 8 40 II 8 20 14
III 18 5 35 IV 20 12 12 V 24 8 14 Qual desses modelos o
artesão deve adquirir para conseguir armazenar o maior número
de potes por caixa?`,
    images: ['/enem/2018/images/enem_2018_d2_q140.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I` },
      { id: 'B', type: 'text', value: `II` },
      { id: 'C', type: 'text', value: `III` },
      { id: 'D', type: 'text', value: `IV` },
      { id: 'E', type: 'text', value: `V` },
    ],
    correct: 'D',
    explanation: `Cada pote ocupa base 4×4 cm (diâmetro 4) e altura 6 cm, empilhado em pé. Por caixa cabem floor(C/4)·floor(L/4) colunas, com floor(H/6) potes por coluna. I: 2·2·6=24; II: 2·5·2=20; III: 4·1·5=20; IV: 5·3·2=30; V: 6·2·2=24. O maior número é 30 (modelo IV). Resposta: D.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
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
    explanation: `As distâncias formam uma PA: 80, 100, 120, …, 1380, de razão 20. Número de postes: n=(1380−80)/20+1=65+1=66. Custo máximo = 66·8000 = R$ 528 000,00. Resposta: C.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Questões aleatórias'],
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
    explanation: `F=k·m/r²: F cresce com a massa m e decresce com o quadrado do raio r. No gráfico, A e B têm o mesmo raio e m_B>m_A, logo F_B>F_A; A e C têm a mesma massa e r_C>r_A, logo F_C<F_A. Portanto F_C<F_A<F_B. Resposta: E.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
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
    explanation: `10 g de prata 925 contêm 9,25 g de prata e 0,75 g de cobre. Deseja-se 40 g de prata 950: 38 g de prata e 2 g de cobre. Acrescentando x g de prata pura e y g de cobre: 9,25+x=38 → x=28,75; 0,75+y=2 → y=1,25. Resposta: B.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 144,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Em um aeroporto, os passageiros devem submeter suas bagagens a
uma das cinco máquinas de raio-X disponíveis ao adentrarem a
sala de embarque. Num dado instante, o tempo gasto por essas
máquinas para escanear a bagagem de cada passageiro é o número
de pessoas presentes em cada fila estão apresentados em um
painel, como mostrado na figura. Máquina 5 Máquina 4 Máquina 3
Máquina 2 Máquina 1 35 segundos 5 pessoas 25 segundos 6
pessoas 22 segundos 7 pessoas 40 segundos 4 pessoas 20
segundos 8 pessoas Um passageiro, ao chegar à sala de embarque
desse aeroporto no instante indicado, visando esperar o menor
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
    explanation: `O tempo de espera é o número de pessoas na fila vezes o tempo por bagagem: M1=5·35=175 s; M2=6·25=150 s; M3=7·22=154 s; M4=4·40=160 s; M5=8·20=160 s. O menor é 150 s (máquina 2). Resposta: B.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 145,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A Comissão Interna de Prevenção de Acidentes (CIPA) de uma
empresa, observando os altos custos com os frequentes
acidentes de trabalho ocorridos, fez, a pedido da diretoria,
uma pesquisa do número de acidentes sofridos por funcionários.
Essa pesquisa, realizada com uma amostra de 100 funcionários,
norteará as ações da empresa na política de segurança no
trabalho. Os resultados obtidos estão no quadro. Número de
acidentes sofridos Número de trabalhadores 0 50 1 17 2 15 3 10
4 6 5 2 A média do número de acidentes por funcionário na
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
    explanation: `Média = (0·50 + 1·17 + 2·15 + 3·10 + 4·6 + 5·2)/100 = (0+17+30+30+24+10)/100 = 111/100 = 1,11. Resposta: D.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `d_Gama < d_Beta < d_Alpha` },
      { id: 'B', type: 'text', value: `d_Alpha = d_Beta < d_Gama` },
      { id: 'C', type: 'text', value: `d_Gama < d_Beta = d_Alpha` },
      { id: 'D', type: 'text', value: `d_Beta < d_Alpha < d_Gama` },
      { id: 'E', type: 'text', value: `d_Gama < d_Alpha < d_Beta` },
    ],
    correct: 'A',
    explanation: `d=v·t, com 90 min=1,5 h e 60 min=1 h. d_Alpha=6,0·1,5=9,0 km; d_Beta=5,0·1,5=7,5 km; d_Gama=6,5·1,0=6,5 km. Ordem: d_Gama<d_Beta<d_Alpha. Resposta: A.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
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
    explanation: `LDL inicial 280. Após redução de 25%: 280·0,75=210. Após nova redução de 20%: 210·0,80=168. O valor 168 está na faixa de 160 a 189 = alta. Resposta: D.`,
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
    explanation: `Rádio: 1500 pessoas por R$120 → 1500/120=12,5 pessoas por real, alcance = 12,5·X = 50X/4. Panfletos: 1000 pessoas por R$180 → 1000/180=50/9 pessoas por real, alcance = (50/9)·Y = 50Y/9. Total = 50X/4 + 50Y/9. Resposta: A.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 149,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A inclinação de uma rampa é calculada da seguinte maneira:
para cada metro medido na horizontal, mede-se x centímetros na
vertical. Diz-se, nesse caso, que a rampa tem inclinação de x
%, como no exemplo da figura: 20 cm 1 m A figura apresenta um
projeto de uma rampa de acesso a uma garagem residencial cuja
base, situada 2 metros abaixo do nível da rua, tem 8 metros de
comprimento. Portão Nível da rua Garagem 2 m Rampa Nível da
base da garagem 8 m Depois de projetada a rampa, o responsável
pela obra foi informado de que as normas técnicas do município
onde ela está localizada exigem que a inclinação máxima de uma
rampa de acesso a uma garagem residencial seja de 20%. Se a
rampa projetada tiver inclinação superior a 20%, o nível da
garagem devera ser alterado para diminuir o percentual de
inclinação, mantendo o comprimento da base da rampa. Para
atender às normas técnicas do município, o nível da garagem
devera ser`,
    images: ['/enem/2018/images/enem_2018_d2_q149_1.jpg', '/enem/2018/images/enem_2018_d2_q149_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `elevado em 40 cm.` },
      { id: 'B', type: 'text', value: `elevado em 50 cm.` },
      { id: 'C', type: 'text', value: `mantido no mesmo nível.` },
      { id: 'D', type: 'text', value: `rebaixado em 40 cm.` },
      { id: 'E', type: 'text', value: `rebaixado em 50 cm.` },
    ],
    correct: 'A',
    explanation: `Inclinação projetada = desnível/base = 200 cm/8 m = 25 cm por metro = 25% (>20%). Para 20% com a mesma base de 8 m, o desnível máximo é 0,20·8 m = 1,6 m. Como o desnível é 2 m, a garagem deve ser elevada em 2−1,6 = 0,4 m = 40 cm. Resposta: A.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Porcentagem', 'Questões aleatórias'],
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
    explanation: `P(2 pretas sem reposição): Opção 1 (A: 3B,2P,1V): (2/6)(1/5)=1/15. Opção 2 (B: 6B,3P,1V): (3/10)(2/9)=1/15. Opção 3 (passa 1 de C para A): preta(1/2)→(3/7)(2/6)=1/7; verde(1/2)→(2/7)(1/6)=1/21; total=2/21≈0,095. Opção 4 (passa 1 de D para C): preta(1/2)→(3/5)(2/4)=3/10; branca(1/2)→(2/5)(1/4)=1/10; total=1/5=0,20. Opção 5 (passa 1 de C para D): preta(1/2)→(4/7)(3/6)=2/7; verde(1/2)→(3/7)(2/6)=1/7; total=3/14≈0,214. A maior é a opção 5. Resposta: E.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 151,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A Ecofont possui design baseado na velha fonte Vera Sans.
Porém, ela tem um diferencial: pequenos buraquinhos circulares
congruentes, e em todo o seu corpo, presentes em cada símbolo.
Esses furos proporcionam um gasto de tinta menor na hora da
impressão. Disponível em: www.goo.gl. Acesso em: 2 dez. 2017
(adaptado). Suponha que a palavra ECO esteja escrita nessa
fonte, com tamanho 192, e que seja composta por letras
formadas por quadrados de lados x com furos circulares de raio
x 3 r = . Para que a área a ser pintada seja reduzida a 1 16
da área inicial, pretende-se reduzir o tamanho da fonte.
Sabe-se que, ao alterar o tamanho da fonte, o tamanho da letra
é alterado na mesma proporção. Nessas condições, o tamanho
adequado da fonte será`,
    images: ['/enem/2018/images/enem_2018_d2_q151.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `64.` },
      { id: 'B', type: 'text', value: `48.` },
      { id: 'C', type: 'text', value: `24.` },
      { id: 'D', type: 'text', value: `21.` },
      { id: 'E', type: 'text', value: `12.` },
    ],
    correct: 'B',
    explanation: `A área pintada (quadrados de lado x com furos de raio x/3) é proporcional ao quadrado do tamanho. Para reduzi-la a 1/16, o fator linear deve ser √(1/16)=1/4. Novo tamanho = 192·(1/4) = 48. Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 152,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: ``,
    images: ['/enem/2018/images/enem_2018_d2_q152.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0 ≤ x ≤ y ≤ 10` },
      { id: 'B', type: 'text', value: `0 ≤ y ≤ x ≤ 10` },
      { id: 'C', type: 'text', value: `0 ≤ x ≤ 10, 0 ≤ y ≤ 10` },
      { id: 'D', type: 'text', value: `0 ≤ x + y ≤ 10` },
      { id: 'E', type: 'text', value: `0 ≤ x + y ≤ 20` },
    ],
    correct: 'B',
    explanation: `O triângulo tem vértices (0;0), (10;0) e (10;10): é limitado por x≤10, y≥0 e pela reta y=x (pontos abaixo dela, y≤x). Assim 0≤y≤x≤10. Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Equações e inequações', 'Questões aleatórias'],
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
    explanation: `A área do passeio (coroa circular) é π(R²−r²). A corda AB=16 m é tangente ao chafariz (raio r), então a meia-corda vale 8 e, por Pitágoras, R²=r²+8², ou seja R²−r²=64. Área = 64π m². Resposta: D.`,
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
    explanation: `A zona de combate tem 2(n−1) casas e a 2ª peça ocupa uma das n²−1 casas restantes: P=2(n−1)/(n²−1)=2/(n+1). Exigir P<1/5 dá n+1>10, isto é n>9, logo n≥10. Dimensão mínima 10×10. Resposta: D.`,
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
    explanation: `Os dois remos (lados AB e AC) têm o mesmo tamanho, logo AB=AC e o triângulo é isósceles. O ângulo em A mede 170° (>90°), portanto obtusângulo. É um triângulo obtusângulo isósceles. Resposta: E.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `4/21` },
      { id: 'B', type: 'text', value: `5/21` },
      { id: 'C', type: 'text', value: `6/21` },
      { id: 'D', type: 'text', value: `7/21` },
      { id: 'E', type: 'text', value: `8/21` },
    ],
    correct: 'D',
    explanation: `São 21 dados; a moda é 6h21 e a mediana (11º valor) é 6h22, logo no máximo 10 valores são menores que 6h22. Para maximizar os dias com horário anterior a 6h21 mantendo 6h21 como moda (que deve superar cada outro valor), distribuem-se esses horários entre 6h15 e 6h20; o máximo possível é 7 dias (ex.: 2,2,1,1,1, com 6h21 aparecendo 3 vezes). Probabilidade máxima = 7/21. Resposta: D.`,
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
    explanation: `Escala 1:58 000 000. Distância real = 7,6 cm × 58 000 000 = 440 800 000 cm = 4 408 000 m = 4 408 km. Resposta: A.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
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
    explanation: `Seja p a produtividade menor; a maior é 2,5p. Produção total = 40·2,5p + 120·p = 100p + 120p = 220p. Aumento de 15% = 220p·0,15 = 33p. A área A comprada tem produtividade p: A·p = 33p → A = 33 ha. Resposta: B.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 159,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Minecraft é um jogo virtual que pode auxiliar no
desenvolvimento de conhecimentos relacionados a espaço e
forma. É possível criar casas, edifícios, monumentos e até
naves espaciais, tudo em escala real, através do empilhamento
de cubinhos. Um jogador deseja construir um cubo com dimensões
4 × 4 × 4. Ele ja empilhou alguns dos cubinhos necessários,
conforme a figura. + + + Os cubinhos que ainda faltam empilhar
para finalizar a construção do cubo, juntos, formam uma peca
única, capaz de completar a tarefa. O formato da peça capaz de
completar o cubo 4 × 4 × 4 é`,
    images: ['/enem/2018/images/enem_2018_d2_q159.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2018/images/enem_2018_d2_q159_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2018/images/enem_2018_d2_q159_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2018/images/enem_2018_d2_q159_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2018/images/enem_2018_d2_q159_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2018/images/enem_2018_d2_q159_E.jpg` },
    ],
    correct: 'A',
    explanation: `O cubo 4×4×4 tem 64 cubinhos. A figura mostra a construção parcial, com degraus. Os cubinhos que faltam, encaixados, reproduzem exatamente o sólido do formato A, que completa o cubo. Resposta: A.`,
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
    explanation: `No pictograma cada ícone vale k carros: 2014 tem 1 ícone, 2015 tem 2 e 2016 tem 5. Como 2016 superou 2015 em 360: 5k−2k=3k=360 → k=120. Vendas: 120, 240 e 600. Média = (120+240+600)/3 = 960/3 = 320. Resposta: D.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
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
    explanation: `O lugar dos pontos com PA=2·PB (focos a 30 m) é a circunferência de Apolônio. Com B=(0;0) e A=(30;0): √((x−30)²+y²)=2√(x²+y²) leva a (x+10)²+y²=400, de raio 20. A maior distância entre dois bombeiros é o diâmetro = 2·20 = 40 m. Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
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
      { id: 'A', type: 'text', value: `2 × 128` },
      { id: 'B', type: 'text', value: `64 + 32 + 16 + 8 + 4 + 2` },
      { id: 'C', type: 'text', value: `128 + 64 + 32 + 16 + 8 + 4 + 2 + 1` },
      { id: 'D', type: 'text', value: `128 + 64 + 32 + 16 + 8 + 4 + 2` },
      { id: 'E', type: 'text', value: `64 + 32 + 16 + 8 + 4 + 2 + 1` },
    ],
    correct: 'E',
    explanation: `Em eliminatória simples cada partida elimina um competidor; para restar um campeão entre 128, eliminam-se 127, logo são 127 partidas. Por rodadas (PG): 64+32+16+8+4+2+1 = 127. Resposta: E.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Questões aleatórias'],
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
    explanation: `Pela lei, a pena de 5 a 15 anos pode ser reduzida de 1/6 a 2/3. Mínimo: 5·(1−2/3)=5/3 ano = 1 ano e 8 meses. Máximo: 15·(1−1/6)=15·5/6=12,5 anos = 12 anos e 6 meses. Isso levaria ao intervalo de 1 ano e 8 meses a 12 anos e 6 meses (letra A). A questão foi ANULADA oficialmente: combinar os extremos (redução máxima sobre a pena mínima e redução mínima sobre a pena máxima) admite mais de uma interpretação, não havendo gabarito único. Resposta: anulada.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
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
    explanation: `Seja E o andar de entrada. Os deslocamentos dão: E+7−10−13+9−4 = 5 → E−11 = 5 → E = 16. As paradas ocorrem em 16, 23, 13, 0 (térreo), 9 e 5. O maior andar atingido (onde o elevador parou uma vez) é 23, que é o último andar. Resposta: C.`,
    subject: ['mat'],
    topics: ['Equações e inequações', 'Questões aleatórias'],
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
    explanation: `Cada um dos 2 estandes recebe 1 compacto e 1 caminhonete. Escolhem-se e distribuem-se 2 compactos (de 4) e 2 caminhonetes (de 6) entre os dois estandes: C(4,2)·2 · C(6,2)·2 = C(4,2)·C(6,2)·2·2 = 6·15·2·2 = 360. Resposta: C.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
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
    explanation: `Média ponderada ≥ 60: 0,20·46 + 0,10·60 + 0,30·50 + 0,40·x ≥ 60 → 9,2 + 6 + 15 + 0,4x ≥ 60 → 0,4x ≥ 29,8 → x ≥ 74,5. Resposta: C.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Porcentagem', 'Questões aleatórias'],
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
    explanation: `Das 20 perguntas, 25% são fáceis = 5. Acrescentando n fáceis, a probabilidade deve ser 75%: (5+n)/(20+n)=0,75 → 5+n = 15 + 0,75n → 0,25n = 10 → n = 40. Resposta: D.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 168,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `A raiva é uma doença viral e infecciosa, transmitida por
mamíferos. A campanha nacional de vacinação antirrábica tem o
objetivo de controlar a circulação do vírus da raiva canina e
felina, prevenindo a raiva humana. O gráfico mostra a
cobertura (porcentagem de vacinados) da campanha, em cães, nos
anos de 2013, 2015 e 2017, no município de Belo Horizonte, em
Minas Gerais. Os valores das coberturas dos anos de 2014 e
2016 não estão informados no gráfico e deseja-se estimá-los.
Para tal, levou-se em consideração que a variação na cobertura
de vacinação da campanha antirrábica, nos períodos de 2013 a
2015 e de 2015 a 2017, deu-se de forma linear. 67% 59% 61%
2013 2014 2015 2016 2017 Disponível em:
http://pni.datasus.gov.br. Acesso em: 5 nov. 2017. Qual teria
sido a cobertura dessa campanha no ano de 2014?`,
    images: ['/enem/2018/images/enem_2018_d2_q168.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `62,3%` },
      { id: 'B', type: 'text', value: `63,0%` },
      { id: 'C', type: 'text', value: `63,5%` },
      { id: 'D', type: 'text', value: `64,0%` },
      { id: 'E', type: 'text', value: `65,5%` },
    ],
    correct: 'B',
    explanation: `Como a variação entre 2013 (67%) e 2015 (59%) é linear, 2014 é o ponto médio: (67+59)/2 = 63%. Resposta: B.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Funções', 'Questões aleatórias'],
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
    explanation: `Escala 1:X. Guindaste 15 m = 1500 cm, desenho entre 0,5 e 1 cm: 0,5 ≤ 1500/X ≤ 1 → 1500 ≤ X ≤ 3000. Esteira 90 m = 9000 cm, desenho > 4 cm: 9000/X > 4 → X < 2250. Interseção: 1500 < X < 2250. Resposta: C.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Equações e inequações', 'Questões aleatórias'],
  },
  {
    id: 170,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Em 2014 foi inaugurada a maior roda-gigante do mundo, a High
Roller , situada em Las Vegas. A figura representa um esboço
dessa roda-gigante, no qual o ponto A representa uma de suas
cadeiras: A O Solo Solo Disponível em:
http://en.wikipedia.org. Acesso em: 22 abr. 2014 (adaptado). A
partir da posição indicada, em que o segmento OA se encontra
paralelo ao plano do solo, rotaciona-se a High Roller no
sentido anti-horário, em torno do ponto O . Sejam t o ângulo
determinado pelo segmento OA em relação à sua posição inicial,
e f a função que descreve a altura do ponto A , em relação ao
solo, em função de t . Após duas voltas completas, f tem o
seguinte gráfico: A expressão da função altura é dada por`,
    images: ['/enem/2018/images/enem_2018_d2_q170_1.jpg', '/enem/2018/images/enem_2018_d2_q170_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `f(t) = 80 sen(t) + 88` },
      { id: 'B', type: 'text', value: `f(t) = 80 cos(t) + 88` },
      { id: 'C', type: 'text', value: `f(t) = 88 cos(t) + 168` },
      { id: 'D', type: 'text', value: `f(t) = 168 sen(t) + 88 cos(t)` },
      { id: 'E', type: 'text', value: `f(t) = 88 sen(t) + 168 cos(t)` },
    ],
    correct: 'A',
    explanation: `Do gráfico: mínimo 8 e máximo 168, logo amplitude = (168−8)/2 = 80 e eixo = (168+8)/2 = 88. Em t=0 a altura é 88 (OA horizontal) e, girando no sentido anti-horário, cresce como seno. Assim f(t) = 80·sen(t) + 88. Resposta: A.`,
    subject: ['mat'],
    topics: ['Trigonometria', 'Funções', 'Questões aleatórias'],
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
    explanation: `São 8 sentidos de 45°. Partindo de Oeste (180° a partir do Leste): +135° (anti-horário) −60° (horário) +45° (anti-horário) = +120°, levando a 300°. Para alcançar Noroeste (135°) com menor amplitude: 300°−135° = 165° no sentido horário. Resposta: E.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
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
cada ranking.
A poesia vencedora foi a de`,
    images: ['/enem/2018/images/enem_2018_d2_q172_1.jpg', '/enem/2018/images/enem_2018_d2_q172_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Edu.` },
      { id: 'B', type: 'text', value: `Dani.` },
      { id: 'C', type: 'text', value: `Caio.` },
      { id: 'D', type: 'text', value: `Bia.` },
      { id: 'E', type: 'text', value: `Ana.` },
    ],
    correct: 'E',
    explanation: `Pontuação Borda (5 concorrentes): 1º=5, 2º=4, 3º=3, 4º=2, 5º=1; frequências I=4, II=9, III=7, IV=5. Ana: 5·4+2·9+4·7+4·5 = 86; Bia: 4·4+1·9+5·7+2·5 = 70; Caio: 3·4+4·9+3·7+1·5 = 74; Dani: 2·4+5·9+1·7+3·5 = 75; Edu: 1·4+3·9+2·7+5·5 = 70. A maior pontuação é de Ana (86). Resposta: E.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 173,
    exam: 'enem',
    year: 2018,
    day: 2,
    text: `Os guindastes são fundamentais em canteiros de obras, no manejo de materiais pesados como vigas de aço.
A figura ilustra uma sequência de estágios em que um guindaste iça uma viga de aço que se encontra inicialmente no solo.
Na figura, o ponto O representa a projeção ortogonal do cabo de aço sobre o plano do chão e este se mantém na vertical durante todo o movimento de içamento da viga, que se inicia no tempo t = 0 (estágio 1) e finaliza no tempo t_f (estágio 3). Uma das extremidades da viga é içada verticalmente a partir do ponto O, enquanto que a outra extremidade desliza sobre o solo em direção ao ponto O. Considere que o cabo de aço utilizado pelo guindaste para içar a viga fique sempre na posição vertical. Na figura, o ponto M representa o ponto médio do segmento que representa a viga.
O gráfico que descreve a distância do ponto M ao ponto O, em função do tempo, entre t = 0 e t_f, é`,
    images: ['/enem/2018/images/enem_2018_d2_q173.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2018/images/enem_2018_d2_q173_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2018/images/enem_2018_d2_q173_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2018/images/enem_2018_d2_q173_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2018/images/enem_2018_d2_q173_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2018/images/enem_2018_d2_q173_E.jpg` },
    ],
    correct: 'A',
    explanation: `Uma extremidade sobe na vertical sobre O, ponto (0;h); a outra desliza no solo rumo a O, ponto (d;0); o comprimento é constante: h²+d² = (2L)². O ponto médio M=(d/2;h/2) dista de O: OM = ½·√(d²+h²) = ½·(2L) = L, constante no tempo. Logo o gráfico é uma reta horizontal. Resposta: A.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
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
    explanation: `Densidade em 1986 = 100 000/0,25 = 400 000 transistores/cm², dobrando a cada 2 anos. Para 10^11: 400 000·2^k = 10^11 → 2^k = 2,5·10^5. k = log(2,5·10^5)/log 2 = 5,4/0,30 = 18 (pois log(2,5·10^5)=5+1−2·0,30=5,4). Tempo = 18·2 = 36 anos → 1986+36 = 2022. Resposta: C.`,
    subject: ['mat'],
    topics: ['Funções', 'Progressões (PA e PG)', 'Questões aleatórias'],
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
    explanation: `O preço é o mesmo: N·v. Com 5 parcelas a mais: (N+5)(v−200)=N·v → 40N = v−200. Com 4 a menos: (N−4)(v+232)=N·v → 58N = v+232... isto é v = 58N−232. Igualando v: 40N+200 = 58N−232 → 432 = 18N → N = 24. Resposta: B.`,
    subject: ['mat'],
    topics: ['Equações e inequações', 'Questões aleatórias'],
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

6 o 10 687,5 Ele precisa decidir com seu treinador qual salto
deverá realizar. Os dados dos possíveis tipos de salto estão
no Quadro 2.

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
    explanation: `Para superar o 1º lugar (829,0) após o 6º salto, a nota do salto deve passar de 829,0−687,5 = 141,5. Nota = soma dos juízes × nota de partida: T1=57·2,2=125,4; T2=58·2,4=139,2; T3=55·2,6=143,0; T4=50·2,8=140,0; T5=53·3,0=159,0. Ultrapassam 141,5 apenas T3 e T5; entre eles, a maior probabilidade é a de T3 (91,88% > 87,34%). Resposta: C.`,
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
    explanation: `População total = 4,5+2,0+2,5+0,5+20,5 = 30 milhões. Vacinados = 0,9+1,0+1,5+0,4+8,2 = 12 milhões. Porcentagem = 12/30 = 40%. Resposta: D.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
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
    explanation: `Sejam a (compraram 3 bilhetes), 45 (compraram 2), u (compraram 1) e 80 que faltaram. Total de alunos = a+45+u+80; bilhetes = 3a+90+u. Como os bilhetes excedem o total de alunos em 33: 3a+90+u = (a+45+u+80)+33 → 2a = 68 → a = 34. Como u = 20% dos bilhetes: u = 0,2(192+u) → 0,8u = 38,4 → u = 48. Resposta: D.`,
    subject: ['mat'],
    topics: ['Equações e inequações', 'Porcentagem', 'Questões aleatórias'],
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
      { id: 'C', type: 'text', value: `7√2` },
      { id: 'D', type: 'text', value: `6 + 4√2` },
      { id: 'E', type: 'text', value: `6 + 2√2` },
    ],
    correct: 'A',
    explanation: `A menor peça é um triângulo retângulo isósceles de catetos 2 cm. Ao longo de um lado do quadrado, três triângulos se alinham com catetos de 2, 4 e 8 cm (cada um o dobro do anterior). Logo o lado do quadrado mede 2+4+8 = 14 cm. Resposta: A.`,
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
borda inferior. O raio da base do cilindro mede 6/π cm, e ao
enrolar a faixa obtém-se uma linha em formato de hélice,
como na figura.
O valor da medida da altura do cilindro, em centímetro, é`,
    images: ['/enem/2018/images/enem_2018_d2_q180.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `36√3` },
      { id: 'B', type: 'text', value: `24√3` },
      { id: 'C', type: 'text', value: `4√3` },
      { id: 'D', type: 'text', value: `36` },
      { id: 'E', type: 'text', value: `72` },
    ],
    correct: 'B',
    explanation: `A circunferência da base = 2π·r = 2π·(6/π) = 12 cm. Ao enrolar, a faixa dá 6 voltas (a hélice da figura), então a base do retângulo equivale a 6·12 = 72 cm e a altura do retângulo é a altura H do cilindro. A diagonal forma 30° com a base: tg 30° = H/72 → H = 72·tg 30° = 72/√3 = 24√3 cm. Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Trigonometria', 'Questões aleatórias'],
  },
];

export default ENEM_2018_D2;
