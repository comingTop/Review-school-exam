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
    explanation: `A quantidade de pesticida consumida por cada rato é igual a: 1g de ração &#8212;&#8212;- 3mg de pesticida 100g &#8212;&#8212;&#8212;- 300 mg do pesticida &nbsp; A dose letal para cada rato de 200g é igual à dose letal por kg dividida por 5: Diazinon: 14 mg Malation: 200 mg Atrazina: 620 mg Logo, os ratos que ingeriram Malation e Diazinon consumiram mais do que a dose letal e tiveram mortalidade maior que 50% do grupo.`,
    subject: ['bio'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
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
    explanation: `Antibióticos são medicamentos que agem exclusivamente contra bactérias. Eles atuam inibindo a síntese de proteínas específicas de bactérias (por exemplo ribossomos) ou a produção de sua parede celular.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Pela Lei de Ohm: U = R eq x I total Análise gráfica: R eq = 1,0 V / 2,0&#215;10 -6 = 0,5&#215;10 6 ohms Porém, de acordo com o enunciado, a polianilina tem o valor de sua resistência elétrica nominal quadruplicada quando exposta a altas concentrações de amônia. Então, R eq = 4&#215;0,5&#215;10 6 = 2,0&#215;10 6 ohms`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Os cloroplastos necessitam da captação de fótons para excitar os elétrons da clorofila, durante a fotofosforilação. Os nanotubos aumentam a absorção luminosa (fótons) de comprimentos de onda normalmente não utilizados pelos cloroplastos, potencializando a fase fotoquímica da fotossíntese.`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
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
    explanation: `O produto secundário é obtido no pólo negativo, que na eletrólise é o catodo, onde ocorre redução do cátion com maior potencial de redução. Como o sódio se mantém na sua forma iônica, formando hidróxido de sódio, deduz-se que o H+ tem maior potencial de redução e se reduz segundo a semi-reação: 2 H + (aq) + 2 é → H₂ (g) , formando gás hidrogênio como produto secundário.`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `O nitrato utilizado como fertilizante é produzido biologicamente na nitratação, última etapa da nitrificação, que é uma reação de oxidação do nitrito.`,
    subject: ['bio'],
    topics: ['Agricultura e pecuária', 'Questões aleatórias'],
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
    explanation: `A água contendo sal de cozinha possui íons de sódio em solução. Ao receber energia térmica há excitação dos elétrons para uma órbita mais energética (camada mais externa). O retorno destes elétrons ao estado fundamental (de menor energia), neste elemento, emite energia luminosa com comprimento de onda correspondente à cor amarela.`,
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
    explanation: `Woese classificou os seres vivos em Domínios utilizando análise comparativa de RNA ribossômico (RNAr). Logo, por falar sobre “comparações de sequências que codificam”, a origem e relação evolutiva de sua classificação foi pautada nas relações filogenéticas.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
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
    explanation: `I = Fr x Dt O modelo de cinto que oferece menor risco é aquele que permite maior tempo de contato. De acordo com o gráfico, a curva que representa o maior tempo de contato é a 2.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
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
    explanation: `Plaquetas são responsáveis pela coagulação sanguínea. As plaquetas artificiais serão melhor empregadas para tratamento de doenças que atrapalham ou impedem a coagulação, como a hemofilia, gerando uma maior eficiência nesse processo.`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
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
    explanation: `ONDAS Procura-se a opção que fornece intensidades no espectro do visível, pois qualquer intensidade fora desse espectro só contribuirá para o aquecimento do ambiente.`,
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
    explanation: `A água, que é uma molécula polar, interage com o sal de amônio, que é um composto iônico, logo a interação é do tipo íon-dipolo.`,
    subject: ['qui'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
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
    explanation: `ONDAS Interpretação gráfica Para máxima distância, temos um intervalo de nível sonoro de 100dB &#8211; 10dB = 90dB, sem que o sinal seja retransmitido. De acordo com o gráfico, para uma distância máxima, verificamos que o menor valor de comprimento de onda é de 1,5 micrômetro o que equivale a uma perda óptica de 1dB/km. Logo, para um nível sonoro de 90dB, teremos uma máxima distância de 90km.`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
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
    explanation: `A velocidade de decaimento (de emissões) de uma amostra radioativa é proporcional à quantidade de átomos radioativos (C14, neste caso) contida na mesma. No fóssil temos: 30g &#8212;&gt; 6750 emissões/min = 112,5 emissões/min no fóssil Velocidade de decaimento: 30g &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;- 112,5 emissões/min 1g &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212; 3,75 emissões/min &nbsp; Velocidade de decaimento do ser vivo: Inicial : 15 emissões/min Após uma meia-vida: 7,5 emissões/min Após duas meias-vidas: 3,75 emissões/min Decorreram-se então 2 x 5.730 = 11.460 anos`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
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
    explanation: `TRANSFORMAÇÃO DE ENERGIA Sem energia eólica → Hidrogênio + biogás (olhar as opções) Olhando o esquema apresentado, percebe-se que o hidrogênio e o biogás ainda podem ser armazenado para geração de calor e eletricidade.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
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
    explanation: `Ao amanhecer, ocorrerá o aumento da temperatura, bem como a evaporação dos compostos mais voláteis, como é o caso de alguns óleos essenciais.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Analisando o gráfico e buscando um ponto em que a absorção de Oxi-hemoglobina e de água sejam zero, temos que o único ponto possível é o de 700 nm.`,
    subject: ['bio'],
    topics: ['Histologia básica (tecidos – leitura de figura)', 'Questões aleatórias'],
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
    explanation: `O gráfico que representa a situação deve ser dividido em 2 partes: antes e depois de h = 0. O lado direito (depois de h = 0), temos a seguinte conservação de energia: E mecânica = E cinética + E potencial gravitacional E cinética = E mecânica &#8211; mgh Olhando para essa equação, podemos entender que, com o aumento do valor da altura (h), teremos uma diminuição do valor da energia cinética de forma linear. O lado esquerdo (antes de h = 0), temos a seguinte conservação de energia: E mecânica = E cinética + E potencial gravitacional + E potencial elástica E cinética = E mecânica &#8211; mgh &#8211; kh²/2 (com x=h) Olhando para essa equação, podemos entender que, como temos uma equação do 2° com o valor de negativo do coeficiente angular, teremos uma parábola de concavidade para baixo. Conversão de energia potencial elástica em energia cinética. OBS: Velocidade não é máxima em h=0, mas no equilíbrio dinâmico quando Fel=P.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
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
    explanation: `A construção da barragem de uma hidrelétrica impede a piracema, encurtando o trajeto migratório dos peixes. Com isso, eles queimam menos gordura e reproduzem menos.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Ramo inferior composto pelo fio que contém o fusível: O fio que contém o fusível contém um resistor de resistência 120 ohm e está em paralelo com o fio de 60 ohms. Logo, o fio que contém o fusível tem metade da corrente circulando por ele em relação a corrente que circula pelo de 60 ohms. A corrente que divide por esse ramo inferior será a soma da corrente que circula pelo resistor de 120 ohms e da corrente que circula pelo resistor de 60 ohms, totalizando uma corrente de 1500 mA (1,5 A). Calculando a Req do ramo inferior: R eq = (120.60)/(120 + 60) + 40 = 80 ohms Pela lei de Ohm: U = R eq x i = 80 x 1,5 = 120 V`,
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
    explanation: `Os botos, por serem predadores de topo (último nível trófico da cadeia alimentar), acumulam mais poluentes não-biodegradáveis como o mercúrio (magnificação trófica).`,
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
    explanation: `Para uma mesma diferença de caminho, a interferência é construtiva, o que comprova que a fonte emitiu ambas as ondas com a mesma fase. Quando a diferença de caminho entre as duas, na segunda situação, é de 20 cm = 0,2 m, ocorre o primeiro mínimo de intensidade (primeiro mínimo de interferência). Para isso, a diferença de caminho tem que ser um número ímpar de meio comprimento de onda. Cabe ressaltar que a distância total percorrida no ramo da direita é 0,3 + 0,3 = 0,6 m e a distância total percorrida pela onda da esquerda é 0,4 + 0,4 = 0,8 m. Assim, matematicamente: ΔS entre as fontes =|(0,3 + 0,3) &#8211; (0,4 + 0,4)| = N ímpar λ/2, N = 1,3,5,&#8230; O primeiro mínimo corresponde a N = 1, logo 0,2 = λ/2 λ = 0,4 m Com o valor do comprimento de onda, podemos encontrar o valor do da frequência com a velocidade dada no enunciado, utilizando a equação fundamental da onda: f = 320/0,4 = 800 Hz.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
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
    explanation: `Na primeira separação ocorre adição de solvente apolar, então o óleo de linhaça vai para o extrato da fase orgânica que, ao sofrer destilação, por ter massa molecular elevada, é o Resíduo 4.`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
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
    explanation: `O biodiesel apresenta grupo carboxilato ligado a cadeia carbônica, constituindo a função orgânica éster.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
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
    explanation: `Forças em trajetórias curvilíneas Corpos com densidades diferentes, de acordo com as leis de Newton, terão acelerações diferentes.`,
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
    explanation: `A membrana tem composição lipoproteica e com estrutura baseada em um mosaico fluido, ou seja, as proteínas e lipídios não possuem posição fixa na membrana. A migração de proteínas na membrana decorre de sua fluidez. Como observado na figura, as proteínas marcadas se movimentaram ao longo da bicamada fosfolipídica.`,
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
    explanation: `Cada mulher apresenta dois cromossomos X, um deles se inativando formando o corpúsculo de Barr (ou cromatina sexual). Heterozigotas para DMD (XAXa) podem ter o XA inativado e manifestar a doença, ou sofrer inativação do Xa e apresentar fenótipo normal. A expressão de fenótipos distintos em mulheres heterozigotas para gene ligado ao sexo (cromossomo X) e gêmeas monozigóticas deve ser explicada pela inativação ao acaso de um de seus cromossomos X.`,
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
    explanation: `Para evitar a impermeabilização total do solo pelo concreto, o pisograma apresenta peças vazadas com grama, aumentando a infiltração da água no solo, diminuindo seu escoamento.`,
    subject: ['bio'],
    topics: ['Geopolítica', 'Questões aleatórias'],
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
    explanation: `O pka do lapachol indica caráter ácido. Para a extração deste composto necessita-se reagir com uma solução básica para formar um sal solúvel em água a ser extraído. A opção que apresenta solução básica é a de Na2CO3.`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Para que haja transporte da água no sentido contrário do fluxo natural de osmose, é preciso aplicar pressão mecânica no sentido aposto ao da pressão osmótica, passando água do compartimento de água salgada para o compartimento de água potável.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Comentário: O potencial gerado por pilhas conectadas em série é igual à soma dos potenciais das pilhas individuais, uma vez que estas estejam conectadas da maneira correta. O anodo de uma pilha deve estar conectado ao anodo da outra. As opções em que o anodo de uma pilha ao anodo da outra podem ser eliminadas. Restam as séries Ce-Zn + Cr2O7-Ni e Ce-Cr2O7 + Ni-Zn. Entre estas, a que produz o maior potencial é a primeira, cujas pilhas são do tipo Metal &#8211; Agente oxidante: 2 x (Ce4+ + é → Ce3+ Ered = +1,61 V) Zn → Zn2+ + 2 é Eoxi = +0,76 V &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8211; 2 Ce4+ Zn → 2 Ce3+ + Zn2+ ⧍E1 = E1 + E2 = 2,37 V &nbsp; Cr2O72- + 14 H+ + 6 é → 2 Cr3+ + 7 H2O Ered = +1,33 V 3 x (Ni → Ni2+ + 2 é Eoxi = +0,25 V) &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;- Cr2O72- + 14 H+ + 3 Ni → 2 Cr3+ + 3 Ni 2+ + 7 H2O ⧍E2 = Ered + Eoxi = +1,58 V &nbsp; ⧍Etotal = ⧍E1 + ⧍E2 = 3,95 V O potencial desta série de pilhas é maior que 3,6 V e, portanto, suficiente para acender o LED azul.`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Massa de AAS contida em 900.000 comprimidos: 1 comprimido &#8212;&#8212; 0,5 g 900.000 &#8212;&#8212;&#8212;&#8212; 450.000 g = 450 kg &nbsp; 1 mol do ácido salicílico &#8212;&#8211; 1 mol do AAS (100% de rendimento) 1 mol do ácido salicílico &#8212;&#8211; 0,5 mol do AAS (50% de rendimento) 138 g do ácido salicílico &#8212;&#8211; 0,5 x 180 g do AAS x &#8212;&#8212;&#8212;&#8212;&#8212;&#8211; 450 kg x = 690 kg`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
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
    explanation: `Plantas epífitas não causam prejuízos às outras plantas, pois o epifitismo é uma relação +/0. Por conta do formato de suas folhas, as bromélias captam a água da chuva, e não da planta onde ela está estabelecida.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
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
    explanation: `O calor de reação para a equação do FeO com o CO pode ser determinado pela Lei de Hess através das reações fornecidas, que seriam as etapas de uma equação global, da seguinte forma: &nbsp; Reação 1: Fe2O3 + 3 CO → 2 Fe + 3 CO₂ Reação 2: 3 FeO + CO₂ → Fe3O4 + CO Reação 3: 2 Fe3O4 + CO₂ → 3 Fe2O3 + CO &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;- Equação global: FeO + CO → Fe + CO₂ &nbsp; A reação 1 é dividida por 2 para equilibrar o Fe com a equação global; A reação 2 é dividida por 3 para equilibrar o FeO com a equação global; A reação 3 é dividida por 6 para que o Fe3O4 e o Fe2O3 sejam “cortados” pois não aparecem na equação global. Assim, o CO e o CO₂ ficarão ajustados como na equação global. As mesmas operações são aplicadas aos calores de reação para obter o ⧍H da equação global: ⧍H1/2 + ⧍H2/3 + ⧍H3/6 = (-25)/2 + (-36/3) + 47/6 = -17 kJ/mol`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
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
    explanation: `Citosina e Guanina se ligam através de três ligações de hidrogênio, enquanto Adenina e Timina se ligam através de duas ligações de hidrogênio. A molécula em questão sofrerá desnaturação mais facilmente devido ao maior número de pares A-T.`,
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
    explanation: `Apesar de o Xenônio ser um gás nobre e resistir à alteração da sua distribuição eletrônica, o flúor é capaz de deslocar seus elétrons e formar uma ligação, devido ao seu alto poder de atração de elétrons, ou seja, sua alta eletronegatividade.`,
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
    explanation: `Se o candidato usar a potência P = 6500W, fornecida no enunciado, iria dificultar a simplificação da razão das potências. Olhando no gráfico, para uma mesma vazão, a variação de temperatura para o chuveiro morno era de 12°C e o aquecido era de 32°C. Sabe-se que: E = P/Δt e lembrando que 1 min são 60 s, então: Morno: E = P/Δt = (3/60) x 4200 x 12 = 2520 J Aquecido: E = P/Δt = (3/60) x 4200 x 32 = 6720 J Logo, P morno / P aquecido = 2520 J / 6720 J = 3 / 8`,
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
    explanation: `A degeneração das células cônicas (cones), que são responsáveis pela identificação das cores, compromete a visão das cores.`,
    subject: ['bio'],
    topics: ['Histologia básica (tecidos – leitura de figura)', 'Questões aleatórias'],
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
    explanation: `A pessoa ao entrar em contato com a cerca elétrica forma um circuito tal que sua resistência corporal (R) está em série com a resistência interna (r’) do gerador cuja tensão é de U = 10.000 V. Pela primeira lei de Ohm, U = R eq .i, donde 1.10 4 = (r + 1.10³). 1.10 -2 r + 1.10³ = 1.10 6 = 1.10³.10³ r = (1.10³ -1)1.10³ = (1.10³ -1)R r = 999R r ≅ 1000R`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
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
    explanation: `Na cromatografia, as substâncias que são mais arrastadas pela fase móvel são as que possuem maior afinidade com o solvente da fase móvel e menor afinidade com a fase estacionária. Neste caso a fase estacionária é composta de água e celulose, polares e capazes de fazer ligações de hidrogênio. A substância mais retida é, portanto, a que possui as mesmas características e interage melhor com a fase estacionária: a mais polar e que apresenta mais hidroxilas.`,
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
    explanation: `O motorista atento começa a desacelerar com 5,00 m/s² a partir de 14 m/s. Usando a equação de Torricelli, 0 = 14²-2.5.ΔS 1 ΔS 1 = 19,6 m. No caso do motorista desatento, pode-se separar o movimento em duas partes: i) enquanto ainda acelera a 1,00 m/s² a partir de 14 m/s chegando a 15 m/s, o deslocamento nesse trecho será 15²= 14²-2.1.ΔS2’ ΔS2’ = 14,5 m, ii) a partir daí, freia à 5,00 m/s², percorrendo um deslocamento 0 = 15²-2.5.ΔS 2’’ ΔS 2’’ = 22,5m. Logo, o desatento percorre no total 22,5 m + 14,5 m = 37 m, percorrendo a mais que o atento 37 m &#8211; 19,6 m = 17,4 m.`,
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
    explanation: `A técnica de salgamento promove a formação de um ambiente hipertônico, que aumenta a pressão osmótica externa promovendo a desidratação das células.`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Para variar o fluxo magnético no interior da associação de espiras, podemos mudar o valor do campo magnético (B), da área (A), do ângulo de giro (teta) ou o número de espiras (N). Como a questão pedia o dobro da d.d.p. induzida, sem mudar a corrente de curto-circuito, além de dobrarmos o fluxo, devemos dobrar também a resistência do material. Isso pode acontecer através da mudança do material, do comprimento ou da área de seção do fio. A única opção que satisfaz as duas condições ao mesmo tempo é dobrar o número de espiras, o que dobra a d.d.p. e a resistência do material ao mesmo tempo, o que mantém a corrente inalterada.`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
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
    explanation: `A ozonólise provoca quebra da ligação dupla ligação entre carbonos, transformando os carbonos previamente ligados em carbonilas, produzindo o benzaldeído e a propanona. Ozonólise de carbonos primários e secundários produz aldeído, e de carbonos terciários, cetonas.`,
    subject: ['qui'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
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
    explanation: `Transfusões sanguíneas configuram transplante de células uma vez que o sangue é um tecido, e o indivíduo receptor receberá células/elementos figurados, como hemácias e leucócitos.`,
    subject: ['bio'],
    topics: ['Histologia básica (tecidos – leitura de figura)', 'Questões aleatórias'],
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
    explanation: `Para quitar a dívida na sexta parcela o valor a ser pago deve ser igual a P+P/(1+i%)+P/(1+i%)²= P(1+1/(1+i%)+1/(1+i%)²)`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
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
    explanation: `400 = ( 5 000.1,013^n.0,013) / (1,013^n-1) 400.(1,013^n &#8211; 1) = ( 5 000.1,013^n.0,013) 400.1,013^n &#8211; 400 = 65.1,013^n 400.1,013^n &#8211; 65.1,013^n = 400 335.1,013^n = 400 1,013^n = 400/335 , utilizando as informações do enunciado temos que: (10^0,005)^n = 10^(2,602) / 10^(2,525) (10^0,005)^n = 10^0,077 0,005 n = 0,077 n = 0,077/0,005 n = 15,4 logo n = 16`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `O valor máximo será quando x = 90º, então i = k.1= k Quando x = 30º, teremos i=k.(½)= k/2 Logo, a variação será de 50%`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `O móvel está em repouso nos instantes em que tem velocidade igual a zero.`,
    subject: ['mat'],
    topics: ['Cinemática', 'Questões aleatórias'],
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
    explanation: `Observe vista superior das taças organizadas sobre a bandeja. Os diâmetro das bases das taças mede 8cm. São quatro taças. Mais 1cm de distância entre a borda da taça e a extremidade da base da mesma. Logo, a área é dada por: A = 8x(8&#215;4+6) = 304`,
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
    explanation: `Usando dois terços do volume embalagem de polpa morango gastam &#8211; se 2 3 x 18 = 12 reais mais um terço do volume da embalagem da polpa de acerola, ⅓ x 14,70 = 4,90 totalizando um custo de 16,90. Com o aumento de preço da polpa de acerola em 60 centavos, o custo total desta parte muda para: ⅓ x 15,30 = 5,10 Mantendo o preço total em 15,90, o preço gasto com morango será de: 16,90 &#8211; 5,10 = 11,80. Porém, esse preço representa ⅔ x = 11,80 e por isso x = 17,70. Logo, a diminuição é de R$ 0,30.`,
    subject: ['mat'],
    topics: ['Química Geral', 'Questões aleatórias'],
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
    explanation: `A caixa que dar a menor diferença volumétrica em relação ao objeto cúbico citado é a de número 3.`,
    subject: ['mat'],
    topics: ['Química Geral', 'Questões aleatórias'],
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
    explanation: `Como todo caminhão cegonha deve ter pelo menos 1 carrinho de cada cor, é necessário colorir os 6 carrinhos restantes com as cores disponíveis. Isso pode ser feito de: 9!/(6!3!) = C9,3`,
    subject: ['mat'],
    topics: ['Química Geral', 'Questões aleatórias'],
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
    explanation: `De acordo com o enunciado temos que o volume de água na piscina é igual a: V = 5.3.1,2 = 15.1,2 = 18 m³ = 18 000 l Logo, a quantidade de produto será: (18 000.1,5) / 1 000 = 27 ml`,
    subject: ['mat'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
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
    explanation: `a margem de erro: é calculada por : p1=0,5/42 .1,96.100 = 2,15% p2=0,4/28.1,96.100 = 2,7% p3=0,3/24.1,96.100= 2,45% p4=0,2/21.1,96.100 = 1,76%`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Tt=90 segundos. Ta = tb =40 segundos. Como eles se encontraram e faltam 50 segundos para a encontrar B, então B partiu 10 segundos depois do bondinho A .`,
    subject: ['mat'],
    topics: ['Cinemática', 'Questões aleatórias'],
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
    explanation: `Às 15h temos P=10k e ás 16h P=9k(redução de 10%) como k =2m então ás 16h temos p=18`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Como a figura 2 possui faces opostas paralelas e iguais e base triangular, sua representação é dada por um prisma triangular reto.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `[a probabilidade da bomba estar no ponto P ]= 4/28 = 1/7 e [a probabilidade dele não estar]= 6/7 [a probabilidade da bomba estar no ponto Q]=1/8 e [ a probabilidade de ele não estar ] = 7/8 [a probabilidade da bomba estar no ponto S]=35/70=1/2 e [a probabilidade de ele não estar]=35/70=1/2 [a probabilidade da bomba estar no ponto T]=21/56=3/8 e [a probabilidade de ele não estar]=5/8 [a probabilidade da bomba estar no ponto R]=30/220=3/22 e [a probabilidade de ele não estar]=19/22 &nbsp; Como 7/8&gt;19/22&gt;6/7&gt;5/8&gt;1/2. Q&gt;R&gt;P&gt;T&gt;S Então o quadrado aberto será com a letra Q.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
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
    explanation: `Observando a figura, para retornar a posição original, girando-a no sentido horário o ângulo será de: 45º +90º = 135º.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Calculando a média ponderada temos que: M = (12.x + 4.8 + 8.6 + 8.5 + 10.7,5) / 42 M = (12x + 32 + 48 + 40 + 75) / 42 Para atingir o objetivo M = 7 7 = (12x + 195) /42 12x = 294 &#8211; 195 x = 99/12 x = 8,25`,
    subject: ['mat'],
    topics: ['Óptica', 'Questões aleatórias'],
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
    explanation: `Como o reservatório 1 é um prisma então seu crescimento até o nível do cano de ligação é uma função linear. Durante a passagem pelo cano de ligação até o preenchimento do reservatório 2 temos uma função constante. Após a passagem pelo cano de ligação, o reservatório 1 e o reservatório 2 crescem de forma linear com inclinação inferior a do primeiro instante.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
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
    explanation: `Altura mínima do viaduto H = r+r+h1+h2+h3 Onde: h1=altura do triângulo equilátero formado pela ligação dos centros das circunferências h2=altura do solo até a carroceria. h3=distância do viaduto ao topo do veículo &nbsp; H=0,6+0,6+0,6.1,7+0,5 = 4,02`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Seguindo a oeste, virando à primeira rua à direita, seguindo em frente, virando à primeira rua à esquerda, encontramos a padaria situada no ponto 1.`,
    subject: ['mat'],
    topics: ['Cartografia', 'Questões aleatórias'],
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
    explanation: `Como a média para a reprovação é menor que 6 então: a média do aluno X=31/5=6,2 a média do aluno Y=30/5=6 a média do aluno Z = 29/5=5,8 Logo temos que o aluno Z foi reprovado.`,
    subject: ['mat'],
    topics: ['Química Geral', 'Questões aleatórias'],
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
    explanation: `Utilizando lei dos cossenos no triângulo ABC: BC²=10²+10²-2.10.10.COS120º BC=10.1,7 BC=17`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `A pérola com o diâmetro mais próximo de 4mm será a de diâmetro 4,025 pois: 4,025-4 = 0,025 4-3,970= 0,030 4-3,099=0,901 4,080-4=0,080 4,100-4=0,1`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Como a escala é 1/400 e o volume 25cm³ então devemos utilizar (1/400)³. Por regra de três temos que o volume real é de 400³.25=1600000cm³ ou 1600m³`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
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
    explanation: `Devemos buscar a menor razão. Logo a IV que é 26/24=1,08 é o valor procurado`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Sejam A, B, C, D, E e F as 6 regiões da logomarca, como mostrado na figura. O número de colorações possíveis, com no máximo 4 cores, é 4 ⋅ 3 ⋅ 3 ⋅ 3 ⋅ 3 ⋅ 3 = 972; com exatamente 3 cores é : C (4,3) x 3 ⋅ 2 ⋅ 2 ⋅ 2 ⋅ 2 ⋅ 2 = 384 com exatamente 2 cores: C(4,2) x 2 ⋅ 1 ⋅ 1 ⋅ 1 ⋅ 1 ⋅ 1 = 12 e, com uma cor, é impossível. Pelo Princípio da Inclusão-Exclusão, o número de maneiras de pintar usando todas as cores é 972 − 384 + 12 = 600 Observação: no enunciado, caso o comitê resolvesse utilizar no máximo as quatro cores da bandeira nacional, a alternativa correta seria a E, 4 ⋅ 3 ⋅ 3 ⋅ 3 ⋅ 3 ⋅ 3 = 972.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `O perímetro vale 100, ou seja, 2x+2y=100, logo x+y=50. A área A=x.y. Fazendo y=50-x temos que a A=x(50-x)= -x²+50x. Calculando o x do vértice temos -50/-2=25. Assim x=25 e y=25`,
    subject: ['mat'],
    topics: ['Geopolítica', 'Questões aleatórias'],
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
    explanation: `(p+a).(v+b)=k Onde a, b e k são constantes. Temos uma associação com as grandezas inversamente proporcionais y.x=k Logo seu gráfico será dado por um ramo de hipérbole. &nbsp;`,
    subject: ['mat'],
    topics: ['Cinemática', 'Questões aleatórias'],
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
    explanation: `O menor custo será dado por: subir no elevador 1= 0,15 descer no elevador 1= 0,10 subir no elevador 2= 1,80 descer no elevador 2= 2,30 &nbsp; Cujo custo será de R$4,35.`,
    subject: ['mat'],
    topics: ['Genética', 'Questões aleatórias'],
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
    explanation: `D1/D2 = v.t1/v.t2 = v.0,25t2/v.t2 = 0,25 = 1/4`,
    subject: ['mat'],
    topics: ['Cinemática', 'Questões aleatórias'],
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
    explanation: `No primeiro gráfico temos uma relação b/a de 30 para 70, considerando que a cada espaço vale 10, ou seja 3/7. No segundo gráfico temos 1/5. logo 3/7-⅕ =8/35`,
    subject: ['mat'],
    topics: ['Genética', 'Questões aleatórias'],
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
    explanation: `Substituindo o cosseno de cada opção por 1 e -1, percebemos que as opções compatíveis com os valores de máximo e mínimos apresentados são letra a, c ou d. Como são 90 batimentos a cada 60 segundos temos, 2/3 de batimentos por segundo. Como o enunciado diz que o tempo entre dois valores máximos é o tempo de 1 batimento percebemos que o período deve ser igual a 2/3. Numa função trigonométrica p = 2 / |k|, por isso 2/3 = 2 / |k|, concluindo que c = 3.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Observando o triângulo pitagórico OAB, temos OA=4 logo: h+4=5 h=1`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Temos que a equação da parábola pode ser dada por: y=a(x+5).(x-5) y=a(x²-25) &nbsp; Substituindo o ponto (4,3) na equação temos que: 3=a(16-25) 3=a(-9) logo a=-1/3 &nbsp; Então a equação y=-x²/3+25/3 &nbsp; Como yv=c temos que: yv=25/3`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Considere as taxas de aumento de cada um dos sites: X: 9/12 =0,75 Y:21/30=0,7 Z:1/10=0,1 W:19/38= 0,5 U:16/40 = 0,4 &nbsp; Logo a maior taxa de aumento é a do site X.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Como a temperatura máxima é indicada pelo nível inferior do filete preto na coluna da direita, o valor mais próximo da máxima registrada é 19Cº.`,
    subject: ['mat'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
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
    explanation: `Considerando a torre T1, temos 2 πr=2.3.50=300 metros em 25 horas Logo v=300/25 = 12m/h`,
    subject: ['mat'],
    topics: ['Cinemática', 'Questões aleatórias'],
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
    explanation: `Comparando os valores dos volumes dos reservatórios A e B mostrados nos eixos y, que estão em uma razão de 1/2,, apenas o valor de 30000 está com a mesma quantidade de água no mesmo instante de tempo entre 8 e 9.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
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
    explanation: `A quantidade de gasolina é igual a: (1/3).0,6.(100000/750) = 20 / 0,75`,
    subject: ['mat'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
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
    explanation: `Observando que existem 14 taxas de desempregos, a mediana será dada pela média entre a 7ª e 8ª taxa, colocando em ordem crescente a mediana será: (7,9%+8,1%) / 2 = 8%`,
    subject: ['mat'],
    topics: ['Química Geral', 'Questões aleatórias'],
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
    explanation: `Considerando as probabilidades: (probabilidade de ser verde) = 2/3 (probabilidade de ser vermelho)=1/3 como são 10 casos, para os casos favoráveis temos a probabilidade de extamente um sinal verde é : 2/3 .(1/3(sub)10(/sub)) .10 porque percebemos que permutam as 10 posições logo 10.2/(3(sub)10(/sub))`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
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
    explanation: `No projeto inicial teremos as seguintes economias: &nbsp; 200 m² painéis solares à economia = 200 . 1 kWh = 200 kWh 200 m² energia térmica à economia = 200. 0,7 kWh = 140 kWh &nbsp; Totalizando, assim, uma economia de 200 + 140 = 340 kWh, no projeto inicial. &nbsp; Na 2ª fase do projeto, temos que a economia da energia elétrica será aumentada em 75%, isto é, Energia elétrica à 200 . 1,75 = 350 kWh &nbsp; Para se obter o dobro da quantidade de energia economizada diariamente em relação ao projeto inicial, ou seja, 2 . 340 = 680 kWh, a energia térmica será então: Energia térmica = 680 – 350 = 330 kWh Pelo enunciado sabe-se que 1 m² equivale a 0,7 kWh, então 330 kWh, equivalerá a: 330/0,7 ≈ 472 m²`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
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
    explanation: `O número de senhas para cada modelo de senha é: I &#8211; 26.10.10.10.10.10 = 26 . 10^5 II &#8211; 10.10.10.10.10.10 = 10^6 III &#8211; 26.26.10.10.10.10 = 26².10^4 IV &#8211; 10.10.10.10.10 = 10^5 V &#8211; 26.26.26.10.10 = 26³.10² Calculando cada valor o que se enquadra nas restrições feitas é a opção V.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `Para criar uma partida precisamos selecionar 2 jogadores entre 8 possíveis. Como a ordem de seleção dos jogadores não alteram a partida formada usaremos a combinação: C8,2 = 28.`,
    subject: ['mat'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
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
    explanation: `CHOVER E ATRASAR OU NÃO CHOVER E ATRASAR 30% x 50% + 70% x 25% = 32,5%`,
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
    explanation: `Apenas chuva 20 cm / 45 min = 4 cm/ 9 min Chuva &#8211; ralo (4/9) &#8211; R = -5/40 Ralo = 4/9 + ⅛ = 41/72 (41/72).t = 15 t = 26 18h40 min + 26 min = 19 h 6 min`,
    subject: ['mat'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
];

export default ENEM_2017_D2;
