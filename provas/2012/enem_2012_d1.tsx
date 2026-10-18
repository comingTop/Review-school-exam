import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2012_D1: QuizQuestion[] = [
  {
    id: 1,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Charge anônima. BURKE, P. A fabricação do rei. Rio de Janeiro: Zahar, 1994. 
Na França, o rei Luís XIV teve sua imagem fabricada por 
um conjunto de estratégias que visavam sedimentar uma 
determinada noção de soberania. Neste sentido, a charge 
apresentada demonstra`,
    images: ['/enem/2012/images/enem_2012_d1_q1.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a humanidade do rei, pois retrata um homem comum, sem os adornos próprios à vestimenta real.` },
      { id: 'B', type: 'text', value: `a unidade entre o público e o privado, pois a figura do rei com a vestimenta real representa o público e sem a vestimenta real, o privado.` },
      { id: 'C', type: 'text', value: `o vínculo entre monarquia e povo, pois leva ao conhecimento do público a figura de um rei despretensioso e distante do poder político.` },
      { id: 'D', type: 'text', value: `o gosto estético refinado do rei, pois evidencia a elegância dos trajes reais em relação aos de outros membros da corte.` },
      { id: 'E', type: 'text', value: `a importância da vestimenta para a constituição simbólica do rei, pois o corpo político adornado esconde os defeitos do corpo pessoal.` },
    ],
    correct: 'E',
    explanation: `A charge, analisada por Peter Burke em 'A fabricação do rei', mostra como a imagem de Luís XIV era construída por estratégias que sustentavam a ideia de soberania absoluta. A figura central, um homem comum e sem adornos, contrasta com as vestimentas majestosas que o cercam, evidenciando que o traje e os ornamentos eram essenciais para constituir simbolicamente a autoridade real, por isso a alternativa E está correta. A e C erram ao sugerir que a charge humaniza ou aproxima o rei do povo, quando o efeito é o oposto; B força uma divisão entre público e privado que a imagem não estabelece; e D reduz a cena a mera questão de gosto estético, ignorando a função política da aparência.`,
    subject: ['his'],
    topics: ['História Moderna', 'Questões aleatórias'],
  },
  {
    id: 2,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Esclarecimento é a saída do homem de sua 
menoridade, da qual ele próprio é culpado. A menoridade 
é a incapacidade de fazer uso de seu entendimento sem a 
direção de outro indivíduo. O homem é o próprio culpado 
dessa menoridade se a causa dela não se encontra na 
falta de entendimento, mas na falta de decisão e coragem 
de servir-se de si mesmo sem a direção de outrem. Tem 
coragem de fazer uso de teu próprio entendimento, tal é 
o lema do esclarecimento. A preguiça e a covardia são as 
causas pelas quais uma tão grande parte dos homens, 
depois que a natureza de há muito os libertou de uma 
condição estranha, continuem, no entanto, de bom grado 
menores durante toda a vida. 
KANT, I. Resposta à pergunta: o que é esclarecimento? Petrópolis: Vozes, 1985 (adaptado). 
Kant destaca no texto o conceito de Esclarecimento, 
fundamental para a compreensão do contexto filosófico 
da Modernidade. Esclarecimento, no sentido empregado 
por Kant, representa`,
    alternatives: [
      { id: 'A', type: 'text', value: `a reivindicação de autonomia da capacidade racional como expressão da maioridade.` },
      { id: 'B', type: 'text', value: `o exercício da racionalidade como pressuposto menor diante das verdades eternas.` },
      { id: 'C', type: 'text', value: `a imposição de verdades matemáticas, com caráter objetivo, de forma heterônoma.` },
      { id: 'D', type: 'text', value: `a compreensão de verdades religiosas que libertam o homem da falta de entendimento.` },
      { id: 'E', type: 'text', value: `a emancipação da subjetividade humana de ideologias produzidas pela própria razão.` },
    ],
    correct: 'A',
    explanation: `O texto de Kant define o Esclarecimento como a saída do homem de sua menoridade, isto é, da incapacidade de usar o próprio entendimento sem a tutela de outro. Essa superação depende de coragem e decisão para pensar por si mesmo, o que corresponde à reivindicação da autonomia da capacidade racional como expressão da maioridade, por isso a alternativa A está correta. B rebaixa a razão diante de verdades eternas, e C a torna heterônoma e imposta, contrariando a autonomia defendida; D desloca o Esclarecimento para verdades religiosas; e E inverte o sentido kantiano ao falar em libertar-se das ideologias produzidas pela própria razão, quando é justamente o uso autônomo da razão que emancipa.`,
    subject: ['fil'],
    topics: ['Filosofia Moderna (Descartes, Kant, Hume)', 'Questões aleatórias'],
  },
  {
    id: 3,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Texto I 
O que vemos no país é uma espécie de espraiamento 
e a manifestação da agressividade através da violência. 
Isso se desdobra de maneira evidente na criminalidade, 
que está presente em todos os redutos - seja nas áreas 
abandonadas pelo poder público, seja na política ou no 
futebol. O brasileiro não é mais violento do que outros 
povos, mas a fragilidade do exercício e do reconhecimento 
da cidadania e a ausência do Estado em vários territórios 
do país se impõem como um caldo de cultura no qual a 
agressividade e a violência fincam suas raízes. 
Entrevista com Joel Birman. A Corrupção é um crime sem rosto. IstoE . Edição 2099, 3 fev. 2010. 
Texto II 
Nenhuma sociedade pode sobreviver sem canalizar 
as pulsões e emoções do indivíduo, sem um controle 
muito específico de seu comportamento. Nenhum controle 
desse tipo é possível sem que as pessoas anteponham 
limitações umas às outras, e todas as limitações são 
convertidas, na pessoa a quem são impostas, em medo 
de um ou outro tipo. 
ELIAS, N. O Processo Civilizador . Rio de Janeiro: Jorge Zahar, 1993. 
Considerando-se a dinâmica do processo civilizador, tal 
como descrito no Texto II, o argumento do Texto I acerca 
da violência e agressividade na sociedade brasileira 
expressa a`,
    alternatives: [
      { id: 'A', type: 'text', value: `incompatibilidade entre os modos democráticos de convívio social e a presença de aparatos de controle policial.` },
      { id: 'B', type: 'text', value: `manutenção de práticas repressivas herdadas dos períodos ditatoriais sob a forma de leis e atos administrativos.` },
      { id: 'C', type: 'text', value: `inabilidade das forças militares em conter a violência decorrente das ondas migratórias nas grandes cidades brasileiras.` },
      { id: 'D', type: 'text', value: `dificuldade histórica da sociedade brasileira em institucionalizar formas de controle social compatíveis com valores democráticos.` },
      { id: 'E', type: 'text', value: `incapacidade das instituições político-legislativas em formular mecanismos de controle social específicos à realidade social brasileira.` },
    ],
    correct: 'D',
    explanation: `O Texto I associa a violência e a criminalidade no Brasil à fragilidade da cidadania e à ausência do Estado em vários territórios, e o Texto II, de Norbert Elias, lembra que toda sociedade precisa canalizar as pulsões por meio de controles. Lida à luz do processo civilizador, a tese do Texto I expressa a dificuldade histórica da sociedade brasileira de institucionalizar formas de controle social compatíveis com valores democráticos, por isso a alternativa D está correta. A opõe equivocadamente democracia e controle policial; B restringe o problema à herança ditatorial; C o reduz às ondas migratórias; e E limita a falha às instituições político-legislativas, quando o texto aponta uma lacuna mais ampla entre Estado e cidadania.`,
    subject: ['soc'],
    topics: ['Sociologia', 'Cidadania e democracia', 'Questões aleatórias'],
  },
  {
    id: 4,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Disponível em: http://quadro-a-quadro.blog.br. Acesso em: 27 jan. 2012. 
Com sua entrada no universo dos gibis, o Capitão 
chegaria para apaziguar a agonia, o autoritarismo militar 
e combater a tirania. Claro que, em tempos de guerra, 
um gibi de um herói com uma bandeira americana no 
peito aplicando um sopapo no Fürer só poderia ganhar 
destaque, e o sucesso não demoraria muito a chegar. 
COSTA, C. Capitão América, o primeiro vingador : crítica. Disponível em: www.revistastart.com.br. 
Acesso em: 27 jan. 2012 (adaptado). 
A capa da primeira edição norte-americana da revista 
do Capitão América demonstra sua associação com a 
participação dos Estados Unidos na luta contra`,
    images: ['/enem/2012/images/enem_2012_d1_q4.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a Tríplice Aliança, na Primeira Guerra Mundial.` },
      { id: 'B', type: 'text', value: `os regimes totalitários, na Segunda Guerra Mundial.` },
      { id: 'C', type: 'text', value: `o poder soviético, durante a Guerra Fria.` },
      { id: 'D', type: 'text', value: `o movimento comunista, na Guerra do Vietnã.` },
      { id: 'E', type: 'text', value: `o terrorismo internacional, após 11 de setembro de 2001.` },
    ],
    correct: 'B',
    explanation: `A capa do primeiro número do Capitão América, de março de 1941, mostra o herói, com uma bandeira estadunidense no peito, desferindo um soco em Adolf Hitler. A cena associa o personagem ao engajamento dos Estados Unidos no combate aos regimes totalitários no contexto da Segunda Guerra Mundial, por isso a alternativa B está correta. A remete à Primeira Guerra e à Tríplice Aliança, anteriores ao gibi; C e D situam o personagem na Guerra Fria e no Vietnã, posteriores à sua criação; e E o vincula ao terrorismo pós-2001, muito distante do período retratado na capa.`,
    subject: ['his'],
    topics: ['Primeira e Segunda Guerra Mundial', 'Questões aleatórias'],
  },
  {
    id: 5,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Torna-se claro que quem descobriu a África no 
Brasil, muito antes dos europeus, foram os próprios 
africanos trazidos como escravos. E esta descoberta 
não se restringia apenas ao reino linguístico, estendia-se 
também a outras áreas culturais, inclusive à da religião. 
Há razões para pensar que os africanos, quando 
misturados e transportados ao Brasil, não demoraram 
em perceber a existência entre si de elos culturais 
mais profundos. 
SLENES, R. Malungu, ngoma vem! África coberta e descoberta do Brasil. 
Revista USP , n. 12, dez./jan./fev. 1991-92 (adaptado). 
Com base no texto, ao favorecer o contato de indivíduos 
de diferentes partes da África, a experiência da escravidão 
no Brasil tornou possível a`,
    alternatives: [
      { id: 'A', type: 'text', value: `formação de uma identidade cultural afro-brasileira.` },
      { id: 'B', type: 'text', value: `superação de aspectos culturais africanos por antigas tradições europeias.` },
      { id: 'C', type: 'text', value: `reprodução de conflitos entre grupos étnicos africanos.` },
      { id: 'D', type: 'text', value: `manutenção das características culturais específicas de cada etnia.` },
      { id: 'E', type: 'text', value: `resistência à incorporação de elementos culturais indígenas.` },
    ],
    correct: 'A',
    explanation: `O texto de Slenes argumenta que os africanos trazidos como escravos ao Brasil perceberam, apesar das diferenças, afinidades culturais profundas entre si. Ao reunir indivíduos de distintas partes da África, a experiência da escravidão favoreceu a formação de uma identidade cultural afro-brasileira, por isso a alternativa A está correta. B inverte o processo ao falar em superação da cultura africana por tradições europeias; C enfatiza conflitos étnicos, e não a aproximação descrita; D supõe a manutenção isolada das características de cada etnia, contrária à mistura apontada; e E desloca o foco para a resistência a elementos indígenas, tema ausente no texto.`,
    subject: ['his'],
    topics: ['Escravidão e abolição', 'Questões aleatórias'],
  },
  {
    id: 6,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Nós nos recusamos a acreditar que o banco da 
justiça é falível. Nós nos recusamos a acreditar que há 
capitais insuficientes de oportunidade nesta nação. Assim 
nós viemos trocar este cheque, um cheque que nos 
dará o direito de reclamar as riquezas de liberdade e a 
segurança da justiça. 
KING Jr., M. L. Eu tenho um sonho, 28 ago. 1963. 
Disponível em: www.palmares.gov.br. Acesso em: 30 nov. 2011 (adaptado). 
O cenário vivenciado pela população negra, no sul dos 
Estados Unidos nos anos 1950, conduziu à mobilização 
social. Nessa época, surgiram reivindicações que tinham 
como expoente Martin Luther King e objetivavam`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a conquista de direitos civis para a população negra.` },
      { id: 'B', type: 'text', value: `o apoio aos atos violentos patrocinados pelos negros em espaço urbano.` },
      { id: 'C', type: 'text', value: `a supremacia das instituições religiosas em meio à comunidade negra sulista.` },
      { id: 'D', type: 'text', value: `a incorporação dos negros no mercado de trabalho.` },
      { id: 'E', type: 'text', value: `a aceitação da cultura negra como representante do modo de vida americano.` },
    ],
    correct: 'A',
    explanation: `O trecho do discurso 'Eu tenho um sonho', de Martin Luther King, situa-se na mobilização da população negra no sul dos Estados Unidos nos anos 1950 e 1960. Essas reivindicações tinham como objetivo a conquista de direitos civis para a população negra, submetida à segregação racial, por isso a alternativa A está correta. B atribui ao movimento a defesa da violência, quando King pregava a luta pacífica; C e E deslocam o foco para supremacia religiosa ou aceitação cultural; e D reduz a pauta à inserção no mercado de trabalho, aspecto parcial diante da luta por igualdade de direitos civis.`,
    subject: ['his'],
    topics: ['História Contemporânea', 'Movimentos sociais', 'Questões aleatórias'],
  },
  {
    id: 7,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `É verdade que nas democracias o povo parece fazer o que quer;
mas a liberdade política não consiste nisso. Deve-se ter
sempre presente em mente o que é independência e o que é
liberdade. A liberdade é o direito de fazer tudo o que as leis
permitem; se um cidadão pudesse fazer tudo o que elas proíbem,
não teria mais liberdade, porque os outros também teriam tal
poder. MONTESQUIEU. Do Espírito das Leis . São Paulo: Editora
Nova Cultural, 1997 (adaptado). A característica de democracia
ressaltada por Montesquieu diz respeito`,
    alternatives: [
      { id: 'A', type: 'text', value: `ao status de cidadania que o indivíduo adquire ao tomar as decisões por si mesmo.` },
      { id: 'B', type: 'text', value: `ao condicionamento da liberdade dos cidadãos à conformidade às leis.` },
      { id: 'C', type: 'text', value: `à possibilidade de o cidadão participar no poder e, nesse caso, livre da submissão às leis.` },
      { id: 'D', type: 'text', value: `ao livre-arbítrio do cidadão em relação àquilo que é proibido, desde que ciente das consequências.` },
      { id: 'E', type: 'text', value: `ao direito do cidadão exercer sua vontade de acordo com seus valores pessoais.` },
    ],
    correct: 'B',
    explanation: `Montesquieu, em 'Do Espírito das Leis', afirma que a liberdade política não é fazer tudo o que se quer, mas o direito de fazer tudo o que as leis permitem. A característica da democracia por ele ressaltada é, portanto, o condicionamento da liberdade dos cidadãos à conformidade às leis, por isso a alternativa B está correta. A associa a liberdade a decidir por si mesmo, e E a valores pessoais, ignorando o limite legal; C afirma a liberdade como ausência de submissão às leis, o oposto do texto; e D defende o livre-arbítrio sobre o que é proibido, também contrariando a definição do autor.`,
    subject: ['fil'],
    topics: ['Política e Estado', 'Questões aleatórias'],
  },
  {
    id: 8,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Disponível em: www.gandhiserve.org. Acesso em: 21 nov. 2011. 
O cartum, publicado em 1932, ironiza as consequências 
sociais das constantes prisões de Mahatma Gandhi pelas 
autoridades britânicas, na Índia, demonstrando`,
    images: ['/enem/2012/images/enem_2012_d1_q8.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a ineficiência do sistema judiciário inglês no território indiano.` },
      { id: 'B', type: 'text', value: `o apoio da população hindu à prisão de Gandhi.` },
      { id: 'C', type: 'text', value: `o caráter violento das manifestações hindus frente à ação inglesa.` },
      { id: 'D', type: 'text', value: `a impossibilidade de deter o movimento liderado por Gandhi.` },
      { id: 'E', type: 'text', value: `a indiferença das autoridades britânicas frente ao apelo popular hindu.` },
    ],
    correct: 'D',
    explanation: `O cartum 'Lord Willingdon's Dilemma', de 1932, ironiza o impasse das autoridades britânicas diante das sucessivas prisões de Mahatma Gandhi: a multidão que se forma atrás do líder preso mostra que encarcerá-lo não contém o movimento. A charge demonstra, assim, a impossibilidade de deter o movimento liderado por Gandhi, por isso a alternativa D está correta. A desloca o foco para a ineficiência do Judiciário; B inverte o sentido ao supor apoio popular à prisão; C atribui violência às manifestações, quando Gandhi defendia a não violência; e E afirma indiferença britânica, contrariada pelo próprio 'dilema' expresso no título.`,
    subject: ['his'],
    topics: ['História Contemporânea', 'Movimentos sociais', 'Questões aleatórias'],
  },
  {
    id: 9,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Na regulação de matérias culturalmente delicadas, 
como, por exemplo, a linguagem oficial, os currículos 
da educação pública, o status das Igrejas e das 
comunidades religiosas, as normas do direito penal 
(por exemplo, quanto ao aborto), mas também em 
assuntos menos chamativos, como, por exemplo, a 
posição da família e dos consórcios semelhantes ao 
matrimônio, a aceitação de normas de segurança ou a 
delimitação das esferas pública e privada - em tudo 
isso reflete-se amiúde apenas o autoentendimento 
ético-político de uma cultura majoritária, dominante 
por motivos históricos. Por causa de tais regras, 
implicitamente repressivas, mesmo dentro de uma 
comunidade republicana que garanta formalmente 
a igualdade de direitos para todos, pode eclodir um 
conflito cultural movido pelas minorias desprezadas 
contra a cultura da maioria. 
HABERMAS, J. A inclusão do outro: estudos de teoria política. São Paulo: Loyola, 2002. 
A reivindicação dos direitos culturais das minorias, 
como exposto por Habermas, encontra amparo nas 
democracias contemporâneas, na medida em que 
se alcança`,
    alternatives: [
      { id: 'A', type: 'text', value: `a secessão, pela qual a minoria discriminada obteria a igualdade de direitos na condição da sua concentração espacial, num tipo de independência nacional.` },
      { id: 'B', type: 'text', value: `a reunificação da sociedade que se encontra fragmentada em grupos de diferentes comunidades étnicas, confissões religiosas e formas de vida, em torno da coesão de uma cultura política nacional.` },
      { id: 'C', type: 'text', value: `a coexistência das diferenças, considerando a possibilidade de os discursos de autoentendimento se submeterem ao debate público, cientes de que estarão vinculados à coerção do melhor argumento.` },
      { id: 'D', type: 'text', value: `a autonomia dos indivíduos que, ao chegarem à vida adulta, tenham condições de se libertar das tradições de suas origens em nome da harmonia da política nacional.` },
      { id: 'E', type: 'text', value: `o desaparecimento de quaisquer limitações, tais como linguagem política ou distintas convenções de comportamento, para compor a arena política a ser compartilhada.` },
    ],
    correct: 'C',
    explanation: `Habermas discute os direitos culturais das minorias e sustenta que, nas democracias contemporâneas, os conflitos devem ser tratados no debate público. O amparo a essas reivindicações alcança-se pela coexistência das diferenças, desde que os discursos de autoentendimento se submetam ao debate e à força do melhor argumento, por isso a alternativa C está correta. A propõe a secessão da minoria, e B a reunificação em torno de uma única cultura, soluções que anulam a pluralidade; D reduz a questão à libertação individual das tradições; e E defende o desaparecimento de toda limitação, incompatível com a mediação argumentativa proposta pelo autor.`,
    subject: ['fil'],
    topics: ['Política e Estado', 'Questões aleatórias'],
  },
  {
    id: 10,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Mas uma coisa ouso afirmar, porque há muitos 
testemunhos, e é que vi nesta terra de Veragua [Panamá] 
maiores indícios de ouro nos dois primeiros dias do que 
na Hispaniola em quatro anos, e que as terras da região 
não podem ser mais bonitas nem mais bem lavradas. Ali, 
se quiserem podem mandar extrair à vontade. 
Carta de Colombo aos reis da Espanha, julho de 1503. Apud AMADO, J.; FIGUEIREDO, L. C. 
Colombo e a América: quinhentos anos depois. São Paulo: Atual, 1991 (adaptado). 
O documento permite identificar um interesse econômico 
espanhol na colonização da América a partir do século XV. 
A implicação desse interesse na ocupação do espaço 
americano está indicada na`,
    alternatives: [
      { id: 'A', type: 'text', value: `expulsão dos indígenas para fortalecer o clero católico.` },
      { id: 'B', type: 'text', value: `promoção das guerras justas para conquistar o território.` },
      { id: 'C', type: 'text', value: `imposição da catequese para explorar o trabalho africano.` },
      { id: 'D', type: 'text', value: `opção pela policultura para garantir o povoamento ibérico.` },
      { id: 'E', type: 'text', value: `fundação de cidades para controlar a circulação de riquezas.` },
    ],
    correct: 'E',
    explanation: `A carta de Colombo aos reis da Espanha, de 1503, destaca a abundância de ouro nas terras recém-encontradas, revelando o interesse econômico que moveu a colonização espanhola da América. Esse interesse implicou a fundação de cidades para controlar a circulação das riquezas extraídas, por isso a alternativa E está correta. A e C associam a ocupação à catequese e ao fortalecimento do clero, aspectos secundários diante do objetivo econômico; B generaliza as guerras justas como meio de povoamento; e D supõe a opção pela policultura, estranha à lógica extrativa e mercantil evidenciada na carta.`,
    subject: ['his'],
    topics: ['História Moderna', 'Questões aleatórias'],
  },
  {
    id: 11,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Que é ilegal a faculdade que se atribui à autoridade 
real para suspender as leis ou seu cumprimento. 
Que é ilegal toda cobrança de impostos para a 
Coroa sem o concurso do Parlamento, sob pretexto 
de prerrogativa, ou em época e modo diferentes dos 
designados por ele próprio. 
Que é indispensável convocar com frequência os 
Parlamentos para satisfazer os agravos, assim como para 
corrigir, afirmar e conservar leis. 
Declaração de Direitos . Disponível em: http://disciplinas.stoa.usp.br. 
Acesso em: 20 dez. 2011 (adaptado). 
No documento de 1689, identifica-se uma particularidade 
da Inglaterra diante dos demais Estados europeus na 
Época Moderna. A peculiaridade inglesa e o regime 
político que predominavam na Europa continental estão 
indicados, respectivamente, em:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Redução da influência do papa - Teocracia.` },
      { id: 'B', type: 'text', value: `Limitação do poder do soberano - Absolutismo.` },
      { id: 'C', type: 'text', value: `Ampliação da dominação da nobreza - República.` },
      { id: 'D', type: 'text', value: `Expansão da força do presidente - Parlamentarismo.` },
      { id: 'E', type: 'text', value: `Restrição da competência do congresso - Presidencialismo.` },
    ],
    correct: 'B',
    explanation: `A Declaração de Direitos inglesa de 1689 (Bill of Rights) proibiu o soberano de suspender leis, cobrar impostos ou manter exército sem o Parlamento, consolidando a limitação do poder real na Inglaterra. Essa peculiaridade contrastava com o Absolutismo que predominava na Europa continental, em que o rei concentrava poderes, por isso a alternativa B está correta. A associa a Inglaterra à redução da influência do papa e à teocracia; C fala em dominação da nobreza e república; e D e E projetam anacronicamente presidencialismo e parlamentarismo modernos, regimes inexistentes na Época Moderna descrita.`,
    subject: ['his'],
    topics: ['História Moderna', 'Questões aleatórias'],
  },
  {
    id: 12,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Cartaz da Revolução Constitucionalista. Disponível em:
http://veja.abril.com.br. Acesso em: 29 jun. 2012. Elaborado
pelos partidários da Revolução Constitucionalista de 1932, o
cartaz apresentado pretendia mobilizar a população paulista
contra o governo federal. Essa mobilização utilizou-se de uma
referência histórica, associando o processo revolucionário`,
    images: ['/enem/2012/images/enem_2012_d1_q12.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `à experiência francesa, expressa no chamado à luta contra a ditadura.` },
      { id: 'B', type: 'text', value: `aos ideais republicanos, indicados no destaque à bandeira paulista.` },
      { id: 'C', type: 'text', value: `ao protagonismo das Forças Armadas, representadas pelo militar que empunha a bandeira.` },
      { id: 'D', type: 'text', value: `ao bandeirantismo, símbolo paulista apresentado em primeiro plano.` },
      { id: 'E', type: 'text', value: `ao papel figurativo de Vargas na política, enfatizado pela pequenez de sua figura no cartaz.` },
    ],
    correct: 'D',
    explanation: `O cartaz da Revolução Constitucionalista de 1932 mostra, em primeiro plano, um bandeirante empunhando a bandeira paulista e pisoteando a palavra 'ditadura', convocando a população de São Paulo contra o governo federal de Vargas. A mobilização recorreu à figura do bandeirante, símbolo da tradição paulista, para associar o movimento a um passado heroico regional, por isso a alternativa D está correta. A remete à experiência francesa, ausente no cartaz; B enfatiza apenas a bandeira, e não a figura central; C atribui o protagonismo às Forças Armadas; e E foca a pequenez de Vargas, que não é o elemento destacado na imagem.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 13,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O que o projeto governamental tem em vista é 
poupar à Nação o prejuízo irreparável do perecimento e 
da evasão do que há de mais precioso no seu patrimônio. 
Grande parte das obras de arte até mais valiosas e dos 
bens de maior interesse histórico, de que a coletividade 
brasileira era depositária, têm desaparecido ou se 
arruinado irremediavelmente. As obras de arte típicas e 
as relíquias da história de cada país não constituem o seu 
patrimônio privado, e sim um patrimônio comum de todos 
os povos. 
ANDRADE, R. M. F. Defesa do patrimônio artístico e histórico. O Jornal, 30 out. 1936. 
 In: ALVES FILHO, I. Brasil, 500 anos em documentos . 
Rio de Janeiro: Mauad, 1999 (adaptado). 
A criação no Brasil do Serviço do Patrimônio Histórico 
Artístico Nacional (SPHAN), em 1937, foi orientada por 
ideias como as descritas no texto, que visavam`,
    alternatives: [
      { id: 'A', type: 'text', value: `submeter a memória e o patrimônio nacional ao controle dos órgãos públicos, de acordo com a tendência autoritária do Estado Novo.` },
      { id: 'B', type: 'text', value: `transferir para a iniciativa privada a responsabilidade de preservação do patrimônio nacional, por meio de leis de incentivo fiscal.` },
      { id: 'C', type: 'text', value: `definir os fatos e personagens históricos a serem cultuados pela sociedade brasileira, de acordo com o interesse público.` },
      { id: 'D', type: 'text', value: `resguardar da destruição as obras representativas da cultura nacional, por meio de políticas públicas preservacionistas.` },
      { id: 'E', type: 'text', value: `determinar as responsabilidades pela destruição do patrimônio nacional, de acordo com a legislação brasileira.` },
    ],
    correct: 'D',
    explanation: `O texto de Rodrigo Melo Franco de Andrade defende a preservação das obras de arte e das relíquias históricas como patrimônio comum de todos, ameaçado de perecimento e evasão. Essas ideias orientaram a criação do SPHAN, em 1937, com o objetivo de resguardar da destruição as obras representativas da cultura nacional por meio de políticas públicas preservacionistas, por isso a alternativa D está correta. A interpreta o órgão como instrumento autoritário de controle da memória; B transfere a tarefa à iniciativa privada; C restringe sua ação a definir personagens históricos; e E reduz o SPHAN a determinar responsabilidades pela destruição, deturpando seu caráter preservacionista.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 14,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A soma do tempo gasto por todos os navios de 
carga na espera para atracar no porto de Santos é 
igual a 11 anos - isso, contando somente o intervalo 
de janeiro a outubro de 2011. O problema não foi 
registrado somente neste ano. Desde 2006 a perda de 
tempo supera uma década. 
Folha de S. Paulo , 25 dez. 2011 (adaptado). 
A situação descrita gera consequências em cadeia, tanto 
para a produção quanto para o transporte. No que se refere 
à territorialização da produção no Brasil contemporâneo, 
uma dessas consequências é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `realocação das exportações para o modal aéreo em função da rapidez.` },
      { id: 'B', type: 'text', value: `dispersão dos serviços financeiros em função da busca de novos pontos de importação.` },
      { id: 'C', type: 'text', value: `redução da exportação de gêneros agrícolas em função da dificuldade para o escoamento.` },
      { id: 'D', type: 'text', value: `priorização do comércio com países vizinhos em função da existência de fronteiras terrestres.` },
      { id: 'E', type: 'text', value: `estagnação da indústria de alta tecnologia em função da concentração de investimentos na infraestrutura de circulação.` },
    ],
    correct: 'C',
    explanation: `A reportagem relata a enorme perda de tempo dos navios à espera para atracar no porto de Santos, revelando gargalos na infraestrutura de escoamento. No que se refere à territorialização da produção, uma consequência é a redução da exportação de gêneros agrícolas em função da dificuldade de escoamento, por isso a alternativa C está correta. A supõe a transferência das exportações para o modal aéreo, inviável para grandes volumes agrícolas; B e D tratam de serviços financeiros e de comércio com vizinhos, alheios ao problema portuário; e E afirma estagnação da indústria de alta tecnologia, que não decorre diretamente do congestionamento do porto.`,
    subject: ['geo'],
    topics: ['Agricultura e pecuária', 'Indústria e comércio', 'Questões aleatórias'],
  },
  {
    id: 15,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Diante dessas inconsistências e de outras que 
ainda preocupam a opinião pública, nós, jornalistas, 
estamos encaminhando este documento ao Sindicato 
dos Jornalistas Profissionais no Estado de São Paulo, 
para que o entregue à Justiça; e da Justiça esperamos 
a realização de novas diligências capazes de levar 
à completa elucidação desses fatos e de outros que 
porventura vierem a ser levantados. 
Em nome da verdade. In: O Estado de São Paulo, 3 fev. 1976. Apud. FILHO, I. A. 
Brasil, 500 anos em documentos . Rio de Janeiro: Mauad, 1999. 
A morte do jornalista Vladimir Herzog, ocorrida durante o 
regime militar, em 1975, levou a medidas como o abaixo- 
assinado feito por profissionais da imprensa de São 
Paulo. A análise dessa medida tomada indica a`,
    alternatives: [
      { id: 'A', type: 'text', value: `certeza do cumprimento das leis.` },
      { id: 'B', type: 'text', value: `superação do governo de exceção.` },
      { id: 'C', type: 'text', value: `violência dos terroristas de esquerda.` },
      { id: 'D', type: 'text', value: `punição dos torturadores da polícia.` },
      { id: 'E', type: 'text', value: `expectativa da investigação dos culpados.` },
    ],
    correct: 'E',
    explanation: `O abaixo-assinado de jornalistas de São Paulo, após a morte de Vladimir Herzog em 1975, encaminhava o caso à Justiça para apurar os fatos ocorridos sob o regime militar. A análise dessa medida indica a expectativa da investigação dos culpados, pois os profissionais buscavam a elucidação dos fatos e a responsabilização, por isso a alternativa E está correta. A e D supõem certeza do cumprimento das leis e punição dos torturadores, o que o contexto de exceção não garantia; B afirma a superação do regime, ainda vigente em 1975; e C adota a versão oficial que atribuía a morte a suicídio ou a terroristas, justamente contestada pela mobilização.`,
    subject: ['his'],
    topics: ['Ditadura Militar no Brasil', 'Questões aleatórias'],
  },
  {
    id: 16,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Disponível em: www.metmuseum.org. Acesso em: 14 set. 2011. 
A figura apresentada é de um mosaico, produzido por 
volta do ano 300 d.C., encontrado na cidade de Lod, atual 
Estado de Israel. Nela, encontram-se elementos que 
representam uma característica política dos romanos no 
período, indicada em:`,
    images: ['/enem/2012/images/enem_2012_d1_q16.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Cruzadismo - conquista da terra santa.` },
      { id: 'B', type: 'text', value: `Patriotismo - exaltação da cultura local.` },
      { id: 'C', type: 'text', value: `Helenismo - apropriação da estética grega.` },
      { id: 'D', type: 'text', value: `Imperialismo - selvageria dos povos dominados.` },
      { id: 'E', type: 'text', value: `Expansionismo - diversidade dos territórios conquistados.` },
    ],
    correct: 'E',
    explanation: `O mosaico romano de cerca de 300 d.C., encontrado em Lod, reúne animais de diferentes regiões do mundo então conhecido, como feras africanas e asiáticas. Essa diversidade de elementos representa o Expansionismo romano, que incorporou povos e territórios variados ao Império, por isso a alternativa E está correta. A é anacrônica, pois o Cruzadismo é medieval; B reduz a cena à exaltação da cultura local; C a limita à apropriação da estética grega (helenismo), sem explicar a diversidade geográfica; e D interpreta os animais como selvageria dos dominados, leitura que não corresponde ao sentido de domínio territorial amplo.`,
    subject: ['his'],
    topics: ['História Geral Antiga e Medieval', 'Questões aleatórias'],
  },
  {
    id: 17,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Após o retorno de uma viagem a Minas Gerais, 
onde Pedro I fora recebido com grande frieza, seus 
partidários prepararam uma série de manifestações a 
favor do imperador no Rio de Janeiro, armando fogueiras 
e luminárias na cidade. Contudo, na noite de 11 de março, 
tiveram início os conflitos que ficaram conhecidos como 
a Noite das Garrafadas, durante os quais os “brasileiros”  
apagavam as fogueiras “portuguesas” e atacavam as 
casas iluminadas, sendo respondidos com cacos de 
garrafas jogadas das janelas. 
VAINFAS, R. (Org.). Dicionário do Brasil Imperial . Rio de Janeiro: Objetiva, 2008 (adaptado). 
Os anos finais do I Reinado (1822-1831) se caracterizaram 
pelo aumento da tensão política. Nesse sentido, a análise 
dos episódios descritos em Minas Gerais e no Rio de 
Janeiro revela`,
    alternatives: [
      { id: 'A', type: 'text', value: `estímulos ao racismo.` },
      { id: 'B', type: 'text', value: `apoio ao xenofobismo.` },
      { id: 'C', type: 'text', value: `críticas ao federalismo.` },
      { id: 'D', type: 'text', value: `repúdio ao republicanismo.` },
      { id: 'E', type: 'text', value: `questionamentos ao autoritarismo.` },
    ],
    correct: 'E',
    explanation: `O texto narra a frieza na recepção de Pedro I em Minas Gerais e a Noite das Garrafadas no Rio de Janeiro, episódios que marcaram a crescente tensão política nos anos finais do Primeiro Reinado (1822-1831). Esses conflitos entre 'brasileiros' e 'portugueses' revelam questionamentos ao autoritarismo do imperador, cada vez mais contestado, por isso a alternativa E está correta. A e B atribuem aos episódios estímulo ao racismo e à xenofobia, desvios do sentido político; C fala em críticas ao federalismo; e D em repúdio ao republicanismo, temas que não explicam o enfrentamento ao poder pessoal de Pedro I.`,
    subject: ['his'],
    topics: ['Brasil Império', 'Questões aleatórias'],
  },
  {
    id: 18,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Portadora de memória, a paisagem ajuda a construir 
os sentimentos de pertencimento; ela cria uma atmosfera 
que convém aos momentos fortes da vida, às festas, às 
comemorações. 
CLAVAL, P. Terra dos homens: a geografia. São Paulo: Contexto, 2010 (adaptado). 
No texto, é apresentada uma forma de integração da 
paisagem geográfica com a vida social. Nesse sentido, a 
paisagem, além de existir como forma concreta, apresenta 
uma dimensão`,
    alternatives: [
      { id: 'A', type: 'text', value: `política de apropriação efetiva do espaço.` },
      { id: 'B', type: 'text', value: `econômica de uso de recursos do espaço.` },
      { id: 'C', type: 'text', value: `privada de limitação sobre a utilização do espaço.` },
      { id: 'D', type: 'text', value: `natural de composição por elementos físicos do espaço.` },
      { id: 'E', type: 'text', value: `simbólica de relação subjetiva do indivíduo com o espaço.` },
    ],
    correct: 'E',
    explanation: `Para Paul Claval, a paisagem é portadora de memória e ajuda a construir sentimentos de pertencimento, criando uma atmosfera ligada aos momentos fortes da vida. Além de existir como forma concreta, a paisagem apresenta, portanto, uma dimensão simbólica de relação subjetiva do indivíduo com o espaço, por isso a alternativa E está correta. A, B e C reduzem a paisagem a dimensões de apropriação política, econômica ou privada do espaço; e D a restringe à composição por elementos físicos, ignorando justamente o vínculo afetivo e identitário que o texto enfatiza.`,
    subject: ['soc'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 19,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Disponível em: http://primeira-serie.blogspot.com.br. Acesso em: 07 dez. 2011 (adaptado). 
Na imagem do início do século XX, identifica-se um modelo 
produtivo cuja forma de organização fabril baseava-se na`,
    images: ['/enem/2012/images/enem_2012_d1_q19.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `autonomia do produtor direto.` },
      { id: 'B', type: 'text', value: `adoção da divisão sexual do trabalho.` },
      { id: 'C', type: 'text', value: `exploração do trabalho repetitivo.` },
      { id: 'D', type: 'text', value: `utilização de empregados qualificados.` },
      { id: 'E', type: 'text', value: `incentivo à criatividade dos funcionários.` },
    ],
    correct: 'C',
    explanation: `A imagem do início do século XX mostra operários enfileirados em uma linha de montagem, modelo característico da produção fordista. Essa forma de organização fabril baseava-se na exploração do trabalho repetitivo, com tarefas fragmentadas e padronizadas, por isso a alternativa C está correta. A contraria o modelo ao falar em autonomia do produtor direto, típica do artesanato; B introduz a divisão sexual do trabalho, não evidenciada na cena; D supõe empregados altamente qualificados; e E valoriza a criatividade dos funcionários, incompatível com a rigidez e a repetição da linha de montagem.`,
    subject: ['soc'],
    topics: ['Trabalho e economia', 'Questões aleatórias'],
  },
  {
    id: 20,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A singularidade da questão da terra na África 
Colonial é a expropriação por parte do colonizador e 
as desigualdades raciais no acesso à terra. Após a 
independência, as populações de colonos brancos 
tenderam a diminuir, apesar de a proporção de 
terra em posse da minoria branca não ter diminuído 
proporcionalmente. 
MOYO, S. A terra africana e as questões agrárias: o caso das lutas pela terra no Zimbábue. 
In: FERNANDES, B. M.; MARQUES, M. I. M.; SUZUKI, J. C. (Org.). Geografia agrária: 
teoria e poder. São Paulo: Expressão Popular, 2007. 
Com base no texto, uma característica socioespacial e um 
consequente desdobramento que marcou o processo de 
ocupação do espaço rural na África subsaariana foram:`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `Exploração do campesinato pela elite proprietária - Domínio das instituições fundiárias pelo poder público.` },
      { id: 'B', type: 'text', value: `Adoção de práticas discriminatórias de acesso à terra - Controle do uso especulativo da propriedade fundiária.` },
      { id: 'C', type: 'text', value: `Desorganização da economia rural de subsistência - Crescimento do consumo interno de alimentos pelas famílias camponesas.` },
      { id: 'D', type: 'text', value: `Crescimento dos assentamentos rurais com mão de obra familiar - Avanço crescente das áreas rurais sobre as regiões urbanas.` },
      { id: 'E', type: 'text', value: `Concentração das áreas cultiváveis no setor agroexportador - Aumento da ocupação da população pobre em territórios agrícolas marginais.` },
    ],
    correct: 'E',
    explanation: `O texto de Sam Moyo aponta que, na África colonial, a expropriação da terra pelo colonizador e as desigualdades raciais de acesso marcaram o espaço rural, pouco alteradas mesmo após as independências. A característica socioespacial e seu desdobramento foram a concentração das áreas cultiváveis no setor agroexportador e o consequente deslocamento da população pobre para territórios agrícolas marginais, por isso a alternativa E está correta. A atribui o controle fundiário ao poder público; B fala em controle do uso especulativo; C em desorganização da subsistência com crescimento do consumo camponês; e D supõe expansão de assentamentos familiares, cenários que contrariam a concentração de terras descrita.`,
    subject: ['geo'],
    topics: ['Agricultura e pecuária', 'Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 21,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Texto I 
A Europa entrou em estado de exceção, personificado 
por obscuras forças econômicas sem rosto ou localização 
física conhecida que não prestam contas a ninguém e se 
espalham pelo globo por meio de milhões de transações 
diárias no ciberespaço. 
ROSSI, C. Nem fim do mundo nem mundo novo. Folha de São Paulo , 11 dez. 2011 (adaptado). 
Texto II 
Estamos imersos numa crise financeira como nunca 
tínhamos visto desde a Grande Depressão iniciada em 
1929 nos Estados Unidos. 
Entrevista de George Soros. Disponível em: www.nybooks.com. 
Acesso em: 17 ago. 2011 (adaptado). 
A comparação entre os significados da atual crise 
econômica e do crash de 1929 oculta a principal diferença 
entre essas duas crises, pois`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `o crash da Bolsa em 1929 adveio do envolvimento dos EUA na I Guerra Mundial e a atual crise é o resultado dos gastos militares desse país nas guerras do Afeganistão e Iraque.` },
      { id: 'B', type: 'text', value: `a crise de 1929 ocorreu devido a um quadro de superprodução industrial nos EUA e a atual crise resultou da especulação financeira e da expansão desmedida do crédito bancário.` },
      { id: 'C', type: 'text', value: `a crise de 1929 foi o resultado da concorrência dos países europeus reconstruídos após a I Guerra e a atual crise se associa à emergência dos BRICS como novos concorrentes econômicos.` },
      { id: 'D', type: 'text', value: `o crash da Bolsa em 1929 resultou do excesso de proteções ao setor produtivo estadunidense e a atual crise tem origem na internacionalização das empresas e no avanço da política de livre mercado.` },
      { id: 'E', type: 'text', value: `a crise de 1929 decorreu da política intervencionista norte-americana sobre o sistema de comércio mundial e a atual crise resultou do excesso de regulação do governo desse país sobre o sistema monetário.` },
    ],
    correct: 'B',
    explanation: `O Texto I associa a atual crise a forças financeiras difusas no ciberespaço, e o Texto II a compara à Grande Depressão de 1929. A principal diferença entre as duas crises é que a de 1929 resultou da superprodução industrial nos Estados Unidos, enquanto a atual decorre da especulação financeira e da expansão desmedida do crédito bancário, por isso a alternativa B está correta. A liga as crises a guerras e gastos militares; C as atribui à concorrência europeia e aos BRICS; e D e E invertem as causas ao falar em excesso de proteções, de internacionalização ou de regulação estatal, explicações que não captam a distinção entre crise de superprodução e crise financeira.`,
    subject: ['geo'],
    topics: ['Globalização', 'Questões aleatórias'],
  },
  {
    id: 22,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Texto do Cartaz: “Amor e não guerra” 
Foto de Jovens em protesto contra a Guerra do Vietnã. Disponível em: 
 http://goldenyears66to69.blogspot.com. Acesso em: 10 out. 2011. 
Nos anos que se seguiram à Segunda Guerra, movimentos 
como o Maio de 1968 ou a campanha contra a Guerra 
do Vietnã culminaram no estabelecimento de diferentes 
formas de participação política. Seus slogans, tais como 
“Quando penso em revolução quero fazer amor”, se 
tornaram símbolos da agitação cultural nos anos 1960, 
cuja inovação relacionava-se`,
    images: ['/enem/2012/images/enem_2012_d1_q22.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `à contestação da crise econômica europeia, que fora provocada pela manutenção das guerras coloniais.` },
      { id: 'B', type: 'text', value: `à organização partidária da juventude comunista, visando o estabelecimento da ditadura do proletariado.` },
      { id: 'C', type: 'text', value: `à unificação das noções de libertação social e libertação individual, fornecendo um significado político ao uso do corpo.` },
      { id: 'D', type: 'text', value: `à defesa do amor cristão e monogâmico, com fins à reprodução, que era tomado como solução para os conflitos sociais.` },
      { id: 'E', type: 'text', value: `ao reconhecimento da cultura das gerações passadas, que conviveram com a emergência do rock e outras mudanças nos costumes.` },
    ],
    correct: 'C',
    explanation: `A foto de jovens com o cartaz 'Love not war' remete aos movimentos contestatórios dos anos 1960, como o Maio de 1968 e a campanha contra a Guerra do Vietnã. Seus slogans articulavam liberação social e liberação individual, conferindo significado político ao uso do corpo e aos comportamentos pessoais, por isso a alternativa C está correta. A reduz os protestos à contestação da crise econômica das guerras coloniais; B os enquadra na organização partidária comunista pela ditadura do proletariado; D os associa ao amor cristão e monogâmico voltado à reprodução; e E ao resgate da cultura das gerações passadas, leituras que não traduzem a inovação cultural do período.`,
    subject: ['his'],
    topics: ['História Contemporânea', 'Movimentos sociais', 'Questões aleatórias'],
  },
  {
    id: 23,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Nossa cultura lipofóbica muito contribui para a 
distorção da imagem corporal, gerando gordos que se 
veem magros e magros que se veem gordos, numa 
quase unanimidade de que todos se sentem ou se 
veem “distorcidos”. 
Engordamos quando somos gulosos. É pecado da 
gula que controla a relação do homem com a balança. 
Todo obeso declarou, um dia, guerra à balança. Para 
emagrecer é preciso fazer as pazes com a dita cuja, 
visando adequar-se às necessidades para as quais 
ela aponta. 
FREIRE, D. S. Obesidade não pode ser pré-requisito. Disponível em: http//gnt.globo.com. 
Acesso em: 3 abr. 2012 (adaptado). 
O texto apresenta um discurso de disciplinarização dos 
corpos, que tem como consequência`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a ampliação dos tratamentos médicos alternativos, reduzindo os gastos com remédios.` },
      { id: 'B', type: 'text', value: `a democratização do padrão de beleza, tornando-o acessível pelo esforço individual.` },
      { id: 'C', type: 'text', value: `o controle do consumo, impulsionando uma crise econômica na indústria de alimentos.` },
      { id: 'D', type: 'text', value: `a culpabilização individual, associando obesidade à fraqueza de caráter.` },
      { id: 'E', type: 'text', value: `o aumento da longevidade, resultando no crescimento populacional.` },
    ],
    correct: 'D',
    explanation: `O texto de D. S. Freire critica a 'cultura lipofóbica', que distorce a imagem corporal e trata o emagrecimento como questão de gula e de vontade individual. Esse discurso de disciplinarização dos corpos tem como consequência a culpabilização individual, associando a obesidade à fraqueza de caráter, por isso a alternativa D está correta. A e E deslocam o foco para tratamentos alternativos ou aumento da longevidade; B apresenta como positiva a 'democratização do padrão de beleza' pelo esforço pessoal, quando o texto denuncia essa lógica; e C reduz o fenômeno a um controle do consumo capaz de gerar crise na indústria de alimentos, aspecto não tratado.`,
    subject: ['soc'],
    topics: ['Sociologia', 'Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 24,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Composição da população residente urbana por sexo,
segundo os grupos de idade - Brasil - 1
Composição da população residente rural por sexo,
segundo os grupos de idade - Brasil - 1991/2010

Homens Mulheres 1991 2010 Fonte: IBGE, Censo Demográfico
1991/2010 BRASIL. IBGE. Censo demográfico 1991-2010. Rio de
Janeiro, 2011. A interpretação e a correlação das figuras
sobre a dinâmica demográfica brasileira demonstram um(a)`,
    images: ['/enem/2012/images/enem_2012_d1_q24_1.jpg', '/enem/2012/images/enem_2012_d1_q24_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `menor proporção de fecundidade na área urbana.` },
      { id: 'B', type: 'text', value: `menor proporção de homens na área rural.` },
      { id: 'C', type: 'text', value: `aumento da proporção de fecundidade na área rural.` },
      { id: 'D', type: 'text', value: `queda da longevidade na área rural.` },
      { id: 'E', type: 'text', value: `queda do número de idosos na área urbana.` },
    ],
    correct: 'A',
    explanation: `As pirâmides etárias comparam a população urbana e rural brasileira em 1991 e 2010, por sexo e faixa de idade. A comparação revela o estreitamento da base, mais acentuado na área urbana, indicando menor proporção de fecundidade nas cidades, por isso a alternativa A está correta. B afirma menor proporção de homens na área rural, contrariada pelos dados; C sustenta aumento da fecundidade rural, oposto da tendência de queda; D fala em redução da longevidade rural, não demonstrada; e E aponta queda do número de idosos na área urbana, quando o topo da pirâmide urbana, ao contrário, se alarga.`,
    subject: ['geo'],
    topics: ['Demografia', 'Urbanização', 'Questões aleatórias'],
  },
  {
    id: 25,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Para Platão, o que havia de verdadeiro em Parmênides 
era que o objeto de conhecimento é um objeto de razão e 
não de sensação , e era preciso estabelecer uma relação 
entre objeto racional e objeto sensível ou material que 
privilegiasse o primeiro em detrimento do segundo. Lenta, 
mas irresistivelmente, a Doutrina das Ideias formava-se 
em sua mente. 
ZINGANO, M. Platão e Aristóteles: o fascínio da filosofia. 
São Paulo: Odysseus, 2012 (adaptado). 
O texto faz referência à relação entre razão e sensação, 
um aspecto essencial da Doutrina das Ideias de Platão 
(427 a.C.-346 a.C.). De acordo com o texto, como Platão 
se situa diante dessa relação?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Estabelecendo um abismo intransponível entre as duas.` },
      { id: 'B', type: 'text', value: `Privilegiando os sentidos e subordinando o conhecimento a eles.` },
      { id: 'C', type: 'text', value: `Atendo-se à posição de Parmênides de que razão e sensação são inseparáveis.` },
      { id: 'D', type: 'text', value: `Afirmando que a razão é capaz de gerar conhecimento, mas a sensação não.` },
      { id: 'E', type: 'text', value: `Rejeitando a posição de Parmênides de que a sensação é superior à razão.` },
    ],
    correct: 'D',
    explanation: `Segundo o texto, Platão retomou de Parmênides a distinção entre o objeto da razão e o objeto da sensação e procurou estabelecer uma relação que privilegiasse o primeiro sobre o segundo, base da Doutrina das Ideias. Platão situa-se, assim, afirmando que a razão é capaz de gerar conhecimento, mas a sensação não, por isso a alternativa D está correta. A exagera ao falar em abismo intransponível entre razão e sensação; B inverte a hierarquia ao privilegiar os sentidos; C atribui a Platão a ideia de inseparabilidade das duas; e E diz que ele rejeita Parmênides e vê a sensação como superior, contrariando o texto.`,
    subject: ['fil'],
    topics: ['Filosofia Antiga (Sócrates, Platão, Aristóteles)', 'Teoria do conhecimento', 'Questões aleatórias'],
  },
  {
    id: 26,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A maior parte dos veículos de transporte atualmente 
é movida por motores a combustão que utilizam derivados 
de petróleo. Por causa disso, esse setor é o maior 
consumidor de petróleo do mundo, com altas taxas de 
crescimento ao longo do tempo. Enquanto outros setores 
têm obtido bons resultados na redução do consumo, os 
transportes tendem a concentrar ainda mais o uso de 
derivados do óleo. 
MURTA, A. Energia: o vício da civilização. Rio de Janeiro: Garamond, 2011 (adaptado). 
Um impacto ambiental da tecnologia mais empregada 
pelo setor de transportes e uma medida para 
promover a redução do seu uso, estão indicados, 
respectivamente, em:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Aumento da poluição sonora - construção de barreiras acústicas.` },
      { id: 'B', type: 'text', value: `Incidência da chuva ácida - estatização da indústria automobilística.` },
      { id: 'C', type: 'text', value: `Derretimento das calotas polares - incentivo aos transportes de massa.` },
      { id: 'D', type: 'text', value: `Propagação de doenças respiratórias - distribuição de medicamentos gratuitos.` },
      { id: 'E', type: 'text', value: `Elevação das temperaturas médias - criminalização da emissão de gás carbônico.` },
    ],
    correct: 'C',
    explanation: `O texto de Murta destaca que o setor de transportes é o maior consumidor de petróleo e tende a concentrar ainda mais o uso de seus derivados. O impacto ambiental da tecnologia predominante (motores a combustão) e uma medida para reduzir seu uso são, respectivamente, o derretimento das calotas polares e o incentivo aos transportes de massa, por isso a alternativa C está correta. A associa poluição sonora a barreiras acústicas, que não reduzem o consumo de petróleo; B propõe estatizar a indústria automobilística; D distribui medicamentos sem atacar a causa; e E criminaliza a emissão de gás carbônico, medida que não corresponde à redução do uso de derivados sugerida.`,
    subject: ['geo'],
    topics: ['Energia e recursos naturais', 'Meio ambiente e sustentabilidade', 'Questões aleatórias'],
  },
  {
    id: 27,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `As mulheres quebradeiras de coco-babaçu dos Estados do
Maranhão, Piauí, Pará e Tocantins, na sua grande maioria,
vivem numa situação de exclusão e subalternidade. O termo
quebradeira de coco assume o caráter de identidade coletiva na
medida em que as mulheres que sobrevivem dessa atividade e
reconhecem sua posição e condição desvalorizada pela lógica da
dominação, se organizam em movimentos de resistência e de luta
pela conquista da terra, pela libertação dos babaçuais, pela
autonomia do processo produtivo. Passam a atribuir
significados ao seu trabalho e as suas experiências, tendo
como principal referência sua condição preexistente de acesso
e uso dos recursos naturais. ROCHA, M. R. T. A luta das
mulheres quebradeiras de coco-babaçu, pela libertação do coco
preso e pela posse da terra. In: Anais do VII Congresso
Latino-Americano de Sociologia Rural , Quito, 2006 (adaptado).
A organização do movimento das quebradeiras de coco de babaçu
é resultante da`,
    alternatives: [
      { id: 'A', type: 'text', value: `constante violência nos babaçuais na confluência de terras maranhenses, piauienses, paraenses e tocantinenses, região com elevado índice de homicídios.` },
      { id: 'B', type: 'text', value: `falta de identidade coletiva das trabalhadoras, migrantes das cidades e com pouco vínculo histórico com as áreas rurais do interior do Tocantins, Pará, Maranhão e Piauí.` },
      { id: 'C', type: 'text', value: `escassez de água nas regiões de veredas, ambientes naturais dos babaçus, causada pela construção de açudes particulares, impedindo o amplo acesso público aos recursos hídricos.` },
      { id: 'D', type: 'text', value: `progressiva devastação das matas dos cocais, em função do avanço da sojicultura nos chapadões do Meio-Norte brasileiro.` },
      { id: 'E', type: 'text', value: `dificuldade imposta pelos fazendeiros e posseiros no acesso aos babaçuais localizados no interior de suas propriedades.` },
    ],
    correct: 'E',
    explanation: `O texto de Rocha descreve como as quebradeiras de coco-babaçu do Meio-Norte, em situação de exclusão, assumem uma identidade coletiva e se organizam em movimentos de resistência pela terra e pelo acesso aos recursos naturais. Essa organização resulta da dificuldade imposta por fazendeiros e posseiros ao acesso aos babaçuais situados no interior de suas propriedades, por isso a alternativa E está correta. A reduz tudo à violência e aos homicídios na região; B nega a identidade coletiva que o texto afirma existir; C atribui a mobilização à escassez de água por açudes; e D à devastação das matas pela sojicultura, fatores que não são apontados como origem do movimento.`,
    subject: ['soc'],
    topics: ['Movimentos sociais', 'Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 28,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Texto I Anaxímenes de Mileto disse que o ar é o elemento
originário de tudo o que existe, existiu e existirá, e que
outras coisas provêm de sua descendência. Quando o ar se
dilata, transforma-se em fogo, ao passo que os ventos são ar
condensado. As nuvens formam-se a partir do ar por feltragem
e, ainda mais condensadas, transformam-se em água. A água,
quando mais condensada, transforma-se em terra, e quando
condensada ao máximo possível, transforma-se em pedras.
BURNET, J. A aurora da filosofia grega . Rio de Janeiro:
PUC-Rio, 2006 (adaptado). Texto II Basílio Magno, filósofo
medieval, escreveu: “Deus, como criador de todas as coisas,
está no princípio do mundo e dos tempos. Quão parcas de
conteúdo se nos apresentam, em face desta concepção, as
especulações contraditórias dos filósofos, para os quais o
mundo se origina, ou de algum dos quatro elementos, como
ensinam os Jônios, ou dos átomos, como julga Demócrito. Na
verdade, dão a impressão de quererem ancorar o mundo numa teia
de aranha.” GILSON, E.; BOEHNER, P. História da Filosofia
Crista . São Paulo: Vozes, 1991 (adaptado). Filósofos dos
diversos tempos históricos desenvolveram teses para explicar a
origem do universo, a partir de uma explicação racional. As
teses de Anaxímenes, filósofo grego antigo, e de Basílio,
filósofo medieval, têm em comum na sua fundamentação teorias
que`,
    alternatives: [
      { id: 'A', type: 'text', value: `eram baseadas nas` },
      { id: 'B', type: 'text', value: `refutavam as teorias de filósofos da religião.` },
      { id: 'C', type: 'text', value: `tinham origem nos mitos das civilizações antigas.` },
      { id: 'D', type: 'text', value: `postulavam um princípio originário para o mundo.` },
      { id: 'E', type: 'text', value: `defendiam que Deus é o princípio de todas as coisas.` },
    ],
    correct: 'D',
    explanation: `O Texto I expõe a tese de Anaxímenes, para quem o ar é o elemento originário de tudo, e o Texto II, de Basílio Magno, apresenta Deus como princípio criador do mundo e dos tempos. Apesar de filósofos de épocas distintas, ambos têm em comum o fato de postularem um princípio originário para o mundo, por isso a alternativa D está correta. A supõe que as teses se baseavam nas ciências da natureza; B que refutavam filósofos da religião; C que tinham origem nos mitos antigos; e E generaliza a ambos a tese de que Deus é o princípio de tudo, quando isso vale apenas para Basílio, e não para Anaxímenes.`,
    subject: ['fil'],
    topics: ['Filosofia Antiga (Sócrates, Platão, Aristóteles)', 'Filosofia Medieval', 'Questões aleatórias'],
  },
  {
    id: 29,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `De repente, sente-se uma vibração que aumenta 
rapidamente; lustres balançam, objetos se movem 
sozinhos e somos invadidos pela estranha sensação de 
medo do imprevisto. Segundos parecem horas, poucos 
minutos são uma eternidade. Estamos sentindo os efeitos 
de um terremoto, um tipo de abalo sísmico. 
ASSAD, L. Os (não tão) imperceptíveis movimentos da Terra. ComCiência: 
Revista Eletrônica de Jornalismo Científico, n. 117, abr. 2010. 
Disponível em: http://comciencia.br. Acesso em: 2 mar. 2012. 
O fenômeno físico descrito no texto afeta intensamente as 
populações que ocupam espaços próximos às áreas de`,
    alternatives: [
      { id: 'A', type: 'text', value: `alívio da tensão geológica.` },
      { id: 'B', type: 'text', value: `desgaste da erosão superficial.` },
      { id: 'C', type: 'text', value: `atuação do intemperismo químico.` },
      { id: 'D', type: 'text', value: `formação de aquíferos profundos.` },
      { id: 'E', type: 'text', value: `acúmulo de depósitos sedimentares.` },
    ],
    correct: 'A',
    explanation: `O texto descreve as sensações provocadas por um terremoto, um abalo sísmico. Esse fenômeno afeta intensamente as populações que ocupam espaços próximos às áreas de alívio da tensão geológica, isto é, às bordas de placas tectônicas onde a energia acumulada é liberada, por isso a alternativa A está correta. B e C remetem à erosão superficial e ao intemperismo químico, processos lentos e superficiais, sem relação com os sismos; e D e E mencionam aquíferos profundos e depósitos sedimentares, que não são as áreas associadas à ocorrência de terremotos.`,
    subject: ['geo'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 30,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Texto I 
Experimentei algumas vezes que os sentidos eram 
enganosos, e é de prudência nunca se fiar inteiramente 
em quem já nos enganou uma vez. 
DESCARTES, R. Meditações Metafisicas . São Paulo: Abril Cultural, 1979. 
Texto II 
Sempre que alimentarmos alguma suspeita de 
que uma ideia esteja sendo empregada sem nenhum 
significado, precisaremos apenas indagar: de que 
impressão deriva esta suposta ideia? E se for impossível 
atribuir-lhe qualquer impressão sensorial, isso servirá 
para confirmar nossa suspeita. 
HUME, D. Uma investigação sobre o entendimento . São Paulo: Unesp, 2004 (adaptado). 
Nos textos, ambos os autores se posicionam sobre a 
natureza do conhecimento humano. A comparação dos 
excertos permite assumir que Descartes e Hume`,
    alternatives: [
      { id: 'A', type: 'text', value: `defendem os sentidos como critério originário para considerar um conhecimento legítimo.` },
      { id: 'B', type: 'text', value: `entendem que é desnecessário suspeitar do significado de uma ideia na reflexão filosófica e crítica.` },
      { id: 'C', type: 'text', value: `são legítimos representantes do criticismo quanto à gênese do conhecimento.` },
      { id: 'D', type: 'text', value: `concordam que conhecimento humano é impossível em relação às ideias e aos sentidos.` },
      { id: 'E', type: 'text', value: `atribuem diferentes lugares ao papel dos sentidos no processo de obtenção do conhecimento.` },
    ],
    correct: 'E',
    explanation: `O Texto I, de Descartes, desconfia dos sentidos por já terem enganado, e o Texto II, de Hume, parte das impressões sensoriais para verificar o significado das ideias. A comparação mostra que Descartes e Hume atribuem diferentes lugares ao papel dos sentidos no processo de obtenção do conhecimento, por isso a alternativa E está correta. A afirma que ambos tomam os sentidos como critério originário, o que vale só para Hume; B nega a necessidade de suspeitar das ideias; C qualifica os dois como representantes do criticismo, próprio de Kant; e D diz que ambos consideram o conhecimento impossível, posição cética que nenhum deles sustenta.`,
    subject: ['fil'],
    topics: ['Filosofia Moderna (Descartes, Kant, Hume)', 'Teoria do conhecimento', 'Questões aleatórias'],
  },
  {
    id: 31,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Não ignoro a opinião antiga e muito difundida de 
que o que acontece no mundo é decidido por Deus e 
pelo acaso. Essa opinião é muito aceita em nossos dias, 
devido às grandes transformações ocorridas, e que 
ocorrem diariamente, as quais escapam à conjectura 
humana. Não obstante, para não ignorar inteiramente o 
nosso livre-arbítrio, creio que se pode aceitar que a sorte 
decida metade dos nossos atos, mas [o livre-arbítrio] nos 
permite o controle sobre a outra metade. 
MAQUIAVEL, N. O Príncipe . Brasília: EdUnB, 1979 (adaptado). 
Em O Príncipe , Maquiavel refletiu sobre o exercício do 
poder em seu tempo. No trecho citado, o autor demonstra 
o vínculo entre o seu pensamento político e o humanismo 
renascentista ao`,
    alternatives: [
      { id: 'A', type: 'text', value: `valorizar a interferência divina nos acontecimentos definidores do seu tempo.` },
      { id: 'B', type: 'text', value: `rejeitar a intervenção do acaso nos processos políticos.` },
      { id: 'C', type: 'text', value: `afirmar a confiança na razão autônoma como fundamento da ação humana.` },
      { id: 'D', type: 'text', value: `romper com a tradição que valorizava o passado como fonte de aprendizagem.` },
      { id: 'E', type: 'text', value: `redefinir a ação política com base na unidade entre fé e razão.` },
    ],
    correct: 'C',
    explanation: `No trecho de 'O Príncipe', Maquiavel admite o peso da fortuna, mas sustenta que o livre-arbítrio permite ao homem controlar metade de seus atos. Esse argumento revela o vínculo com o humanismo renascentista ao afirmar a confiança na razão autônoma como fundamento da ação humana, por isso a alternativa C está correta. A valoriza a interferência divina, e E a unidade entre fé e razão, posições que subordinam a ação a instâncias externas; B nega qualquer papel ao acaso, que o autor não descarta; e D fala em romper com o passado como fonte de aprendizagem, quando Maquiavel justamente se inspira nos exemplos antigos.`,
    subject: ['fil'],
    topics: ['Política e Estado', 'Questões aleatórias'],
  },
  {
    id: 32,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A interface clima/sociedade pode ser considerada em 
termos de ajustamento à extensão e aos modos como as 
sociedades funcionam em uma relação harmônica com 
seu clima. O homem e suas sociedades são vulneráveis 
às variações climáticas. A vulnerabilidade é a medida 
pela qual uma sociedade é suscetível de sofrer por 
causas climáticas. 
AYOADE, J. O. Introdução a climatologia para os trópicos. 
Rio de Janeiro: Bertrand Brasil, 2010 (adaptado). 
Considerando o tipo de relação entre ser humano e 
condição climática apresentado no texto, uma sociedade 
torna-se mais vulnerável quando`,
    alternatives: [
      { id: 'A', type: 'text', value: `concentra suas atividades no setor primário.` },
      { id: 'B', type: 'text', value: `apresenta estoques elevados de alimentos.` },
      { id: 'C', type: 'text', value: `possui um sistema de transportes articulado.` },
      { id: 'D', type: 'text', value: `diversifica a matriz de geração de energia.` },
      { id: 'E', type: 'text', value: `introduz tecnologias à produção agrícola.` },
    ],
    correct: 'A',
    explanation: `O texto de Ayoade trata da vulnerabilidade das sociedades às variações climáticas, entendida como a suscetibilidade de sofrer por causas do clima. Uma sociedade torna-se mais vulnerável quando concentra suas atividades no setor primário, pois a agricultura e a pecuária dependem diretamente das condições climáticas, por isso a alternativa A está correta. B, C, D e E descrevem situações que, ao contrário, reduzem a vulnerabilidade: manter estoques de alimentos, dispor de transportes articulados, diversificar a matriz energética e incorporar tecnologia à produção agrícola conferem maior capacidade de adaptação às oscilações do clima.`,
    subject: ['geo'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Agricultura e pecuária', 'Questões aleatórias'],
  },
  {
    id: 33,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Uma mesma empresa pode ter sua sede 
administrativa onde os impostos são menores, as 
unidades de produção onde os salários são os mais 
baixos, os capitais onde os juros são os mais altos 
e seus executivos vivendo onde a qualidade de vida 
é mais elevada. 
SEVCENKO, N. A corrida para o século XXI: no loop da montanha russa. 
São Paulo: Companhia das Letras, 2001 (adaptado). 
No texto estão apresentadas estratégias empresariais 
no contexto da globalização. Uma consequência social 
derivada dessas estratégias tem sido`,
    alternatives: [
      { id: 'A', type: 'text', value: `o crescimento da carga tributária.` },
      { id: 'B', type: 'text', value: `o aumento da mobilidade ocupacional.` },
      { id: 'C', type: 'text', value: `a redução da competitividade entre as empresas.` },
      { id: 'D', type: 'text', value: `o direcionamento das vendas para os mercados regionais.` },
      { id: 'E', type: 'text', value: `a ampliação do poder de planejamento dos Estados nacionais.` },
    ],
    correct: 'B',
    explanation: `Sevcenko descreve a estratégia das empresas globalizadas de localizar sede, produção, capitais e executivos em lugares distintos, buscando as melhores vantagens em cada um. Uma consequência social dessa lógica é o aumento da mobilidade ocupacional, pois os trabalhadores precisam se deslocar e se readaptar conforme as empresas reorganizam suas atividades, por isso a alternativa B está correta. A e C afirmam crescimento da carga tributária e redução da competitividade, contrários à busca por menores custos; D fala em direcionar vendas a mercados regionais, oposto da escala global; e E supõe a ampliação do poder de planejamento dos Estados, enfraquecido nesse processo.`,
    subject: ['geo'],
    topics: ['Globalização', 'Questões aleatórias'],
  },
  {
    id: 34,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A moderna “conquista da Amazônia” inverteu o eixo 
geográfico da colonização da região. Desde a época 
colonial até meados do século XIX, as correntes principais 
de população movimentaram-se no sentido Leste-Oeste, 
estabelecendo uma ocupação linear articulada. Nas 
últimas décadas, os fluxos migratórios passaram a se 
verificar no sentido Sul-Norte, conectando o Centro-Sul 
à Amazônia. 
OLIC, N. B. Ocupação da Amazônia, uma epopeia inacabada. 
Jornal Mundo , ano 16, n. 4, ago. 2008 (adaptado). 
O primeiro eixo geográfico de ocupação das terras 
amazônicas demonstra um padrão relacionado à 
criação de`,
    alternatives: [
      { id: 'A', type: 'text', value: `núcleos urbanos em áreas litorâneas.` },
      { id: 'B', type: 'text', value: `centros agrícolas modernos no interior.` },
      { id: 'C', type: 'text', value: `vias férreas entre espaços de mineração.` },
      { id: 'D', type: 'text', value: `faixas de povoamento ao longo das estradas.` },
      { id: 'E', type: 'text', value: `povoados interligados próximos a grandes rios.` },
    ],
    correct: 'E',
    explanation: `O texto de Olic explica que a 'conquista da Amazônia' inverteu o eixo de ocupação: do sentido Leste-Oeste, colonial e ribeirinho, para o sentido Sul-Norte, mais recente. O primeiro eixo, anterior às últimas décadas, relaciona-se à criação de povoados interligados próximos a grandes rios, que serviam de vias de circulação, por isso a alternativa E está correta. A situa os núcleos no litoral, e não no interior amazônico; B e C remetem a centros agrícolas modernos e vias férreas de mineração, ligados à ocupação recente; e D descreve faixas de povoamento ao longo das estradas, característica justamente do novo eixo Sul-Norte.`,
    subject: ['geo'],
    topics: ['Urbanização', 'Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 35,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A experiência que tenho de lidar com aldeias de 
diversas nações me tem feito ver, que nunca índio fez 
grande confiança de branco e, se isto sucede com os que 
estão já civilizados, como não sucederá o mesmo com 
esses que estão ainda brutos. 
NORONHA, M. Carta a J. Caldeira Brant. 2 jan.1751. Apud CHAIM, M. M. 
Aldeamentos indígenas (Goiás: 1749-1811). São Paulo: 
Nobel, Brasília: INL, 1983 (adaptado). 
Em 1749, ao separar-se de São Paulo, a capitania de 
Goiás foi governada por D. Marcos de Noronha, que 
atendeu às diretrizes da política indigenista pombalina 
que incentivava a criação de aldeamentos em função`,
    alternatives: [
      { id: 'A', type: 'text', value: `das constantes rebeliões indígenas contra os brancos colonizadores, que ameaçavam a produção de ouro nas regiões mineradoras.` },
      { id: 'B', type: 'text', value: `da propagação de doenças originadas do contato com os colonizadores, que dizimaram boa parte da população indígena.` },
      { id: 'C', type: 'text', value: `do empenho das ordens religiosas em proteger o indígena da exploração, o que garantiu a sua supremacia na administração colonial.` },
      { id: 'D', type: 'text', value: `da política racista da Coroa Portuguesa, contrária à miscigenação, que organizava a sociedade em uma hierarquia dominada pelos brancos.` },
      { id: 'E', type: 'text', value: `da necessidade de controle dos brancos sobre a população indígena, objetivando sua adaptação às exigências do trabalho regular.` },
    ],
    correct: 'E',
    explanation: `A carta de D. Marcos de Noronha, em 1749, insere-se na política indigenista pombalina, que incentivava a criação de aldeamentos em Goiás. Esses aldeamentos atendiam à necessidade de controle dos brancos sobre a população indígena, visando adaptá-la às exigências do trabalho regular, por isso a alternativa E está correta. A atribui a medida a rebeliões indígenas contra a mineração; B à propagação de doenças; C ao empenho das ordens religiosas em proteger o índio, quando a política pombalina reduziu o poder dos jesuítas; e D a uma política racista contrária à miscigenação, oposta às diretrizes pombalinas de integração do indígena.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 36,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A partir dos anos 70, impõe-se um movimento 
de desconcentração da produção industrial, uma das 
manifestações do desdobramento da divisão territorial 
do trabalho no Brasil. A produção industrial torna-se 
mais complexa, estendendo-se, sobretudo, para novas 
áreas do Sul e para alguns pontos do Centro-Oeste, do 
Nordeste e do Norte. 
SANTOS, M.; SILVEIRA, M. L. O Brasil: território e sociedade no início do século XXI. 
Rio de Janeiro: Record, 2002 (fragmento). 
Um fator geográfico que contribui para o tipo de alteração 
da configuração territorial descrito no texto é:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Obsolescência dos portos.` },
      { id: 'B', type: 'text', value: `Estatização de empresas.` },
      { id: 'C', type: 'text', value: `Eliminação de incentivos fiscais.` },
      { id: 'D', type: 'text', value: `Ampliação de políticas protecionistas.` },
      { id: 'E', type: 'text', value: `Desenvolvimento dos meios de comunicação.` },
    ],
    correct: 'E',
    explanation: `O texto de Santos e Silveira descreve, a partir dos anos 1970, a desconcentração da produção industrial brasileira, que se estendeu para novas áreas do Sul, Centro-Oeste, Nordeste e Norte. Um fator geográfico que contribuiu para essa alteração foi o desenvolvimento dos meios de comunicação, que permitiu integrar e coordenar unidades produtivas dispersas pelo território, por isso a alternativa E está correta. A fala em obsolescência dos portos; B em estatização de empresas; C na eliminação de incentivos fiscais, que na verdade atraíram indústrias para novas regiões; e D em ampliação de políticas protecionistas, fatores que não explicam a dispersão industrial descrita.`,
    subject: ['geo'],
    topics: ['Indústria e comércio', 'Questões aleatórias'],
  },
  {
    id: 37,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `As plataformas ou crátons correspondem aos 
terrenos mais antigos e arrasados por muitas fases 
de erosão. Apresentam uma grande complexidade 
litológica, prevalecendo as rochas metamórficas muito 
antigas (Pré-Cambriano Médio e Inferior). Também 
ocorrem rochas intrusivas antigas e resíduos de rochas 
sedimentares. São três as áreas de plataforma de 
crátons no Brasil: a das Guianas, a Sul-Amazônica e a 
do São Francisco. 
ROSS, J. L. S. Geografia do Brasil . São Paulo: Edusp, 1998. 
As regiões cratônicas das Guianas e a Sul-Amazônica 
têm como arcabouço geológico vastas extensões de 
escudos cristalinos, ricos em minérios, que atraíram 
a ação de empresas nacionais e estrangeiras do 
setor de mineração e destacam-se pela sua história 
geológica por`,
    alternatives: [
      { id: 'A', type: 'text', value: `apresentarem áreas de intrusões graníticas, ricas em jazidas minerais (ferro, manganês).` },
      { id: 'B', type: 'text', value: `corresponderem ao principal evento geológico do Cenozoico no território brasileiro.` },
      { id: 'C', type: 'text', value: `apresentarem áreas arrasadas pela erosão, que originaram a maior planície do país.` },
      { id: 'D', type: 'text', value: `possuírem em sua extensão terrenos cristalinos ricos em reservas de petróleo e gás natural.` },
      { id: 'E', type: 'text', value: `serem esculpidas pela ação do intemperismo físico, decorrente da variação de temperatura.` },
    ],
    correct: 'A',
    explanation: `O texto de Ross caracteriza os crátons das Guianas e Sul-Amazônico como terrenos muito antigos, arrasados pela erosão e formados por rochas do embasamento cristalino. Sua história geológica envolve áreas de intrusões graníticas, ricas em jazidas minerais como ferro e manganês, o que atraiu a mineração, por isso a alternativa A está correta. B situa esses terrenos no Cenozoico, quando são pré-cambrianos; C os relaciona à formação da maior planície do país; D supõe reservas de petróleo e gás, típicas de bacias sedimentares; e E atribui seu modelado ao intemperismo físico por variação térmica, que não explica sua riqueza mineral.`,
    subject: ['geo'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Energia e recursos naturais', 'Questões aleatórias'],
  },
  {
    id: 38,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A irrigação da agricultura é responsável pelo 
consumo de mais de 2/3 de toda a água retirada dos rios, 
lagos e lençóis freáticos do mundo. Mesmo no Brasil, 
onde achamos que temos muita água, os agricultores 
que tentam produzir alimentos também enfrentam secas 
periódicas e uma competição crescente por água. 
MARAFON, G. J. et al. O desencanto da terra: produção de alimentos, ambiente e sociedade. 
Rio de Janeiro: Garamond, 2011. 
No Brasil, as técnicas de irrigação utilizadas na agricultura 
produziram impactos socioambientais como`,
    alternatives: [
      { id: 'A', type: 'text', value: `redução do custo de produção.` },
      { id: 'B', type: 'text', value: `agravamento da poluição hídrica.` },
      { id: 'C', type: 'text', value: `compactação do material do solo.` },
      { id: 'D', type: 'text', value: `aceleração da fertilização natural.` },
      { id: 'E', type: 'text', value: `redirecionamento dos cursos fluviais.` },
    ],
    correct: 'E',
    explanation: `O texto de Marafon lembra que a irrigação consome mais de dois terços da água retirada de rios, lagos e lençóis freáticos. No Brasil, as técnicas de irrigação produziram impactos socioambientais como o redirecionamento dos cursos fluviais, pois a captação e o desvio de grandes volumes de água alteram o percurso natural dos rios e afetam ecossistemas e populações ribeirinhas, por isso a alternativa E está correta. A trata de redução de custos, benefício econômico, e não de impacto socioambiental; C associa a compactação do solo à mecanização, e não à irrigação; D afirma aceleração da fertilização natural, efeito inexistente; e B, embora cite a poluição hídrica, decorre sobretudo do uso de agrotóxicos, e não da técnica de irrigação em si.`,
    subject: ['geo'],
    topics: ['Agricultura e pecuária', 'Meio ambiente e sustentabilidade', 'Questões aleatórias'],
  },
  {
    id: 39,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Texto I 
Ao se emanciparem da tutela senhorial, muitos 
camponeses foram desligados legalmente da antiga 
terra. Deveriam pagar, para adquirir propriedade ou 
arrendamento. Por não possuírem recursos, engrossaram 
a camada cada vez maior de jornaleiros e trabalhadores 
volantes, outros, mesmo tendo propriedade sobre um 
pequeno lote, suplementavam sua existência com o 
assalariamento esporádico. 
MACHADO, P. P. Política e colonização no Império . Porto Alegre: EdUFRGS, 1999 (adaptado). 
Texto II 
Com a globalização da economia ampliou-se a 
hegemonia do modelo de desenvolvimento agropecuário, 
com seus padrões tecnológicos, caracterizando o 
agronegócio. Essa nova face da agricultura capitalista 
também mudou a forma de controle e exploração da terra. 
Ampliou-se, assim, a ocupação de áreas agricultáveis e 
as fronteiras agrícolas se estenderam. 
SADER, E.; JINKINGS, I. Enciclopédia Contemporânea da América Latina e do Caribe . 
São Paulo: Boitempo, 2006 (adaptado). 
Os textos demonstram que, tanto na Europa do século XIX 
quanto no contexto latino-americano do século XXI, as 
alterações tecnológicas vivenciadas no campo interferem 
na vida das populações locais, pois`,
    alternatives: [
      { id: 'A', type: 'text', value: `induzem os jovens ao estudo nas grandes cidades, causando o êxodo rural, uma vez que formados, não retornam à sua região de origem.` },
      { id: 'B', type: 'text', value: `impulsionam as populações locais a buscar linhas de financiamento estatal com o objetivo de ampliar a agricultura familiar, garantindo sua fixação no campo.` },
      { id: 'C', type: 'text', value: `ampliam o protagonismo do Estado, possibilitando a grupos econômicos ruralistas produzir e impor políticas agrícolas, ampliando o controle que tinham dos mercados.` },
      { id: 'D', type: 'text', value: `aumentam a produção e a produtividade de determinadas culturas em função da intensificação da mecanização, do uso de agrotóxicos e cultivo de plantas transgênicas.` },
      { id: 'E', type: 'text', value: `desorganizam o modo tradicional de vida impelindo-as à busca por melhores condições no espaço urbano ou em outros países em situações muitas vezes precárias.` },
    ],
    correct: 'E',
    explanation: `O Texto I trata dos camponeses europeus do século XIX, desligados da terra e empurrados ao trabalho volante, e o Texto II, das transformações tecnológicas do agronegócio latino-americano no século XXI. Ambos mostram que as mudanças técnicas no campo desorganizam o modo tradicional de vida, impelindo as populações à busca por melhores condições nas cidades ou em outros países, muitas vezes em situação precária, por isso a alternativa E está correta. A restringe o fenômeno ao estudo nas grandes cidades; B e C supõem financiamento estatal e protagonismo do Estado em favor da agricultura familiar, não descritos; e D destaca apenas o aumento da produtividade, sem tratar do impacto sobre as populações locais.`,
    subject: ['geo'],
    topics: ['Agricultura e pecuária', 'Globalização', 'Questões aleatórias'],
  },
  {
    id: 40,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Em um engenho sois imitadores de Cristo crucificado 
porque padeceis em um modo muito semelhante o que 
o mesmo Senhor padeceu na sua cruz e em toda a 
sua paixão. A sua cruz foi composta de dois madeiros, 
e a vossa em um engenho é de três. Também ali não 
faltaram as canas, porque duas vezes entraram na 
Paixão: uma vez servindo para o cetro de escárnio, 
e outra vez para a esponja em que lhe deram o fel. A 
Paixão de Cristo parte foi de noite sem dormir, parte foi 
de dia sem descansar, e tais são as vossas noites e os 
vossos dias. Cristo despido, e vós despidos; Cristo sem 
comer, e vós famintos; Cristo em tudo maltratado, e vós 
maltratados em tudo. Os ferros, as prisões, os açoites, as 
chagas, os nomes afrontosos, de tudo isto se compõe a 
vossa imitação, que, se for acompanhada de paciência, 
também terá merecimento de martírio. 
VIEIRA, A. Sermoes . Tomo XI. Porto: Lello & Irmão, 1951 (adaptado). 
O trecho do sermão do Padre Antônio Vieira estabelece 
uma relação entre a Paixão de Cristo e`,
    alternatives: [
      { id: 'A', type: 'text', value: `a atividade dos comerciantes de açúcar nos portos brasileiros.` },
      { id: 'B', type: 'text', value: `a função dos mestres de açúcar durante a safra de cana.` },
      { id: 'C', type: 'text', value: `o sofrimento dos jesuítas na conversão dos ameríndios.` },
      { id: 'D', type: 'text', value: `o papel dos senhores na administração dos engenhos.` },
      { id: 'E', type: 'text', value: `o trabalho dos escravos na produção de açúcar.` },
    ],
    correct: 'E',
    explanation: `No sermão, Padre Antônio Vieira compara os padecimentos de Cristo na Paixão ao sofrimento vivido no engenho, mencionando as canas, as prisões, os açoites e os maus-tratos. Essa analogia estabelece uma relação entre a Paixão de Cristo e o trabalho dos escravos na produção de açúcar, cujo sofrimento Vieira aproxima do martírio, por isso a alternativa E está correta. A e B deslocam o foco para comerciantes e mestres de açúcar; C para o sofrimento dos jesuítas na conversão dos indígenas; e D para o papel dos senhores na administração dos engenhos, quando o paralelo construído no texto recai sobre o padecimento dos escravizados.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Escravidão e abolição', 'Questões aleatórias'],
  },
  {
    id: 41,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Fugindo à luta de classes, a nossa organização 
sindical tem sido um instrumento de harmonia e de 
cooperação entre o capital e o trabalho. Não se limitou 
a um sindicalismo puramente “operário”, que conduziria 
certamente a luta contra o “patrão”, como aconteceu com 
outros povos. 
FALCÃO, W. Cartas sindicais. In: Boletim do Ministério do Trabalho, Indústria e Comércio. 
Rio de Janeiro, 10 (85), set. 1941 (adaptado). 
Nesse documento oficial, à época do Estado Novo (1937- 
1945), é apresentada uma concepção de organização 
sindical que`,
    alternatives: [
      { id: 'A', type: 'text', value: `elimina os conflitos no ambiente das fábricas.` },
      { id: 'B', type: 'text', value: `limita os direitos associativos do segmento patronal.` },
      { id: 'C', type: 'text', value: `orienta a busca do consenso entre trabalhadores e patrões.` },
      { id: 'D', type: 'text', value: `proíbe o registro de estrangeiros nas entidades profissionais do país.` },
      { id: 'E', type: 'text', value: `desobriga o Estado quanto aos direitos e deveres da classe trabalhadora.` },
    ],
    correct: 'C',
    explanation: `O documento de W. Falcão, da época do Estado Novo (1937-1945), define a organização sindical como instrumento de harmonia e cooperação entre o capital e o trabalho, rejeitando o sindicalismo 'operário' voltado à luta contra o patrão. Trata-se, portanto, de uma concepção que orienta a busca do consenso entre trabalhadores e patrões, própria do corporativismo varguista, por isso a alternativa C está correta. A exagera ao dizer que elimina os conflitos; B afirma que limita direitos patronais; D que proíbe o registro de estrangeiros; e E que desobriga o Estado de direitos e deveres trabalhistas, pontos que não correspondem à ideia de colaboração entre as classes expressa no texto.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 42,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O uso da água aumenta de acordo com as necessidades da
população no mundo. Porém, diferentemente do que se possa
imaginar, o aumento do consumo de água superou em duas vezes o
crescimento populacional durante o século XX. TEIXEIRA, W. et
al. Decifrando a Terra . São Paulo: Cia. Editora Nacional,
2009. Uma estratégia socioespacial que pode contribuir para
alterar a lógica de uso da água apresentada no texto é a`,
    alternatives: [
      { id: 'A', type: 'text', value: `ampliação de sistemas de reutilização hídrica.` },
      { id: 'B', type: 'text', value: `expansão da irrigação por aspersão das lavouras.` },
      { id: 'C', type: 'text', value: `intensificação do controle do desmatamento de florestas.` },
      { id: 'D', type: 'text', value: `adoção de técnicas tradicionais de produção.` },
      { id: 'E', type: 'text', value: `criação de incentivos fiscais para o cultivo de produtos orgânicos.` },
    ],
    correct: 'A',
    explanation: `O texto de Teixeira mostra que o consumo de água cresceu mais que o dobro da população ao longo do século XX, pressionando os recursos hídricos. Uma estratégia socioespacial capaz de alterar essa lógica de uso é a ampliação de sistemas de reutilização hídrica, que reduz a demanda por novas captações, por isso a alternativa A está correta. B e C propõem expandir a irrigação por aspersão e intensificar o controle do desmatamento, medidas que não diminuem diretamente o consumo; D fala em técnicas tradicionais de produção; e E em incentivos fiscais a produtos orgânicos, iniciativas que não enfrentam o problema do uso crescente da água.`,
    subject: ['geo'],
    topics: ['Meio ambiente e sustentabilidade', 'Energia e recursos naturais', 'Questões aleatórias'],
  },
  {
    id: 43,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Minha vida é andar 
Por esse país 
Pra ver se um dia 
Descanso feliz 
Guardando as recordações 
Das terras onde passei 
Andando pelos sertões 
E dos amigos que lá deixei 
GONZAGA, L.; CORDOVIL. H. A vida de viajante, 1953. Disponível em: www.recife.pe.gov.br. 
Acesso em: 20 fev. 2012 (fragmento). 
A letra dessa canção reflete elementos identitários que 
representam a`,
    alternatives: [
      { id: 'A', type: 'text', value: `valorização das características naturais do Sertão nordestino.` },
      { id: 'B', type: 'text', value: `denúncia da precariedade social provocada pela seca.` },
      { id: 'C', type: 'text', value: `experiência de deslocamento vivenciada pelo migrante.` },
      { id: 'D', type: 'text', value: `profunda desigualdade social entre as regiões brasileiras.` },
      { id: 'E', type: 'text', value: `discriminação dos nordestinos nos grandes centros urbanos.` },
    ],
    correct: 'C',
    explanation: `A canção 'A vida de viajante', de Luiz Gonzaga, retrata alguém que percorre o país guardando recordações das terras por onde passa e dos amigos que deixou. Os elementos identitários da letra representam a experiência de deslocamento vivenciada pelo migrante, típica do retirante nordestino, por isso a alternativa C está correta. A reduz a canção à valorização das características naturais do Sertão; B e E a interpretam como denúncia da seca ou da discriminação nos centros urbanos, temas não centrais na letra; e D a vincula à desigualdade entre regiões, quando o foco está na vivência do próprio viajante em movimento.`,
    subject: ['geo'],
    topics: ['Demografia', 'Questões aleatórias'],
  },
  {
    id: 44,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Próximo da Igreja dedicada a São Gonçalo nos deparamos com uma
impressionante multidão que dançava ao som de suas violas. Tão
logo viram o Vice-Rei, cercaram-no e o obrigaram a dançar e
pular, exercício violento e pouco apropriado tanto para sua
idade quanto posição. Tivemos nós mesmos que entrar na dança,
por bem ou por mal, e não deixou de ser interessante ver numa
igreja padres, mulheres, frades, cavalheiros e escravos a
dançar e pular misturados, e a gritar a plenos pulmões “Viva
São Gonçalo do Amarante”. Barbinais, Le Gentil. Noveau Voyage
autour du monde. Apud: TINHORÃO, J. R. As festas no Brasil
Colonial. São Paulo: Ed. 34, 2000 (adaptado) . O viajante
francês, ao descrever suas impressões sobre uma festa ocorrida
em Salvador, em 1717, demonstra dificuldade em entendê-la,
porque, como outras manifestações religiosas do período
colonial, ela`,
    alternatives: [
      { id: 'A', type: 'text', value: `seguia os preceitos advindos da hierarquia católica romana.` },
      { id: 'B', type: 'text', value: `demarcava a submissão do povo à autoridade constituída.` },
      { id: 'C', type: 'text', value: `definia o pertencimento dos padres às camadas populares.` },
      { id: 'D', type: 'text', value: `afirmava um sentido comunitário de partilha da devoção.` },
      { id: 'E', type: 'text', value: `harmonizava as relações sociais entre escravos e senhores.` },
    ],
    correct: 'D',
    explanation: `O relato do viajante francês descreve, em 1717, uma festa de São Gonçalo em Salvador na qual a multidão dançava e pulava dentro da igreja, misturando padres, mulheres, escravos e cavalheiros. Sua dificuldade de compreensão explica-se porque, como outras manifestações religiosas coloniais, a festa afirmava um sentido comunitário de partilha da devoção, distinto da religiosidade formal europeia, por isso a alternativa D está correta. A associa a festa aos preceitos rígidos da hierarquia católica romana, contrariados pela cena; B e E a leem como submissão à autoridade ou harmonização entre escravos e senhores; e C supõe que os padres pertenciam às camadas populares, aspecto não indicado no texto.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 45,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Disponível em: http://nutriteengv.blogspot.com.br. Acesso em: 28 dez. 2011. 
Na charge faz-se referência a uma modificação produtiva 
ocorrida na agricultura. Uma contradição presente no 
espaço rural brasileiro derivada dessa modificação 
produtiva está presente em:`,
    images: ['/enem/2012/images/enem_2012_d1_q45.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Expansão das terras agricultáveis, com manutenção de desigualdades sociais.` },
      { id: 'B', type: 'text', value: `Modernização técnica do território, com redução do nível de emprego formal.` },
      { id: 'C', type: 'text', value: `Valorização de atividades de subsistência, com redução da produtividade da terra.` },
      { id: 'D', type: 'text', value: `Desenvolvimento de núcleos policultores, com ampliação da concentração fundiária.` },
      { id: 'E', type: 'text', value: `Melhora da qualidade dos produtos, com retração na exportação de produtos primários.` },
    ],
    correct: 'A',
    explanation: `A charge ironiza a promessa de que as plantas transgênicas acabariam com a fome no mundo, promessa não cumprida. A contradição no espaço rural brasileiro derivada dessa modernização produtiva é a expansão das terras agricultáveis acompanhada da manutenção das desigualdades sociais, pois o aumento da produção convive com a persistência da fome e da concentração fundiária, por isso a alternativa A está correta. B toma a redução do emprego formal como contradição central, aspecto secundário; C fala em valorização da subsistência com queda de produtividade; D em núcleos policultores, quando os transgênicos reforçam a monocultura; e E em melhora da qualidade com retração das exportações, contrária ao avanço do agronegócio exportador.`,
    subject: ['geo'],
    topics: ['Agricultura e pecuária', 'Questões aleatórias'],
  },
  {
    id: 46,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Para diminuir o acúmulo de lixo e o desperdício 
de materiais de valor econômico e, assim, reduzir a 
exploração de recursos naturais, adotou-se, em escala 
internacional, a política dos três erres: Redução, 
Reutilização e Reciclagem. 
Um exemplo de reciclagem é a utilização de`,
    alternatives: [
      { id: 'A', type: 'text', value: `garrafas de vidro retornáveis para cerveja ou refrigerante.` },
      { id: 'B', type: 'text', value: `latas de alumínio como material para fabricação de lingotes.` },
      { id: 'C', type: 'text', value: `sacos plásticos de supermercado como acondicionantes de lixo caseiro.` },
      { id: 'D', type: 'text', value: `embalagens plásticas vazias e limpas para acondicionar outros alimentos.` },
      { id: 'E', type: 'text', value: `garrafas PET recortadas em tiras para fabricação de cerdas de vassouras.` },
    ],
    correct: 'B',
    explanation: `A reciclagem consiste em transformar um material já usado em matéria-prima para a fabricação de um novo produto, alterando-o física ou quimicamente. Fundir as latas de alumínio para obter lingotes reaproveita o metal como matéria-prima de novos objetos, caracterizando reciclagem. As demais situações (garrafas de vidro retornáveis, sacos plásticos para lixo, embalagens reaproveitadas e garrafas PET viradas cerdas) são exemplos de reutilização, em que o objeto é usado de novo sem ser reprocessado. Por isso, o único exemplo de reciclagem é a transformação das latas de alumínio em lingotes (alternativa B).`,
    subject: ['qui'],
    topics: ['Química Ambiental', 'Questões aleatórias'],
  },
  {
    id: 47,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Um dos problemas ambientais vivenciados pela 
agricultura hoje em dia é a compactação do solo, devida 
ao intenso tráfego de máquinas cada vez mais pesadas, 
reduzindo a produtividade das culturas. 
Uma das formas de prevenir o problema de compactação 
do solo é substituir os pneus dos tratores por pneus mais`,
    alternatives: [
      { id: 'A', type: 'text', value: `largos, reduzindo a pressão sobre o solo.` },
      { id: 'B', type: 'text', value: `estreitos, reduzindo a pressão sobre o solo.` },
      { id: 'C', type: 'text', value: `largos, aumentando a pressão sobre o solo.` },
      { id: 'D', type: 'text', value: `estreitos, aumentando a pressão sobre o solo.` },
      { id: 'E', type: 'text', value: `altos, reduzindo a pressão sobre o solo.` },
    ],
    correct: 'A',
    explanation: `A pressão exercida sobre o solo é a razão entre a força (o peso do trator) e a área de contato dos pneus, P = F/A. Trocar os pneus por modelos mais largos aumenta a área de contato com o solo. Com a mesma força distribuída em uma área maior, a pressão diminui. Assim, a compactação é reduzida ao se usarem pneus mais largos, que reduzem a pressão sobre o solo (alternativa A).`,
    subject: ['fis'],
    topics: ['Hidrostática', 'Questões aleatórias'],
  },
  {
    id: 48,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O milho transgênico é produzido a partir da 
manipulação do milho original, com a transferência, 
para este, de um gene de interesse retirado de outro 
organismo de espécie diferente. 
A característica de interesse será manifestada em 
decorrência`,
    alternatives: [
      { id: 'A', type: 'text', value: `do incremento do DNA a partir da duplicação do gene transferido.` },
      { id: 'B', type: 'text', value: `da transcrição do RNA transportador a partir do gene transferido.` },
      { id: 'C', type: 'text', value: `da expressão de proteínas sintetizadas a partir do DNA não hibridizado.` },
      { id: 'D', type: 'text', value: `da síntese de carboidratos a partir da ativação do DNA do milho original.` },
      { id: 'E', type: 'text', value: `da tradução do RNA mensageiro sintetizado a partir do DNA recombinante.` },
    ],
    correct: 'E',
    explanation: `No milho transgênico, um gene de interesse de outra espécie é inserido no DNA da planta, formando um DNA recombinante. Para que a característica desejada se manifeste, esse gene precisa ser expresso: é transcrito em RNA mensageiro, que em seguida é traduzido em proteína. É a proteína sintetizada a partir do gene transferido que confere a nova característica. Portanto, a característica resulta da tradução do RNA mensageiro sintetizado a partir do DNA recombinante (alternativa E).`,
    subject: ['bio'],
    topics: ['Biotecnologia', 'Questões aleatórias'],
  },
  {
    id: 49,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A produção mundial de alimentos poderia se reduzir a 40% da
atual sem a aplicação de controle sobre as pragas agrícolas.
Por outro lado, o uso frequente dos agrotóxicos pode causar
contaminação em solos, águas superficiais e subterrâneas,
atmosfera e alimentos. Os biopesticidas, tais como a piretrina
e a coronopilina, têm sido uma alternativa na diminuição dos
prejuízos econômicos, sociais e ambientais gerados pelos
agrotóxicos. Piretrina Coronopilina Identifique as funções
orgânicas presentes simultaneamente nas estruturas dos dois
biopesticidas apresentados:`,
    images: ['/enem/2012/images/enem_2012_d1_q49.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Éter e éster.` },
      { id: 'B', type: 'text', value: `Cetona e éster.` },
      { id: 'C', type: 'text', value: `Álcool e cetona.` },
      { id: 'D', type: 'text', value: `Aldeído e cetona.` },
      { id: 'E', type: 'text', value: `Éter e ácido carboxílico.` },
    ],
    correct: 'B',
    explanation: `Na piretrina identificam-se um grupo éster (a ligação –C(=O)–O– entre as duas porções da molécula) e um grupo cetona (o C=O do anel ciclopentenona). Na coronopilina há um álcool (–OH), uma cetona (C=O no anel) e um éster cíclico (lactona, –O–C=O). As funções orgânicas presentes simultaneamente nas duas estruturas são, portanto, a cetona e o éster. Logo, a resposta é a alternativa B.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 50,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Os carrinhos de brinquedo podem ser de vários tipos. 
Dentre eles, há os movidos a corda, em que uma mola 
em seu interior é comprimida quando a criança puxa o 
carrinho para trás. Ao ser solto, o carrinho entra em 
movimento enquanto a mola volta à sua forma inicial. 
O processo de conversão de energia que ocorre no 
carrinho descrito também é verificado em`,
    alternatives: [
      { id: 'A', type: 'text', value: `um dínamo.` },
      { id: 'B', type: 'text', value: `um freio de automóvel.` },
      { id: 'C', type: 'text', value: `um motor a combustão.` },
      { id: 'D', type: 'text', value: `uma usina hidroelétrica.` },
      { id: 'E', type: 'text', value: `uma atiradeira (estilingue).` },
    ],
    correct: 'E',
    explanation: `No carrinho de corda, a energia potencial elástica armazenada na mola comprimida é convertida em energia cinética, colocando o brinquedo em movimento. Procura-se outro dispositivo em que ocorra essa mesma conversão (potencial elástica → cinética). Na atiradeira (estilingue), o elástico esticado armazena energia potencial elástica que, ao ser solto, transforma-se em energia cinética do projétil. As demais opções envolvem outras conversões (elétrica, por atrito, química ou gravitacional). Portanto, o mesmo processo é verificado em uma atiradeira (alternativa E).`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias'],
  },
  {
    id: 51,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Pesticidas são contaminantes ambientais altamente tóxicos aos
seres vivos e, geralmente, com grande persistência ambiental.
A busca por novas formas de eliminação dos pesticidas tem
aumentado nos últimos anos, uma vez que as técnicas atuais são
economicamente dispendiosas e paliativas. A biorremediação de
pesticidas utilizando microrganismos tem se mostrado uma
técnica muito promissora para essa finalidade, por apresentar
vantagens econômicas e ambientais. Para ser utilizado nesta
técnica promissora, um microrganismo deve ser capaz de`,
    alternatives: [
      { id: 'A', type: 'text', value: `transferir o contaminante do solo para a água.` },
      { id: 'B', type: 'text', value: `absorver o contaminante sem alterá-lo quimicamente.` },
      { id: 'C', type: 'text', value: `apresentar alta taxa de mutação ao longo das gerações.` },
      { id: 'D', type: 'text', value: `estimular o sistema imunológico do homem contra o contaminante.` },
      { id: 'E', type: 'text', value: `metabolizar o contaminante, liberando subprodutos menos tóxicos ou atóxicos.` },
    ],
    correct: 'E',
    explanation: `A biorremediação usa microrganismos para degradar contaminantes, transformando-os quimicamente. Para ser útil nessa técnica, o microrganismo precisa metabolizar o pesticida, ou seja, participar de reações que o decompõem. Esse metabolismo deve gerar subprodutos menos tóxicos ou atóxicos, reduzindo o impacto ambiental. Apenas absorver ou transferir o contaminante não o elimina, e alta taxa de mutação ou estímulo imunológico não têm relação com a degradação. Portanto, o microrganismo deve metabolizar o contaminante, liberando subprodutos menos tóxicos ou atóxicos (alternativa E).`,
    subject: ['bio'],
    topics: ['Biotecnologia', 'Questões aleatórias'],
  },
  {
    id: 52,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Medidas de saneamento básico são fundamentais 
no processo de promoção de saúde e qualidade de vida 
da população. Muitas vezes, a falta de saneamento está 
relacionada com o aparecimento de várias doenças. 
Nesse contexto, um paciente dá entrada em um pronto 
atendimento relatando que há 30 dias teve contato com 
águas de enchente. Ainda informa que nesta localidade 
não há rede de esgoto e drenagem de águas pluviais e que 
a coleta de lixo é inadequada. Ele apresenta os seguintes 
sintomas: febre, dor de cabeça e dores musculares. 
Disponível em: http://portal.saude.gov.br. Acesso em: 27 fev. 2012 (adaptado). 
Relacionando os sintomas apresentados com as 
condições sanitárias da localidade, há indicações de que 
o paciente apresenta um caso de`,
    alternatives: [
      { id: 'A', type: 'text', value: `difteria.` },
      { id: 'B', type: 'text', value: `botulismo.` },
      { id: 'C', type: 'text', value: `tuberculose.` },
      { id: 'D', type: 'text', value: `leptospirose.` },
      { id: 'E', type: 'text', value: `meningite meningocócica.` },
    ],
    correct: 'D',
    explanation: `O paciente teve contato com águas de enchente em local sem rede de esgoto e com coleta de lixo inadequada, condições que favorecem a contaminação da água pela urina de ratos. A leptospirose é causada pela bactéria Leptospira, presente nessa urina, que penetra no organismo pelo contato com águas contaminadas. Os sintomas relatados — febre, dor de cabeça e dores musculares — são compatíveis com a doença. As demais opções não se relacionam a enchentes e falta de esgoto dessa forma. Portanto, trata-se de um caso de leptospirose (alternativa D).`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 53,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O rótulo de um desodorante aerossol informa ao 
consumidor que o produto possui em sua composição 
os gases isobutano, butano e propano, dentre outras 
substâncias. Além dessa informação, o rótulo traz, ainda, 
a inscrição “Não contém CFC”. As reações a seguir, que 
ocorrem na estratosfera, justificam a não utilização de 
CFC (clorofluorcarbono ou Freon) nesse desodorante: 
 I) CF₂Cℓ₂ --UV--> CF₂Cℓ + Cℓ
II) Cℓ + O₃ --> O₂ + CℓO
A preocupação com as possíveis ameaças à camada 
de ozônio (O₃ ) baseia-se na sua principal função: proteger 
a matéria viva na Terra dos efeitos prejudiciais dos raios 
solares ultravioleta. A absorção da radiação ultravioleta 
pelo ozônio estratosférico é intensa o suficiente para 
eliminar boa parte da fração de ultravioleta que é 
prejudicial à vida. 
A finalidade da utilização dos gases isobutano, butano e 
propano neste aerossol é`,
    alternatives: [
      { id: 'A', type: 'text', value: `substituir o CFC, pois não reagem com o ozônio, servindo como gases propelentes em aerossóis.` },
      { id: 'B', type: 'text', value: `servir como propelentes, pois, como são muito reativos, capturam o Freon existente livre na atmosfera, impedindo a destruição do ozônio.` },
      { id: 'C', type: 'text', value: `reagir com o ar, pois se decompõem espontaneamente em dióxido de carbono (CO₂ ) e água (H₂ O), que não atacam o ozônio.` },
      { id: 'D', type: 'text', value: `impedir a destruição do ozônio pelo CFC, pois os hidrocarbonetos gasosos reagem com a radiação UV, liberando hidrogênio (H₂ ), que reage com o oxigênio do ar (O₂ ), formando água (H₂ O).` },
      { id: 'E', type: 'text', value: `destruir o CFC, pois reagem com a radiação UV, liberando carbono (C), que reage com o oxigênio do ar (O₂ ), formando dióxido de carbono (CO₂ ), que é inofensivo para a camada de ozônio.` },
    ],
    correct: 'A',
    explanation: `As reações mostram que o CFC (Freon) libera, sob radiação ultravioleta, radicais cloro que destroem o ozônio. Os gases isobutano, butano e propano são hidrocarbonetos usados como propelentes do aerossol, cuja função é expulsar o conteúdo da embalagem. Diferentemente do CFC, eles não reagem com o ozônio, substituindo o Freon sem prejudicar a camada de O3. Por isso, a finalidade desses gases é substituir o CFC, servindo como propelentes por não reagirem com o ozônio (alternativa A).`,
    subject: ['qui'],
    topics: ['Química Ambiental', 'Questões aleatórias'],
  },
  {
    id: 54,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Em um dia de chuva muito forte, constatou-se 
uma goteira sobre o centro de uma piscina coberta, 
formando um padrão de ondas circulares. Nessa 
situação, observou-se que caíam duas gotas a cada 
segundo. A distância entre duas cristas consecutivas 
era de 25 cm e cada uma delas se aproximava da 
borda da piscina com velocidade de 1,0 m/s. Após 
algum tempo a chuva diminuiu e a goteira passou a 
cair uma vez por segundo. 
Com a diminuição da chuva, a distância entre as cristas 
e a velocidade de propagação da onda se tornaram, 
respectivamemente,`,
    alternatives: [
      { id: 'A', type: 'text', value: `maior que 25 cm e maior que 1,0 m/s.` },
      { id: 'B', type: 'text', value: `maior que 25 cm e igual a 1,0 m/s.` },
      { id: 'C', type: 'text', value: `menor que 25 cm e menor que 1,0 m/s.` },
      { id: 'D', type: 'text', value: `menor que 25 cm e igual a 1,0 m/s.` },
      { id: 'E', type: 'text', value: `igual a 25 cm e igual a 1,0 m/s.` },
    ],
    correct: 'B',
    explanation: `A velocidade de propagação de uma onda depende do meio (a água da piscina), e não da frequência da fonte; logo, ela permanece igual a 1,0 m/s mesmo quando a goteira pinga mais devagar. A distância entre cristas consecutivas é o comprimento de onda, dado por λ = v/f. Ao diminuir a frequência (de duas para uma gota por segundo) mantendo-se v constante, o comprimento de onda aumenta. Assim, a distância entre as cristas fica maior que 25 cm e a velocidade continua igual a 1,0 m/s (alternativa B).`,
    subject: ['fis'],
    topics: ['Ondulatória', 'Questões aleatórias'],
  },
  {
    id: 55,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O mecanismo que permite articular uma porta (de 
um móvel ou de acesso) é a dobradiça. Normalmente, 
são necessárias duas ou mais dobradiças para que a 
porta seja fixada no móvel ou no portal, permanecendo 
em equilíbrio e podendo ser articulada com facilidade. 
No plano, o diagrama vetorial das forças que as 
dobradiças exercem na porta está representado em`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2012/images/enem_2012_d1_q55_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2012/images/enem_2012_d1_q55_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2012/images/enem_2012_d1_q55_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2012/images/enem_2012_d1_q55_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2012/images/enem_2012_d1_q55_E.jpg` },
    ],
    correct: 'D',
    explanation: `A porta é sustentada por duas dobradiças em sua borda, e seu peso atua no centro, criando um torque que tende a girá-la. Para o equilíbrio de translação, as dobradiças precisam fornecer, somadas, uma força vertical para cima que equilibre o peso. Para o equilíbrio de rotação, a dobradiça superior puxa a porta horizontalmente em direção ao batente, enquanto a inferior a empurra no sentido oposto. Compondo as componentes vertical e horizontal, a força na dobradiça de cima aponta para cima e para o lado do batente, e a de baixo aponta para cima e para o lado oposto. Esse par de forças diagonais é o representado na alternativa D.`,
    subject: ['fis'],
    topics: ['Dinâmica', 'Questões aleatórias'],
  },
  {
    id: 56,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A figura representa um dos modelos de um 
sistema de interações entre seres vivos. Ela apresenta 
duas propriedades, P 1 e P 2 , que interagem em I , para 
afetar uma terceira propriedade, P 3 , quando o sistema 
é alimentado por uma fonte de energia, E. Essa 
figura pode simular um sistema de campo em que P 1 
representa as plantas verdes; P 2 um animal herbívoro 
e P 3 , um animal onívoro. 
ODUM, E. P. Ecologia . Rio de Janeiro: Guanabara Koogan, 1988. 
A função interativa I representa a proporção de`,
    images: ['/enem/2012/images/enem_2012_d1_q56.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `herbivoria entre P 1 e P 2 .` },
      { id: 'B', type: 'text', value: `polinização entre P 1 e P 2 .` },
      { id: 'C', type: 'text', value: `P 3 utilizada na alimentação de P 1 e P 2 .` },
      { id: 'D', type: 'text', value: `P 1 ou P 2 utilizada na alimentação de P 3 .` },
      { id: 'E', type: 'text', value: `energia de P 1 e de P 2 que saem do sistema.` },
    ],
    correct: 'D',
    explanation: `Na figura, P1 representa as plantas verdes, P2 o herbívoro e P3 o onívoro; a função I combina os fluxos F3 (vindo de P1) e F4 (vindo de P2) e os direciona, por F5, para P3. Isso indica que P3, por ser onívoro, alimenta-se tanto das plantas (P1) quanto do herbívoro (P2). Assim, a interação I representa P1 ou P2 sendo utilizada na alimentação de P3. Logo, a resposta é a alternativa D.`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 57,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Muitas espécies de plantas lenhosas são encontradas no cerrado
brasileiro. Para a sobrevivência nas condições de longos
períodos de seca e queimadas periódicas, próprias desse
ecossistema, essas plantas desenvolveram estruturas muito
peculiares. As estruturas adaptativas mais apropriadas para a
sobrevivência desse grupo de plantas nas condições ambientais
do referido ecossistema são:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Cascas finas e sem sulcos ou fendas.` },
      { id: 'B', type: 'text', value: `Caules estreitos e retilíneos.` },
      { id: 'C', type: 'text', value: `Folhas estreitas e membranosas.` },
      { id: 'D', type: 'text', value: `Gemas apicais com densa pilosidade.` },
      { id: 'E', type: 'text', value: `Raízes superficiais, em geral, aéreas.` },
    ],
    correct: 'D',
    explanation: `As plantas lenhosas do cerrado enfrentam longos períodos de seca e queimadas periódicas, o que exige proteção contra o fogo e a perda de água. Gemas apicais revestidas por densa pilosidade ficam protegidas do calor das queimadas e da desidratação, garantindo o rebrote da planta. Cascas finas, caules estreitos, folhas membranosas e raízes superficiais seriam desvantajosas nesse ambiente. Portanto, as estruturas adaptativas mais apropriadas são as gemas apicais com densa pilosidade (alternativa D).`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
  },
  {
    id: 58,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A própolis é um produto natural conhecido por suas
propriedades anti-inflamatórias e cicatrizantes. Esse material
contém mais de 200 compostos identificados até o momento.
Dentre eles, alguns são de estrutura simples, como é o caso do
C₆H₅CO₂CH₂CH₃, cuja estrutura está mostrada a seguir. O C O
CH₂ CH₃ O ácido carboxílico e o álcool capazes de produzir o
éster em apreço por meio da reação de esterificação são,
respectivamente,`,
    images: ['/enem/2012/images/enem_2012_d1_q58.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `ácido benzoico e etanol.` },
      { id: 'B', type: 'text', value: `ácido propanoico e hexanol.` },
      { id: 'C', type: 'text', value: `ácido fenilacético e metanol.` },
      { id: 'D', type: 'text', value: `ácido propiônico e cicloexanol.` },
      { id: 'E', type: 'text', value: `ácido acético e álcool benzílico.` },
    ],
    correct: 'A',
    explanation: `O éster mostrado é o benzoato de etila, de fórmula C6H5–CO–O–CH2CH3. Em uma esterificação, o éster forma-se a partir de um ácido carboxílico e de um álcool, com eliminação de água. A porção C6H5–CO– provém do ácido benzoico (C6H5COOH) e a porção –O–CH2CH3 provém do etanol (CH3CH2OH). Portanto, o ácido carboxílico e o álcool são, respectivamente, o ácido benzoico e o etanol (alternativa A).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 59,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `No Japão, um movimento nacional para a promoção da 
luta contra o aquecimento global leva o slogan : 1 pessoa, 
1 dia, 1 kg de CO₂ a menos! A ideia é cada pessoa reduzir 
em 1 kg a quantidade de CO₂ emitida todo dia, por meio de 
pequenos gestos ecológicos, como diminuir a queima de 
gás de cozinha. 
Um hambúrguer ecológico? É pra já! Disponível em: http://lqes.iqm.unicamp.br. 
Acesso em: 24 fev. 2012 (adaptado). 
Considerando um processo de combustão completa de 
um gás de cozinha composto exclusivamente por butano 
(C₄ H₁₀ ), a mínima quantidade desse gás que um japonês 
deve deixar de queimar para atender à meta diária, 
apenas com esse gesto, é de 
Dados: CO₂ (44 g/mol); C₄ H₁₀ (58 g/mol)`,
    alternatives: [
      { id: 'A', type: 'text', value: `0,25 kg.` },
      { id: 'B', type: 'text', value: `0,33 kg.` },
      { id: 'C', type: 'text', value: `1,0 kg.` },
      { id: 'D', type: 'text', value: `1,3 kg.` },
      { id: 'E', type: 'text', value: `3,0 kg.` },
    ],
    correct: 'B',
    explanation: `Na combustão completa do butano, 1 mol de C4H10 produz 4 mols de CO2: C4H10 + 13/2 O2 → 4 CO2 + 5 H2O. Em massa, 58 g de butano geram 4 × 44 = 176 g de CO2. Para deixar de emitir 1 kg (1000 g) de CO2, a massa de butano que não deve ser queimada é m = 1000 × (58/176) ≈ 330 g ≈ 0,33 kg. Portanto, a quantidade mínima é de cerca de 0,33 kg (alternativa B).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
  {
    id: 60,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Para melhorar a mobilidade urbana na rede metroviária é necessário minimizar o tempo entre estacoes. Para isso 
a administração do metrô de uma grande cidade adotou o seguinte procedimento entre duas estacoes: a locomotiva 
parte do repouso com aceleração constante por um terço do tempo de percurso, mantêm a velocidade constante por 
outro terço e reduz sua velocidade com desaceleração constante no trecho final, ate parar. 
Qual é o gráfico de posição (eixo vertical) em função do tempo (eixo horizontal) que representa o movimento 
desse trem? 
posição`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2012/images/enem_2012_d1_q60_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2012/images/enem_2012_d1_q60_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2012/images/enem_2012_d1_q60_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2012/images/enem_2012_d1_q60_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2012/images/enem_2012_d1_q60_E.jpg` },
    ],
    correct: 'C',
    explanation: `No primeiro terço do percurso o trem parte do repouso com aceleração constante, de modo que a posição cresce de forma curva, com concavidade para cima (a inclinação da curva aumenta). No terço central, a velocidade é constante, e a posição varia linearmente (reta inclinada). No terço final há desaceleração constante até parar, e a posição cresce com concavidade para baixo, tornando-se horizontal no instante em que o trem para. O gráfico que reúne essas três etapas — curva côncava para cima, trecho reto e curva que se achata no topo — é o da alternativa C.`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 61,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A eficiência das lâmpadas pode ser comparada 
utilizando a razão, considerada linear, entre a quantidade 
de luz produzida e o consumo. A quantidade de luz é 
medida pelo fluxo luminoso, cuja unidade é o lúmen (lm). 
O consumo está relacionado à potência elétrica da 
lâmpada que é medida em watt (W). Por exemplo, 
uma lâmpada incandescente de 40 W emite cerca de 
600 lm, enquanto uma lâmpada fluorescente de 40 W 
emite cerca de 3 000 lm. 
Disponível em: http://tecnologia.terra.com.br. Acesso em: 29 fev. 2012 (adaptado). 
A eficiência de uma lâmpada incandescente de 40 W é`,
    alternatives: [
      { id: 'A', type: 'text', value: `maior que a de uma lâmpada fluorescente de 8 W, que produz menor quantidade de luz.` },
      { id: 'B', type: 'text', value: `maior que a de uma lâmpada fluorescente de 40 W, que produz menor quantidade de luz.` },
      { id: 'C', type: 'text', value: `menor que a de uma lâmpada fluorescente de 8 W, que produz a mesma quantidade de luz.` },
      { id: 'D', type: 'text', value: `menor que a de uma lâmpada fluorescente de 40 W, pois consome maior quantidade de energia.` },
      { id: 'E', type: 'text', value: `igual a de uma lâmpada fluorescente de 40 W, que consome a mesma quantidade de energia.` },
    ],
    correct: 'C',
    explanation: `A eficiência luminosa é a razão entre o fluxo luminoso (em lúmens) e a potência consumida (em watts). Para a incandescente de 40 W: 600 lm ÷ 40 W = 15 lm/W. Para a fluorescente de 40 W: 3000 lm ÷ 40 W = 75 lm/W; uma fluorescente de 8 W, com essa mesma eficiência, produziria 8 × 75 = 600 lm, igual à luz da incandescente de 40 W. Logo, a eficiência da incandescente de 40 W é menor que a de uma fluorescente de 8 W que produz a mesma quantidade de luz (alternativa C).`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 62,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Não é de hoje que o homem cria, artificialmente, 
variedades de peixes por meio da hibridação. Esta é uma 
técnica muito usada pelos cientistas e pelos piscicultores 
porque os híbridos resultantes, em geral, apresentam 
maior valor comercial do que a média de ambas as 
espécies parentais, além de reduzir a sobrepesca no 
ambiente natural. 
Terra da Gente , ano 4, n. 47, mar. 2008 (adaptado). 
Sem controle, esses animais podem invadir rios e lagos 
naturais, se reproduzir e`,
    alternatives: [
      { id: 'A', type: 'text', value: `originar uma nova espécie poliploide.` },
      { id: 'B', type: 'text', value: `substituir geneticamente a espécie natural.` },
      { id: 'C', type: 'text', value: `ocupar o primeiro nível trófico no hábitat aquático.` },
      { id: 'D', type: 'text', value: `impedir a interação biológica entre as espécies parentais.` },
      { id: 'E', type: 'text', value: `produzir descendentes com o código genético modificado.` },
    ],
    correct: 'B',
    explanation: `A hibridação cruza espécies diferentes, e os híbridos, ao escaparem para rios e lagos naturais, podem se reproduzir e cruzar com as espécies parentais. Esse cruzamento contínuo mistura e dilui o patrimônio genético das populações naturais. Com o tempo, os genes dos híbridos podem predominar, substituindo geneticamente a espécie natural. Portanto, sem controle, esses animais podem substituir geneticamente a espécie natural (alternativa B).`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 63,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Há milhares de anos o homem faz uso da 
biotecnologia para a produção de alimentos como 
pães, cervejas e vinhos. Na fabricação de pães, por 
exemplo, são usados fungos unicelulares, chamados 
de leveduras, que são comercializados como fermento 
biológico. Eles são usados para promover o crescimento 
da massa, deixando-a leve e macia. 
O crescimento da massa do pão pelo processo citado é 
resultante da`,
    alternatives: [
      { id: 'A', type: 'text', value: `liberação de gás carbônico.` },
      { id: 'B', type: 'text', value: `formação de ácido lático.` },
      { id: 'C', type: 'text', value: `formação de água.` },
      { id: 'D', type: 'text', value: `produção de ATP.` },
      { id: 'E', type: 'text', value: `liberação de calor.` },
    ],
    correct: 'A',
    explanation: `O crescimento da massa do pão deve-se à ação das leveduras (fungos unicelulares), que realizam fermentação. Na fermentação alcoólica, os açúcares da massa são transformados em álcool e gás carbônico (CO2). O CO2 liberado forma bolhas que ficam retidas na massa, fazendo-a crescer e tornando-a leve e macia. Portanto, o crescimento resulta da liberação de gás carbônico (alternativa A).`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 64,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Alguns povos indígenas ainda preservam suas 
tradições realizando a pesca com lanças, demonstrando 
uma notável habilidade. Para fisgar um peixe em um 
lago com águas tranquilas o índio deve mirar abaixo da 
posição em que enxerga o peixe. 
Ele deve proceder dessa forma porque os raios de luz`,
    alternatives: [
      { id: 'A', type: 'text', value: `refletidos pelo peixe não descrevem uma trajetória retilínea no interior da água.` },
      { id: 'B', type: 'text', value: `emitidos pelos olhos do índio desviam sua trajetória quando passam do ar para a água.` },
      { id: 'C', type: 'text', value: `espalhados pelo peixe são refletidos pela superfície da água.` },
      { id: 'D', type: 'text', value: `emitidos pelos olhos do índio são espalhados pela superfície da água.` },
      { id: 'E', type: 'text', value: `refletidos pelo peixe desviam sua trajetória quando passam da água para o ar.` },
    ],
    correct: 'E',
    explanation: `Enxergamos o peixe graças à luz que parte dele (por ele refletida/espalhada) e chega aos olhos do índio. Ao passar da água para o ar, essa luz sofre refração, ou seja, desvia sua trajetória por mudar de meio. Esse desvio faz o peixe parecer estar em uma posição mais alta do que a real, por isso o índio deve mirar abaixo da imagem que vê. Logo, isso ocorre porque os raios refletidos pelo peixe desviam sua trajetória ao passar da água para o ar (alternativa E).`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 65,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Os vegetais biossintetizam determinadas substâncias (por
exemplo, alcaloides e flavonoides), cuja estrutura química e
concentração variam num mesmo organismo em diferentes épocas
do ano e estágios de desenvolvimento. Muitas dessas
substâncias são produzidas para a adaptação do organismo às
variações ambientais (radiação UV, temperatura, parasitas,
herbívoros, estímulo a polinizadores etc.) ou fisiológicas
(crescimento, envelhecimento etc.). As variações qualitativa e
quantitativa na produção dessas substâncias durante um ano são
possíveis porque o material genético do indivíduo`,
    alternatives: [
      { id: 'A', type: 'text', value: `sofre constantes recombinações para adaptar-se.` },
      { id: 'B', type: 'text', value: `muda ao longo do ano e em diferentes fases da vida.` },
      { id: 'C', type: 'text', value: `cria novos genes para biossíntese de substâncias específicas.` },
      { id: 'D', type: 'text', value: `altera a sequência de bases nitrogenadas para criar novas substâncias.` },
      { id: 'E', type: 'text', value: `possui genes transcritos diferentemente de acordo com cada necessidade.` },
    ],
    correct: 'E',
    explanation: `Todas as células de um vegetal têm o mesmo material genético, que não muda ao longo da vida nem cria novos genes conforme a necessidade. O que varia é a expressão gênica: diferentes genes são transcritos (ativados) em diferentes épocas, estágios ou condições ambientais. Essa regulação faz com que as substâncias produzidas variem em tipo e quantidade ao longo do ano. Portanto, as variações ocorrem porque o indivíduo possui genes transcritos diferentemente de acordo com cada necessidade (alternativa E).`,
    subject: ['bio'],
    topics: ['Genética', 'Questões aleatórias'],
  },
  {
    id: 66,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O benzeno é um hidrocarboneto aromático presente no petróleo,
no carvão e em condensados de gás natural. Seus metabólitos
são altamente tóxicos e se depositam na medula óssea e nos
tecidos gordurosos. O limite de exposição pode causar anemia,
câncer (leucemia) e distúrbios do comportamento. Em termos de
reatividade química, quando um eletrófilo se liga ao benzeno,
ocorre a formação de um intermediário, o carbocátion. Por fim,
ocorre a adição ou substituição eletrofílica. Disponível em:
www.sindipetro.org.br. Acesso em: 1 mar. 2012 (adaptado).
Energia Livre carbocátion (I) produto (II) produto (III) Br₂
catalisador + + Progresso da Reação Disponível em:
www.qmc.ufsc.br. Acesso em: 1 mar. 2012 (adaptado). Com base
no texto e no gráfico do progresso da reação apresentada, as
estruturas químicas encontradas em I, II e III são,
respectivamente: H Br H + Br Br`,
    images: ['/enem/2012/images/enem_2012_d1_q66.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'A',
    explanation: `Na reação do benzeno com Br2 na presença de catalisador, ocorre substituição eletrofílica. O eletrófilo (Br+) liga-se ao anel formando o carbocátion intermediário (I), o complexo sigma não aromático, em que um carbono passou a ser saturado, há perda temporária da aromaticidade e a carga positiva fica deslocalizada. A partir desse intermediário, a perda de H+ regenera a aromaticidade e leva ao bromobenzeno, produto de substituição mais estável e de menor energia (III); a via alternativa, de adição, origina um produto não aromático de maior energia (II). As estruturas que correspondem a I, II e III, nessa ordem, são as da alternativa A.`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 67,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O manual que acompanha uma ducha higiênica 
informa que a pressão mínima da água para o seu 
funcionamento apropriado é de 20 kPa. A figura mostra a 
instalação hidráulica com a caixa d’água e o cano ao qual 
deve ser conectada a ducha. 
CAIXA 
D’ÁGUA 
O valor da pressão da água na ducha está associado 
à altura`,
    images: ['/enem/2012/images/enem_2012_d1_q67.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `h1.` },
      { id: 'B', type: 'text', value: `h2.` },
      { id: 'C', type: 'text', value: `h3.` },
      { id: 'D', type: 'text', value: `h4.` },
      { id: 'E', type: 'text', value: `h5.` },
    ],
    correct: 'C',
    explanation: `A pressão da água na ducha é uma pressão hidrostática, dada por P = ρ·g·h, em que h é a altura da coluna de água medida desde a superfície livre da água na caixa até a saída da ducha. Portanto, o que determina essa pressão é a diferença de nível entre o topo da água na caixa d'água e o ponto da ducha. Na figura, essa distância vertical corresponde à altura h3. Logo, a pressão está associada à altura h3 (alternativa C).`,
    subject: ['fis'],
    topics: ['Hidrostática', 'Questões aleatórias'],
  },
  {
    id: 68,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O menor tamanduá do mundo é solitário e tem 
hábitos noturnos, passa o dia repousando, geralmente 
em um emaranhado de cipós, com o corpo curvado 
de tal maneira que forma uma bola. Quando em 
atividade, se locomove vagarosamente e emite som 
semelhante a um assobio. A cada gestação, gera um 
único filhote. A cria é deixada em uma árvore à noite 
e é amamentada pela mãe até que tenha idade para 
procurar alimento. As fêmeas adultas têm territórios 
grandes e o território de um macho inclui o de várias 
fêmeas, o que significa que ele tem sempre diversas 
pretendentes à disposição para namorar! 
Ciência Hoje das Crianças , ano 19, n. 174, nov. 2006 (adaptado). 
Essa descrição sobre o tamanduá diz respeito ao seu`,
    alternatives: [
      { id: 'A', type: 'text', value: `hábitat.` },
      { id: 'B', type: 'text', value: `biótopo.` },
      { id: 'C', type: 'text', value: `nível trófico.` },
      { id: 'D', type: 'text', value: `nicho ecológico.` },
      { id: 'E', type: 'text', value: `potencial biótico.` },
    ],
    correct: 'D',
    explanation: `O texto descreve o modo de vida do tamanduá: seus hábitos (noturno, solitário), como repousa e se locomove, o que come, como se reproduz e cuida do filhote, e o tamanho e uso do território. O conjunto dessas relações do organismo com o ambiente e com outros seres — seu papel e seu modo de vida — define o nicho ecológico. O hábitat seria apenas o lugar onde vive, e biótopo, nível trófico e potencial biótico referem-se a aspectos pontuais. Portanto, a descrição corresponde ao nicho ecológico (alternativa D).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 69,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Uma dona de casa acidentalmente deixou cair na geladeira a
água proveniente do degelo de um peixe, o que deixou um cheiro
forte e desagradável dentro do eletrodoméstico. Sabe-se que o
odor característico de peixe se deve às aminas e que esses
compostos se comportam como bases. Na tabela são listadas as
concentrações hidrogeniônicas de alguns materiais encontrados
na cozinha, que a dona de casa pensa em utilizar na limpeza da
geladeira.

Dentre os materiais listados, quais são apropriados para
amenizar esse odor?`,
    images: ['/enem/2012/images/enem_2012_d1_q69.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Álcool ou sabão.` },
      { id: 'B', type: 'text', value: `Suco de limão ou álcool.` },
      { id: 'C', type: 'text', value: `Suco de limão ou vinagre.` },
      { id: 'D', type: 'text', value: `Suco de limão, leite ou sabão.` },
      { id: 'E', type: 'text', value: `Sabão ou carbonato de sódio/barrilha.` },
    ],
    correct: 'C',
    explanation: `O odor é causado por aminas, que têm caráter básico; para amenizá-lo, devem-se usar materiais ácidos, que as neutralizam. Quanto maior a concentração de H3O+, mais ácido é o material. Pela tabela, o suco de limão (10⁻² mol/L) e o vinagre (10⁻³ mol/L) têm as maiores concentrações de H3O+, sendo os mais ácidos. Logo, os materiais apropriados para neutralizar o odor são o suco de limão ou o vinagre (alternativa C).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 70,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Em uma planície, ocorreu um acidente ambiental em decorrência
do derramamento de grande quantidade de um hidrocarboneto que
se apresenta na forma pastosa à temperatura ambiente. Um
químico ambiental utilizou uma quantidade apropriada de uma
solução de para-dodecil-benzenossulfonato de sódio, um agente
tensoativo sintético, para diminuir os impactos desse
acidente. Essa intervenção produz resultados positivos para o
ambiente porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `promove uma reação de substituição no hidrocarboneto, tornando-o menos letal ao ambiente.` },
      { id: 'B', type: 'text', value: `a hidrólise do para-dodecil-benzenossulfonato de sódio produz energia térmica suficiente para vaporizar o hidrocarboneto.` },
      { id: 'C', type: 'text', value: `a mistura desses reagentes provoca a combustão do hidrocarboneto, o que diminui a quantidade dessa substância na natureza.` },
      { id: 'D', type: 'text', value: `a solução de para-dodecil-benzenossulfonato possibilita a solubilização do hidrocarboneto.` },
      { id: 'E', type: 'text', value: `o reagente adicionado provoca uma solidificação do hidrocarboneto, o que facilita sua retirada do ambiente.` },
    ],
    correct: 'D',
    explanation: `O para-dodecil-benzenossulfonato de sódio é um tensoativo (detergente), cuja molécula tem uma parte apolar (a cadeia), afim do hidrocarboneto, e uma parte polar/iônica, afim da água. Essa dupla afinidade permite que o tensoativo envolva o óleo derramado e o disperse na água, formando uma emulsão. Com isso, o hidrocarboneto é solubilizado/dispersado, reduzindo os impactos do derramamento. Portanto, a intervenção dá certo porque a solução de para-dodecil-benzenossulfonato possibilita a solubilização do hidrocarboneto (alternativa D).`,
    subject: ['qui'],
    topics: ['Físico-química', 'Questões aleatórias'],
  },
  {
    id: 71,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Suponha que você seja um consultor e foi contratado 
para assessorar a implantação de uma matriz energética 
em um pequeno país com as seguintes características: 
região plana, chuvosa e com ventos constantes, dispondo 
de poucos recursos hídricos e sem reservatórios de 
combustíveis fósseis. 
De acordo com as características desse país, a matriz 
energética de menor impacto e risco ambientais é a 
baseada na energia`,
    alternatives: [
      { id: 'A', type: 'text', value: `dos biocombustíveis, pois tem menor impacto ambiental e maior disponibilidade.` },
      { id: 'B', type: 'text', value: `solar, pelo seu baixo custo e pelas características do país favoráveis à sua implantação.` },
      { id: 'C', type: 'text', value: `nuclear, por ter menor risco ambiental e ser adequada a locais com menor extensão territorial.` },
      { id: 'D', type: 'text', value: `hidráulica, devido ao relevo, à extensão territorial do país e aos recursos naturais disponíveis.` },
      { id: 'E', type: 'text', value: `eólica, pelas características do país e por não gerar gases do efeito estufa nem resíduos de operação.` },
    ],
    correct: 'E',
    explanation: `O país é plano, chuvoso e com ventos constantes, mas tem poucos recursos hídricos e nenhum reservatório de combustíveis fósseis, o que inviabiliza as matrizes hidráulica e fóssil e, pela complexidade e risco, a nuclear. A presença de ventos constantes favorece a energia eólica, adequada ao relevo plano. Além disso, a geração eólica não emite gases do efeito estufa nem deixa resíduos de operação, atendendo ao menor impacto ambiental pedido. Portanto, a matriz mais indicada é a eólica (alternativa E).`,
    subject: ['fis'],
    topics: ['Trabalho, energia e potência', 'Questões aleatórias'],
  },
  {
    id: 72,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Uma empresa de transportes precisa efetuar a 
entrega de uma encomenda o mais breve possível. 
Para tanto, a equipe de logística analisa o trajeto desde 
a empresa até o local da entrega. Ela verifica que o 
trajeto apresenta dois trechos de distâncias diferentes e 
velocidades máximas permitidas diferentes. No primeiro 
trecho, a velocidade máxima permitida é de 80 km/h e a 
distância a ser percorrida é de 80 km. No segundo trecho, 
cujo comprimento vale 60 km, a velocidade máxima 
permitida é 120 km/h. 
Supondo que as condições de trânsito sejam favoráveis 
para que o veículo da empresa ande continuamente 
na velocidade máxima permitida, qual será o tempo 
necessário, em horas, para a realização da entrega?`,
    alternatives: [
      { id: 'A', type: 'text', value: `0,7` },
      { id: 'B', type: 'text', value: `1,4` },
      { id: 'C', type: 'text', value: `1,5` },
      { id: 'D', type: 'text', value: `2,0` },
      { id: 'E', type: 'text', value: `3,0` },
    ],
    correct: 'C',
    explanation: `O tempo de cada trecho é obtido por t = distância ÷ velocidade. No primeiro trecho: 80 km ÷ 80 km/h = 1,0 h. No segundo trecho: 60 km ÷ 120 km/h = 0,5 h. Somando, o tempo total é 1,0 + 0,5 = 1,5 h (alternativa C).`,
    subject: ['fis'],
    topics: ['Cinemática', 'Questões aleatórias'],
  },
  {
    id: 73,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Para ligar ou desligar uma mesma lâmpada a partir de dois 
interruptores, conectam-se os interruptores para que a mudança 
de posição de um deles faça ligar ou desligar a lâmpada, não 
importando qual a posição do outro. Esta ligação é conhecida 
como interruptores paralelos. Este interruptor é uma chave 
de duas posições constituída por um polo e dois terminais, 
conforme mostrado nas figuras de um mesmo interruptor. Na 
Posição I a chave conecta o polo ao terminal superior, e na 
Posição II a chave o conecta ao terminal inferior. 
O circuito que cumpre a finalidade de funcionamento 
descrita no texto é:`,
    images: ['/enem/2012/images/enem_2012_d1_q73.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'E',
    explanation: `O funcionamento com interruptores paralelos exige que cada chave tenha um polo e dois terminais, e que os dois terminais de uma chave estejam ligados aos dois terminais da outra por dois fios (os condutores de retorno). A lâmpada e a fonte ficam em série com os polos das duas chaves, de modo que mudar a posição de qualquer uma delas abre ou fecha o circuito. O único esquema em que essas ligações formam esse caminho corretamente, acendendo e apagando a lâmpada a partir de qualquer interruptor, é o da alternativa E.`,
    subject: ['fis'],
    topics: ['Eletrodinâmica', 'Questões aleatórias'],
  },
  {
    id: 74,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A característica que permite identificar um planeta no céu é o
seu movimento relativo às estrelas fixas. Se observarmos a
posição de um planeta por vários dias, verificaremos que sua
posição em relação às estrelas fixas se modifica regularmente.
A figura destaca o movimento de Marte observado em intervalos
de 10 dias, registrado da Terra. 155º 150º 145º 140º 135º 130º
+20 MARTE +10 Projecto Física . Lisboa: Fundação Calouste
Gulbenkian, 1980 (adaptado). Qual a causa da forma da
trajetória do planeta Marte registrada na figura?`,
    images: ['/enem/2012/images/enem_2012_d1_q74.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A maior velocidade orbital da Terra faz com que, em certas épocas, ela ultrapasse Marte.` },
      { id: 'B', type: 'text', value: `A presença de outras estrelas faz com que sua trajetória seja desviada por meio da atração gravitacional.` },
      { id: 'C', type: 'text', value: `A órbita de Marte, em torno do Sol, possui uma forma elíptica mais acentuada que a dos demais planetas.` },
      { id: 'D', type: 'text', value: `A atração gravitacional entre a Terra e Marte faz com que este planeta apresente uma órbita irregular em torno do Sol.` },
      { id: 'E', type: 'text', value: `A proximidade de Marte com Júpiter, em algumas épocas do ano, faz com que a atração gravitacional de Júpiter interfira em seu movimento.` },
    ],
    correct: 'A',
    explanation: `O movimento em laço (retrógrado aparente) de Marte não é real, mas um efeito de perspectiva observado da Terra. Como a Terra está mais próxima do Sol, sua velocidade orbital é maior que a de Marte; assim, em certas épocas a Terra ultrapassa Marte em suas órbitas. Durante essa ultrapassagem, Marte parece, visto da Terra, mover-se para trás em relação às estrelas fixas, desenhando o laço registrado na figura. Portanto, a causa é a maior velocidade orbital da Terra, que faz com que ela ultrapasse Marte (alternativa A).`,
    subject: ['fis'],
    topics: ['Gravitação', 'Questões aleatórias'],
  },
  {
    id: 75,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Em certos locais, larvas de moscas, criadas em arroz 
cozido, são utilizadas como iscas para pesca. Alguns 
criadores, no entanto, acreditam que essas larvas surgem 
espontaneamente do arroz cozido, tal como preconizado 
pela teoria da geração espontânea. 
Essa teoria começou a ser refutada pelos cientistas ainda 
no século XVII, a partir dos estudos de Redi e Pasteur, 
que mostraram experimentalmente que`,
    alternatives: [
      { id: 'A', type: 'text', value: `seres vivos podem ser criados em laboratório.` },
      { id: 'B', type: 'text', value: `a vida se originou no planeta a partir de microrganismos.` },
      { id: 'C', type: 'text', value: `o ser vivo é oriundo da reprodução de outro ser vivo pré-existente.` },
      { id: 'D', type: 'text', value: `seres vermiformes e microrganismos são evolutivamente aparentados.` },
      { id: 'E', type: 'text', value: `vermes e microrganismos são gerados pela matéria existente nos cadáveres e nos caldos nutritivos, respectivamente.` },
    ],
    correct: 'C',
    explanation: `A teoria da geração espontânea (abiogênese) afirmava que seres vivos surgiam da matéria bruta. Os experimentos de Redi (com carne e frascos) e de Pasteur (com os frascos "pescoço de cisne") mostraram que, impedindo o acesso de organismos pré-existentes, não surgiam novos seres. Com isso, demonstrou-se a biogênese: todo ser vivo origina-se da reprodução de outro ser vivo pré-existente. Portanto, a alternativa correta é a C.`,
    subject: ['bio'],
    topics: ['Evolução', 'Questões aleatórias'],
  },
  {
    id: 76,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Os tubos de PVC, material organoclorado sintético, 
são normalmente utilizados como encanamento na 
construção civil. Ao final da sua vida útil, uma das formas 
de descarte desses tubos pode ser a incineração. Nesse 
processo libera-se HCℓ (g), cloreto de hidrogênio, dentre 
outras substâncias. Assim, é necessário um tratamento 
para evitar o problema da emissão desse poluente. 
Entre as alternativas possíveis para o tratamento, é 
apropriado canalizar e borbulhar os gases provenientes 
da incineração em`,
    alternatives: [
      { id: 'A', type: 'text', value: `água dura.` },
      { id: 'B', type: 'text', value: `água de cal.` },
      { id: 'C', type: 'text', value: `água salobra.` },
      { id: 'D', type: 'text', value: `água destilada.` },
      { id: 'E', type: 'text', value: `água desmineralizada.` },
    ],
    correct: 'B',
    explanation: `A incineração dos tubos de PVC libera cloreto de hidrogênio (HCl) gasoso, que, em água, origina ácido clorídrico — um gás de caráter ácido. Para neutralizá-lo antes de ser lançado na atmosfera, deve-se borbulhá-lo em uma solução básica. A água de cal é uma solução de hidróxido de cálcio, Ca(OH)2, de caráter básico, que reage com o HCl e o neutraliza. As demais águas (dura, salobra, destilada e desmineralizada) são praticamente neutras e não neutralizam o gás. Portanto, deve-se borbulhar os gases em água de cal (alternativa B).`,
    subject: ['qui'],
    topics: ['Química Ambiental', 'Questões aleatórias'],
  },
  {
    id: 77,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Um consumidor desconfia que a balança do 
supermercado não está aferindo corretamente a massa 
dos produtos. Ao chegar a casa resolve conferir se a 
balança estava descalibrada. Para isso, utiliza um recipiente 
provido de escala volumétrica, contendo 1,0 litro d’água. 
Ele coloca uma porção dos legumes que comprou dentro 
do recipiente e observa que a água atinge a marca de
1,5 litro e também que a porção não ficara totalmente
submersa, com 1/3 de seu volume fora d’água. Para
concluir o teste, o consumidor, com ajuda da internet,
verifica que a densidade dos legumes, em questão,
é a metade da densidade da água, onde, ρágua = 1 g/cm³.
No supermercado a balança registrou a massa da porção
de legumes igual a 0,500 kg (meio quilograma). 
Considerando que o método adotado tenha boa precisão, 
o consumidor concluiu que a balança estava descalibrada 
e deveria ter registrado a massa da porção de legumes 
igual a`,
    alternatives: [
      { id: 'A', type: 'text', value: `0,073 kg.` },
      { id: 'B', type: 'text', value: `0,167 kg.` },
      { id: 'C', type: 'text', value: `0,250 kg.` },
      { id: 'D', type: 'text', value: `0,375 kg.` },
      { id: 'E', type: 'text', value: `0,750 kg.` },
    ],
    correct: 'D',
    explanation: `A densidade dos legumes é metade da da água: 0,5 g/cm³. Ao serem colocados na água, o volume submerso desloca 1,5 − 1,0 = 0,5 L = 500 cm³; como 1/3 do volume fica fora da água, esse volume submerso equivale a 2/3 do volume total, logo (2/3)·V = 500 cm³ e V = 750 cm³. A massa real é m = densidade × volume = 0,5 g/cm³ × 750 cm³ = 375 g = 0,375 kg. Como a balança do supermercado registrou 0,500 kg, o valor correto seria 0,375 kg (alternativa D).`,
    subject: ['fis'],
    topics: ['Hidrostática', 'Questões aleatórias'],
  },
  {
    id: 78,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Os freios ABS são uma importante medida de segurança no
trânsito, os quais funcionam para impedir o travamento das
rodas do carro quando o sistema de freios é acionado,
liberando as rodas quando estão no limiar do deslizamento.
Quando as rodas travam, a força de frenagem é governada pelo
atrito cinético. As representações esquemáticas da força de
atrito f at entre os pneus e a pista, em função da pressão p
aplicada no pedal de freio, para carros sem ABS e com ABS,
respectivamente, são: f at f at`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2012/images/enem_2012_d1_q78_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2012/images/enem_2012_d1_q78_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2012/images/enem_2012_d1_q78_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2012/images/enem_2012_d1_q78_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2012/images/enem_2012_d1_q78_E.jpg` },
    ],
    correct: 'A',
    explanation: `Sem ABS, à medida que se aumenta a pressão no pedal, a força de atrito cresce até a roda travar; ao travar, o atrito passa de estático para cinético (menor) e torna-se praticamente constante — a curva sobe e depois cai para um patamar. Com ABS, o sistema impede o travamento, liberando as rodas no limiar do deslizamento, de modo que a força de atrito se mantém próxima do valor máximo, oscilando em "dente de serra". As representações que mostram, respectivamente, a subida seguida de patamar mais baixo (sem ABS) e a subida com oscilações próximas ao máximo (com ABS) estão na alternativa A.`,
    subject: ['fis'],
    topics: ['Dinâmica', 'Questões aleatórias'],
  },
  {
    id: 79,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O armazenamento de certas vitaminas no organismo apresenta
grande dependência de sua solubilidade. Por exemplo, vitaminas
hidrossolúveis devem ser incluídas na dieta diária, enquanto
vitaminas lipossolúveis são armazenadas em quantidades
suficientes para evitar doenças causadas pela sua carência. A
seguir são apresentadas as estruturas químicas de cinco
vitaminas necessárias ao organismo. I II III IV V Dentre as
vitaminas apresentadas na figura, aquela que necessita de
maior suplementação diária é`,
    images: ['/enem/2012/images/enem_2012_d1_q79.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I.` },
      { id: 'B', type: 'text', value: `II.` },
      { id: 'C', type: 'text', value: `III.` },
      { id: 'D', type: 'text', value: `IV.` },
      { id: 'E', type: 'text', value: `V.` },
    ],
    correct: 'C',
    explanation: `Vitaminas hidrossolúveis (solúveis em água) não são armazenadas em quantidade pelo organismo e, por isso, precisam ser repostas diariamente, exigindo maior suplementação. Entre as estruturas, a de número III (ácido ascórbico, vitamina C) é pequena e possui vários grupos –OH, o que a torna polar e muito solúvel em água. As demais (I, II, IV e V) têm longas cadeias carbônicas apolares, sendo lipossolúveis e armazenáveis. Portanto, a vitamina que necessita de maior suplementação diária é a III (alternativa C).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 80,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A condição física apresentada pelo personagem da tirinha é um fator de risco que pode desencadear doenças como`,
    images: ['/enem/2012/images/enem_2012_d1_q80.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `anemia.` },
      { id: 'B', type: 'text', value: `beribéri.` },
      { id: 'C', type: 'text', value: `diabetes.` },
      { id: 'D', type: 'text', value: `escorbuto.` },
      { id: 'E', type: 'text', value: `fenilcetonúria.` },
    ],
    correct: 'C',
    explanation: `O personagem está acima do peso ("fora de forma"), ou seja, apresenta sobrepeso/obesidade. A obesidade é um importante fator de risco para doenças metabólicas, em especial o diabetes (tipo 2), por estar associada à resistência à insulina. Anemia, beribéri e escorbuto decorrem de carências nutricionais, e a fenilcetonúria é genética, não relacionadas ao excesso de peso. Portanto, a condição apresentada pode desencadear o diabetes (alternativa C).`,
    subject: ['bio'],
    topics: ['Fisiologia Humana', 'Questões aleatórias'],
  },
  {
    id: 81,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Paleontólogos estudam fósseis e esqueletos de 
dinossauros para tentar explicar o desaparecimento 
desses animais. Esses estudos permitem afirmar que 
esses animais foram extintos há cerca de 65 milhões 
de anos. Uma teoria aceita atualmente é a de que um 
asteroide colidiu com a Terra, formando uma densa 
nuvem de poeira na atmosfera. 
De acordo com essa teoria, a extinção ocorreu em função 
de modificações no planeta que`,
    alternatives: [
      { id: 'A', type: 'text', value: `desestabilizaram o relógio biológico dos animais, causando alterações no código genético.` },
      { id: 'B', type: 'text', value: `reduziram a penetração da luz solar até a superfície da Terra, interferindo no fluxo energético das teias tróficas.` },
      { id: 'C', type: 'text', value: `causaram uma série de intoxicações nos animais, provocando a bioacumulação de partículas de poeira nos organismos.` },
      { id: 'D', type: 'text', value: `resultaram na sedimentação das partículas de poeira levantada com o impacto do meteoro, provocando o desaparecimento de rios e lagos.` },
      { id: 'E', type: 'text', value: `evitaram a precipitação de água até a superfície da Terra, causando uma grande seca que impediu a retroalimentação do ciclo hidrológico.` },
    ],
    correct: 'B',
    explanation: `Segundo a teoria, o impacto do asteroide levantou uma densa nuvem de poeira na atmosfera. Essa nuvem reduziu a penetração da luz solar até a superfície, prejudicando a fotossíntese dos produtores. Com a base das cadeias alimentares comprometida, houve interrupção do fluxo de energia nas teias tróficas, afetando todos os níveis e levando à extinção. Portanto, as modificações reduziram a penetração da luz solar, interferindo no fluxo energético das teias tróficas (alternativa B).`,
    subject: ['bio'],
    topics: ['Ecologia', 'Questões aleatórias'],
  },
  {
    id: 82,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `O boato de que os lacres das latas de alumínio teriam 
um alto valor comercial levou muitas pessoas a juntarem 
esse material na expectativa de ganhar dinheiro com sua 
venda. As empresas fabricantes de alumínio esclarecem 
que isso não passa de uma “lenda urbana”, pois ao retirar 
o anel da lata, dificulta-se a reciclagem do alumínio. Como 
a liga do qual é feito o anel contém alto teor de magnésio, 
se ele não estiver junto com a lata, fica mais fácil ocorrer 
a oxidação do alumínio no forno. A tabela apresenta as 
semirreações e os valores de potencial padrão de redução 
de alguns metais: 
 2+ + 2 e - → Cu 
+0,34 
Disponível em: www.sucatas.com. Acesso em: 28 fev. 2012 (adaptado). 
Com base no texto e na tabela, que metais poderiam 
entrar na composição do anel das latas com a mesma 
função do magnésio, ou seja, proteger o alumínio da 
oxidação nos fornos e não deixar diminuir o rendimento 
da sua reciclagem?`,
    images: ['/enem/2012/images/enem_2012_d1_q82.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Somente o lítio, pois ele possui o menor potencial de redução.` },
      { id: 'B', type: 'text', value: `Somente o cobre, pois ele possui o maior potencial de redução.` },
      { id: 'C', type: 'text', value: `Somente o potássio, pois ele possui potencial de redução mais próximo do magnésio.` },
      { id: 'D', type: 'text', value: `Somente o cobre e o zinco, pois eles sofrem oxidação mais facilmente que o alumínio.` },
      { id: 'E', type: 'text', value: `Somente o lítio e o potássio, pois seus potenciais de redução são menores do que o do alumínio.` },
    ],
    correct: 'E',
    explanation: `O magnésio protege o alumínio por oxidar-se mais facilmente, ou seja, por ter potencial de redução mais negativo (−2,36 V) que o do alumínio (−1,66 V). Para cumprir a mesma função, o metal substituto precisa ter potencial de redução menor (mais negativo) que o do alumínio. Na tabela, apenas o lítio (−3,05 V) e o potássio (−2,93 V) têm potenciais menores que −1,66 V; o zinco (−0,76 V) e o cobre (+0,34 V) não serviriam. Portanto, somente o lítio e o potássio poderiam substituir o magnésio (alternativa E).`,
    subject: ['qui'],
    topics: ['Eletroquímica', 'Questões aleatórias'],
  },
  {
    id: 83,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Aumentar a eficiência na queima de combustível dos 
motores a combustão e reduzir suas emissões de poluentes 
é a meta de qualquer fabricante de motores. É também o 
foco de uma pesquisa brasileira que envolve experimentos 
com plasma, o quarto estado da matéria e que está presente 
no processo de ignição. A interação da faísca emitida pela 
vela de ignição com as moléculas de combustível gera o 
plasma que provoca a explosão liberadora de energia que, 
por sua vez, faz o motor funcionar. 
Disponível em: www.inovacaotecnologica.com.br. Acesso em: 22 jul. 2010 (adaptado). 
No entanto, a busca da eficiência referenciada no texto 
apresenta como fator limitante`,
    alternatives: [
      { id: 'A', type: 'text', value: `o tipo de combustível, fóssil, que utilizam. Sendo um insumo não renovável, em algum momento estará esgotado.` },
      { id: 'B', type: 'text', value: `um dos princípios da termodinâmica, segundo o qual o rendimento de uma máquina térmica nunca atinge o ideal.` },
      { id: 'C', type: 'text', value: `o funcionamento cíclico de todos os motores. A repetição contínua dos movimentos exige que parte da energia seja transferida ao próximo ciclo.` },
      { id: 'D', type: 'text', value: `as forças de atrito inevitável entre as peças. Tais forças provocam desgastes contínuos que com o tempo levam qualquer material à fadiga e ruptura.` },
      { id: 'E', type: 'text', value: `a temperatura em que eles trabalham. Para atingir o plasma, é necessária uma temperatura maior que a de fusão do aço com que se fazem os motores.` },
    ],
    correct: 'B',
    explanation: `O texto trata de aumentar a eficiência (rendimento) de motores a combustão, que são máquinas térmicas. Pela segunda lei da termodinâmica, é impossível converter todo o calor em trabalho: parte da energia é sempre dissipada, de modo que o rendimento nunca atinge 100% (o ideal). Esse princípio é o fator que limita fundamentalmente o ganho de eficiência buscado. Portanto, o fator limitante é um dos princípios da termodinâmica, segundo o qual o rendimento de uma máquina térmica nunca atinge o ideal (alternativa B).`,
    subject: ['fis'],
    topics: ['Termodinâmica', 'Questões aleatórias'],
  },
  {
    id: 84,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A falta de conhecimento em relação ao que vem a ser 
um material radioativo e quais os efeitos, consequências 
e usos da irradiação pode gerar o medo e a tomada de 
decisões equivocadas, como a apresentada no exemplo 
a seguir. 
“Uma companhia aérea negou-se a transportar 
material médico por este portar um certificado de 
esterilização por irradiação.” 
Física na Escola , v. 8, n. 2, 2007 (adaptado). 
A decisão tomada pela companhia é equivocada, pois`,
    alternatives: [
      { id: 'A', type: 'text', value: `o material é incapaz de acumular radiação, não se tornando radioativo por ter sido irradiado.` },
      { id: 'B', type: 'text', value: `a utilização de uma embalagem é suficiente para bloquear a radiação emitida pelo material.` },
      { id: 'C', type: 'text', value: `a contaminação radioativa do material não se prolifera da mesma forma que as infecções por microrganismos.` },
      { id: 'D', type: 'text', value: `o material irradiado emite radiação de intensidade abaixo daquela que ofereceria risco à saúde.` },
      { id: 'E', type: 'text', value: `o intervalo de tempo após a esterilização é suficiente para que o material não emita mais radiação.` },
    ],
    correct: 'A',
    explanation: `A esterilização por irradiação usa radiação para matar microrganismos, mas o material irradiado não acumula radiação nem se torna radioativo, não havendo radiação residual sendo emitida por ele depois. Assim, o certificado não indica risco de o material estar "carregado" de radiação. A recusa da companhia é equivocada porque o material é incapaz de acumular radiação, não se tornando radioativo por ter sido irradiado. Portanto, a alternativa correta é a A.`,
    subject: ['fis'],
    topics: ['Física moderna', 'Questões aleatórias'],
  },
  {
    id: 85,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A imagem representa o processo de evolução das 
plantas e algumas de suas estruturas. Para o sucesso 
desse processo, a partir de um ancestral simples, os 
diferentes grupos vegetais desenvolveram estruturas 
adaptativas que lhes permitiram sobreviver em diferentes 
ambientes. 
Vasos condutores 
Disponível em: http://biopibidufsj.blogspot.com. Acesso em: 29 fev. 2012 (adaptado). 
Qual das estruturas adaptativas apresentadas contribuiu 
para uma maior diversidade genética?`,
    images: ['/enem/2012/images/enem_2012_d1_q85.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `As sementes aladas, que favorecem a dispersão aérea.` },
      { id: 'B', type: 'text', value: `Os arquegônios, que protegem o embrião multicelular.` },
      { id: 'C', type: 'text', value: `Os grãos de pólen, que garantem a polinização cruzada.` },
      { id: 'D', type: 'text', value: `Os frutos, que promovem uma maior eficiência reprodutiva.` },
      { id: 'E', type: 'text', value: `Os vasos condutores, que possibilitam o transporte da seiva bruta.` },
    ],
    correct: 'C',
    explanation: `O que aumenta a diversidade genética é a recombinação de genes de indivíduos diferentes, favorecida pela reprodução cruzada. Entre as estruturas citadas, os grãos de pólen permitem a polinização cruzada, levando gametas masculinos de uma planta a outra e promovendo maior variabilidade genética. Sementes aladas e frutos atuam na dispersão e na eficiência reprodutiva, e os vasos condutores no transporte de seiva, sem aumentar diretamente a diversidade genética. Portanto, a estrutura é o grão de pólen, que garante a polinização cruzada (alternativa C).`,
    subject: ['bio'],
    topics: ['Botânica', 'Questões aleatórias'],
  },
  {
    id: 86,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Osmose é um processo espontâneo que ocorre em 
todos os organismos vivos e é essencial à manutenção 
da vida. Uma solução 0,15 mol/L de NaCℓ (cloreto de 
sódio) possui a mesma pressão osmótica das soluções 
presentes nas células humanas. 
A imersão de uma célula humana em uma solução 
0,20 mol/L de NaCℓ tem, como consequência, a`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `adsorção de íons Na + sobre a superfície da célula.` },
      { id: 'B', type: 'text', value: `difusão rápida de íons Na + para o interior da célula.` },
      { id: 'C', type: 'text', value: `diminuição da concentração das soluções presentes na célula.` },
      { id: 'D', type: 'text', value: `transferência de íons Na + da célula para a solução.` },
      { id: 'E', type: 'text', value: `transferência de moléculas de água do interior da célula para a solução.` },
    ],
    correct: 'E',
    explanation: `A solução de 0,20 mol/L de NaCl é mais concentrada que o meio interno da célula (equivalente a 0,15 mol/L), sendo, portanto, hipertônica em relação a ele. Na osmose, a água atravessa a membrana do meio menos concentrado para o mais concentrado em soluto. Assim, a água sai do interior da célula em direção à solução externa, e a célula tende a murchar (desidratar). Portanto, a consequência é a transferência de moléculas de água do interior da célula para a solução (alternativa E).`,
    subject: ['bio'],
    topics: ['Citologia', 'Questões aleatórias'],
  },
  {
    id: 87,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `A doença de Chagas afeta mais de oito milhões de 
brasileiros, sendo comum em áreas rurais. É uma doença 
causada pelo protozoário Trypanosoma cruzi e transmitida 
por insetos conhecidos como barbeiros ou chupanças. 
Uma ação do homem sobre o meio ambiente que tem 
contribuído para o aumento dessa doença é`,
    alternatives: [
      { id: 'A', type: 'text', value: `o consumo de carnes de animais silvestres que são hospedeiros do vetor da doença.` },
      { id: 'B', type: 'text', value: `a utilização de adubos químicos na agricultura que aceleram o ciclo reprodutivo do barbeiro.` },
      { id: 'C', type: 'text', value: `a ausência de saneamento básico que favorece a proliferação do protozoário em regiões habitadas por humanos.` },
      { id: 'D', type: 'text', value: `a poluição dos rios e lagos com pesticidas que exterminam o predador das larvas do inseto transmissor da doença.` },
      { id: 'E', type: 'text', value: `o desmatamento que provoca a migração ou o desaparecimento dos animais silvestres dos quais o barbeiro se alimenta.` },
    ],
    correct: 'E',
    explanation: `O barbeiro, vetor do Trypanosoma cruzi, normalmente se alimenta do sangue de animais silvestres em seu ambiente natural. O desmatamento provoca a migração ou o desaparecimento desses animais, deixando o inseto sem suas fontes habituais de alimento. Em busca de sangue, o barbeiro passa a invadir as habitações humanas, aumentando o contato com as pessoas e a transmissão da doença de Chagas. Portanto, a ação humana que contribui para o aumento da doença é o desmatamento que faz migrar ou desaparecer os animais silvestres dos quais o barbeiro se alimenta (alternativa E).`,
    subject: ['bio'],
    topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
  },
  {
    id: 88,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Nossa pele possui células que reagem à incidência 
de luz ultravioleta e produzem uma substância chamada 
melanina, responsável pela pigmentação da pele. 
Pensando em se bronzear, uma garota vestiu um biquíni, 
acendeu a luz de seu quarto e deitou-se exatamente 
abaixo da lâmpada incandescente. Após várias horas ela 
percebeu que não conseguiu resultado algum. 
O bronzeamente não ocorreu porque a luz emitida pela 
lâmpada incandescente é de`,
    alternatives: [
      { id: 'A', type: 'text', value: `baixa intensidade.` },
      { id: 'B', type: 'text', value: `baixa frequência.` },
      { id: 'C', type: 'text', value: `um espectro contínuo.` },
      { id: 'D', type: 'text', value: `amplitude inadequada.` },
      { id: 'E', type: 'text', value: `curto comprimento de onda.` },
    ],
    correct: 'B',
    explanation: `O bronzeamento é estimulado pela radiação ultravioleta, que tem alta frequência (e curto comprimento de onda). A lâmpada incandescente emite principalmente luz visível e infravermelha, radiações de frequência mais baixa que a do ultravioleta, praticamente sem emitir UV. Sem radiação de frequência suficientemente alta, a pele não é estimulada a produzir melanina, e o bronzeamento não ocorre. Portanto, a luz da lâmpada incandescente é de baixa frequência (alternativa B).`,
    subject: ['fis'],
    topics: ['Óptica', 'Questões aleatórias'],
  },
  {
    id: 89,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Quando colocados em água, os fosfolipídeos tendem 
a formar lipossomos, estruturas formadas por uma 
bicamada lipídica, conforme mostrado na figura. Quando 
rompida, essa estrutura tende a se reorganizar em um 
novo lipossomo. 
Disponível em: http://course1.winona.edu. Acesso em: 1 mar. 2012 (adaptado). 
Esse arranjo característico se deve ao fato de os 
fosfolipídios apresentarem uma natureza`,
    images: ['/enem/2012/images/enem_2012_d1_q89.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `polar, ou seja, serem inteiramente solúveis em água.` },
      { id: 'B', type: 'text', value: `apolar, ou seja, não serem solúveis em solução aquosa.` },
      { id: 'C', type: 'text', value: `anfotérica, ou seja, podem comportar-se como ácidos e bases.` },
      { id: 'D', type: 'text', value: `insaturada, ou seja, possuírem duplas ligações em sua estrutura.` },
      { id: 'E', type: 'text', value: `anfifílica, ou seja, possuírem uma parte hidrofílica e outra hidrofóbica.` },
    ],
    correct: 'E',
    explanation: `Os fosfolipídios possuem uma "cabeça" polar (hidrofílica), que interage com a água, e "caudas" apolares (hidrofóbicas), que a repelem; essa dupla característica é chamada de natureza anfifílica. Em meio aquoso, as cabeças voltam-se para a água e as caudas agrupam-se entre si, formando a bicamada do lipossomo, com os meios aquosos interno e externo em contato com as partes polares. Quando rompida, a estrutura se reorganiza espontaneamente para manter esse arranjo. Portanto, o arranjo deve-se ao caráter anfifílico, com uma parte hidrofílica e outra hidrofóbica (alternativa E).`,
    subject: ['qui'],
    topics: ['Química Orgânica', 'Questões aleatórias'],
  },
  {
    id: 90,
    exam: 'enem',
    year: 2012,
    day: 1,
    text: `Aspartame é um edulcorante artificial (adoçante 
dietético) que apresenta potencial adoçante 200 vezes maior 
que o açúcar comum, permitindo seu uso em pequenas 
quantidades. Muito usado pela indústria alimentícia, 
principalmente nos refrigerantes diet , tem valor energético 
que corresponde a 4 calorias/grama. É contraindicado a 
portadores de fenilcetonúria, uma doença genética rara que 
provoca o acúmulo da fenilalanina no organismo, causando 
retardo mental. O IDA (índice diário aceitável) desse adoçante 
é 40 mg/kg de massa corpórea. 
Disponível em: http://boaspraticasfarmaceuticas.blogspot.com. Acesso em: 27 fev. 2012. 
Com base nas informações do texto, a quantidade 
máxima recomendada de aspartame, em mol, que uma 
pessoa de 70 kg de massa corporal pode ingerir por dia é 
mais próxima de 
Dado: massa molar do aspartame = 294 g/mol`,
    alternatives: [
      { id: 'A', type: 'text', value: `1,3 × 10 -4 .` },
      { id: 'B', type: 'text', value: `9,5 × 10 -3 .` },
      { id: 'C', type: 'text', value: `4 × 10 -2 .` },
      { id: 'D', type: 'text', value: `2,6.` },
      { id: 'E', type: 'text', value: `823.` },
    ],
    correct: 'B',
    explanation: `A quantidade máxima diária de aspartame é o IDA multiplicado pela massa corporal: 40 mg/kg × 70 kg = 2800 mg = 2,8 g. Convertendo em mols pela massa molar (294 g/mol): n = 2,8 g ÷ 294 g/mol ≈ 9,5 × 10⁻³ mol. Portanto, a quantidade máxima é de aproximadamente 9,5 × 10⁻³ mol (alternativa B).`,
    subject: ['qui'],
    topics: ['Química Geral', 'Questões aleatórias'],
  },
];

export default ENEM_2012_D1;
