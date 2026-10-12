import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2015_D1: QuizQuestion[] = [
  {
    id: 1,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `BRASIL. Ministério do Meio Ambiente/IBGE. Biomas . 2004 (adaptado). 
No mapa estão representados os biomas brasileiros que, 
em função de suas características físicas e do modo de 
ocupação do território, apresentam problemas ambientais 
distintos. Nesse sentido, o problema ambiental destacado 
no mapa indica`,
    images: ['/enem/2015/images/enem_2015_d1_q1.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `desertificação das áreas afetadas.` },
      { id: 'B', type: 'text', value: `poluição dos rios temporários.` },
      { id: 'C', type: 'text', value: `queimadas dos remanescentes vegetais.` },
      { id: 'D', type: 'text', value: `desmatamento das matas ciliares.` },
      { id: 'E', type: 'text', value: `contaminação das águas subterrâneas.` },
    ],
    correct: 'A',
    explanation: `A Caatinga está entre os biomas mais vulneráveis num cenário de aumento das temperaturas globais, uma vez que a vulnerabilidade do bioma Caatinga aos efeitos das mudanças climáticas representa um forte fator de pressão para a desertificação na região. Associadas a este fator, atividades antrópicas de remoção da vegetação de Caatinga para a produção de carvão vegetal, como por exemplo na chapada do Araripe (entre Piauí, Ceará e Pernambuco), aumentam a pressão na área de clima semiárido do Nordeste. Esses dois fatores fazem do Nordeste uma região sujeita a um acelerado processo de desertificação.`,
    subject: ['geo'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 2,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Dominar a luz implica tanto um avanço tecnológico 
quanto uma certa liberação dos ritmos cíclicos 
da natureza, com a passagem das estações e as 
alternâncias de dia e noite. Com a iluminação noturna, a 
escuridão vai cedendo lugar à claridade, e a percepção 
temporal começa a se pautar pela marcação do relógio. 
Se a luz invade a noite, perde sentido a separação 
tradicional entre trabalho e descanso - todas as partes 
do dia podem ser aproveitadas produtivamente. 
SILVA FILHO, A. L. M. Fortaleza : imagens da cidade. Fortaleza: 
Museu do Ceará; Secult-CE, 2001 (adaptado). 
Em relação ao mundo do trabalho, a transformação 
apontada no texto teve como consequência a`,
    alternatives: [
      { id: 'A', type: 'text', value: `melhoria da qualidade da produção industrial.` },
      { id: 'B', type: 'text', value: `redução da oferta de emprego nas zonas rurais.` },
      { id: 'C', type: 'text', value: `permissão ao trabalhador para controlar seus próprios 
horários.` },
      { id: 'D', type: 'text', value: `diminuição das exigências de esforço no trabalho 
com máquinas.` },
      { id: 'E', type: 'text', value: `ampliação do período disponível para a jornada 
de trabalho.` },
    ],
    correct: 'E',
    explanation: `As alterações implementadas pelo avanço tecnológico fizeram com que os empresários viabilizassem o aumento da jornada de trabalho. A iluminação nas indústrias tornou a vida do trabalhador mais árdua, uma consequência direta do uso da eletricidade.`,
    subject: ['soc'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 3,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Apesar de seu disfarce de iniciativa e otimismo, o homem 
moderno está esmagado por um profundo sentimento 
de impotência que o faz olhar fixamente e, como que 
paralisado, para as catástrofes que se avizinham. Por isso, 
desde já, saliente-se a necessidade de uma permanente 
atitude crítica, o único modo pelo qual o homem realizará 
sua vocação natural de integrar-se, superando a atitude 
do simples ajustamento ou acomodação, apreendendo 
temas e tarefas de sua época. 
FREIRE, P. Educação como prática da liberdade . Rio de Janeiro: Paz e Terra, 2011. 
Paulo Freire defende que a superação das dificuldades e 
a apreensão da realidade atual será obtida pelo(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `desenvolvimento do pensamento autônomo.` },
      { id: 'B', type: 'text', value: `obtenção de qualificação profissional.` },
      { id: 'C', type: 'text', value: `resgate de valores tradicionais.` },
      { id: 'D', type: 'text', value: `realização de desejos pessoais.` },
      { id: 'E', type: 'text', value: `aumento da renda familiar.` },
    ],
    correct: 'A',
    explanation: `De acordo com Paulo Freire, o processo educativo é fundamental para que os indivíduos tornem-se críticos sobre a relação social. É uma observação da aprendizagem enquanto formação no convívio social.`,
    subject: ['fil'],
    topics: ['Filosofia Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 4,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `AMARILDO. Disponível em: www.amarildo.com.br. Acesso em: 3 mar. 2013. 
Na charge há uma crítica ao processo produtivo agrícola 
brasileiro relacionada ao`,
    images: ['/enem/2015/images/enem_2015_d1_q4.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `elevado preço das mercadorias no comércio.` },
      { id: 'B', type: 'text', value: `aumento da demanda por produtos naturais.` },
      { id: 'C', type: 'text', value: `crescimento da produção de alimentos.` },
      { id: 'D', type: 'text', value: `hábito de adquirir derivados industriais.` },
      { id: 'E', type: 'text', value: `uso de agrotóxicos nas plantações.` },
    ],
    correct: 'E',
    explanation: `A charge fala sobre o “perigo” de consumir produtos agrícolas (frutas e legumes). A crítica ao modelo brasileiro relacionada à mensagem da charge é o alto nível do uso de agrotóxicos, que pode ser visto como um risco à saúde.`,
    subject: ['geo'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 5,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A casa de Deus, que acreditam una, está, portanto, 
dividida em três: uns oram, outros combatem, outros, 
enfim, trabalham. Essas três partes que coexistem não 
suportam ser separadas; os serviços prestados por uma 
são a condição das obras das outras duas; cada uma por 
sua vez encarrega-se de aliviar o conjunto... Assim a lei 
pode triunfar e o mundo gozar da paz. 
ALDALBERON DE LAON. In: SPINOSA, F. Antologia de textos históricos 
medievais . Lisboa: Sá da Costa, 1981. 
A ideologia apresentada por Aldalberon de Laon foi 
produzida durante a Idade Média. Um objetivo de 
tal ideologia e um processo que a ela se opôs estão 
indicados, respectivamente, em:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Justificar a dominação estamental / revoltas camponesas.` },
      { id: 'B', type: 'text', value: `Subverter a hierarquia social / centralização monárquica.` },
      { id: 'C', type: 'text', value: `Impedir a igualdade jurídica / revoluções burguesas.` },
      { id: 'D', type: 'text', value: `Controlar a exploração econômica / unificação monetária.` },
      { id: 'E', type: 'text', value: `Questionar a ordem divina / Reforma Católica.` },
    ],
    correct: 'A',
    explanation: `O estamento social na Idade Média era inflexível e marcado pela seguinte ordem na pirâmide: a Igreja (Clero) no topo, representando cerca de 0,5% da sociedade; a Nobreza no meio, representando cerca de 1,5% da sociedade e os camponeses na base, representando cerca de 98% da sociedade. Era dos camponeses a responsabilidade pelo pagamento de todos os impostos, bancando a Nobreza e o Clero, que legitimava todo o sistema, baseando-se em proposições religiosas.`,
    subject: ['soc'],
    topics: ['Sociologia', 'Questões aleatórias'],
  },
  {
    id: 6,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A língua de que usam, por toda a costa, carece 
de três letras; convém a saber, não se acha nela F, 
nem L, nem R, coisa digna de espanto, porque assim 
não têm Fé, nem Lei, nem Rei, e dessa maneira vivem 
desordenadamente, sem terem além disto conta, nem 
peso, nem medida. 
GÂNDAVO, P. M. A primeira história do Brasil : história da província de Santa Cruz a que 
vulgarmente chamamos Brasil. Rio de Janeiro: Zahar, 2004 (adaptado). 
A observação do cronista português Pero de Magalhães 
de Gândavo, em 1576, sobre a ausência das letras F, L e 
R na língua mencionada, demonstra a`,
    alternatives: [
      { id: 'A', type: 'text', value: `simplicidade da organização social das tribos 
brasileiras.` },
      { id: 'B', type: 'text', value: `dominação portuguesa imposta aos índios no início 
da colonização.` },
      { id: 'C', type: 'text', value: `superioridade da sociedade europeia em relação à 
sociedade indígena.` },
      { id: 'D', type: 'text', value: `incompreensão dos valores socioculturais indígenas 
pelos portugueses.` },
      { id: 'E', type: 'text', value: `dificuldade experimentada pelos portugueses no 
aprendizado da língua nativa.` },
    ],
    correct: 'D',
    explanation: `Ao chegarem ao Brasil, os portugueses se depararam com uma sociedade e com uma cultura que não existiam no mundo ocidental europeu. Logo, suas reaçãos foram uma análise taxativa dentro dos parâmetros etnocêntricos em que viviam, desvalorizando os padrões culturais nativos dos indígenas do Brasil recém descoberto.`,
    subject: ['soc'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 7,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `O principal articulador do atual modelo econômico 
chinês argumenta que o mercado é só um instrumento 
econômico, que se emprega de forma indistinta tanto 
no capitalismo como no socialismo. Porém os próprios 
chineses já estão sentindo, na sua sociedade, o seu 
real significado: o mercado não é algo neutro, ou 
um instrumental técnico que possibilita à sociedade 
utilizá-lo para a construção e edificação do socialismo. 
Ele é, ao contrário do que diz o articulador, um 
instrumento do capitalismo e é inerente à sua estrutura 
como modo de produção. A sua utilização está levando a 
uma polarização da sociedade chinesa. 
OLIVEIRA, A. A Revolução Chinesa. Caros Amigos , 31 jan. 2011 (adaptado). 
No texto, as reformas econômicas ocorridas na China são 
colocadas como antagônicas à construção de um país 
socialista. Nesse contexto, a característica fundamental 
do socialismo, à qual o modelo econômico chinês atual se 
contrapõe é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `desestatização da economia.` },
      { id: 'B', type: 'text', value: `instauração de um partido único.` },
      { id: 'C', type: 'text', value: `manutenção da livre concorrência.` },
      { id: 'D', type: 'text', value: `formação de sindicatos trabalhistas.` },
      { id: 'E', type: 'text', value: `extinção gradual das classes sociais.` },
    ],
    correct: 'E',
    explanation: `Embora proponha uma ditadura do proletariado, a revolução socialista transformaria a sociedade de forma a extinguir gradualmente as classe sociais. No entanto, a manutenção de práticas capitalistas no país mantém uma sociedade marcada pela existência dessas mesmas classes.`,
    subject: ['soc'],
    topics: ['Trabalho e economia', 'Questões aleatórias'],
  },
  {
    id: 8,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Até o fim de 2007, quase 2 milhões de pessoas 
perderam suas casas e outros 4 milhões corriam o risco 
de ser despejadas. Os valores das casas despencaram 
em quase todos os EUA e muitas famílias acabaram 
devendo mais por suas casas do que o próprio valor do 
imóvel. Isso desencadeou uma espiral de execuções 
hipotecárias que diminuiu ainda mais os valores das 
casas. Em Cleveland, foi como se um “Katrina financeiro” 
atingisse a cidade. Casas abandonadas, com tábuas 
em janelas e portas, dominaram a paisagem nos bairros 
pobres, principalmente negros. Na Califórnia, também se 
enfileiraram casas abandonadas. 
HARVEY, D. O enigma do capital . São Paulo: Boitempo, 2011. 
Inicialmente restrita, a crise descrita no texto atingiu 
proporções globais, devido ao(à)`,
    alternatives: [
      { id: 'A', type: 'text', value: `superprodução de bens de consumo.` },
      { id: 'B', type: 'text', value: `colapso industrial de países asiáticos.` },
      { id: 'C', type: 'text', value: `interdependência do sistema econômico.` },
      { id: 'D', type: 'text', value: `isolamento político dos países desenvolvidos.` },
      { id: 'E', type: 'text', value: `austeridade fiscal dos países em desenvolvimento.` },
    ],
    correct: 'C',
    explanation: `A crise financeira que começou no final de 2007 e se agravou em 2008, nos Estados Unidos, se deu após o colapso da bolha especulativa no mercado imobiliário, alimentada pela enorme expansão de crédito bancário e potencializada pelo uso de novos instrumentos financeiros. Essa mesma crise rapidamente se espalhou pelo mundo todo em poucos meses, demonstrando a interdependência entre os mercados que formam o sistema econômico.`,
    subject: ['soc'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 9,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Voz do sangue 
Palpitam-me 
os sons do batuque 
e os ritmos melancólicos do blue. 
Ó negro esfarrapado 
do Harlem 
ó dançarino de Chicago 
ó negro servidor do South 
Ó negro da África 
negros de todo o mundo 
Eu junto 
ao vosso magnífico canto 
a minha pobre voz 
os meus humildes ritmos. 
Eu vos acompanho 
pelas emaranhadas áfricas 
do nosso Rumo. 
Eu vos sinto 
negros de todo o mundo 
eu vivo a nossa história 
meus irmãos. 
Disponível em: www.agostinhoneto.org. Acesso em: 30 jun. 2015. 
Nesse poema, o líder angolano Agostinho Neto, na 
década de 1940, evoca o pan-africanismo com o 
objetivo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `incitar a luta por políticas de ações afirmativas na 
América e na África.` },
      { id: 'B', type: 'text', value: `reconhecer as desigualdades sociais entre os negros 
de Angola e dos Estados Unidos.` },
      { id: 'C', type: 'text', value: `descrever o quadro de pobreza após os processos de 
independência no continente africano.` },
      { id: 'D', type: 'text', value: `solicitar o engajamento dos negros estadunidenses 
na luta armada pela independência em Angola.` },
      { id: 'E', type: 'text', value: `conclamar as populações negras de diferentes países 
a apoiar as lutas por igualdade e independência.` },
    ],
    correct: 'E',
    explanation: `Agostinho Neto é considerado um herói angolano, altamente prestigiado na luta contra a desigualdade social e étnica. A década de 1940, principalmente no pós segunda guerra mundial, é marcada por uma grande movimentação identitária que provoca uma série de emancipações na África, dando um grande empurrão nas independências Afro-asiáticas ou, como é mais conhecida, descolonização Afro-asiática.`,
    subject: ['his'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 10,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Iniciou-se em 1903 a introdução de obras de arte 
com representações de bandeirantes no acervo do 
Museu Paulista, mediante a aquisição de uma tela que 
homenageava o sertanista que comandara a destruição 
do Quilombo de Palmares. Essa aquisição, viabilizada 
por verba estadual, foi simultânea à emergência de uma 
interpretação histórica que apontava o fenômeno do 
sertanismo paulista como o elo decisivo entre a trajetória 
territorial do Brasil e de São Paulo, concepção essa que 
se consolidaria entre os historiadores ligados ao Instituto 
Histórico e Geográfico de São Paulo ao longo das três 
primeiras décadas do século XX. 
MARINS, P. C. G. Nas matas com pose de reis: a representação de bandeirantes e a 
tradição da retratística monárquica europeia. Revista do LEB , n. 44, fev. 2007. 
A prática governamental descrita no texto, com a escolha 
dos temas das obras, tinha como propósito a construção 
de uma memória que`,
    alternatives: [
      { id: 'A', type: 'text', value: `afirmava a centralidade de um estado na política 
do país.` },
      { id: 'B', type: 'text', value: `resgatava a importância da resistência escrava 
na história brasileira.` },
      { id: 'C', type: 'text', value: `evidenciava a importância da produção artística no 
contexto regional.` },
      { id: 'D', type: 'text', value: `valorizava a saga histórica do povo na afirmação de 
uma memória social.` },
      { id: 'E', type: 'text', value: `destacava a presença do indígena no desbravamento 
do território colonial.` },
    ],
    correct: 'A',
    explanation: `Na busca pelo fortalecimento de identidade nacional, conveniente para a atuação da política no país, cria-se a imagem do Herói Bandeirante, que desbravou as matas no Brasil, expandindo nosso território e absorvendo novos conhecimentos. Atualmente sabemos que a atuação dos bandeirantes não caminhava muito nesse sentido, pois foram eles responsáveis pela escravização de índios e geração de conflitos internos.`,
    subject: ['his'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 11,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Calendário medieval, século XV. 
 
Disponível em: www.ac-grenoble.fr. Acesso em: 10 maio 2012. 
Os calendários são fontes históricas importantes, na medida em que expressam a concepção de tempo das sociedades. 
Essas imagens compõem um calendário medieval (1460-1475) e cada uma delas representa um mês, de janeiro a 
dezembro. Com base na análise do calendário, apreende-se uma concepção de tempo`,
    images: ['/enem/2015/images/enem_2015_d1_q11.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `cíclica, marcada pelo mito arcaico do eterno retorno.` },
      { id: 'B', type: 'text', value: `humanista, identificada pelo controle das horas de atividade por parte do trabalhador.` },
      { id: 'C', type: 'text', value: `escatológica, associada a uma visão religiosa sobre o trabalho.` },
      { id: 'D', type: 'text', value: `natural, expressa pelo trabalho realizado de acordo com as estações do ano.` },
      { id: 'E', type: 'text', value: `romântica, definida por uma visão bucólica da sociedade.` },
    ],
    correct: 'D',
    explanation: ``,
    subject: ['soc'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 12,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `O processo de concentração urbana no Brasil em determinados locais teve momentos de maior intensidade e, 
ao que tudo indica, atualmente passa por uma desaceleração no ritmo de crescimento populacional nos grandes 
centros urbanos. 
BAENINGER, R. Cidades e metrópoles : a desaceleração no crescimento populacional e novos arranjos regionais. Disponível em: www.sbsociologia.com.br. Acesso em: 12 dez. 2012 (adaptado). 
Uma causa para o processo socioespacial mencionado no texto e o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `carência de matérias-primas.` },
      { id: 'B', type: 'text', value: `degradação da rede rodoviária.` },
      { id: 'C', type: 'text', value: `aumento do crescimento vegetativo.` },
      { id: 'D', type: 'text', value: `centralização do poder político.` },
      { id: 'E', type: 'text', value: `realocação da atividade industrial.` },
    ],
    correct: 'E',
    explanation: `A inicial concentração das atividades nos grandes centros derivou da oferta de estrutura, capital e mão de obra (raro fora dos grandes centros). Com o surgimento de novas opções estruturadas de localização, paralelamente ao grande desafio de se manter nos inchados centros urbanos, vimos um forte processo de desconcentração industrial e um crescimento das cidades médias.`,
    subject: ['geo'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 13,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Trasímaco estava impaciente porque Sócrates e os 
seus amigos presumiam que a justiça era algo real e 
importante. Trasímaco negava isso. Em seu entender, 
as pessoas acreditavam no certo e no errado apenas 
por terem sido ensinadas a obedecer às regras da sua 
sociedade. No entanto, essas regras não passavam de 
invenções humanas. 
RACHELS, J. Problemas da filosofia . Lisboa: Gradiva, 2009. 
O sofista Trasímaco, personagem imortalizado no diálogo 
A República, de Platão, sustentava que a correlação entre
justiça e ética é resultado de`,
    alternatives: [
      { id: 'A', type: 'text', value: `determinações biológicas impregnadas na natureza 
humana.` },
      { id: 'B', type: 'text', value: `verdades objetivas com fundamento anterior aos 
interesses sociais.` },
      { id: 'C', type: 'text', value: `mandamentos divinos inquestionáveis legados das 
tradições antigas.` },
      { id: 'D', type: 'text', value: `convenções 
sociais 
resultantes 
de 
interesses 
humanos contingentes.` },
      { id: 'E', type: 'text', value: `sentimentos experimentados diante de determinadas 
atitudes humanas.` },
    ],
    correct: 'D',
    explanation: `Para o pensamento platônico, as noções de justiça e ética estão voltadas para o ensinamento transmitido através da vida em comunidade, já que cada indivíduo é responsável por suas ações para si e para os demais.`,
    subject: ['fil'],
    topics: ['Filosofia Antiga (Sócrates, Platão, Aristóteles)', 'Questões aleatórias'],
  },
  {
    id: 14,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Em 
sociedade 
de 
origens 
tão 
nitidamente 
personalistas como a nossa, é compreensível que os 
simples vínculos de pessoa a pessoa, independentes e 
até exclusivos de qualquer tendência para a cooperação 
autêntica entre os indivíduos, tenham sido quase sempre 
os mais decisivos. As agregações e relações pessoais, 
embora por vezes precárias, e, de outro lado, as lutas 
entre facções, entre famílias, entre regionalismos, 
faziam dela um todo incoerente e amorfo. O peculiar 
da vida brasileira parece ter sido, por essa época, uma 
acentuação singularmente enérgica do afetivo, do 
irracional, do passional e uma estagnação ou antes uma 
atrofia correspondente das qualidades ordenadoras, 
disciplinadoras, racionalizadoras. 
HOLANDA, S. B. Raízes do Brasil . São Paulo: Cia. das Letras, 1995. 
Um traço formador da vida pública brasileira expressa-se, 
segundo a análise do historiador, na`,
    alternatives: [
      { id: 'A', type: 'text', value: `rigidez das normas jurídicas.` },
      { id: 'B', type: 'text', value: `prevalência dos interesses privados.` },
      { id: 'C', type: 'text', value: `solidez da organização institucional.` },
      { id: 'D', type: 'text', value: `legitimidade das ações burocráticas.` },
      { id: 'E', type: 'text', value: `estabilidade das estruturas políticas.` },
    ],
    correct: 'B',
    explanation: `O Historiador Sérgio Buarque de Holanda, ícone no estudo da História no Brasil, disserta sobre a característica da sociedade brasileira de prezar mais pelas importâncias privadas e pessoais do que pelo vínculo e importâncias coletivas, públicas. O autor não sugere uma origem específica para isso, porém, nos permite uma grande reflexão acerca do tema.`,
    subject: ['soc'],
    topics: ['Sociologia', 'Questões aleatórias'],
  },
  {
    id: 15,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `O Projeto Nova Cartografia Social da Amazônia 
ensina 
indígenas, 
quilombolas 
e 
outros 
grupos 
tradicionais a empregar o GPS e técnicas modernas de 
georreferenciamento para produzir mapas artesanais, 
mas bastante precisos, de suas próprias terras. 
LOPES, R. J. O novo mapa da floresta. Folha de S. Paulo , 7 maio 2011 (adaptado). 
A existência de um projeto como o apresentado no 
texto indica a importância da cartografia como elemento 
promotor da`,
    alternatives: [
      { id: 'A', type: 'text', value: `expansão da fronteira agrícola.` },
      { id: 'B', type: 'text', value: `remoção de populações nativas.` },
      { id: 'C', type: 'text', value: `superação da condição de pobreza.` },
      { id: 'D', type: 'text', value: `valorização de identidades coletivas.` },
      { id: 'E', type: 'text', value: `implantação de modernos projetos agroindustriais.` },
    ],
    correct: 'D',
    explanation: `Os mapas são instrumentos utilizados para mapear o espaço geográfico, onde são englobados aspectos naturais &#8211; dados pela natureza, como rios e florestas &#8211; e artificiais &#8211; construídos pelo Homem, como moradias e vias de deslocamento. A possibilidade de grupos tradicionais marcarem corretamente suas terras leva a uma maior preservação de sua cultura, de suas práticas e suas relações, valorizando suas identidades coletivas. Vale ressaltar que a demarcação não gera automaticamente a modernização de suas terras ou a superação da pobreza.`,
    subject: ['geo'],
    topics: ['Cartografia', 'Questões aleatórias'],
  },
  {
    id: 16,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Todo o poder criativo da mente se reduz a nada 
mais do que a faculdade de compor, transpor, aumentar 
ou diminuir os materiais que nos fornecem os sentidos 
e a experiência. Quando pensamos em uma montanha 
de ouro, não fazemos mais do que juntar duas ideias 
consistentes, ouro e montanha, que já conhecíamos. 
Podemos conceber um cavalo virtuoso, porque somos 
capazes de conceber a virtude a partir de nossos próprios 
sentimentos, e podemos unir a isso a figura e a forma de 
um cavalo, animal que nos é familiar. 
HUME, D. Investigação sobre o entendimento humano . São Paulo: Abril Cultural, 1995. 
Hume estabelece um vínculo entre pensamento e 
impressão ao considerar que`,
    alternatives: [
      { id: 'A', type: 'text', value: `os conteúdos das ideias no intelecto têm origem na 
sensação.` },
      { id: 'B', type: 'text', value: `o espírito é capaz de classificar os dados da 
percepção sensível.` },
      { id: 'C', type: 'text', value: `as ideias fracas resultam de experiências sensoriais 
determinadas pelo acaso.` },
      { id: 'D', type: 'text', value: `os sentimentos ordenam como os pensamentos 
devem ser processados na memória.` },
      { id: 'E', type: 'text', value: `as ideias têm como fonte específica o sentimento 
cujos dados são colhidos na empiria.` },
    ],
    correct: 'A',
    explanation: `O filósofo Hume faz uso do método de raciocínio experimental para compreender a natureza humana. O meio utilizado era observar através de experiência como o homem entende os objetos, interpretar como compreendem e sentem as coisas.`,
    subject: ['fil'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 17,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Ora, em todas as coisas ordenadas a algum fim, 
é preciso haver algum dirigente, pelo qual se atinja 
diretamente o devido fim. Com efeito, um navio, que 
se move para diversos lados pelo impulso dos ventos 
contrários, não chegaria ao fim de destino, se por indústria 
do piloto não fosse dirigido ao porto; ora, tem o homem 
um fim, para o qual se ordenam toda a sua vida e ação. 
Acontece, porém, agirem os homens de modos diversos 
em vista do fim, o que a própria diversidade dos esforços 
e ações humanas comprova. Portanto, precisa o homem 
de um dirigente para o fim. 
AQUINO, T. Do reino ou do governo dos homens: ao rei do Chipre. Escritos políticos de 
São Tomás de Aquino . Petrópolis: Vozes, 1995 (adaptado). 
No trecho citado, Tomás de Aquino justifica a monarquia 
como o regime de governo capaz de`,
    alternatives: [
      { id: 'A', type: 'text', value: `refrear os movimentos religiosos contestatórios.` },
      { id: 'B', type: 'text', value: `promover a atuação da sociedade civil na vida política.` },
      { id: 'C', type: 'text', value: `unir a sociedade tendo em vista a realização do 
bem comum.` },
      { id: 'D', type: 'text', value: `reformar a religião por meio do retorno à tradição 
helenística.` },
      { id: 'E', type: 'text', value: `dissociar a relação política entre os poderes temporal 
e espiritual.` },
    ],
    correct: 'C',
    explanation: `São Tomás de Aquino foi um filósofo medieval que teve por base de seus pensamentos as teorias aristotélicas. Dentro dos pensamentos que defendia, um deles era a busca por um bem comum que seria alcançado através da monarquia.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Questões aleatórias'],
  },
  {
    id: 18,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A Justiça Eleitoral foi criada em 1932, como parte de 
uma ampla reforma no processo eleitoral incentivada pela 
Revolução de 1930. Sua criação foi um grande avanço 
institucional, garantindo que as eleições tivessem o 
aval de um órgão teoricamente imune à influência dos 
mandatários. 
TAYLOR, M. Justiça Eleitoral. In: AVRITZER, L.; ANASTÁSIA, F. Reforma política no Brasil . 
Belo Horizonte: UFMG, 2006 (adaptado). 
Em relação ao regime democrático no país, a instituição 
analisada teve o seguinte papel:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Implementou o voto direto para presidente.` },
      { id: 'B', type: 'text', value: `Combateu as fraudes sistemáticas nas apurações.` },
      { id: 'C', type: 'text', value: `Alterou as regras para as candidaturas na ditadura.` },
      { id: 'D', type: 'text', value: `Impulsionou as denúncias de corrupção administrativa.` },
      { id: 'E', type: 'text', value: `Expandiu a participação com o fim do critério censitário.` },
    ],
    correct: 'B',
    explanation: `A justiça eleitoral é imune ao incentivo dos mandatários, principalmente se isolada do Poder Executivo e, historicamente, combateu fraudes e crimes eleitorais. Esta questão pode induzir ao erro, fazendo com que apenas o governo varguista, marcado amplamente pela ditadura, seja levado em consideração para a escolha da resposta. Porém, a pergunta não cita apenas este período, já que questiona como a justiça eleitoral atua na democracia, ou seja, em vários momento de nossa História.`,
    subject: ['soc'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 19,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `ZIRALDO. 20 anos de prontidão. In: LEMOS, R. (Org.). Uma história do Brasil através da 
caricatura (1840-2001) . Rio de Janeiro: Letras & Expressões, 2001. 
No período de 1964 a 1985, a estratégia do Regime Militar 
abordada na charge foi caracterizada pela`,
    images: ['/enem/2015/images/enem_2015_d1_q19.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `priorização da segurança nacional.` },
      { id: 'B', type: 'text', value: `captação de financiamentos estrangeiros.` },
      { id: 'C', type: 'text', value: `execução de cortes nos gastos públicos.` },
      { id: 'D', type: 'text', value: `nacionalização de empresas multinacionais.` },
      { id: 'E', type: 'text', value: `promoção de políticas de distribuição de renda.` },
    ],
    correct: 'B',
    explanation: `O período militar no Brasil é marcado pela grande captação de financiamentos estrangeiros, feita pelo governo. Supostamente, os juros seriam baixos e o pagamento só começaria em 10 anos, por isso a charge trabalha a ideia da criança ficando adulta e sofrendo com este cenário futuro. Na prática, sabemos que tudo foi bem pior, pois a primeira crise do petróleo desestabiliza o mundo em 1973 e o Brasil sofre com os juros flutuantes e a cobrança antecipada das dívidas.`,
    subject: ['his'],
    topics: ['História Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 20,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Bandeira do Brasil, és hoje a única. Hasteada a esta 
hora em todo o território nacional, única e só, não há lugar 
no coração do Brasil para outras flâmulas, outras bandeiras, 
outros símbolos. Os brasileiros se reuniram em torno do 
Brasil e decretaram desta vez com determinação de não 
consentir que a discórdia volte novamente a dividi-lo! 
Discurso do Ministro da Justiça Francisco Campos na cerimônia da festa da bandeira, em novembro 
de 1937. Apud OLIVEN, G. R. A parte e o todo : a diversidade cultural do Brasil Nação. 
Petrópolis: Vozes, 1992. 
O discurso proferido em uma celebração em que as 
bandeiras estaduais eram queimadas diante da bandeira 
nacional revela o pacto nacional proposto pelo Estado 
Novo, que se associa à`,
    alternatives: [
      { id: 'A', type: 'text', value: `supressão das diferenças socioeconômicas entre as 
regiões do Brasil, priorizando as regiões estaduais 
carentes.` },
      { id: 'B', type: 'text', value: `orientação do regime quanto ao reforço do 
federalismo, espelhando-se na experiência política 
norte-americana.` },
      { id: 'C', type: 'text', value: `adoção de práticas políticas autoritárias, considerando 
a contenção dos interesses regionais dispersivos.` },
      { id: 'D', type: 'text', value: `propagação de uma cultura política avessa aos ritos 
cívicos, cultivados pela cultura regional brasileira.` },
      { id: 'E', type: 'text', value: `defesa da unidade do território nacional, ameaçado 
por movimentos separatistas contrários à política 
varguista.` },
    ],
    correct: 'C',
    explanation: `O Estado Novo é marcado pela concentração política e exaltação da identidade nacional. Ou seja, dentro desta perspectiva, a valorização dos interesses nacionais prevaleciam sobre qualquer outra atuação ou pedido estadual e regional. O principio do federalismo, onde os estados têm autonomia, também começa a ser desvalorizado.`,
    subject: ['soc'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 21,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Atualmente, as represálias econômicas contra as 
empresas de informática norte-americanas continuam. 
A Alemanha proibiu um aplicativo dos Estados Unidos 
de compartilhamento de carros; na China, o governo 
explicou que os equipamentos e serviços de informática 
norte-americanos representam uma ameaça, pedindo 
que as empresas estatais não recorram a eles. 
SCHILLER, D. Disponível em: www.diplomatique.org.br. Acesso em: 11 nov. 2014 (adaptado). 
As ações tomadas pelos países contra a espionagem 
revelam preocupação com o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `subsídio industrial.` },
      { id: 'B', type: 'text', value: `hegemonia cultural.` },
      { id: 'C', type: 'text', value: `protecionismo dos mercados.` },
      { id: 'D', type: 'text', value: `desemprego tecnológico.` },
      { id: 'E', type: 'text', value: `segurança dos dados.` },
    ],
    correct: 'E',
    explanation: `Os escândalos de espionagem americana contra países como Alemanha e Brasil mostrou o empenho americano na busca de informações privilegiadas. As medidas tomadas contra essa prática visam garantir a segurança de seus dados, projetos e empresas.`,
    subject: ['his'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 22,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `TEXTO I 
Canudos não se rendeu. Exemplo único em toda a 
história, resistiu até o esgotamento completo. Vencido 
palmo a palmo, na precisão integral do termo, caiu no 
dia 5, ao entardecer, quando caíram os seus últimos 
defensores, que todos morreram. Eram quatro apenas: 
um velho, dois homens feitos e uma criança, na frente 
dos quais rugiam raivosamente cinco mil soldados. 
CUNHA, E. Os sertões . Rio de Janeiro: Francisco Alves, 1987. 
TEXTO II 
Na trincheira, no centro do reduto, permaneciam 
quatro fanáticos sobreviventes do extermínio. Era um 
velho, coxo por ferimento e usando uniforme da Guarda 
Católica, um rapaz de 16 a 18 anos, um preto alto e 
magro, e um caboclo. Ao serem intimados para deporem 
as armas, investiram com enorme fúria. Assim estava 
terminada e de maneira tão trágica a sanguinosa guerra, 
que o banditismo e o fanatismo traziam acesa por longos 
meses, naquele recanto do território nacional. 
SOARES, H. M. A Guerra de Canudos . Rio de Janeiro: Altina, 1902. 
Os relatos do último ato da Guerra de Canudos fazem 
uso de representações que se perpetuariam na memória 
construída sobre o conflito. Nesse sentido, cada autor 
caracterizou a atitude dos sertanejos, respectivamente, 
como fruto da`,
    alternatives: [
      { id: 'A', type: 'text', value: `manipulação e incompetência.` },
      { id: 'B', type: 'text', value: `ignorância e solidariedade.` },
      { id: 'C', type: 'text', value: `hesitação e obstinação.` },
      { id: 'D', type: 'text', value: `esperança e valentia.` },
      { id: 'E', type: 'text', value: `bravura e loucura.` },
    ],
    correct: 'E',
    explanation: `São dois textos contraditórios sobre um evento histórico muito importante do Brasil: A Guerra de Canudos. O primeiro texto valoriza a atuação do Antônio Conselheiro e é um clássico da literatura brasileira. O segundo texto enfatiza a suposta irracionalidade da população em seguir um senhor que vinculava-se com um messias. Ao final, um texto preza a &#8220;bravura&#8221; e o outro a &#8220;loucura&#8221;, bem como sugere a questão correta.`,
    subject: ['his'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 23,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `TEXTO I 
Em todo o país a lei de 13 de maio de 1888 libertou 
poucos negros em relação à população de cor. A maioria 
já havia conquistado a alforria antes de 1888, por meio 
de estratégias possíveis. No entanto, a importância 
histórica da lei de 1888 não pode ser mensurada apenas 
em termos numéricos. O impacto que a extinção da 
escravidão causou numa sociedade constituída a partir 
da legitimidade da propriedade sobre a pessoa não cabe 
em cifras. 
ALBUQUERQUE, W. O jogo da dissimulação : Abolição e cidadania negra no Brasil. 
São Paulo: Cia. das Letras, 2009 (adaptado). 
TEXTO II 
Nos anos imediatamente anteriores à Abolição, a 
população livre do Rio de Janeiro se tornou mais numerosa 
e diversificada. Os escravos, bem menos numerosos que 
antes, e com os africanos mais aculturados, certamente 
não se distinguiam muito facilmente dos libertos e dos 
pretos e pardos livres habitantes da cidade. Também já 
não é razoável presumir que uma pessoa de cor seja 
provavelmente cativa, pois os negros libertos e livres 
poderiam ser encontrados em toda parte. 
CHALHOUB, S. Visões da liberdade : uma história das últimas décadas da escravidão na 
Corte. São Paulo: Cia. das Letras, 1990 (adaptado). 
Sobre o fim da escravidão no Brasil, o elemento destacado 
no Texto I que complementa os argumentos apresentados 
no Texto II é o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `variedade das estratégias de resistência dos cativos.` },
      { id: 'B', type: 'text', value: `controle jurídico exercido pelos proprietários.` },
      { id: 'C', type: 'text', value: `inovação social representada pela lei.` },
      { id: 'D', type: 'text', value: `ineficácia prática da libertação.` },
      { id: 'E', type: 'text', value: `significado político da Abolição.` },
    ],
    correct: 'E',
    explanation: `Talvez esta questão nos remeta muito mais a dúvidas do que esclarecimentos, mas vamos tentar organizar nossos pensamentos. Com certeza você ficou entre as alternativas C e E, talvez prezando mais pela C. Porém, o que devemos perceber é que a abolição da escravidão não cria um &#8220;inovação social&#8221;, visto que os negros continuaram à margem da sociedade. O que ocorre no Brasil é uma mudança, que é diferente de inovação, social e política. A letra E, buscando o significado etimológico da palavra Política (organização da pólis, em grego), consegue contemplar, mesmo que de maneira não muito estrutural, a resposta correta.`,
    subject: ['soc'],
    topics: ['Cidadania e democracia', 'Questões aleatórias'],
  },
  {
    id: 24,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A participação da África na Segunda Guerra Mundial 
deve ser apreciada sob a ótica da escolha entre vários 
demônios. O seu engajamento não foi um processo de 
colaboração com o imperialismo, mas uma luta contra 
uma forma de hegemonia ainda mais perigosa. 
MAZRUI, A. “Procurai primeiramente o reino do político...”. In: MAZRUI, A.; WONDJI, C. 
(Org.). História geral da África: África desde 1925. Brasília: Unesco, 2010.
Para o autor, a “forma de hegemonia” e uma de suas 
características que explicam o engajamento dos africanos 
no processo analisado foram:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Comunismo / rejeição da democracia liberal.` },
      { id: 'B', type: 'text', value: `Capitalismo / devastação do ambiente natural.` },
      { id: 'C', type: 'text', value: `Fascismo / adoção do determinismo biológico.` },
      { id: 'D', type: 'text', value: `Socialismo / planificação da economia nacional.` },
      { id: 'E', type: 'text', value: `Colonialismo / imposição da missão civilizatória.` },
    ],
    correct: 'C',
    explanation: `Durante a Segunda Guerra Mundial, os africanos tiveram que escolher entre &#8220;dois demônios&#8221;: um deles era representado pelos seus exploradores imperialistas europeus e o outro pelo movimento nazi-fascista, que prezava pelo determinismo biológico e tinha tendências pela sua dizimação. A escolha em apoiar o primeiro teve como característica a opção pelo &#8220;menos pior&#8221;.`,
    subject: ['his'],
    topics: ['Primeira e Segunda Guerra Mundial', 'Questões aleatórias'],
  },
  {
    id: 25,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Não nos resta a menor dúvida de que a principal 
contribuição dos diferentes tipos de movimentos sociais 
brasileiros nos últimos vinte anos foi no plano da 
reconstrução do processo de democratização do país. 
E não se trata apenas da reconstrução do regime político, 
da retomada da democracia e do fim do Regime Militar. 
Trata-se da reconstrução ou construção de novos rumos 
para a cultura do país, do preenchimento de vazios na 
condução da luta pela redemocratização, constituindo-se 
como agentes interlocutores que dialogam diretamente 
com a população e com o Estado. 
GOHN, M. G. M. Os sem-terras, ONGs e cidadania . São Paulo: Cortez, 2003 (adaptado). 
No processo da redemocratização brasileira, os novos 
movimentos sociais contribuíram para`,
    alternatives: [
      { id: 'A', type: 'text', value: `diminuir a legitimidade dos novos partidos políticos 
então criados.` },
      { id: 'B', type: 'text', value: `tornar a democracia um valor social que ultrapassa os 
momentos eleitorais.` },
      { id: 'C', type: 'text', value: `difundir a democracia representativa como objetivo 
fundamental da luta política.` },
      { id: 'D', type: 'text', value: `ampliar as disputas pela hegemonia das entidades de 
trabalhadores com os sindicatos.` },
      { id: 'E', type: 'text', value: `fragmentar as lutas políticas dos diversos atores 
sociais frente ao Estado.` },
    ],
    correct: 'B',
    explanation: `A proposta do texto, assim como os movimentos sociais do Brasil no processo de finalização da ditadura militar, nos permite perceber que havia a intenção de expandir o significado de democracia. O objetivo seria mostrar que esta não se refletiria apenas no sufrágio universal, mas sim na criação de canais de comunicação diretos entre o governo e a população e outros vínculos que intensificassem nossa atuação, mesmo dentro de uma &#8220;democracia representativa&#8221;.`,
    subject: ['soc'],
    topics: ['Cidadania e democracia', 'Questões aleatórias'],
  },
  {
    id: 26,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A natureza fez os homens tão iguais, quanto às 
faculdades do corpo e do espírito, que, embora por vezes 
se encontre um homem manifestamente mais forte de 
corpo, ou de espírito mais vivo do que outro, mesmo 
assim, quando se considera tudo isto em conjunto, a 
diferença entre um e outro homem não é suficientemente 
considerável para que um deles possa com base 
nela reclamar algum benefício a que outro não possa 
igualmente aspirar. 
HOBBES, T. Leviatã . São Paulo: Martins Fontes, 2003. 
Para Hobbes, antes da constituição da sociedade civil, 
quando dois homens desejavam o mesmo objeto, eles`,
    alternatives: [
      { id: 'A', type: 'text', value: `entravam em conflito.` },
      { id: 'B', type: 'text', value: `recorriam aos clérigos.` },
      { id: 'C', type: 'text', value: `consultavam os anciãos.` },
      { id: 'D', type: 'text', value: `apelavam aos governantes.` },
      { id: 'E', type: 'text', value: `exerciam a solidariedade.` },
    ],
    correct: 'A',
    explanation: `No estado de natureza de Hobbes, os homens eram livres e queriam manter essa liberdade. Porém, quando dois homens desejavam a mesma coisa, tendiam a entrar em conflito, pois não havia um órgão para manutenção da ordem. Vale ressaltar que é deste conflito estabelecido que surge a frase: “o homem é o lobo do próprio homem”.`,
    subject: ['fil'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 27,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Figura 1. Diagrama das regiões de intemperismo para 
as condições brasileiras (adaptado de Peltier, 1950). 
35 
30 
1. Muito Fraco 
Temperatura (°C) 
25 
3. Moderado 
20 
15 
10 
5 
2. Fraco 
400 
800 
1200 
1600 
2000 
2400 
2800 
0 
Precipitação média anual (mm) 
Figura 2. Mapa das regiões de intemperismo do Brasil, 
baseado no diagrama da Figura 1. 
FONTES, M. P. F. Intemperismo de rochas e minerais. In: KER, J. C. et al. (Org.). Pedologia : fundamentos. Viçosa (MG): SBCS, 2012 (adaptado). 
De acordo com as figuras, a intensidade de intemperismo de grau muito fraco e característica de qual tipo climático?`,
    images: ['/enem/2015/images/enem_2015_d1_q27_1.jpg', '/enem/2015/images/enem_2015_d1_q27_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Tropical.` },
      { id: 'B', type: 'text', value: `Litorâneo.` },
      { id: 'C', type: 'text', value: `Equatorial.` },
      { id: 'D', type: 'text', value: `Semiárido.` },
      { id: 'E', type: 'text', value: `Subtropical. 4.` },
    ],
    correct: 'D',
    explanation: `Ao relacionar o diagrama e o mapa, é possível identificar que a região que apresenta um grau de intemperismo muito fraco é aquela com baixas médias de precipitação (espaços de clima semiárido), visto que a maior ocorrência do processo de intemperismo é decorrente das altas taxas de pluviosidade. Por isso, o gabarito só poderia ser aquele que destaca o sertão nordestino brasileiro.`,
    subject: ['geo'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 28,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `O que implica o sistema da pólis é uma 
extraordinária preeminência da palavra sobre todos 
os outros instrumentos do poder. A palavra constitui o 
debate contraditório, a discussão, a argumentação e a 
polêmica. Torna-se a regra do jogo intelectual, assim 
como do jogo político. 
VERNANT, J. P. As origens do pensamento grego . Rio de Janeiro: Bertrand, 1992 (adaptado). 
Na configuração política da democracia grega, em 
especial a ateniense, a ágora tinha por função`,
    alternatives: [
      { id: 'A', type: 'text', value: `agregar os cidadãos em torno de reis que governavam 
em prol da cidade.` },
      { id: 'B', type: 'text', value: `permitir aos homens livres o acesso às decisões do 
Estado expostas por seus magistrados.` },
      { id: 'C', type: 'text', value: `constituir o lugar onde o corpo de cidadãos se reunia 
para deliberar sobre as questões da comunidade.` },
      { id: 'D', type: 'text', value: `reunir os exércitos para decidir em assembleias 
fechadas os rumos a serem tomados em caso de 
guerra.` },
      { id: 'E', type: 'text', value: `congregar a comunidade para eleger representantes 
com direito a pronunciar-se em assembleias.` },
    ],
    correct: 'C',
    explanation: `A democracia foi uma das alterações ocorridas na Grécia antiga que viabilizaram o surgimento da filosofia. Esta era chamada de direta, pois havia participação dos cidadãos atenienses que reuniam-se na ágora (praça pública), a fim de debater as decisões referentes a pólis.`,
    subject: ['his'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 29,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `No final do século XX e em razão dos avanços da 
ciência, produziu-se um sistema presidido pelas técnicas 
da informação, que passaram a exercer um papel de 
elo entre as demais, unindo-as e assegurando ao novo 
sistema uma presença planetária. Um mercado que 
utiliza esse sistema de técnicas avançadas resulta nessa 
globalização perversa. 
SANTOS, M. Por uma outra globalização . Rio de Janeiro: Record, 2008 (adaptado). 
Uma consequência para o setor produtivo e outra para o 
mundo do trabalho advindas das transformações citadas 
no texto estão presentes, respectivamente, em:`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `Eliminação das vantagens locacionais e ampliação da 
legislação laboral.` },
      { id: 'B', type: 'text', value: `Limitação dos fluxos logísticos e fortalecimento de 
associações sindicais.` },
      { id: 'C', type: 'text', value: `Diminuição 
dos 
investimentos 
industriais 
e 
desvalorização dos postos qualificados.` },
      { id: 'D', type: 'text', value: `Concentração das áreas manufatureiras e redução da 
jornada semanal.` },
      { id: 'E', type: 'text', value: `Automatização dos processos fabris e aumento dos 
níveis de desemprego.` },
    ],
    correct: 'E',
    explanation: `A questão fala do mundo globalizado inserido em um contexto de crescente aplicação tecnológica. A mensagem do texto é de crítica em cima do modelo que, ao criar possibilidades de substituição de mão de obra por máquinas, aumentou muito o nível de desemprego.`,
    subject: ['soc'],
    topics: ['Trabalho e economia', 'Questões aleatórias'],
  },
  {
    id: 30,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Os movimentos de massa constituem-se no 
deslocamento de material (solo e rocha) vertente 
abaixo pela influência da gravidade. As condições 
que favorecem os movimentos de massa dependem 
principalmente da estrutura geológica, da declividade da 
vertente, do regime de chuvas, da perda de vegetação e 
da atividade antrópica. 
BIGARELLA, J. J. Estrutura e origem das paisagens tropicais e subtropicais . 
Florianópolis: UFSC, 2003 (adaptado). 
Em relação ao processo descrito, sua ocorrência é 
minimizada em locais onde há`,
    alternatives: [
      { id: 'A', type: 'text', value: `exposição do solo.` },
      { id: 'B', type: 'text', value: `drenagem eficiente.` },
      { id: 'C', type: 'text', value: `rocha matriz resistente.` },
      { id: 'D', type: 'text', value: `agricultura mecanizada.` },
      { id: 'E', type: 'text', value: `média pluviométrica elevada.` },
    ],
    correct: 'B',
    explanation: `As maiores ocorrências de movimentos de massa (deslizamentos) estão ligadas ao predomínio do escoamento superficial frente ao processo de infiltração, por isso, o processo que poderia minimizar sua ocorrência é aquele que fala em maior eficiência de drenagem.`,
    subject: ['geo'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 31,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `SUERTEGARAY, D. M. A. (Org.). Terra : feições ilustradas. 
Porto Alegre: EdUFRGS, 2003 (adaptado). 
A imagem representa o resultado da erosão que ocorre 
em rochas nos leitos dos rios, que decorre do processo 
natural de`,
    images: ['/enem/2015/images/enem_2015_d1_q31.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `fraturamento geológico, derivado da força dos 
agentes internos.` },
      { id: 'B', type: 'text', value: `solapamento de camadas de argilas, transportadas 
pela correnteza.` },
      { id: 'C', type: 'text', value: `movimento circular de seixos e areias, arrastados por 
águas turbilhonares.` },
      { id: 'D', type: 'text', value: `decomposição das camadas sedimentares, resultante 
da alteração química.` },
      { id: 'E', type: 'text', value: `assoreamento no fundo do rio, proporcionado pela 
chegada de material sedimentar.` },
    ],
    correct: 'C',
    explanation: `A forma resultante da ação erosiva &#8211; tendo como agente as águas dos rios &#8211; aponta que o processo que a originou foram sucessivos movimentos circulares, com a presença de sedimentos. Sendo assim, a única opção que faz a descrição destes movimentos é a que fala sobre as águas turbilhonares com a presença de seixos e areias.`,
    subject: ['geo'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 32,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Algumas regiões do Brasil passam por uma crise 
de água por causa da seca. Mas, uma região de Minas 
Gerais está enfrentando a falta de água no campo tanto 
em tempo de chuva como na seca. As veredas estão 
secando no norte e no noroeste mineiro. Ano após ano, 
elas vêm perdendo a capacidade de ser a caixa-d’água 
do grande sertão de Minas. 
VIEIRA, C. Degradação do solo causa perda de fontes de água de famílias de MG . 
Disponível em: http://g1.globo.com. Acesso em: 1 nov. 2014. 
As veredas têm um papel fundamental no equilíbrio 
hidrológico dos cursos de água no ambiente do 
Cerrado, pois`,
    alternatives: [
      { id: 'A', type: 'text', value: `colaboram para a formação de vegetação xerófila.` },
      { id: 'B', type: 'text', value: `formam os leques aluviais nas planícies das bacias.` },
      { id: 'C', type: 'text', value: `fornecem sumidouro para as águas de recarga 
da bacia.` },
      { id: 'D', type: 'text', value: `contribuem para o aprofundamento dos talvegues 
à jusante.` },
      { id: 'E', type: 'text', value: `constituem um sistema represador da água na 
chapada.` },
    ],
    correct: 'E',
    explanation: `As veredas mencionadas no texto são formações vegetais que ajudam no processo de estocagem de água, tanto que o texto a chama de “caixa d’água” que auxilia na criação de barragens. A região do norte-noroeste de Minas possui forte dependência desses repositórios e, por isso, a perda dessas vegetações geram profundas mudanças no cenário hidrológico local.`,
    subject: ['geo'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 33,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Tanto potencial poderia ter ficado pelo caminho, 
se não fosse o reforço em tecnologia que um gaúcho 
buscou. Há pouco mais de oito anos, ele usava o bico 
da botina para cavoucar a terra e descobrir o nível de 
umidade do solo, na tentativa de saber o momento ideal 
para acionar os pivôs de irrigação. Até que conheceu uma 
estação meteorológica que, instalada na propriedade, 
ajuda a determinar a quantidade de água de que a planta 
necessita. Assim, quando inicia um plantio, o agricultor 
já entra no site do sistema e cadastra a área, o pivô, a 
cultura, o sistema de plantio, o espaçamento entre linhas e 
o número de plantas, para então receber recomendações 
diretamente dos técnicos da universidade. 
CAETANO, M. O valor de cada gota. Globo Rural , n. 312, out. 2011. 
A implementação das tecnologias mencionadas no texto 
garante o avanço do processo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `monitoramento da produção.` },
      { id: 'B', type: 'text', value: `valorização do preço da terra.` },
      { id: 'C', type: 'text', value: `correção dos fatores climáticos.` },
      { id: 'D', type: 'text', value: `divisão de tarefas na propriedade.` },
      { id: 'E', type: 'text', value: `estabilização da fertilidade do solo.` },
    ],
    correct: 'A',
    explanation: `O texto mostra como os dados mais precisos podem gerar medidas mais eficazes (e com menos perdas) no processo agrícola, permitindo que o dono da terra possa monitorar suas atividades e gerir sua produção.`,
    subject: ['geo'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 34,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A filosofia grega parece começar com uma ideia 
absurda, com a proposição: a água é a origem e a matriz 
de todas as coisas. Será mesmo necessário deter-nos 
nela e levá-la a sério? Sim, e por três razões: em primeiro 
lugar, porque essa proposição enuncia algo sobre a 
origem das coisas; em segundo lugar, porque o faz sem 
imagem e fabulação; e enfim, em terceiro lugar, porque 
nela, embora apenas em estado de crisálida, está contido 
o pensamento: Tudo é um . 
NIETZSCHE, F. Crítica moderna. In: Os pré-socráticos. São Paulo: Nova Cultural, 1999.
O que, de acordo com Nietzsche, caracteriza o surgimento 
da filosofia entre os gregos?`,
    alternatives: [
      { id: 'A', type: 'text', value: `O impulso para transformar, mediante justificativas, 
os elementos sensíveis em verdades racionais.` },
      { id: 'B', type: 'text', value: `O desejo de explicar, usando metáforas, a origem dos 
seres e das coisas.` },
      { id: 'C', type: 'text', value: `A necessidade de buscar, de forma racional, a causa 
primeira das coisas existentes.` },
      { id: 'D', type: 'text', value: `A ambição de expor, de maneira metódica, as 
diferenças entre as coisas.` },
      { id: 'E', type: 'text', value: `A tentativa de justificar, a partir de elementos 
empíricos, o que existe no real.` },
    ],
    correct: 'C',
    explanation: `Nietzsche faz referência ao surgimento da filosofia através dos pré-socráticos que buscavam na natureza (physis) uma justificativa racional para a origem de tudo. Inicialmente, encontravam um elemento essencial (arché) como solução primordial.`,
    subject: ['fil'],
    topics: ['Política e Estado', 'Questões aleatórias'],
  },
  {
    id: 35,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Quanto ao “choque de civilizações”, é bom lembrar 
a carta de uma menina americana de sete anos cujo pai 
era piloto na Guerra do Afeganistão: ela escreveu que - 
embora amasse muito seu pai - estava pronta a deixá-lo 
morrer, a sacrificá-lo por seu país. Quando o presidente 
Bush citou suas palavras, elas foram entendidas como 
manifestação “normal” de patriotismo americano; vamos 
conduzir uma experiência mental simples e imaginar uma 
menina árabe maometana pateticamente lendo para as 
câmeras as mesmas palavras a respeito do pai que lutava 
pelo Talibã - não é necessário pensar muito sobre qual 
teria sido a nossa reação. 
ZIZEK, S. Bem-vindo ao deserto do real . São Paulo: Bom Tempo, 2003. 
A situação imaginária proposta pelo autor explicita o 
desafio cultural do(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `prática da diplomacia.` },
      { id: 'B', type: 'text', value: `exercício da alteridade.` },
      { id: 'C', type: 'text', value: `expansão da democracia.` },
      { id: 'D', type: 'text', value: `universalização do progresso.` },
      { id: 'E', type: 'text', value: `conquista da autodeterminação.` },
    ],
    correct: 'B',
    explanation: `A alteridade significa a qualidade do que é do outro. Por isso, o “eu” só pode existir através do contato com o “outro”. A questão aborda a necessidade do exercício da alteridade como algo que vai implementar uma melhor compreensão sobre a cultura de outro povo.`,
    subject: ['his'],
    topics: ['História Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 36,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `SCHWARCZ, L. M. As barbas do imperador: D. Pedro II, um monarca nos trópicos. São Paulo: Cia. das Letras, 1998 (adaptado). 
Essas imagens de D. Pedro II foram feitas no início dos anos de 1850, pouco mais de uma década após o Golpe da 
Maioridade. Considerando o contexto histórico em que foram produzidas e os elementos simbólicos destacados, essas 
imagens representavam um`,
    images: ['/enem/2015/images/enem_2015_d1_q36.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `jovem imaturo que agiria de forma irresponsável.` },
      { id: 'B', type: 'text', value: `imperador adulto que governaria segundo as leis.` },
      { id: 'C', type: 'text', value: `líder guerreiro que comandaria as vitórias militares.` },
      { id: 'D', type: 'text', value: `soberano religioso que acataria a autoridade papal.` },
      { id: 'E', type: 'text', value: `monarca absolutista que exerceria seu autoritarismo.` },
    ],
    correct: 'B',
    explanation: `A produção destas imagens tinham por objetivo demostrar um equilíbrio, força e segurança na imagem do imperador, visto o contexto no qual chegou ao poder. Cerca de dez anos se passaram desde sua ascensão através do &#8220;Golpe da Maioridade&#8221;, porém, ainda tinha 25 anos e devia a população uma imagem enaltecedora.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Questões aleatórias'],
  },
  {
    id: 37,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `No início foram as cidades. O intelectual da Idade Média - no Ocidente - nasceu com elas. Foi com o 
desenvolvimento urbano ligado às funções comercial e industrial - digamos modestamente artesanal - que ele 
apareceu, como um desses homens de ofício que se instalavam nas cidades nas quais se impôs a divisão do trabalho. 
Um homem cujo ofício é escrever ou ensinar, e de preferencia as duas coisas a um so tempo, um homem que, 
profissionalmente, tem uma atividade de professor e erudito, em resumo, um intelectual - esse homem so aparecera 
com as cidades. 
O surgimento da categoria mencionada no período em destaque no texto evidencia o(a)`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `apoio dado pela Igreja ao trabalho abstrato.` },
      { id: 'B', type: 'text', value: `relação entre desenvolvimento urbano e divisão do trabalho.` },
      { id: 'C', type: 'text', value: `importância organizacional das corporações de ofício.` },
      { id: 'D', type: 'text', value: `progressiva expansão da educação escolar.` },
      { id: 'E', type: 'text', value: `acúmulo de trabalho dos professores e eruditos. 
LE GOFF, J. Os intelectuais na Idade Media . Rio de Janeiro: José Olympio, 2010.` },
    ],
    correct: 'B',
    explanation: `A Baixa Idade Média, tendo seu início compreendido por volta do século XII, tem como característica o rescindimento comercial e urbano, contextualizado pelo surgimento dos burgos e rotas comerciais. Todo este desenvolvimento urbano provoca o surgimento de ofícios (divisão do trabalho), como artes, pintura, urbanismo e até mesmo arquitetura.`,
    subject: ['his'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 38,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Um carro esportivo é financiado pelo Japão, 
projetado na Itália e montado em Indiana, México e 
França, usando os mais avançados componentes 
eletrônicos, que foram inventados em Nova Jérsei 
e fabricados na Coreia. A campanha publicitária é 
desenvolvida na Inglaterra, filmada no Canadá, a edição 
e as cópias, feitas em Nova York para serem veiculadas 
no mundo todo. Teias globais disfarçam-se com o 
uniforme nacional que lhes for mais conveniente. 
REICH, R. O trabalho das nações : preparando-nos para o capitalismo no século XXI. 
São Paulo: Educator, 1994 (adaptado). 
A viabilidade do processo de produção ilustrado pelo texto 
pressupõe o uso de`,
    alternatives: [
      { id: 'A', type: 'text', value: `linhas de montagem e formação de estoques.` },
      { id: 'B', type: 'text', value: `empresas burocráticas e mão de obra barata.` },
      { id: 'C', type: 'text', value: `controle estatal e infraestrutura consolidada.` },
      { id: 'D', type: 'text', value: `organização em rede e tecnologia de informação.` },
      { id: 'E', type: 'text', value: `gestão centralizada e protecionismo econômico.` },
    ],
    correct: 'D',
    explanation: `O texto destaca uma forte característica do modelo toyotista, a produção desconcentrada, que assim como o mercado, passa a atuar em nível global. Tal momento só se torna possível com o advento de eficientes redes de comunicação e transporte.`,
    subject: ['soc'],
    topics: ['Trabalho e economia', 'Questões aleatórias'],
  },
  {
    id: 39,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Na sociedade contemporânea, onde as relações 
sociais tendem a reger-se por imagens midiáticas, a 
imagem de um indivíduo, principalmente na indústria do 
espetáculo, pode agregar valor econômico na medida 
de seu incremento técnico: amplitude do espelhamento 
e da atenção pública. Aparecer é então mais do que 
ser; o sujeito é famoso porque é falado. Nesse âmbito, 
a lógica circulatória do mercado, ao mesmo tempo que 
acena democraticamente para as massas com supostos 
“ganhos distributivos” (a informação ilimitada, a quebra 
das supostas hierarquias culturais), afeta a velha cultura 
disseminada na esfera pública. A participação nas redes 
sociais, a obsessão dos selfies , tanto falar e ser falado 
quanto ser visto são índices do desejo de “espelhamento”. 
SODRÉ, M. Disponível em: http://alias.estadao.com.br. Acesso em: 9 fev. 2015 (adaptado).
A 
crítica 
contida 
no 
texto 
sobre 
a 
sociedade 
contemporânea enfatiza`,
    alternatives: [
      { id: 'A', type: 'text', value: `a prática identitária autorreferente.` },
      { id: 'B', type: 'text', value: `a dinâmica política democratizante.` },
      { id: 'C', type: 'text', value: `a produção instantânea de notícias.` },
      { id: 'D', type: 'text', value: `os processos difusores de informações.` },
      { id: 'E', type: 'text', value: `os mecanismos de convergência tecnológica.` },
    ],
    correct: 'A',
    explanation: `O avanço tecnológico facilitou ações e possibilitou o surgimento de redes sociais. A partir daí, os indivíduos tornam-se mais individualistas e há uma maior valorização de si com as “selfies”.`,
    subject: ['soc'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 40,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A crescente intelectualização e racionalização não 
indicam um conhecimento maior e geral das condições 
sob as quais vivemos. Significa a crença em que, se 
quiséssemos, 
poderíamos 
ter 
esse 
conhecimento 
a qualquer momento. Não há forças misteriosas 
incalculáveis; podemos dominar todas as coisas pelo 
cálculo. 
WEBER, M. A ciência como vocação. In: GERTH, H.; MILLS, W. (Org.). Max Weber : ensaios 
de sociologia. Rio de Janeiro: Zahar, 1979 (adaptado). 
Tal como apresentada no texto, a proposição de Max 
Weber a respeito do processo de desencantamento do 
mundo evidencia o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `progresso civilizatório como decorrência da expansão 
do industrialismo.` },
      { id: 'B', type: 'text', value: `extinção 
do 
pensamento 
mítico 
como 
um 
desdobramento do capitalismo.` },
      { id: 'C', type: 'text', value: `emancipação como consequência do processo de 
racionalização da vida.` },
      { id: 'D', type: 'text', value: `afastamento de crenças tradicionais como uma 
característica da modernidade.` },
      { id: 'E', type: 'text', value: `fim 
do 
monoteísmo 
como 
condição 
para 
a 
consolidação da ciência.` },
    ],
    correct: 'D',
    explanation: `O texto de Weber mostra a transição do pensamento antigo para o moderno diante das alterações históricas ocorridas no período, como Revolução Industrial, surgimento do capitalismo, entre outros. Assim, há um afastamento em relação às crenças mais antigas.`,
    subject: ['soc'],
    topics: ['Sociologia', 'Questões aleatórias'],
  },
  {
    id: 41,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Diante de ameaças surgidas com a engenharia 
genética de alimentos, vários grupos da sociedade 
civil conceberam o chamado “princípio da precaução”. 
O fundamento desse princípio é: quando uma tecnologia 
ou produto comporta alguma ameaça à saúde ou ao 
ambiente, ainda que não se possa avaliar a natureza 
precisa ou a magnitude do dano que venha a ser causado 
por eles, deve-se evitá-los ou deixá-los de quarentena 
para maiores estudos e avaliações antes de sua liberação. 
SEVCENKO, N. A corrida para o século XXI : no loop da montanha-russa. 
São Paulo: Cia. das Letras, 2001 (adaptado). 
O texto expõe uma tendência representativa do 
pensamento 
social 
contemporâneo, 
na 
qual 
o 
desenvolvimento de mecanismos de acautelamento ou 
administração de riscos tem como objetivo`,
    alternatives: [
      { id: 'A', type: 'text', value: `priorizar os interesses econômicos em relação aos 
seres humanos e à natureza.` },
      { id: 'B', type: 'text', value: `negar a perspectiva científica e suas conquistas por 
causa de riscos ecológicos.` },
      { id: 'C', type: 'text', value: `instituir 
o 
diálogo 
público 
sobre 
mudanças 
tecnológicas e suas consequências.` },
      { id: 'D', type: 'text', value: `combater a introdução de tecnologias para travar o 
curso das mudanças sociais.` },
      { id: 'E', type: 'text', value: `romper o equilíbrio entre benefícios e riscos do 
avanço tecnológico e científico.` },
    ],
    correct: 'C',
    explanation: `Um debate público seria uma possibilidade para informar e auxiliar na compreensão da influência e consequências que as alterações genéticas em alimentos têm na vida dos indivíduos. Com isso, haveria uma maior conscientização e responsabilidade sobre essas mudanças.`,
    subject: ['soc'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 42,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Ninguém nasce mulher: torna-se mulher. Nenhum 
destino biológico, psíquico, econômico define a forma 
que a fêmea humana assume no seio da sociedade; 
é o conjunto da civilização que elabora esse produto 
intermediário entre o macho e o castrado que qualificam 
o feminino. 
BEAUVOIR, S. O segundo sexo . Rio de Janeiro: Nova Fronteira, 1980. 
Na década de 1960, a proposição de Simone de Beauvoir 
contribuiu para estruturar um movimento social que teve 
como marca o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `ação do Poder Judiciário para criminalizar a violência 
sexual.` },
      { id: 'B', type: 'text', value: `pressão do Poder Legislativo para impedir a dupla 
jornada de trabalho.` },
      { id: 'C', type: 'text', value: `organização de protestos públicos para garantir a 
igualdade de gênero.` },
      { id: 'D', type: 'text', value: `oposição de grupos religiosos para impedir os 
casamentos homoafetivos.` },
      { id: 'E', type: 'text', value: `estabelecimento de políticas governamentais para 
promover ações afirmativas.` },
    ],
    correct: 'C',
    explanation: `Talvez a maioria dos alunos não conheça a história e a vida da autora do texto, Simone de Beavour, porém, isto não impede de responder a questão, visto que é compreendido dentro de nossos estudos os movimentos sociais e as lutas pela igualdade que marcaram a década de 1960 pelo mundo afora, descantando os Estados Unidos e Europa Ocidental. A &#8220;segunda onda do feminismo&#8221; ocorre exatamente neste período.`,
    subject: ['soc'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 43,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Só num sentido muito restrito, o indivíduo cria com 
seus próprios recursos o modo de falar e de pensar que 
lhe são atribuídos. Fala o idioma de seu grupo; pensa 
à maneira de seu grupo. Encontra a sua disposição 
apenas determinadas palavras e significados. Estas não 
só determinam, em grau considerável, as vias de acesso 
mental ao mundo circundante, mas também mostram, 
ao mesmo tempo, sob que ângulo e em que contexto 
de atividade os objetos foram até agora perceptíveis ao 
grupo ou ao indivíduo. 
MANNHEIM, K. Ideologia e utopia . Porto Alegre: Globo, 1950 (adaptado). 
Ilustrando uma proposição básica da sociologia do 
conhecimento, o argumento de Karl Mannheim defende 
que o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `conhecimento sobre a realidade é condicionado 
socialmente.` },
      { id: 'B', type: 'text', value: `submissão ao grupo manipula o conhecimento do 
mundo.` },
      { id: 'C', type: 'text', value: `divergência é um privilégio de indivíduos excepcionais.` },
      { id: 'D', type: 'text', value: `educação formal determina o conhecimento do 
idioma.` },
      { id: 'E', type: 'text', value: `domínio das línguas universaliza o conhecimento.` },
    ],
    correct: 'A',
    explanation: `Os padrões sociais conhecidos pelos indivíduos ocorrem através do habitus primário (aprendido com a família) e habitus secundário (aprendido com os demais grupos sociais no qual são inseridos). Portanto, o ato de aprender ocorre através do convívio em sociedade.`,
    subject: ['soc'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 44,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A Unesco condenou a destruição da antiga capital 
assíria de Nimrod, no Iraque, pelo Estado Islâmico, com 
a agência da ONU considerando o ato como um crime 
de guerra. O grupo iniciou um processo de demolição 
em vários sítios arqueológicos em uma área reconhecida 
como um dos berços da civilização. 
Unesco e especialistas condenam destruição de cidade assíria pelo Estado Islâmico . 
Disponível em: http://oglobo.globo.com. Acesso em: 30 mar. 2015 (adaptado). 
O tipo de atentado descrito no texto tem como 
consequência para as populações de países como o 
Iraque a desestruturação do(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `homogeneidade cultural.` },
      { id: 'B', type: 'text', value: `patrimônio histórico.` },
      { id: 'C', type: 'text', value: `controle ocidental.` },
      { id: 'D', type: 'text', value: `unidade étnica.` },
      { id: 'E', type: 'text', value: `religião oficial.` },
    ],
    correct: 'B',
    explanation: `Nimrod, mesmo não sendo a atual capital do Iraque, tem o título de patrimônio histórico, visto a importância cultural que tem para o mundo. A sua destruição por parte do Estado Islâmico (ISIS) teve um grande impacto na comunidade internacional, que condenou o evento como um crime de guerra.`,
    subject: ['his'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 45,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A questão ambiental, uma das principais pautas 
contemporâneas, 
possibilitou 
o 
surgimento 
de 
concepções políticas diversas, dentre as quais se destaca 
a preservação ambiental, que sugere uma ideia de 
intocabilidade da natureza e impede o seu aproveitamento 
econômico sob qualquer justificativa. 
PORTO-GONÇALVES, C. W. A globalização da natureza e a natureza da 
globalização . Rio de Janeiro: Civilização Brasileira, 2006 (adaptado). 
Considerando as atuais concepções políticas sobre a 
questão ambiental, a dinâmica caracterizada no texto 
quanto à proteção do meio ambiente está baseada na`,
    alternatives: [
      { id: 'A', type: 'text', value: `prática econômica sustentável.` },
      { id: 'B', type: 'text', value: `contenção de impactos ambientais.` },
      { id: 'C', type: 'text', value: `utilização progressiva dos recursos naturais.` },
      { id: 'D', type: 'text', value: `proibição permanente da exploração da natureza.` },
      { id: 'E', type: 'text', value: `definição de áreas prioritárias para a exploração econômica.` },
    ],
    correct: 'D',
    explanation: `A proposta do texto não tem um cunho sustentável (uso racional dos recursos), mas sim uma ideia de natureza intocada, em que a preservação deriva da não utilização de seus recursos.`,
    subject: ['geo'],
    topics: ['Globalização', 'Questões aleatórias'],
  },
  {
    id: 46,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Hipoxia ou mal das alturas consiste na diminuição de 
oxigênio (O 2 ) no sangue arterial do organismo. Por essa 
razão, muitos atletas apresentam mal-estar (dores de 
cabeça, tontura, falta de ar etc.) ao praticarem atividade 
física em altitudes elevadas. Nessas condições, ocorrerá 
uma diminuição na concentração de hemoglobina 
oxigenada (HbO 2 ) em equilíbrio no sangue, conforme a 
relação: 
Hb (aq) + O 2 (aq) 
 HbO 2 (aq) 
Mal da montanha . Disponível em: www.feng.pucrs.br. Acesso em: 11 fev. 2015 (adaptado). 
A alteração da concentração de hemoglobina oxigenada 
no sangue ocorre por causa do(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `elevação da pressão arterial.` },
      { id: 'B', type: 'text', value: `aumento da temperatura corporal.` },
      { id: 'C', type: 'text', value: `redução da temperatura do ambiente.` },
      { id: 'D', type: 'text', value: `queda da pressão parcial de oxigênio.` },
      { id: 'E', type: 'text', value: `diminuição da quantidade de hemácias.` },
    ],
    correct: 'D',
    explanation: `Em altitudes elevadas, a baixa pressão atmosférica determina que o ar seja rarefeito, o que diminui a pressão parcial de oxigênio no sangue.`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 47,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A indústria têxtil utiliza grande quantidade de corantes 
no processo de tingimento dos tecidos. O escurecimento 
das águas dos rios causado pelo despejo desses 
corantes pode desencadear uma série de problemas no 
ecossistema aquático. 
Considerando esse escurecimento das águas, o impacto 
negativo inicial que ocorre é o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `eutrofização.` },
      { id: 'B', type: 'text', value: `proliferação de algas.` },
      { id: 'C', type: 'text', value: `inibição da fotossíntese.` },
      { id: 'D', type: 'text', value: `fotodegradação da matéria orgânica.` },
      { id: 'E', type: 'text', value: `aumento da quantidade de gases dissolvidos.` },
    ],
    correct: 'C',
    explanation: `Águas mais escuras têm pouca penetração luminosa; consequentemente, possuem uma reduzida taxa de fotossíntese.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 48,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Muitos estudos de síntese e endereçamento de 
proteínas utilizam aminoácidos marcados radioativamente 
para acompanhar as proteínas, desde fases iniciais de 
sua produção até seu destino final. Esses ensaios foram 
muito empregados para estudo e caracterização de 
células secretoras. 
Após esses ensaios de radioatividade, qual gráfico 
representa a evolução temporal da produção de proteínas 
e sua localização em uma célula secretora? 
100 
90 
80 
70 
60 
50 
40 
30 
20 
10 
0 
Radioatividade (%) 
Retículo Endoplasmático 
Complexo Golgiense`,
    images: ['/enem/2015/images/enem_2015_d1_q48_A.jpg', '/enem/2015/images/enem_2015_d1_q48_B.jpg', '/enem/2015/images/enem_2015_d1_q48_C.jpg', '/enem/2015/images/enem_2015_d1_q48_D.jpg', '/enem/2015/images/enem_2015_d1_q48_E.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'C',
    explanation: `Proteínas secretadas pela célula são produzidas no RER, passam pelo complexo golgiense que as armazena, empacota e forma as vesículas de secreção e, depois, encaminha as proteínas ao meio extracelular.`,
    subject: ['fis'],
    topics: ['Física moderna', 'Questões aleatórias'],
  },
  {
    id: 49,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Um carro solar é um veículo que utiliza apenas a 
energia solar para a sua locomoção. Tipicamente, o carro 
contém um painel fotovoltaico que converte a energia 
do Sol em energia elétrica que, por sua vez, alimenta 
um motor elétrico. A imagem mostra o carro solar Tokai 
Challenger, desenvolvido na Universidade de Tokai, no 
Japão, e que venceu o World Solar Challenge de 2009, 
uma corrida internacional de carros solares, tendo atingido 
uma velocidade média acima de 100 km/h. 
Disponível em: www.physics.hku.hk. Acesso em: 3 jun. 2015. 
Considere uma região plana onde a insolação 
(energia solar por unidade de tempo e de área que chega 
à superfície da Terra) seja de 1 000 W/m² , que o carro 
solar possua massa de 200 kg e seja construído de forma 
que o painel fotovoltaico em seu topo tenha uma área de 
9,0 m² e rendimento de 30%. 
Desprezando as forças de resistência do ar, o tempo que 
esse carro solar levaria, a partir do repouso, para atingir a 
velocidade de 108 km/h é um valor mais próximo de`,
    images: ['/enem/2015/images/enem_2015_d1_q49.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1,0 s.` },
      { id: 'B', type: 'text', value: `4,0 s.` },
      { id: 'C', type: 'text', value: `10 s.` },
      { id: 'D', type: 'text', value: `33 s.` },
      { id: 'E', type: 'text', value: `300 s.` },
    ],
    correct: 'D',
    explanation: `Identifica-se na questão insolação como E/t.A = 1000. Como só 30% é aproveitado, E/t.A = 30%.1000 E a E=mv²/2 mv²/2.t.A = 30% 1000 Como sabemos quem é m, v e A. Fazendo as contas, temos: t=33,333 s Cuidado: a velocidade do problema é dada em km/h e, no SI, usamos em m/s. Não esqueça de transformar!`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 50,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A radiação ultravioleta (UV) é dividida, de acordo
com três faixas de frequência, em UV-A, UV-B e UV-C,
conforme a figura.

Para selecionar um filtro solar que apresente absorção
máxima na faixa UV-B, uma pessoa analisou os espectros
de absorção da radiação UV de cinco filtros solares:

Considere:
velocidade da luz = 3,0×10^8 m/s e 1 nm = 1,0×10^-9 m.

O filtro solar que a pessoa deve selecionar é o`,
    images: ['/enem/2015/images/enem_2015_d1_q50_1.jpg', '/enem/2015/images/enem_2015_d1_q50_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `V.` },
      { id: 'B', type: 'text', value: `IV.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `II.` },
      { id: 'E', type: 'text', value: `I.` },
    ],
    correct: 'B',
    explanation: `Cada faixa de frequência possui uma faixa de comprimento de onda. Achando esses comprimentos de ondas, descobrimos qual o protetor que melhor protege. Vamos descobrir qual comprimento de onda da maior frequência. V=λf 3 × 10⁸ = λ x 1,03 × 10¹⁵ λ = 300 nm Analisando o gráfico, o filtro de maior amplitude com esse comprimento de onda é o IV.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 51,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Um grupo de pesquisadores desenvolveu um 
método simples, barato e eficaz de remoção de petróleo 
contaminante na água, que utiliza um plástico produzido a 
partir do líquido da castanha-de-caju (LCC). A composição 
química do LCC é muito parecida com a do petróleo e suas 
moléculas, por suas características, interagem formando 
agregados com o petróleo. Para retirar os agregados da 
água, os pesquisadores misturam ao LCC nanopartículas 
magnéticas. 
KIFFER, D. Novo método para remoção de petróleo usa óleo de mamona e castanha-de-caju . 
Disponível em: www.faperj.br. Acesso em: 31 jul. 2012 (adaptado). 
Essa técnica considera dois processos de separação de 
misturas, sendo eles, respectivamente,`,
    alternatives: [
      { id: 'A', type: 'text', value: `flotação e decantação.` },
      { id: 'B', type: 'text', value: `decomposição e centrifugação.` },
      { id: 'C', type: 'text', value: `floculação e separação magnética.` },
      { id: 'D', type: 'text', value: `destilação fracionada e peneiração.` },
      { id: 'E', type: 'text', value: `dissolução fracionada e magnetização.` },
    ],
    correct: 'C',
    explanation: `A questão aborda a formação de aglomerados com o petróleo e o LCC (composição parecida com a do petróleo). Este processo é denominado floculação, já que os aglomerados, também chamados de flocos, possuem massa maior e são mais facilmente separados. A ajuda na separação ocorre com a adição de nanopartículas magnéticas num processo chamado de separação magnética ou imantação.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 52,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A soda cáustica pode ser usada no desentupimento 
de encanamentos domésticos e tem, em sua composição, 
o hidróxido de sódio como principal componente, além de 
algumas impurezas. A soda normalmente é comercializada 
na forma sólida, mas que apresenta aspecto “derretido” 
quando exposta ao ar por certo período. 
O fenômeno de “derretimento” decorre da`,
    alternatives: [
      { id: 'A', type: 'text', value: `absorção da umidade presente no ar atmosférico.` },
      { id: 'B', type: 'text', value: `fusão do hidróxido pela troca de calor com o ambiente.` },
      { id: 'C', type: 'text', value: `reação das impurezas do produto com o oxigênio do ar.` },
      { id: 'D', type: 'text', value: `adsorção de gases atmosféricos na superfície do 
sólido.` },
      { id: 'E', type: 'text', value: `reação do hidróxido de sódio com o gás nitrogênio 
presente no ar.` },
    ],
    correct: 'A',
    explanation: `O hidróxido de sódio (NaOH), substância mencionada no texto, é altamente higroscópica, ou seja, absorve água do ambiente no qual está. Por este fato, embora apresente aspecto de &#8220;derretido&#8221; (fundido), o que ocorre é a absorção de água e consequente dissolução do mesmo.`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 53,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Certos tipos de superfícies na natureza podem 
refletir luz de forma a gerar um efeito de arco-íris. 
Essa característica é conhecida como iridescência 
e ocorre por causa do fenômeno da interferência de 
película fina. A figura ilustra o esquema de uma fina 
camada iridescente de óleo sobre uma poça d’água. 
Parte do feixe de luz branca incidente 
1 reflete na 
interface ar/óleo e sofre inversão de fase 
2 , o que 
equivale a uma mudança de meio comprimento de 
onda. A parte refratada do feixe 3 incide na interface 
óleo/água e sofre reflexão sem inversão de fase 4 . 
O observador indicado enxergará aquela região do filme 
com coloração equivalente à do comprimento de onda 
que sofre interferência completamente construtiva entre 
os raios 2 e 5 , mas essa condição só é possível para 
uma espessura mínima da película. Considere que o 
caminho percorrido em 3 e 4 corresponde ao dobro da 
espessura E da película de óleo. 
Esses raios produzem a 
interferência observada 
1 
2 
5 
interface ar/óleo 
4 
3 
E 
camada fina de óleo 
água 
Disponível em: http://2011.igem.org. Acesso em: 18 nov. 2014 (adaptado). 
Expressa em termos do comprimento de onda (λ), a 
espessura mínima é igual a`,
    images: ['/enem/2015/images/enem_2015_d1_q53.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `λ 
4 
.` },
      { id: 'B', type: 'text', value: `λ 
2 
.` },
      { id: 'C', type: 'text', value: `3λ 
4 
.` },
      { id: 'D', type: 'text', value: `λ.` },
      { id: 'E', type: 'text', value: `2λ.` },
    ],
    correct: 'A',
    explanation: `Para que ocorra a interferência construtiva, as ondas precisam se encontrar em fase (e não em oposição de fase). Assim, ao longo da distância 2 E (ida e volta na camada de óleo de espessura E ) a parte refratada do feixe (3) tem que compensar a reflexão com inversão de fase da onda 1. 2E = λ/2 E = λ/4`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 54,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Um importante princípio da biologia, relacionado à 
transmissão de caracteres e à embriogênese humana, 
foi quebrado com a descoberta do microquimerismo 
fetal. Microquimerismo é o nome dado ao fenômeno 
biológico referente a uma pequena população de células 
ou DNA presente em um indivíduo, mas derivada de um 
organismo geneticamente distinto. Investigando-se a 
presença do cromossomo Y, foi revelado que diversos 
tecidos de mulheres continham células masculinas. 
A análise do histórico médico revelou uma correlação 
extremamente curiosa: apenas as mulheres que antes 
tiveram filhos homens apresentaram microquimerismo 
masculino. Essa correlação levou à interpretação de que 
existe uma troca natural entre células do feto e maternas 
durante a gravidez. 
MUOTRI, A. Você não é só você: carregamos células maternas na maioria de nossos
órgãos. Disponível em: http://g1.globo.com. Acesso em: 4 dez. 2012 (adaptado). 
O princípio contestado com essa descoberta, relacionado 
ao desenvolvimento do corpo humano, é o de que`,
    alternatives: [
      { id: 'A', type: 'text', value: `o fenótipo das nossas células pode mudar por 
influência do meio ambiente.` },
      { id: 'B', type: 'text', value: `a dominância genética determina a expressão de 
alguns genes.` },
      { id: 'C', type: 'text', value: `as mutações genéticas introduzem variabilidade no 
genoma.` },
      { id: 'D', type: 'text', value: `as mitocôndrias e o seu DNA provêm do gameta 
materno.` },
      { id: 'E', type: 'text', value: `as nossas células corporais provêm de um único 
zigoto.` },
    ],
    correct: 'E',
    explanation: `De acordo com o texto, quimeras recebem contribuição genética de mais do que um indivíduo.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 55,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A hidroponia pode ser definida como uma técnica 
de produção de vegetais sem necessariamente a 
presença de solo. Uma das formas de implementação 
é manter as plantas com suas raízes suspensas em 
meio líquido, de onde retiram os nutrientes essenciais. 
Suponha que um produtor de rúcula hidropônica 
precise ajustar a concentração do íon nitrato (NO₃⁻)
para 0,009 mol/L em um tanque de 5 000 litros e, para
tanto, tem em mãos uma solução comercial nutritiva 
de nitrato de cálcio 90 g/L. As massas molares dos 
elementos N, O e Ca são iguais a 14 g/mol, 16 g/mol e 
40 g/mol, respectivamente. 
Qual o valor mais próximo do volume da solução nutritiva, 
em litros, que o produtor deve adicionar ao tanque?`,
    alternatives: [
      { id: 'A', type: 'text', value: `26` },
      { id: 'B', type: 'text', value: `41` },
      { id: 'C', type: 'text', value: `45` },
      { id: 'D', type: 'text', value: `51` },
      { id: 'E', type: 'text', value: `82` },
    ],
    correct: 'B',
    explanation: `0,009 mol NO₃ &#8211; &#8212; 1 L X &#8212; 5000 L X = 45 mol NO₃ &#8211; 1 mol Ca(NO₃)₂ &#8212; 2 mol NO₃ &#8211; Y &#8212; 45 mol NO₃ &#8211; Y = 22,5 mol Ca(NO₃)₂ 164 g (massa molar) &#8212; 1 mol Z &#8212; 22,5 mol Z = 3690g (em 5000 L) 90g &#8212; 1L (concentração citada no texto) 3690g &#8212; W W = 41 L`,
    subject: ['qui'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 56,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Algumas raças de cães domésticos não conseguem 
copular entre si devido à grande diferença em seus 
tamanhos 
corporais. Ainda 
assim, 
tal 
dificuldade 
reprodutiva não ocasiona a formação de novas espécies 
(especiação). 
Essa especiação não ocorre devido ao(à)`,
    alternatives: [
      { id: 'A', type: 'text', value: `oscilação genética das raças.` },
      { id: 'B', type: 'text', value: `convergência adaptativa das raças.` },
      { id: 'C', type: 'text', value: `isolamento geográfico entre as raças.` },
      { id: 'D', type: 'text', value: `seleção natural que ocorre entre as raças.` },
      { id: 'E', type: 'text', value: `manutenção do fluxo gênico entre as raças.` },
    ],
    correct: 'E',
    explanation: `A característica inerente à espécie é o fluxo gênico entre os indivíduos. Quando não há isolamento reprodutivo entre os indivíduos, eles pertencem à mesma espécie.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 57,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `O ar atmosférico pode ser utilizado para 
armazenar o excedente de energia gerada no 
sistema elétrico, diminuindo seu desperdício, por 
meio do seguinte processo: água e gás carbônico 
são inicialmente removidos do ar atmosférico e 
a massa de ar restante é resfriada até −198 °C. 
Presente na proporção de 78% dessa massa de ar, o 
nitrogênio gasoso é liquefeito, ocupando um volume 
700 vezes menor. A energia excedente do sistema 
elétrico é utilizada nesse processo, sendo parcialmente 
recuperada quando o nitrogênio líquido, exposto à 
temperatura ambiente, entra em ebulição e se expande, 
fazendo girar turbinas que convertem energia mecânica 
em energia elétrica. 
MACHADO, R. Disponível em: www.correiobraziliense.com.br. 
Acesso em: 9 set. 2013 (adaptado). 
No processo descrito, o excedente de energia elétrica é 
armazenado pela`,
    alternatives: [
      { id: 'A', type: 'text', value: `expansão do nitrogênio durante a ebulição.` },
      { id: 'B', type: 'text', value: `absorção de calor pelo nitrogênio durante a ebulição.` },
      { id: 'C', type: 'text', value: `realização de trabalho sobre o nitrogênio durante a 
liquefação.` },
      { id: 'D', type: 'text', value: `retirada de água e gás carbônico da atmosfera antes 
do resfriamento.` },
      { id: 'E', type: 'text', value: `liberação de calor do nitrogênio para a vizinhança 
durante a liquefação.` },
    ],
    correct: 'C',
    explanation: `Quando o trabalho com o gás, ele recebe a energia excedente do sistema. Quando ele se expande, ele realiza trabalho, liberando (e “devolvendo”) a energia armazenada.`,
    subject: ['fis'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 58,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Alimentos 
em 
conserva 
são 
frequentemente 
armazenados em latas metálicas seladas, fabricadas com 
um material chamado folha de flandres, que consiste de 
uma chapa de aço revestida com uma fina camada de 
estanho, metal brilhante e de difícil oxidação. É comum 
que a superfície interna seja ainda revestida por uma 
camada de verniz à base de epóxi, embora também 
existam latas sem esse revestimento, apresentando uma 
camada de estanho mais espessa. 
SANTANA, V. M. S. A leitura e a química das substâncias. Cadernos PDE . Ivaiporã: 
Secretaria de Estado da Educação do Paraná (SEED); Universidade 
Estadual de Londrina, 2010 (adaptado). 
Comprar 
uma 
lata 
de 
conserva 
amassada 
no 
supermercado é desaconselhável porque o amassado 
pode`,
    alternatives: [
      { id: 'A', type: 'text', value: `alterar a pressão no interior da lata, promovendo a 
degradação acelerada do alimento.` },
      { id: 'B', type: 'text', value: `romper a camada de estanho, permitindo a corrosão 
do ferro e alterações do alimento.` },
      { id: 'C', type: 'text', value: `prejudicar o apelo visual da embalagem, apesar de 
não afetar as propriedades do alimento.` },
      { id: 'D', type: 'text', value: `romper a camada de verniz, fazendo com que o metal 
tóxico estanho contamine o alimento.` },
      { id: 'E', type: 'text', value: `desprender camadas de verniz, que se dissolverão no 
meio aquoso, contaminando o alimento.` },
    ],
    correct: 'B',
    explanation: `O estanho, por apresentar difícil oxidação, protege o ferro das latas de uma possível oxidação quando exposto ao ar. Se a lata estiver amassada, o estanho pode ser rompido e deixar o ferro sofrer oxidação, alterando o alimento.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 59,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Uma forma de organização de um sistema biológico 
é a presença de sinais diversos utilizados pelos 
indivíduos para se comunicarem. No caso das abelhas 
da espécie Apis mellifera , os sinais utilizados podem ser 
feromônios. Para saírem e voltarem de suas colmeias, 
usam um feromônio que indica a trilha percorrida por elas 
(Composto A). Quando pressentem o perigo, expelem um 
feromônio de alarme (Composto B), que serve de sinal 
para um combate coletivo. O que diferencia cada um 
desses sinais utilizados pelas abelhas são as estruturas e 
funções orgânicas dos feromônios. 
CH₂ OH 
Composto A 
CH₃ COO(CH₂ )CH 
CH₃ 
CH₃ 
Composto B 
QUADROS, A. L. Os feromônios e o ensino de química. 
Química Nova na Escola , n. 7, maio 1998 (adaptado). 
As funções orgânicas que caracterizam os feromônios de 
trilha e de alarme são, respectivamente,`,
    images: ['/enem/2015/images/enem_2015_d1_q59.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `álcool e éster.` },
      { id: 'B', type: 'text', value: `aldeído e cetona.` },
      { id: 'C', type: 'text', value: `éter e hidrocarboneto.` },
      { id: 'D', type: 'text', value: `enol e ácido carboxílico.` },
      { id: 'E', type: 'text', value: `ácido carboxílico e amida.` },
    ],
    correct: 'A',
    explanation: `A presença do grupo e do grupo OH ligado a um carbono saturado caracterizam as funções éster e álcool.`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 60,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `O permanganato de potássio (KMnO₄ ) é um agente 
oxidante forte muito empregado tanto em nível laboratorial 
quanto industrial. Na oxidação de alcenos de cadeia 
normal, como o 1-fenil-1-propeno, ilustrado na figura, o 
KMnO₄ é utilizado para a produção de ácidos carboxílicos. 
1-fenil-1-propeno 
Os produtos obtidos na oxidação do alceno representado, 
em solução aquosa de KMnO₄ , são:`,
    images: ['/enem/2015/images/enem_2015_d1_q60.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Ácido benzoico e ácido etanoico.` },
      { id: 'B', type: 'text', value: `Ácido benzoico e ácido propanoico.` },
      { id: 'C', type: 'text', value: `Ácido etanoico e ácido 2-feniletanoico.` },
      { id: 'D', type: 'text', value: `Ácido 2-feniletanoico e ácido metanoico.` },
      { id: 'E', type: 'text', value: `Ácido 2-feniletanoico e ácido propanoico.` },
    ],
    correct: 'A',
    explanation: `Reação orgânica (oxidação de alceno)`,
    subject: ['qui'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 61,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `O nitrogênio é essencial para a vida e o maior 
reservatório global desse elemento, na forma de N 2 , 
é a atmosfera. Os principais responsáveis por sua 
incorporação na matéria orgânica são microrganismos 
fixadores de N 2 , que ocorrem de forma livre ou simbiontes 
com plantas. 
ADUAN, R. E. et al. Os grandes ciclos biogeoquímicos do planeta . 
Planaltina: Embrapa, 2004 (adaptado). 
Animais garantem suas necessidades metabólicas desse 
elemento pela`,
    alternatives: [
      { id: 'A', type: 'text', value: `absorção do gás nitrogênio pela respiração.` },
      { id: 'B', type: 'text', value: `ingestão de moléculas de carboidratos vegetais.` },
      { id: 'C', type: 'text', value: `incorporação 
de 
nitritos 
dissolvidos 
na 
água 
consumida.` },
      { id: 'D', type: 'text', value: `transferência da matéria orgânica pelas cadeias 
tróficas.` },
      { id: 'E', type: 'text', value: `protocooperação com microrganismos fixadores de 
nitrogênio.` },
    ],
    correct: 'D',
    explanation: `Animais obtêm moléculas orgânicas nitrogenadas (aminoácidos e bases nitrogenadas) através da alimentação.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 62,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Em um experimento, colocou-se água até a metade 
da capacidade de um frasco de vidro e, em seguida, 
adicionaram-se três gotas de solução alcoólica de 
fenolftaleína. 
Adicionou-se 
bicarbonato 
de 
sódio 
comercial, em pequenas quantidades, até que a solução 
se tornasse rosa. Dentro do frasco, acendeu-se um 
palito de fósforo, o qual foi apagado assim que a 
cabeça terminou de queimar. Imediatamente, o frasco 
foi tampado. Em seguida, agitou-se o frasco tampado e 
observou-se o desaparecimento da cor rosa. 
MATEUS, A. L. Química na cabeça . Belo Horizonte: UFMG, 2001 (adaptado). 
A explicação para o desaparecimento da cor rosa é que, 
com a combustão do palito de fósforo, ocorreu o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `formação de óxidos de caráter ácido.` },
      { id: 'B', type: 'text', value: `evaporação do indicador fenolftaleína.` },
      { id: 'C', type: 'text', value: `vaporização de parte da água do frasco.` },
      { id: 'D', type: 'text', value: `vaporização dos gases de caráter alcalino.` },
      { id: 'E', type: 'text', value: `aumento do pH da solução no interior do frasco.` },
    ],
    correct: 'A',
    explanation: `A fenolftaleína assume coloração rosa em meio básico e torna-se incolor em meio neutro ou ácido. No início do experimento, a adição de bicarbonato de sódio tornou o meio básico, pois sua hidrólise gerou íons hidroxila em solução (coloração rosa). A queima do palito de fósforo (celulose) gerou CO 2 (óxido ácido) e água. O dióxido de carbono formou, em água, ácido carbônico, neutralizando o meio básico anteriormente produzido. Este procedimento fez a coloração rosa da fenolftaleína desaparecer.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 63,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Uma pessoa abre sua geladeira, verifica o que 
há dentro e depois fecha a porta dessa geladeira. 
Em seguida, ela tenta abrir a geladeira novamente, mas 
só consegue fazer isso depois de exercer uma força mais 
intensa do que a habitual. 
A dificuldade extra para reabrir a geladeira ocorre 
porque o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `volume de ar dentro da geladeira diminuiu.` },
      { id: 'B', type: 'text', value: `motor da geladeira está funcionando com potência 
máxima.` },
      { id: 'C', type: 'text', value: `força exercida pelo ímã fixado na porta da geladeira 
aumenta.` },
      { id: 'D', type: 'text', value: `pressão no interior da geladeira está abaixo da 
pressão externa.` },
      { id: 'E', type: 'text', value: `temperatura no interior da geladeira é inferior ao valor 
existente antes de ela ser aberta.` },
    ],
    correct: 'D',
    explanation: `Dentro da geladeira, o ar confinado é resfriado a volume constante, logo, ocorrerá uma redução na pressão. Com essa redução, a diferença entre a pressão leva que a pessoa, para abrir a geladeira, tenha que fazer uma força resultante capaz de vencer essa diferença.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 64,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Uma análise criteriosa do desempenho de Usain 
Bolt na quebra do recorde mundial dos 100 metros rasos 
mostrou que, apesar de ser o último dos corredores 
a reagir ao tiro e iniciar a corrida, seus primeiros 
30 metros foram os mais velozes já feitos em um recorde 
mundial, cruzando essa marca em 3,78 segundos. Até se 
colocar com o corpo reto, foram 13 passadas, mostrando 
sua potência durante a aceleração, o momento mais 
importante da corrida. Ao final desse percurso, Bolt havia 
atingido a velocidade máxima de 12 m/s. 
Disponível em: http://esporte.uol.com.br. Acesso em: 5 ago. 2012 (adaptado). 
Supondo que a massa desse corredor seja igual a 90 kg, 
o trabalho total realizado nas 13 primeiras passadas é 
mais próximo de:`,
    alternatives: [
      { id: 'A', type: 'text', value: `5,4× 10² J.` },
      { id: 'B', type: 'text', value: `6,5× 10³ J.` },
      { id: 'C', type: 'text', value: `8,6× 10³ J.` },
      { id: 'D', type: 'text', value: `1,3× 10⁴ J.` },
      { id: 'E', type: 'text', value: `3,2× 10⁴ J.` },
    ],
    correct: 'B',
    explanation: `Esta é relativamente fácil e basta que lembremos do teorema trabalho-energia. W = mv²/2 &#8211; mv0²/2 W = 90.12²/2 = 6480 J W = 6,5 x 10³ J`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 65,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Uma garrafa térmica tem como função evitar a
troca de calor entre o líquido nela contido e o ambiente,
mantendo a temperatura de seu conteúdo constante.
Uma forma de orientar os consumidores na compra de
uma garrafa térmica seria criar um selo de qualidade,
como se faz atualmente para informar o consumo de
energia de eletrodomésticos. O selo identificaria cinco
categorias e informaria a variação de temperatura do
conteúdo da garrafa, depois de decorridas seis horas de
seu fechamento, por meio de uma porcentagem do valor
inicial da temperatura de equilíbrio do líquido na garrafa.
O quadro apresenta as categorias e os intervalos de
variação percentual da temperatura.
Tipo de selo — Variação de temperatura
A — menor que 10%
B — entre 10% e 25%
C — entre 25% e 40%
D — entre 40% e 55%
E — maior que 55%
Para atribuir uma categoria a um modelo de garrafa
térmica, são preparadas e misturadas, em uma garrafa,
duas amostras de água, uma a 10 °C e outra a 40 °C,
na proporção de um terço de água fria para dois terços
de água quente. A garrafa é fechada. Seis horas depois,
abre-se a garrafa e mede-se a temperatura da água,
obtendo-se 16 °C.
Qual selo deveria ser posto na garrafa térmica testada?`,
    images: ['/enem/2015/images/enem_2015_d1_q65.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },

    ],
    correct: 'D',
    explanation: `O primeiro passo é calcular a temperatura de equilíbrio: Qrecebido + Qcedido=0 mfria . c . (Tf-Tif) + mquente . c . (Tf-Tiq) = 0 mfria . c . (Tf-10) + 2mfrio . c . (Tf-40) = 0 (a relação entre as massas é 2mquente para 1mfria) Tf-10+2Tf &#8211; 80 = 0 3Tf &#8211; 90 = 0 Tf = 30 ºC Assim, depois de 6h, a temperatura variou de 30ºC para 16ºC, ou seja, 14ºC &#8211; uma variação de aproximadamente 50%.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 66,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A cariotipagem é um método que analisa células de 
um indivíduo para determinar seu padrão cromossômico. 
Essa técnica consiste na montagem fotográfica, em 
sequência, dos pares de cromossomos e permite identificar 
um indivíduo normal (46, XX ou 46, XY) ou com alguma 
alteração cromossômica. A investigação do cariótipo 
de uma criança do sexo masculino com alterações 
morfológicas e comprometimento cognitivo verificou que 
ela apresentava fórmula cariotípica 47, XY, +18. 
A alteração cromossômica da criança pode ser 
classificada como`,
    alternatives: [
      { id: 'A', type: 'text', value: `estrutural, do tipo deleção.` },
      { id: 'B', type: 'text', value: `numérica, do tipo euploidia.` },
      { id: 'C', type: 'text', value: `numérica, do tipo poliploidia.` },
      { id: 'D', type: 'text', value: `estrutural, do tipo duplicação.` },
      { id: 'E', type: 'text', value: `numérica, do tipo aneuploidia.` },
    ],
    correct: 'E',
    explanation: `Indivíduos que possuem alguns cromossomos a mais ou a menos possuem aneuploidias. A mutação numérica em questão determinou a presença de um cromossomo 18 a mais.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 67,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Durante uma expedição, um grupo de estudantes 
perdeu-se de seu guia. Ao longo do dia em que esse 
grupo estava perdido, sem água e debaixo de sol, os 
estudantes passaram a sentir cada vez mais sede. 
Consequentemente, o sistema excretor desses indivíduos 
teve um acréscimo em um dos seus processos funcionais. 
Nessa situação o sistema excretor dos estudantes`,
    alternatives: [
      { id: 'A', type: 'text', value: `aumentou a filtração glomerular.` },
      { id: 'B', type: 'text', value: `produziu maior volume de urina.` },
      { id: 'C', type: 'text', value: `produziu urina com menos ureia.` },
      { id: 'D', type: 'text', value: `produziu urina com maior concentração de sais.` },
      { id: 'E', type: 'text', value: `reduziu a reabsorção de glicose e aminoácidos.` },
    ],
    correct: 'D',
    explanation: `Em situação de desidratação, ocorre maior produção de ADH, o que aumenta a reabsorção de água nos rins (néfrons) e, consequentemente, a produção de urina mais concentrada.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 68,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Um estudante, precisando instalar um computador, 
um monitor e uma lâmpada em seu quarto, verificou 
que precisaria fazer a instalação de duas tomadas e 
um interruptor na rede elétrica. Decidiu esboçar com 
antecedência o esquema elétrico. 
“O circuito deve ser tal que as tomadas e a lâmpada 
devem estar submetidas à tensão nominal da rede elétrica 
e a lâmpada deve poder ser ligada ou desligada por um 
interruptor sem afetar os outros dispositivos” - pensou. 
Símbolos adotados: 
Lâmpada: 
Tomada: 
Interruptor: 
Qual dos circuitos esboçados atende às exigências?`,
    images: ['/enem/2015/images/enem_2015_d1_q68.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'E',
    explanation: `Para que as tomadas e lâmpada tenham a mesma tensão, elas precisam ser ligadas em paralelo à rede elétrica. Por último, para a chave só desligar a lâmpada, elas precisam estar associadas em série uma com a outra (e em paralelo com as tomadas).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 69,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Normalmente, as células do organismo humano 
realizam a respiração aeróbica, na qual o consumo de uma 
molécula de glicose gera 38 moléculas de ATP. Contudo, 
em condições anaeróbicas, o consumo de uma molécula 
de glicose pelas células é capaz de gerar apenas duas 
moléculas de ATP. 
1 
2 
3 
40 
(unidades arbitrárias)
Consumo de glicose
4 
20 
5 
0 
28 
35 
42 
7 
14 
21 
Concentração de oxigênio 
(unidades arbitrárias) 
Qual curva representa o perfil de consumo de glicose, 
para manutenção da homeostase de uma célula que 
inicialmente está em uma condição anaeróbica e é 
submetida a um aumento gradual da concentração 
de oxigênio?`,
    images: ['/enem/2015/images/enem_2015_d1_q69.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1` },
      { id: 'B', type: 'text', value: `2` },
      { id: 'C', type: 'text', value: `3` },
      { id: 'D', type: 'text', value: `4` },
      { id: 'E', type: 'text', value: `5` },
    ],
    correct: 'E',
    explanation: `O metabolismo aeróbico, por possuir maior rendimento energético do que o fermentativo (anaeróbico), permite menor consumo de glicose para a geração de uma mesma quantidade de ATP.`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 70,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Um garoto foi à loja comprar um estilingue e 
encontrou dois modelos: um com borracha mais “dura” 
e outro com borracha mais “mole”. O garoto concluiu 
que o mais adequado seria o que proporcionasse maior 
alcance horizontal, D , para as mesmas condições de 
arremesso, quando submetidos à mesma força aplicada. 
Sabe-se que a constante elástica k_d (do estilingue mais
“duro”) é o dobro da constante elástica k_m (do estilingue
mais “mole”).
A razão entre os alcances D_d/D_m, referentes aos estilingues
com borrachas “dura” e “mole”, respectivamente, é igual a`,
    alternatives: [
      { id: 'A', type: 'text', value: `1/4.` },
      { id: 'B', type: 'text', value: `1/2.` },
      { id: 'C', type: 'text', value: `1.` },
      { id: 'D', type: 'text', value: `2.` },
      { id: 'E', type: 'text', value: `4.` },
    ],
    correct: 'B',
    explanation: `A deformação sofrida pela borracha do estilingue é x = F/k. Da conservação da energia mecânica para sistemas isolados, temos que a velocidade de lançamento do objeto de massa m será kx²/2 = mv²/2 v² = F²/mk Admitindo que os objetos sejam lançados obliquamente em relação a um plano horizontal, temos que D = v²sen2θ/g, onde D é o alcance do objeto. Simplificando as equações, temos então D d / D m = k m / k d = 1/2.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 71,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Vários ácidos são utilizados em indústrias que 
descartam seus efluentes nos corpos d’água, como 
rios e lagos, podendo afetar o equilíbrio ambiental. 
Para neutralizar a acidez, o sal carbonato de 
cálcio pode ser adicionado ao efluente, em 
quantidades apropriadas, pois produz bicarbonato, 
que neutraliza a água. As equações envolvidas no
processo são apresentadas:
(I) CaCO₃(s) + CO₂(g) + H₂O(l) ⇌ Ca²⁺(aq) + 2 HCO₃⁻(aq)
Com base nos valores das constantes de equilíbrio das
reações II, III e IV a 25 °C, qual é o valor numérico da 
constante de equilíbrio da reação I?`,
    images: ['/enem/2015/images/enem_2015_d1_q71.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `4,5 × 10⁻²⁶` },
      { id: 'B', type: 'text', value: `5,0 × 10⁻⁵` },
      { id: 'C', type: 'text', value: `0,8 × 10⁻⁹` },
      { id: 'D', type: 'text', value: `0,2 × 10⁵` },
      { id: 'E', type: 'text', value: `2,2 × 10²⁶` },
    ],
    correct: 'B',
    explanation: `Visando chegar na reação (I), inverte-se a reação (II) e mantém as reações (III) e (IV). Somando tais reações e lembrando que as constantes precisam ser multiplicadas, chegamos a: K = K₂ . K3K1 K = 5,0.10 -5`,
    subject: ['qui'],
    topics: ['Química Ambiental', 'Questões aleatórias'],
  },
  {
    id: 72,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Tanto a febre amarela quanto a dengue são doenças 
causadas por vírus do grupo dos arbovírus, pertencentes 
ao gênero Flavivirus , existindo quatro sorotipos para 
o vírus causador da dengue. A transmissão de ambas 
acontece por meio da picada de mosquitos, como o 
Aedes aegypti . Entretanto, embora compartilhem essas 
características, hoje somente existe vacina, no Brasil, para 
a febre amarela e nenhuma vacina efetiva para a dengue. 
MINISTÉRIO DA SAÚDE. Fundação Nacional de Saúde. Dengue : Instruções para pessoal de 
combate ao vetor. Manual de Normas Técnicas. Disponível em: http://portal.saude.gov.br. 
Acesso em: 7 ago. 2012 (adaptado). 
Esse fato pode ser atribuído à`,
    alternatives: [
      { id: 'A', type: 'text', value: `maior taxa de mutação do vírus da febre amarela do 
que do vírus da dengue.` },
      { id: 'B', type: 'text', value: `alta variabilidade antigênica do vírus da dengue em 
relação ao vírus da febre amarela.` },
      { id: 'C', type: 'text', value: `menor adaptação do vírus da dengue à população 
humana do que do vírus da febre amarela.` },
      { id: 'D', type: 'text', value: `presença de dois tipos de ácidos nucleicos no vírus da 
dengue e somente um tipo no vírus da febre amarela.` },
      { id: 'E', type: 'text', value: `baixa capacidade de indução da resposta imunológica 
pelo vírus da dengue em relação ao da febre amarela.` },
    ],
    correct: 'B',
    explanation: `As diferentes linhagens do vírus da dengue, bem como sua variedade de antígenos, dificulta o desenvolvimento de vacinas com imunização de largo espectro.`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 73,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A bomba 
reduz neutros e neutrinos, e abana-se com o leque da 
reação em cadeia 
ANDRADE, C. D. Poesia completa e prosa . Rio de Janeiro: Aguilar, 1973 (fragmento). 
Nesse fragmento de poema, o autor refere-se à bomba 
atômica de urânio. Essa reação é dita “em cadeia” porque na`,
    alternatives: [
      { id: 'A', type: 'text', value: `fissão do ²³⁵U ocorre liberação de grande quantidade 
de calor, que dá continuidade à reação.` },
      { id: 'B', type: 'text', value: `fissão de ²³⁵U ocorre liberação de energia, que vai 
desintegrando o isótopo ²³⁸U, enriquecendo-o em 
mais ²³⁵U.` },
      { id: 'C', type: 'text', value: `fissão do ²³⁵U ocorre uma liberação de nêutrons, que 
bombardearão outros núcleos.` },
      { id: 'D', type: 'text', value: `fusão do ²³⁵U com ²³⁸U ocorre formação de neutrino, 
que bombardeará outros núcleos radioativos.` },
      { id: 'E', type: 'text', value: `fusão do ²³⁵U com ²³⁸U ocorre formação de
outros elementos radioativos mais pesados, que
desencadeiam novos processos de fusão.` },
    ],
    correct: 'C',
    explanation: `A reação que ocorre na bomba atômica é de fissão nuclear (quebra de núcleos maiores e produção de núcleos menores). A reação que ocorre nela é: 92 U 235 + 0 n 1 → 56 Ba 141 + 36 Kr 92 + 3 0 n 1 Percebemos que a reação inicia com o bombardeamento do urânio por um nêutron e posterior produção de outros três nêutrons. Estes atingem mais 3 urânio gerando 9 nêutrons e assim sucessivamente, produzindo uma reação em cadeia.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 74,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A palavra “biotecnologia” surgiu no século XX, 
quando o cientista Herbert Boyer introduziu a informação 
responsável pela fabricação da insulina humana em uma 
bactéria, para que ela passasse a produzir a substância. 
Disponível em: www.brasil.gov.br. Acesso em: 28 jul. 2012 (adaptado). 
As bactérias modificadas por Herbert Boyer passaram a 
produzir insulina humana porque receberam`,
    alternatives: [
      { id: 'A', type: 'text', value: `a sequência de DNA codificante de insulina humana.` },
      { id: 'B', type: 'text', value: `a proteína sintetizada por células humanas.` },
      { id: 'C', type: 'text', value: `um RNA recombinante de insulina humana.` },
      { id: 'D', type: 'text', value: `o RNA mensageiro de insulina humana.` },
      { id: 'E', type: 'text', value: `um cromossomo da espécie humana.` },
    ],
    correct: 'A',
    explanation: `A transgenia baseia-se na transferência de genes (DNA) de uma espécie à outra através da engenharia genética.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 75,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Será que uma miragem ajudou a afundar o Titanic? 
O fenômeno ótico conhecido como Fata Morgana 
pode fazer com que uma falsa parede de água 
apareça sobre o horizonte molhado. Quando as 
condições são favoráveis, a luz refletida pela água fria 
pode ser desviada por uma camada incomum de ar 
quente acima, chegando até o observador, vinda de 
muitos ângulos diferentes. De acordo com estudos de 
pesquisadores da Universidade de San Diego, uma Fata 
Morgana pode ter obscurecido os icebergs da visão da 
tripulação que estava a bordo do Titanic. Dessa forma, a 
certa distância, o horizonte verdadeiro fica encoberto por 
uma névoa escurecida, que se parece muito com águas 
calmas no escuro. 
Disponível em: http://apod.nasa.gov. Acesso em: 6 set. 2012 (adaptado). 
O fenômeno ótico que, segundo os pesquisadores, 
provoca a Fata Morgana é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `ressonância.` },
      { id: 'B', type: 'text', value: `refração.` },
      { id: 'C', type: 'text', value: `difração.` },
      { id: 'D', type: 'text', value: `reflexão.` },
      { id: 'E', type: 'text', value: `difusão.` },
    ],
    correct: 'B',
    explanation: `A diferença de temperatura entre as camadas de ar frio e quente altera o índice de refração do ar, logo, a luz refletida pela água fria sofre sucessivas refrações, sendo gradualmente desviada nas camadas superiores de ar quente. Assim, ainda que a reflexão da luz faça parte do fenômeno final, a refração é o fenômeno ótico preponderante que provoca a Fata Morgana.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 76,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Para proteger estruturas de aço da corrosão, a 
indústria utiliza uma técnica chamada galvanização. 
Um metal bastante utilizado nesse processo é o zinco, 
que pode ser obtido a partir de um minério denominado 
esfalerita (ZnS), de pureza 75%. Considere que a 
conversão do minério em zinco metálico tem rendimento 
de 80% nesta sequência de equações químicas: 
2 ZnS + 3 O₂ → 2 ZnO + 2 SO₂
ZnO + CO → Zn + CO₂
Considere as massas molares: ZnS (97 g/mol); O₂ (32 g/mol);
ZnO (81 g/mol); SO₂ (64 g/mol); CO (28 g/mol); CO₂ (44 g/mol);
e Zn (65 g/mol). 
Que valor mais próximo de massa de zinco metálico, 
em quilogramas, será produzido a partir de 100 kg de 
esfalerita?`,
    alternatives: [
      { id: 'A', type: 'text', value: `25` },
      { id: 'B', type: 'text', value: `33` },
      { id: 'C', type: 'text', value: `40` },
      { id: 'D', type: 'text', value: `50` },
      { id: 'E', type: 'text', value: `54` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 77,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Hidrocarbonetos podem ser obtidos em laboratório 
por 
descarboxilação 
oxidativa 
anódica, 
processo 
conhecido como eletrossíntese de Kolbe. Essa reação 
é utilizada na síntese de hidrocarbonetos diversos, a 
partir de óleos vegetais, os quais podem ser empregados 
como fontes alternativas de energia, em substituição 
aos 
hidrocarbonetos 
fósseis. 
O 
esquema 
ilustra 
simplificadamente esse processo. 
eletrólise 
OH 
2 
+ 
2 CO₂ 
KOH 
metanol 
O 
AZEVEDO, D. C.; GOULART, M. O. F. Estereosseletividade em reações eletródicas. 
Química Nova , n. 2, 1997 (adaptado). 
Com base nesse processo, o hidrocarboneto produzido 
na eletrólise do ácido 3,3-dimetil-butanoico é o`,
    images: ['/enem/2015/images/enem_2015_d1_q77.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `2,2,7,7-tetrametil-octano.` },
      { id: 'B', type: 'text', value: `3,3,4,4-tetrametil-hexano.` },
      { id: 'C', type: 'text', value: `2,2,5,5-tetrametil-hexano.` },
      { id: 'D', type: 'text', value: `3,3,6,6-tetrametil-octano.` },
      { id: 'E', type: 'text', value: `2,2,4,4-tetrametil-hexano.` },
    ],
    correct: 'C',
    explanation: ``,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 78,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A definição de queimadura é bem ampla, porém, 
basicamente, é a lesão causada pela ação direta ou 
indireta produzida pela transferência de calor para o 
corpo. A sua manifestação varia desde bolhas (flictenas) 
até formas mais graves, capazes de desencadear 
respostas sistêmicas proporcionais à gravidade da lesão 
e sua respectiva extensão. Muitas vezes, os primeiros 
socorros prestados à vítima, ao invés de ajudar, acabam 
agravando ainda mais a situação do paciente. 
Disponível em: www.bombeiros-bm.rs.gov.br. Acesso em: 28 fev. 2012 (adaptado). 
Ao se deparar com um indivíduo que sofreu queimadura 
com formação de flictena, o procedimento de primeiros 
socorros que deve ser realizado antes de encaminhar o 
paciente ao hospital é`,
    alternatives: [
      { id: 'A', type: 'text', value: `colocar gelo sobre a flictena para amenizar o ardor.` },
      { id: 'B', type: 'text', value: `utilizar manteiga para evitar o rompimento da flictena.` },
      { id: 'C', type: 'text', value: `passar creme dental para diminuir a ardência da 
flictena.` },
      { id: 'D', type: 'text', value: `perfurar a flictena para que a água acumulada seja 
liberada.` },
      { id: 'E', type: 'text', value: `cobrir a flictena com gazes molhadas para evitar a 
desidratação.` },
    ],
    correct: 'E',
    explanation: `Queimaduras nunca devem ser tratadas com manteiga, pasta de dente ou algo afim. Elas devem sempre ser umedecidas com gaze ou pano, evitando assim o ressecamento da região.`,
    subject: ['fis'],
    topics: ['Termologia', 'Questões aleatórias'],
  },
  {
    id: 79,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `As altas temperaturas de combustão e o atrito 
entre suas peças móveis são alguns dos fatores que 
provocam o aquecimento dos motores à combustão 
interna. Para evitar o superaquecimento e consequentes 
danos a esses motores, foram desenvolvidos os atuais 
sistemas de refrigeração, em que um fluido arrefecedor 
com propriedades especiais circula pelo interior do motor, 
absorvendo o calor que, ao passar pelo radiador, é 
transferido para a atmosfera. 
Qual propriedade o fluido arrefecedor deve possuir para 
cumprir seu objetivo com maior eficiência?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Alto calor específico.` },
      { id: 'B', type: 'text', value: `Alto calor latente de fusão.` },
      { id: 'C', type: 'text', value: `Baixa condutividade térmica.` },
      { id: 'D', type: 'text', value: `Baixa temperatura de ebulição.` },
      { id: 'E', type: 'text', value: `Alto coeficiente de dilatação térmica.` },
    ],
    correct: 'A',
    explanation: `Para que o líquido arrefecedor cumpra o seu objetivo de maneira mais eficaz é necessário que ele possua um alto calor específico. Assim, o líquido pode absorver uma grande quantidade de calor e variar pouco a sua temperatura. Essa característica evita o risco de ebulição dentro do motor.`,
    subject: ['fis'],
    topics: ['Leis de Newton', 'Questões aleatórias'],
  },
  {
    id: 80,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Pesticidas são substâncias utilizadas para promover 
o controle de pragas. No entanto, após sua aplicação em 
ambientes abertos, alguns pesticidas organoclorados 
são arrastados pela água até lagos e rios e, ao passar 
pelas guelras dos peixes, podem difundir-se para seus 
tecidos lipídicos e lá se acumularem. 
A característica desses compostos, responsável pelo 
processo descrito no texto, é o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `baixa polaridade.` },
      { id: 'B', type: 'text', value: `baixa massa molecular.` },
      { id: 'C', type: 'text', value: `ocorrência de halogênios.` },
      { id: 'D', type: 'text', value: `tamanho pequeno das moléculas.` },
      { id: 'E', type: 'text', value: `presença de hidroxilas nas cadeias.` },
    ],
    correct: 'A',
    explanation: `A problemática em questão aborda a acumulação de organoclorados em tecidos lipídicos nos peixes. Estes compostos orgânicos apresentam uma polaridade baixa, o que justifica seu acúmulo nos tecidos lipídicos (apolares).`,
    subject: ['bio'],
    topics: ['Histologia básica (tecidos – leitura de figura)', 'Questões aleatórias'],
  },
  {
    id: 81,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A calda bordalesa é uma alternativa empregada 
no combate a doenças que afetam folhas de plantas. 
Sua produção consiste na mistura de uma solução 
aquosa de sulfato de cobre(II), CuSO 4 , com óxido de 
cálcio, CaO, e sua aplicação só deve ser realizada se 
estiver levemente básica. A avaliação rudimentar da 
basicidade dessa solução é realizada pela adição de 
três gotas sobre uma faca de ferro limpa. Após três 
minutos, caso surja uma mancha avermelhada no 
local da aplicação, afirma-se que a calda bordalesa 
ainda não está com a basicidade necessária. O quadro 
apresenta os valores de potenciais padrão de redução ( E °) 
para algumas semirreações 
Fe 3 + + e − → Fe 2+ 
+ 0,77 
MOTTA, I. S. Calda bordalesa : utilidades e preparo. Dourados: Embrapa, 2008 (adaptado). 
A equação química que representa a reação de formação 
da mancha avermelhada é:`,
    images: ['/enem/2015/images/enem_2015_d1_q81.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Ca 2 + (aq) + 2 Cu + (aq) → Ca (s) + 2 Cu 2 + (aq).` },
      { id: 'B', type: 'text', value: `Ca 2 + (aq) + 2 Fe 2 + (aq) → Ca (s) + 2 Fe 3 + (aq).` },
      { id: 'C', type: 'text', value: `Cu 2 + (aq) + 2 Fe 2 + (aq) → Cu (s) + 2 Fe 3 + (aq).` },
      { id: 'D', type: 'text', value: `3 Ca 2 + (aq) + 2 Fe (s) → 3 Ca (s) + 2 Fe 3 + (aq).` },
      { id: 'E', type: 'text', value: `3 Cu 2 + (aq) + 2 Fe (s) → 3 Cu (s) + 2 Fe 3 + (aq).` },
    ],
    correct: 'E',
    explanation: `A reação ocorre numa faca de ferro (contém ferro metálico em sua composição) com CuSO4 (solução com Cu +2 ) e CaO (Ca +2 presente). A pilha gerada oxida o ferro metálico e reduz o cobre II (já que o cálcio produziria um processo eletroquímico com ddp negativa &#8211; não espontâneo), logo: 3 Cu 2+ (aq) + 2 Fe (s) → 3 Cu (s) + 2 Fe 3+ (aq)`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 82,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Em um experimento, um professor levou para a 
sala de aula um saco de arroz, um pedaço de madeira 
triangular e uma barra de ferro cilíndrica e homogênea. 
Ele propôs que fizessem a medição da massa da barra 
utilizando esses objetos. Para isso, os alunos fizeram 
marcações na barra, dividindo-a em oito partes iguais, e 
em seguida apoiaram-na sobre a base triangular, com o 
saco de arroz pendurado em uma de suas extremidades, 
até atingir a situação de equilíbrio. 
Arroz 
5,00 kg 
Nessa situação, qual foi a massa da barra obtida pelos 
alunos?`,
    images: ['/enem/2015/images/enem_2015_d1_q82.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `3,00 kg` },
      { id: 'B', type: 'text', value: `3,75 kg` },
      { id: 'C', type: 'text', value: `5,00 kg` },
      { id: 'D', type: 'text', value: `6,00 kg` },
      { id: 'E', type: 'text', value: `15,00 kg` },
    ],
    correct: 'E',
    explanation: `Quando falamos agora em dinâmica, o primeiro passo é desenhar as forças que a barra sofre. Entendendo que: a tração que a corda puxando o arroz exerce sobre a barra de ferro é igual ao peso do arroz. Podemos, a partir daí, desenhar as forças do problema que irão entrar em equilíbrio pelo fato de a barra não rodar e nem se mover. Somatório F = 0 Somatório M = 0 Lembrando que M = F.d P arroz . d arroz &#8211; P cm . d cm = 0 5 . g . 3 = M cm . g . 1 M cm =15 Kg`,
    subject: ['bio'],
    topics: ['Zoologia', 'Questões aleatórias'],
  },
  {
    id: 83,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Os anfíbios representam o primeiro grupo de 
vertebrados que, evolutivamente, conquistou o ambiente 
terrestre. Apesar disso, a sobrevivência do grupo ainda 
permanece restrita a ambientes úmidos ou aquáticos, 
devido à manutenção de algumas características 
fisiológicas relacionadas à água. 
Uma das características a que o texto se refere é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `reprodução por viviparidade.` },
      { id: 'B', type: 'text', value: `respiração pulmonar nos adultos.` },
      { id: 'C', type: 'text', value: `regulação térmica por endotermia.` },
      { id: 'D', type: 'text', value: `cobertura corporal delgada e altamente permeável.` },
      { id: 'E', type: 'text', value: `locomoção por membros anteriores e posteriores 
desenvolvidos.` },
    ],
    correct: 'D',
    explanation: `A questão pede adaptação fisiológica. Por isso, o único item possível é o tegumento delgado (fino) e muito permeável, característica que acarreta grande perda de água.`,
    subject: ['bio'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 84,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `O aproveitamento de resíduos florestais vem se 
tornando cada dia mais atrativo, pois eles são uma fonte 
renovável de energia. A figura representa a queima de 
um bio-óleo extraído do resíduo de madeira, sendo ∆H 1 
a variação de entalpia devido à queima de 1 g desse 
bio-óleo, resultando em gás carbônico e água líquida, e 
∆H 2 a variação de entalpia envolvida na conversão de 1 g 
de água no estado gasoso para o estado líquido. 
Energia 
Bio-óleo + O (g) 
2 
H = 18,8 kJ/g 
1 
CO (g) 
H O (g) 
+ 
2 
2 
H = 2,4 kJ/g 
2 
CO (g) 
H O ( ) ℓ 
+ 
2 
2 
A variação de entalpia, em kJ, para a queima de 5 g desse 
bio-óleo resultando em CO 2 (gasoso) e H 2 O (gasoso) é:`,
    images: ['/enem/2015/images/enem_2015_d1_q84.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `− 106.` },
      { id: 'B', type: 'text', value: `− 94,0.` },
      { id: 'C', type: 'text', value: `− 82,0.` },
      { id: 'D', type: 'text', value: `− 21,2.` },
      { id: 'E', type: 'text', value: `− 16,4.` },
    ],
    correct: 'C',
    explanation: `Energia liberada 18,8 kJ &#8212; 1 g X kJ &#8212; 5 g X = 94 kJ Energia absorvida: 2,4 kJ &#8212; 1 g Y kJ &#8212; 5 g Y = 12 kJ Energia total = &#8211; 94 +12 = &#8211; 82 kJ`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 85,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Entre os anos de 1028 e 1038, Alhazen (Ibn al-Haytham; 
965-1040 d.C.) escreveu sua principal obra, o Livro da 
Óptica , que, com base em experimentos, explicava o 
funcionamento da visão e outros aspectos da ótica, por 
exemplo, o funcionamento da câmara escura. O livro foi 
traduzido e incorporado aos conhecimentos científicos 
ocidentais pelos europeus. Na figura, retirada dessa obra, 
é representada a imagem invertida de edificações em um 
tecido utilizado como anteparo. 
ZEWAIL, A. H. Micrographia of the twenty-first century: from camera obscura to 4D microscopy. 
Philosophical Transactions of the Royal Society A , v. 368, 2010 (adaptado). 
Se fizermos uma analogia entre a ilustração e o olho 
humano, o tecido corresponde ao(à)`,
    images: ['/enem/2015/images/enem_2015_d1_q85.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `íris.` },
      { id: 'B', type: 'text', value: `retina.` },
      { id: 'C', type: 'text', value: `pupila.` },
      { id: 'D', type: 'text', value: `córnea.` },
      { id: 'E', type: 'text', value: `cristalino.` },
    ],
    correct: 'B',
    explanation: `A retina é a região na qual a luz projetada pelo cristalino é captada por células fotorreceptoras (cones e bastonetes).`,
    subject: ['bio'],
    topics: ['Histologia básica (tecidos – leitura de figura)', 'Questões aleatórias'],
  },
  {
    id: 86,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Ao ouvir uma flauta e um piano emitindo a mesma 
nota musical, consegue-se diferenciar esses instrumentos 
um do outro. 
Essa diferenciação se deve principalmente ao(à)`,
    alternatives: [
      { id: 'A', type: 'text', value: `intensidade sonora do som de cada instrumento 
musical.` },
      { id: 'B', type: 'text', value: `potência sonora do som emitido pelos diferentes 
instrumentos musicais.` },
      { id: 'C', type: 'text', value: `diferente velocidade de propagação do som emitido 
por cada instrumento musical.` },
      { id: 'D', type: 'text', value: `timbre do som, que faz com que os formatos das 
ondas de cada instrumento sejam diferentes.` },
      { id: 'E', type: 'text', value: `altura do som, que possui diferentes frequências para 
diferentes instrumentos musicais.` },
    ],
    correct: 'D',
    explanation: `Como os dois instrumentos estão emitindo a mesma nota, podemos afirmar que o som tem a mesma frequência. Assim, a característica que diferencia o som de uma flauta e de um piano é o formato da onda, tecnicamente chamado de timbre do som.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 87,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `O formato das células de organismos pluricelulares é 
extremamente variado. Existem células discoides, como 
é o caso das hemácias, as que lembram uma estrela, 
como os neurônios, e ainda algumas alongadas, como as 
musculares. 
Em um mesmo organismo, a diferenciação dessas células 
ocorre por`,
    alternatives: [
      { id: 'A', type: 'text', value: `produzirem mutações específicas.` },
      { id: 'B', type: 'text', value: `possuírem DNA mitocondrial diferentes.` },
      { id: 'C', type: 'text', value: `apresentarem conjunto de genes distintos.` },
      { id: 'D', type: 'text', value: `expressarem porções distintas do genoma.` },
      { id: 'E', type: 'text', value: `terem um número distinto de cromossomos.` },
    ],
    correct: 'D',
    explanation: `A diferenciação celular ocorre pela expressão diferenciada do DNA e, consequentemente, produção de diferentes RNAm e proteínas.`,
    subject: ['bio'],
    topics: ['Histologia básica (tecidos – leitura de figura)', 'Questões aleatórias'],
  },
  {
    id: 88,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Para obter a posição de um telefone celular, a polícia 
baseia-se em informações do tempo de resposta do 
aparelho em relação às torres de celular da região de 
onde se originou a ligação. Em uma região, um aparelho 
está na área de cobertura de cinco torres, conforme o 
esquema. 
Considerando que as torres e o celular são puntiformes e 
que estão sobre um mesmo plano, qual o número mínimo 
de torres necessárias para se localizar a posição do 
telefone celular que originou a ligação?`,
    images: ['/enem/2015/images/enem_2015_d1_q88.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Uma.` },
      { id: 'B', type: 'text', value: `Duas.` },
      { id: 'C', type: 'text', value: `Três.` },
      { id: 'D', type: 'text', value: `Quatro.` },
      { id: 'E', type: 'text', value: `Cinco.` },
    ],
    correct: 'C',
    explanation: `Se usarmos apenas uma torre puntiforme, o conjunto de pontos localizados na mesma distância da mesma (ou seja, com mesmo tempo de resposta) formaria uma circunferência, tornando impossível localizar o celular. Ao usarmos duas torres temos um problema semelhante, em que o mesmo tempo de resposta de 2 torres geraria 2 pontos possíveis. A única maneira de definirmos com precisão a posição do celular é ao “triangularmos” tempos de respostas em 3 torres diferentes.`,
    subject: ['fis'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 89,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `Euphorbia milii é uma planta ornamental amplamente disseminada no Brasil e conhecida como coroa-de-cristo. 
O estudo químico do látex dessa espécie forneceu o mais potente produto natural moluscicida, a miliamina L. 
MOREIRA, C. P. S.; ZANI, C. L.; ALVES, T. M. A. Atividade moluscicida do látex de Synadenium carinatum boiss . (Euphorbiaceae) sobre Biomphalaria glabrata 
e isolamento do constituinte majoritário. Revista Eletrônica de Farmácia , n. 3, 2010 (adaptado). 
O uso desse látex em água infestada por hospedeiros intermediários tem potencial para atuar no controle da`,
    alternatives: [
      { id: 'A', type: 'text', value: `dengue.` },
      { id: 'B', type: 'text', value: `malária.` },
      { id: 'C', type: 'text', value: `elefantíase.` },
      { id: 'D', type: 'text', value: `ascaridíase.` },
      { id: 'E', type: 'text', value: `esquistossomose.` },
    ],
    correct: 'E',
    explanation: `A esquistossomose é a única doença dentre as citadas que tem como hospedeiro intermediário o caramujo planorbídeo, um molusco.`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 90,
    exam: 'enem',
    year: 2015,
    day: 1,
    text: `A química verde permite o desenvolvimento tecnológico com danos reduzidos ao meio ambiente, e encontrar rotas 
limpas tem sido um grande desafio. Considere duas rotas diferentes utilizadas para a obtenção de ácido adípico, um 
insumo muito importante para a indústria têxtil e de plastificantes. 
Rota tradicional (marrom) 
OOH 
Cr(III) 
Co 
lavagem cáustica 
180 °C 
+ 
O 
OH 
Rota verde 
+ 
O 
Na₂WO₄, 4 H₂O₂
75 - 90 °C 
OH 
LENARDÃO, E. J. et al. Green chemistry - os 12 princípios da química verde e sua inserção nas atividades de ensino e pesquisa. Química Nova , n. 1, 2003 (adaptado). 
Que fator contribui positivamente para que a segunda rota de síntese seja verde em comparação à primeira?`,
    images: ['/enem/2015/images/enem_2015_d1_q90.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Etapa única na síntese.` },
      { id: 'B', type: 'text', value: `Obtenção do produto puro.` },
      { id: 'C', type: 'text', value: `Ausência de reagentes oxidantes.` },
      { id: 'D', type: 'text', value: `Ausência de elementos metálicos no processo.` },
      { id: 'E', type: 'text', value: `Gasto de energia nulo na separação do produto.` },
    ],
    correct: 'A',
    explanation: `Uma vez que o número total de etapas do processo é diminuída, a quantidade de substâncias nocivas produzidas ao meio ambiente reduz, bem como a quantidade de resíduos gerados. Isso torna o processo mais &#8220;limpo&#8221;.`,
    subject: ['qui'],
    topics: ['Meio ambiente e sustentabilidade', 'Questões aleatórias'],
  },
];

export default ENEM_2015_D1;
