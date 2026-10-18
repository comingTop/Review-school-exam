import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2019_D2: QuizQuestion[] = [
  {
    id: 91,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Para realizar o desentupimento de tubulações de 
esgotos residenciais, é utilizada uma mistura sólida 
comercial que contém hidróxido de sódio (NaOH) e outra 
espécie química pulverizada. Quando é adicionada 
água a essa mistura, ocorre uma reação que libera gás 
hidrogênio e energia na forma de calor, aumentando a 
eficiência do processo de desentupimento. Considere os 
potenciais padrão de redução ( E ) da água e de outras 
espécies em meio básico, expressos no quadro. 
Semirreação de redução 
E (V) 
2 H₂O + 2 e⁻ → H₂ + 2 OH⁻
−0,83
Co(OH)₂ + 2 e⁻ → Co + 2 OH⁻
−0,73
Cu(OH)₂ + 2 e⁻ → Cu + 2 OH⁻
−0,22
PbO + H₂O + 2 e⁻ → Pb + 2 OH⁻
−0,58
Al(OH)₄⁻ + 3 e⁻ → Al + 4 OH⁻
−2,33
Fe(OH)₂ + 2 e⁻ → Fe + 2 OH⁻
−0,88
Qual é a outra espécie que está presente na composição 
da mistura sólida comercial para aumentar sua eficiência?`,
    images: ['/enem/2019/images/enem_2019_d2_q91.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Al` },
      { id: 'B', type: 'text', value: `Co` },
      { id: 'C', type: 'text', value: `Cu(OH)₂` },
      { id: 'D', type: 'text', value: `Fe(OH)₂` },
      { id: 'E', type: 'text', value: `Pb` },
    ],
    correct: 'A',
    explanation: `O texto descreve uma reação espontânea em meio básico na qual a água é reduzida a gás hidrogênio (2 H₂O + 2 e⁻ → H₂ + 2 OH⁻, E = −0,83 V). Para que essa redução ocorra, a outra espécie precisa ser oxidada (atuar como agente redutor), o que exige um potencial de redução mais negativo que o da água. Entre as opções, apenas o alumínio metálico (Al(OH)₄⁻ + 3 e⁻ → Al, E = −2,33 V) tem potencial bem inferior ao da água, resultando em ddp positiva: ΔE = −0,83 − (−2,33) = +1,50 V > 0. O Co (−0,73 V) e o Pb (−0,58 V) têm potenciais maiores que o da água e não a reduziriam, e as espécies já oxidadas (Cu(OH)₂, Fe(OH)₂) não liberariam H₂. Portanto, a espécie adicionada é o alumínio (alternativa A).`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
  },
  {
    id: 92,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `As redes de alta tensão para transmissão de energia elétrica
geram campo magnético variável o suficiente para induzir
corrente elétrica no arame das cercas. Tanto os animais quanto
os funcionários das propriedades rurais ou das concessionárias
de energia devem ter muito cuidado ao se aproximarem de uma
cerca quando esta estiver próxima a uma rede de alta tensão,
pois, se tocarem no arame da cerca, poderão sofrer choque
elétrico. Para minimizar este tipo de problema, deve-se:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Fazer o aterramento dos arames da cerca.` },
      { id: 'B', type: 'text', value: `Acrescentar fusível de segurança na cerca.` },
      { id: 'C', type: 'text', value: `Realizar o aterramento da rede de alta tensão.` },
      { id: 'D', type: 'text', value: `Instalar fusível de segurança na rede de alta tensão.` },
      { id: 'E', type: 'text', value: `Utilizar fios encapados com isolante na rede de alta tensão.` },
    ],
    correct: 'A',
    explanation: `As redes de alta tensão produzem campo magnético variável que, por indução eletromagnética (lei de Faraday), gera corrente elétrica nos arames da cerca, deixando-os energizados. Para eliminar o risco de choque, a carga induzida precisa ser escoada continuamente para a Terra. Isso é feito aterrando-se os arames da cerca, ligando-os ao solo, de modo que as cargas sejam descarregadas e o potencial se mantenha praticamente nulo. Aterrar a rede de alta tensão ou instalar fusíveis não impede a indução na cerca. Portanto, deve-se fazer o aterramento dos arames da cerca (alternativa A).`,
    subject: ['fis'],
    topics: ['Eletromagnetismo/Indução', 'Questões aleatórias'],
  },
  {
    id: 93,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `A esquistossomose (barriga-dʼágua) caracteriza-se 
pela inflamação do fígado e do baço causada pelo verme 
Schistosoma mansoni (esquistossomo). O contágio 
ocorre depois que larvas do verme são liberadas na 
água pelo caramujo do gênero Biomphalaria , seu 
hospedeiro intermediário, e penetram na pele humana. 
Após o diagnóstico, o tratamento tradicional utiliza 
medicamentos por via oral para matar o parasita dentro 
do corpo. Uma nova estratégia terapêutica baseia-se na 
utilização de uma vacina, feita a partir de uma proteína 
extraída do verme, que induz o organismo humano a 
produzir anticorpos para combater e prevenir a doença. 
Instituto Oswaldo Cruz/Fundação Oswaldo Cruz (IOC/Fiocruz). Fiocruz 
anuncia nova fase de vacina para esquistossomose . Disponível em: 
http://agencia.fiocruz.br. Acesso em: 3 maio 2019 (adaptado). 
Uma vantagem da vacina em relação ao tratamento 
tradicional é que ela poderá`,
    alternatives: [
      { id: 'A', type: 'text', value: `impedir a penetração do parasita pela pele.` },
      { id: 'B', type: 'text', value: `eliminar o caramujo para que não haja contágio.` },
      { id: 'C', type: 'text', value: `impedir o acesso do esquistossomo especificamente para o fígado.` },
      { id: 'D', type: 'text', value: `eliminar o esquistossomo antes que ocorra contato com o organismo.` },
      { id: 'E', type: 'text', value: `eliminar o esquistossomo dentro do organismo antes da manifestação de sintomas.` },
    ],
    correct: 'E',
    explanation: `A vacina é feita de uma proteína do verme e induz o organismo a produzir anticorpos específicos, que passam a circular no corpo mesmo antes de qualquer infecção. Quando as larvas penetram pela pele e alcançam o organismo, esses anticorpos já presentes combatem o parasita, eliminando-o internamente antes que a doença se manifeste. Essa é a vantagem sobre o tratamento tradicional, que só é iniciado após o diagnóstico, ou seja, depois do aparecimento dos sintomas. Os anticorpos não impedem fisicamente a penetração pela pele nem agem sobre o caramujo hospedeiro. Portanto, a vantagem é poder eliminar o esquistossomo dentro do organismo antes da manifestação de sintomas (alternativa E).`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 94,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Em 1962, um jingle (vinheta musical) criado por Heitor Carillo fez tanto sucesso que extrapolou as fronteiras do 
rádio e chegou à televisão ilustrado por um desenho animado. Nele, uma pessoa respondia ao fantasma que batia 
em sua porta, personificando o “frio”, que não o deixaria entrar, pois não abriria a porta e compraria lãs e cobertores 
para aquecer sua casa. Apesar de memorável, tal comercial televisivo continha incorreções a respeito de conceitos 
físicos relativos à calorimetria. 
DUARTE, M. Jingle é a alma do negócio: livro revela os bastidores das musicas de propagandas . 
Disponível em: https://guiadoscuriosos.uol.com.br. Acesso em: 24 abr. 2019 (adaptado). 
Para solucionar essas incorreções, deve-se associar à porta e aos cobertores, respectivamente, as funções de:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Aquecer a casa e os corpos.` },
      { id: 'B', type: 'text', value: `Evitar a entrada do frio na casa e nos corpos.` },
      { id: 'C', type: 'text', value: `Minimizar a perda de calor pela casa e pelos corpos.` },
      { id: 'D', type: 'text', value: `Diminuir a entrada do frio na casa e aquecer os corpos.` },
      { id: 'E', type: 'text', value: `Aquecer a casa e reduzir a perda de calor pelos corpos.` },
    ],
    correct: 'C',
    explanation: `A propaganda erra ao sugerir que a porta e os cobertores aquecem ou impedem a entrada do frio, pois frio não é algo que se desloca: o que ocorre é fluxo de calor do corpo e da casa (mais quentes) para o ambiente (mais frio). A porta, ao fechar o ambiente, reduz a perda de calor da casa para o exterior, e os cobertores, por serem isolantes térmicos, reduzem a perda de calor do corpo. Nenhum dos dois gera calor nem bloqueia frio; ambos apenas dificultam a transferência de calor. Portanto, as funções corretas são minimizar a perda de calor pela casa e pelos corpos (alternativa C).`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 95,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Glicólise é um processo que ocorre nas células, convertendo glicose em piruvato. Durante a prática de exercícios 
físicos que demandam grande quantidade de esforço, a glicose é completamente oxidada na presença de O₂ . 
Entretanto, em alguns casos, as células musculares podem sofrer um déficit de O₂ e a glicose ser convertida em 
duas moléculas de ácido lático. As equações termoquímicas para a combustão da glicose e do ácido lático são, 
respectivamente, mostradas a seguir: 
C₆ H₁₂ O₆ (s) + 6 O₂ (g) → 6 CO₂ (g) + 6 H₂ O (l) ∆ c H = −2 800 kJ 
CH₃ CH(OH)COOH (s) + 3 O₂ (g) → 3 CO₂ (g) + 3 H₂ O (l) ∆ c H = −1 344 kJ 
O processo anaeróbico é menos vantajoso energeticamente porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `libera 112 kJ por mol de glicose.` },
      { id: 'B', type: 'text', value: `libera 467 kJ por mol de glicose.` },
      { id: 'C', type: 'text', value: `libera 2 688 kJ por mol de glicose.` },
      { id: 'D', type: 'text', value: `absorve 1 344 kJ por mol de glicose.` },
      { id: 'E', type: 'text', value: `absorve 2 800 kJ por mol de glicose.` },
    ],
    correct: 'A',
    explanation: `Na via aeróbia a glicose é totalmente oxidada, liberando 2 800 kJ/mol. Na via anaeróbia a glicose é convertida em 2 mols de ácido lático, que ainda poderiam ser oxidados liberando 2 × 1 344 = 2 688 kJ. A energia efetivamente liberada na fermentação é a diferença entre a energia total da glicose e a que permanece presa no ácido lático: 2 800 − 2 688 = 112 kJ por mol de glicose. Como se aproveita apenas 112 kJ contra 2 800 kJ da via aeróbia, o processo anaeróbio é muito menos vantajoso energeticamente. Portanto, libera 112 kJ por mol de glicose (alternativa A).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 96,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `No quadro estão apresentadas informações sobre duas estrategias de sobrevivência que podem ser adotadas 
por algumas espécies de seres vivos. 
 
Na recuperação de uma área desmatada deveriam ser reintroduzidas primeiramente as especies que adotam qual 
estratégia?`,
    images: ['/enem/2019/images/enem_2019_d2_q96.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Estratégia 1, pois essas espécies produzem descendentes pequenos, o que diminui a competição com outras espécies.` },
      { id: 'B', type: 'text', value: `Estratégia 2, pois essas espécies têm uma longa duração da vida, o que favorece a produção de muitos descendentes.` },
      { id: 'C', type: 'text', value: `Estratégia 1, pois essas espécies apresentam um elevado potencial biótico, o que facilita a rápida recolonização da área desmatada.` },
      { id: 'D', type: 'text', value: `Estratégia 2, pois essas espécies estão adaptadas a hábitats mais estáveis, o que corresponde ao ambiente de uma área desmatada.` },
      { id: 'E', type: 'text', value: `Estratégia 2, pois essas espécies apresentam um tamanho populacional constante, o que propicia uma recolonização mais estável da área desmatada.` },
    ],
    correct: 'C',
    explanation: `O quadro mostra que a Estratégia 1 corresponde a espécies r-estrategistas: hábitat instável, potencial biótico muito elevado, vida curta com reprodução precoce e muitos descendentes pequenos. Numa área desmatada (ambiente perturbado e instável), a recolonização inicial depende de organismos que se reproduzam rápido e em grande número. Essas características da Estratégia 1 garantem a rápida ocupação da área degradada, enquanto as espécies da Estratégia 2 (K⁻estrategistas) só se estabelecem bem em ambientes já estáveis. Portanto, devem ser reintroduzidas primeiro as espécies da Estratégia 1, pelo elevado potencial biótico que facilita a rápida recolonização (alternativa C).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 97,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `As cutias, pequenos roedores das zonas tropicais, 
transportam pela boca as sementes que caem das 
árvores, mas, em vez de comê-las, enterram-nas em 
outro lugar. Esse procedimento lhes permite salvar a 
maioria de suas sementes enterradas para as épocas 
mais secas, quando não há frutos maduros disponíveis. 
Cientistas descobriram que as cutias roubam as 
sementes enterradas por outras, e esse comportamento 
de “ladroagem” faz com que uma mesma semente possa 
ser enterrada dezenas de vezes. 
Disponível em: http://chc.cienciahoje.uol.com.br. Acesso em: 30 jul. 2012. 
Essa “ladroagem” está associada à relação de`,
    alternatives: [
      { id: 'A', type: 'text', value: `sinfilia.` },
      { id: 'B', type: 'text', value: `predatismo.` },
      { id: 'C', type: 'text', value: `parasitismo.` },
      { id: 'D', type: 'text', value: `competição.` },
      { id: 'E', type: 'text', value: `comensalismo.` },
    ],
    correct: 'D',
    explanation: `As cutias enterram sementes como reserva alimentar e, segundo o texto, roubam as sementes enterradas umas das outras. Como os indivíduos disputam o mesmo recurso (as sementes) de que todos necessitam, trata-se de uma interação em que há concorrência pelo mesmo recurso. Essa disputa, mesmo entre indivíduos da mesma espécie, caracteriza a relação de competição. Não há predação, parasitismo nem benefício unilateral. Portanto, a ladroagem está associada à competição (alternativa D).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 98,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Os olhos humanos normalmente têm três tipos de cones
responsáveis pela percepção das cores: um tipo para tons
vermelhos, um para tons azuis e outro para tons verdes. As
diversas cores que enxergamos são o resultado da percepção das
cores básicas, como indica a figura. Vermelho Vermelho Verde
Amarelo Branco Magenta Magenta Ciano Azul Azul A protanopia é
um tipo de daltonismo em que há diminuição ou ausência de
receptores da cor vermelha. Considere um teste com dois
voluntários: uma pessoa com visão normal e outra com caso
severo de protanopia. Nesse teste, eles devem escrever a cor
dos cartões que lhes são mostrados. São utilizadas as cores
indicadas na figura. Para qual cartão os dois voluntários
identificarão a mesma cor?`,
    images: ['/enem/2019/images/enem_2019_d2_q98.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Vermelho.` },
      { id: 'B', type: 'text', value: `Magenta.` },
      { id: 'C', type: 'text', value: `Amarelo.` },
      { id: 'D', type: 'text', value: `Branco.` },
      { id: 'E', type: 'text', value: `Azul.` },
    ],
    correct: 'E',
    explanation: `A figura representa a síntese aditiva de cores: o cartão azul estimula apenas os cones sensíveis ao azul, sem envolver a percepção do vermelho. A pessoa com protanopia tem ausência ou redução dos receptores de vermelho, mas mantém normais os receptores de azul. Assim, para cartões cuja cor não depende do vermelho, ambos os voluntários têm a mesma percepção. Cores como vermelho, magenta, amarelo e branco dependem da contribuição do vermelho e seriam vistas de forma diferente pelo protanope. Como o azul não depende do receptor de vermelho, os dois identificam a mesma cor no cartão azul (alternativa E).`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 99,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `A cada safra, a quantidade de café beneficiado 
é igual à quantidade de resíduos gerados pelo seu 
beneficiamento. O resíduo pode ser utilizado como 
fertilizante, pois contém cerca de 6,5% de pectina 
(um polissacarídeo), aproximadamente 25% de açúcares 
fermentáveis (frutose, sacarose e galactose), bem como 
resíduos de alcaloides (compostos aminados) que não 
foram extraídos no processo. 
LIMA, L. K. S. et al. Utilização de resíduo oriundo da torrefação do 
café na agricultura em substituição à adubação convencional. 
 ACSA - Agropecuária Científica no Semi-Árido , 
v. 10, n. 1, jan.-mar., 2014 (adaptado). 
Esse resíduo contribui para a fertilidade do solo, pois`,
    alternatives: [
      { id: 'A', type: 'text', value: `possibilita a reciclagem de carbono e nitrogênio.` },
      { id: 'B', type: 'text', value: `promove o deslocamento do alumínio, que é tóxico.` },
      { id: 'C', type: 'text', value: `melhora a compactação do solo por causa da presença de pectina.` },
      { id: 'D', type: 'text', value: `eleva o pH do solo em função da degradação dos componentes do resíduo.` },
      { id: 'E', type: 'text', value: `apresenta efeitos inibidores de crescimento para a maioria das espécies vegetais pela cafeína.` },
    ],
    correct: 'A',
    explanation: `O resíduo do café contém grande quantidade de matéria orgânica: pectina (polissacarídeo) e açúcares, ricos em carbono, além de alcaloides e compostos aminados, que contêm nitrogênio. Ao ser incorporado ao solo e decomposto pelos microrganismos, esse material devolve carbono e nitrogênio ao ambiente, reintegrando-os aos ciclos biogeoquímicos. Esse retorno de nutrientes é o que aumenta a fertilidade do solo. As demais opções (deslocamento de alumínio, compactação, elevação de pH, inibição pela cafeína) não explicam o ganho de fertilidade. Portanto, o resíduo contribui por possibilitar a reciclagem de carbono e nitrogênio (alternativa A).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 100,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Um alimento orgânico deve apresentar em sua 
embalagem o selo de uma instituição certificadora, 
garantindo ao consumidor que, além de ser um alimento 
isento de agrotóxicos, também é produzido com técnicas 
planejadas e controladas. A técnica de produção desses 
alimentos causa menor impacto aos recursos naturais, 
contribuindo para melhorar a qualidade de vida das 
pessoas. 
Nesse sistema de produção de alimentos vegetais, o 
controle de insetos é manejado por meio do(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `prática de adubação verde.` },
      { id: 'B', type: 'text', value: `emprego da compostagem.` },
      { id: 'C', type: 'text', value: `controle da irrigação do solo.` },
      { id: 'D', type: 'text', value: `utilização de predadores naturais.` },
      { id: 'E', type: 'text', value: `uso de sementes inoculadas com Rhizobium .` },
    ],
    correct: 'D',
    explanation: `Na produção orgânica é proibido o uso de agrotóxicos sintéticos, de modo que o controle de pragas deve ser feito por métodos naturais. O controle biológico consiste em introduzir ou favorecer os inimigos naturais (predadores e parasitoides) dos insetos-praga, mantendo suas populações sob controle. As demais técnicas citadas (adubação verde, compostagem, irrigação e inoculação com Rhizobium) relacionam-se à nutrição do solo e das plantas, e não ao controle de insetos. Portanto, o manejo é feito por meio da utilização de predadores naturais (alternativa D).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 101,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `A eritropoetina (EPO) é um hormônio endógeno 
secretado pelos rins que influencia a maturação dos 
eritrócitos. Suas formas recombinantes, sintetizadas 
em laboratório, têm sido usadas por alguns atletas em 
esportes de resistência na busca por melhores resultados. 
No entanto, a administração da EPO recombinante no 
esporte foi proibida pelo Comitê Olímpico Internacional 
e seu uso considerado doping . 
MARTELLI, A. Eritropoetina: síntese e liberação fisiológica e o uso de 
sua forma recombinante no esporte. Perspectivas Online : 
 biológicas & saúde, v. 10, n. 3, 2013 (adaptado). 
Uma influência que esse doping poderá exercer na 
melhoria da capacidade física desses atletas está 
relacionada ao transporte de`,
    alternatives: [
      { id: 'A', type: 'text', value: `lipídios, para aumento do gasto calórico.` },
      { id: 'B', type: 'text', value: `ATP, para aumento da síntese hormonal.` },
      { id: 'C', type: 'text', value: `oxigênio, para aumento da produção de ATP.` },
      { id: 'D', type: 'text', value: `proteínas, para aumento da massa muscular.` },
      { id: 'E', type: 'text', value: `vitamina C, para aumento da integridade dos vasos sanguíneos.` },
    ],
    correct: 'C',
    explanation: `A EPO estimula a medula óssea a produzir mais eritrócitos (hemácias), células que contêm hemoglobina e transportam oxigênio. Com mais hemácias, aumenta a capacidade de transporte de O₂ para os músculos. Maior oferta de oxigênio intensifica a respiração celular aeróbia, elevando a produção de ATP e, portanto, a resistência física. Esse é justamente o efeito buscado ilegalmente pelos atletas. Portanto, a melhoria está relacionada ao transporte de oxigênio, para aumento da produção de ATP (alternativa C).`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 102,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `O objetivo de recipientes isolantes térmicos é 
minimizar as trocas de calor com o ambiente externo. 
Essa troca de calor é proporcional à condutividade 
térmica k e à área interna das faces do recipiente, 
bem como à diferença de temperatura entre o 
ambiente externo e o interior do recipiente, além de ser 
inversamente proporcional à espessura das faces. 
A fim de avaliar a qualidade de dois recipientes 
A (40 cm × 40 cm × 40 cm) e B (60 cm × 40 cm × 40 cm), 
de faces de mesma espessura, uma estudante compara 
suas condutividades térmicas kA e kB. Para isso suspende,
dentro de cada recipiente, blocos idênticos de gelo a 
0 °C, de modo que suas superfícies estejam em contato 
apenas com o ar. Após um intervalo de tempo, ela abre 
os recipientes enquanto ambos ainda contêm um pouco 
de gelo e verifica que a massa de gelo que se fundiu no 
recipiente B foi o dobro da que se fundiu no recipiente A . 
A razão kA/kB é mais próxima de`,
    alternatives: [
      { id: 'A', type: 'text', value: `0,50.` },
      { id: 'B', type: 'text', value: `0,67.` },
      { id: 'C', type: 'text', value: `0,75.` },
      { id: 'D', type: 'text', value: `1,33.` },
      { id: 'E', type: 'text', value: `2,00.` },
    ],
    correct: 'B',
    explanation: `O calor que entra em cada recipiente é proporcional a k·A·ΔT/espessura; como ΔT, espessura e tempo são iguais, a massa de gelo derretido é proporcional ao produto k·A. As áreas internas totais são A_A = 6 × (40 × 40) = 9 600 cm² e A_B = 2 × (40 × 40) + 4 × (60 × 40) = 3 200 + 9 600 = 12 800 cm². Como no recipiente B derreteu o dobro, k_B·A_B = 2·k_A·A_A, ou seja, k_B × 12 800 = 2·k_A × 9 600. Isolando: k_A/k_B = 12 800 / (2 × 9 600) = 12 800/19 200 ≈ 0,67. Portanto, a razão k_A/k_B é mais próxima de 0,67 (alternativa B).`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 103,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Estudos mostram o desenvolvimento de biochips utilizados para
auxiliar o diagnóstico de diabetes melito, doença evidenciada
pelo excesso de glicose no organismo. O teste é simples e
consiste em duas reações sequenciais na superfície do biochip,
entre a amostra de soro sanguíneo do paciente, enzimas
específicas e reagente (iodeto de potássio, KI), conforme
mostrado na imagem. (i) Biochip antes da adição de soro
Enzimas KI (ii) Biochip após a adição de soro Cor Soro Fluxo
Após a adição de soro sanguíneo, o fluxo desloca- -se
espontaneamente da esquerda para a direita (ii) promovendo
reações sequenciais, conforme as equações 1 e 2. Na primeira,
há conversão de glicose do sangue em ácido glucônico, gerando
peróxido de hidrogênio: Equação 1 C 6 H 12 O 6 (aq) + O 2 (g)
+ H 2 O (l) Enzimas C 6 H 12 O 7 (aq) + H 2 O 2 (aq) Na
segunda, o peróxido de hidrogênio reage com íons iodeto
gerando o íon tri-iodeto, água e oxigênio. Equação 2 − (aq) +
2 H 2 O (I) + O 2 (g) 2 H 2 O 2 (aq) + 3 l − (aq) I 3 GARCIA,
P. T. et al. A Handheld Stamping Process to Fabricate
Microfluidic Paper-Based Analytical Devices with Chemically
Modified Surface for Clinical Assays. RSC Advances , v. 4, 13
ago. 2014 (adaptado). O tipo de reação que ocorre na
superfície do biochip, nas duas reações do processo, é`,
    images: ['/enem/2019/images/enem_2019_d2_q103.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `análise.` },
      { id: 'B', type: 'text', value: `síntese.` },
      { id: 'C', type: 'text', value: `oxirredução.` },
      { id: 'D', type: 'text', value: `complexação.` },
      { id: 'E', type: 'text', value: `ácido-base.` },
    ],
    correct: 'C',
    explanation: `Na Equação 1 a glicose (C₆H₁₂O₆) é convertida em ácido glucônico (C₆H₁₂O₇): o carbono tem seu número de oxidação aumentado (oxidação) enquanto o O₂ é reduzido, gerando H₂O₂. Na Equação 2 o peróxido (H₂O₂) é reduzido a água enquanto os íons iodeto (I⁻) são oxidados a tri-iodeto (I₃⁻). Em ambas as etapas há transferência de elétrons, com espécies que se oxidam e outras que se reduzem simultaneamente. Esse tipo de transformação é uma reação de oxirredução. Portanto, o tipo de reação é oxirredução (alternativa C).`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
  },
  {
    id: 104,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Algumas toneladas de medicamentos para uso humano e
veterinário são produzidas por ano. Os fármacos são
desenvolvidos para serem estáveis, mantendo suas propriedades
químicas de forma a atender a um propósito terapêutico. Após o
consumo de fármacos, parte de sua dosagem é excretada de forma
inalterada, persistindo no meio ambiente. Em todo o mundo,
antibióticos, hormônios, anestésicos, anti-inflamatórios,
entre outros, são detectados em concentrações preocupantes no
esgoto doméstico, em águas superficiais e de subsolo. Dessa
forma, a ocorrência de fármacos residuais no meio ambiente
pode apresentar efeitos adversos em organismos aquáticos e
terrestres. BILA, D. M.; DEZOTTI, M. Fármacos no meio
ambiente. Química Nova , v. 26, n. 4, ago. 2003 (adaptado).
Qual ação minimiza a permanência desses contaminantes nos
recursos hídricos?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Utilização de esterco como fertilizante na agricultura.` },
      { id: 'B', type: 'text', value: `Ampliação das redes de coleta de esgoto na zona urbana.` },
      { id: 'C', type: 'text', value: `Descarte dos medicamentos fora do prazo de validade em lixões.` },
      { id: 'D', type: 'text', value: `Desenvolvimento de novos processos nas estações de tratamento de efluentes.` },
      { id: 'E', type: 'text', value: `Reúso dos lodos provenientes das estações de tratamento de esgoto na agricultura.` },
    ],
    correct: 'D',
    explanation: `Os fármacos excretados de forma inalterada chegam ao esgoto e às águas porque as estações de tratamento convencionais não foram projetadas para removê-los. Logo, a ação que efetivamente reduz a permanência desses contaminantes é aprimorar o próprio tratamento, desenvolvendo novos processos capazes de degradar ou reter essas moléculas nos efluentes. Ampliar a coleta de esgoto apenas direciona os fármacos à estação, sem eliminá-los; o descarte em lixões e o reúso de lodo podem até espalhar os contaminantes. Portanto, a medida correta é o desenvolvimento de novos processos nas estações de tratamento de efluentes (alternativa D).`,
    subject: ['qui'],
    topics: ['Química Ambiental', 'Questões aleatórias'],
  },
  {
    id: 105,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Um teste de laboratório permite identificar alguns 
cátions metálicos ao introduzir uma pequena quantidade 
do material de interesse em uma chama de bico de 
Bunsen para, em seguida, observar a cor da luz emitida. 
A cor observada é proveniente da emissão de radiação 
eletromagnética ao ocorrer a`,
    alternatives: [
      { id: 'A', type: 'text', value: `mudança da fase sólida para a fase líquida do elemento metálico.` },
      { id: 'B', type: 'text', value: `combustão dos cátions metálicos provocada pelas moléculas de oxigênio da atmosfera.` },
      { id: 'C', type: 'text', value: `diminuição da energia cinética dos elétrons em uma mesma órbita na eletrosfera atômica.` },
      { id: 'D', type: 'text', value: `transição eletrônica de um nível mais externo para outro mais interno na eletrosfera atômica.` },
      { id: 'E', type: 'text', value: `promoção dos elétrons que se encontram no estado fundamental de energia para níveis mais energéticos.` },
    ],
    correct: 'D',
    explanation: `No teste de chama, o calor fornece energia aos elétrons do cátion metálico, que são promovidos (excitados) para níveis mais externos de maior energia. Esse estado excitado é instável, e os elétrons retornam a níveis mais internos de menor energia. Nesse retorno, a diferença de energia é liberada na forma de radiação eletromagnética, cuja cor é característica de cada elemento. Ou seja, a luz observada resulta da transição eletrônica de um nível mais externo para outro mais interno. Portanto, a cor provém da transição eletrônica de um nível mais externo para outro mais interno na eletrosfera (alternativa D).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 106,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Slackline é um esporte no qual o atleta deve se 
equilibrar e executar manobras estando sobre uma fita 
esticada. Para a prática do esporte, as duas extremidades 
da fita são fixadas de forma que ela fique a alguns 
centímetros do solo. Quando uma atleta de massa 
igual a 80 kg está exatamente no meio da fita, essa se 
desloca verticalmente, formando um ângulo de 10° com a 
horizontal, como esquematizado na figura. Sabe-se que a 
aceleração da gravidade é igual a 10 m s⁻² , cos(10°) = 0,98 
e sen(10°) = 0,17. 
Qual é a força que a fita exerce em cada uma das 
árvores por causa da presença da atleta?`,
    images: ['/enem/2019/images/enem_2019_d2_q106.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `4,0 × 10² N` },
      { id: 'B', type: 'text', value: `4,1 × 10² N` },
      { id: 'C', type: 'text', value: `8,0 × 10² N` },
      { id: 'D', type: 'text', value: `2,4 × 10³ N` },
      { id: 'E', type: 'text', value: `4,7 × 10³ N` },
    ],
    correct: 'D',
    explanation: `Como a atleta está no meio da fita, por simetria as duas metades fazem 10° com a horizontal e têm trações de mesmo módulo T. No equilíbrio vertical, as componentes verticais das duas trações sustentam o peso: 2·T·sen(10°) = m·g. Com m·g = 80 × 10 = 800 N e sen(10°) = 0,17, tem-se 2·T·0,17 = 800, logo T = 800 / 0,34 ≈ 2 353 N. Essa tração é justamente a força que a fita exerce em cada árvore. Portanto, a força é de aproximadamente 2,4 × 10³ N (alternativa D).`,
    subject: ['fis'],
    topics: ['Dinâmica', 'Questões aleatórias'],
  },
  {
    id: 107,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Na piscicultura, costumam-se usar larvas de 
Artêmia (crustáceo) para alimentar larvas de peixes. 
Ovos de Artêmia são colocados em garrafas com água 
salgada e, sob condições ótimas de temperatura, luz e 
oxigênio, eles eclodem, liberando suas larvas, também 
conhecidas como náuplios. Para recolher os náuplios, 
coloca-se uma lâmpada branca fluorescente na boca da 
garrafa e estes começam a subir em direção ao gargalo. 
Esse comportamento das artêmias é chamado de`,
    alternatives: [
      { id: 'A', type: 'text', value: `geotropismo positivo.` },
      { id: 'B', type: 'text', value: `fototropismo positivo.` },
      { id: 'C', type: 'text', value: `hidrotropismo negativo.` },
      { id: 'D', type: 'text', value: `termotropismo negativo.` },
      { id: 'E', type: 'text', value: `quimiotropismo negativo.` },
    ],
    correct: 'B',
    explanation: `Os náuplios de Artêmia deslocam-se em direção à lâmpada, isto é, movem-se orientados pelo estímulo luminoso, aproximando-se da fonte de luz. Esse movimento de aproximação em resposta à luz é denominado fototropismo positivo (resposta orientada e favorável ao estímulo luminoso). Não há relação com gravidade, água, temperatura ou substâncias químicas. Portanto, o comportamento é de fototropismo positivo (alternativa B).`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 108,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Por terem camada de valência completa, alta energia de
ionização e afinidade eletrônica praticamente nula,
considerou-se por muito tempo que os gases nobres não
formariam compostos químicos. Porém, em 1962, foi realizada
com sucesso a reação entre o xenônio (camada de valência 5 s 2
5 p 6 ) e o hexafluoreto de platina e, desde então, mais
compostos novos de gases nobres vêm sendo sintetizados. Tais
compostos demonstram que não se pode aceitar acriticamente a
regra do octeto, na qual se considera que, numa ligação
química, os átomos tendem a adquirir estabilidade assumindo a
configuração eletrônica de gás nobre. Dentre os compostos
conhecidos, um dos mais estáveis é o difluoreto de xenônio, no
qual dois átomos do halogênio flúor (camada de valência 2 s 2
2 p 5 ) se ligam covalentemente ao átomo de gás nobre para
ficarem com oito elétrons de valência. Ao se escrever a
fórmula de Lewis do composto de xenônio citado, quantos
elétrons na camada de valência haverá no átomo do gás nobre?`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `6` },
      { id: 'B', type: 'text', value: `8` },
      { id: 'C', type: 'text', value: `10` },
      { id: 'D', type: 'text', value: `12` },
      { id: 'E', type: 'text', value: `14` },
    ],
    correct: 'C',
    explanation: `No XeF₂ o xenônio é o átomo central e forma duas ligações covalentes, uma com cada átomo de flúor. Para isso, o Xe usa 2 de seus 8 elétrons de valência em ligações, restando 3 pares isolados (6 elétrons). Na fórmula de Lewis, ao redor do Xe há 3 pares não ligantes (6 e⁻) somados a 2 pares ligantes (4 e⁻), totalizando 10 elétrons de valência. Isso evidencia a expansão do octeto, contrariando a regra do octeto. Portanto, o átomo de gás nobre fica com 10 elétrons na camada de valência (alternativa C).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 109,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Na madrugada de 11 de março de 1978, partes de 
um foguete soviético reentraram na atmosfera acima da 
cidade do Rio de Janeiro e caíram no Oceano Atlântico. 
Foi um belo espetáculo, os inúmeros fragmentos 
entrando em ignição devido ao atrito com a atmosfera 
brilharam intensamente, enquanto “cortavam o céu”. 
Mas se a reentrada tivesse acontecido alguns minutos 
depois, teríamos uma tragédia, pois a queda seria na 
área urbana do Rio de Janeiro e não no oceano. 
LAS CASAS, R. Lixo espacial . Observatório Astronômico Frei Rosário, 
ICEx, UFMG. Disponível em: www.observatório.ufmg.br. 
 Acesso em: 27 set. 2011 (adaptado). 
De acordo com os fatos relatados, a velocidade angular 
do foguete em relação à Terra no ponto de reentrada era`,
    images: ['/enem/2019/images/enem_2019_d2_q109.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `igual à da Terra e no mesmo sentido.` },
      { id: 'B', type: 'text', value: `superior à da Terra e no mesmo sentido.` },
      { id: 'C', type: 'text', value: `inferior à da Terra e no sentido oposto.` },
      { id: 'D', type: 'text', value: `igual à da Terra e no sentido oposto.` },
      { id: 'E', type: 'text', value: `superior à da Terra e no sentido oposto.` },
    ],
    correct: 'B',
    explanation: `Fragmentos em órbita baixa da Terra completam uma volta em cerca de 90 minutos, muito menos que as 24 horas da rotação terrestre, de modo que sua velocidade angular é bem maior que a do planeta. Além disso, a maioria desses detritos orbita no mesmo sentido da rotação da Terra (de oeste para leste). É por 'ganhar' da rotação terrestre que, em poucos minutos, a posição do ponto de reentrada se desloca sensivelmente em relação ao solo, como descrito no texto. Logo, a velocidade angular do foguete era superior à da Terra e no mesmo sentido (alternativa B).`,
    subject: ['fis'],
    topics: ['Gravitação', 'Questões aleatórias'],
  },
  {
    id: 110,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Com base nos experimentos de plantas de Mendel, foram estabelecidos três princípios básicos, que são 
conhecidos como leis da uniformidade, segregação e distribuição independente. A lei da distribuição independente 
refere-se ao fato de que os membros de pares diferentes de genes segregam-se independentemente, uns dos 
outros, para a prole. 
TURNPENNY, P. D. Genética médica. Rio de Janeiro: Elsevier, 2009 (adaptado). 
Hoje, sabe-se que isso nem sempre é verdade. Por quê?`,
    alternatives: [
      { id: 'A', type: 'text', value: `A distribuição depende do caráter de dominância ou recessividade do gene.` },
      { id: 'B', type: 'text', value: `Os organismos nem sempre herdam cada um dos genes de cada um dos genitores.` },
      { id: 'C', type: 'text', value: `As alterações cromossômicas podem levar a falhas na segregação durante a meiose.` },
      { id: 'D', type: 'text', value: `Os genes localizados fisicamente próximos no mesmo cromossomo tendem a ser herdados juntos.` },
      { id: 'E', type: 'text', value: `O cromossomo que contém dois determinados genes pode não sofrer a disjunção na primeira fase da meiose.` },
    ],
    correct: 'D',
    explanation: `A lei da distribuição independente só vale plenamente para genes situados em cromossomos diferentes ou muito afastados no mesmo cromossomo. Genes localizados fisicamente próximos num mesmo cromossomo tendem a permanecer juntos durante a meiose (ligação gênica ou linkage), sendo herdados em conjunto e violando a segregação independente. Foi esse conhecimento, posterior a Mendel, que mostrou que a terceira lei nem sempre se cumpre. Portanto, a explicação é que genes próximos no mesmo cromossomo tendem a ser herdados juntos (alternativa D).`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 111,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Em qualquer obra de construção civil é fundamental a utilização de equipamentos de proteção individual, 
tal como capacetes. Por exemplo, a queda livre de um tijolo de massa 2,5 kg de uma altura de 5 m, cujo impacto 
contra um capacete pode durar até 0,5 s, resulta em uma força impulsiva media maior do que o peso do tijolo. 
Suponha que a aceleração gravitacional seja 10 m s⁻² e que o efeito de resistência do ar seja desprezível. 
A força impulsiva média gerada por esse impacto equivale ao peso de quantos tijolos iguais?`,
    alternatives: [
      { id: 'A', type: 'text', value: `2` },
      { id: 'B', type: 'text', value: `5` },
      { id: 'C', type: 'text', value: `10` },
      { id: 'D', type: 'text', value: `20` },
      { id: 'E', type: 'text', value: `50` },
    ],
    correct: 'A',
    explanation: `O tijolo cai em queda livre de h = 5 m, chegando ao capacete com velocidade v = √(2gh) = √(2 × 10 × 5) = 10 m/s. Sua quantidade de movimento no impacto é p = m·v = 2,5 × 10 = 25 kg·m/s, que é anulada durante a colisão. Pelo teorema do impulso, a força média é F = Δp/Δt = 25 / 0,5 = 50 N. Comparando com o peso de um tijolo, P = m·g = 2,5 × 10 = 25 N, obtém-se F/P = 50/25 = 2. Portanto, a força impulsiva equivale ao peso de 2 tijolos (alternativa A).`,
    subject: ['fis'],
    topics: ['Impulso e quantidade de movimento', 'Questões aleatórias'],
  },
  {
    id: 112,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Os hidrocarbonetos são moléculas orgânicas com uma série de aplicações industriais. Por exemplo, eles estão 
presentes em grande quantidade nas diversas frações do petróleo e normalmente são separados por destilação 
fracionada, com base em suas temperaturas de ebulição. O quadro apresenta as principais frações obtidas na 
destilação do petróleo em diferentes faixas de temperaturas. 
 
SANTA MARIA, L. C. et al. Petróleo: um tema para o ensino de química. Química Nova na Escola , n. 15, maio 2002 (adaptado). 
Na fração 4, a separação dos compostos ocorre em temperaturas mais elevadas porque`,
    images: ['/enem/2019/images/enem_2019_d2_q112.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `suas densidades são maiores.` },
      { id: 'B', type: 'text', value: `o número de ramificações é maior.` },
      { id: 'C', type: 'text', value: `sua solubilidade no petróleo é maior.` },
      { id: 'D', type: 'text', value: `as forças intermoleculares são mais intensas.` },
      { id: 'E', type: 'text', value: `a cadeia carbônica é mais difícil de ser quebrada.` },
    ],
    correct: 'D',
    explanation: `A fração 4 (óleo diesel) é formada pelos hidrocarbonetos de maior cadeia (C₁₄ a C₁₈), isto é, moléculas maiores e de maior massa molar. Quanto maior a molécula, maior a superfície de contato e mais intensas são as forças intermoleculares (forças de dispersão de London) entre as cadeias. Para separá-las por destilação é preciso fornecer mais energia para vencer essas interações, o que eleva a temperatura de ebulição. Por isso a fração 4 destila nas faixas de temperatura mais altas. Portanto, isso ocorre porque as forças intermoleculares são mais intensas (alternativa D).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 113,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `O espectrômetro de massa de tempo de voo é 
um dispositivo utilizado para medir a massa de íons. 
Nele, um íon de carga elétrica q é lançado em uma região 
de campo magnético constante B , descrevendo uma 
trajetória helicoidal, conforme a figura. Essa trajetória 
é formada pela composição de um movimento circular 
uniforme no plano yz e uma translação ao longo do eixo x. 
A vantagem desse dispositivo é que a velocidade angular 
do movimento helicoidal do íon é independente de sua 
velocidade inicial. O dispositivo então mede o tempo t de 
voo para N voltas do íon. Logo, com base nos valores 
q, B, N e t , pode-se determinar a massa do íon.
A massa do íon medida por esse dispositivo será`,
    images: ['/enem/2019/images/enem_2019_d2_q113.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `qBt / 2πN` },
      { id: 'B', type: 'text', value: `qBt / πN` },
      { id: 'C', type: 'text', value: `2qBt / πN` },
      { id: 'D', type: 'text', value: `qBt / N` },
      { id: 'E', type: 'text', value: `2qBt / N` },
    ],
    correct: 'A',
    explanation: `No campo magnético, o íon descreve movimento circular com velocidade angular (frequência de cíclotron) ω = qB/m, independente da velocidade inicial, como diz o texto. O período de uma volta é T = 2π/ω = 2πm/(qB), logo o tempo de N voltas é t = N·T = 2π·m·N/(qB). Isolando a massa: m = qBt/(2πN). Portanto, a massa do íon medida é qBt/(2πN) (alternativa A).`,
    subject: ['fis'],
    topics: ['Eletromagnetismo/Indução', 'Questões aleatórias'],
  },
  {
    id: 114,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Na família Retroviridae encontram-se diversos vírus que
infectam aves e mamíferos, sendo caracterizada pela produção
de DNA a partir de uma molécula de RNA. Alguns retrovírus
infectam exclusivamente humanos, não necessitando de outros
hospedeiros, reservatórios ou vetores biológicos. As infecções
ocasionadas por esses vírus vêm causando mortes e grandes
prejuízos ao desenvolvimento social e econômico. Nesse
contexto, pesquisadores têm produzido medicamentos que
contribuem para o tratamento dessas doenças. Que avanços
tecnológicos têm contribuído para o tratamento dessas
infecções virais?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Melhoria dos métodos de controle dos vetores desses vírus.` },
      { id: 'B', type: 'text', value: `Fabricação de soros mutagênicos para combate desses vírus.` },
      { id: 'C', type: 'text', value: `Investimento da indústria em equipamentos de proteção individual.` },
      { id: 'D', type: 'text', value: `Produção de vacinas que evitam a infecção das células hospedeiras.` },
      { id: 'E', type: 'text', value: `Desenvolvimento de antirretrovirais que dificultam a reprodução desses vírus.` },
    ],
    correct: 'E',
    explanation: `Os retrovírus armazenam sua informação em RNA e, dentro da célula hospedeira, produzem DNA por meio da transcriptase reversa, usando a maquinaria celular para se multiplicar. Os antirretrovirais são medicamentos que atuam justamente nas etapas do ciclo viral (como a transcrição reversa e outras enzimas), dificultando a reprodução do vírus no organismo. Assim, esses avanços controlam a infecção reduzindo a produção de novas partículas virais. Vacinas ainda são limitadas para esses vírus, e o controle de vetores não se aplica, pois a transmissão é direta entre humanos. Portanto, o avanço é o desenvolvimento de antirretrovirais que dificultam a reprodução desses vírus (alternativa E).`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 115,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `O concreto utilizado na construção civil é um 
material formado por cimento misturado a areia, a brita 
e a água. A areia é normalmente extraída de leitos 
de rios e a brita, oriunda da fragmentação de rochas. 
Impactos ambientais gerados no uso do concreto 
estão associados à extração de recursos minerais e ao 
descarte indiscriminado desse material. Na tentativa 
de reverter esse quadro, foi proposta a utilização de 
concreto reciclado moído em substituição ao particulado 
rochoso graúdo na fabricação de novo concreto, 
obtendo um material com as mesmas propriedades que 
o anterior. 
O benefício ambiental gerado nessa proposta é a 
redução do(a)`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `extração da brita.` },
      { id: 'B', type: 'text', value: `extração de areia.` },
      { id: 'C', type: 'text', value: `consumo de água.` },
      { id: 'D', type: 'text', value: `consumo de concreto.` },
      { id: 'E', type: 'text', value: `fabricação de cimento.` },
    ],
    correct: 'A',
    explanation: `No concreto, a brita (particulado rochoso graúdo) é obtida pela fragmentação de rochas, uma extração mineral de forte impacto ambiental. Ao substituir esse agregado graúdo por concreto reciclado moído, deixa-se de extrair parte da brita necessária, reduzindo a exploração de rochas. A areia continua sendo usada, assim como o cimento e a água, de modo que o benefício recai sobre o agregado substituído. Portanto, o benefício ambiental é a redução da extração da brita (alternativa A).`,
    subject: ['qui'],
    topics: ['Química Ambiental', 'Questões aleatórias'],
  },
  {
    id: 116,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `A fluidez da membrana celular é caracterizada pela capacidade
de movimento das moléculas componentes dessa estrutura. Os
seres vivos mantêm essa propriedade de duas formas:
controlando a temperatura e/ou alterando a composição lipídica
da membrana. Neste último aspecto, o tamanho e o grau de
insaturação das caudas hidrocarbônicas dos fosfolipídios,
conforme representados na figura, influenciam
significativamente a fluidez. Isso porque quanto maior for a
magnitude das interações entre os fosfolipídios, menor será a
fluidez da membrana. Representação simplificada da estrutura
de um fosfolipídio Cabeça polar Caudas hidrocarbônicas
Insaturação Assim, existem bicamadas lipídicas com diferentes
composições de fosfolipídios, como as mostradas de I a V. I II
III IV V Qual das bicamadas lipídicas apresentadas possui
maior fluidez?`,
    images: ['/enem/2019/images/enem_2019_d2_q116_1.jpg', '/enem/2019/images/enem_2019_d2_q116_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I` },
      { id: 'B', type: 'text', value: `II` },
      { id: 'C', type: 'text', value: `III` },
      { id: 'D', type: 'text', value: `IV` },
      { id: 'E', type: 'text', value: `V` },
    ],
    correct: 'B',
    explanation: `A fluidez da membrana é tanto maior quanto menores forem as interações entre as caudas hidrocarbônicas dos fosfolipídios. Caudas mais curtas têm menor área de contato, e as insaturações (dobras nas cadeias) afastam as caudas, reduzindo as forças intermoleculares. A bicamada II é a que reúne caudas mais curtas e com maior número de insaturações, apresentando, portanto, as interações mais fracas. Com menor magnitude de interação, essa é a bicamada de maior fluidez. Portanto, a de maior fluidez é a II (alternativa B).`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 117,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Em uma aula experimental de calorimetria, uma 
professora queimou 2,5 g de castanha-de-caju crua para 
aquecer 350 g de água, em um recipiente apropriado 
para diminuir as perdas de calor. Com base na leitura da 
tabela nutricional a seguir e da medida da temperatura da 
água, após a queima total do combustível, ela concluiu 
que 50% da energia disponível foi aproveitada. O calor 
específico da água é 1 cal g⁻¹ °C −1 , e sua temperatura 
inicial era de 20 °C. 
 
Qual foi a temperatura da água, em grau Celsius, 
medida ao final do experimento?`,
    images: ['/enem/2019/images/enem_2019_d2_q117.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `25` },
      { id: 'B', type: 'text', value: `27` },
      { id: 'C', type: 'text', value: `45` },
      { id: 'D', type: 'text', value: `50` },
      { id: 'E', type: 'text', value: `70` },
    ],
    correct: 'C',
    explanation: `Pela tabela, 10 g de castanha (2 castanhas) fornecem 70 kcal, ou seja, 7 kcal/g; assim, 2,5 g liberam 2,5 × 7 = 17,5 kcal. Como apenas 50% é aproveitado, a energia transferida à água é 0,5 × 17,5 = 8,75 kcal = 8 750 cal. Usando Q = m·c·ΔT: 8 750 = 350 × 1 × ΔT, logo ΔT = 25 °C. Como a água partiu de 20 °C, a temperatura final é 20 + 25 = 45 °C. Portanto, a temperatura final é 45 °C (alternativa C).`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 118,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Grupos de pesquisa em todo o mundo vêm buscando soluções
inovadoras, visando a produção de dispositivos para a geração
de energia elétrica. Dentre eles, pode-se destacar as baterias
de zinco-ar, que combinam o oxigênio atmosférico e o metal
zinco em um eletrólito aquoso de caráter alcalino. O esquema
de funcionamento da bateria zinco-ar está apresentado na
figura. Zn(OH)₄²⁻ O₂ Membrana separadora Eletrodo de zinco
Eletrodo poroso OH⁻ LI, Y.; DAI, H. Recent Advances in
Zinc-Air Batteries. Chemical Society Reviews , v. 43, n. 15,
2014 (adaptado). No funcionamento da bateria, a espécie
química formada no ânodo é`,
    images: ['/enem/2019/images/enem_2019_d2_q118.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `H₂ (g).` },
      { id: 'B', type: 'text', value: `O₂ (g).` },
      { id: 'C', type: 'text', value: `H₂O (l).` },
      { id: 'D', type: 'text', value: `OH⁻ (aq).` },
      { id: 'E', type: 'text', value: `Zn(OH)₄²⁻ (aq).` },

    ],
    correct: 'E',
    explanation: `Numa bateria, o ânodo é o eletrodo onde ocorre a oxidação. Na bateria de zinco-ar, o zinco metálico (Zn⁰) é oxidado, perdendo elétrons e, no meio alcalino, combinando-se com íons OH⁻. O produto dessa oxidação no eletrodo de zinco é o íon zincato, Zn(OH)₄²⁻, conforme indicado no esquema. No cátodo (eletrodo poroso) ocorre a redução do O₂ atmosférico. Portanto, a espécie química formada no ânodo é o Zn(OH)₄²⁻ (alternativa E).`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
  },
  {
    id: 119,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Dois amigos se encontram em um posto de gasolina para calibrar os pneus de suas bicicletas.
Uma das bicicletas é de corrida (bicicleta A) e a outra, de passeio (bicicleta B). Os pneus de ambas as bicicletas
têm as mesmas características, exceto que a largura dos pneus de A é menor que a largura dos pneus de B.
Ao calibrarem os pneus das bicicletas A e B, respectivamente com pressões de calibração pA e pB, os amigos
observam que o pneu da bicicleta A deforma, sob mesmos esforços, muito menos que o pneu da bicicleta B.
Pode-se considerar que as massas de ar comprimido no pneu da bicicleta A, mA, e no pneu da bicicleta B, mB, são
diretamente proporcionais aos seus volumes.
Comparando as pressões e massas de ar comprimido nos pneus das bicicletas, temos:`,
    alternatives: [
      { id: 'A', type: 'text', value: `pA < pB e mA < mB` },
      { id: 'B', type: 'text', value: `pA > pB e mA < mB` },
      { id: 'C', type: 'text', value: `pA > pB e mA = mB` },
      { id: 'D', type: 'text', value: `pA < pB e mA = mB` },
      { id: 'E', type: 'text', value: `pA > pB e mA > mB` },

    ],
    correct: 'B',
    explanation: `Como o pneu A (mais estreito) deforma menos que o B sob os mesmos esforços, ele está mais rígido, o que indica maior pressão interna: p_A > p_B. A massa de ar comprimido é proporcional ao volume do pneu; sendo A mais estreito, seu volume é menor que o de B, logo m_A < m_B. Combinando as duas conclusões, tem-se p_A > p_B e m_A < m_B. Portanto, a alternativa correta é p_A > p_B e m_A < m_B (alternativa B).`,
    subject: ['fis'],
    topics: ['Hidrostática', 'Questões aleatórias'],
  },
  {
    id: 120,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `A utilização de corantes na indústria de alimentos é bastante difundida e a escolha por corantes naturais vem 
sendo mais explorada por diversas razões. A seguir são mostradas tres estruturas de corantes naturais. 
HOOC 
Bixina (presente no urucum) 
Licopeno (presente no tomate) 
β-caroteno (presente na cenoura e na laranja) 
HAMERSKI, L.; REZENDE, M. J. C.; SILVA, B. V. Usando as cores da natureza para atender aos desejos do consumidor: 
substâncias naturais como corantes na industria alimentícia. Revista Virtual de Química , n. 3, 2013. 
A propriedade comum às estruturas que confere cor a esses compostos e a presença de`,
    images: ['/enem/2019/images/enem_2019_d2_q120.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `cadeia conjugada.` },
      { id: 'B', type: 'text', value: `cadeia ramificada.` },
      { id: 'C', type: 'text', value: `átomos de carbonos terciários.` },
      { id: 'D', type: 'text', value: `ligações duplas de configuração cis.` },
      { id: 'E', type: 'text', value: `átomos de carbonos de hibridação sp 3 .` },
    ],
    correct: 'A',
    explanation: `Bixina, licopeno e β-caroteno são moléculas que apresentam longas sequências de ligações duplas alternadas com simples, isto é, cadeias conjugadas. Esse sistema de duplas conjugadas permite a absorção de luz na região do visível, o que confere cor aos compostos. Quanto mais extensa a conjugação, mais deslocada para o visível é a absorção. As demais características (ramificações, carbonos terciários, carbonos sp³, configuração cis) não são o fator comum responsável pela cor. Portanto, a propriedade comum é a presença de cadeia conjugada (alternativa A).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 121,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Numa feira de ciências, um estudante utilizará o disco de
Maxwell (ioiô) para demonstrar o princípio da conservação da
energia. A apresentação consistirá em duas etapas: Etapa 1 - a
explicação de que, à medida que o disco desce, parte de sua
energia potencial gravitacional é transformada em energia
cinética de translação e energia cinética de rotação; Etapa 2
- o cálculo da energia cinética de rotação do disco no ponto
mais baixo de sua trajetória, supondo o sistema conservativo.
Ao preparar a segunda etapa, ele considera a aceleração da
gravidade igual a 10 m s⁻² e a velocidade linear do centro de
massa do disco desprezível em comparação com a velocidade
angular. Em seguida, mede a altura do topo do disco em relação
ao chão no ponto mais baixo de sua trajetória, obtendo 1 3 da
altura da haste do brinquedo. As especificações de tamanho do
brinquedo, isto é, de comprimento (C), largura (L) e altura
(A), assim como da massa de seu disco de metal, foram
encontradas pelo estudante no recorte de manual ilustrado a
seguir. 2h 3 h Conteúdo: base de metal, hastes metálicas,
barra superior, disco de metal. Tamanho (C × L × A): 300 mm ×
100 mm × 410 mm Massa do disco de metal: 30 g O resultado do
cálculo da etapa 2, em joule, é:`,
    images: ['/enem/2019/images/enem_2019_d2_q121.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `4,10 × 10⁻²` },
      { id: 'B', type: 'text', value: `8,20 × 10⁻²` },
      { id: 'C', type: 'text', value: `1,23 × 10⁻¹` },
      { id: 'D', type: 'text', value: `8,20 × 10⁴` },
      { id: 'E', type: 'text', value: `1,23 × 10⁵` },
    ],
    correct: 'B',
    explanation: `No sistema conservativo, a energia potencial gravitacional perdida pelo disco converte-se em energia cinética; como a velocidade de translação é desprezível, praticamente toda ela vira energia cinética de rotação: E_rot = m·g·h. A altura da haste é A = 410 mm = 0,41 m, e o topo do disco no ponto mais baixo fica a 1/3 dessa altura, de modo que o disco desce h = (2/3) × 0,41 ≈ 0,273 m. Com m = 30 g = 0,03 kg e g = 10 m/s², E_rot = 0,03 × 10 × 0,273 ≈ 0,082 J. Portanto, o resultado é 8,20 × 10⁻² J (alternativa B).`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias'],
  },
  {
    id: 122,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `O odor que permanece nas mãos após o contato com alho pode ser
eliminado pela utilização de um “sabonete de aço inoxidável”,
constituído de aço inox (74%), cromo e níquel. A principal
vantagem desse “sabonete” é que ele não se desgasta com o uso.
Considere que a principal substância responsável pelo odor de
alho é a alicina (estrutura I) e que, para que o odor seja
eliminado, ela seja transformada na estrutura II. O S S
Estrutura I CH₂ ═ CH - CH₂ - S - S - CH₂ - CH ═ CH₂

 Estrutura II
Na conversão de I em II, o “sabonete” atuará como um`,
    images: ['/enem/2019/images/enem_2019_d2_q122.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `ácido.` },
      { id: 'B', type: 'text', value: `redutor.` },
      { id: 'C', type: 'text', value: `eletrólito.` },
      { id: 'D', type: 'text', value: `tensoativo.` },
      { id: 'E', type: 'text', value: `catalisador.` },
    ],
    correct: 'E',
    explanation: `Na conversão da alicina (estrutura I) no dissulfeto (estrutura II) ocorre uma reação de oxirredução sobre a superfície metálica. O sabonete de aço inox favorece essa transformação, mas, como destaca o texto, não se desgasta com o uso, ou seja, não é consumido no processo. Uma substância que acelera ou possibilita a reação sem ser consumida atua como catalisador. Ele não poderia ser o redutor, pois este seria gasto na reação. Portanto, o sabonete atua como um catalisador (alternativa E).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 123,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `A poluição radioativa compreende mais de 200 nuclídeos, sendo
que, do ponto de vista de impacto ambiental, destacam-se o
césio-137 e o estrôncio-90. A maior contribuição de
radionuclídeos antropogênicos no meio marinho ocorreu durante
as décadas de 1950 e 1960, como resultado dos testes nucleares
realizados na atmosfera. O estrôncio-90 pode se acumular nos
organismos vivos e em cadeias alimentares e, em razão de sua
semelhança química, pode participar no equilíbrio com
carbonato e substituir o cálcio em diversos processos
biológicos. FIGUEIRA, R. C. L.; CUNHA, I. I. L. A contaminação
dos oceanos por radionuclídeos antropogênicos. Química Nova ,
n. 21, 1998 (adaptado). Ao entrar numa cadeia alimentar da
qual o homem faz parte, em qual tecido do organismo humano o
estrôncio-90 será acumulado predominantemente?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Cartilaginoso.` },
      { id: 'B', type: 'text', value: `Sanguíneo.` },
      { id: 'C', type: 'text', value: `Muscular.` },
      { id: 'D', type: 'text', value: `Nervoso.` },
      { id: 'E', type: 'text', value: `Ósseo.` },
    ],
    correct: 'E',
    explanation: `O estrôncio-90 tem comportamento químico semelhante ao do cálcio, podendo substituí-lo em processos biológicos. Como o cálcio é depositado principalmente nos ossos, compondo a matriz mineral do tecido ósseo, o estrôncio-90 acompanha esse metabolismo e se acumula preferencialmente nos ossos. Ali permanece por longos períodos, emitindo radiação próxima à medula óssea. Portanto, o estrôncio-90 acumula-se predominantemente no tecido ósseo (alternativa E).`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 124,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Uma das técnicas de reciclagem química do polímero PET
[poli(tereftalato de etileno)] gera o tereftalato de metila e
o etanodiol, conforme o esquema de reação, e ocorre por meio
de uma reação de transesterificação. Altas temperaturas e
pressão O O O O + 2n A + n COOCH 3 PET O composto A ,
representado no esquema de reação, e o`,
    images: ['/enem/2019/images/enem_2019_d2_q124.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `metano.` },
      { id: 'B', type: 'text', value: `metanol.` },
      { id: 'C', type: 'text', value: `éter metílico.` },
      { id: 'D', type: 'text', value: `ácido etanoico.` },
      { id: 'E', type: 'text', value: `anidrido etanoico.` },
    ],
    correct: 'B',
    explanation: `A reação é uma transesterificação do PET: o grupo éster do polímero reage com um álcool, trocando o grupo ligado ao oxigênio e gerando o tereftalato de metila e o etanodiol (etilenoglicol). Para que o produto seja o tereftalato de metila (um éster metílico), o álcool reagente (composto A) deve ser o metanol (CH₃OH). Os dois mols de A por unidade do polímero fornecem os grupos metila dos dois ésteres formados. Portanto, o composto A é o metanol (alternativa B).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 125,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Durante sua evolução, as plantas apresentaram grande diversidade de características, as quais permitiram sua
sobrevivência em diferentes ambientes. Na imagem, cinco dessas características estão indicadas por números.
Legenda:
1. Embriões protegidos no gametófito.
2. Tecidos condutores verdadeiros.
3. Formação de tubo polínico.
4. Polinização pelo vento.
5. Produção de frutos.
CAMPBELL, N. et al. Biologia. São Paulo: Artmed, 2010 (adaptado).
A aquisição evolutiva que permitiu a conquista definitiva do ambiente terrestre pelas plantas está indicada pelo número`,
    images: ['/enem/2019/images/enem_2019_d2_q125.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `2.` },
      { id: 'C', type: 'text', value: `3.` },
      { id: 'D', type: 'text', value: `4.` },
      { id: 'E', type: 'text', value: `5.` },

    ],
    correct: 'C',
    explanation: `A conquista definitiva do ambiente terrestre pelas plantas está ligada à independência da água para a reprodução. A formação do tubo polínico (característica 3) permite que o gameta masculino alcance o óvulo sem necessidade de água livre para a fecundação, ao contrário do que ocorre em musgos e samambaias. Essa inovação, surgida nas plantas com sementes (gimnospermas e angiospermas), libertou a reprodução do meio aquático. As demais características são importantes, mas não representam esse passo decisivo. Portanto, a aquisição é a formação de tubo polínico, indicada pelo número 3 (alternativa C).`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
  },
  {
    id: 126,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Uma casa tem um cabo elétrico mal dimensionado, de resistência
igual a 10 Ω, que a conecta à rede elétrica de 120 V. Nessa
casa, cinco lâmpadas, de resistência igual a 200 Ω, estão
conectadas ao mesmo circuito que uma televisão de resistência
igual a 50 Ω, conforme ilustrado no esquema. A televisão
funciona apenas com tensão entre 90 V e 130 V. 10 Ω 120 V 50 Ω
200 Ω 200 Ω 200 Ω 200 Ω 200 Ω O número máximo de lâmpadas que
podem ser ligadas sem que a televisão pare de funcionar é:`,
    images: ['/enem/2019/images/enem_2019_d2_q126.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `2.` },
      { id: 'C', type: 'text', value: `3.` },
      { id: 'D', type: 'text', value: `4.` },
      { id: 'E', type: 'text', value: `5.` },
    ],
    correct: 'B',
    explanation: `A TV (50 Ω) e as lâmpadas (200 Ω cada) estão em paralelo entre si, e esse conjunto está em série com o cabo de 10 Ω ligado aos 120 V. Para a TV funcionar, a tensão no conjunto paralelo deve ser maior ou igual a 90 V, o que exige, pelo divisor de tensão, resistência equivalente R_p tal que 120·R_p/(R_p + 10) ≥ 90, ou seja, R_p ≥ 30 Ω. Com n lâmpadas, 1/R_p = 1/50 + n/200 ≤ 1/30; isolando, n/200 ≤ 1/30 − 1/50 = 1/75, logo n ≤ 200/75 ≈ 2,7. Como n é inteiro, o máximo é 2 lâmpadas. Portanto, o número máximo é 2 (alternativa B).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 127,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `O 2,4-dinitrofenol (DNP) é conhecido como desacoplador da
cadeia de elétrons na mitocôndria e apresenta um efeito
emagrecedor. Contudo, por ser perigoso e pela ocorrência de
casos letais, seu uso como medicamento é proibido em diversos
países, inclusive no Brasil. Na mitocôndria, essa substância
captura, no espaço intermembranas, prótons (H + ) provenientes
da atividade das proteínas da cadeia respiratória,
retornando-os à matriz mitocondrial. Assim, esses prótons não
passam pelo transporte enzimático na membrana interna.
GRUNDLINGH, J. et al. 2,4-Dinitrophenol (DNP): a Weight Loss
Agent with Significant Acute Toxicity and Risk of Death.
Journal of Medical Toxicology , v. 7, 2011 (adaptado). O
efeito emagrecedor desse composto está relacionado ao(à)`,
    alternatives: [
      { id: 'A', type: 'text', value: `obstrução da cadeia respiratória, resultando em maior consumo celular de ácidos graxos.` },
      { id: 'B', type: 'text', value: `bloqueio das reações do ciclo de Krebs, resultando em maior gasto celular de energia.` },
      { id: 'C', type: 'text', value: `diminuição da produção de acetil CoA, resultando em maior gasto celular de piruvato.` },
      { id: 'D', type: 'text', value: `inibição da glicólise, resultando em maior absorção celular da glicose sanguínea.` },
      { id: 'E', type: 'text', value: `redução da produção de ATP, resultando em maior gasto celular de nutrientes.` },
    ],
    correct: 'E',
    explanation: `A energia da cadeia respiratória é armazenada como gradiente de prótons (H⁺) no espaço intermembranas e usada pela ATP-sintase para produzir ATP. O DNP transporta esses prótons de volta à matriz sem passar pela ATP-sintase, dissipando o gradiente (desacoplamento) e reduzindo drasticamente a produção de ATP. Para compensar a falta de ATP, a célula acelera a oxidação de nutrientes (como gorduras), gastando mais reservas, daí o efeito emagrecedor e o perigo. Portanto, o efeito está relacionado à redução da produção de ATP, resultando em maior gasto celular de nutrientes (alternativa E).`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 128,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Em 1808, Dálton publicou o seu famoso livro 
intitulado Um novo sistema de filosofia química 
(do original A New System of Chemical Philosophy ), 
no qual continha os cinco postulados que serviam 
como alicerce da primeira teoria atômica da matéria 
fundamentada no método científico. Esses postulados 
são numerados a seguir: 
1. A matéria é constituída de átomos indivisíveis. 
2. Todos os átomos de um dado elemento químico são 
idênticos em massa e em todas as outras propriedades. 
3. Diferentes elementos químicos têm diferentes 
tipos de átomos; em particular, seus átomos têm 
diferentes massas. 
4. Os átomos são indestrutíveis e nas reações 
químicas mantêm suas identidades. 
5. Átomos de elementos combinam com átomos de 
outros elementos em proporções de números inteiros 
pequenos para formar compostos. 
Após o modelo de Dálton, outros modelos baseados 
em outros dados experimentais evidenciaram, entre 
outras coisas, a natureza elétrica da matéria, a 
composição e organização do átomo e a quantização da 
energia no modelo atômico. 
OXTOBY, D. W.; GILLIS, H. P.; BUTLER, L. J. Principles of Modern 
Chemistry . Boston: Cengage Learning, 2012 (adaptado). 
Com base no modelo atual que descreve o átomo, qual 
dos postulados de Dálton ainda é considerado correto?`,
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `5` },
    ],
    correct: 'E',
    explanation: `Vários postulados de Dalton foram superados: o átomo não é indivisível (postulado 1), existem isótopos com massas diferentes para o mesmo elemento (postulados 2 e 3) e, em reações nucleares, os átomos se transformam (postulado 4). O postulado 5, porém, permanece válido: átomos de elementos diferentes combinam-se em proporções de números inteiros e pequenos para formar compostos, base das leis das proporções definidas e múltiplas. Portanto, o postulado ainda considerado correto é o 5 (alternativa E).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 129,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Um dos parâmetros de controle de qualidade de 
polpas de frutas destinadas ao consumo como bebida é 
a acidez total expressa em ácido cítrico, que corresponde 
à massa dessa substância em 100 gramas de polpa 
de fruta. O ácido cítrico é uma molécula orgânica que 
apresenta três hidrogênios ionizáveis (ácido triprótico) 
e massa molar 192 g mol⁻¹ . O quadro indica o valor 
mínimo desse parâmetro de qualidade para polpas 
comerciais de algumas frutas. 
 
A acidez total expressa em ácido cítrico de uma 
amostra comercial de polpa de fruta foi determinada. 
No procedimento, adicionou-se água destilada a 2,2 g da 
amostra e, após a solubilização do ácido cítrico, o sólido 
remanescente foi filtrado. A solução obtida foi titulada 
com solução de hidróxido de sódio 0,01 mol L⁻¹ , em que 
se consumiram 24 mL da solução básica (titulante). 
BRASIL. Ministério da Agricultura e do Abastecimento. Instrução 
normativa n. 1, de 7 de janeiro de 2000 . Disponível em: 
 www.agricultura.gov.br. Acesso em: 9 maio 2019 (adaptado). 
Entre as listadas, a amostra analisada pode ser de qual 
polpa de fruta?`,
    images: ['/enem/2019/images/enem_2019_d2_q129.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Apenas caju.` },
      { id: 'B', type: 'text', value: `Apenas maracujá.` },
      { id: 'C', type: 'text', value: `Caju ou graviola.` },
      { id: 'D', type: 'text', value: `Acerola ou cupuaçu.` },
      { id: 'E', type: 'text', value: `Cupuaçu ou graviola.` },
    ],
    correct: 'C',
    explanation: `A quantidade de NaOH gasta é n = 0,01 mol/L × 0,024 L = 2,4 × 10⁻⁴ mol. Como o ácido cítrico é triprótico, 1 mol dele consome 3 mols de NaOH, então n(ácido) = 2,4 × 10⁻⁴ / 3 = 8,0 × 10⁻⁵ mol, cuja massa é 8,0 × 10⁻⁵ × 192 = 0,01536 g. Essa massa está em 2,2 g de amostra, o que dá uma acidez de (0,01536/2,2) × 100 ≈ 0,70 g por 100 g. Comparando com os valores mínimos do quadro, 0,70 atende caju (0,3) e graviola (0,6), mas não acerola (0,8), cupuaçu (1,5) nem maracujá (2,5). Portanto, a amostra pode ser de caju ou graviola (alternativa C).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 130,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Uma cozinheira colocou sal a mais no feijão que 
estava cozinhando. Para solucionar o problema, ela 
acrescentou batatas cruas e sem tempero dentro da 
panela. Quando terminou de cozinhá-lo, as batatas 
estavam salgadas, porque absorveram parte do caldo 
com excesso de sal. Finalmente, ela adicionou água 
para completar o caldo do feijão. 
O sal foi absorvido pelas batatas por`,
    alternatives: [
      { id: 'A', type: 'text', value: `osmose, por envolver apenas o transporte do solvente.` },
      { id: 'B', type: 'text', value: `fagocitose, porque o sal transportado é uma substância sólida.` },
      { id: 'C', type: 'text', value: `exocitose, uma vez que o sal foi transportado da água para a batata.` },
      { id: 'D', type: 'text', value: `pinocitose, porque o sal estava diluído na água quando foi transportado.` },
      { id: 'E', type: 'text', value: `difusão, porque o transporte ocorreu a favor do gradiente de concentração.` },
    ],
    correct: 'E',
    explanation: `O sal (soluto) estava mais concentrado no caldo do que no interior das batatas cruas. Por isso ele se desloca espontaneamente do meio mais concentrado (caldo) para o menos concentrado (batata), isto é, a favor do gradiente de concentração. Esse transporte de soluto a favor do gradiente, sem gasto de energia, é a difusão. Não é osmose (que envolve apenas o solvente, a água), nem fagocitose, exocitose ou pinocitose. Portanto, o sal foi absorvido por difusão, porque o transporte ocorreu a favor do gradiente de concentração (alternativa E).`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 131,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `A agricultura de precisão reúne técnicas agrícolas que
consideram particularidades locais do solo ou lavoura a fim de
otimizar o uso de recursos. Uma das formas de adquirir
informações sobre essas particularidades é a fotografia aérea
de baixa altitude realizada por um veículo aéreo não tripulado
(vant). Na fase de aquisição é importante determinar o nível
de sobreposição entre as fotografias. A figura ilustra como
uma sequência de imagens é coletada por um vant e como são
formadas as sobreposições frontais. Vant com câmera
fotográfica 1 2 3 H 45° 45° Solo 20% de sobreposição frontal
∆S Imagens coletadas 1, 2 e 3 1 2 3 O operador do vant recebe
uma encomenda na qual as imagens devem ter uma sobreposição
frontal de 20% em um terreno plano. Para realizar a aquisição
das imagens, seleciona uma altitude H fixa de voo de 1 000 m,
a uma velocidade constante de 50 m s⁻¹ . A abertura da câmera
fotográfica do vant é de 90°. Considere tg(45°) = 1. Natural
Resources Canada. Concepts of Aerial Photography . Disponível
em: www.nrcan.gc.ca. Acesso em: 26 abr. 2019 (adaptado). Com
que intervalo de tempo o operador deve adquirir duas imagens
consecutivas?`,
    images: ['/enem/2019/images/enem_2019_d2_q131.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `40 segundos.` },
      { id: 'B', type: 'text', value: `32 segundos.` },
      { id: 'C', type: 'text', value: `28 segundos.` },
      { id: 'D', type: 'text', value: `16 segundos.` },
      { id: 'E', type: 'text', value: `8 segundos.` },
    ],
    correct: 'B',
    explanation: `Com abertura de câmera de 90° e altitude H = 1 000 m, cada foto cobre no solo uma faixa de largura L = 2·H·tg(45°) = 2 × 1 000 × 1 = 2 000 m. Para haver 20% de sobreposição frontal, o vant deve avançar 80% dessa faixa entre duas fotos: ΔS = 0,8 × 2 000 = 1 600 m. Com velocidade constante de 50 m/s, o intervalo é t = ΔS/v = 1 600/50 = 32 s. Portanto, o intervalo entre imagens consecutivas é de 32 segundos (alternativa B).`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 132,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `A maioria das pessoas fica com a visão embaçada ao abrir os
olhos debaixo dʼágua. Mas há uma exceção: o povo moken, que
habita a costa da Tailândia. Essa característica se deve
principalmente à adaptabilidade do olho e à plasticidade do
cérebro, o que significa que você também, com algum
treinamento, poderia enxergar relativamente bem debaixo
dʼágua. Estudos mostraram que as pupilas de olhos de
indivíduos moken sofrem redução significativa debaixo dʼágua,
o que faz com que os raios luminosos incidam quase
paralelamente ao eixo óptico da pupila. GISLÉN, A. et al.
Visual Training Improves Underwater Vision in Children. Vision
Research , n. 46, 2006 (adaptado). A acuidade visual associada
à redução das pupilas é fisicamente explicada pela diminuição`,
    alternatives: [
      { id: 'A', type: 'text', value: `da intensidade luminosa incidente na retina.` },
      { id: 'B', type: 'text', value: `da difração dos feixes luminosos que atravessam a pupila.` },
      { id: 'C', type: 'text', value: `da intensidade dos feixes luminosos em uma direção por polarização.` },
      { id: 'D', type: 'text', value: `do desvio dos feixes luminosos refratados no interior do olho.` },
      { id: 'E', type: 'text', value: `das reflexões dos feixes luminosos no interior do olho.` },
    ],
    correct: 'D',
    explanation: `Debaixo d'água a córnea perde grande parte de seu poder de convergência, e os raios chegam muito desviados, formando imagem fora da retina (visão embaçada). Ao reduzir a pupila, o olho passa a aproveitar apenas os raios próximos ao eixo óptico, que incidem quase paralelamente e sofrem menor desvio ao serem refratados no interior do olho, efeito semelhante ao de uma câmara escura de orifício. Com menos desvio, a imagem forma-se de modo mais nítido na retina, aumentando a acuidade visual. Portanto, a explicação é a diminuição do desvio dos feixes luminosos refratados no interior do olho (alternativa D).`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 133,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `O “The Kidney Project” é um projeto realizado por 
cientistas que pretendem desenvolver um rim biônico 
que executará a maioria das funções biológicas 
do órgão. O rim biônico possuirá duas partes que 
incorporam recentes avanços de nanotecnologia, 
filtração de membrana e biologia celular. Esse projeto 
significará uma grande melhoria na qualidade de vida 
para aquelas pessoas que dependem da hemodiálise 
para sobrevivência. 
Disponível em: https://pharm.ucsf.edu. 
Acesso em: 26 abr. 2019 (adaptado). 
O dispositivo criado promoverá diretamente a`,
    alternatives: [
      { id: 'A', type: 'text', value: `remoção de ureia.` },
      { id: 'B', type: 'text', value: `excreção de lipídios.` },
      { id: 'C', type: 'text', value: `síntese de vasopressina.` },
      { id: 'D', type: 'text', value: `transformação de amônia.` },
      { id: 'E', type: 'text', value: `fabricação de aldosterona.` },
    ],
    correct: 'A',
    explanation: `A principal função renal perdida por quem depende de hemodiálise é a filtração do sangue para eliminar resíduos nitrogenados, sobretudo a ureia. O rim biônico, por incorporar filtração por membrana e biologia celular, executaria essa filtração, promovendo diretamente a remoção da ureia do sangue. As demais opções (excreção de lipídios, síntese de vasopressina ou aldosterona, transformação de amônia) não são o papel central desse dispositivo filtrante. Portanto, o dispositivo promoverá diretamente a remoção de ureia (alternativa A).`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 134,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Um experimento simples, que pode ser realizado 
com materiais encontrados em casa, é realizado da 
seguinte forma: adiciona-se um volume de etanol em 
um copo de vidro e, em seguida, uma folha de papel. 
Com o passar do tempo, observa-se um comportamento 
peculiar: o etanol se desloca sobre a superfície do papel, 
superando a gravidade que o atrai no sentido oposto, 
como mostra a imagem. Para parte dos estudantes, isso 
ocorre por causa da absorção do líquido pelo papel. 
Papel de filtro 
Copo de vidro 
Etanol 
Do ponto de vista científico, o que explica o movimento 
do líquido é a`,
    images: ['/enem/2019/images/enem_2019_d2_q134.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `evaporação do líquido.` },
      { id: 'B', type: 'text', value: `diferença de densidades.` },
      { id: 'C', type: 'text', value: `reação química com o papel.` },
      { id: 'D', type: 'text', value: `capilaridade nos poros do papel.` },
      { id: 'E', type: 'text', value: `resistência ao escoamento do líquido.` },
    ],
    correct: 'D',
    explanation: `O etanol sobe pelo papel contrariando a gravidade porque o papel de filtro é poroso, formando finíssimos canais (capilares) entre suas fibras. Nesses capilares, as forças de adesão entre o líquido e as paredes, associadas à coesão e à tensão superficial do líquido, fazem-no ascender, fenômeno chamado capilaridade. Quanto mais estreito o poro, maior a altura atingida. Não se trata de evaporação, reação química nem diferença de densidade. Portanto, o movimento do líquido é explicado pela capilaridade nos poros do papel (alternativa D).`,
    subject: ['fis'],
    topics: ['Hidrostática', 'Questões aleatórias'],
  },
  {
    id: 135,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Quando se considera a extrema velocidade com que a luz se
espalha por todos os lados e que, quando vêm de diferentes
lugares, mesmo totalmente opostos, [os raios luminosos] se
atravessam uns aos outros sem se atrapalharem, compreende-se
que, quando vemos um objeto luminoso, isso não poderia ocorrer
pelo transporte de uma matéria que venha do objeto até nós,
como uma flecha ou bala atravessa o ar; pois certamente isso
repugna bastante a essas duas propriedades da luz,
principalmente a última. HUYGENS, C. In: MARTINS, R. A.
Tratado sobre a luz, de Cristian Huygens. Caderno de História
e Filosofia da Ciência , supl. 4, 1986. O texto contesta que
concepção acerca do comportamento da luz?`,
    alternatives: [
      { id: 'A', type: 'text', value: `O entendimento de que a luz precisa de um meio de propagação, difundido pelos defensores da existência do éter.` },
      { id: 'B', type: 'text', value: `O modelo ondulatório para a luz, o qual considera a possibilidade de interferência entre feixes luminosos.` },
      { id: 'C', type: 'text', value: `O modelo corpuscular defendido por Newton, que descreve a luz como um feixe de partículas.` },
      { id: 'D', type: 'text', value: `A crença na velocidade infinita da luz, defendida pela maioria dos filósofos gregos.` },
      { id: 'E', type: 'text', value: `A ideia defendida pelos gregos de que a luz era produzida pelos olhos.` },
    ],
    correct: 'C',
    explanation: `Huygens argumenta que a luz, por se propagar com enorme velocidade e por permitir que raios vindos de direções opostas se cruzem sem se perturbar, não pode consistir no transporte de matéria do objeto até os olhos, como faria uma flecha ou bala ao atravessar o ar. Essa descrição de partículas lançadas corresponde justamente ao modelo corpuscular, defendido por Newton, que trata a luz como um feixe de partículas. Ao negar o transporte de matéria, o texto contesta essa concepção, em favor de um modelo ondulatório. Portanto, o texto contesta o modelo corpuscular defendido por Newton (alternativa C).`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 136,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Um grupo de países criou uma instituição responsável 
por organizar o Programa Internacional de Nivelamento 
de Estudos (PINE) com o objetivo de melhorar os índices 
mundiais de educação. Em sua sede foi construída 
uma escultura suspensa, com a logomarca oficial do 
programa, em três dimensões, que é formada por suas 
iniciais, conforme mostrada na figura. 
Essa escultura está suspensa por cabos de aço, de 
maneira que o espaçamento entre letras adjacentes é o 
mesmo, todas têm igual espessura e ficam dispostas em 
posição ortogonal ao solo, como ilustrado a seguir. 
Ao meio-dia, com o sol a pino, as letras que formam 
essa escultura projetam ortogonalmente suas sombras 
sobre o solo. 
A sombra projetada no solo é`,
    images: ['/enem/2019/images/enem_2019_d2_q136_1.jpg', '/enem/2019/images/enem_2019_d2_q136_2.jpg'],
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2019/images/enem_2019_d2_q136_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2019/images/enem_2019_d2_q136_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2019/images/enem_2019_d2_q136_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2019/images/enem_2019_d2_q136_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2019/images/enem_2019_d2_q136_E.jpg` },
    ],
    correct: 'E',
    explanation: `As letras (P, I, N, E), verticais, de mesma espessura e com espaçamentos iguais, ao meio-dia com o sol a pino projetam-se verticalmente no solo. A sombra de cada letra é a sua “pegada” vista de cima: como cada letra tem material em toda a sua largura (em alguma altura), cada uma projeta uma barra cheia, e os espaços iguais entre as letras aparecem como intervalos iguais entre as barras. Resultam quatro retângulos cheios (P largo, I estreito, N largo, E largo) separados por espaços iguais, como na figura E (na A as letras apareceriam unidas numa única barra). Resposta: E.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 137,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `A Hydrangea macrophylla é uma planta com flor azul 
ou cor-de-rosa, dependendo do pH do solo no qual está 
plantada. Em solo ácido (ou seja, com pH < 7) a flor é 
azul, enquanto que em solo alcalino (ou seja, com pH > 7) 
a flor é rosa. Considere que a Hydrangea cor-de-rosa mais 
valorizada comercialmente numa determinada região seja 
aquela produzida em solo com pH inferior a 8. Sabe-se 
que pH = - log 10 x , em que x é a concentração de íon 
hidrogênio (H + ). 
Para produzir a Hydrangea cor-de-rosa de maior 
valor comercial, deve-se preparar o solo de modo que 
x assuma`,
    alternatives: [
      { id: 'A', type: 'text', value: `qualquer valor acima de 10⁻⁸.` },
      { id: 'B', type: 'text', value: `qualquer valor positivo inferior a 10⁻⁷.` },
      { id: 'C', type: 'text', value: `valores maiores que 7 e menores que 8.` },
      { id: 'D', type: 'text', value: `valores maiores que 70 e menores que 80.` },
      { id: 'E', type: 'text', value: `valores maiores que 10⁻⁸ e menores que 10⁻⁷.` },
    ],
    correct: 'E',
    explanation: `A Hydrangea rosa (solo alcalino) de maior valor exige 7 < pH < 8. Como pH = −log₁₀x: pH = 7 → x = 10⁻⁷ e pH = 8 → x = 10⁻⁸. Sendo o pH decrescente em x, 7 < pH < 8 equivale a 10⁻⁸ < x < 10⁻⁷. Resposta: E.`,
    subject: ['mat'],
    topics: ['Funções', 'Equações e inequações', 'Questões aleatórias'],
  },
  {
    id: 138,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Uma pessoa, que perdeu um objeto pessoal quando 
visitou uma cidade, pretende divulgar nos meios de 
comunicação informações a respeito da perda desse 
objeto e de seu contato para eventual devolução. 
No entanto, ela lembra que, de acordo com o Art. 1 234 
do Código Civil, poderá ter que pagar pelas despesas 
do transporte desse objeto até sua cidade e poderá ter 
que recompensar a pessoa que lhe restituir o objeto 
em, pelo menos, 5% do valor do objeto. 
Ela sabe que o custo com transporte será de 
um quinto do valor atual do objeto e, como ela tem 
muito interesse em reavê-lo, pretende ofertar o maior 
percentual possível de recompensa, desde que o 
gasto total com as despesas não ultrapasse o valor 
atual do objeto. 
Nessas condições, o percentual sobre o valor do objeto, 
dado como recompensa, que ela deverá ofertar é igual a`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `20%` },
      { id: 'B', type: 'text', value: `25%` },
      { id: 'C', type: 'text', value: `40%` },
      { id: 'D', type: 'text', value: `60%` },
      { id: 'E', type: 'text', value: `80%` },
    ],
    correct: 'E',
    explanation: `O gasto total não pode ultrapassar 100% do valor do objeto. O transporte custa 1/5 = 20%. Logo a recompensa máxima é 100% − 20% = 80%. Resposta: E.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 139,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Uma empresa presta serviço de abastecimento de água em uma cidade. O valor mensal a pagar por esse 
serviço é determinado pela aplicação de tarifas, por faixas de consumo de água, sendo obtido pela adição dos 
valores correspondentes a cada faixa. 
• Faixa 1: para consumo de até 6 m³ , valor fixo de R$ 12,00; 
• Faixa 2: para consumo superior a 6 m³ e até 10 m³ , tarifa de R$ 3,00 por metro cúbico ao que exceder a 6 m³ ; 
• Faixa 3: para consumo superior a 10 m³ , tarifa de R$ 6,00 por metro cúbico ao que exceder a 10 m³ . 
Sabe-se que nessa cidade o consumo máximo de água por residência é de 15 m³ por mês. 
O gráfico que melhor descreve o valor P , em real, a ser pago por mês, em função do volume V de água consumido, 
em metro cúbico, é`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2019/images/enem_2019_d2_q139_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2019/images/enem_2019_d2_q139_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2019/images/enem_2019_d2_q139_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2019/images/enem_2019_d2_q139_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2019/images/enem_2019_d2_q139_E.jpg` },
    ],
    correct: 'A',
    explanation: `P(V) é constante e igual a 12 para 0 ≤ V ≤ 6 (patamar); para 6 < V ≤ 10, P = 12 + 3(V−6), chegando a P(10) = 24; para 10 < V ≤ 15, P = 24 + 6(V−10), chegando a P(15) = 54. O gráfico começa constante e depois cresce ficando mais íngreme na última faixa — alternativa A. Resposta: A.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 140,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `A gripe é uma infecção respiratória aguda de curta 
duração causada pelo vírus influenza . Ao entrar no 
nosso organismo pelo nariz, esse vírus multiplica-se, 
disseminando-se para a garganta e demais partes das 
vias respiratórias, incluindo os pulmões. 
O vírus influenza é uma partícula esférica que tem 
um diâmetro interno de 0,00011 mm. 
Disponível em: www.gripenet.pt. Acesso em: 2 nov. 2013 (adaptado). 
Em notação científica, o diâmetro interno do vírus 
influenza , em mm, é`,
    alternatives: [
      { id: 'A', type: 'text', value: `1,1 × 10⁻¹` },
      { id: 'B', type: 'text', value: `1,1 × 10⁻²` },
      { id: 'C', type: 'text', value: `1,1 × 10⁻³` },
      { id: 'D', type: 'text', value: `1,1 × 10⁻⁴` },
      { id: 'E', type: 'text', value: `1,1 × 10⁻⁵` },
    ],
    correct: 'D',
    explanation: `0,00011 = 1,1 × 10⁻⁴ mm (a vírgula desloca-se 4 casas). Resposta: D.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 141,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Em um jogo on-line, cada jogador procura subir 
de nível e aumentar sua experiência, que são dois 
parâmetros importantes no jogo, dos quais dependem 
as forças de defesa e de ataque do participante. A força 
de defesa de cada jogador é diretamente proporcional ao 
seu nível e ao quadrado de sua experiência, enquanto 
sua força de ataque é diretamente proporcional à sua 
experiência e ao quadrado do seu nível. Nenhum jogador 
sabe o nível ou a experiência dos demais. Os jogadores 
iniciam o jogo no nível 1 com experiência 1 e possuem 
força de ataque 2 e de defesa 1. Nesse jogo, cada 
participante se movimenta em uma cidade em busca de 
tesouros para aumentar sua experiência. Quando dois 
deles se encontram, um deles pode desafiar o outro 
para um confronto, sendo o desafiante considerado 
o atacante. Compara-se então a força de ataque do 
desafiante com a força de defesa do desafiado e vence 
o confronto aquele cuja força for maior. O vencedor do 
desafio aumenta seu nível em uma unidade. Caso haja 
empate no confronto, ambos os jogadores aumentam 
seus níveis em uma unidade. 
Durante um jogo, o jogador J 1 , de nível 4 e experiência 5, 
irá atacar o jogador J 2 , de nível 2 e experiência 6. 
O jogador J 1 venceu esse confronto porque a diferença 
entre sua força de ataque e a força de defesa de seu 
oponente era`,
    alternatives: [
      { id: 'A', type: 'text', value: `112.` },
      { id: 'B', type: 'text', value: `88.` },
      { id: 'C', type: 'text', value: `60.` },
      { id: 'D', type: 'text', value: `28.` },
      { id: 'E', type: 'text', value: `24.` },
    ],
    correct: 'B',
    explanation: `Dos valores iniciais (nível 1, experiência 1): ataque = k_a·exp·nível² = 2 → k_a = 2; defesa = k_d·nível·exp² = 1 → k_d = 1. Ataque de J₁ (nível 4, exp 5) = 2·5·4² = 160. Defesa de J₂ (nível 2, exp 6) = 1·2·6² = 72. Diferença = 160 − 72 = 88. Resposta: B.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 142,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Em um condomínio, uma área pavimentada, que 
tem a forma de um círculo com diâmetro medindo 6 m, 
é cercada por grama. A administração do condomínio 
deseja ampliar essa área, mantendo seu formato 
circular, e aumentando, em 8 m, o diâmetro dessa 
região, mantendo o revestimento da parte já existente. 
O condomínio dispõe, em estoque, de material 
suficiente para pavimentar mais 100 m² de área. 
O síndico do condomínio irá avaliar se esse material 
disponível será suficiente para pavimentar a região a 
ser ampliada. 
Utilize 3 como aproximação para π . 
A conclusão correta a que o síndico deverá chegar, 
considerando a nova área a ser pavimentada, é a de 
que o material disponível em estoque`,
    alternatives: [
      { id: 'A', type: 'text', value: `será suficiente, pois a área da nova região a ser pavimentada mede 21 m² .` },
      { id: 'B', type: 'text', value: `será suficiente, pois a área da nova região a ser pavimentada mede 24 m² .` },
      { id: 'C', type: 'text', value: `será suficiente, pois a área da nova região a ser pavimentada mede 48 m² .` },
      { id: 'D', type: 'text', value: `não será suficiente, pois a área da nova região a ser pavimentada mede 108 m² .` },
      { id: 'E', type: 'text', value: `não será suficiente, pois a área da nova região a ser pavimentada mede 120 m² .` },
    ],
    correct: 'E',
    explanation: `Com π ≈ 3: área inicial (d = 6, r = 3) = 3·3² = 27 m²; área ampliada (d = 14, r = 7) = 3·7² = 147 m². Área nova a pavimentar = 147 − 27 = 120 m² > 100 m² disponíveis, logo não será suficiente. Resposta: E.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 143,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Os exercícios físicos são recomendados para o bom
funcionamento do organismo, pois aceleram o metabolismo e, em
consequência, elevam o consumo de calorias. No gráfico, estão
registrados os valores calóricos, em kcal, gastos em cinco
diferentes atividades físicas, em função do tempo dedicado às
atividades, contado em minuto. 140 III 120 II IV 100 V 80
(kcal) 60 40 I 20 5 10 15 20 25 30 Tempo (min) Qual dessas
atividades físicas proporciona o maior consumo de
quilocalorias por minuto?`,
    images: ['/enem/2019/images/enem_2019_d2_q143.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I` },
      { id: 'B', type: 'text', value: `II` },
      { id: 'C', type: 'text', value: `III` },
      { id: 'D', type: 'text', value: `IV` },
      { id: 'E', type: 'text', value: `V` },
    ],
    correct: 'B',
    explanation: `O consumo por minuto é a razão kcal/tempo (inclinação da reta pela origem). I: 20/10 = 2; II: 100/15 ≈ 6,7; III: 120/20 = 6; IV: 100/25 = 4; V: 80/30 ≈ 2,7. O maior é o da atividade II. Resposta: B.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 144,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Um professor aplica, durante os cinco dias úteis
de uma semana, testes com quatro questões de
múltipla escolha a cinco alunos. Os resultados foram
representados na matriz.

Nessa matriz os elementos das linhas de 1 a 5 representam as
quantidades de questões acertadas pelos alunos Ana, Bruno,
Carlos, Denis e Érica, respectivamente, enquanto que as
colunas de 1 a 5 indicam os dias da semana, de segunda-feira a
sexta-feira, respectivamente, em que os testes foram
aplicados. O teste que apresentou maior quantidade de acertos
foi o aplicado na`,
    images: ['/enem/2019/images/enem_2019_d2_q144.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `segunda-feira.` },
      { id: 'B', type: 'text', value: `terça-feira.` },
      { id: 'C', type: 'text', value: `quarta-feira.` },
      { id: 'D', type: 'text', value: `quinta-feira.` },
      { id: 'E', type: 'text', value: `sexta-feira.` },
    ],
    correct: 'A',
    explanation: `Somando cada coluna (dia): seg = 3+3+2+3+0 = 11; ter = 2+2+2+2+2 = 10; qua = 0+4+2+4+0 = 10; qui = 1+1+3+1+4 = 10; sex = 2+2+2+0+4 = 10. A maior soma é 11, na segunda-feira. Resposta: A.`,
    subject: ['mat'],
    topics: ['Matrizes e determinantes', 'Questões aleatórias'],
  },
  {
    id: 145,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Um ciclista quer montar um sistema de marchas 
usando dois discos dentados na parte traseira de sua 
bicicleta, chamados catracas. A coroa é o disco dentado 
que é movimentado pelos pedais da bicicleta, sendo 
que a corrente transmite esse movimento às catracas, 
que ficam posicionadas na roda traseira da bicicleta. 
As diferentes marchas ficam definidas pelos diferentes 
diâmetros das catracas, que são medidos conforme 
indicação na figura. 
Diâmetro do 
disco dentado 
O ciclista já dispõe de uma catraca com 7 cm de 
diâmetro e pretende incluir uma segunda catraca, de 
modo que, à medida em que a corrente passe por ela, 
a bicicleta avance 50% a mais do que avançaria se a 
corrente passasse pela primeira catraca, a cada volta 
completa dos pedais. 
O valor mais próximo da medida do diâmetro da segunda 
catraca, em centímetro e com uma casa decimal, é`,
    images: ['/enem/2019/images/enem_2019_d2_q145.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `2,3.` },
      { id: 'B', type: 'text', value: `3,5.` },
      { id: 'C', type: 'text', value: `4,7.` },
      { id: 'D', type: 'text', value: `5,3.` },
      { id: 'E', type: 'text', value: `10,5.` },
    ],
    correct: 'C',
    explanation: `A cada volta dos pedais, o avanço é proporcional ao número de voltas da catraca, que é inversamente proporcional ao seu diâmetro. Para avançar 50% a mais, a catraca deve girar 1,5 vez mais, logo seu diâmetro deve ser 7/1,5 ≈ 4,7 cm. Resposta: C.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 146,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `O serviço de meteorologia de uma cidade emite relatórios
diários com a previsão do tempo. De posse dessas informações,
a prefeitura emite três tipos de alertas para a população: •
Alerta cinza: deverá ser emitido sempre que a previsão do
tempo estimar que a temperatura será inferior a 10 °C, e a
umidade relativa do ar for inferior a 40%; • Alerta laranja:
deverá ser emitido sempre que a previsão do tempo estimar que
a temperatura deve variar entre 35 °C e 40 °C, e a umidade
relativa do ar deve ficar abaixo de 30%; • Alerta vermelho:
deverá ser emitido sempre que a previsão do tempo estimar que
a temperatura será superior a 40 °C, e a umidade relativa do
ar for inferior a 25%. Um resumo da previsão do tempo nessa
cidade, para um período de 15 dias, foi apresentado no
gráfico. Temperatura Umidade relativa do ar Temperatura (°C)
Umidade relativa do ar (%) 60 60 40 40 20 20 0 2 4 6 8 10 12
14 16 Dia Decorridos os 15 dias de validade desse relatório,
um funcionário percebeu que, no período a que se refere o
gráfico, foram emitidos os seguintes alertas: • Dia 1: alerta
cinza; • Dia 12: alerta laranja; • Dia 13: alerta vermelho. Em
qual(is) desses dias o(s) aviso(s) foi(ram) emitido(s)
corretamente?`,
    images: ['/enem/2019/images/enem_2019_d2_q146.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `12` },
      { id: 'C', type: 'text', value: `1 e 12` },
      { id: 'D', type: 'text', value: `1 e 13` },
      { id: 'E', type: 'text', value: `1, 12 e 13` },
    ],
    correct: 'A',
    explanation: `Dia 1: T ≈ 6 °C (< 10) e umidade ≈ 34% (< 40%) — alerta cinza correto. Dia 12: T = 40 °C não está entre 35 °C e 40 °C (faixa exigida para o laranja), então o laranja foi emitido indevidamente. Dia 13: T ≈ 42 °C (> 40), mas a umidade ≈ 40% não é inferior a 25%, então o vermelho foi emitido indevidamente. Apenas o dia 1 está correto. Resposta: A.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 147,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Uma administração municipal encomendou a pintura de dez placas
de sinalização para colocar em seu pátio de estacionamento. O
profissional contratado para o serviço inicial pintará o fundo
de dez placas e cobrará um valor de acordo com a área total
dessas placas. O formato de cada placa é um círculo de
diâmetro d = 40 cm, que tangencia lados de um retângulo, sendo
que o comprimento total da placa é h = 60 cm, conforme
ilustrado na figura. Use 3,14 como aproximação para π . d  h
E PROIBIDO ESTACIONAR Qual é a soma das medidas das áreas, em
centímetros quadrados, das dez placas?`,
    images: ['/enem/2019/images/enem_2019_d2_q147.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `16 628` },
      { id: 'B', type: 'text', value: `22 280` },
      { id: 'C', type: 'text', value: `28 560` },
      { id: 'D', type: 'text', value: `41 120` },
      { id: 'E', type: 'text', value: `66 240` },
    ],
    correct: 'B',
    explanation: `Cada placa = quadrado 40 × 40 encimado por um semicírculo de raio 20 (altura total 40 + 20 = 60 cm). Área = 40·40 + (1/2)·3,14·20² = 1600 + 628 = 2228 cm². Dez placas: 10·2228 = 22 280 cm². Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 148,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `O rótulo da embalagem de um cosmético informa 
que a dissolução de seu conteúdo, de acordo com suas 
especificações, rende 2,7 litros desse produto pronto 
para o uso. Uma pessoa será submetida a um tratamento 
estético em que deverá tomar um banho de imersão 
com esse produto numa banheira com capacidade de 
0,3 m³ . Para evitar o transbordamento, essa banheira 
será preenchida em 80% de sua capacidade. 
Para esse banho, o número mínimo de embalagens 
desse cosmético é`,
    alternatives: [
      { id: 'A', type: 'text', value: `9.` },
      { id: 'B', type: 'text', value: `12.` },
      { id: 'C', type: 'text', value: `89.` },
      { id: 'D', type: 'text', value: `112.` },
      { id: 'E', type: 'text', value: `134.` },
    ],
    correct: 'C',
    explanation: `Volume do banho = 80% de 0,3 m³ = 0,24 m³ = 240 L. Cada embalagem rende 2,7 L: 240/2,7 ≈ 88,9, logo são necessárias 89 embalagens. Resposta: C.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 149,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `O slogan “Se beber não dirija” , muito utilizado em 
campanhas publicitárias no Brasil, chama a atenção 
para o grave problema da ingestão de bebida alcoólica 
por motoristas e suas consequências para o trânsito. 
A gravidade desse problema pode ser percebida 
observando como o assunto é tratado pelo Código de 
Trânsito Brasileiro. Em 2013, a quantidade máxima 
de álcool permitida no sangue do condutor de um 
veículo, que já era pequena, foi reduzida, e o valor 
da multa para motoristas alcoolizados foi aumentado. 
Em consequência dessas mudanças, observou-se 
queda no número de acidentes registrados em uma 
suposta rodovia nos anos que se seguiram às mudanças 
implantadas em 2013, conforme dados no quadro. 
 
Suponha que a tendência de redução no número de 
acidentes nessa rodovia para os anos subsequentes seja 
igual à redução absoluta observada de 2014 para 2015. 
Com base na situação apresentada, o número de 
acidentes esperados nessa rodovia em 2018 foi de`,
    images: ['/enem/2019/images/enem_2019_d2_q149.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `150.` },
      { id: 'B', type: 'text', value: `450.` },
      { id: 'C', type: 'text', value: `550.` },
      { id: 'D', type: 'text', value: `700.` },
      { id: 'E', type: 'text', value: `800.` },
    ],
    correct: 'D',
    explanation: `Redução de 2014 para 2015 = 900 − 850 = 50 acidentes/ano. Mantendo essa redução constante: 2016 = 800, 2017 = 750, 2018 = 700. Resposta: D.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Questões aleatórias'],
  },
  {
    id: 150,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Uma pessoa se interessou em adquirir um produto 
anunciado em uma loja. Negociou com o gerente e 
conseguiu comprá-lo a uma taxa de juros compostos 
de 1% ao mês. O primeiro pagamento será um mês 
após a aquisição do produto, e no valor de R$ 202,00. 
O segundo pagamento será efetuado um mês após o 
primeiro, e terá o valor de R$ 204,02. Para concretizar a 
compra, o gerente emitirá uma nota fiscal com o valor do 
produto à vista negociado com o cliente, correspondendo 
ao financiamento aprovado. 
O valor à vista, em real, que deverá constar na nota 
fiscal é de`,
    alternatives: [
      { id: 'A', type: 'text', value: `398,02.` },
      { id: 'B', type: 'text', value: `400,00.` },
      { id: 'C', type: 'text', value: `401,94.` },
      { id: 'D', type: 'text', value: `404,00.` },
      { id: 'E', type: 'text', value: `406,02.` },
    ],
    correct: 'B',
    explanation: `O valor à vista é a soma dos valores presentes das parcelas: 202/1,01 + 204,02/1,01² = 200 + 200 = 400. Resposta: B.`,
    subject: ['mat'],
    topics: ['Matemática financeira', 'Questões aleatórias'],
  },
  {
    id: 151,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Três sócios resolveram fundar uma fábrica. 
O investimento inicial foi de R$ 1 000 000,00. 
E, independentemente do valor que cada um investiu 
nesse primeiro momento, resolveram considerar que cada 
um deles contribuiu com um terço do investimento inicial. 
Algum tempo depois, um quarto sócio entrou para 
a sociedade, e os quatro, juntos, investiram mais 
R$ 800 000,00 na fábrica. Cada um deles contribuiu 
com um quarto desse valor. Quando venderam a fábrica, 
nenhum outro investimento havia sido feito. Os sócios 
decidiram então dividir o montante de R$ 1 800 000,00 
obtido com a venda, de modo proporcional à quantia 
total investida por cada sócio. 
Quais os valores mais próximos, em porcentagens, 
correspondentes às parcelas financeiras que cada um 
dos três sócios iniciais e o quarto sócio, respectivamente, 
receberam?`,
    alternatives: [
      { id: 'A', type: 'text', value: `29,60 e 11,11.` },
      { id: 'B', type: 'text', value: `28,70 e 13,89.` },
      { id: 'C', type: 'text', value: `25,00 e 25,00.` },
      { id: 'D', type: 'text', value: `18,52 e 11,11.` },
      { id: 'E', type: 'text', value: `12,96 e 13,89.` },
    ],
    correct: 'A',
    explanation: `Cada sócio inicial investiu 1 000 000/3 ≈ 333 333,33; os quatro investiram 800 000/4 = 200 000 cada. Sócio inicial: 333 333,33 + 200 000 = 533 333,33; quarto sócio: 200 000. Total investido = 1 800 000. Percentuais recebidos: 533 333,33/1 800 000 ≈ 29,6% e 200 000/1 800 000 ≈ 11,11%. Resposta: A.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 152,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Para contratar três máquinas que farão o reparo de 
vias rurais de um município, a prefeitura elaborou um 
edital que, entre outras cláusulas, previa: 
• Cada empresa interessada só pode cadastrar uma 
única máquina para concorrer ao edital; 
• O total de recursos destinados para contratar o 
conjunto das três máquinas é de R$ 31 000,00; 
• O valor a ser pago a cada empresa será 
inversamente proporcional à idade de uso 
da máquina cadastrada pela empresa para o 
presente edital. 
As três empresas vencedoras do edital cadastraram 
máquinas com 2, 3 e 5 anos de idade de uso. 
Quanto receberá a empresa que cadastrou a máquina 
com maior idade de uso?`,
    alternatives: [
      { id: 'A', type: 'text', value: `R$ 3 100,00` },
      { id: 'B', type: 'text', value: `R$ 6 000,00` },
      { id: 'C', type: 'text', value: `R$ 6 200,00` },
      { id: 'D', type: 'text', value: `R$ 15 000,00` },
      { id: 'E', type: 'text', value: `R$ 15 500,00` },
    ],
    correct: 'B',
    explanation: `O pagamento é inversamente proporcional à idade: pesos 1/2, 1/3 e 1/5, cuja soma é 31/30. A máquina de maior idade (5 anos) recebe (1/5)/(31/30)·31 000 = (1/5)·(30/31)·31 000 = (1/5)·30 000 = 6 000. Resposta: B.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 153,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Segundo o Instituto Brasileiro de Geografia e 
Estatística (IBGE), o rendimento médio mensal 
dos trabalhadores brasileiros, no ano 2000, era de 
R$ 1 250,00. Já o Censo 2010 mostrou que, em 2010, 
esse valor teve um aumento de 7,2% em relação a 
2000. Esse mesmo instituto projeta que, em 2020, o 
rendimento médio mensal dos trabalhadores brasileiros 
poderá ser 10% maior do que foi em 2010. 
IBGE. Censo 2010 . Disponível em: www.ibge.gov.br. 
Acesso em: 13 ago. 2012 (adaptado). 
Supondo que as projeções do IBGE se realizem, o 
rendimento médio mensal dos brasileiros em 2020 será de`,
    alternatives: [
      { id: 'A', type: 'text', value: `R$ 1 340,00.` },
      { id: 'B', type: 'text', value: `R$ 1 349,00.` },
      { id: 'C', type: 'text', value: `R$ 1 375,00.` },
      { id: 'D', type: 'text', value: `R$ 1 465,00.` },
      { id: 'E', type: 'text', value: `R$ 1 474,00.` },
    ],
    correct: 'E',
    explanation: `2010: 1 250·1,072 = 1 340. 2020: 1 340·1,10 = 1 474. Resposta: E.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 154,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Charles Richter e Beno Gutenberg desenvolveram a 
escala Richter, que mede a magnitude de um terremoto. 
Essa escala pode variar de 0 a 10, com possibilidades 
de valores maiores. O quadro mostra a escala de 
magnitude local (M s ) de um terremoto que é utilizada 
para descrevê-lo. 
 
 Para se calcular a magnitude local, usa-se a fórmula 
M s = 3,30 + log( A ⋅ f ), em que A representa a amplitude 
máxima da onda registrada por um sismógrafo em 
micrômetro ( µ m) e f representa a frequência da onda, 
em hertz (Hz). Ocorreu um terremoto com amplitude 
máxima de 2 000 µ m e frequência de 0,2 Hz. 
Disponível em: http://cejarj.cecierj.edu.br. Acesso em: 1 fev. 2015 (adaptado). 
Utilize 0,3 como aproximação para log 2. 
De acordo com os dados fornecidos, o terremoto 
ocorrido pode ser descrito como`,
    images: ['/enem/2019/images/enem_2019_d2_q154.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Pequeno.` },
      { id: 'B', type: 'text', value: `Ligeiro.` },
      { id: 'C', type: 'text', value: `Moderado.` },
      { id: 'D', type: 'text', value: `Grande.` },
      { id: 'E', type: 'text', value: `Extremo.` },
    ],
    correct: 'C',
    explanation: `M_s = 3,30 + log(A·f) = 3,30 + log(2000·0,2) = 3,30 + log(400). log 400 = log(4·100) = 2·log2 + 2 = 2·0,3 + 2 = 2,6. Assim M_s = 3,30 + 2,6 = 5,9, que está em 5,0 ≤ M_s ≤ 5,9 (Moderado). Resposta: C.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 155,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Após o Fórum Nacional Contra a Pirataria (FNCP) 
incluir a linha de autopeças em campanha veiculada 
contra a falsificação, as agências fiscalizadoras 
divulgaram que os cinco principais produtos de 
autopeças falsificados são: rolamento, pastilha de freio, 
caixa de direção, catalisador e amortecedor. 
Após uma grande apreensão, as peças falsas foram 
cadastradas utilizando-se a codificação: 
Disponível em: www.oficinabrasil.com.br. 
Acesso em: 25 ago. 2014 (adaptado). 
1: rolamento, 2: pastilha de freio, 3: caixa de direção, 
4: catalisador e 5: amortecedor. 
Ao final obteve-se a sequência: 5, 4, 3, 2, 1, 2, 3, 4, 
5, 4, 3, 2, 1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, ... que apresenta 
um padrão de formação que consiste na repetição de um 
bloco de números. Essa sequência descreve a ordem 
em que os produtos apreendidos foram cadastrados. 
O 2 015 º item cadastrado foi um(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `rolamento.` },
      { id: 'B', type: 'text', value: `catalisador.` },
      { id: 'C', type: 'text', value: `amortecedor.` },
      { id: 'D', type: 'text', value: `pastilha de freio.` },
      { id: 'E', type: 'text', value: `caixa de direção.` },
    ],
    correct: 'E',
    explanation: `O bloco que se repete é (5, 4, 3, 2, 1, 2, 3, 4), com 8 termos. Como 2015 = 8·251 + 7, o 2015º termo é o 7º do bloco, que é 3 = caixa de direção. Resposta: E.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Questões aleatórias'],
  },
  {
    id: 156,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Durante suas férias, oito amigos, dos quais dois são 
canhotos, decidem realizar um torneio de vôlei de praia. 
Eles precisam formar quatro duplas para a realização 
do torneio. Nenhuma dupla pode ser formada por dois 
jogadores canhotos. 
De quantas maneiras diferentes podem ser formadas 
essas quatro duplas?`,
    alternatives: [
      { id: 'A', type: 'text', value: `69` },
      { id: 'B', type: 'text', value: `70` },
      { id: 'C', type: 'text', value: `90` },
      { id: 'D', type: 'text', value: `104` },
      { id: 'E', type: 'text', value: `105` },
    ],
    correct: 'C',
    explanation: `Total de maneiras de formar 4 duplas com 8 pessoas = 8!/(2⁴·4!) = 105. Subtraindo os casos em que os 2 canhotos ficam na mesma dupla (os outros 6 formam 3 duplas: 6!/(2³·3!) = 15): 105 − 15 = 90. Resposta: C.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 157,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `As luminárias para um laboratório de matemática 
serão fabricadas em forma de sólidos geométricos. 
Uma delas terá a forma de um tetraedro truncado. 
Esse sólido é gerado a partir de secções paralelas 
a cada uma das faces de um tetraedro regular. 
Para essa luminária, as secções serão feitas de 
maneira que, em cada corte, um terço das arestas 
seccionadas serão removidas. Uma dessas secções 
está indicada na figura.
Essa luminária terá por faces`,
    images: ['/enem/2019/images/enem_2019_d2_q157.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `4 hexágonos regulares e 4 triângulos equiláteros.` },
      { id: 'B', type: 'text', value: `2 hexágonos regulares e 4 triângulos equiláteros.` },
      { id: 'C', type: 'text', value: `4 quadriláteros e 4 triângulos isósceles.` },
      { id: 'D', type: 'text', value: `3 quadriláteros e 4 triângulos isósceles.` },
      { id: 'E', type: 'text', value: `3 hexágonos regulares e 4 triângulos equiláteros.` },
    ],
    correct: 'A',
    explanation: `No tetraedro truncado, cada uma das 4 faces triangulares vira um hexágono regular (remove-se 1/3 de cada aresta) e cada um dos 4 vértices cortados gera um triângulo equilátero: 4 hexágonos regulares e 4 triângulos equiláteros. Resposta: A.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 158,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Comum em lançamentos de empreendimentos 
imobiliários, as maquetes de condomínios funcionam 
como uma ótima ferramenta de marketing para as 
construtoras, pois, além de encantar clientes, auxiliam 
de maneira significativa os corretores na negociação e 
venda de imóveis. 
Um condomínio está sendo lançado em um novo 
bairro de uma cidade. Na maquete projetada pela 
construtora, em escala de 1 : 200, existe um reservatório 
de água com capacidade de 45 cm³ . 
Quando todas as famílias estiverem residindo 
no condomínio, a estimativa é que, por dia, sejam 
consumidos 30 000 litros de água. 
Em uma eventual falta de água, o reservatório cheio 
será suficiente para abastecer o condomínio por 
quantos dias?`,
    alternatives: [
      { id: 'A', type: 'text', value: `30` },
      { id: 'B', type: 'text', value: `15` },
      { id: 'C', type: 'text', value: `12` },
      { id: 'D', type: 'text', value: `6` },
      { id: 'E', type: 'text', value: `3` },
    ],
    correct: 'C',
    explanation: `Na escala 1:200, o volume real é 200³ vezes o da maquete: 45 cm³·200³ = 45·8 000 000 = 360 000 000 cm³ = 360 000 L. Com consumo de 30 000 L/dia: 360 000/30 000 = 12 dias. Resposta: C.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 159,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `O dono de um restaurante situado às margens de uma rodovia
percebeu que, ao colocar uma placa de propaganda de seu
restaurante ao longo da rodovia, as vendas aumentaram.
Pesquisou junto aos seus clientes e concluiu que a
probabilidade de um motorista perceber uma placa de anúncio é
1 2 . Com isso, após autorização do órgão competente, decidiu
instalar novas placas com anúncios de seu restaurante ao longo
dessa rodovia, de maneira que a probabilidade de um motorista
perceber pelo menos uma das placas instaladas fosse superior a
99 100 . A quantidade mínima de novas placas de propaganda a
serem instaladas é`,
    alternatives: [
      { id: 'A', type: 'text', value: `99.` },
      { id: 'B', type: 'text', value: `51.` },
      { id: 'C', type: 'text', value: `50.` },
      { id: 'D', type: 'text', value: `6.` },
      { id: 'E', type: 'text', value: `1.` },
    ],
    correct: 'D',
    explanation: `P(não perceber uma placa) = 1/2; com n placas, P(perceber ao menos uma) = 1 − (1/2)ⁿ. Exigir > 99/100 dá (1/2)ⁿ < 1/100, ou 2ⁿ > 100, logo n ≥ 7 placas no total. Como já existe 1 placa, são necessárias 7 − 1 = 6 novas placas. Resposta: D.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 160,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `O preparador físico de um time de basquete dispõe 
de um plantel de 20 jogadores, com média de altura 
igual a 1,80 m. No último treino antes da estreia em 
um campeonato, um dos jogadores desfalcou o time 
em razão de uma séria contusão, forçando o técnico a 
contratar outro jogador para recompor o grupo. 
Se o novo jogador é 0,20 m mais baixo que o anterior, 
qual é a média de altura, em metro, do novo grupo?`,
    alternatives: [
      { id: 'A', type: 'text', value: `1,60` },
      { id: 'B', type: 'text', value: `1,78` },
      { id: 'C', type: 'text', value: `1,79` },
      { id: 'D', type: 'text', value: `1,81` },
      { id: 'E', type: 'text', value: `1,82` },
    ],
    correct: 'C',
    explanation: `Soma das alturas = 20·1,80 = 36 m. Trocando um jogador por outro 0,20 m mais baixo, a soma passa a 36 − 0,20 = 35,80 m. Nova média = 35,80/20 = 1,79 m. Resposta: C.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 161,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Em uma fábrica de refrigerantes, é necessário 
que se faça periodicamente o controle no processo 
de engarrafamento para evitar que sejam envasadas 
garrafas fora da especificação do volume escrito no rótulo. 
Diariamente, durante 60 dias, foram anotadas as 
quantidades de garrafas fora dessas especificações. 
O resultado está apresentado no quadro. 
 
A média diária de garrafas fora das especificações no 
período considerado é`,
    images: ['/enem/2019/images/enem_2019_d2_q161.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0,1.` },
      { id: 'B', type: 'text', value: `0,2.` },
      { id: 'C', type: 'text', value: `1,5.` },
      { id: 'D', type: 'text', value: `2,0.` },
      { id: 'E', type: 'text', value: `3,0.` },
    ],
    correct: 'B',
    explanation: `Total de garrafas fora = 0·52 + 1·5 + 2·2 + 3·1 = 12, em 60 dias. Média diária = 12/60 = 0,2. Resposta: B.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 162,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `O Sistema Métrico Decimal é o mais utilizado 
atualmente para medir comprimentos e distâncias. 
Em algumas atividades, porém, é possível observar 
a utilização de diferentes unidades de medida. 
Um exemplo disso pode ser observado no quadro. 
 
Assim, um pé, em polegada, equivale a`,
    images: ['/enem/2019/images/enem_2019_d2_q162.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0,1200.` },
      { id: 'B', type: 'text', value: `0,3048.` },
      { id: 'C', type: 'text', value: `1,0800.` },
      { id: 'D', type: 'text', value: `12,0000.` },
      { id: 'E', type: 'text', value: `36,0000.` },
    ],
    correct: 'D',
    explanation: `1 jarda = 0,9144 m = 91,44 cm = 3 pés, logo 1 pé = 91,44/3 = 30,48 cm. Em polegadas: 30,48/2,54 = 12. Resposta: D.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 163,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `O Índice de Desenvolvimento Humano (IDH) é uma 
medida usada para classificar os países pelo seu grau 
de desenvolvimento. Para seu cálculo, são levados em 
consideração a expectativa de vida ao nascer, tempo de 
escolaridade e renda per capita, entre outros. O menor 
valor deste índice é zero e o maior é um. Cinco países 
foram avaliados e obtiveram os seguintes índices de 
desenvolvimento humano: o primeiro país recebeu um 
1 
3 , o quarto X 2 e o 
valor X , o segundo 
X , o terceiro X 
último X 3 . Nenhum desses países zerou ou atingiu o 
índice máximo. 
Qual desses países obteve o maior IDH?`,
    alternatives: [
      { id: 'A', type: 'text', value: `O primeiro.` },
      { id: 'B', type: 'text', value: `O segundo.` },
      { id: 'C', type: 'text', value: `O terceiro.` },
      { id: 'D', type: 'text', value: `O quarto.` },
      { id: 'E', type: 'text', value: `O quinto.` },
    ],
    correct: 'C',
    explanation: `Para 0 < X < 1, quanto menor o expoente maior o valor; as raízes (expoentes 1/2 e 1/3) superam X, X² e X³, e X^(1/3) > X^(1/2). Logo o maior índice é X^(1/3), do terceiro país. Resposta: C.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 164,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Um mestre de obras deseja fazer uma laje com espessura de 5 cm
utilizando concreto usinado, conforme as dimensões do projeto
dadas na figura. O concreto para fazer a laje será fornecido
por uma usina que utiliza caminhões com capacidades máximas de
2 m³ , 5 m³ e 10 m³ de concreto. 8 m 1 m 3 m 2 m 3 m 5 m 14 m
Qual a menor quantidade de caminhões, utilizando suas
capacidades máximas, que o mestre de obras deverá pedir à
usina de concreto para fazer a laje?`,
    images: ['/enem/2019/images/enem_2019_d2_q164.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Dez caminhões com capacidade máxima de 10 m³ .` },
      { id: 'B', type: 'text', value: `Cinco caminhões com capacidade máxima de 10 m³ .` },
      { id: 'C', type: 'text', value: `Um caminhão com capacidade máxima de 5 m³ .` },
      { id: 'D', type: 'text', value: `Dez caminhões com capacidade máxima de 2 m³ .` },
      { id: 'E', type: 'text', value: `Um caminhão com capacidade máxima de 2 m³ .` },
    ],
    correct: 'C',
    explanation: `A laje decompõe-se em três faixas verticais: 8×8 = 64, 3×7 = 21 e 3×5 = 15, totalizando 100 m². Volume = 100·0,05 = 5 m³. A menor quantidade de caminhões, usando a capacidade máxima, é 1 caminhão de 5 m³. Resposta: C.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 165,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `O álcool é um depressor do sistema nervoso central 
e age diretamente em diversos órgãos. A concentração 
de álcool no sangue pode ser entendida como a razão 
entre a quantidade q de álcool ingerido, medida em 
grama, e o volume de sangue, em litro, presente no 
organismo do indivíduo. Em geral, considera-se que 
esse volume corresponda ao valor numérico dado 
por 8% da massa corporal m desse indivíduo, medida 
em quilograma. 
De acordo com a Associação Médica Americana, 
uma concentração alcoólica superior a 0,4 grama por 
litro de sangue é capaz de trazer prejuízos à saúde do 
indivíduo. 
Disponível em: http://cisa.org.br. Acesso em: 1 dez. 2018 (adaptado). 
A expressão relacionando q e m que representa a 
concentração alcoólica prejudicial à saúde do indivíduo, 
de acordo com a Associação Médica Americana, é`,
    alternatives: [
      { id: 'A', type: 'text', value: `q / (0,8m) > 0,4` },
      { id: 'B', type: 'text', value: `(0,4m) / q > 0,8` },
      { id: 'C', type: 'text', value: `q / (0,4m) > 0,8` },
      { id: 'D', type: 'text', value: `(0,08m) / q > 0,4` },
      { id: 'E', type: 'text', value: `q / (0,08m) > 0,4` },

    ],
    correct: 'E',
    explanation: `O volume de sangue é 8% de m, ou 0,08m; a concentração é q/(0,08m). É prejudicial quando supera 0,4 g/L: q/(0,08m) > 0,4. Resposta: E.`,
    subject: ['mat'],
    topics: ['Equações e inequações', 'Questões aleatórias'],
  },
  {
    id: 166,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Construir figuras de diversos tipos, apenas 
dobrando e cortando papel, sem cola e sem tesoura, é 
a arte do origami ( ori = dobrar; kami = papel), que tem 
um significado altamente simbólico no Japão. A base 
do origami é o conhecimento do mundo por base do 
tato. Uma jovem resolveu construir um cisne usando 
a técnica do origami , utilizando uma folha de papel de 
18 cm por 12 cm. Assim, começou por dobrar a folha
conforme a figura.
Após essa primeira dobradura, a medida do segmento
AE é`,
    images: ['/enem/2019/images/enem_2019_d2_q166.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `2√22 cm.` },
      { id: 'B', type: 'text', value: `6√3 cm.` },
      { id: 'C', type: 'text', value: `12 cm.` },
      { id: 'D', type: 'text', value: `6√5 cm.` },
      { id: 'E', type: 'text', value: `12√2 cm.` },
    ],
    correct: 'D',
    explanation: `Na folha 18×12, após a dobra o ponto E fica a 12 cm do canto C, isto é, a 18 − 12 = 6 cm do pé do vértice A. Logo AE = √(6² + 12²) = √180 = 6√5 cm. Resposta: D.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 167,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Os alunos de uma turma escolar foram divididos em dois grupos.
Um grupo jogaria basquete, enquanto o outro jogaria futebol.
Sabe-se que o grupo de basquete é formado pelos alunos mais
altos da classe e tem uma pessoa a mais do que o grupo de
futebol. A tabela seguinte apresenta informações sobre as
alturas dos alunos da turma. Média Mediana Moda 1,65 1,67 1,70
Os alunos P, J, F e M medem, respectivamente, 1,65 m, 1,66 m,
1,67 m e 1,68 m, e as suas alturas não são iguais a de nenhum
outro colega da sala. Segundo essas informações, argumenta-se
que os alunos P, J, F e M jogaram, respectivamente,`,
    alternatives: [
      { id: 'A', type: 'text', value: `basquete, basquete, basquete, basquete.` },
      { id: 'B', type: 'text', value: `futebol, basquete, basquete, basquete.` },
      { id: 'C', type: 'text', value: `futebol, futebol, basquete, basquete.` },
      { id: 'D', type: 'text', value: `futebol, futebol, futebol, basquete.` },
      { id: 'E', type: 'text', value: `futebol, futebol, futebol, futebol.` },
    ],
    correct: 'C',
    explanation: `A mediana 1,67 é a altura do mais baixo do grupo de basquete (os mais altos, com 1 pessoa a mais). Assim, quem tem altura abaixo de 1,67 joga futebol e a partir de 1,67 joga basquete: P (1,65) futebol, J (1,66) futebol, F (1,67) basquete, M (1,68) basquete. Resposta: C.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 168,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Uma empresa tem diversos funcionários. Um deles 
é o gerente, que recebe R$ 1 000,00 por semana. 
Os outros funcionários são diaristas. Cada um deles 
trabalha 2 dias por semana, recebendo R$ 80,00 por 
dia trabalhado. 
Chamando de X a quantidade total de funcionários 
da empresa, a quantia Y, em reais, que esta empresa 
gasta semanalmente para pagar seus funcionários é 
expressa por`,
    alternatives: [
      { id: 'A', type: 'text', value: `Y = 80X + 920.` },
      { id: 'B', type: 'text', value: `Y = 80X + 1 000.` },
      { id: 'C', type: 'text', value: `Y = 80X + 1 080.` },
      { id: 'D', type: 'text', value: `Y = 160X + 840.` },
      { id: 'E', type: 'text', value: `Y = 160X + 1 000.` },
    ],
    correct: 'D',
    explanation: `O gerente custa 1 000; cada diarista custa 2·80 = 160 por semana e há (X − 1) diaristas. Y = 1 000 + 160(X − 1) = 160X + 840. Resposta: D.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 169,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Um aplicativo de relacionamentos funciona da seguinte forma: o
usuário cria um perfil com foto e informações pessoais, indica
as características dos usuários com quem deseja estabelecer
contato e determina um raio de abrangência a partir da sua
localização. O aplicativo identifica as pessoas que se
encaixam no perfil desejado e que estão a uma distância do
usuário menor ou igual ao raio de abrangência. Caso dois
usuários tenham perfis compatíveis e estejam numa região de
abrangência comum a ambos, o aplicativo promove o contato
entre os usuários, o que é chamado de match . O usuário P
define um raio de abrangência com medida de 3 km e busca
ampliar a possibilidade de obter um match se deslocando para a
região central da cidade, que concentra um maior número de
usuários. O gráfico ilustra alguns bares que o usuário P
costuma frequentar para ativar o aplicativo, indicados por I,
II, III, IV e V. Sabe-se que os usuários Q, R e S, cujas
posições estão descritas pelo gráfico, são compatíveis com o
usuário P, e que estes definiram raios de abrangência
respectivamente iguais a 3 km, 2 km e 5 km. y (km) 8 Q R 7 IV
I 6 II III 5 V 4 S 3 2 1 P x (km) 1 0 2 3 4 5 6 7 Com base no
gráfico e nas afirmações anteriores, em qual bar o usuário P
teria a possibilidade de um match com os usuários Q, R e S,
simultaneamente?`,
    images: ['/enem/2019/images/enem_2019_d2_q169.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I` },
      { id: 'B', type: 'text', value: `II` },
      { id: 'C', type: 'text', value: `III` },
      { id: 'D', type: 'text', value: `IV` },
      { id: 'E', type: 'text', value: `V` },
    ],
    correct: 'A',
    explanation: `No bar escolhido, o usuário P (raio 3) faz match com quem está a distância menor ou igual ao menor dos dois raios. No bar I (5,6): até Q(3,7) → √(2²+1²) = √5 ≈ 2,2 ≤ 3; até R(6,7) → √(1²+1²) = √2 ≈ 1,4 ≤ 2; até S(5,3) → √(0²+3²) = 3 ≤ 3. Todas as condições se cumprem apenas no bar I. Resposta: A.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 170,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `A bula de um antibiótico infantil, fabricado na 
forma de xarope, recomenda que sejam ministrados, 
diariamente, no máximo 500 mg desse medicamento 
para cada quilograma de massa do paciente. Um pediatra 
prescreveu a dosagem máxima desse antibiótico para 
ser ministrada diariamente a uma criança de 20 kg pelo 
período de 5 dias. Esse medicamento pode ser comprado 
em frascos de 10 mL, 50 mL, 100 mL, 250 mL e 500 mL. 
Os pais dessa criança decidiram comprar a quantidade 
exata de medicamento que precisará ser ministrada no 
tratamento, evitando a sobra de medicamento. Considere 
que 1 g desse medicamento ocupe um volume de 1 cm³ . 
A capacidade do frasco, em mililitro, que esses pais 
deverão comprar é`,
    alternatives: [
      { id: 'A', type: 'text', value: `10.` },
      { id: 'B', type: 'text', value: `50.` },
      { id: 'C', type: 'text', value: `100.` },
      { id: 'D', type: 'text', value: `250.` },
      { id: 'E', type: 'text', value: `500.` },
    ],
    correct: 'B',
    explanation: `Dose diária = 500 mg/kg·20 kg = 10 000 mg = 10 g; em 5 dias = 50 g. Como 1 g ocupa 1 cm³ = 1 mL, são 50 mL. O frasco exato é o de 50 mL. Resposta: B.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 171,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: ``,
    images: ['/enem/2019/images/enem_2019_d2_q171.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `C₁₂⁴ × C₁₂³ × C₁₂³ × C₁₂²` },
      { id: 'B', type: 'text', value: `C₁₂⁴ + C₈³ + C₅³ + C₂²` },
      { id: 'C', type: 'text', value: `C₁₂⁴ × 2 × C₈³ × C₅²` },
      { id: 'D', type: 'text', value: `C₁₂⁴ + 2 × C₁₂³ + C₁₂²` },
      { id: 'E', type: 'text', value: `C₁₂⁴ × C₈³ × C₅³ × C₂²` },
    ],
    correct: 'E',
    explanation: `Escolhem-se as posições de cada cor em ordem: 4 vermelhos entre os 12 (C₁₂⁴), 3 azuis entre os 8 restantes (C₈³), 3 verdes entre os 5 restantes (C₅³) e 2 amarelos entre os 2 restantes (C₂²): C₁₂⁴ × C₈³ × C₅³ × C₂². Resposta: E.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 172,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `O gráfico a seguir mostra a evolução mensal das vendas de
certo produto de julho a novembro de 2011. Unidades vendidas 2
800 2 700 2 500 700 Jul Ago Set Out Nov Mês Sabe-se que o mês
de julho foi o pior momento da empresa em 2011 e que o número
de unidades vendidas desse produto em dezembro de 2011 foi
igual à média aritmética do número de unidades vendidas nos
meses de julho a novembro do mesmo ano. O gerente de vendas
disse, em uma reunião da diretoria, que, se essa redução no
número de unidades vendidas de novembro para dezembro de 2011
se mantivesse constante nos meses subsequentes, as vendas só
voltariam a ficar piores que julho de 2011 apenas no final de
2012. O diretor financeiro rebateu imediatamente esse
argumento mostrando que, mantida a tendência, isso aconteceria
já em`,
    images: ['/enem/2019/images/enem_2019_d2_q172.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `janeiro.` },
      { id: 'B', type: 'text', value: `fevereiro.` },
      { id: 'C', type: 'text', value: `março.` },
      { id: 'D', type: 'text', value: `abril.` },
      { id: 'E', type: 'text', value: `maio.` },
    ],
    correct: 'D',
    explanation: `Vendas: jul 700, ago 2500, set 2500, out 2800, nov 2700. Média (dezembro) = (700+2500+2500+2800+2700)/5 = 11 200/5 = 2240. Redução de nov para dez = 2700 − 2240 = 460/mês. Subtraindo 460: jan 1780, fev 1320, mar 860, abr 400 < 700 (pior que julho). Isso ocorre em abril. Resposta: D.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 173,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Em um determinado ano, os computadores da receita federal de um país identificaram como inconsistentes 
20% das declarações de imposto de renda que lhe foram encaminhadas. Uma declaração e classificada como 
inconsistente quando apresenta algum tipo de erro ou conflito nas informações prestadas. Essas declarações 
consideradas inconsistentes foram analisadas pelos auditores, que constataram que 25% delas eram fraudulentas. 
Constatou-se ainda que, dentre as declarações que não apresentaram inconsistências, 6,25% eram fraudulentas. 
Qual é a probabilidade de, nesse ano, a declaração de um contribuinte ser considerada inconsistente, dado que 
ela era fraudulenta?`,
    alternatives: [
      { id: 'A', type: 'text', value: `0,0500` },
      { id: 'B', type: 'text', value: `0,1000` },
      { id: 'C', type: 'text', value: `0,1125` },
      { id: 'D', type: 'text', value: `0,3125` },
      { id: 'E', type: 'text', value: `0,5000` },
    ],
    correct: 'E',
    explanation: `P(inconsistente) = 0,20; P(fraude|inconsistente) = 0,25; P(fraude|consistente) = 0,0625. P(fraude ∩ inconsistente) = 0,20·0,25 = 0,05; P(fraude ∩ consistente) = 0,80·0,0625 = 0,05; P(fraude) = 0,05 + 0,05 = 0,10. P(inconsistente|fraude) = 0,05/0,10 = 0,5000. Resposta: E.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 174,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: ``,
    images: ['/enem/2019/images/enem_2019_d2_q174.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I` },
      { id: 'B', type: 'text', value: `II` },
      { id: 'C', type: 'text', value: `III` },
      { id: 'D', type: 'text', value: `IV` },
      { id: 'E', type: 'text', value: `V` },
    ],
    correct: 'C',
    explanation: `Taxa = urbana/(urbana+rural) (valores em milhares): I = 8/(8+4) ≈ 0,667; II = 10/18 ≈ 0,556; III = 11/16 = 0,6875; IV = 18/28 ≈ 0,643; V = 17/29 ≈ 0,586. A maior é a do município III. Resposta: C.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 175,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Uma construtora pretende conectar um reservatório central (R c
) em formato de um cilindro, com raio interno igual a 2 m e
altura interna igual a 3,30 m, a quatro reservatórios
cilíndricos auxiliares (R 1 , R 2 , R 3 e R 4 ), os quais
possuem raios internos e alturas internas medindo 1,5 m. R 2 R
C R 1 R 3 R 4 As ligações entre o reservatório central e os
auxiliares são feitas por canos cilíndricos com 0,10 m de
diâmetro interno e 20 m de comprimento, conectados próximos às
bases de cada reservatório. Na conexão de cada um desses canos
com o reservatório central há registros que liberam ou
interrompem o fluxo de água. No momento em que o reservatório
central está cheio e os auxiliares estão vazios, abrem-se os
quatro registros e, após algum tempo, as alturas das colunas
de água nos reservatórios se igualam, assim que cessa o fluxo
de água entre eles, pelo princípio dos vasos comunicantes. A
medida, em metro, das alturas das colunas de água nos
reservatórios auxiliares, após cessar o fluxo de água entre
eles, é`,
    images: ['/enem/2019/images/enem_2019_d2_q175.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1,44.` },
      { id: 'B', type: 'text', value: `1,16.` },
      { id: 'C', type: 'text', value: `1,10.` },
      { id: 'D', type: 'text', value: `1,00.` },
      { id: 'E', type: 'text', value: `0,95.` },
    ],
    correct: 'D',
    explanation: `Água do central cheio = π·2²·3,30 = 13,2π m³. Ao abrir os registros, a água ocupa os 5 reservatórios (áreas das bases: central π·2² = 4π; cada auxiliar π·1,5² = 2,25π, total 9π; soma 13π) e os 4 canos (cada um π·0,05²·20 = 0,05π; total 0,2π). Igualando as alturas h: 13π·h + 0,2π = 13,2π → 13h = 13 → h = 1,00 m. Resposta: D.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 176,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Para construir uma piscina, cuja área total da 
superfície interna é igual a 40 m² , uma construtora 
apresentou o seguinte orçamento: 
• R$ 10 000,00 pela elaboração do projeto; 
• R$ 40 000,00 pelos custos fixos; 
• R$ 2 500,00 por metro quadrado para construção 
da área interna da piscina. 
Após a apresentação do orçamento, essa empresa 
decidiu reduzir o valor de elaboração do projeto em 
50%, mas recalculou o valor do metro quadrado para a 
construção da área interna da piscina, concluindo haver 
a necessidade de aumentá-lo em 25%. Além disso, a 
construtora pretende dar um desconto nos custos fixos, 
de maneira que o novo valor do orçamento seja reduzido 
em 10% em relação ao total inicial. 
O percentual de desconto que a construtora deverá 
conceder nos custos fixos é de`,
    alternatives: [
      { id: 'A', type: 'text', value: `23,3%` },
      { id: 'B', type: 'text', value: `25,0%` },
      { id: 'C', type: 'text', value: `50,0%` },
      { id: 'D', type: 'text', value: `87,5%` },
      { id: 'E', type: 'text', value: `100,0%` },
    ],
    correct: 'D',
    explanation: `Orçamento inicial = 10 000 + 40 000 + 2 500·40 = 150 000. Novo projeto = 5 000; novo valor do m² = 2 500·1,25 = 3 125, construção = 3 125·40 = 125 000. O novo total deve ser 0,90·150 000 = 135 000: 5 000 + 125 000 + custos fixos = 135 000 → custos fixos = 5 000. Desconto sobre 40 000 = (40 000 − 5 000)/40 000 = 87,5%. Resposta: D.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 177,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Um grupo de engenheiros está projetando um motor cujo esquema
de deslocamento vertical do pistão dentro da câmara de
combustão está representado na figura. Câmara de combustão
Câmara de combustão Pistão h ( t ) h (0) = 0 Pistão Instante t
= 0 Instante t ≠ 0 A função h t sen t ( ) 4 4 definida para t
≥ 0 descreve como varia a altura h , medida em centímetro, da
parte superior do pistão dentro da câmara de combustão, em
função do tempo t , medido em segundo. Nas figuras estão
indicadas as alturas do pistão em dois instantes distintos. O
valor do parâmetro β , que é dado por um número inteiro
positivo, está relacionado com a velocidade de deslocamento do
pistão. Para que o motor tenha uma boa potência, é necessário
e suficiente que, em menos de 4 segundos após o início do
funcionamento (instante t = 0), a altura da base do pistão
alcance por três vezes o valor de 6 cm. Para os cálculos,
utilize 3 como aproximação para π . O menor valor inteiro a
ser atribuído ao parâmetro β , de forma que o motor a ser
construído tenha boa potência, é`,
    images: ['/enem/2019/images/enem_2019_d2_q177.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1.` },
      { id: 'B', type: 'text', value: `2.` },
      { id: 'C', type: 'text', value: `4.` },
      { id: 'D', type: 'text', value: `5.` },
      { id: 'E', type: 'text', value: `8.` },
    ],
    correct: 'D',
    explanation: `h(t) = 4 + 4·sen(βt/2 − π/2) = 4 − 4·cos(βt/2). Tem-se h = 6 quando cos(βt/2) = −1/2, ou seja βt/2 = 2π/3, 4π/3, 8π/3, ... A 3ª vez ocorre em βt/2 = 8π/3, isto é t = 16π/(3β). Exigir t < 4: 16π/(3β) < 4 → β > 4π/3 ≈ 4 (com π ≈ 3). O menor inteiro é β = 5. Resposta: D.`,
    subject: ['mat'],
    topics: ['Trigonometria', 'Questões aleatórias'],
  },
  {
    id: 178,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Um comerciante, que vende somente pastel, refrigerante em lata e caldo de cana em copos, fez um levantamento
das vendas realizadas durante a semana. O resultado desse levantamento está apresentado no gráfico.
Ele estima que venderá, em cada dia da próxima semana, uma quantidade de refrigerante em lata igual à
soma das quantidades de refrigerante em lata e caldo de cana em copos vendidas no respectivo dia da última
semana. Quanto aos pastéis, estima vender, a cada dia da próxima semana, uma quantidade igual à quantidade
de refrigerante em lata que prevê vender em tal dia. Já para o número de caldo de cana em copos, estima que as
vendas diárias serão iguais às da última semana.
Segundo essas estimativas, a quantidade a mais de pastéis que esse comerciante deve vender na próxima semana é`,
    images: ['/enem/2019/images/enem_2019_d2_q178.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `20.` },
      { id: 'B', type: 'text', value: `27.` },
      { id: 'C', type: 'text', value: `44.` },
      { id: 'D', type: 'text', value: `55.` },
      { id: 'E', type: 'text', value: `71.` },

    ],
    correct: 'B',
    explanation: `Totais da última semana (lidos no gráfico): pastel = 10+2+4+4+7+8+10 = 45; refrigerante = 7+4+4+5+8+8+8 = 44; caldo de cana = 4+3+1+2+4+7+7 = 28. Na próxima semana o pastel de cada dia iguala o refrigerante previsto (= refrigerante + caldo do mesmo dia), logo o total de pastéis previsto = 44 + 28 = 72. A quantidade a mais = 72 − 45 = 27. Resposta: B.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 179,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Nos seis cômodos de uma casa há sensores de presença posicionados de forma que a luz de cada cômodo 
acende assim que uma pessoa nele adentra, e apaga assim que a pessoa se retira desse cômodo. Suponha que o 
acendimento e o desligamento sejam instantâneos. 
O morador dessa casa visitou alguns desses cômodos, ficando exatamente um minuto em cada um deles. 
O gráfico descreve o consumo acumulado de energia, em watt × minuto, em função do tempo t , em minuto, das 
lâmpadas de LED dessa casa, enquanto a figura apresenta a planta baixa da casa, na qual os cômodos estão 
numerados de 1 a 6, com as potências das respectivas lâmpadas indicadas. 
(8 ; 120) 
(7 ; 105) 
Energia (W ⋅ min) 
(6 ; 85) 
(5 ; 75) 
(4 ; 55) 
(2 ; 35) 
(3 ; 40) 
(1 ; 20) 
Tempo (min) 
(0 ; 0) 
A sequência de deslocamentos pelos cômodos, conforme o consumo de energia apresentado no gráfico, é`,
    images: ['/enem/2019/images/enem_2019_d2_q179.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 → 4 → 5 → 4 → 1 → 6 → 1 → 4` },
      { id: 'B', type: 'text', value: `1 → 2 → 3 → 1 → 4 → 1 → 4 → 4` },
      { id: 'C', type: 'text', value: `1 → 4 → 5 → 4 → 1 → 6 → 1 → 2 → 3` },
      { id: 'D', type: 'text', value: `1 → 2 → 3 → 5 → 4 → 1 → 6 → 1 → 4` },
      { id: 'E', type: 'text', value: `1 → 4 → 2 → 3 → 5 → 1 → 6 → 1 → 4` },

    ],
    correct: 'A',
    explanation: `Em cada trecho de 1 min a inclinação do consumo acumulado é a potência do cômodo visitado. Variações: 20 (Sala, cômodo 1), 15 (Suíte, 4), 5 (Banho, 5), 15 (4), 20 (1), 10 (Cozinha, 6), 20 (1), 15 (4). Sequência: 1 → 4 → 5 → 4 → 1 → 6 → 1 → 4. Resposta: A.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 180,
    exam: 'enem',
    year: 2019,
    day: 2,
    text: `Um casal planejou uma viagem e definiu como teto para o gasto diário um valor de ate R$ 1 000,00. Antes de 
decidir o destino da viagem, fizeram uma pesquisa sobre a taxa de cambio vigente para as moedas de cinco países 
que desejavam visitar e também sobre as estimativas de gasto diário em cada um, com o objetivo de escolher o 
destino que apresentasse o menor custo diário em real. 
O quadro mostra os resultados obtidos com a pesquisa realizada. 
 
Nessas condições, qual será o destino escolhido para a viagem?`,
    images: ['/enem/2019/images/enem_2019_d2_q180.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Austrália.` },
      { id: 'B', type: 'text', value: `Canadá.` },
      { id: 'C', type: 'text', value: `EUA.` },
      { id: 'D', type: 'text', value: `França.` },
      { id: 'E', type: 'text', value: `Reino Unido.` },
    ],
    correct: 'A',
    explanation: `Gasto diário em reais = gasto × câmbio: França 315·3,14 = 989,10; EUA 390·2,78 = 1 084,20; Austrália 400·2,14 = 856,00; Canadá 410·2,10 = 861,00; Reino Unido 290·4,24 = 1 229,60. O menor custo diário (e dentro do teto de R$ 1 000) é o da Austrália. Resposta: A.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
];

export default ENEM_2019_D2;
