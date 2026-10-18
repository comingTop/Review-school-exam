import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2017_D2: QuizQuestion[] = [
  {
    id: 91,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A toxicidade de algumas substâncias é normalmente 
representada por um índice conhecido como DL 50 (dose 
letal mediana). Ele representa a dosagem aplicada a 
uma população de seres vivos que mata 50% desses 
indivíduos e é normalmente medido utilizando-se ratos 
como cobaias. Esse índice é muito importante para 
os seres humanos, pois ao se extrapolar os dados 
obtidos com o uso de cobaias, pode-se determinar o 
nível tolerável de contaminação de alimentos, para que 
possam ser consumidos de forma segura pelas pessoas. 
O quadro apresenta três pesticidas e suas toxicidades. 
A unidade mg/kg indica a massa da substância ingerida 
pela massa da cobaia. 
 
Sessenta ratos, com massa de 200 g cada, foram 
divididos em três grupos de vinte. Três amostras de ração, 
contaminadas, cada uma delas com um dos pesticidas 
indicados no quadro, na concentração de 3 mg por 
grama de ração, foram administradas para cada grupo de 
cobaias. Cada rato consumiu 100 g de ração. 
Qual(ais) grupo(s) terá(ão) uma mortalidade mínima de 
10 ratos?`,
    images: ['/enem/2017/images/enem_2017_d2_q91.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `O grupo que se contaminou somente com atrazina.` },
      { id: 'B', type: 'text', value: `O grupo que se contaminou somente com diazinon.` },
      { id: 'C', type: 'text', value: `Os grupos que se contaminaram com atrazina e 
malation.` },
      { id: 'D', type: 'text', value: `Os grupos que se contaminaram com diazinon e 
malation.` },
      { id: 'E', type: 'text', value: `Nenhum dos grupos contaminados com atrazina, 
diazinon e malation.` },
    ],
    correct: 'D',
    explanation: `Cada rato, de 200 g, consumiu 100 g de ração contaminada na concentração de 3 mg/g, ingerindo 3 × 100 = 300 mg do pesticida. A dose por massa corporal é 300 mg ÷ 0,200 kg = 1 500 mg/kg. Um pesticida provoca a morte de pelo menos 50% do grupo (ou seja, 10 dos 20 ratos) quando a dose ingerida atinge ou supera sua DL₅₀. Como no quadro a DL₅₀ é 70 mg/kg para o diazinon, 1 000 mg/kg para o malation e 3 100 mg/kg para a atrazina, a dose de 1 500 mg/kg supera a DL₅₀ do diazinon e do malation, mas não a da atrazina. Portanto, terão mortalidade mínima de 10 ratos os grupos contaminados com diazinon e malation (alternativa D).`,
    subject: ['qui'],
    topics: ['Química Ambiental', 'Questões aleatórias'],
  },
  {
    id: 92,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Os medicamentos são rotineiramente utilizados pelo 
ser humano com o intuito de diminuir ou, por muitas vezes, 
curar possíveis transtornos de saúde. Os antibióticos são 
grupos de fármacos inseridos no tratamento de doenças 
causadas por bactérias. 
Na terapêutica das doenças mencionadas, alguns desses 
fármacos atuam`,
    alternatives: [
      { id: 'A', type: 'text', value: `ativando o sistema imunológico do hospedeiro.` },
      { id: 'B', type: 'text', value: `interferindo na cascata bioquímica da inflamação.` },
      { id: 'C', type: 'text', value: `removendo as toxinas sintetizadas pelas bactérias.` },
      { id: 'D', type: 'text', value: `combatendo as células hospedeiras das bactérias.` },
      { id: 'E', type: 'text', value: `danificando estruturas específicas da célula bacteriana.` },
    ],
    correct: 'E',
    explanation: `Os antibióticos combatem doenças bacterianas atuando de forma seletiva sobre estruturas presentes nas bactérias, mas ausentes nas células humanas, como a parede celular, os ribossomos procarióticos e as enzimas de síntese do material genético bacteriano. Ao danificar ou inibir essas estruturas específicas, o fármaco impede o crescimento e a multiplicação da bactéria sem lesar as células do hospedeiro. Esse princípio de toxicidade seletiva é o que caracteriza a ação dos antibióticos. Portanto, esses fármacos atuam danificando estruturas específicas da célula bacteriana (alternativa E).`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 93,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Dispositivos eletrônicos que utilizam materiais de 
baixo custo, como polímeros semicondutores, têm sido 
desenvolvidos para monitorar a concentração de amônia 
(gás tóxico e incolor) em granjas avícolas. A polianilina 
é um polímero semicondutor que tem o valor de sua 
resistência elétrica nominal quadruplicado quando exposta 
a altas concentrações de amônia. Na ausência de amônia, 
a polianilina se comporta como um resistor ôhmico e a sua 
resposta elétrica é mostrada no gráfico. 
6,0 
5,0 
Corrente (10 -6 A) 
4,0 
3,0 
2,0 
1,0 
1,0 
0,5 
1,5 
2,0 
2,5 
3,0 
Diferença de potencial (V) 
O valor da resistência elétrica da polianilina na presença 
de altas concentrações de amônia, em ohm, é igual a`,
    images: ['/enem/2017/images/enem_2017_d2_q93.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0,5 × 10⁰ .` },
      { id: 'B', type: 'text', value: `2,0 × 10⁰ .` },
      { id: 'C', type: 'text', value: `2,5 × 10⁵ .` },
      { id: 'D', type: 'text', value: `5,0 × 10⁵ .` },
      { id: 'E', type: 'text', value: `2,0 × 10⁶ .` },
    ],
    correct: 'E',
    explanation: `Na ausência de amônia a polianilina é um resistor ôhmico, de modo que sua resistência nominal é obtida pela razão R = U/I lida no gráfico. Tomando o ponto em que U = 2,5 V e I = 5,0 × 10⁻⁶ A, tem-se R = 2,5 ÷ (5,0 × 10⁻⁶) = 5,0 × 10⁵ Ω. O enunciado informa que, em altas concentrações de amônia, esse valor é quadruplicado: R' = 4 × 5,0 × 10⁵ = 2,0 × 10⁶ Ω. Portanto, a resistência na presença de amônia é 2,0 × 10⁶ Ω (alternativa E).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 94,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Pesquisadores conseguiram estimular a absorção de 
energia luminosa em plantas graças ao uso de nanotubos 
de carbono. Para isso, nanotubos de carbono “se 
inseriram” no interior dos cloroplastos por uma montagem 
espontânea, através das membranas dos cloroplastos. 
Pigmentos da planta absorvem as radiações luminosas, 
os elétrons são “excitados” e se deslocam no interior de 
membranas dos cloroplastos, e a planta utiliza em seguida 
essa energia elétrica para a fabricação de açúcares. 
Os nanotubos de carbono podem absorver comprimentos 
de onda habitualmente não utilizados pelos cloroplastos, 
e os pesquisadores tiveram a ideia de utilizá-los como 
“antenas”, estimulando a conversão de energia solar pelos 
cloroplastos, com o aumento do transporte de elétrons. 
Nanotubos de carbono incrementam a fotossíntese de plantas . 
 Disponível em: http://lqes.iqm.unicamp.br. Acesso em: 14 nov. 2014 (adaptado). 
O aumento da eficiência fotossintética ocorreu pelo fato 
de os nanotubos de carbono promoverem diretamente a`,
    alternatives: [
      { id: 'A', type: 'text', value: `utilização de água.` },
      { id: 'B', type: 'text', value: `absorção de fótons.` },
      { id: 'C', type: 'text', value: `formação de gás oxigênio.` },
      { id: 'D', type: 'text', value: `proliferação dos cloroplastos.` },
      { id: 'E', type: 'text', value: `captação de dióxido de carbono.` },
    ],
    correct: 'B',
    explanation: `Na fotossíntese, os pigmentos dos cloroplastos absorvem a luz e excitam elétrons, cuja energia é usada para produzir açúcares. Os nanotubos de carbono conseguem absorver comprimentos de onda que os cloroplastos normalmente não aproveitam, funcionando como antenas que captam mais radiação luminosa. Assim, eles ampliam diretamente a quantidade de luz capturada, ou seja, a absorção de fótons, aumentando o transporte de elétrons e a eficiência fotossintética. Portanto, o ganho de eficiência decorre do aumento da absorção de fótons (alternativa B).`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
  },
  {
    id: 95,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A eletrólise é um processo não espontâneo de grande importância para a industria química. Uma de suas 
aplicações é a obtenção do gás cloro e do hidróxido de sódio, a partir de uma solução aquosa de cloreto de sódio. 
Nesse procedimento, utiliza-se uma célula eletroquímica, como ilustrado. 
e 
e 
+ 
e 
Bateria 
Produto secundário 
Cl₂ (g) 
Solução aquosa 
de NaCl 
+ 
Ânodo de carbono 
Diafragma de amianto 
Célula eletroquímica 
SHREVE, R. N.; BRINK Jr., J. A. Industrias de processos químicos . Rio de Janeiro: Guanabara Koogan, 1997 (adaptado). 
No processo eletrolítico ilustrado, o produto secundário obtido é o`,
    images: ['/enem/2017/images/enem_2017_d2_q95.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `vapor de água.` },
      { id: 'B', type: 'text', value: `oxigênio molecular.` },
      { id: 'C', type: 'text', value: `hipoclorito de sódio.` },
      { id: 'D', type: 'text', value: `hidrogênio molecular.` },
      { id: 'E', type: 'text', value: `cloreto de hidrogênio.` },
    ],
    correct: 'D',
    explanation: `Na eletrólise da solução aquosa de NaCl, no ânodo ocorre a oxidação do cloreto, liberando gás cloro (Cl₂). No cátodo, em vez do sódio, é a água que se reduz com maior facilidade, gerando gás hidrogênio (H₂) e íons OH⁻, que com o Na⁺ formam o hidróxido de sódio. Como o Cl₂ e o NaOH são os produtos principais citados, o produto secundário formado é o gás hidrogênio molecular. Portanto, a resposta é o hidrogênio molecular (alternativa D).`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
  },
  {
    id: 96,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Uma grande virada na moderna história da agricultura ocorreu depois da Segunda Guerra Mundial. Após a guerra, 
os governos haviam se deparado com um enorme excedente de nitrato de amônio, ingrediente usado na fabricação 
de explosivos. A partir daí as fábricas de munição foram adaptadas para começar a produzir fertilizantes tendo como 
componente principal os nitratos. 
SOUZA, F. A. Agricultura natural/orgânica como instrumento de fixação biológica e manutenção do nitrogênio no solo : um modelo sustentável de MDL. 
Disponível em: www.planetaorganico.com.br. Acesso em: 17 jul. 2015 (adaptado). 
No ciclo natural do nitrogênio, o equivalente ao principal componente desses fertilizantes industriais é produzido na 
etapa de`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `nitratação.` },
      { id: 'B', type: 'text', value: `nitrosação.` },
      { id: 'C', type: 'text', value: `amonificação.` },
      { id: 'D', type: 'text', value: `desnitrificação.` },
      { id: 'E', type: 'text', value: `fixação biológica do N 2 .` },
    ],
    correct: 'A',
    explanation: `O componente principal dos fertilizantes descritos é o nitrato (NO₃⁻). No ciclo biogeoquímico do nitrogênio, o nitrato é produzido na etapa de nitratação, em que bactérias nitrificantes oxidam o nitrito (NO₂⁻) a nitrato (NO₃⁻). Essa é a fase equivalente, na natureza, à obtenção do nitrato empregado nos fertilizantes industriais. Portanto, a etapa correspondente é a nitratação (alternativa A).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 97,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Um fato corriqueiro ao se cozinhar arroz é o 
derramamento de parte da água de cozimento sobre a 
chama azul do fogo, mudando-a para uma chama amarela. 
Essa mudança de cor pode suscitar interpretações 
diversas, relacionadas às substâncias presentes na água 
de cozimento. Além do sal de cozinha (NaCl), nela se 
encontram carboidratos, proteínas e sais minerais. 
Cientificamente, sabe-se que essa mudança de cor da 
chama ocorre pela`,
    alternatives: [
      { id: 'A', type: 'text', value: `reação do gás de cozinha com o sal, volatilizando 
gás cloro.` },
      { id: 'B', type: 'text', value: `emissão de fótons pelo sódio, excitado por causa da 
chama.` },
      { id: 'C', type: 'text', value: `produção de derivado amarelo, pela reação com o 
carboidrato.` },
      { id: 'D', type: 'text', value: `reação do gás de cozinha com a água, formando gás 
hidrogênio.` },
      { id: 'E', type: 'text', value: `excitação das moléculas de proteínas, com formação 
de luz amarela.` },
    ],
    correct: 'B',
    explanation: `A cor amarela surge por causa do sódio presente no sal de cozinha (NaCl) dissolvido na água de cozimento. O calor da chama excita os elétrons dos átomos de sódio para níveis de maior energia; ao retornarem ao estado fundamental, esses elétrons emitem fótons de luz na região do amarelo, fenômeno que é a base do teste de chama. Portanto, a mudança de cor ocorre pela emissão de fótons pelo sódio, excitado pela chama (alternativa B).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 98,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A classificação biológica proposta por Whittaker 
permite distinguir cinco grandes linhas evolutivas 
utilizando, como critérios de classificação, a organização 
celular e o modo de nutrição. Woese e seus colaboradores, 
com base na comparação das sequências que codificam 
o RNA ribossômico dos seres vivos, estabeleceram 
relações de ancestralidade entre os grupos e concluíram 
que os procariontes do reino Monera não eram um grupo 
coeso do ponto de vista evolutivo. 
 
A diferença básica nas classificações citadas é que a 
mais recente se baseia fundamentalmente em`,
    images: ['/enem/2017/images/enem_2017_d2_q98.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `tipos de células.` },
      { id: 'B', type: 'text', value: `aspectos ecológicos.` },
      { id: 'C', type: 'text', value: `relações filogenéticas.` },
      { id: 'D', type: 'text', value: `propriedades fisiológicas.` },
      { id: 'E', type: 'text', value: `características morfológicas.` },
    ],
    correct: 'C',
    explanation: `A classificação de Whittaker baseava-se em critérios como organização celular e modo de nutrição. Já Woese e colaboradores compararam as sequências que codificam o RNA ribossômico, estabelecendo relações de ancestralidade entre os grupos. Assim, a classificação mais recente fundamenta-se nas relações evolutivas, isto é, nas relações filogenéticas entre os seres vivos. Portanto, a resposta é relações filogenéticas (alternativa C).`,
    subject: ['bio'],
    topics: ['Evolução', 'Questões aleatórias'],
  },
  {
    id: 99,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Em uma colisão frontal entre dois automóveis, a 
força que o cinto de segurança exerce sobre o tórax e 
abdômen do motorista pode causar lesões graves nos 
órgãos internos. Pensando na segurança do seu produto, 
um fabricante de automóveis realizou testes em cinco 
modelos diferentes de cinto. Os testes simularam uma 
colisão de 0,30 segundo de duração, e os bonecos que 
representavam os ocupantes foram equipados com 
acelerômetros. Esse equipamento registra o módulo 
da desaceleração do boneco em função do tempo. 
Os parâmetros como massa dos bonecos, dimensões dos 
cintos e velocidade imediatamente antes e após o impacto 
foram os mesmos para todos os testes. O resultado final 
obtido está no gráfico de aceleração por tempo. 
200 
Cinto 1 
Cinto 2 
Cinto 3 
Cinto 4 
Cinto 5 
Aceleração (m/s² ) 
160 
120 
80 
40 
0 
0,00 
0,05 
0,10 
0,15 
0,20 
0,25 
0,30 
Tempo (s) 
Qual modelo de cinto oferece menor risco de lesão interna 
ao motorista?`,
    images: ['/enem/2017/images/enem_2017_d2_q99.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `5` },
    ],
    correct: 'B',
    explanation: `Como a massa, a velocidade antes e depois do impacto e a duração da colisão (0,30 s) são iguais em todos os testes, a variação da quantidade de movimento e, portanto, o impulso são os mesmos para os cinco cintos. A força média é tanto menor quanto menor for o pico de aceleração registrado, e menor força sobre o tórax significa menor risco de lesão interna. No gráfico, o cinto 2 é o que apresenta a menor aceleração máxima ao longo do tempo. Portanto, o modelo de menor risco é o cinto 2 (alternativa B).`,
    subject: ['fis'],
    topics: ['Impulso e quantidade de movimento', 'Questões aleatórias'],
  },
  {
    id: 100,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Pesquisadores criaram um tipo de plaqueta artificial, 
feita com um polímero gelatinoso coberto de anticorpos, 
que promete agilizar o processo de coagulação quando 
injetada no corpo. Se houver sangramento, esses 
anticorpos fazem com que a plaqueta mude sua forma 
e se transforme em uma espécie de rede que gruda nas 
lesões dos vasos sanguíneos e da pele. 
MOUTINHO, S. Coagulação acelerada . Disponível em: http://cienciahoje.uol.com.br. 
Acesso em: 19 fev. 2013 (adaptado). 
Qual a doença cujos pacientes teriam melhora de seu 
estado de saúde com o uso desse material?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Filariose.` },
      { id: 'B', type: 'text', value: `Hemofilia.` },
      { id: 'C', type: 'text', value: `Aterosclerose.` },
      { id: 'D', type: 'text', value: `Doença de Chagas.` },
      { id: 'E', type: 'text', value: `Síndrome da imunodeficiência adquirida.` },
    ],
    correct: 'B',
    explanation: `As plaquetas artificiais aceleram a coagulação do sangue, formando uma rede que adere às lesões dos vasos. Logo, beneficiam-se dessa tecnologia os pacientes que têm dificuldade de coagular o sangue. A hemofilia é justamente a doença caracterizada por deficiência nos fatores de coagulação, provocando sangramentos prolongados. Portanto, a doença cujos pacientes teriam melhora é a hemofilia (alternativa B).`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 101,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A figura mostra como é a emissão de radiação 
eletromagnética para cinco tipos de lâmpada: haleto 
metálico, tungstênio, mercúrio, xênon e LED (diodo 
emissor de luz). As áreas marcadas em cinza são 
proporcionais à intensidade da energia liberada pela 
lâmpada. As linhas pontilhadas mostram a sensibilidade 
do olho humano aos diferentes comprimentos de onda. 
UV e IV são as regiões do ultravioleta e do infravermelho, 
respectivamente. 
Um arquiteto deseja iluminar uma sala usando uma 
lâmpada que produza boa iluminação, mas que não 
aqueça o ambiente. 
Haleto metálico 
Tungstênio 
Intensidade emitida 
Mercúrio 
Xênon 
LED 
300 
200 
900 
800 
700 
600 
500 
400 
UV 
IV 
Visível 
Comprimento de onda (nm) 
  
Disponível em: http://zeiss-campus.magnet.fsu.edu. Acesso em: 8 maio 2017 (adaptado). 
Qual tipo de lâmpada melhor atende ao desejo do arquiteto?`,
    images: ['/enem/2017/images/enem_2017_d2_q101.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Haleto metálico.` },
      { id: 'B', type: 'text', value: `Tungstênio.` },
      { id: 'C', type: 'text', value: `Mercúrio.` },
      { id: 'D', type: 'text', value: `Xênon.` },
      { id: 'E', type: 'text', value: `LED.` },
    ],
    correct: 'E',
    explanation: `O arquiteto quer boa iluminação sem aquecer o ambiente, ou seja, muita emissão na faixa visível e pouca emissão no infravermelho (IV), que é a radiação associada ao aquecimento. No gráfico, a lâmpada de LED concentra sua emissão na região visível, próxima à sensibilidade do olho, com emissão desprezível no infravermelho. Portanto, a lâmpada que melhor atende ao desejo é a de LED (alternativa E).`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 102,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Partículas microscópicas existentes na atmosfera 
funcionam como núcleos de condensação de vapor de 
água que, sob condições adequadas de temperatura 
e pressão, propiciam a formação das nuvens e 
consequentemente das chuvas. No ar atmosférico, tais 
partículas são formadas pela reação de ácidos (H X ) 
com a base NH₃ , de forma natural ou antropogênica, 
dando origem a sais de amônio (NH₄ X ), de acordo com a 
equação química genérica: 
H X (g) + NH₃ (g) → NH₄ X (s) 
FÉLIX, E. P.; CARDOSO, A. A. Fatores ambientais que afetam a precipitação úmida. 
Química Nova na Escola , n. 21, maio 2005 (adaptado). 
A fixação de moléculas de vapor de água pelos núcleos 
de condensação ocorre por`,
    alternatives: [
      { id: 'A', type: 'text', value: `ligações iônicas.` },
      { id: 'B', type: 'text', value: `interações dipolo-dipolo.` },
      { id: 'C', type: 'text', value: `interações dipolo-dipolo induzido.` },
      { id: 'D', type: 'text', value: `interações íon-dipolo.` },
      { id: 'E', type: 'text', value: `ligações covalentes.` },
    ],
    correct: 'D',
    explanation: `Os núcleos de condensação são sais de amônio (NH₄X), compostos iônicos que apresentam íons. A água é uma molécula polar, com dipolo permanente. A fixação do vapor de água a esses núcleos ocorre, então, pela atração entre os íons do sal e os dipolos das moléculas de água, isto é, por interações íon-dipolo. Portanto, a resposta é interações íon-dipolo (alternativa D).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 103,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Em uma linha de transmissão de informações por 
fibra óptica, quando um sinal diminui sua intensidade para 
valores inferiores a 10 dB, este precisa ser retransmitido. 
No entanto, intensidades superiores a 100 dB não podem 
ser transmitidas adequadamente. A figura apresenta 
como se dá a perda de sinal (perda óptica) para diferentes 
comprimentos de onda para certo tipo de fibra óptica. 
6 
Perda óptica (dB/km) 
5 
4 
3 
2 
1 
0,8 
0,9 
1,0 
1,1 
1,2 
1,3 
1,4 
1,5 
1,6 
1,7 
1,8 
Comprimento de onda (µm) 
Atenuação e limitações das fibras ópticas . Disponível em: www.gta.ufrj.br. 
Acesso em: 25 maio 2017 (adaptado). 
Qual é a máxima distância, em km, que um sinal pode ser 
enviado nessa fibra sem ser necessária uma retransmissão?`,
    images: ['/enem/2017/images/enem_2017_d2_q103.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `6` },
      { id: 'B', type: 'text', value: `18` },
      { id: 'C', type: 'text', value: `60` },
      { id: 'D', type: 'text', value: `90` },
      { id: 'E', type: 'text', value: `100` },
    ],
    correct: 'D',
    explanation: `O sinal pode ser transmitido enquanto sua intensidade permanece entre 10 dB e 100 dB, dispondo, portanto, de uma margem de perda de 100 − 10 = 90 dB antes de precisar ser retransmitido. A maior distância é obtida no comprimento de onda de menor atenuação, que no gráfico corresponde a cerca de 1 dB/km. Assim, a distância máxima é 90 dB ÷ 1 dB/km = 90 km. Portanto, a resposta é 90 km (alternativa D).`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 104,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A técnica do carbono-14 permite a datação de fósseis pela medição dos valores de emissão beta desse isótopo 
presente no fóssil. Para um ser em vida, o máximo são 15 emissões beta/(min g). Após a morte, a quantidade de 14 C  
se reduz pela metade a cada 5 730 anos. 
A prova do carbono 14 . Disponível em: http://noticias.terra.com.br. Acesso em: 9 nov. 2013 (adaptado). 
Considere que um fragmento fóssil de massa igual a 30 g foi encontrado em um sítio arqueológico, e a medição de 
radiação apresentou 6 750 emissões beta por hora. A idade desse fóssil, em anos, é`,
    alternatives: [
      { id: 'A', type: 'text', value: `450.` },
      { id: 'B', type: 'text', value: `1 433.` },
      { id: 'C', type: 'text', value: `11 460.` },
      { id: 'D', type: 'text', value: `17 190.` },
      { id: 'E', type: 'text', value: `27 000.` },
    ],
    correct: 'C',
    explanation: `A atividade medida foi de 6 750 emissões β por hora, equivalente a 6 750 ÷ 60 = 112,5 emissões por minuto para os 30 g; por grama, isso dá 112,5 ÷ 30 = 3,75 emissões/(min·g). Para um ser vivo o valor é 15 emissões/(min·g), de modo que a razão é 3,75 ÷ 15 = 1/4 = (1/2)², correspondendo a duas meias-vidas decorridas. Como cada meia-vida é 5 730 anos, a idade é 2 × 5 730 = 11 460 anos. Portanto, a resposta é 11 460 anos (alternativa C).`,
    subject: ['fis'],
    topics: ['Física moderna', 'Questões aleatórias'],
  },
  {
    id: 105,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A figura mostra o funcionamento de uma estacao hibrida de geração de eletricidade movida a energia eólica e 
biogás. Essa estação possibilita que a energia gerada no parque eólico seja armazenada na forma de gas hidrogênio, 
usado no fornecimento de energia para a rede elétrica comum e para abastecer células a combustível. 
Rede de distribuição 
elétrica 
Turbinas 
eólicas 
Produção de 
hidrogênio 
Eletricidade 
Eletricidade 
Planta mista 
de geração 
de energia 
Eletricidade 
Mistura 
Válvula para 
mistura 
Calor 
Biogás 
Destino da 
 energia térmica 
Armazenamento 
de biogás 
Mesmo com ausência de ventos por curtos períodos, essa estacao continua abastecendo a cidade onde esta 
instalada, pois o(a)`,
    images: ['/enem/2017/images/enem_2017_d2_q105.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `planta mista de geração de energia realiza eletrolise para enviar energia a rede de distribuição elétrica.` },
      { id: 'B', type: 'text', value: `hidrogênio produzido e armazenado é utilizado na combustão com o biogás para gerar calor e eletricidade.` },
      { id: 'C', type: 'text', value: `conjunto de turbinas continua girando com a mesma velocidade, por inercia, mantendo a eficiência anterior.` },
      { id: 'D', type: 'text', value: `combustão da mistura biogás-hidrogênio gera diretamente energia elétrica adicional para a manutenção da estacao.` },
      { id: 'E', type: 'text', value: `planta mista de geração de energia é capaz de utilizar todo o calor fornecido na combustão para a geração de eletricidade.` },
    ],
    correct: 'B',
    explanation: `A estação armazena na forma de gás hidrogênio parte da energia gerada pelo parque eólico. Quando os ventos cessam por curtos períodos, esse hidrogênio estocado é queimado juntamente com o biogás, gerando calor e eletricidade para continuar abastecendo a cidade. É esse aproveitamento do combustível armazenado que garante o fornecimento na ausência de vento. Portanto, a estação continua a abastecer porque o hidrogênio produzido e armazenado é utilizado na combustão com o biogás para gerar calor e eletricidade (alternativa B).`,
    subject: ['fis'],
    topics: ['Termodinâmica', 'Questões aleatórias'],
  },
  {
    id: 106,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Na Idade Média, para elaborar preparados a partir 
de plantas produtoras de óleos essenciais, as coletas 
das espécies eram realizadas ao raiar do dia. Naquela 
época, essa prática era fundamentada misticamente pelo 
efeito mágico dos raios lunares, que seria anulado pela 
emissão dos raios solares. Com a evolução da ciência, 
foi comprovado que a coleta de algumas espécies ao 
raiar do dia garante a obtenção de material com maiores 
quantidades de óleos essenciais. 
A explicação científica que justifica essa prática se baseia na`,
    alternatives: [
      { id: 'A', type: 'text', value: `volatilização das substâncias de interesse.` },
      { id: 'B', type: 'text', value: `polimerização dos óleos catalisada pela radiação 
solar.` },
      { id: 'C', type: 'text', value: `solubilização das substâncias de interesse pelo 
orvalho.` },
      { id: 'D', type: 'text', value: `oxidação do óleo pelo oxigênio produzido na 
fotossíntese.` },
      { id: 'E', type: 'text', value: `liberação das moléculas de óleo durante o processo 
de fotossíntese.` },
    ],
    correct: 'A',
    explanation: `Os óleos essenciais são constituídos por substâncias voláteis, que evaporam com facilidade quando a temperatura aumenta. Ao raiar do dia, a temperatura é mais baixa e a volatilização desses compostos é mínima, de modo que a planta ainda retém a maior quantidade de óleo. Com a incidência dos raios solares e o aquecimento, parte dessas substâncias é volatilizada e perdida. Portanto, a coleta no raiar do dia é vantajosa porque evita a volatilização das substâncias de interesse (alternativa A).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 107,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A epilação a laser (popularmente conhecida como 
depilação a laser ) consiste na aplicação de uma fonte de luz 
para aquecer e causar uma lesão localizada e controlada 
nos folículos capilares. Para evitar que outros tecidos sejam 
danificados, selecionam-se comprimentos de onda que são 
absorvidos pela melanina presente nos pelos, mas que não 
afetam a oxi-hemoglobina do sangue e a água dos tecidos 
da região em que o tratamento será aplicado. A figura 
mostra como é a absorção de diferentes comprimentos de 
onda pela melanina, oxi-hemoglobina e água. 
50,0 
Melanina 
37,5 
Absorção (%) 
25,0 
Oxi-hemoglobina 
12,5 
Água 
0 
400 
500 
600 
700 
800 
900 
1 000 
1 100 
Comprimento de onda (nm) 
MACEDO, F. S.; MONTEIRO, E. O. Epilação com laser e luz intensa pulsada. 
Revista Brasileira de Medicina . Disponível em: www.moreirajr.com.br. 
 Acesso em: 4 set. 2015 (adaptado). 
Qual é o comprimento de onda, em nm, ideal para a 
epilação a laser ?`,
    images: ['/enem/2017/images/enem_2017_d2_q107.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `400` },
      { id: 'B', type: 'text', value: `700` },
      { id: 'C', type: 'text', value: `1 100` },
      { id: 'D', type: 'text', value: `900` },
      { id: 'E', type: 'text', value: `500` },
    ],
    correct: 'B',
    explanation: `Para a epilação, o comprimento de onda ideal é aquele fortemente absorvido pela melanina do pelo, mas pouco absorvido pela oxi-hemoglobina do sangue e pela água dos tecidos, evitando danos indesejados. No gráfico, em 700 nm a absorção pela melanina ainda é relativamente alta, enquanto a absorção pela oxi-hemoglobina e pela água é baixa. Portanto, o comprimento de onda ideal é 700 nm (alternativa B).`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 108,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `O brinquedo pula-pula (cama elástica) é composto 
por uma lona circular flexível horizontal presa por molas 
à sua borda. As crianças brincam pulando sobre ela, 
alterando e alternando suas formas de energia. 
Ao pular verticalmente, desprezando o atrito com o ar 
e os movimentos de rotação do corpo enquanto salta, 
uma criança realiza um movimento periódico vertical em 
torno da posição de equilíbrio da lona ( h = 0), passando 
pelos pontos de máxima e de mínima alturas, h max e h mín , 
respectivamente. 
Esquematicamente, o esboço do gráfico da energia 
cinética da criança em função de sua posição vertical na 
situação descrita é: 
E c`,
    images: ['/enem/2017/images/enem_2017_d2_q108_A.jpg', '/enem/2017/images/enem_2017_d2_q108_B.jpg', '/enem/2017/images/enem_2017_d2_q108_C.jpg', '/enem/2017/images/enem_2017_d2_q108_D.jpg', '/enem/2017/images/enem_2017_d2_q108_E.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'C',
    explanation: `Nos pontos de altura máxima e mínima a criança inverte o movimento e tem velocidade nula, de modo que a energia cinética é zero em h_máx e h_mín. Pela conservação da energia mecânica, a energia cinética é máxima na posição de equilíbrio (h = 0), onde a velocidade é maior. No trecho acima da lona, apenas a gravidade atua, e E_c = E − m·g·h decresce de forma linear com h; abaixo, a força elástica torna o decréscimo não linear. O gráfico que mostra E_c nula nos extremos, máxima perto de h = 0 e com esse comportamento assimétrico é o da alternativa C.`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias'],
  },
  {
    id: 109,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `O fenômeno da piracema (subida do rio) é um 
importante mecanismo que influencia a reprodução 
de algumas espécies de peixes, pois induz o processo 
que estimula a queima de gordura e ativa mecanismos 
hormonais complexos, preparando-os para a reprodução. 
Intervenções antrópicas nos ambientes aquáticos, como 
a construção de barragens, interferem na reprodução 
desses animais. 
MALTA, P. Impacto ambiental das barragens hidrelétricas . 
Disponível em: http://futurambiental.com. 
Acesso em: 10 maio 2013 (adaptado). 
Essa intervenção antrópica prejudica a piracema porque 
reduz o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `percurso da migração.` },
      { id: 'B', type: 'text', value: `longevidade dos indivíduos.` },
      { id: 'C', type: 'text', value: `disponibilidade de alimentos.` },
      { id: 'D', type: 'text', value: `período de migração da espécie.` },
      { id: 'E', type: 'text', value: `número de espécies de peixes no local.` },
    ],
    correct: 'A',
    explanation: `A piracema é a migração dos peixes rio acima, necessária para desencadear os processos hormonais que preparam a reprodução. A construção de barragens interrompe o curso do rio e bloqueia o deslocamento dos peixes, encurtando o trajeto que eles podem percorrer. Dessa forma, a intervenção antrópica prejudica a reprodução ao reduzir o percurso da migração. Portanto, a resposta é percurso da migração (alternativa A).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 110,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Fusível é um dispositivo de proteção contra 
sobrecorrente em circuitos. Quando a corrente que passa 
por esse componente elétrico é maior que sua máxima 
corrente nominal, o fusível queima. Dessa forma, evita 
que a corrente elevada danifique os aparelhos do circuito. 
Suponha que o circuito elétrico mostrado seja alimentado 
por uma fonte de tensão U e que o fusível suporte uma 
corrente nominal de 500 mA. 
60 Ω 
60 Ω 
30 Ω 
120 Ω 
Fusível 
60 Ω 
40 Ω 
U 
Qual é o máximo valor da tensão U para que o fusível não 
queime?`,
    images: ['/enem/2017/images/enem_2017_d2_q110.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `20 V` },
      { id: 'B', type: 'text', value: `40 V` },
      { id: 'C', type: 'text', value: `60 V` },
      { id: 'D', type: 'text', value: `120 V` },
      { id: 'E', type: 'text', value: `185 V` },
    ],
    correct: 'D',
    explanation: `O circuito é uma ponte em que a fonte U alimenta os nós laterais; reduzindo as associações, verifica-se que a corrente que atravessa o fusível vale i = U/240 (em ampères, com U em volts). De fato, pela simetria dos ramos de 60 Ω o nó superior e o nó do fusível ficam no mesmo potencial U/2, e a corrente no fusível provém do ramo de 120 Ω: i = (U/2)/120 = U/240. Impondo a corrente máxima suportada, i = 0,5 A, obtém-se U = 0,5 × 240 = 120 V. Portanto, a tensão máxima é 120 V (alternativa D).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 111,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Os botos-cinza ( Sotália guianensis ), mamíferos da 
família dos golfinhos, são excelentes indicadores da 
poluição das áreas em que vivem, pois passam toda a 
sua vida - cerca de 30 anos - na mesma região. Além 
disso, a espécie acumula mais contaminantes em seu 
organismo, como o mercúrio, do que outros animais da 
sua cadeia alimentar. 
MARCOLINO, B. Sentinelas do mar . Disponível em: http://cienciahoje.uol.com.br. 
Acesso em: 1 ago. 2012 (adaptado). 
Os botos-cinza acumulam maior concentração dessas 
substâncias porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `são animais herbívoros.` },
      { id: 'B', type: 'text', value: `são animais detritívoros.` },
      { id: 'C', type: 'text', value: `são animais de grande porte.` },
      { id: 'D', type: 'text', value: `digerem o alimento lentamente.` },
      { id: 'E', type: 'text', value: `estão no topo da cadeia alimentar.` },
    ],
    correct: 'E',
    explanation: `Os botos-cinza são predadores de topo e, por isso, estão no fim da cadeia alimentar da região em que vivem. Substâncias como o mercúrio não são eliminadas e se acumulam ao longo dos níveis tróficos, num processo chamado magnificação (bioacumulação) trófica. Assim, o organismo situado no topo da cadeia concentra as maiores quantidades desses contaminantes. Portanto, os botos acumulam mais porque estão no topo da cadeia alimentar (alternativa E).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 112,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `O trombone de Quincke é um dispositivo experimental 
utilizado para demonstrar o fenômeno da interferência 
de ondas sonoras. Uma fonte emite ondas sonoras de 
determinada frequência na entrada do dispositivo. Essas 
ondas se dividem pelos dois caminhos ( ADC e AEC ) e se 
encontram no ponto C , a saída do dispositivo, onde se 
posiciona um detector. O trajeto ADC pode ser aumentado 
pelo deslocamento dessa parte do dispositivo. Com o 
trajeto ADC igual ao AEC , capta-se um som muito intenso 
na saída. Entretanto, aumentando-se gradativamente o 
trajeto ADC , até que ele fique como mostrado na figura, a 
intensidade do som na saída fica praticamente nula. Desta 
forma, conhecida a velocidade do som no interior do tubo 
(320 m/s), é possível determinar o valor da frequência do 
som produzido pela fonte. 
40 cm 
30 cm 
Fonte sonora 
Entrada do som 
A 
E 
D 
C 
Saída do som 
Detector 
O valor da frequência, em hertz, do som produzido pela 
fonte sonora é`,
    images: ['/enem/2017/images/enem_2017_d2_q112.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `3 200.` },
      { id: 'B', type: 'text', value: `1 600.` },
      { id: 'C', type: 'text', value: `800.` },
      { id: 'D', type: 'text', value: `640.` },
      { id: 'E', type: 'text', value: `400.` },
    ],
    correct: 'C',
    explanation: `No trombone de Quincke, a intensidade é máxima quando os dois trajetos são iguais (interferência construtiva) e praticamente nula na primeira interferência destrutiva, quando a diferença de caminhos vale λ/2. Ao deslocar a parte móvel, a diferença entre os trajetos ADC e AEC fica igual a 2 × (40 − 30) = 20 cm, pois a onda percorre o acréscimo na ida e na volta. Logo, λ/2 = 20 cm e λ = 40 cm = 0,40 m. Com v = 320 m/s, a frequência é f = v/λ = 320 ÷ 0,40 = 800 Hz (alternativa C).`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 113,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A farinha de linhaça dourada é um produto natural que 
oferece grandes benefícios para o nosso organismo. A maior 
parte dos nutrientes da linhaça encontra-se no óleo desta 
semente, rico em substâncias lipossolúveis com massas 
moleculares elevadas. A farinha também apresenta altos 
teores de fibras proteicas insolúveis em água, celulose, 
vitaminas lipossolúveis e sais minerais hidrossolúveis. 
Considere o esquema, que resume um processo de 
separação dos componentes principais da farinha de 
linhaça dourada. 
Farinha de linhaça 
Adição de éter etílico, seguida de agitação 
Filtração 
Destilado 1 
Resíduo 1 
Extrato etéreo 
(fase orgânica) 
Destilação 
Resíduo 4 
Adição de água, seguida de agitação 
Filtração 
Destilado 2 
Resíduo 2 
Extrato aquoso 
Destilação 
Resíduo 3 
O óleo de linhaça será obtido na fração`,
    images: ['/enem/2017/images/enem_2017_d2_q113.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Destilado 1.` },
      { id: 'B', type: 'text', value: `Destilado 2.` },
      { id: 'C', type: 'text', value: `Resíduo 2.` },
      { id: 'D', type: 'text', value: `Resíduo 3.` },
      { id: 'E', type: 'text', value: `Resíduo 4.` },
    ],
    correct: 'E',
    explanation: `O óleo de linhaça é lipossolúvel e de massa molecular elevada, por isso se dissolve no éter etílico, passando para o extrato etéreo (fase orgânica) na primeira filtração. Ao destilar essa fase, o éter, volátil, é recolhido como destilado, enquanto o óleo, não volátil, permanece no fundo como resíduo. Seguindo o esquema, esse resíduo da destilação da fase orgânica corresponde ao Resíduo 4. Portanto, o óleo é obtido na fração Resíduo 4 (alternativa E).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 114,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `O biodiesel é um biocombustível obtido a partir de 
fontes renováveis, que surgiu como alternativa ao uso do 
diesel de petróleo para motores de combustão interna. 
Ele pode ser obtido pela reação entre triglicerídeos, 
presentes em óleos vegetais e gorduras animais, entre 
outros, e álcoois de baixa massa molar, como o metanol 
ou etanol, na presença de um catalisador, de acordo com 
a equação química: 
CH 
CH 
R 1 
R 1 
2 
3 
CH 
OH 
2 
+ 
+ 
catalisador 
CH 
OH 
3 CH 3 OH 
R 2 
R 2 
CH 
CH 
3 
CH 
OH 
2 
CH 
CH 
R 3 
R 3 
2 
3 
A função química presente no produto que representa o 
biodiesel é`,
    images: ['/enem/2017/images/enem_2017_d2_q114.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `éter.` },
      { id: 'B', type: 'text', value: `éster.` },
      { id: 'C', type: 'text', value: `álcool.` },
      { id: 'D', type: 'text', value: `cetona.` },
      { id: 'E', type: 'text', value: `ácido carboxílico.` },
    ],
    correct: 'B',
    explanation: `O biodiesel é obtido por transesterificação, reação entre os triglicerídeos (que já são ésteres) e um álcool de baixa massa molar, como metanol ou etanol, com catalisador. Nessa reação, os grupos dos triglicerídeos são transferidos ao álcool, formando novos ésteres de cadeia menor (os ésteres monoalquílicos que constituem o biodiesel) e liberando glicerol. Assim, o produto que representa o biodiesel contém a função éster. Portanto, a resposta é éster (alternativa B).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 115,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `As centrífugas são equipamentos utilizados em 
laboratórios, clínicas e indústrias. Seu funcionamento faz 
uso da aceleração centrífuga obtida pela rotação de um 
recipiente e que serve para a separação de sólidos em 
suspensão em líquidos ou de líquidos misturados entre si. 
RODITI, I. Dicionário Houaiss de física . Rio de Janeiro: Objetiva, 2005 (adaptado). 
Nesse aparelho, a separação das substâncias ocorre 
em função`,
    alternatives: [
      { id: 'A', type: 'text', value: `das diferentes densidades.` },
      { id: 'B', type: 'text', value: `dos diferentes raios de rotação.` },
      { id: 'C', type: 'text', value: `das diferentes velocidades angulares.` },
      { id: 'D', type: 'text', value: `das diferentes quantidades de cada substância.` },
      { id: 'E', type: 'text', value: `da diferente coesão molecular de cada substância.` },
    ],
    correct: 'A',
    explanation: `A centrífuga submete a mistura a uma aceleração centrífuga intensa, que faz os componentes se deslocarem com rapidez diferente conforme sua massa por volume. Os componentes mais densos são lançados para o fundo do recipiente, enquanto os menos densos permanecem acima, promovendo a separação. Dessa forma, a separação ocorre em função das diferentes densidades das substâncias. Portanto, a resposta é das diferentes densidades (alternativa A).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 116,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Visando 
explicar 
uma 
das 
propriedades 
da 
membrana plasmática, fusionou-se uma célula de 
camundongo com uma célula humana, formando uma 
célula híbrida. Em seguida, com o intuito de marcar as 
proteínas de membrana, dois anticorpos foram inseridos 
no experimento, um específico para as proteínas de 
membrana do camundongo e outro para as proteínas de 
membrana humana. Os anticorpos foram visualizados ao 
microscópio por meio de fluorescência de cores diferentes. 
Célula de 
camundongo 
Célula 
humana 
ETAPA 1 
Proteína da 
membrana 
Proteína da 
membrana 
Fusão celular 
ETAPA 2 
Célula híbrida 
ETAPA 3 
Anticorpos contra proteína 
de membrana humana, 
marcados com rodamina. 
Anticorpos contra proteína de 
membrana de camundongo, 
marcados com fluoresceína. 
Tempo = 0 minuto 
Incubação a 37 °C 
ETAPA 4 
Tempo = 40 minutos 
ALBERTS, B. et al. Biologia molecular da célula . Porto Alegre: Artes Médicas, 1997 (adaptado). 
A mudança observada da etapa 3 para a etapa 4 do 
experimento ocorre porque as proteínas`,
    images: ['/enem/2017/images/enem_2017_d2_q116.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `movimentam-se livremente no plano da bicamada 
lipídica.` },
      { id: 'B', type: 'text', value: `permanecem confinadas em determinadas regiões 
da bicamada.` },
      { id: 'C', type: 'text', value: `auxiliam o deslocamento dos fosfolipídios da 
membrana plasmática.` },
      { id: 'D', type: 'text', value: `são mobilizadas em razão da inserção de anticorpos.` },
      { id: 'E', type: 'text', value: `são bloqueadas pelos anticorpos.` },
    ],
    correct: 'A',
    explanation: `No experimento de fusão celular (Frye e Edidin), as proteínas de membrana do camundongo e do homem, inicialmente separadas em cada hemisfério da célula híbrida, aparecem completamente misturadas após 40 minutos. Isso demonstra que as proteínas não estão fixas, mas se deslocam lateralmente na bicamada lipídica, conforme o modelo do mosaico fluido. Portanto, a mudança ocorre porque as proteínas se movimentam livremente no plano da bicamada lipídica (alternativa A).`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 117,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A distrofia muscular Duchenne (DMD) é uma doença 
causada por uma mutação em um gene localizado no 
cromossomo X. Pesquisadores estudaram uma família 
na qual gêmeas monozigóticas eram portadoras de um 
alelo mutante recessivo para esse gene (heterozigóticas). 
O interessante é que uma das gêmeas apresentava 
o fenótipo relacionado ao alelo mutante, isto é, DMD, 
enquanto a sua irmã apresentava fenótipo normal. 
RICHARDS, C. S. et al. The American Journal of Human Genetics , n. 4, 1990 (adaptado). 
A diferença na manifestação da DMD entre as gêmeas 
pode ser explicada pela`,
    alternatives: [
      { id: 'A', type: 'text', value: `dominância incompleta do alelo mutante em relação 
ao alelo normal.` },
      { id: 'B', type: 'text', value: `falha na separação dos cromossomos X no momento 
da separação dos dois embriões.` },
      { id: 'C', type: 'text', value: `recombinação cromossômica em uma divisão celular 
embrionária anterior à separação dos dois embriões.` },
      { id: 'D', type: 'text', value: `inativação aleatória de um dos cromossomos X em 
fase posterior à divisão que resulta nos dois embriões.` },
      { id: 'E', type: 'text', value: `origem paterna do cromossomo portador do alelo mutante 
em uma das gêmeas e origem materna na outra.` },
    ],
    correct: 'D',
    explanation: `As gêmeas são monozigóticas e heterozigóticas para o alelo recessivo ligado ao X, de modo que ambas possuem um X normal e um X mutante. Em cada célula feminina, um dos cromossomos X é inativado ao acaso (lionização). Se essa inativação ocorreu após a divisão que separou os dois embriões, uma gêmea pode ter inativado preferencialmente o X normal, expressando o alelo mutante (DMD), enquanto a outra inativou o X mutante, permanecendo normal. Portanto, a diferença se explica pela inativação aleatória de um dos cromossomos X em fase posterior à divisão que origina os dois embriões (alternativa D).`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 118,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Para se adequar às normas ambientais atuais, as 
construtoras precisam prever em suas obras a questão 
do uso de materiais de modo a minimizar os impactos 
causados no local. Entre esses materiais está o chamado 
concregrama ou pisograma, que é um tipo de revestimento 
composto por peças de concreto com áreas vazadas, 
preenchidas com solo gramado. As figuras apresentam 
essas duas formas de piso feitos de concreto. 
Grama 
Grama 
Grama 
Grama 
Piso tradicional 
de concreto 
Piso concregrama 
PONTES, K. L. F. Estudo de caso de um protótipo experimental [...]. 
Disponível em: http://monografias.poli.ufrj.br. Acesso em: 9 maio 2017 (adaptado). 
A utilização desse tipo de piso em uma obra tem o objetivo 
de evitar, no solo, a`,
    images: ['/enem/2017/images/enem_2017_d2_q118.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `impermeabilização.` },
      { id: 'B', type: 'text', value: `diminuição da temperatura.` },
      { id: 'C', type: 'text', value: `acumulação de matéria orgânica.` },
      { id: 'D', type: 'text', value: `alteração do pH.` },
      { id: 'E', type: 'text', value: `salinização.` },
    ],
    correct: 'A',
    explanation: `O concregrama possui áreas vazadas preenchidas com solo e grama, ao contrário do piso tradicional de concreto, que é totalmente fechado. Essas aberturas permitem que a água da chuva se infiltre no solo em vez de escoar pela superfície. O objetivo, portanto, é evitar a impermeabilização do solo, reduzindo o escoamento superficial e favorecendo a recarga hídrica. Portanto, a resposta é impermeabilização (alternativa A).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 119,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Diversos produtos naturais podem ser obtidos de 
plantas por processo de extração. O lapachol é da classe 
das naftoquinonas. Sua estrutura apresenta uma hidroxila 
enólica (p K a = 6,0) que permite que este composto seja 
isolado da serragem dos ipês por extração com solução 
adequada, seguida de filtração simples. Considere que 
p K a = −log K a , em que K a é a constante ácida da reação 
de ionização do lapachol. 
O 
OH 
O 
Lapachol 
COSTA, P. R. R. et al. Ácidos e bases em química orgânica . 
Porto Alegre: Bookman, 2005 (adaptado). 
Qual solução deve ser usada para extração do lapachol 
da serragem do ipê com maior eficiência?`,
    images: ['/enem/2017/images/enem_2017_d2_q119.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Solução de Na₂ CO₃ para formar um sal de lapachol.` },
      { id: 'B', type: 'text', value: `Solução-tampão ácido acético/acetato de sódio 
(pH = 4,5).` },
      { id: 'C', type: 'text', value: `Solução de NaCl a fim de aumentar a força iônica 
do meio.` },
      { id: 'D', type: 'text', value: `Solução de Na₂ SO₄ para formar um par iônico com 
lapachol.` },
      { id: 'E', type: 'text', value: `Solução de HCl a fim de extraí-lo por meio de reação 
ácido-base.` },
    ],
    correct: 'A',
    explanation: `O lapachol possui uma hidroxila enólica ácida (pKa = 6,0), comportando-se como um ácido fraco. Para extraí-lo com eficiência, deve-se ionizá-lo, convertendo-o em um sal solúvel em água; isso é conseguido com uma solução básica. A solução de Na₂CO₃ (básica) desprotona o lapachol, formando o sal correspondente, solúvel, que é separado por filtração. Portanto, a solução adequada é a de Na₂CO₃, para formar um sal de lapachol (alternativa A).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 120,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Alguns tipos de dessalinizadores usam o processo de 
osmose reversa para obtenção de água potável a partir 
da água salgada. Nesse método, utiliza-se um recipiente 
contendo dois compartimentos separados por uma 
membrana semipermeável: em um deles coloca-se água 
salgada e no outro recolhe-se a água potável. A aplicação 
de pressão mecânica no sistema faz a água fluir de um 
compartimento para o outro. O movimento das moléculas 
de água através da membrana é controlado pela pressão 
osmótica e pela pressão mecânica aplicada. 
Para que ocorra esse processo é necessário que 
as resultantes das pressões osmótica e mecânica 
apresentem`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `mesmo sentido e mesma intensidade.` },
      { id: 'B', type: 'text', value: `sentidos opostos e mesma intensidade.` },
      { id: 'C', type: 'text', value: `sentidos opostos e maior intensidade da pressão osmótica.` },
      { id: 'D', type: 'text', value: `mesmo sentido e maior intensidade da pressão osmótica.` },
      { id: 'E', type: 'text', value: `sentidos opostos e maior intensidade da pressão mecânica.` },
    ],
    correct: 'E',
    explanation: `Na osmose espontânea, a água tende a fluir do meio menos concentrado para o mais concentrado, movida pela pressão osmótica em direção à água salgada. Na osmose reversa, aplica-se uma pressão mecânica que empurra a água no sentido contrário, da água salgada para a água potável. Para que o processo ocorra, as resultantes das pressões osmótica e mecânica devem ter sentidos opostos e a pressão mecânica deve ter intensidade maior, superando a osmótica. Portanto, a resposta é sentidos opostos e maior intensidade da pressão mecânica (alternativa E).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 121,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A invenção do LED azul, que permite a geração de outras cores para compor a luz branca, permitiu a construção 
de lâmpadas energeticamente mais eficientes e mais duráveis do que as incandescentes e fluorescentes. Em um 
experimento de laboratório, pretende-se associar duas pilhas em serie para acender um LED azul que requer 3,6 volts 
para o seu funcionamento. Considere as semirreações de redução e seus respectivos potenciais mostrados no quadro. 
 + 2 e − → Zn (s) 
− 0,76 
Qual associação em série de pilhas fornece diferença de potencial, nas condicoes-padrão, suficiente para acender o LED azul? 
LED 
Ni 
Grafite 
Zn 
Grafite 
KCI 
KCI`,
    images: ['/enem/2017/images/enem_2017_d2_q121_1.jpg', '/enem/2017/images/enem_2017_d2_q121_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'C',
    explanation: `A ddp de cada pilha é a diferença entre os potenciais de redução do cátodo e do ânodo. Associando o Ce⁴⁺/Ce³⁺ (+1,61 V) como cátodo com o Zn (−0,76 V) como ânodo, obtém-se 1,61 − (−0,76) = 2,37 V; associando o Cr₂O₇²⁻ (+1,33 V) com o Ni (−0,25 V), obtém-se 1,33 − (−0,25) = 1,58 V. Ligadas em série, essas duas pilhas fornecem 2,37 + 1,58 = 3,95 V, suficiente para os 3,6 V do LED. A alternativa C é a única que usa eletrodos inertes de grafite nas meias-células do Ce⁴⁺ e do Cr₂O₇²⁻ e liga as pilhas em série de modo que os potenciais se somem. Portanto, a resposta é a alternativa C.`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
  },
  {
    id: 122,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `O ácido acetilsalicílico, AAS (massa molar igual a 180 g/mol), é sintetizado a partir da reação do ácido salicílico 
(massa molar igual a 138 g/mol) com anidrido acético, usando-se ácido sulfúrico como catalisador, conforme a 
equação química: 
Ácido salicílico 
Anidrido acético 
Ácido acetilsalicílico 
Ácido acético 
Após a síntese, o AAS é purificado e o rendimento final é de aproximadamente 50%. Devido às suas propriedades 
farmacológicas (antitérmico, analgésico, anti-inflamatório e antitrombótico), o AAS é utilizado como medicamento na 
forma de comprimidos, nos quais se emprega tipicamente uma massa de 500 mg dessa substância. 
Uma indústria farmacêutica pretende fabricar um lote de 900 mil comprimidos, de acordo com as especificações do 
texto. Qual é a massa de ácido salicílico, em kg, que deve ser empregada para esse fim?`,
    images: ['/enem/2017/images/enem_2017_d2_q122.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `293` },
      { id: 'B', type: 'text', value: `345` },
      { id: 'C', type: 'text', value: `414` },
      { id: 'D', type: 'text', value: `690` },
      { id: 'E', type: 'text', value: `828` },
    ],
    correct: 'D',
    explanation: `O lote exige 900 000 comprimidos × 500 mg = 450 000 000 mg = 450 kg de AAS. Com massa molar 180 g/mol, isso corresponde a 450 000 g ÷ 180 = 2 500 mol de AAS. Como o rendimento é de 50%, é preciso partir do dobro em mol de ácido salicílico (proporção 1:1), ou seja, 5 000 mol. Multiplicando pela massa molar do ácido salicílico, 5 000 mol × 138 g/mol = 690 000 g = 690 kg. Portanto, a massa necessária é 690 kg (alternativa D).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 123,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A Mata Atlântica caracteriza-se por uma grande diversidade de epífitas, como as bromélias. Essas plantas estão 
adaptadas a esse ecossistema e conseguem captar luz, água e nutrientes mesmo vivendo sobre as arvores. 
Disponível em: www.ib.usp.br. Acesso em: 23 fev. 2013 (adaptado). 
Essas espécies captam água do(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `organismo das plantas vizinhas.` },
      { id: 'B', type: 'text', value: `solo através de suas longas raízes.` },
      { id: 'C', type: 'text', value: `chuva acumulada entre suas folhas.` },
      { id: 'D', type: 'text', value: `seiva bruta das plantas hospedeiras.` },
      { id: 'E', type: 'text', value: `comunidade que vive em seu interior.` },
    ],
    correct: 'C',
    explanation: `As bromélias são epífitas: vivem sobre as árvores sem retirar água nem nutrientes delas. Suas folhas dispõem-se em roseta, formando um reservatório central (tanque) que acumula a água da chuva, de onde ela é absorvida. Assim, essas plantas captam a água que fica retida entre suas folhas. Portanto, a resposta é chuva acumulada entre suas folhas (alternativa C).`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
  },
  {
    id: 124,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `O ferro é encontrado na natureza na forma de seus minérios, tais como a hematita (α-Fe₂O₃), a magnetita (Fe₃O₄)
e a wustita (FeO). Na siderurgia, o ferro-gusa é obtido pela fusão de minérios de ferro em altos fornos em condições
adequadas. Uma das etapas nesse processo é a formação de monóxido de carbono. O CO (gasoso) é utilizado para
reduzir o FeO (sólido), conforme a equação química:
FeO (s) + CO (g) → Fe (s) + CO₂ (g)
Considere as seguintes equações termoquímicas:
Fe₂O₃ (s) + 3 CO (g) → 2 Fe (s) + 3 CO₂ (g)  ΔrH⊖ = −25 kJ/mol de Fe₂O₃
3 FeO (s) + CO₂ (g) → Fe₃O₄ (s) + CO (g)  ΔrH⊖ = −36 kJ/mol de CO₂
2 Fe₃O₄ (s) + CO₂ (g) → 3 Fe₂O₃ (s) + CO (g)  ΔrH⊖ = +47 kJ/mol de CO₂
O valor mais próximo de ΔrH⊖, em kJ/mol de FeO, para a reação indicada do FeO (sólido) com o CO (gasoso) é`,
    alternatives: [
      { id: 'A', type: 'text', value: `−14.` },
      { id: 'B', type: 'text', value: `−17.` },
      { id: 'C', type: 'text', value: `−50.` },
      { id: 'D', type: 'text', value: `−64.` },
      { id: 'E', type: 'text', value: `−100.` },
    ],
    correct: 'B',
    explanation: `Pela lei de Hess, combinam-se as equações para obter 6 FeO + 6 CO → 6 Fe + 6 CO₂: usa-se 3 vezes a primeira (3 × −25 = −75 kJ), 1 vez a terceira (+47 kJ) e 2 vezes a segunda (2 × −36 = −72 kJ), cancelando Fe₂O₃ e Fe₃O₄. A soma das entalpias é −75 + 47 − 72 = −100 kJ para 6 mols de FeO. Dividindo por 6, obtém-se −100 ÷ 6 ≈ −17 kJ por mol de FeO. Portanto, o valor mais próximo é −17 kJ/mol (alternativa B).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 125,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A reação em cadeia da polimerase (PCR, na sigla em 
inglês) é uma técnica de biologia molecular que permite 
replicação in vitro do DNA de forma rápida. Essa técnica 
surgiu na década de 1980 e permitiu avanços científicos 
em todas as áreas de investigação genômica. A dupla 
hélice é estabilizada por ligações hidrogênio, duas entre 
as bases adenina (A) e timina (T) e três entre as bases 
guanina (G) e citosina (C). Inicialmente, para que o DNA 
possa ser replicado, a dupla hélice precisa ser totalmente 
desnaturada (desenrolada) pelo aumento da temperatura, 
quando são desfeitas as ligações hidrogênio entre as 
diferentes bases nitrogenadas. 
Qual dos segmentos de DNA será o primeiro a desnaturar 
totalmente durante o aumento da temperatura na reação 
de PCR?`,
    images: ['/enem/2017/images/enem_2017_d2_q125_A.jpg', '/enem/2017/images/enem_2017_d2_q125_B.jpg', '/enem/2017/images/enem_2017_d2_q125_C.jpg', '/enem/2017/images/enem_2017_d2_q125_D.jpg', '/enem/2017/images/enem_2017_d2_q125_E.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'C',
    explanation: `A estabilidade da dupla-hélice depende do número de ligações de hidrogênio: os pares A–T têm 2 ligações, enquanto os pares G–C têm 3. O segmento mais rico em pares A–T é o menos estável e, por isso, desnatura primeiro com o aumento da temperatura. Entre as opções, o segmento C é o que apresenta a maior proporção de pares A–T (e menos G–C). Portanto, o primeiro a desnaturar totalmente é o segmento C (alternativa C).`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 126,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `No ar que respiramos existem os chamados “gases 
inertes”. Trazem curiosos nomes gregos, que significam 
“o Novo”, “o Oculto”, “o Inativo”. E de fato são de tal 
modo inertes, tão satisfeitos em sua condição, que 
não interferem em nenhuma reação química, não se 
combinam com nenhum outro elemento e justamente por 
esse motivo ficaram sem ser observados durante séculos: 
só em 1962 um químico, depois de longos e engenhosos 
esforços, conseguiu forçar “o Estrangeiro” (o xenônio) a 
combinar-se fugazmente com o flúor ávido e vivaz, e a 
façanha pareceu tão extraordinária que lhe foi conferido 
o Prêmio Nobel. 
LEVI, P. A tabela periódica . Rio de Janeiro: Relume-Dumará, 1994 (adaptado). 
Qual propriedade do flúor justifica sua escolha como 
reagente para o processo mencionado?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Densidade.` },
      { id: 'B', type: 'text', value: `Condutância.` },
      { id: 'C', type: 'text', value: `Eletronegatividade.` },
      { id: 'D', type: 'text', value: `Estabilidade nuclear.` },
      { id: 'E', type: 'text', value: `Temperatura de ebulição.` },
    ],
    correct: 'C',
    explanation: `Os gases nobres são extremamente estáveis e pouco reativos. Para forçar o xenônio a se combinar, é preciso um elemento com forte tendência a atrair elétrons, capaz de retirar densidade eletrônica de um átomo tão inerte. O flúor é o elemento de maior eletronegatividade da tabela periódica, o que o torna o reagente adequado para esse processo. Portanto, a propriedade que justifica sua escolha é a eletronegatividade (alternativa C).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 127,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `No manual fornecido pelo fabricante de uma ducha 
elétrica de 220 V é apresentado um gráfico com a variação 
da temperatura da água em função da vazão para três 
condições (morno, quente e superquente). Na condição 
superquente, a potência dissipada é de 6 500 W. Considere 
o calor específico da água igual a 4 200 J/(kg °C) e 
densidade da água igual a 1 kg/L. 
Elevação de temperatura × Curva vazão 
1 - MORNO 
2 - QUENTE 
3 - SUPERQUENTE 
∆T (°C) 
40 
3 
30 
2 
20 
1 
10 
2 
3 
4 
5 
6 
7 
8 
9 
10 
Vazão 
(L/min) 
1 
Com base nas informações dadas, a potência na condição 
morno corresponde a que fração da potência na condição 
superquente?`,
    images: ['/enem/2017/images/enem_2017_d2_q127.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 
3` },
      { id: 'B', type: 'text', value: `1 
5` },
      { id: 'C', type: 'text', value: `3 
5` },
      { id: 'D', type: 'text', value: `3 
8` },
      { id: 'E', type: 'text', value: `5 
8` },
    ],
    correct: 'D',
    explanation: `A potência da ducha é dada por P = ρ·Q·c·ΔT, em que Q é a vazão; como ρ e c são constantes, para uma mesma vazão a potência é proporcional à elevação de temperatura ΔT (ou, de modo equivalente, P é proporcional ao produto vazão × ΔT, constante em cada curva). Lendo o gráfico numa mesma vazão, a razão entre o ΔT do modo morno (curva 1) e o do modo superquente (curva 3) vale 3/8 — por exemplo, 15 °C contra 40 °C. Como a potência no superquente é 6 500 W, a do morno é 3/8 × 6 500 ≈ 2 440 W, confirmando a proporção. Portanto, a potência no morno corresponde a 3/8 da potência no superquente (alternativa D).`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 128,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A retina é um tecido sensível à luz, localizado na parte 
posterior do olho, onde ocorre o processo de formação 
de imagem. Nesse tecido, encontram-se vários tipos 
celulares específicos. Um desses tipos celulares são os 
cones, os quais convertem os diferentes comprimentos 
de onda da luz visível em sinais elétricos, que são 
transmitidos pelo nervo óptico até o cérebro. 
Disponível em: www.portaldaretina.com.br. Acesso em: 13 jun. 2012 (adaptado). 
Em relação à visão, a degeneração desse tipo celular irá`,
    alternatives: [
      { id: 'A', type: 'text', value: `comprometer a capacidade de visão em cores.` },
      { id: 'B', type: 'text', value: `impedir a projeção dos raios luminosos na retina.` },
      { id: 'C', type: 'text', value: `provocar a formação de imagens invertidas na retina.` },
      { id: 'D', type: 'text', value: `causar dificuldade de visualização de objetos próximos.` },
      { id: 'E', type: 'text', value: `acarretar a perda da capacidade de alterar o diâmetro 
da pupila.` },
    ],
    correct: 'A',
    explanation: `Os cones são as células da retina responsáveis por converter em sinais elétricos os diferentes comprimentos de onda da luz, o que permite a percepção das cores. A degeneração desse tipo celular afeta justamente essa função, prejudicando a distinção das cores. Os bastonetes (visão em baixa luminosidade) e as demais estruturas do olho continuam atuando na formação da imagem. Portanto, a degeneração dos cones compromete a capacidade de visão em cores (alternativa A).`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 129,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Em algumas residências, cercas eletrificadas são utilizadas com o objetivo de afastar possíveis invasores. Uma 
cerca eletrificada funciona com uma diferença de potencial elétrico de aproximadamente 10 000 V. Para que não seja 
letal, a corrente que pode ser transmitida através de uma pessoa não deve ser maior do que 0,01 A. Já a resistência 
elétrica corporal entre as mãos e os pés de uma pessoa é da ordem de 1 000 Ω . 
Para que a corrente não seja letal a uma pessoa que toca a cerca eletrificada, o gerador de tensão deve possuir uma 
resistência interna que, em relação à do corpo humano, é`,
    alternatives: [
      { id: 'A', type: 'text', value: `praticamente nula.` },
      { id: 'B', type: 'text', value: `aproximadamente igual.` },
      { id: 'C', type: 'text', value: `milhares de vezes maior.` },
      { id: 'D', type: 'text', value: `da ordem de 10 vezes maior.` },
      { id: 'E', type: 'text', value: `da ordem de 10 vezes menor.` },
    ],
    correct: 'C',
    explanation: `Para que a corrente não ultrapasse 0,01 A sob 10 000 V, a resistência total do circuito deve ser pelo menos R = U/i = 10 000 ÷ 0,01 = 1 000 000 Ω = 10⁶ Ω. Como a resistência do corpo é da ordem de 1 000 Ω (10³ Ω), quase toda essa resistência total tem de vir da resistência interna do gerador, que deve ser da ordem de 10⁶ Ω. Comparando 10⁶ Ω do gerador com 10³ Ω do corpo, a resistência interna é cerca de mil vezes maior. Portanto, a resposta é milhares de vezes maior (alternativa C).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 130,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A cromatografia em papel é um método de separação que se baseia na migração diferencial dos componentes 
de uma mistura entre duas fases imiscíveis. Os componentes da amostra são separados entre a fase estacionária e 
a fase móvel em movimento no papel. A fase estacionária consiste de celulose praticamente pura, que pode absorver 
até 22% de água. É a água absorvida que funciona como fase estacionária líquida e que interage com a fase móvel, 
também líquida (partição líquido-líquido). Os componentes capazes de formar interações intermoleculares mais fortes 
com a fase estacionária migram mais lentamente. 
Uma mistura de hexano com 5% (v/v) de acetona foi utilizada como fase móvel na separação dos componentes 
de um extrato vegetal obtido a partir de pimentões. Considere que esse extrato contém as substâncias representadas. 
O 
Licopeno 
α -caroteno 
γ -caroteno 
RIBEIRO, N. M.; NUNES, C. R. Análise de pigmentos de pimentões por cromatografia em papel. Química Nova na Escola , n. 29, ago. 2008 (adaptado). 
A substância presente na mistura que migra mais lentamente é o(a)`,
    images: ['/enem/2017/images/enem_2017_d2_q130.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `licopeno.` },
      { id: 'B', type: 'text', value: `α -caroteno.` },
      { id: 'C', type: 'text', value: `γ -caroteno.` },
      { id: 'D', type: 'text', value: `capsorubina.` },
      { id: 'E', type: 'text', value: `α -criptoxantina.` },
    ],
    correct: 'D',
    explanation: `Na cromatografia em papel, a fase estacionária é a água retida na celulose (polar), e migram mais lentamente os compostos que fazem interações intermoleculares mais fortes com ela, isto é, os mais polares. O licopeno e os carotenos (α e γ) são hidrocarbonetos apolares, pouco afins à fase estacionária, migrando rapidamente. A capsorubina, por possuir grupos oxigenados polares (hidroxilas e carbonilas), é a substância mais polar e, portanto, a que interage mais fortemente com a água, migrando mais lentamente. Portanto, a resposta é a capsorubina (alternativa D).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 131,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Um motorista que atende a uma chamada de celular é 
levado à desatenção, aumentando a possibilidade de acidentes 
ocorrerem em razão do aumento de seu tempo de reação. 
Considere dois motoristas, o primeiro atento e o segundo 
utilizando o celular enquanto dirige. Eles aceleram seus carros  
inicialmente a 1,00 m/s² . Em resposta a uma emergência, 
freiam com uma desaceleração igual a 5,00 m/s² . O motorista 
atento aciona o freio à velocidade de 14,0 m/s, enquanto o 
desatento, em situação análoga, leva 1,00 segundo a mais 
para iniciar a frenagem. 
Que distância o motorista desatento percorre a mais do 
que o motorista atento, até a parada total dos carros?`,
    alternatives: [
      { id: 'A', type: 'text', value: `2,90 m` },
      { id: 'B', type: 'text', value: `14,0 m` },
      { id: 'C', type: 'text', value: `14,5 m` },
      { id: 'D', type: 'text', value: `15,0 m` },
      { id: 'E', type: 'text', value: `17,4 m` },
    ],
    correct: 'E',
    explanation: `O motorista atento freia a 14,0 m/s com desaceleração de 5,00 m/s²; pela equação de Torricelli, percorre d = v²/(2a) = 14,0² ÷ (2 × 5,00) = 196 ÷ 10 = 19,6 m. O desatento leva 1,00 s a mais para frear e, nesse tempo, continua acelerando a 1,00 m/s², chegando a 14,0 + 1,00 × 1,00 = 15,0 m/s e percorrendo 14,0 × 1,00 + ½ × 1,00 × 1,00² = 14,5 m; depois freia de 15,0 m/s, percorrendo 15,0² ÷ 10 = 22,5 m, num total de 14,5 + 22,5 = 37,0 m. A distância a mais é 37,0 − 19,6 = 17,4 m. Portanto, a resposta é 17,4 m (alternativa E).`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 132,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Uma das estratégias para conservação de alimentos 
é o salgamento, adição de cloreto de sódio (NaCl), 
historicamente utilizado por tropeiros, vaqueiros e 
sertanejos para conservar carnes de boi, porco e peixe. 
O que ocorre com as células presentes nos alimentos 
preservados com essa técnica?`,
    alternatives: [
      { id: 'A', type: 'text', value: `O sal adicionado diminui a concentração de solutos 
em seu interior.` },
      { id: 'B', type: 'text', value: `O sal adicionado desorganiza e destrói suas 
membranas plasmáticas.` },
      { id: 'C', type: 'text', value: `A adição de sal altera as propriedades de suas 
membranas plasmáticas.` },
      { id: 'D', type: 'text', value: `Os íons Na + e Cl − provenientes da dissociação do sal 
entram livremente nelas.` },
      { id: 'E', type: 'text', value: `A grande concentração de sal no meio extracelular 
provoca a saída de água de dentro delas.` },
    ],
    correct: 'E',
    explanation: `O salgamento cria no meio externo às células uma concentração de sal muito maior do que a existente no interior delas (meio hipertônico). Por osmose, a água se desloca do meio mais diluído (interior celular) para o meio mais concentrado (exterior), de modo que as células perdem água e desidratam. Essa desidratação também atinge os microrganismos, impedindo sua proliferação e conservando o alimento. Portanto, a grande concentração de sal no meio extracelular provoca a saída de água de dentro das células (alternativa E).`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 133,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Para demonstrar o processo de transformação de 
energia mecânica em elétrica, um estudante constrói um 
pequeno gerador utilizando: 
• um fio de cobre de diâmetro D enrolado em N 
espiras circulares de área A ; 
• dois ímãs que criam no espaço entre eles um campo 
magnético uniforme de intensidade B; e 
• um sistema de engrenagens que lhe permite girar as 
espiras em torno de um eixo com uma frequência f . 
Ao fazer o gerador funcionar, o estudante obteve uma 
tensão máxima V e uma corrente de curto-circuito i . 
Para dobrar o valor da tensão máxima V do gerador 
mantendo constante o valor da corrente de curto i , o 
estudante deve dobrar o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `número de espiras.` },
      { id: 'B', type: 'text', value: `frequência de giro.` },
      { id: 'C', type: 'text', value: `intensidade do campo magnético.` },
      { id: 'D', type: 'text', value: `área das espiras.` },
      { id: 'E', type: 'text', value: `diâmetro do fio.` },
    ],
    correct: 'A',
    explanation: `A tensão máxima do gerador é proporcional ao número de espiras: V = N·B·A·(2πf). A corrente de curto-circuito é i = V/R, e a resistência R da bobina é proporcional ao comprimento do fio, ou seja, ao número de espiras N. Ao dobrar N, a tensão V dobra, mas R também dobra, de modo que i = V/R permanece constante; dobrar B, A ou f aumentaria V sem alterar R, dobrando também a corrente. Portanto, para dobrar V mantendo i constante o estudante deve dobrar o número de espiras (alternativa A).`,
    subject: ['fis'],
    topics: ['Eletromagnetismo/Indução', 'Questões aleatórias'],
  },
  {
    id: 134,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A ozonólise, reação utilizada na indústria madeireira 
para a produção de papel, é também utilizada em 
escala de laboratório na síntese de aldeídos e cetonas. 
As duplas ligações dos alcenos são clivadas pela oxidação 
com o ozônio (O₃ ), em presença de água e zinco metálico, 
e a reação produz aldeídos e/ou cetonas, dependendo do 
grau de substituição da ligação dupla. Ligações duplas 
dissubstituídas geram cetonas, enquanto as ligações 
duplas terminais ou monossubstituídas dão origem a 
aldeídos, como mostra o esquema. 
O 
O₃ , H₂ O 
H 
+ 
Zn 
H 
H 
O 
But-1-eno 
Propanal 
Metanal 
Considere a ozonólise do composto 1-fenil-2-metilprop-1-eno: 
1-fenil-2-metilprop-1-eno 
MARTINO, A. Química, a ciência global . Goiânia: Editora W, 2014 (adaptado). 
Quais são os produtos formados nessa reação?`,
    images: ['/enem/2017/images/enem_2017_d2_q134_1.jpg', '/enem/2017/images/enem_2017_d2_q134_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Benzaldeído e propanona.` },
      { id: 'B', type: 'text', value: `Propanal e benzaldeído.` },
      { id: 'C', type: 'text', value: `2-fenil-etanal e metanal.` },
      { id: 'D', type: 'text', value: `Benzeno e propanona.` },
      { id: 'E', type: 'text', value: `Benzaldeído e etanal.` },
    ],
    correct: 'A',
    explanation: `Na ozonólise, a dupla ligação C=C é quebrada e cada carbono da dupla origina um composto carbonílico. No 1-fenil-2-metilprop-1-eno, Ph–CH=C(CH₃)₂, o carbono ligado ao grupo fenila (monossubstituído) dá origem a um aldeído, o benzaldeído (Ph–CHO), enquanto o carbono dissubstituído, ligado a dois grupos metila, origina uma cetona, a propanona ((CH₃)₂C=O). Portanto, os produtos formados são benzaldeído e propanona (alternativa A).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 135,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A terapia celular tem sido amplamente divulgada 
como revolucionária, por permitir a regeneração de 
tecidos a partir de células novas. Entretanto, a técnica 
de se introduzirem novas células em um tecido, para o 
tratamento de enfermidades em indivíduos, já era aplicada 
rotineiramente em hospitais. 
A que técnica refere-se o texto?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Vacina.` },
      { id: 'B', type: 'text', value: `Biópsia.` },
      { id: 'C', type: 'text', value: `Hemodiálise.` },
      { id: 'D', type: 'text', value: `Quimioterapia.` },
      { id: 'E', type: 'text', value: `Transfusão de sangue.` },
    ],
    correct: 'E',
    explanation: `A terapia celular consiste em introduzir células novas em um tecido para tratar doenças. O texto afirma que uma técnica com esse mesmo princípio — introduzir células no organismo de um paciente — já era rotineira nos hospitais. Essa técnica é a transfusão de sangue, em que células sanguíneas de um doador são introduzidas no corpo do receptor. Portanto, o texto se refere à transfusão de sangue (alternativa E).`,
    subject: ['bio'],
    topics: ['Biotecnologia', 'Questões aleatórias'],
  },
  {
    id: 136,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Um empréstimo foi feito à taxa mensal de i %, usando 
juros compostos, em oito parcelas fixas e iguais a P . 
O devedor tem a possibilidade de quitar a dívida 
antecipadamente 
a 
qualquer 
momento, 
pagando 
para isso o valor atual das parcelas ainda a pagar. 
Após pagar a 5ª parcela, resolve quitar a dívida no ato 
de pagar a 6ª parcela. 
A expressão que corresponde ao valor total pago pela 
quitação do empréstimo é 
 
 
 
 
 
 
 
 
 
 
( 
) 
( 
)`,
    images: ['/enem/2017/images/enem_2017_d2_q136_A.jpg', '/enem/2017/images/enem_2017_d2_q136_B.jpg', '/enem/2017/images/enem_2017_d2_q136_C.jpg', '/enem/2017/images/enem_2017_d2_q136_D.jpg', '/enem/2017/images/enem_2017_d2_q136_E.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'A',
    explanation: `As parcelas são iguais a P e a taxa é i% ao mês (juros compostos). Ao quitar no ato de pagar a 6ª parcela, pagam-se as parcelas 6, 7 e 8 trazidas a valor presente para esse instante: a 6ª no próprio instante (valor P), a 7ª vence 1 mês depois e a 8ª, 2 meses depois. Trazendo a valor atual: total = P + P/(1 + i/100) + P/(1 + i/100)^2 = P·[1 + 1/(1 + i/100) + 1/(1 + i/100)^2]. Resposta: A.`,
    subject: ['mat'],
    topics: ['Matemática financeira', 'Questões aleatórias'],
  },
  {
    id: 137,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Para realizar a viagem dos sonhos, uma pessoa 
precisava fazer um empréstimo no valor de R$ 5 000,00. 
Para pagar as prestações, dispõe de, no máximo, 
R$ 400,00 mensais. Para esse valor de empréstimo, 
o valor da prestação ( P ) é calculado em função do 
número de prestações ( n ) segundo a fórmula 
n 
P = 
× 
× 
− 
5 000 1013 
0 013 
1013 
1 
, 
, 
( , 
) 
n 
Se necessário, utilize 0,005 como aproximação para 
log 1,013; 2,602 como aproximação para log 400; 2,525 
como aproximação para log 335.  
De acordo com a fórmula dada, o menor número de 
parcelas cujos valores não comprometem o limite definido 
pela pessoa é`,
    alternatives: [
      { id: 'A', type: 'text', value: `12.` },
      { id: 'B', type: 'text', value: `14.` },
      { id: 'C', type: 'text', value: `15.` },
      { id: 'D', type: 'text', value: `16.` },
      { id: 'E', type: 'text', value: `17.` },
    ],
    correct: 'D',
    explanation: `Impõe-se P ≤ 400 na fórmula: 5000·0,013·1,013^n/(1,013^n − 1) ≤ 400, ou seja 65·1,013^n ≤ 400·(1,013^n − 1). Daí 400 ≤ 335·1,013^n, logo 1,013^n ≥ 400/335. Aplicando log: n·log 1,013 ≥ log 400 − log 335 = 2,602 − 2,525 = 0,077. Como log 1,013 ≈ 0,005, n ≥ 0,077/0,005 = 15,4. O menor inteiro é n = 16. Resposta: D.`,
    subject: ['mat'],
    topics: ['Matemática financeira', 'Funções', 'Questões aleatórias'],
  },
  {
    id: 138,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Raios de luz solar estão atingindo a superfície de 
um lago formando um ângulo x com a sua superfície, 
conforme indica a figura. 
Em determinadas condições, pode-se supor que a 
intensidade luminosa desses raios, na superfície do 
lago, seja dada aproximadamente por I x 
sen x 
( ) 
( ) 
= 
⋅ 
κ 
, sendo k uma constante, e supondo-se que x está entre 
0° e 90°. 
x 
Quando x = 30º, a intensidade luminosa se reduz a qual 
percentual de seu valor máximo?`,
    images: ['/enem/2017/images/enem_2017_d2_q138.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `33%` },
      { id: 'B', type: 'text', value: `50%` },
      { id: 'C', type: 'text', value: `57%` },
      { id: 'D', type: 'text', value: `70%` },
      { id: 'E', type: 'text', value: `86%` },
    ],
    correct: 'B',
    explanation: `A intensidade é I(x) = k·sen(x), máxima quando sen(x) = 1 (x = 90°), valendo k. Para x = 30°, sen(30°) = 1/2, logo I = k/2, que é 50% do valor máximo. Resposta: B.`,
    subject: ['mat'],
    topics: ['Trigonometria', 'Questões aleatórias'],
  },
  {
    id: 139,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Os congestionamentos de trânsito constituem um 
problema que aflige, todos os dias, milhares de motoristas 
brasileiros. O gráfico ilustra a situação, representando, ao 
longo de um intervalo definido de tempo, a variação da 
velocidade de um veículo durante um congestionamento. 
Velocidade 
Tempo (min) 
0 
2 
4 
6 
8 
10 
Quantos minutos o veículo permaneceu imóvel ao longo 
do intervalo de tempo total analisado?`,
    images: ['/enem/2017/images/enem_2017_d2_q139.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `4` },
      { id: 'B', type: 'text', value: `3` },
      { id: 'C', type: 'text', value: `2` },
      { id: 'D', type: 'text', value: `1` },
      { id: 'E', type: 'text', value: `0` },
    ],
    correct: 'C',
    explanation: `No gráfico, o veículo está imóvel quando a velocidade é zero, isto é, quando a linha coincide com o eixo do tempo. Isso ocorre no trecho entre t = 6 min e t = 8 min, totalizando 2 minutos. Resposta: C.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 140,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Um garçom precisa escolher uma bandeja de base 
retangular para servir quatro taças de espumante que 
precisam ser dispostas em uma única fileira, paralela 
ao lado maior da bandeja, e com suas bases totalmente 
apoiadas na bandeja. A base e a borda superior das taças 
são círculos de raio 4 cm e 5 cm, respectivamente. 
A bandeja a ser escolhida deverá ter uma área mínima, 
em centímetro quadrado, igual a`,
    images: ['/enem/2017/images/enem_2017_d2_q140.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `192.` },
      { id: 'B', type: 'text', value: `300.` },
      { id: 'C', type: 'text', value: `304.` },
      { id: 'D', type: 'text', value: `320.` },
      { id: 'E', type: 'text', value: `400.` },
    ],
    correct: 'C',
    explanation: `Só as bases (raio 4 cm) precisam ficar sobre a bandeja; as bordas superiores (raio 5 cm) podem ultrapassar as laterais. Largura: igual ao diâmetro da base = 2·4 = 8 cm. Comprimento: as bordas superiores vizinhas não podem se sobrepor, então os centros ficam a 2·5 = 10 cm; para 4 taças há 3 espaçamentos (3·10 = 30 cm) mais o raio da base em cada extremidade (4 + 4 = 8 cm): 30 + 8 = 38 cm. Área mínima = 38·8 = 304 cm². Resposta: C.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 141,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Em uma cantina, o sucesso de venda no verão são sucos 
preparados à base de polpa de frutas. Um dos sucos mais 
vendidos é o de morango com acerola, que é preparado com 
2 
3 
 de polpa de morango e 1 
 de polpa de acerola. 
3 
Para o comerciante, as polpas são vendidas em 
embalagens de igual volume. Atualmente, a embalagem 
da polpa de morango custa R$ 18,00 e a de acerola, 
R$ 14,70. Porém, está prevista uma alta no preço 
da embalagem da polpa de acerola no próximo mês, 
passando a custar R$ 15,30. 
Para não aumentar o preço do suco, o comerciante 
negociou com o fornecedor uma redução no preço da 
embalagem da polpa de morango. 
A redução, em real, no preço da embalagem da polpa de 
morango deverá ser de`,
    alternatives: [
      { id: 'A', type: 'text', value: `1,20.` },
      { id: 'B', type: 'text', value: `0,90.` },
      { id: 'C', type: 'text', value: `0,60.` },
      { id: 'D', type: 'text', value: `0,40.` },
      { id: 'E', type: 'text', value: `0,30.` },
    ],
    correct: 'E',
    explanation: `Custo atual do suco (por embalagem) = (2/3)·18 + (1/3)·14,70 = 12 + 4,90 = 16,90. Com a acerola a R$ 15,30: (1/3)·15,30 = 5,10. Para manter 16,90, o morango deve contribuir com 16,90 − 5,10 = 11,80, ou seja (2/3)·M = 11,80 → M = 17,70. Redução = 18,00 − 17,70 = R$ 0,30. Resposta: E.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 142,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Um casal realiza sua mudança de domicílio 
e necessita colocar numa caixa de papelão um 
objeto cúbico, de 80 cm de aresta, que não pode ser 
desmontado. Eles têm à disposição cinco caixas, com 
diferentes dimensões, conforme descrito: 
• Caixa 1: 86 cm × 86 cm × 86 cm 
• Caixa 2: 75 cm × 82 cm × 90 cm 
• Caixa 3: 85 cm × 82 cm × 90 cm 
• Caixa 4: 82 cm × 95 cm × 82 cm 
• Caixa 5: 80 cm × 95 cm × 85 cm 
O casal precisa escolher uma caixa na qual o 
objeto caiba, de modo que sobre o menor espaço livre 
em seu interior. 
A caixa escolhida pelo casal deve ser a de número`,
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `2.` },
      { id: 'C', type: 'text', value: `3.` },
      { id: 'D', type: 'text', value: `4.` },
      { id: 'E', type: 'text', value: `5.` },
    ],
    correct: 'C',
    explanation: `O cubo (aresta 80 cm) só cabe em caixas com as três dimensões ≥ 80 cm, o que exclui a Caixa 2 (75 cm). Espaço livre = volume da caixa − 512000 cm³: Caixa 1: 86³ = 636056 → 124056; Caixa 3: 85·82·90 = 627300 → 115300; Caixa 4: 82·95·82 = 638780 → 126780; Caixa 5: 80·95·85 = 646000 → 134000. O menor espaço livre é o da Caixa 3. Resposta: C.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 143,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Um brinquedo infantil caminhão-cegonha é formado 
por uma carreta e dez carrinhos nela transportados, 
conforme a figura. 
No setor de produção da empresa que fabrica esse 
brinquedo, é feita a pintura de todos os carrinhos para que 
o aspecto do brinquedo fique mais atraente. São utilizadas 
as cores amarelo, branco, laranja e verde, e cada carrinho 
é pintado apenas com uma cor. O caminhão-cegonha 
tem uma cor fixa. A empresa determinou que em todo 
caminhão-cegonha deve haver pelo menos um carrinho 
de cada uma das quatro cores disponíveis. Mudança de 
posição dos carrinhos no caminhão-cegonha não gera um 
novo modelo do brinquedo. 
Com base nessas informações, quantos são os modelos 
distintos do brinquedo caminhão-cegonha que essa 
empresa poderá produzir?`,
    images: ['/enem/2017/images/enem_2017_d2_q143.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `C 6,4` },
      { id: 'B', type: 'text', value: `C 9,3` },
      { id: 'C', type: 'text', value: `C 10,4` },
      { id: 'D', type: 'text', value: `6 4` },
      { id: 'E', type: 'text', value: `4 6` },
    ],
    correct: 'B',
    explanation: `São 10 carrinhos, 4 cores, com pelo menos uma de cada cor; como a posição não importa, conta-se quantos de cada cor. Distribuir 10 entre 4 cores com cada cor ≥ 1 equivale a distribuir 10 − 4 = 6 livremente entre 4 cores: combinação com repetição C(6 + 4 − 1, 4 − 1) = C(9,3). Resposta: B.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 144,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Uma empresa especializada em conservação de 
piscinas utiliza um produto para tratamento da água cujas 
especificações técnicas sugerem que seja adicionado 
1,5 mL desse produto para cada 1 000 L de água da 
piscina. Essa empresa foi contratada para cuidar de uma 
piscina de base retangular, de profundidade constante 
igual a 1,7 m, com largura e comprimento iguais a 3 m 
e 5 m, respectivamente. O nível da lâmina d’água dessa 
piscina é mantido a 50 cm da borda da piscina. 
A quantidade desse produto, em mililitro, que deve ser 
adicionada a essa piscina de modo a atender às suas 
especificações técnicas é`,
    alternatives: [
      { id: 'A', type: 'text', value: `11,25.` },
      { id: 'B', type: 'text', value: `27,00.` },
      { id: 'C', type: 'text', value: `28,80.` },
      { id: 'D', type: 'text', value: `32,25.` },
      { id: 'E', type: 'text', value: `49,50.` },
    ],
    correct: 'B',
    explanation: `Profundidade da água = 1,7 − 0,50 = 1,2 m. Volume = 3·5·1,2 = 18 m³ = 18000 L. Produto: 1,5 mL por 1000 L → (18000/1000)·1,5 = 18·1,5 = 27 mL. Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 145,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Um instituto de pesquisas eleitorais recebe uma 
encomenda na qual a margem de erro deverá ser de, no 
máximo, 2 pontos percentuais (0,02). 
O instituto tem 5 pesquisas recentes, P1 a P5, sobre 
o tema objeto da encomenda e irá usar a que tiver o erro 
menor que o pedido. 
Os dados sobre as pesquisas são os seguintes: 
 
O erro e pode ser expresso por 
| 
| 
, 
e 
N 
< 196 σ 
em que σ é um parâmetro e N é o número de pessoas 
entrevistadas pela pesquisa. 
Qual pesquisa deverá ser utilizada?`,
    images: ['/enem/2017/images/enem_2017_d2_q145.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `P1` },
      { id: 'B', type: 'text', value: `P2` },
      { id: 'C', type: 'text', value: `P3` },
      { id: 'D', type: 'text', value: `P4` },
      { id: 'E', type: 'text', value: `P5` },
    ],
    correct: 'D',
    explanation: `O erro satisfaz e < 1,96·σ/√N e precisa ser < 0,02. Calculando 1,96·σ/√N: P1: 1,96·0,5/42 ≈ 0,0233; P2: 1,96·0,4/28 = 0,0280; P3: 1,96·0,3/24 ≈ 0,0245; P4: 1,96·0,2/21 ≈ 0,0187; P5: 1,96·0,1/8 ≈ 0,0245. Apenas P4 fica abaixo de 0,02. Resposta: D.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 146,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Em um teleférico turístico, bondinhos saem de 
estações ao nível do mar e do topo de uma montanha. 
A travessia dura 1,5 minuto e ambos os bondinhos se 
deslocam à mesma velocidade. Quarenta segundos após 
o bondinho A partir da estação ao nível do mar, ele cruza 
com o bondinho B , que havia saído do topo da montanha. 
Quantos segundos após a partida do bondinho B partiu o 
bondinho A ?`,
    alternatives: [
      { id: 'A', type: 'text', value: `5` },
      { id: 'B', type: 'text', value: `10` },
      { id: 'C', type: 'text', value: `15` },
      { id: 'D', type: 'text', value: `20` },
      { id: 'E', type: 'text', value: `25` },
    ],
    correct: 'B',
    explanation: `Ambos percorrem a travessia (distância D) em 90 s à mesma velocidade v = D/90. Seja Δ o tempo entre a saída de B e a de A. O encontro ocorre 40 s após A sair; nesse instante A percorreu 40v e B já viajou (Δ + 40) s, estando a D − v·(Δ + 40) da origem de A. Igualando as posições: 40v = 90v − v·(Δ + 40) → 40 = 90 − Δ − 40 → Δ = 10 s. Resposta: B.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 147,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Num dia de tempestade, a alteração na profundidade 
de um rio, num determinado local, foi registrada durante 
um período de 4 horas. Os resultados estão indicados no 
gráfico de linhas. Nele, a profundidade h , registrada às 
13 horas, não foi anotada e, a partir de h , cada unidade 
sobre o eixo vertical representa um metro. 
Registro de profundidade 
Profundidade (m) 
Hora 
0 
13 
14 
15 
16 
17 
Foi informado que entre 15 horas e 16 horas, a 
profundidade do rio diminuiu em 10%. 
Às 16 horas, qual é a profundidade do rio, em metro, no 
local onde foram feitos os registros?`,
    images: ['/enem/2017/images/enem_2017_d2_q147.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `18` },
      { id: 'B', type: 'text', value: `20` },
      { id: 'C', type: 'text', value: `24` },
      { id: 'D', type: 'text', value: `36` },
      { id: 'E', type: 'text', value: `40` },
    ],
    correct: 'A',
    explanation: `Entre 15h e 16h a profundidade caiu 10% e, no gráfico, essa queda corresponde a 2 unidades (2 m). Assim, 10% do valor às 15h equivale a 2 m → valor às 15h = 20 m. Às 16h: 20 − 2 = 18 m. Resposta: A.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 148,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Uma rede hoteleira dispõe de cabanas simples na 
ilha de Gotland, na Suécia, conforme Figura 1. A estrutura 
de sustentação de cada uma dessas cabanas está 
representada na Figura 2. A ideia é permitir ao hóspede uma 
estada livre de tecnologia, mas conectada com a natureza. 
Figura 2 
ROMERO, L. Tendências. Superinteressante , n. 315, fev. 2013 (adaptado). 
A forma geométrica da superfície cujas arestas estão 
representadas na Figura 2 é`,
    images: ['/enem/2017/images/enem_2017_d2_q148.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `tetraedro.` },
      { id: 'B', type: 'text', value: `pirâmide retangular.` },
      { id: 'C', type: 'text', value: `tronco de pirâmide retangular.` },
      { id: 'D', type: 'text', value: `prisma quadrangular reto.` },
      { id: 'E', type: 'text', value: `prisma triangular reto.` },
    ],
    correct: 'E',
    explanation: `A superfície da Figura 2 tem duas faces triangulares paralelas e iguais ligadas por faces retangulares, com as arestas laterais perpendiculares às bases triangulares: é um prisma triangular reto. Resposta: E.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 149,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A figura ilustra uma partida de Campo Minado, o jogo 
presente em praticamente todo computador pessoal. 
Quatro quadrados em um tabuleiro 16 × 16 foram abertos, 
e os números em suas faces indicam quantos dos seus 
8 vizinhos contêm minas (a serem evitadas). O número 
40 no canto inferior direito é o número total de minas no 
tabuleiro, cujas posições foram escolhidas ao acaso, de 
forma uniforme, antes de se abrir qualquer quadrado. 
Em sua próxima jogada, o jogador deve escolher 
dentre os quadrados marcados com as letras P , Q , R , S 
e T um para abrir, sendo que deve escolher aquele com a 
menor probabilidade de conter uma mina. 
O jogador deverá abrir o quadrado marcado com a letra`,
    images: ['/enem/2017/images/enem_2017_d2_q149.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `P .` },
      { id: 'B', type: 'text', value: `Q .` },
      { id: 'C', type: 'text', value: `R .` },
      { id: 'D', type: 'text', value: `S .` },
      { id: 'E', type: 'text', value: `T .` },
    ],
    correct: 'B',
    explanation: `Cada quadrado com número n indica n minas entre seus 8 vizinhos; para um quadrado vizinho de uma pista, a probabilidade de ser mina é n/8. Assim: P (vizinho do 2) = 2/8 = 0,25; Q (vizinho do 1) = 1/8 ≈ 0,125; S (vizinho do 4) = 4/8 = 0,5; T (vizinho do 3) = 3/8 = 0,375. R, afastado das pistas, tem probabilidade ≈ 40/252 ≈ 0,16. A menor é a de Q. Resposta: B.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 150,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A imagem apresentada na figura é uma cópia em preto 
e branco da tela quadrada intitulada O peixe, de Marcos 
Pinto, que foi colocada em uma parede para exposição e 
fixada nos pontos A e B . 
Por um problema na fixação de um dos pontos, a tela 
se desprendeu, girando rente à parede. Após o giro, ela 
ficou posicionada como ilustrado na figura, formando um 
ângulo de 45° com a linha do horizonte. 
A 
B 
A 
B 
45 º 
Para recolocar a tela na sua posição original, deve-se 
girá-la, rente à parede, no menor ângulo possível inferior 
a 360°.  
A forma de recolocar a tela na posição original, obedecendo 
ao que foi estabelecido, é girando-a em um ângulo de`,
    images: ['/enem/2017/images/enem_2017_d2_q150_1.jpg', '/enem/2017/images/enem_2017_d2_q150_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `90° no sentido horário.` },
      { id: 'B', type: 'text', value: `135° no sentido horário.` },
      { id: 'C', type: 'text', value: `180° no sentido anti-horário.` },
      { id: 'D', type: 'text', value: `270° no sentido anti-horário.` },
      { id: 'E', type: 'text', value: `315° no sentido horário.` },
    ],
    correct: 'B',
    explanation: `Na posição original a tela está alinhada à parede (lados na vertical e na horizontal). Ao se soltar e girar rente à parede, ela ficou a 45° (como um losango). Comparando as posições dos pontos A e B antes e depois, a tela está girada 135° no sentido anti-horário em relação à original; logo, o menor giro que a recoloca na posição inicial é de 135° no sentido horário. Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 151,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A avaliação de rendimento de alunos de um curso 
universitário baseia-se na média ponderada das notas 
obtidas nas disciplinas pelos respectivos números de 
créditos, como mostra o quadro: 
 
Quanto melhor a avaliação de um aluno em 
determinado período letivo, maior sua prioridade na 
escolha de disciplinas para o período seguinte. 
Determinado aluno sabe que se obtiver avaliação 
“Bom” ou “Excelente” conseguirá matrícula nas disciplinas 
que deseja. Ele já realizou as provas de 4 das 5 disciplinas 
em que está matriculado, mas ainda não realizou a prova 
da disciplina I, conforme o quadro. 
 
Para que atinja seu objetivo, a nota mínima que ele deve 
conseguir na disciplina I é`,
    images: ['/enem/2017/images/enem_2017_d2_q151_1.jpg', '/enem/2017/images/enem_2017_d2_q151_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `7,00.` },
      { id: 'B', type: 'text', value: `7,38.` },
      { id: 'C', type: 'text', value: `7,50.` },
      { id: 'D', type: 'text', value: `8,25.` },
      { id: 'E', type: 'text', value: `9,00.` },
    ],
    correct: 'D',
    explanation: `Créditos: I = 12, II = 4, III = 8, IV = 8, V = 10 (total 42). Para ter avaliação 'Bom' precisa de média ≥ 7. Com nota x em I: (12x + 8·4 + 6·8 + 5·8 + 7,5·10)/42 ≥ 7 → (12x + 32 + 48 + 40 + 75)/42 ≥ 7 → 12x + 195 ≥ 294 → 12x ≥ 99 → x ≥ 8,25. Nota mínima = 8,25. Resposta: D.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Equações e inequações', 'Questões aleatórias'],
  },
  {
    id: 152,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A água para o abastecimento de um prédio é armazenada em um sistema formado por dois reservatórios idênticos, 
em formato de bloco retangular, ligados entre si por um cano igual ao cano de entrada, conforme ilustra a figura. 
Cano de 
entrada 
Reservatório 1 
Reservatório 2 
A água entra no sistema pelo cano de entrada no Reservatório 1 a uma vazão constante e, ao atingir o nível do 
cano de ligação, passa a abastecer o Reservatório 2. Suponha que, inicialmente, os dois reservatórios estejam vazios. 
Qual dos gráficos melhor descreverá a altura h do nível da água no Reservatório 1, em função do volume V de água 
no sistema? 
h`,
    images: ['/enem/2017/images/enem_2017_d2_q152.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'D',
    explanation: `No início só o Reservatório 1 enche: h cresce linearmente com V. Ao atingir o cano de ligação, a água passa a encher também o Reservatório 2 e h fica constante (patamar horizontal). Quando o Reservatório 2 também alcança o cano, os dois sobem juntos e h volta a crescer, porém mais devagar (cada volume adicionado se divide entre os dois reservatórios). O gráfico com subida, patamar e subida menos inclinada é o D. Resposta: D.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 153,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A manchete demonstra que o transporte de grandes 
cargas representa cada vez mais preocupação quando 
feito em vias urbanas. 
Caminhão entala em viaduto no Centro 
Um caminhão de grande porte entalou embaixo do 
viaduto no cruzamento das avenidas Borges de Medeiros 
e Loureiro da Silva no sentido Centro-Bairro, próximo à 
Ponte de Pedra, na capital. Esse veículo vinha de São 
Paulo para Porto Alegre e transportava três grandes 
tubos, conforme ilustrado na foto. 
Disponível em: www.caminhões-e-carretas.com. Acesso em: 21 maio 2012 (adaptado). 
Considere que o raio externo de cada cano da imagem 
seja 0,60 m e que eles estejam em cima de uma carroceria 
cuja parte superior está a 1,30 m do solo. O desenho 
representa a vista traseira do empilhamento dos canos. 
0,60 m 
A margem de segurança recomendada para que 
um veículo passe sob um viaduto é que a altura total do 
veículo com a carga seja, no mínimo, 0,50 m menor do 
que a altura do vão do viaduto. 
Considere 1,7 como aproximação para 
3 . 
Qual deveria ser a altura mínima do viaduto, em metro, 
para que esse caminhão pudesse passar com segurança 
sob seu vão?`,
    images: ['/enem/2017/images/enem_2017_d2_q153_1.jpg', '/enem/2017/images/enem_2017_d2_q153_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `2,82` },
      { id: 'B', type: 'text', value: `3,52` },
      { id: 'C', type: 'text', value: `3,70` },
      { id: 'D', type: 'text', value: `4,02` },
      { id: 'E', type: 'text', value: `4,20` },
    ],
    correct: 'D',
    explanation: `Os três canos (raio 0,60 m) empilham-se com dois embaixo e um em cima; os centros formam um triângulo equilátero de lado 2·0,60 = 1,20 m. Altura do empilhamento = raio inferior + distância entre os centros + raio superior = 0,60 + 0,60·√3 + 0,60 = 0,60·(2 + √3) ≈ 0,60·3,7 = 2,22 m. Com a carroceria a 1,30 m do solo, a carga vai até 1,30 + 2,22 = 3,52 m. A margem exige o vão 0,50 m maior: 3,52 + 0,50 = 4,02 m. Resposta: D.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 154,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Um menino acaba de se mudar para um novo bairro 
e deseja ir à padaria. Pediu ajuda a um amigo que 
lhe forneceu um mapa com pontos numerados, que 
representam cinco locais de interesse, entre os quais 
está a padaria. Além disso, o amigo passou as seguintes 
instruções: a partir do ponto em que você se encontra, 
representado pela letra X , ande para oeste, vire à direita 
na primeira rua que encontrar, siga em frente e vire à 
esquerda na próxima rua. A padaria estará logo a seguir. 
Rua`,
    images: ['/enem/2017/images/enem_2017_d2_q154.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Quadra 1 
Quadra 2 
Quadra 3 
Quadra 4 
2 
3 
1 
Rua` },
      { id: 'B', type: 'text', value: `Quadra 5 
Quadra 6 
Quadra 7 
Quadra 8 
N 
O 
L 
Rua` },
      { id: 'C', type: 'text', value: `X 
Quadra 9 
Quadra 10 
Quadra 11 
Quadra 12 
S 
4 
5 
Rua` },
      { id: 'D', type: 'text', value: `Rua 1 
Rua 2 
Rua 3 
Rua 4 
Rua 5 
Quadra 13 
Quadra 14 
Quadra 15 
Quadra 16 
Rua` },
      { id: 'E', type: 'text', value: `A padaria esta representada pelo ponto numerado com 
A 1. 
B 2. 
C 3. 
D 4. 
E 5.` },
    ],
    correct: 'A',
    explanation: `Partindo de X e andando para oeste, vira-se à direita (passando a ir para o norte) na primeira rua; segue-se em frente e vira-se à esquerda (voltando a ir para oeste) na próxima rua; logo à frente está a padaria, que corresponde ao ponto numerado com 1. Resposta: A.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 155,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Três alunos, X, Y e Z, estão matriculados em um curso 
de inglês. Para avaliar esses alunos, o professor optou por 
fazer cinco provas. Para que seja aprovado nesse curso, 
o aluno deverá ter a média aritmética das notas das cinco 
provas maior ou igual a 6. Na tabela, estão dispostas as 
notas que cada aluno tirou em cada prova. 
 
Com base nos dados da tabela e nas informações dadas, 
ficará(ão) reprovado(s)`,
    images: ['/enem/2017/images/enem_2017_d2_q155.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `apenas o aluno Y.` },
      { id: 'B', type: 'text', value: `apenas o aluno Z.` },
      { id: 'C', type: 'text', value: `apenas os alunos X e Y.` },
      { id: 'D', type: 'text', value: `apenas os alunos X e Z.` },
      { id: 'E', type: 'text', value: `os alunos X, Y e Z.` },
    ],
    correct: 'B',
    explanation: `Médias aritméticas: X = (5 + 5 + 5 + 10 + 6)/5 = 31/5 = 6,2; Y = (4 + 9 + 3 + 9 + 5)/5 = 30/5 = 6,0; Z = (5 + 5 + 8 + 5 + 6)/5 = 29/5 = 5,8. Apenas Z tem média menor que 6, ficando reprovado apenas o aluno Z. Resposta: B.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 156,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Uma desenhista projetista deverá desenhar uma 
tampa de panela em forma circular. Para realizar esse 
desenho, ela dispõe, no momento, de apenas um 
compasso, cujo comprimento das hastes é de 10 cm, um 
transferidor e uma folha de papel com um plano cartesiano. 
Para esboçar o desenho dessa tampa, ela afastou as 
hastes do compasso de forma que o ângulo formado por 
elas fosse de 120°. A ponta seca está representada pelo 
ponto C , a ponta do grafite está representada pelo ponto 
B e a cabeça do compasso está representada pelo ponto 
A conforme a figura.
Após concluir o desenho, ela o encaminha para o 
setor de produção. Ao receber o desenho com a indicação 
do raio da tampa, verificará em qual intervalo este se 
encontra e decidirá o tipo de material a ser utilizado na 
sua fabricação, de acordo com os dados. 
 
Considere 1,7 como aproximação para √3.
O tipo de material a ser utilizado pelo setor de
produção será`,
    images: ['/enem/2017/images/enem_2017_d2_q156_1.jpg', '/enem/2017/images/enem_2017_d2_q156_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },
    ],
    correct: 'D',
    explanation: `As hastes AC e AB medem 10 cm e formam 120° em A; a abertura CB (raio da tampa) é o lado oposto ao ângulo de 120°: CB = 2·10·sen(60°) = 20·(√3/2) = 10√3 ≈ 10·1,7 = 17 cm. Como 15 < 17 ≤ 21, o raio está no intervalo IV. Resposta: D.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Trigonometria', 'Questões aleatórias'],
  },
  {
    id: 157,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Uma pessoa ganhou uma pulseira formada por 
pérolas esféricas, na qual faltava uma das pérolas. A figura 
indica a posição em que estaria faltando esta pérola. 
Ela levou a joia a um joalheiro que verificou que a 
medida do diâmetro dessas pérolas era 4 milímetros. 
Em seu estoque, as pérolas do mesmo tipo e formato, 
disponíveis para reposição, tinham diâmetros iguais a: 
4,025 mm; 4,100 mm; 3,970 mm; 4,080 mm e 3,099 mm. 
O joalheiro então colocou na pulseira a pérola cujo 
diâmetro era o mais próximo do diâmetro das pérolas 
originais. 
A pérola colocada na pulseira pelo joalheiro tem diâmetro, 
em milímetro, igual a`,
    images: ['/enem/2017/images/enem_2017_d2_q157.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `3,099.` },
      { id: 'B', type: 'text', value: `3,970.` },
      { id: 'C', type: 'text', value: `4,025.` },
      { id: 'D', type: 'text', value: `4,080.` },
      { id: 'E', type: 'text', value: `4,100.` },
    ],
    correct: 'C',
    explanation: `Escolhe-se o diâmetro mais próximo de 4 mm. Diferenças em módulo: |4,025 − 4| = 0,025; |4,100 − 4| = 0,100; |3,970 − 4| = 0,030; |4,080 − 4| = 0,080; |3,099 − 4| = 0,901. A menor diferença é 0,025, da pérola de 4,025 mm. Resposta: C.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 158,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Em uma de suas viagens, um turista comprou uma 
lembrança de um dos monumentos que visitou. Na base 
do objeto há informações dizendo que se trata de uma 
peça em escala 1 : 400, e que seu volume é de 25 cm³ . 
O volume do monumento original, em metro cúbico, é de`,
    alternatives: [
      { id: 'A', type: 'text', value: `100.` },
      { id: 'B', type: 'text', value: `400.` },
      { id: 'C', type: 'text', value: `1 600.` },
      { id: 'D', type: 'text', value: `6 250.` },
      { id: 'E', type: 'text', value: `10 000.` },
    ],
    correct: 'C',
    explanation: `Na escala 1 : 400, comprimentos reais são 400 vezes maiores e volumes, 400³ vezes maiores. Volume real = 25·400³ cm³ = 25·64000000 = 1,6·10⁹ cm³. Como 1 m³ = 10⁶ cm³: 1,6·10⁹ / 10⁶ = 1600 m³. Resposta: C.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 159,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Uma bicicleta do tipo mountain bike tem uma coroa 
com 3 engrenagens e uma catraca com 6 engrenagens, 
que, combinadas entre si, determinam 18 marchas 
(número de engrenagens da coroa vezes o número de 
engrenagens da catraca). 
Os números de dentes das engrenagens das coroas 
e das catracas dessa bicicleta estão listados no quadro. 
 
Sabe-se que o número de voltas efetuadas pela 
roda traseira a cada pedalada é calculado dividindo-se a 
quantidade de dentes da coroa pela quantidade de dentes 
da catraca. 
Durante um passeio em uma bicicleta desse tipo, 
deseja-se fazer um percurso o mais devagar possível, 
escolhendo, para isso, uma das seguintes combinações 
de engrenagens (coroa x catraca): 
 
A combinação escolhida para realizar esse passeio da 
forma desejada é`,
    images: ['/enem/2017/images/enem_2017_d2_q159_1.jpg', '/enem/2017/images/enem_2017_d2_q159_2.jpg', '/enem/2017/images/enem_2017_d2_q159_3.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },
    ],
    correct: 'D',
    explanation: `O número de voltas por pedalada é (dentes da coroa)/(dentes da catraca); o percurso mais devagar tem a menor razão (menor coroa, maior catraca). I: 46/24 ≈ 1,92; II: 46/14 ≈ 3,29; III: 36/18 = 2,00; IV: 26/24 ≈ 1,08; V: 26/14 ≈ 1,86. A menor razão é a da combinação IV. Resposta: D.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 160,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `O comitê organizador da Copa do Mundo 2014 criou 
a logomarca da Copa, composta de uma figura plana e 
o slogan “Juntos num só ritmo”, com mãos que se unem 
formando a taça Fifa. Considere que o comitê organizador 
resolvesse utilizar todas as cores da bandeira nacional 
(verde, amarelo, azul e branco) para colorir a logomarca, 
de forma que regiões vizinhas tenham cores diferentes. 
Disponível em: www.pt.fifa.com. Acesso em: 19 nov. 2013 (adaptado). 
De quantas maneiras diferentes o comitê organizador da 
Copa poderia pintar a logomarca com as cores citadas?`,
    images: ['/enem/2017/images/enem_2017_d2_q160.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `15` },
      { id: 'B', type: 'text', value: `30` },
      { id: 'C', type: 'text', value: `108` },
      { id: 'D', type: 'text', value: `360` },
      { id: 'E', type: 'text', value: `972` },
    ],
    correct: 'E',
    explanation: `Colorindo as regiões de modo que vizinhas tenham cores diferentes, a primeira região admite 4 cores e cada região seguinte, adjacente às já coloridas, admite 3 cores. Para a configuração da logomarca: 4·3·3·3·3·3 = 4·3⁵ = 4·243 = 972. Resposta: E.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 161,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Viveiros 
de 
lagostas 
são 
construídos, 
por 
cooperativas locais de pescadores, em formato de 
prismas reto-retangulares, fixados ao solo e com telas 
flexíveis de mesma altura, capazes de suportar a 
corrosão marinha. Para cada viveiro a ser construído, 
a cooperativa utiliza integralmente 100 metros lineares 
dessa tela, que é usada apenas nas laterais. 
Nível do mar 
Y 
X 
Quais devem ser os valores de X e de Y , em metro, para 
que a área da base do viveiro seja máxima?`,
    images: ['/enem/2017/images/enem_2017_d2_q161.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 e 49` },
      { id: 'B', type: 'text', value: `1 e 99` },
      { id: 'C', type: 'text', value: `10 e 10` },
      { id: 'D', type: 'text', value: `25 e 25` },
      { id: 'E', type: 'text', value: `50 e 50` },
    ],
    correct: 'D',
    explanation: `A tela (100 m) cobre os quatro lados da base: 2·(X + Y) = 100 → X + Y = 50. A área A = X·Y = X·(50 − X) é uma parábola máxima no vértice X = 25, resultando Y = 25. Resposta: D.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Funções', 'Questões aleatórias'],
  },
  {
    id: 162,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `O fisiologista inglês Archibald Vivian Hill propôs, 
em seus estudos, que a velocidade v de contração de 
um músculo ao ser submetido a um peso p é dada pela 
equação ( p + a ) ( v + b ) = K , com a , b e K constantes. 
Um fisioterapeuta, com o intuito de maximizar o efeito 
benéfico dos exercícios que recomendaria a um de seus 
pacientes, quis estudar essa equação e a classificou 
desta forma: 
 
O fisioterapeuta analisou a dependência entre v e p 
na equação de Hill e a classificou de acordo com sua 
representação geométrica no plano cartesiano, utilizando 
o par de coordenadas ( p ; v ). Admita que K > 0. 
Disponível em: http://rspb.royalsocietypublishing.org. Acesso em: 14 jul. 2015 (adaptado). 
O gráfico da equação que o fisioterapeuta utilizou para 
maximizar o efeito dos exercícios é do tipo`,
    images: ['/enem/2017/images/enem_2017_d2_q162.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `semirreta oblíqua.` },
      { id: 'B', type: 'text', value: `semirreta horizontal.` },
      { id: 'C', type: 'text', value: `ramo de parábola.` },
      { id: 'D', type: 'text', value: `arco de circunferência.` },
      { id: 'E', type: 'text', value: `ramo de hipérbole.` },
    ],
    correct: 'E',
    explanation: `De (p + a)·(v + b) = K vem v = K/(p + a) − b, com K > 0. É uma relação do tipo v = K/(p + a) − b, cujo gráfico (no plano p ; v) é um ramo de hipérbole. Resposta: E.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 163,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Em um parque há dois mirantes de alturas distintas 
que são acessados por elevador panorâmico. O topo 
do mirante 1 é acessado pelo elevador 1, enquanto 
que o topo do mirante 2 é acessado pelo elevador 2. 
Eles encontram-se a uma distância possível de ser 
percorrida a pé, e entre os mirantes há um teleférico que 
os liga que pode ou não ser utilizado pelo visitante. 
Mirante 1 
Mirante 2 
O acesso aos elevadores tem os seguintes custos: 
• Subir pelo elevador 1: R$ 0,15; 
• Subir pelo elevador 2: R$ 1,80; 
• Descer pelo elevador 1: R$ 0,10; 
• Descer pelo elevador 2: R$ 2,30. 
O custo da passagem do teleférico partindo do topo 
do mirante 1 para o topo do mirante 2 é de R$ 2,00, e do 
topo do mirante 2 para o topo do mirante 1 é de R$ 2,50. 
Qual é o menor custo, em real, para uma pessoa visitar os 
topos dos dois mirantes e retornar ao solo?`,
    images: ['/enem/2017/images/enem_2017_d2_q163.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `2,25` },
      { id: 'B', type: 'text', value: `3,90` },
      { id: 'C', type: 'text', value: `4,35` },
      { id: 'D', type: 'text', value: `4,40` },
      { id: 'E', type: 'text', value: `4,45` },
    ],
    correct: 'C',
    explanation: `Menor custo para visitar os dois topos e voltar ao solo: subir pelo elevador 1 (0,15), descer pelo elevador 1 (0,10), subir pelo elevador 2 (1,80) e descer pelo elevador 2 (2,30): 0,15 + 0,10 + 1,80 + 2,30 = 4,35. As rotas que usam o teleférico custam 4,40 (subir elev. 2, teleférico 2→1, descer elev. 1) ou 4,45 (subir elev. 1, teleférico 1→2, descer elev. 2). O mínimo é 4,35. Resposta: C.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 164,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A mensagem digitada no celular, enquanto você 
dirige, tira a sua atenção e, por isso, deve ser evitada. 
Pesquisas mostram que um motorista que dirige um 
carro a uma velocidade constante percorre “às cegas” 
(isto é, sem ter visão da pista) uma distância proporcional 
ao tempo gasto ao olhar para o celular durante a digitação 
da mensagem. Considere que isso de fato aconteça. 
Suponha que dois motoristas ( X e Y ) dirigem com a mesma 
velocidade constante e digitam a mesma mensagem em 
seus celulares. Suponha, ainda, que o tempo gasto pelo 
motorista X olhando para seu celular enquanto digita a 
mensagem corresponde a 25% do tempo gasto pelo 
motorista Y para executar a mesma tarefa. 
Disponível em: http://g1.globo.com. Acesso em: 21 jul. 2012 (adaptado). 
A razão entre as distâncias percorridas às cegas por 
X e Y , nessa ordem, é igual a`,
    alternatives: [
      { id: 'A', type: 'text', value: `5 
4` },
      { id: 'B', type: 'text', value: `1 
4` },
      { id: 'C', type: 'text', value: `4 
3` },
      { id: 'D', type: 'text', value: `4 
1` },
      { id: 'E', type: 'text', value: `3 
4` },
    ],
    correct: 'B',
    explanation: `A distância percorrida às cegas é proporcional ao tempo olhando o celular. Como t_X = 25% de t_Y = (1/4)·t_Y, a razão das distâncias é d_X/d_Y = t_X/t_Y = 1/4. Resposta: B.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 165,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `O resultado de uma pesquisa eleitoral, sobre a 
preferência dos eleitores em relação a dois candidatos, 
foi representado por meio do Gráfico 1. 
70 
60 
Eleitores (%) 
50 
40 
30 
20 
10 
0 
A 
B 
Gráfico 1 
Candidato 
Ao ser divulgado esse resultado em jornal, o Gráfico 1 
foi cortado durante a diagramação, como mostra o Gráfico 2. 
70 
60 
Eleitores (%) 
50 
40 
30 
20 
A 
B 
Gráfico 2 
Candidato 
Apesar de os valores apresentados estarem corretos 
e a largura das colunas ser a mesma, muitos leitores 
criticaram o formato do Gráfico 2 impresso no jornal, 
alegando que houve prejuízo visual para o candidato B. 
A diferença entre as razões da altura da coluna B pela 
coluna A nos gráficos 1 e 2 é`,
    images: ['/enem/2017/images/enem_2017_d2_q165_1.jpg', '/enem/2017/images/enem_2017_d2_q165_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0` },
      { id: 'B', type: 'text', value: `1 
2` },
      { id: 'C', type: 'text', value: `1 
5` },
      { id: 'D', type: 'text', value: `2 
15` },
      { id: 'E', type: 'text', value: `8 
35` },
    ],
    correct: 'E',
    explanation: `Gráfico 1 (eixo a partir de 0): A = 70 e B = 30 → B/A = 30/70 = 3/7. Gráfico 2 (eixo a partir de 20): alturas visíveis A = 70 − 20 = 50 e B = 30 − 20 = 10 → B/A = 10/50 = 1/5. Diferença = 3/7 − 1/5 = 15/35 − 7/35 = 8/35. Resposta: E.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 166,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Um cientista, em seus estudos para modelar a 
pressão arterial de uma pessoa, utiliza uma função do 
tipo P ( t ) = A + Bcos ( kt ) em que A , B e K são constantes 
reais positivas e t representa a variável tempo, medida 
em segundo. Considere que um batimento cardíaco 
representa o intervalo de tempo entre duas sucessivas 
pressões máximas. 
Ao analisar um caso específico, o cientista obteve os dados: 
 
A função P ( t ) obtida, por este cientista, ao analisar o caso 
específico foi`,
    images: ['/enem/2017/images/enem_2017_d2_q166.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `P ( t ) = 99 + 21 cos (3 π t )` },
      { id: 'B', type: 'text', value: `P ( t ) = 78 + 42 cos (3 π t )` },
      { id: 'C', type: 'text', value: `P ( t ) = 99 + 21 cos (2 π t )` },
      { id: 'D', type: 'text', value: `P ( t ) = 99 + 21 cos ( t )` },
      { id: 'E', type: 'text', value: `P ( t ) = 78 + 42 cos ( t )` },
    ],
    correct: 'A',
    explanation: `Pressão máxima = A + B = 120 e pressão mínima = A − B = 78 → A = 99 e B = 21. Com 90 batimentos por minuto, o intervalo entre máximos (período) é 60/90 = 2/3 s; como o período de cos(kt) é 2π/k, temos 2π/k = 2/3 → k = 3π. Logo P(t) = 99 + 21·cos(3πt). Resposta: A.`,
    subject: ['mat'],
    topics: ['Trigonometria', 'Funções', 'Questões aleatórias'],
  },
  {
    id: 167,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Para decorar uma mesa de festa infantil, um chefe de 
cozinha usará um melão esférico com diâmetro medindo 
10 cm, o qual servirá de suporte para espetar diversos 
doces. Ele irá retirar uma calota esférica do melão, 
conforme ilustra a figura, e, para garantir a estabilidade 
deste suporte, dificultando que o melão role sobre a 
mesa, o chefe fará o corte de modo que o raio r da seção 
circular de corte seja de pelo menos 3 cm. Por outro lado, 
o chefe desejará dispor da maior área possível da região 
em que serão afixados os doces. 
Região onde serão 
afixados os doces 
O 
A 
B 
r 
A parte hachurada 
será apoiada 
na mesa 
h 
Calota a ser cortada 
e eliminada 
Para atingir todos os seus objetivos, o chefe deverá cortar 
a calota do melão numa altura h , em centímetro, igual a`,
    images: ['/enem/2017/images/enem_2017_d2_q167.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `5 − √91 / 2` },
      { id: 'B', type: 'text', value: `10 − √91` },
      { id: 'C', type: 'text', value: `1` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `5` },
    ],
    correct: 'C',
    explanation: `Esfera de raio R = 5. A seção circular do corte tem raio r com r² = h·(2R − h) = h·(10 − h), e exige-se r ≥ 3, isto é h·(10 − h) ≥ 9 → h² − 10h + 9 ≤ 0 → 1 ≤ h ≤ 9. A área da região dos doces (superfície restante = 4πR² − 2πR·h) é máxima quando h é mínimo. Logo h = 1 cm (que dá exatamente r = 3). Resposta: C.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 168,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A Igreja de São Francisco de Assis, obra arquitetônica modernista de Oscar Niemeyer, localizada na Lagoa da Pampulha, 
em Belo Horizonte, possui abóbadas parabólicas. A seta na Figura 1 ilustra uma das abobadas na entrada principal 
da capela. A Figura 2 fornece uma vista frontal desta abobada, com medidas hipotéticas para simplificar os cálculos. 
H metros 
Figura 1 
Figura 2 
Qual a medida da altura H, em metro, indicada na Figura 2?`,
    images: ['/enem/2017/images/enem_2017_d2_q168.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `16 
3` },
      { id: 'B', type: 'text', value: `31 
5` },
      { id: 'C', type: 'text', value: `25 
4` },
      { id: 'D', type: 'text', value: `25 
3` },
      { id: 'E', type: 'text', value: `75 
2` },
    ],
    correct: 'D',
    explanation: `Parábola com vértice no alto, y = H − a·x². Na base (y = 0) a largura é 5, então x = 2,5: H = a·2,5² = 6,25a. O retângulo interno tem largura 4 (x = 2) e altura 3, com os cantos superiores na parábola: 3 = H − a·2² = 6,25a − 4a = 2,25a → a = 4/3. Assim H = 6,25·(4/3) = 25/3 m. Resposta: D.`,
    subject: ['mat'],
    topics: ['Funções', 'Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 169,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Quanto tempo você fica conectado à internet? Para responder a essa pergunta foi criado um miniaplicativo de computador 
que roda na área de trabalho, para gerar automaticamente um gráfico de setores, mapeando o tempo que uma pessoa 
acessa cinco sites visitados. Em um computador, foi observado que houve um aumento significativo do tempo de acesso 
da sexta-feira para o sábado, nos cinco sites mais acessados. A seguir, temos os dados do miniaplicativo para esses dias. 
Tempo de acesso na sexta-feira (minuto) 
Tempo de acesso no sábado (minuto) 
Site X 
12 
Site U 
40 
Site Y 
30 
Site Z 
10 
Site W 
38 
Analisando os gráficos do computador, a maior taxa de aumento no tempo de acesso, da sexta-feira para o sábado, 
foi no site`,
    images: ['/enem/2017/images/enem_2017_d2_q169.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `X.` },
      { id: 'B', type: 'text', value: `Y.` },
      { id: 'C', type: 'text', value: `Z.` },
      { id: 'D', type: 'text', value: `W.` },
      { id: 'E', type: 'text', value: `U. 
4 metros 
3 metros 
5 metros 
Site X 
21 
Site U 
56 
Site Y 
51 
Site Z 
11 
Site W 
57` },
    ],
    correct: 'A',
    explanation: `Taxa de aumento = (sábado − sexta)/sexta: X: (21 − 12)/12 = 0,75; Y: (51 − 30)/30 = 0,70; Z: (11 − 10)/10 = 0,10; W: (57 − 38)/38 = 0,50; U: (56 − 40)/40 = 0,40. A maior taxa é a do site X. Resposta: A.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 170,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Neste modelo de termômetro, os filetes na cor preta 
registram as temperaturas mínima e máxima do dia anterior 
e os filetes na cor cinza registram a temperatura ambiente 
atual, ou seja, no momento da leitura do termômetro. 
− 30 
50 
− 20 
40 
− 10 
30 
0 
20 
10 
10 
0 
20 
− 10 
30 
− 20 
40 
− 30 
50 
Por isso ele tem duas colunas. Na da esquerda, os 
números estão em ordem crescente, de cima para baixo, 
de - 30 °C até 50 °C. Na coluna da direita, os números 
estão ordenados de forma crescente, de baixo para cima, 
de - 30 °C até 50 °C. 
A leitura é feita da seguinte maneira: 
• a temperatura mínima é indicada pelo nível inferior 
do filete preto na coluna da esquerda; 
• a temperatura máxima é indicada pelo nível inferior 
do filete preto na coluna da direita; 
• a temperatura atual é indicada pelo nível superior 
dos filetes cinza nas duas colunas. 
Disponível em: www.if.ufrgs.br. Acesso em: 28 ago. 2014 (adaptado). 
Qual é a temperatura máxima mais aproximada registrada 
nesse termômetro?`,
    images: ['/enem/2017/images/enem_2017_d2_q170.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `5 °C` },
      { id: 'B', type: 'text', value: `7 °C` },
      { id: 'C', type: 'text', value: `13 °C` },
      { id: 'D', type: 'text', value: `15 °C` },
      { id: 'E', type: 'text', value: `19 °C` },
    ],
    correct: 'E',
    explanation: `Na coluna da direita os números crescem de baixo para cima; a temperatura máxima é dada pelo nível inferior do filete preto dessa coluna. Esse nível situa-se um pouco acima de 15 °C, aproximadamente 19 °C. Resposta: E.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 171,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Pivô central é um sistema de irrigação muito usado 
na agricultura, em que uma área circular é projetada para 
receber uma estrutura suspensa. No centro dessa área, há 
uma tubulação vertical que transmite água através de um 
cano horizontal longo, apoiado em torres de sustentação, 
as quais giram, sobre rodas, em torno do centro do pivô, 
também chamado de base, conforme mostram as figuras. 
Cada torre move-se com velocidade constante. 
T1 
T2 
T3 
BASE 
Um pivô de três torres (T 1 , T 2 e T 3 ) será instalado 
em uma fazenda, sendo que as distâncias entre torres 
consecutivas bem como da base à torre T 1 são iguais a 
50 m. O fazendeiro pretende ajustar as velocidades das 
torres, de tal forma que o pivô efetue uma volta completa 
em 25 horas. Use 3 como aproximação para π . 
Para atingir seu objetivo, as velocidades das torres T 1 , T 2 
e T 3 devem ser, em metro por hora, de`,
    images: ['/enem/2017/images/enem_2017_d2_q171.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `12 , 24 e 36.` },
      { id: 'B', type: 'text', value: `6 , 12 e 18.` },
      { id: 'C', type: 'text', value: `2 , 4 e 6.` },
      { id: 'D', type: 'text', value: `300 , 1 200 e 2 700.` },
      { id: 'E', type: 'text', value: `600 , 2 400 e 5 400.` },
    ],
    correct: 'A',
    explanation: `As torres distam 50 m, 100 m e 150 m do centro. Em 25 h cada uma dá uma volta completa (comprimento 2πr, com π ≈ 3); v = 2πr/25. T1: 2·3·50/25 = 12; T2: 2·3·100/25 = 24; T3: 2·3·150/25 = 36 m/h. Resposta: A.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 172,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Dois reservatórios A e B são alimentados por bombas distintas por um período de 20 horas. A quantidade de água 
contida em cada reservatório nesse período pode ser visualizada na figura. 
Quantidade de água armazenada 
Volume (L) 
180 000 
170 000 
160 000 
150 000 
140 000 
Reservatório A 
130 000 
Reservatório B 
120 000 
Reservatório A 
110 000 
100 000 
90 000 
80 000 
70 000 
60 000 
50 000 
40 000 
30 000 
20 000 
10 000 
0 
0 
0 
1 
2 
3 
4 
5 
6 
7 
8 
9 
10 
11 
12 
13 
14 
15 
16 
17 
18 
19 
20 
Tempo (h) 
O número de horas em que os dois reservatórios contêm a mesma quantidade de água é`,
    images: ['/enem/2017/images/enem_2017_d2_q172.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `2.` },
      { id: 'C', type: 'text', value: `4.` },
      { id: 'D', type: 'text', value: `5.` },
      { id: 'E', type: 'text', value: `6.` },
    ],
    correct: 'A',
    explanation: `Comparam-se os volumes reais (Reservatório A na escala da esquerda e B na da direita, que diferem por um fator 2). Ambos partem vazios e, tanto no início quanto na subida final, A sempre contém mais água que B. A igualdade de quantidade ocorre em um único instante, t = 9 h, quando os dois têm 30000 L. Logo, é 1 hora. Resposta: A.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 173,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Para uma temporada das corridas de Fórmula 1, 
a capacidade do tanque de combustível de cada carro 
passou a ser de 100 kg de gasolina. Uma equipe 
optou por utilizar uma gasolina com densidade de 
750 gramas por litro, iniciando a corrida com o tanque cheio. 
Na primeira parada de reabastecimento, um carro dessa 
equipe apresentou um registro em seu computador de 
bordo acusando o consumo de quatro décimos da gasolina 
originalmente existente no tanque. Para minimizar o peso 
desse carro e garantir o término da corrida, a equipe de 
apoio reabasteceu o carro com a terça parte do que restou 
no tanque na chegada ao reabastecimento. 
Disponível em: www.superdanilof1page.com.br. Acesso em: 6 jul. 2015 (adaptado). 
A quantidade de gasolina utilizada, em litro, no 
reabastecimento foi`,
    alternatives: [
      { id: 'A', type: 'text', value: `20 
0 075 
,` },
      { id: 'B', type: 'text', value: `20 
0 75 
,` },
      { id: 'C', type: 'text', value: `20 
7 5 
,` },
      { id: 'D', type: 'text', value: `20 
0 075 
× ,` },
      { id: 'E', type: 'text', value: `20 
0 75 
× ,` },
    ],
    correct: 'B',
    explanation: `Tanque cheio = 100 kg. Consumo de 4/10 do original → restam 60 kg. Reabastece-se 1/3 do que restou: (1/3)·60 = 20 kg. Em litros, com densidade 750 g/L = 0,75 kg/L: 20/0,75 L. Resposta: B.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 174,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `O gráfico apresenta a taxa de desemprego (em %) 
para o período de março de 2008 a abril de 2009, 
obtida com base nos dados observados nas regiões 
metropolitanas de Recife, Salvador, Belo Horizonte, 
Rio de Janeiro, São Paulo e Porto Alegre. 
Taxa de desemprego (%) 
9,0 
8,6 
8,5 
8,9 
8,1 
8,2 
8,5 
7,7 
7,6 
7,9 
7,9 
7,6 
7,5 
6,8 
03/08 
04 
05 
06 
07 
08 
09 
10 
11 
12 
01/09 
02 
03 
04 
IBGE. Pesquisa mensal de emprego. Disponível em: www.ibge.gov.br. 
Acesso em: 30 jul. 2012 (adaptado). 
A mediana dessa taxa de desemprego, no período de 
março de 2008 a abril de 2009, foi de`,
    images: ['/enem/2017/images/enem_2017_d2_q174.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `8,1%` },
      { id: 'B', type: 'text', value: `8,0%` },
      { id: 'C', type: 'text', value: `7,9%` },
      { id: 'D', type: 'text', value: `7,7%` },
      { id: 'E', type: 'text', value: `7,6%` },
    ],
    correct: 'B',
    explanation: `São 14 valores. Em ordem crescente: 6,8; 7,5; 7,6; 7,6; 7,7; 7,9; 7,9; 8,1; 8,2; 8,5; 8,5; 8,6; 8,9; 9,0. A mediana é a média do 7º e 8º valores: (7,9 + 8,1)/2 = 8,0%. Resposta: B.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 175,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Numa avenida existem 10 semáforos. Por causa de 
uma pane no sistema, os semáforos ficaram sem controle 
durante uma hora, e fixaram suas luzes unicamente em 
verde ou vermelho. Os semáforos funcionam de forma 
independente; a probabilidade de acusar a cor verde é de 
2 
3 
 e a de acusar a cor vermelha é de 1 
3 
. Uma pessoa 
percorreu a pé toda essa avenida durante o período 
da pane, observando a cor da luz de cada um desses 
semáforos. 
Qual a probabilidade de que esta pessoa tenha observado 
exatamente um sinal na cor verde?`,
    alternatives: [
      { id: 'A', type: 'text', value: `(10 × 2) / 3^10` },
      { id: 'B', type: 'text', value: `(10 × 2^9) / 3^10` },
      { id: 'C', type: 'text', value: `2^10 / 3^100` },
      { id: 'D', type: 'text', value: `2^90 / 3^100` },
      { id: 'E', type: 'text', value: `2 / 3^10` },

    ],
    correct: 'A',
    explanation: `São 10 semáforos independentes, com P(verde) = 2/3 e P(vermelho) = 1/3. Exatamente um verde: C(10,1)·(2/3)¹·(1/3)⁹ = 10·(2/3)·(1/3⁹) = (10·2)/3¹⁰. Resposta: A.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 176,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `A energia solar vai abastecer parte da demanda de energia 
do campus de uma universidade brasileira. A instalação de 
painéis solares na área dos estacionamentos e na cobertura 
do hospital pediátrico será aproveitada nas instalações 
universitárias e também ligada na rede da companhia elétrica 
distribuidora de energia. 
O projeto inclui 100 m² de painéis solares que ficarão 
instalados nos estacionamentos, produzindo energia elétrica 
e proporcionando sombra para os carros. Sobre o hospital 
pediátrico serão colocados aproximadamente 300 m² de 
painéis, sendo 100 m² para gerar energia elétrica utilizada no 
campus , e 200 m² para geração de energia térmica, produzindo 
aquecimento de água utilizada nas caldeiras do hospital. 
Suponha que cada metro quadrado de painel solar 
para energia elétrica gere uma economia de 1 kWh por dia 
e cada metro quadrado produzindo energia térmica permita 
economizar 0,7 kWh por dia para a universidade. Em 
uma segunda fase do projeto, será aumentada em 75% 
a área coberta pelos painéis solares que geram energia 
elétrica. Nessa fase também deverá ser ampliada a área 
de cobertura com painéis para geração de energia térmica. 
Disponível em: http://agenciabrasil.ebc.com.br. Acesso em: 30 out. 2013 (adaptado). 
Para se obter o dobro da quantidade de energia 
economizada diariamente, em relação à primeira fase, 
a área total dos painéis que geram energia térmica, em 
metro quadrado, deverá ter o valor mais próximo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `231.` },
      { id: 'B', type: 'text', value: `431.` },
      { id: 'C', type: 'text', value: `472.` },
      { id: 'D', type: 'text', value: `523.` },
      { id: 'E', type: 'text', value: `672.` },
    ],
    correct: 'C',
    explanation: `1ª fase: energia elétrica em 200 m² (100 do estacionamento + 100 do hospital) e térmica em 200 m². Economia = 200·1 + 200·0,7 = 340 kWh/dia. 2ª fase: a área elétrica aumenta 75% → 350 m² → 350 kWh/dia. Para dobrar a economia (2·340 = 680 kWh/dia), a térmica deve economizar 680 − 350 = 330 kWh/dia → área = 330/0,7 ≈ 471,4, valor mais próximo de 472 m². Resposta: C.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Equações e inequações', 'Questões aleatórias'],
  },
  {
    id: 177,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Uma empresa construirá sua página na internet 
e espera atrair um público de aproximadamente um 
milhão de clientes. Para acessar essa página, será 
necessária uma senha com formato a ser definido pela 
empresa. Existem cinco opções de formato oferecidas 
pelo programador, descritas no quadro, em que “L” e “D” 
representam, respectivamente, letra maiúscula e dígito. 
 
As letras do alfabeto, entre as 26 possíveis, bem 
como os dígitos, entre os 10 possíveis, podem se repetir 
em qualquer das opções. 
A empresa quer escolher uma opção de formato cujo 
número de senhas distintas possíveis seja superior ao 
número esperado de clientes, mas que esse número não 
seja superior ao dobro do número esperado de clientes. 
A opção que mais se adequa às condições da empresa é`,
    images: ['/enem/2017/images/enem_2017_d2_q177.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },
    ],
    correct: 'E',
    explanation: `O número de senhas deve ser maior que 1000000 e no máximo 2000000 (L = 26 letras, D = 10 dígitos). I: 26·10⁵ = 2600000 (passa do dobro); II: 10⁶ = 1000000 (não supera 1 milhão); III: 26²·10⁴ ≈ 6760000; IV: 10⁵ = 100000; V: 26³·10² = 17576·100 = 1757600, que está entre 1000000 e 2000000. Resposta: E.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 178,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Como não são adeptos da prática de esportes, um 
grupo de amigos resolveu fazer um torneio de futebol 
utilizando videogame . Decidiram que cada jogador joga 
uma única vez com cada um dos outros jogadores. 
O campeão será aquele que conseguir o maior número de 
pontos. Observaram que o número de partidas jogadas 
depende do número de jogadores, como mostra o quadro:  
 
Se a quantidade de jogadores for 8, quantas partidas 
serão realizadas?`,
    images: ['/enem/2017/images/enem_2017_d2_q178.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `64` },
      { id: 'B', type: 'text', value: `56` },
      { id: 'C', type: 'text', value: `49` },
      { id: 'D', type: 'text', value: `36` },
      { id: 'E', type: 'text', value: `28` },
    ],
    correct: 'E',
    explanation: `Cada dupla de jogadores joga uma única vez: o número de partidas é a combinação de 8 jogadores 2 a 2 = C(8,2) = (8·7)/2 = 28. Resposta: E.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 179,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Um morador de uma região metropolitana tem 50% 
de probabilidade de atrasar-se para o trabalho quando 
chove na região; caso não chova, sua probabilidade de 
atraso é de 25%. Para um determinado dia, o serviço 
de meteorologia estima em 30% a probabilidade da 
ocorrência de chuva nessa região. 
Qual é a probabilidade de esse morador se atrasar para o 
serviço no dia para o qual foi dada a estimativa de chuva?`,
    alternatives: [
      { id: 'A', type: 'text', value: `0,075` },
      { id: 'B', type: 'text', value: `0,150` },
      { id: 'C', type: 'text', value: `0,325` },
      { id: 'D', type: 'text', value: `0,600` },
      { id: 'E', type: 'text', value: `0,800` },
    ],
    correct: 'C',
    explanation: `P(atraso) = P(chuva)·P(atraso|chuva) + P(sem chuva)·P(atraso|sem chuva) = 0,30·0,50 + 0,70·0,25 = 0,15 + 0,175 = 0,325. Resposta: C.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 180,
    exam: 'enem',
    year: 2017,
    day: 2,
    text: `Às 17 h 15 min começa uma forte chuva, que cai 
com intensidade constante. Uma piscina em forma 
de um paralelepípedo retângulo, que se encontrava 
inicialmente vazia, começa a acumular a água da chuva 
e, às 18 horas, o nível da água em seu interior alcança 
20 cm de altura. Nesse instante, é aberto o registro que 
libera o escoamento da água por um ralo localizado no 
fundo dessa piscina, cuja vazão é constante. Às 18 h 40 min 
a chuva cessa e, nesse exato instante, o nível da água na 
piscina baixou para 15 cm. 
O instante em que a água dessa piscina terminar de 
escoar completamente está compreendido entre`,
    alternatives: [
      { id: 'A', type: 'text', value: `19 h 30 min e 20 h 10 min.` },
      { id: 'B', type: 'text', value: `19 h 20 min e 19 h 30 min.` },
      { id: 'C', type: 'text', value: `19 h 10 min e 19 h 20 min.` },
      { id: 'D', type: 'text', value: `19 h e 19 h 10 min.` },
      { id: 'E', type: 'text', value: `18 h 40 min e 19 h.` },
    ],
    correct: 'D',
    explanation: `Chuva das 17h15 às 18h (45 min) enche 20 cm → taxa de chuva = 20/45 cm/min. De 18h a 18h40 (40 min), com chuva e ralo abertos, o nível cai de 20 para 15 cm → variação = −5/40 = −1/8 cm/min = (chuva − ralo). Logo ralo = 20/45 + 1/8 = 4/9 + 1/8 = 41/72 cm/min. A partir das 18h40 (15 cm), só há escoamento: tempo = 15 / (41/72) = 1080/41 ≈ 26,3 min, terminando por volta de 19h06. Está entre 19h e 19h10. Resposta: D.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
];

export default ENEM_2017_D2;
