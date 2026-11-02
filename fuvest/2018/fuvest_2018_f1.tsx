import { QuizQuestion } from '@/lib/quiz-questions';

const fuvest_2018_f1: QuizQuestion[] = [
  {
    id: 1,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Um fabricante de acessórios de montanhismo quer projetar um
colchão de espuma apropriado para ser utilizado por alpinistas
em regiões frias. Considere que a taxa de transferência de calor
ao solo por uma pessoa dormindo confortavelmente seja 90
kcal/hora e que a transferência de calor entre a pessoa e o solo
se dê exclusivamente pelo mecanismo de condução térmica
através da espuma do colchão. Nestas condições, o gráfico
representa a taxa de transferência de calor, em J/s, através da
espuma do colchão, em função de sua espessura, em cm.

Considerando 1 cal = 4 J, a menor espessura do colchão, em cm,
para que a pessoa durma confortavelmente é`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q03_1.jpg","width":631,"height":469}],
    alternatives: [
      { id: 'A', type: 'text', value: `1,0.` },
      { id: 'B', type: 'text', value: `1,5.` },
      { id: 'C', type: 'text', value: `2,2` },
      { id: 'D', type: 'text', value: `2,8` },
      { id: 'E', type: 'text', value: `3,9` },
    ],
    correct: 'B',
    explanation: `A taxa confortável é 90.000 cal/h × 4 J/cal ÷ 3.600 s/h = 100 J/s. No gráfico, esse valor corresponde a aproximadamente 1,5 cm; espessuras menores deixam passar mais calor. Logo, B.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 2,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Câmeras digitais, como a esquematizada na figura, possuem
mecanismos automáticos de focalização.

Em uma câmera digital que utilize uma lente convergente com
20 mm de distância focal, a distância, em mm, entre a lente e o
sensor da câmera, quando um objeto a 2 m estiver
corretamente focalizado, é, aproximadamente,`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q02_1.jpg","width":618,"height":179}],
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `5.` },
      { id: 'C', type: 'text', value: `10.` },
      { id: 'D', type: 'text', value: `15.` },
      { id: 'E', type: 'text', value: `20.` },
    ],
    correct: 'E',
    explanation: `Pela equação das lentes, 1/p′ = 1/20 − 1/2.000, usando milímetros. Resulta p′ ≈ 20,2 mm, aproximadamente 20 mm, alternativa E.`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 3,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Furacões são sistemas físicos que liberam uma enorme
quantidade de energia por meio de diferentes tipos de
processos, sendo um deles a condensação do vapor em água.
De acordo com o Laboratório Oceanográfico e Meteorológico
do Atlântico, um furacão produz, em média, 1,5 cm de chuva
por dia em uma região plana de 660 km de raio. Nesse caso, a
quantidade de energia por unidade de tempo envolvida no
processo de condensação do vapor em água da chuva é,
aproximadamente,

Note e adote:
π = 3.
Calor latente de vaporização da água: 2 × 10⁶ J/kg.
Densidade da água: 10³ kg/m³.
1 dia = 8,6 × 10⁴ s.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `3,8 × 10¹⁵ W.` },
      { id: 'B', type: 'text', value: `4,6 × 10¹⁴ W.` },
      { id: 'C', type: 'text', value: `2,1 × 10¹³ W.` },
      { id: 'D', type: 'text', value: `1,2 × 10¹² W.` },
      { id: 'E', type: 'text', value: `1,1 × 10¹¹ W.` },
    ],
    correct: 'B',
    explanation: `O volume diário é 0,015 × 3 × (660.000)² ≈ 1,96 × 10¹⁰ m³. A massa é 1,96 × 10¹³ kg e a energia de condensação é cerca de 3,92 × 10¹⁹ J. Dividindo por 8,6 × 10⁴ s, obtém-se 4,6 × 10¹⁴ W: B.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 4,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Em uma tribo indígena de uma ilha tropical, o teste derradeiro
de coragem de um jovem é deixar se cair em um rio, do alto de
um penhasco. Um desses jovens se soltou verticalmente, a
partir do repouso, de uma altura de 45 m em relação à
superfície da água. O tempo decorrido, em segundos, entre o
instante em que o jovem iniciou sua queda e aquele em que um
espectador, parado no alto do penhasco, ouviu o barulho do
impacto do jovem na água é, aproximadamente,

Note e adote:
Considere o ar em repouso e ignore sua resistência.
Ignore as dimensões das pessoas envolvidas.
Velocidade do som no ar: 360 m/s.
Aceleração da gravidade: 10 m/s².`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `3,1.` },
      { id: 'B', type: 'text', value: `4,3.` },
      { id: 'C', type: 'text', value: `5,2.` },
      { id: 'D', type: 'text', value: `6,2.` },
      { id: 'E', type: 'text', value: `7,0.` },
    ],
    correct: 'A',
    explanation: `A queda leva √(2h/g) = √9 = 3 s. O som ainda percorre 45 m em 45/360 = 0,125 s. O intervalo total é aproximadamente 3,1 s: A.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 5,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Ondas na superfície de líquidos têm velocidades que dependem
da profundidade do líquido e da aceleração da gravidade, desde
que se propaguem em águas rasas. O gráfico representa o
módulo v da velocidade da onda em função da profundidade h
da água.

Uma onda no mar, onde a profundidade da água é 4,0 m, tem
comprimento de onda igual a 50 m. Na posição em que a
profundidade da água é 1,0 m, essa onda tem comprimento de
onda, em m, aproximadamente igual a`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q07_1.jpg","width":615,"height":472}],
    alternatives: [
      { id: 'A', type: 'text', value: `8.` },
      { id: 'B', type: 'text', value: `12.` },
      { id: 'C', type: 'text', value: `25.` },
      { id: 'D', type: 'text', value: `35.` },
      { id: 'E', type: 'text', value: `50.` },
    ],
    correct: 'C',
    explanation: `A frequência não muda ao passar entre profundidades. Pelo gráfico, a velocidade a 1 m é metade da velocidade a 4 m; como λ=v/f, o comprimento de onda também cai à metade: 50/2=25 m. Resposta C.`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 6,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Uma caminhonete, de massa 2.000 kg, bateu na traseira de um
sedã, de massa 1.000 kg, que estava parado no semáforo, em
uma rua horizontal. Após o impacto, os dois veículos deslizaram
como um único bloco. Para a perícia, o motorista da
caminhonete alegou que estava a menos de 20 km/h quando o
acidente ocorreu. A perícia constatou, analisando as marcas de
frenagem, que a caminhonete arrastou o sedã, em linha reta,
por uma distância de 10 m. Com este dado e estimando que o
coeficiente de atrito cinético entre os pneus dos veículos e o
asfalto, no local do acidente, era 0,5, a perícia concluiu que a
velocidade real da caminhonete, em km/h, no momento da
colisão era, aproximadamente,

Note e adote:
Aceleração da gravidade: 10 m/s².
Desconsidere a massa dos motoristas e a resistência do ar.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `10.` },
      { id: 'B', type: 'text', value: `15.` },
      { id: 'C', type: 'text', value: `36.` },
      { id: 'D', type: 'text', value: `48.` },
      { id: 'E', type: 'text', value: `54.` },
    ],
    correct: 'E',
    explanation: `Após a colisão, o conjunto freia por atrito: v²=2μgd=2×0,5×10×10=100, logo v=10 m/s. Pela conservação do momento, 2.000u=3.000×10 e u=15 m/s=54 km/h. Portanto, E.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 7,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `O projeto para um balanço de corda única de um parque de
diversões exige que a corda do brinquedo tenha um
comprimento de 2,0 m. O projetista tem que escolher a corda
adequada para o balanço, a partir de cinco ofertas disponíveis
no mercado, cada uma delas com distintas tensões de ruptura.
A tabela apresenta essas opções.

Corda I II III IV V

Tensão de
4.200 7.500 12.400 20.000 29.000
ruptura (N)

Ele tem também que incluir no projeto uma margem de
segurança; esse fator de segurança é tipicamente 7, ou seja, o
balanço deverá suportar cargas sete vezes a tensão no ponto
mais baixo da trajetória. Admitindo que uma pessoa de 60 kg,
ao se balançar, parta do repouso, de uma altura de 1,2 m em
relação à posição de equilíbrio do balanço, as cordas que
poderiam ser adequadas para o projeto são

Note e adote:
Aceleração da gravidade: 10 m/s².
Desconsidere qualquer tipo de atrito ou resistência ao movimento e
ignore a massa do balanço e as dimensões da pessoa.
As cordas são inextensíveis.`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I, II, III, IV e V.` },
      { id: 'B', type: 'text', value: `II, III, IV e V, apenas.` },
      { id: 'C', type: 'text', value: `III, IV e V, apenas.` },
      { id: 'D', type: 'text', value: `IV e V, apenas.` },
      { id: 'E', type: 'text', value: `V, apenas.` },
    ],
    correct: 'C',
    explanation: `Na posição inferior, v²=2gh=24 m²/s². A tração máxima é mg+mv²/L=600+60×24/2=1.320 N. Com fator de segurança 7, a ruptura deve exceder 9.240 N. Apenas III, IV e V atendem: C.`,
    subject: ['fis'],
    topics: ['Leis de Newton e dinâmica', 'Questões aleatórias'],
  },
  {
    id: 8,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `O ano de 2017 marca o trigésimo aniversário de um grave
acidente de contaminação radioativa, ocorrido em Goiânia em
1987. Na ocasião, uma fonte radioativa, utilizada em um
equipamento de radioterapia, foi retirada do prédio
abandonado de um hospital e, posteriormente, aberta no ferro
velho para onde fora levada. O brilho azulado do pó de césio
137 fascinou o dono do ferro-velho, que compartilhou porções
do material altamente radioativo com sua família e amigos, o
que teve consequências trágicas. O tempo necessário para que
metade da quantidade de césio-137 existente em uma fonte se
transforme no elemento não radioativo bário-137 é trinta anos.
Em relação a 1987, a fração de césio-137, em %, que existirá na
fonte radioativa 120 anos após o acidente, será,
aproximadamente,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `3,1.` },
      { id: 'B', type: 'text', value: `6,3.` },
      { id: 'C', type: 'text', value: `12,5.` },
      { id: 'D', type: 'text', value: `25,0.` },
      { id: 'E', type: 'text', value: `50,0.` },
    ],
    correct: 'B',
    explanation: `Em 120 anos passam quatro meias-vidas de 30 anos. A fração restante é (1/2)⁴=1/16=6,25%, aproximadamente 6,3%. Logo, B.`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 9,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Na figura, A e B representam duas placas metálicas; a diferença de potencial entre elas é V_B − V_A = 2,0 × 10⁴ V. As linhas tracejadas 1 e 2 representam duas possíveis trajetórias de um elétron, no plano da figura.

Considere a carga do elétron igual a 1,6 × 10⁻¹⁹ C e as seguintes afirmações com relação à energia cinética de um elétron que sai do ponto X na placa A e atinge a placa B:

I. Se o elétron tiver velocidade inicial nula, sua energia cinética, ao atingir a placa B, será 3,2 × 10⁻¹⁵ J.
II. A variação da energia cinética do elétron é a mesma, independentemente de ele ter percorrido as trajetórias 1 ou 2.
III. O trabalho realizado pela força elétrica sobre o elétron na trajetória 2 é maior do que o realizado sobre o elétron na trajetória 1.

Apenas é correto o que se afirma em`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q10_1.jpg","width":416,"height":284}],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `I e II.` },
      { id: 'E', type: 'text', value: `I e III.` },
    ],
    correct: 'D',
    explanation: `O trabalho elétrico é −qΔV=1,6×10⁻¹⁹×2×10⁴=3,2×10⁻¹⁵ J, que vira energia cinética se o elétron parte do repouso. Como o campo eletrostático é conservativo, o trabalho independe da trajetória. I e II são verdadeiras e III é falsa: D.`,
    subject: ['fis'],
    topics: ['Eletricidade', 'Questões aleatórias'],
  },
  {
    id: 10,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Atualmente são usados LEDs (Light Emitting Diode) na
iluminação doméstica. LEDs são dispositivos semicondutores
que conduzem a corrente elétrica apenas em um sentido. Na
figura, há um circuito de alimentação de um LED (L) de 8 W, que
opera com 4 V, sendo alimentado por uma fonte (F) de 6 V.

O valor da resistência do resistor (R), em Ω, necessário para que
o LED opere com seus valores nominais é, aproximadamente,`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q10_2.jpg","width":399,"height":229}],
    alternatives: [
      { id: 'A', type: 'text', value: `1,0.` },
      { id: 'B', type: 'text', value: `2,0.` },
      { id: 'C', type: 'text', value: `3,0.` },
      { id: 'D', type: 'text', value: `4,0.` },
      { id: 'E', type: 'text', value: `5,0.` },
    ],
    correct: 'A',
    explanation: `O LED nominal consome I=P/V=8/4=2 A. O resistor deve absorver 6−4=2 V à mesma corrente, logo R=2/2=1 Ω. Resposta A.`,
    subject: ['fis'],
    topics: ['Eletricidade', 'Questões aleatórias'],
  },
  {
    id: 11,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Em 2016, as lâmpadas incandescentes tiveram sua venda
definitivamente proibida no país, por razões energéticas. Uma
lâmpada fluorescente, considerada energeticamente eficiente,
consome 28 W de potência e pode produzir a mesma
intensidade luminosa que uma lâmpada incandescente
consumindo a potência de 100 W. A vida útil média da lâmpada
fluorescente é de 10.000 h e seu preço médio é de R$ 20,00,
enquanto a lâmpada incandescente tem vida útil de 1.000 h e
cada unidade custaria, hoje, R$ 4,00. O custo da energia é de
R$ 0,25 por quilowatt-hora. O valor total, em reais, que pode
ser poupado usando uma lâmpada fluorescente, ao longo da sua
vida útil, ao invés de usar lâmpadas incandescentes para obter a
mesma intensidade luminosa, durante o mesmo período de
tempo, é`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `90,00.` },
      { id: 'B', type: 'text', value: `140,00.` },
      { id: 'C', type: 'text', value: `200,00.` },
      { id: 'D', type: 'text', value: `250,00.` },
      { id: 'E', type: 'text', value: `290,00.` },
    ],
    correct: 'C',
    explanation: `A fluorescente custa 20+0,028×10.000×0,25=R$ 90. Dez incandescentes custariam 40+0,100×10.000×0,25=R$ 290. A economia é R$ 200, alternativa C.`,
    subject: ['fis'],
    topics: ['Eletricidade', 'Questões aleatórias'],
  },
  {
    id: 12,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Uma das substâncias utilizadas em desinfetantes comerciais é
o perácido de fórmula CH₃CO₃H.
A formulação de um dado desinfetante encontrado no
comércio consiste em uma solução aquosa na qual existem
espécies químicas em equilíbrio, como representado a seguir.
(Nessa representação, a fórmula do composto 1 não é
apresentada.)

Ao abrir um frasco desse desinfetante comercial, é possível
sentir o odor característico de um produto de uso doméstico.
Esse odor é de`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q12_1.jpg","width":578,"height":108}],
    alternatives: [
      { id: 'A', type: 'text', value: `amônia, presente em produtos de limpeza, como limpa
vidros.` },
      { id: 'B', type: 'text', value: `álcool comercial, ou etanol, usado em limpeza doméstica.` },
      { id: 'C', type: 'text', value: `acetato de etila, ou etanoato de etila, presente em
removedores de esmalte.` },
      { id: 'D', type: 'text', value: `cloro, presente em produtos alvejantes.` },
      { id: 'E', type: 'text', value: `ácido acético, ou ácido etanoico, presente no vinagre.` },
    ],
    correct: 'E',
    explanation: `A hidrólise do ácido peracético fornece ácido acético e peróxido de hidrogênio. O ácido acético possui o odor característico do vinagre. Portanto, E.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 13,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Uma determinada quantidade de metano (CH₄) é colocada para
reagir com cloro (Cl₂) em excesso, a 400 °C, gerando HCl (g) e
os compostos organoclorados H₃CCl, H2CCl₂, HCCl₃, CCl₄, cujas
propriedades são mostradas na tabela. A mistura obtida ao final
das reações químicas é então resfriada a 25 °C, e o líquido,
formado por uma única fase e sem HCl, é coletado.

Composto | Fusão (°C) | Ebulição (°C) | Solubilidade em água a 25 °C (g/L) | Densidade líquida a 25 °C (g/mL)
H₃CCl | −97,4 | −23,8 | 5,3 | —
H₂CCl₂ | −96,7 | 39,6 | 17,5 | 1,327
HCCl₃ | −63,5 | 61,2 | 8,1 | 1,489
CCl₄ | −22,9 | 76,7 | 0,8 | 1,587

A melhor técnica de separação dos organoclorados presentes
na fase líquida e o primeiro composto a ser separado por essa
técnica são:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `decantação; H₃CCl .` },
      { id: 'B', type: 'text', value: `destilação fracionada; CCl₄ .` },
      { id: 'C', type: 'text', value: `cristalização; HCCl₃ .` },
      { id: 'D', type: 'text', value: `destilação fracionada; H2CCl₂ .` },
      { id: 'E', type: 'text', value: `decantação; CCl₄ .` },
    ],
    correct: 'D',
    explanation: `A 25 °C, H₃CCl está gasoso, enquanto H₂CCl₂, HCCl₃ e CCl₄ formam a fase líquida. Líquidos miscíveis com diferentes temperaturas de ebulição são separados por destilação fracionada; H₂CCl₂, de menor ebulição, sai primeiro. Logo, D.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 14,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `A mandioca, uma das principais fontes de carboidratos da
alimentação brasileira, possui algumas variedades conhecidas
popularmente como “mandioca brava”, devido a sua
toxicidade. Essa toxicidade se deve à grande quantidade de
cianeto de hidrogênio (HCN) liberado quando o tecido vegetal
é rompido.
Após cada etapa do processamento para a produção de farinha
de mandioca seca, representado pelo esquema a seguir,
quantificou-se o total de HCN nas amostras, conforme
mostrado no gráfico que acompanha o esquema.

O que ocorre com o HCN nas Etapas 2 e 3?
`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q12_2.jpg","width":489,"height":728}],
    alternatives: [
      { id: 'A', type: 'text', value: `Etapa 2: HCN é insolúvel em água, formando um precipitado. Etapa 3: HCN é volatilizado durante a torração, sendo liberado no ar.` },
      { id: 'B', type: 'text', value: `Etapa 2: HCN é insolúvel em água, formando uma única fase na manipueira. Etapa 3: HCN permanece na massa torrada, não sendo afetado pela temperatura.` },
      { id: 'C', type: 'text', value: `Etapa 2: HCN é solúvel em água, sendo levado na manipueira. Etapa 3: HCN permanece na massa torrada, não sendo afetado pela temperatura.` },
      { id: 'D', type: 'text', value: `Etapa 2: HCN é solúvel em água, sendo levado na manipueira. Etapa 3: HCN é volatilizado durante a torração, sendo liberado no ar.` },
      { id: 'E', type: 'text', value: `Etapa 2: HCN é insolúvel em água, formando um precipitado. Etapa 3: A 160 °C, a ligação C≡N é quebrada, degradando as moléculas de HCN.` },
    ],
    correct: 'D',
    explanation: `Na prensagem, HCN dissolvido é removido com a manipueira. Na torração, sua volatilização permite que seja eliminado no ar. A combinação correta está em D; não se exige quebrar a ligação C≡N para removê-lo.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 15,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Um dos parâmetros que determina a qualidade do azeite de
oliva é sua acidez, normalmente expressa na embalagem na
forma de porcentagem, e que pode ser associada diretamente
ao teor de ácido oleico em sua composição.
Uma amostra de 20,00 g de um azeite comercial foi adicionada
a 100 mL de uma solução contendo etanol e etoxietano
(dietiléter), 1:1 em volume, com o indicador fenolftaleína. Sob
constante agitação, titulou-se com uma solução etanólica
contendo KOH 0,020 mol/L até a ________________ total. Para
essa amostra, usaram-se 35,0 mL de base, o que permite
concluir que se trata de um azeite tipo ________________.

As palavras que completam corretamente as lacunas são:

Note e adote:
Classificação de azeites por acidez (em %, massa do ácido oleico por 100
g de azeite):

Tipo Acidez

Extra virgem Menor que 0,8%

Virgem fino De 0,8% até 1,5%

Semifino Maior que 1,5% até 3,0%

Refinado Maior que 3,0%

Ácido oleico (ácido octadec 9 enoico)

Fórmula: C₁₈H₃₄O₂
Massa molar = 282,5 g mol 1`,
    images: [{"src":"/fuvest/2018/images/q15_source_1.jpg","width":332,"height":80}],
    alternatives: [
      { id: 'A', type: 'text', value: `oxidação; semifino.` },
      { id: 'B', type: 'text', value: `neutralização; virgem fino.` },
      { id: 'C', type: 'text', value: `oxidação, virgem fino.` },
      { id: 'D', type: 'text', value: `neutralização; extra virgem.` },
      { id: 'E', type: 'text', value: `neutralização, semifino.` },
    ],
    correct: 'B',
    explanation: `O processo é neutralização de um ácido monocarboxílico por KOH. Reagiram 0,020×0,035=0,00070 mol, equivalentes a 0,19775 g de ácido oleico. Em 20 g, a acidez é 0,98875%, na faixa virgem fino. Portanto, B.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 16,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Analise a tabela periódica e as seguintes afirmações a respeito
do elemento químico enxofre (S):

I. Tem massa atômica maior do que a do selênio (Se).
II. Pode formar com o hidrogênio um composto molecular de
fórmula H₂S.
III. A energia necessária para remover um elétron da camada
mais externa do enxofre é maior do que para o sódio (Na).
IV. Pode formar com o sódio (Na) um composto iônico de
fórmula Na₃S.

São corretas apenas as afirmações`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q13_1.jpg","width":628,"height":253}],
    alternatives: [
      { id: 'A', type: 'text', value: `I e II.` },
      { id: 'B', type: 'text', value: `I e III.` },
      { id: 'C', type: 'text', value: `II e III.` },
      { id: 'D', type: 'text', value: `II e IV.` },
      { id: 'E', type: 'text', value: `III e IV.` },
    ],
    correct: 'C',
    explanation: `O enxofre é menos massivo que o selênio, forma H₂S e tem maior energia de ionização que o sódio. O sulfeto de sódio é Na₂S, não Na₃S. Apenas II e III são verdadeiras: C.`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 17,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `A energia liberada na combustão do etanol de cana-de-açúcar pode ser considerada advinda da energia solar, uma vez que a primeira etapa para a produção do etanol é a fotossíntese. As transformações envolvidas na produção e no uso do etanol combustível são representadas pelas seguintes equações químicas:

6 CO₂(g) + 6 H₂O(g) → C₆H₁₂O₆(aq) + 6 O₂(g)
C₆H₁₂O₆(aq) → 2 C₂H₅OH(l) + 2 CO₂(g)   ΔH = −70 kJ/mol
C₂H₅OH(l) + 3 O₂(g) → 2 CO₂(g) + 3 H₂O(g)   ΔH = −1.235 kJ/mol

Com base nessas informações, podemos afirmar que o valor de ΔH para a reação de fotossíntese é`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `−1.305 kJ/mol.` },
      { id: 'B', type: 'text', value: `+1.305 kJ/mol.` },
      { id: 'C', type: 'text', value: `+2.400 kJ/mol.` },
      { id: 'D', type: 'text', value: `−2.540 kJ/mol.` },
      { id: 'E', type: 'text', value: `+2.540 kJ/mol.` },
    ],
    correct: 'E',
    explanation: `Somar a fermentação (−70 kJ/mol) a duas combustões de etanol (2×−1.235) dá a reação inversa da fotossíntese, com −2.540 kJ/mol. Invertendo-a, a fotossíntese exige +2.540 kJ/mol. Resposta E.`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 18,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Um método largamente aplicado para evitar a corrosão em
estruturas de aço enterradas no solo, como tanques e dutos, é
a proteção catódica com um metal de sacrifício. Esse método
consiste em conectar a estrutura a ser protegida, por meio de
um fio condutor, a uma barra de um metal diferente e mais
facilmente oxidável, que, com o passar do tempo, vai sendo
corroído até que seja necessária sua substituição.

Um experimento para identificar quais metais podem ser
utilizados como metal de sacrifício consiste na adição de um
pedaço de metal a diferentes soluções contendo sais de outros
metais, conforme ilustrado, e cujos resultados são mostrados
na tabela. O símbolo ( + ) indica que foi observada uma reação
química e o (−) indica que não se observou qualquer reação
química.

Metal X: estanho | alumínio | ferro | zinco
SnCl₂: — | + | + | +
AlCl₃: − | — | − | −
FeCl₃: − | + | — | +
ZnCl₂: − | + | − | —

Da análise desses resultados, conclui-se que pode(m) ser
utilizado(s) como metal(is) de sacrifício para tanques de aço:

Note e adote:
o aço é uma liga metálica majoritariamente formada pelo elemento ferro.`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q19_2.jpg","width":470,"height":285},{"src":"/fuvest/2018/images/fuvest_2018_q79_2.jpg","width":283,"height":214}],
    alternatives: [
      { id: 'A', type: 'text', value: `Al e Zn.` },
      { id: 'B', type: 'text', value: `somente Sn.` },
      { id: 'C', type: 'text', value: `Al e Sn.` },
      { id: 'D', type: 'text', value: `somente Al.` },
      { id: 'E', type: 'text', value: `Sn e Zn.` },
    ],
    correct: 'A',
    explanation: `O metal de sacrifício precisa oxidar-se mais facilmente que o ferro. A tabela mostra que alumínio e zinco reagem com os íons de ferro, ao contrário do estanho, identificando Al e Zn como protetores. Logo, A.`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
  },
  {
    id: 19,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Em um laboratório químico, foi encontrado um frasco de vidro
contendo um líquido incolor e que apresentava o seguinte
rótulo:

Para identificar a substância contida no frasco, foram feitos os
seguintes testes:

I. Dissolveram-se alguns mililitros do líquido do frasco em
água, resultando uma solução neutra. A essa solução,
adicionaram-se uma gota de ácido e uma pequena
quantidade de um forte oxidante. Verificou-se a formação
de um composto branco insolúvel em água fria, mas solúvel
em água quente. A solução desse composto em água
quente apresentou pH = 4.
II. O sólido branco, obtido no teste anterior, foi dissolvido em
etanol e a solução foi aquecida na presença de um
catalisador. Essa reação produziu benzoato de etila, que é
um éster aromático, de fórmula C₉H₁₀O₂.

Com base nos resultados desses testes, concluiu-se que o
Composto Alfa é:`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q19_1.jpg","width":216,"height":110},{"src":"/fuvest/2018/images/fuvest_2018_q79_1.jpg","width":543,"height":505}],
    alternatives: [
      { id: 'A', type: 'text', value: `Estrutura A da figura.` },
      { id: 'B', type: 'text', value: `Estrutura B da figura.` },
      { id: 'C', type: 'text', value: `Estrutura C da figura.` },
      { id: 'D', type: 'text', value: `Estrutura D da figura.` },
      { id: 'E', type: 'text', value: `Estrutura E da figura.` },
    ],
    correct: 'B',
    explanation: `O rótulo informa C₇H₈O. A oxidação produz ácido benzóico, cuja esterificação em etanol fornece benzoato de etila. O precursor compatível com a fórmula e esses testes é o álcool benzílico, estrutura B; não o benzaldeído, de fórmula C₇H₆O.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 20,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Considere as figuras pelas quais são representados diferentes
sistemas contendo determinadas substâncias químicas. Nas
figuras, cada círculo representa um átomo, e círculos de
tamanhos diferentes representam elementos químicos
diferentes.

A respeito dessas representações, é correto afirmar que os
sistemas`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q21_1.jpg","width":628,"height":707}],
    alternatives: [
      { id: 'A', type: 'text', value: `3, 4 e 5 representam misturas.` },
      { id: 'B', type: 'text', value: `1, 2 e 5 representam substâncias puras.` },
      { id: 'C', type: 'text', value: `2 e 5 representam, respectivamente, uma substância
molecular e uma mistura de gases nobres.` },
      { id: 'D', type: 'text', value: `6 e 4 representam, respectivamente, uma substância
molecular gasosa e uma substância simples.` },
      { id: 'E', type: 'text', value: `1 e 5 representam substâncias simples puras.` },
    ],
    correct: 'C',
    explanation: `O sistema 2 contém moléculas de uma mesma substância; no sistema 5, átomos isolados de elementos diferentes representam uma mistura de gases nobres. Essa descrição está em C. É preciso distinguir tipos de partículas de quantidade total de partículas.`,
    subject: ["qui"],
    topics: ["Química Geral","Questões aleatórias"],
  },
  {
    id: 21,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Considere um aquário tampado contendo apenas água e
plantas aquáticas, em grande quantidade, e iluminado somente
por luz solar. O gráfico que melhor esboça a variação de pH da
água em função do horário do dia, considerando que os gases
envolvidos na fotossíntese e na respiração das plantas ficam
parcialmente dissolvidos na água, é:`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q21_2.jpg","width":642,"height":679}],
    alternatives: [
      { id: 'A', type: 'text', value: `Gráfico A da figura.` },
      { id: 'B', type: 'text', value: `Gráfico B da figura.` },
      { id: 'C', type: 'text', value: `Gráfico C da figura.` },
      { id: 'D', type: 'text', value: `Gráfico D da figura.` },
      { id: 'E', type: 'text', value: `Gráfico E da figura.` },
    ],
    correct: 'C',
    explanation: `Durante a iluminação, a fotossíntese retira CO₂ da água e reduz sua acidificação, elevando o pH. À noite, predomina a liberação de CO₂ pela respiração e o pH cai. O gráfico C representa esse comportamento.`,
    subject: ["qui"],
    topics: ["Físico-química","Questões aleatórias"],
  },
  {
    id: 22,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `O hormônio melatonina é responsável pela sensação de
sonolência. Em nosso organismo, a concentração de
melatonina começa a aumentar ao anoitecer, atinge o máximo
no meio da noite e decresce com a luz do dia. A melatonina é
sintetizada a partir do aminoácido triptofano, em quatro etapas
catalisadas por diferentes enzimas, sendo que a enzima 3 é
degradada em presença de luz.

Considere as seguintes afirmações a respeito desse processo:

I. Na etapa 2, há perda de dióxido de carbono e, na etapa 3, a
serotonina é transformada em uma amida.
II. A manipulação de objetos que emitem luz, como celulares
e tablets, pode interromper ou tornar muito lento o
processo de transformação da serotonina em N acetil
serotonina.
III. O aumento da concentração de triptofano na corrente
sanguínea pode fazer com que a pessoa adormeça mais
lentamente ao anoitecer.

É correto o que se afirma em`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q23_1.jpg","width":647,"height":675}],
    alternatives: [
      { id: 'A', type: 'text', value: `I e II, apenas.` },
      { id: 'B', type: 'text', value: `I e III, apenas.` },
      { id: 'C', type: 'text', value: `II e III, apenas.` },
      { id: 'D', type: 'text', value: `III, apenas.` },
      { id: 'E', type: 'text', value: `I, II e III.` },
    ],
    correct: 'A',
    explanation: `A etapa 2 elimina CO₂ e a etapa 3 forma uma amida: I é verdadeira. A luz degrada a enzima 3, podendo retardar a etapa de acetilação: II é verdadeira. Mais precursor não explica adormecer mais lentamente, tornando III falsa. Logo, A.`,
    subject: ["bio"],
    topics: ["Fisiologia humana","Questões aleatórias"],
  },
  {
    id: 23,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Neste texto, o autor descreve o fascínio que as descobertas em
Química exerciam sobre ele, durante sua infância.

Eu adorava Química em parte por ela ser uma ciência de
transformações, de inúmeros compostos baseados em algumas
dúzias de elementos, eles próprios fixos, invariáveis e eternos. A
noção de estabilidade e de invariabilidade dos elementos era
psicologicamente crucial para mim, pois eu os via como pontos 5
fixos, como âncoras em um mundo instável. Mas agora, com a
radioatividade, chegavam transformações das mais incríveis.
(...)
A radioatividade não alterava as realidades da Química
ou a noção de elementos; não abalava a ideia de sua 1
estabilidade e identidade. O que ela fazia era aludir a duas
esferas no átomo – uma esfera relativamente superficial e
acessível, que governava a reatividade e a combinação química,
e uma esfera mais profunda, inacessível a todos os agentes
químicos e físicos usuais e suas energias relativamente 1
pequenas, onde qualquer mudança produzia uma alteração
fundamental de identidade.

Oliver Sacks, Tio Tungstênio: Memórias de uma infância química.

De acordo com o autor,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `o trecho “eles próprios fixos, invariáveis e eternos” (L. 3)
remete à dificuldade para a quebra de ligações químicas,
que são muito estáveis.` },
      { id: 'B', type: 'text', value: `“esfera relativamente superficial” (L. 12) e “esfera mais
profunda” (L. 14) dizem respeito, respectivamente, à
eletrosfera e ao núcleo dos átomos.` },
      { id: 'C', type: 'text', value: `“esfera relativamente superficial” (L. 12) e “esfera mais
profunda” (L. 14) referem se, respectivamente, aos elétrons
da camada de valência, envolvidos nas reações químicas, e
aos elétrons das camadas internas dos átomos, que não
estão envolvidos nas reações químicas.` },
      { id: 'D', type: 'text', value: `as energias envolvidas nos processos de transformação de
um átomo em outro, como ocorre com materiais
radioativos, são “relativamente pequenas” (L. 15 16).` },
      { id: 'E', type: 'text', value: `a expressão “uma alteração fundamental de identidade”
(L. 16 17) relaciona se à capacidade que um mesmo átomo
tem de fazer ligações químicas diferentes, formando
compostos com propriedades distintas das dos átomos
isolados.` },
    ],
    correct: 'B',
    explanation: `Reatividade e ligações químicas dependem da eletrosfera; mudanças no núcleo podem alterar a identidade do elemento. São essas as esferas superficial e profunda descritas por Sacks. A interpretação correta é B.`,
    subject: ["qui"],
    topics: ["Química Geral","Questões aleatórias"],
  },
  {
    id: 24,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Em uma urna, há bolas amarelas, brancas e vermelhas. Sabe
se que:

I. A probabilidade de retirar uma bola vermelha dessa urna é
o dobro da probabilidade de retirar uma bola amarela.
II. Se forem retiradas 4 bolas amarelas dessa urna, a
probabilidade de retirar uma bola vermelha passa a ser 1/2.
III. Se forem retiradas 12 bolas vermelhas dessa urna, a
probabilidade de retirar uma bola branca passa a ser 1/2.

A quantidade de bolas brancas na urna é`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `8.` },
      { id: 'B', type: 'text', value: `10.` },
      { id: 'C', type: 'text', value: `12.` },
      { id: 'D', type: 'text', value: `14.` },
      { id: 'E', type: 'text', value: `16.` },
    ],
    correct: 'C',
    explanation: `Se a quantidade amarela é a, a vermelha é 2a. Com total T, a segunda condição dá T=4a+4 e, portanto, b=a+4. A terceira dá T−12=2b; daí 4a+4−12=2a+8, a=8 e b=12. Resposta C.`,
    subject: ['mat'],
    topics: ['Probabilidade', 'Questões aleatórias'],
  },
  {
    id: 25,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Sejam f: ℝ → ℝ e g: ℝ⁺ → ℝ definidas por

f(x) = (1/2)5ˣ e g(x) = log₁₀x,

respectivamente.

O gráfico da função composta g∘f é:`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q26_1.jpg","width":536,"height":627}],
    alternatives: [
      { id: 'A', type: 'text', value: `Gráfico A da figura.` },
      { id: 'B', type: 'text', value: `Gráfico B da figura.` },
      { id: 'C', type: 'text', value: `Gráfico C da figura.` },
      { id: 'D', type: 'text', value: `Gráfico D da figura.` },
      { id: 'E', type: 'text', value: `Gráfico E da figura.` },
    ],
    correct: 'A',
    explanation: `g(f(x))=log₁₀(5ˣ/2)=x log₁₀5−log₁₀2. É uma reta crescente com intercepto vertical negativo. A figura correspondente é A.`,
    subject: ["mat"],
    topics: ["Funções","Questões aleatórias"],
  },
  {
    id: 26,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Doze pontos são assinalados sobre quatro segmentos de reta
de forma que três pontos sobre três segmentos distintos nunca
são colineares, como na figura.

O número de triângulos distintos que podem ser desenhados
com os vértices nos pontos assinalados é`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q25_1.jpg","width":277,"height":193}],
    alternatives: [
      { id: 'A', type: 'text', value: `200.` },
      { id: 'B', type: 'text', value: `204.` },
      { id: 'C', type: 'text', value: `208.` },
      { id: 'D', type: 'text', value: `212.` },
      { id: 'E', type: 'text', value: `220.` },
    ],
    correct: 'D',
    explanation: `Há C(12,3)=220 escolhas de três pontos. Os dois segmentos com quatro pontos geram C(4,3)=4 trios colineares cada; os demais segmentos têm só dois pontos. Excluindo 8 trios, restam 212 triângulos: D.`,
    subject: ["mat"],
    topics: ["Análise combinatória","Questões aleatórias"],
  },
  {
    id: 27,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Dentre os candidatos que fizeram provas de matemática,
português e inglês num concurso, 20 obtiveram nota mínima
para aprovação nas três disciplinas. Além disso, sabe-se que:

I. 14 não obtiveram nota mínima em matemática;
II. 16 não obtiveram nota mínima em português;
III. 12 não obtiveram nota mínima em inglês;
IV. 5 não obtiveram nota mínima em matemática e em
português;
V. 3 não obtiveram nota mínima em matemática e em inglês;
VI. 7 não obtiveram nota mínima em português e em inglês e
VII. 2 não obtiveram nota mínima em português, matemática
e inglês.

A quantidade de candidatos que participaram do concurso foi`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `44.` },
      { id: 'B', type: 'text', value: `46.` },
      { id: 'C', type: 'text', value: `47.` },
      { id: 'D', type: 'text', value: `48.` },
      { id: 'E', type: 'text', value: `49.` },
    ],
    correct: 'E',
    explanation: `Por inclusão-exclusão, os reprovados em ao menos uma disciplina são 14+16+12−5−3−7+2=29. Somando os 20 aprovados nas três, há 49 candidatos. Portanto, E.`,
    subject: ["mat"],
    topics: ["Análise combinatória","Questões aleatórias"],
  },
  {
    id: 28,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Sejam Df e Dg os maiores subconjuntos de ℝ nos quais estão definidas, respectivamente, as funções reais

f(x) = √[(x³ + 2x² − 4x − 8)/(x − 2)] e g(x) = √(x³ + 2x² − 4x − 8)/√(x − 2).

Considere, ainda, If e Ig as imagens de f e de g, respectivamente.

Nessas condições,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Df = Dg e If = Ig.` },
      { id: 'B', type: 'text', value: `tanto Df e Dg quanto If e Ig diferem em apenas um ponto.` },
      { id: 'C', type: 'text', value: `Df e Dg diferem em apenas um ponto, If e Ig diferem em mais de um ponto.` },
      { id: 'D', type: 'text', value: `Df e Dg diferem em mais de um ponto, If e Ig diferem em apenas um ponto.` },
      { id: 'E', type: 'text', value: `tanto Df e Dg quanto If e Ig diferem em mais de um ponto.` },
    ],
    correct: 'E',
    explanation: `O numerador é (x−2)(x+2)². Assim, f(x)=|x+2| para x≠2, com domínio ℝ\\{2} e imagem [0,∞). Já g requer x>2 pelo denominador √(x−2), e sua imagem é (4,∞). Domínios e imagens diferem em mais de um ponto: E.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 29,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Prolongando-se os lados de um octógono convexo ABCDEFGH, obtém-se um polígono estrelado, conforme a figura.

A soma α₁ + ⋯ + α₈ vale`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q29.jpg","width":605,"height":359}],
    alternatives: [
      { id: 'A', type: 'text', value: `180°.` },
      { id: 'B', type: 'text', value: `360°.` },
      { id: 'C', type: 'text', value: `540°.` },
      { id: 'D', type: 'text', value: `720°.` },
      { id: 'E', type: 'text', value: `900°.` },
    ],
    correct: `B`,
    explanation: `Somando os ângulos dos triângulos e os ângulos formados pelos prolongamentos dos lados, usando a soma 1.080° dos ângulos internos do octógono, obtém-se 360° para as oito pontas indicadas. Portanto, a resposta correta é B.`,
    subject: ['mat'],
    topics: ['Geometria', 'Questões aleatórias'],
  },
  {
    id: 30,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Admitindo que a linha pontilhada represente o gráfico da função f(x) = sen(x) e que a linha contínua represente o gráfico da função g(x) = α sen(βx), segue que`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q26_2.jpg","width":529,"height":357}],
    alternatives: [
      { id: 'A', type: 'text', value: `0 < α < 1 e 0 < β < 1.` },
      { id: 'B', type: 'text', value: `α > 1 e 0 < β < 1.` },
      { id: 'C', type: 'text', value: `α = 1 e β > 1.` },
      { id: 'D', type: 'text', value: `0 < α < 1 e β > 1.` },
      { id: 'E', type: 'text', value: `0 < α < 1 e β = 1.` },
    ],
    correct: 'A',
    explanation: `A curva contínua tem amplitude menor que a pontilhada, logo 0<α<1. Também apresenta período maior; como T=2π/β, segue 0<β<1. A reúne as duas condições.`,
    subject: ['mat'],
    topics: ['Trigonometria', 'Questões aleatórias'],
  },
  {
    id: 31,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Maria quer comprar uma TV que está sendo vendida por
R$ 1.500,00 à vista ou em 3 parcelas mensais sem juros de
R$ 500,00. O dinheiro que Maria reservou para essa compra
não é suficiente para pagar à vista, mas descobriu que o banco
oferece uma aplicação financeira que rende 1% ao mês. Após
fazer os cálculos, Maria concluiu que, se pagar a primeira
parcela e, no mesmo dia, aplicar a quantia restante, conseguirá
pagar as duas parcelas que faltam sem ter que colocar nem tirar
um centavo sequer. Quanto Maria reservou para essa compra,
em reais?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `1.450,20` },
      { id: 'B', type: 'text', value: `1.480,20` },
      { id: 'C', type: 'text', value: `1.485,20` },
      { id: 'D', type: 'text', value: `1.495,20` },
      { id: 'E', type: 'text', value: `1.490,20` },
    ],
    correct: 'C',
    explanation: `Na data da primeira parcela, o valor necessário é 500+500/1,01+500/(1,01)². A soma é aproximadamente R$ 1.485,20. Aplicar o restante após pagar os primeiros R$ 500 permite retirar as duas prestações nas datas seguintes. Resposta C.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 32,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Considere o polinômio

P(x) = xⁿ + aₙ₋₁xⁿ⁻¹ + ⋯ + a₁x + a₀,

em que a₀, …, aₙ₋₁ ∈ ℝ. Sabe-se que as suas n raízes estão sobre a circunferência unitária e que a₀ < 0.

O produto das n raízes de P(x), para qualquer inteiro n ≥ 1, é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `−1` },
      { id: 'B', type: 'text', value: `iⁿ` },
      { id: 'C', type: 'text', value: `iⁿ⁺¹` },
      { id: 'D', type: 'text', value: `(−1)ⁿ` },
      { id: 'E', type: 'text', value: `(−1)ⁿ⁺¹` },
    ],
    correct: 'E',
    explanation: `O produto das raízes de um polinômio mônico é (−1)ⁿa₀. Como todas têm módulo 1, o módulo do produto e de a₀ é 1. Sendo a₀ real e negativo, a₀=−1. O produto é (−1)ⁿ⁺¹: E.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 33,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `O quadrilátero da figura está inscrito em uma circunferência de
raio 1. A diagonal desenhada é um diâmetro dessa
circunferência.

Sendo x e y as medidas dos ângulos indicados na figura, a área da região cinza, em função de x e y, é:`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q35_1.jpg","width":274,"height":274}],
    alternatives: [
      { id: 'A', type: 'text', value: `π + sen(2x) + sen(2y)` },
      { id: 'B', type: 'text', value: `π − sen(2x) − sen(2y)` },
      { id: 'C', type: 'text', value: `π − cos(2x) − cos(2y)` },
      { id: 'D', type: 'text', value: `π − [cos(2x) + cos(2y)]/2` },
      { id: 'E', type: 'text', value: `π − [sen(2x) + sen(2y)]/2` },
    ],
    correct: 'B',
    explanation: `Cada triângulo inscrito com hipotenusa igual ao diâmetro 2 tem área sen(2x) ou sen(2y), obtida pelo produto dos catetos 2senθ e 2cosθ dividido por 2. A região cinza é a área do círculo menos essas duas áreas: π−sen(2x)−sen(2y). Logo, B.`,
    subject: ["mat"],
    topics: ["Geometria","Trigonometria","Questões aleatórias"],
  },
  {
    id: 34,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Dois atletas correm com velocidades constantes em uma pista
retilínea, partindo simultaneamente de extremos opostos, A e
B. Um dos corredores parte de A, chega a B e volta para A. O
outro corredor parte de B, chega a A e volta para B. Os
corredores cruzam-se duas vezes, a primeira vez a 800 metros
de A e a segunda vez a 500 metros de B. O comprimento da
pista, em metros, é`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `1.000.` },
      { id: 'B', type: 'text', value: `1.300.` },
      { id: 'C', type: 'text', value: `1.600.` },
      { id: 'D', type: 'text', value: `1.900.` },
      { id: 'E', type: 'text', value: `2.100.` },
    ],
    correct: 'D',
    explanation: `Até o primeiro encontro, os percursos somam L e o atleta que sai de A percorre 800 m. Até o segundo encontro, os percursos somam 3L, de modo que esse atleta percorre 2.400 m. Como então percorreu L+500, temos L=1.900 m. Resposta D.`,
    subject: ["mat"],
    topics: ["Funções","Questões aleatórias"],
  },
  {
    id: 35,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Borboleta, lula e avestruz têm como principal excreta
nitrogenado, respectivamente,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `ácido úrico, amônia e ácido úrico.` },
      { id: 'B', type: 'text', value: `ácido úrico, ureia e amônia.` },
      { id: 'C', type: 'text', value: `amônia, ácido úrico e amônia.` },
      { id: 'D', type: 'text', value: `amônia, ureia e ácido úrico.` },
      { id: 'E', type: 'text', value: `ureia, amônia e ácido úrico.` },
    ],
    correct: 'A',
    explanation: `Insetos e aves eliminam predominantemente ácido úrico, economizando água. A lula, aquática, elimina sobretudo amônia, que se dilui no meio. A sequência ácido úrico, amônia, ácido úrico está em A.`,
    subject: ["bio"],
    topics: ["Fisiologia humana","Questões aleatórias"],
  },
  {
    id: 36,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `No sistema circulatório humano,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a veia cava superior transporta sangue pobre em oxigênio,
coletado da cabeça, dos braços e da parte superior do
tronco, e chega ao átrio esquerdo do coração.` },
      { id: 'B', type: 'text', value: `a veia cava inferior transporta sangue pobre em oxigênio,
coletado da parte inferior do tronco e dos membros
inferiores, e chega ao átrio direito do coração.` },
      { id: 'C', type: 'text', value: `a artéria pulmonar transporta sangue rico em oxigênio, do
coração até os pulmões.` },
      { id: 'D', type: 'text', value: `as veias pulmonares transportam sangue rico em oxigênio,
dos pulmões até o átrio direito do coração.` },
      { id: 'E', type: 'text', value: `a artéria aorta transporta sangue rico em oxigênio para o
corpo, por meio da circulação sistêmica, e sai do ventrículo
direito do coração.` },
    ],
    correct: 'B',
    explanation: `A veia cava inferior recolhe sangue pobre em oxigênio da parte inferior do corpo e desemboca no átrio direito. B é correta. As veias pulmonares chegam ao átrio esquerdo e a aorta sai do ventrículo esquerdo, o que invalida os outros destinos citados.`,
    subject: ["bio"],
    topics: ["Fisiologia humana","Questões aleatórias"],
  },
  {
    id: 37,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `No grupo dos fungos, são conhecidas perto de 100 mil espécies.
Esse grupo tão diverso inclui espécies que`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `são sapróbias, fundamentais na ciclagem dos nutrientes,
pois sintetizam açúcares a partir do dióxido de carbono do
ar.` },
      { id: 'B', type: 'text', value: `são parasitas, procariontes heterotróficos que absorvem
compostos orgânicos produzidos pelos organismos
hospedeiros.` },
      { id: 'C', type: 'text', value: `são comestíveis, pertencentes a um grupo de fungos
primitivos que não formam corpos de frutificação.` },
      { id: 'D', type: 'text', value: `formam, com as raízes de plantas, associações chamadas
micorrizas, mutuamente benéficas, pela troca de
nutrientes.` },
      { id: 'E', type: 'text', value: `realizam respiração, na presença de oxigênio, e
fotossíntese, na ausência desse gás, sendo, portanto,
anaeróbias facultativas.` },
    ],
    correct: 'D',
    explanation: `Micorrizas associam fungos e raízes: a planta fornece compostos orgânicos e o fungo amplia a absorção de água e sais. A relação é mutuamente benéfica e corresponde a D. Fungos são eucariontes heterotróficos, não realizam fotossíntese.`,
    subject: ["bio"],
    topics: ["Ecologia","Questões aleatórias"],
  },
  {
    id: 38,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Analise as três afirmações sobre o controle da respiração em
humanos.

I. Impulsos nervosos estimulam a contração do diafragma e
dos músculos intercostais, provocando a inspiração.
II. A concentração de dióxido de carbono no sangue influencia
o ritmo respiratório.
III. O ritmo respiratório pode ser controlado voluntariamente,
mas na maior parte do tempo tem controle involuntário.

Está correto o que se afirma em`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I, apenas.` },
      { id: 'B', type: 'text', value: `I e III, apenas.` },
      { id: 'C', type: 'text', value: `III, apenas.` },
      { id: 'D', type: 'text', value: `II e III, apenas.` },
      { id: 'E', type: 'text', value: `I, II e III.` },
    ],
    correct: 'E',
    explanation: `Neurônios motores promovem a contração inspiratória; CO₂ e alterações de pH influenciam os centros respiratórios; o controle automático admite modulação voluntária. As três afirmações são corretas: E.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 39,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `A surdez é geneticamente heterogênea: pode ser causada por
mutações em diferentes genes, localizados nos autossomos ou
no cromossomo X ou, ainda, por mutações em genes
mitocondriais.

Os heredogramas representam quatro famílias, em que
ocorrem pessoas com surdez (● e ■):

A(s) família(s) em que o padrão de herança permite afastar a
possibilidade de que a surdez tenha herança mitocondrial
é(são) apenas`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q40_1.jpg","width":511,"height":129}],
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `2 e 3.` },
      { id: 'C', type: 'text', value: `3.` },
      { id: 'D', type: 'text', value: `3 e 4.` },
      { id: 'E', type: 'text', value: `4.` },
    ],
    correct: 'C',
    explanation: `Na família 3, o pai é afetado, a mãe não é e os filhos são afetados, contrariando a transmissão exclusivamente materna mitocondrial. As outras famílias são compatíveis com essa transmissão. Apenas 3: C.`,
    subject: ["bio"],
    topics: ["Genética","Questões aleatórias"],
  },
  {
    id: 40,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Muitas plantas adaptadas a ambientes terrestres secos e com
alta intensidade luminosa apresentam folhas`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `pequenas com estômatos concentrados na parte inferior,
muitos tricomas claros, cutícula impermeável e parênquima
aquífero.` },
      { id: 'B', type: 'text', value: `grandes com estômatos concentrados na parte inferior,
poucos tricomas claros, cutícula impermeável e parênquima
aerífero.` },
      { id: 'C', type: 'text', value: `pequenas com estômatos concentrados na parte superior,
ausência de tricomas, cera sobre a epiderme foliar e
parênquima aquífero.` },
      { id: 'D', type: 'text', value: `grandes com estômatos igualmente distribuídos em ambas
as partes, ausência de tricomas, ausência de cera sobre a
epiderme foliar e parênquima aerífero.` },
      { id: 'E', type: 'text', value: `pequenas com estômatos concentrados na parte superior,
muitos tricomas claros, cera sobre a epiderme foliar e
parênquima aerífero.` },
    ],
    correct: 'A',
    explanation: `Folhas pequenas, estômatos inferiores, tricomas claros e cutícula espessa reduzem aquecimento e perda de água, enquanto o parênquima aquífero armazena água. A reúne adaptações coerentes com ambientes secos e muito iluminados.`,
    subject: ["bio"],
    topics: ["Botânica","Questões aleatórias"],
  },
  {
    id: 41,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Células de embrião de drosófila (2n=8), que estavam em
divisão, foram tratadas com uma substância que inibe a
formação do fuso, impedindo que a divisão celular prossiga.
Após esse tratamento, quantos cromossomos e quantas
cromátides, respectivamente, cada célula terá?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `4 e 4.` },
      { id: 'B', type: 'text', value: `4 e 8.` },
      { id: 'C', type: 'text', value: `8 e 8.` },
      { id: 'D', type: 'text', value: `8 e 16.` },
      { id: 'E', type: 'text', value: `16 e 16.` },
    ],
    correct: 'D',
    explanation: `Bloquear o fuso impede a segregação dos cromossomos já duplicados. A célula mantém 8 cromossomos, cada um com duas cromátides, totalizando 16 cromátides. Resposta D.`,
    subject: ["bio"],
    topics: ["Citologia","Genética","Questões aleatórias"],
  },
  {
    id: 42,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Analise as três afirmações seguintes sobre ciclos
biogeoquímicos.

I. A respiração dos seres vivos e a queima de combustíveis
fósseis e de vegetação restituem carbono à atmosfera.
II. Diferentes tipos de bactérias participam da ciclagem do
nitrogênio: as fixadoras, que transformam o gás nitrogênio
em amônia, as nitrificantes, que produzem nitrito e nitrato,
e as desnitrificantes, que devolvem o nitrogênio gasoso à
atmosfera.
III. Pelo processo da transpiração, as plantas bombeiam,
continuamente, água do solo para a atmosfera, e esse vapor
de água se condensa e contribui para a formação de nuvens,
voltando à terra como chuva.

Está correto o que se afirma em`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I, apenas.` },
      { id: 'B', type: 'text', value: `I e II, apenas.` },
      { id: 'C', type: 'text', value: `II e III, apenas.` },
      { id: 'D', type: 'text', value: `III, apenas.` },
      { id: 'E', type: 'text', value: `I, II e III.` },
    ],
    correct: 'E',
    explanation: `Respiração e combustão devolvem carbono à atmosfera; bactérias realizam fixação, nitrificação e desnitrificação; a transpiração integra o ciclo da água. I, II e III descrevem processos corretos. Portanto, E.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 43,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `O botulismo provocou a morte de 1,1 mil cabeças de gado, no
último mês de agosto, numa fazenda em Mato Grosso do Sul. A
suspeita clínica inicial foi confirmada pelo exame das amostras
de grãos úmidos de milho fornecidos aos animais,
demonstrando a presença da toxina botulínica, que é produzida
pela bactéria Clostridium botulinum.

Considerando que a toxina botulínica bloqueia a transmissão
neuromuscular, a morte dos animais deve ter sido decorrente
de`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `infecção generalizada.` },
      { id: 'B', type: 'text', value: `hemorragia interna.` },
      { id: 'C', type: 'text', value: `desidratação provocada por diarreia.` },
      { id: 'D', type: 'text', value: `acidente vascular cerebral.` },
      { id: 'E', type: 'text', value: `parada respiratória.` },
    ],
    correct: 'E',
    explanation: `A toxina botulínica bloqueia a liberação de acetilcolina nas junções neuromusculares, causando paralisia flácida. Ao atingir os músculos respiratórios, pode provocar parada respiratória e morte. Logo, E.`,
    subject: ['bio'],
    topics: ['Fisiologia humana', 'Questões aleatórias'],
  },
  {
    id: 44,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `A levedura Saccharomyces cerevisiae pode obter energia na
ausência de oxigênio, de acordo com a equação

C₆H₁₂O₆ 2 CO₂ + 2 CH₃CH₂OH + 2 ATP.

Produtos desse processo são utilizados na indústria de
alimentos e bebidas. Esse processo ocorre _____________ da
levedura e seus produtos são utilizados na produção de
_____________.

As lacunas dessa frase devem ser preenchidas por:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `nas mitocôndrias; cerveja e vinagre.` },
      { id: 'B', type: 'text', value: `nas mitocôndrias; cerveja e pão.` },
      { id: 'C', type: 'text', value: `no citosol; cerveja e pão.` },
      { id: 'D', type: 'text', value: `no citosol; iogurte e vinagre.` },
      { id: 'E', type: 'text', value: `no citosol e nas mitocôndrias; cerveja e iogurte.` },
    ],
    correct: 'C',
    explanation: `A fermentação alcoólica ocorre no citosol e produz etanol e CO₂. Esses produtos são aproveitados, respectivamente, em bebidas como cerveja e no crescimento da massa do pão. A combinação correta é C.`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 45,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Nos cães labradores, a cor da pelagem preta, chocolate ou
dourada depende da interação entre dois genes, um localizado
no cromossomo 11 (alelos B e b) e o outro, no cromossomo 5
(alelos E e e). O alelo dominante B é responsável pela síntese
do pigmento preto e o alelo recessivo b, pela produção do
pigmento chocolate. O alelo dominante E determina a
deposição do pigmento preto ou chocolate nos pelos; e o alelo
e impede a deposição de pigmento no pelo.

Dentre 36 cães resultantes de cruzamentos de cães
heterozigóticos nos dois lócus com cães duplo homozigóticos
recessivos, quantos com pelagem preta, chocolate e dourada,
respectivamente, são esperados?`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `0, 0 e 36.` },
      { id: 'B', type: 'text', value: `9, 9 e 18.` },
      { id: 'C', type: 'text', value: `18, 9 e 9.` },
      { id: 'D', type: 'text', value: `18, 0 e 18.` },
      { id: 'E', type: 'text', value: `18, 18 e 0.` },
    ],
    correct: 'B',
    explanation: `No cruzamento BbEe×bbee, os descendentes são BbEe, Bbee, bbEe e bbee em iguais proporções. O primeiro é preto, o terceiro chocolate e os dois com ee são dourados. Entre 36 cães, esperam-se 9, 9 e 18: B.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 46,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Considere estas três reações químicas realizadas por seres vivos:

I. Fotossíntese: 6 H₂O + 6 CO₂ →(luz)→ 6 O₂ + C₆H₁₂O₆
II. Quimiossíntese metanogênica: CO₂ + 4 H₂ → CH₄ + 2 H₂O
III. Respiração celular: 6 O₂ + C₆H₁₂O₆ → 6 H₂O + 6 CO₂

A mudança no estado de oxidação do elemento carbono em cada reação e o tipo de organismo em que a reação ocorre são:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I: redução; autotrófico. II: redução; autotrófico. III: oxidação; heterotrófico e autotrófico.` },
      { id: 'B', type: 'text', value: `I: oxidação; autotrófico. II: oxidação; heterotrófico. III: oxidação; autotrófico.` },
      { id: 'C', type: 'text', value: `I: redução; autotrófico. II: redução; heterotrófico e autotrófico. III: redução; heterotrófico e autotrófico.` },
      { id: 'D', type: 'text', value: `I: oxidação; autotrófico e heterotrófico. II: redução; autotrófico. III: oxidação; autotrófico.` },
      { id: 'E', type: 'text', value: `I: oxidação; heterotrófico. II: oxidação; autotrófico. III: redução; heterotrófico.` },
    ],
    correct: 'A',
    explanation: `Na fotossíntese, o carbono do CO₂ é reduzido em compostos orgânicos; na metanogênese, é reduzido a CH₄. Na respiração, é oxidado novamente a CO₂, processo presente em autótrofos e heterótrofos. A tabela compatível é A.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Citologia', 'Questões aleatórias'],
  },
  {
    id: 47,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Nas últimas décadas, descobriu se que os volumosos e
inadequados descartes de resíduos plásticos e de outros
materiais sintéticos, mesmo quando realizados nos continentes,
podem resultar em consideráveis depósitos em áreas distantes
nos oceanos e mares, seja em seu fundo, na coluna d’água, ou
na sua superfície. Como consequência, ocorrem mudanças
físicas, químicas e ecológicas nesses oceanos e mares, em que
alguns desses depósitos já atingem a escala planetária, como é
o caso dos materiais plásticos flutuantes representados na
figura.
www.revistapesquisafapesp.br, maio de 2016.

Os depósitos flutuantes representados na figura apresentam se`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q48_1.jpg","width":475,"height":857}],
    alternatives: [
      { id: 'A', type: 'text', value: `com padrões concentrados na parte interna dos giros
oceânicos do Pacífico norte e sul, locais de menor atividade
das grandes correntes marinhas.` },
      { id: 'B', type: 'text', value: `com maior acumulação no litoral de ambos os hemisférios,
devido à atuação de importantes correntes marinhas nessas
áreas.` },
      { id: 'C', type: 'text', value: `mais volumosos no hemisfério norte, em função das
menores temperaturas de suas águas, o que faz aumentar a
velocidade de correntes, como a do Peru e a do Japão.` },
      { id: 'D', type: 'text', value: `com concentrações idênticas em ambos os hemisférios,
devido à forte atuação de importantes correntes marinhas
que transitam do hemisfério norte ao sul.` },
      { id: 'E', type: 'text', value: `mais concentrados e abundantes no hemisfério norte,
devido à grande mobilidade de importantes correntes
marinhas, como a de Humboldt e a de Madagascar.` },
    ],
    correct: 'A',
    explanation: `Grandes giros oceânicos favorecem a convergência e retenção de materiais flutuantes em seus setores internos. O mapa mostra concentrações no Pacífico norte e sul associadas a essa circulação. A é correta; os depósitos não se limitam às costas.`,
    subject: ['geo'],
    topics: ['Meio ambiente', 'Questões aleatórias'],
  },
  {
    id: 48,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Às vésperas da Cúpula do G20, que teve início em 07 de julho
de 2017, em Hamburgo, na Alemanha, a chanceler alemã,
Angela Merkel, discursou no Parlamento e referiu se a atores
políticos importantes no cenário mundial, conforme os trechos
transcritos a seguir.

Quem pensa que os problemas deste mundo podem ser
resolvidos com o isolacionismo e o protecionismo está
cometendo um enorme erro. Somente juntos podemos
encontrar as respostas certas às questões centrais dos nossos
tempos (...) Não podemos esperar até que a última pessoa na
Terra esteja convencida da evidência científica das mudanças
climáticas. Em outras palavras: o acordo climático (de Paris) é
irreversível e não negociável.

www.jb.com.br/pais/notícias.

Analise as três afirmações seguintes, quanto aos objetivos e ao
teor desses trechos do discurso.

I. Podem ser entendidos como uma crítica à saída dos EUA do
acordo sobre as mudanças climáticas construído na COP21
de 2015, em Paris, à época assinado pelo ex presidente
Barack Obama. A saída foi justificada pelo atual presidente
Donald Trump, afirmando que o acordo seria prejudicial à
economia americana.
II. Trata se de um elogio à recente postura de algumas
autoridades do Reino Unido, o qual, em seu processo
denominado Brexit, pretende proteger a economia
britânica, mas sem afetar seus compromissos financeiros
com o acordo de Paris de 2015 e os relacionados com as
questões estratégicas coletivas da Comunidade Europeia.
III. Faz se uma crítica direta à França, que, mesmo tendo sido a
sede da COP21 de 2015, vem continuamente
desobedecendo a esse acordo, pois contraria as metas
firmadas de emissão de CO₂ em suas atividades industriais.

Está correto o que se afirma em`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I, apenas.` },
      { id: 'B', type: 'text', value: `II, apenas.` },
      { id: 'C', type: 'text', value: `I e III, apenas.` },
      { id: 'D', type: 'text', value: `II e III, apenas.` },
      { id: 'E', type: 'text', value: `I, II e III.` },
    ],
    correct: 'A',
    explanation: `Merkel defende cooperação internacional e o acordo de Paris, contrapondo-se à saída anunciada pelos EUA de Trump. Isso confirma I. O trecho não elogia o Brexit nem direciona a crítica a um descumprimento francês. Apenas I: A.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 49,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Contemporaneamente, pode-se definir a sociedade mundial
como a do petróleo, devido à participação desta matéria prima
em inúmeros produtos e atividades humanas. A utilização deste
recurso natural data de muitos séculos, mas sua exploração e
beneficiamento se expandiram somente a partir do século XX.
A respeito desse recurso natural, é correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Houve uma forte redução do preço do barril, no início da
década de 1970, por conta dos resultados das pesquisas
envolvendo novos procedimentos de extração e refino.` },
      { id: 'B', type: 'text', value: `A estatização, no Brasil, do transporte e do refino de
petróleo iniciou se no final dos anos 1930 sob o governo de
Juscelino Kubitschek.` },
      { id: 'C', type: 'text', value: `O início de seu uso como fonte de energia se deu em 1920,
na Inglaterra, com a descoberta de reservas pouco
profundas.` },
      { id: 'D', type: 'text', value: `No final dos anos 1920, sete empresas petrolíferas mundiais
constituíram um cartel controlador da extração, transporte,
refino e distribuição do petróleo.` },
      { id: 'E', type: 'text', value: `Os Estados Unidos possuem reservas ilimitadas de petróleo,
o que ocasiona independência em relação aos países
participantes da OPEP.` },
    ],
    correct: 'D',
    explanation: `No final dos anos 1920, grandes companhias articularam um cartel internacional do petróleo, associado às chamadas Sete Irmãs. D descreve esse controle oligopolista. Os choques dos anos 1970 elevaram preços, e reservas estadunidenses não são ilimitadas.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 50,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Países europeus, como França e Alemanha, têm valorizado,
principalmente nas duas últimas décadas, o estabelecimento da
menor distância possível entre as áreas de produção agrícola e
de consumo, o que se denomina circuito curto. Na França, o
circuito curto é reconhecido por integrar, no máximo, um
intermediário entre o produtor e o consumidor, quando não se
trata de venda direta. No Brasil, ainda que não haja uma
definição oficial, o circuito curto é identificado pela proximidade
entre produtor e consumidor.

Moacir R. Darolt et al. A diversidade dos circuitos curtos de alimentos
ecológicos: ensinamentos do caso brasileiro e francês.
Agriculturas, v.10, n.2. Adaptado.

Considere a definição apresentada e analise as três afirmações:

I. A proximidade entre área de produção agrícola e de
consumo pode contribuir para a redução da emissão de CO₂.
II. O objetivo fundamental do circuito curto é a ampliação da
lucratividade das grandes indústrias alimentícias, com
ganhos advindos da redução dos custos de transporte.
III. Com o circuito curto, são geradas novas relações sociais,
pelas quais se pode atingir o preço justo das mercadorias,
tanto para o consumidor como para o produtor.

Está correto apenas o que se afirma em`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `I e II.` },
      { id: 'D', type: 'text', value: `II e III.` },
      { id: 'E', type: 'text', value: `I e III.` },
    ],
    correct: 'E',
    explanation: `Percursos menores podem reduzir emissões no transporte, e a aproximação entre produtores e consumidores pode ampliar negociações por preços justos. I e III são corretas. O propósito não é ampliar os lucros das grandes indústrias alimentícias. Logo, E.`,
    subject: ['geo'],
    topics: ['Meio ambiente', 'Questões aleatórias'],
  },
  {
    id: 51,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `O Brasil possui um território extenso, com 92% pertencentes à
zona intertropical. As massas de ar que atuam em território
brasileiro possuem influências oceânicas e continentais. Sobre
as características dessas massas de ar, é correto afirmar:`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q48_2.jpg","width":607,"height":883}],
    alternatives: [
      { id: 'A', type: 'text', value: `W representa a Massa Equatorial Atlântica de ar quente e
úmido, responsável pela grande umidade na Amazônia.` },
      { id: 'B', type: 'text', value: `Y indica a Massa Polar Atlântica, que se desloca a partir do
sul em direção ao norte do território brasileiro e tem como
característica a presença de ar frio, podendo atingir a região
Centro Oeste no inverno.` },
      { id: 'C', type: 'text', value: `Z indica a Massa Tropical Continental, que tem como
característica a presença de ar quente e úmido,
ocasionando alagamentos no Centro Oeste no inverno.` },
      { id: 'D', type: 'text', value: `X indica a Massa Equatorial Continental de ar quente e seco,
que atua no nordeste do litoral brasileiro.` },
      { id: 'E', type: 'text', value: `V representa a Massa Temperada Atlântica de ar frio e seco,
que atua no sul do litoral brasileiro.` },
    ],
    correct: 'B',
    explanation: `Y identifica a Massa Polar Atlântica, fria, que avança a partir do sul e pode alcançar o Centro-Oeste no inverno. B corresponde ao mapa e às características dessa massa. A massa equatorial continental não é seca.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 52,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `No mundo virtual, milhões de pessoas falam, compram,
compartilham dados e se reúnem para tratar dos mais variados
assuntos.
Nas figuras, os números mostram a movimentação média, em
1 minuto, de algumas das principais empresas e ferramentas de
internet nos anos de 2015 e 2017.

Sobre a internet e os números mostrados nas figuras, é correto
afirmar:`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q52_1.jpg","width":492,"height":216},{"src":"/fuvest/2018/images/fuvest_2018_q52_2.jpg","width":492,"height":645},{"src":"/fuvest/2018/images/fuvest_2018_q52_3.jpg","width":492,"height":215}],
    alternatives: [
      { id: 'A', type: 'text', value: `Após um crescimento até a primeira década do século XXI,
as ferramentas na internet apresentaram estagnação de
utilização nos últimos anos.` },
      { id: 'B', type: 'text', value: `Para todos os governos do mundo, independentemente do
regime, a democratização da internet é uma ação
estratégica.` },
      { id: 'C', type: 'text', value: `O controle de dados e informações é descentralizado, o que
confere equanimidade aos países membros da ONU.` },
      { id: 'D', type: 'text', value: `A internet está em constante e rápida mudança, com novas
ferramentas aparecendo com contribuições relevantes,
enquanto outras vão perdendo espaço.` },
      { id: 'E', type: 'text', value: `Empresas do ramo de serviços têm apresentado
crescimento acentuado, o que não é observado em relação
a empresas do ramo de entretenimento.` },
    ],
    correct: 'D',
    explanation: `A comparação de 2015 e 2017 revela mudanças rápidas na relevância das plataformas, com expansão, surgimento e perda de espaço. D descreve essa dinâmica; os dados não provam estagnação geral ou democratização universal.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 53,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `As casinhas eram alugadas por mês e as tinas por dia; e tudo
pago adiantado. O preço de cada tina, metendo a água,
quinhentos réis; sabão à parte. As moradoras do cortiço tinham
preferência e não pagavam nada para lavar.
(...) E, mal vagava uma das casinhas, ou um quarto, um canto
onde coubesse um colchão, surgia uma nuvem de pretendentes
a disputá los.
E aquilo se foi constituindo numa grande lavanderia, agitada e
barulhenta, com as suas cercas de varas, as suas hortaliças
verdejantes e os seus jardinzinhos de três e quatro palmos, que
apareciam como manchas alegres por entre a negrura das
limosas tinas transbordantes e o revérbero das claras barracas
de algodão cru, armadas sobre os lustrosos bancos de lavar.

Aluísio Azevedo, O cortiço.

Nas cidades brasileiras, particularmente no último quartel do
século XIX, novas formas urbanas são constituídas, como os
cortiços e as favelas. Sobre esse fenômeno, é correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `A expansão periférica no século XIX, na zona sul da cidade
do Rio de Janeiro, teve significativa presença de cortiços,
devido à chegada massiva de imigrantes japoneses.` },
      { id: 'B', type: 'text', value: `A primeira favela carioca teve sua origem no forte
empobrecimento da população no contexto da crise
cafeeira na região serrana do Rio de Janeiro.` },
      { id: 'C', type: 'text', value: `A maior concentração dos cortiços da cidade de São Paulo,
presentes no último quartel do século XIX, localizava se na
porção mais central da aglomeração urbana.` },
      { id: 'D', type: 'text', value: `As primeiras favelas brasileiras se originaram devido à
expansão da atividade industrial, no centro da cidade de
São Paulo, no início do último quartel do século XIX.` },
      { id: 'E', type: 'text', value: `Nas cidades do Vale do Paraíba, durante a expansão
cafeeira, os cortiços eram muito frequentes, por conta da
presença de imigrantes italianos empobrecidos.` },
    ],
    correct: 'C',
    explanation: `No fim do século XIX, cortiços paulistanos concentravam-se sobretudo nas áreas centrais, próximas a empregos e serviços, em moradias coletivas subdivididas. C é correta. A imigração japonesa não explica cortiços cariocas nesse período.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 54,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `O conceito de erosão apresenta definições mais amplas ou mais
restritas. A mais abrangente envolve os processos de
denudação da superfície terrestre de forma geral, incluindo
desde os processos de intemperismo de todos os tipos até os de
transporte e deposição de material. Outro conceito, mais
restrito, envolve apenas o deslocamento do material
intemperizado, seja solo ou rocha, por agentes de transporte
como a água corrente, o vento, o gelo ou a gravidade,
produzindo formas erosivas características.

R. Fairbridge. The Encyclopedia of Geomorphology, 1968. Adaptado.

Exemplo de processo ao qual se aplica o conceito mais restrito
de erosão é`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a formação de rochas.` },
      { id: 'B', type: 'text', value: `a oxidação de rochas.` },
      { id: 'C', type: 'text', value: `a formação de sulcos no solo.` },
      { id: 'D', type: 'text', value: `a formação de concreções no solo.` },
      { id: 'E', type: 'text', value: `o vulcanismo da crosta.` },
    ],
    correct: 'C',
    explanation: `Sulcos surgem pela remoção e pelo transporte de partículas por água que escoa concentrada. Isso corresponde à erosão em sentido restrito, alternativa C, em contraste com transformação química, formação de rochas ou vulcanismo.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 55,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `As primeiras práticas de agricultura datam de,
aproximadamente, 10.000 anos. Neste período, ocorreram
inúmeras transformações na sua base técnica, mas é, no
decorrer da segunda metade do século XX, que a revolução
agrícola contemporânea, fundada na elevada motorização
mecanização, na seleção de variedades de plantas e de raças de
animais e na ampla utilização de corretores de pH dos solos, de
fertilizantes, de ração animal e de insumos químicos para as
plantas e para os animais domésticos, progrediu vigorosamente
nos países desenvolvidos e em alguns setores limitados dos
países subdesenvolvidos.

Marcel Mazoyer & Laurence Roudart. História das agriculturas
no mundo: do neolítico à crise contemporânea,
São Paulo: Unesp; Brasília: NEAD, 2010. Adaptado.

As transformações ocorridas na agricultura após meados do
século XX foram reconhecidas como revolução verde, sobre a
qual se pode afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Sua concepção foi desenvolvida no Japão e nos Tigres
Asiáticos após a II Guerra Mundial.` },
      { id: 'B', type: 'text', value: `Contribuiu para a ampliação da diversificação das espécies
e do controle das sementes pelos pequenos agricultores.` },
      { id: 'C', type: 'text', value: `Seus parâmetros produtivos estavam fundados, desde sua
origem, em preservar e proteger a biodiversidade nas áreas
de cultivo.` },
      { id: 'D', type: 'text', value: `Com sua expansão, na África e no sudeste Asiático, as
populações rurais puderam alcançar padrões de consumo
semelhantes aos das grandes metrópoles.` },
      { id: 'E', type: 'text', value: `Foi baseada na inovação científica e está atrelada à grande
produção de grãos em extensas áreas de monocultura.` },
    ],
    correct: 'E',
    explanation: `A Revolução Verde articulou pesquisa, sementes selecionadas, mecanização e insumos químicos para ampliar produtividade, especialmente de grãos em monoculturas extensas. E descreve esse pacote técnico. Ele não teve como princípio preservar a diversidade das lavouras.`,
    subject: ['geo'],
    topics: ['Meio ambiente', 'Questões aleatórias'],
  },
  {
    id: 56,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Observe os mapas referentes à delimitação da bacia
hidrográfica do rio Xingu, com o detalhamento da parte sul,
onde fica o Parque Indígena do Xingu (PIX).

Com relação às áreas delimitadas nos mapas, está correto o que
se afirma em:`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q56_1.jpg","width":619,"height":316},{"src":"/fuvest/2018/images/fuvest_2018_q56_2.jpg","width":619,"height":316}],
    alternatives: [
      { id: 'A', type: 'text', value: `Devido ao avanço do desmatamento nessa bacia
hidrográfica nas últimas quatro décadas, processo iniciado
pela atividade pecuária ao longo dos rios e seguido pelo
avanço da monocultura de eucalipto, inviabilizam se
quaisquer ações de recuperação e de conservação do bioma
Amazônico.` },
      { id: 'B', type: 'text', value: `O Parque Indígena do Xingu, criado principalmente para
proteger diversas etnias indígenas, atua hoje como inibidor
do avanço do desmatamento, função esperada para as
diversas unidades de conservação previstas pelo Sistema
Nacional de Unidades de Conservação.` },
      { id: 'C', type: 'text', value: `Dentre as grandes bacias hidrográficas amazônicas, a bacia
hidrográfica do rio Xingu, na disposição leste oeste, é uma
das bacias da margem esquerda do rio Amazonas com
importante conectividade entre dois biomas brasileiros: a
Caatinga e o bioma Amazônico, ambos biológica e
geologicamente diversos.` },
      { id: 'D', type: 'text', value: `O desmatamento, observado no mapa, é resultado da
monocultura de babaçu, praticada pelos indígenas que
extraem seu óleo e vendem no para indústrias de
cosméticos.` },
      { id: 'E', type: 'text', value: `O avanço do desmatamento nessa área deve se às
monoculturas de cana-de-açúcar e laranja, ambas
cultivadas com variedades transgênicas adaptadas ao
bioma Amazônico.` },
    ],
    correct: 'B',
    explanation: `O Parque Indígena do Xingu protege territórios de diferentes povos e aparece como barreira ao avanço do desmatamento. B reconhece essa função de conservação, sem equiparar juridicamente terra indígena e unidade do SNUC. As outras alternativas atribuem o desmate a atividades incompatíveis com os mapas.`,
    subject: ['geo'],
    topics: ['Meio ambiente', 'Questões aleatórias'],
  },
  {
    id: 57,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Estuários são ambientes aquáticos em que há a transição entre rio (água doce, com salinidade menor que 0,5 g de NaCl por kg de
água) e mar (água salgada, com salinidade maior que 30 g de NaCl por kg de água). Existem diferentes tipos de estuários, dos quais
três deles são:

1. Estuário bem misturado: ocorre quando há grandes variações de maré e fortes correntes, causando rápida mistura entre as
águas.
2. Estuário parcialmente misturado: ocorre quando o mar tem variações moderadas de maré e há mistura entre as águas, porém
com diferenças entre a região superficial e a profunda.
3. Estuário do tipo cunha salina: ocorre quando o rio desemboca no mar, em que este tem pouca variação de maré, gerando
grande estratificação.

Medidas de salinidade da água em função da profundidade foram realizadas em um ponto equivalente para esses três tipos de
estuários, conforme mostrado no esquema a seguir, gerando os gráficos I, II e III.

A alternativa que relaciona corretamente o gráfico com a respectiva descrição do tipo de estuário é:
`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q57_2.jpg","width":1105,"height":327},{"src":"/fuvest/2018/images/fuvest_2018_q57_1.jpg","width":1105,"height":327}],
    alternatives: [
      { id: 'A', type: 'text', value: `1→I, 2→II, 3→III.` },
      { id: 'B', type: 'text', value: `1→II, 2→I, 3→III.` },
      { id: 'C', type: 'text', value: `1→II, 2→III, 3→I.` },
      { id: 'D', type: 'text', value: `1→III, 2→I, 3→II.` },
      { id: 'E', type: 'text', value: `1→III, 2→II, 3→I.` },
    ],
    correct: 'E',
    explanation: `No estuário bem misturado, a salinidade quase não varia com a profundidade: III. A mistura parcial produz gradiente intermediário: II. Na cunha salina, água doce superficial e salgada profunda provocam forte estratificação: I. A ordem III, II, I é E.`,
    subject: ['geo'],
    topics: ['Geografia física', 'Questões aleatórias'],
  },
  {
    id: 58,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Os Impérios helenísticos, amálgamas ecléticas de formas
gregas e orientais, alargaram o espaço da civilização urbana da
Antiguidade clássica, diluindo-lhe a substância [...].
De 200 a.C. em diante, o poder imperial romano avançou para
leste [...] e nos meados do século II as suas legiões haviam
esmagado todas as barreiras sérias de resistência do Oriente.

P. Anderson. Passagens da Antiguidade ao feudalismo.
Porto: Afrontamento, 1982.

Na região das formações sociais gregas,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a autonomia das cidades estado manteve se intocável,
apesar da centralização política implementada pelos
imperadores helenísticos.` },
      { id: 'B', type: 'text', value: `essas formações e os impérios helenísticos constituíram-se
com o avanço das conquistas espartanas no período
posterior às guerras no Peloponeso, ao final do século V a.C.` },
      { id: 'C', type: 'text', value: `a conquista romana caracterizou se por uma forte ofensiva
frente à cultura helenística, impondo a língua latina e
cerceando as escolas filosóficas gregas.` },
      { id: 'D', type: 'text', value: `o Oriente tornou-se área preponderante do Império
Romano a partir do século III d.C., com a crise do
escravismo, que afetou mais fortemente sua parte
ocidental.` },
      { id: 'E', type: 'text', value: `os espaços foram conquistados pelas tropas romanas, na
Grécia e na Ásia Menor, em seu período de apogeu, devido
às lutas intestinas e às rivalidades entre cidades estado.` },
    ],
    correct: 'D',
    explanation: `A crise ocidental, ligada às dificuldades do sistema escravista e às pressões políticas, contrastou com a maior vitalidade urbana e comercial do Oriente. Sua preponderância cresceu a partir do século III, como afirma D. A expansão romana não apagou a cultura grega.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 59,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Um grande manto de florestas e várzeas cortado por clareiras
cultivadas, mais ou menos férteis, tal é o aspecto da
Cristandade algo diferente do Oriente muçulmano, mundo de
oásis em meio a desertos. Num local a madeira é rara e as
árvores indicam a civilização, noutro a madeira é abundante e
sinaliza a barbárie. A religião, que no Oriente nasceu ao abrigo
das palmeiras, cresceu no Ocidente em detrimento das árvores,
refúgio dos gênios pagãos que monges, santos e missionários
abatem impiedosamente.
J. Le Goff. A civilização do ocidente medieval.
Bauru: Edusc, 2005. Adaptado.

Acerca das características da Cristandade e do Islã no período
medieval, pode-se afirmar que`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `o cristianismo se desenvolveu a partir do mundo rural,
enquanto a religião muçulmana teve como base inicial as
cidades e os povoados da península arábica.` },
      { id: 'B', type: 'text', value: `a concentração humana assemelhava se nas clareiras e nos
oásis, que se constituíam como células econômicas, sociais
e culturais, tanto da Cristandade quanto do Islã.` },
      { id: 'C', type: 'text', value: `a Cristandade é considerada o negativo do Islã, pela ausência
de cidades, circuitos mercantis e transações monetárias, que
abundavam nas formações sociais islâmicas.` },
      { id: 'D', type: 'text', value: `o clero cristão, defensor do monoteísmo estrito, combateu
as práticas pagãs muçulmanas, arraigadas nas florestas e
nas regiões desérticas da Cristandade ocidental.` },
      { id: 'E', type: 'text', value: `a expansão econômica islâmica caracterizou se pela
ampliação das fronteiras de cultivo, em detrimento das
florestas, em um movimento inverso àquele verificado no
Ocidente medieval.` },
    ],
    correct: 'B',
    explanation: `Clareiras cultivadas e oásis concentravam população e atividades econômicas, sociais e culturais em ambientes distintos. B reconhece essa função comparável. O texto não afirma ausência absoluta de cidades e comércio na Cristandade.`,
    subject: ["his"],
    topics: ["História Geral","Questões aleatórias"],
  },
  {
    id: 60,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `A imagem representa a morte de Atahualpa, o último
imperador inca, em 1533, após a conquista espanhola
comandada por Francisco Pizarro.

Analise as quatro afirmações seguintes, a respeito da empresa
e da conquista colonial espanhola no Peru e da representação
presente na imagem.

I. A conquista foi favorecida pelo conflito interno entre os dois
irmãos incas, Atahualpa e Huáscar, aproveitado pelas forças
espanholas lideradas por Francisco Pizarro.
II. A produção agrícola das plantations escravistas constituiu
se na base econômica do vice reinado do Peru, controlado
pelos espanhóis.
III. Do lado esquerdo da pintura, há uma movimentação
conflituosa, na qual as mulheres incas são contidas por
guardas espanhóis, contrastando com a expressão
ordenada e solene do lado direito, composto por religiosos
e autoridades espanholas em torno do corpo do imperador
inca.
IV. A pintura revela o resgate de elementos históricos
importante para a construção do ideário nacionalista no
século XIX, no processo pós independência e de formação
do Estado nacional peruano , mas retrata os personagens
indígenas com trajes e feições europeus.

Estão corretas apenas as afirmações`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q59_1.jpg","width":630,"height":438}],
    alternatives: [
      { id: 'A', type: 'text', value: `I, II e III.` },
      { id: 'B', type: 'text', value: `II, III e IV.` },
      { id: 'C', type: 'text', value: `I, III e IV.` },
      { id: 'D', type: 'text', value: `I e II.` },
      { id: 'E', type: 'text', value: `III e IV.` },
    ],
    correct: 'C',
    explanation: `A disputa entre Atahualpa e Huáscar favoreceu os conquistadores; a cena contrapõe incas em sofrimento e autoridades espanholas solenes; a obra oitocentista reelabora o passado para um ideário nacional. I, III e IV são corretas. A mineração, não plantations escravistas, foi central no Peru colonial. Logo, C.`,
    subject: ["his"],
    topics: ["História Geral","Questões aleatórias"],
  },
  {
    id: 61,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `A respeito dos espaços econômicos do açúcar e do ouro no
Brasil colonial, é correto afirmar:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `A pecuária no sertão nordestino surgiu em resposta às
demandas de transporte da economia mineradora.` },
      { id: 'B', type: 'text', value: `A produção açucareira estimulou a formação de uma rede
urbana mais ampla do que a atividade aurífera.` },
      { id: 'C', type: 'text', value: `O custo relativo do frete dos metais preciosos viabilizou a
interiorização da colonização portuguesa.` },
      { id: 'D', type: 'text', value: `A mão de obra escrava indígena foi mais empregada na
exploração do ouro do que na produção de açúcar.` },
      { id: 'E', type: 'text', value: `Ambas as atividades produziram efeitos similares sobre a
formação de um mercado interno colonial.` },
    ],
    correct: 'C',
    explanation: `Metais preciosos têm alto valor em pouco volume e suportam custos de transporte desde áreas interiores. Essa relação entre valor e frete permitiu maior interiorização da economia aurífera que da açucareira. Portanto, C.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 62,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Na edição de julho de 1818 do Correio Braziliense, o jornalista
Hipólito José da Costa, residente em Londres, publicou a
seguinte avaliação sobre os dilemas então enfrentados pelo
Império português na América:

A presença de S.M. [Sua Majestade Imperial] no Brasil lhe dará
ocasião para ter mais ou menos influência naqueles
acontecimentos; a independência em que el rei ali se acha das
intrigas europeias o deixa em liberdade para decidir se nas
ocorrências, segundo melhor convier a seus interesses. Se volta
para Lisboa, antes daquela crise se decidir, não poderá tomar
parte nos arranjamentos que a nova ordem de coisas deve
ocasionar na América.

Nesse excerto, o autor referia se`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `aos desdobramentos da Revolução Pernambucana do ano
anterior, que ameaçara o domínio português sobre o
centro sul do Brasil.` },
      { id: 'B', type: 'text', value: `às demandas da Revolução Constitucionalista do Porto,
exigindo a volta imediata do monarca a Portugal.` },
      { id: 'C', type: 'text', value: `à posição de independência de D. João VI em relação às
pressões da Santa Aliança para que interviesse nas guerras
do rio da Prata.` },
      { id: 'D', type: 'text', value: `às implicações que os movimentos de independência na
América espanhola traziam para a dominação portuguesa
no Brasil.` },
      { id: 'E', type: 'text', value: `ao projeto de D. João VI para que seu filho D. Pedro se
tornasse imperador do Brasil independente.` },
    ],
    correct: 'D',
    explanation: `Em 1818, as independências hispano-americanas colocavam em questão o domínio europeu na América. O autor avalia como a permanência do monarca no Brasil permitiria influir nesses processos. D é correta; a Revolução do Porto ocorreria apenas em 1820.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 63,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `No que se refere à crise do colonialismo português na África na
segunda metade do século XX,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a Era das Revoluções, ao implicar a abolição do tráfico
transatlântico de escravos para as Américas, erodiu as bases
do domínio de Portugal sobre Angola e Moçambique.` },
      { id: 'B', type: 'text', value: `Portugal, com um poder de segunda ordem no concerto
europeu, se viu alijado das deliberações da Conferência de
Berlim, perdendo assim o domínio sobre suas colônias.` },
      { id: 'C', type: 'text', value: `as independências de Angola e de Moçambique foram
marcadas por um processo relativamente pacífico, que
envolveu ampla negociação com os poderes metropolitanos
em Portugal.` },
      { id: 'D', type: 'text', value: `o processo de independência das colônias portuguesas, ao
contrário do que ocorreu nas colônias inglesas e francesas,
não se relacionou às polarizações geopolíticas da Guerra
Fria.` },
      { id: 'E', type: 'text', value: `o movimento de independência colonial foi decisivo para o
processo de transformação política em Portugal, ao acelerar
a crise do regime autoritário nascido no período entre
guerras.` },
    ],
    correct: 'E',
    explanation: `As guerras de libertação africanas desgastaram o Estado Novo português e contribuíram para a crise que desembocou na Revolução dos Cravos. E reconhece a conexão entre emancipação colonial e transformação metropolitana. As independências não foram processos pacíficos alheios à Guerra Fria.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Questões aleatórias'],
  },
  {
    id: 64,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `[...] a Declaração Universal representa um fato novo na história,
na medida em que, pela primeira vez, um sistema de princípios
fundamentais da conduta humana foi livre e expressamente
aceito, através de seus respectivos governos, pela maioria dos
homens que vive na Terra. Com essa declaração, um sistema de
valores é – pela primeira vez na história – universal, não em
princípio, mas de fato, na medida em que o consenso sobre sua
validade e sua capacidade de reger os destinos da comunidade
futura de todos os homens foi explicitamente declarado. [...]
Somente depois da Declaração Universal é que podemos ter a
certeza histórica de que a humanidade – toda a humanidade –
partilha alguns valores comuns; e podemos, finalmente, crer na
universalidade dos valores, no único sentido em que tal crença
é historicamente legítima, ou seja, no sentido em que universal
significa não algo dado objetivamente, mas algo
subjetivamente acolhido pelo universo dos homens.

N. Bobbio. A era dos direitos. Rio de Janeiro: Campus, 1992.

A Declaração Universal mencionada no texto`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `foi instituída no processo da Revolução Francesa e norteou
os movimentos feministas, sufragistas e operários no
decorrer do século XIX.` },
      { id: 'B', type: 'text', value: `assemelhou se ao universalismo cristão, que também
resultou no estabelecimento de um conjunto de valores
partilhado pela humanidade.` },
      { id: 'C', type: 'text', value: `desenvolveu se com a inclusão de princípios universais
pelos legisladores norte americanos e influenciou o
abolicionismo nos Estados Unidos.` },
      { id: 'D', type: 'text', value: `foi aprovada pela Organização das Nações Unidas e serviu
como referência para grupos que lutaram pelos direitos de
negros, mulheres e homossexuais na década de 1960.` },
      { id: 'E', type: 'text', value: `originou se do jusnaturalismo moderno e consolidou se
com o movimento ilustrado e o despotismo esclarecido ao
longo do século XVIII.` },
    ],
    correct: 'D',
    explanation: `A Declaração Universal dos Direitos Humanos foi aprovada pela ONU em 1948. Seus princípios forneceram referência às lutas por direitos civis e contra discriminações nas décadas seguintes. A alternativa correta é D.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 65,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Aqui no Chile estava se construindo, entre imensas dificuldades,
uma sociedade verdadeiramente justa, erguida sobre a base de
nossa soberania, de nosso orgulho nacional, do heroísmo dos
melhores habitantes do Chile. Do nosso lado, do lado da
revolução chilena, estavam a constituição e a lei, a democracia
e a esperança.

Pablo Neruda. Confesso que vivi. Memórias. Rio de Janeiro: Difel, 1980.

Nesse texto,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `“soberania” está relacionada às campanhas de privatização
das minas de estanho e salitre, que até então eram
mantidas por capitais anglo americanos.` },
      { id: 'B', type: 'text', value: `“heroísmo” refere se aos embates armados, travados com
setores da democracia cristã e com as comunidades
indígenas dos araucanos.` },
      { id: 'C', type: 'text', value: `“a constituição e a lei” é uma referência ao novo
ordenamento jurídico implantado após o golpe promovido
pela Unidade Popular.` },
      { id: 'D', type: 'text', value: `“democracia” alude a um traço peculiar da via chilena para
o socialismo, pois o presidente Salvador Allende chegou ao
poder pelo voto.` },
      { id: 'E', type: 'text', value: `“esperança” traduz a expectativa resultante do apoio
econômico e estratégico que havia sido obtido junto aos
Estados Unidos e França.` },
    ],
    correct: 'D',
    explanation: `Salvador Allende chegou à presidência pela via eleitoral e buscou transformações socialistas no marco constitucional. Esse é o sentido de democracia na defesa de Neruda. Portanto, D; não houve um golpe da Unidade Popular para levá-lo ao poder.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 66,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `O futurismo de Marinetti e o fascismo de Benito Mussolini têm
em comum`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `a constatação da falência cultural da Itália, que se agarrou
ao passado romano e ignorou os grandes avanços da
Primeira Revolução Industrial.` },
      { id: 'B', type: 'text', value: `o desejo de proporcionar aos cidadãos italianos o acesso
aos bens de consumo e a implantação do Estado de bem
estar social.` },
      { id: 'C', type: 'text', value: `o esforço de modernização cultural e a tentativa de demolir
as edificações que restaram do passado romano.` },
      { id: 'D', type: 'text', value: `a valorização e a adoção das bases e dos princípios das
teorias revolucionárias anarquistas e socialistas.` },
      { id: 'E', type: 'text', value: `a glorificação da ideologia da guerra e da velocidade
proporcionada pelos avanços técnicos e militares.` },
    ],
    correct: 'E',
    explanation: `Marinetti e o fascismo exaltaram a guerra, a energia da ação e os avanços técnicos ligados à velocidade e à força militar. Essa convergência ideológica corresponde a E, sem significar identidade total entre vanguarda artística e regime político.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 67,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `A operação era um pouco dolorosa e não durava mais que um
minuto, mas era traumática. Seu significado simbólico estava
claro para todos: este é um sinal indelével, daqui não sairão
mais; esta é a marca que se imprime nos escravos e nos animais
destinados ao matadouro, e vocês se tornaram isso. Vocês não
têm mais nome: este é o seu nome. A violência da tatuagem era
gratuita, um fim em si mesmo, pura ofensa: não bastavam os
três números de pano costurados nas calças, no casaco e no
agasalho de inverno?

Primo Levi. Os afogados e os sobreviventes. Rio de Janeiro: Paz e Terra, 1990.

Está de acordo com o texto a seguinte afirmação:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `A tatuagem era uma forma de tortura e uma mensagem
não verbal, que inscrevia a condenação no corpo do
prisioneiro.` },
      { id: 'B', type: 'text', value: `O uso de tatuagens era perturbador apenas para ciganos e
judeus ortodoxos, pois violava o código moral e as leis
religiosas dessas comunidades.` },
      { id: 'C', type: 'text', value: `O recurso de tatuar o prisioneiro, além de impor um
sofrimento físico e moral, discriminava o tipo de
remuneração.` },
      { id: 'D', type: 'text', value: `O emprego das tatuagens funcionava como um código
estético e de classificação dos prisioneiros nos campos de
concentração.` },
      { id: 'E', type: 'text', value: `A tatuagem, assim como o trabalho voluntário, não tinham
finalidade produtiva, mas contribuíam para o entendimento
entre os prisioneiros.` },
    ],
    correct: 'A',
    explanation: `A tatuagem imposta substituía o nome por um número e comunicava uma condenação duradoura, acrescentando violência física e simbólica. A está de acordo com Levi. Não era adorno voluntário ou forma de remuneração.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 68,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Tanto no desenvolvimento político como no científico, o
sentimento de funcionamento defeituoso, que pode levar à
crise, é um pré requisito para a revolução.

T. S. Kuhn. A estrutura das revoluções científicas. São Paulo: Perspectiva, 1989.

Analise as quatro afirmações seguintes, acerca das revoluções
políticas e científicas da Época Moderna.

I. A concepção heliocêntrica de Nicolau Copérnico,
sustentada na obra Das revoluções das esferas celestes, de
1543, reforçava a doutrina católica contra os postulados
protestantes.
II. A Lei da Gravitação Universal, proposta por Isaac Newton
no século XVII, reforçava as radicais perspectivas ateístas
que haviam pautado as ações dos grupos revolucionários na
Inglaterra à época da Revolução Puritana.
III. Às experiências com eletricidade realizadas por Benjamin
Franklin no século XVIII, somou se sua atuação no processo
de emancipação política dos Estados Unidos da América.
IV. Os estudos sobre o oxigênio e sobre a conservação da
matéria, feitos por Antoine Lavoisier ao final do século XVIII,
estavam em consonância com a racionalização do
conhecimento, característica da Ilustração.

Estão corretas apenas as afirmações`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I, II e III.` },
      { id: 'B', type: 'text', value: `II, III e IV.` },
      { id: 'C', type: 'text', value: `I, III e IV.` },
      { id: 'D', type: 'text', value: `I e II.` },
      { id: 'E', type: 'text', value: `III e IV.` },
    ],
    correct: 'E',
    explanation: `Franklin participou tanto de experiências elétricas quanto da independência dos EUA; Lavoisier desenvolveu investigações associadas à racionalização iluminista. III e IV são corretas. Copérnico não reforçou a doutrina católica contra protestantes, nem Newton expressa o ateísmo radical descrito. Resposta E.`,
    subject: ['his'],
    topics: ['História Geral', 'Questões aleatórias'],
  },
  {
    id: 69,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Examine o cartum.

Frank e Ernest – Bob Thaves. O Estado de S. Paulo. 22.08.2017.

O efeito de humor presente no cartum decorre,
principalmente, da`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q67_1.jpg","width":638,"height":193}],
    alternatives: [
      { id: 'A', type: 'text', value: `semelhança entre a língua de origem e a local.` },
      { id: 'B', type: 'text', value: `falha de comunicação causada pelo uso do aparelho
eletrônico.` },
      { id: 'C', type: 'text', value: `falta de habilidade da personagem em operar o localizador
geográfico.` },
      { id: 'D', type: 'text', value: `discrepância entre situar se geograficamente e dominar o
idioma local.` },
      { id: 'E', type: 'text', value: `incerteza sobre o nome do ponto turístico onde as
personagens se encontram.` },
    ],
    correct: 'D',
    explanation: `O aparelho pode informar a posição geográfica sem permitir compreender a língua do lugar. O humor contrapõe esses dois tipos de orientação e conhecimento. Essa discrepância corresponde a D.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 70,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Uma obra de arte é um desafio; não a explicamos,
ajustamo-nos a ela. Ao interpretá-la, fazemos uso dos nossos
próprios objetivos e esforços, dotamo-la de um significado que
tem sua origem nos nossos próprios modos de viver e de pensar.
Numa palavra, qualquer gênero de arte que, de fato, nos afete,
torna-se, deste modo, arte moderna.
As obras de arte, porém, são como altitudes inacessíveis.
Não nos dirigimos a elas diretamente, mas contornamo-las.
Cada geração as vê sob um ângulo diferente e sob uma nova
visão; nem se deve supor que um ponto de vista mais recente é
mais eficiente do que um anterior. Cada aspecto surge na sua
altura própria, que não pode ser antecipada nem prolongada;
e, todavia, o seu significado não está perdido porque o
significado que uma obra assume para uma geração posterior
é o resultado de uma série completa de interpretações anteriores.

Arnold Hauser, Teorias da arte. Adaptado.

De acordo com o texto, a compreensão do significado de uma
obra de arte pressupõe`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `o reconhecimento de seu significado intrínseco.` },
      { id: 'B', type: 'text', value: `a exclusividade do ponto de vista mais recente.` },
      { id: 'C', type: 'text', value: `a consideração de seu caráter imutável.` },
      { id: 'D', type: 'text', value: `o acúmulo de interpretações anteriores.` },
      { id: 'E', type: 'text', value: `a explicação definitiva de seu sentido.` },
    ],
    correct: 'D',
    explanation: `Hauser afirma que o sentido para uma geração posterior resulta de uma série de interpretações anteriores. Compreender a obra envolve esse acúmulo histórico, não uma explicação definitiva ou necessariamente superior. Logo, D.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 71,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Uma obra de arte é um desafio; não a explicamos,
ajustamo-nos a ela. Ao interpretá-la, fazemos uso dos nossos
próprios objetivos e esforços, dotamo-la de um significado que
tem sua origem nos nossos próprios modos de viver e de pensar.
Numa palavra, qualquer gênero de arte que, de fato, nos afete,
torna-se, deste modo, arte moderna.
As obras de arte, porém, são como altitudes inacessíveis.
Não nos dirigimos a elas diretamente, mas contornamo-las.
Cada geração as vê sob um ângulo diferente e sob uma nova
visão; nem se deve supor que um ponto de vista mais recente é
mais eficiente do que um anterior. Cada aspecto surge na sua
altura própria, que não pode ser antecipada nem prolongada;
e, todavia, o seu significado não está perdido porque o
significado que uma obra assume para uma geração posterior
é o resultado de uma série completa de interpretações anteriores.

Arnold Hauser, Teorias da arte. Adaptado.

No trecho “Numa palavra, qualquer gênero de arte que, de
fato, nos afete, torna-se, deste modo, arte moderna” (L. 5 6),
as expressões sublinhadas podem ser substituídas, sem
prejuízo do sentido do texto, respectivamente, por`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `realmente; portanto.` },
      { id: 'B', type: 'text', value: `invariavelmente; ainda.` },
      { id: 'C', type: 'text', value: `com efeito; todavia.` },
      { id: 'D', type: 'text', value: `com segurança; também.` },
      { id: 'E', type: 'text', value: `possivelmente; até.` },
    ],
    correct: 'A',
    explanation: `“De fato” equivale a “realmente”; “deste modo” introduz uma conclusão, equivalente a “portanto”. A preserva ambos os sentidos. As outras combinações inserem dúvida, oposição ou adição inadequadas.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 72,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Este último capítulo é todo de negativas. Não alcancei a
celebridade do emplasto, não fui ministro, não fui califa, não
conheci o casamento. Verdade é que, ao lado dessas faltas,
coube-me a boa fortuna de não comprar o pão com o suor do
meu rosto. Mais; não padeci a morte de dona Plácida, nem a
semidemência do Quincas Borba. Somadas umas coisas e
outras, qualquer pessoa imaginará que não houve míngua nem
sobra, e, conseguintemente, que saí quite com a vida. E
imaginará mal; porque ao chegar a este outro lado do mistério,
achei-me com um pequeno saldo, que é a derradeira negativa
deste capítulo de negativas: Não tive filhos, não transmiti a
nenhuma criatura o legado da nossa miséria.

Machado de Assis, Memórias póstumas de Brás Cubas.

Não sei por que até hoje todo o mundo diz que tinha
pena dos escravos. Eu não penso assim. Acho que se fosse
obrigada a trabalhar o dia inteiro não seria infeliz. Ser obrigada
a ficar à toa é que seria castigo para mim. Mamãe às vezes diz
que ela até deseja que eu fique preguiçosa; a minha esperteza
é que a amofina. Eu então respondo: “Se eu fosse preguiçosa
não sei o que seria da senhora, meu pai e meus irmãos, sem
uma empregada em casa”.

Helena Morley, Minha vida de menina.

São características dos narradores Brás Cubas e Helena,
respectivamente,`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `malícia e ingenuidade.` },
      { id: 'B', type: 'text', value: `solidariedade e egoísmo.` },
      { id: 'C', type: 'text', value: `apatia e determinação.` },
      { id: 'D', type: 'text', value: `rebeldia e conformismo.` },
      { id: 'E', type: 'text', value: `otimismo e pessimismo.` },
    ],
    correct: 'C',
    explanation: `Brás Cubas enumera projetos não realizados e valoriza não ter trabalhado, revelando apatia e acomodação. Helena demonstra iniciativa e considera a ociosidade um castigo, revelando determinação. A oposição solicitada está em C.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 73,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Este último capítulo é todo de negativas. Não alcancei a
celebridade do emplasto, não fui ministro, não fui califa, não
conheci o casamento. Verdade é que, ao lado dessas faltas,
coube-me a boa fortuna de não comprar o pão com o suor do
meu rosto. Mais; não padeci a morte de dona Plácida, nem a
semidemência do Quincas Borba. Somadas umas coisas e
outras, qualquer pessoa imaginará que não houve míngua nem
sobra, e, conseguintemente, que saí quite com a vida. E
imaginará mal; porque ao chegar a este outro lado do mistério,
achei-me com um pequeno saldo, que é a derradeira negativa
deste capítulo de negativas: Não tive filhos, não transmiti a
nenhuma criatura o legado da nossa miséria.

Machado de Assis, Memórias póstumas de Brás Cubas.

Não sei por que até hoje todo o mundo diz que tinha
pena dos escravos. Eu não penso assim. Acho que se fosse
obrigada a trabalhar o dia inteiro não seria infeliz. Ser obrigada
a ficar à toa é que seria castigo para mim. Mamãe às vezes diz
que ela até deseja que eu fique preguiçosa; a minha esperteza
é que a amofina. Eu então respondo: “Se eu fosse preguiçosa
não sei o que seria da senhora, meu pai e meus irmãos, sem
uma empregada em casa”.

Helena Morley, Minha vida de menina.

Nos dois textos, obtém se ênfase por meio do emprego de um
mesmo recurso expressivo, como se pode verificar nos
seguintes trechos:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `“Este último capítulo é todo de negativas” / “Eu não penso
assim”.` },
      { id: 'B', type: 'text', value: `“Não alcancei a celebridade do emplasto, não fui ministro,
não fui califa, não conheci o casamento” / “Não sei por que
até hoje todo o mundo diz que tinha pena dos escravos”.` },
      { id: 'C', type: 'text', value: `“Verdade é que, ao lado dessas faltas, coube-me a boa
fortuna de não comprar o pão com o suor do meu rosto” /
“Ser obrigada a ficar à toa é que seria castigo para mim”.` },
      { id: 'D', type: 'text', value: `“qualquer pessoa imaginará que não houve míngua nem
sobra” / “Mamãe às vezes diz que ela até deseja que eu
fique preguiçosa”.` },
      { id: 'E', type: 'text', value: `“Não tive filhos, não transmiti a nenhuma criatura o legado
da nossa miséria” / “Acho que se fosse obrigada a trabalhar
o dia inteiro não seria infeliz”.` },
    ],
    correct: 'C',
    explanation: `Em ambos os trechos selecionados por C, “é que” funciona como construção de realce: “Verdade é que...” e “Ser obrigada a ficar à toa é que...”. O recurso enfatiza a avaliação de cada narrador, embora seus valores sejam opostos.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 74,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Voltada para o encanto da vida livre do pequeno núcleo
aberto para o campo, a jovem Helena, familiar a todas as
classes sociais daquele âmbito, estava colocada num invejável
ponto de observação. (...)
Sem querer forçar um conflito que, a bem dizer, apenas
se esboça, podemos atribuir parte desta grande versatilidade
psicológica da protagonista aos ecos de uma formação
britânica, protestante, liberal, ressoando num ambiente de
corte ibérico e católico, mal saído do regime de trabalho
escravo. Colorindo a apaixonada esfera de independência da
juventude, reveste-se de acentuado sabor sociológico este caso
da menina ruiva que, embora inteiramente identificada com o
meio de gente morena que é o seu, o único que conhece e ama,
não vacila em o criticar com precisão e finura notáveis, se essa
lucidez não traduzisse a coexistência íntima de dois mundos
culturais divergentes, que se contemplam e se julgam no
interior de um eu tornado harmonioso pelo equilíbrio mesmo de
suas contradições.

Alexandre Eulálio, “Livro que nasceu clássico”.
In: Helena Morley, Minha vida de menina.

O trecho do romance Minha vida de menina que ilustra de
modo mais preciso o que, para o crítico Alexandre Eulálio,
representa “a coexistência íntima de dois mundos culturais
divergentes” é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `“Se há uma coisa que me faz muita tristeza é gostar muito
de uma pessoa, pensando que ela é boa e depois ver que é
ruim”.` },
      { id: 'B', type: 'text', value: `“Eu tinha muita inveja de ver meus irmãos montarem no
cavalo em pelo, mas agora estou curada e não montarei
nunca mais na minha vida”.` },
      { id: 'C', type: 'text', value: `“Já refleti muito desde ontem e vi que o único meio de ter
vestido é vendendo o broche. Vou dormir ainda esta noite
com isto na cabeça e vou conversar com Nossa Senhora
tudo direitinho”.` },
      { id: 'D', type: 'text', value: `“Se eu não ouvir missa no domingo, como quando estou na
Boa Vista onde não há igreja e não posso ouvir no Bom
Sucesso, fico o dia todo com um prego na consciência me
aferroando”.` },
      { id: 'E', type: 'text', value: `“Este ano saiu à rua a procissão de Cinzas que há muitos
anos não havia. Dizem que não saía há muito tempo por
falta de santos, porque muitos já estavam quebrados”.` },
    ],
    correct: 'C',
    explanation: `Helena combina cálculo prático e iniciativa para obter o vestido, vendendo o broche, com a confiança religiosa na conversa com Nossa Senhora. C reúne, em um mesmo trecho, os dois repertórios culturais referidos pelo crítico.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 75,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Voltada para o encanto da vida livre do pequeno núcleo
aberto para o campo, a jovem Helena, familiar a todas as
classes sociais daquele âmbito, estava colocada num invejável
ponto de observação. (...)
Sem querer forçar um conflito que, a bem dizer, apenas
se esboça, podemos atribuir parte desta grande versatilidade
psicológica da protagonista aos ecos de uma formação
britânica, protestante, liberal, ressoando num ambiente de
corte ibérico e católico, mal saído do regime de trabalho
escravo. Colorindo a apaixonada esfera de independência da
juventude, reveste-se de acentuado sabor sociológico este caso
da menina ruiva que, embora inteiramente identificada com o
meio de gente morena que é o seu, o único que conhece e ama,
não vacila em o criticar com precisão e finura notáveis, se essa
lucidez não traduzisse a coexistência íntima de dois mundos
culturais divergentes, que se contemplam e se julgam no
interior de um eu tornado harmonioso pelo equilíbrio mesmo de
suas contradições.

Alexandre Eulálio, “Livro que nasceu clássico”.
In: Helena Morley, Minha vida de menina.

De acordo com Alexandre Eulálio, a protagonista do romance
Minha vida de menina`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `vivencia um conflito – uma ideia fortalecida por “a bem
dizer” (L. 5).` },
      { id: 'B', type: 'text', value: `apresenta certo vínculo com o protestantismo – uma ideia
sintetizada por “ecos de uma formação britânica” (L. 7 8).` },
      { id: 'C', type: 'text', value: `formou se num meio alheio ao trabalho escravo – um fato
referido por “num ambiente de corte ibérico e católico”
(L. 8 9).` },
      { id: 'D', type: 'text', value: `rejeita as influências do meio em que vive – uma
característica revelada por “precisão e finura notáveis”
(L. 14).` },
      { id: 'E', type: 'text', value: `tem a sua lucidez psicológica abalada pelas ambivalências
de sua educação – um traço reiterado por “equilíbrio
mesmo de suas contradições” (L. 17 18).` },
    ],
    correct: 'B',
    explanation: `O crítico menciona a formação britânica, protestante e liberal de Helena em contraste e convívio com o ambiente ibérico e católico. B recupera esse vínculo, sem afirmar rejeição total ao meio ou desequilíbrio psicológico.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 76,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `O rumor crescia, condensando-se; o zunzum de todos os
dias acentuava-se; já se não destacavam vozes dispersas, mas
um só ruído compacto que enchia todo o cortiço. Começavam a
fazer compras na venda; ensarilhavam-se* discussões e
rezingas**; ouviam se gargalhadas e pragas; já se não falava,
gritava se. Sentia se naquela fermentação sanguínea, naquela
gula viçosa de plantas rasteiras que mergulham os pés
vigorosos na lama preta e nutriente da vida, o prazer animal de
existir, a triunfante satisfação de respirar sobre a terra.
Da porta da venda que dava para o cortiço iam e vinham
como formigas; fazendo compras.
Duas janelas do Miranda abriram-se. Apareceu numa a
Isaura, que se dispunha a começar a limpeza da casa.
Nhá Dunga! gritou ela para baixo, a sacudir um pano
de mesa; se você tem cuscuz de milho hoje, bata na porta,
ouviu?
Aluísio Azevedo, O cortiço.
* ensarilhar se: emaranhar se.
** rezinga: resmungo.

Uma característica do Naturalismo presente no texto é:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `forte apelo aos sentidos.` },
      { id: 'B', type: 'text', value: `idealização do espaço.` },
      { id: 'C', type: 'text', value: `exaltação da natureza.` },
      { id: 'D', type: 'text', value: `realce de aspectos raciais.` },
      { id: 'E', type: 'text', value: `ênfase nas individualidades.` },
    ],
    correct: 'A',
    explanation: `Ruídos, calor vital, lama, respiração e imagens animais compõem uma descrição fortemente sensorial e corporal da coletividade. Esse apelo aos sentidos é típico da estética naturalista e está em A.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 77,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `O rumor crescia, condensando-se; o zunzum de todos os
dias acentuava-se; já se não destacavam vozes dispersas, mas
um só ruído compacto que enchia todo o cortiço. Começavam a
fazer compras na venda; ensarilhavam-se* discussões e
rezingas**; ouviam se gargalhadas e pragas; já se não falava,
gritava se. Sentia se naquela fermentação sanguínea, naquela
gula viçosa de plantas rasteiras que mergulham os pés
vigorosos na lama preta e nutriente da vida, o prazer animal de
existir, a triunfante satisfação de respirar sobre a terra.
Da porta da venda que dava para o cortiço iam e vinham
como formigas; fazendo compras.
Duas janelas do Miranda abriram-se. Apareceu numa a
Isaura, que se dispunha a começar a limpeza da casa.
Nhá Dunga! gritou ela para baixo, a sacudir um pano
de mesa; se você tem cuscuz de milho hoje, bata na porta,
ouviu?
Aluísio Azevedo, O cortiço.
* ensarilhar se: emaranhar se.
** rezinga: resmungo.

Constitui marca do registro informal da língua o trecho`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `“mas um só ruído compacto” (L. 2 3).` },
      { id: 'B', type: 'text', value: `“ouviam se gargalhadas” (L. 5).` },
      { id: 'C', type: 'text', value: `“o prazer animal de existir” (L. 8 9).` },
      { id: 'D', type: 'text', value: `“gritou ela para baixo” (L. 14).` },
      { id: 'E', type: 'text', value: `“bata na porta” (L. 15).` },
    ],
    correct: 'E',
    explanation: `Na norma formal, usa-se “bater à porta”; o emprego de “na porta” é comum no registro coloquial brasileiro. A fala direta da personagem em “bata na porta” marca a informalidade. Resposta E.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 78,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `(...) procurei adivinhar o que se passa na alma duma
cachorra. Será que há mesmo alma em cachorro? Não me
importo. O meu bicho morre desejando acordar num mundo
cheio de preás. Exatamente o que todos nós desejamos. A
diferença é que eu quero que eles apareçam antes do sono, e
padre Zé Leite pretende que eles nos venham em sonhos, mas
no fundo todos somos como a minha cachorra Baleia e
esperamos preás. (...)

Carta de Graciliano Ramos a sua esposa.

(...) Uma angústia apertou-lhe o pequeno coração.
Precisava vigiar as cabras: àquela hora cheiros de suçuarana
deviam andar pelas ribanceiras, rondar as moitas afastadas.
Felizmente os meninos dormiam na esteira, por baixo do caritó
onde sinha Vitória guardava o cachimbo.
(...)
Baleia queria dormir. Acordaria feliz, num mundo cheio
de preás. E lamberia as mãos de Fabiano, um Fabiano enorme.
As crianças se espojariam com ela, rolariam com ela num pátio
enorme, num chiqueiro enorme. O mundo ficaria todo cheio de
preás, gordos, enormes.

Graciliano Ramos, Vidas secas.

As declarações de Graciliano Ramos na Carta e o excerto do
romance permitem afirmar que a personagem Baleia, em Vidas
secas, representa`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `o conformismo dos sertanejos.` },
      { id: 'B', type: 'text', value: `os anseios comunitários de justiça social.` },
      { id: 'C', type: 'text', value: `os desejos incompatíveis com os de Fabiano.` },
      { id: 'D', type: 'text', value: `a crença em uma vida sobrenatural.` },
      { id: 'E', type: 'text', value: `o desdém por um mundo melhor.` },
    ],
    correct: 'B',
    explanation: `Graciliano aproxima os preás desejados por Baleia dos desejos de todos por uma vida melhor. A promessa de fartura, acolhimento e convivência expande o desejo animal a uma aspiração comunitária. B expressa essa dimensão social.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 79,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `(...) procurei adivinhar o que se passa na alma duma
cachorra. Será que há mesmo alma em cachorro? Não me
importo. O meu bicho morre desejando acordar num mundo
cheio de preás. Exatamente o que todos nós desejamos. A
diferença é que eu quero que eles apareçam antes do sono, e
padre Zé Leite pretende que eles nos venham em sonhos, mas
no fundo todos somos como a minha cachorra Baleia e
esperamos preás. (...)

Carta de Graciliano Ramos a sua esposa.

(...) Uma angústia apertou-lhe o pequeno coração.
Precisava vigiar as cabras: àquela hora cheiros de suçuarana
deviam andar pelas ribanceiras, rondar as moitas afastadas.
Felizmente os meninos dormiam na esteira, por baixo do caritó
onde sinha Vitória guardava o cachimbo.
(...)
Baleia queria dormir. Acordaria feliz, num mundo cheio
de preás. E lamberia as mãos de Fabiano, um Fabiano enorme.
As crianças se espojariam com ela, rolariam com ela num pátio
enorme, num chiqueiro enorme. O mundo ficaria todo cheio de
preás, gordos, enormes.

Graciliano Ramos, Vidas secas.

A comparação entre os fragmentos, respectivamente, da Carta
e de Vidas secas, permite afirmar que`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `“será que há mesmo” e “acordaria feliz” sugerem dúvida.` },
      { id: 'B', type: 'text', value: `“procurei adivinhar” e “precisava vigiar” significam
necessidade.` },
      { id: 'C', type: 'text', value: `“no fundo todos somos” e “andar pelas ribanceiras”
indicam lugar.` },
      { id: 'D', type: 'text', value: `“ padre Zé Leite pretende” e “Baleia queria dormir” indicam
intencionalidade.` },
      { id: 'E', type: 'text', value: `“todos nós desejamos” e “dormiam na esteira” indicam
possibilidade.` },
    ],
    correct: 'D',
    explanation: `“Pretende” e “queria” exprimem vontade ou intenção nos dois trechos. D estabelece a correspondência sem confundir necessidade, dúvida, lugar ou possibilidade com os sentidos efetivos das formas verbais.`,
    subject: ['por'],
    topics: ['Gramática', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 80,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Sarapalha

– Ô calorão, Primo!... E que dor de cabeça excomungada!
– É um instantinho e passa... É só ter paciência....
– É... passa... passa... passa... Passam umas mulheres
vestidas de cor de água, sem olhos na cara, para não terem de
olhar a gente... Só ela é que não passa, Primo Argemiro!... E eu
já estou cansado de procurar, no meio das outras... Não vem!...
Foi, rio abaixo, com o outro... Foram p’r’os infernos!...
– Não foi, Primo Ribeiro. Não foram pelo rio... Foi trem de
ferro que levou...
– Não foi no rio, eu sei... No rio ninguém não anda... Só a
maleita é quem sobe e desce, olhando seus mosquitinhos e
pondo neles a benção... Mas, na estória... Como é mesmo a
estória, Primo? Como é?...
– O senhor bem que sabe, Primo... Tem paciência, que não é
bom variar...
– Mas, a estória, Primo!... Como é?... Conta outra vez...
– O senhor já sabe as palavras todas de cabeça... “Foi o
moço bonito que apareceu, vestido com roupa de dia de
domingo e com a viola enfeitada de fitas... E chamou a moça
p’ra ir se fugir com ele”...
– Espera, Primo, elas estão passando... Vão umas atrás das
outras... Cada qual mais bonita... Mas eu não quero,
nenhuma!... Quero só ela... Luísa...
– Prima Luísa...
– Espera um pouco, deixa ver se eu vejo... Me ajuda, Primo!
Me ajuda a ver...
– Não é nada, Primo Ribeiro... Deixa disso!
– Não é mesmo não...
– Pois então?!
– Conta o resto da estória!...
– ...“Então, a moça, que não sabia que o moço bonito era o
capeta, ajuntou suas roupinhas melhores numa trouxa, e foi
com ele na canoa, descendo o rio...”

Guimarães Rosa, Sagarana.

A novela Sarapalha apresenta uma estória dentro de outra, por
meio da qual a personagem masculina da narrativa principal
(Primo Argemiro) alude a uma mulher da narrativa secundária
(a moça levada pelo capeta). O mesmo procedimento ocorre
em`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `Duelo, com Cassiano e Silivana.` },
      { id: 'B', type: 'text', value: `Minha gente, com Ramiro e a filha de Emílio.` },
      { id: 'C', type: 'text', value: `A volta do marido pródigo, com Lalino e Maria Rita.` },
      { id: 'D', type: 'text', value: `O burrinho pedrês, com Raymundão e a namorada de Silvino.` },
      { id: 'E', type: 'text', value: `A hora e vez de Augusto Matraga, com Ovídio e Dionóra.` },
    ],
    correct: 'D',
    explanation: `Em O burrinho pedrês, uma história contada por Raymundão introduz a namorada de Silvino, articulando narrativas como em Sarapalha. D identifica o mesmo procedimento de uma narrativa secundária referida na principal.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 81,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Sarapalha

– Ô calorão, Primo!... E que dor de cabeça excomungada!
– É um instantinho e passa... É só ter paciência....
– É... passa... passa... passa... Passam umas mulheres
vestidas de cor de água, sem olhos na cara, para não terem de
olhar a gente... Só ela é que não passa, Primo Argemiro!... E eu
já estou cansado de procurar, no meio das outras... Não vem!...
Foi, rio abaixo, com o outro... Foram p’r’os infernos!...
– Não foi, Primo Ribeiro. Não foram pelo rio... Foi trem de
ferro que levou...
– Não foi no rio, eu sei... No rio ninguém não anda... Só a
maleita é quem sobe e desce, olhando seus mosquitinhos e
pondo neles a benção... Mas, na estória... Como é mesmo a
estória, Primo? Como é?...
– O senhor bem que sabe, Primo... Tem paciência, que não é
bom variar...
– Mas, a estória, Primo!... Como é?... Conta outra vez...
– O senhor já sabe as palavras todas de cabeça... “Foi o
moço bonito que apareceu, vestido com roupa de dia de
domingo e com a viola enfeitada de fitas... E chamou a moça
p’ra ir se fugir com ele”...
– Espera, Primo, elas estão passando... Vão umas atrás das
outras... Cada qual mais bonita... Mas eu não quero,
nenhuma!... Quero só ela... Luísa...
– Prima Luísa...
– Espera um pouco, deixa ver se eu vejo... Me ajuda, Primo!
Me ajuda a ver...
– Não é nada, Primo Ribeiro... Deixa disso!
– Não é mesmo não...
– Pois então?!
– Conta o resto da estória!...
– ...“Então, a moça, que não sabia que o moço bonito era o
capeta, ajuntou suas roupinhas melhores numa trouxa, e foi
com ele na canoa, descendo o rio...”

Guimarães Rosa, Sagarana.

No texto de Sarapalha, constitui exemplo de personificação o
seguinte trecho:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `“No rio ninguém não anda” (L. 10).` },
      { id: 'B', type: 'text', value: `“só a maleita é quem sobe e desce” (L. 10 11).` },
      { id: 'C', type: 'text', value: `“O senhor já sabe as palavras todas de cabeça” (L. 17).` },
      { id: 'D', type: 'text', value: `“e com a viola enfeitada de fitas” (L. 19).` },
      { id: 'E', type: 'text', value: `“ajuntou suas roupinhas melhores numa trouxa” (L. 32).` },
    ],
    correct: 'B',
    explanation: `A maleita, nome da malária, é apresentada como alguém que sobe e desce e abençoa mosquitos. Atribuem-se ações humanas à doença, caracterizando personificação. O trecho correspondente é B.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 82,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Sarapalha

– Ô calorão, Primo!... E que dor de cabeça excomungada!
– É um instantinho e passa... É só ter paciência....
– É... passa... passa... passa... Passam umas mulheres
vestidas de cor de água, sem olhos na cara, para não terem de
olhar a gente... Só ela é que não passa, Primo Argemiro!... E eu
já estou cansado de procurar, no meio das outras... Não vem!...
Foi, rio abaixo, com o outro... Foram p’r’os infernos!...
– Não foi, Primo Ribeiro. Não foram pelo rio... Foi trem de
ferro que levou...
– Não foi no rio, eu sei... No rio ninguém não anda... Só a
maleita é quem sobe e desce, olhando seus mosquitinhos e
pondo neles a benção... Mas, na estória... Como é mesmo a
estória, Primo? Como é?...
– O senhor bem que sabe, Primo... Tem paciência, que não é
bom variar...
– Mas, a estória, Primo!... Como é?... Conta outra vez...
– O senhor já sabe as palavras todas de cabeça... “Foi o
moço bonito que apareceu, vestido com roupa de dia de
domingo e com a viola enfeitada de fitas... E chamou a moça
p’ra ir se fugir com ele”...
– Espera, Primo, elas estão passando... Vão umas atrás das
outras... Cada qual mais bonita... Mas eu não quero,
nenhuma!... Quero só ela... Luísa...
– Prima Luísa...
– Espera um pouco, deixa ver se eu vejo... Me ajuda, Primo!
Me ajuda a ver...
– Não é nada, Primo Ribeiro... Deixa disso!
– Não é mesmo não...
– Pois então?!
– Conta o resto da estória!...
– ...“Então, a moça, que não sabia que o moço bonito era o
capeta, ajuntou suas roupinhas melhores numa trouxa, e foi
com ele na canoa, descendo o rio...”

Guimarães Rosa, Sagarana.

Tendo como base o trecho “só a maleita é quem sobe e desce,
olhando seus mosquitinhos e pondo neles a benção...”, o termo
em destaque foi empregado ironicamente por aludir ao inseto`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `causador da malária.` },
      { id: 'B', type: 'text', value: `causador da febre amarela.` },
      { id: 'C', type: 'text', value: `transmissor da doença de Chagas.` },
      { id: 'D', type: 'text', value: `transmissor da malária.` },
      { id: 'E', type: 'text', value: `transmissor da febre amarela.` },
    ],
    correct: 'D',
    explanation: `Mosquitos do gênero Anopheles transmitem os protozoários causadores da malária. A ironia de “mosquitinhos” refere-se ao vetor da doença, não a seu agente etiológico. Portanto, D.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 83,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Os bens e o sangue

VIII

(...)
Ó filho pobre, e descorçoado*, e finito
ó inapto para as cavalhadas e os trabalhos brutais
com a faca, o formão, o couro... Ó tal como quiséramos
para tristeza nossa e consumação das eras,
para o fim de tudo que foi grande!
Ó desejado,
ó poeta de uma poesia que se furta e se expande
à maneira de um lago de pez** e resíduos letais...
És nosso fim natural e somos teu adubo,
tua explicação e tua mais singela virtude...
Pois carecia que um de nós nos recusasse
para melhor servir-nos. Face a face
te contemplamos, e é teu esse primeiro
e úmido beijo em nossa boca de barro e de sarro.

Carlos Drummond de Andrade, Claro enigma.

* “descorçoado”: assim como “desacorçoado”, é uma variante de uso popular
da palavra “desacoroçoado”, que significa “desanimado”.
** “pez”: piche.

Considere as seguintes afirmações:

I. Os familiares, que falam no poema, ironizam a condição
frágil do poeta.
II. O passado é uma maldição da qual o poeta, como revela o
título do poema, não consegue se desvencilhar.
III. O trecho “o fim de tudo que foi grande” remete à ruína das
oligarquias, das quais Drummond é tributário.
IV. A imagem de uma “poesia que se furta e se expande/à
maneira de um lago de pez e resíduos letais...” sintetiza o
pessimismo dos poemas de Claro enigma.

Estão corretas:`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I e II, apenas.` },
      { id: 'B', type: 'text', value: `I, II e III, apenas.` },
      { id: 'C', type: 'text', value: `II e IV, apenas.` },
      { id: 'D', type: 'text', value: `I, III e IV, apenas.` },
      { id: 'E', type: 'text', value: `I, II, III e IV.` },
    ],
    correct: 'E',
    explanation: `A voz dos antepassados ironiza a fragilidade do poeta e o liga à herança familiar; a ruína da grandeza oligárquica persiste como marca em sua poesia. As imagens de resíduos e finitude também expressam o pessimismo de Claro enigma. As quatro afirmações são compatíveis: E.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 84,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Os bens e o sangue

VIII

(...)
Ó filho pobre, e descorçoado*, e finito
ó inapto para as cavalhadas e os trabalhos brutais
com a faca, o formão, o couro... Ó tal como quiséramos
para tristeza nossa e consumação das eras,
para o fim de tudo que foi grande!
Ó desejado,
ó poeta de uma poesia que se furta e se expande
à maneira de um lago de pez** e resíduos letais...
És nosso fim natural e somos teu adubo,
tua explicação e tua mais singela virtude...
Pois carecia que um de nós nos recusasse
para melhor servir-nos. Face a face
te contemplamos, e é teu esse primeiro
e úmido beijo em nossa boca de barro e de sarro.

Carlos Drummond de Andrade, Claro enigma.

* “descorçoado”: assim como “desacorçoado”, é uma variante de uso popular
da palavra “desacoroçoado”, que significa “desanimado”.
** “pez”: piche.

Considere o tipo de relação estabelecida pela preposição
“para” nos seguintes trechos do poema:

I. “ó inapto para as cavalhadas e os trabalhos brutais”.
II. “Ó tal como quiséramos para tristeza nossa e consumação
das eras”.
III. “para o fim de tudo que foi grande”.
IV. “para melhor servir-nos”.

A preposição “para” introduz uma oração com ideia de
finalidade apenas em`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `I e II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `III e IV.` },
      { id: 'E', type: 'text', value: `IV.` },
    ],
    correct: 'E',
    explanation: `Em IV, “para melhor servir-nos” contém verbo no infinitivo e expressa a finalidade da recusa. Nos demais trechos, “para” introduz complementos ou expressões sem uma oração final. Apenas IV: E.`,
    subject: ['por'],
    topics: ['Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 85,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Examine esta propaganda.

www.combustivellegal.com.br

Por ser empregado tanto na linguagem formal quanto na
linguagem informal, o termo “legal” pode ser lido, no contexto
da propaganda, respectivamente, nos seguintes sentidos:`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q82_1.jpg","width":519,"height":666}],
    alternatives: [
      { id: 'A', type: 'text', value: `lícito e bom.` },
      { id: 'B', type: 'text', value: `aceito e regulado.` },
      { id: 'C', type: 'text', value: `requintado e excepcional.` },
      { id: 'D', type: 'text', value: `viável e interessante.` },
      { id: 'E', type: 'text', value: `jurídico e autorizado.` },
    ],
    correct: 'A',
    explanation: `Na linguagem formal, “legal” significa conforme à lei, lícito. Na informal, significa bom, agradável. A propaganda explora essa dupla leitura, reunida em A.`,
    subject: ['por'],
    topics: ['Gramática', 'Questões aleatórias'],
  },
  {
    id: 86,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `It’s a perilous time to be a statue. Not that it has ever
been a particularly secure occupation, exposed as statues are to
the elements, bird droppings and political winds.
Just ask Queen Victoria, whose rounded frame perches
atop hundreds of plinths across the Commonwealth, with an air
of solemn, severe solidity. But in 1963 in Quebec, members of a
separatist paramilitary group stuck dynamite under the dress of
her local statue. It exploded with a force so great that her head
was found 100 yards away.
Today, the head is on display in a museum, with her body
preserved in a room some miles away. The art historian Vincent
Giguère said that “the fact it’s damaged is what makes it so
important.”
There’s another reason to conserve the beheaded
Victoria. Statues of women, standing alone and demanding
attention in a public space, are extremely rare.
To be made a statue, a woman had to be a naked muse,
royalty or the mother of God. Or occasionally, an icon of war,
justice or virtue: Boadicea in her chariot in London, the Statue
of Liberty in New York.
Still, of 925 public statues in Britain, only 158 are women
standing on their own. Of those, 110 are allegorical or mythical,
and 29 are of Queen Victoria.

Julia Baird, The New York Times. September 4, 2017. Adaptado.

Conforme o texto, o grau de importância atribuído à estátua da
rainha Vitória, em Québec, reside no fato de a escultura`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q85_1.jpg","width":400,"height":266}],
    alternatives: [
      { id: 'A', type: 'text', value: `estar em processo de restauração.` },
      { id: 'B', type: 'text', value: `ter sobrevivido às intempéries ao longo dos anos.` },
      { id: 'C', type: 'text', value: `pertencer a um grupo de réplicas idênticas.` },
      { id: 'D', type: 'text', value: `ser a primeira a retratar uma autoridade feminina.` },
      { id: 'E', type: 'text', value: `ter sofrido danos em sua estrutura.` },
    ],
    correct: 'E',
    explanation: `O historiador afirma que o dano sofrido pela estátua é justamente o que a torna importante. A mutilação registra o conflito político e amplia seu valor documental. Resposta E.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 87,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `It’s a perilous time to be a statue. Not that it has ever
been a particularly secure occupation, exposed as statues are to
the elements, bird droppings and political winds.
Just ask Queen Victoria, whose rounded frame perches
atop hundreds of plinths across the Commonwealth, with an air
of solemn, severe solidity. But in 1963 in Quebec, members of a
separatist paramilitary group stuck dynamite under the dress of
her local statue. It exploded with a force so great that her head
was found 100 yards away.
Today, the head is on display in a museum, with her body
preserved in a room some miles away. The art historian Vincent
Giguère said that “the fact it’s damaged is what makes it so
important.”
There’s another reason to conserve the beheaded
Victoria. Statues of women, standing alone and demanding
attention in a public space, are extremely rare.
To be made a statue, a woman had to be a naked muse,
royalty or the mother of God. Or occasionally, an icon of war,
justice or virtue: Boadicea in her chariot in London, the Statue
of Liberty in New York.
Still, of 925 public statues in Britain, only 158 are women
standing on their own. Of those, 110 are allegorical or mythical,
and 29 are of Queen Victoria.

Julia Baird, The New York Times. September 4, 2017. Adaptado.

No texto, a figura da rainha Vitória é associada ao conceito de`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q85_1.jpg","width":400,"height":266}],
    alternatives: [
      { id: 'A', type: 'text', value: `firmeza.` },
      { id: 'B', type: 'text', value: `eloquência.` },
      { id: 'C', type: 'text', value: `longevidade.` },
      { id: 'D', type: 'text', value: `beleza.` },
      { id: 'E', type: 'text', value: `maternidade.` },
    ],
    correct: 'A',
    explanation: `“Solemn, severe solidity” associa a rainha à solenidade e à solidez. Entre as alternativas, o conceito correspondente é firmeza, A, não maternidade ou beleza.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Vocabulário', 'Questões aleatórias'],
  },
  {
    id: 88,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `It’s a perilous time to be a statue. Not that it has ever
been a particularly secure occupation, exposed as statues are to
the elements, bird droppings and political winds.
Just ask Queen Victoria, whose rounded frame perches
atop hundreds of plinths across the Commonwealth, with an air
of solemn, severe solidity. But in 1963 in Quebec, members of a
separatist paramilitary group stuck dynamite under the dress of
her local statue. It exploded with a force so great that her head
was found 100 yards away.
Today, the head is on display in a museum, with her body
preserved in a room some miles away. The art historian Vincent
Giguère said that “the fact it’s damaged is what makes it so
important.”
There’s another reason to conserve the beheaded
Victoria. Statues of women, standing alone and demanding
attention in a public space, are extremely rare.
To be made a statue, a woman had to be a naked muse,
royalty or the mother of God. Or occasionally, an icon of war,
justice or virtue: Boadicea in her chariot in London, the Statue
of Liberty in New York.
Still, of 925 public statues in Britain, only 158 are women
standing on their own. Of those, 110 are allegorical or mythical,
and 29 are of Queen Victoria.

Julia Baird, The New York Times. September 4, 2017. Adaptado.

No texto, a referência ao número de estátuas expostas em
espaços públicos na Grã Bretanha indica`,
    images: [{"src":"/fuvest/2018/images/fuvest_2018_q85_1.jpg","width":400,"height":266}],
    alternatives: [
      { id: 'A', type: 'text', value: `ênfase em personalidades alegóricas.` },
      { id: 'B', type: 'text', value: `escassez de monumentos do gênero feminino.` },
      { id: 'C', type: 'text', value: `desapreço por esculturas de corpo inteiro.` },
      { id: 'D', type: 'text', value: `falta de espaço em museus para peças de grande porte.` },
      { id: 'E', type: 'text', value: `preferência por figuras de destaque em batalhas.` },
    ],
    correct: 'B',
    explanation: `Os dados mostram que apenas pequena parcela das estátuas representa mulheres isoladas, e muitas delas são alegorias ou repetem a rainha Vitória. A enumeração evidencia escassez de monumentos femininos: B.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 89,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Algorithms are everywhere. They play the stockmarket,
decide whether you can have a mortgage and may one day
drive your car for you. They search the internet when
commanded, stick carefully chosen advertisements into the
sites you visit and decide what prices to show you in online
shops. (…) But what exactly are algorithms, and what makes
them so powerful?
An algorithm is, essentially, a brainless way of doing
clever things. It is a set of precise steps that need no great
mental effort to follow but which, if obeyed exactly and
mechanically, will lead to some desirable outcome. Long
division and column addition are examples that everyone is
familiar with — if you follow the procedure, you are guaranteed
to get the right answer. So is the strategy, rediscovered
thousands of times every year by schoolchildren bored with
learning mathematical algorithms, for playing a perfect game
of noughts and crosses. The brainlessness is key: each step
should be as simple and as free from ambiguity as possible.
Cooking recipes and driving directions are algorithms of a sort.
But instructions like “stew the meat until tender” or “it’s a few
miles down the road” are too vague to follow without at least
some interpretation.
(…)
The Economist, August 30, 2017.

No texto, um exemplo associado ao fato de algoritmos estarem
por toda parte é`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `o cartão de crédito.` },
      { id: 'B', type: 'text', value: `o livre mercado.` },
      { id: 'C', type: 'text', value: `a dieta.` },
      { id: 'D', type: 'text', value: `o jogo de xadrez.` },
      { id: 'E', type: 'text', value: `o comércio eletrônico.` },
    ],
    correct: 'E',
    explanation: `O texto menciona algoritmos que escolhem anúncios e preços apresentados em lojas virtuais. Esse é um exemplo de comércio eletrônico, E. O jogo citado é o da velha, não xadrez.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 90,
    exam: 'fuvest',
    year: 2018,
    phase: 1,
    text: `Algorithms are everywhere. They play the stockmarket,
decide whether you can have a mortgage and may one day
drive your car for you. They search the internet when
commanded, stick carefully chosen advertisements into the
sites you visit and decide what prices to show you in online
shops. (…) But what exactly are algorithms, and what makes
them so powerful?
An algorithm is, essentially, a brainless way of doing
clever things. It is a set of precise steps that need no great
mental effort to follow but which, if obeyed exactly and
mechanically, will lead to some desirable outcome. Long
division and column addition are examples that everyone is
familiar with — if you follow the procedure, you are guaranteed
to get the right answer. So is the strategy, rediscovered
thousands of times every year by schoolchildren bored with
learning mathematical algorithms, for playing a perfect game
of noughts and crosses. The brainlessness is key: each step
should be as simple and as free from ambiguity as possible.
Cooking recipes and driving directions are algorithms of a sort.
But instructions like “stew the meat until tender” or “it’s a few
miles down the road” are too vague to follow without at least
some interpretation.
(…)
The Economist, August 30, 2017.

Segundo o texto, a execução de um algoritmo consiste em um
processo que`,
    images: [],
    alternatives: [
      { id: 'A', type: 'text', value: `prevê a memorização de tabelas e fórmulas.` },
      { id: 'B', type: 'text', value: `envolve mecanismos de seleção e detecção de erros.` },
      { id: 'C', type: 'text', value: `se apoia em um número infinito de etapas.` },
      { id: 'D', type: 'text', value: `é incompatível com análises subjetivas e imprecisas.` },
      { id: 'E', type: 'text', value: `alterna níveis altos e baixos de esforço intelectual.` },
    ],
    correct: 'D',
    explanation: `O algoritmo exige etapas precisas e sem ambiguidades, executáveis mecanicamente. Instruções vagas que dependem de interpretação não satisfazem esse requisito. D é correta; não se exige número infinito de etapas.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
];

export default fuvest_2018_f1;
