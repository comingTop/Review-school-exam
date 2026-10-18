import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2023_D2: QuizQuestion[] = [
  {
    id: 91,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O número de abelhas encontra-se em declínio em 
várias regiões do mundo, inclusive no Brasil, sendo 
que vários fatores contribuem para o colapso de suas 
colmeias. Nos Estados Unidos, bombas de sementes 
de espécies vegetais nativas têm sido utilizadas para 
combater o desaparecimento desses insetos. Elas são 
pequenas bolinhas recheadas com sementes, adubo e 
argila. Quando são arremessadas e ficam expostas ao 
sol e à chuva, germinam até mesmo em solo pouco fértil. 
DARAYA, V. Disponível em: http://planetasustentavel.abril.com.br. 
Acesso em: 2 fev. 2015 (adaptado). 
Esse método contribui para a preservação das abelhas 
porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `reduz sua predação.` },
      { id: 'B', type: 'text', value: `reduz o uso de pesticidas.` },
      { id: 'C', type: 'text', value: `reduz a competição por abrigo.` },
      { id: 'D', type: 'text', value: `aumenta a oferta de alimento.` },
      { id: 'E', type: 'text', value: `aumenta os locais de reprodução.` },
    ],
    correct: 'D',
    explanation: `As bombas de sementes contêm sementes de espécies vegetais nativas que, ao germinarem, dão origem a plantas floríferas. As flores produzem néctar e pólen, que são as principais fontes de alimento das abelhas. Assim, ao promover o surgimento de vegetação nativa, o método aumenta a disponibilidade de recursos alimentares para esses insetos, favorecendo a manutenção e o reforço das colmeias. Por isso o método contribui para a preservação das abelhas porque aumenta a oferta de alimento (alternativa D).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 92,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Os mais antigos cozinhavam o feijão na panela de ferro a 
fim de acabar com a palidez de seus filhos. Alguns chegavam 
até a colocar um prego enferrujado nesse cozimento para 
liberar o ferro contido nele. Sabe-se que esse elemento 
pode ser encontrado na sua forma metálica ou iônica, 
sendo essencial para a manutenção da vida humana. 
As estratégias citadas eram utilizadas com o objetivo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `tratar a diarreia.` },
      { id: 'B', type: 'text', value: `prevenir a anemia.` },
      { id: 'C', type: 'text', value: `evitar as verminoses.` },
      { id: 'D', type: 'text', value: `remediar o raquitismo.` },
      { id: 'E', type: 'text', value: `combater a febre amarela.` },
    ],
    correct: 'B',
    explanation: `O ferro é um elemento essencial à vida humana porque participa da formação da hemoglobina, proteína das hemácias responsável pelo transporte de oxigênio. Ao cozinhar o feijão em panela de ferro ou com um prego enferrujado, parte do ferro é liberada para o alimento na forma iônica, sendo então ingerida. A ingestão desse ferro supre a necessidade do organismo e evita a 'palidez', sinal clássico de anemia ferropriva. Logo, a estratégia tinha o objetivo de prevenir a anemia (alternativa B).`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 93,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A utilização de tecnologia nuclear é um tema 
bastante controverso, por causa do risco de acidentes 
graves, como aqueles ocorridos em Chernobyl (1986), 
em Goiânia (1987) e em Fukushima (2011). Apesar de 
muitas desvantagens, como a geração de resíduos 
tóxicos, a descontaminação ambiental dispendiosa em 
caso de acidentes e a utilização em armas nucleares, 
a geração de energia nuclear apresenta vantagens em 
comparação a outras fontes de energia. 
A geração dessa energia tem como característica:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Formar resíduos facilmente recicláveis.` },
      { id: 'B', type: 'text', value: `Promover o aumento do desmatamento.` },
      { id: 'C', type: 'text', value: `Contribuir para a produção de chuva ácida.` },
      { id: 'D', type: 'text', value: `Emitir gases tóxicos que são lançados no ambiente.` },
      { id: 'E', type: 'text', value: `Produzir calor sem o consumo de combustíveis fósseis.` },
    ],
    correct: 'E',
    explanation: `A energia nuclear é gerada pela fissão de núcleos atômicos (como os de urânio), processo que libera grande quantidade de calor sem queima de combustíveis fósseis. Esse calor aquece a água, gera vapor e movimenta turbinas acopladas a geradores. Diferentemente das termelétricas a combustível fóssil, não há emissão de gases como CO₂ ou SO₂, de modo que não contribui para chuva ácida nem lança gases tóxicos de combustão na atmosfera. Portanto, a característica dessa geração é produzir calor sem o consumo de combustíveis fósseis (alternativa E).`,
    subject: ['fis'],
    topics: ['Física moderna', 'Questões aleatórias'],
  },
  {
    id: 94,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Em uma indústria, o controle da dureza da água é 
importante quando ela é utilizada em caldeiras, uma vez 
que sais pouco solúveis, formados a partir de sulfatos e 
carbonatos, podem acumular-se no interior das tubulações, 
causando obstruções. Para avaliar a água utilizada nessa 
indústria, foram realizados testes de qualidade que 
consideraram os seguintes parâmetros: 
 
Qual teste deve ser considerado para controlar a 
formação desse tipo de obstrução de tubulações?`,
    images: ['/enem/2023/images/enem_2023_d2_q94.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `5` },
    ],
    correct: 'A',
    explanation: `As obstruções nas tubulações decorrem da deposição de sais pouco solúveis formados por cátions como Ca²⁺ e Mg²⁺ combinados a sulfatos e carbonatos, o que caracteriza a chamada dureza da água. Para evitar a formação dessas incrustações, é preciso monitorar justamente o parâmetro que mede o teor desses íons, ou seja, o teste de dureza. Entre os testes de qualidade apresentados, esse corresponde ao parâmetro 1. Assim, o teste a ser considerado para controlar a formação desse tipo de obstrução é o 1 (alternativa A).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 95,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `As aves apresentam dois tipos de músculos em seus 
corpos: vermelhos e brancos. Aves migratórias como garças, 
gansos e patos selvagens têm os músculos vermelhos bem 
desenvolvidos, com ampla rede de vasos sanguíneos. 
Nas viagens por grandes distâncias, tais músculos são 
fundamentais, pois favorecem o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `execução de manobras.` },
      { id: 'B', type: 'text', value: `metabolismo corpóreo elevado.` },
      { id: 'C', type: 'text', value: `manutenção da aerodinâmica.` },
      { id: 'D', type: 'text', value: `deslocamento a grandes velocidades.` },
      { id: 'E', type: 'text', value: `capacidade de voo em grandes altitudes.` },
    ],
    correct: 'B',
    explanation: `Os músculos vermelhos são ricos em mioglobina e em vasos sanguíneos, o que garante amplo suprimento de oxigênio para a respiração celular aeróbica. Esse tipo de musculatura sustenta contrações contínuas por longos períodos, exatamente o que é exigido no voo migratório de grandes distâncias. A ampla rede vascular e a alta oferta de O₂ permitem elevada produção de ATP de forma sustentada, ou seja, um metabolismo corpóreo elevado. Por isso tais músculos favorecem o metabolismo corpóreo elevado (alternativa B).`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 96,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Existe no comércio um produto antimofo constituído por 
uma embalagem com tampa perfurada contendo cloreto 
de cálcio anidro, CaCl 2 . Uma vez aberto o lacre, essa 
substância absorve a umidade ambiente, transformando-se 
em cloreto de cálcio di-hidratado, CaCl 2 ⋅ 2H 2 O. 
Considere a massa molar da água igual a 18 g mol −1 , e a 
massa molar do cloreto de cálcio anidro igual a 111 g mol −1 . 
Na hidratação da substância presente no antimofo, o 
ganho percentual, em massa, é mais próximo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `14%` },
      { id: 'B', type: 'text', value: `16%` },
      { id: 'C', type: 'text', value: `24%` },
      { id: 'D', type: 'text', value: `32%` },
      { id: 'E', type: 'text', value: `75%` },
    ],
    correct: 'D',
    explanation: `Na hidratação, cada mol de CaCl₂ anidro (111 g) incorpora 2 mol de água (2 × 18 = 36 g), passando a CaCl₂·2H₂O. O ganho de massa corresponde à massa de água incorporada, 36 g por mol de sal. O ganho percentual é dado por (36 / 111) × 100 ≈ 32,4%. Esse valor é mais próximo de 32% (alternativa D).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 97,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um garoto comprou vários abacates na feira, mas 
descobriu que eles não estavam maduros o suficiente 
para serem consumidos. Sua mãe recomendou que 
ele colocasse os abacates em um recipiente fechado, 
pois isso aceleraria seu amadurecimento. Com certa 
dúvida, o garoto realizou esta experiência: colocou 
alguns abacates no recipiente e deixou os demais em 
uma fruteira aberta. Surpreendendo-se, ele percebeu 
que os frutos que estavam no recipiente fechado 
amadureceram mais rapidamente. 
A aceleração desse processo é causada por`,
    alternatives: [
      { id: 'A', type: 'text', value: `acúmulo de gás etileno.` },
      { id: 'B', type: 'text', value: `redução da umidade do ar.` },
      { id: 'C', type: 'text', value: `aumento da concentração de CO 2 .` },
      { id: 'D', type: 'text', value: `diminuição da intensidade luminosa.` },
      { id: 'E', type: 'text', value: `isolamento do contato com O 2 atmosférico.` },
    ],
    correct: 'A',
    explanation: `Em um recipiente fechado, o gás etileno liberado naturalmente pelos frutos fica retido e sua concentração aumenta ao redor dos abacates. O etileno é um hormônio vegetal (fito-hormônio) que estimula e acelera o amadurecimento dos frutos. Com os abacates deixados na fruteira aberta, o etileno se dispersa e o amadurecimento é mais lento. Portanto, a aceleração do processo é causada pelo acúmulo de gás etileno (alternativa A).`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
  },
  {
    id: 98,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Há muito tempo são conhecidas espécies de 
lesmas-do-mar com uma capacidade ímpar: guardar 
parte da maquinaria das células das algas que 
consomem - os cloroplastos - e mantê-los funcionais 
dentro das suas próprias células, obtendo assim 
parte do seu alimento. Investigadores portugueses 
descobriram que essas lesmas-do-mar podem ser 
mais eficientes nesse processo do que as próprias 
algas que consomem. 
Disponível em: www.cienciahoje.pt. Acesso em: 10 fev. 2015 (adaptado). 
Essa adaptação confere a esse organismo a capacidade 
de obter primariamente`,
    alternatives: [
      { id: 'A', type: 'text', value: `ácidos nucleicos.` },
      { id: 'B', type: 'text', value: `carboidratos.` },
      { id: 'C', type: 'text', value: `proteínas.` },
      { id: 'D', type: 'text', value: `vitaminas.` },
      { id: 'E', type: 'text', value: `lipídios.` },
    ],
    correct: 'B',
    explanation: `Os cloroplastos retirados das algas e mantidos funcionais nas células das lesmas realizam fotossíntese. Nesse processo, a energia luminosa é usada para converter CO₂ e água em moléculas orgânicas, produzindo primariamente carboidratos (glicose). Esses carboidratos servem de fonte de alimento para o animal. Assim, a adaptação confere ao organismo a capacidade de obter primariamente carboidratos (alternativa B).`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 99,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A leishmaniose visceral é uma zoonose causada por 
um protozoário do gênero Leishmânia que é encontrado em 
diversos tecidos. Ela é transmitida ao homem de forma 
indireta, por vetores do ambiente doméstico. O cão é 
considerado um importante hospedeiro desse protozoário, 
podendo ou não apresentar os sintomas da doença, como 
perda de peso, anemia, ferimentos na pele, diarreia, 
conjuntivite e insuficiência renal. Em uma região que 
sofre com alta incidência dessa doença, uma campanha 
do centro de zoonoses buscou verificar a presença desse 
protozoário nos cães para tentar controlar a doença. 
Em qual material biológico dos cães a presença desse 
protozoário representa risco de transmissão dessa zoonose?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Urina.` },
      { id: 'B', type: 'text', value: `Saliva.` },
      { id: 'C', type: 'text', value: `Fezes.` },
      { id: 'D', type: 'text', value: `Sangue.` },
      { id: 'E', type: 'text', value: `Secreção ocular.` },
    ],
    correct: 'D',
    explanation: `A leishmaniose visceral é transmitida de forma indireta por um vetor, o mosquito-palha (flebotomíneo), que se infecta ao sugar o sangue de um hospedeiro contaminado. O protozoário Leishmania circula e pode ser encontrado no sangue do cão, de onde é captado pelo inseto durante o repasto sanguíneo, permitindo depois a transmissão a outros hospedeiros. Dessa forma, é o sangue do cão o material biológico cuja presença do protozoário representa risco de transmissão da zoonose. A resposta é sangue (alternativa D).`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 100,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um professor lança uma esfera verticalmente para 
cima, a qual retorna, depois de alguns segundos, ao ponto 
de lançamento. Em seguida, lista em um quadro todas as 
possibilidades para as grandezas cinemáticas. 
 
*Grandezas com módulo nulo não têm sentido definido. 
Ele solicita aos alunos que analisem as grandezas 
cinemáticas no instante em que a esfera atinge a altura 
máxima, escolhendo uma combinação para os módulos 
e sentidos da velocidade e da aceleração. 
A escolha que corresponde à combinação correta é`,
    images: ['/enem/2023/images/enem_2023_d2_q100.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `v = 0 e a ≠ 0 para cima.` },
      { id: 'B', type: 'text', value: `v ≠ 0 para cima e a = 0.` },
      { id: 'C', type: 'text', value: `v = 0 e a ≠ 0 para baixo.` },
      { id: 'D', type: 'text', value: `v ≠ 0 para cima e a ≠ 0 para cima.` },
      { id: 'E', type: 'text', value: `v ≠ 0 para baixo e a ≠ 0 para baixo.` },
    ],
    correct: 'C',
    explanation: `No ponto mais alto da trajetória, a esfera inverte o sentido do movimento, de modo que sua velocidade é instantaneamente nula (v = 0). No entanto, durante todo o movimento, incluindo esse instante, atua sobre ela a aceleração da gravidade, que é constante e dirigida verticalmente para baixo (a ≠ 0, para baixo). Por isso, mesmo com velocidade nula, a esfera continua acelerada. A combinação correta é v = 0 e a ≠ 0 para baixo (alternativa C).`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 101,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Muitas mulheres sofrem com desconfortos nos dias 
que antecedem a menstruação, a chamada tensão 
pré-menstrual. Entre outros sintomas, podem ocorrer 
alterações de humor. Atualmente, acredita-se que os 
sintomas são resultado da queda na concentração do 
neurotransmissor serotonina, que, por sua vez, está 
relacionado com a diminuição na produção dos hormônios 
ovarianos estrógeno e progesterona, observada nessa 
fase do ciclo feminino. 
DIMMOCK, P. W. et al. Efficacy of Selective Serotonin-Reuptake Inhibitors in Premenstrual 
Syndrome: a Systematic Review. The Lancet , n. 9 236, 2000 (adaptado). 
A redução da produção desses hormônios nessa fase 
está relacionada com o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `regressão do corpo lúteo ovariano.` },
      { id: 'B', type: 'text', value: `diminuição na produção de ocitocina.` },
      { id: 'C', type: 'text', value: `liberação do gameta feminino na ovulação.` },
      { id: 'D', type: 'text', value: `aumento nos níveis dos hormônios LH e FSH.` },
      { id: 'E', type: 'text', value: `elevação nos níveis sorológicos de adrenalina.` },
    ],
    correct: 'A',
    explanation: `Após a ovulação, o folículo rompido se transforma em corpo lúteo, que secreta estrógeno e, principalmente, progesterona. Nos dias que antecedem a menstruação, não havendo fecundação, o corpo lúteo regride (luteólise), reduzindo acentuadamente a produção desses hormônios ovarianos. Essa queda hormonal está associada à diminuição da serotonina e aos sintomas da tensão pré-menstrual descritos. Logo, a redução desses hormônios está relacionada à regressão do corpo lúteo ovariano (alternativa A).`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 102,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `As cetonas fazem parte de famílias olfativas encontradas 
em muitos alimentos. A molécula de hexan-3-ona é um 
exemplo desses compostos voláteis responsáveis pelo 
aroma, podendo ser obtida por processos energéticos 
realizados em meio ácido, na presença de oxidantes como 
o permanganato de potássio. 
Para se produzir esse composto volátil em laboratório, 
deve-se oxidar a molécula de`,
    alternatives: [
      { id: 'A', type: 'text', value: `hexanal.` },
      { id: 'B', type: 'text', value: `hexan-1-ol.` },
      { id: 'C', type: 'text', value: `hexan-3-ol.` },
      { id: 'D', type: 'text', value: `hex-1-en-1-ol.` },
      { id: 'E', type: 'text', value: `ácido hexanoico.` },
    ],
    correct: 'C',
    explanation: `A hexan-3-ona é uma cetona, com o grupo carbonila (C=O) no carbono 3 da cadeia. Cetonas são obtidas pela oxidação de álcoois secundários, nos quais o grupo hidroxila está ligado a um carbono secundário. O hexan-3-ol é um álcool secundário com a hidroxila no carbono 3; sua oxidação por permanganato de potássio em meio ácido gera exatamente a hexan-3-ona. Portanto, deve-se oxidar a molécula de hexan-3-ol (alternativa C).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 103,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Durante a evolução das plantas, ocorreu uma transição 
do ambiente aquático para o ambiente terrestre graças ao 
surgimento de algumas estruturas que as tornaram 
independentes da água. Esse fato permitiu maior dispersão 
desse grupo de seres vivos, sendo possível observá-los 
em diferentes ambientes na atualidade. 
Qual estrutura possibilitou a independência da água para 
a fecundação dos seres vivos citados acima?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Fruto.` },
      { id: 'B', type: 'text', value: `Esporo.` },
      { id: 'C', type: 'text', value: `Semente.` },
      { id: 'D', type: 'text', value: `Tubo polínico.` },
      { id: 'E', type: 'text', value: `Vaso condutor.` },
    ],
    correct: 'D',
    explanation: `A conquista do ambiente terrestre pelas plantas exigiu estruturas que dispensassem a água para a fecundação. Nas gimnospermas e angiospermas, o grão de pólen, ao germinar, forma o tubo polínico, que conduz os gametas masculinos até a oosfera no interior do óvulo, sem necessidade de água no meio externo. Essa estrutura substituiu a dependência da água que existe nas plantas mais primitivas (briófitas e pteridófitas). Assim, a estrutura que possibilitou a independência da água para a fecundação é o tubo polínico (alternativa D).`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
  },
  {
    id: 104,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O vidro contendo alumínio em sua composição é 
um excelente material para acondicionar medicamentos 
e suplementos, porque pode ser esterilizado por 
aquecimento. No entanto, quando o medicamento 
ou suplemento contém substâncias que se ligam 
fortemente ao íon desse metal, a dissolução do 
alumínio é promovida em função do deslocamento 
do equilíbrio químico estabelecido entre a espécie 
imobilizada no vidro e a espécie em solução. Por essa 
razão, recomenda-se que suplementos de nutrição de 
recém-nascidos contendo gluconato de cálcio sejam 
acondicionados em embalagens plásticas, e não nesse 
tipo de vidro. 
Atualização da recomendação da Sociedade Portuguesa de Neonatologia . 
Disponível em: www.spneonatologia.pt. Acesso em: 22 out. 2021 (adaptado). 
Caso esse suplemento seja acondicionado em embalagem 
desse tipo de vidro, o risco de contaminação por alumínio 
será maior se o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `vidro do frasco for translúcido.` },
      { id: 'B', type: 'text', value: `concentração de gluconato de cálcio for alta.` },
      { id: 'C', type: 'text', value: `frasco de vidro apresentar uma maior espessura.` },
      { id: 'D', type: 'text', value: `vidro for previamente esterilizado em altas temperaturas.` },
      { id: 'E', type: 'text', value: `reação do alumínio com gluconato de cálcio for endotérmica.` },
    ],
    correct: 'B',
    explanation: `A dissolução do alumínio do vidro depende do deslocamento de um equilíbrio químico entre o alumínio imobilizado no vidro e o complexo formado com o gluconato de cálcio em solução. Quanto maior a concentração de gluconato de cálcio, mais o equilíbrio é deslocado no sentido de dissolver o alumínio (princípio de Le Chatelier), aumentando a quantidade de metal que passa para a solução. Logo, o risco de contaminação por alumínio será maior quando a concentração de gluconato de cálcio for alta (alternativa B).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 105,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Barbatimão é o nome popular de uma árvore cuja 
casca é utilizada para fins medicinais. Essa casca é 
constituída principalmente de dois tecidos vegetais: 
periderme e floema. A extração da casca tem levado à 
morte muitos indivíduos dessa espécie, quando o corte 
retira um anel completo ao longo da circunferência do 
tronco. Aqueles que têm parte da casca retirada sem 
completar essa circunferência podem sobreviver. 
A morte desses indivíduos, decorrente da retirada do anel 
completo da casca, é provocada pela interrupção da`,
    alternatives: [
      { id: 'A', type: 'text', value: `fotossíntese.` },
      { id: 'B', type: 'text', value: `transpiração.` },
      { id: 'C', type: 'text', value: `troca de gases.` },
      { id: 'D', type: 'text', value: `formação de brotos.` },
      { id: 'E', type: 'text', value: `nutrição das raízes.` },
    ],
    correct: 'E',
    explanation: `A casca do barbatimão contém o floema, tecido condutor responsável por transportar a seiva elaborada (açúcares produzidos na fotossíntese das folhas) para as demais partes da planta, inclusive as raízes. A retirada de um anel completo de casca ao redor do tronco interrompe por completo o floema, impedindo que os nutrientes orgânicos cheguem às raízes. Sem esse suprimento, as raízes morrem e, consequentemente, a planta inteira. Por isso a morte decorre da interrupção da nutrição das raízes (alternativa E).`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
  },
  {
    id: 106,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A tecnologia de vacinas de RNA mensageiro (RNAm) 
é investigada há anos. Avanços científicos em genética 
molecular permitiram desenvolver uma vacina para 
controle da pandemia da covid-19 causada pelo vírus de 
RNA SARS-CoV-2. A vacina de RNAm tem sequências 
de genes do vírus. Entretanto, por ser muito instável, o 
RNAm deve ser recoberto por uma capa de lipídios que 
evita sua degradação e favorece sua ação. Dessa forma, 
o RNAm desempenhará sua função específica atuando 
no mesmo compartimento celular de sempre. 
Disponível em: https://sbim.org.br. Acesso em: 29 nov. 2021 (adaptado). 
A imunização produzida por esse tipo de vacina é 
alcançada por meio da`,
    alternatives: [
      { id: 'A', type: 'text', value: `estimulação de leucócitos induzida pela capa lipídica contendo RNAm.` },
      { id: 'B', type: 'text', value: `atuação do RNAm como sequestrador do vírus para o meio extracelular.` },
      { id: 'C', type: 'text', value: `tradução do RNAm em proteína viral, desencadeando a resposta antigênica.` },
      { id: 'D', type: 'text', value: `competição entre o RNAm vacinal e o RNA viral pelos sítios dos ribossomos.` },
      { id: 'E', type: 'text', value: `incorporação do RNAm viral ao genoma do hospedeiro, gerando novo fenótipo.` },
    ],
    correct: 'C',
    explanation: `A vacina de RNAm introduz nas células sequências de RNA mensageiro que codificam uma proteína do vírus. No citoplasma, esse RNAm é traduzido pelos ribossomos, produzindo a proteína viral (antígeno). Reconhecida como estranha, essa proteína desencadeia a resposta imune (antigênica), com produção de anticorpos e células de memória, sem inserir material no genoma do hospedeiro. Portanto, a imunização é alcançada pela tradução do RNAm em proteína viral, desencadeando a resposta antigênica (alternativa C).`,
    subject: ['bio'],
    topics: ['Biotecnologia', 'Questões aleatórias'],
  },
  {
    id: 107,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Na fertilização in vitro, espermatozoides são adicionados 
aos gametas femininos retirados de uma mulher. Após o 
período de incubação, a fecundação é favorecida pela ação 
de enzimas. Em um procedimento realizado, observou-se 
que nenhum dos gametas femininos foi fertilizado e, 
posteriormente, verificou-se que havia sido adicionado, 
equivocadamente, um coquetel de inibidores das enzimas do 
acrossomo, no lugar de um dos nutrientes constituintes do 
meio de cultura. 
O coquetel de inibidores impediu o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `formação do pronúcleo masculino.` },
      { id: 'B', type: 'text', value: `início da divisão mitótica do zigoto.` },
      { id: 'C', type: 'text', value: `término da segunda divisão meiótica do ovócito.` },
      { id: 'D', type: 'text', value: `passagem do espermatozoide pela corona radiata e zona pelúcida.` },
      { id: 'E', type: 'text', value: `fusão das membranas plasmáticas do ovócito e do espermatozoide.` },
    ],
    correct: 'D',
    explanation: `As enzimas do acrossomo do espermatozoide (como a hialuronidase e a acrosina) digerem as camadas que envolvem o ovócito, permitindo que o espermatozoide atravesse a corona radiata e a zona pelúcida até alcançar a membrana do gameta feminino. Ao adicionar inibidores dessas enzimas, a reação acrossômica fica bloqueada e o espermatozoide não consegue penetrar essas barreiras, impedindo a fecundação. Por isso nenhum gameta foi fertilizado. O coquetel de inibidores impediu a passagem do espermatozoide pela corona radiata e zona pelúcida (alternativa D).`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 108,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O fogão por indução funciona a partir do surgimento 
de uma corrente elétrica induzida no fundo da panela, 
com consequente transformação de energia elétrica 
em calor por efeito Joule. A principal vantagem desses 
fogões é a eficiência energética, que é substancialmente 
maior que a dos fogões convencionais. 
A corrente elétrica mencionada é induzida por`,
    alternatives: [
      { id: 'A', type: 'text', value: `radiação.` },
      { id: 'B', type: 'text', value: `condução.` },
      { id: 'C', type: 'text', value: `campo elétrico variável.` },
      { id: 'D', type: 'text', value: `campo magnético variável.` },
      { id: 'E', type: 'text', value: `ressonância eletromagnética.` },
    ],
    correct: 'D',
    explanation: `No fogão por indução, uma bobina sob a superfície é percorrida por corrente alternada, gerando um campo magnético variável no tempo. Pela lei de Faraday-Lenz, esse campo magnético variável induz correntes de Foucault (correntes parasitas) no fundo metálico da panela. Essas correntes, por efeito Joule, aquecem a panela. Portanto, a corrente elétrica é induzida por um campo magnético variável (alternativa D).`,
    subject: ['fis'],
    topics: ['Eletromagnetismo/Indução', 'Questões aleatórias'],
  },
  {
    id: 109,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma academia decide trocar gradualmente seus aparelhos de
musculação. Agora, os frequentadores que utilizam os aparelhos
do tipo 1 podem também utilizar os aparelhos do tipo 2,
representados na figura, para elevar cargas correspondentes às
massas M 1 e M 2 , com velocidade constante. A fim de que o
exercício seja realizado com a mesma força F , os usuários
devem ser orientados a respeito da relação entre as cargas nos
dois tipos de aparelhos, já que as polias fixas apenas mudam a
direção das forças, enquanto a polia móvel divide as forças.
Em ambos os aparelhos, considere as cordas inextensíveis, as
massas das polias e das cordas desprezíveis e que não há
dissipação de energia. Aparelho do tipo 2 Aparelho do tipo 1 F
F M 1 M 2 Para essa academia, qual deve ser a razão M₂/M₁
informada aos usuários?`,
    images: ['/enem/2023/images/enem_2023_d2_q109.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1/4` },
      { id: 'B', type: 'text', value: `1/2` },
      { id: 'C', type: 'text', value: `1` },
      { id: 'D', type: 'text', value: `2` },
      { id: 'E', type: 'text', value: `4` },
    ],
    correct: 'D',
    explanation: `No aparelho do tipo 1, com polia fixa, a força aplicada equilibra todo o peso da carga: F = M₁·g. No aparelho do tipo 2, com polia móvel, a carga é sustentada por dois segmentos de corda, de modo que a força se divide: F = M₂·g/2. Para que o exercício seja feito com a mesma força F, iguala-se M₁·g = M₂·g/2, resultando em M₂/M₁ = 2. A razão informada deve ser 2 (alternativa D).`,
    subject: ['fis'],
    topics: ['Dinâmica', 'Questões aleatórias'],
  },
  {
    id: 110,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um assistente de laboratório precisou descartar sete frascos contendo solução de nitrato de mercúrio(I) que não
foram utilizados em uma aula prática. Cada frasco continha 5,25 g de Hg₂(NO₃)₂ dissolvidos em água. Temendo a
toxidez do mercúrio e sabendo que o Hg₂ Cl₂ tem solubilidade muito baixa, o assistente optou por retirar o mercúrio da
solução por precipitação com cloreto de sódio (NaCl), conforme a equação química:
Hg₂(NO₃)₂ (aq) + 2 NaCl (aq)
 Hg₂ Cl₂ (s) + 2 NaNO 3 (aq)
Na dúvida sobre a massa de NaCl a ser utilizada, o assistente aumentou gradativamente a quantidade adicionada
em cada frasco, como apresentado no quadro.`,
    images: ['/enem/2023/images/enem_2023_d2_q110.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2023/images/enem_2023_d2_q110_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2023/images/enem_2023_d2_q110_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2023/images/enem_2023_d2_q110_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2023/images/enem_2023_d2_q110_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2023/images/enem_2023_d2_q110_E.jpg` },
    ],
    correct: 'B',
    explanation: `A quantidade de nitrato de mercúrio(I) por frasco é n = 5,25 g ÷ 525 g/mol = 0,01 mol. Pela estequiometria, cada mol reage com 2 mol de NaCl, logo são necessários 0,02 mol de NaCl = 0,02 × 58 = 1,16 g para precipitar todo o mercúrio, formando 0,01 mol de Hg₂Cl₂ = 0,01 × 472 = 4,72 g. Assim, a massa de Hg₂Cl₂ cresce linearmente com o NaCl adicionado até 1,16 g e, a partir daí, permanece constante em cerca de 4,72 g (reagente limitante esgotado). O gráfico que mostra crescimento linear seguido de patamar é o B (alternativa B).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 111,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Na tirinha de Maurício de Sousa, os personagens Cebolinha e Cascão fazem uma brincadeira utilizando duas latas 
e um barbante. Ao perceberem que o som pode ser transmitido através do barbante, resolvem alterar o comprimento do 
barbante para ficar cada vez mais extenso. As demais condições permaneceram inalteradas durante a brincadeira. 
Na prática, à medida que se aumenta o comprimento do barbante, ocorre a redução de qual característica da onda sonora?`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `Altura.` },
      { id: 'B', type: 'text', value: `Período.` },
      { id: 'C', type: 'text', value: `Amplitude.` },
      { id: 'D', type: 'text', value: `Velocidade.` },
      { id: 'E', type: 'text', value: `Comprimento de onda.` },
    ],
    correct: 'C',
    explanation: `No telefone de latas, o som faz o barbante vibrar, e essa vibração se propaga ao longo dele transportando energia. Quanto maior o comprimento do barbante, maior a dissipação de energia pela resistência do meio ao longo do percurso, de modo que a vibração chega enfraquecida à outra lata. A energia da onda está associada à sua amplitude; assim, a característica que diminui é a amplitude (relacionada à intensidade/volume do som). A grandeza reduzida é a amplitude (alternativa C).`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 112,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Informações digitais - dados - são gravadas em discos ópticos, como CD e DVD, na forma de cavidades 
microscópicas. A gravação e a leitura óptica dessas informações são realizadas por um laser (fonte de luz monocromática). 
Quanto menores as dimensões dessas cavidades, mais dados são armazenados na mesma área do disco. O fator limitante 
para a leitura de dados é o espalhamento da luz pelo efeito de difração, fenômeno que ocorre quando a luz atravessa um 
obstáculo com dimensões da ordem de seu comprimento de onda. Essa limitação motivou o desenvolvimento de lasers 
com emissão em menores comprimentos de onda, possibilitando armazenar e ler dados em cavidades cada vez menores. 
Em qual região espectral se situa o comprimento de onda do laser que otimiza o armazenamento e a leitura de dados 
em discos de uma mesma área?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Violeta.` },
      { id: 'B', type: 'text', value: `Azul.` },
      { id: 'C', type: 'text', value: `Verde.` },
      { id: 'D', type: 'text', value: `Vermelho.` },
      { id: 'E', type: 'text', value: `Infravermelho.` },
    ],
    correct: 'A',
    explanation: `A difração limita a leitura quando as dimensões das cavidades se aproximam do comprimento de onda da luz usada. Para armazenar e ler dados em cavidades cada vez menores, é preciso usar luz de menor comprimento de onda. Entre as cores apresentadas, a luz violeta é a de menor comprimento de onda do espectro visível, permitindo cavidades menores e maior densidade de dados. Logo, o laser se situa na região violeta (alternativa A).`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 113,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O bluetooth é uma tecnologia de comunicação sem fio, de curto alcance, presente em diferentes dispositivos 
eletrônicos de consumo. Ela permite que aparelhos eletrônicos diferentes se conectem e troquem dados entre 
si. No padrão bluetooth , denominado de Classe 2, as antenas transmitem sinais de potência igual a 2,4 mW e 
possibilitam conectar dois dispositivos distanciados até 10 m. Considere que essas antenas se comportam como 
fontes puntiformes que emitem ondas eletromagnéticas esféricas e que a intensidade do sinal é calculada pela 
potência por unidade de área. Considere 3 como valor aproximado para π . 
Para que o sinal de bluetooth seja detectado pelas antenas, o valor mínimo de sua intensidade, em W 
m² , é mais 
próximo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `2,0 × 10⁻⁶ .` },
      { id: 'B', type: 'text', value: `2,0 × 10⁻⁵ .` },
      { id: 'C', type: 'text', value: `2,4 × 10⁻⁵ .` },
      { id: 'D', type: 'text', value: `2,4 × 10⁻³ .` },
      { id: 'E', type: 'text', value: `2,4 × 10⁻¹ .` },
    ],
    correct: 'A',
    explanation: `A antena irradia como fonte puntiforme, distribuindo a potência sobre uma superfície esférica de raio igual ao alcance (r = 10 m). A área dessa esfera é A = 4πr² = 4 × 3 × (10)² = 1 200 m². A intensidade mínima é I = P/A = (2,4 × 10⁻³ W) ÷ 1 200 m² = 2,0 × 10⁻⁶ W/m². O valor mais próximo é 2,0 × 10⁻⁶ (alternativa A).`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 114,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma equipe de segurança do transporte de uma empresa avalia o
comportamento das tensões que aparecem em duas cordas, 1 e 2,
usadas para prender uma carga de massa M = 200 kg na
carroceria, conforme a ilustração. Quando o caminhão parte do
repouso, sua aceleração é constante e igual a 3 m/s² e, quando
ele é freado bruscamente, sua frenagem é constante e igual a 5
m/s² . Em ambas as situações, a carga encontra-se na iminência
de movimento, e o sentido do movimento do caminhão está
indicado na figura. O coeficiente de atrito estático entre a
caixa e o assoalho da carroceria é igual a 0,2. Considere a
aceleração da gravidade igual a 10 m/s² , as tensões iniciais
nas cordas iguais a zero e as duas cordas ideais. 1 2 M V Nas
situações de aceleração e frenagem do caminhão, as tensões nas
cordas 1 e 2, em newton, serão`,
    images: ['/enem/2023/images/enem_2023_d2_q114.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `aceleração: T 1 = 0 e T 2 = 200; frenagem: T 1 = 600 e T 2 = 0.` },
      { id: 'B', type: 'text', value: `aceleração: T 1 = 0 e T 2 = 200; frenagem: T 1 = 1 400 e T 2 = 0.` },
      { id: 'C', type: 'text', value: `aceleração: T 1 = 0 e T 2 = 600; frenagem: T 1 = 600 e T 2 = 0.` },
      { id: 'D', type: 'text', value: `aceleração: T 1 = 560 e T 2 = 0; frenagem: T 1 = 0 e T 2 = 960.` },
      { id: 'E', type: 'text', value: `aceleração: T 1 = 640 e T 2 = 0; frenagem: T 1 = 0 e T 2 = 1 040.` },
    ],
    correct: 'A',
    explanation: `A força de atrito estático máxima sobre a carga é Fat = μ·M·g = 0,2 × 200 × 10 = 400 N. Na aceleração (3 m/s²), a força necessária para acompanhar o caminhão é M·a = 200 × 3 = 600 N; o atrito fornece 400 N e a corda que impede o deslizamento (corda 2) completa com 200 N, logo T₁ = 0 e T₂ = 200. Na frenagem (5 m/s²), a força necessária é M·a = 200 × 5 = 1 000 N; o atrito dá 400 N e a corda 1 fornece os 600 N restantes, logo T₁ = 600 e T₂ = 0. Isso corresponde à alternativa A.`,
    subject: ['fis'],
    topics: ['Dinâmica', 'Questões aleatórias'],
  },
  {
    id: 115,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A biorremediação designa tratamentos que usam 
organismos para reduzir a quantidade de substâncias 
tóxicas no ambiente ou degradá-las em substâncias 
não tóxicas ou de menor toxicidade. Uma planta aquática, 
o aguapé, tem sido utilizada para a biorremediação de 
ambientes contaminados por metais tóxicos. Sabe-se 
que esses poluentes serão captados para dentro do 
corpo do vegetal. 
Dentro do corpo do vegetal, esses contaminantes serão`,
    alternatives: [
      { id: 'A', type: 'text', value: `digeridos por enzimas.` },
      { id: 'B', type: 'text', value: `acumulados nos tecidos.` },
      { id: 'C', type: 'text', value: `eliminados pelos estômatos.` },
      { id: 'D', type: 'text', value: `metabolizados por glândulas.` },
      { id: 'E', type: 'text', value: `utilizados como fonte energética.` },
    ],
    correct: 'B',
    explanation: `Na biorremediação com o aguapé, a planta absorve os metais tóxicos do ambiente através de suas raízes. Diferentemente de nutrientes, esses metais não são metabolizados nem usados como fonte de energia; eles ficam retidos (fitoextração), armazenados em compartimentos celulares como os vacúolos, nos tecidos vegetais. Com isso, o poluente é removido da água e concentrado no corpo da planta. Logo, dentro do vegetal os contaminantes serão acumulados nos tecidos (alternativa B).`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
  },
  {
    id: 116,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O ciclo do nitrogênio é composto por várias etapas, 
conforme a figura, sendo cada uma desempenhada por 
um grupo específico de microrganismos.
Se o grupo dos microrganismos decompositores fosse
exterminado, qual etapa não ocorreria?`,
    images: ['/enem/2023/images/enem_2023_d2_q116.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `5` },
    ],
    correct: 'B',
    explanation: `Os microrganismos decompositores atuam na amonificação, etapa em que a matéria orgânica nitrogenada (de restos e excretas) é degradada e convertida em amônia/amônio. Se esses decompositores fossem eliminados, essa conversão do nitrogênio orgânico em amônia deixaria de ocorrer, interrompendo a etapa correspondente do ciclo (etapa 2 do esquema). As demais etapas são realizadas por outros grupos de microrganismos (fixadores, nitrificantes e desnitrificantes). Portanto, a etapa que não ocorreria é a 2 (alternativa B).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 117,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Os raios cósmicos são fontes de radiação ionizante 
potencialmente perigosas para o organismo humano. 
Para quantificar a dose de radiação recebida, utiliza-se 
o sievert (Sv), definido como a unidade de energia 
recebida por unidade de massa. A exposição à radiação 
proveniente de raios cósmicos aumenta com a altitude, 
o que pode representar um problema para as tripulações 
de aeronaves. Recentemente, foram realizadas medições 
acuradas das doses de radiação ionizante para voos entre 
Rio de Janeiro e Roma. Os resultados têm indicado que a 
dose média de radiação recebida na fase de cruzeiro (que 
geralmente representa 80% do tempo total de voo) desse 
trecho intercontinental é 2 μSv/h. As normas internacionais 
da aviação civil limitam em 1 000 horas por ano o tempo 
de trabalho para as tripulações que atuem em voos 
intercontinentais. Considere que a dose de radiação ionizante 
para uma radiografia torácica é estimada em 0,2 mSv. 
RUAS, A. C. O tripulante de aeronaves e a radiação ionizante . 
São Paulo: Edição do Autor, 2019 (adaptado). 
A quantas radiografias torácicas corresponde a dose de 
radiação ionizante à qual um tripulante que atue no trecho 
Rio de Janeiro−Roma é exposto ao longo de um ano?`,
    alternatives: [
      { id: 'A', type: 'text', value: `8` },
      { id: 'B', type: 'text', value: `10` },
      { id: 'C', type: 'text', value: `80` },
      { id: 'D', type: 'text', value: `100` },
      { id: 'E', type: 'text', value: `1 000` },
    ],
    correct: 'A',
    explanation: `A fase de cruzeiro representa 80% do tempo total de trabalho anual permitido (1 000 h), ou seja, 0,80 × 1 000 = 800 h. A dose recebida nessa fase é 2 μSv/h × 800 h = 1 600 μSv = 1,6 mSv. Cada radiografia torácica equivale a 0,2 mSv, então o número de radiografias é 1,6 ÷ 0,2 = 8. A dose corresponde a 8 radiografias torácicas (alternativa A).`,
    subject: ['fis'],
    topics: ['Física moderna', 'Questões aleatórias'],
  },
  {
    id: 118,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A gasolina é uma mistura de hidrocarbonetos de 
cadeias saturadas contendo de 8 a 12 átomos de carbono. 
Além disso, a gasolina de alto desempenho deve conter 
elevados teores de hidrocarbonetos de cadeias ramificadas, 
de forma a resistir à compressão e entrar em ignição apenas 
quando a vela aciona uma centelha elétrica no motor. 
No quadro, estão apresentados compostos que podem 
ser utilizados como combustíveis. 
 
Entre esses compostos, aquele que conferirá maior 
desempenho como combustível é o`,
    images: ['/enem/2023/images/enem_2023_d2_q118.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },
    ],
    correct: 'C',
    explanation: `A resistência à compressão (alto poder antidetonante, ou seja, alta octanagem) é favorecida por hidrocarbonetos de cadeia ramificada, pois estes só entram em ignição quando a vela aciona a centelha, evitando a autoignição precoce. Entre os combustíveis apresentados, o de cadeia mais ramificada é o composto III, que por isso resiste melhor à compressão. Assim, o composto que confere maior desempenho é o III (alternativa C).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 119,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `De acordo com a Constituição Federal, é competência 
dos municípios o gerenciamento dos serviços de limpeza e 
coleta dos resíduos urbanos (lixo). No entanto, há relatos 
de que parte desse lixo acaba sendo incinerado, liberando 
substâncias tóxicas para o ambiente e causando acidentes 
por explosões, principalmente quando ocorre a incineração 
de frascos de aerossóis (por exemplo: desodorantes, 
inseticidas e repelentes). A temperatura elevada provoca 
a vaporização de todo o conteúdo dentro desse tipo de 
frasco, aumentando a pressão em seu interior até culminar 
na explosão da embalagem. 
ZVEIBIL, V. Z. et al. Cartilha de limpeza urbana . Disponível em: 
www.ibam.org.br. Acesso em: 6 jul. 2015 (adaptado). 
Suponha um frasco metálico de um aerossol de 
capacidade igual a 100 mL, contendo 0,1 mol de produtos 
gasosos à temperatura de 650 °C, no momento da explosão. 
Considere: R = 0,082 atm·L/(mol·K).
A pressão, em atm, dentro do frasco, no momento da
explosão, é mais próxima de`,
    alternatives: [
      { id: 'A', type: 'text', value: `756.` },
      { id: 'B', type: 'text', value: `533.` },
      { id: 'C', type: 'text', value: `76.` },
      { id: 'D', type: 'text', value: `53.` },
      { id: 'E', type: 'text', value: `13.` },
    ],
    correct: 'C',
    explanation: `Aplicando a equação dos gases ideais, P = nRT/V, com n = 0,1 mol, R = 0,082 L·atm·mol⁻¹·K⁻¹, T = 650 °C = 923 K e V = 100 mL = 0,1 L. Substituindo: P = (0,1 × 0,082 × 923) ÷ 0,1 = 0,082 × 923 ≈ 75,7 atm. O valor mais próximo é 76 atm (alternativa C).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 120,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O circuito com três lâmpadas incandescentes idênticas,
representado na figura, consiste em uma associação mista de
resistores. Cada lâmpada ( L 1 , L 2 e L 3 ) é associada, em
paralelo, a um resistor de resistência R , formando um
conjunto. Esses conjuntos são associados em série, tendo todas
as lâmpadas o mesmo brilho quando ligadas à fonte de energia.
Após vários dias em uso, apenas a lâmpada L 2 queima, enquanto
as demais permanecem acesas. L ¹ R R L ² L ³ Fonte de energia
R Em relação à situação em que todas as lâmpadas funcionam,
após a queima de L 2 , os brilhos das lâmpadas serão`,
    images: ['/enem/2023/images/enem_2023_d2_q120.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `os mesmos.` },
      { id: 'B', type: 'text', value: `mais intensos.` },
      { id: 'C', type: 'text', value: `menos intensos.` },
      { id: 'D', type: 'text', value: `menos intenso para L  1 e o mesmo para L 3 .` },
      { id: 'E', type: 'text', value: `mais intenso para L  1 e menos intenso para L 3 .` },
    ],
    correct: 'C',
    explanation: `Cada conjunto é formado por uma lâmpada em paralelo com um resistor R, e os três conjuntos estão em série. Quando L₂ queima (abre), o conjunto 2 passa a ter apenas o resistor R, cuja resistência é maior do que a da associação em paralelo original. Com isso, a resistência total da série aumenta e a corrente do circuito diminui, reduzindo a corrente que passa por L₁ e L₃. Como o brilho depende da potência dissipada (ligada à corrente), as lâmpadas remanescentes ficarão menos intensas (alternativa C).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 121,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Os solos amazônicos, ricos em silicato, não são apropriados
para o cultivo por serem incapazes de reter nutrientes.
Contudo, descobertas arqueológicas têm demonstrado que os
antigos habitantes da Amazônia dominavam a técnica de preparo
de um insumo agrícola natural, denominado terra preta. Esse
insumo era constituído principalmente de uma espécie de
biocarvão ( biochar ) obtido da queima de matéria orgânica,
como troncos de árvores, pedaços de ossos e esterco, capaz de
manter um solo fértil por anos. Admite-se que o efeito do
biocarvão na fertilização do solo estava, em parte,
relacionado à presença de grupos orgânicos do tipo carboxilato
em sua superfície, carregados negativamente (-COO − ). Esses
grupos atraem íons positivos necessários como nutrientes, tais
quais os provenientes do potássio (K), do cálcio (Ca) e do
magnésio (Mg), além de micronutrientes, como zinco (Zn) e
ferro (Fe). Essa ligação no solo fertilizado é
predominantemente iônica, conforme ilustra a figura, em que M
n+ representa os cátions metálicos. De acordo com a escala de
Pauling, a eletronegatividade do elemento oxigênio é igual a
3,44. M n+ O O - O O - M n+ Solo com biocarvão Solo
fertilizado O quadro apresenta os valores de
eletronegatividade desses cinco elementos metálicos. Elemento
metálico Eletronegatividade K 0,82 Ca 1,00 Mg 1,31 Zn 1,65 Fe
1,83 MICHALOVIC, M. Ancient Soil Chemists of the Amazon.
ChemMatters , fev. 2009 (adaptado). O cátion que resultará em
uma interação de maior caráter iônico com o ânion carboxilato
será aquele proveniente do elemento`,
    images: ['/enem/2023/images/enem_2023_d2_q121_1.jpg', '/enem/2023/images/enem_2023_d2_q121_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `potássio.` },
      { id: 'B', type: 'text', value: `cálcio.` },
      { id: 'C', type: 'text', value: `magnésio.` },
      { id: 'D', type: 'text', value: `zinco.` },
      { id: 'E', type: 'text', value: `ferro.` },
    ],
    correct: 'A',
    explanation: `O caráter iônico de uma ligação é tanto maior quanto maior a diferença de eletronegatividade entre os átomos envolvidos. O oxigênio do carboxilato tem eletronegatividade 3,44; a maior diferença ocorre com o cátion do elemento de menor eletronegatividade. Entre os valores dados, o potássio apresenta a menor eletronegatividade (0,82), gerando a maior diferença (3,44 − 0,82 = 2,62) e, portanto, a interação de maior caráter iônico. O cátion é o proveniente do potássio (alternativa A).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 122,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Em uma indústria alimentícia, para produção de doce de leite, utiliza-se um tacho de parede oca com uma entrada 
para vapor de água a 120 °C  e uma saída para água líquida em equilíbrio com o vapor a 100 °C. Ao passar pela parte 
oca do tacho, o vapor de água transforma-se em líquido, liberando energia. A parede transfere essa energia para o 
interior do tacho, resultando na evaporação de água e consequente concentração do produto. 
No processo de concentração do produto, é utilizada energia proveniente`,
    alternatives: [
      { id: 'A', type: 'text', value: `somente do calor latente de vaporização.` },
      { id: 'B', type: 'text', value: `somente do calor latente de condensação.` },
      { id: 'C', type: 'text', value: `do calor sensível e do calor latente de vaporização.` },
      { id: 'D', type: 'text', value: `do calor sensível e do calor latente de condensação.` },
      { id: 'E', type: 'text', value: `do calor latente de condensação e do calor latente de vaporização.` },
    ],
    correct: 'D',
    explanation: `O vapor entra a 120 °C e sai como água líquida em equilíbrio a 100 °C. Primeiro, o vapor superaquecido cede calor sensível ao resfriar de 120 °C até 100 °C. Em seguida, a 100 °C, o vapor se condensa, liberando o calor latente de condensação, que é a maior parcela de energia aproveitada. Assim, a energia fornecida ao produto provém do calor sensível e do calor latente de condensação (alternativa D).`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 123,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Entre os medicamentos mais comuns consumidos para o alívio da
dor está o ibuprofeno, um composto quiral com ação
anti-inflamatória e efeito analgésico, que é comercializado
como fármaco opticamente puro, ou seja, sem a mistura com
outro isômero óptico. A fórmula estrutural plana do ibuprofeno
é: Ibuprofeno Além do ibuprofeno, destacam-se também os
princípios ativos a seguir, presentes em outros medicamentos
para o alívio da dor: H H N N O O O HO Fenacetina Paracetamol
Cl NH Cl Na + O − O Diclofenaco sódico O princípio ativo que
apresenta o mesmo tipo de isomeria espacial que o ibuprofeno e
o(a)`,
    images: ['/enem/2023/images/enem_2023_d2_q123.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `fenacetina.` },
      { id: 'B', type: 'text', value: `paracetamol.` },
      { id: 'C', type: 'text', value: `dipirona sódica.` },
      { id: 'D', type: 'text', value: `diclofenaco sódico.` },
      { id: 'E', type: 'text', value: `butilbrometo de escopolamina.` },
    ],
    correct: 'E',
    explanation: `O ibuprofeno apresenta isomeria óptica porque possui um carbono assimétrico (quiral), ligado a quatro grupos diferentes, o que o torna opticamente ativo. Para apresentar o mesmo tipo de isomeria, o princípio ativo também precisa ter pelo menos um carbono quiral. Entre as estruturas apresentadas, apenas o butilbrometo de escopolamina possui carbono(s) assimétrico(s), enquanto fenacetina, paracetamol e diclofenaco sódico não têm centro de quiralidade. Logo, a resposta é o butilbrometo de escopolamina (alternativa E).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 124,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma concessionária é responsável por um trecho de 480 quilômetros de uma rodovia. Nesse trecho, foram 
construídas 10 praças de pedágio, onde funcionários recebem os pagamentos nas cabines de cobrança. Também 
existe o serviço automático, em que os veículos providos de um dispositivo passam por uma cancela, que se abre 
automaticamente, evitando filas e diminuindo o tempo de viagem. Segundo a concessionária, o tempo médio para 
efetuar a passagem em uma cabine é de 3 minutos, e as velocidades máximas permitidas na rodovia são 100 km/h, 
para veículos leves, e 80 km/h, para veículos de grande porte. 
Considere um carro e um caminhão viajando, ambos com velocidades constantes e iguais às máximas permitidas, 
e que somente o caminhão tenha o serviço automático de cobrança. 
Comparado ao caminhão, quantos minutos a menos o carro leva para percorrer toda a rodovia?`,
    alternatives: [
      { id: 'A', type: 'text', value: `30` },
      { id: 'B', type: 'text', value: `42` },
      { id: 'C', type: 'text', value: `72` },
      { id: 'D', type: 'text', value: `288` },
      { id: 'E', type: 'text', value: `360` },
    ],
    correct: 'B',
    explanation: `O carro trafega a 100 km/h e percorre os 480 km em 480/100 = 4,8 h = 288 min, mas para nas 10 praças de pedágio, gastando 10 × 3 = 30 min, totalizando 288 + 30 = 318 min. O caminhão trafega a 80 km/h e percorre os 480 km em 480/80 = 6 h = 360 min, sem paradas, pois usa o serviço automático. A diferença é 360 − 318 = 42 min a menos para o carro. A resposta é 42 (alternativa B).`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 125,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Pais com síndrome de Down 
A síndrome de Down é uma alteração genética associada a trissomia do cromossomo 21, ou seja, o individuo possui 
três cromossomos 21 e não um par, como é normal. Isso ocorre pela união de um gameta contendo um cromossomo 21 
com um gameta possuidor de dois cromossomos 21. Embora, normalmente, as mulheres com a síndrome sejam 
estéreis, em 2008, no interior de São Paulo, uma delas deu a luz uma menina sem a síndrome de Down. 
MORENO, T. Três anos após dar à luz, mãe portadora de síndrome de Down revela detalhes de seu dia a dia . Disponível em: www.band.uol.com.br. Acesso em: 31 out. 2013 (adaptado). 
Sabendo disso, um jovem casal, ambos com essa síndrome, procura um médico especialista para aconselhamento 
genético porque querem ter um bebê. 
O médico informa ao casal que, com relação ao cromossomo 21, os zigotos formados serão`,
    alternatives: [
      { id: 'A', type: 'text', value: `todos normais.` },
      { id: 'B', type: 'text', value: `todos tetrassômicos.` },
      { id: 'C', type: 'text', value: `apenas normais ou tetrassômicos.` },
      { id: 'D', type: 'text', value: `apenas trissômicos ou tetrassômicos.` },
      { id: 'E', type: 'text', value: `normais, trissômicos ou tetrassômicos.` },
    ],
    correct: 'E',
    explanation: `Nas pessoas com síndrome de Down (trissomia do 21), a formação dos gametas pode gerar células com 1 ou com 2 cromossomos 21. Cruzando dois indivíduos com a síndrome, os zigotos resultam da combinação desses gametas: 1 + 1 = 2 cromossomos (normal), 1 + 2 = 3 cromossomos (trissômico) e 2 + 2 = 4 cromossomos (tetrassômico). Portanto, em relação ao cromossomo 21, os zigotos podem ser normais, trissômicos ou tetrassômicos (alternativa E).`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 126,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Para que uma molécula dê origem a um medicamento de administração oral, além de apresentar atividade 
farmacológica, deve ser capaz de atingir o local de ação. Para tanto, essa molécula não deve se degradar no estômago 
(onde o meio é fortemente ácido e há várias enzimas que reagem mediante catálise ácida), deve ser capaz de atravessar 
as membranas celulares e ser solúvel no plasma sanguíneo (sistema aquoso). Para os fármacos cujas estruturas são 
formadas por cadeias carbônicas longas contendo pelo menos um grupamento amino, um recurso tecnológico empregado 
é sua conversão no cloridrato correspondente. Essa conversão é representada, de forma genérica, pela equação química: 
R 3 N + HCl 
 (R 3 NH) + Cl - 
O aumento da eficiência de circulação do fármaco no sangue, promovido por essa conversão, deve-se ao incremento 
de seu(sua)`,
    alternatives: [
      { id: 'A', type: 'text', value: `basicidade.` },
      { id: 'B', type: 'text', value: `lipofilicidade.` },
      { id: 'C', type: 'text', value: `caráter iônico.` },
      { id: 'D', type: 'text', value: `cadeia carbônica.` },
      { id: 'E', type: 'text', value: `estado de oxidação.` },
    ],
    correct: 'C',
    explanation: `Os fármacos com longas cadeias carbônicas e grupo amino são pouco solúveis em meio aquoso. Ao reagir com HCl, a amina (R₃N) é convertida em um sal de cloridrato, (R₃NH)⁺Cl⁻, de natureza iônica. O aumento do caráter iônico torna a molécula muito mais solúvel no plasma sanguíneo (sistema aquoso), melhorando sua circulação e disponibilidade. Logo, o ganho de eficiência deve-se ao incremento do caráter iônico (alternativa C).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 127,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Toxicidade do cianeto A produção de ATP depende do gradiente
de prótons gerado pela cadeia respiratória. Nessas reações, os
elétrons provenientes da oxidação do NADH em NAD + percorrem a
cadeia até chegarem à citocromo c oxidase reduzindo o Fe 3+ a
Fe 2+ . O oxigênio atua como aceptor final desses elétrons
formando água. O cianeto é uma espécie química altamente
tóxica que tem grande afinidade pelo Fe 3+ . Quando células
são expostas ao cianeto, ele se liga ao sítio de Fe 3+ da
citocromo c oxidase, impedindo a sua conversão em Fe 2+ e
bloqueando a cadeia respiratória. Substrato proveniente do
nutriente Forma reduzida Forma oxidada NAD + Transportador 1
Transportador 2 Transportador 3 Citocromo c oxidase 1 2 O 2 CO
2 NADH Forma reduzida Forma oxidada Forma oxidada ALBERTS, B.
et al. Biologia molecular da célula . Porto Alegre: Artmed,
2010 (adaptado). Esse bloqueio aumenta a concentração celular
de`,
    images: ['/enem/2023/images/enem_2023_d2_q127.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `ATP.` },
      { id: 'B', type: 'text', value: `água.` },
      { id: 'C', type: 'text', value: `NADH.` },
      { id: 'D', type: 'text', value: `dióxido de carbono.` },
      { id: 'E', type: 'text', value: `citocromo c oxidase.` },
    ],
    correct: 'C',
    explanation: `Na cadeia respiratória, os elétrons do NADH são transferidos até a citocromo c oxidase, permitindo a reoxidação do NADH a NAD⁺. O cianeto liga-se ao Fe³⁺ da citocromo c oxidase e bloqueia o fluxo de elétrons, impedindo o aceptor final (O₂) de atuar. Com a cadeia bloqueada, o NADH não é reoxidado a NAD⁺ e se acumula no interior da célula. Assim, o bloqueio aumenta a concentração celular de NADH (alternativa C).`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 128,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `É comum em viagens de avião sermos solicitados a 
desligar aparelhos cujo funcionamento envolva a emissão 
ou a recepção de ondas eletromagnéticas, como celulares. 
A justificativa dada para esse procedimento é, entre 
outras coisas, a necessidade de eliminar fontes de sinais 
eletromagnéticos que possam interferir nas comunicações, 
via rádio, dos pilotos com a torre de controle. 
Essa interferência poderá ocorrer somente se as ondas 
emitidas pelo celular e as recebidas pelo rádio do avião`,
    alternatives: [
      { id: 'A', type: 'text', value: `forem ambas audíveis.` },
      { id: 'B', type: 'text', value: `tiverem a mesma potência.` },
      { id: 'C', type: 'text', value: `tiverem a mesma frequência.` },
      { id: 'D', type: 'text', value: `tiverem a mesma intensidade.` },
      { id: 'E', type: 'text', value: `propagarem-se com velocidades diferentes.` },
    ],
    correct: 'C',
    explanation: `A interferência entre o sinal do celular e o do rádio do avião só pode ocorrer se as ondas emitidas e recebidas puderem se sobrepor na mesma faixa de operação do receptor. Isso acontece quando ambas têm a mesma frequência, pois o rádio é sintonizado para captar sinais de uma frequência específica. Diferenças de potência, intensidade ou velocidade não determinam, por si só, a interferência no receptor. Portanto, a interferência ocorre se as ondas tiverem a mesma frequência (alternativa C).`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 129,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O Aldrin é um inseticida agrícola organoclorado sintético de
baixa polaridade, cuja estrutura molecular simétrica, de
fórmula C 12 H 8 Cl 6 , está representada na figura.
Introduzido na agricultura a partir da década de 1950, esse
composto apresenta alta persistência no meio ambiente e
acumulação nos organismos, sendo danoso para a saúde. H C H Cl
C Cl Cl Cl Cl Cl Aldrin VIEGAS JÚNIOR, C. Terpenos com
atividade inseticida: uma alternativa para o controle químico
de insetos. Química Nova , v. 26, n. 3, 2003 (adaptado). Um
pesquisador coletou fluidos biológicos de indivíduos de uma
população contaminada por esse inseticida agrícola. Ele
analisou amostras de saliva, sangue, lágrima, urina e leite
quanto à presença dessa substância. Em qual dos fluidos o
pesquisador provavelmente encontrou a maior concentração dessa
substância?`,
    images: ['/enem/2023/images/enem_2023_d2_q129.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Saliva, por consequência da atividade de enzimas.` },
      { id: 'B', type: 'text', value: `Sangue, em função das hemácias e leucócitos.` },
      { id: 'C', type: 'text', value: `Lágrima, em razão da concentração de sais.` },
      { id: 'D', type: 'text', value: `Urina, pela presença de moléculas de ureia.` },
      { id: 'E', type: 'text', value: `Leite, por causa do alto teor de gorduras.` },
    ],
    correct: 'E',
    explanation: `O Aldrin é um composto organoclorado de baixa polaridade, isto é, apolar e lipossolúvel. Pelo princípio 'semelhante dissolve semelhante', essa substância tende a se concentrar nos meios ricos em lipídios. Entre os fluidos analisados, o leite é o que apresenta o maior teor de gorduras, acumulando, portanto, a maior concentração do inseticida. A resposta é o leite, por causa do alto teor de gorduras (alternativa E).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 130,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma cafeteria adotou copos fabricados a partir 
de uma composição de 50% de plástico reciclado não 
biodegradável e 50% de casca de café. O copo é reutilizável 
e retornável, pois o material, semelhante a uma cerâmica, 
suporta a lavagem. Embora ele seja comercializado por 
um preço considerado alto quando comparado ao de um 
copo de plástico descartável, essa cafeteria possibilita aos 
clientes retornarem o copo sujo e levarem o café quente 
servido em outro copo já limpo e higienizado. O material 
desse copo oferece também o conforto de não esquentar 
na parte externa. 
Cafeteria adota copo reutilizável feito com casca de café. Disponível em: 
www.gazetadopovo.com.br. Acesso em: 5 dez. 2019 (adaptado). 
Quais duas vantagens esse copo apresenta em 
comparação ao copo descartável?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Ter a durabilidade de uma cerâmica e ser totalmente biodegradável.` },
      { id: 'B', type: 'text', value: `Ser tão durável quanto uma cerâmica e ter alta condutividade térmica.` },
      { id: 'C', type: 'text', value: `Ser um mau condutor térmico e aumentar o resíduo biodegradável na natureza.` },
      { id: 'D', type: 'text', value: `Ter baixa condutividade térmica e reduzir o resíduo não biodegradável na natureza.` },
      { id: 'E', type: 'text', value: `Ter alta condutividade térmica e possibilitar a degradação do material no meio ambiente.` },
    ],
    correct: 'D',
    explanation: `O copo, feito de composição semelhante a cerâmica, é mau condutor de calor, ou seja, tem baixa condutividade térmica, por isso não esquenta na parte externa e oferece mais conforto ao usuário. Além disso, por ser reutilizável e retornável, substitui os copos plásticos descartáveis, reduzindo a geração de resíduos não biodegradáveis no ambiente. Essas são as duas vantagens frente ao copo descartável. A resposta é ter baixa condutividade térmica e reduzir o resíduo não biodegradável na natureza (alternativa D).`,
    subject: ['qui'],
    topics: ['Química Ambiental', 'Questões aleatórias'],
  },
  {
    id: 131,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O consumo exagerado de refrigerantes é preocupante, 
pois contribui para o aumento de casos de obesidade e 
diabetes. Considere dois refrigerantes enlatados, um 
comum e um diet, e que ambos possuam a mesma 
quantidade de aditivos, exceto pela presença de 
açúcar. O refrigerante comum contém basicamente 
água carbonatada e grande quantidade de açúcar; 
já o refrigerante diet tem água carbonatada e adoçantes, 
cujas massas são muito pequenas. 
CAVAGIS, A. D. M.; PEREIRA, E. A.; OLIVEIRA, L. C. Um método simples para avaliar o teor 
de sacarose e CO 2 em refrigerantes. Química Nova na Escola , n. 3, ago. 2014 (adaptado). 
Entre as duas versões apresentadas, o refrigerante 
comum possui`,
    alternatives: [
      { id: 'A', type: 'text', value: `maior densidade.` },
      { id: 'B', type: 'text', value: `menor viscosidade.` },
      { id: 'C', type: 'text', value: `maior volume de gás dissolvido.` },
      { id: 'D', type: 'text', value: `menor massa de solutos dissolvidos.` },
      { id: 'E', type: 'text', value: `maior temperatura de congelamento.` },
    ],
    correct: 'A',
    explanation: `Os dois refrigerantes diferem essencialmente pela presença de açúcar: o comum contém grande quantidade de sacarose dissolvida, enquanto o diet usa adoçantes de massa muito pequena. A grande massa de soluto (açúcar) dissolvida no mesmo volume de água aumenta a massa por unidade de volume da solução, elevando sua densidade. Por isso o refrigerante comum é mais denso que o diet (o que explica, inclusive, a lata do comum afundar na água). Assim, o refrigerante comum possui maior densidade (alternativa A).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 132,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O manual de um automóvel alerta sobre os cuidados em relação à
pressão do ar no interior dos pneus. Recomenda-se que a
pressão seja verificada com os pneus frios (a temperatura
ambiente). Um motorista, desatento a essa informação, realizou
uma viagem longa sobre o asfalto quente e, em seguida,
verificou que a pressão P 0 no interior dos pneus não era a
recomendada pelo fabricante. Na ocasião, a temperatura dos
pneus era T 0 . Após um longo período em repouso, os pneus do
carro atingiram a temperatura ambiente T . Durante o
resfriamento, não há alteração no volume dos pneus e na
quantidade de ar no seu interior. Considere o ar dos pneus um
gás perfeito (também denominado gás ideal). Durante o processo
de resfriamento, os valores de pressão em relação à
temperatura ( P × T ) são representados pelo gráfico: P (Pa) P
0`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2023/images/enem_2023_d2_q132_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2023/images/enem_2023_d2_q132_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2023/images/enem_2023_d2_q132_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2023/images/enem_2023_d2_q132_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2023/images/enem_2023_d2_q132_E.jpg` },
    ],
    correct: 'E',
    explanation: `O resfriamento ocorre a volume constante e com quantidade de ar fixa, de modo que vale a lei de Gay-Lussac: P/T = constante, ou seja, a pressão é diretamente proporcional à temperatura absoluta (em kelvin). O gráfico P × T é, portanto, uma reta que passa pela origem, e durante o resfriamento tanto P quanto T diminuem, de P₀ e T₀ para valores menores. O gráfico que mostra essa reta crescente passando pela origem, com o ponto deslocando-se para baixo, é o E (alternativa E).`,
    subject: ['fis'],
    topics: ['Termodinâmica', 'Questões aleatórias'],
  },
  {
    id: 133,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O descarte de detergentes comuns nos esgotos domésticos
ocasiona a formação de uma camada de espuma que impede a
entrada de oxigênio na água. Os microrganismos que vivem
nessas águas não são capazes de quebrar moléculas ramificadas,
ocorrendo assim um desequilíbrio ambiental nos rios. A fórmula
a seguir representa a estrutura química de um tensoativo
presente na composição de um detergente não biodegradável. S O
O O - Na + Tensoativo não biodegradável Qual modificação
química na estrutura desse tensoativo o tornaria um detergente
biodegradável?`,
    images: ['/enem/2023/images/enem_2023_d2_q133.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Retirar a parte polar da molécula.` },
      { id: 'B', type: 'text', value: `Eliminar as insaturações do anel aromático.` },
      { id: 'C', type: 'text', value: `Trocar o grupo aniônico por um grupo neutro.` },
      { id: 'D', type: 'text', value: `Alterar o grupo aniônico por um grupo catiônico.` },
      { id: 'E', type: 'text', value: `Modificar a cadeia carbônica para cadeia normal.` },
    ],
    correct: 'E',
    explanation: `Os microrganismos das águas não conseguem degradar tensoativos de cadeia carbônica ramificada, o que torna o detergente não biodegradável. Para torná-lo biodegradável, basta modificar a cadeia carbônica ramificada para uma cadeia normal (linear), que pode ser quebrada pelos microrganismos decompositores. As alterações na parte polar ou no grupo aniônico não resolvem o problema da biodegradabilidade. Logo, a modificação adequada é alterar a cadeia carbônica para cadeia normal (alternativa E).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 134,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Avaliação de substâncias genotóxicas 
O ensaio de micronúcleos é um teste de avaliação de 
genotoxicidade que associa a presença de micronúcleos 
(pequenos núcleos que aparecem próximo aos núcleos 
das células) com lesões genéticas. Os micronúcleos são 
fragmentos de DNA encapsulados, provenientes do fuso 
mitótico durante a divisão celular. 
DIAS, V. M. Micronúcleos em células tumorais : biologia e implicações 
para a tumorigênese. Dissertação de Mestrado. USP, 2006 (adaptado). 
Os micronúcleos se originam dos(as)`,
    alternatives: [
      { id: 'A', type: 'text', value: `nucléolos.` },
      { id: 'B', type: 'text', value: `lisossomos.` },
      { id: 'C', type: 'text', value: `ribossomos.` },
      { id: 'D', type: 'text', value: `mitocôndrias.` },
      { id: 'E', type: 'text', value: `cromossomos.` },
    ],
    correct: 'E',
    explanation: `Os micronúcleos são descritos como fragmentos de DNA encapsulados, originados de porções de material genético que não foram corretamente distribuídas pelo fuso durante a divisão celular. Esses fragmentos provêm de cromossomos (ou de pedaços deles) que ficaram atrasados e não se incorporaram aos núcleos-filhos. Por isso sua presença está associada a lesões genéticas e genotoxicidade. Assim, os micronúcleos se originam dos cromossomos (alternativa E).`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 135,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O petróleo é uma matéria-prima muito valiosa e métodos
geofísicos são úteis na sua prospecção. É possível identificar
a composição de materiais estratificados medindo-se a
velocidade de propagação do som (onda mecânica) através deles.
Considere que uma camada de 450 m de um líquido se encontra
presa no subsolo entre duas camadas rochosas, conforme o
esquema. Um pulso acústico (que gera uma vibração mecânica) é
emitido a partir da superfície do solo, onde são
posteriormente recebidas duas vibrações refletidas (ecos). A
primeira corresponde à reflexão do pulso na interface superior
do líquido com a camada rochosa. A segunda vibração deve-se à
reflexão do pulso na interface inferior. O tempo entre a
emissão do pulso e a chegada do primeiro eco é de 0,5 s. O
segundo eco chega 1,1 s após a emissão do pulso. Emissor e
detector de pulsos Rocha 450 m Líquido Rocha A velocidade do
som na camada líquida, em metro por segundo, é`,
    images: ['/enem/2023/images/enem_2023_d2_q135.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `270.` },
      { id: 'B', type: 'text', value: `540.` },
      { id: 'C', type: 'text', value: `818.` },
      { id: 'D', type: 'text', value: `1 500.` },
      { id: 'E', type: 'text', value: `1 800.` },
    ],
    correct: 'D',
    explanation: `O primeiro eco (0,5 s) corresponde à reflexão na interface superior do líquido e não envolve a travessia da camada líquida. O segundo eco (1,1 s) inclui, além desse trajeto, a ida e a volta pela camada de líquido. O intervalo entre os dois ecos é Δt = 1,1 − 0,5 = 0,6 s para percorrer duas vezes a espessura do líquido (2 × 450 = 900 m). A velocidade do som no líquido é v = 900 m ÷ 0,6 s = 1 500 m/s (alternativa D).`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 136,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um artista plástico esculpe uma escultura a partir de um bloco
de madeira de lei, em etapas. Inicialmente, esculpe um cone
reto com 36 cm de altura e diâmetro da base medindo 18 cm. Em
seguida, remove desse cone um cone menor, cujo diâmetro da
base mede 6 cm, obtendo, assim, um tronco de cone, conforme
ilustrado na figura. 6 cm 36 cm 18 cm Em seguida, perfura esse
tronco de cone, removendo um cilindro reto, de diâmetro 6 cm,
cujo eixo de simetria é o mesmo do cone original. Dessa forma,
ao final, a escultura tem a forma de um tronco de cone com uma
perfuração cilíndrica de base a base. O tipo de madeira
utilizada para produzir essa escultura tem massa igual a 0,6 g
por centímetro cúbico de volume. Utilize 3 como aproximação
para π . Qual é a massa, em grama, dessa escultura?`,
    images: ['/enem/2023/images/enem_2023_d2_q136.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 198,8` },
      { id: 'B', type: 'text', value: `1 296,0` },
      { id: 'C', type: 'text', value: `1 360,8` },
      { id: 'D', type: 'text', value: `4 665,6` },
      { id: 'E', type: 'text', value: `4 860,0` },
    ],
    correct: 'B',
    explanation: `Cone maior: raio R=9 cm, altura 36 cm. O cone menor (diâmetro 6, r=3) é semelhante na razão 3, logo sua altura é 36/3=12 cm, e o tronco tem altura 36−12=24 cm. V(cone maior)=(1/3)·π·9²·36=(1/3)·3·81·36=2916 cm³. V(cone menor)=(1/3)·3·3²·12=108 cm³. V(tronco)=2916−108=2808 cm³. Cilindro furado: r=3, altura 24: V=π·3²·24=3·9·24=648 cm³. Volume da escultura=2808−648=2160 cm³. Massa=0,6·2160=1296 g. Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 137,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Os 100 funcionários de uma empresa estão 
distribuídos em dois setores: Produção e Administração. 
Os funcionários de um mesmo setor recebem salários 
com valores iguais. O quadro apresenta a quantidade de 
funcionários por setor e seus respectivos salários. 
 
A média dos salários dos 100 funcionários dessa 
empresa, em real, é`,
    images: ['/enem/2023/images/enem_2023_d2_q137_1.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `2 000,00.` },
      { id: 'B', type: 'text', value: `2 500,00.` },
      { id: 'C', type: 'text', value: `3 250,00.` },
      { id: 'D', type: 'text', value: `4 500,00.` },
      { id: 'E', type: 'text', value: `9 000,00.` },
    ],
    correct: 'C',
    explanation: `Média ponderada dos salários: (75·2000+25·7000)/100=(150000+175000)/100=325000/100=3250. Resposta: C.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 138,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Visando atrair mais clientes, o gerente de uma loja 
anunciou uma promoção em que cada cliente que realizar 
uma compra pode ganhar um voucher para ser usado 
em sua próxima compra. Para ganhar seu voucher, 
o cliente precisa retirar, ao acaso, uma bolinha de dentro 
de cada uma das duas urnas A e B disponibilizadas pelo 
gerente, nas quais há apenas bolinhas pretas e brancas. 
Atualmente, a probabilidade de se escolher, ao acaso, 
uma bolinha preta na urna A é igual a 20% e a probabilidade 
de se escolher uma bolinha preta na urna B é 25%. 
Ganha o voucher o cliente que retirar duas bolinhas pretas, 
uma de cada urna. 
Com o passar dos dias, o gerente percebeu que, para a 
promoção ser viável aos negócios, era preciso alterar 
a probabilidade de acerto do cliente sem alterar a regra 
da promoção. Para isso, resolveu alterar a quantidade de 
bolinhas brancas na urna B de forma que a probabilidade 
de um cliente ganhar o voucher passasse a ser menor ou 
igual a 1%. Sabe-se que a urna B tem 4 bolinhas pretas e 
que, em ambas as urnas, todas as bolinhas têm a mesma 
probabilidade de serem retiradas. 
Qual é o número mínimo de bolinhas brancas que o 
gerente deve adicionar à urna B?`,
    alternatives: [
      { id: 'A', type: 'text', value: `20` },
      { id: 'B', type: 'text', value: `60` },
      { id: 'C', type: 'text', value: `64` },
      { id: 'D', type: 'text', value: `68` },
      { id: 'E', type: 'text', value: `80` },
    ],
    correct: 'C',
    explanation: `A urna B tinha 16 bolas (4 pretas e 12 brancas, pois 4/16=0,25=25%). Ganhar = tirar preta de A e de B: P=0,20·4/(16+x), onde x são as brancas acrescentadas. Exigir P≤1%: 0,20·4/(16+x)≤0,01 → 0,8/(16+x)≤0,01 → 16+x≥80 → x≥64. Mínimo: 64 bolinhas brancas. Resposta: C.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 139,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O gerente de uma fábrica pretende comparar a evolução das vendas de dois produtos similares (I e II). Para isso, 
passou a verificar o número de unidades vendidas de cada um desses produtos em cada mes. Os resultados dessa 
verificação, para os meses de 
O gerente estava decidido a cessar a produção do produto II no mes seguinte aquele em que as vendas do 
produto I superassem as do produto II. 
Suponha que a variação na quantidade de unidades vendidas dos produtos I e II se manteve, mes a mes, como 
no período representado na tabela. 
Em qual mês o produto II parou de ser produzido?`,
    images: ['/enem/2023/images/enem_2023_d2_q139.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Junho.` },
      { id: 'B', type: 'text', value: `Julho.` },
      { id: 'C', type: 'text', value: `Agosto.` },
      { id: 'D', type: 'text', value: `Setembro.` },
      { id: 'E', type: 'text', value: `Outubro.` },
    ],
    correct: 'D',
    explanation: `Produto I é PA de razão +10 (abr 80, mai 90, jun 100): jul 110, ago 120, set 130. Produto II é PA de razão −20 (abr 190, mai 170, jun 150): jul 130, ago 110, set 90. Em agosto, I=120 supera II=110 pela primeira vez; a produção cessa no mês seguinte, setembro. Resposta: D.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Questões aleatórias'],
  },
  {
    id: 140,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: ``,
    images: ['/enem/2023/images/enem_2023_d2_q140.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `mediana = média < moda.` },
      { id: 'B', type: 'text', value: `mediana = moda < média.` },
      { id: 'C', type: 'text', value: `mediana < média < moda.` },
      { id: 'D', type: 'text', value: `moda < média < mediana.` },
      { id: 'E', type: 'text', value: `moda < mediana < média.` },
    ],
    correct: 'E',
    explanation: `Frequências (viagens:motoristas): 1:10, 2:10, 3:55, 4:25, 5:0, 6:50, 7:10 (total 160). Moda=3 (maior frequência). Mediana: média da 80ª e 81ª posições, ambas na classe de 4 viagens → mediana=4. Média=(1·10+2·10+3·55+4·25+6·50+7·10)/160=(10+20+165+100+300+70)/160=665/160≈4,16. Logo moda(3) < mediana(4) < média(4,16). Resposta: E.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 141,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `No alojamento de uma universidade, há alguns quartos com o padrão superior ao dos demais. Um desses quartos 
ficou disponível, e muitos estudantes se candidataram para morar no local. Para escolher quem ficará com o quarto, 
um sorteio será realizado. Para esse sorteio, cartões individuais com os nomes de todos os estudantes inscritos serão 
depositados em uma urna, sendo que, para cada estudante de primeiro ano, será depositado um único cartão com 
seu nome; para cada estudante de segundo ano, dois cartões com seu nome; e, para cada estudante de terceiro ano, 
três cartões com seu nome. Foram inscritos 200 estudantes de primeiro ano, 150 de segundo ano e 100 de terceiro 
ano. Todos os cartões têm a mesma probabilidade de serem sorteados. 
Qual a probabilidade de o vencedor do sorteio ser um estudante de terceiro ano?`,
    alternatives: [
      { id: 'A', type: 'text', value: `1 2` },
      { id: 'B', type: 'text', value: `1 3` },
      { id: 'C', type: 'text', value: `1 8` },
      { id: 'D', type: 'text', value: `2 9` },
      { id: 'E', type: 'text', value: `3 8` },
    ],
    correct: 'E',
    explanation: `Cartões na urna: 1º ano 200·1=200; 2º ano 150·2=300; 3º ano 100·3=300; total 800. P(3º ano)=300/800=3/8. Resposta: E.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 142,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A água utilizada pelos 75 moradores de um vilarejo provém de um reservatório de formato cilíndrico circular reto 
cujo raio da base mede 5 metros, sempre abastecido no primeiro dia de cada mês por caminhões-pipa. Cada morador 
desse vilarejo consome, em média, 200 litros de água por dia. 
No mês de junho de um determinado ano, o vilarejo festejou o dia do seu padroeiro e houve um gasto extra de água 
nos primeiros 20 dias. Passado esse período, as pessoas verificaram a quantidade de água presente no reservatório 
e constataram que o nível da coluna de água estava em 1,5 metro. Decidiram, então, fazer um racionamento de água 
durante os 10 dias seguintes. Considere 3 como aproximação para π. 
Qual é a quantidade mínima de água, em litro, que cada morador, em média, deverá economizar por dia, de modo 
que o reservatório não fique sem água nos próximos 10 dias?`,
    alternatives: [
      { id: 'A', type: 'text', value: `50` },
      { id: 'B', type: 'text', value: `60` },
      { id: 'C', type: 'text', value: `80` },
      { id: 'D', type: 'text', value: `140` },
      { id: 'E', type: 'text', value: `150` },
    ],
    correct: 'A',
    explanation: `Volume de água restante = π·R²·h = 3·5²·1,5 = 112,5 m³ = 112500 L. Dividindo por 75 moradores e 10 dias: 112500/(75·10)=150 L por morador por dia. Como o consumo normal é 200 L/dia, a economia mínima é 200−150=50 L/dia. Resposta: A.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 143,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Em janeiro do ano passado, a direção de uma fábrica abriu uma creche para os filhos de seus funcionários, com 
10 salas, cada uma com capacidade para atender 10 crianças a cada ano. As vagas são sorteadas entre os filhos 
dos funcionários inscritos, enquanto os não contemplados pelo sorteio formam uma lista de espera. No ano passado, 
a lista de espera teve 400 nomes e, neste ano, esse número cresceu 10%. 
A direção da fábrica realizou uma pesquisa e constatou que a lista de espera para o próximo ano terá a mesma 
quantidade de nomes da lista de espera deste ano. Decidiu, então, construir, ao longo desse ano, novas salas para 
a creche, também com capacidade de atendimento para 10 crianças cada, de modo que o número de nomes na lista 
de espera no próximo ano seja 25% menor que o deste ano. 
O número mínimo de salas que deverão ser construídas é`,
    alternatives: [
      { id: 'A', type: 'text', value: `10.` },
      { id: 'B', type: 'text', value: `11.` },
      { id: 'C', type: 'text', value: `13.` },
      { id: 'D', type: 'text', value: `30.` },
      { id: 'E', type: 'text', value: `33.` },
    ],
    correct: 'B',
    explanation: `Capacidade atual: 10 salas·10=100 vagas/ano. Lista de espera deste ano=400·1,10=440. Total de inscritos este ano=100+440=540. Lista desejada para o próximo ano=440·0,75=330. Vagas necessárias=540−330=210 → 21 salas. Já existem 10, logo construir 21−10=11 salas. Resposta: B.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 144,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A foto mostra a construção de uma cisterna destinada ao
armazenamento de água. Uma cisterna como essa, na forma de
cilindro circular reto com 3 m² de área da base, foi
abastecida por um curso-d’água com vazão constante. O seu
proprietário registrou a altura do nível da água no interior
da cisterna durante o abastecimento em diferentes momentos de
um mesmo dia, conforme o quadro. Horário (h) Nível da água (m)
6:00 0,5 8:00 1,1 12:00 2,3 15:00 3,2 Disponível em:
www.paraibamix.com. Acesso em: 3 dez. 2012. Qual foi a vazão,
em metro cúbico por hora, do curso-d’água que abasteceu a
cisterna?`,
    images: ['/enem/2023/images/enem_2023_d2_q144_1.jpg', '/enem/2023/images/enem_2023_d2_q144_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0,3` },
      { id: 'B', type: 'text', value: `0,5` },
      { id: 'C', type: 'text', value: `0,9` },
      { id: 'D', type: 'text', value: `1,8` },
      { id: 'E', type: 'text', value: `2,7` },
    ],
    correct: 'C',
    explanation: `A vazão é constante. Entre 6:00 e 8:00 (2 h) o nível subiu 1,1−0,5=0,6 m. Volume acrescentado=área da base·altura=3·0,6=1,8 m³ em 2 h. Vazão=1,8/2=0,9 m³/h. Resposta: C.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 145,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Num certo momento de um jogo digital, a tela apresenta a
imagem representada na figura. O ponto Q 1 representa a
posição de um jogador que está com a bola, os pontos Q 2 , Q 3
, Q 4 , Q 5 e Q 6 também indicam posições de jogadores da
mesma equipe, e os pontos A e B indicam os dois pés da trave
mais próxima deles. No momento da partida retratado, o jogador
Q 1 tem a posse da bola, que será passada para um dos outros
jogadores das posições Q n , n ∈ {2, 3, 4, 5, 6}, cujo ângulo
AQ B n tenha a mesma medida do ângulo AQ B 1 . Q 3 A Q 2 Q 4 Q
5 α B Q 1 Q 6 Qual é o jogador que receberá a bola?`,
    images: ['/enem/2023/images/enem_2023_d2_q145.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Q 2` },
      { id: 'B', type: 'text', value: `Q 3` },
      { id: 'C', type: 'text', value: `Q 4` },
      { id: 'D', type: 'text', value: `Q 5` },
      { id: 'E', type: 'text', value: `Q 6` },
    ],
    correct: 'B',
    explanation: `Pelo teorema do ângulo inscrito, pontos sobre um mesmo arco de circunferência enxergam o segmento AB sob ângulos de igual medida. O jogador cuja posição está sobre o arco da circunferência que passa por A, B e Q1 vê AB sob o mesmo ângulo α; na figura, esse jogador é Q3. Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 146,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O triângulo da figura é denominado triângulo mágico. 
Nos círculos, escrevem-se os números de 1 a 6, sem 
repetição, com um número em cada círculo. O objetivo 
é distribuir os números de forma que as somas dos 
números em cada lado do triângulo sejam iguais. 
Considere que os números colocados nos vértices 
do triângulo estejam em progressão aritmética de razão 
igual a 2. 
Nas condições propostas, quais as possíveis soluções 
para as somas dos números que formam os lados do 
triângulo?`,
    images: ['/enem/2023/images/enem_2023_d2_q146.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Há somente uma solução possível, e as somas em cada lado do triângulo são iguais a 7.` },
      { id: 'B', type: 'text', value: `Há somente uma solução possível, e as somas em cada lado do triângulo são iguais a 9.` },
      { id: 'C', type: 'text', value: `Há somente duas soluções possíveis, uma em que as somas em cada lado do triângulo são iguais a 7 e outra em que as somas são iguais a 9.` },
      { id: 'D', type: 'text', value: `Há somente duas soluções possíveis, uma em que as somas em cada lado do triângulo são iguais a 9 e outra em que as somas são iguais a 12.` },
      { id: 'E', type: 'text', value: `Há somente duas soluções possíveis, uma em que as somas em cada lado do triângulo são iguais a 10 e outra em que as somas são iguais a 11.` },
    ],
    correct: 'E',
    explanation: `A soma 1+2+…+6=21. Cada vértice pertence a dois lados, logo 3S=21+V, onde V é a soma dos vértices e S a soma de cada lado. Com os vértices em PA de razão 2: {1,3,5} → V=9 → 3S=30 → S=10; ou {2,4,6} → V=12 → 3S=33 → S=11. As duas distribuições se realizam, dando somas 10 e 11. Resposta: E.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Questões aleatórias'],
  },
  {
    id: 147,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Alguns estudos comprovam que os carboidratos 
fornecem energia ao corpo, preservam as proteínas 
estruturais dos músculos durante a prática de atividade 
física e ainda dão força para o cérebro coordenar os 
movimentos, o que de fato tem impacto positivo no 
desenvolvimento do praticante. O ideal é consumir 1 grama 
de carboidrato para cada minuto de caminhada. 
CIRINO, C. Boa pergunta: consumir carboidratos antes dos exercícios melhora o 
desempenho do atleta? Revista Saúde! É Vital , n. 330, nov. 2010 (adaptado). 
Um casal realizará diariamente 30 minutos de 
caminhada, ingerindo, antes dessa atividade, a quantidade 
ideal de carboidratos recomendada. Para ter o consumo ideal 
apenas por meio do consumo de pão de fôrma integral, o 
casal planeja garantir o suprimento de pães para um período 
de 30 dias ininterruptos. Sabe-se que cada pacote desse pão 
vem com 18 fatias, e que cada uma delas tem 15 gramas 
de carboidratos. 
A quantidade mínima de pacotes de pão de fôrma 
necessários para prover o suprimento a esse casal é`,
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `4.` },
      { id: 'C', type: 'text', value: `6.` },
      { id: 'D', type: 'text', value: `7.` },
      { id: 'E', type: 'text', value: `8.` },
    ],
    correct: 'D',
    explanation: `Cada pessoa consome 1 g/min · 30 min = 30 g por dia; o casal, 60 g/dia. Em 30 dias: 60·30=1800 g. Cada pacote fornece 18·15=270 g. 1800/270≈6,67; arredondando para cima, 7 pacotes. Resposta: D.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 148,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O mastro de uma bandeira foi instalado perpendicularmente ao
solo em uma região plana. Devido aos fortes ventos, três cabos
de aço, de mesmo comprimento, serão instalados para dar
sustentação ao mastro. Cada cabo de aço ficará perfeitamente
esticado, com uma extremidade num ponto P do mastro, a uma
altura h do solo, e a outra extremidade, num ponto no chão,
como mostra a figura. P h α α α Os cabos de aço formam um
ângulo a com o plano do chão. Por medida de segurança, há
apenas três opções de instalação: • opção I: h = 11 m e a =
30° • opção II: h = 12 m e a = 45° • opção III: h = 18 m e a =
60° A opção a ser escolhida é aquela em que a medida dos cabos
seja a menor possível. Qual será a medida, em metro, de cada
um dos cabos a serem instalados?`,
    images: ['/enem/2023/images/enem_2023_d2_q148.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `22√3/3` },
      { id: 'B', type: 'text', value: `11√2` },
      { id: 'C', type: 'text', value: `12√2` },
      { id: 'D', type: 'text', value: `12√3` },
      { id: 'E', type: 'text', value: `22` },
    ],
    correct: 'C',
    explanation: `O cabo é a hipotenusa, com L=h/sen α. Opção I: 11/sen30°=11/0,5=22 m. Opção II: 12/sen45°=12/(√2/2)=12√2≈16,97 m. Opção III: 18/sen60°=18/(√3/2)=12√3≈20,78 m. O menor comprimento é 12√2 (opção II). Resposta: C.`,
    subject: ['mat'],
    topics: ['Trigonometria', 'Questões aleatórias'],
  },
  {
    id: 149,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um controlador de voo dispõe de um instrumento que descreve a
altitude de uma aeronave em voo, em função da distância em
solo. Essa distância em solo é a medida na horizontal entre o
ponto de origem do voo até o ponto que representa a projeção
ortogonal da posição da aeronave, em voo, no solo. Essas duas
grandezas são dadas numa mesma unidade de medida. A tela do
instrumento representa proporcionalmente as dimensões reais
das distâncias associadas ao voo. A figura apresenta a tela do
instrumento depois de concluída a viagem de um avião, sendo a
medida do lado de cada quadradinho da malha igual a 1 cm.
Altitude Origem do voo Destino Distância Essa tela apresenta
os dados de um voo cuja maior altitude alcançada foi de 5 km.
A escala em que essa tela representa as medidas reais é`,
    images: ['/enem/2023/images/enem_2023_d2_q149.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 : 5.` },
      { id: 'B', type: 'text', value: `1 : 11.` },
      { id: 'C', type: 'text', value: `1 : 55.` },
      { id: 'D', type: 'text', value: `1 : 5 000.` },
      { id: 'E', type: 'text', value: `1 : 500 000.` },
    ],
    correct: 'E',
    explanation: `A maior altitude real é 5 km=500000 cm, representada na tela por 1 quadradinho=1 cm. A escala é desenho:real=1 cm:500000 cm=1:500000. Resposta: E.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 150,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Dirigir após ingerir bebidas alcoólicas é uma atitude 
extremamente perigosa, uma vez que, a partir da primeira 
dose, a pessoa já começa a ter perda de sensibilidade 
de movimentos e de reflexos. Apesar de a eliminação e 
absorção do álcool depender de cada pessoa e de como 
o organismo consegue metabolizar a substância, ao final 
da primeira hora após a ingestão, a concentração de álcool 
( C ) no sangue corresponde a aproximadamente 90% da 
quantidade ( q ) de álcool ingerida, e a eliminação total 
dessa concentração pode demorar até 12 horas. 
Disponível em: http://g1.globo.com. Acesso em: 1 dez. 2018 (adaptado). 
Nessas condições, ao final da primeira hora após a ingestão 
da quantidade q de álcool, a concentração C dessa 
substância no sangue é expressa algebricamente por`,
    alternatives: [
      { id: 'A', type: 'text', value: `C = 0,9 q` },
      { id: 'B', type: 'text', value: `C = 0,1 q` },
      { id: 'C', type: 'text', value: `C = 1 − 0,1 q` },
      { id: 'D', type: 'text', value: `C = 1 − 0,9 q` },
      { id: 'E', type: 'text', value: `C = q − 10` },
    ],
    correct: 'A',
    explanation: `A concentração ao final da 1ª hora é 90% da quantidade q ingerida: C=0,90·q=0,9q. Resposta: A.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 151,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um investidor iniciante observou o gráfico que 
apresenta a evolução dos valores de duas criptomoedas 
A e B em relação ao tempo. 
Criptomoeda B 
(milhar de real) 
Criptomoeda A 
(milhar de real) 
Durante horas consecutivas, esses valores foram 
observados em nove instantes, representados por horas 
exatas. 
Em quantos desses instantes a criptomoeda A estava 
mais valorizada do que a criptomoeda B?`,
    images: ['/enem/2023/images/enem_2023_d2_q151.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `3` },
      { id: 'B', type: 'text', value: `4` },
      { id: 'C', type: 'text', value: `6` },
      { id: 'D', type: 'text', value: `7` },
      { id: 'E', type: 'text', value: `9` },
    ],
    correct: 'B',
    explanation: `A criptomoeda A está mais valorizada que B nos instantes em que a coordenada A (eixo horizontal) supera a coordenada B (eixo vertical), ou seja, pontos abaixo da reta y=x. Dos nove instantes observados, isso ocorre em 4 deles. Resposta: B.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 152,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A exposição a alguns níveis sonoros pode causar 
lesões auditivas. Por isso, em uma indústria, são adotadas 
medidas preventivas de acordo com a máquina que o 
funcionário opera e o nível N de intensidade do som, 
medido em decibel (dB), a que o operário é exposto, 
sendo N = 10·log₁₀(I/I₀), I a intensidade do som e 
I₀ = 10⁻¹² W/m² . 
Disponível em: www.sofisica.com.br. Acesso em: 8 jul. 2015 (adaptado). 
Quando o som é considerado baixo, ou seja, 
N = 48 dB ou menos, deve ser utilizada a medida 
preventiva I. No caso de o som ser moderado, quando 
N está no intervalo (48 dB, 55 dB), deve ser utilizada a 
medida preventiva II. Quando o som é moderado alto, 
que equivale a N no intervalo (55 dB, 80 dB), a medida 
preventiva a ser usada é a III. Se N estiver no intervalo 
(80 dB, 115 dB), quando o som é considerado alto, deve ser 
utilizada a medida preventiva IV. E se o som é considerado 
muito alto, com N maior que 115 dB, deve-se utilizar a 
medida preventiva V. 
Uma nova máquina, com I = 8×10⁻⁸ W/m² , foi adquirida 
e será classificada de acordo com o nível de ruído 
que produz. 
Considere 0,3 como aproximação para log₁₀ 2. 
O funcionário que operará a nova máquina deverá adotar 
a medida preventiva`,
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },
    ],
    correct: 'B',
    explanation: `N=10·log10(I/I0)=10·log10(8·10⁻⁸/10⁻¹²)=10·log10(8·10⁴)=10·(log10 8 + 4)=10·(3·log10 2 + 4)=10·(3·0,3 + 4)=10·4,9=49 dB. Como 48<49<55, o som é moderado → medida preventiva II. Resposta: B.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 153,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um supermercado conta com cinco caixas disponíveis 
para pagamento. Foram instaladas telas que apresentam 
o tempo médio gasto por cada caixa para iniciar e finalizar o 
atendimento de cada cliente, e o número de pessoas 
presentes na fila de cada caixa em tempo real. Um cliente, 
na hora de passar sua compra, sabendo que cada um 
dos cinco caixas iniciará um novo atendimento naquele 
momento, pretende gastar o menor tempo possível de 
espera na fila. Ele observa que as telas apresentavam as 
informações a seguir. 
• Caixa I: atendimento 12 minutos, 5 pessoas na fila. 
• Caixa II: atendimento 6 minutos, 9 pessoas na fila. 
• Caixa III: atendimento 5 minutos, 6 pessoas na fila. 
• Caixa IV: atendimento 15 minutos, 2 pessoas na fila. 
• Caixa V: atendimento 9 minutos, 3 pessoas na fila. 
Para alcançar seu objetivo, o cliente deverá escolher o caixa`,
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },
    ],
    correct: 'E',
    explanation: `Tempo de espera = (nº de pessoas na fila)·(tempo de atendimento). I: 5·12=60; II: 9·6=54; III: 6·5=30; IV: 2·15=30; V: 3·9=27 min. O menor tempo é o do caixa V. Resposta: E.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 154,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `As figuras pintadas no quadro da sala de estar de 
uma residência representam as silhuetas de parte das 
torres de um castelo e, ao fundo, a de uma lua cheia. 
A lua foi pintada na forma de um círculo, e o telhado da 
torre mais alta, na forma de triângulo equilátero, foi pintado 
sobrepondo parte da lua. O centro da lua coincide com um 
dos vértices do telhado da torre mais alta. 
Nesse quadro, a parte da lua escondida atrás da torre 
mais alta do castelo pode ser representada por um`,
    images: ['/enem/2023/images/enem_2023_d2_q154.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `cone.` },
      { id: 'B', type: 'text', value: `setor circular.` },
      { id: 'C', type: 'text', value: `segmento circular.` },
      { id: 'D', type: 'text', value: `triângulo isósceles.` },
      { id: 'E', type: 'text', value: `arco de circunferência.` },
    ],
    correct: 'B',
    explanation: `O vértice do telhado (triângulo equilátero) coincide com o centro da lua (círculo). As duas arestas que partem desse vértice funcionam como raios, e a parte da lua escondida é a região limitada por esses dois raios e pelo arco entre eles — ou seja, um setor circular. Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 155,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Na planta baixa de um clube, a piscina é representada por um
quadrado cuja área real mede 400 m². Ao redor dessa piscina,
será construída uma calçada, de largura constante igual a 5 m.
5 m Calçada 5 m Piscina 5 m 5 m Qual é a medida da área, em
metro quadrado, ocupada pela calçada?`,
    images: ['/enem/2023/images/enem_2023_d2_q155.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 000` },
      { id: 'B', type: 'text', value: `900` },
      { id: 'C', type: 'text', value: `600` },
      { id: 'D', type: 'text', value: `500` },
      { id: 'E', type: 'text', value: `400` },
    ],
    correct: 'D',
    explanation: `O lado da piscina: l²=400 → l=20 m. O quadrado maior (piscina + calçada) tem lado 20+5+5=30 m, área 30²=900 m². Área da calçada=900−400=500 m². Resposta: D.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 156,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: ``,
    images: ['/enem/2023/images/enem_2023_d2_q156.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `6` },
      { id: 'B', type: 'text', value: `8` },
      { id: 'C', type: 'text', value: `10` },
      { id: 'D', type: 'text', value: `14` },
      { id: 'E', type: 'text', value: `24` },
    ],
    correct: 'A',
    explanation: `O celular fica sem sinal nos intervalos em que a intensidade é zero: de 10 a 12 min (2 min) e de 16 a 20 min (4 min). Total=2+4=6 minutos. Resposta: A.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 157,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: ``,
    images: ['/enem/2023/images/enem_2023_d2_q157.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `10` },
      { id: 'B', type: 'text', value: `20` },
      { id: 'C', type: 'text', value: `30` },
      { id: 'D', type: 'text', value: `50` },
      { id: 'E', type: 'text', value: `70` },
    ],
    correct: 'B',
    explanation: `Traçando as retas massa=80 kg e altura=1,65 m, buscam-se os estudantes com massa abaixo de 80 kg e altura acima de 1,65 m (quadrante superior esquerdo). São 2 dos 10 estudantes: 2/10=20%. Resposta: B.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 158,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um pescador tem um custo fixo diário de R$ 900,00 
com combustível, iscas, manutenção de seu barco e outras 
pequenas despesas. Ele vende cada quilograma de peixe por 
R$ 5,00. Sua meta é obter um lucro mínimo de R$ 800,00 
por dia. Sozinho, ele consegue, ao final de um dia de trabalho, 
pescar 180 kg de peixe, o que é suficiente apenas para cobrir o 
custo fixo diário. Portanto, precisa contratar ajudantes, pagando 
para cada um R$ 250,00 por dia de trabalho. Além desse valor, 
4% da receita obtida pela venda de peixe é repartida igualmente 
entre os ajudantes. Considerando o tamanho de seu barco, ele 
pode contratar até 5 ajudantes. Ele sabe que com um ajudante 
a pesca diária é de 300 kg e que, a partir do segundo 
ajudante contratado, aumenta-se em 100 kg a quantidade de 
peixe pescada por ajudante em um dia de trabalho. 
A quantidade mínima de ajudantes que esse pescador 
precisa contratar para conseguir o lucro diário pretendido é`,
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `2.` },
      { id: 'C', type: 'text', value: `3.` },
      { id: 'D', type: 'text', value: `4.` },
      { id: 'E', type: 'text', value: `5.` },
    ],
    correct: 'D',
    explanation: `Lucro = 5·(kg pescados) − 900 − 250·n − 0,04·receita. n=1: 300 kg, receita 1500, lucro=1500−900−250−60=290. n=2: 400 kg, receita 2000, lucro=2000−900−500−80=520. n=3: 500 kg, receita 2500, lucro=2500−900−750−100=750. n=4: 600 kg, receita 3000, lucro=3000−900−1000−120=980≥800. Mínimo: 4 ajudantes. Resposta: D.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 159,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um agricultor é informado sobre um método de proteção 
para sua lavoura que consiste em inserir larvas específicas, 
de rápida reprodução. A reprodução dessas larvas faz com 
que sua população multiplique-se por 10 a cada 3 dias e, 
para evitar eventuais desequilíbrios, é possível cessar essa 
reprodução aplicando-se um produto X. O agricultor decide 
iniciar esse método com 100 larvas e dispõe de 5 litros do 
produto X, cuja aplicação recomendada é de exatamente 
1 litro para cada população de 200 000 larvas. A quantidade 
total do produto X de que ele dispõe deverá ser aplicada 
de uma única vez. 
Quantos dias após iniciado esse método o agricultor 
deverá aplicar o produto X?`,
    alternatives: [
      { id: 'A', type: 'text', value: `2` },
      { id: 'B', type: 'text', value: `4` },
      { id: 'C', type: 'text', value: `6` },
      { id: 'D', type: 'text', value: `12` },
      { id: 'E', type: 'text', value: `18` },
    ],
    correct: 'D',
    explanation: `A população é 100·10^(d/3). O total de produto X trata 5·200000=1000000 larvas. Então 100·10^(d/3)=1000000 → 10^(d/3)=10000=10⁴ → d/3=4 → d=12 dias. Resposta: D.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Questões aleatórias'],
  },
  {
    id: 160,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Ao realizar o cadastro em um aplicativo de investimentos, 
foi solicitado ao usuário que criasse uma senha, sendo 
permitido o uso somente dos seguintes caracteres: 
• algarismos de 0 a 9; 
• 26 letras minúsculas do alfabeto; 
• 26 letras maiúsculas do alfabeto; 
• 6 caracteres especiais !, @, #, $, %, &. 
Três tipos de estruturas para senha foram apresentadas 
ao usuário: 
• tipo I: formada por quaisquer quatro caracteres 
distintos, escolhidos dentre os permitidos; 
• tipo II: formada por cinco caracteres distintos, 
iniciando por três letras, seguidas por um algarismo 
e, ao final, um caractere especial; 
• tipo III: formada por seis caracteres distintos, iniciando 
por duas letras, seguidas por dois algarismos e, ao 
final, dois caracteres especiais. 
Considere p 1 , p 2 e p 3 as probabilidades de se 
descobrirem ao acaso, na primeira tentativa, as senhas 
dos tipos I, II e III, respectivamente. 
Nessas condições, o tipo de senha que apresenta a 
menor probabilidade de ser descoberta ao acaso, na 
primeira tentativa, é o`,
    alternatives: [
      { id: 'A', type: 'text', value: `tipo I, pois p 1 < p 2 < p 3 .` },
      { id: 'B', type: 'text', value: `tipo I, pois tem menor quantidade de caracteres.` },
      { id: 'C', type: 'text', value: `tipo II, pois tem maior quantidade de letras.` },
      { id: 'D', type: 'text', value: `tipo III, pois p 3 < p 2 < p 1 .` },
      { id: 'E', type: 'text', value: `tipo III, pois tem maior quantidade de caracteres.` },
    ],
    correct: 'A',
    explanation: `Quanto mais senhas possíveis, menor a probabilidade de acerto na 1ª tentativa. Tipo I: 68·67·66·65≈1,95·10⁷. Tipo II: 52·51·50·10·6≈7,96·10⁶. Tipo III: 52·51·10·9·6·5≈7,16·10⁶. Como o tipo I tem o maior número de senhas, tem a menor probabilidade de ser descoberta (p1<p2<p3). Resposta: A.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 161,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma loja vende seus produtos de duas formas: 
à vista ou financiado em três parcelas mensais iguais. 
Para definir o valor dessas parcelas nas vendas 
financiadas, a loja aumenta em 20% o valor do produto 
à vista e divide esse novo valor por 3. A primeira parcela 
deve ser paga no ato da compra, e as duas últimas, 
em 30 e 60 dias após a compra. 
Um cliente da loja decidiu comprar, de forma financiada, 
um produto cujo valor à vista é R$ 1 500,00. 
Utilize 5,29 como aproximação para 
28 . 
A taxa mensal de juros compostos praticada nesse 
financiamento é de`,
    alternatives: [
      { id: 'A', type: 'text', value: `6,7%` },
      { id: 'B', type: 'text', value: `10%` },
      { id: 'C', type: 'text', value: `20%` },
      { id: 'D', type: 'text', value: `21,5%` },
      { id: 'E', type: 'text', value: `23,3%` },
    ],
    correct: 'D',
    explanation: `Aumento de 20%: 1500·1,2=1800; cada parcela=1800/3=600 (uma no ato, outras em 30 e 60 dias). Igualando o valor presente das parcelas ao preço à vista: 600+600/(1+i)+600/(1+i)²=1500. Com x=1+i: 600x²+600x+600=1500x² → 900x²−600x−600=0 → 3x²−2x−2=0 → x=(2+√28)/6=(2+5,29)/6≈1,215. Logo i≈0,215=21,5% ao mês. Resposta: D.`,
    subject: ['mat'],
    topics: ['Matemática financeira', 'Questões aleatórias'],
  },
  {
    id: 162,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Para concretar a laje de sua residência, uma pessoa 
contratou uma construtora. Tal empresa informa que o 
preço y do concreto bombeado é composto de duas 
partes: uma fixa, chamada de taxa de bombeamento, 
e uma variável, que depende do volume x de concreto 
utilizado. Sabe-se que a taxa de bombeamento custa 
R$ 500,00 e que o metro cúbico do concreto bombeado 
é de R$ 250,00. 
A expressão que representa o preço y em função do 
volume x , em metro cúbico, é`,
    alternatives: [
      { id: 'A', type: 'text', value: `y = 250 x` },
      { id: 'B', type: 'text', value: `y = 500 x` },
      { id: 'C', type: 'text', value: `y = 750 x` },
      { id: 'D', type: 'text', value: `y = 250 x + 500` },
      { id: 'E', type: 'text', value: `y = 500 x + 250` },
    ],
    correct: 'D',
    explanation: `Preço = parte fixa (R$500) + parte variável (R$250 por m³): y=250x+500. Resposta: D.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 163,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma empresa de segurança domiciliar oferece o serviço de
patrulha noturna, no qual vigilantes em motocicletas fazem o
monitoramento periódico de residências. A empresa conta com
uma base, de onde acompanha o trajeto realizado pelos
vigilantes durante as patrulhas e orienta o deslocamento de
equipes de reforço quando necessário. Numa patrulha rotineira,
sem ocorrências, um vigilante conduziu sua motocicleta a uma
velocidade constante durante todo o itinerário estabelecido,
levando 30 minutos para conclusão. De acordo com os registros
do GPS alocado na motocicleta, a distância da posição do
vigilante à base, ao longo do tempo de realização do trajeto,
é descrita pelo gráfico. Distância do vigilante em relação à
base em função do tempo 4 Distância do vigilante à base (km) 3
2 1 Tempo (min) 0 10 20 30 A vista superior da trajetória
realizada pelo vigilante durante a patrulha registrada no
gráfico é descrita pela representação`,
    images: ['/enem/2023/images/enem_2023_d2_q163.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2023/images/enem_2023_d2_q163_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2023/images/enem_2023_d2_q163_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2023/images/enem_2023_d2_q163_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2023/images/enem_2023_d2_q163_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2023/images/enem_2023_d2_q163_E.jpg` },
    ],
    correct: 'A',
    explanation: `De 0 a 10 min a distância cresce de 0 a 3 km linearmente (afastando-se em linha reta a velocidade constante). De 10 a 20 min permanece em 3 km → o vigilante percorre um arco de circunferência de raio 3 km centrado na base. De 20 a 30 min a distância volta a 0 → trecho reto de retorno. Como cada etapa dura 10 min a velocidade constante, o arco tem comprimento igual ao de cada trecho reto (não maior). A vista superior com dois segmentos retos e um arco intermediário compatível é a representação A. Resposta: A.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 164,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O gráfico expõe alguns números da gripe A-H1N1. Entre as
categorias que estão em processo de imunização, uma já está
completamente imunizada, a dos trabalhadores da saúde. Números
da campanha contra a gripe A-H1N1 Adultos entre 20 e 29 anos
Gestantes Doentes crônicos Indígenas Crianças de 6 meses a 2
anos Trabalhadores da saúde 0,0% 10,0% 20,0% 30,0% 40,0% 50,0%
60,0% 70,0% 80,0% 90,0% 100,0% De acordo com o gráfico, entre
as demais categorias, a que esta mais exposta ao vírus da
gripe A-H1N1 e a categoria de`,
    images: ['/enem/2023/images/enem_2023_d2_q164.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `indígenas.` },
      { id: 'B', type: 'text', value: `gestantes.` },
      { id: 'C', type: 'text', value: `doentes crônicos.` },
      { id: 'D', type: 'text', value: `adultos entre 20 e 29 anos.` },
      { id: 'E', type: 'text', value: `crianças de 6 meses a 2 anos.` },
    ],
    correct: 'A',
    annulled: true,
    explanation: `Questão anulada — não há resposta oficial única. Lendo o gráfico, a categoria mais exposta seria a de menor percentual de imunização entre as demais: os adultos entre 20 e 29 anos (≈42%). Por ambiguidade no enunciado, a questão foi anulada. Resposta: questão anulada.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 165,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A figura representa uma escada com três degraus, construída em concreto macico, com suas medidas especificadas. 
Nessa escada, pisos e espelhos têm formato retangular, e as paredes laterais tem formato de um polígono cujos 
lados adjacentes são perpendiculares. Pisos, espelhos e paredes laterais serão revestidos em cerâmica. 
A área a ser revestida em cerâmica, em metro quadrado, mede`,
    images: ['/enem/2023/images/enem_2023_d2_q165.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1,20.` },
      { id: 'B', type: 'text', value: `1,35.` },
      { id: 'C', type: 'text', value: `1,65.` },
      { id: 'D', type: 'text', value: `1,80.` },
      { id: 'E', type: 'text', value: `1,95.` },
    ],
    correct: 'E',
    explanation: `Pisos: 3·(0,25·1)=0,75 m². Espelhos: 3·(0,20·1)=0,60 m². Cada parede lateral é um polígono em degraus decomposto em retângulos de largura 0,25 e alturas 0,6; 0,4; 0,2: área=0,25·(0,6+0,4+0,2)=0,25·1,2=0,30 m²; as duas laterais somam 0,60 m². Total=0,75+0,60+0,60=1,95 m². Resposta: E.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 166,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma pessoa pratica quatro atividades físicas - caminhar, correr, andar de bicicleta e jogar futebol - como parte 
de seu programa de emagrecimento. Essas atividades são praticadas semanalmente de acordo com o quadro, que 
apresenta o número de horas diárias por atividade. 
 
Ela deseja comemorar seu aniversário e escolhe o dia da semana em que o gasto calórico com as atividades 
físicas praticadas for o maior. Para tanto, considera que os valores dos gastos calóricos das atividades por hora (cal/h) 
são os seguintes: 
 
O dia da semana em que será comemorado o aniversário é`,
    images: ['/enem/2023/images/enem_2023_d2_q166_1.jpg', '/enem/2023/images/enem_2023_d2_q166_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `segunda-feira.` },
      { id: 'B', type: 'text', value: `terça-feira.` },
      { id: 'C', type: 'text', value: `quarta-feira.` },
      { id: 'D', type: 'text', value: `quinta-feira.` },
      { id: 'E', type: 'text', value: `sexta-feira.` },
    ],
    correct: 'C',
    explanation: `Gasto diário=Σ(horas·cal/h), com caminhar 248, correr 764, bicicleta 356, futebol 492. Seg: 1·248+0,5·764+2·492=248+382+984=1614. Ter: 0,5·248+764+0,5·356+492=124+764+178+492=1558. Qua: 1,5·764+1·356+0,5·492=1146+356+246=1748. Qui: 2·764=1528. Sex: 0,5·764+2,5·492=382+1230=1612. O maior gasto é na quarta-feira (1748 cal). Resposta: C.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 167,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A cada bimestre, a diretora de uma escola compra uma quantidade de folhas de papel ofício proporcional ao número 
de alunos matriculados. No bimestre passado, ela comprou 6 000 folhas para serem utilizadas pelos 1 200 alunos 
matriculados. Neste bimestre, alguns alunos cancelaram suas matrículas e a escola tem, agora, 1 150 alunos. 
A diretora só pode gastar R$ 220,00 nessa compra, e sabe que o fornecedor da escola vende as folhas de papel 
ofício em embalagens de 100 unidades a R$ 4,00 a embalagem. Assim, será preciso convencer o fornecedor a dar um 
desconto à escola, de modo que seja possível comprar a quantidade total de papel ofício necessária para o bimestre. 
O desconto necessário no preço final da compra, em porcentagem, pertence ao intervalo`,
    alternatives: [
      { id: 'A', type: 'text', value: `(5,0 ; 5,5).` },
      { id: 'B', type: 'text', value: `(8,0 ; 8,5).` },
      { id: 'C', type: 'text', value: `(11,5 ; 12,5).` },
      { id: 'D', type: 'text', value: `(19,5 ; 20,5).` },
      { id: 'E', type: 'text', value: `(3,5 ; 4,0).` },
    ],
    correct: 'A',
    explanation: `Folhas por aluno=6000/1200=5. Necessárias=1150·5=5750 folhas → 58 embalagens de 100. Custo=58·4=232 reais. Desconto=(232−220)/232=12/232≈5,17%, que pertence ao intervalo (5,0; 5,5). Resposta: A.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 168,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Em um colégio público, a admissão no primeiro ano se 
dá por sorteio. Neste ano há 55 candidatos, cujas inscrições 
são numeradas de 01 a 55. O sorteio de cada número de 
inscrição será realizado em etapas, utilizando-se duas 
urnas. Da primeira urna será sorteada uma bola, dentre 
bolas numeradas de 0 a 9, que representará o algarismo 
das unidades do número de inscrição a ser sorteado e, em 
seguida, da segunda urna, será sorteada uma bola para 
representar o algarismo das dezenas desse número. Depois 
do primeiro sorteio, e antes de se sortear o algarismo das 
dezenas, as bolas que estarão presentes na segunda 
urna serão apenas aquelas cujos números formam, com o 
algarismo já sorteado, um número de 01 a 55. 
As probabilidades de os candidatos de inscrição número 
50 e 02 serem sorteados são, respectivamente,`,
    alternatives: [
      { id: 'A', type: 'text', value: `1/50 e 1/60` },
      { id: 'B', type: 'text', value: `1/50 e 1/50` },
      { id: 'C', type: 'text', value: `1/50 e 1/10` },
      { id: 'D', type: 'text', value: `1/55 e 1/54` },
      { id: 'E', type: 'text', value: `1/100 e 1/100` },

    ],
    correct: 'A',
    explanation: `Nº 50: unidade 0 (P=1/10); entre 01 e 55, os números terminados em 0 são 10,20,30,40,50 → 5 bolas de dezena (P=1/5): P=1/10·1/5=1/50. Nº 02: unidade 2 (P=1/10); terminados em 2 entre 01 e 55 são 02,12,22,32,42,52 → 6 bolas (P=1/6): P=1/10·1/6=1/60. Logo, 1/50 e 1/60. Resposta: A.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 169,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O esquema mostra como a intensidade luminosa 
decresce com o aumento da profundidade em um rio, 
sendo L₀ a intensidade na sua superfície. 
Profundidade: 0 m — Intensidade luminosa: L₀ 
Profundidade: 1 m — Intensidade luminosa: (2/3) L₀ 
Profundidade: 2 m — Intensidade luminosa: (4/9) L₀ 
Profundidade: 3 m — Intensidade luminosa: (8/27) L₀ 
Considere que a intensidade luminosa diminui, a cada 
metro acrescido na profundidade, segundo o mesmo 
padrão do esquema. 
A intensidade luminosa correspondente à profundidade 
de 6 m é igual a`,
    images: ['/enem/2023/images/enem_2023_d2_q169.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `(1/9) L₀` },
      { id: 'B', type: 'text', value: `(16/27) L₀` },
      { id: 'C', type: 'text', value: `(32/243) L₀` },
      { id: 'D', type: 'text', value: `(64/729) L₀` },
      { id: 'E', type: 'text', value: `(128/2187) L₀` },
    ],
    correct: 'D',
    explanation: `A cada metro a intensidade é multiplicada por 2/3 (PG). A 6 m: L=(2/3)⁶·L0=64/729·L0. Resposta: D.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Questões aleatórias'],
  },
  {
    id: 170,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Analisando as vendas de uma empresa, o gerente concluiu que o montante diário arrecadado, em milhar de real, poderia ser calculado por uma expressão envolvendo x, em que os valores de x representam os dias do mês, variando de 1 a 30.
Um dos fatores para avaliar o desempenho mensal da empresa é verificar qual é o menor montante diário V0 arrecadado ao longo do mês e classificar o desempenho conforme as categorias apresentadas a seguir, em que as quantidades estão expressas em milhar de real:
Ótimo: V0 >= 24
Bom: 20 <= V0 < 24
Normal: 10 <= V0 < 20
Ruim: 4 <= V0 < 10
Péssimo: V0 < 4
No caso analisado, qual seria a classificação do desempenho da empresa?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Ótimo.` },
      { id: 'B', type: 'text', value: `Bom.` },
      { id: 'C', type: 'text', value: `Normal.` },
      { id: 'D', type: 'text', value: `Ruim.` },
      { id: 'E', type: 'text', value: `Péssimo.` },
    
    ],
    correct: 'D',
    explanation: `V(x)=x²/4−10x+105 é parábola de concavidade para cima; o mínimo está no vértice x=−b/2a=10/(2·¼)=20 (dentro de 1 a 30). V(20)=400/4−200+105=100−200+105=5. Como 4≤5<10, o desempenho é Ruim. Resposta: D.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 171,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O calendário maia apresenta duas contagens 
simultâneas de anos, o chamado ano Tzolkim, composto 
por 260 dias e que determinava o calendário religioso, 
e o ano Haab, composto por 365 dias e que determinava o 
calendário agrícola. Um historiador encontrou evidências 
de que gerações de uma mesma família governaram certa 
comunidade maia pelo período de 20 ciclos, sendo cada 
ciclo formado por 52 anos Haab. 
Disponível em: www.suapesquisa.com. Acesso em: 20 ago. 2014. 
De acordo com as informações fornecidas, durante 
quantos anos Tzolkim aquela comunidade maia foi 
governada por tal família?`,
    alternatives: [
      { id: 'A', type: 'text', value: `741` },
      { id: 'B', type: 'text', value: `1 040` },
      { id: 'C', type: 'text', value: `1 460` },
      { id: 'D', type: 'text', value: `2 100` },
      { id: 'E', type: 'text', value: `5 200` },
    ],
    correct: 'C',
    explanation: `1 ciclo Haab=52·365=18980 dias; 20 ciclos=20·18980=379600 dias. Em anos Tzolkim (260 dias): 379600/260=1460. Resposta: C.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 172,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Sejam a , b e c as medidas dos lados de um triângulo 
retângulo, tendo a como medida da hipotenusa. Esses 
valores a , b e c são, respectivamente, os diâmetros dos 
círculos C 1 , C 2 e C 3 , como apresentados na figura. 
Círculo C 1 
c 
a 
Círculo C 3 
b 
Círculo C 2 
Observe que essa construção assegura, pelo teorema 
de Pitágoras, que área ( C 1 ) = área ( C 2 ) + área ( C 3 ). 
Um professor de matemática era conhecedor dessa 
construção e, confraternizando com dois amigos em uma 
pizzaria onde são vendidas pizzas somente em formato 
de círculo, lançou um desafio: mesmo sem usar um 
instrumento de medição, poderia afirmar com certeza se 
a área do círculo correspondente à pizza que ele pedisse 
era maior, igual ou menor do que a soma das áreas das 
pizzas dos dois amigos. Assim, foram pedidas três pizzas. 
O professor as dividiu ao meio e formou um triângulo com 
os diâmetros das pizzas, conforme indicado na figura. 
Meia pizza do professor 
de matemática 
Meia pizza do 
amigo 1 
α 
Meia pizza do amigo 2 
A partir da medida do ângulo a , o professor afirmou 
que a área de sua pizza é maior do que a soma das áreas 
das outras duas pizzas. 
A área da pizza do professor de matemática é maior do 
que a soma das áreas das outras duas pizzas, pois`,
    images: ['/enem/2023/images/enem_2023_d2_q172_1.jpg', '/enem/2023/images/enem_2023_d2_q172_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0° < a < 90°` },
      { id: 'B', type: 'text', value: `a = 90°` },
      { id: 'C', type: 'text', value: `90° < a < 180°` },
      { id: 'D', type: 'text', value: `a = 180°` },
      { id: 'E', type: 'text', value: `180° < a < 360°` },
    ],
    correct: 'C',
    explanation: `As áreas dos círculos são proporcionais ao quadrado dos diâmetros: C1∝a², C2∝b², C3∝c². Assim área(C1)>área(C2)+área(C3) ⇔ a²>b²+c². Pela lei dos cossenos, a²=b²+c²−2bc·cos α, logo a²>b²+c² ⇔ −2bc·cos α>0 ⇔ cos α<0. Num triângulo 0°<α<180°, e cos α<0 ocorre quando 90°<α<180°. Resposta: C.`,
    subject: ['mat'],
    topics: ['Trigonometria', 'Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 173,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Entre maratonistas, um parâmetro utilizado é o de 
economia de corrida (EC). O valor desse parâmetro é 
calculado pela razão entre o consumo de oxigênio, em 
mililitro (mL) por minuto (min), e a massa, em quilograma (kg), 
do atleta correndo a uma velocidade constante. 
Disponível em: www.treinamentoonline.com.br. Acesso em: 23 out. 2019 (adaptado). 
Um maratonista, visando melhorar sua performance, 
auxiliado por um médico, mensura o seu consumo de 
oxigênio por minuto a velocidade constante. Com base 
nesse consumo e na massa do atleta, o médico calcula 
o EC do atleta. 
A unidade de medida da grandeza descrita pelo 
parâmetro EC é`,
    alternatives: [
      { id: 'A', type: 'text', value: `min mL kg ⋅` },
      { id: 'B', type: 'text', value: `mL min kg ⋅` },
      { id: 'C', type: 'text', value: `min mL ⋅ kg` },
      { id: 'D', type: 'text', value: `min kg mL ⋅` },
      { id: 'E', type: 'text', value: `é mL kg min ⋅` },
    ],
    correct: 'B',
    explanation: `EC = consumo de O₂ (mL/min) dividido pela massa (kg) = (mL/min)/kg = mL/(min·kg). Resposta: B.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 174,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Uma pessoa comprou um ingresso para o cinema em cuja entrada está afixado um mapa com a representação 
bidimensional do posicionamento das poltronas, conforme a figura. Essa pessoa, após consultar o mapa, começou 
a subir uma das escadas e parou na posição indicada pela estrela, direcionada para o norte. Ela conferiu seu bilhete 
e observou que, para encontrar sua poltrona, deveria partir do ponto onde estava, continuar subindo a escada na 
direção norte por mais quatro fileiras e olhar à sua direita, e sua poltrona será a terceira.
Nesse cinema, as poltronas são identificadas por uma letra, que indica a fileira, e um número, que fornece a
posição da poltrona na fileira, respectivamente.
A poltrona dessa pessoa é a identificada por`,
    images: ['/enem/2023/images/enem_2023_d2_q174.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A6.` },
      { id: 'B', type: 'text', value: `H1.` },
      { id: 'C', type: 'text', value: `H6.` },
      { id: 'D', type: 'text', value: `I1.` },
      { id: 'E', type: 'text', value: `I6.` },
    ],
    correct: 'E',
    explanation: `Partindo da estrela (fileira E, voltada para o norte) e subindo mais 4 fileiras: E→F→G→H→I, chega-se à fileira I. Olhando à direita (leste), conta-se até a terceira poltrona do bloco central (posições 4, 5, 6): a terceira é a 6. Logo, a poltrona é I6. Resposta: E.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 175,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `O metrô de um município oferece dois tipos de tíquetes com colorações diferentes, azul e vermelha, sendo vendidos 
em cartelas, cada qual com nove tíquetes da mesma cor e mesmo valor unitário. Duas cartelas de tíquetes azuis e 
uma cartela de tíquetes vermelhos são vendidas por R$ 32,40. Sabe-se que o preço de um tíquete azul menos o preço 
de um tíquete vermelho é igual ao preço de um tíquete vermelho mais cinco centavos. 
Qual o preço, em real, de uma cartela de tíquetes vermelhos?`,
    alternatives: [
      { id: 'A', type: 'text', value: `4,68` },
      { id: 'B', type: 'text', value: `6,30` },
      { id: 'C', type: 'text', value: `9,30` },
      { id: 'D', type: 'text', value: `10,50` },
      { id: 'E', type: 'text', value: `10,65` },
    ],
    correct: 'B',
    explanation: `Sejam a o preço de um tíquete azul e v o do vermelho. 18a+9v=32,40 e a−v=v+0,05 → a=2v+0,05. Substituindo: 18(2v+0,05)+9v=32,40 → 36v+0,9+9v=32,40 → 45v=31,5 → v=0,70. A cartela vermelha=9v=9·0,70=6,30. Resposta: B.`,
    subject: ['mat'],
    topics: ['Equações e inequações', 'Questões aleatórias'],
  },
  {
    id: 176,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: ``,
    images: ['/enem/2023/images/enem_2023_d2_q176.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `59.` },
      { id: 'B', type: 'text', value: `83.` },
      { id: 'C', type: 'text', value: `86.` },
      { id: 'D', type: 'text', value: `89.` },
      { id: 'E', type: 'text', value: `92.` },
    ],
    correct: 'E',
    explanation: `As diferenças entre termos consecutivos crescem de 3 em 3: +4,+7,+10,+13,+16,+19,+22. Assim a sequência é 1, 5, 12, 22, 35, 51, 70, 92. O 8º número pentagonal é 92. Resposta: E.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Questões aleatórias'],
  },
  {
    id: 177,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `A figura ilustra uma roda-gigante no exato instante em 
que a cadeira onde se encontra a pessoa P está no ponto 
mais alto dessa roda-gigante. 
P 
Solo 
Com o passar do tempo, à medida que a roda-gigante 
gira, com velocidade angular constante e no sentido 
horário, a altura da cadeira onde se encontra a pessoa P , 
em relação ao solo, vai se alterando. 
O gráfico que melhor representa a variação dessa altura, 
em função do tempo, contado a partir do instante em que 
a cadeira da pessoa P se encontra na posição mais alta 
da roda-gigante, é 
relação ao solo 
Altura em`,
    images: ['/enem/2023/images/enem_2023_d2_q177.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2023/images/enem_2023_d2_q177_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2023/images/enem_2023_d2_q177_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2023/images/enem_2023_d2_q177_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2023/images/enem_2023_d2_q177_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2023/images/enem_2023_d2_q177_E.jpg` },
    ],
    correct: 'A',
    explanation: `A partir do ponto mais alto, a altura varia periodicamente (movimento circular uniforme), descrevendo uma função cossenoidal: começa no máximo, decresce até o mínimo e volta ao máximo, repetindo-se. Isso corresponde ao gráfico A. Resposta: A.`,
    subject: ['mat'],
    topics: ['Trigonometria', 'Questões aleatórias'],
  },
  {
    id: 178,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Estudantes trabalhando com robótica criaram uma 
“torneira inteligente” que automatiza sua abertura e seu 
fechamento durante a limpeza das mãos. A tecnologia 
funciona da seguinte forma: ao se colocarem as mãos 
sob a torneira, ela libera água durante 3 segundos para 
que a pessoa possa molhá-las. Em seguida, interrompe o 
fornecimento de água por 5 segundos, enquanto a pessoa 
ensaboa suas mãos, e finaliza o ciclo liberando água para 
o enxágue por mais 3 segundos. Considere o tempo ( t ), 
em segundo, contado a partir do instante em que se inicia 
o ciclo. A vazão de água nessa torneira é constante. 
Um esboço de gráfico que descreve o volume de água 
acumulado, em litro, liberado por essa torneira durante um 
ciclo de lavagem das mãos, em função do tempo ( t ), em 
segundo, é 
Volume de água (L)`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2023/images/enem_2023_d2_q178_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2023/images/enem_2023_d2_q178_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2023/images/enem_2023_d2_q178_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2023/images/enem_2023_d2_q178_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2023/images/enem_2023_d2_q178_E.jpg` },
    ],
    correct: 'B',
    explanation: `O volume acumulado cresce linearmente enquanto há água (0 a 3 s), fica constante enquanto a torneira está fechada (3 a 8 s) e volta a crescer linearmente, com a mesma inclinação, de 8 a 11 s. O volume nunca diminui e parte do patamar já acumulado após a pausa — comportamento do gráfico B. Resposta: B.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 179,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `As características culturais variam de povo para povo. 
Há notícias de um povo que possuía formas de contar 
diferentes das nossas, como indicado no quadrinho a seguir. 
Segundo o padrão de contagem indicado na figura, as 
representações dos numerais cinco e sete, nessa cultura, 
devem ser, respectivamente,`,
    images: ['/enem/2023/images/enem_2023_d2_q179.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `okosa urapum urapum urapum e okosa okosa urapum urapum urapum.` },
      { id: 'B', type: 'text', value: `okosa okosa urapum e okosa okosa okosa okosa urapum.` },
      { id: 'C', type: 'text', value: `okosa okosa urapum e okosa okosa okosa urapum.` },
      { id: 'D', type: 'text', value: `okosa urapum urapum e okosa urapum okosa urapum urapum.` },
      { id: 'E', type: 'text', value: `okosa okosa urapum e okosa okosa okosa okosa.` },
    ],
    correct: 'C',
    explanation: `No sistema indicado, cada 'okosa' vale 2 e cada 'urapum' vale 1, escrevendo-se primeiro os okosa (mais unidades possíveis de maior valor). Assim 5=2+2+1 → 'okosa okosa urapum' e 7=2+2+2+1 → 'okosa okosa okosa urapum'. Resposta: C.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Questões aleatórias'],
  },
  {
    id: 180,
    exam: 'enem',
    year: 2023,
    day: 2,
    text: `Um tipo de semente necessita de bastante água nos 
dois primeiros meses após o plantio. Um produtor pretende 
estabelecer o melhor momento para o plantio desse tipo de 
semente, nos meses de outubro a março. Após consultar 
a previsão do índice mensal de precipitação de chuva 
(ImPC) da região onde ocorrerá o plantio, para o período 
chuvoso de 2020 - 2021, ele obteve os seguintes dados: 
• outubro/2020: ImPC = 250 mm; 
• novembro/2020: ImPC = 150 mm; 
• dezembro/2020: ImPC = 200 mm; 
• janeiro/2021: ImPC = 450 mm; 
• fevereiro/2021: ImPC = 100 mm; 
• março/2021: ImPC = 200 mm. 
Com base nessas previsões, ele precisa escolher 
dois meses consecutivos em que a média mensal de 
precipitação seja a maior possível. 
No início de qual desses meses o produtor deverá plantar 
esse tipo de semente?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Outubro.` },
      { id: 'B', type: 'text', value: `Novembro.` },
      { id: 'C', type: 'text', value: `Dezembro.` },
      { id: 'D', type: 'text', value: `Janeiro.` },
      { id: 'E', type: 'text', value: `Fevereiro.` },
    ],
    correct: 'C',
    explanation: `Como são sempre dois meses, a maior média corresponde à maior soma. Out+nov=400; nov+dez=350; dez+jan=650; jan+fev=550; fev+mar=300. A maior é dez+jan, logo planta-se no início de dezembro. Resposta: C.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
];

export default ENEM_2023_D2;
