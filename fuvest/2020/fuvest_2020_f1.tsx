import { QuizQuestion } from '@/lib/quiz-questions';

const fuvest_2020_f1: QuizQuestion[] = [
  {
    id: 1,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Em Xangai, uma loja
especializada em café oferece
uma opção diferente para
adoçar a bebida. A chamada
sweet little rain consiste em
uma xícara de café sobre a qual
é pendurado um algodão‐doce,
material rico em sacarose, o
que passa a impressão de
existir uma nuvem pairando
sobre o café, conforme
ilustrado na imagem.

Disponível em https://www.boredpanda.com/.

O café quente é então adicionado na xícara e, passado um
tempo, gotículas começam a pingar sobre a bebida, simulando
uma chuva doce e reconfortante. A adição de café quente inicia
o processo descrito, pois

Note e adote:
Temperatura de fusão da sacarose à pressão ambiente = 186 °C;
Solubilidade da sacarose a 20 °C = 1,97 kg/L de água.`,
    images: [{"src":"/fuvest/2020/images/q01_source_1.jpg","width":321,"height":119},{"src":"/fuvest/2020/images/q01_source_2.jpg","width":321,"height":118},{"src":"/fuvest/2020/images/q01_source_3.jpg","width":321,"height":119}],
    alternatives: [
      { id: 'A', type: 'text', value: `a temperatura do café é suficiente para liquefazer a
sacarose do algodão‐doce, fazendo com que este goteje
na forma de sacarose líquida.` },
      { id: 'B', type: 'text', value: `o vapor de água que sai do café quente irá condensar na
superfície do algodão‐doce, gotejando na forma de água
pura.` },
      { id: 'C', type: 'text', value: `a sacarose que evapora do café quente condensa na
superfície do algodão‐doce e goteja na forma de uma
solução de sacarose em água.` },
      { id: 'D', type: 'text', value: `o vapor de água encontra o algodão‐doce e solubiliza a
sacarose, que goteja na forma de uma solução de sacarose
em água.` },
      { id: 'E', type: 'text', value: `o vapor de água encontra o algodão‐doce e vaporiza a
sacarose, que goteja na forma de uma solução de sacarose
em água.` },
    ],
    correct: 'D',
    explanation: `O vapor de água condensa ao atingir o algodão-doce e dissolve a sacarose. As gotas são, portanto, uma solução aquosa de açúcar. Não é necessário atingir a temperatura de fusão da sacarose, muito superior à do café.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 2,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Equipamentos domésticos chamados de vaporizadores para
roupa utilizam o vapor de água gerado por um sistema de
resistências elétricas a partir de água líquida. Um equipamento
com potência nominal de 1.600 W foi utilizado para passar
roupas por 20 minutos, consumindo 540 mL de água. Em relação
ao gasto total de energia do equipamento, o gasto de energia
utilizado apenas para vaporizar a água, após ela já ter atingido a
temperatura de ebulição, equivale a, aproximadamente,

Note e adote: Entalpia de vaporização da água a 100 °C = 40 kJ/mol; massa molar da água = 18 g/mol; densidade da água = 1 g/mL.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `0,04%.` },
      { id: 'B', type: 'text', value: `0,062%.` },
      { id: 'C', type: 'text', value: `4,6%.` },
      { id: 'D', type: 'text', value: `40%.` },
      { id: 'E', type: 'text', value: `62%.` },
    ],
    correct: 'E',
    explanation: `A energia total é E = Pt = 1600 × 1200 = 1,92 × 10⁶ J. Os 540 mL de água correspondem a 540 g, ou 30 mol. A vaporização consome 30 × 40 = 1200 kJ. A razão 1200/1920 = 0,625 corresponde a aproximadamente 62%.`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias'],
  },
  {
    id: 3,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Pesquisadores (...) conseguiram controlar reações químicas de
um modo inovador. Usaram feixes de laser para promover um
esbarrão entre dois átomos e uni‐los, criando uma molécula.
Utilizando pinças ópticas (feixes de laser altamente focados
capazes de aprisionar objetos microscópicos), os
pesquisadores empurraram um átomo do elemento químico
césio (Cs) contra um átomo de sódio (Na) até que colidissem.
Um terceiro laser foi lançado sobre ambos, fornecendo
energia extra para criar a molécula NaCs. Na natureza, as
moléculas formam‐se a partir da interação de átomos por
acaso. Por suas características químicas, césio e sódio jamais
originariam uma molécula espontaneamente. (...)

Molécula criada em laboratório. Disponível em http://revistapesquisa.fapesp.br/.
Adaptado.

Com base nas informações do texto e em seus
conhecimentos, é correto afirmar que`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q01_1.jpg","width":603,"height":250}],
    alternatives: [
      { id: 'A', type: 'text', value: `o Cs é um elemento químico radioativo e, devido a essa
característica química, a molécula de NaCs não se formaria
sem esse modo inovador (L.2), que estabiliza o
decaimento.` },
      { id: 'B', type: 'text', value: `o raio atômico do Na é maior que o do Cs, portanto, a sua
energia de ionização também é maior. O esbarrão (L.3) entre
os átomos retira um elétron do Na, permitindo a ligação.` },
      { id: 'C', type: 'text', value: `o terceiro laser (L.8) usado no experimento serviu para
retirar um nêutron do Cs, tornando‐o um cátion e
possibilitando a reação com o Na.` },
      { id: 'D', type: 'text', value: `na natureza, com esses elementos se esbarrando por
acaso (L.10‐11), a tendência seria formar CsNa, e não
NaCs, justificando o caráter inovador do experimento.` },
      { id: 'E', type: 'text', value: `o Cs e o Na não formariam uma molécula espontaneamente
(L.11‐12), uma vez que ambos têm grande tendência a
formarem cátions e ligações iônicas.` },
    ],
    correct: 'E',
    explanation: `Sódio e césio são metais alcalinos, com forte tendência a perder seu elétron de valência e formar cátions. A associação dos dois átomos descrita no texto exige as condições artificiais do experimento; não corresponde à formação espontânea de uma ligação iônica entre esses dois elementos.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 4,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Ao se preparar molho de tomate (considere apenas a fervura
de tomate batido com água e azeite), é possível observar que
a fração aquosa (fase inferior) fica vermelha logo no início e a
fração oleosa (fase superior), inicialmente com a cor
característica do azeite, começa a ficar avermelhada
conforme o preparo do molho. Por outro lado, ao se preparar
uma sopa de beterraba (considere apenas a fervura de
beterraba batida com água e azeite), a fração aquosa (fase
inferior) fica com a cor rosada e a fração oleosa (fase superior)
permanece com sua coloração típica durante todo o processo,
não tendo sua cor alterada.

Considerando as informações apresentadas no texto e no
quadro, a principal razão para a diferença de coloração
descrita é que a fração oleosa

Note e adote:
Massas molares (g/mol):
Licopeno = 537; betanina = 551.`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q05_1.jpg","width":604,"height":526}],
    alternatives: [
      { id: 'A', type: 'text', value: `fica mais quente do que a aquosa, degradando a betanina;
o mesmo não é observado com o licopeno, devido à sua
cadeia carbônica longa.` },
      { id: 'B', type: 'text', value: `está mais exposta ao ar, que oxida a betanina; o mesmo
não é observado com o licopeno, devido à grande
quantidade de duplas ligações.` },
      { id: 'C', type: 'text', value: `é apolar e a betanina, polar, havendo pouca interação; o
mesmo não é observado com o licopeno, que é apolar e
irá interagir com o azeite.` },
      { id: 'D', type: 'text', value: `é apolar e a aquosa, polar, mantendo‐se separadas; o
licopeno age como um surfactante misturando as fases,
colorindo a oleosa, enquanto a betanina não.` },
      { id: 'E', type: 'text', value: `tem alta viscosidade, facilitando a difusão do licopeno,
composto de menor massa molar; o mesmo não é
observado para a betanina, com maior massa.` },
    ],
    correct: 'C',
    explanation: `O azeite é apolar. Por isso interage favoravelmente com o licopeno, também apolar, e não com a betanina, que é polar. A diferença de solubilidade explica a coloração da fase oleosa pelos pigmentos do tomate.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 5,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Numa determinada condição experimental e com o
catalisador adequado, ocorre uma reação, conforme
representada no gráfico, que relaciona porcentagem do
composto pelo tempo de reação.

Uma representação adequada para esse processo é:`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q05_2.jpg","width":411,"height":160},{"src":"/fuvest/2020/images/fuvest_2020_f1q05_3.jpg","width":411,"height":161}],
    alternatives: [
      { id: 'A', type: 'text', value: `limoneno ⇌ p-cimeno → α-terpineno` },
      { id: 'B', type: 'text', value: `limoneno → α-terpineno (p-cimeno como catalisador)` },
      { id: 'C', type: 'text', value: `limoneno + p-cimeno ⇌ α-terpineno` },
      { id: 'D', type: 'text', value: `limoneno → p-cimeno (α-terpineno como catalisador)` },
      { id: 'E', type: 'text', value: `limoneno → α-terpineno → p-cimeno` },
    ],
    correct: 'E',
    explanation: `No gráfico, a concentração de limoneno diminui desde o início; a de α-terpineno primeiro aumenta e depois diminui; a de p-cimeno cresce como produto final. A sequência é limoneno → α-terpineno → p-cimeno.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 6,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Os chamados “remédios homeopáticos” são produzidos
seguindo a farmacotécnica homeopática, que se baseia em
diluições sequenciais de determinados compostos naturais. A
dosagem utilizada desses produtos é da ordem de poucos mL.
Uma das técnicas de diluição homeopática é chamada de diluição
centesimal (CH), ou seja, uma parte da solução é diluída em 99
partes de solvente e a
solução resultante é
homogeneizada (ver
esquema).

Alguns desses produtos
homeopáticos são pro‐
duzidos com até 200
diluições centesimais
sequenciais (200CH).

Considerando uma solução de partida de 100 mL com
concentração 1 mol/L de princípio ativo, a partir de qual diluição
centesimal a solução passa a não ter, em média, nem mesmo
uma molécula do princípio ativo?

Note e adote: Número de Avogadro = 6×10²³.`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q06_1.jpg","width":402,"height":136},{"src":"/fuvest/2020/images/fuvest_2020_f1q06_2.jpg","width":402,"height":135}],
    alternatives: [
      { id: 'A', type: 'text', value: `12ª diluição (12CH).` },
      { id: 'B', type: 'text', value: `24ª diluição (24CH).` },
      { id: 'C', type: 'text', value: `51ª diluição (51CH).` },
      { id: 'D', type: 'text', value: `99ª diluição (99CH).` },
      { id: 'E', type: 'text', value: `200ª diluição (200CH).` },
    ],
    correct: 'A',
    explanation: `Inicialmente há 0,1 × 1 × 6 × 10²³ = 6 × 10²² moléculas. Cada diluição centesimal reduz esse número por um fator 100. Após 11 diluições ainda se esperam cerca de 6 moléculas; após 12, apenas 0,06. A primeira diluição com expectativa inferior a uma molécula é 12CH.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 7,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `O gás hélio disponível comercialmente pode ser gerado pelo
decaimento radioativo, sobretudo do urânio, conforme
esquematizado pela série de decaimento. Desde a formação
da Terra, há 4,5 bilhões de anos, apenas metade do 238U
decaiu para a formação de He.

Com base nessas informações e em seus conhecimentos, é
correto afirmar:`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q09_1.jpg","width":513,"height":213}],
    alternatives: [
      { id: 'A', type: 'text', value: `O decaimento de um átomo de 238U produz, ao final da
série de decaimento, apenas um átomo de He.` },
      { id: 'B', type: 'text', value: `O decaimento do 238U para 234U gera a mesma quantidade
de He que o decaimento do 234U para 230Th.` },
      { id: 'C', type: 'text', value: `Daqui a 4,5 bilhões de anos, a quantidade de He no planeta
Terra será o dobro da atual.` },
      { id: 'D', type: 'text', value: `O decaimento do 238U para 234U gera a mesma quantidade
de He que o decaimento do 214Pb para 214Po.` },
      { id: 'E', type: 'text', value: `A produção de He ocorre pela sequência de decaimento a
partir do 206Pb.` },
    ],
    correct: 'B',
    explanation: `Uma emissão alfa diminui o número de massa em quatro unidades e corresponde a um núcleo de hélio. Tanto o percurso de ²³⁸U a ²³⁴U quanto o de ²³⁴U a ²³⁰Th envolve uma emissão alfa; as emissões beta que completam os percursos não produzem hélio. Ambos geram a mesma quantidade de He.`,
    subject: ['fis'],
    topics: ['Eletricidade', 'Questões aleatórias'],
  },
  {
    id: 8,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Os movimentos das moléculas antes e depois de uma reação
química obedecem aos princípios físicos de colisões. Para
tanto, cada átomo é representado como um corpo pontual
com uma certa massa, ocupando uma posição no espaço e
com uma determinada velocidade (representada na forma
vetorial). Costumeiramente, os corpos pontuais são
representados como esferas com diâmetros proporcionais à
massa atômica. As colisões ocorrem conservando a
quantidade de movimento.
Considerando um referencial no qual as moléculas neutras
encontram‐se paradas antes e após a colisão, a alternativa
que melhor representa o arranjo de íons e moléculas instantes
antes e instantes depois de uma colisão que leva à reação
F − + H3CCl → CH3F + Cl −
é

Note e adote: Massas atômicas: H = 1 u.m.a., C = 12 u.m.a., F = 19 u.m.a. e Cl = 35 u.m.a. Considere que apenas o isótopo de cloro Cl = 35 u.m.a. participa da reação.`,
    images: [{"src":"/fuvest/2020/images/q08_options.jpg","width":623,"height":363}],
    alternatives: [
      { id: 'A', type: 'text', value: `Arranjo A da figura.` },
      { id: 'B', type: 'text', value: `Arranjo B da figura.` },
      { id: 'C', type: 'text', value: `Arranjo C da figura.` },
      { id: 'D', type: 'text', value: `Arranjo D da figura.` },
      { id: 'E', type: 'text', value: `Arranjo E da figura.` },
    ],
    correct: 'C',
    explanation: `Como as moléculas neutras estão paradas nos dois instantes, o momento inicial do F⁻ deve igualar o momento final do Cl⁻. Os íons devem mover-se no mesmo sentido, com 19vF = 35vCl; assim o cloreto, mais pesado, tem menor velocidade. O arranjo C respeita essas condições e as identidades dos reagentes e produtos.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 9,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Quando o nosso corpo é lesionado por uma pancada, logo se
cria um hematoma que, ao longo do tempo, muda de cor.
Inicialmente, o hematoma torna‐se avermelhado pelo
acúmulo de hemoglobina. Em seguida, surge uma coloração
azulada, decorrente da perda do O2 ligado ao Fe do grupo
heme. Essa coloração torna‐se, então, esverdeada
(biliverdina) e, após isso, surge um tom amarelado na pele
(bilirrubina). Essa sequência de cores ocorre pela
transformação do grupo heme da hemoglobina, como
representado a seguir:

Com base nas informações e nas representações, é correto
afirmar:`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q09_2.jpg","width":439,"height":179},{"src":"/fuvest/2020/images/fuvest_2020_f1q09_3.jpg","width":439,"height":178},{"src":"/fuvest/2020/images/fuvest_2020_f1q09_4.jpg","width":439,"height":178},{"src":"/fuvest/2020/images/fuvest_2020_f1q08_1.jpg","width":439,"height":178},{"src":"/fuvest/2020/images/fuvest_2020_f1q08_2.jpg","width":439,"height":178},{"src":"/fuvest/2020/images/fuvest_2020_f1q08_3.jpg","width":439,"height":178}],
    alternatives: [
      { id: 'A', type: 'text', value: `A conversão da biliverdina em bilirrubina ocorre por meio
de uma redução.` },
      { id: 'B', type: 'text', value: `A biliverdina, assim como a hemoglobina, é capaz de
transportar O2 para as células do corpo, pois há oxigênio
ligado na molécula.` },
      { id: 'C', type: 'text', value: `As três estruturas apresentadas contêm o grupo funcional
amida.` },
      { id: 'D', type: 'text', value: `A degradação do grupo heme para a formação da
biliverdina produz duas cetonas.` },
      { id: 'E', type: 'text', value: `O grupo heme, a biliverdina e a bilirrubina são isômeros.` },
    ],
    correct: 'A',
    explanation: `A transformação de biliverdina em bilirrubina envolve ganho de hidrogênio e redução de uma ligação dupla na estrutura. Trata-se de uma redução, compatível com a evolução da coloração do hematoma descrita no enunciado.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 10,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `A reação de cetonas com hidrazinas, representada pela
equação química

pode ser explorada para a quantificação de compostos cetônicos
gerados, por exemplo, pela respiração humana. Para tanto, uma
hidrazina específica, a 2,4‐dinitrofenilhidrazina, é utilizada
como reagente, gerando um produto que possui cor intensa.

Considere que a 2,4‐dinitrofenilhidrazina seja utilizada para
quantificar o seguinte composto:

Nesse caso, a estrutura do composto colorido formado será:`,
    images: [{"src":"/fuvest/2020/images/q10_source_1.jpg","width":485,"height":99},{"src":"/fuvest/2020/images/fuvest_2020_f1q11_1.jpg","width":583,"height":164},{"src":"/fuvest/2020/images/q10_source_3.jpg","width":196,"height":122},{"src":"/fuvest/2020/images/q10_options.jpg","width":615,"height":936}],
    alternatives: [
      { id: 'A', type: 'text', value: `Estrutura A da figura.` },
      { id: 'B', type: 'text', value: `Estrutura B da figura.` },
      { id: 'C', type: 'text', value: `Estrutura C da figura.` },
      { id: 'D', type: 'text', value: `Estrutura D da figura.` },
      { id: 'E', type: 'text', value: `Estrutura E da figura.` },
    ],
    correct: 'B',
    explanation: `Na formação de uma hidrazona, o oxigênio da carbonila é substituído pelo grupo =N–NH–Ar da 2,4-dinitrofenilhidrazina, com eliminação de água. Os dois grupos etila ligados ao carbono carbonílico permanecem. Essa estrutura é a da alternativa B.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 11,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Em supermercados, é comum encontrar alimentos chamados
de liofilizados, como frutas, legumes e carnes. Alimentos
liofilizados continuam próprios para consumo após muito
tempo, mesmo sem refrigeração. O termo “liofilizado”, nesses
alimentos, refere‐se ao processo de congelamento e posterior
desidratação por sublimação da água. Para que a sublimação
da água ocorra, é necessária uma combinação de condições,
como mostra o gráfico de pressão por temperatura, em que
as linhas representam transições de fases.

Apesar de ser um processo que requer, industrialmente, uso
de certa tecnologia, existem evidências de que os povos pré‐
colombianos que viviam nas regiões mais altas dos Andes
conseguiam liofilizar alimentos, possibilitando estocá‐los por
mais tempo. Assinale a alternativa que explica como ocorria o
processo de liofilização natural:`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q11_3.jpg","width":439,"height":167},{"src":"/fuvest/2020/images/fuvest_2020_f1q11_4.jpg","width":439,"height":168}],
    alternatives: [
      { id: 'A', type: 'text', value: `A sublimação da água ocorria devido às baixas
temperaturas e à alta pressão atmosférica nas montanhas.` },
      { id: 'B', type: 'text', value: `Os alimentos, após congelados naturalmente nos períodos
frios, eram levados para a parte mais baixa das montanhas,
onde a pressão atmosférica era menor, o que possibilitava
a sublimação.` },
      { id: 'C', type: 'text', value: `Os alimentos eram expostos ao sol para aumentar a
temperatura, e a baixa pressão atmosférica local favorecia
a solidificação.` },
      { id: 'D', type: 'text', value: `As temperaturas eram baixas o suficiente nos períodos
frios para congelar os alimentos, e a baixa pressão
atmosférica nas altas montanhas possibilitava a
sublimação.` },
      { id: 'E', type: 'text', value: `Os alimentos, após congelados naturalmente, eram
prensados para aumentar a pressão, de forma que a
sublimação ocorresse.` },
    ],
    correct: 'D',
    explanation: `A liofilização combina congelamento com sublimação da água. Nas grandes altitudes andinas, as baixas temperaturas congelavam os alimentos e a baixa pressão favorecia a passagem direta do gelo ao vapor, permitindo a conservação.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 12,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Para exemplificar probabilidade, um grupo de estudantes fez
uma atividade envolvendo química, conforme o
procedimento descrito.

Cada estudante recebeu um recipiente contendo 800 mL de
água destilada com algumas gotas do indicador de pH
alaranjado de metila e soluções de HCl e NaOH em diversas
concentrações.

Cada estudante deveria jogar apenas uma vez dois dados, um
amarelo e um vermelho, ambos contendo os números de 1 a 6.

• Ao jogar o dado vermelho, o estudante deveria adicionar ao
recipiente 100 mL de solução do ácido clorídrico na
concentração 10−n mol/L, sendo n o número marcado no dado
(por exemplo, se saísse o número 1 no dado, a solução seria
de 10−1 mol/L; se saísse 6, a solução seria de 10−6 mol/L).

• Ao jogar o dado amarelo, o estudante deveria executar o
mesmo procedimento, mas substituindo o ácido por NaOH,
totalizando assim 1,0 L de solução.

• O estudante deveria observar a cor da solução ao final do
experimento.

A professora mostrou a tabela com alguns valores de pH
resultantes conforme os números tirados nos dados. Ela
pediu, então, aos estudantes que utilizassem seus
conhecimentos e a tabela para prever em quais combinações
de dados a cor final do indicador seria vermelha.

A probabilidade de, após realizar o procedimento descrito, a
solução final preparada por um estudante ser vermelha é de:

Note e adote:
Considere a seguinte relação entre pH do meio e coloração do indicador
alaranjado de metila:

Menor que 3,3 3,3 a 4,4 Maior que 4,4

Vermelho Laranja Amarelo`,
    images: [{"src":"/fuvest/2020/images/q12_source_1.jpg","width":547,"height":86},{"src":"/fuvest/2020/images/q12_ph_table.jpg","width":618,"height":313}],
    alternatives: [
      { id: 'A', type: 'text', value: `1/12` },
      { id: 'B', type: 'text', value: `1/6` },
      { id: 'C', type: 'text', value: `1/4` },
      { id: 'D', type: 'text', value: `11/36` },
      { id: 'E', type: 'text', value: `5/12` },
    ],
    correct: 'C',
    explanation: `Após a mistura, o volume é 1 L. Para pH inferior a 3,3, devem sobrar íons H⁺ suficientes: isso ocorre com o dado vermelho igual a 1 e o amarelo de 2 a 6, ou com o vermelho igual a 2 e o amarelo de 3 a 6. São 5 + 4 = 9 resultados entre 36 equiprováveis: 9/36 = 1/4.`,
    subject: ['mat'],
    topics: ['Trigonometria', 'Questões aleatórias'],
  },
  {
    id: 13,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Carros que saem da cidade A rumo a alguma das cidades
turísticas E, F e G fazem caminhos diversos, passando por pelo
menos uma das cidades B, C e D, apenas no sentido indicado
pelas setas, como mostra a figura. Os números indicados nas
setas são as probabilidades, dentre esses carros, de se ir de
uma cidade a outra.

Nesse cenário, a probabilidade de um carro ir de A a F é`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q13_1.jpg","width":435,"height":161},{"src":"/fuvest/2020/images/fuvest_2020_f1q13_2.jpg","width":435,"height":160}],
    alternatives: [
      { id: 'A', type: 'text', value: `0,120.` },
      { id: 'B', type: 'text', value: `0,216.` },
      { id: 'C', type: 'text', value: `0,264.` },
      { id: 'D', type: 'text', value: `0,336.` },
      { id: 'E', type: 'text', value: `0,384.` },
    ],
    correct: 'E',
    explanation: `Somam-se as probabilidades dos caminhos que terminam em F. Pelo diagrama, A→C→F tem probabilidade 0,2 × 0,6 = 0,12; A→B→C→F, 0,8 × 0,1 × 0,6 = 0,048; A→B→D→F, 0,8 × 0,9 × 0,3 = 0,216. A soma é 0,384.`,
    subject: ['mat'],
    topics: ['Trigonometria', 'Questões aleatórias'],
  },
  {
    id: 14,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Se, em 15 anos, o salário mínimo teve um aumento nominal
de 300% e a inflação foi de 100%, é correto afirmar que o
aumento real do salário mínimo, nesse período, foi de`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `50%.` },
      { id: 'B', type: 'text', value: `100%.` },
      { id: 'C', type: 'text', value: `150%.` },
      { id: 'D', type: 'text', value: `200%.` },
      { id: 'E', type: 'text', value: `250%.` },
    ],
    correct: 'B',
    explanation: `Um aumento nominal de 300% multiplica o salário por 4. A inflação de 100% multiplica os preços por 2. O poder de compra final é, portanto, 4/2 = 2 vezes o inicial: aumento real de 100%.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 15,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `O cilindro de papelão central de uma fita crepe tem raio
externo de 3 cm. A fita tem espessura de 0,01 cm e dá 100
voltas completas. Considerando que, a cada volta, o raio
externo do rolo é
aumentado no valor da
espessura da fita, o
comprimento total da fita
é de, aproximadamente,

Note e adote:
π ≈ 3,14.`,
    images: [{"src":"/fuvest/2020/images/q15_source_1.jpg","width":351,"height":117},{"src":"/fuvest/2020/images/q15_source_2.jpg","width":351,"height":117},{"src":"/fuvest/2020/images/q15_source_3.jpg","width":351,"height":117}],
    alternatives: [
      { id: 'A', type: 'text', value: `9,4 m.` },
      { id: 'B', type: 'text', value: `11,0 m.` },
      { id: 'C', type: 'text', value: `18,8 m.` },
      { id: 'D', type: 'text', value: `22,0 m.` },
      { id: 'E', type: 'text', value: `25,1 m.` },
    ],
    correct: 'D',
    explanation: `Ao longo das 100 voltas, o raio cresce de aproximadamente 3 cm a 4 cm, com raio médio próximo de 3,5 cm. O comprimento é aproximadamente 100 × 2π × 3,5 = 2198 cm, ou 22,0 m.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 16,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Um objeto é formado por 4 hastes rígidas conectadas em seus
extremos por articulações, cujos centros são os vértices de um
paralelogramo. As hastes movimentam‐se de tal forma que o
paralelogramo permanece sempre no mesmo plano. A cada
configuração desse objeto, associa‐se θ, a medida do menor
ângulo interno do paralelogramo. A área da região delimitada
pelo paralelogramo quando θ = 90° é A.

Para que a área da região delimitada pelo paralelogramo seja
A/2, o valor de θ é, necessariamente, igual a`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q21_1.jpg","width":540,"height":183}],
    alternatives: [
      { id: 'A', type: 'text', value: `15°.` },
      { id: 'B', type: 'text', value: `22,5°.` },
      { id: 'C', type: 'text', value: `30°.` },
      { id: 'D', type: 'text', value: `45°.` },
      { id: 'E', type: 'text', value: `60°.` },
    ],
    correct: 'C',
    explanation: `A área do paralelogramo é ab sen θ, sendo máxima quando sen θ = 1. Para metade da área máxima, sen θ = 1/2. O menor ângulo positivo correspondente é 30°.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 17,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `A menor esfera na qual um paralelepípedo reto‐retângulo de
medidas 7 cm × 4 cm × 4 cm está inscrito tem diâmetro de`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `9 cm.` },
      { id: 'B', type: 'text', value: `10 cm.` },
      { id: 'C', type: 'text', value: `11 cm.` },
      { id: 'D', type: 'text', value: `12 cm.` },
      { id: 'E', type: 'text', value: `15 cm.` },
    ],
    correct: 'A',
    explanation: `O diâmetro da esfera circunscrita é a diagonal espacial do paralelepípedo. Assim, d = √(7² + 4² + 4²) = √81 = 9 cm.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 18,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `A dona de uma lanchonete observou que, vendendo um
combo a R$ 10,00, 200 deles são vendidos por dia, e que, para
cada redução de R$ 1,00 nesse preço, ela vende 100 combos
a mais. Nessas condições, qual é a máxima arrecadação diária
que ela espera obter com a venda desse combo?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `R$ 2.000,00` },
      { id: 'B', type: 'text', value: `R$ 3.200,00` },
      { id: 'C', type: 'text', value: `R$ 3.600,00` },
      { id: 'D', type: 'text', value: `R$ 4.000,00` },
      { id: 'E', type: 'text', value: `R$ 4.800,00` },
    ],
    correct: 'C',
    explanation: `Se x é o desconto em reais, vendem-se 200 + 100x unidades a 10 − x reais. A receita é R(x) = (10 − x)(200 + 100x) = −100x² + 800x + 2000. O vértice ocorre em x = 4, dando R = 6 × 600 = R$ 3.600,00.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 19,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `A função E de Euler determina, para cada número natural n, a
quantidade de números naturais menores do que n cujo
máximo divisor comum com n é igual a 1. Por exemplo,
E(6) = 2 pois os números menores do que 6 com tal
propriedade são 1 e 5. Qual o valor máximo de E(n), para n de
20 a 25?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `19` },
      { id: 'B', type: 'text', value: `20` },
      { id: 'C', type: 'text', value: `22` },
      { id: 'D', type: 'text', value: `24` },
      { id: 'E', type: 'text', value: `25` },
    ],
    correct: 'C',
    explanation: `Devem-se contar os inteiros positivos menores que n e coprimos com n. Para n entre 20 e 25, o maior resultado ocorre em 23, que é primo: todos os 22 números de 1 a 22 são coprimos com ele. Os demais valores do intervalo são compostos e não atingem essa contagem.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 20,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Se 3x² − 9x + 7 = (x − a)³ − (x − b)³, para todo número real x, o valor de a + b é`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `3.` },
      { id: 'B', type: 'text', value: `5.` },
      { id: 'C', type: 'text', value: `6.` },
      { id: 'D', type: 'text', value: `9.` },
      { id: 'E', type: 'text', value: `12.` },
    ],
    correct: 'A',
    explanation: `Expandindo (x − a)³ − (x − b)³, o coeficiente de x² é 3(b − a), e o de x é −3(b − a)(a + b). Comparando com 3x² − 9x + 7, obtemos b − a = 1 e a + b = 3. Logo a = 1 e b = 2, o que também reproduz o termo constante 7.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 21,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Uma agência de turismo vendeu um total de 78 passagens
para os destinos: Lisboa, Paris e Roma. Sabe‐se que o número
de passagens vendidas para Paris foi o dobro do número de
passagens vendidas para os outros dois destinos
conjuntamente. Sabe‐se também que, para Roma, foram
vendidas duas passagens a mais que a metade das vendidas
para Lisboa. Qual foi o total de passagens vendidas,
conjuntamente, para Paris e Roma?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `26` },
      { id: 'B', type: 'text', value: `38` },
      { id: 'C', type: 'text', value: `42` },
      { id: 'D', type: 'text', value: `62` },
      { id: 'E', type: 'text', value: `68` },
    ],
    correct: 'D',
    explanation: `Se P, L e R são os números de visitantes, P = 2(L + R) e P + L + R = 78 dão P = 52 e L + R = 26. Como R = L/2 + 2, temos L = 16 e R = 10. Assim, P + R = 62.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 22,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Um ponto (x, y) do plano cartesiano pertence ao conjunto F
se é equidistante dos eixos OX e OY e pertence ao círculo de
equação x² + y² − 2x − 6y + 2 = 0. É correto afirmar que F`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `é um conjunto vazio.` },
      { id: 'B', type: 'text', value: `tem exatamente 2 pontos, um no primeiro quadrante e
outro no segundo quadrante.` },
      { id: 'C', type: 'text', value: `tem exatamente 2 pontos, ambos no primeiro quadrante.` },
      { id: 'D', type: 'text', value: `tem exatamente 3 pontos, sendo dois no primeiro
quadrante e outro no segundo quadrante.` },
      { id: 'E', type: 'text', value: `tem exatamente 4 pontos, sendo dois no primeiro
quadrante e dois no segundo quadrante.` },
    ],
    correct: 'D',
    explanation: `A equidistância aos eixos exige y = x ou y = −x. Substituindo na equação da circunferência, y = x fornece x = 2 ± √3, ambos positivos, e y = −x fornece x = −1, y = 1. Há três pontos: dois no primeiro quadrante e um no segundo.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 23,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Uma cidade é dividida em dois Setores: o Setor Sul, com área
de 10 km2, e o Setor Norte, com área de 30 km2. Após um final
de semana, foram divulgados os seguintes totais
pluviométricos:

Dia Sul Norte
sábado 7 mm 11 mm
domingo 9 mm 17 mm

É correto afirmar que o total pluviométrico desse final de
semana na cidade inteira foi de`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `15 mm.` },
      { id: 'B', type: 'text', value: `17 mm.` },
      { id: 'C', type: 'text', value: `22 mm.` },
      { id: 'D', type: 'text', value: `25 mm.` },
      { id: 'E', type: 'text', value: `28 mm.` },
    ],
    correct: 'D',
    explanation: `Somando as precipitações do fim de semana em cada setor, obtêm-se 16 mm no Sul e 28 mm no Norte. A média deve ser ponderada pelas áreas: (10 × 16 + 30 × 28)/(10 + 30) = 25 mm.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 24,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Bill Watterson, Calvin and Hobbes. Disponível em https://www.gocomics.com/.

As possíveis soluções, em polegadas (inches, em inglês), para
o problema matemático proposto no quadrinho, no caso em
que os pontos A, B e C estão em uma mesma reta, são`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q24_1.jpg","width":426,"height":533}],
    alternatives: [
      { id: 'A', type: 'text', value: `10/3 e 10.` },
      { id: 'B', type: 'text', value: `10/3, 5 e 10.` },
      { id: 'C', type: 'text', value: `5/3, 10/3 e 10.` },
      { id: 'D', type: 'text', value: `5/3 e 10.` },
      { id: 'E', type: 'text', value: `10/3 e 5.` },
    ],
    correct: 'A',
    explanation: `O quadrinho informa AC = 2AB e BC = 5 polegadas. Colocando B na origem e C na posição 5, a coordenada x de A satisfaz |x − 5| = 2|x|. As soluções x = 5/3 e x = −5 fornecem AC = 10/3 e AC = 10 polegadas, respectivamente.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 25,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Assigning female genders to digital assistants such as
Apple’s Siri and Amazon’s Alexa is helping entrench harmful
gender biases, according to a UN agency.
Research released by Unesco claims that the often
submissive and flirty responses offered by the systems to many
queries – including outright abusive ones – reinforce ideas of
women as subservient.
“Because the speech of most voice assistants is female, it
sends a signal that women are obliging, docile and eager‐to‐
please helpers, available at the touch of a button or with a
blunt voice command like ‘hey’ or ‘OK’”, the report said.
“The assistant holds no power of agency beyond what the
commander asks of it. It honours commands and responds to
queries regardless of their tone or hostility. In many
communities, this reinforces commonly held gender biases
that women are subservient and tolerant of poor treatment.”
The Unesco publication was entitled “I’d Blush if I Could”;
a reference to the response Apple’s Siri assistant offers to the
phrase: “You’re a slut.” Amazon’s Alexa will respond: “Well,
thanks for the feedback.”
The paper said such firms were “staffed by overwhelmingly
male engineering teams” and have built AI (Artificial
Intelligence) systems that “cause their feminised digital
assistants to greet verbal abuse with catch‐me‐if‐you‐can
flirtation”.
Saniye Gülser Corat, Unesco’s director for gender equality,
said: “The world needs to pay much closer attention to how,
when and whether AI technologies are gendered and,
crucially, who is gendering them.”

The Guardian, May, 2019. Adaptado.

Conforme o texto, em relação às mulheres, um efeito
decorrente do fato de assistentes digitais reforçarem
estereótipos de gênero é`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a inclusão de uma única voz nos dispositivos.` },
      { id: 'B', type: 'text', value: `a normalização de formas de assédio sexista.` },
      { id: 'C', type: 'text', value: `o poder de influência positiva sobre as pessoas.` },
      { id: 'D', type: 'text', value: `o incremento de vendas e customização de robôs.` },
      { id: 'E', type: 'text', value: `a busca por formas que reflitam problemas sociais.` },
    ],
    correct: 'B',
    explanation: `O texto critica assistentes com nomes e vozes femininos programados para responder de modo submisso a agressões. Isso contribui para naturalizar o assédio sexista e reforça estereótipos de gênero.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 26,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Assigning female genders to digital assistants such as
Apple’s Siri and Amazon’s Alexa is helping entrench harmful
gender biases, according to a UN agency.
Research released by Unesco claims that the often
submissive and flirty responses offered by the systems to many
queries – including outright abusive ones – reinforce ideas of
women as subservient.
“Because the speech of most voice assistants is female, it
sends a signal that women are obliging, docile and eager‐to‐
please helpers, available at the touch of a button or with a
blunt voice command like ‘hey’ or ‘OK’”, the report said.
“The assistant holds no power of agency beyond what the
commander asks of it. It honours commands and responds to
queries regardless of their tone or hostility. In many
communities, this reinforces commonly held gender biases
that women are subservient and tolerant of poor treatment.”
The Unesco publication was entitled “I’d Blush if I Could”;
a reference to the response Apple’s Siri assistant offers to the
phrase: “You’re a slut.” Amazon’s Alexa will respond: “Well,
thanks for the feedback.”
The paper said such firms were “staffed by overwhelmingly
male engineering teams” and have built AI (Artificial
Intelligence) systems that “cause their feminised digital
assistants to greet verbal abuse with catch‐me‐if‐you‐can
flirtation”.
Saniye Gülser Corat, Unesco’s director for gender equality,
said: “The world needs to pay much closer attention to how,
when and whether AI technologies are gendered and,
crucially, who is gendering them.”

The Guardian, May, 2019. Adaptado.

Segundo o texto, o título do relatório publicado pela
Unesco ‐ “I´d Blush if I Could” ‐, no que diz respeito aos
assistentes digitais, indica`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `resposta padrão para comandos que incluem impropérios.` },
      { id: 'B', type: 'text', value: `capacidade tecnológica para selecionar temas sensíveis ao
grande público.` },
      { id: 'C', type: 'text', value: `preocupação dos fabricantes de dispositivos eletrônicos
com usuários conservadores.` },
      { id: 'D', type: 'text', value: `perda de controle das formas de interação entre seres
humanos e máquinas.` },
      { id: 'E', type: 'text', value: `necessidade de elaboração de sistemas integrados de
reconhecimento de voz.` },
    ],
    correct: 'A',
    explanation: `O título “I’d blush if I could” reproduz a resposta dada pela assistente Siri a uma expressão ofensiva. No contexto, essa reação ilustra a programação de respostas submissas diante de comandos com impropérios.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 27,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Assigning female genders to digital assistants such as
Apple’s Siri and Amazon’s Alexa is helping entrench harmful
gender biases, according to a UN agency.
Research released by Unesco claims that the often
submissive and flirty responses offered by the systems to many
queries – including outright abusive ones – reinforce ideas of
women as subservient.
“Because the speech of most voice assistants is female, it
sends a signal that women are obliging, docile and eager‐to‐
please helpers, available at the touch of a button or with a
blunt voice command like ‘hey’ or ‘OK’”, the report said.
“The assistant holds no power of agency beyond what the
commander asks of it. It honours commands and responds to
queries regardless of their tone or hostility. In many
communities, this reinforces commonly held gender biases
that women are subservient and tolerant of poor treatment.”
The Unesco publication was entitled “I’d Blush if I Could”;
a reference to the response Apple’s Siri assistant offers to the
phrase: “You’re a slut.” Amazon’s Alexa will respond: “Well,
thanks for the feedback.”
The paper said such firms were “staffed by overwhelmingly
male engineering teams” and have built AI (Artificial
Intelligence) systems that “cause their feminised digital
assistants to greet verbal abuse with catch‐me‐if‐you‐can
flirtation”.
Saniye Gülser Corat, Unesco’s director for gender equality,
said: “The world needs to pay much closer attention to how,
when and whether AI technologies are gendered and,
crucially, who is gendering them.”

The Guardian, May, 2019. Adaptado.

De acordo com o texto, na opinião de Saniye Gülser Corat,
tecnologias que envolvem Inteligência Artificial, entre outros
aspectos,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `são desenvolvidas segundo normas prescritas em
convenções internacionais.` },
      { id: 'B', type: 'text', value: `devem ser monitoradas por empresas multinacionais
geridas por mulheres.` },
      { id: 'C', type: 'text', value: `funcionam melhor quando associadas a dispositivos
sincronizados em escala mundial.` },
      { id: 'D', type: 'text', value: `dependem de atualização constante para garantia de
desempenho satisfatório.` },
      { id: 'E', type: 'text', value: `requerem avaliação ampla, quanto à possível presença de
elementos tendenciosos em sua concepção.` },
    ],
    correct: 'E',
    explanation: `A declaração citada recomenda examinar quando, como e por quem as tecnologias são concebidas e de que modo reproduzem gênero e preconceitos. Portanto, requer uma avaliação ampla de possíveis vieses de concepção.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 28,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Disponível em https://www.facebook.com/groups/englishmemes/.

O efeito de comicidade que se obtém do meme decorre,
sobretudo, da`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q28_1.jpg","width":536,"height":231},{"src":"/fuvest/2020/images/fuvest_2020_f1q29_1.jpg","width":536,"height":231}],
    alternatives: [
      { id: 'A', type: 'text', value: `repetição da palavra “never”.` },
      { id: 'B', type: 'text', value: `ambiguidade gerada pela expressão “buy her flowers”.` },
      { id: 'C', type: 'text', value: `asserção “your wife says”.` },
      { id: 'D', type: 'text', value: `contradição presente na frase “To be honest”.` },
      { id: 'E', type: 'text', value: `pergunta “is that true?”.` },
    ],
    correct: 'B',
    explanation: `“Buy her flowers” pode significar comprar flores para ela ou comprar as flores que ela vende. O meme explora essa ambiguidade sintática e semântica para produzir humor.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 29,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Scientists have long touted DNA’s potential as an ideal
storage medium; it’s dense, easy to replicate, and stable over
millennia. But in order to replace existing silicon‐chip or
magnetic‐tape storage technologies, DNA will have to get a lot
cheaper to predictably read, write, and package.
That’s where scientists like Hyunjun Park come in. He and
the other cofounders of Catalog, an MIT DNA‐storage spinoff
emerging out of stealth on Tuesday, are building a machine
that will write a terabyte of data a day, using 500 trillion
molecules of DNA.
If successful, DNA storage could be the answer to a
uniquely 21st‐century problem: information overload. Five
years ago humans had produced 4.4 zettabytes of data; that's
set to explode to 160 zettabytes (each year!) by 2025. Current
infrastructure can handle only a fraction of the coming data
deluge, which is expected to consume all the world's
microchip‐grade silicon by 2040.
“Today’s technology is already close to the physical limits
of scaling,” says Victor Zhirnov, chief scientist of the
Semiconductor Research Corporation. “DNA has an
information‐storage density several orders of magnitude
higher than any other known storage technology.”
How dense exactly? Imagine formatting every movie ever
made into DNA; it would be smaller than the size of a sugar
cube. And it would last for 10,000 years.

Wired, June, 2018. Disponível em https://www.wired.com/. Adaptado.

Afirma‐se no texto que, no futuro, a tecnologia de gravação
em moléculas de DNA`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `será utilizada para sequenciar trilhões de moléculas
destinadas à pesquisa médica.` },
      { id: 'B', type: 'text', value: `deverá ter seu uso expandido no campo da genética e
áreas afins.` },
      { id: 'C', type: 'text', value: `continuará sendo inviável comparada a tecnologias
convencionais.` },
      { id: 'D', type: 'text', value: `terá de ser adaptada para o propósito de ler, codificar e
guardar dados.` },
      { id: 'E', type: 'text', value: `poderá ser a solução para o problema de espaço de
armazenamento de informação digital.` },
    ],
    correct: 'E',
    explanation: `O DNA apresenta grande densidade de armazenamento e pode conservar enormes volumes de dados em pouco espaço. O texto o apresenta como uma possível solução para a limitação física do armazenamento digital.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 30,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Scientists have long touted DNA’s potential as an ideal
storage medium; it’s dense, easy to replicate, and stable over
millennia. But in order to replace existing silicon‐chip or
magnetic‐tape storage technologies, DNA will have to get a lot
cheaper to predictably read, write, and package.
That’s where scientists like Hyunjun Park come in. He and
the other cofounders of Catalog, an MIT DNA‐storage spinoff
emerging out of stealth on Tuesday, are building a machine
that will write a terabyte of data a day, using 500 trillion
molecules of DNA.
If successful, DNA storage could be the answer to a
uniquely 21st‐century problem: information overload. Five
years ago humans had produced 4.4 zettabytes of data; that's
set to explode to 160 zettabytes (each year!) by 2025. Current
infrastructure can handle only a fraction of the coming data
deluge, which is expected to consume all the world's
microchip‐grade silicon by 2040.
“Today’s technology is already close to the physical limits
of scaling,” says Victor Zhirnov, chief scientist of the
Semiconductor Research Corporation. “DNA has an
information‐storage density several orders of magnitude
higher than any other known storage technology.”
How dense exactly? Imagine formatting every movie ever
made into DNA; it would be smaller than the size of a sugar
cube. And it would last for 10,000 years.

Wired, June, 2018. Disponível em https://www.wired.com/. Adaptado.

Conforme o texto, cientistas preveem que, em pouco mais de
20 anos,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a geração de dados pela humanidade chegará à marca de
160 zettabytes.` },
      { id: 'B', type: 'text', value: `a armazenagem de todos os dados produzidos esgotará o
estoque mundial de microchips de silício.` },
      { id: 'C', type: 'text', value: `a densidade das moléculas de DNA terá aumentado
exponencialmente.` },
      { id: 'D', type: 'text', value: `o custo para gravação de dados digitais será maior que
hoje.` },
      { id: 'E', type: 'text', value: `as novas tecnologias de informação serão bem mais
duradouras que as atuais.` },
    ],
    correct: 'B',
    explanation: `A previsão para 2040 é que a quantidade de informação produzida ultrapasse a capacidade associada ao estoque mundial de microchips de silício. O limite mencionado é o armazenamento de dados, não o desaparecimento da informação.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 31,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Harlem

What happens to a dream deferred?

Does it dry up
like a raisin in the sun?
Or fester like a sore—
And then run?
Does it stink like rotten meat?
Or crust and sugar over—
like a syrupy sweet?

Maybe it just sags
like a heavy load.

Or does it explode?

Langston Hughes, Selected Poems of Langston Hughes (1990).
Disponível em http://www.poetryfoundation.org/.

As tentativas de resposta do poeta à pergunta “What happens
to a dream deferred?” evocam imagens de`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `animosidade e revolta.` },
      { id: 'B', type: 'text', value: `remorso e compaixão.` },
      { id: 'C', type: 'text', value: `deterioração e destruição.` },
      { id: 'D', type: 'text', value: `empatia e complacência.` },
      { id: 'E', type: 'text', value: `aprisionamento e passividade.` },
    ],
    correct: 'C',
    explanation: `As imagens de fruta ressequida, ferida, carne podre e explosão associam o sonho adiado à deterioração e à destruição. A sucessão de perguntas evidencia consequências negativas da frustração.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 32,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Cantiga de enganar

(...)
O mundo não tem sentido.
O mundo e suas canções
de timbre mais comovido
estão calados, e a fala
que de uma para outra sala
ouvimos em certo instante
é silêncio que faz eco
e que volta a ser silêncio
no negrume circundante.
Silêncio: que quer dizer?
Que diz a boca do mundo?
Meu bem, o mundo é fechado,
se não for antes vazio.
O mundo é talvez: e é só.
Talvez nem seja talvez.
O mundo não vale a pena,
mas a pena não existe.
Meu bem, façamos de conta.
De sofrer e de olvidar,
de lembrar e de fruir,
de escolher nossas lembranças
e revertê-las, acaso
se lembrem demais em nós.
Façamos, meu bem, de conta
– mas a conta não existe –
que é tudo como se fosse,
ou que, se fora, não era.
(...)

Carlos Drummond de Andrade, Claro Enigma.

Em Claro Enigma, a ideia de engano surge sob a perspectiva
do sujeito maduro, já afastado das ilusões, como se lê no
verso‐síntese “Tu não me enganas, mundo, e não te engano a
ti.” (“Legado”). O excerto de “Cantiga de enganar” apresenta
a relação do eu com o mundo mediada`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `pela música, que ressoa em canções líricas.` },
      { id: 'B', type: 'text', value: `pela cor, brilhante na claridade solar.` },
      { id: 'C', type: 'text', value: `pela afirmação de valores sólidos.` },
      { id: 'D', type: 'text', value: `pela memória, que corre fluida no tempo.` },
      { id: 'E', type: 'text', value: `pelo despropósito de um faz‐de‐conta.` },
    ],
    correct: 'E',
    explanation: `O poema questiona o sentido e até a existência de valores estáveis no mundo. “Façamos de conta”, seguido da negação da própria conta, expressa uma relação sustentada pelo faz-de-conta sem fundamento, em consonância com o ceticismo de Claro Enigma.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 33,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Os textos literários são obras de discurso, a que falta a imediata
referencialidade da linguagem corrente; poéticos, abolem,
“destroem” o mundo circundante, cotidiano, graças à função
irrealizante da imaginação que os constrói. E prendem‐nos na
teia de sua linguagem, a que devem o poder de apelo estético que
nos enleia; seduz‐nos o mundo outro, irreal, neles configurado
(...). No entanto, da adesão a esse “mundo de papel”, quando
retornamos ao real, nossa experiência, ampliada e renovada pela
experiência da obra, à luz do que nos revelou, possibilita
redescobri‐lo, sentindo‐o e pensando‐o de maneira diferente e
nova. A ilusão, a mentira, o fingimento da ficção, aclara o real ao
desligar‐se dele, transfigurando‐o; e aclara‐o já pelo insight que
em nós provocou.

Benedito Nunes, “Ética e leitura”, de Crivo de Papel.

O que eu precisava era ler um romance fantástico, um
romance besta, em que os homens e as mulheres fossem
criações absurdas, não andassem magoando‐se, traindo‐se.
Histórias fáceis, sem almas complicadas. Infelizmente essas
leituras já não me comovem.

Graciliano Ramos, Angústia.

Romance desagradável, abafado, ambiente sujo, povoado de
ratos, cheio de podridões, de lixo. Nenhuma concessão ao
gosto do público. Solilóquio doido, enervante.

Graciliano Ramos, Memórias do Cárcere, em nota a respeito de seu livro
Angústia.

O argumento de Benedito Nunes, em torno da natureza
artística da literatura, leva a considerar que a obra só assume
função transformadora se`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `estabelece um contraponto entre a fantasia e o mundo.` },
      { id: 'B', type: 'text', value: `utiliza a linguagem para informar sobre o mundo.` },
      { id: 'C', type: 'text', value: `instiga no leitor uma atitude reflexiva diante do mundo.` },
      { id: 'D', type: 'text', value: `oferece ao leitor uma compensação anestesiante do mundo.` },
      { id: 'E', type: 'text', value: `conduz o leitor a ignorar o mundo real.` },
    ],
    correct: 'C',
    explanation: `Para o crítico, a literatura transforma a experiência quando mobiliza a consciência do leitor para compreender e interrogar a realidade. Sua força não depende de oferecer uma lição pronta, mas de estimular reflexão diante do mundo.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 34,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Os textos literários são obras de discurso, a que falta a imediata
referencialidade da linguagem corrente; poéticos, abolem,
“destroem” o mundo circundante, cotidiano, graças à função
irrealizante da imaginação que os constrói. E prendem‐nos na
teia de sua linguagem, a que devem o poder de apelo estético que
nos enleia; seduz‐nos o mundo outro, irreal, neles configurado
(...). No entanto, da adesão a esse “mundo de papel”, quando
retornamos ao real, nossa experiência, ampliada e renovada pela
experiência da obra, à luz do que nos revelou, possibilita
redescobri‐lo, sentindo‐o e pensando‐o de maneira diferente e
nova. A ilusão, a mentira, o fingimento da ficção, aclara o real ao
desligar‐se dele, transfigurando‐o; e aclara‐o já pelo insight que
em nós provocou.

Benedito Nunes, “Ética e leitura”, de Crivo de Papel.

O que eu precisava era ler um romance fantástico, um
romance besta, em que os homens e as mulheres fossem
criações absurdas, não andassem magoando‐se, traindo‐se.
Histórias fáceis, sem almas complicadas. Infelizmente essas
leituras já não me comovem.

Graciliano Ramos, Angústia.

Romance desagradável, abafado, ambiente sujo, povoado de
ratos, cheio de podridões, de lixo. Nenhuma concessão ao
gosto do público. Solilóquio doido, enervante.

Graciliano Ramos, Memórias do Cárcere, em nota a respeito de seu livro
Angústia.

Se o discurso literário “aclara o real ao desligar‐se dele,
transfigurando‐o”, pode‐se dizer que Luís da Silva, o narrador‐
protagonista de Angústia, já não se comove com a leitura de
“histórias fáceis, sem almas complicadas” porque`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `rejeita, como jornalista, a escrita de ficção.` },
      { id: 'B', type: 'text', value: `prefere alienar‐se com narrativas épicas.` },
      { id: 'C', type: 'text', value: `é indiferente às histórias de fundo sentimental.` },
      { id: 'D', type: 'text', value: `está engajado na militância política.` },
      { id: 'E', type: 'text', value: `se afunda na negatividade própria do fracassado.` },
    ],
    correct: 'E',
    explanation: `Luís da Silva não consegue aderir às narrativas fáceis porque sua consciência está dominada pela frustração e pela negatividade de sua própria condição. A recusa manifesta o mergulho do personagem no fracasso.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 35,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Os textos literários são obras de discurso, a que falta a imediata
referencialidade da linguagem corrente; poéticos, abolem,
“destroem” o mundo circundante, cotidiano, graças à função
irrealizante da imaginação que os constrói. E prendem‐nos na
teia de sua linguagem, a que devem o poder de apelo estético que
nos enleia; seduz‐nos o mundo outro, irreal, neles configurado
(...). No entanto, da adesão a esse “mundo de papel”, quando
retornamos ao real, nossa experiência, ampliada e renovada pela
experiência da obra, à luz do que nos revelou, possibilita
redescobri‐lo, sentindo‐o e pensando‐o de maneira diferente e
nova. A ilusão, a mentira, o fingimento da ficção, aclara o real ao
desligar‐se dele, transfigurando‐o; e aclara‐o já pelo insight que
em nós provocou.

Benedito Nunes, “Ética e leitura”, de Crivo de Papel.

O que eu precisava era ler um romance fantástico, um
romance besta, em que os homens e as mulheres fossem
criações absurdas, não andassem magoando‐se, traindo‐se.
Histórias fáceis, sem almas complicadas. Infelizmente essas
leituras já não me comovem.

Graciliano Ramos, Angústia.

Romance desagradável, abafado, ambiente sujo, povoado de
ratos, cheio de podridões, de lixo. Nenhuma concessão ao
gosto do público. Solilóquio doido, enervante.

Graciliano Ramos, Memórias do Cárcere, em nota a respeito de seu livro
Angústia.

Para Graciliano Ramos, Angústia não faz concessão ao gosto
do público na medida em que compõe uma atmosfera`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `dramática, ao representar as tensões de seu tempo.` },
      { id: 'B', type: 'text', value: `grotesca, ao eliminar a expressão individual.` },
      { id: 'C', type: 'text', value: `satírica, ao reduzir os eventos ao plano do riso.` },
      { id: 'D', type: 'text', value: `ingênua, ao simular o equilíbrio entre sujeito e mundo.` },
      { id: 'E', type: 'text', value: `alegórica, ao exaltar as imagens de sujeira.` },
    ],
    correct: 'A',
    explanation: `A tensão psicológica e social de Angústia constrói uma atmosfera dramática que representa conflitos de seu tempo. Essa elaboração contraria a expectativa de uma literatura voltada apenas à distração confortável do público.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 36,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Leia o trecho extraído de uma notícia veiculada na internet:
“O carro furou o pneu e bateu no meio fio, então eles foram
obrigados a parar. O refém conseguiu acionar a população,
que depois pegou dois dos três indivíduos e tentaram linchar
eles. O outro conseguiu fugir, mas foi preso momentos depois
por uma viatura do 5º BPM”, afirmou o major.

Disponível em https://www.gp1.com.br/.

No português do Brasil, a função sintática do sujeito não
possui, necessariamente, uma natureza de agente, ainda que
o verbo esteja na voz ativa, tal como encontrado em:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `“O carro furou o pneu”.` },
      { id: 'B', type: 'text', value: `“e bateu no meio fio”.` },
      { id: 'C', type: 'text', value: `“O refém conseguiu acionar a população”.` },
      { id: 'D', type: 'text', value: `“tentaram linchar eles”.` },
      { id: 'E', type: 'text', value: `“afirmou o major”.` },
    ],
    correct: 'A',
    explanation: `Em “O carro furou o pneu”, o carro é o sujeito gramatical, mas não é um agente que execute voluntariamente a ação: é o todo afetado pelo acontecimento em uma de suas partes. Isso exemplifica a construção discutida no texto.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 37,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `amora

a palavra amora
seria talvez menos doce
e um pouco menos vermelha
se não trouxesse em seu corpo
(como um velado esplendor)
a memória da palavra amor

a palavra amargo
seria talvez mais doce
e um pouco menos acerba
se não trouxesse em seu corpo
(como uma sombra a espreitar)
a memória da palavra amar

Marco Catalão, Sob a face neutra.

É correto afirmar que o poema`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `aborda o tema da memória, considerada uma faculdade
que torna o ser humano menos amargo e sombrio.` },
      { id: 'B', type: 'text', value: `enfoca a hesitação do eu lírico diante das palavras, o que
vem expresso pela repetição da palavra “talvez”.` },
      { id: 'C', type: 'text', value: `apresenta natureza romântica, sendo as palavras “amora”
e “amargo” metáforas do sentimento amoroso.` },
      { id: 'D', type: 'text', value: `possui reiterações sonoras que resultam em uma tensão
inusitada entre os termos “amor” e “amar”.` },
      { id: 'E', type: 'text', value: `ressalta os significados das palavras tal como se verificam
no seu uso mais corrente.` },
    ],
    correct: 'D',
    explanation: `Os pares amora/amor e amargo/amar aproximam palavras pelo som e pelas letras, mas deslocam seus sentidos afetivos. A repetição sonora cria uma tensão entre a doçura associada a amor e a amargura atribuída a amar.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 38,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `amora

a palavra amora
seria talvez menos doce
e um pouco menos vermelha
se não trouxesse em seu corpo
(como um velado esplendor)
a memória da palavra amor

a palavra amargo
seria talvez mais doce
e um pouco menos acerba
se não trouxesse em seu corpo
(como uma sombra a espreitar)
a memória da palavra amar

Marco Catalão, Sob a face neutra.

Tal como se lê no poema,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a palavra “amora” é substantivo, e “amargo”, adjetivo.` },
      { id: 'B', type: 'text', value: `o verbo “amar” ameniza o amargor da palavra “amargo”.` },
      { id: 'C', type: 'text', value: `o substantivo “corpo” apresenta sentido denotativo.` },
      { id: 'D', type: 'text', value: `o substantivo “amor” intensifica o dulçor da palavra “amora”.` },
      { id: 'E', type: 'text', value: `o verbo “amar” e o substantivo “amor” são intercambiáveis.` },
    ],
    correct: 'D',
    explanation: `Na primeira estrofe, a presença de “amor” dentro de “amora” é apresentada como responsável por tornar a palavra mais doce e vermelha. A associação intensifica metaforicamente o dulçor da fruta e de seu nome.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 39,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Uma planta é perturbada na sua sesta* pelo exército que a
pisa.

Mas mais frágil fica a bota.

Gonçalo M. Tavares, 1: poemas.
*sesta: repouso após o almoço.

Considerando que se trata de um texto literário, uma
interpretação que seja capaz de captar a sua complexidade
abordará o poema como`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `uma defesa da natureza.` },
      { id: 'B', type: 'text', value: `um ataque às forças armadas.` },
      { id: 'C', type: 'text', value: `uma defesa dos direitos humanos.` },
      { id: 'D', type: 'text', value: `uma defesa da resistência civil.` },
      { id: 'E', type: 'text', value: `um ataque à passividade.` },
    ],
    correct: 'D',
    explanation: `A planta aparentemente frágil resiste ao exército e desgasta a bota que a pisa. A inversão entre força militar e persistência da vida permite ler o texto como defesa da resistência civil.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 40,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Uma planta é perturbada na sua sesta* pelo exército que a
pisa.

Mas mais frágil fica a bota.

Gonçalo M. Tavares, 1: poemas.
*sesta: repouso após o almoço.

O ditado popular que se relaciona melhor com o poema é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Para bom entendedor, meia palavra basta.` },
      { id: 'B', type: 'text', value: `Água mole em pedra dura tanto bate até que fura.` },
      { id: 'C', type: 'text', value: `Quem com ferro fere, com ferro será ferido.` },
      { id: 'D', type: 'text', value: `Um dia é da caça, o outro é do caçador.` },
      { id: 'E', type: 'text', value: `Uma andorinha só não faz verão.` },
    ],
    correct: 'B',
    explanation: `O texto valoriza a ação persistente de algo aparentemente fraco sobre algo forte. Essa lógica corresponde ao provérbio “Água mole em pedra dura tanto bate até que fura”.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 41,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `O Twitter é uma das redes sociais mais importantes no Brasil
e no mundo. (...) Um estudo identificou que as fake news são
70% mais propensas a serem retweetadas do que fatos
verdadeiros. (...) Outra conclusão importante do trabalho diz
respeito aos famosos bots: ao contrário do que muitos
pensam, esses robôs não são os grandes responsáveis por
disseminar notícias falsas. Nem mesmo comparando com
outros robozinhos: tanto os que espalham informações
mentirosas quanto aqueles que divulgam dados verdadeiros
alcançaram o mesmo número de pessoas.

Super Interessante, “No Twitter, fake news se espalham 6 vezes mais rápido
que notícias verdadeiras”. Maio/2019.

No período “Nem mesmo comparando com outros
robozinhos: tanto os que espalham informações mentirosas
quanto aqueles que divulgam dados verdadeiros alcançaram
o mesmo número de pessoas.”, os dois‐pontos são utilizados
para introduzir uma`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `conclusão.` },
      { id: 'B', type: 'text', value: `concessão.` },
      { id: 'C', type: 'text', value: `explicação.` },
      { id: 'D', type: 'text', value: `contradição.` },
      { id: 'E', type: 'text', value: `condição.` },
    ],
    correct: 'C',
    explanation: `O segmento após os dois-pontos esclarece o funcionamento e o alcance do fenômeno mencionado antes. A pontuação introduz uma explicação, e não uma oposição ou uma conclusão independente.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 42,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Agora, o Manuel Fulô, este, sim! Um sujeito pingadinho, quase
menino – “pepino que encorujou desde pequeno” – cara de
bobo de fazenda, do segundo tipo –; porque toda fazenda tem
o seu bobo, que é, ou um velhote baixote, de barba rara no
queixo, ou um eterno rapazola, meio surdo, gago, glabro* e
alvar**. Mas gostava de fechar a cara e roncar voz, todo
enfarruscado, para mostrar brabeza, e só por descuido sorria,
um sorriso manhoso de dono de hotel. E, em suas feições de
caburé*** insalubre, amigavam‐se as marcas do sangue
aimoré e do gálico herdado: cabelo preto, corrido, que boi
lambeu; dentes de fio em meia‐lua; malares pontudos; lobo da
orelha aderente; testa curta, fugidia; olhinhos de viés e nariz
peba, mongol.

Guimarães Rosa, “Corpo fechado”, de Sagarana.

*sem pelos, sem barba **tolo ***mestiço

O retrato de Manuel Fulô, tal como aparece no fragmento,
permite afirmar que`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `há clara antipatia do narrador para com a personagem,
que por isso é caracterizada como “bobo de fazenda”.` },
      { id: 'B', type: 'text', value: `estão presentes traços de diferentes etnias, de modo a
refletir a mescla de culturas própria ao estilo do livro.` },
      { id: 'C', type: 'text', value: `a expressão “caburé insalubre” denota o determinismo
biológico que norteia o livro.` },
      { id: 'D', type: 'text', value: `é irônico o trecho “para mostrar brabeza”, pois ao fim da
narrativa Manuel Fulô sofre derrota na luta física.` },
      { id: 'E', type: 'text', value: `se apontam em sua fisionomia os “olhinhos de viés” para
caracterizar a personagem como ingênua.` },
    ],
    correct: 'B',
    explanation: `A descrição de Manuel Fulô reúne referências indígenas, europeias e asiáticas. Essa mistura de traços remete à composição cultural híbrida de Sagarana e à forma como a narrativa reelabora diferentes repertórios.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 43,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `O feminismo negro não é uma luta meramente identitária, até
porque branquitude e masculinidade também são
identidades. Pensar feminismos negros é pensar projetos
democráticos. Hoje afirmo isso com muita tranquilidade, mas
minha experiência de vida foi marcada pelo incômodo de uma
incompreensão fundamental. Não que eu buscasse respostas
para tudo. Na maior parte da minha infância e adolescência,
não tinha consciência de mim. Não sabia por que sentia
vergonha de levantar a mão quando a professora fazia uma
pergunta já supondo que eu não saberia a resposta. Por que
eu ficava isolada na hora do recreio. Por que os meninos
diziam na minha cara que não queriam formar par com a
“neguinha” na festa junina. Eu me sentia estranha e
inadequada, e, na maioria das vezes, fazia as coisas no
automático, me esforçando para não ser notada.

Djamila Ribeiro, Quem tem medo do feminismo negro?.

O trecho que melhor define a “incompreensão fundamental”
(L.6) referida pela autora é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `“não que eu buscasse respostas para tudo” (L.6‐7).` },
      { id: 'B', type: 'text', value: `“não tinha consciência de mim” (L.8).` },
      { id: 'C', type: 'text', value: `“Por que eu ficava isolada na hora do recreio” (L.10‐11).` },
      { id: 'D', type: 'text', value: `“me esforçando para não ser notada” (L.15).` },
      { id: 'E', type: 'text', value: `“sentia vergonha de levantar a mão” (L.8‐9).` },
    ],
    correct: 'B',
    explanation: `A expressão “não tinha consciência de mim” explicita a incompreensão de sua própria posição social discutida pela autora. A tomada de consciência envolve reconhecer as relações de raça e gênero que estruturam essa experiência.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 44,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `E Sofia? interroga impaciente a leitora, tal qual Orgon: Et
Tartufe? Ai, amiga minha, a resposta é naturalmente a
mesma, – também ela comia bem, dormia largo e fofo, –
coisas que, aliás, não impedem que uma pessoa ame, quando
quer amar. Se esta última reflexão é o motivo secreto da vossa
pergunta, deixai que vos diga que sois muito indiscreta, e que
eu não me quero senão com dissimulados.
Repito, comia bem, dormia largo e fofo. Chegara ao fim da
comissão das Alagoas, com elogios da imprensa; a Atalaia
chamou‐lhe “o anjo da consolação”. E não se pense que este
nome a alegrou, posto que a lisonjeasse; ao contrário,
resumindo em Sofia toda a ação da caridade, podia mortificar
as novas amigas, e fazer‐lhe perder em um dia o trabalho de
longos meses. Assim se explica o artigo que a mesma folha
trouxe no número seguinte, nomeando, particularizando e
glorificando as outras comissárias – “estrelas de primeira
grandeza”.

Machado de Assis, Quincas Borba.

No excerto, o autor recorre à intertextualidade, dialogando
com a comédia de Molière, Tartufo (1664), cuja personagem
central é um impostor da fé. Tal é a fama da peça que o nome
próprio se incorporou ao vocabulário, inclusive em português,
como substantivo comum, para designar o “indivíduo
hipócrita” ou o “falso devoto”. No contexto maior do
romance, sugere‐se que a tartufice`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `se cola à imagem da leitora, indiscreta quanto aos amores
alheios.` },
      { id: 'B', type: 'text', value: `é ação isolada de Sofia, arrivista social e benemérita
fingida.` },
      { id: 'C', type: 'text', value: `diz respeito ao filósofo Quincas Borba, o que explica o
título do livro.` },
      { id: 'D', type: 'text', value: `se produz na imprensa, apesar de esta se esquivar da
eloquência vazia.` },
      { id: 'E', type: 'text', value: `se estende à sociedade, na qual o cinismo é o trunfo dos
fortes.` },
    ],
    correct: 'E',
    explanation: `A referência a Tartufo põe em evidência uma caridade de aparência, orientada pela vaidade e pelo interesse. A crítica à hipocrisia de Sofia alcança o meio social de Quincas Borba, em que o cinismo favorece os mais fortes.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 45,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `E Sofia? interroga impaciente a leitora, tal qual Orgon: Et
Tartufe? Ai, amiga minha, a resposta é naturalmente a
mesma, – também ela comia bem, dormia largo e fofo, –
coisas que, aliás, não impedem que uma pessoa ame, quando
quer amar. Se esta última reflexão é o motivo secreto da vossa
pergunta, deixai que vos diga que sois muito indiscreta, e que
eu não me quero senão com dissimulados.
Repito, comia bem, dormia largo e fofo. Chegara ao fim da
comissão das Alagoas, com elogios da imprensa; a Atalaia
chamou‐lhe “o anjo da consolação”. E não se pense que este
nome a alegrou, posto que a lisonjeasse; ao contrário,
resumindo em Sofia toda a ação da caridade, podia mortificar
as novas amigas, e fazer‐lhe perder em um dia o trabalho de
longos meses. Assim se explica o artigo que a mesma folha
trouxe no número seguinte, nomeando, particularizando e
glorificando as outras comissárias – “estrelas de primeira
grandeza”.

Machado de Assis, Quincas Borba.

Considerando o contexto, o trecho “E não se pense que este
nome a alegrou, posto que a lisonjeasse” (L.10‐11) pode ser
reescrito, sem prejuízo de sentido, da seguinte maneira: E não
se pense que este nome a alegrou,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `apesar de lisonjeá‐la.` },
      { id: 'B', type: 'text', value: `antes a lisonjeou.` },
      { id: 'C', type: 'text', value: `porque a lisonjeava.` },
      { id: 'D', type: 'text', value: `a fim de lisonjeá‐la.` },
      { id: 'E', type: 'text', value: `tanto quanto a lisonjeava.` },
    ],
    correct: 'A',
    explanation: `“Posto que”, no contexto, introduz uma concessão: a oração admite a lisonja sem impedir o que se afirma na principal. A substituição adequada é “apesar de lisonjeá-la”.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 46,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Hoje fizeram o enterro de Bela. Todos na Chácara se
convenceram de que ela estava morta, menos eu. Se eu
pudesse não deixaria enterrá‐la ainda. Disse isso mesmo a
vovó, mas ela disse que não se pode fazer assim. Bela estava
igualzinha à que ela era no dia em que chegou da Formação,
só um pouquinho mais magra.

Todos dizem que o sofrimento da morte é a luta da alma
para se largar do corpo. Eu perguntei a vovó: “Como é que a
alma dela saiu sem o menor sofrimento, sem ela fazer uma
caretinha que fosse?”. Vovó disse que tudo isso é mistério, que
nunca a gente pode saber essas coisas com certeza. Uns
sofrem muito quando a alma se despega do corpo, outros
morrem de repente sem sofrer.

Helena Morley, Minha Vida de Menina.

Perguntas

Numa incerta hora fria
perguntei ao fantasma
que força nos prendia,
ele a mim, que presumo
estar livre de tudo
eu a ele, gasoso,
(...)

No voo que desfere
silente e melancólico,
rumo da eternidade,
ele apenas responde
(se acaso é responder
a mistérios, somar‐lhes
um mistério mais alto):

Amar, depois de perder.

Carlos Drummond de Andrade, Claro Enigma.

As perguntas da menina e do poeta versam sobre a morte. É
correto afirmar que`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `ambos guardam uma dimensão transcendente e católica,
de origem mineira.` },
      { id: 'B', type: 'text', value: `ambos ouvem respostas que lhes esclarecem em
definitivo as dúvidas existenciais.` },
      { id: 'C', type: 'text', value: `a menina mostra curiosidade acerca da morte como
episódio e o poeta especula o sentido filosófico da morte.` },
      { id: 'D', type: 'text', value: `a menina está inquieta por conhecer o destino das almas,
enquanto o poeta critica o ceticismo.` },
      { id: 'E', type: 'text', value: `as duas respostas reforçam os mistérios da vida ao
acolherem crenças populares.` },
    ],
    correct: 'C',
    explanation: `Helena Morley observa a morte como acontecimento concreto que desperta a curiosidade da menina. Drummond amplia o tema para perguntas sobre a existência e o significado da morte, em perspectiva filosófica.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 47,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `A certa personagem desvanecida

Um soneto começo em vosso gabo*:
Contemos esta regra por primeira,
Já lá vão duas, e esta é a terceira,
Já este quartetinho está no cabo.

Na quinta torce agora a porca o rabo;
A sexta vá também desta maneira:
Na sétima entro já com grã** canseira,
E saio dos quartetos muito brabo.

Agora nos tercetos que direi?
Direi que vós, Senhor, a mim me honrais
Gabando‐vos a vós, e eu fico um rei.

Nesta vida um soneto já ditei;
Se desta agora escapo, nunca mais:
Louvado seja Deus, que o acabei.

Gregório de Matos

*louvor **grande

Tipo zero

Você é um tipo que não tem tipo
Com todo tipo você se parece
E sendo um tipo que assimila tanto tipo
Passou a ser um tipo que ninguém esquece

Quando você penetra num salão
E se mistura com a multidão
Você se torna um tipo destacado
Desconfiado todo mundo fica
Que o seu tipo não se classifica
Você passa a ser um tipo desclassificado

Eu até hoje nunca vi nenhum
Tipo vulgar tão fora do comum
Que fosse um tipo tão observado
Você ficou agora convencido
Que o seu tipo já está batido
Mas o seu tipo é o tipo do tipo esgotado

Noel Rosa

O soneto de Gregório de Matos e o samba de Noel Rosa,
embora distantes na forma e no tempo, aproximam‐se por
ironizarem`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `o processo de composição do texto.` },
      { id: 'B', type: 'text', value: `a própria inferioridade ante o retratado.` },
      { id: 'C', type: 'text', value: `a singularidade de um caráter nulo.` },
      { id: 'D', type: 'text', value: `o sublime que se oculta na vulgaridade.` },
      { id: 'E', type: 'text', value: `a intolerância para com os gênios.` },
    ],
    correct: 'C',
    explanation: `Tanto o soneto satírico quanto a canção caracterizam alguém que pretende distinguir-se, mas é marcado pelo vazio de atributos. A singularidade do personagem reside paradoxalmente em seu caráter nulo.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 48,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Óbitos por cepas de bactérias resistentes a antibióticos
vêm crescendo. Um estudo do governo britânico estima que,
em escala global, os óbitos por cepas resistentes já cheguem
a 700 mil por ano. E as coisas têm piorado. Além das bactérias,
já estão surgindo fungos resistentes, como a Candida auris.
Qualquer solução passa por um esforço multinacional de
ações coordenadas. O crescente número de governos
isolacionistas e até antidarwinistas não dá razões para
otimismo. Há urgência. O estudo britânico calcula que, se
nada for feito, em 2050, as mortes por infecções resistentes
chegarão a 10 milhões ao ano.

Hélio Schwartsman, “Mortes anunciadas”. Folha de São Paulo, Abril/2019.
Adaptado.

O autor expressa preocupação com o fato de que as soluções
para o problema apontado passam por um esforço
multinacional, em face ao crescente número de governos
isolacionistas, porque`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `áreas de menor índice de desenvolvimento
socioeconômico são as únicas atingidas devido à falta de
recursos empregados em saúde e educação.` },
      { id: 'B', type: 'text', value: `as cepas resistentes surgem exclusivamente nos países
que se negam a aderir a acordos sanitários comuns,
constituindo ameaças globais.` },
      { id: 'C', type: 'text', value: `desafios atuais em meio ambiente e saúde são globais e
soluções dependem da adesão de cada país aos protocolos
internacionais.` },
      { id: 'D', type: 'text', value: `o comércio internacional é o principal responsável por
espalhar doenças nesses países, tornando‐os vulneráveis,
apesar de os programas de vacinação terem alcance mundial.` },
      { id: 'E', type: 'text', value: `a pesquisa nesta área é de âmbito nacional e, portanto,
novas drogas não terão alcance mundial, mas apenas
regional.` },
    ],
    correct: 'C',
    explanation: `A resistência a antibióticos ultrapassa fronteiras e exige ações coordenadas, assim como outros desafios ambientais e sanitários. Políticas isolacionistas dificultam a adesão a protocolos internacionais necessários para enfrentar problemas globais.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 49,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Óbitos por cepas de bactérias resistentes a antibióticos
vêm crescendo. Um estudo do governo britânico estima que,
em escala global, os óbitos por cepas resistentes já cheguem
a 700 mil por ano. E as coisas têm piorado. Além das bactérias,
já estão surgindo fungos resistentes, como a Candida auris.
Qualquer solução passa por um esforço multinacional de
ações coordenadas. O crescente número de governos
isolacionistas e até antidarwinistas não dá razões para
otimismo. Há urgência. O estudo britânico calcula que, se
nada for feito, em 2050, as mortes por infecções resistentes
chegarão a 10 milhões ao ano.

Hélio Schwartsman, “Mortes anunciadas”. Folha de São Paulo, Abril/2019.
Adaptado.

Várias espécies do gênero Candida, que pertence ao grupo de
fungos unicelulares, reproduzem‐se por brotamento
(gemulação), espalhando‐se rapidamente. No grupo dos
fungos pluricelulares, a rápida colonização de novos
ambientes deve‐se, em grande parte, ao fato de que esse
grupo possui`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `esporos haploides que germinam e colonizam o ambiente.` },
      { id: 'B', type: 'text', value: `reprodução assexuada, produzindo descendentes que são
genotipicamente diferentes.` },
      { id: 'C', type: 'text', value: `zigotos haploides que crescem aceleradamente com
mitoses sucessivas.` },
      { id: 'D', type: 'text', value: `cistos de resistência que encapsulam adultos diploides.` },
      { id: 'E', type: 'text', value: `fases autotróficas, podendo viver sem disponibilidade de
alimento externo.` },
    ],
    correct: 'A',
    explanation: `Fungos multicelulares produzem esporos que se dispersam e germinam em condições favoráveis. Os esporos haploides dão origem a hifas e permitem a colonização de novos ambientes.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 50,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Boa parte da floresta amazônica brasileira cresce sobre solos
pobres. Sua exuberância, portanto, deve‐se ao fato de que
uma grande proporção dos nutrientes advindos da própria
floresta retorna à vegetação. Quando se derruba a floresta de
uma área de dezenas de quilômetros quadrados e, em
seguida, ateia‐se fogo no local como preparo para o plantio,
esse ciclo é interrompido, o que causa uma série de efeitos.

Identifique corretamente a relação dos efeitos mencionados
em I, II e III com a derrubada e a queima da floresta.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I — Diminuição de curto prazo da fertilidade do solo pela queima da vegetação. II — Perda de biodiversidade pelo efeito direto do fogo sobre os animais silvestres. III — Diminuição da evaporação da água da chuva que atinge o solo exposto.` },
      { id: 'B', type: 'text', value: `I — Aumento de curto prazo da fertilidade do solo pelo efeito direto do calor do fogo sobre o solo superficial. II — Diminuição da diversidade de animais silvestres devido à remoção da vegetação. III — Diminuição da temperatura do solo exposto como efeito direto da remoção da vegetação.` },
      { id: 'C', type: 'text', value: `I — Aumento de curto prazo da fertilidade do solo pela deposição de cinzas. II — Perda de biodiversidade devido à remoção da vegetação. III — Aumento temporário da evaporação da água da chuva que atinge o solo exposto.` },
      { id: 'D', type: 'text', value: `I — Aumento de curto prazo da fertilidade do solo pelo efeito direto do calor do fogo sobre o solo superficial. II — Perda de biodiversidade pelo efeito direto do fogo sobre a vegetação. III — Diminuição temporária de absorção da água da chuva pelo solo exposto.` },
      { id: 'E', type: 'text', value: `I — Aumento de longo prazo da fertilidade do solo pela deposição de cinzas. II — Aumento da diversidade de animais silvestres devido à remoção da vegetação. III — Aumento da erosão do solo exposto devido à remoção da vegetação.` },
    ],
    correct: 'C',
    explanation: `As cinzas liberam nutrientes e elevam a fertilidade apenas no curto prazo; a remoção da vegetação destrói habitats e reduz a biodiversidade. A exposição do solo aumenta temporariamente a evaporação da água que o atinge. São os três efeitos reunidos em C.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 51,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Qual das curvas representa o crescimento de um inseto
hemimetábolo, desde seu nascimento até a fase adulta?`,
    images: [{"src":"/fuvest/2020/images/q51_options.jpg","width":658,"height":758}],
    alternatives: [
      { id: 'A', type: 'text', value: `Gráfico A da figura.` },
      { id: 'B', type: 'text', value: `Gráfico B da figura.` },
      { id: 'C', type: 'text', value: `Gráfico C da figura.` },
      { id: 'D', type: 'text', value: `Gráfico D da figura.` },
      { id: 'E', type: 'text', value: `Gráfico E da figura.` },
    ],
    correct: 'E',
    explanation: `Insetos hemimetábolos crescem por mudas sucessivas: o tamanho aumenta em degraus e fica aproximadamente constante entre ecdises. Após a muda que origina o adulto, cessa o crescimento corporal. O gráfico E representa esse padrão.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 52,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Analise o esquema de uma célula adulta.

As estruturas I, II, III e IV caracterizam‐se pela presença,
respectivamente, de`,
    images: [{"src":"/fuvest/2020/images/q52_source_1.jpg","width":280,"height":119},{"src":"/fuvest/2020/images/q52_source_2.jpg","width":280,"height":119},{"src":"/fuvest/2020/images/q52_source_3.jpg","width":280,"height":119}],
    alternatives: [
      { id: 'A', type: 'text', value: `glicídeo, lipídeo, água e ácido nucleico.` },
      { id: 'B', type: 'text', value: `proteína, glicídeo, água e ácido nucleico.` },
      { id: 'C', type: 'text', value: `lipídeo, proteína, glicídeo e ácido nucleico.` },
      { id: 'D', type: 'text', value: `lipídeo, glicídeo, ácido nucleico e água.` },
      { id: 'E', type: 'text', value: `glicídeo, proteína, ácido nucleico e água.` },
    ],
    correct: 'A',
    explanation: `As estruturas indicadas são parede celular, membrana plasmática, vacúolo e núcleo. Predominam, respectivamente, glicídeos como a celulose, lipídeos da bicamada, água do conteúdo vacuolar e ácidos nucleicos do material genético.`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 53,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Analise a seguinte genealogia de uma doença:

Foi levantada a hipótese de que a doença possui padrão de
herança dominante ligada ao cromossomo X. O que levou a tal
conclusão foi a`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q53_1.jpg","width":466,"height":167},{"src":"/fuvest/2020/images/fuvest_2020_f1q53_2.jpg","width":466,"height":168}],
    alternatives: [
      { id: 'A', type: 'text', value: `incidência da doença em mulheres e homens.` },
      { id: 'B', type: 'text', value: `transmissão do alelo mutante apenas às filhas de um
homem afetado.` },
      { id: 'C', type: 'text', value: `presença de pessoas afetadas em todas as gerações.` },
      { id: 'D', type: 'text', value: `transmissão do alelo mutante às filhas e aos filhos de uma
mulher afetada.` },
      { id: 'E', type: 'text', value: `presença de pelo menos um dos genitores afetados.` },
    ],
    correct: 'B',
    explanation: `Um homem transmite seu cromossomo X a todas as filhas e o Y aos filhos. Se o alelo dominante mutante está no X, todas as filhas o recebem, enquanto nenhum filho o herda do pai.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 54,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Analise os esquemas simplificados das células 1 e 2:

Células como as representadas em 1 e 2 podem ser
encontradas, respectivamente, no`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q52_1.jpg","width":560,"height":249}],
    alternatives: [
      { id: 'A', type: 'text', value: `sangue e no fígado.` },
      { id: 'B', type: 'text', value: `osso e no pâncreas.` },
      { id: 'C', type: 'text', value: `músculo esquelético e no pâncreas.` },
      { id: 'D', type: 'text', value: `músculo cardíaco e no osso.` },
      { id: 'E', type: 'text', value: `pâncreas e no fígado.` },
    ],
    correct: 'C',
    explanation: `A célula com muitos núcleos e organização especializada em contração corresponde à fibra muscular esquelética. A célula rica em retículo endoplasmático rugoso, adaptada à produção de proteínas de secreção, é compatível com o pâncreas.`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 55,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Considere uma sequência de DNA com 100 pares de bases de
comprimento contendo 32 timinas.

Quantas citosinas, guaninas e adeninas essa sequência terá,
respectivamente?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `32, 68, 68.` },
      { id: 'B', type: 'text', value: `68, 32, 68.` },
      { id: 'C', type: 'text', value: `68, 68, 32.` },
      { id: 'D', type: 'text', value: `32, 18, 18.` },
      { id: 'E', type: 'text', value: `18, 32, 18.` },
    ],
    correct: 'C',
    explanation: `Cem pares de bases correspondem a 200 nucleotídeos. Pela complementaridade, 32 timinas implicam 32 adeninas. Restam 200 − 64 = 136 bases, divididas igualmente entre citosina e guanina: 68 de cada. A ordem solicitada é 68, 68 e 32.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 56,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `A combinação entre baixa biodiversidade, altas concentrações
de poluentes e baixas concentrações de oxigênio dissolvido,
que é verificada nos rios que passam por grandes centros
urbanos no Brasil, deve‐se principalmente à(ao)`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `descarte de garrafas PET e sacolas plásticas, aumentando
a cadeia de produção de microplásticos.` },
      { id: 'B', type: 'text', value: `aumento de intervenções de engenharia, como a
construção de pontes e dragagens.` },
      { id: 'C', type: 'text', value: `aquecimento da água do rio devido ao aumento da
temperatura média nas metrópoles.` },
      { id: 'D', type: 'text', value: `descarte de esgoto doméstico e industrial sem
tratamento.` },
      { id: 'E', type: 'text', value: `ocorrência mais frequente de longos períodos de
estiagem, aumentando a evaporação.` },
    ],
    correct: 'D',
    explanation: `O lançamento de esgoto sem tratamento aumenta a matéria orgânica e a atividade de decompositores, que consomem oxigênio dissolvido. A redução do oxigênio e outros contaminantes prejudicam espécies sensíveis e diminuem a biodiversidade do rio.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 57,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Um paciente, com câncer sanguíneo (linfoma) e infectado por
HIV, fez quimioterapia e recebeu um transplante de células‐
tronco da medula óssea de um doador resistente ao HIV. Como
resultado, tanto o câncer como o HIV retroagiram neste
paciente. O receptor mais usado pelo HIV para entrar nas
células do corpo é o CCR5. Um pequeno número de pessoas
resistentes ao HIV tem duas cópias mutadas do gene do
receptor CCR5. Isso significa que o vírus não pode penetrar nas
células sanguíneas do corpo que costumam ser infectadas. O
paciente recebeu células‐tronco da medula óssea de um
doador que tem essa mutação genética específica, o que fez
com que também ficasse resistente ao HIV.

Disponível em https://www.bbc.com/. Março/2019. Adaptado.

A terapia celular a que o texto se refere`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `permitirá que eventuais futuros filhos do paciente
transplantado também possuam células resistentes à
infecção pelo HIV.` },
      { id: 'B', type: 'text', value: `possibilitou a produção, pelas células sanguíneas do
paciente após o transplante, de receptores CCR5 aos quais
o vírus HIV não se liga.` },
      { id: 'C', type: 'text', value: `promoveu mutações no gene CCR5 das células do
paciente, ocasionando a produção de proteína à qual o HIV
não se liga.` },
      { id: 'D', type: 'text', value: `gerou novos alelos mutantes que interagem com o gene
do receptor CCR5 do paciente, ocasionando a resistência à
entrada do HIV nas células do paciente.` },
      { id: 'E', type: 'text', value: `confirma que o alelo mutante que confere resistência à
infecção pelo HIV é dominante sobre o alelo selvagem do
gene CCR5.` },
    ],
    correct: 'B',
    explanation: `As células-tronco transplantadas originam células sanguíneas com a variante mutante de CCR5 do doador. Esse receptor não permite a ligação e a entrada do HIV que utiliza CCR5, conferindo resistência às novas células do paciente.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 58,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Pesquisadores do Museu Nacional, no Rio de Janeiro,
encontraram o crânio e uma parte do fêmur de Luzia, o
esqueleto humano mais antigo descoberto na América que
revolucionou as teorias científicas sobre a ocupação do
continente. Os fósseis foram achados há alguns dias (não foi
divulgado quando) junto aos escombros do edifício,
parcialmente destruído por um incêndio em 2 de setembro. O
crânio está fragmentado, porque a cola que mantinha os seus
pedaços juntos se foi com o calor, mas a equipe está bastante
otimista com suas condições.

Júlia Barbon, Folha de São Paulo, Outubro/2018. Adaptado.

O esqueleto de Luzia,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `adquirido por D. Pedro II em 1876, foi incorporado à sua
coleção pessoal, a mesma que deu origem ao Museu
Nacional no período republicano.` },
      { id: 'B', type: 'text', value: `descoberto na década de 1970 em Minas Gerais, permitiu
questionar a teoria de que a ocupação das Américas se deu
por apenas uma onda migratória.` },
      { id: 'C', type: 'text', value: `estudado por diferentes equipes de antropólogos,
comprovou que grupos saídos diretamente da África
foram os primeiros habitantes das Américas.` },
      { id: 'D', type: 'text', value: `encontrado na atual Serra da Capivara, no Estado do Piauí,
pertenceu à cultura que elaborou suas famosas pinturas
rupestres.` },
      { id: 'E', type: 'text', value: `mantido em uma coleção particular fora do país, estava
exposto para comemoração dos 150 anos da passagem de
Charles Darwin pelo Brasil.` },
    ],
    correct: 'B',
    explanation: `Luzia foi encontrada em Minas Gerais na década de 1970. Suas características contribuíram para questionar o modelo de uma única migração homogênea para as Américas e para ampliar o debate sobre o povoamento do continente.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 59,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Afirmo, portanto, que tínhamos atingido já o ano bem farto
da Encarnação do Filho de Deus, de 1348, quando, na mui
excelsa cidade de Florença, (...) sobreveio a mortífera
pestilência. (...) apareciam no começo, tanto em homens como
nas mulheres, ou na virilha ou na axila, algumas inchações (...)
chamava‐as o populacho de bubões (...).

Giovanni Boccaccio, Decamerão.

A respeito da Peste Negra do século XIV, é correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Provocou gravíssima queda demográfica, que afetou
grande parte da produção econômica europeia.` },
      { id: 'B', type: 'text', value: `Originou‐se no Oriente, penetrou no continente europeu
pelos portos e manteve‐se restrita à Península Itálica.` },
      { id: 'C', type: 'text', value: `Foi provocada pela fome e pela desnutrição dos
camponeses e favoreceu o processo de centralização
política.` },
      { id: 'D', type: 'text', value: `Foi contida pelo caráter de subsistência da economia
europeia, que dificultava o contato humano e, assim, o
contágio.` },
      { id: 'E', type: 'text', value: `Estimulou as investidas contra os territórios muçulmanos
no movimento conhecido como Segunda Cruzada.` },
    ],
    correct: 'A',
    explanation: `A Peste Negra causou mortalidade excepcional na Europa do século XIV. A redução da população e da mão de obra atingiu a produção agrícola e outras atividades econômicas, reorganizando relações sociais e produtivas.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 60,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `A imagem a seguir refere‐se às principais rotas de comércio
da África do Norte e Ocidental, no século XV.

Eric Wolf, A Europa e os Povos sem História (trad.). São Paulo: Edusp, 2005.

Em relação às rotas comerciais representadas no mapa, é
correto afirmar que elas`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q62_1.jpg","width":594,"height":189},{"src":"/fuvest/2020/images/fuvest_2020_f1q62_2.jpg","width":594,"height":189}],
    alternatives: [
      { id: 'A', type: 'text', value: `indicam que a melhoria das condições ambientais do Saara
permitiu a construção de estradas pelo deserto.` },
      { id: 'B', type: 'text', value: `foram construídas pelo poder islâmico do Cairo, que
promoveu a unificação de toda a África do Norte.` },
      { id: 'C', type: 'text', value: `mostram a decadência econômica do comércio do Saara
oriental, em razão da crise do Império Egípcio.` },
      { id: 'D', type: 'text', value: `atingem a região ao sudoeste do Saara, local de origem do
ouro que chegava aos portos do Mediterrâneo.` },
      { id: 'E', type: 'text', value: `representam o poder do Império de Songai, cuja capital
era Timbuctu, que unificou todo o território entre o
Atlântico e o mar Vermelho.` },
    ],
    correct: 'D',
    explanation: `As rotas transaarianas conectavam o Mediterrâneo às regiões produtoras de ouro situadas ao sul e sudoeste do Saara. O mapa mostra essa articulação comercial entre África Ocidental e Norte da África.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 61,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `A chamada “questão trabalhista” no Brasil foi objeto de
conflitos, debates e regulamentações entre os anos 1920 e
1946. Identifique uma das dimensões deste processo.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `O liberalismo oligárquico atribuiu ao Estado, por meio da
reforma de 1924, o papel de mediador entre o operariado
e o patronato.` },
      { id: 'B', type: 'text', value: `A Constituição de 1934 garantiu o direito à organização
sindical e abriu espaço para a proteção dos direitos dos
trabalhadores.` },
      { id: 'C', type: 'text', value: `O direito de greve e a regulamentação do salário mínimo
foram algumas das novidades previstas na Consolidação
das Leis do Trabalho (1943).` },
      { id: 'D', type: 'text', value: `A criação do sindicato único contribuiu para a emergência
de lideranças combativas ao obrigar todos os
trabalhadores a se filiarem a tais associações.` },
      { id: 'E', type: 'text', value: `A Carteira de Trabalho foi um instrumento de controle e
dominação, que distinguia o trabalhador e esvaziava o
poder dos sindicatos.` },
    ],
    correct: 'B',
    explanation: `A Constituição de 1934 incorporou direitos sociais e trabalhistas e reconheceu a organização sindical. Foi uma etapa da institucionalização da questão trabalhista, anterior à consolidação posterior dessas normas na CLT.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 62,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `A representação cartográfica a seguir refere‐se à viagem de
circunavegação, iniciada em Sanlúcar de Barrameda, na
Andaluzia, em 20 de setembro de 1519, e comandada pelo
português Fernão de Magalhães, a serviço da monarquia da
Espanha. A despeito da repercussão da viagem para o
desenvolvimento dos conhecimentos náuticos e para a
exploração do Oceano Pacífico, Battista Agnese foi um dos
poucos cartógrafos a registrar a empreitada de Magalhães.

Battista Agnese, Atlas Portulano, 1545. Biblioteca Digital Mundial.
Disponível em https://www.wdl.org/pt/.

A representação cartográfica de Battista Agnese`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q62_3.jpg","width":595,"height":404}],
    alternatives: [
      { id: 'A', type: 'text', value: `revelava a permanência das técnicas e sentidos simbólicos
da cosmografia medieval, que orientaram os navegadores
ibéricos na época da expansão ultramarina.` },
      { id: 'B', type: 'text', value: `estava vinculada aos dogmas cristãos e procurava conciliar o
registro da viagem de Fernão de Magalhães com a perspectiva
de Terra Plana ainda presente entre letrados cristãos.` },
      { id: 'C', type: 'text', value: `estava baseada nos relatos dos navegadores, no acúmulo
de conhecimentos acerca das rotas marítimas e em
estimativas de distâncias a partir de cálculos matemáticos
e da planificação do globo terrestre.` },
      { id: 'D', type: 'text', value: `apresentava o Oceano Pacífico em suas reais dimensões
de acordo com o entendimento de Fernão de Magalhães e
de Cristóvão Colombo e em desacordo com as
perspectivas cristãs.` },
      { id: 'E', type: 'text', value: `estava assentada nos conhecimentos e detalhamentos
geográficos bíblicos e nas formulações cosmológicas de
Ptolomeu, fundamentais para o sucesso da viagem de
Fernão de Magalhães.` },
    ],
    correct: 'C',
    explanation: `O mapa de Agnese reúne informações de viagens, conhecimentos de rotas e estimativas matemáticas de distância. Sua planificação do globo expressa o desenvolvimento da cartografia náutica a partir da experiência acumulada pelos navegadores.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 63,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `As tentativas holandesas de conquista dos territórios
portugueses na América tinham por objetivo central`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a apropriação do complexo açucareiro escravista do
Atlântico Sul, então monopolizado pelos portugueses.` },
      { id: 'B', type: 'text', value: `a formação de núcleos de povoamento para absorverem a
crescente população protestante dos Países Baixos.` },
      { id: 'C', type: 'text', value: `a exploração das minas de ouro recém‐descobertas no interior,
somente acessíveis pelo controle de portos no Atlântico.` },
      { id: 'D', type: 'text', value: `a ocupação de áreas até então pouco exploradas pelos
portugueses, como o Maranhão e o Vale Amazônico.` },
      { id: 'E', type: 'text', value: `a criação de uma base para a ocupação definitiva das áreas
de mineração da América espanhola.` },
    ],
    correct: 'A',
    explanation: `O interesse holandês concentrava-se no lucrativo circuito açucareiro do Atlântico Sul, que articulava produção colonial, trabalho escravizado e comércio marítimo. A conquista de áreas portuguesas permitiria controlar esse complexo.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 64,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Ao primeiro brilho da alvorada chegou do horizonte uma
nuvem negra, que era conduzida [pelo] senhor da tempestade
(...). Surgiram então os deuses do abismo; Nergal destruiu as
barragens que represavam as águas do inferno; Ninurta, o
deus da guerra, pôs abaixo os diques (...). Por seis dias e seis
noites os ventos sopraram; enxurradas, inundações e
torrentes assolaram o mundo; a tempestade e o dilúvio
explodiam em fúria como dois exércitos em guerra. Na
alvorada do sétimo dia o temporal (...) amainou (...) o dilúvio
serenou (...) toda a humanidade havia virado argila (...). Na
montanha de Nisir o barco ficou preso (...). Na alvorada do
sétimo dia eu soltei uma pomba e deixei que se fosse. Ela voou
para longe, mas, não encontrando um lugar para pousar,
retornou. Então soltei um corvo. A ave viu que as águas
haviam abaixado; ela comeu, (...) grasnou e não mais voltou
para o barco. Eu então abri todas as portas e janelas, expondo
a nave aos quatro ventos. Preparei um sacrifício e derramei
vinho sobre o topo da montanha em oferenda aos deuses (...).

A Epopeia de Gilgamesh, São Paulo: Martins Fontes, 2001.

Com base no texto, registrado aproximadamente no século VII a.C.
e que se refere a um antigo mito da Mesopotâmia, bem como em
seus conhecimentos, é possível dizer que a sociedade descrita era`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `mercantil, pacífica, politeísta e centralizada.` },
      { id: 'B', type: 'text', value: `agrária, militarizada, monoteísta e democrática.` },
      { id: 'C', type: 'text', value: `manufatureira, naval, monoteísta e federalizada.` },
      { id: 'D', type: 'text', value: `mercantil, guerreira, monoteísta e federalizada.` },
      { id: 'E', type: 'text', value: `agrária, guerreira, politeísta e centralizada.` },
    ],
    correct: 'E',
    explanation: `Barragens, diques e inundação remetem a uma sociedade agrária dependente do controle das águas. Os deuses especializados evidenciam politeísmo; a guerra e a organização coletiva das obras hidráulicas são compatíveis com poder centralizado. A combinação correta é a de E.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 65,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Depois de 20 anos na escola
Não é difícil aprender
Todas as manhas do seu jogo sujo
Não é assim que tem que ser

Vamos fazer nosso dever de casa
E aí então vocês vão ver
Suas crianças derrubando reis
Fazer comédia no cinema com as suas leis

Somos os filhos da revolução
Somos burgueses sem religião
Somos o futuro da nação
Geração Coca‐Cola.

Dado Villa‐Lobos e Renato Russo, Geração Coca‐Cola, 1984.

Esses versos`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `remetem ao período da Campanha das Diretas Já e
apresentam esperanças em relação à implantação de um
regime democrático no Brasil.` },
      { id: 'B', type: 'text', value: `revelam a indignação e rebeldia da juventude com os
rumos da chamada Nova República, especialmente contra
o Colégio Eleitoral e o bipartidarismo.` },
      { id: 'C', type: 'text', value: `propõem um repúdio por parte da juventude brasileira em
relação às questões políticas e comportamentais durante
a transição democrática.` },
      { id: 'D', type: 'text', value: `oferecem uma visão positiva acerca do período militar no Brasil
e demonstram ceticismo com respeito à transição democrática.` },
      { id: 'E', type: 'text', value: `reforçam a capacidade de mobilização e reivindicação da
juventude pela liberdade de expressão e criação de novas
universidades públicas.` },
    ],
    correct: 'C',
    explanation: `Os versos opõem a juventude às regras e práticas políticas herdadas, propondo contestação dos comportamentos e do “jogo sujo”. Escrita no período de transição democrática, a canção expressa o repúdio de uma geração à ordem que a formou.`,
    subject: ['bio'],
    topics: ['Evolução', 'Questões aleatórias'],
  },
  {
    id: 66,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Documentos da Agência Central de Inteligência Americana
(CIA) mostram que o Brasil quis liderar a Operação Condor e
só não conseguiu porque enfrentou resistência dos outros
países membros – Argentina, Chile, Uruguai, Paraguai e
Bolívia. (...) Os documentos da CIA fazem parte do Projeto de
Desclassificação Argentina (The Dirty War, 1976‐1983), do
governo americano, e incluem mais de 40 mil páginas. Duas
dezenas delas fazem menções ao Brasil (...).

Marcelo Godoy, O Estado de São Paulo. Abril/2019.

A respeito da Operação Condor, é correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Ainda que tivesse um alvo comum de repressão política,
ela não implicava o alinhamento automático dos regimes
ditatoriais de cada país.` },
      { id: 'B', type: 'text', value: `Ao encontrar resistência dos demais países que dela
participavam, o Brasil passou a criticar publicamente suas
ações.` },
      { id: 'C', type: 'text', value: `Em vista da oposição norte‐americana à iniciativa, a
cooperação entre os países membros não foi implantada.` },
      { id: 'D', type: 'text', value: `O governo ditatorial paraguaio assumiu a posição de
liderança no acordo firmado entre seus países fundadores.` },
      { id: 'E', type: 'text', value: `Limitou‐se à troca de informações sobre os opositores
políticos que buscaram exílio em cada um desses países.` },
    ],
    correct: 'A',
    explanation: `A Operação Condor articulou ditaduras sul-americanas na perseguição transnacional de opositores. A disputa de liderança mencionada no texto demonstra que esse objetivo repressivo comum coexistia com interesses nacionais e divergências entre os regimes.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 67,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `A entrega pacífica do governo a um adversário pressupunha
um elevado nível de automoderação. O mesmo determinou a
boa vontade de um governo em não usar os seus grandes
recursos do poder na humilhação ou destruição de
predecessores hostis ou opositores (...). As técnicas militares
deram lugar às técnicas verbais do debate feitas de retórica e
de persuasão, a maior parte das quais exigia mais contenção
geral, identificando, de modo nítido, esta mudança com um
avanço da civilização.

Norbert Elias, A busca da excitação. Lisboa: Difel, 1992.

O processo histórico britânico ofereceu, entre os séculos XVII
e XIX, modelos institucionais e práticas políticas importantes.
A respeito deles, é correto afirmar que`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `os debates acalorados no Parlamento, que
desencadearam uma série de lutas sociais no século XVIII,
foram apenas superados no início do século XIX com a
instauração do Regime Parlamentar.` },
      { id: 'B', type: 'text', value: `após o turbulento século XVII, marcado por sucessivas
lutas sociais e golpes de Estado, a pacificação entre as
classes dominantes ocorreu com o fortalecimento do
Regime Parlamentar ao longo do século XVIII.` },
      { id: 'C', type: 'text', value: `a instauração da República de Cromwell e do
parlamentarismo, em meados do século XVIII, foi
responsável pelo fim das turbulências políticas
características do absolutismo monárquico.` },
      { id: 'D', type: 'text', value: `o avanço da civilização mencionado no texto ocorreu com
o estabelecimento do princípio da tolerância religiosa
entre anglicanos, calvinistas e católicos pelo Parlamento
no final do século XVIII.` },
      { id: 'E', type: 'text', value: `o estabelecimento do parlamento bicameral, com
representação para os nobres e para a burguesia enriquecida,
e do direito de voto universal, ambos no século XVIII, foram
responsáveis pela contenção das lutas sociais na Grã‐Bretanha.` },
    ],
    correct: 'B',
    explanation: `As revoluções e conflitos ingleses do século XVII limitaram a monarquia e prepararam o fortalecimento parlamentar. No século XVIII, a acomodação entre grupos dominantes favoreceu a alternância política e o debate institucional descritos por Elias.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 68,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `De acordo com o historiador Martyn Lyons, “nos temores
contemporâneos em relação ao acesso ilimitado a sites
perigosos da Internet, e às dificuldades enfrentadas por
governos de diversos países no policiamento da distribuição
da informação, ouve‐se o eco do pânico causado pela
invenção da imprensa”.

Martyn Lyons, A história da leitura de Gutenberg a Bill Gates, RJ: Casa da
Palavra, 1999.

Escolha a alternativa que demonstre corretamente os
elementos de continuidade e de descontinuidade entre a
“revolução do impresso” e a “revolução eletrônica”
apontados pelo autor.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `As chamadas “revolução do impresso” e “revolução
eletrônica” não somente favoreceram a multiplicação e
democratização do acesso à informação como também
auxiliaram a formação de um público mais vasto e mais
crítico.` },
      { id: 'B', type: 'text', value: `A implementação das novas tecnologias de comunicação
eliminou a diferença entre os usuários e os excluídos do
universo da cultura escrita, tal como se prometera no
início de sua adoção.` },
      { id: 'C', type: 'text', value: `A manutenção de índices elevados de circulação de fake
news nas redes sociais demonstra que a “revolução da
comunicação” depende de quem domina e de quem usa
as tecnologias.` },
      { id: 'D', type: 'text', value: `Diferentemente do Index Librorum Prohibitorum
promulgado para a atuação da Inquisição no controle da
expansão do Protestantismo durante o século XVI, os
atuais marcos regulatórios da Internet limitam‐se ao
controle da pornografia.` },
      { id: 'E', type: 'text', value: `O advento da tipografia não foi necessariamente
revolucionário, pois não mudou a natureza nem o assunto
dos livros; já a tecnologia digital suprimiu todas as formas
anteriores de comunicação, da oral à impressa.` },
    ],
    correct: 'C',
    explanation: `A circulação de notícias falsas mostra que uma inovação técnica não garante, por si, informação confiável ou democratização. Como ocorreu com a imprensa, os efeitos da comunicação eletrônica dependem de quem controla e utiliza seus meios.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 69,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Em julho de 1969, os astronautas Neil Armstrong e Buzz Aldrin
fizeram o primeiro pouso tripulado na superfície da Lua, enquanto
seu colega Michael Collins permaneceu a bordo do módulo de
comando Columbia em órbita lunar. Considerando que o Columbia
estivesse em uma órbita perfeitamente circular a uma altitude de
260 km acima da superfície da Lua, o tempo decorrido (em horas
terrestres ‐ h) entre duas passagens do Columbia exatamente
acima do mesmo ponto da superfície lunar seria de

Note e adote: Constante gravitacional G ≈ 9 × 10⁻¹³ km³/(kg·h²); raio da Lua = 1740 km; massa da Lua ≈ 8 × 10²² kg; π ≈ 3.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `0,5 h.` },
      { id: 'B', type: 'text', value: `2 h.` },
      { id: 'C', type: 'text', value: `4 h.` },
      { id: 'D', type: 'text', value: `8 h.` },
      { id: 'E', type: 'text', value: `72 h.` },
    ],
    correct: 'B',
    explanation: `O raio orbital é 1740 + 260 = 2000 km. Pela igualdade entre força gravitacional e centrípeta, T = 2π√(r³/GM). Com os valores dados, r³/(GM) = 8 × 10⁹/(7,2 × 10¹⁰) = 1/9 h²; usando π ≈ 3, T ≈ 6/3 = 2 h.`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias'],
  },
  {
    id: 70,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Em 20 de maio de 2019, as unidades de base do Sistema
Internacional de Unidades (SI) passaram a ser definidas a partir de
valores exatos de algumas constantes físicas. Entre elas, está a
constante de Planck h , que relaciona a energia E de um fóton
(quantum de radiação eletromagnética) com a sua frequência f na
forma E = hf .

A unidade da constante de Planck em termos das unidades de base
do SI (quilograma, metro e segundo) é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `kg m²/s` },
      { id: 'B', type: 'text', value: `kg s/m²` },
      { id: 'C', type: 'text', value: `m² s/kg` },
      { id: 'D', type: 'text', value: `kg s/m` },
      { id: 'E', type: 'text', value: `kg m²/s³` },
    ],
    correct: 'A',
    explanation: `De E = hf, temos h = E/f. A energia mede-se em joules, kg·m²/s², e a frequência em s⁻¹. Logo a unidade de h é kg·m²/s.`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias'],
  },
  {
    id: 71,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `A transmissão de dados de telefonia celular por meio de
ondas eletromagnéticas está sujeita a perdas que aumentam
com a distância d entre a antena transmissora e a antena
receptora. Uma aproximação frequentemente usada para
expressar a perda L , em decibéis (dB), do sinal em função de
d , no espaço livre de obstáculos, é dada pela expressão
L = 20 log₁₀(4πd/λ),
em que λ é o comprimento de onda do sinal. O gráfico a seguir
mostra L (em dB) versus d (em metros) para um determinado
comprimento de onda λ.

Com base no gráfico, a frequência do sinal é aproximadamente

Note e adote: Velocidade da luz no vácuo c = 3 × 10⁸ m/s; π ≈ 3; 1 GHz = 10⁹ Hz.`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q69_1.jpg","width":582,"height":203},{"src":"/fuvest/2020/images/fuvest_2020_f1q69_2.jpg","width":582,"height":204}],
    alternatives: [
      { id: 'A', type: 'text', value: `2,5 GHz.` },
      { id: 'B', type: 'text', value: `5 GHz.` },
      { id: 'C', type: 'text', value: `12 GHz.` },
      { id: 'D', type: 'text', value: `40 GHz.` },
      { id: 'E', type: 'text', value: `100 GHz.` },
    ],
    correct: 'A',
    explanation: `No gráfico, para d ≈ 1 m, a perda é aproximadamente 40 dB. Assim, 40 = 20 log₁₀(4π/λ), de modo que 4π/λ = 100. Com π ≈ 3, λ ≈ 0,12 m e f = c/λ ≈ 2,5 × 10⁹ Hz = 2,5 GHz.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 72,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Um estímulo nervoso em um dos dedos do pé de um indivíduo
demora cerca de 30 ms para chegar ao cérebro. Nos membros
inferiores, o pulso elétrico, que conduz a informação do estímulo,
é transmitido pelo nervo ciático, chegando à base do tronco em
20 ms. Da base do tronco ao cérebro, o pulso é conduzido na
medula espinhal. Considerando que a altura média do brasileiro
é de 1,70 m e supondo uma razão média de 0,6 entre o
comprimento dos membros inferiores e a altura de uma pessoa,
pode‐se concluir que as velocidades médias de propagação do
pulso nervoso desde os dedos do pé até o cérebro e da base do
tronco até o cérebro são, respectivamente:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `51 m/s e 51 m/s` },
      { id: 'B', type: 'text', value: `51 m/s e 57 m/s` },
      { id: 'C', type: 'text', value: `57 m/s e 57 m/s` },
      { id: 'D', type: 'text', value: `57 m/s e 68 m/s` },
      { id: 'E', type: 'text', value: `68 m/s e 68 m/s` },
    ],
    correct: 'D',
    explanation: `A velocidade média no percurso completo é 1,70/0,030 ≈ 57 m/s. Os membros inferiores medem 0,6 × 1,70 = 1,02 m; restam 0,68 m do tronco ao cérebro, percorridos em 30 − 20 = 10 ms. Nesse trecho, v = 0,68/0,010 = 68 m/s.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 73,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `A velocidade de escape de um corpo celeste é a mínima
velocidade que um objeto deve ter nas proximidades da
superfície desse corpo para escapar de sua atração
gravitacional. Com base nessa informação e em seus
conhecimentos sobre a interpretação cinética da
temperatura, considere as seguintes afirmações a respeito da
relação entre a velocidade de escape e a atmosfera de um
corpo celeste.

I. Corpos celestes com mesma velocidade de escape retêm
atmosferas igualmente densas, independentemente da
temperatura de cada corpo.

II. Moléculas de gás nitrogênio escapam da atmosfera de um
corpo celeste mais facilmente do que moléculas de gás
hidrogênio.

III. Comparando corpos celestes com temperaturas médias
iguais, aquele com a maior velocidade de escape tende a
reter uma atmosfera mais densa.

Apenas é correto o que se afirma em`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `I e II.` },
      { id: 'E', type: 'text', value: `I e III.` },
    ],
    correct: 'C',
    explanation: `A retenção atmosférica depende também da temperatura, portanto I é falsa. Na mesma temperatura, moléculas leves como H₂ têm maior velocidade média que N₂ e escapam mais facilmente, tornando II falsa. Maior velocidade de escape favorece a retenção de gases em temperaturas iguais: somente III é correta.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 74,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Um equipamento de bungee jumping está sendo projetado
para ser utilizado em um viaduto de 30 m de altura. O elástico
utilizado tem comprimento relaxado de 10 m. Qual deve ser o
mínimo valor da constante elástica desse elástico para que ele
possa ser utilizado com segurança no salto por uma pessoa
cuja massa, somada à do equipamento de proteção a ela
conectado, seja de 120 kg?

Note e adote: Despreze a massa do elástico, as forças dissipativas e as dimensões da pessoa; Aceleração da gravidade = 10 m/s².`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `30 N/m` },
      { id: 'B', type: 'text', value: `80 N/m` },
      { id: 'C', type: 'text', value: `90 N/m` },
      { id: 'D', type: 'text', value: `160 N/m` },
      { id: 'E', type: 'text', value: `180 N/m` },
    ],
    correct: 'E',
    explanation: `No limite de segurança, a pessoa cai 30 m e o elástico, de 10 m, estica 20 m. Conservando a energia, mg × 30 = k × 20²/2. Para m = 120 kg e g = 10 m/s², k = 180 N/m; valores maiores limitam ainda mais a queda.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 75,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Um fabricante projetou resistores para utilizar em uma lâmpada
de resistência L. Cada um deles deveria ter resistência R. Após a
fabricação, ele notou que alguns deles foram projetados
erroneamente, de forma que cada um deles possui uma
resistência Rᴅ = R/2. Tendo em vista que a lâmpada
queimará se for percorrida por uma corrente elétrica superior
a V/(R + L), em qual(is) dos circuitos a lâmpada queimará?`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q72_1.jpg","width":575,"height":211}],
    alternatives: [
      { id: 'A', type: 'text', value: `1, apenas.` },
      { id: 'B', type: 'text', value: `2, apenas.` },
      { id: 'C', type: 'text', value: `1 e 3, apenas.` },
      { id: 'D', type: 'text', value: `2 e 3, apenas.` },
      { id: 'E', type: 'text', value: `1, 2 e 3.` },
    ],
    correct: 'D',
    explanation: `No circuito 1, dois resistores defeituosos em série equivalem a R, preservando a corrente nominal. No circuito 2, os dois resistores R/2 em paralelo equivalem a R/4; em série com a lâmpada, aumentam sua corrente. No circuito 3, o ramo da lâmpada contém apenas R/2 em série, também aumentando sua corrente sob a mesma tensão V. A lâmpada queima em 2 e 3.`,
    subject: ['fis'],
    topics: ['Eletricidade', 'Questões aleatórias'],
  },
  {
    id: 76,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `No dia 10 de abril de 2019, a equipe do Event Horizon
Telescope (EHT, “Telescópio Horizonte de Eventos”) divulgou
a primeira imagem de um buraco negro, localizado no centro
da galáxia M87, obtida por um conjunto de telescópios com
diâmetro efetivo equivalente ao da Terra, de 12.700 km.
Devido ao fenômeno físico da difração, instrumentos óticos
possuem um limite de resolução angular, que corresponde à
mínima separação angular entre dois objetos que podem ser
identificados separadamente quando observados à distância.
O gráfico mostra o limite de resolução de um telescópio,
medido em radianos, como função do seu diâmetro, para
ondas luminosas de comprimento de onda de 1,3 mm, igual
ao daquelas captadas pelo EHT. Note a escala logarítmica dos
eixos do gráfico.

Sabe‐se que o tamanho equivalente a um pixel na foto do
buraco negro corresponde ao valor da menor distância entre
dois objetos naquela galáxia para que eles possam ser
identificados separadamente pelo EHT. Com base nas
informações anteriores e na análise do gráfico, e sabendo que
a distância da Terra até a galáxia M87 é de 5 × 10²⁰ km,
indique o valor mais próximo do tamanho do pixel.`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q74_1.jpg","width":446,"height":160},{"src":"/fuvest/2020/images/fuvest_2020_f1q74_2.jpg","width":446,"height":160}],
    alternatives: [
      { id: 'A', type: 'text', value: `5 × 10¹ km` },
      { id: 'B', type: 'text', value: `5 × 10⁴ km` },
      { id: 'C', type: 'text', value: `5 × 10⁷ km` },
      { id: 'D', type: 'text', value: `5 × 10¹⁰ km` },
      { id: 'E', type: 'text', value: `5 × 10¹³ km` },
    ],
    correct: 'D',
    explanation: `Para o diâmetro efetivo da Terra, o gráfico fornece resolução angular da ordem de 10⁻¹⁰ rad. A separação linear correspondente é s ≈ Dθ = 5 × 10²⁰ × 10⁻¹⁰ = 5 × 10¹⁰ km.`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 77,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Um solenoide muito longo é percorrido por uma corrente
elétrica I , conforme mostra a figura 1.

Figura 1

Em um determinado instante, uma partícula de carga q
positiva desloca‐se com velocidade instantânea vԦ
perpendicular ao eixo do solenoide, na presença de um
campo elétrico na direção do eixo do solenoide. A figura 2
ilustra essa situação, em uma seção reta definida por um
plano que contém o eixo do solenoide.

Figura 2
O diagrama que representa corretamente as forças elétrica F⃗ₑ
e magnética F⃗ᵦ atuando sobre a partícula é:`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q79_1.jpg","width":427,"height":178},{"src":"/fuvest/2020/images/fuvest_2020_f1q79_2.jpg","width":495,"height":164},{"src":"/fuvest/2020/images/q77_source_3.jpg","width":465,"height":107},{"src":"/fuvest/2020/images/q77_options.jpg","width":610,"height":378}],
    alternatives: [
      { id: 'A', type: 'text', value: `Diagrama A da figura.` },
      { id: 'B', type: 'text', value: `Diagrama B da figura.` },
      { id: 'C', type: 'text', value: `Diagrama C da figura.` },
      { id: 'D', type: 'text', value: `Diagrama D da figura.` },
      { id: 'E', type: 'text', value: `Diagrama E da figura.` },
    ],
    correct: 'A',
    explanation: `Para carga positiva, a força elétrica tem o sentido do campo elétrico, para a direita. A regra da mão direita aplicada à corrente do solenoide e a F = q(v × B) fornece força magnética para baixo. O diagrama A reúne essas duas direções.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 78,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Um drone voando na horizontal, em relação ao solo (como
indicado pelo sentido da seta na figura), deixa cair um pacote de
livros. A melhor descrição da trajetória realizada pelo pacote de
livros, segundo um observador em repouso no solo, é dada pelo
percurso descrito na`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q78_1.jpg","width":417,"height":129},{"src":"/fuvest/2020/images/fuvest_2020_f1q78_2.jpg","width":417,"height":128}],
    alternatives: [
      { id: 'A', type: 'text', value: `trajetória 1.` },
      { id: 'B', type: 'text', value: `trajetória 2.` },
      { id: 'C', type: 'text', value: `trajetória 3.` },
      { id: 'D', type: 'text', value: `trajetória 4.` },
      { id: 'E', type: 'text', value: `trajetória 5.` },
    ],
    correct: 'D',
    explanation: `Ao ser solto, o pacote conserva a velocidade horizontal do drone e passa a acelerar verticalmente pela gravidade. No referencial do solo, descreve uma parábola para a frente, representada pela trajetória 4.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 79,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Um pêndulo simples é composto por uma haste metálica leve,
presa a um eixo bem lubrificado, e por uma esfera pequena de
massa muito maior que a da haste, presa à sua extremidade
oposta. O período P para pequenas oscilações de um pêndulo
é proporcional à raiz quadrada da razão entre o comprimento
da haste metálica e a aceleração da gravidade local. Considere
este pêndulo nas três situações:

1. Em um laboratório localizado ao nível do mar, na
Antártida, a uma temperatura de 0 °C.

2. No mesmo laboratório, mas agora a uma temperatura de
250 K.

3. Em um laboratório no qual a temperatura é de 32 °F, em
uma base lunar, cuja aceleração da gravidade é igual a um
sexto daquela da Terra.

Indique a alternativa correta a respeito da comparação entre
os períodos de oscilação P 1, P 2 e P 3 do pêndulo nas situações
1, 2 e 3, respectivamente.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `P 1 < P 2 < P 3` },
      { id: 'B', type: 'text', value: `P 1 = P 3 < P 2` },
      { id: 'C', type: 'text', value: `P 2 < P 1 < P 3` },
      { id: 'D', type: 'text', value: `P 3 < P 2 < P 1` },
      { id: 'E', type: 'text', value: `P 1 < P 2 = P 3` },
    ],
    correct: 'C',
    explanation: `Na situação 2, 250 K é menor que 273 K, de modo que a haste contrai e P₂ < P₁. Na situação 3, 32 °F = 0 °C, mas a gravidade lunar é seis vezes menor, aumentando o período por √6. Logo P₂ < P₁ < P₃.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 80,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Segundo o Instituto Nacional de Meteorologia (INMET), foram
registradas temperaturas reduzidas no mês de junho de 2016,
tal como na madrugada do dia 13, em que se alcançou a
mínima de 3,5°C na estação meteorológica da Serra da
Cantareira, na cidade de São Paulo. Além disso, de acordo com
o Instituto, também ocorreram precipitações acima da média,
com mais de 200 mm no total daquele mês.

Disponível em https://www.meteo.psu.edu/. Adaptado.

Associando a representação esquemática aos eventos
descritos, analise as seguintes afirmações:

I. O ar mais frio e denso eleva o ar mais quente, podendo originar
nuvens com potencial para tempestades e precipitações.
II. Instabilidades atmosféricas podem ser geradas em razão de o ar
quente ser elevado rapidamente pelo sistema frontal.
III. O encontro de massas de ar estabiliza as condições atmosféricas
com o avanço e dissipação da massa de ar tropical.

É correto apenas o que se afirma em`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q80_1.jpg","width":527,"height":228}],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `I e II.` },
      { id: 'D', type: 'text', value: `I e III.` },
      { id: 'E', type: 'text', value: `II e III.` },
    ],
    correct: 'C',
    explanation: `Na frente fria, o ar frio e denso avança sob o ar quente, forçando sua elevação e favorecendo nuvens e chuva. Esse levantamento rápido gera instabilidade. Portanto I e II são verdadeiras; III erra ao atribuir estabilização ao encontro das massas.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 81,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Um vídeo do astrônomo Carl Sagan em seu programa dos anos
1980, Cosmos, conta a história de Eratóstenes, demonstrando
como os gregos antigos já haviam descoberto que a Terra é
uma esfera (geoide). Para fazer isso, Eratóstenes observou a
sombra de duas colunas no solstício de verão; uma coluna foi
colocada em Alexandria e outra em Siena (atualmente
Assuan), ambas no Egito. Ele notou que em Siena, ao meio dia,
o Sol ficava em seu ponto mais alto e a coluna lá instalada
projetava uma sombra com ângulo diferente daquela
projetada em Alexandria. Sagan explica então que, se a Terra
fosse plana, ambas as estruturas produziriam sombras iguais,
mas como o planeta é esférico, o sombreamento varia.

Disponível em https://revistagalileu.globo.com/. Adaptado. 2019.

Disponível em https://www.youtube.com/. Adaptado.

A esfericidade do Planeta Terra demonstrada por Eratóstenes
e relembrada por Carl Sagan explica, em conjunto com outros
fatores,`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q82_1.jpg","width":568,"height":198},{"src":"/fuvest/2020/images/fuvest_2020_f1q82_2.jpg","width":568,"height":199}],
    alternatives: [
      { id: 'A', type: 'text', value: `a ocorrência de dias mais longos e com maior insolação no
Hemisfério em que está ocorrendo o inverno e de dias
mais curtos e com menor insolação no Hemisfério em que
está ocorrendo o verão.` },
      { id: 'B', type: 'text', value: `a ocorrência das estações do ano, sendo que, no
Hemisfério Norte, há o solstício de verão em dezembro e,
no Hemisfério Sul, o solstício de inverno em junho.` },
      { id: 'C', type: 'text', value: `a existência de zonas climáticas, em razão das variações de
altitude que intensificam a radiação solar nos polos Norte
e Sul.` },
      { id: 'D', type: 'text', value: `a ocorrência das estações do ano, que caracterizam o
Equinócio de primavera no Hemisfério Sul em março e o
Equinócio de outono no Hemisfério Norte em setembro.` },
      { id: 'E', type: 'text', value: `a existência de zonas climáticas, em função da maior
intensidade da radiação solar na região equatorial quando
comparada à incidência nos polos.` },
    ],
    correct: 'E',
    explanation: `A curvatura terrestre faz variar o ângulo de incidência dos raios solares com a latitude. A energia concentra-se mais perto do equador e se distribui por áreas maiores nos polos, contribuindo para a formação das zonas climáticas.`,
    subject: ['geo'],
    topics: ['Urbanização', 'Questões aleatórias'],
  },
  {
    id: 82,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Em reportagem publicada em 2018, a revista FAPESP
apresenta uma pesquisa da Superintendência de Controle de
Endemias (SUCEN) que usou informações de data e local de
mortes de macacos por um determinado vírus. A partir do
estudo, construiu‐se um modelo epidemiológico que descreve
o sentido de deslocamento e os corredores ecológicos
funcionais (corredores prováveis) do vírus.

Disponível em http://revistapesquisa.fapesp.br/.

Com base nas informações e no mapa, o corredor ecológico
funcional desse vírus, que atingiu a maior abrangência territorial
no Estado de São Paulo durante o ano de 2017, avançou
principalmente por quais regiões e causou qual enfermidade?`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q82_3.jpg","width":603,"height":398}],
    alternatives: [
      { id: 'A', type: 'text', value: `Sul de Minas Gerais e Vale do rio Ribeira de Iguape;
Chikungunya.` },
      { id: 'B', type: 'text', value: `Sul de Minas Gerais e São José do Rio Preto; Dengue.` },
      { id: 'C', type: 'text', value: `Vale do rio Ribeira de Iguape e Região Metropolitana de
São Paulo; Zika.` },
      { id: 'D', type: 'text', value: `Sul de Minas Gerais e Campinas; Febre Amarela.` },
      { id: 'E', type: 'text', value: `Litoral de São Paulo e Vale do rio Ribeira de Iguape; Gripe.` },
    ],
    correct: 'D',
    explanation: `O mapa indica avanço principalmente do sul de Minas Gerais para a região de Campinas. A mortalidade de macacos e o deslocamento por corredores ecológicos correspondem à circulação do vírus da febre amarela.`,
    subject: ['geo'],
    topics: ['Cartografia', 'Questões aleatórias'],
  },
  {
    id: 83,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `O processo de desertificação é definido como a degradação
ambiental e socioambiental, particularmente nas zonas
áridas, semiáridas e subúmidas, resultantes de vários fatores
e vetores, incluindo as variações e alterações climáticas e as
atividades humanas.

BRASIL, Ministério do Meio Ambiente. Disponível em http://www.mma.gov.br/.

Dentre as medidas mais adequadas para mitigação dos efeitos
da desertificação encontra(m)‐se`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a construção de rodovias que permitam às populações
mais diretamente atingidas pela seca se deslocarem
diariamente para áreas mais úmidas.` },
      { id: 'B', type: 'text', value: `o uso das áreas de meia encosta como alternativa para
expansão das áreas de produção de culturas temporárias
e lavouras permanentes.` },
      { id: 'C', type: 'text', value: `o plantio de espécies exóticas que apresentam
crescimento rápido e podem reduzir os efeitos da
desertificação e da seca, como o eucalipto, por exemplo.` },
      { id: 'D', type: 'text', value: `a prevenção, recuperação e reabilitação de terras parcial ou
totalmente degradadas com a recomposição de espécies
nativas.` },
      { id: 'E', type: 'text', value: `os programas de incentivo para a instalação de fossas
sépticas que dispensam a implantação de um sistema
hídrico de saneamento básico.` },
    ],
    correct: 'D',
    explanation: `A recomposição de espécies nativas protege o solo, favorece infiltração e recupera funções ecológicas. Prevenir a degradação e reabilitar terras afetadas combate a desertificação de maneira adequada às condições locais.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 84,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Brasil: Estabelecimentos de agricultura familiar
e não familiar

Hervé Théry e Neli Aparecida Mello‐Théry. Atlas do Brasil: disparidades e
dinâmicas do território. 3ª edição, 2018. Adaptado.

Sobre a produção agrícola brasileira e os dados apresentados
nos cartogramas, é correto afirmar:`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q85_1.jpg","width":604,"height":1090}],
    alternatives: [
      { id: 'A', type: 'text', value: `A agricultura familiar, que utiliza a maior extensão de
terras agricultáveis do país, foi responsável pela produção
da maior parte do volume agrícola exportado.` },
      { id: 'B', type: 'text', value: `A agricultura familiar, que utiliza uma extensão de terras
menor que a agricultura não familiar, tem destaque na
produção de alimentos para o mercado interno.` },
      { id: 'C', type: 'text', value: `A agricultura não familiar, que detém a maior extensão de
terras agricultáveis do país, consiste em uma barreira ao
desenvolvimento das atividades ligadas ao agronegócio.` },
      { id: 'D', type: 'text', value: `A agricultura não familiar, que apresenta o maior número
de estabelecimentos rurais no país, é responsável pela
produção de parte das chamadas commodities brasileiras.` },
      { id: 'E', type: 'text', value: `A concentração fundiária foi superada no país em função de
a agricultura familiar ocupar, com seus estabelecimentos, a
maior parte das terras.` },
    ],
    correct: 'B',
    explanation: `Os cartogramas mostram que a agricultura familiar ocupa área menor, mas tem participação importante no abastecimento alimentar interno. Não se deve confundir concentração fundiária com predominância da produção de alimentos consumidos pela população.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 85,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `É de grande relevância aqui o fato de que uma grande
proporção do trânsito de internet do mundo passa pelos
Estados Unidos (...). Isso significa que a NSA (a agência de
segurança nacional dos EUA) poderia acessar uma quantidade
alarmante de ligações telefônicas simplesmente escolhendo
as instalações certas. O que é ainda mais inacreditável: essas
instalações não passam de alguns prédios, conhecidos como
“hotéis de telecomunicação”, que hospedam os principais
centros de conexão de internet e telefonia do planeta todo.

Stephen Graham, Cidades Sitiadas: o novo urbanismo militar, 2016.
Adaptado.

A respeito da configuração espacial e geopolítica retratada no
excerto e no mapa, é possível afirmar que`,
    images: [{"src":"/fuvest/2020/images/q85_network.jpg","width":663,"height":281}],
    alternatives: [
      { id: 'A', type: 'text', value: `essa é a razão do grande déficit econômico dos Estados
Unidos atualmente, uma vez que a maior parte dos
negócios e transações é feita pela internet.` },
      { id: 'B', type: 'text', value: `essa situação explica o fato de que os Estados Unidos
tenham, atualmente, a maior dívida pública do planeta, já
que os custos com o tratamento de dados são muito altos.` },
      { id: 'C', type: 'text', value: `em um mundo cada vez mais dependente dos fluxos
imateriais de informação, a presença de objetos técnicos
fixos torna‐se irrelevante para a posição geopolítica dos
Estados Unidos.` },
      { id: 'D', type: 'text', value: `o mapa representa, por meio do “trânsito de internet” e
do fluxo de “ligações telefônicas”, uma globalização que
integrou completamente tanto os norte‐americanos
quanto as populações da África.` },
      { id: 'E', type: 'text', value: `a presença de fixos, como algumas instalações de
armazenagem e conexão, influencia a orientação de fluxos
e dá aos EUA uma posição de destaque no contexto
geopolítico.` },
    ],
    correct: 'E',
    explanation: `A rede mundial depende de instalações físicas de armazenamento e conexão. A concentração desses fixos nos Estados Unidos direciona fluxos de dados e amplia sua capacidade de vigilância e influência geopolítica.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 86,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `O Ciclone Tropical Idai atingiu o litoral de Moçambique na
noite de quinta‐feira (21/03/2019), provocando grandes
danos na cidade de Beira. Cerca de 500 mil pessoas ficaram
sem energia, afetando também o setor de comunicações.

Disponível em https://www.climatempo.com.br/. Adaptado.

Essa notícia refere‐se ao Ciclone Tropical que atingiu
principalmente Moçambique, Zimbábue e Malaui. Eventos
dessa magnitude e superiores – o Ciclone Idai atingiu apenas
a categoria 2 em uma escala de 1 a 5 – ocorrem em outros
locais do planeta e não repercutem da mesma forma, com a
perda de centenas de vidas. Isso ocorre em função`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `da grande presença de populações não nativas, que não
têm tradição em lidar com eventos dessa natureza.` },
      { id: 'B', type: 'text', value: `do relevo de planalto que caracteriza Moçambique,
Zimbábue e Malaui, em especial na zona costeira.` },
      { id: 'C', type: 'text', value: `da presença de rede hidrográfica e florestas que
contribuem para a formação de ciclones dessa natureza e
magnitude.` },
      { id: 'D', type: 'text', value: `da presença de águas superficiais do oceano Índico, com
temperaturas mais reduzidas que o habitual, em especial
no Canal de Moçambique.` },
      { id: 'E', type: 'text', value: `das características socioeconômicas da região com
populações vulneráveis e reduzida capacidade do poder
público em prestar atendimento à população.` },
    ],
    correct: 'E',
    explanation: `Os impactos de um ciclone dependem da vulnerabilidade social, das infraestruturas e da capacidade de prevenção e resposta. Populações pobres e serviços públicos limitados podem sofrer perdas humanas elevadas mesmo com eventos de categoria menor.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 87,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Em Barcelona, em 2012 e 2013, a cada 15 minutos uma família
recebia ordem de despejo. Desde então, o panorama da
habitação mudou totalmente. “(...) Estamos assistindo uma onda
de especulação imobiliária (...) que agora se foca no aluguel”,
explica Daniel Pardo da Associação de Moradores para um
Turismo Sustentável. “Este fenômeno pôs em marcha um
processo acelerado e violento de expulsão de inquilinos”,
acrescenta. Onde a pressão da especulação imobiliária
internacional e a indústria do turismo causaram um aumento
substancial nos preços dos aluguéis, os catalães têm hoje de
gastar mais de 46% dos seus salários com o aluguel. Para os
jovens até os 35 anos, a taxa de esforço aumenta até os 65% (...).
“Não queremos que os habitantes de Barcelona sejam
substituídos por pessoas com maior poder de compra”, diz a
porta‐voz do Sindicato dos Inquilinos. Só em Barcelona, 15 fundos
de investimento imobiliário possuem 3.000 apartamentos.

“Os habitantes querem a sua cidade de volta”. Reportagem de Ulrike Prinz
para o Goethe‐Institut Madrid. Maio/2018. Adaptado.

Os conceitos que explicam as dinâmicas urbanas descritas no
excerto são:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Financeirização e Industrialização.` },
      { id: 'B', type: 'text', value: `Gentrificação e Segregação.` },
      { id: 'C', type: 'text', value: `Aglomeração e Conurbação.` },
      { id: 'D', type: 'text', value: `Industrialização e Segregação.` },
      { id: 'E', type: 'text', value: `Conurbação e Gentrificação.` },
    ],
    correct: 'B',
    explanation: `A valorização imobiliária e turística substitui moradores de menor renda por grupos de maior poder aquisitivo, caracterizando gentrificação. A expulsão e a diferenciação espacial do acesso à moradia aprofundam a segregação urbana.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 88,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Dois eventos marcaram a diplomacia brasileira em relação ao
Oriente Médio no início de 2019. Um deles foi o voto contra a
resolução da ONU que pedia a desocupação militar das
Colinas de Golã e sua devolução à Síria. Outro evento foi o
anúncio de transferência da embaixada brasileira de Tel Aviv
para Jerusalém, mesmo não tendo sido levada adiante até
setembro de 2019. Em relação a esses eventos, é correto
afirmar que eles representam`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I — uma aproximação do Brasil em relação à posição dos EUA. II — um potencial distanciamento do Brasil em relação à posição da maioria dos países do Conselho de Segurança da ONU.` },
      { id: 'B', type: 'text', value: `I — um distanciamento do Brasil em relação à posição da Palestina e uma aproximação em relação ao conjunto de países árabes. II — uma potencial aproximação do Brasil em relação à posição da maioria dos países do Conselho de Segurança da ONU.` },
      { id: 'C', type: 'text', value: `I — um distanciamento do Brasil em relação à posição de Israel e uma aproximação em relação aos palestinos. II — um potencial distanciamento do Brasil em relação à posição da maioria dos países do Conselho de Segurança da ONU.` },
      { id: 'D', type: 'text', value: `I — um distanciamento do Brasil em relação à posição dos EUA. II — uma potencial aproximação do Brasil em relação à posição da maioria dos países do Conselho de Segurança da ONU.` },
      { id: 'E', type: 'text', value: `I — uma aproximação do Brasil em relação à posição da Síria. II — um potencial distanciamento do Brasil em relação à posição da maioria dos países do Conselho de Segurança da ONU.` },
    ],
    correct: 'A',
    explanation: `As duas posições aproximam o Brasil da política dos Estados Unidos e do governo israelense naquele momento. Ao mesmo tempo, podem afastá-lo da posição majoritária do Conselho de Segurança sobre a ocupação territorial e o estatuto de Jerusalém. Essa combinação consta em A.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 89,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `No Brasil, várias cidades registram ocupação irregular de
encostas em áreas sujeitas a deslizamentos de terra (também
chamados de escorregamentos). O Instituto de Pesquisas
Tecnológicas (IPT) trabalha no levantamento, mapeamento,
recuperação e estabilização dessas áreas de risco. Um
exemplo deste trabalho foram aqueles executados desde a
década de 1970 referentes aos deslizamentos dos morros de
Santos e São Vicente‐SP, cuja região é acometida há tempos
por esses problemas, inclusive com a ocorrência de vítimas
fatais. Para investigar os deslizamentos de terra nas áreas
serranas tropicais brasileiras, o Instituto realizou
levantamentos topográficos, geológicos e geomorfológicos,
estudando também a distribuição dos tipos de vegetação
existentes e as categorias de ocupação urbana dos morros.

Representação de deslizamento de terra (escorregamento) na
região de Santos e São Vicente

Disponível em https://www.ipt.br/. Adaptado. 2019.

Baseando‐se nas informações do texto e na figura, é correto
afirmar que`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q90_1.jpg","width":552,"height":178},{"src":"/fuvest/2020/images/fuvest_2020_f1q90_2.jpg","width":552,"height":178},{"src":"/fuvest/2020/images/fuvest_2020_f1q90_3.jpg","width":552,"height":178}],
    alternatives: [
      { id: 'A', type: 'text', value: `as características topográficas, geológicas e geomorfológicas
de uma área de risco estão naturalmente ligadas aos
escorregamentos, sendo que estradas de terra minimizam
a ocorrência de deslizamentos.` },
      { id: 'B', type: 'text', value: `a ocorrência de escorregamentos é causada pela ação
humana, cuja ocupação de encostas provoca o
empobrecimento de solo, que acaba sendo mobilizado
pela diminuição de fertilidade.` },
      { id: 'C', type: 'text', value: `o problema da ocupação de encostas e risco de
escorregamentos inclui o contato entre a rocha e o solo,
cuja facilidade de deslizamento é aumentada em função
da inclinação do terreno e da maior ocorrência de chuvas.` },
      { id: 'D', type: 'text', value: `os deslizamentos de terra fazem parte de um conjunto de
fenômenos naturais pontuais e incomuns na superfície da
crosta terrestre e, portanto, não participam da escultura
do relevo continental e do modelado.` },
      { id: 'E', type: 'text', value: `os escorregamentos são causados em especial pelo fato de o
solo tornar‐se mais leve que a rocha subjacente durante as
chuvas prolongadas de verão, facilitando seu deslizamento
ao longo das encostas pouco ou nada inclinadas.` },
    ],
    correct: 'C',
    explanation: `A inclinação favorece o movimento gravitacional do solo sobre a rocha. A chuva aumenta a saturação e pode reduzir a resistência ao deslizamento nessa interface, agravando o risco em encostas ocupadas.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 90,
    exam: 'fuvest',
    year: 2020,
    phase: 1,
    text: `Se muita gente hoje enxerga a Terra como um sistema
dinâmico de conexões entre atmosfera, águas, rochas e
biodiversidade, isso se deve, em larga medida, a Alexander
von Humboldt (1769 – 1859). O vulcão Chimborazo (6.268 m
de altitude), no atual Equador, foi utilizado por Humboldt
como exemplo para apresentar com clareza, pela primeira
vez, como cada faixa altitudinal em regiões montanhosas é um
microcosmo de climas e biodiversidade.

Disponível em https://www1.folha.uol.com.br/ciencia/. Adaptado.

Representação esquemática do vulcão Chimborazo

Disponível em https://www.pinterest.com/. Adaptado. 2019.

Considerando a relação entre vegetação e altitude, da base
até o topo das zonas do vulcão representado, é possível obter
a sequência:`,
    images: [{"src":"/fuvest/2020/images/fuvest_2020_f1q90_4.jpg","width":639,"height":538}],
    alternatives: [
      { id: 'A', type: 'text', value: `Floresta Temperada, Floresta de Coníferas, Floresta
Tropical, Exposição de Rocha, Tundra, Neve e Gelo.` },
      { id: 'B', type: 'text', value: `Floresta Temperada, Floresta Tropical, Floresta de
Coníferas, Exposição de Rocha, Tundra, Neve e Gelo.` },
      { id: 'C', type: 'text', value: `Floresta Tropical, Floresta de Coníferas, Floresta
Temperada, Tundra, Exposição de Rocha, Neve e Gelo.` },
      { id: 'D', type: 'text', value: `Floresta Tropical, Floresta Temperada, Floresta de
Coníferas, Tundra, Exposição de Rocha, Neve e Gelo.` },
      { id: 'E', type: 'text', value: `Floresta Tropical, Floresta de Coníferas, Tundra, Floresta
Temperada, Exposição de Rocha, Neve e Gelo.` },
    ],
    correct: 'D',
    explanation: `Com o aumento da altitude, a temperatura diminui e a vegetação muda. A sequência representada é floresta tropical, floresta temperada, coníferas, tundra, rocha exposta e, nas maiores altitudes, neve e gelo.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
];

export default fuvest_2020_f1;