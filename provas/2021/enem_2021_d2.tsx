import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2021_D2: QuizQuestion[] = [

  {
    id: 91,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `No cultivo por hidroponia, são utilizadas soluções
nutritivas contendo macronutrientes e micronutrientes
essenciais. Além dos nutrientes, o pH é um parâmetro de
extrema importância, uma vez que ele afeta a preparação
da solução nutritiva e a absorção dos nutrientes pelas
plantas. Para o cultivo de alface, valores de pH entre
5,5 e 6,5 são ideais para o seu desenvolvimento.
As correções de pH são feitas pela adição de compostos
ácidos ou básicos, mas não devem introduzir elementos
nocivos às plantas. Na tabela, são apresentados alguns
dados da composição da solução nutritiva de referência
para esse cultivo. Também é apresentada a composição
de uma solução preparada por um produtor de cultivo
hidropônico.
Concentração, mmol/L
Composição |Solução nutritiva
de referencia) preparada
(55<pH<65)| (pH=4,3)
P(H,PO,) 1,0
Ca? 4,0
Espécies químicas
Macronutrientes
3,0
so” 2,0
Fe? 90 x 103
LENZI, E.; FAVERO, L. O. B.; LUCHESE, E. B. Introdução à química da água: ciência,
vida e sobrevivência. Rio de Janeiro: LTC, 2012 (adaptado).
1,0
70 x 107
Micronutrientes
Para correção do pH da solução nutritiva preparada, esse
produtor pode empregar uma solução de`,
    images: ['/enem/2021/images/enem_2021_d2_q91.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `ácido fosfórico, H₃PO₄.` },
      { id: 'B', type: 'text', value: `sulfato de cálcio, CaSO₄.` },
      { id: 'C', type: 'text', value: `óxido de alumínio, Al₂O₃.` },
      { id: 'D', type: 'text', value: `cloreto de ferro(II), FeCl₂.` },
      { id: 'E', type: 'text', value: `hidróxido de potássio, KOH.` },
    ],
    correct: 'E',
    explanation: `A composição de referência deve apresentar várias substâncias em diferentes concentrações. Além disso, a faixa de pH deve ser entre 5,5 e 6,5. Entretanto, uma solução nutritiva preparada apresenta um pH igual a 4,3. O comando quer saber qual solução deve ser utilizada para corrigir o pH. Como a solução está com um pH mais baixo que o de referência, devemos utilizar algum composto de característica básica para que o pH aumente. Sendo assim, entre as opções temos o hidróxido de potássio que é uma base forte.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 92,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O sino dos ventos é composto por várias barras
metálicas de mesmo material e espessura, mas de
comprimentos diferentes, conforme a figura.
Considere f1 e v1, respectivamente, como a frequência
fundamental e a velocidade de propagação do som emitido
pela barra de menor comprimento, e f2 e v2 são essas
mesmas grandezas para o som emitido pela barra de
maior comprimento.
As relações entre as frequências fundamentais e entre as
velocidades de propagação são, respectivamente,`,
    images: ['/enem/2021/images/enem_2021_d2_q92.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `f1 < f2 e v1 < v2.` },
      { id: 'B', type: 'text', value: `f1 < f2 e v1 = v2.` },
      { id: 'C', type: 'text', value: `f1 < f2 e v1 > v2.` },
      { id: 'D', type: 'text', value: `f1 > f2 e v1 = v2.` },
      { id: 'E', type: 'text', value: `f1 > f2 e v1 > v2.` },
    ],
    correct: 'D',
    explanation: null,
    subject: ['fis'],
    topics: ['Física', 'Ondas sonoras', 'Frequência fundamental']
  },
  {
    id: 93,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O polvo mimético apresenta padrões cromáticos e
comportamentos muito curiosos. Frequentemente, muda
a orientação de seus tentáculos, assemelhando-se a
alguns animais. As imagens 1, 3 e 5 apresentam polvos
mimetizando, respectivamente, um peixe-linguado (2),
um peixe-leão (4) e uma serpente-marinha (6).
NORMAN, M. D.; FINN, J.; TREGENZA, T. Dynamic mimicry in an Indo-Malayan octopus.
In: Proceedings of the Royal Society B: Biological Sciences, n. 268, out. 2001.
Disponível em: www.researchgate.net. Acesso em: 15 mar. 2014 (adaptado).
Do ponto de vista evolutivo, a capacidade apresentada se
estabeleceu porque os polvos`,
    images: ['/enem/2021/images/enem_2021_d2_q93.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `originaram-se do mesmo ancestral que esses
animais.` },
      { id: 'B', type: 'text', value: `passaram por mutações similares a esses organismos.` },
      { id: 'C', type: 'text', value: `observaram esses animais em seus nichos
ecológicos.` },
      { id: 'D', type: 'text', value: `resultaram de convergência adaptativa com essas
espécies.` },
      { id: 'E', type: 'text', value: `sobreviveram às pressões seletivas com esses
comportamentos.` },

    ],
    correct: 'E',
    explanation: `O aspecto mimético do polvo decorre de sua maior sobrevivência e reprodução em comparação com morfotipos não miméticos (seleção natural).`,
    subject: ['bio'],
    topics: ['Porcentagem', 'Questões aleatórias']
  },
  {
    id: 94,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `A figura foi extraída de um antigo jogo para
computadores, chamado Bang! Bang!
No jogo, dois competidores controlam os canhões
A e B, disparando balas alternadamente com o objetivo
de atingir o canhão do adversário; para isso, atribuem
valores estimados para o módulo da velocidade inicial de
disparo (|v,|) e para o ângulo de disparo (6).
Em determinado momento de uma partida, o
competidor B deve disparar; ele sabe que a bala disparada
anteriormente, O = 53º, passou tangenciando o ponto P.
No jogo, |'9| é igual a 10 m/s?. Considere sen 53º= 0,8,
cos 53º= 0,6 e desprezível a ação de forças dissipativas.
Disponível em: http://mebdownloads.butzke.net.br. Acesso em: 18 abr. 2015 (adaptado).
Com base nas distâncias dadas e mantendo o último
ângulo de disparo, qual deveria ser, aproximadamente,
o menor valor de [v,] que permitiria ao disparo efetuado
pelo canhão B atingir o canhão A?`,
    alternatives: [
      { id: 'A', type: 'text', value: `30 m/s.` },
      { id: 'B', type: 'text', value: `35 m/s.` },
      { id: 'C', type: 'text', value: `40 m/s.` },
      { id: 'D', type: 'text', value: `45 m/s.` },
      { id: 'E', type: 'text', value: `50 m/s.` },

    ],
    correct: 'C',
    explanation: ``,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias']
  },
  {
    id: 95,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Os pesticidas organoclorados foram amplamente
empregados na agricultura, contudo, em razão das suas
elevadas toxicidades e persistências no meio ambiente,
eles foram banidos. Considere a aplicação de 500 g de
um pesticida organoclorado em uma cultura e que, em
certas condições, o tempo de meia-vida do pesticida no
solo seja de 5 anos.
A massa do pesticida no decorrer de 35 anos será mais
próxima de`,
    alternatives: [
      { id: 'A', type: 'text', value: `3,9 g.` },
      { id: 'B', type: 'text', value: `31,2 g.` },
      { id: 'C', type: 'text', value: `62,5 g.` },
      { id: 'D', type: 'text', value: `125,0 g.` },
      { id: 'E', type: 'text', value: `250,0 g.` },

    ],
    correct: 'A',
    explanation: `A massa inicial do pesticida é de 500 g. Com o passar de um tempo de meia vida, a massa caia à metade. Como o tempo de meia vida é de 5 anos e o tempo que o problema quer que se passe é de 35 anos. Sendo assim, precisamos dividir 35 por 5 para saber quantos tempos de meia vida vão passar. &nbsp; 35/5 = 7 &nbsp; 500 g → 250 g → 125 g → 62,5 g → 31,25 g → 15,625 g → 7,8125 g → 3,906 g &nbsp; Sendo assim, a massa após 35 anos é de aproximadamente 3,9 g.`,
    subject: ['bio'],
    topics: ['Urbanização', 'Questões aleatórias']
  },
  {
    id: 96,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `A sequência de nucleotídeos do RNA mensageiro
presentes em um gene de um fungo, constituída de sete
códons, está escrita a seguir.
1 — 2 — 3 — 4 — 5 — 6 — 7
AUG — UUU — GUU — CAA — UGU — AGU — UAG
Pesquisadores submeteram a sequência a mutações
independentes. Sabe-se que os códons UAG e UAA são
terminais, ou seja, indicam a interrupção da tradução.
Qual mutação produzirá a menor proteína?`,
    images: ['/enem/2021/images/enem_2021_d2_q96.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Deleção de G no códon 3.` },
      { id: 'B', type: 'text', value: `Substituição de C por U no códon 4.` },
      { id: 'C', type: 'text', value: `Substituição de G por C no códon 6.` },
      { id: 'D', type: 'text', value: `Substituição de A por G no códon 7.` },
      { id: 'E', type: 'text', value: `Deleção dos dois primeiros nucleotídeos no códon 5.` },

    ],
    correct: 'B',
    explanation: ``,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias']
  },
  {
    id: 97,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `A simples atitude de não jogar direto no lixo ou no
ralo da pia o óleo de cozinha usado pode contribuir para
a redução da poluição ambiental. Mas o que fazer com
o óleo vegetal que não será mais usado? Não existe um
modelo ideal de descarte, mas uma alternativa simples
tem sido reaproveitá-lo para fazer sabão. Para isso, são
necessários, além do próprio óleo, água e soda cáustica.
LOBO, |. Sabão feito com óleo de cozinha. Disponível em: http://pga.pgr.mpf.gov.br.
Acesso em: 29 fev. 2012 (adaptado).
Com base no texto, a reação química que permite o
reaproveitamento do óleo vegetal é denominada`,
    alternatives: [
      { id: 'A', type: 'text', value: `redução.` },
      { id: 'B', type: 'text', value: `epoxidação.` },
      { id: 'C', type: 'text', value: `substituição.` },
      { id: 'D', type: 'text', value: `esterificação.` },
      { id: 'E', type: 'text', value: `saponificação.` },
    ],
    correct: 'E',
    explanation: `A reação de síntese do sabão a partir do óleo de cozinha é uma reação de saponificação. Onde nós temos uma reação de éster com base forte produzindo sal orgânico e álcool. No caso do óleo, temos um triéster (triglicerídeo) reagindo com uma base forte e produzindo o sabão que é um sal orgânico e o glicerol que é um triálcool.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias']
  },
  {
    id: 98,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Durante o desenvolvimento embrionário humano
ocorre uma comunicação entre os átrios direito e
esquerdo através do forame oval (ou forame de Botal).
Essa comunicação não causa prejuízos à circulação
do bebê em formação, exceto se ela perdurar após
o nascimento.
Os prejuízos no período embrionário são evitados porque
a circulação fetal se assemelha à dos(as)`,
    alternatives: [
      { id: 'A', type: 'text', value: `aves, porque a pequena circulação e a grande
circulação estão presentes.` },
      { id: 'B', type: 'text', value: `répteis, porque a mistura de sangue é minimizada por
um metabolismo lento.` },
      { id: 'C', type: 'text', value: `crocodilianos, porque a separação dos ventrículos
impede a mistura sanguínea.` },
      { id: 'D', type: 'text', value: `peixes, porque a circulação é simples, ocorrendo
uma passagem única pelo coração.` },
      { id: 'E', type: 'text', value: `anfíbios, porque pressões diferenciais isolam
temporalmente o sangue venoso do arterial.` },

    ],
    correct: 'D',
    explanation: `A questão assume que o coração tetracavitario fetal se assemelha ao dos peixes porém tal semelhança ocorre somente até a 4a semana de desenvolvimento, antes da separação dos átrios e da formação do forâmen oval. Dessa forma a questão possui erro conceitual básico devendo ser anulada`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 99,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Na cidade de São Paulo, as ilhas de calor são
responsáveis pela alteração da direção do fluxo da brisa
marítima que deveria atingir a região de mananciais.
Mas, ao cruzar a ilha de calor, a brisa marítima agora
encontra um fluxo de ar vertical, que transfere para
ela energia térmica absorvida das superfícies quentes
da cidade, deslocando-a para altas altitudes. Dessa
maneira, há condensação e chuvas fortes no centro da
cidade, em vez de na região de mananciais. A imagem
apresenta os três subsistemas que trocam energia
nesse fenômeno.
Brisa
Ilha de calor
No processo de fortes chuvas no centro da cidade
de São Paulo, há dois mecanismos dominantes de
transferência de calor: entre o Sol e a ilha de calor, e entre
a ilha de calor e a brisa marítima.
VIVEIROS, M. Ilhas de calor afastam chuvas de represas.
Disponível em: www2.feis.unesp.br. Acesso em: 3 dez. 2019 (adaptado).
Esses mecanismos são, respectivamente,`,
    images: ['/enem/2021/images/enem_2021_d2_q99.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `irradiação e convecção.` },
      { id: 'B', type: 'text', value: `irradiação e irradiação.` },
      { id: 'C', type: 'text', value: `condução e irradiação.` },
      { id: 'D', type: 'text', value: `convecção e irradiação.` },
      { id: 'E', type: 'text', value: `convecção e convecção.` },
    ],
    correct: 'A',
    explanation: `A questão tratava das formas de propagação de calor. No caso do Sol para a ilha de calor, temos a radiação (ou irradiação) e as brisas marítima e terrestre são formadas pela convecção.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias']
  },
  {
    id: 100,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `No seu estudo sobre a queda dos corpos, Aristóteles
afirmava que se abandonarmos corpos leves e pesados
de uma mesma altura, o mais pesado chegaria mais
rápido ao solo. Essa ideia está apoiada em algo que
é difícil de refutar, a observação direta da realidade
baseada no senso comum.
Após uma aula de física, dois colegas estavam
discutindo sobre a queda dos corpos, e um tentava
convencer o outro de que tinha razão:
Colega A: "O corpo mais pesado cai mais rápido que
um menos pesado, quando largado de uma mesma altura.
Eu provo, largando uma pedra e uma rolha. A pedra chega
antes. Pronto! Tá provado!".
Colega B: "Eu não acho! Peguei uma folha de papel
esticado e deixei cair. Quando amassei, ela caiu mais
rápido. Como isso é possível? Se era a mesma folha de
papel, deveria cair do mesmo jeito. Tem que ter outra
explicação!".
HÜLSENDEGER, M. Uma análise das concepções dos alunos sobre a queda dos corpos.
Caderno Brasileiro de Ensino de Física, n. 3, dez. 2004 (adaptado).
O aspecto físico comum que explica a diferença de
comportamento dos corpos em queda nessa discussão
é o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `peso dos corpos.` },
      { id: 'B', type: 'text', value: `resistência do ar.` },
      { id: 'C', type: 'text', value: `massa dos corpos.` },
      { id: 'D', type: 'text', value: `densidade dos corpos.` },
      { id: 'E', type: 'text', value: `aceleração da gravidade.` },

    ],
    correct: 'B',
    explanation: `Questão conversa sobre corpos abandonados de uma mesma altura atingir o solo em tempos diferentes. Isso só ocorre na presença de resistência do ar. Vemos que duas folhas de papéis idênticas, porém em formatos diferentes, caem, quando abandonadas da mesma altura, em tempos diferentes, com isso fica evidente que o peso dos corpos não interfere na sua queda livre.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 101,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `A obtenção de etanol utilizando a cana-de-açúcar
envolve a fermentação dos monossacarídeos formadores
da sacarose contida no melaço. Um desses formadores
é a glicose (C6H12O6), cuja fermentação produz cerca de
50 g de etanol a partir de 100 g de glicose, conforme a
equação química descrita.
C6H12O6 --(Fermentação alcoólica)--> 2 CH3CH2OH + 2 CO₂
Em uma condição específica de fermentação,
obtêm-se 80% de conversão em etanol que, após sua
purificação, apresenta densidade igual a 0,80 g/mL.
O melaço utilizado apresentou 50 kg de monossacarídeos
na forma de glicose.
O volume de etanol, em litro, obtido nesse processo é
mais próximo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `16.` },
      { id: 'B', type: 'text', value: `20.` },
      { id: 'C', type: 'text', value: `25.` },
      { id: 'D', type: 'text', value: `64.` },
      { id: 'E', type: 'text', value: `100.` },

    ],
    correct: 'C',
    explanation: `Segundo o enunciado, a proporção entre glicose e etanol é de: &nbsp; 100 g de Glicose para 50 g de Etanol &nbsp; Porém a massa utilizada de Glicose é de 50 Kg = 50000 g. Como enunciado comentou que temos um pureza de 80%, temos: &nbsp; 100 g Glicose &#8212;&#8212;- 50 g Etanol 0,8.50000 g Glicose &#8212;&#8212;- X &nbsp; X = 20000 g de Etanol. &nbsp; O comando da questão quer saber o volume de etanol. Aplicando a densidade informado no enunciado, temos: &nbsp; d = m/V 0,8 = 20000/V V = 25000 mL = 25 L`,
    subject: ['qui'],
    topics: ['Geometria espacial', 'Questões aleatórias']
  },
  {
    id: 102,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `É possível ligar aparelhos elétricos de baixa corrente
utilizando materiais comuns de laboratório no lugar das
tradicionais pilhas. A ilustração apresenta uma montagem
que faz funcionar um cronômetro digital.
Utilizando a representação de projetos elétricos, o circuito
equivalente a esse sistema é`,
    images: ['/enem/2021/images/enem_2021_d2_q102.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'B',
    explanation: `Nesta questão é possível observar que as soluções são as pilhas, ou seja, são dois geradores em série, e pela ordem que é apresentada as soluções já podemos descartar a letra C. Sendo o voltímetro em paralelo com resistor, que no caso é o cronômetro.`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 103,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Um técnico analisou um lote de analgésicos
que supostamente estava fora das especificações.
A composição prevista era 100 mg de ácido acetilsalicílico
por comprimido (princípio ativo, cuja estrutura está
apresentada na figura), além do amido e da celulose
(componentes inertes). O técnico realizou os seguintes
testes:
1) obtenção da massa do comprimido;
2) medição da densidade do comprimido;
3) verificação do pH com papel indicador;
4) determinação da temperatura de fusão do comprimido;
5) titulação com solução aquosa de NaOH.
Após a realização dos testes, o lote do medicamento
foi reprovado porque a quantidade de ácido acetilsalicílico
por comprimido foi de apenas 40% da esperada.
O teste que permitiu reprovar o lote de analgésicos foi
o de número`,
    images: ['/enem/2021/images/enem_2021_d2_q103.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `2.` },
      { id: 'C', type: 'text', value: `3.` },
      { id: 'D', type: 'text', value: `4.` },
      { id: 'E', type: 'text', value: `5.` },

    ],
    correct: 'E',
    explanation: `Um dos testes realizados é a titulação. Essa técnica pode ser usada para determinar a concentração de uma solução que nós não sabemos. A técnica usada no problema se baseia na reação de neutralização entre o ácido acetilsalicílico e o NaOH. Com a concentração e o volume utilizado de NaOH, é possível determinar a concentração do ácido e saber se esse está ou não dentro da concentração necessária.`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 104,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O rompimento da barragem de rejeitos de mineração
no município mineiro de Mariana é o derramamento de
produtos tóxicos nas águas do Rio Doce, ocorridos em
2015, ainda têm consequências para os organismos
que habitam o Parque Nacional Marinho de Abrolhos,
localizado a mais de 1 000 quilômetros de distância. Esse
desastre ambiental afetou o fitoplâncton, as esponjas, as
algas macroscópicas, os peixes herbívoros e os golfinhos.
FRAINER, G.; SICILIANO, S.; TAVARES, D. C. Franciscana calls for help: [...].
International Whaling Commission, Conference Paper, jun. 2016 (adaptado).
Concentrações mais elevadas dos compostos citados
são encontradas em`,
    alternatives: [
      { id: 'A', type: 'text', value: `esponjas.` },
      { id: 'B', type: 'text', value: `golfinhos.` },
      { id: 'C', type: 'text', value: `fitoplâncton.` },
      { id: 'D', type: 'text', value: `peixes herbívoros.` },
      { id: 'E', type: 'text', value: `algas macroscópicas.` },
    ],
    correct: 'B',
    explanation: `Os golfinhos apresentam maiores concentrações de produtos tóxicos em seus tecidos devido ao derramamento dos rejeitos da barragem de Mariana. Isso acontece por conta do efeito da magnificação trófica, onde os predadores de topo de cadeias e teias alimentares são os mais afetados.`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias']
  },
  {
    id: 105,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Duas esferas carregadas com cargas iguais em
módulo e sinais contrários estão ligadas por uma
haste rígida isolante na forma de haltere. O sistema se
movimenta sob ação da gravidade numa região que
tem um campo magnético horizontal uniforme (B), da
esquerda para a direita. A imagem apresenta o sistema
visto de cima para baixo, no mesmo sentido da aceleração
da gravidade (g) que atua na região.
Visto de cima, o diagrama esquemático das forças
magnéticas que atuam no sistema, no momento inicial em
que as cargas penetram na região de campo magnético,
está representado em`,
    images: ['/enem/2021/images/enem_2021_d2_q105.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'A',
    explanation: ``,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias']
  },
  {
    id: 106,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `A icterícia, popularmente conhecida por amarelão, é uma patologia frequente em recém-nascidos. Um bebê com
icterícia não consegue metabolizar e excretar de forma eficiente a bilirrubina. Com isso, o acúmulo dessa substância
deixa-o com a pele amarelada. A fototerapia é um tratamento da icterícia neonatal, que consiste na irradiação de luz
no bebê. Na presença de luz, a bilirrubina é convertida no seu isômero lumirrubina que, por ser mais solúvel em água,
é excretada pela bile ou pela urina. A imagem ilustra o que ocorre nesse tratamento.
MOREIRA, M. et al. O recém-nascido de alto risco: teoria e prática do cuidar [on-line]. Rio de Janeiro: Fiocruz, 2004 (adaptado).
WANG, J. et. al. Challenges of phototherapy for neonatal hyperbilirubinemia (Review). Experimental and Therapeutic Medicine, n. 21, 2021 (adaptado).
Na fototerapia, a luz provoca a conversão da bilirrubina no seu isômero`,
    images: ['/enem/2021/images/enem_2021_d2_q106.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `ótico.` },
      { id: 'B', type: 'text', value: `funcional.` },
      { id: 'C', type: 'text', value: `de cadeia.` },
      { id: 'D', type: 'text', value: `de posição.` },
      { id: 'E', type: 'text', value: `geométrico.` },

    ],
    correct: 'C',
    explanation: `Analisando a estrutura da Bilirrubina é possível observar uma região que apresenta uma cadeia aberta. Já na Lumirrubina é possível ver a mesma parte que uma cadeia fechada agora. Sendo assim, a isomeria é de cadeia. &nbsp; OBS: É possível que haja uma alteração. Visto que na Bilirrubina nós apresentamos a função amina e na Lumirrubina a função imina.`,
    subject: ['bio'],
    topics: ['Porcentagem', 'Questões aleatórias']
  },
  {
    id: 107,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Analisando a ficha técnica de um automóvel popular, verificam-se algumas características em relação ao seu
desempenho. Considerando o mesmo automóvel em duas versões, uma delas funcionando a álcool e outra, a
gasolina, tem-se os dados apresentados no quadro, em relação ao desempenho de cada motor.
Parâmetro — Motor a gasolina — Motor a álcool
Aceleração — de 0 a 100 km/h em 13,4 s — de 0 a 100 km/h em 12,9 s
Velocidade máxima — 165 km/h — 163 km/h
Considerando desprezível a resistência do ar, qual versão apresenta a maior potência?`,
    images: ['/enem/2021/images/enem_2021_d2_q107.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Como a versão a gasolina consegue a maior aceleração, esta é a que desenvolve a maior potência.` },
      { id: 'B', type: 'text', value: `Como a versão a gasolina atinge o maior valor de energia cinética, esta é a que desenvolve a maior potência.` },
      { id: 'C', type: 'text', value: `Como a versão a álcool apresenta a maior taxa de variação de energia cinética, esta é a que desenvolve a maior
potência.` },
      { id: 'D', type: 'text', value: `Como ambas as versões apresentam a mesma variação de velocidade no cálculo da aceleração, a potência
desenvolvida é a mesma.` },
      { id: 'E', type: 'text', value: `Como a versão a gasolina fica com o motor trabalhando por mais tempo para atingir os 100 km/h, esta é a que
desenvolve a maior potência.` },

    ],
    correct: 'C',
    explanation: ``,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias']
  },
  {
    id: 108,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `No cordel intitulado Senhor dos Anéis, de autoria de
Gonçalo Ferreira da Silva, lê-se a sextilha:
A distância em relação
Ao nosso planeta amado
Pouco menos que a do Sol
Ele está distanciado
E menos denso que a água
Quando no normal estado
MEDEIROS, A.; AGRA, J. T. M., A astronomia na literatura de cordel,
Física na Escola, n. 1, abr. 2010 (fragmento).
TEXTO II
Distâncias médias dos planetas ao Sol e suas densidades médias
Planetas — Distância média ao Sol (u.a.) — Densidade relativa média
*Mercúrio — 0,39 — 5,6
*Vênus — 0,72 — 5,2
*Terra — 1,0 — 5,5
*Marte — 1,5 — 4,0
**Ceres — 2,8 — 2,1
*Júpiter — 5,2 — 1,3
*Saturno — 9,6 — 0,7
*Urano — 19 — 1,2
*Netuno — 30 — 1,7
**Plutão — 40 — 2,0
**Éris — 68 — 2,5
u.a. = 149 600 000 km, é a unidade astronômica, *Planeta clássico, **Planeta-anão
Características dos planetas. Disponível em: www.astronoo.com.
Acesso em: 8 nov. 2019 (adaptado).
Considerando os versos da sextilha e as informações da
tabela, a qual planeta o cordel faz referência?`,
    images: ['/enem/2021/images/enem_2021_d2_q108.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Mercúrio.` },
      { id: 'B', type: 'text', value: `Júpiter.` },
      { id: 'C', type: 'text', value: `Urano.` },
      { id: 'D', type: 'text', value: `Saturno.` },
      { id: 'E', type: 'text', value: `Netuno.` },

    ],
    correct: 'D',
    explanation: ``,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 109,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Cientistas da Universidade de New South Wales,
na Austrália, demonstraram em 2012 que a Lei de
Ohm é válida mesmo para fios finíssimos, cuja área
da seção reta compreende alguns poucos átomos.
A tabela apresenta as áreas e comprimentos de alguns
dos fios construídos (respectivamente com as mesmas
unidades de medida). Considere que a resistividade
mantém-se constante para todas as geometrias (uma
aproximação confirmada pelo estudo).
WEBER, S. B. et al. Ohm's Law Survives to the Atomic Scale.
Science, n. 335, jan. 2012 (adaptado).
As resistências elétricas dos fios, em ordem crescente, são`,
    images: ['/enem/2021/images/enem_2021_d2_q109.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `R1 < R2 < R3 < R4.` },
      { id: 'B', type: 'text', value: `R2 < R1 < R3 < R4.` },
      { id: 'C', type: 'text', value: `R2 < R3 < R1 < R4.` },
      { id: 'D', type: 'text', value: `R4 < R1 < R3 < R2.` },
      { id: 'E', type: 'text', value: `R4 < R3 < R2 < R1.` },

    ],
    correct: 'C',
    explanation: `A questão pede que calculemos a resistência de cada um dos quatro fios para colocarmos em ordem crescente, para tanto, com os dados disponibilizados no enunciado e sabendo pelo texto que os fios utilizados são os mesmos, conclui-se que o modo de calcular as resistências precisam ser feitos por meio da segunda lei de ohm, ja que a resistividade dos fios são os mesmos. Agora, ordenando-as crescentemente, da menor resistência para a maior, temos que:`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 110,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Organismos autótrofos e heterótrofos realizam
processos complementares que associam os ciclos do
carbono e do oxigênio. O carbono fixado pela energia
luminosa ou a partir de compostos inorgânicos é
eventualmente degradado pelos organismos, resultando
em fontes de carbono como metano ou gás carbônico.
Ainda, outros compostos orgânicos são catabolizados
pelos seres, com menor rendimento energético,
produzindo compostos secundários (subprodutos) que
podem funcionar como combustíveis ambientais.
O processo metabólico associado à expressão
combustíveis ambientais é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `fotossíntese.` },
      { id: 'B', type: 'text', value: `fermentação.` },
      { id: 'C', type: 'text', value: `quimiossíntese.` },
      { id: 'D', type: 'text', value: `respiração aeróbica.` },
      { id: 'E', type: 'text', value: `fosforilação oxidativa.` },

    ],
    correct: 'B',
    explanation: `A degradação parcial da matéria orgânica produz compostos ainda energéticos como o etanol como produtos do processo fermentativo.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias']
  },
  {
    id: 111,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Uma escola iniciou o processo educativo para
implantação da coleta seletiva e destino de materiais
recicláveis. Para atingir seus objetivos, a instituição planejou:
1) sensibilizar a comunidade escolar, desenvolvendo
atividades em sala e extraclasse de maneira
contínua;
2) capacitar o pessoal responsável pela limpeza da
escola quanto aos novos procedimentos adotados
com a coleta seletiva; e
3) distribuir coletores de materiais recicláveis
específicos nas salas, pátio e outros ambientes
para acondicionamento dos resíduos.
Para completar a ação proposta no ambiente escolar, o que
falta ser inserido no planejamento?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Realizar campanhas educativas de sensibilização em
bairros vizinhos para fortalecer a coleta seletiva.` },
      { id: 'B', type: 'text', value: `Firmar parceria com a prefeitura ou cooperativa de
catadores para recolhimento dos materiais recicláveis
e destinação apropriada.` },
      { id: 'C', type: 'text', value: `Organizar visitas ao lixão ou aterro local para
identificar aspectos importantes sobre a disposição
final do lixo.` },
      { id: 'D', type: 'text', value: `Divulgar na rádio local, no jornal impresso e nas redes
sociais que a escola está realizando a coleta seletiva.` },
      { id: 'E', type: 'text', value: `Colocar recipientes coletores de lixo reciclável fora da
escola para entrega voluntária pela população.` },

    ],
    correct: 'B',
    explanation: `Conforme o enunciado, o projeto desenvolvido visava a coleta seletiva mas também a destinação de produtos recicláveis. Tal objetivo não foi contemplado nas atividades propostas na escola, sendo assim alcançado através de parcerias com prefeituras e cooperativas de reciclagem.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 112,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Os búfalos são animais considerados rústicos pelos
criadores e, por isso, são deixados no campo sem
controle reprodutivo. Por causa desse tipo de criação,
a consanguinidade é favorecida, proporcionando o
aparecimento de enfermidades, como o albinismo, defeitos
cardíacos, entre outros. Separar os animais de forma
adequada minimizaria a ocorrência desses problemas.
DAMÉ, M. C. F.; RIET-CORREA, F.; SCHILD, A. L. Pesq. Vet. Bras., n. 7, 2013 (adaptado).
Qual procedimento biotecnológico prévio é recomendado
nessa situação?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Transgenia.` },
      { id: 'B', type: 'text', value: `Terapia gênica.` },
      { id: 'C', type: 'text', value: `Vacina de DNA.` },
      { id: 'D', type: 'text', value: `Clonagem terapêutica.` },
      { id: 'E', type: 'text', value: `Mapeamento genético.` },

    ],
    correct: 'E',
    explanation: ``,
    subject: ['bio'],
    topics: ['Porcentagem', 'Questões aleatórias']
  },
  {
    id: 113,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O ciclo do cobre é um experimento didático em que
o cobre metálico é utilizado como reagente de partida.
Após uma sequência de reações (I, II, III, IV e V), o cobre
retorna ao seu estado inicial ao final do ciclo.
A reação de redução do cobre ocorre na etapa`,
    images: ['/enem/2021/images/enem_2021_d2_q113.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },

    ],
    correct: 'E',
    explanation: `Numa reação de redução nós teremos uma diminuição do nox. Analisando a etapa V, nós podemos ver o CuSO4 sendo convertido em Cu. &nbsp; Determinando o NOX nós temos: CuSO4 → NOX Cu = 2+ Cu → NOX = zero &nbsp;`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 114,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Um dos exames clínicos mais tradicionais para medir
a capacidade reflexa dos indivíduos é o exame do reflexo
patelar. Esse exame consiste na estimulação da patela, um
pequeno osso localizado na parte anterior da articulação
do joelho, com um pequeno martelo. A resposta reflexa
ao estímulo é caracterizada pelo levantamento da perna
em que o estímulo foi aplicado.
Qual região específica do sistema nervoso coordena
essa resposta?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Ponte.` },
      { id: 'B', type: 'text', value: `Medula.` },
      { id: 'C', type: 'text', value: `Cerebelo.` },
      { id: 'D', type: 'text', value: `Hipotálamo.` },
      { id: 'E', type: 'text', value: `Neuro-hipófise.` },

    ],
    correct: 'B',
    explanation: `O reflexo patelar é gerado através de um arco reflexo simples, ou seja, não envolve a participação do encéfalo. Seu centro coordenador ocorre na medula espinhal ou raquidiana.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias']
  },
  {
    id: 115,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Na montagem de uma cozinha para um restaurante, a
escolha do material correto para as panelas é importante,
pois a panela que conduz mais calor é capaz de cozinhar
os alimentos mais rapidamente e, com isso, há economia
de gás. A taxa de condução do calor depende da
condutividade k do material, de sua área A, da diferença
de temperatura ΔT e da espessura d do material, sendo
dada pela relação ΔQ/Δt = k·A·(ΔT/d). Em panelas com dois
materiais, a taxa de condução é dada por ΔQ/Δt = A·ΔT / (d1/k1 + d2/k2),
em que d1 e d2 são as espessuras dos dois materiais,
e k1 e k2 são as condutividades de cada material.
Os materiais mais comuns no mercado para panelas são
o alumínio (k = 20 W/m K), o ferro (k = 8 W/m K) e o aço
(k = 5 W/m K) combinado com o cobre (k = 40 W/m K).
Compara-se uma panela de ferro, uma de alumínio
e uma composta de 1/2 da espessura em cobre e 1/2 da
espessura em aço, todas com a mesma espessura total e
com a mesma área de fundo.
A ordem crescente da mais econômica para a menos
econômica é`,
    alternatives: [
      { id: 'A', type: 'text', value: `cobre-aço, alumínio e ferro.` },
      { id: 'B', type: 'text', value: `alumínio, cobre-aço e ferro.` },
      { id: 'C', type: 'text', value: `cobre-aço, ferro e alumínio.` },
      { id: 'D', type: 'text', value: `alumínio, ferro e cobre-aço.` },
      { id: 'E', type: 'text', value: `ferro, alumínio e cobre-aço.` },

    ],
    correct: 'B',
    explanation: `A ordem crescente de economia de energia consiste em ordenar a opção com maior taxa de condução de calor. Calculando os três casos: Caso 1: Panela de Ferro. &nbsp; Caso 2: Panela de Alumínio. &nbsp; Caso 3: Panela metade Cobre e metade Aço. Na ordem, ficamos com: Alumínio, Cobre-Aço, Ferro.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias']
  },
  {
    id: 116,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `As águas subterrâneas têm sido contaminadas pelo uso de pesticidas na agricultura. Entre as várias substâncias
usualmente encontradas, algumas são apresentadas na figura. A distinção dessas substâncias pode ser feita por
meio de uma análise química qualitativa, ou seja, determinando sua presença mediante a adição de um reagente
específico. O hidróxido de sódio é capaz de identificar a presença de um desses pesticidas pela reação ácido-base
de Brönsted-Lowry.
O teste positivo será observado com o pesticida`,
    images: ['/enem/2021/images/enem_2021_d2_q116.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },

    ],
    correct: 'C',
    explanation: `O teste consiste em uma reação de neutralização ácido-base. Como o enunciado informa que a base hidróxido de sódio (NaOH) é utilizada. O teste será positivo quando o composto for ácido. Entre as opções, podemos observar que o composto III apresenta uma hidroxila ligada diretamente a um anel aromático, sendo assim, a função presente é o fenol e este apresenta características ácidas e reagirá com o NaOH, dando positivo ao teste.`,
    subject: ['qui'],
    topics: ['Agricultura e pecuária', 'Questões aleatórias']
  },
  {
    id: 117,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Com o aumento da população de suínos no Brasil, 1
potencial poluidor dos resíduos dessa agroindústria, uma vi
suínos são 200 vezes mais poluentes. Sendo assim, a utiliz
combustíveis é uma alternativa que permite diversificar a r
dos recursos hídricos do país são preservados.
BECK, A. M. Resíduos suínos como alternativa energética sustentável. XXVII Enc
O biocombustível a que se refere o texto é o`,
    alternatives: [
      { id: 'A', type: 'text', value: `etanol.` },
      { id: 'B', type: 'text', value: `biogás.` },
      { id: 'C', type: 'text', value: `butano.` },
      { id: 'D', type: 'text', value: `metanol.` },
      { id: 'E', type: 'text', value: `biodiesel.` },
    ],
    correct: 'B',
    explanation: `Os dejetos suínos apresentam em sua composição o gás metano (CH4). Essa substância pode ser usada na geração de energia. Como esse componente está vindo de uma fonte renovável, estamos nos referindo ao biogás.`,
    subject: ['bio'],
    topics: ['Porcentagem', 'Questões aleatórias']
  },
  {
    id: 118,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `A curcumina, uma das substâncias que confere a cor alaranjada ao açafrão, pode auxiliar no combate à dengue
quando adicionada à água de criadouros do mosquito transmissor. Essa substância acumula-se no intestino do inseto
após ser ingerida com a água do criadouro e, quando ativada pela luz, induz a produção de espécies reativas de
oxigênio que danificam de forma fatal o tecido do tubo digestório.
TOLEDO, K. Corante extraído do açafrão pode ser útil no combate à dengue. Disponível em: http://agencia.fapesp.br. Acesso em: 25 abr. 2015 (adaptado).
A forma de combate relatada tem como atividade o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `morte do indivíduo adulto.` },
      { id: 'B', type: 'text', value: `redução da eclosão dos ovos.` },
      { id: 'C', type: 'text', value: `comprometimento da metamorfose.` },
      { id: 'D', type: 'text', value: `impedimento do desenvolvimento da larva.` },
      { id: 'E', type: 'text', value: `repelência da forma transmissora da doença.` },

    ],
    correct: 'D',
    explanation: `Como a curcumina tem ação em criadouros com água, sua ação ocorre quando larvas do Aedes o ingerem, impedindo assim seu desenvolvimento`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 119,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Com o objetivo de identificar a melhor espécie produtora
de madeira para construção (com resistência mecânica
e à degradação), foram analisadas as estruturas anatômicas
de cinco espécies, conforme o quadro.
Legenda: (−) ausente, (+) presente em pequena quantidade,
(++) presente em média quantidade, (+++) presente em grande quantidade.
Qual espécie corresponde ao objetivo proposto?`,
    images: ['/enem/2021/images/enem_2021_d2_q119_1.jpg', '/enem/2021/images/enem_2021_d2_q119_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `5` },

    ],
    correct: 'A',
    explanation: `O principal componente da madeira é o cerne (lenho estival). O cerne de madeira é escolhido principalmente para utilizações que requerem mais resistência e durabilidade.`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 120,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `No outono, as folhas das árvores mudam de cor, de verde
para tons de amarelo, castanho, laranja e vermelho.
A cor verde das folhas deve-se ao pigmento clorofila. Nas
plantas de folhas caducas, a produção de clorofila diminui e
o tom verde desvanece, permitindo assim que outros pigmentos,
como o caroteno, de coloração amarelo-alaranjado,
e a antocianina, de tons avermelhados, passem a dominar
a tonalidade das folhas. A coloração observada se dá em
função da interação desses pigmentos com a radiação solar.
Conforme apresentado no espectro de absorção, as
moléculas de clorofila absorvem a radiação solar nas
regiões do azul e do vermelho, assim a luz refletida pelas
folhas tem falta desses dois tons e as vemos na cor verde.
Já as antocianinas absorvem a luz desde o azul até o
verde. Nesse caso, a luz refletida pelas folhas que contêm
antocianinas aparece conforme as cores complementares,
ou seja, vermelho-alaranjado.
Disponível em: https://vidauniversoydemas.wordpress.com. Acesso em: 6 dez. 2017 (adaptado).
Em qual faixa do espectro visível os carotenos absorvem majoritariamente?`,
    images: ['/enem/2021/images/enem_2021_d2_q120.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Entre o violeta e o azul.` },
      { id: 'B', type: 'text', value: `Entre o azul e o verde.` },
      { id: 'C', type: 'text', value: `Entre o verde e o amarelo.` },
      { id: 'D', type: 'text', value: `Entre o amarelo e o laranja.` },
      { id: 'E', type: 'text', value: `Entre o laranja e o vermelho.` },

    ],
    correct: 'A',
    explanation: `Comentário: O texto apresentava a explicação do fato da clorofila refletir a cor verde e mostrava a ideia de cores complementares. &nbsp; Pelo fato dos carotenos refletirem uma coloração amarelo-alaranjado, logo, as cores absorvidas não possuem esses tons no seu espectro, sendo assim, a faixa absorvida está entre o espectro violeta e o azul.`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias']
  },
  {
    id: 121,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Entre 2014 e 2016, as regiões central e oeste da África sofreram uma grave epidemia de febre hemorrágica causada
pelo vírus ebola, que se manifesta em até 21 dias após a infecção e cuja taxa de letalidade (enfermos que vão a óbito)
pode chegar a 90%. Em regiões de clima tropical e subtropical, um outro vírus também pode causar febre hemorrágica: o
vírus da dengue, que, embora tenha período de incubação menor (até 10 dias), apresenta taxa de letalidade abaixo de 1%.
Disponível em: www.who.int. Acesso em: 1 fev. 2017 (adaptado).
Segundo as informações do texto e aplicando princípios de evolução biológica às relações do tipo patógeno-hospedeiro,
qual dos dois vírus infecta seres humanos há mais tempo?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Ebola, pois o maior período de incubação reflete duração mais longa do processo de coevolução patógeno-hospedeiro.` },
      { id: 'B', type: 'text', value: `Dengue, pois o menor período de incubação reflete duração mais longa do processo de coevolução patógeno-hospedeiro.` },
      { id: 'C', type: 'text', value: `Ebola, cuja alta letalidade indica maior eficiência do vírus em parasitar seus hospedeiros, estabelecida ao longo de sua
evolução.` },
      { id: 'D', type: 'text', value: `Ebola, cujos surtos epidêmicos concentram-se no continente africano, reconhecido como berço da origem
evolutiva dos seres humanos.` },
      { id: 'E', type: 'text', value: `Dengue, cuja baixa letalidade indica maior eficiência do vírus em parasitar seus hospedeiros, estabelecida ao
longo da coevolução patógeno-hospedeiro.` },

    ],
    correct: 'E',
    explanation: `Parasitas menos letais aumentam a chance de reprodução e contágio na população de hospedeiros, indicando dessa forma seu longo tempo de coevolução.`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias']
  },
  {
    id: 122,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `A imagem apresenta as etapas do funcionamento de uma
estação individual para tratamento do esgoto residencial.
TAVARES, K. Estações de tratamento de esgoto individuais permitem a reutilização da água.
Disponível em: https://extra.globo.com. Acesso em: 18 nov. 2014 (adaptado).
Em qual etapa decanta-se o lodo a ser separado do
esgoto residencial?`,
    images: ['/enem/2021/images/enem_2021_d2_q122.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `5` },
      { id: 'E', type: 'text', value: `6` },
    ],
    correct: 'C',
    explanation: `O tratamento de esgoto até o seu devido descarte passa por diferentes etapas. Dentre essas etapas, nós temos o tanque séptico. Neste tanque o resíduo deve permanecer em repouso para que haja uma decantação. Com essa decantação, é possível separar o lodo do esgoto residencial.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 123,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O plantio por estaquia é um método de propagação de plantas no qual partes de um espécime são colocadas
no solo para produzir novas gerações. Na floricultura, é comum utilizar o caule das roseiras para estaquia, pois a
propagação da planta é positiva em razão da aplicação de auxinas na porção inferior do caule.
A utilização de auxinas no método de estaquia das roseiras contribui para`,
    alternatives: [
      { id: 'A', type: 'text', value: `floração da planta.` },
      { id: 'B', type: 'text', value: `produção de gemas laterais.` },
      { id: 'C', type: 'text', value: `formação de folhas maiores.` },
      { id: 'D', type: 'text', value: `formação de raízes adventícias.` },
      { id: 'E', type: 'text', value: `produção de compostos energéticos.` },

    ],
    correct: 'D',
    explanation: `Auxinas promovem o crescimento das raízes, facilitando dessa forma a sobrevivência e o desenvolvimento das estacas das roseiras.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 124,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O emprego de células de combustível a hidrogênio pode ser uma tecnologia adequada ao transporte automotivo.
O quadro apresenta características de cinco tecnologias mais proeminentes de células de combustível.
Tipo de célula de combustível — Temperatura operacional (°C) — Eletrólito
AFC — 90 - 100 — Hidróxido de potássio aquoso
MSFC — 600 - 1000 — Carbonatos de lítio, sódio e/ou potássio fundidos
PEM — 60 - 100 — Ácido poliperfluorossulfônico sólido
PAFC — 175 - 200 — Ácido fosfórico líquido
SOFC — 600 - 1000 — Óxido de zircônio(IV) sólido
Testes operacionais com esses tipos de células têm indicado que as melhores alternativas para veículos são as
que operam em baixos níveis de energia térmica, são formadas por membranas de eletrólitos poliméricos e ocorrem
em meio ácido.
THOMAS, S; ZALBOWITZ, M. Full cells: green power. Los Alamos National Laboratory. Los Alamos, NM, 1999 (adaptado).
A tecnologia testada mais adequada para o emprego em veículos automotivos é a célula de combustível`,
    images: ['/enem/2021/images/enem_2021_d2_q124.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `AFC.` },
      { id: 'B', type: 'text', value: `MSFC.` },
      { id: 'C', type: 'text', value: `PEM.` },
      { id: 'D', type: 'text', value: `PAFC.` },
      { id: 'E', type: 'text', value: `SOFC.` },

    ],
    correct: 'C',
    explanation: `O enunciado informa que as melhores células para serem utilizadas nos veículos são as que operam em baixos níveis de energia térmica (temperatura baixa), apresentam uma membrana de eletrólitos poliméricos e ocorrem em meio ácido. Sendo assim, olhando para o PEM, podemos encontrar um temperatura baixa (60 °C &#8211; 100 °C), uma membrana polimérica formada pelo ácido poliperfluorossulfônico sólido e como uma das semirreações nos eletrodos é H₂ → 2 H+ + 2e-, temos um meio ácido.`,
    subject: ['qui'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias']
  },
  {
    id: 125,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Considere a tirinha, na situação em que a temperatura do ambiente é inferior à temperatura corporal dos personagens.
— Tá quente hoje, né? — É mesmo.
— Mas o que me incomoda mesmo é a umidade.
— Você não gosta de umidade? — Não mesmo.
— Então, salta correndo.
WATTERSON, B. Disponível em: https://novaescola.org.br. Acesso em: 11 ago. 2014.
O incômodo mencionado pelo personagem da tirinha deve-se ao fato de que, em dias úmidos,`,
    images: ['/enem/2021/images/enem_2021_d2_q125.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a temperatura do vapor-d'água presente no ar é alta.` },
      { id: 'B', type: 'text', value: `o suor apresenta maior dificuldade para evaporar do corpo.` },
      { id: 'C', type: 'text', value: `a taxa de absorção de radiação pelo corpo torna-se maior.` },
      { id: 'D', type: 'text', value: `o ar torna-se mau condutor e dificulta o processo de liberação de calor.` },
      { id: 'E', type: 'text', value: `o vapor-d'água presente no ar condensa-se ao entrar em contato com a pele.` },

    ],
    correct: 'B',
    explanation: `A questão tratava da umidade relativa do ar, que quanto maior for, mais difícil para a água sofrer evaporação. Portanto, em dias úmidos, é difícil para o suor da pele de uma pessoa sofrer evaporação. &nbsp;`,
    subject: ['fis'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias']
  },
  {
    id: 126,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Um garoto precisa montar um circuito que acenda
três lâmpadas de cores diferentes, uma de cada vez.
Ele dispõe das lâmpadas, de fios, uma bateria e dois
interruptores, como ilustrado, junto com seu símbolo de
três pontos. Quando esse interruptor fecha AB, abre BC
e vice-versa.
O garoto fez cinco circuitos elétricos usando os dois
interruptores, mas apenas um satisfaz a sua necessidade.
Esse circuito é representado por`,
    images: ['/enem/2021/images/enem_2021_d2_q126.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'D',
    explanation: `Nesta questão, o candidato deveria perceber uma maneira de fazer os interruptores conectarem uma lâmpada de cada vez.`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias']
  },
  {
    id: 127,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Estudo aponta que a extinção de preguiças-gigantes,
cuja base da dieta eram frutos e sementes, provocou
impactos consideráveis na vegetação do Pantanal
brasileiro. A flora, embora não tenha desaparecido,
tornou-se menos abundante que no passado, além de
ocupar áreas mais restritas.
BICUDO, F. Jardineiros da pesada. Ecologia. Pesquisa Fapesp, ed. 231, maio 2015 (adaptado).
O evento descrito com a flora ocorreu em razão da redução`,
    alternatives: [
      { id: 'A', type: 'text', value: `da produção de flores.` },
      { id: 'B', type: 'text', value: `do tamanho das plantas.` },
      { id: 'C', type: 'text', value: `de fatores de disseminação das sementes.` },
      { id: 'D', type: 'text', value: `da quantidade de sementes por fruto.` },
      { id: 'E', type: 'text', value: `dos hábitats disponíveis para as plantas.` },

    ],
    correct: 'C',
    explanation: `A extinção da preguiça-gigante, animal herbívoro que se alimenta de frutos e sementes, reduziu sua dispersão, o que consequentemente limitou a área de distribuição das plantas em questão.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 128,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Carros elétricos estão cada vez mais baratos,
no entanto, os órgãos governamentais e a indústria se
preocupam com o tempo de recarga das baterias, que é
muito mais lento quando comparado ao tempo gasto para
encher o tanque de combustível. Portanto, os usuários
de transporte individual precisam se conscientizar dos
ganhos ambientais dessa mudança e planejar com
antecedência seus percursos, pensando em pausas
necessárias para recargas.
Após realizar um percurso de 110 km, um motorista
pretende recarregar as baterias de seu carro elétrico, que
tem um desempenho médio de 5,0 km/kWh, usando um
carregador ideal que opera a uma tensão de 220 V e é
percorrido por uma corrente de 20 A.
Quantas horas são necessárias para recarregar a energia
utilizada nesse percurso?`,
    alternatives: [
      { id: 'A', type: 'text', value: `0,005` },
      { id: 'B', type: 'text', value: `0,125` },
      { id: 'C', type: 'text', value: `2,5` },
      { id: 'D', type: 'text', value: `5,0` },
      { id: 'E', type: 'text', value: `8,0` },

    ],
    correct: 'D',
    explanation: `P = i . U P = 4.400 W = 4,4kW Como o carro tem um consumo médio de 5 km/kW.h e ele desloca 110 km, a bateria precisa armazenar uma energia de: E = 110 / 5 = 22 kW.h &nbsp; Portanto: E = P . t 22 = 4,4 . t t = 5 h`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 129,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Nas angiospermas, além da fertilização da oosfera,
existe uma segunda fertilização que resulta num tecido
triploide.
Essa segunda fertilização foi importante evolutivamente,
pois viabilizou a formação de um tecido de`,
    alternatives: [
      { id: 'A', type: 'text', value: `nutrição para o fruto.` },
      { id: 'B', type: 'text', value: `reserva para o embrião.` },
      { id: 'C', type: 'text', value: `revestimento para a semente.` },
      { id: 'D', type: 'text', value: `proteção para o megagametófito.` },
      { id: 'E', type: 'text', value: `vascularização para a planta jovem.` },
    ],
    correct: 'B',
    explanation: `O endosperma triplóide acumula reservas que, juntamente com os cotilédones, garantem o início do desenvolvimento do embrião no processo de germinação da semente.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 130,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Com o objetivo de proporcionar aroma e sabor a
diversos alimentos, a indústria alimentícia se utiliza de
flavorizantes. Em geral, essas substâncias são ésteres,
como as apresentadas no quadro.
Nome — Fórmula — Aroma
Benzoato de metila — C₆H₅CO₂CH₃ — Kiwi
Acetato de isoamila — CH₃CO₂(CH₂)₂CH(CH₃)₂ — Banana
Acetato de benzila — CH₃CO₂CH₂C₆H₅ — Pêssego
Propanoato de isobutila — CH₃CH₂CO₂CH₂CH(CH₃)₂ — Rum
Antranilato de metila — C₆H₄NH₂CO₂CH₃ — Uva
O aroma do flavorizante derivado do ácido etanoico e que
apresenta cadeia carbônica saturada é de`,
    images: ['/enem/2021/images/enem_2021_d2_q130.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `kiwi.` },
      { id: 'B', type: 'text', value: `banana.` },
      { id: 'C', type: 'text', value: `pêssego.` },
      { id: 'D', type: 'text', value: `rum.` },
      { id: 'E', type: 'text', value: `uva.` },

    ],
    correct: 'B',
    explanation: `A reação de esterificação é quando nós temos um ácido carboxílico reagindo com um álcool e produzindo éster mais água. O problema quer a reação do ácido etanóico com um álcool saturado (apenas ligações simples). Partindo do ácido etanoico nós teremos dois carbonos ligados à carbonila, sendo assim, as opções são acetato de isoamila ou acetato de benzila. Como o comando fala que apresenta uma cadeia saturada, o éster que satisfaz essa condição é o acetato de isoamila.`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 131,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O eletrocardiograma é um exame cardíaco que mede
a intensidade dos sinais elétricos advindos do coração.
A imagem apresenta o resultado típico obtido em um
paciente saudável e a intensidade do sinal (VEC) em
função do tempo.
De acordo com o eletrocardiograma apresentado, qual
foi o número de batimentos cardíacos por minuto desse
paciente durante o exame?`,
    alternatives: [
      { id: 'A', type: 'text', value: `30` },
      { id: 'B', type: 'text', value: `60` },
      { id: 'C', type: 'text', value: `100` },
      { id: 'D', type: 'text', value: `120` },
      { id: 'E', type: 'text', value: `180` },
    ],
    correct: 'B',
    explanation: `O gráfico mostrava que cada quadradinho possuía um tempo de 0,2 s. Como tinham 5 quadradinhos em uma oscilação completa, T = 5 . 0,2 = 1s. Como f = 1/T, f = 1 Hz. Para a conversão para rpm (que no caso seria batimentos por minuto), é necessário multiplicar o valor por 60, portanto: f = 60 rpm (ou batimentos por minuto).`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 132,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `A deficiência de lipase ácida lisossômica é uma doença
hereditária associada a um gene do cromossomo 10.
Os pais dos pacientes podem não saber que são portadores
dos genes da doença até o nascimento do primeiro filho
afetado. Quando ambos os progenitores são portadores,
existe uma chance, em quatro, de que seu bebê possa
nascer com essa doença.
ANDERSON, R. A. et al. In: Situ Localization of the Genetic Locus Encoding the Lysosomal
Acid Lipase/Cholesteryl Esterase (LIPA) Deficient in Wolman Disease to Chromosome
10q23.2-q23.3. Genomics, n. 1, jan. 1993 (adaptado).
Essa é uma doença hereditária de caráter`,
    alternatives: [
      { id: 'A', type: 'text', value: `recessivo.` },
      { id: 'B', type: 'text', value: `dominante.` },
      { id: 'C', type: 'text', value: `codominante.` },
      { id: 'D', type: 'text', value: `poligênico.` },
      { id: 'E', type: 'text', value: `polialélico.` },

    ],
    correct: 'A',
    explanation: `Como pais sadios apresentam um filho afetado, a deficiência é obrigatoriamente determinada por alelo recessivo.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias']
  },
  {
    id: 133,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O quadro lista alguns dispositivos eletrônicos que
estão presentes no dia a dia, bem como a faixa de força
eletromotriz necessária ao seu funcionamento.
Considere que uma bateria é construída pela
associação em série de três pilhas de lítio-iodo, nas
condições-padrão, conforme as semiequações de
redução apresentadas.
I2 + 2 e− → 2 I−   E° = +0,54 V
Li+ + e− → Li   E° = −3,05 V
Essa bateria é adequada para o funcionamento de qual
dispositivo eletrônico?`,
    images: ['/enem/2021/images/enem_2021_d2_q133.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I` },
      { id: 'B', type: 'text', value: `II` },
      { id: 'C', type: 'text', value: `III` },
      { id: 'D', type: 'text', value: `IV` },
      { id: 'E', type: 'text', value: `V` },

    ],
    correct: 'D',
    explanation: `Temos como dado do problema duas semirreações de redução. &nbsp; I2 + 2 e- → 2 I- E° = + 0,54 V Li+ e- → Li E° = &#8211; 3,05 V &nbsp; Sendo assim, a ddp para essa pilha pode ser calculada por: &nbsp; ddp = E°red maior &#8211; E°red menor dpp = 0,54 &#8211; (- 3,05) ddp = + 3,59 V &nbsp; Como nós temos uma bateria formada por três pilhas em série, a ddp gerada será 3 x 3,59 V = 10,77 V. &nbsp; Portanto ela será adequada para o carrinho de controle remoto que está na faixa de 10,5 até 10,9.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 134,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O alcoolômetro Gay Lussac e um instrumento destinado a medir o teor de álcool, em porcentagem de volume (v/v), de soluções de água e álcool na faixa de O “GL a 100 “GL, com divisões de 0,1 “GL. A concepção do alcoolômetro se baseia no principio de flutuabilidade de Arquimedes, semelhante ao funcionamento de um densímetro. A escala do instrumento é aferida a 20 “ºC, sendo necessária a correção da medida, caso a temperatura da solução não esteja na temperatura de aferição. É apresentada parte da tabela de correção de um alcoolômetro, com a temperatura. Tabela de correção do alcoolômetro com temperatura 20 *C Leitura da temperatura (*C) Manual alcoolômetro Gay Lussac. Disponível em: www.incoterm.com.br. Acesso em: 4 dez. 2018 (adaptado). É necessária a correção da medida do instrumento, pois um aumento na temperatura promove o(a)`,
    images: ['/enem/2021/images/enem_2021_d2_q134.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `aumento da dissociação da água.` },
      { id: 'B', type: 'text', value: `aumento da densidade da água e do álcool.` },
      { id: 'C', type: 'text', value: `mudança do volume dos materiais por dilatação.` },
      { id: 'D', type: 'text', value: `aumento da concentração de álcool durante a medida.` },
      { id: 'E', type: 'text', value: `alteração das propriedades químicas da mistura álcool e água.` },
    ],
    correct: 'C',
    explanation: `Essa correção é necessária porque à medida que a temperatura aumenta, o volume do material aumenta por dilatação, fazendo com que a concentração de volume diminua com esse aumento. Na tabela é possível que a porcentagem está diminuindo à medida que a temperatura aumenta.`,
    subject: ['fis'],
    topics: ['Geometria espacial', 'Questões aleatórias']
  },
  {
    id: 135,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O Prêmio Nobel de Química de 2000 deveu-se
à descoberta e ao desenvolvimento de polímeros
condutores. Esses materiais têm ampla aplicação em
novos dispositivos eletroluminescentes (LEDs), células
fotovoltaicas etc. Uma propriedade-chave de um polímero
condutor é a presença de ligações duplas conjugadas ao
longo da cadeia principal do polímero.
ROCHA FILHO, R. C. Polímeros condutores: descoberta e aplicações.
Química Nova na Escola, n. 12, 2000 (adaptado).
Um exemplo desse polímero é representado pela estrutura`,
    images: ['/enem/2021/images/enem_2021_d2_q135_A.jpg', '/enem/2021/images/enem_2021_d2_q135_B.jpg', '/enem/2021/images/enem_2021_d2_q135_C.jpg', '/enem/2021/images/enem_2021_d2_q135_D.jpg', '/enem/2021/images/enem_2021_d2_q135_E.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'D',
    explanation: `O comando da questão quer um polímero que apresenta em sua estrutura ligações duplas conjugadas. Sendo assim, precisamos de uma ligação dupla seguida de uma ligação simples e assim por diante. Entre as opções, o polímero do item D apresenta uma ligação dupla entre dois carbonos. Quando nós olharmos para o polímero completo, teremos uma dupla seguida de uma simples. &nbsp;`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 136,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Um segmento de reta está dividido em duas partes
na proporção áurea quando o todo está para uma das
partes na mesma razão em que essa parte está para a
outra. Essa constante de proporcionalidade é comumente
representada pela letra grega φ, e seu valor é dado pela
solução positiva da equação φ² = φ + 1.
Assim como a potência φ², as potências superiores
de φ podem ser expressas da forma aφ + b, em que a e b
são inteiros positivos, como apresentado no quadro.
φ² = φ + 1   φ³ = 2φ + 1   φ⁴ = 3φ + 2   φ⁵ = 5φ + 3   φ⁶ = 8φ + 5   φ⁷ = …
A potência φ⁷, escrita na forma aφ + b (a e b são inteiros
positivos), é`,
    images: ['/enem/2021/images/enem_2021_d2_q136.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `5φ + 3` },
      { id: 'B', type: 'text', value: `7φ + 2` },
      { id: 'C', type: 'text', value: `9φ + 6` },
      { id: 'D', type: 'text', value: `11φ + 7` },
      { id: 'E', type: 'text', value: `13φ + 8` },

    ],
    correct: 'E',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 137,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O Atomium, representado na imagem, é um
dos principais pontos turísticos de Bruxelas. Ele foi
construído em 1958 para a primeira grande exposição
mundial depois da Segunda Guerra Mundial, a Feira
Mundial de Bruxelas.
Trata-se de uma estrutura metálica construída no
formato de um cubo. Essa estrutura está apoiada por um
dos vértices sobre uma base paralela ao plano do solo,
e a diagonal do cubo, contendo esse vértice, é ortogonal
ao plano da base. Centradas nos vértices desse cubo,
foram construídas oito esferas metálicas, e uma outra
esfera foi construída centrada no ponto de interseção das
diagonais do cubo. As oito esferas sobre os vértices são
interligadas segundo suas arestas, e a esfera central se
conecta a elas pelas diagonais do cubo.
Todas essas interligações são feitas por tubos
cilíndricos que possuem escadas em seu interior,
permitindo o deslocamento de pessoas pela parte
interna da estrutura. Na diagonal ortogonal à base, o
deslocamento é feito por um elevador, que permite o
deslocamento entre as esferas da base e a esfera do
ponto mais alto, passando pela esfera central.
Considere um visitante que se deslocou pelo interior
do Atomium sempre em linha reta e seguindo o menor
trajeto entre dois vértices, passando por todas as arestas
e todas as diagonais do cubo.
A projeção ortogonal sobre o plano do solo do trajeto
percorrido por esse visitante é representada por`,
    images: ['/enem/2021/images/enem_2021_d2_q137.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'E',
    explanation: ``,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias']
  },
  {
    id: 138,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `A Copa do Brasil teve, até a edição de 2018, 15 times diferentes como campeões da competição, conforme
apresentado na imagem. Suponha que, como homenagem aos times campeões, a Confederação Brasileira de Futebol
(CBF) pretenda colocar um painel na sua sede. Esse painel teria 6 linhas e, em cada uma delas, 5 placas, referentes
a cada edição da competição, com o nome do time vencedor, o brasão e o ano do título. O painel deve ser fabricado
de modo que a primeira linha só tenha clubes gaúchos (Internacional, Grêmio e Juventude); a segunda, apenas times
cariocas (Flamengo, Vasco e Fluminense); a terceira, somente times mineiros (Cruzeiro e Atlético Mineiro); a quarta,
exclusivamente clubes paulistas (Corinthians, Palmeiras, Santos, Paulista FC, Santo André), e as duas últimas sem
nenhuma restrição.
Disponível em: http://campeoesdofutebol.com.br. Acesso em: 1 nov. 2018 (adaptado).
Qual expressão determina a quantidade de painéis diferentes que a CBF poderá montar?`,
    images: ['/enem/2021/images/enem_2021_d2_q138.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `(7!/5!) . (5!/3!) . (7!/6!) . (9!/(3!.3!)) . 10!` },
      { id: 'B', type: 'text', value: `7! . 5! . 7! . 9! . 10!` },
      { id: 'C', type: 'text', value: `30!` },
      { id: 'D', type: 'text', value: `(7!/(5!.5!)) . (7!/(5!.2!)) . (9!/(5!.4!))` },
      { id: 'E', type: 'text', value: `(9!/3!) . 5! . (7!/2!) . (9!/4!) . 10!` },

    ],
    correct: 'A',
    annulled: true,
    explanation: `A questão foi anulada pela banca oficial.`,
    subject: ['mat'],
    topics: ['Genética', 'Questões aleatórias']
  },
  {
    id: 139,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Uma rede de hamburgueria tem três franquias em
cidades distintas. Visando incluir um novo tipo de lanche
no cardápio, o gerente de marketing da rede sugeriu que
fossem colocados à venda cinco novos tipos de lanche,
em edições especiais. Os lanches foram oferecidos pelo
mesmo período de tempo em todos os franqueados.
O tipo que apresentasse a maior média por franquia
seria incluído definitivamente no cardápio. Terminado o
período de experiência, a gerência recebeu um relatório
descrevendo as quantidades vendidas, em unidade, de
cada um dos cinco tipos de lanche nas três franquias.
Com base nessas informações, a gerência decidiu incluir
no cardápio o lanche de tipo`,
    images: ['/enem/2021/images/enem_2021_d2_q139.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },

    ],
    correct: 'E',
    explanation: ``,
    subject: ['mat'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 140,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Uma grande rede de supermercados adota um
sistema de avaliação dos faturamentos de suas filiais,
considerando a média de faturamento mensal em
milhão. A matriz da rede paga uma comissão para os
representantes dos supermercados que atingirem uma
média de faturamento mensal (M), conforme apresentado
no quadro.
Comissão — Média de faturamento mensal (M)
I — 1 ≤ M < 2
II — 2 ≤ M < 4
III — 4 ≤ M < 5
IV — 5 ≤ M < 6
V — M ≥ 6
Um supermercado da rede obteve os faturamentos
num dado ano, conforme apresentado no quadro.
Faturamento mensal (em milhão de real) — Quantidade de meses
3,5 — 3
2,5 — 2
5 — 2
3 — 4
7,5 — 1
Nas condições apresentadas, os representantes desse
supermercado avaliam que receberão, no ano seguinte,
a comissão de tipo`,
    images: ['/enem/2021/images/enem_2021_d2_q140.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },

    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 141,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Aplicativos que gerenciam serviços de hospedagem
têm ganhado espaço no Brasil e no mundo por oferecer
opções diferenciadas em termos de localização e valores
de hospedagem. Em um desses aplicativos, o preço P a
ser pago pela hospedagem é calculado considerando um
preço por diária d, acrescido de uma taxa fixa de limpeza L
e de uma taxa de serviço. Essa taxa de serviço é um valor
percentual s calculado sobre o valor pago pelo total das
diárias.
Nessa situação, o preço a ser pago ao aplicativo para uma
hospedagem de n diárias pode ser obtido pela expressão`,
    images: ['/enem/2021/images/enem_2021_d2_q141.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `P = d.n + L + d.n.s` },
      { id: 'B', type: 'text', value: `P = d.n + L + d.s` },
      { id: 'C', type: 'text', value: `P = d + L + s` },
      { id: 'D', type: 'text', value: `P = d.n.s + L` },
      { id: 'E', type: 'text', value: `P = d.n + L + s` },

    ],
    correct: 'A',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 142,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O organizador de uma competição de lançamento de
dardos pretende tornar o campeonato mais competitivo.
Pelas regras atuais da competição, numa rodada, o
jogador lança 3 dardos e pontua caso acerte pelo menos
um deles no alvo. O organizador considera que, em
média, os jogadores têm, em cada lançamento, 1/2 de
probabilidade de acertar um dardo no alvo.
A fim de tornar o jogo mais atrativo, planeja modificar
as regras de modo que a probabilidade de um jogador
pontuar em uma rodada seja igual ou superior a 9/10. Para
isso, decide aumentar a quantidade de dardos a serem
lançados em cada rodada.
Com base nos valores considerados pelo organizador da
competição, a quantidade mínima de dardos que devem
ser disponibilizados em uma rodada para tornar o jogo
mais atrativo é`,
    alternatives: [
      { id: 'A', type: 'text', value: `2.` },
      { id: 'B', type: 'text', value: `4.` },
      { id: 'C', type: 'text', value: `6.` },
      { id: 'D', type: 'text', value: `9.` },
      { id: 'E', type: 'text', value: `10.` },

    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Genética', 'Questões aleatórias']
  },
  {
    id: 143,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O gráfico apresenta o nível de ocupação dos cinco
reservatórios de água que abasteciam uma cidade em
2 de fevereiro de 2015.
Nessa data, o reservatório com o maior volume de água
era o`,
    images: ['/enem/2021/images/enem_2021_d2_q143.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },

    ],
    correct: 'D',
    explanation: `Calculando o volume de água em cada reservatório, o maior deles será o que tem maior volume de água: Reservatório I: 20% de 105 = 0,2 • 105 = 21 bilhões de litros Reservatório I: 30% de 100 = 0,3 • 100 = 30 bilhões de litros Reservatório III: 50% de 20 = 0,5 + 20 = 10 bilhões de litros Reservatório IV: 40% de 80 = 0,4 •80 = 32 bilhões de litros Reservatório V: 60% de 40 = 0,6 + 40 = 24 bilhões de litros Podemos observar que o reservatório IV tem maior volume de água.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias']
  },
  {
    id: 144,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Uma pessoa realizou uma pesquisa com alguns
alunos de uma escola, coletando suas idades, e organizou
esses dados no gráfico.
Idade (ano): 9 (frequência 6), 18 (frequência 12), 27 (frequência 9).
Qual é a média das idades, em ano, desses alunos?`,
    images: ['/enem/2021/images/enem_2021_d2_q144.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `9` },
      { id: 'B', type: 'text', value: `12` },
      { id: 'C', type: 'text', value: `18` },
      { id: 'D', type: 'text', value: `19` },
      { id: 'E', type: 'text', value: `27` },

    ],
    correct: 'D',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 145,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Em um estudo realizado pelo IBGE em quatro
estados e no Distrito Federal, com mais de 5 mil pessoas
com 10 anos ou mais, observou-se que a leitura ocupa,
em média, apenas seis minutos do dia de cada pessoa.
Na faixa de idade de 10 a 24 anos, a média diária é de
três minutos. No entanto, no grupo de idades entre
24 e 60 anos, o tempo médio diário dedicado à
leitura é de 5 minutos. Entre os mais velhos, com
60 anos ou mais, a média é de 12 minutos.
A quantidade de pessoas entrevistadas de cada faixa
de idade seguiu a distribuição percentual descrita no
quadro.
Faixa etária — Percentual de entrevistados
De 10 a 24 anos — x
Entre 24 e 60 anos — y
A partir de 60 anos — x
Disponível em: www.oglobo.globo.com. Acesso em: 16 ago. 2013 (adaptado).
Os valores de x e y do quadro são, respectivamente, iguais a`,
    images: ['/enem/2021/images/enem_2021_d2_q145.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `10 e 80.` },
      { id: 'B', type: 'text', value: `10 e 90.` },
      { id: 'C', type: 'text', value: `20 e 60.` },
      { id: 'D', type: 'text', value: `20 e 80.` },
      { id: 'E', type: 'text', value: `25 e 50.` },

    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 146,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Um zootecnista pretende testar se uma nova ração
para coelhos é mais eficiente do que a que ele vem
utilizando atualmente. A ração atual proporciona uma
massa média de 10 kg por coelho, com um desvio padrão
de 1 kg, alimentado com essa ração durante um período
de três meses.
O zootecnista selecionou uma amostra de coelhos e
os alimentou com a nova ração pelo mesmo período de
tempo. Ao final, anotou a massa de cada coelho, obtendo
um desvio padrão de 1,5 kg para a distribuição das
massas dos coelhos dessa amostra.
Para avaliar a eficiência dessa ração, ele utilizará
o coeficiente de variação (CV) que é uma medida de
dispersão definida por CV = s/x̄, em que s representa o
desvio padrão e x̄, a média das massas dos coelhos que
foram alimentados com uma determinada ração.
O zootecnista substituirá a ração que vinha utilizando
pela nova, caso o coeficiente de variação da distribuição
das massas dos coelhos que foram alimentados com a
nova ração for menor do que o coeficiente de variação
da distribuição das massas dos coelhos que foram
alimentados com a ração atual.
A substituição da ração ocorrerá se a média da distribuição
das massas dos coelhos da amostra, em quilograma, for
superior a`,
    alternatives: [
      { id: 'A', type: 'text', value: `5,0.` },
      { id: 'B', type: 'text', value: `9,5.` },
      { id: 'C', type: 'text', value: `10,0.` },
      { id: 'D', type: 'text', value: `10,5.` },
      { id: 'E', type: 'text', value: `15,0.` },

    ],
    correct: 'E',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 147,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `A Cifra de César é um exemplo de um método de codificação de mensagens usado por Júlio César para se
comunicar com seus generais.
No método, cada letra era trocada por uma letra que aparecia no alfabeto um número fixo de casas adiante (ou atrás)
de forma cíclica. A seguir temos um exemplo em que cada letra é substituída pela que vem três posições à frente.
Original — A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Codificado — D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
Para quebrar um código como esse, a análise de frequências das letras de um texto é uma ferramenta importante.
Uma análise do texto do romance O guarani, de José de Alencar, que é composto por 491 631 letras, gerou o
seguinte gráfico de frequências.
Disponível em: www.dominiopublico.gov.br. Acesso em: 7 fev. 2015.
Após codificar esse texto com a regra do exemplo fornecido, faz-se nova análise de frequência no texto codificado.
As quatro letras mais frequentes, em ordem decrescente de frequência, do texto codificado são`,
    images: ['/enem/2021/images/enem_2021_d2_q147_1.jpg', '/enem/2021/images/enem_2021_d2_q147_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A, E, O e S.` },
      { id: 'B', type: 'text', value: `D, E, F e G.` },
      { id: 'C', type: 'text', value: `D, H, R e V.` },
      { id: 'D', type: 'text', value: `R, L, B e X.` },
      { id: 'E', type: 'text', value: `X, B, L e P.` },

    ],
    correct: 'C',
    explanation: `As letras com maior frequência são A, E, O e S que codificadas ficam D, H, R e V.`,
    subject: ['mat'],
    topics: ['Zoologia', 'Questões aleatórias']
  },
  {
    id: 148,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O quadro apresenta o número de terremotos de magnitude maior ou igual a 7, na escala Richter, ocorridos
em nosso planeta nos anos de 2000 a 2011.
Ano: 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011
Terremotos: 15, 16, 13, 15, 16, 11, 11, 18, 12, 17, 24, 20
Disponível em: https://earthquake.usgs.gov/earthquakes/browse/m7-world.php. Acesso em: 13 ago. 2012 (adaptado).
Um pesquisador acredita que a mediana representa bem o número anual típico de terremotos em um período.
Segundo esse pesquisador, o número anual típico de terremotos de magnitude maior ou igual a 7 é`,
    images: ['/enem/2021/images/enem_2021_d2_q148.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `11.` },
      { id: 'B', type: 'text', value: `15.` },
      { id: 'C', type: 'text', value: `15,5.` },
      { id: 'D', type: 'text', value: `15,7.` },
      { id: 'E', type: 'text', value: `17,5.` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias']
  },
  {
    id: 149,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `A receita R de uma empresa ao final de um mes e o
dinheiro captado com a venda de mercadorias ou com a
prestação de serviços nesse mês, e a despesa D é todo o
dinheiro utilizado para pagamento de salários, contas de
água e luz, impostos, entre outros. O lucro mensal obtido
ao final do mes e a diferença entre a receita e a despesa
registradas no mes. O gráfico apresenta as receitas e
despesas, em milhão de real, de uma empresa ao final
dos cinco primeiros meses de um dado ano.
Receitas e despesas
janeiro fevereiro março abril maio
Receita Despesa - = =
A previsão para os próximos meses é que o lucro mensal
não seja inferior ao maior lucro obtido até o mês de maio.
Nessas condições, o lucro mensal para os próximos
meses deve ser maior ou igual ao do mês de`,
    images: ['/enem/2021/images/enem_2021_d2_q149.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `janeiro.` },
      { id: 'B', type: 'text', value: `fevereiro.` },
      { id: 'C', type: 'text', value: `março.` },
      { id: 'D', type: 'text', value: `abril.` },
      { id: 'E', type: 'text', value: `maio.` },

    ],
    correct: 'B',
    explanation: `O lucro é calculado por lucro = receita &#8211; custo Analisando o gráfico, podemos observar que o maior lucro foi em fevereiro lucro de fevereiro = 20 &#8211; 10 = 10 Portanto, o lucro mensal para os próximos meses deve ser maior ou igual mês de Fevereiro.`,
    subject: ['mat'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 150,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `A depressão caracteriza-se por um desequilíbrio na
química cerebral. Os neurônios de um deprimido não
respondem bem aos estímulos dos neurotransmissores.
Os remédios que combatem a depressão têm o objetivo de
restabelecer a química cerebral. Com o aumento gradativo
de casos de depressão, a venda desses medicamentos
está em crescente evolução, conforme ilustra o gráfico.
Veja, 10 fev. 2010 (adaptado).
No período de 2005 a 2009, o aumento percentual no
volume de vendas foi de`,
    images: ['/enem/2021/images/enem_2021_d2_q150.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `45,4.` },
      { id: 'B', type: 'text', value: `54,5.` },
      { id: 'C', type: 'text', value: `120.` },
      { id: 'D', type: 'text', value: `220.` },
      { id: 'E', type: 'text', value: `283,2.` },

    ],
    correct: 'C',
    explanation: ``,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias']
  },
  {
    id: 151,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Um casal está planejando comprar um apartamento
de dois quartos num bairro de uma cidade e consultou
a página de uma corretora de imóveis, encontrando
105 apartamentos de dois quartos à venda no bairro
desejado. Eles usaram um aplicativo da corretora para
gerar a distribuição dos preços do conjunto de imóveis
selecionados.
O gráfico ilustra a distribuição de frequências dos
preços de venda dos apartamentos dessa lista (em
mil reais), no qual as faixas de preço são dadas por
]300, 400], ]400, 500], ]500, 600], ]600, 700], ]700, 800],
]800, 900], ]900, 1 000], ]1 000, 1 100], ]1 100, 1 200] e
]1 200, 1 300].
A mesma corretora anuncia que cerca de 50% dos
apartamentos de dois quartos nesse bairro, publicados
em sua página, têm preço de venda inferior a 550 mil reais.
No entanto, o casal achou que essa última informação
não era compatível com o gráfico obtido.
Com base no gráfico obtido, o menor preço, p (em mil reais),
para o qual pelo menos 50% dos apartamentos apresenta
preço inferior a p é`,
    images: ['/enem/2021/images/enem_2021_d2_q151.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `600.` },
      { id: 'B', type: 'text', value: `700.` },
      { id: 'C', type: 'text', value: `800.` },
      { id: 'D', type: 'text', value: `900.` },
      { id: 'E', type: 'text', value: `1 000.` },

    ],
    correct: 'C',
    explanation: `Cada retângulo tem base 100. Somando as alturas dos retângulos, temos um total de 105. Logo, a área total dos retângulos é 100 &#8211; 105 = 10500. A metade desse valor é 5.250. Quando tomamos p = 600, temos que a área dos retângulos até a marca de 600 é: 100 + 5 + 100 • 10 + 100 -5 &#8211; 2.000. Ou seja, não nos serve, pois 2.000 &lt; 5.250. Quando tomamos p &#8211; 700, temos que a área dos retângulos até a marca de 700 é: 100 &#8211; 5 + 100 • 10 + 100 &#8211; 5 + 15 • 100 &#8211; 3.500. Ou seja, não nos serve, pois 3.500 &lt; 5.250. Tomando p = 800, temos que as áreas dos retângulos seria 100 &#8211; 5 + 100 &#8211; 10 + 100 -5 + 15 100 + 20 &#8211; 100 = 5.500. Esse valor é suficiente, pois 5.500 &gt; 5.250`,
    subject: ['mat'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 152,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Para a comunicação entre dois navios é utilizado
um sistema de codificação com base em valores
numéricos. Para isso, são consideradas as operações
triângulo Δ e estrela ∗, definidas sobre o conjunto dos
números reais por xΔy = x² + xy − y² e x∗y = xy + x.
O navio que deseja enviar uma mensagem deve
fornecer um valor de entrada b, que irá gerar um valor
de saída, a ser enviado ao navio receptor, dado pela
soma das duas maiores soluções da equação
(aΔb) ∗ (bΔa) = 0. Cada valor possível de entrada e saída
representa uma mensagem diferente já conhecida
pelos dois navios.
Um navio deseja enviar ao outro a mensagem
“ATENÇÃO!”. Para isso, deve utilizar o valor de entrada
b = 1.
Dessa forma, o valor recebido pelo navio receptor será`,
    alternatives: [
      { id: 'A', type: 'text', value: `√5` },
      { id: 'B', type: 'text', value: `√3` },
      { id: 'C', type: 'text', value: `√1` },
      { id: 'D', type: 'text', value: `(−1 + √5) / 2` },
      { id: 'E', type: 'text', value: `(3 + √5) / 2` },

    ],
    correct: 'E',
    explanation: `Queremos saber a soma das duas maiores soluções da equação (a b)*(b a) = 0 Achando a b = a² + ab &#8211; b² e b a = b² + ab &#8211; a² &nbsp; Então, (a b)*(b a) = 0 -&gt; (a b)(b a)+a b (a² + ab &#8211; b²)(b² + ab &#8211; a²) + a² + ab &#8211; b² &nbsp; Como b = 1, substituindo (a² + a &#8211; 1)(1 + a &#8211; a²) + (a² + a &#8211; 1) = 0 (a² + a &#8211; 1)(1 + a &#8211; a²+ 1) = 0 -&gt; (a² + a &#8211; 1)(a &#8211; a² + 2) = 0 &nbsp; Para esse produto ser igual a zero, então (a² + a &#8211; 1) = 0 Teremos que e &nbsp; Separando na soma e na subtração: Podemos observar que as duas maiores raízes são 2 e &nbsp;`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 153,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Um parque temático brasileiro construiu uma réplica em
miniatura do castelo de Liechtenstein. O castelo original,
representado na imagem, está situado na Alemanha e foi
reconstruído entre os anos de 1840 e 1842, após duas
destruigdes causadas por guerras.
O castelo possui uma ponte de 38,4 m de comprimento
e 1,68 m de largura. O artesão que trabalhou para o
parque produziu a réplica do castelo, em escala. Nessa
obra, as medidas do comprimento e da largura da ponte
eram, respectivamente, 160 cm e 7 cm.
A escala utilizada para fazer a réplica é`,
    images: ['/enem/2021/images/enem_2021_d2_q153.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 : 576` },
      { id: 'B', type: 'text', value: `1 : 240` },
      { id: 'C', type: 'text', value: `1 : 24` },
      { id: 'D', type: 'text', value: `1 : 4,2` },
      { id: 'E', type: 'text', value: `1 : 2,4` },

    ],
    correct: 'C',
    explanation: `A escala é a razão entre a distância na representação e na realidade, em centímetros. Como 38,4m = 3840. Dessa forma, A escala 1:24 é a mostrada em C.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias']
  },
  {
    id: 154,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `A demografia médica é o estudo da população de
médicos no Brasil nos aspectos quantitativo e qualitativo,
sendo um dos seus objetivos fazer projeções sobre
a necessidade da formação de novos médicos. Um
desses estudos gerou um conjunto de dados que aborda
a evolução do número de médicos e da população
brasileira por várias décadas. O quadro apresenta parte
desses dados.
Ano: 1990 — Médicos: 219 000 — População brasileira (em milhar): 147 000
Ano: 2000 — Médicos: 292 000 — População brasileira (em milhar): 170 000
Ano: 2010 — Médicos: 365 000 — População brasileira (em milhar): 191 000
Segundo uma projeção estatística, a variação do
número de médicos e o da população brasileira de 2010
para 2020 será a média entre a variação de 1990 para
2000 e a de 2000 para 2010. Com o resultado dessa
projeção, determina-se o número de médicos por mil
habitantes no ano de 2020.
Disponível em: www.cremesp.org.br. Acesso em: 24 jun. 2015 (adaptado).
O número, com duas casas na parte decimal, mais
próximo do número de médicos por mil habitantes no ano
de 2020 seria de`,
    images: ['/enem/2021/images/enem_2021_d2_q154.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0,17.` },
      { id: 'B', type: 'text', value: `0,49.` },
      { id: 'C', type: 'text', value: `1,71.` },
      { id: 'D', type: 'text', value: `2,06.` },
      { id: 'E', type: 'text', value: `3,32.` },

    ],
    correct: 'D',
    explanation: ``,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias']
  },
  {
    id: 155,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Um atleta produz sua própria refeição com custo fixo d
batata-doce e uma hortaliça. Atualmente, os preços dos pr
refeição rango (kg)
R$ 12,50
Em relação a esses preços, haverá um aumento de |
preços não serão alterados. O atleta deseja manter o cus
Portanto, terá que reduzir a quantidade de frango.
Qual deve ser a redução percentual da quantidade de fra`,
    images: ['/enem/2021/images/enem_2021_d2_q155.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `125` },
      { id: 'B', type: 'text', value: `28,0` },
      { id: 'C', type: 'text', value: `30,0` },
      { id: 'D', type: 'text', value: `50,0` },
      { id: 'E', type: 'text', value: `70,0` },
    ],
    correct: 'C',
    explanation: `50% no preço do quilograma de batata-doce: 5 + 2,50 = R$7,50. 7,50 -&gt; 1000 x -&gt; 600 x = 4,50 R$4,50 de Batata doce mais R$2,00 de hortaliça = R$6,50 Sobrando R$3,50 para o frango. &nbsp;`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 156,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Uma mola é solta da posição distendida conforme a figura. A figura à direita representa o gráfico da posição P (em cm)
da massa m em função do tempo t (em segundo) em um sistema de coordenadas cartesianas. Esse movimento periódico
é descrito por uma expressão do tipo P(t) = ±A cos (ωt) ou P(t) = ±A sen (ωt), em que A > 0 é a amplitude de deslocamento
máximo e ω é a frequência, que se relaciona com o período T pela fórmula ω = 2π/T.
Considere a ausência de quaisquer forças dissipativas.
A expressão algébrica que representa as posições P(t) da massa m, ao longo do tempo, no gráfico, é`,
    images: ['/enem/2021/images/enem_2021_d2_q156.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `−3 cos (2t)` },
      { id: 'B', type: 'text', value: `−3 sen (2t)` },
      { id: 'C', type: 'text', value: `3 cos (2t)` },
      { id: 'D', type: 'text', value: `−6 cos (2t)` },
      { id: 'E', type: 'text', value: `6 sen (2t)` },
    ],
    correct: 'A',
    explanation: `O período da função é . Logo, metade de 2 . Isso implica em dizer que -&gt; T = 2. O ponto (0, -3) pertence à função. Isso implica em dizer que, sendo a função do tipo cossenóide, temos que Acos (2 . 0) = -3 -&gt; A . 1 = -3 -&gt; A = -3. Assim, a função é P(t) = -3cos (2t).`,
    subject: ['mat'],
    topics: ['Cinemática', 'Questões aleatórias']
  },
  {
    id: 157,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Uma construtora, pretendendo investir na construção
de imóveis em uma metrópole com cinco grandes
regiões, fez uma pesquisa sobre a quantidade de famílias
que mudaram de uma região para outra, de modo a
determinar qual região foi o destino do maior fluxo de
famílias, sem levar em consideração o número de famílias
que deixaram a região. Os valores da pesquisa estão
dispostos em uma matriz A = [aij], i, j ∈ {1, 2, 3, 4, 5},
em que o elemento aij corresponde ao total de famílias
(em dezena) que se mudaram da região i para a região j
durante um certo período, e o elemento aii é considerado
nulo, uma vez que somente são consideradas mudanças
entre regiões distintas. A seguir, está apresentada a
matriz com os dados da pesquisa.
Qual região foi selecionada para o investimento da
construtora?`,
    images: ['/enem/2021/images/enem_2021_d2_q157.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `5` },

    ],
    correct: 'E',
    explanation: `Para essa questão, devemos somar os valores em cada coluna e o maior valor será a região selecionada, pois em , o j (coluna) representa o número das regiões. &nbsp; &nbsp; Coluna 1: 0+0+20+10+10=40 Coluna 2: 40+0+20+1+20=80 Coluna 3: 20+60+0+20=100 Coluna 4: 20+20+30+40=100 Coluna 5: 50+30+0+40+0=120 Portanto, como na coluna 5 a soma deu 120, então ela é a região escolhida, pois foi a região que foi o destino do maior fluxo de famílias. &nbsp;`,
    subject: ['mat'],
    topics: ['Matrizes e determinantes', 'Questões aleatórias']
  },
  {
    id: 158,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Para realizar um voo entre duas cidades que distam
2 000 km uma da outra, uma companhia aérea utilizava
um modelo de aeronave A, capaz de transportar até
200 passageiros. Quando uma dessas aeronaves está
lotada de passageiros, o consumo de combustível
é de 0,02 litro por quilômetro e por passageiro. Essa
companhia resolveu trocar o modelo de aeronave A
pelo modelo de aeronave B, que é capaz de transportar
10% de passageiros a mais do que o modelo A, mas
consumindo 10% menos combustível por quilômetro e
por passageiro.
A quantidade de combustível consumida pelo modelo
de aeronave B, em relação à do modelo de aeronave A,
em um voo lotado entre as duas cidades, é`,
    alternatives: [
      { id: 'A', type: 'text', value: `10% menor.` },
      { id: 'B', type: 'text', value: `1% menor.` },
      { id: 'C', type: 'text', value: `igual.` },
      { id: 'D', type: 'text', value: `1% maior.` },
      { id: 'E', type: 'text', value: `11% maior.` },

    ],
    correct: 'B',
    explanation: `O avião A leva 200 passageiros e seu consumo é de 0,02 litros por passageiro por quilômetro. Assim, consome-se 2000 . 200 . 0,02 = 8.000 L. O avião B leva 200 . 1,1 = 220 passageiros e seu consumo é de 0,02 . 0,9 = 0,018 litros por passageiro por quilômetro. Assim, consome-se 2000 . 220 . 0,018 = 7.920 L. Tomando 8.000 L como 100%, temos que &nbsp; 7.920 é 99% de 8.000. Ou seja, houve redução de 1%.`,
    subject: ['mat'],
    topics: ['Cultura e identidade', 'Questões aleatórias']
  },
  {
    id: 159,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Em uma corrida automobilística, os carros podem fazer
paradas nos boxes para efetuar trocas de pneus. Nessas
trocas, o trabalho é feito por um grupo de três pessoas em
cada pneu. Considere que os grupos iniciam o trabalho no
mesmo instante, trabalham à mesma velocidade e cada grupo
trabalha em um único pneu. Com os quatro grupos completos,
são necessários 4 segundos para que a troca seja efetuada. O
tempo gasto por um grupo para trocar um pneu é inversamente
proporcional ao número de pessoas trabalhando nele. Em
uma dessas paradas, um dos trabalhadores passou mal, não
pôde participar da troca e nem foi substituído, de forma que
um dos quatro grupos de troca ficou reduzido.
Nessa parada especifica, com um dos grupos reduzido, qual
foi o tempo gasto, em segundo, para trocar os quatro pneus?`,
    alternatives: [
      { id: 'A', type: 'text', value: `60` },
      { id: 'B', type: 'text', value: `5,7` },
      { id: 'C', type: 'text', value: `5,0` },
      { id: 'D', type: 'text', value: `45` },
      { id: 'E', type: 'text', value: `44` },
    ],
    correct: 'A',
    explanation: `Montando a regra de 3 4 &#8212;&#8212; 3 x &#8212;&#8212;- 2 como o tempo é inversamente proporcional ao número de pessoas trabalhando, temos que multiplicar reto 2x = 4 . 3 -&gt; 2x = 12 -&gt; x = 6 seg &nbsp; Logo, com um dos grupos reduzidos o tempo gasto é igual a 6 seg.`,
    subject: ['mat'],
    topics: ['Cinemática', 'Questões aleatórias']
  },
  {
    id: 160,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Um nutricionista verificou, na dieta diária do seu cliente,
a falta de 800 mg do mineral A, de 1 000 mg do mineral
B e de 1 200 mg do mineral C. Por isso, recomendou a
compra de suplementos alimentares que forneçam os
minerais faltantes e informou que não haveria problema se
consumisse mais desses minerais do que o recomendado.
O cliente encontrou cinco suplementos, vendidos
em sachês unitários, cujos preços e as quantidades dos
minerais estão apresentados a seguir:
Suplemento I: contém 50 mg do mineral A, 100 mg
do mineral B e 200 mg do mineral C e custa R$ 2,00;
Suplemento II: contém 800 mg do mineral A, 250 mg
do mineral B e 200 mg do mineral C e custa R$ 3,00;
Suplemento III: contém 250 mg do mineral A, 1 000 mg
do mineral B e 300 mg do mineral C e custa R$ 5,00;
Suplemento IV: contém 600 mg do mineral A, 500 mg
do mineral B e 1 000 mg do mineral C e custa R$ 6,00;
Suplemento V: contém 400 mg do mineral A, 800 mg
do mineral B e 1 200 mg do mineral C e custa R$ 8,00.
O cliente decidiu comprar sachês de um único suplemento
no qual gastasse menos dinheiro e ainda suprisse a falta de
minerais indicada pelo nutricionista, mesmo que consumisse
alguns deles além de sua necessidade.
Nessas condições, o cliente deverá comprar sachês do
suplemento`,
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },

    ],
    correct: 'D',
    explanation: `Para calcular o gasto com cada suplemento, é necessário considerar a quantidade de sachês necessários para suprir a falta de minerais e os preços dos sachês. Dessa forma, temos: Para economizar, o cliente deve comprar o suplemento IV.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 161,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O administrador de um teatro percebeu que, com o ingresso
do evento a R$ 20,00, um show conseguia atrair
200 pessoas e que, a cada R$ 1,00 de redução no preço
do ingresso, o número de pessoas aumentava em 40.
Ele sabe que os donos do teatro só admitem trabalhar
com valores inteiros para os ingressos, pela dificuldade
de disponibilizar troco, e pretende convencê-los a diminuir
o preço do ingresso. Assim, apresentará um gráfico
da arrecadação em função do valor do desconto no preço
atual do ingresso.
O gráfico que mais se assemelha ao que deve ser elaborado
pelo administrador é`,
    images: ['/enem/2021/images/enem_2021_d2_q161_A.jpg', '/enem/2021/images/enem_2021_d2_q161_B.jpg', '/enem/2021/images/enem_2021_d2_q161_C.jpg', '/enem/2021/images/enem_2021_d2_q161_D.jpg', '/enem/2021/images/enem_2021_d2_q161_E.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'E',
    explanation: `Como a cada redução de 1 real do valor unitário do ingresso aumenta o público em 40 pessoas, temos que a arrecadação R varia com o valor do ingresso conforme a seguinte relação: Logo, realizando o produto, temos que R(x) = -x² + 600x +4000. O gráfico dessa função é uma parábola (pois é uma função do segundo grau), sua concavidade é para baixo (já que o coeficiente a é negativo) e a função passa no eixo y na altura de c = 4000. Atenção: o gráfico deveria ser pontilhado, uma vez que o valor do ingresso é um valor inteiro (não abrindo margem para valores &#8220;quebrados&#8221;).`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 162,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O quadro representa a relação entre o preço de um produto (R) e seu respectivo imposto devido (I).
R ≤ 5 000: isento
5 000 < R ≤ 10 000: 10% de (R − 5 000)
10 000 < R ≤ 15 000: 500 + 30% de (R − 10 000)
O gráfico que melhor representa essa relação é`,
    images: ['/enem/2021/images/enem_2021_d2_q162.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'A',
    explanation: `Baseado no quadro dado, temos que o imposto (I) está em função do preço (R) O gráfico que representa a função dada é o gráfico da alternativa A`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 163,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `A relação de Newton-Laplace estabelece que o modulo
volumétrico de um fluido e diretamente proporcional ao
quadrado da velocidade do som (em metro por segundo) no
fluido e a sua densidade (em quilograma por metro cubico),
com uma constante de proporcionalidade adimensional.
Nessa relação, a unidade de medida adequada para o
modulo volumétrico é`,
    alternatives: [
      { id: 'A', type: 'text', value: `kg·m⁻²·s⁻¹` },
      { id: 'B', type: 'text', value: `kg·m⁻¹·s⁻²` },
      { id: 'C', type: 'text', value: `kg·m⁻⁵·s²` },
      { id: 'D', type: 'text', value: `kg⁻¹·m¹·s²` },
      { id: 'E', type: 'text', value: `kg⁻¹·m⁵·s⁻²` },

    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Cinemática', 'Questões aleatórias']
  },
  {
    id: 164,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Uma pessoa pretende viajar por uma companhia
aérea que despacha gratuitamente uma mala com até
10 kg.
Em duas viagens que realizou, essa pessoa utilizou
a mesma mala e conseguiu 10 kg com as seguintes
combinações de itens:
Viagem I: 12 camisetas, 4 calças, 3 sapatos
Viagem II: 18 camisetas, 3 calças, 2 sapatos
Para ter certeza de que sua bagagem terá massa de
10 kg, ela decide levar essa mala com duas calças, um
sapato e o máximo de camisetas, admitindo que itens do
mesmo tipo têm a mesma massa.
Qual a quantidade máxima de camisetas que essa
pessoa poderá levar?`,
    images: ['/enem/2021/images/enem_2021_d2_q164.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `22` },
      { id: 'B', type: 'text', value: `24` },
      { id: 'C', type: 'text', value: `26` },
      { id: 'D', type: 'text', value: `33` },
      { id: 'E', type: 'text', value: `39` },
    ],
    correct: 'B',
    explanation: `Podemos observar pela tabela que na viagem II, ao diminuir 1 calça e 1 sapato, a quantidade de camisetas aumentou em 6 ficando com 18 camisetas, 3 calças e 2 sapatos. Como queremos levar 2 calças e 1 sapato, em relação a viagem II também estamos diminuindo o número de calças e sapatos em 1, aumentando em 6 o número de camisetas. Logo, serão 18 camisetas = 6 = 24 camisetas. Assim, essa pessoa irá levar 24 camisetas, 2 calças e 1 sapato.`,
    subject: ['mat'],
    topics: ['Cinemática', 'Questões aleatórias']
  },
  {
    id: 165,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Um automóvel apresenta um desempenho médio de
16 km/L. Um engenheiro desenvolveu um novo motor
a combustão que economiza, em relação ao consumo
do motor anterior, 0,1 L de combustível a cada 20 km
percorridos.
O valor do desempenho médio do automóvel com o novo
motor, em quilômetro por litro, expresso com uma casa
decimal, é`,
    alternatives: [
      { id: 'A', type: 'text', value: `15,9.` },
      { id: 'B', type: 'text', value: `16,1.` },
      { id: 'C', type: 'text', value: `16,4.` },
      { id: 'D', type: 'text', value: `17,4.` },
      { id: 'E', type: 'text', value: `18,0.` },

    ],
    correct: 'D',
    explanation: `Montando uma regra de três simples temos: Então para percorrer 20km, o motor inicial gasta 1,25 litros Para andar os 20km com o novo motor será: 1,25 &#8211; 0,1 = 1,15 litros O desempenho D2 do novo motor será D = 20/1,15 = 17,4 km/L`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 166,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O projeto de um contêiner, em forma de paralelepípedo
reto retangular, previa a pintura dos dois lados (interno e
externo) de cada uma das quatro paredes com tinta acrílica
e a pintura do piso interno com tinta epóxi. O construtor
havia pedido, a cinco fornecedores diferentes, orçamentos
das tintas necessárias, mas, antes de iniciar a obra, resolveu
mudar o projeto original, alterando o comprimento e a largura
para o dobro do originalmente previsto, mantendo inalterada
a altura. Ao pedir novos orçamentos aos fornecedores, para
as novas dimensões, cada um deu uma resposta diferente
sobre as novas quantidades de tinta necessárias.
Em relação ao previsto para o projeto original, as
novas quantidades de tinta necessárias informadas pelos
fornecedores foram as seguintes:
* Fornecedor |: “O dobro, tanto para as paredes
quanto para o piso.”
* Fornecedor Il: “O dobro para as paredes e quatro
vezes para o piso.”
* Fornecedor Ill: “Quatro vezes, tanto para as paredes
quanto para o piso.”
* Fornecedor IV: “Quatro vezes para as paredes e o
dobro para o piso.”
* Fornecedor V: “Oito vezes para as paredes e quatro
vezes para o piso.”
Analisando as informações dos fornecedores, o
construtor providenciará a quantidade adequada de
material. Considere a porta de acesso do contêiner como
parte de uma das paredes.
Qual dos fornecedores prestou as informações adequadas,
devendo ser o escolhido pelo construtor para a aquisição
do material?`,
    alternatives: [
      { id: 'A', type: 'text', value: `I` },
      { id: 'B', type: 'text', value: `II` },
      { id: 'C', type: 'text', value: `III` },
      { id: 'D', type: 'text', value: `IV` },
      { id: 'E', type: 'text', value: `V` },

    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 167,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Um povoado com 100 habitantes está passando por
uma situação de seca prolongada e os responsáveis
pela administração pública local decidem contratar a
construção de um reservatório. Ele deverá ter a forma
de um cilindro circular reto, cuja base tenha 5 metros
de diâmetro interno, e atender à demanda de água da
população por um período de exatamente sete dias
consecutivos. No oitavo dia, o reservatório vazio é
completamente reabastecido por carros-pipa.
Considere que o consumo médio diário por habitante
é de 120 litros de água. Use 3 como aproximação para π.
Nas condições apresentadas, o reservatório deverá ser
construído com uma altura interna mínima, em metro, igual a`,
    alternatives: [
      { id: 'A', type: 'text', value: `1,12.` },
      { id: 'B', type: 'text', value: `3,10.` },
      { id: 'C', type: 'text', value: `4,35.` },
      { id: 'D', type: 'text', value: `4,48.` },
      { id: 'E', type: 'text', value: `5,60.` },

    ],
    correct: 'D',
    explanation: `O volume de cilindro é calculado por V = r² . h Como o diâmetro do cilindro é igual a d = 5m, o raio será r = 2,5m e = 3, substituindo obtemos V = 3 . (2,5)² . h A capacidade desse cilindro para atender à demanda de água da população por 7 dias, sabendo que são 100 habitantes e o consume médio diário é igual a 120L, será V = 100 . 120 . 7 = 84000L Transformando litros em metros cúbicos 1L = 0,001m³ Então, 84000L = 84m³ Portanto, a altura será: 3 . (2,5)² . h = 84`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias']
  },
  {
    id: 168,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Num octaedro regular, duas faces são consideradas
opostas quando não têm nem arestas, nem vértices em
comum. Na figura, observa-se um octaedro regular e uma
de suas planificações, na qual há uma face colorida na
cor cinza escuro e outras quatro faces numeradas.
>
Qual(is) face(s) ficará(ão) oposta(s) à face de cor cinza
escuro, quando o octaedro for reconstruído a partir da
planificação dada?`,
    images: ['/enem/2021/images/enem_2021_d2_q168.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1, 2, 3 e 4` },
      { id: 'B', type: 'text', value: `1 e 3` },
      { id: 'C', type: 'text', value: `1` },
      { id: 'D', type: 'text', value: `2` },
      { id: 'E', type: 'text', value: `4` },

    ],
    correct: 'E',
    explanation: `Da planificação para a figura, poderemos ver que as faces 2 e 4 compartilham uma aresta assim como os pares 2 &#8211; 1 e 2 -3. Analogicamente, podemos formas as faces 5, 6, e 8 sendo a 8 a face cinza. Desta forma, a face cinza só será oposta à face a. Segue as faces enumeradas na planificação e no octaedro: &nbsp;`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 169,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O instrumento de percussão conhecido como triângulo
é composto por uma barra fina de aco, dobrada em um
formato que se assemelha a um triângulo, com uma abertura
e uma haste, conforme ilustra a Figura 1.
Figura 1 Figura 2
><fE
Uma empresa de brindes promocionais contrata uma
fundição para a produção de miniaturas de instrumentos
desse tipo. A fundição produz, inicialmente, peças com o
formato de um triângulo equilátero de altura h, conforme
ilustra a Figura 2. Após esse processo, cada peça é
aquecida, deformando os cantos, e cortada em um dos
vértices, dando origem à miniatura. Assuma que não
ocorram perdas de material no processo de produção, de
forma que o comprimento da barra utilizada seja igual ao
perímetro do triângulo equilátero representado na Figura 2.
Considere 1,7 como valor aproximado para 4/3.
Nessas condições, o valor que mais se aproxima da
medida do comprimento da barra, em centímetro, é`,
    images: ['/enem/2021/images/enem_2021_d2_q169.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `9,07.` },
      { id: 'B', type: 'text', value: `13,60.` },
      { id: 'C', type: 'text', value: `20,40.` },
      { id: 'D', type: 'text', value: `27,18.` },
      { id: 'E', type: 'text', value: `36,24.` },
    ],
    correct: 'D',
    explanation: `&nbsp;`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 170,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Uma pessoa comprou uma caneca para tomar sopa,
conforme ilustração.
Sabe-se que 1 cm³ = 1 mL e que o topo da caneca
é uma circunferência de diâmetro (D) medindo 10 cm,
e a base é um círculo de diâmetro (d) medindo 8 cm.
Além disso, sabe-se que a altura (h) dessa caneca mede
12 cm (distância entre o centro das circunferências do
topo e da base).
Utilize 3 como aproximação para TT.
Qual é a capacidade volumétrica, em mililitro, dessa caneca?`,
    images: ['/enem/2021/images/enem_2021_d2_q170.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `216` },
      { id: 'B', type: 'text', value: `408` },
      { id: 'C', type: 'text', value: `732` },
      { id: 'D', type: 'text', value: `2196` },
      { id: 'E', type: 'text', value: `2928` },
    ],
    correct: 'C',
    explanation: `&nbsp; &nbsp;`,
    subject: ['mat'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 171,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O dono de uma loja pretende usar cartões imantados
para a divulgação de sua loja. A empresa que fornecerá
o serviço lhe informa que o custo de fabricação do cartão
é de R$ 0,01 por centímetro quadrado e que disponibiliza
modelos tendo como faces úteis para impressão:
um triângulo equilátero de lado 12 cm;
um quadrado de lado 8 cm;
um retângulo de lados 11 cm e 8 cm;
um hexágono regular de lado 6 cm;
um círculo de diâmetro 10 cm.
O dono da loja está disposto a pagar, no máximo,
R$ 0,80 por cartão. Ele escolherá, dentro desse limite de
preço, o modelo que tiver maior área de impressão.
Use 3 como aproximação para π e use 1,7 como
aproximação para √3.
Nessas condições, o modelo que deverá ser escolhido
tem como face útil para impressão um`,
    alternatives: [
      { id: 'A', type: 'text', value: `triângulo.` },
      { id: 'B', type: 'text', value: `quadrado.` },
      { id: 'C', type: 'text', value: `retângulo.` },
      { id: 'D', type: 'text', value: `hexágono.` },
      { id: 'E', type: 'text', value: `círculo.` },

    ],
    correct: 'E',
    explanation: `Calculando o quanto gastaria com cada face, sabendo que ele está disposto a pagar no máximo R$ 0,80 por cartão, temos face: triângulo equilátero de lado 12 cm: At = 12²√3/ 4 = 61,2 cm² Preço: At . 0,01 = 61,2 . 0,01 = R$0,612 Face: Quadrado de lado 8 cm Aq = 8² = 64 cm² Preço = Aq . 0,01 = 64.0,01 = R$0,64 Face: retângulo de lados 11 cm e 8 cm Ar = 11.8 = 88cm² Preço = Ar . 0,01 = 88 . 0,01 = R$ 0,88 Face: hexágono de lado 6 cm Ah = 6 . 6² √3 / 4= R$91,8 cm² Preço: Ah . 0,01 = 91,8 . 0,01 = R$ 0,918 Face: círculo de diâmetro 10 cm: Ac = π . 5² = 75 cm² Preço: Ac . 0,01 = π . 5² . 0,01 = R$ 0,75 O que tem a maior área e custa menos que R$0,80 é o que tem face de um círculo de diâmetro 10 cm.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias']
  },
  {
    id: 172,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Um ciclista amador de 61 anos de idade utilizou
um monitor cardíaco para medir suas frequências
cardíacas em quatro diferentes tipos de trechos do
percurso. Os resultados das frequências cardíacas
máximas alcançadas nesses trechos foram:
Frequências cardíacas
Trechos do percurso ar
máximas (bpm)
| Levemoplamo | so |
Sabe-se que a faixa aeróbica ideal para o ganho
de condicionamento físico é entre 65% e 85% da
frequência cardíaca máxima (Fc máx.), que, por sua vez,
é determinada pela fórmula:
Fc máx. = 220 — idade,
em que a idade é dada em ano e Fc máx. é dada em bpm
(batimento por minuto).
Os trechos do percurso nos quais esse ciclista se mantém
dentro de sua faixa aeróbica ideal, para o ganho de
condicionamento físico, são
Q leve no plano, forte no plano, subida moderada e`,
    images: ['/enem/2021/images/enem_2021_d2_q172.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `subida forte.` },
      { id: 'B', type: 'text', value: `leve no plano, forte no plano e subida moderada.` },
      { id: 'C', type: 'text', value: `forte no plano, subida moderada e subida forte.` },
      { id: 'D', type: 'text', value: `forte no plano e subida moderada.` },
      { id: 'E', type: 'text', value: `leve no plano e subida forte.` },
    ],
    correct: 'D',
    explanation: `Calcule a Fc máx = 220 &#8211; 61 = 159 bpm A faixa aeróbica para o ganho de condicionamento físico é entre 65% e 85% da Fc máx, como sabemos que a Fc máx é igual 159 bpm, 65% de 159 = 0,65 . 159 = 103,35 bpm e 85% de 159 = 0,85 . 159 &#8211; 135,15 bpm. Portanto, para estar na faixa aeróbica ideal, os batimentos devem estar entre 103,35 bpm e 135,15 bpm. Analisando a tabela, podemos observar que isso aconteceu nos trechos do percurso forte no plano e subida moderada.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 173,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Um lava-rápido oferece dois tipos de lavagem de
veículos: lavagem simples, ao preço de R$ 20,00, e
lavagem completa, ao preço de R$ 35,00. Para cobrir
as despesas com produtos e funcionários, e não ter
prejuízos, o lava-rápido deve ter uma receita diária de,
pelo menos, R$ 300,00.
Para não ter prejuízo, o menor número de lavagens
diárias que o lava-rápido deve efetuar é`,
    alternatives: [
      { id: 'A', type: 'text', value: `6.` },
      { id: 'B', type: 'text', value: `8.` },
      { id: 'C', type: 'text', value: `9.` },
      { id: 'D', type: 'text', value: `15.` },
      { id: 'E', type: 'text', value: `20.` },

    ],
    correct: 'C',
    explanation: `Para ter uma receita diária de, pelo menos, R$300,00 e não ter prejuízo, devemos considerar apenas as lavagens completas (de R$35,00) pois são as que custam mais. Logo, sendo n o número de lavagens, temos que: n ∙ 35 ≥ 300 n ≥ 300/35 n ≥ 8,57 Como a quantidade de lavagens precisa ser um número inteiro, o gabarito é a letra c (9 lavagens)`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 174,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Após consulta médica, um paciente deve seguir um
tratamento composto por três medicamentos: X, Y e Z.
O paciente, para adquirir os três medicamentos, faz
um orçamento em três farmácias diferentes, conforme
o quadro.
— X — Y — Z
Farmácia 1 — R$ 45,00 — R$ 40,00 — R$ 50,00
Farmácia 2 — R$ 50,00 — R$ 50,00 — R$ 40,00
Farmácia 3 — R$ 65,00 — R$ 45,00 — R$ 35,00
Dessas farmácias, algumas oferecem descontos:
* na compra dos medicamentos X e Y na
Farmácia 2, recebe-se um desconto de 20% em
ambos os produtos, independentemente da compra
do medicamento Z, e não há desconto para o
medicamento Z;
na compra dos 3 medicamentos na Farmácia 3,
recebe-se 20% de desconto no valor total da
compra.
O paciente deseja efetuar a compra de modo a
minimizar sua despesa com os medicamentos.
De acordo com as informações fornecidas, o paciente
deve comprar os medicamentos da seguinte forma:`,
    images: ['/enem/2021/images/enem_2021_d2_q174.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `X, Y e Z na Farmácia 1.` },
      { id: 'B', type: 'text', value: `X e Y na Farmácia 1, e Z na Farmácia 3.` },
      { id: 'C', type: 'text', value: `X e Y na Farmácia 2, e Z na Farmácia 3.` },
      { id: 'D', type: 'text', value: `X na Farmácia 2, e Y e Z na Farmácia 3.` },
      { id: 'E', type: 'text', value: `X, Y e Z na Farmácia 3.` },

    ],
    correct: 'C',
    explanation: `X, Y e Z na farmácia 1: 45+40+50 = 135 X e Y na farmácia 1 e Z na farmácia 3: 45 + 40 + 35 = 120 X e Y na farmácia 2, e Z na farmácia 3: (50 + 50) . 0,8 + 35 = 115 X na farmácia 2, e Y e Z na farmácia 3: 50+50+40 = 140 X, Y e Z na farmácia 3: (65 + 45 +35) . 0,8 = 116 Logo, a melhor opção é a apresentada em C. &nbsp;`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias']
  },
  {
    id: 175,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Muitos brinquedos que frequentemente são
encontrados em praças e parques públicos apresentam
formatos de figuras geométricas bidimensionais e
tridimensionais. Uma empresa foi contratada para
desenvolver uma nova forma de brinquedo. A proposta
apresentada pela empresa foi de uma estrutura formada
apenas por hastes metálicas, conectadas umas às
outras, como apresentado na figura. As hastes de mesma
tonalidade e espessura são congruentes.
Com base na proposta apresentada, quantas figuras
geométricas planas de cada tipo são formadas pela
união das hastes?`,
    images: ['/enem/2021/images/enem_2021_d2_q175.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `12 trapézios isósceles e 12 quadrados.` },
      { id: 'B', type: 'text', value: `24 trapézios isósceles e 12 quadrados.` },
      { id: 'C', type: 'text', value: `12 paralelogramos e 12 quadrados.` },
      { id: 'D', type: 'text', value: `8 trapézios isósceles e 12 quadrados.` },
      { id: 'E', type: 'text', value: `12 trapézios escalenos e 12 retângulos.` },

    ],
    correct: 'A',
    explanation: `A figura possui dois cubos, cada um, com 12 quadrados. Além disso, os vértices dos cubos estão ligados por um segmento de reta, formando trapézios isósceles. Assim, são 12 trapézios isósceles.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 176,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `O sistema de numeração romano ainda é utilizado na
indicação de capítulos e volumes de livros, na designação
de séculos e, em ordem cronológica, de papas e reis de
mesmo nome. São utilizadas sete letras do alfabeto:
Quatro fundamentais: I (vale 1); X (vale 10); C (vale 100) e
M (vale 1 000).
Três secundárias: V (vale 5); L (vale 50) e D (vale 500).
As regras para escrever números romanos são:
1. Não existe símbolo correspondente ao zero;
2. Os símbolos fundamentais podem ser repetidos até três
vezes e seus valores são adicionados. Exemplo: XXX = 30;
3. Uma letra posta à esquerda de outra de maior valor indica
subtração dos respectivos valores. Exemplo: IX = 10 − 1 = 9;
4. Uma letra posta à direita de outra de maior valor indica
adição dos respectivos valores. Exemplo: XI = 10 + 1 = 11.
Em uma cidade europeia há uma placa indicando o
ano de sua fundação: MCDLXIX.
Quantos anos de fundação essa cidade comemorará em
2050?`,
    images: ['/enem/2021/images/enem_2021_d2_q176.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `379` },
      { id: 'B', type: 'text', value: `381` },
      { id: 'C', type: 'text', value: `579` },
      { id: 'D', type: 'text', value: `581` },
      { id: 'E', type: 'text', value: `601` },

    ],
    correct: 'D',
    explanation: `O ano de fundação da cidade é: MCDLXIX temos que M = 1000, DC = 400, LX = 60 e IX = 9 Logo, o ano de fundação da cidade é 1469. A questão quer saber quantos anos a cidade irá comemorar no ano de 2050, então vamos subtrair: 2050 &#8211; 1469 = 581 .`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 177,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Uma das bases mais utilizadas para representar um
número é a base decimal. Entretanto, os computadores
trabalham com números na base binária. Nessa base,
qualquer número natural é representado usando apenas
os algarismos O e 1. Por exemplo, as representações
dos números 9 e 12, na base binária, são 1001 e 1100,
respectivamente. A operação de adição, na base binária,
segue um algoritmo similar ao utilizado na base decimal,
como detalhado no quadro:
Por exemplo, na base binária, a soma dos números
10 e 10 é 100, como apresentado:
+10
Considerando as informações do texto, o resultado da
adição 9 + 12 será representado, na base binária, por`,
    alternatives: [
      { id: 'A', type: 'text', value: `101.` },
      { id: 'B', type: 'text', value: `1101.` },
      { id: 'C', type: 'text', value: `1111.` },
      { id: 'D', type: 'text', value: `10101.` },
      { id: 'E', type: 'text', value: `11001.` },
    ],
    correct: 'D',
    explanation: `De antemão, 9 + 12 = 21. Podemos encontrar a representação desse número por meio de divisão sucessivas por 2 com resto. O número na representação binária é o resto das divisões e o quociente da último divisão. Ou seja, o número formado é 10101 na representação binária.`,
    subject: ['mat'],
    topics: ['Química Geral', 'Questões aleatórias']
  },
  {
    id: 178,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Uma unidade de medida comum usada para expressar
áreas de terrenos de grandes dimensões é o hectare,
que equivale a 10 000 m?. Um fazendeiro decide fazer
um loteamento utilizando 3 hectares de sua fazenda, dos
quais 0,9 hectare será usado para a construção de ruas e
calçadas e o restante será dividido em terrenos com área
de 300 m? cada um. Os 20 primeiros terrenos vendidos
terão preços promocionais de R$ 20 000,00 cada, e os
demais, R$ 30 000,00 cada.
Nas condições estabelecidas, o valor total, em real,
obtido pelo fazendeiro com a venda de todos os terrenos
será igual a`,
    alternatives: [
      { id: 'A', type: 'text', value: `700 000.` },
      { id: 'B', type: 'text', value: `1 600 000.` },
      { id: 'C', type: 'text', value: `1 900 000.` },
      { id: 'D', type: 'text', value: `2 200 000.` },
      { id: 'E', type: 'text', value: `2 800 000.` },

    ],
    correct: 'C',
    explanation: `Temos 3 hectares dos quais 0,9 ha serão usados para construção de ruas, então sobra 3 &#8211; 0,9 = 2,1 ha para os terrenos. Foi dados que 1 ha = 10 000 m², então 2,1 ha = 21000 m² Desses 21 000 m², iremos dividir em terrenos de 300 m² de área, logo a quantidade de terrenos será igual a: = 70 terrenos É dito no texto que os 20 primeiros terrenos serão vendidos por R$ 20 000,00 cada, então o valor que será obtido com a venda desses 20 terrenos é igual a 20 . 20 000 = R$ 400 000,00 Como são 70 terrenos e 20 já foram vendidos, então sobram 50 terrenos e eles serão vendidos por R$ 30 000,00, então o valor que será obtido com a venda desses 50 terrenos é igual a 50 . 30 000 = R$ 1 500 000, 00 Portanto, o valor total, em real, obtido pelo fazendeiro com a venda de todos os terrenos será igual a 400 000, 00 + 1 500 000, 00 = 1 900 000, 00`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
  {
    id: 179,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Uma pessoa produzirá uma fantasia utilizando
como materiais: 2 tipos de tecidos diferentes e 5 tipos
distintos de pedras ornamentais. Essa pessoa tem à sua
disposição 6 tecidos diferentes e 15 pedras ornamentais
distintas.
A quantidade de fantasias com materiais diferentes que
podem ser produzidas é representada pela expressão`,
    alternatives: [
      { id: 'A', type: 'text', value: `6! / (4! · 2!) · 15! / (10! · 5!)` },
      { id: 'B', type: 'text', value: `6! / (4! · 2!) + 15! / (10! · 5!)` },
      { id: 'C', type: 'text', value: `6! / 2! + 15! / 5!` },
      { id: 'D', type: 'text', value: `6! / 2! · 15! / 5!` },
      { id: 'E', type: 'text', value: `21! / (7! · 14!)` },

    ],
    correct: 'A',
    explanation: ``,
    subject: ['mat'],
    topics: ['Genética', 'Questões aleatórias']
  },
  {
    id: 180,
    exam: 'enem',
    year: 2021,
    day: 2,
    text: `Os diretores de uma escola precisam construir um
laboratório para uso dos alunos. Há duas possibilidades:
(i) um laboratório do tipo A, com capacidade para
100 usuários, a um custo de 180 mil reais e gastos de
60 mil reais por ano para manutenção;
(ii) um laboratório do tipo B, com capacidade para
80 usuários, a um custo de 120 mil reais e gastos com
manutenção de 16 mil reais por ano.
Considera-se que, em qualquer caso, o laboratório
implantado será utilizado na totalidade de sua capacidade.
A economia da escola, na utilização de um laboratório
tipo B, em vez de um laboratório tipo A, num período de
4 anos, por usuário, será de`,
    alternatives: [
      { id: 'A', type: 'text', value: `1,31 mil reais.` },
      { id: 'B', type: 'text', value: `1,90 mil reais.` },
      { id: 'C', type: 'text', value: `2,30 mil reais.` },
      { id: 'D', type: 'text', value: `2,36 mil reais.` },
      { id: 'E', type: 'text', value: `2,95 mil reais.` },

    ],
    correct: 'B',
    explanation: ``,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias']
  },
];

export default ENEM_2021_D2;
