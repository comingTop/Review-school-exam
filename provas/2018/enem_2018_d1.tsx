import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2018_D1: QuizQuestion[] = [
  {
    id: 1,
    language: 'es',
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `El día en que lo iban a matar, Santiago Nasar se levantó a las 5:30 de la mañana para esperar el buque en que llegaba el obispo. Había soñado que atravesaba un bosque de higuerones donde caía una llovizna tierna, y por un instante fue feliz en el sueño, pero al despertar se sintió por completo salpicado de cagada de pájaros.
"Siempre soñaba con árboles", me dijo Plácida Linero, su madre, evocando 27 años después los pormenores de aquel lunes ingrato. "La semana anterior había soñado que iba solo en un avión de papel de estaño que volaba sin tropezar por entre los almendros", me dijo. Tenía una reputación muy bien ganada de intérprete certera de los sueños ajenos, siempre que se los contaran en ayunas, pero no había advertido ningún augurio aciago en esos dos sueños de su hijo, ni en los otros sueños con árboles que él le había contado en las mañanas que precedieron a su muerte.
MÁRQUEZ, G. G. Crónica de una muerte anunciada. Disponível em: http://biblio3.url.edu.gt. Acesso em: 2 jan. 2015.
Na introdução do romance, o narrador resgata lembranças de Plácida Linero relacionadas a seu filho Santiago Nasar. Nessa introdução, o uso da expressão augurio aciago remete ao(à)`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `relação mística que se estabelece entre Plácida e seu filho Santiago.` },
      { id: 'B', type: 'text', value: `destino trágico de Santiago, que Plácida foi incapaz de prever nos sonhos.` },
      { id: 'C', type: 'text', value: `descompasso entre a felicidade de Santiago nos sonhos e seu azar na realidade.` },
      { id: 'D', type: 'text', value: `crença de Plácida na importância da interpretação dos sonhos para mudar o futuro.` },
      { id: 'E', type: 'text', value: `presença recorrente de elementos sombrios que se revelam nos sonhos de Santiago.` },
    ],
    correct: 'B',
    explanation: `Resposta correta: B. A expressão 'augurio aciago' significa presságio funesto, um sinal de que algo trágico se aproxima. No trecho, Plácida Linero, embora famosa por interpretar sonhos alheios, não percebeu nenhum presságio sombrio nos sonhos do filho Santiago, que seria assassinado. A expressão remete, portanto, ao destino trágico de Santiago, que a mãe foi incapaz de antever (alternativa B). As alternativas A e C deslocam o foco para uma relação mística ou para o contraste entre sonho e realidade, não evocados pela expressão; D inverte o sentido, pois os sonhos não serviriam para mudar o futuro; e E generaliza ao falar de elementos sombrios recorrentes, quando o ponto é a falha da mãe em prever a desgraça.`,
    subject: ['esp'],
    topics: ['Interpretação de texto', 'Vocabulário', 'Questões aleatórias'],
  },
  {
    id: 5,
    language: 'es',
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Mayo 15. Que mañana no sea otro nombre de hoy
En el año 2011, miles de jóvenes, despojados de sus casas y de sus empleos, ocuparon las plazas y las calles de varias ciudades de España.
Y la indignación se difundió. La buena salud resultó más contagiosa que las pestes, y las voces de los indignados atravesaron las fronteras dibujadas en los mapas. Así resonaron en el mundo:
Nos dijeron "a la puta calle!", y aquí estamos.
Apaga la tele y enciende la calle.
La llaman crisis, pero es estafa.
No falta dinero: sobran ladrones.
Los mercados gobiernan. Yo no los voté.
Ellos toman decisiones por nosotros, sin nosotros.
Se alquila esclavo económico.
Estoy buscando mis derechos. ¿Alguien los ha visto?
Si no nos dejan soñar, no los dejaremos dormir.
GALEANO, E. Los hijos de los días. Buenos Aires: Siglo Veintiuno, 2012.
Ao elencar algumas frases proferidas durante protestos na Espanha, o enunciador transcreve, de forma direta, as reivindicações dos manifestantes para`,
    alternatives: [
      { id: 'A', type: 'text', value: `provocá-los de forma velada.` },
      { id: 'B', type: 'text', value: `dar voz ao movimento popular.` },
      { id: 'C', type: 'text', value: `fomentar o engajamento do leitor.` },
      { id: 'D', type: 'text', value: `favorecer o diálogo entre governo e sociedade.` },
      { id: 'E', type: 'text', value: `instaurar dúvidas sobre a legitimidade da causa.` },
    ],
    correct: 'B',
    explanation: `Resposta correta: B. Ao reproduzir diretamente as frases gritadas pelos manifestantes espanhóis de 2011, o enunciador cede espaço à própria voz dos indignados, transcrevendo suas reivindicações tal como foram ditas. Esse recurso dá voz ao movimento popular (alternativa B) e reforça sua autenticidade. A alternativa A é incorreta porque não há provocação velada, e sim denúncia aberta; C foge do objetivo, que é registrar as vozes e não engajar o leitor; D contraria o texto, pois os cartazes rejeitam o diálogo com governantes ('Ellos toman decisiones por nosotros, sin nosotros'); e E é oposta, já que o texto legitima, e não questiona, a causa.`,
    subject: ['esp'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 4,
    language: 'es',
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `¿Cómo gestionar la diversidad lingüística en el aula?
El aprendizaje de idiomas es una de las demandas de la sociedad en la escuela: los alumnos tienen que finalizar la escolarización con un buen conocimiento, por lo menos, de las tres lenguas curriculares: catalán, castellano e inglés (o francés, portugués...).
La metodología que promueve el aprendizaje integrado de idiomas en la escuela tiene en cuenta las relaciones entre las diferentes lenguas: la mejor enseñanza de una lengua incide en la mejora de todas las demás. Se trata de educar en y para la diversidad lingüística y cultural.
Por eso, la V Jornada de Buenas Prácticas de Gestión del Multilingüismo, que se celebrará en Barcelona, debatirá sobre la gestión del multilingüismo en el aula. El objetivo es difundir propuestas para el aprendizaje integrado de idiomas y presentar experiencias prácticas de gestión de la diversidad lingüística presente en las aulas.
Disponível em: www10.gencat.cat. Acesso em: 15 set. 2010 (adaptado).
Na região da Catalunha, Espanha, convivem duas línguas oficiais: o catalão e o espanhol. Além dessas, ensinam-se outras línguas nas escolas. De acordo com o texto, para administrar a variedade linguística nas aulas, é necessário`,
    alternatives: [
      { id: 'A', type: 'text', value: `ampliar o número de línguas ofertadas para enriquecer o conteúdo.` },
      { id: 'B', type: 'text', value: `divulgar o estudo de diferentes idiomas e culturas para atrair os estudantes.` },
      { id: 'C', type: 'text', value: `privilegiar o estudo de línguas maternas para valorizar os aspectos regionais.` },
      { id: 'D', type: 'text', value: `explorar as relações entre as línguas estudadas para promover a diversidade.` },
      { id: 'E', type: 'text', value: `debater as práticas sobre multilinguismo para formar melhor os professores de línguas.` },
    ],
    correct: 'D',
    explanation: `Resposta correta: D. O texto defende uma metodologia de aprendizagem integrada que leva em conta as relações entre as diferentes línguas, pois ensinar bem um idioma favorece o aprendizado dos demais. Logo, para administrar a diversidade linguística na sala de aula é preciso explorar essas relações entre as línguas estudadas, promovendo a diversidade (alternativa D). A alternativa A propõe apenas aumentar o número de idiomas, o que o texto não defende; B restringe a questão à divulgação para atrair alunos; C privilegia línguas maternas, contrariando a proposta integradora; e E reduz o objetivo à formação de professores, aspecto não central no texto.`,
    subject: ['esp'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 3,
    language: 'es',
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `¿Qué es la X Solidaria?
La X Solidaria es una equis que ayuda a las personas más vulnerables. Podrás marcarla cuando hagas la declaración de la renta. Es la casilla que se denomina "Fines Sociales". Nosotros preferimos llamarla X Solidaria:
• porque al marcarla haces que se destine un 0,7% de tus impuestos a programas sociales que realizan las ONG.
• porque se benefician los colectivos más desfavorecidos, sin ningún coste económico para ti.
• porque NO marcarla es tomar una actitud pasiva, y dejar que sea el Estado quien decida el destino de esa parte de tus impuestos.
• porque marcándola te conviertes en contribuyente activo solidario.
As ações solidárias contribuem para o enfrentamento de problemas sociais. No texto, a ação solidária ocorre quando o contribuinte`,
    alternatives: [
      { id: 'A', type: 'text', value: `delega ao governo o destino de seus impostos.` },
      { id: 'B', type: 'text', value: `escolhe projetos que terão isenção de impostos.` },
      { id: 'C', type: 'text', value: `destina parte de seus impostos para custeio de programas sociais.` },
      { id: 'D', type: 'text', value: `determina a criação de impostos para implantação de projetos sociais.` },
      { id: 'E', type: 'text', value: `seleciona programas para beneficiar cidadãos vulneráveis socialmente.` },
    ],
    correct: 'C',
    explanation: `Resposta correta: C. Segundo o texto, ao marcar a casilha 'Fines Sociales' (a X Solidaria), o contribuinte faz com que 0,7% de seus impostos sejam destinados a programas sociais realizados por ONGs, sem custo adicional. A ação solidária ocorre, portanto, quando ele destina parte de seus impostos ao custeio de programas sociais (alternativa C). A alternativa A descreve o contrário, a atitude passiva de deixar o Estado decidir; B fala em isenção de impostos, não mencionada; D sugere a criação de novos impostos, o que não ocorre; e E, embora próxima, enfatiza a seleção de programas, enquanto o texto destaca a destinação de recursos.`,
    subject: ['esp'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 2,
    language: 'es',
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Revolución en la arquitectura china: Levantar rascacielos en 19 días
Un rascacielos de 57 pisos no llama la atención en la China del siglo XXI. Salvo que se haya construido en 19 días, claro. Y eso es precisamente lo que ha conseguido Broad Sustainable Building (BSB), una empresa dedicada a la fabricación de purificadores de aire y de equipos de aire acondicionado para grandes infraestructuras que ahora se ha empeñado en liderar una revolución con su propio modelo de arquitectura modular prefabricada. Como subraya su presidente, Zhang Yue, es una fórmula económica, ecológica, segura, y limpia. Ese último término, además, lo utiliza tanto para referirse al polvo que se produce en la construcción como a los gruesos sobres que suelen circular por debajo de las mesas en adjudicaciones y permisos varios. "Quiero que nuestros edificios alumbren una nueva era en la arquitectura, y que se conviertan en símbolo de la lucha contra la contaminación y el cambio climático, que es la mayor amenaza a la que se enfrenta la humanidad", sentencia.
"Es como montar un Lego. Apenas hay subcontratación, lo cual ayuda a mantener un costo bajo y un control de calidad estricto, y nos permite eliminar también la corrupción inherente al sector", explica la vicepresidenta de BSB y responsable del mercado internacional, Jiang Yan.
Disponível em: http://tecnologia.elpais.com. Acesso em: 23 jun. 2015 (adaptado).
No texto, alguns dos benefícios de se utilizar estruturas pré-moldadas na construção de altos edifícios estão expressos por meio da palavra limpia. Essa expressão indica que, além de produzir menos resíduos, o uso desse tipo de estrutura`,
    alternatives: [
      { id: 'A', type: 'text', value: `reduz o contingente de mão de obra.` },
      { id: 'B', type: 'text', value: `inibe a corrupção na construção civil.` },
      { id: 'C', type: 'text', value: `facilita o controle da qualidade da obra.` },
      { id: 'D', type: 'text', value: `apresenta um modelo arquitetônico conciso.` },
      { id: 'E', type: 'text', value: `otimiza os custos da construção de edifícios.` },
    ],
    correct: 'B',
    explanation: `Resposta correta: B. A palavra 'limpia' é usada com duplo sentido: refere-se tanto ao pouco pó gerado na obra quanto aos 'gruesos sobres' (propinas) que costumam circular por baixo das mesas em licitações e permissões. Assim, além de produzir menos resíduos, a construção modular pré-fabricada inibe a corrupção no setor (alternativa B), como confirma a fala que associa o método à eliminação da corrupção. As alternativas A, C, D e E citam vantagens reais do sistema (menos mão de obra, controle de qualidade, modelo conciso, custos otimizados), mas nenhuma é o sentido evocado especificamente pela palavra 'limpia'.`,
    subject: ['esp'],
    topics: ['Interpretação de texto', 'Vocabulário', 'Questões aleatórias'],
  },

  {
    id: 6,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `“A Declaração Universal dos Direitos Humanos está 
completando 70 anos em tempos de desafios crescentes, 
quando o ódio, a discriminação e a violência permanecem 
vivos”, disse a diretora-geral da Organização das Nações 
Unidas para a Educação, a Ciência e a Cultura (Unesco), 
Audrey Azoulay. 
“Ao final da Segunda Guerra Mundial, a humanidade 
inteira resolveu promover a dignidade humana em todos 
os lugares e para sempre. Nesse espírito, as Nações 
Unidas adotaram a Declaração Universal dos Direitos 
Humanos como um padrão comum de conquistas para 
todos os povos e todas as nações”, disse Audrey. 
“Centenas de milhões de mulheres e homens 
são destituídos e privados de condições básicas 
de subsistência e de oportunidades. Movimentos 
populacionais forçados geram violações aos direitos 
em uma escala sem precedentes. A Agenda 2030 para 
o Desenvolvimento Sustentável promete não deixar 
ninguém para trás - e os direitos humanos devem ser o 
alicerce para todo o progresso.” 
Segundo ela, esse processo precisa começar o 
quanto antes nas carteiras das escolas. Diante disso, 
a Unesco lidera a educação em direitos humanos para 
assegurar que todas as meninas e meninos saibam seus 
direitos e os direitos dos outros. 
Disponível em: https://nacoesunidas.org. Acesso em: 3 abr. 2018 (adaptado). 
Defendendo a ideia de que “os direitos humanos devem 
ser o alicerce para todo o progresso”, a diretora-geral da 
Unesco aponta, como estratégia para atingir esse fim, a`,
    alternatives: [
      { id: 'A', type: 'text', value: `inclusão de todos na Agenda 2030.` },
      { id: 'B', type: 'text', value: `extinção da intolerância entre os indivíduos.` },
      { id: 'C', type: 'text', value: `discussão desse tema desde a educação básica.` },
      { id: 'D', type: 'text', value: `conquista de direitos para todos os povos e nações.` },
      { id: 'E', type: 'text', value: `promoção da dignidade humana em todos os lugares.` },
    ],
    correct: 'C',
    explanation: `Resposta correta: C. A diretora-geral da Unesco afirma que o respeito aos direitos humanos deve ser o alicerce do progresso e acrescenta que esse processo 'precisa começar o quanto antes nas carteiras das escolas', razão pela qual a Unesco lidera a educação em direitos humanos. A estratégia apontada é, portanto, discutir o tema desde a educação básica (alternativa C). As demais alternativas mencionam finalidades presentes no texto — inclusão na Agenda 2030 (A), fim da intolerância (B), conquista de direitos (D), promoção da dignidade (E) —, mas descrevem objetivos a alcançar, e não o meio proposto para atingi-los.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 7,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Disponível em: www.facebook.com/minsaude. Acesso em: 14 fev. 2018 (adaptado). 
A utilização de determinadas variedades linguísticas 
em campanhas educativas tem a função de atingir o 
público-alvo de forma mais direta e eficaz. No caso 
desse texto, identifica-se essa estratégia pelo(a)`,
    images: ['/enem/2018/images/enem_2018_d1_q7.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `discurso formal da língua portuguesa.` },
      { id: 'B', type: 'text', value: `registro padrão próprio da língua escrita.` },
      { id: 'C', type: 'text', value: `seleção lexical restrita à esfera da medicina.` },
      { id: 'D', type: 'text', value: `fidelidade ao jargão da linguagem publicitária.` },
      { id: 'E', type: 'text', value: `uso de marcas linguísticas típicas da oralidade.` },
    ],
    correct: 'E',
    explanation: `Resposta correta: E. A campanha educativa do Ministério da Saúde emprega uma variedade linguística próxima da fala cotidiana para se aproximar do público-alvo de forma direta e eficaz. Essa estratégia se identifica pelo uso de marcas linguísticas típicas da oralidade (alternativa E). As alternativas A e B dizem o oposto, atribuindo ao texto discurso formal e registro padrão escrito; C restringe o vocabulário à área médica, o que afastaria o leitor leigo; e D confunde a estratégia com mera adesão ao jargão publicitário, quando o traço marcante é a informalidade coloquial.`,
    subject: ['por'],
    topics: ['Variação linguística', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 8,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `- Famigerado? [...] 
- Famigerado é “inóxio”, é “célebre”, “notório”, “notável”... 
- Vosmecê mal não veja em minha grossaria no não 
entender. Mais me diga: é desaforado? É caçoável? É de 
arrenegar? Farsância? Nome de ofensa? 
- Vilta nenhuma, nenhum doesto. São expressões 
neutras, de outros usos... 
- Pois... e o que é que é, em fala de pobre, linguagem 
de em dia de semana? 
- Famigerado? Bem. É: “importante”, que merece 
louvor, respeito... 
ROSA, G. Famigerado. In: Primeiras estórias . Rio de Janeiro: Nova Fronteira, 2001. 
Nesse texto, a associação de vocábulos da língua 
portuguesa a determinados dias da semana remete ao`,
    alternatives: [
      { id: 'A', type: 'text', value: `local de origem dos interlocutores.` },
      { id: 'B', type: 'text', value: `estado emocional dos interlocutores.` },
      { id: 'C', type: 'text', value: `grau de coloquialidade da comunicação.` },
      { id: 'D', type: 'text', value: `nível de intimidade entre os interlocutores.` },
      { id: 'E', type: 'text', value: `conhecimento compartilhado na comunicação.` },
    ],
    correct: 'C',
    explanation: `Resposta correta: C. No diálogo de Guimarães Rosa, o interlocutor associa certas palavras à 'linguagem de em dia de semana' e as opõe a termos eruditos como 'famigerado'. Essa associação entre vocábulos e os dias da semana remete ao grau de coloquialidade da comunicação (alternativa C): palavras simples equivalem ao uso comum e informal do dia a dia. As alternativas A, B e D atribuem a oposição ao local de origem, ao estado emocional ou à intimidade dos interlocutores, aspectos não indicados; e E fala em conhecimento compartilhado, quando o contraste real é entre registro formal e informal.`,
    subject: ['por'],
    topics: ['Variação linguística', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 9,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Na sociologia e na literatura, o brasileiro foi por 
vezes tratado como cordial e hospitaleiro, mas não é 
isso o que acontece nas redes sociais: a democracia 
racial apregoada por Gilberto Freyre passa ao largo 
do que acontece diariamente nas comunidades 
virtuais do país. Levantamento inédito realizado pelo 
projeto Comunica que Muda [...] mostra em números 
a intolerância do internauta tupiniquim. Entre abril e 
junho, um algoritmo vasculhou plataformas [...] atrás 
de mensagens e textos sobre temas sensíveis, como 
racismo, posicionamento político e homofobia. Foram 
identificadas 393 284 menções, sendo 84% delas com 
abordagem negativa, de exposição do preconceito e 
da discriminação. 
Disponível em: https://oglobo.globo.com. Acesso em: 6 dez. 2017 (adaptado). 
Ao abordar a postura do internauta brasileiro mapeada 
por meio de uma pesquisa em plataformas virtuais, o texto`,
    alternatives: [
      { id: 'A', type: 'text', value: `minimiza o alcance da comunicação digital.` },
      { id: 'B', type: 'text', value: `refuta ideias preconcebidas sobre o brasileiro.` },
      { id: 'C', type: 'text', value: `relativiza responsabilidades sobre a noção de respeito.` },
      { id: 'D', type: 'text', value: `exemplifica conceitos contidos na literatura e na sociologia.` },
      { id: 'E', type: 'text', value: `expõe a ineficácia dos estudos para alterar tal comportamento.` },
    ],
    correct: 'B',
    explanation: `Resposta correta: B. O texto confronta a imagem consagrada do brasileiro cordial e da 'democracia racial' de Gilberto Freyre com dados de uma pesquisa que revela elevada intolerância nas redes sociais, com 84% das menções de caráter negativo. Ao fazê-lo, o texto refuta ideias preconcebidas sobre o brasileiro (alternativa B). A alternativa A é incorreta porque o texto valoriza, e não minimiza, o alcance da comunicação digital; C não relativiza responsabilidades; D inverte o sentido, pois os dados contrariam, em vez de exemplificar, a visão da sociologia e da literatura; e E não trata da ineficácia de estudos para mudar comportamentos.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Intertextualidade', 'Questões aleatórias'],
  },
  {
    id: 10,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Quebranto 
às vezes sou o policial que me suspeito 
me peço documentos 
e mesmo de posse deles 
me prendo e me dou porrada 
às vezes sou o porteiro 
não me deixando entrar em mim mesmo 
a não ser 
pela porta de serviço 
[...] 
às vezes faço questão de não me ver 
e entupido com a visão deles 
sinto-me a miséria concebida como um eterno 
começo 
fecho-me o cerco 
sendo o gesto que me nego 
a pinga que me bebo e me embebedo 
o dedo que me aponto 
e denuncio 
o ponto em que me entrego. 
às vezes!... 
CUTI. Negroesia . Belo Horizonte: Mazza, 2007 (fragmento). 
Na literatura de temática negra produzida no Brasil, 
é recorrente a presença de elementos que traduzem 
experiências históricas de preconceito e violência. 
No poema, essa vivência revela que o eu lírico`,
    alternatives: [
      { id: 'A', type: 'text', value: `incorpora seletivamente o discurso do seu opressor.` },
      { id: 'B', type: 'text', value: `submete-se à discriminação como meio de fortalecimento.` },
      { id: 'C', type: 'text', value: `engaja-se na denúncia do passado de opressão e injustiças.` },
      { id: 'D', type: 'text', value: `sofre uma perda de identidade e de noção de pertencimento.` },
      { id: 'E', type: 'text', value: `acredita esporadicamente na utopia de uma sociedade igualitária.` },
    ],
    correct: 'A',
    explanation: `Resposta correta: A. No poema de Cuti, o eu lírico se vê desdobrado nas figuras do policial e do porteiro que o vigiam, o prendem e o barram, ou seja, reproduz contra si mesmo a lógica de controle e exclusão do opressor. Isso mostra que o eu lírico incorpora seletivamente o discurso do seu opressor (alternativa A). A alternativa B sugere submissão como fortalecimento, o que não ocorre; C fala em engajamento na denúncia do passado, mas o foco é a opressão internalizada no presente; D afirma perda de identidade, quando há antes um conflito interno de identidade; e E menciona crença numa sociedade igualitária, ausente do texto.`,
    subject: ['lit'],
    topics: ['Literatura brasileira', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 11,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `TEXTO I 
ALMEIDA, H. Dentro de mim , 2000. Fotografia p/b. 132 cm x 88 cm. 
Faculdade de Belas-Artes da Universidade de Lisboa. 
TEXTO II 
A body art põe o corpo tão em evidência e o submete a 
experimentações tão variadas, que sua influência estende-se 
aos dias de hoje. Se na arte atual as possibilidades de 
investigação do corpo parecem ilimitadas - pode-se 
escolher entre representar, apresentar, ou ainda apenas 
evocar o corpo - isso ocorre graças ao legado dos artistas 
pioneiros. 
SILVA, P. R. Corpo na arte, body art, body modification : fronteiras. II Encontro de História 
da Arte: IFCH-Unicamp, 2006 (adaptado). 
Nos textos, a concepção de body art está relacionada à 
intenção de`,
    images: ['/enem/2018/images/enem_2018_d1_q11.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `estabelecer limites entre o corpo e a composição.` },
      { id: 'B', type: 'text', value: `fazer do corpo um suporte privilegiado de expressão.` },
      { id: 'C', type: 'text', value: `discutir políticas e ideologias sobre o corpo como arte.` },
      { id: 'D', type: 'text', value: `compreender a autonomia do corpo no contexto da obra.` },
      { id: 'E', type: 'text', value: `destacar o corpo do artista em contato com o expectador.` },
    ],
    correct: 'B',
    explanation: `Resposta correta: B. O Texto II explica que a body art coloca o corpo em evidência e o submete a variadas experimentações, tornando-o o centro da obra; a fotografia de Helena Almeida ilustra essa concepção. Nos dois textos, a body art está relacionada à intenção de fazer do corpo um suporte privilegiado de expressão (alternativa B). A alternativa A inverte a ideia ao falar em estabelecer limites entre corpo e composição; C introduz uma discussão de políticas e ideologias não tematizada; D fala em autonomia do corpo, e não em seu uso como suporte expressivo; e E restringe a questão ao contato com o espectador, aspecto secundário.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 12,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Deficientes visuais já podem ir a algumas salas de 
cinema e teatros para curtir, em maior intensidade, as 
atrações em cartaz. Quem ajuda na tarefa é o aplicativo 
Whatscine, recém-chegado ao Brasil e disponível para os 
sistemas operacionais iOS (Apple) ou Android (Google). 
Ao ser conectado à rede wi-fi de cinemas e teatros, o app 
sincroniza um áudio que descreve o que ocorre na tela 
ou no palco com o espetáculo em andamento: o usuário, 
então, pode ouvir a narração em seu celular. 
O programa foi desenvolvido por pesquisadores 
da Universidade Carlos III, em Madri. “Na Espanha, 
200 salas de cinema já oferecem o recurso e filmes 
de grandes estúdios já são exibidos com o recurso do 
Whatscine!”, diz o brasileiro Luis Mauch, que trouxe a 
tecnologia para o país. “No Brasil, já fechamos parceria 
com a São Paulo Companhia de Dança para adaptar os 
espetáculos deles! Isso já é um avanço. Concorda?” 
 Disponível em: http://veja.abril.com.br. Acesso em: 25 jun. 2014 (adaptado). 
Por ser múltipla e apresentar peculiaridades de acordo 
com a intenção do emissor, a linguagem apresenta 
funções diferentes. Nesse fragmento, predomina a 
função referencial da linguagem, porque há a presença 
de elementos que`,
    alternatives: [
      { id: 'A', type: 'text', value: `buscam convencer o leitor, incitando o uso do aplicativo.` },
      { id: 'B', type: 'text', value: `definem o aplicativo, revelando o ponto de vista da autora.` },
      { id: 'C', type: 'text', value: `evidenciam a subjetividade, explorando a entonação emotiva.` },
      { id: 'D', type: 'text', value: `expõem dados sobre o aplicativo, usando linguagem denotativa.` },
      { id: 'E', type: 'text', value: `objetivam manter um diálogo com o leitor, recorrendo a uma indagação.` },
    ],
    correct: 'D',
    explanation: `Resposta correta: D. No fragmento predomina a função referencial porque o texto se volta ao objeto do discurso, expondo dados objetivos sobre o aplicativo Whatscine — plataformas, funcionamento, origem e números — com linguagem denotativa (alternativa D). A alternativa A descreve a função conativa (convencer o leitor a usar o aplicativo); C aponta subjetividade e entonação emotiva, próprias da função emotiva; E remete à função fática/conativa, pela indagação ao leitor; e B, embora mencione a definição do aplicativo, atribui ao texto um ponto de vista da autora que não caracteriza a objetividade referencial.`,
    subject: ['por'],
    topics: ['Funções da linguagem', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 13,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `TEXTO I 
Disponível em: http://revistaiiqb.usac.edu.gt. Acesso em: 25 abr. 2018 (adaptado). 
TEXTO II 
Imaginemos um cidadão, residente na periferia de 
um grande centro urbano, que diariamente acorda às 5h 
para trabalhar, enfrenta em média 2 horas de transporte 
público, em geral lotado, para chegar às 8h ao trabalho. 
Termina o expediente às 17h e chega em casa às 19h 
para, aí sim, cuidar dos afazeres domésticos, dos filhos 
etc. Como dizer a essa pessoa que ela deve praticar 
exercícios, pois é importante para sua saúde? Como ela 
irá entender a mensagem da importância do exercício 
físico? A probabilidade de essa pessoa praticar exercícios 
regularmente é significativamente menor que a de 
pessoas da classe média/alta que vivem outra realidade. 
Nesse caso, a abordagem individual do problema tende 
a fazer com que a pessoa se sinta impotente em não 
conseguir praticar exercícios e, consequentemente, 
culpada pelo fato de ser ou estar sedentária. 
FERREIRA, M. S. Aptidão física e saúde na educação física escolar: ampliando o enfoque. 
RBCE , n. 2, jan. 2001 (adaptado). 
O segundo texto, que propõe uma reflexão sobre o 
primeiro acerca do impacto de mudanças no estilo de vida 
na saúde, apresenta uma visão`,
    images: ['/enem/2018/images/enem_2018_d1_q13.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `medicalizada, que relaciona a prática de exercícios físicos por qualquer indivíduo à promoção da saúde.` },
      { id: 'B', type: 'text', value: `ampliada, que considera aspectos sociais intervenientes na prática de exercícios no cotidiano.` },
      { id: 'C', type: 'text', value: `crítica, que associa a interferência das tarefas da casa ao sedentarismo do indivíduo.` },
      { id: 'D', type: 'text', value: `focalizada, que atribui ao indivíduo a responsabilidade pela prevenção de doenças.` },
      { id: 'E', type: 'text', value: `geracional, que preconiza a representação do culto à jovialidade.` },
    ],
    correct: 'B',
    explanation: `Resposta correta: B. O segundo texto amplia a reflexão do primeiro ao mostrar que fatores sociais — jornada extensa, transporte lotado, afazeres domésticos — condicionam a possibilidade de a pessoa praticar exercícios, de modo que a mera cobrança individual tende a gerar culpa. Trata-se, portanto, de uma visão ampliada, que considera os aspectos sociais que interferem na prática de exercícios no cotidiano (alternativa B). A alternativa A é 'medicalizada' e D é 'focalizada' no indivíduo, justamente as posturas criticadas; C reduz tudo às tarefas domésticas; e E, 'geracional', não corresponde ao texto, que não trata de culto à juventude.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 14,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `No tradicional concurso de miss , as candidatas 
apresentaram dados de feminicídio, abuso sexual e 
estupro no país. 
No lugar das medidas de altura, peso, busto, cintura 
e quadril, dados da violência contra as mulheres no Peru. 
Foi assim que as 23 candidatas ao Miss Peru 2017 
protestaram contra os altos índices de feminicídio e abuso 
sexual no país no tradicional desfile em trajes de banho. 
O tom político, porém, marcou a atração desde 
o começo: logo no início, quando as peruanas se 
apresentaram, uma a uma, denunciaram os abusos morais 
e físicos, a exploração sexual, o assédio, entre outros 
crimes contra as mulheres. 
Disponível em: www.cartacapital.com.br. Acesso em: 29 nov. 2017. 
Quanto à materialização da linguagem, a apresentação 
de dados relativos à violência contra a mulher`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `configura uma discussão sobre os altos índices de abuso físico contra as peruanas.` },
      { id: 'B', type: 'text', value: `propõe um novo formato no enredo dos concursos de beleza feminina.` },
      { id: 'C', type: 'text', value: `condena o rigor estético exigido pelos concursos tradicionais.` },
      { id: 'D', type: 'text', value: `recupera informações sensacionalistas a respeito desse tema.` },
      { id: 'E', type: 'text', value: `subverte a função social da fala das candidatas a miss .` },
    ],
    correct: 'E',
    explanation: `Resposta correta: E. No concurso, as candidatas substituíram as medidas corporais por dados de feminicídio e abuso sexual, transformando a fala típica do desfile em denúncia política. Quanto à materialização da linguagem, isso subverte a função social da fala das candidatas a miss (alternativa E), que deixa de exibir padrões estéticos para alertar sobre a violência. A alternativa A reduz o fato a uma simples discussão de índices; B fala em novo formato de enredo dos concursos; C condena o rigor estético, consequência e não o cerne linguístico; e D atribui ao gesto um caráter sensacionalista, contrário à intenção de conscientização.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 15,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Dia 20/10 
É preciso não beber mais. Não é preciso sentir vontade 
de beber e não beber: é preciso não sentir vontade de 
beber. É preciso não dar de comer aos urubus. É preciso 
fechar para balanço e reabrir. É preciso não dar de comer 
aos urubus. Nem esperanças aos urubus. É preciso 
sacudir a poeira. É preciso poder beber sem se oferecer 
em holocausto. É preciso. É preciso não morrer por 
enquanto. É preciso sobreviver para verificar. Não pensar 
mais na solidão de Rogério, e deixá-lo. É preciso não dar 
de comer aos urubus. É preciso enquanto é tempo não 
morrer na via pública. 
TORQUATO NETO. In: MENDONÇA, J. (Org.) Poesia (im)popular brasileira . 
São Bernardo do Campo: Lamparina Luminosa, 2012. 
O processo de construção do texto formata uma 
mensagem por ele dimensionada, uma vez que`,
    alternatives: [
      { id: 'A', type: 'text', value: `configura o estreitamento da linguagem poética.` },
      { id: 'B', type: 'text', value: `reflete as lacunas da lucidez em desconstrução.` },
      { id: 'C', type: 'text', value: `projeta a persistência das emoções reprimidas.` },
      { id: 'D', type: 'text', value: `repercute a consciência da agonia antecipada.` },
      { id: 'E', type: 'text', value: `revela a fragmentação das relações humanas.` },
    ],
    correct: 'D',
    explanation: `Resposta correta: D. O texto de Torquato Neto, construído como anotação de diário, repete insistentemente a estrutura 'É preciso', encadeando a necessidade de não beber, de sobreviver e de 'não morrer por enquanto'. Essa construção dimensiona uma mensagem que repercute a consciência da agonia antecipada (alternativa D), o pressentimento angustiado da própria destruição. A alternativa A fala em estreitamento da linguagem poética, o que não se observa; B e C remetem a lacunas de lucidez e emoções reprimidas, interpretações que não se sustentam; e E trata de fragmentação das relações humanas, tema alheio ao foco, que é a agonia do eu lírico.`,
    subject: ['lit'],
    topics: ['Literatura brasileira', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 16,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Somente uns tufos secos de capim empedrados 
crescem na silenciosa baixada que se perde de vista. 
Somente uma árvore, grande e esgalhada mas com 
pouquíssimas folhas, abre-se em farrapos de sombra. 
Único ser nas cercanias, a mulher é magra, ossuda, seu 
rosto está lanhado de vento. Não se vê o cabelo, coberto 
por um pano desidratado. Mas seus olhos, a boca, a pele 
- tudo é de uma aridez sufocante. Ela está de pé. A seu 
lado está uma pedra. O sol explode. 
Ela estava de pé no fim do mundo. Como se andasse para 
aquela baixada largando para trás suas noções de si mesma. 
Não tem retratos na memória. Desapossada e despojada, 
não se abate em autoacusações e remorsos. Vive. 
Sua sombra somente é que lhe faz companhia. Sua 
sombra, que se derrama em traços grossos na areia, 
é que adoça como um gesto a claridade esquelética. 
A mulher esvaziada emudece, se dessangra, se cristaliza, 
se mineraliza. Já é quase de pedra como a pedra a seu lado. 
Mas os traços de sua sombra caminham e, tornando-se 
mais longos e finos, esticam-se para os farrapos de sombra 
da ossatura da árvore, com os quais se enlaçam. 
FRÓES, L. Vertigens : obra reunida. Rio de Janeiro: Rocco, 1998. 
Na apresentação da paisagem e da personagem, o 
narrador estabelece uma correlação de sentidos em 
que esses elementos se entrelaçam. Nesse processo, a 
condição humana configura-se`,
    alternatives: [
      { id: 'A', type: 'text', value: `amalgamada pelo processo comum de desertificação e de solidão.` },
      { id: 'B', type: 'text', value: `fortalecida pela adversidade extensiva à terra e aos seres vivos.` },
      { id: 'C', type: 'text', value: `redimensionada pela intensidade da luz e da exuberância local.` },
      { id: 'D', type: 'text', value: `imersa num drama existencial de identidade e de origem.` },
      { id: 'E', type: 'text', value: `imobilizada pela escassez e pela opressão do ambiente.` },
    ],
    correct: 'A',
    explanation: `Resposta correta: A. O narrador descreve a paisagem árida e a mulher solitária de modo que os dois elementos se entrelaçam: a personagem emudece, se cristaliza e quase se torna pedra, e, ao final, sua sombra enlaça-se aos farrapos de sombra da árvore. A condição humana configura-se, assim, amalgamada à paisagem por um processo comum de desertificação e de solidão (alternativa A), em que ser e ambiente se fundem. A alternativa B inverte o sentido ao sugerir fortalecimento diante da adversidade; C fala em exuberância local, inexistente na cena seca; D reduz tudo a um drama de identidade e origem; e E enfatiza a imobilização pela opressão, mas despreza justamente a fusão entre a mulher e o meio, que é o cerne da correlação de sentidos estabelecida pelo narrador.`,
    subject: ['lit'],
    topics: ['Literatura brasileira', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 17,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Aconteceu mais de uma vez: ele me abandonou. Como 
todos os outros. O quinto. A gente já estava junto há mais 
de um ano. Parecia que dessa vez seria para sempre. 
Mas não: ele desapareceu de repente, sem deixar rastro. 
Quando me dei conta, fiquei horas ligando sem parar - 
mas só chamava, chamava, e ninguém atendia. E então 
fiz o que precisava ser feito: bloqueei a linha. 
A verdade é que nenhum telefone celular me suporta. 
Já tentei de todas as marcas e operadoras, apenas 
para descobrir que eles são todos iguais: na primeira 
oportunidade, dão no pé. Esse último aproveitou que eu 
estava distraído e não desceu do táxi junto comigo. Ou 
será que ele já tinha pulado do meu bolso no momento 
em que eu embarcava no táxi? Tomara que sim. Depois 
de fazer o que me fez, quero mais é que ele tenha ido 
parar na sarjeta. [...] Se ainda fossem embora do jeito 
que chegaram, tudo bem. [...] Mas já sei o que vou 
fazer. No caminho da loja de celulares, vou passar 
numa papelaria. Pensando bem, nenhuma das minhas 
agendinhas de papel jamais me abandonou. 
FREIRE, R. Começar de novo. O Estado de S. Paulo , 24 nov. 2006. 
Nesse fragmento, a fim de atrair a atenção do leitor 
e de estabelecer um fio condutor de sentido, o autor 
utiliza-se de`,
    alternatives: [
      { id: 'A', type: 'text', value: `primeira pessoa do singular para imprimir subjetividade ao relato de mais uma desilusão amorosa.` },
      { id: 'B', type: 'text', value: `ironia para tratar da relação com os celulares na era de produtos altamente descartáveis.` },
      { id: 'C', type: 'text', value: `frases feitas na apresentação de situações amorosas estereotipadas para construir a ambientação do texto.` },
      { id: 'D', type: 'text', value: `quebra de expectativa como estratégia argumentativa para ocultar informações.` },
      { id: 'E', type: 'text', value: `verbos no tempo pretérito para enfatizar uma aproximação com os fatos abordados ao longo do texto.` },
    ],
    correct: 'C',
    explanation: `Resposta correta: C. Para atrair o leitor e estabelecer um fio condutor de sentido, o autor recorre a frases feitas próprias de situações amorosas estereotipadas — 'ele me abandonou', 'desapareceu de repente, sem deixar rastro', 'dão no pé' —, construindo a ambientação de um relato de desilusão que só ao final se revela ser sobre aparelhos celulares (alternativa C). A alternativa A cita a primeira pessoa, recurso presente, mas que não constitui o fio condutor; B aponta a ironia, que é o efeito gerado, e não o mecanismo linguístico que sustenta o texto; D fala em quebra de expectativa para ocultar informações, o que não ocorre; e E atribui aos verbos no pretérito uma função de aproximação que não organiza o sentido do fragmento.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 18,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Enquanto isso, nos bastidores do universo 
Você planeja passar um longo tempo em outro país, 
trabalhando e estudando, mas o universo está preparando 
a chegada de um amor daqueles de tirar o chão, um amor 
que fará você jogar fora seu atlas e criar raízes no quintal 
como se fosse uma figueira. 
Você treina para a maratona mais desafiadora de 
todas, mas não chegará com as duas pernas intactas na 
hora da largada, e a primeira perplexidade será esta: a 
experiência da frustração. 
O universo nunca entrega o que promete. Aliás, ele 
nunca prometeu nada, você é que escuta vozes. 
No dia em que você pensa que não tem nada a 
dizer para o analista, faz a revelação mais bombástica 
dos seus dois anos de terapia. O resultado de um 
exame de rotina coloca sua rotina de cabeça para baixo. 
Você não imaginava que iriam tantos amigos à sua 
festa, e tampouco imaginou que justo sua grande paixão 
não iria. Quando achou que estava bela, não arrasou 
corações. Quando saiu sem maquiagem e com uma 
camiseta puída, chamou a atenção. E assim seguem 
os dias à prova de planejamento e contrariando nossas 
vontades, pois, por mais que tenhamos ensaiado nossa 
fala e estejamos preparados para a melhor cena, nos 
bastidores do universo alguém troca nosso papel de 
última hora, tornando surpreendente a nossa vida. 
MEDEIROS, M. O Globo , 21 jun. 2015. 
Entre as estratégias argumentativas utilizadas para 
sustentar a tese apresentada nesse fragmento, destaca-se 
a recorrência de`,
    alternatives: [
      { id: 'A', type: 'text', value: `estruturas sintáticas semelhantes, para reforçar a velocidade das mudanças da vida.` },
      { id: 'B', type: 'text', value: `marcas de interlocução, para aproximar o leitor das experiências vividas pela autora.` },
      { id: 'C', type: 'text', value: `formas verbais no presente, para exprimir reais possibilidades de concretização das ações.` },
      { id: 'D', type: 'text', value: `construções de oposição, para enfatizar que as expectativas são afetadas pelo inesperado.` },
      { id: 'E', type: 'text', value: `sequências descritivas, para promover a identificação do leitor com as situações apresentadas.` },
    ],
    correct: 'D',
    explanation: `Resposta correta: D. Para sustentar a tese de que a vida é imprevisível e surpreendente, a autora recorre repetidamente a construções de oposição: planeja-se uma viagem, mas chega um amor; treina-se para a maratona, mas vem a frustração. Essas antíteses enfatizam que as expectativas são afetadas pelo inesperado (alternativa D). A alternativa A fala em estruturas sintáticas semelhantes para marcar velocidade, que não é o recurso dominante; B cita marcas de interlocução; C, formas verbais no presente; e E, sequências descritivas — elementos que aparecem pontualmente, mas não constituem a estratégia argumentativa recorrente de contraste.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Figuras de linguagem', 'Questões aleatórias'],
  },
  {
    id: 19,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `A internet proporcionou o surgimento de novos paradigmas sociais e impulsionou a modificação de outros ja 
estabelecidos nas esferas da comunicação e da informação. A principal consequência criticada na tirinha sobre esse 
processo é a`,
    images: ['/enem/2018/images/enem_2018_d1_q19.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `criação de memes.` },
      { id: 'B', type: 'text', value: `ampliação da blogosfera.` },
      { id: 'C', type: 'text', value: `supremacia das ideias cibernéticas.` },
      { id: 'D', type: 'text', value: `comercialização de pontos de vista.` },
      { id: 'E', type: 'text', value: `banalização do comércio eletrônico.` },
    ],
    correct: 'D',
    explanation: `Resposta correta: D. A tirinha critica os desdobramentos da internet nas esferas da comunicação e da informação, destacando como as opiniões passaram a ser tratadas como mercadoria. A principal consequência criticada é a comercialização de pontos de vista (alternativa D). As alternativas A, B e E mencionam fenômenos ligados à rede — memes, blogosfera e comércio eletrônico —, mas não são o alvo da crítica; e C, a 'supremacia das ideias cibernéticas', é vaga e não corresponde ao ponto central, que é a transformação da opinião em objeto de venda.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 20,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Vó Clarissa deixou cair os talheres no prato, fazendo a porcelana estalar. Joaquim, meu primo, continuava com
o queixo suspenso, batendo com o garfo nos lábios, esperando a resposta. Beatriz ecoou a palavra como pergunta,
"o que é lésbica?". Eu fiquei muda. Joaquim sabia sobre mim e me entregaria para a vó e, mais tarde, para toda
a família. Senti um calor letal subir pelo meu pescoço e me doer atrás das orelhas. Previ a cena: vó, a senhora é
lésbica? Porque a Joana é. A vergonha estava na minha cara e me denunciava antes mesmo da delação. Apertei os
olhos e contraí o peito, esperando o tiro. [...]
[...] Pensei na naturalidade com que Taís e eu levávamos a nossa história. Pensei na minha insegurança de
contar isso à minha família, pensei em todos os colegas e professores que já sabiam, fechei os olhos e vi a boca da
minha vó e a boca da tia Carolina se tocando, apesar de todos os impedimentos. Eu quis saber mais, eu quis saber
tudo, mas não consegui perguntar.
POLESSO, N. B. Vó, a senhora é lésbica? Amora. Porto Alegre: Não Editora, 2015 (fragmento).
A situação narrada revela uma tensão fundamentada na perspectiva do`,
    alternatives: [
      { id: 'A', type: 'text', value: `conflito com os interesses de poder.` },
      { id: 'B', type: 'text', value: `silêncio em nome do equilíbrio familiar.` },
      { id: 'C', type: 'text', value: `medo instaurado pelas ameaças de punição.` },
      { id: 'D', type: 'text', value: `choque imposto pela distância entre as gerações.` },
      { id: 'E', type: 'text', value: `apego aos protocolos de conduta segundo os gêneros.` },
    ],
    correct: 'B',
    explanation: `Resposta correta: B. Na cena narrada, a personagem teme ser exposta como lésbica diante da avó e da família e, por isso, permanece muda, antecipando a vergonha e a 'delação' do primo; ao final, imagina a avó e a tia se beijando, revelando segredos igualmente silenciados. A tensão fundamenta-se, assim, no silêncio em nome do equilíbrio familiar (alternativa B). A alternativa A fala em interesses de poder; C, em ameaças de punição explícitas; D, em distância entre gerações; e E, em apego a protocolos de conduta de gênero — aspectos que não traduzem o cerne do conflito, que é o calar-se para preservar a harmonia familiar.`,
    subject: ['lit'],
    topics: ['Literatura brasileira', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 21,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Ó Pátria amada, 
Idolatrada, 
Salve! Salve! 
Brasil, de amor eterno seja símbolo 
O lábaro que ostentas estrelado, 
E diga o verde-louro dessa flâmula 
- “Paz no futuro e glória no passado.” 
Mas, se ergues da justiça a clava forte, 
Verás que um filho teu não foge à luta, 
Nem teme, quem te adora, a própria morte. 
Terra adorada, 
Entre outras mil, 
És tu, Brasil, 
Ó Pátria amada! 
Dos filhos deste solo és mãe gentil, 
Pátria amada, Brasil! 
Hino Nacional do Brasil . Letra: Joaquim Osório Duque Estrada. 
Música: Francisco Manuel da Silva (fragmento). 
O uso da norma-padrão na letra do Hino Nacional do 
Brasil é justificado por tratar-se de um(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `reverência de um povo a seu país.` },
      { id: 'B', type: 'text', value: `gênero solene de característica protocolar.` },
      { id: 'C', type: 'text', value: `canção concebida sem interferência da oralidade.` },
      { id: 'D', type: 'text', value: `escrita de uma fase mais antiga da língua portuguesa.` },
      { id: 'E', type: 'text', value: `artefato cultural respeitado por todo o povo brasileiro.` },
    ],
    correct: 'B',
    explanation: `Resposta correta: B. O emprego da norma-padrão, com vocabulário rebuscado e inversões sintáticas, justifica-se porque o Hino Nacional é um gênero solene, de característica protocolar (alternativa B), próprio de cerimônias oficiais. A alternativa A fala em reverência de um povo, o que explica o conteúdo, mas não o uso da norma culta; C atribui a ausência de oralidade à concepção do texto, o que não é a justificativa; D situa a linguagem numa fase antiga da língua, mas o ponto é o caráter cerimonial, não a diacronia; e E trata do respeito ao artefato cultural, sem explicar a escolha linguística.`,
    subject: ['por'],
    topics: ['Variação linguística', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 22,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `SILVA, I.; SANTOS, M. E. P.; JUNG, N. M. Domínios de Lingu@gem , n. 4, out.-dez. 2016 (adaptado). 
A fotografia exibe a fachada de um supermercado em 
Foz do Iguaçu, cuja localização transfronteiriça é marcada 
tanto pelo limite com Argentina e Paraguai quanto pela 
presença de outros povos. Essa fachada revela o(a)`,
    images: ['/enem/2018/images/enem_2018_d1_q22.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `apagamento da identidade linguística.` },
      { id: 'B', type: 'text', value: `planejamento linguístico no espaço urbano.` },
      { id: 'C', type: 'text', value: `presença marcante da tradição oral na cidade.` },
      { id: 'D', type: 'text', value: `disputa de comunidades linguísticas diferentes.` },
      { id: 'E', type: 'text', value: `poluição visual promovida pelo multilinguismo.` },
    ],
    correct: 'B',
    explanation: `Resposta correta: B. A fachada do supermercado em Foz do Iguaçu exibe várias línguas, refletindo a convivência de diferentes povos na região de fronteira com Argentina e Paraguai; essa presença organizada de idiomas no comércio revela o planejamento linguístico no espaço urbano (alternativa B). A alternativa A diz o oposto, falando em apagamento da identidade linguística; C remete à tradição oral, não ao registro escrito das placas; D fala em disputa entre comunidades, quando há convivência; e E trata a diversidade como poluição visual, juízo de valor que o texto não sustenta.`,
    subject: ['por'],
    topics: ['Variação linguística', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 23,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `O trabalho não era penoso: colar rótulos, meter 
vidros em caixas, etiquetá-las, selá-las, envolvê-las em 
papel celofane, branco, verde, azul, conforme o produto, 
separá-las em dúzias... Era fastidioso. Para passar mais 
rapidamente as oito horas havia o remédio: conversar. 
Era proibido, mas quem ia atrás de proibições? O patrão 
vinha? Vinha o encarregado do serviço? Calavam o 
bico, aplicavam-se ao trabalho. Mal viravam as costas, 
voltavam a taramelar. As mãos não paravam, as línguas 
não paravam. Nessas conversas intermináveis, de 
linguagem solta e assuntos crus, Leniza se completou. 
Isabela, Afonsina, Idália, Jurete, Deolinda - foram mestras. 
O mundo acabou de se desvendar. Leniza perdeu o tom 
ingênuo que ainda podia ter. Ganhou um jogar de corpo 
que convida, um quebrar de olhos que promete tudo, à 
toa, gratuitamente. Modificou-se o timbre de sua voz. 
Ficou mais quente. A própria inteligência se transformou. 
Tornou-se mais aguda, mais trepidante. 
REBELO, M. A estrela sobe . Rio de Janeiro: José Olympio, 2009. 
O romance, de 1939, traz à cena tipos e situações que 
espelham o Rio de Janeiro daquela década. No fragmento, 
o narrador delineia esse contexto centrado no`,
    alternatives: [
      { id: 'A', type: 'text', value: `julgamento da mulher fora do espaço doméstico.` },
      { id: 'B', type: 'text', value: `relato sobre as condições de trabalho no Estado Novo.` },
      { id: 'C', type: 'text', value: `destaque a grupos populares na condição de protagonistas.` },
      { id: 'D', type: 'text', value: `processo de inclusão do palavrão nos hábitos de linguagem.` },
      { id: 'E', type: 'text', value: `vínculo entre as transformações urbanas e os papéis femininos.` },
    ],
    correct: 'E',
    explanation: `Resposta correta: E. O romance de 1939 retrata o cotidiano das operárias de uma fábrica carioca e mostra como Leniza, no convívio e nas conversas 'de linguagem solta', transforma-se, modifica a voz, o corpo e a própria inteligência. O narrador centra o contexto no vínculo entre as transformações urbanas e os papéis femininos (alternativa E). A alternativa A fala em julgamento da mulher fora do lar; B, nas condições de trabalho do Estado Novo; C, no protagonismo de grupos populares; e D, na inclusão do palavrão — elementos que tangenciam o texto, mas não resumem o foco na mudança da mulher no espaço urbano.`,
    subject: ['lit'],
    topics: ['Literatura brasileira', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 24,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `A imagem da negra e do negro em produtos de beleza e a
estética do racismo Resumo : Este artigo tem por finalidade
discutir a representação da população negra, especialmente da
mulher negra, em imagens de produtos de beleza presentes em
comércios do nordeste goiano. Evidencia-se que a presença de
estereótipos negativos nessas imagens dissemina um imaginário
racista apresentado sob a forma de uma estética racista que
camufla a exclusão e normaliza a inferiorização sofrida
pelos(as) negros(as) na sociedade brasileira. A análise do
material imagético aponta a desvalorização estética do negro,
especialmente da mulher negra, e a idealização da beleza e do
branqueamento a serem alcançados por meio do uso dos produtos
apresentados. O discurso midiático-publicitário dos produtos
de beleza rememora e legitima a prática de uma ética racista
construída e atuante no cotidiano. Frente a essa discussão,
sugere-se que o trabalho antirracismo, feito nos diversos
espaços sociais, considere o uso de estratégias para uma
“descolonização estética” que empodere os sujeitos negros por
meio de sua valorização estética e protagonismo na construção
de uma ética da diversidade. Palavras-chave: Estética,
racismo, mídia, educação, diversidade. SANT’ANA, J. A imagem
da negra e do negro em produtos de beleza e a estética do
racismo. Dossiê: trabalho e educação básica. Margens
Interdisciplinar . Versão digital. Abaetetuba, n.16, jun. 2017
(adaptado). O cumprimento da função referencial da linguagem é
uma marca característica do gênero resumo de artigo acadêmico.
Na estrutura desse texto, essa função é estabelecida pela`,
    alternatives: [
      { id: 'A', type: 'text', value: `impessoalidade, na organização da objetividade das informações, como em “Este artigo tem por finalidade” e “Evidencia-se”.` },
      { id: 'B', type: 'text', value: `seleção lexical, no desenvolvimento sequencial do texto, como em “imaginário racista” e “estética do negro”.` },
      { id: 'C', type: 'text', value: `metaforização, relativa à construção dos sentidos figurados, como nas expressões “descolonização estética” e “discurso midiático-publicitário”.` },
      { id: 'D', type: 'text', value: `nominalização, produzida por meio de processos derivacionais na formação de palavras, como “inferiorização” e “desvalorização”.` },
      { id: 'E', type: 'text', value: `adjetivação, organizada para criar uma terminologia antirracista, como em “ética da diversidade” e “descolonização estética”.` },
    ],
    correct: 'A',
    explanation: `Resposta correta: A. No resumo de artigo acadêmico, a função referencial se materializa pela impessoalidade, que organiza a objetividade das informações, como em 'Este artigo tem por finalidade' e 'Evidencia-se' (alternativa A), apagando as marcas do sujeito e centrando o texto no objeto de estudo. A alternativa B aponta a seleção lexical, que é consequência, não o mecanismo da impessoalidade; C fala em metaforização e D em nominalização, recursos de sentido figurado ou de formação de palavras que não garantem a objetividade; e E cita a adjetivação, que, ao qualificar, tende a subjetivar, contrariando a função referencial.`,
    subject: ['por'],
    topics: ['Gêneros textuais', 'Funções da linguagem', 'Questões aleatórias'],
  },
  {
    id: 25,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `ROSA, R. Grande sertão: veredas : adaptação da obra de João Guimarães Rosa. 
São Paulo: Globo, 2014 (adaptado). 
A imagem integra uma adaptação em quadrinhos da 
obra Grande sertão: veredas , de Guimarães Rosa. 
Na representação gráfica, a inter-relação de diferentes`,
    images: ['/enem/2018/images/enem_2018_d1_q25.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `romper com a linearidade das ações da narrativa literária.` },
      { id: 'B', type: 'text', value: `ilustrar de modo fidedigno passagens representativas da história.` },
      { id: 'C', type: 'text', value: `articular a tensão do romance à desproporcionalidade das formas.` },
      { id: 'D', type: 'text', value: `potencializar a dramaticidade do episódio com recursos das artes visuais.` },
      { id: 'E', type: 'text', value: `desconstruir a diagramação do texto literário pelo desequilíbrio da composição.` },
    ],
    correct: 'D',
    explanation: `Resposta correta: D. Na adaptação em quadrinhos de Grande sertão: veredas, a inter-relação entre a linguagem verbal e os recursos visuais — enquadramento, traço, cores e expressões — serve para potencializar a dramaticidade do episódio com recursos das artes visuais (alternativa D). A alternativa A fala em romper a linearidade da narrativa, o que não é o efeito buscado; B reduz a adaptação a mera ilustração fiel; C associa a tensão à desproporcionalidade das formas, de modo impreciso; e E fala em desconstruir a diagramação pelo desequilíbrio, quando a composição visual intensifica, e não desfaz, o sentido dramático.`,
    subject: ['por'],
    topics: ['Intertextualidade', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 26,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Tanto os Jogos Olímpicos quanto os Paralímpicos são 
mais que uma corrida por recordes, medalhas e busca 
da excelência. Por trás deles está a filosofia do barão 
Pierre de Coubertin, fundador do Movimento Olímpico. 
Como educador, ele viu nos Jogos a oportunidade para 
que os povos desenvolvessem valores, que poderiam ser 
aplicados não somente ao esporte, mas à educação e à 
sociedade. Existem atualmente sete valores associados 
aos Jogos. Os valores olímpicos são: a amizade, a 
excelência e o respeito, enquanto os valores paralímpicos 
são: a determinação, a coragem, a igualdade e a inspiração. 
MIRAGAYA, A. Valores para toda a vida. Disponível em: www.esporteessencial.com.br. 
Acesso em: 9 ago. 2017 (adaptado). 
No contexto das aulas de Educação Física escolar, os 
valores olímpicos e paralímpicos podem ser identificados 
quando o colega`,
    alternatives: [
      { id: 'A', type: 'text', value: `procura entender o próximo, assumindo atitudes positivas como simpatia, empatia, honestidade, compaixão, confiança e solidariedade, o que caracteriza o valor da igualdade.` },
      { id: 'B', type: 'text', value: `faz com que todos possam ser iguais e receber o mesmo tratamento, assegurando imparcialidade, oportunidades e tratamentos iguais para todos, o que caracteriza o valor da amizade.` },
      { id: 'C', type: 'text', value: `dá o melhor de si na vivência das diversas atividades relacionadas ao esporte ou aos jogos, participando e progredindo de acordo com seus objetivos, o que caracteriza o valor da coragem.` },
      { id: 'D', type: 'text', value: `manifesta a habilidade de enfrentar a dor, o sofrimento, o medo, a incerteza e a intimidação nas atividades, agindo corretamente contra a vergonha, a desonra e o desânimo, o que caracteriza o valor da determinação.` },
      { id: 'E', type: 'text', value: `inclui em suas ações o fair play (jogo limpo), a honestidade, o sentimento positivo de consideração por outra pessoa, o conhecimento dos seus limites, a valorização de sua própria saúde e o combate ao doping , o que caracteriza o valor do respeito.` },
    ],
    correct: 'E',
    explanation: `Resposta correta: E. O texto lista os valores olímpicos (amizade, excelência e respeito) e paralímpicos (determinação, coragem, igualdade e inspiração). O valor do respeito corresponde a incluir nas ações o fair play, a honestidade, a consideração pelo outro, o conhecimento dos próprios limites, a valorização da saúde e o combate ao doping (alternativa E). As demais alternativas trocam as definições: A descreve a amizade mas a chama de igualdade; B define a igualdade mas a nomeia amizade; C define a excelência mas a chama de coragem; e D define a coragem mas a nomeia determinação.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 27,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Mais big do que bang 
A comunidade científica mundial recebeu, na semana 
passada, a confirmação oficial de uma descoberta sobre a 
qual se falava com enorme expectativa há alguns meses. 
Pesquisadores do Centro de Astrofísica Harvard-Smithsonian 
revelaram ter obtido a mais forte evidência até agora de 
que o universo em que vivemos começou mesmo pelo 
Big Bang, mas este não foi explosão, e sim uma súbita 
expansão de matéria e energia infinitas concentradas em um 
ponto microscópico que, sem muitas opções semânticas, os 
cientistas chamam de “singularidade”. Essa semente cósmica 
permanecia em estado latente e, sem que exista ainda uma 
explicação definitiva, começou a inchar rapidamente [...]. No 
intervalo de um piscar de olhos, por exemplo, seria possível, 
portanto, que ocorressem mais de 10 trilhões de Big Bangs. 
ALLEGRETTI, F. Veja , 26 mar. 2014 (adaptado). 
No título proposto para esse texto de divulgação científica, 
ao dissociar os elementos da expressão Big Bang, a 
autora revela a intenção de`,
    alternatives: [
      { id: 'A', type: 'text', value: `evidenciar a descoberta recente que comprova a explosão de matéria e energia.` },
      { id: 'B', type: 'text', value: `resumir os resultados de uma pesquisa que trouxe evidências para a teoria do Big Bang.` },
      { id: 'C', type: 'text', value: `sintetizar a ideia de que a teoria da expansão de matéria e energia substitui a teoria da explosão.` },
      { id: 'D', type: 'text', value: `destacar a experiência que confirma uma investigação anterior sobre a teoria de matéria e energia.` },
      { id: 'E', type: 'text', value: `condensar a conclusão de que a explosão de matéria e energia ocorre em um ponto microscópico.` },
    ],
    correct: 'C',
    explanation: `Resposta correta: C. Ao separar os elementos da expressão no título 'Mais big do que bang', a autora enfatiza o 'big' (a grande expansão) em detrimento do 'bang' (a explosão), sintetizando a ideia de que a teoria da expansão de matéria e energia substitui a da explosão (alternativa C), conforme explica o texto. A alternativa A afirma o contrário, que se comprova a explosão; B e D reduzem o título a um resumo ou destaque da pesquisa, sem captar o jogo de palavras; e E fala em explosão num ponto microscópico, insistindo no 'bang' que o texto relativiza.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Figuras de linguagem', 'Questões aleatórias'],
  },
  {
    id: 28,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Disponível em: www.separeolixo.gov.br. Acesso em: 4 dez. 2017 (adaptado). 
Nessa campanha, a principal estratégia para convencer 
o leitor a fazer a reciclagem do lixo é a utilização da 
linguagem não verbal como argumento para`,
    images: ['/enem/2018/images/enem_2018_d1_q28.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `reaproveitamento de material.` },
      { id: 'B', type: 'text', value: `facilidade na separação do lixo.` },
      { id: 'C', type: 'text', value: `melhoria da condição do catador.` },
      { id: 'D', type: 'text', value: `preservação de recursos naturais.` },
      { id: 'E', type: 'text', value: `geração de renda para o trabalhador.` },
    ],
    correct: 'A',
    explanation: `Resposta correta: A. Na campanha, a linguagem não verbal é usada como argumento para estimular a reciclagem, associando os materiais descartados à ideia de que podem voltar a ser úteis, ou seja, ao reaproveitamento de material (alternativa A). As alternativas B, C, D e E apresentam aspectos que podem decorrer da reciclagem — facilidade de separação, melhoria da vida do catador, preservação de recursos e geração de renda —, mas não são o argumento central mobilizado pela imagem, que enfatiza a reutilização do que seria lixo.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 29,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `TEXTO I Também chamados impressões ou imagens fotogramáticas
[...], os fotogramas são, numa definição genérica, imagens
realizadas sem a utilização da câmera fotográfica, por contato
direto de um objeto ou material com uma superfície
fotossensível exposta a uma fonte de luz. Essa técnica, que
nasceu junto com a fotografia e serviu de modelo a muitas
discussões sobre a ontologia da imagem fotográfica, foi
profundamente transformada pelos artistas da vanguarda, nas
primeiras décadas do século XX. Representou mesmo, ao lado das
colagens, fotomontagens e outros procedimentos técnicos, a
incorporação definitiva da fotografia à arte moderna e seu
distanciamento da representação figurativa. COLUCCI, M. B.
Impressões fotogramáticas e vanguardas: as experiências de Man
Ray. Studium , n. 2, 2000. TEXTO II RAY, M. Rayograph , 1922.
23,9 x 29,9 cm. MOMA, Nova York. Disponível em: www.moma.org.
Acesso em: 18 abr. 2018 (adaptado). No fotograma de Man Ray, o
“distanciamento da representação figurativa” a que se refere o
Texto I manifesta-se na`,
    images: ['/enem/2018/images/enem_2018_d1_q29.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `ressignificação do jogo de luz e sombra, nos moldes surrealistas.` },
      { id: 'B', type: 'text', value: `imposição do acaso sobre a técnica, como crítica à arte realista.` },
      { id: 'C', type: 'text', value: `composição experimental, fragmentada e de contornos difusos.` },
      { id: 'D', type: 'text', value: `abstração radical, voltada para a própria linguagem fotográfica.` },
      { id: 'E', type: 'text', value: `imitação de formas humanas, com base em diferentes objetos.` },
    ],
    correct: 'C',
    explanation: `Resposta correta: C. Segundo o Texto I, os fotogramas das vanguardas marcaram o 'distanciamento da representação figurativa'; no Rayograph de Man Ray, produzido sem câmera, pelo contato de objetos com a superfície fotossensível, esse afastamento manifesta-se numa composição experimental, fragmentada e de contornos difusos (alternativa C). A alternativa A restringe o efeito ao jogo de luz e sombra nos moldes surrealistas; B enfatiza o acaso como crítica ao realismo; D fala em abstração radical voltada à linguagem fotográfica, mas a imagem ainda guarda silhuetas de objetos, não sendo totalmente abstrata; e E menciona imitação de formas humanas, justamente o oposto do distanciamento da figuração.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 30,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Eu sobrevivi do nada, do nada 
Eu não existia 
Não tinha uma existência 
Não tinha uma matéria 
Comecei existir com quinhentos milhões 
e quinhentos mil anos 
Logo de uma vez, já velha 
Eu não nasci criança, nasci já velha 
Depois é que eu virei criança 
E agora continuei velha 
Me transformei novamente numa velha 
Voltei ao que eu era, uma velha 
PATROCÍNIO , S. In: MOSÉ, V. (Org.). Reino dos bichos e dos animais é meu nome . 
Rio de Janeiro: Azougue, 2009. 
Nesse poema de Stela do Patrocínio, a singularidade da 
expressão lírica manifesta-se na`,
    alternatives: [
      { id: 'A', type: 'text', value: `representação da infância, redimensionada no resgate da memória.` },
      { id: 'B', type: 'text', value: `associação de imagens desconexas, articuladas por uma fala delirante.` },
      { id: 'C', type: 'text', value: `expressão autobiográfica, fundada no relato de experiências de alteridade.` },
      { id: 'D', type: 'text', value: `incorporação de elementos fantásticos, explicitada por versos incoerentes.` },
      { id: 'E', type: 'text', value: `transgressão à razão, ecoada na desconstrução de referências temporais.` },
    ],
    correct: 'E',
    explanation: `Resposta correta: E. No poema de Stela do Patrocínio, o eu lírico diz ter nascido 'já velha', depois virado criança e voltado a ser velha, embaralhando a ordem natural do tempo. A singularidade da expressão lírica está nessa transgressão à razão, ecoada na desconstrução de referências temporais (alternativa E). A alternativa A fala em resgate da infância pela memória; B, em imagens desconexas de fala delirante; C, em relato autobiográfico de alteridade; e D, em elementos fantásticos — leituras que não captam o essencial, que é a subversão da lógica temporal.`,
    subject: ['lit'],
    topics: ['Literatura brasileira', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 31,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `A história do futebol é uma triste viagem do prazer 
ao dever. [...] O jogo se transformou em espetáculo, com 
poucos protagonistas e muitos espectadores, futebol para 
olhar, e o espetáculo se transformou num dos negócios 
mais lucrativos do mundo, que não é organizado para 
ser jogado, mas para impedir que se jogue. A tecnocracia 
do esporte profissional foi impondo um futebol de pura 
velocidade e muita força, que renuncia à alegria, atrofia a 
fantasia e proíbe a ousadia. Por sorte ainda aparece nos 
campos, [...] algum atrevido que sai do roteiro e comete 
o disparate de driblar o time adversário inteirinho, além 
do juiz e do público das arquibancadas, pelo puro prazer 
do corpo que se lança na proibida aventura da liberdade. 
GALEANO, E. Futebol ao sol e à sombra . Porto Alegre: L&PM Pockets, 1995 (adaptado). 
O texto indica que as mudanças nas práticas corporais, 
especificamente no futebol,`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `fomentaram uma tecnocracia, promovendo uma vivência mais lúdica e irreverente.` },
      { id: 'B', type: 'text', value: `promoveram o surgimento de atletas mais habilidosos, para que fossem inovadores.` },
      { id: 'C', type: 'text', value: `incentivaram a associação dessa manifestação à fruição, favorecendo o improviso.` },
      { id: 'D', type: 'text', value: `tornaram a modalidade em um produto a ser consumido, negando sua dimensão criativa.` },
      { id: 'E', type: 'text', value: `contribuíram para esse esporte ter mais jogadores, bem como acompanhado de torcedores.` },
    ],
    correct: 'D',
    explanation: `Resposta correta: D. Galeano afirma que o futebol passou 'do prazer ao dever', convertendo-se em espetáculo e em um dos negócios mais lucrativos do mundo, que atrofia a fantasia e proíbe a ousadia. O texto indica, portanto, que as mudanças tornaram a modalidade um produto a ser consumido, negando sua dimensão criativa (alternativa D). A alternativa A associa a tecnocracia a uma vivência mais lúdica, o contrário do texto; B fala em atletas mais habilidosos e inovadores; C, em associação à fruição e ao improviso; e E, em mais jogadores e torcedores — todas em desacordo com a crítica do autor à mercantilização.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 32,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Fotografia: LUCAS HALLEL. Disponível em: www.flickr.com. Acesso em: 16 abr. 2018 (adaptado). 
O grupo O Teatro Mágico apresenta composições autorais 
que têm referências estéticas do rock , do pop e da música 
folclórica brasileira. A originalidade dos seus shows tem 
relação com a ópera europeia do século XIX a partir da`,
    images: ['/enem/2018/images/enem_2018_d1_q32.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `disposição cênica dos artistas no espaço teatral.` },
      { id: 'B', type: 'text', value: `integração de diversas` },
      { id: 'C', type: 'text', value: `sobreposição entre música e texto literário.` },
      { id: 'D', type: 'text', value: `manutenção de um diálogo com o público.` },
      { id: 'E', type: 'text', value: `adoção de um enredo como fio condutor.` },
    ],
    correct: 'B',
    explanation: `Resposta correta: B. O espetáculo de O Teatro Mágico aproxima-se da ópera europeia do século XIX ao reunir música, texto, teatro e recursos cênicos num só acontecimento, isto é, pela integração de diversas linguagens artísticas (alternativa B). A alternativa A restringe a relação à disposição cênica dos artistas; C fala apenas na sobreposição entre música e texto; D, na manutenção de diálogo com o público; e E, na adoção de um enredo como fio condutor — aspectos que podem estar presentes, mas não correspondem ao traço que aproxima o grupo da ópera, que é a fusão de várias artes.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Intertextualidade', 'Questões aleatórias'],
  },
  {
    id: 33,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `A trajetória de Liesel Meminger é contada por uma narradora
mórbida, surpreendentemente simpática. Ao perceber que a
pequena ladra de livros lhe escapa, a Morte afeiçoa-se à
menina e rastreia suas pegadas de 1939 a 1943. Traços de uma
sobrevivente: a mãe comunista, perseguida pelo nazismo, envia
Liesel e o irmão para o subúrbio pobre de uma cidade alemã,
onde um casal se dispõe a adotá-los por dinheiro. O garoto
morre no trajeto e é enterrado por um coveiro que deixa cair
um livro na neve. É o primeiro de uma série que a menina vai
surrupiar ao longo dos anos. O único vínculo com a família é
esta obra, que ela ainda não sabe ler. A vida ao redor é a
pseudorrealidade criada em torno do culto a Hitler na Segunda
Guerra. Ela assiste à eufórica celebração do aniversário do
Führer pela vizinhança. A Morte, perplexa diante da violência
humana, dá um tom leve e divertido à narrativa deste duro
confronto entre a infância perdida e a crueldade do mundo
adulto, um sucesso absoluto - e raro - de crítica e público.
Disponível em: www.odevoradordelivros.com. Acesso em: 24 jun.
2014. Os gêneros textuais podem ser caracterizados, dentre
outros fatores, por seus objetivos. Esse fragmento é um(a)`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `reportagem, pois busca convencer o interlocutor da tese defendida ao longo do texto.` },
      { id: 'B', type: 'text', value: `resumo, pois promove o contato rápido do leitor com uma informação desconhecida.` },
      { id: 'C', type: 'text', value: `sinopse, pois sintetiza as informações relevantes de uma obra de modo impessoal.` },
      { id: 'D', type: 'text', value: `instrução, pois ensina algo por meio de explicações sobre uma obra específica.` },
      { id: 'E', type: 'text', value: `resenha, pois apresenta uma produção intelectual de forma crítica.` },
    ],
    correct: 'E',
    explanation: `Resposta correta: E. O fragmento apresenta uma obra ('A Menina que Roubava Livros') comentando seu enredo e emitindo juízo de valor ('um sucesso absoluto - e raro - de crítica e público'), o que caracteriza a resenha, pois apresenta uma produção intelectual de forma crítica (alternativa E). A alternativa A o classifica como reportagem com tese a defender; B, como resumo meramente informativo; C, como sinopse impessoal — mas há avaliação crítica, o que exclui o caráter neutro; e D, como instrução, gênero que ensina um procedimento, inexistente aqui.`,
    subject: ['por'],
    topics: ['Gêneros textuais', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 34,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `TEXTO I 
GRIMBERG, N. Estrutura vertical dupla. 
Disponível em: www.normagrimberg.com.br. Acesso em: 13 dez. 2017. 
TEXTO II 
Urna cerimonial marajoara . Cerâmica. 1400 a 400 a.C. 81 cm. 
Museu Nacional do Rio de Janeiro. 
Disponível em: www.museunacional.ufrj.br. Acesso em: 11 dez. 2017. 
As duas imagens são produções que têm a cerâmica 
como matéria-prima. A obra Estrutura vertical dupla se 
distingue da urna funerária marajoara ao`,
    images: ['/enem/2018/images/enem_2018_d1_q34_1.jpg', '/enem/2018/images/enem_2018_d1_q34_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `evidenciar a simetria na disposição das peças.` },
      { id: 'B', type: 'text', value: `materializar a técnica sem função utilitária.` },
      { id: 'C', type: 'text', value: `abandonar a regularidade na composição.` },
      { id: 'D', type: 'text', value: `anular possibilidades de leituras afetivas.` },
      { id: 'E', type: 'text', value: `integrar o suporte em sua constituição.` },
    ],
    correct: 'B',
    explanation: `Resposta correta: B. Tanto a obra 'Estrutura vertical dupla' quanto a urna marajoara são de cerâmica, mas a urna tinha função utilitária (funerária), enquanto a obra de Norma Grimberg materializa a técnica sem função utilitária (alternativa B), existindo como objeto puramente artístico. A alternativa A fala em simetria, C em abandono da regularidade e E em integrar o suporte, características que não distinguem especificamente as duas peças; e D afirma que a obra anula leituras afetivas, o que não se sustenta, pois a arte contemporânea também as admite.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 35,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `o que será que ela quer 
essa mulher de vermelho 
alguma coisa ela quer 
pra ter posto esse vestido 
não pode ser apenas 
uma escolha casual 
podia ser um amarelo 
verde ou talvez azul 
mas ela escolheu vermelho 
ela sabe o que ela quer 
e ela escolheu vestido 
e ela é uma mulher 
então com base nesses fatos 
eu já posso afirmar 
que conheço o seu desejo 
caro watson, elementar: 
o que ela quer sou euzinho 
sou euzinho o que ela quer 
só pode ser euzinho 
o que mais podia ser 
FREITAS, A. Um útero é do tamanho de um punho . São Paulo: Cosac Naify, 2013. 
No processo de elaboração do poema, a autora confere 
ao eu lírico uma identidade que aqui representa a`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `hipocrisia do discurso alicerçado sobre o senso comum.` },
      { id: 'B', type: 'text', value: `mudança de paradigmas de imagem atribuídos à mulher.` },
      { id: 'C', type: 'text', value: `tentativa de estabelecer preceitos da psicologia feminina.` },
      { id: 'D', type: 'text', value: `importância da correlação entre ações e efeitos causados.` },
      { id: 'E', type: 'text', value: `valorização da sensibilidade como característica de gênero.` },
    ],
    correct: 'A',
    explanation: `Resposta correta: A. No poema de Angélica Freitas, o eu lírico parte do fato de a mulher vestir vermelho para, com raciocínio pseudológico ('caro watson, elementar'), concluir que ela o deseja. Essa voz representa a hipocrisia do discurso alicerçado sobre o senso comum (alternativa A), que, a partir de estereótipos, presume saber o desejo feminino. A alternativa B fala em mudança de paradigmas sobre a mulher, o contrário do que o poema critica; C vê uma tentativa séria de psicologia feminina; D, a importância da relação causa-efeito; e E, a valorização da sensibilidade feminina — leituras que ignoram o tom irônico de denúncia do machismo.`,
    subject: ['lit'],
    topics: ['Literatura brasileira', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 36,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `O rio que fazia uma volta atrás de nossa casa era a 
imagem de um vidro mole que fazia uma volta atrás 
de casa. 
Passou um homem e disse: Essa volta que o 
rio faz por trás de sua casa se chama enseada. 
Não era mais a imagem de uma cobra de vidro que 
fazia uma volta atrás de casa. 
Era uma enseada. 
Acho que o nome empobreceu a imagem. 
BARROS, M. O livro das ignoracas . Rio de Janeiro: Best Seller, 2008. 
O sujeito poético questiona o uso do vocábulo “enseada” 
porque a`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `terminologia mencionada é incorreta.` },
      { id: 'B', type: 'text', value: `nomeação minimiza a percepção subjetiva.` },
      { id: 'C', type: 'text', value: `palavra é aplicada a outro espaço geográfico.` },
      { id: 'D', type: 'text', value: `designação atribuída ao termo é desconhecida.` },
      { id: 'E', type: 'text', value: `definição modifica o significado do termo no dicionário.` },
    ],
    correct: 'B',
    explanation: `Resposta correta: B. No poema de Manoel de Barros, o sujeito poético compara o rio a 'um vidro mole' e a 'uma cobra de vidro', mas, ao ouvir que aquela curva se chama 'enseada', conclui que 'o nome empobreceu a imagem'. Ele questiona o vocábulo porque a nomeação minimiza a percepção subjetiva (alternativa B), substituindo a imagem poética pelo termo técnico. A alternativa A diz que a terminologia é incorreta, o que não é o caso; C fala em aplicação a outro espaço geográfico; D, em designação desconhecida; e E, em alteração do significado de dicionário — nenhuma corresponde ao incômodo do eu lírico, que é a perda da subjetividade.`,
    subject: ['lit'],
    topics: ['Literatura brasileira', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 37,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `“Acuenda o Pajubá”: conheça o “dialeto secreto” 
utilizado por gays e travestis 
Com origem no iorubá, linguagem foi adotada por 
travestis e ganhou a comunidade 
“Nhaí, amapô! Não faça a loka e pague meu acué, 
deixe de equê se não eu puxo teu picumã!” Entendeu 
as palavras dessa frase? Se sim, é porque você manja 
alguma coisa de pajubá, o “dialeto secreto” dos gays 
e travestis. 
Adepto do uso das expressões, mesmo nos ambientes 
mais formais, um advogado afirma: “É claro que eu não 
vou falar durante uma audiência ou numa reunião, mas 
na firma, com meus colegas de trabalho, eu falo de ‘acué’ 
o tempo inteiro”, brinca. “A gente tem que ter cuidado de 
falar outras palavras porque hoje o pessoal já entende, 
né? Tá na internet, tem até dicionário...”, comenta. 
O dicionário a que ele se refere é o Aurélia, a 
dicionária da língua afiada , lançado no ano de 2006 e 
escrito pelo jornalista Ângelo Vip e por Fred Libi. Na obra, 
há mais de 1 300 verbetes revelando o significado das 
palavras do pajubá. 
Não se sabe ao certo quando essa linguagem surgiu, 
mas sabe-se que há claramente uma relação entre o 
pajubá e a cultura africana, numa costura iniciada ainda 
na época do Brasil colonial. 
Disponível em: www.midiamax.com.br. Acesso em: 4 abr. 2017 (adaptado). 
Da perspectiva do usuário, o pajubá ganha status de 
dialeto, caracterizando-se como elemento de patrimônio 
linguístico, especialmente por`,
    alternatives: [
      { id: 'A', type: 'text', value: `ter mais de mil palavras conhecidas.` },
      { id: 'B', type: 'text', value: `ter palavras diferentes de uma linguagem secreta.` },
      { id: 'C', type: 'text', value: `ser consolidado por objetos formais de registro.` },
      { id: 'D', type: 'text', value: `ser utilizado por advogados em situações formais.` },
      { id: 'E', type: 'text', value: `ser comum em conversas no ambiente de trabalho.` },
    ],
    correct: 'C',
    explanation: `Resposta correta: C. Para o usuário, o pajubá ganha status de dialeto e de patrimônio linguístico especialmente por estar consolidado em objetos formais de registro (alternativa C), como o dicionário 'Aurélia', com mais de 1 300 verbetes, citado no texto. A alternativa A apenas quantifica as palavras, sem explicar o status de patrimônio; B é vaga ao falar em palavras diferentes de uma linguagem secreta; D e E destacam o uso por advogados ou no trabalho, situações que ilustram sua difusão, mas não o que o legitima como dialeto registrado.`,
    subject: ['por'],
    topics: ['Variação linguística', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 38,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Certa vez minha mãe surrou-me com uma corda 
nodosa que me pintou as costas de manchas sangrentas. 
Moído, virando a cabeça com dificuldade, eu distinguia 
nas costelas grandes lanhos vermelhos. Deitaram-me, 
enrolaram-me em panos molhados com água de sal 
- e houve uma discussão na família. Minha avó, que 
nos visitava, condenou o procedimento da filha e esta 
afligiu-se. Irritada, ferira-me à toa, sem querer. Não 
guardei ódio a minha mãe: o culpado era o nó. 
RAMOS, G. Infância . Rio de Janeiro: Record, 1998. 
Num texto narrativo, a sequência dos fatos contribui para 
a progressão temática. No fragmento, esse processo é 
indicado pela`,
    alternatives: [
      { id: 'A', type: 'text', value: `alternância das pessoas do discurso que determinam o foco narrativo.` },
      { id: 'B', type: 'text', value: `utilização de formas verbais que marcam tempos narrativos variados.` },
      { id: 'C', type: 'text', value: `indeterminação dos sujeitos de ações que caracterizam os eventos narrados.` },
      { id: 'D', type: 'text', value: `justaposição de frases que relacionam semanticamente os acontecimentos narrados.` },
      { id: 'E', type: 'text', value: `recorrência de expressões adverbiais que organizam temporalmente a narrativa.` },
    ],
    correct: 'B',
    explanation: `Resposta correta: B. No fragmento de 'Infância', a progressão temática apoia-se na utilização de formas verbais que marcam tempos narrativos variados (alternativa B): o pretérito perfeito ('surrou', 'enrolaram') faz avançar os fatos, enquanto o imperfeito ('distinguia') e outras formas situam ações em diferentes planos do relato. A alternativa A fala em alternância das pessoas do discurso, que não ocorre; C, em indeterminação dos sujeitos; D, em justaposição de frases; e E, em expressões adverbiais de tempo — recursos que não são os responsáveis, no trecho, pelo encadeamento temporal dos acontecimentos.`,
    subject: ['por'],
    topics: ['Gramática (sintaxe, morfologia, semântica)', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 39,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Disponível em: www.facebook.com/omeusegredinho. Acesso em: 9 dez. 2017 (adaptado). 
Essa imagem ilustra a reação dos celíacos (pessoas 
sensíveis ao glúten) ao ler rótulos de alimentos sem 
glúten. Essas reações indicam que, em geral, os rótulos 
desses produtos`,
    images: ['/enem/2018/images/enem_2018_d1_q39.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `trazem informações explícitas sobre a presença do glúten.` },
      { id: 'B', type: 'text', value: `oferecem várias opções de sabor para esses consumidores.` },
      { id: 'C', type: 'text', value: `classificam o produto como adequado para o consumidor celíaco.` },
      { id: 'D', type: 'text', value: `influenciam o consumo de alimentos especiais para esses consumidores.` },
      { id: 'E', type: 'text', value: `variam na forma de apresentação de informações relevantes para esse público.` },
    ],
    correct: 'E',
    explanation: `Resposta correta: E. A imagem mostra a reação de celíacos ao ler rótulos de alimentos, o que indica que, em geral, esses rótulos variam na forma de apresentar informações relevantes para esse público (alternativa E), dificultando a identificação clara da presença ou ausência de glúten. A alternativa A afirma que os rótulos trazem a informação de modo explícito, o que a reação desmente; B fala em opções de sabor; C diz que classificam o produto como adequado ao celíaco, também contrariado pela reação; e D trata de influência no consumo, aspecto não evidenciado pela imagem.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 40,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `ABL lança novo concurso cultural: 
“Conte o conto sem aumentar um ponto” 
Em razão da grande repercussão do concurso de 
Microcontos do Twitter da ABL, o Abletras, a Academia 
Brasileira de Letras lançou no dia do seu aniversário 
de 113 anos um novo concurso cultural intitulado 
“Conte o conto sem aumentar um ponto”, baseado na 
obra A cartomante , de Machado de Assis. 
“Conte o conto sem aumentar um ponto” tem 
como objetivo dar um final distinto do original ao conto 
A cartomante , de Machado de Assis, utilizando-se o 
mesmo número de caracteres - ou inferior - que Machado 
concluiu seu trabalho, ou seja, 1 778 caracteres. 
Vale ressaltar que, para participar do concurso, 
o concorrente deverá ser seguidor do Twitter da 
ABL, o Abletras. 
Disponível em: www.academia.org.br. Acesso em: 18 out. 2015 (adaptado). 
O Twitter é reconhecido por promover o compartilhamento 
de textos. Nessa notícia, essa rede social foi utilizada 
como veículo/suporte para um concurso literário por 
causa do(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `limite predeterminado de extensão do texto.` },
      { id: 'B', type: 'text', value: `interesse pela participação de jovens.` },
      { id: 'C', type: 'text', value: `atualidade do enredo proposto.` },
      { id: 'D', type: 'text', value: `fidelidade a fatos cotidianos.` },
      { id: 'E', type: 'text', value: `dinâmica da sequência narrativa.` },
    ],
    correct: 'A',
    explanation: `Resposta correta: A. O concurso literário da ABL foi veiculado no Twitter porque essa rede impõe um limite predeterminado de extensão do texto (alternativa A): o desafio é reescrever o final de 'A cartomante' usando, no máximo, o mesmo número de caracteres de Machado (1 778). A alternativa B fala em interesse pela participação de jovens; C, em atualidade do enredo; D, em fidelidade a fatos cotidianos; e E, na dinâmica da sequência narrativa — razões que não explicam a escolha do suporte, cuja característica decisiva é a restrição de caracteres.`,
    subject: ['por'],
    topics: ['Gêneros textuais', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 41,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Disponível em: www.sul21.com.br. Acesso em: 1 dez. 2017 (adaptado). 
Nesse texto, busca-se convencer o leitor a mudar seu 
comportamento por meio da associação de verbos no 
modo imperativo à`,
    images: ['/enem/2018/images/enem_2018_d1_q41.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `indicação de diversos canais de atendimento.` },
      { id: 'B', type: 'text', value: `divulgação do Centro de Defesa da Mulher.` },
      { id: 'C', type: 'text', value: `informação sobre a duração da campanha.` },
      { id: 'D', type: 'text', value: `apresentação dos diversos apoiadores.` },
      { id: 'E', type: 'text', value: `utilização da imagem das três mulheres.` },
    ],
    correct: 'E',
    explanation: `Resposta correta: E. O texto busca mudar o comportamento do leitor associando verbos no modo imperativo à utilização da imagem das três mulheres (alternativa E), que reforça visualmente o apelo da campanha. As alternativas A, B, C e D citam elementos que podem constar do material — canais de atendimento, divulgação do centro de defesa, duração da campanha e apoiadores —, mas nenhum deles se articula diretamente aos imperativos para persuadir, função que, no texto, cabe à imagem das mulheres.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Funções da linguagem', 'Questões aleatórias'],
  },
  {
    id: 42,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `A Casa de Vidro 
Houve protestos. 
Deram uma bola a cada criança e tempo para brincar. 
Elas aprenderam malabarismos incríveis e algumas 
viajavam pelo mundo exibindo sua alegre habilidade. 
(O problema é que muitos, a maioria, não tinham jeito e 
eram feios de noite, assustadores. Seria melhor prender 
essa gente - havia quem dissesse.) 
Houve protestos. 
Aumentaram o preço da carne, liberaram os preços 
dos cereais e abriram crédito a juros baixos para o 
agricultor. O dinheiro que sobrasse, bem, digamos, ora o 
dinheiro que sobrasse! 
Houve protestos. 
Diminuíram os salários (infelizmente aumentou o 
número de assaltos) porque precisamos combater a 
inflação e, como se sabe, quando os salários estão acima 
do índice de produtividade eles se tornam altamente 
inflacionários, de modo que. 
Houve protestos. 
Proibiram os protestos. 
E no lugar dos protestos nasceu o ódio. Então surgiu 
a Casa de Vidro, para acabar com aquele ódio. 
ÂNGELO, I. A casa de vidro . São Paulo: Círculo do Livro, 1985. 
Publicado em 1979, o texto compartilha com outras obras 
da literatura brasileira escritas no período as marcas do 
contexto em que foi produzido, como a`,
    alternatives: [
      { id: 'A', type: 'text', value: `referência à censura e à opressão para alegorizar a falta de liberdade de expressão característica da época.` },
      { id: 'B', type: 'text', value: `valorização de situações do cotidiano para atenuar os sentimentos de revolta em relação ao governo instituído.` },
      { id: 'C', type: 'text', value: `utilização de metáforas e ironias para expressar um olhar crítico em relação à situação social e política do país.` },
      { id: 'D', type: 'text', value: `tendência realista para documentar com verossimilhança o drama da população brasileira durante o Regime Militar.` },
      { id: 'E', type: 'text', value: `sobreposição das manifestações populares pelo discurso oficial para destacar o autoritarismo do momento histórico.` },
    ],
    correct: 'C',
    explanation: `Resposta correta: C. Publicado em 1979, o conto de Ivan Ângelo usa metáforas e ironias — como a repetição de 'Houve protestos' seguida de 'Proibiram os protestos' e o surgimento da 'Casa de Vidro' — para expressar um olhar crítico sobre a situação social e política do país (alternativa C) sob a ditadura. A alternativa A reduz o texto à referência alegórica à censura; B fala em atenuar a revolta, o contrário do efeito crítico; D atribui-lhe uma tendência realista documental, quando o recurso é simbólico; e E trata da sobreposição do discurso oficial às manifestações, aspecto que não resume o traço de época do fragmento.`,
    subject: ['lit'],
    topics: ['Literatura brasileira', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 43,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Encontrando base em argumentos supostamente 
científicos, o mito do sexo frágil contribuiu historicamente 
para controlar as práticas corporais desempenhadas 
pelas mulheres. Na história do Brasil, exatamente 
na transição entre os séculos XIX e XX, destacam-se 
os esforços para impedir a participação da mulher no 
campo das práticas esportivas. As desconfianças em 
relação à presença da mulher no esporte estiveram 
culturalmente associadas ao medo de masculinizar 
o corpo feminino pelo esforço físico intenso. Em relação 
ao futebol feminino, o mito do sexo frágil atuou como 
obstáculo ao consolidar a crença de que o esforço 
físico seria inapropriado para proteger a feminilidade 
da mulher “normal”. Tal mito sustentou um forte movimento 
contrário à aceitação do futebol como prática esportiva 
feminina. Leis e propagandas buscaram desacreditar 
o futebol, considerando-o inadequado à delicadeza. 
Na verdade, as mulheres eram consideradas incapazes 
de se adequar às múltiplas dificuldades do “esporte-rei”. 
TEIXEIRA, F. L. S.; CAMINHA, I. O. Preconceito no futebol feminino: uma revisão sistemática. 
Movimento , Porto Alegre, n. 1, 2013 (adaptado). 
No contexto apresentado, a relação entre a prática do 
futebol e as mulheres é caracterizada por um`,
    alternatives: [
      { id: 'A', type: 'text', value: `argumento biológico para justificar desigualdades históricas e sociais.` },
      { id: 'B', type: 'text', value: `discurso midiático que atua historicamente na desconstrução do mito do sexo frágil.` },
      { id: 'C', type: 'text', value: `apelo para a preservação do futebol como uma modalidade praticada apenas pelos homens.` },
      { id: 'D', type: 'text', value: `olhar feminista que qualifica o futebol como uma atividade masculinizante para as mulheres.` },
      { id: 'E', type: 'text', value: `receio de que sua inserção subverta o “esporte-rei” ao demonstrarem suas capacidades de jogo.` },
    ],
    correct: 'A',
    explanation: `Resposta correta: A. O texto mostra que o 'mito do sexo frágil', apoiado em supostos argumentos científicos, foi usado para afastar as mulheres do esporte, sobretudo do futebol, sob o temor de masculinizar o corpo feminino. A relação entre futebol e mulheres é caracterizada, assim, por um argumento biológico usado para justificar desigualdades históricas e sociais (alternativa A). A alternativa B afirma que o discurso midiático desconstrói o mito, o oposto do texto; C defende o futebol como esporte só masculino; D fala em olhar feminista; e E, em receio de subversão do 'esporte-rei' — leituras que distorcem o sentido do texto.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 44,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Farejador de Plágio: uma ferramenta contra a cópia ilegal No
mundo acadêmico ou nos veículos de comunicação, as cópias
ilegais podem surgir de diversas maneiras, sendo integrais,
parciais ou paráfrases. Para ajudar a combater esse crime, o
professor Maximiliano Zambonatto Pezzin, engenheiro de
computação, desenvolveu junto com os seus alunos o programa
Farejador de Plágio. O programa é capaz de detectar: trechos
contínuos e fragmentados, frases soltas, partes de textos
reorganizadas, frases reescritas, mudanças na ordem dos
períodos e erros fonéticos e sintáticos. Mas como o programa
realmente funciona? Considerando o texto como uma sequência de
palavras, a ferramenta analisa e busca trecho por trecho nos
sites de busca, assim como um professor desconfiado de um
aluno faria. A diferença é que o programa permite que se
pesquise em vários buscadores, gerando assim muito mais
resultados. Disponível em: http://reporterunesp.jor.br. Acesso
em: 19 mar. 2018. Segundo o texto, a ferramenta Farejador de
Plágio alcança seu objetivo por meio da`,
    alternatives: [
      { id: 'A', type: 'text', value: `seleção de cópias integrais.` },
      { id: 'B', type: 'text', value: `busca em sites especializados.` },
      { id: 'C', type: 'text', value: `simulação da atividade docente.` },
      { id: 'D', type: 'text', value: `comparação de padrões estruturais.` },
      { id: 'E', type: 'text', value: `identificação de sequência de fonemas.` },
    ],
    correct: 'D',
    explanation: `Resposta correta: D. Segundo o texto, o Farejador de Plágio cumpre seu objetivo pela comparação de padrões estruturais (alternativa D): tratando o texto como uma sequência de palavras, analisa trecho por trecho e os confronta com conteúdos encontrados em vários buscadores, detectando cópias integrais, parciais e paráfrases. A alternativa A restringe-se às cópias integrais; B fala em sites especializados, quando o programa usa buscadores comuns; C destaca a simulação da atividade docente, que é apenas uma comparação ilustrativa; e E reduz o funcionamento à identificação de fonemas, só um dos aspectos citados.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 45,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `TEXTO I 
BRACCO, A; LOSCHI, M. Quando rotas se tornam arte. Retratos: a revista do IBGE . 
Rio de Janeiro, n. 3, set. 2017 (adaptado). 
TEXTO II 
Stephen Lund, artista canadense, morador em 
Victória, capital da Colúmbia Britânica (Canadá), 
transformou-se em fenômeno mundial produzindo obras 
de arte virtuais pedalando sua bike . Seguindo rotas 
traçadas com o auxílio de um dispositivo de GPS, ele 
calcula ter percorrido mais de 10 mil quilômetros. 
Disponível em: www.booooooom.com. Acesso em: 9 dez. 2017 (adaptado). 
Os textos destacam a inovação artística proposta por 
Stephen Lund a partir do(a)`,
    images: ['/enem/2018/images/enem_2018_d1_q45.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `deslocamento das tecnologias de suas funções habituais.` },
      { id: 'B', type: 'text', value: `perspectiva de funcionamento do dispositivo de GPS.` },
      { id: 'C', type: 'text', value: `ato de guiar sua bicicleta pelas ruas da cidade.` },
      { id: 'D', type: 'text', value: `análise dos problemas de mobilidade urbana.` },
      { id: 'E', type: 'text', value: `foco na promoção cultural da sua cidade.` },
    ],
    correct: 'A',
    explanation: `Resposta correta: A. Os textos destacam que Stephen Lund cria obras de arte traçando percursos de bicicleta registrados por GPS, ou seja, a inovação está no deslocamento das tecnologias de suas funções habituais (alternativa A): a bicicleta e o GPS, pensados para transporte e localização, passam a servir à criação artística. A alternativa B foca o funcionamento técnico do GPS; C, o simples ato de pedalar pela cidade; D, problemas de mobilidade urbana; e E, a promoção cultural da cidade — aspectos secundários que não traduzem a novidade artística ressaltada.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 46,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `No Segundo Congresso Internacional de Ciências 
Geográficas, em 1875, a que compareceram o 
presidente da República, o governador de Paris e 
o presidente da Assembleia, o discurso inaugural 
do almirante La Roucière-Le Noury expôs a atitude 
predominante no encontro: “Cavalheiros, a Providência 
nos ditou a obrigação de conhecer e conquistar a terra. 
Essa ordem suprema é um dos deveres imperiosos 
inscritos em nossas inteligências e nossas atividades. 
A geografia, essa ciência que inspira tão bela devoção 
e em cujo nome foram sacrificadas tantas vítimas, 
tornou-se a filosofia da terra”. 
SAID, E. Cultura e politica . São Paulo: Cia. das Letras, 1995. 
No contexto histórico apresentado, a exaltação da ciência 
geográfica decorre do seu uso para o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `preservação cultural dos territórios ocupados.` },
      { id: 'B', type: 'text', value: `formação humanitária da sociedade europeia.` },
      { id: 'C', type: 'text', value: `catalogação de dados úteis aos propósitos colonialistas.` },
      { id: 'D', type: 'text', value: `desenvolvimento de técnicas matemáticas de construção de cartas.` },
      { id: 'E', type: 'text', value: `consolidação do conhecimento topográfico como campo acadêmico.` },
    ],
    correct: 'C',
    explanation: `O discurso de 1875, proferido diante de autoridades do Estado francês, apresenta a geografia como uma suposta missão providencial de conhecer e conquistar a Terra, revelando como o saber geográfico foi instrumentalizado pelo imperialismo europeu do fim do século XIX. Nesse contexto, mapear territórios, levantar recursos e descrever povos tornava-se tarefa útil à expansão colonial, o que sustenta a alternativa C. A preservação cultural (A) e a formação humanitária (B) contrariam a lógica de dominação exaltada no texto. O desenvolvimento de técnicas matemáticas de cartografia (D) e a consolidação acadêmica da disciplina (E) reduzem a questão ao plano técnico ou institucional, ignorando o uso político-colonialista que o próprio discurso celebra.`,
    subject: ['his'],
    topics: ['História Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 47,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `A existência em Jerusalém de um hospital voltado 
para o alojamento e o cuidado dos peregrinos, assim 
como daqueles entre eles que estavam cansados ou 
doentes, fortaleceu o elo entre a obra de assistência 
e de caridade e a Terra Santa. Ao fazer, em 1113, do 
Hospital de Jerusalém um estabelecimento central da 
ordem, Pascoal II estimulava a filiação dos hospitalários 
do Ocidente a ele, sobretudo daqueles que estavam 
ligados à peregrinação na Terra Santa ou em outro lugar. 
A militarização do Hospital de Jerusalém não diminuiu a 
vocação caritativa primitiva, mas a fortaleceu. 
DEMURGER, A. Os Cavaleiros de Cristo . Rio de Janeiro: 
Jorge Zahar, 2002 (adaptado). 
O acontecimento descrito vincula-se ao fenômeno 
ocidental do(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `surgimento do monasticismo guerreiro, ocasionado pelas cruzadas.` },
      { id: 'B', type: 'text', value: `descentralização do poder eclesiástico, produzida pelo feudalismo.` },
      { id: 'C', type: 'text', value: `alastramento da peste bubônica, provocado pela expansão comercial.` },
      { id: 'D', type: 'text', value: `afirmação da fraternidade mendicante, estimulada pela reforma espiritual.` },
      { id: 'E', type: 'text', value: `criação das faculdades de medicina, promovida pelo renascimento urbano.` },
    ],
    correct: 'A',
    explanation: `A transformação do Hospital de Jerusalém em instituição central da ordem, somada à observação de que sua militarização fortaleceu a vocação caritativa, remete ao surgimento das ordens religioso-militares no contexto das Cruzadas, como os hospitalários e os templários. Esses monges-guerreiros uniam voto religioso e função combatente, justificando a alternativa A. A descentralização eclesiástica do feudalismo (B) não corresponde ao fortalecimento de uma ordem centralizada pelo papa. A peste bubônica (C) é anacrônica, pois eclodiu no século XIV, e o texto trata de 1113. As fraternidades mendicantes (D) surgiram depois e não eram militarizadas, e as faculdades de medicina do renascimento urbano (E) nada têm a ver com a filiação dos hospitalários.`,
    subject: ['his'],
    topics: ['História Geral Antiga e Medieval', 'Questões aleatórias'],
  },
  {
    id: 48,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `A tribo não possui um rei, mas um chefe que não 
é chefe de Estado. O que significa isso? Simplesmente 
que o chefe não dispõe de nenhuma autoridade, de 
nenhum poder de coerção, de nenhum meio de dar uma 
ordem. O chefe não é um comandante, as pessoas da 
tribo não têm nenhum dever de obediência. O espaço 
da chefia não é o lugar do poder. Essencialmente 
encarregado de eliminar conflitos que podem surgir 
entre indivíduos, famílias e linhagens, o chefe só dispõe, 
para restabelecer a ordem e a concórdia, do prestígio 
que lhe reconhece a sociedade. Mas evidentemente 
prestígio não significa poder, e os meios que o chefe 
detém para realizar sua tarefa de pacificador limitam-se 
ao uso exclusivo da palavra. 
CLASTRES, P. A sociedade contra o Estado . 
Rio de Janeiro: Francisco Alves, 1982 (adaptado). 
O modelo político das sociedades discutidas no texto 
contrasta com o do Estado liberal burguês porque se 
baseia em:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Imposição ideológica e normas hierárquicas.` },
      { id: 'B', type: 'text', value: `Determinação divina e soberania monárquica.` },
      { id: 'C', type: 'text', value: `Intervenção consensual e autonomia comunitária.` },
      { id: 'D', type: 'text', value: `Mediação jurídica e regras contratualistas.` },
      { id: 'E', type: 'text', value: `Gestão coletiva e obrigações tributárias.` },
    ],
    correct: 'C',
    explanation: `Clastres descreve sociedades indígenas em que o chefe não dispõe de poder coercitivo nem de aparato que imponha obediência, exercendo a liderança pelo prestígio e pela palavra, com a finalidade de mediar conflitos e manter a concórdia. Esse modelo, oposto ao do Estado liberal burguês, assenta-se em intervenção consensual e em autonomia comunitária, como afirma a alternativa C. A imposição ideológica e a hierarquia (A), a determinação divina e a soberania monárquica (B) e a mediação jurídica contratualista (D) remetem justamente a formas de poder centralizado ou estatal que o texto nega. A gestão coletiva com obrigações tributárias (E) também não cabe, pois não há cobrança de tributos na sociedade descrita.`,
    subject: ['soc'],
    topics: ['Sociologia', 'Questões aleatórias'],
  },
  {
    id: 49,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `O filósofo reconhece-se pela posse inseparável 
do gosto da evidência e do sentido da ambiguidade. 
Quando se limita a suportar a ambiguidade, esta se 
chama equívoco. Sempre aconteceu que, mesmo aqueles 
que pretenderam construir uma filosofia absolutamente 
positiva, só conseguiram ser filósofos na medida em que, 
simultaneamente, se recusaram o direito de se instalar no 
saber absoluto. O que caracteriza o filósofo é o movimento 
que leva incessantemente do saber à ignorância, da 
ignorância ao saber, e um certo repouso neste movimento. 
MERLEAU-PONTY, M. Elogio da filosofia . 
Lisboa: Guimarães, 1998 (adaptado). 
O texto apresenta um entendimento acerca dos elementos 
constitutivos da atividade do filósofo, que se caracteriza por`,
    alternatives: [
      { id: 'A', type: 'text', value: `reunir os antagonismos das opiniões ao método dialético.` },
      { id: 'B', type: 'text', value: `ajustar a clareza do conhecimento ao inatismo das ideias.` },
      { id: 'C', type: 'text', value: `associar a certeza do intelecto à imutabilidade da verdade.` },
      { id: 'D', type: 'text', value: `conciliar o rigor da investigação à inquietude do questionamento.` },
      { id: 'E', type: 'text', value: `compatibilizar as estruturas do pensamento aos princípios fundamentais.` },
    ],
    correct: 'D',
    explanation: `Para Merleau-Ponty, o filósofo caracteriza-se pela posse simultânea do gosto da evidência e do sentido da ambiguidade, movendo-se incessantemente entre saber e ignorância sem se instalar em um saber absoluto. Essa descrição concilia o rigor da investigação com a inquietude permanente do questionamento, o que corresponde à alternativa D. Reunir antagonismos ao método dialético (A) e ajustar o conhecimento ao inatismo das ideias (B) introduzem doutrinas que o texto não defende. A imutabilidade da verdade (C) e a fixação em princípios ou estruturas fundamentais (E) contradizem diretamente o movimento e a abertura à ambiguidade que, segundo o autor, definem a atividade filosófica.`,
    subject: ['fil'],
    topics: ['Teoria do conhecimento', 'Questões aleatórias'],
  },
  {
    id: 50,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Figura 1 
Disponível em: www.thehenryford.org. Acesso em: 3 maio 2018. 
Figura 2 
Disponível em: www.abc.net.au. Acesso em: 3 maio 2018. 
Esse ônibus relaciona-se ao ato praticado, em 1955, 
por Rosa Parks, apresentada em fotografia ao lado de 
Martin Luther King. O veículo alcançou o estatuto de 
obra museológica por simbolizar o(a)`,
    images: ['/enem/2018/images/enem_2018_d1_q50_1.jpg', '/enem/2018/images/enem_2018_d1_q50_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `impacto do medo da corrida armamentista.` },
      { id: 'B', type: 'text', value: `democratização do acesso à escola pública.` },
      { id: 'C', type: 'text', value: `preconceito de gênero no transporte coletivo.` },
      { id: 'D', type: 'text', value: `deflagração do movimento por igualdade civil.` },
      { id: 'E', type: 'text', value: `eclosão da rebeldia no comportamento juvenil.` },
    ],
    correct: 'D',
    explanation: `O ônibus tornou-se peça museológica por simbolizar o ato de Rosa Parks em 1955, quando se recusou a ceder seu assento a um branco, episódio que deflagrou o boicote aos ônibus de Montgomery e impulsionou o movimento negro por direitos civis nos Estados Unidos. Por isso, o veículo representa a deflagração do movimento por igualdade civil, conforme a alternativa D. O medo da corrida armamentista (A) pertence a outra dimensão da Guerra Fria. A democratização da escola pública (B) e o preconceito de gênero (C) não correspondem à luta contra a segregação racial em questão. A rebeldia juvenil (E) também não traduz o caráter organizado e político da luta por direitos civis liderada, entre outros, por Martin Luther King.`,
    subject: ['his'],
    topics: ['Movimentos sociais', 'História Contemporânea', 'Questões aleatórias'],
  },
  {
    id: 51,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Desde que tenhamos compreendido o significado 
da palavra “Deus”, sabemos, de imediato, que Deus 
existe. Com efeito, essa palavra designa uma coisa de 
tal ordem que não podemos conceber nada que lhe seja 
maior. Ora, o que existe na realidade e no pensamento é 
maior do que o que existe apenas no pensamento. Donde 
se segue que o objeto designado pela palavra “Deus”, 
que existe no pensamento, desde que se entenda essa 
palavra, também existe na realidade. Por conseguinte, a 
existência de Deus é evidente. 
TOMÁS DE AQUINO. Suma teológica . Rio de Janeiro: Loyola, 2002. 
O texto apresenta uma elaboração teórica de Tomás de 
Aquino caracterizada por`,
    alternatives: [
      { id: 'A', type: 'text', value: `reiterar a ortodoxia religiosa contra os heréticos.` },
      { id: 'B', type: 'text', value: `sustentar racionalmente doutrina alicerçada na fé.` },
      { id: 'C', type: 'text', value: `explicar as virtudes teologais pela demonstração.` },
      { id: 'D', type: 'text', value: `flexibilizar a interpretação oficial dos textos sagrados.` },
      { id: 'E', type: 'text', value: `justificar pragmaticamente crença livre de dogmas.` },
    ],
    correct: 'B',
    explanation: `No trecho, Tomás de Aquino parte do significado da palavra Deus para, por meio de encadeamento lógico, concluir que a existência divina é evidente, articulando argumentação racional a uma verdade sustentada pela fé. Essa busca de fundamentar racionalmente uma doutrina revelada é típica da escolástica medieval e justifica a alternativa B. Reiterar a ortodoxia contra hereges (A) e explicar as virtudes teologais (C) não descrevem a natureza demonstrativa do argumento. Flexibilizar a interpretação dos textos sagrados (D) e justificar uma crença livre de dogmas (E) contrariam o propósito do autor, que é precisamente provar racionalmente um dogma central do cristianismo.`,
    subject: ['fil'],
    topics: ['Filosofia Medieval', 'Questões aleatórias'],
  },
  {
    id: 52,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `TEXTO I 
Tudo aquilo que é válido para um tempo de guerra, 
em que todo homem é inimigo de todo homem, é válido 
também para o tempo durante o qual os homens vivem 
sem outra segurança senão a que lhes pode ser oferecida 
por sua própria força e invenção. 
HOBBES, T. Leviatã . São Paulo: Abril Cultural, 1983. 
TEXTO II 
Não vamos concluir, com Hobbes que, por não ter 
nenhuma ideia de bondade, o homem seja naturalmente 
mau. Esse autor deveria dizer que, sendo o estado de 
natureza aquele em que o cuidado de nossa conservação 
é menos prejudicial à dos outros, esse estado era, por 
conseguinte, o mais próprio à paz e o mais conveniente 
ao gênero humano. 
ROUSSEAU, J.-J. Discurso sobre a origem e o fundamento da desigualdade entre os 
homens . São Paulo: Martins Fontes, 1993 (adaptado). 
Os trechos apresentam divergências conceituais entre 
autores que sustentam um entendimento segundo o qual 
a igualdade entre os homens se dá em razão de uma`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `predisposição ao conhecimento.` },
      { id: 'B', type: 'text', value: `submissão ao transcendente.` },
      { id: 'C', type: 'text', value: `tradição epistemológica.` },
      { id: 'D', type: 'text', value: `condição original.` },
      { id: 'E', type: 'text', value: `vocação política.` },
    ],
    correct: 'D',
    explanation: `Embora Hobbes veja o homem como naturalmente hostil e Rousseau o considere voltado à conservação pacífica, ambos partem de um mesmo pressuposto: a igualdade entre os homens remonta ao estado de natureza, isto é, a uma condição original anterior à vida social organizada. Por isso, a divergência conceitual repousa sobre a ideia comum de condição original, conforme a alternativa D. A predisposição ao conhecimento (A) e a tradição epistemológica (C) deslocam o debate para o campo do saber, que não é o foco. A submissão ao transcendente (B) não fundamenta a igualdade nesses contratualistas, e a vocação política (E) remete à tradição aristotélica, estranha ao argumento sobre o estado de natureza.`,
    subject: ['fil'],
    topics: ['Filosofia Moderna (Descartes, Kant, Hume)', 'Política e Estado', 'Questões aleatórias'],
  },
  {
    id: 53,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Foi-se o tempo em que era possível mostrar um 
mundo econômico organizado em camadas bem 
definidas, onde grandes centros urbanos se ligavam, 
por si próprios, a economias adjacentes “lentas”, com o 
ritmo muito mais rápido do comércio e das finanças de 
longo alcance. Hoje tudo ocorre como se essas camadas 
sobrepostas estivessem mescladas e interpermeadas. 
Interdependências de curto e longo alcance não podem 
mais ser separadas umas das outras. 
BRENNER, N. A globalização como reterritorialização. Cadernos Metrópole , 
n. 24, jul.-dez. 2010 (adaptado). 
A maior complexidade dos espaços urbanos 
contemporâneos ressaltada no texto explica-se pela`,
    alternatives: [
      { id: 'A', type: 'text', value: `expansão de áreas metropolitanas.` },
      { id: 'B', type: 'text', value: `emancipação de novos municípios.` },
      { id: 'C', type: 'text', value: `consolidação de domínios jurídicos.` },
      { id: 'D', type: 'text', value: `articulação de redes multiescalares.` },
      { id: 'E', type: 'text', value: `redefinição de regiões administrativas.` },
    ],
    correct: 'D',
    explanation: `Brenner descreve um espaço urbano contemporâneo em que camadas econômicas antes bem definidas se mesclam, de modo que interdependências de curto e de longo alcance não podem mais ser separadas. Essa complexidade decorre da articulação de redes multiescalares, que conectam simultaneamente escalas local e global, como indica a alternativa D. A expansão metropolitana (A), a emancipação de municípios (B) e a redefinição de regiões administrativas (E) remetem a recortes político-territoriais que não explicam a interpenetração de escalas destacada. A consolidação de domínios jurídicos (C) também não traduz a dinâmica de reterritorialização e de fluxos sobrepostos a que o texto se refere.`,
    subject: ['geo'],
    topics: ['Globalização', 'Urbanização', 'Questões aleatórias'],
  },
  {
    id: 54,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `TEXTO I 
E pois que em outra cousa nesta parte me não posso 
vingar do demônio, admoesto da parte da cruz de Cristo 
Jesus a todos que este lugar lerem, que deem a esta terra 
o nome que com tanta solenidade lhe foi posto, sob pena 
de a mesma cruz que nos há de ser mostrada no dia final, 
os acusar de mais devotos do pau-brasil que dela. 
BARROS, J. In: SOUZA, L. M. Inferno atlântico : demonologia e colonização: 
séculos XVI-XVIII. São Paulo: Cia. das Letras, 1993. 
TEXTO II 
E deste modo se hão os povoadores, os quais, por 
mais arraigados que na terra estejam e mais ricos que 
sejam, tudo pretendem levar a Portugal, e, se as fazendas 
e bens que possuem souberam falar, também lhes 
houveram de ensinar a dizer como os papagaios, aos 
quais a primeira coisa que ensinam é: papagaio real para 
Portugal, porque tudo querem para lá. 
SALVADOR, F. V. In: SOUZA, L. M. (Org.). História da vida privada no Brasil : 
cotidiano e vida privada na América portuguesa. São Paulo: Cia. das Letras, 1997. 
As críticas desses cronistas ao processo de colonização 
portuguesa na América estavam relacionadas à`,
    alternatives: [
      { id: 'A', type: 'text', value: `utilização do trabalho escravo.` },
      { id: 'B', type: 'text', value: `implantação de polos urbanos.` },
      { id: 'C', type: 'text', value: `devastação de áreas naturais.` },
      { id: 'D', type: 'text', value: `ocupação de terras indígenas.` },
      { id: 'E', type: 'text', value: `expropriação de riquezas locais.` },
    ],
    correct: 'E',
    explanation: `Os cronistas João de Barros e frei Vicente do Salvador criticam a postura dos colonizadores que, apegados a Portugal, pretendem levar para a metrópole tudo o que a terra produz, como sugere a imagem do papagaio que repete querer tudo para lá. Essa denúncia recai sobre a expropriação das riquezas locais, extraídas da colônia em proveito do reino, o que valida a alternativa E. O trabalho escravo (A), a implantação de polos urbanos (B) e a ocupação de terras indígenas (D) não são o objeto das críticas apresentadas. A devastação de áreas naturais (C) aparece apenas de modo indireto na referência ao pau-brasil, mas não constitui o cerne da crítica à drenagem de riquezas para Portugal.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 55,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Os soviéticos tinham chegado a Cuba muito cedo 
na década de 1960, esgueirando-se pela fresta aberta 
pela imediata hostilidade norte-americana em relação 
ao processo social revolucionário. Durante três décadas 
os soviéticos mantiveram sua presença em Cuba com 
bases e ajuda militar, mas, sobretudo, com todo o apoio 
econômico que, como saberíamos anos mais tarde, 
mantinha o país à tona, embora nos deixasse em dívida 
com os irmãos soviéticos - e depois com seus herdeiros 
russos - por cifras que chegavam a US$ 32 bilhões. 
Ou seja, o que era oferecido em nome da solidariedade 
socialista tinha um preço definido. 
PADURA, L. Cuba e os russos. Folha de São Paulo , 
19 jul. 2014 (adaptado). 
O texto indica que durante a Guerra Fria as relações 
internas em um mesmo bloco foram marcadas pelo(a)`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `busca da neutralidade política.` },
      { id: 'B', type: 'text', value: `estímulo à competição comercial.` },
      { id: 'C', type: 'text', value: `subordinação à potência hegemônica.` },
      { id: 'D', type: 'text', value: `elasticidade das fronteiras geográficas.` },
      { id: 'E', type: 'text', value: `compartilhamento de pesquisas científicas.` },
    ],
    correct: 'C',
    explanation: `O texto mostra que o apoio soviético a Cuba, embora apresentado como solidariedade socialista, tinha preço definido e gerou enorme dívida, evidenciando que, mesmo dentro de um bloco, as relações eram assimétricas. Durante a Guerra Fria, portanto, prevalecia a subordinação dos países menores à potência hegemônica que liderava o bloco, conforme a alternativa C. A busca de neutralidade política (A) contradiz o alinhamento de Cuba ao polo soviético. O estímulo à competição comercial (B) e o compartilhamento de pesquisas científicas (E) não traduzem a relação de dependência econômica descrita, e a elasticidade de fronteiras (D) não tem relação com o vínculo financeiro entre os dois países.`,
    subject: ['his'],
    topics: ['Guerra Fria', 'Questões aleatórias'],
  },
  {
    id: 56,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Anamorfose é a transformação cartográfica espacial 
em que a forma dos objetos é distorcida, de forma a 
realçar o tema. A área das unidades espaciais às quais 
o tema se refere é alterada de forma proporcional ao 
respectivo valor. 
GASPAR, A. J. Dicionário de ciências cartográficas . Lisboa: Lidel, 2004. 
A técnica descrita foi aplicada na seguinte forma de 
representação do espaço:`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2018/images/enem_2018_d1_q56_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2018/images/enem_2018_d1_q56_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2018/images/enem_2018_d1_q56_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2018/images/enem_2018_d1_q56_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2018/images/enem_2018_d1_q56_E.jpg` },
    ],
    correct: 'C',
    explanation: `A anamorfose cartográfica, definida no texto, distorce a forma das unidades espaciais de modo que a área de cada uma seja proporcional ao valor do tema representado, e não à sua dimensão real no território. A alternativa correta é a representação C, que exibe esse tipo de cartograma com áreas deformadas conforme o dado, em vez de um mapa de contornos fiéis. As demais opções correspondem a representações convencionais do espaço, que preservam as proporções territoriais verdadeiras ou usam outros recursos gráficos. Como não realizam a transformação proporcional ao valor temático descrita no enunciado, não configuram a técnica de anamorfose solicitada.`,
    subject: ['geo'],
    topics: ['Cartografia', 'Questões aleatórias'],
  },
  {
    id: 57,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `A poetisa Emília Freitas subiu a um palanque, 
nervosa, pedindo desculpas por não possuir títulos nem 
conhecimentos, mas orgulhosa ofereceu a sua pena 
que “sem ser hábil, é, em compensação, guiada pelo 
poder da vontade”. Maria Tomásia pronunciava orações 
que levantavam os ouvintes. A escritora Francisca 
Clotilde arrebatava, declamando seus poemas. Aquelas 
“angélicas senhoras”, “heroínas da caridade”, levantavam 
dinheiro para comprar liberdades e usavam de seu 
entusiasmo a fim de convencer os donos de escravos a 
fazerem alforrias gratuitamente. 
MIRANDA, A. Disponível em: www.opovoonline.com.br. Acesso em: 10 jun. 2015. 
As práticas culturais narradas remetem, historicamente, 
ao movimento`,
    alternatives: [
      { id: 'A', type: 'text', value: `feminista.` },
      { id: 'B', type: 'text', value: `sufragista.` },
      { id: 'C', type: 'text', value: `socialista.` },
      { id: 'D', type: 'text', value: `republicano.` },
      { id: 'E', type: 'text', value: `abolicionista.` },
    ],
    correct: 'E',
    explanation: `O relato descreve mulheres que, por meio de poesia, oratória e arrecadação de recursos, compravam liberdades e convenciam senhores a conceder alforrias gratuitas, práticas diretamente associadas à campanha pelo fim da escravidão no Brasil. Trata-se, portanto, do movimento abolicionista, conforme a alternativa E. O movimento feminista (A) e o sufragista (B) voltavam-se à igualdade de direitos e ao voto das mulheres, questões distintas do objetivo narrado. O movimento socialista (C) tinha pauta operária e de classe, e o republicano (D) defendia a mudança do regime político, nenhum deles coincidindo com a ação de libertar pessoas escravizadas descrita no texto.`,
    subject: ['his'],
    topics: ['Escravidão e abolição', 'Questões aleatórias'],
  },
  {
    id: 58,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `A democracia que eles pretendem é a democracia 
dos privilégios, a democracia da intolerância e do ódio. 
A democracia que eles querem é para liquidar com a 
Petrobras, é a democracia dos monopólios, nacionais e 
internacionais, a democracia que pudesse lutar contra 
o povo. Ainda ontem eu afirmava que a democracia 
jamais poderia ser ameaçada pelo povo, quando o povo 
livremente vem para as praças - as praças que são do 
povo. Para as ruas - que são do povo. 
Disponível em: www.revistadehistoria.com.br/seção/artigos/discurso-de-joao-goulart-no- 
comício-da-central. Acesso em: 29 out. 2015. 
Em um momento de radicalização política, a retórica no 
discurso do presidente João Goulart, proferido no comício 
da Central do Brasil, buscava justificar a necessidade de`,
    alternatives: [
      { id: 'A', type: 'text', value: `conter a abertura econômica para conseguir a adesão das elites.` },
      { id: 'B', type: 'text', value: `impedir a ingerência externa para garantir a conservação de direitos.` },
      { id: 'C', type: 'text', value: `regulamentar os meios de comunicação para coibir os partidos de oposição.` },
      { id: 'D', type: 'text', value: `aprovar os projetos reformistas para atender a mobilização de setores trabalhistas.` },
      { id: 'E', type: 'text', value: `incrementar o processo de desestatização para diminuir a pressão da opinião pública.` },
    ],
    correct: 'D',
    explanation: `No comício da Central do Brasil, às vésperas do golpe de 1964, João Goulart usou uma retórica de defesa do povo e de ataque aos privilégios para legitimar a implementação das reformas de base, atendendo à mobilização de trabalhadores e setores populares. Isso corresponde à alternativa D. Conter a abertura econômica para atrair as elites (A) contraria o tom popular e nacionalista do discurso. Impedir a ingerência externa (B) não é o eixo central da fala. Regulamentar a comunicação para coibir a oposição (C) e incrementar a desestatização (E) opõem-se ao discurso, que justamente defendia a Petrobras e o fortalecimento do Estado contra os monopólios.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 59,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `A rebelião luso-brasileira em Pernambuco começou 
a ser urdida em 1644 e explodiu em 13 de junho de 
1645, dia de Santo Antônio. Uma das primeiras medidas 
de João Fernandes foi decretar nulas as dívidas que 
os rebeldes tinham com os holandeses. Houve grande 
adesão da “nobreza da terra”, entusiasmada com esta 
proclamação heroica. 
VAINFAS, R. Guerra declarada e paz fingida na restauração portuguesa. Tempo , n. 27, 2009. 
O desencadeamento dessa revolta na América portuguesa 
seiscentista foi o resultado do(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `fraqueza bélica dos protestantes batavos.` },
      { id: 'B', type: 'text', value: `comércio transatlântico da África ocidental.` },
      { id: 'C', type: 'text', value: `auxílio financeiro dos negociantes flamengos.` },
      { id: 'D', type: 'text', value: `diplomacia internacional dos Estados ibéricos.` },
      { id: 'E', type: 'text', value: `interesse econômico dos senhores de engenho.` },
    ],
    correct: 'E',
    explanation: `A Insurreição Pernambucana de 1645 contou com ampla adesão da nobreza da terra, estimulada pela anulação das dívidas que os revoltosos tinham com os holandeses, o que revela a motivação econômica dos senhores de engenho endividados e insatisfeitos com a administração batava. Por isso, o desencadeamento da revolta resultou do interesse econômico desses senhores, como afirma a alternativa E. A fraqueza bélica protestante (A) não é apontada como causa. O comércio africano (B) e o auxílio financeiro flamengo (C) favoreciam os próprios holandeses, não os rebeldes. A diplomacia entre os Estados ibéricos (D) não explica a adesão local motivada pelo cancelamento das dívidas.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 60,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Em Beirute, no Líbano, quando perguntado sobre 
onde se encontram os refugiados sírios, a resposta do 
homem é imediata: “em todos os lugares e em lugar 
nenhum”. Andando ao acaso, não é raro ver, sob um 
prédio ou num canto de calçada, ao abrigo do vento, uma 
família refugiada em volta de uma refeição frugal posta 
sobre jornais como se fossem guardanapos. Também se 
vê de vez em quando uma tenda com a sigla ACNUR 
(Alto Comissariado das Nações Unidas para Refugiados), 
erguida em um dos raros terrenos vagos da capital. 
JABER, H. Quem realmente acolhe os refugiados? 
Le Monde Diplomatique Brasil , out. 2015 (adaptado). 
O cenário descrito aponta para uma crise humanitária que 
é explicada pelo processo de`,
    alternatives: [
      { id: 'A', type: 'text', value: `migração massiva de pessoas atingidas por catástrofe natural.` },
      { id: 'B', type: 'text', value: `hibridização cultural de grupos caracterizados por homogeneidade social.` },
      { id: 'C', type: 'text', value: `desmobilização voluntária de militantes cooptados por seitas extremistas.` },
      { id: 'D', type: 'text', value: `peregrinação religiosa de fiéis orientados por lideranças fundamentalistas.` },
      { id: 'E', type: 'text', value: `desterritorialização forçada de populações afetadas por conflitos armados.` },
    ],
    correct: 'E',
    explanation: `O cenário dos refugiados sírios em Beirute, dispersos pela cidade e abrigados precariamente sob tendas do ACNUR, retrata uma crise humanitária provocada pela fuga de populações que foram obrigadas a abandonar seu território em razão da guerra civil na Síria. Trata-se, assim, de desterritorialização forçada causada por conflitos armados, conforme a alternativa E. A catástrofe natural (A) não corresponde à causa bélica do deslocamento. A hibridização cultural (B), a desmobilização de militantes (C) e a peregrinação religiosa (D) não descrevem o caráter involuntário e emergencial da fuga de refugiados diante da violência armada.`,
    subject: ['geo'],
    topics: ['Conflitos internacionais', 'Demografia', 'Questões aleatórias'],
  },
  {
    id: 61,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `TEXTO I 
Programa do Partido Social Democrático (PSD) 
Capitais estrangeiros 
É indispensável manter clima propício à entrada 
de capitais estrangeiros. A manutenção desse clima 
recomenda a adoção de normas disciplinadoras dos 
investimentos e suas rendas, visando reter no país a 
maior parcela possível dos lucros auferidos. 
TEXTO II 
Programa da União Democrática Nacional (UDN) 
O capital 
Apelar para o capital estrangeiro, necessário para os 
empreendimentos da reconstrução nacional e, sobretudo, 
para o aproveitamento das nossas reservas inexploradas, 
dando-lhe um tratamento equitativo e liberdade para a 
saída dos juros. 
CHACON, V. História dos partidos brasileiros : discurso e práxis dos seus programas. 
Brasília: UnB, 1981 (adaptado). 
Considerando as décadas de 1950 e 1960 no Brasil, os 
trechos dos programas do PSD e UDN convergiam na 
defesa da`,
    alternatives: [
      { id: 'A', type: 'text', value: `autonomia de atuação das multinacionais.` },
      { id: 'B', type: 'text', value: `descentralização da cobrança tributária.` },
      { id: 'C', type: 'text', value: `flexibilização das reservas cambiais.` },
      { id: 'D', type: 'text', value: `liberdade de remessa de ganhos.` },
      { id: 'E', type: 'text', value: `captação de recursos do exterior.` },
    ],
    correct: 'E',
    explanation: `Apesar de representarem forças políticas distintas, os programas do PSD e da UDN convergiam ao considerar indispensável atrair investimentos externos para o desenvolvimento nacional, ambos tratando a entrada de capital estrangeiro como prioridade. Essa convergência está na defesa da captação de recursos do exterior, conforme a alternativa E. A autonomia plena das multinacionais (A) e a liberdade de remessa de ganhos (D) aparecem apenas em um dos textos ou como consequência, não como o ponto comum central. A descentralização tributária (B) e a flexibilização das reservas cambiais (C) não são mencionadas como pauta compartilhada pelos dois partidos.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 62,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `A situação demográfica de Israel é muito particular. 
Desde 1967, a esquerda sionista afirma que Israel deveria 
se desfazer rapidamente da Cisjordânia e da Faixa de 
Gaza, argumentando a partir de uma lógica demográfica 
aparentemente inexorável. Devido à taxa de nascimento 
árabe ser muito mais elevada, a anexação dos territórios 
palestinos, formal ou informal, acarretaria dentro de uma 
ou duas gerações uma maioria árabe “entre o rio e o mar”. 
DEMANT, P. Israel: a crise próxima. História, n. 2, jul.-dez. 2014. 
A preocupação apresentada no texto revela um aspecto 
da condução política desse Estado identificado ao(à)`,
    alternatives: [
      { id: 'A', type: 'text', value: `abdicação da interferência militar em conflito local.` },
      { id: 'B', type: 'text', value: `busca da preeminência étnica sobre o espaço nacional.` },
      { id: 'C', type: 'text', value: `admissão da participação proativa em blocos regionais.` },
      { id: 'D', type: 'text', value: `rompimento com os interesses geopolíticos das potências globais.` },
      { id: 'E', type: 'text', value: `compromisso com as resoluções emanadas dos organismos internacionais.` },
    ],
    correct: 'B',
    explanation: `O texto expõe a preocupação da esquerda sionista com a maior taxa de natalidade árabe, que, caso os territórios palestinos fossem anexados, levaria a uma maioria árabe no espaço controlado por Israel. Essa inquietação demográfica revela uma condução política voltada à manutenção da preeminência étnica judaica sobre o território nacional, como indica a alternativa B. A abdicação da interferência militar (A) e o rompimento com as potências globais (D) contrariam a atuação do Estado israelense. A admissão de participação em blocos regionais (C) e o compromisso com resoluções de organismos internacionais (E) não têm relação com o raciocínio demográfico apresentado.`,
    subject: ['geo'],
    topics: ['Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 63,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Trajetória de ciclones tropicais 
Disponível em: http://globalwarmingart.com. Acesso em: 12 jul. 2015 (adaptado). 
Qual característica do meio físico é condição necessária 
para a distribuição espacial do fenômeno representado?`,
    images: ['/enem/2018/images/enem_2018_d1_q63.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Cobertura vegetal com porte arbóreo.` },
      { id: 'B', type: 'text', value: `Barreiras orográficas com altitudes elevadas.` },
      { id: 'C', type: 'text', value: `Pressão atmosférica com diferença acentuada.` },
      { id: 'D', type: 'text', value: `Superfície continental com refletividade intensa.` },
      { id: 'E', type: 'text', value: `Correntes marinhas com direções convergentes.` },
    ],
    correct: 'C',
    explanation: `Os ciclones tropicais formam-se e se deslocam a partir de centros de baixa pressão sobre oceanos quentes, e sua intensidade depende de gradientes de pressão atmosférica acentuados, que geram os fortes ventos característicos do fenômeno. Logo, a condição necessária do meio físico é a existência de diferença acentuada de pressão atmosférica, conforme a alternativa C. A cobertura vegetal arbórea (A) e a refletividade continental (D) não interferem na gênese de sistemas que se formam no oceano. As barreiras orográficas (B) e as correntes marinhas convergentes (E) podem modular efeitos secundários, mas não são a condição determinante da distribuição espacial dos ciclones.`,
    subject: ['geo'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 64,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Outra importante manifestação das crenças e tradições
africanas na Colônia eram os objetos conhecidos como “bolsas
de mandinga”. A insegurança tanto física como espiritual
gerava uma necessidade generalizada de proteção: das
catástrofes da natureza, das doenças, da má sorte, da
violência dos núcleos urbanos, dos roubos, das brigas, dos
malefícios de feiticeiros etc. Também para trazer sorte,
dinheiro e até atrair mulheres, o costume era corrente nas
primeiras décadas do século XVIII, envolvendo não apenas
escravos, mas também homens brancos. CALAINHO, D. B. Feitiços
e feiticeiros. In: FIGUEIREDO, L. História do Brasil para
ocupados . Rio de Janeiro: Casa da Palavra, 2013 (adaptado). A
prática histórico-cultural de matriz africana descrita no
texto representava um(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `expressão do valor das festividades da população pobre.` },
      { id: 'B', type: 'text', value: `ferramenta para submeter os cativos ao trabalho forçado.` },
      { id: 'C', type: 'text', value: `estratégia de subversão do poder da monarquia portuguesa.` },
      { id: 'D', type: 'text', value: `elemento de conversão dos escravos ao catolicismo romano.` },
      { id: 'E', type: 'text', value: `instrumento para minimizar o sentimento de desamparo social.` },
    ],
    correct: 'E',
    explanation: `As bolsas de mandinga, descritas como objetos de proteção difundidos entre escravizados e também brancos, respondiam a uma necessidade generalizada de segurança diante de doenças, violência, infortúnios e incertezas da vida colonial. Assim, essa prática de matriz africana funcionava como instrumento para minimizar o sentimento de desamparo social, conforme a alternativa E. A valorização de festividades (A) não corresponde ao uso protetivo dos objetos. Submeter cativos ao trabalho forçado (B) e converter escravos ao catolicismo (D) invertem o sentido da prática, de origem africana. A subversão do poder monárquico (C) atribui uma intenção política que o texto não sustenta.`,
    subject: ['his'],
    topics: ['Brasil Colônia', 'Questões aleatórias'],
  },
  {
    id: 65,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Os portos sempre foram respostas ao comércio praticado em
grande volume, que se dá via marítima, lacustre e fluvial, e
sofreram adaptações, ou modernizações, de acordo com um
conjunto de fatores que vão desde a sua localização
privilegiada frente a extensas hinterlândias, passando por sua
conectividade com modernas redes de transportes que garantam
acessibilidade, associados, no atual momento, à tecnologia,
que os transformam em pontas de lança de uma economia
globalizada que comprime o tempo em nome da produtividade e da
competitividade. ROCHA NETO, J. M.; CRAVIDÃO, F. D. Portos no
contexto do meio técnico. Mercator , n. 2, maio-ago. 2014
(adaptado). Uma mudança que permitiu aos portos adequarem-se
às novas necessidades comerciais apontadas no texto foi a`,
    alternatives: [
      { id: 'A', type: 'text', value: `intensificação do uso de contêineres.` },
      { id: 'B', type: 'text', value: `compactação das áreas de estocagem.` },
      { id: 'C', type: 'text', value: `burocratização dos serviços de alfândega.` },
      { id: 'D', type: 'text', value: `redução da profundidade dos atracadouros.` },
      { id: 'E', type: 'text', value: `superação da especialização dos cargueiros.` },
    ],
    correct: 'A',
    explanation: `O texto destaca que os portos se modernizaram para responder às exigências de uma economia globalizada que valoriza produtividade, competitividade e conexão com redes de transporte. A mudança que permitiu essa adequação foi a intensificação do uso de contêineres, que padronizou e agilizou a movimentação de cargas, conforme a alternativa A. A compactação das áreas de estocagem (B) e a redução da profundidade dos atracadouros (D) contrariam a tendência de portos maiores e mais profundos. A burocratização da alfândega (C) atrapalharia a fluidez buscada, e a superação da especialização dos cargueiros (E) não corresponde à conteinerização que modernizou o setor.`,
    subject: ['geo'],
    topics: ['Globalização', 'Indústria e comércio', 'Questões aleatórias'],
  },
  {
    id: 66,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `O século XVIII é, por diversas razões, um século 
diferenciado. Razão e experimentação se aliavam no 
que se acreditava ser o verdadeiro caminho para o 
estabelecimento do conhecimento científico, por tanto 
tempo almejado. O fato, a análise e a indução passavam 
a ser parceiros fundamentais da razão. É ainda no século 
XVIII que o homem começa a tomar consciência de sua 
situação na história. 
ODALIA, N. In: PINSKY, J.; PINSKY, C. B. História da cidadania . São Paulo: Contexto, 2003. 
No ambiente cultural do Antigo Regime, a discussão 
filosófica mencionada no texto tinha como uma de suas 
características a`,
    alternatives: [
      { id: 'A', type: 'text', value: `aproximação entre inovação e saberes antigos.` },
      { id: 'B', type: 'text', value: `conciliação entre revelação e metafísica platônica.` },
      { id: 'C', type: 'text', value: `vinculação entre escolástica e práticas de pesquisa.` },
      { id: 'D', type: 'text', value: `separação entre teologia e fundamentalismo religioso.` },
      { id: 'E', type: 'text', value: `contraposição entre clericalismo e liberdade de pensamento.` },
    ],
    correct: 'E',
    explanation: `O texto situa no século XVIII a aliança entre razão e experimentação como caminho do conhecimento científico, no ambiente do Iluminismo em pleno Antigo Regime. Essa discussão filosófica caracterizava-se pela contraposição entre o clericalismo tradicional e a defesa da liberdade de pensamento, conforme a alternativa E. A aproximação entre inovação e saberes antigos (A) e a conciliação com a metafísica platônica (B) não traduzem o espírito crítico iluminista. A vinculação entre escolástica e pesquisa (C) é contraditória, pois o novo método se opunha à escolástica. A separação entre teologia e fundamentalismo (D) não capta o essencial, que é o embate entre a tutela religiosa e a autonomia da razão.`,
    subject: ['fil'],
    topics: ['Filosofia Moderna (Descartes, Kant, Hume)', 'Questões aleatórias'],
  },
  {
    id: 67,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: ``,
    images: ['/enem/2018/images/enem_2018_d1_q67.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `redução do volume dos rios.` },
      { id: 'B', type: 'text', value: `expansão do lençol freático.` },
      { id: 'C', type: 'text', value: `diminuição do índice de chuvas.` },
      { id: 'D', type: 'text', value: `retração do nível dos reservatórios.` },
      { id: 'E', type: 'text', value: `ampliação do escoamento superficial.` },
    ],
    correct: 'E',
    explanation: `O gráfico mostra que, em áreas urbanizadas, a vazão atinge um pico mais alto e mais rápido após a precipitação do que em áreas não urbanizadas, consequência da impermeabilização do solo pela cidade. Isso demonstra que a urbanização promove a ampliação do escoamento superficial, conforme a alternativa E. A redução do volume dos rios (A) e a retração dos reservatórios (D) não correspondem ao aumento de vazão registrado. A expansão do lençol freático (B) é contrariada pela menor infiltração em solo impermeável, e a diminuição do índice de chuvas (C) não decorre da urbanização nem explica a mudança no comportamento da vazão.`,
    subject: ['geo'],
    topics: ['Urbanização', 'Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 68,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `O encontro entre o Velho e o Novo Mundo, que a 
descoberta de Colombo tornou possível, é de um tipo 
muito particular: é uma guerra - ou a Conquista -, como 
se dizia então. E um mistério continua: o resultado do 
combate. Por que a vitória fulgurante, se os habitantes da 
América eram tão superiores em número aos adversários 
e lutaram no próprio solo? Se nos limitarmos à conquista 
do México - a mais espetacular, já que a civilização 
mexicana é a mais brilhante do mundo pré-colombiano 
- como explicar que Cortez, liderando centenas de 
homens, tenha conseguido tomar o reino de Montezuma, 
que dispunha de centenas de milhares de guerreiros? 
TODOROV, T. A conquista da América . São Paulo: Martins Fontes, 1991 (adaptado). 
No contexto da conquista, conforme análise apresentada 
no texto, uma estratégia para superar as disparidades 
levantadas foi`,
    alternatives: [
      { id: 'A', type: 'text', value: `implantar as missões cristãs entre as comunidades submetidas.` },
      { id: 'B', type: 'text', value: `utilizar a superioridade física dos mercenários africanos.` },
      { id: 'C', type: 'text', value: `explorar as rivalidades existentes entre os povos nativos.` },
      { id: 'D', type: 'text', value: `introduzir vetores para a disseminação de doenças epidêmicas.` },
      { id: 'E', type: 'text', value: `comprar terras para o enfraquecimento das teocracias autóctones.` },
    ],
    correct: 'C',
    explanation: `Segundo a análise de Todorov, a espantosa vitória de Cortez sobre o numeroso império asteca explica-se, em grande parte, pela capacidade espanhola de explorar as rivalidades existentes entre os povos nativos, aliando-se a grupos descontentes com a dominação mexica. Isso corresponde à alternativa C. A implantação de missões cristãs (A) e a compra de terras (E) ocorreram em outros momentos e não resolvem a disparidade numérica inicial. A superioridade de mercenários africanos (B) não figura na explicação do autor, e a disseminação de doenças (D), embora relevante historicamente, não é apresentada no texto como estratégia deliberada para superar a inferioridade numérica.`,
    subject: ['his'],
    topics: ['História Moderna', 'Questões aleatórias'],
  },
  {
    id: 69,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `São Paulo, 10 de janeiro de 1979. 
Exmo. Sr. Presidente Ernesto Geisel. 
Considerando as instruções dadas por V. S. de que 
sejam negados os passaportes aos senhores Francisco 
Julião, Miguel Arraes, Leonel Brizola, Luis Prestes, 
Paulo Schilling, Gregório Bezerra, Márcio Moreira Alves 
e Paulo Freire. 
Considerando que, desde que nasci, me identifico 
plenamente com a pele, a cor dos cabelos, a cultura, 
o sorriso, as aspirações, a história e o sangue destes 
oito senhores. 
Considerando tudo isto, por imperativo de minha 
consciência, venho por meio desta devolver o passaporte 
que, negado a eles, me foi concedido pelos órgãos 
competentes de seu governo. 
Carta do cartunista Henrique de Souza Filho, conhecido como Henfil. In: HENFIL. 
 Cartas da mae . Rio de Janeiro: Codecri, 1981 (adaptado). 
No referido contexto histórico, a manifestação do 
cartunista Henfil expressava uma crítica ao(à)`,
    alternatives: [
      { id: 'A', type: 'text', value: `censura moral das produções culturais.` },
      { id: 'B', type: 'text', value: `limite do processo de distensão política.` },
      { id: 'C', type: 'text', value: `interferência militar de países estrangeiros.` },
      { id: 'D', type: 'text', value: `representação social das agremiações partidárias.` },
      { id: 'E', type: 'text', value: `impedimento de eleição das assembleias estaduais.` },
    ],
    correct: 'B',
    explanation: `A carta de Henfil, escrita em 1979, devolve ao governo o passaporte concedido a ele enquanto exilados como Brizola, Prestes e Paulo Freire permaneciam proibidos de retornar, denunciando as restrições que ainda vigoravam no processo de abertura. A manifestação expressa, portanto, uma crítica aos limites da distensão política conduzida pelo regime militar, conforme a alternativa B. A censura moral das produções culturais (A) e a representação partidária (D) não são o alvo direto do gesto. A interferência militar estrangeira (C) e o impedimento de eleições estaduais (E) não correspondem à denúncia da negação de passaportes aos opositores exilados.`,
    subject: ['his'],
    topics: ['Ditadura Militar no Brasil', 'Questões aleatórias'],
  },
  {
    id: 70,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `A primeira fase da dominação da economia sobre a 
vida social acarretou, no modo de definir toda realização 
humana, uma evidente degradação do ser para o ter . 
A fase atual, em que a vida social está totalmente tomada 
pelos resultados da economia, leva a um deslizamento 
generalizado do ter para o parecer , do qual todo ter efetivo 
deve extrair seu prestígio imediato e sua função última. 
Ao mesmo tempo, toda realidade individual tornou-se 
social, diretamente dependente da força social, moldada 
por ela. 
DEBORD, G. A sociedade do espetáculo . Rio de Janeiro: Contraponto, 2015. 
Uma manifestação contemporânea do fenômeno descrito 
no texto é o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `valorização dos conhecimentos acumulados.` },
      { id: 'B', type: 'text', value: `exposição nos meios de comunicação.` },
      { id: 'C', type: 'text', value: `aprofundamento da vivência espiritual.` },
      { id: 'D', type: 'text', value: `fortalecimento das relações interpessoais.` },
      { id: 'E', type: 'text', value: `reconhecimento na esfera artística.` },
    ],
    correct: 'B',
    explanation: `Debord descreve a passagem do ser ao ter e, na fase atual, do ter ao parecer, em que a realidade individual se torna socialmente moldada e dependente da aparência e do prestígio. Uma manifestação contemporânea desse fenômeno é a exposição nos meios de comunicação, em que a valorização do indivíduo se dá pela visibilidade e pela imagem projetada, conforme a alternativa B. A valorização dos conhecimentos acumulados (A), o aprofundamento espiritual (C) e o fortalecimento das relações interpessoais (D) opõem-se à lógica do espetáculo centrada na aparência. O reconhecimento artístico (E) é restritivo e não traduz a generalização do parecer descrita pelo autor.`,
    subject: ['soc'],
    topics: ['Sociologia', 'Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 71,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Os seus líderes terminaram presos e assassinados. 
A “marujada” rebelde foi inteiramente expulsa da 
esquadra. Num sentido histórico, porém, eles foram 
vitoriosos. A “chibata” e outros castigos físicos infamantes 
nunca mais foram oficialmente utilizados; a partir de 
então, os marinheiros - agora respeitados - teriam 
suas condições de vida melhoradas significativamente. 
Sem dúvida fizeram avançar a História. 
MAESTRI, M. 1910: a revolta dos marinheiros - uma saga negra. São Paulo: Global, 1982. 
A eclosão desse conflito foi resultado da tensão acumulada 
na Marinha do Brasil pelo(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `engajamento de civis analfabetos após a emergência de guerras externas.` },
      { id: 'B', type: 'text', value: `insatisfação de militares positivistas após a consolidação da política dos governadores.` },
      { id: 'C', type: 'text', value: `rebaixamento de comandantes veteranos após a repressão a insurreições milenaristas.` },
      { id: 'D', type: 'text', value: `sublevação das classes populares do campo após a instituição do alistamento obrigatório.` },
      { id: 'E', type: 'text', value: `manutenção da mentalidade escravocrata da oficialidade após a queda do regime imperial.` },
    ],
    correct: 'E',
    explanation: `A Revolta da Chibata, de 1910, eclodiu porque, mesmo após a Proclamação da República e a abolição, a Marinha preservava castigos físicos como a chibata, impostos sobretudo a marinheiros negros por uma oficialidade de mentalidade escravocrata. A tensão acumulada decorreu, portanto, da manutenção dessa mentalidade após a queda do regime imperial, conforme a alternativa E. O engajamento de civis analfabetos em guerras externas (A) e o alistamento obrigatório (D) não originaram o conflito. A insatisfação de militares positivistas (B) e a repressão a insurreições milenaristas (C) referem-se a outros episódios e não explicam a revolta contra os castigos corporais.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 72,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Uma pesquisa realizada por Carolina Levis, especialista em
ecologia do Instituto Nacional de Pesquisas da Amazônia, e
publicada na revista Science , demonstra que as espécies
vegetais domesticadas pelas civilizações pré-colombianas são
as mais dominantes. “A domesticação de plantas na floresta
começou há mais de 8 000 anos. Primeiro eram selecionadas as
plantas com características que poderiam ser úteis ao homem e
em um segundo momento era feita a propagação dessas espécies.
Começaram a cultivá-las em pátios e jardins, por meio de um
processo quase intuitivo de seleção”. OLIVEIRA, J. Indígenas
foram os primeiros a alterar o ecossistema da Amazônia .
Disponível em: https://brasil.elpais.com. Acesso em: 11 dez.
2017 (adaptado). O texto apresenta um novo olhar sobre a
configuração da Floresta Amazônica por romper com a ideia de`,
    alternatives: [
      { id: 'A', type: 'text', value: `primazia de saberes locais.` },
      { id: 'B', type: 'text', value: `ausência de ação antrópica.` },
      { id: 'C', type: 'text', value: `insuficiência de recursos naturais.` },
      { id: 'D', type: 'text', value: `necessidade de manejo ambiental.` },
      { id: 'E', type: 'text', value: `predominância de práticas agropecuárias.` },
    ],
    correct: 'B',
    explanation: `A pesquisa citada mostra que as espécies vegetais hoje dominantes na Amazônia foram domesticadas por civilizações pré-colombianas, que selecionavam e propagavam plantas úteis há milhares de anos. Esse olhar rompe com a ideia de ausência de ação antrópica, isto é, com a visão de uma floresta intocada e sem influência humana, conforme a alternativa B. A primazia de saberes locais (A) é justamente reafirmada pelo texto, não negada. A insuficiência de recursos naturais (C), a necessidade de manejo ambiental (D) e a predominância de práticas agropecuárias (E) não correspondem à concepção de floresta prístina que a descoberta vem contestar.`,
    subject: ['geo'],
    topics: ['Meio ambiente e sustentabilidade', 'Questões aleatórias'],
  },
  {
    id: 73,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `TEXTO I 
Quando um exército atravessa montanhas, florestas, 
zonas de precipícios, ou marcha ao longo de desfiladeiros, 
alagadiços ou pântanos, ou qualquer outro terreno onde 
a deslocação é árdua, está em terreno difícil. O terreno 
onde é apertado e a sua saída é tortuosa e onde uma 
pequena força inimiga pode atacar a minha, embora 
maior, é cercado. 
TZU, S. A arte da guerra . São Paulo: Martin Claret, 2001. 
TEXTO II 
O objetivo principal era encontrar e matar Osama Bin 
Laden. Onde ele se esconde? Não podemos esquecer a 
dificuldade de ocupação do país, que possui um relevo 
montanhoso, cheio de cavernas, onde fica fácil, para 
quem está acostumado com esse relevo, esconder-se. 
OLIVEIRA, M. G.; SANTOS, M. S. Asia : uma visão histórica, política e econômica do 
continente. Rio de Janeiro: E-Papers, 2009 (adaptado). 
As situações apresentadas atestam a importância da 
relação entre a topografia e o(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `construção de vias terrestres.` },
      { id: 'B', type: 'text', value: `preservação do meio ambiente.` },
      { id: 'C', type: 'text', value: `emprego de armamentos sofisticados.` },
      { id: 'D', type: 'text', value: `intimidação contínua da população local.` },
      { id: 'E', type: 'text', value: `domínio cognitivo da configuração espacial.` },
    ],
    correct: 'E',
    explanation: `Tanto o tratado de Sun Tzu quanto o relato sobre a ocupação do Afeganistão ressaltam que o conhecimento do terreno, seus desfiladeiros, montanhas e cavernas, é decisivo nas ações militares. As situações atestam, assim, a importância do domínio cognitivo da configuração espacial, ou seja, do saber interpretar e usar a topografia, conforme a alternativa E. A construção de vias terrestres (A) e a preservação ambiental (B) não são o foco dos textos. O emprego de armamentos sofisticados (C) é relativizado justamente pela vantagem de quem conhece o relevo, e a intimidação da população (D) não traduz a relação entre topografia e estratégia destacada nos trechos.`,
    subject: ['geo'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 74,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Disponível em: http://cpdoc.fgv.br. Acesso em: 6 dez. 2017. 
Essa imagem foi impressa em cartilha escolar durante a 
vigência do Estado Novo com o intuito de`,
    images: ['/enem/2018/images/enem_2018_d1_q74.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `destacar a sabedoria inata do líder governamental.` },
      { id: 'B', type: 'text', value: `atender a necessidade familiar de obediência infantil.` },
      { id: 'C', type: 'text', value: `promover o desenvolvimento consistente das atitudes solidárias.` },
      { id: 'D', type: 'text', value: `conquistar a aprovação política por meio do apelo carismático.` },
      { id: 'E', type: 'text', value: `estimular o interesse acadêmico por meio de exercícios intelectuais.` },
    ],
    correct: 'D',
    explanation: `A imagem impressa em cartilha escolar durante o Estado Novo integrava a propaganda política do regime, que buscava difundir, desde a infância, uma imagem positiva e carismática de Getúlio Vargas. O intuito era conquistar a aprovação política por meio do apelo carismático, associando o líder a sentimentos de admiração e confiança, conforme a alternativa D. Destacar a sabedoria inata do líder (A) é um aspecto subordinado a esse objetivo maior de legitimação. Atender à obediência infantil familiar (B), promover atitudes solidárias (C) e estimular o interesse acadêmico (E) não correspondem à função propagandística de construção da figura do governante.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 75,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Os países industriais adotaram uma concepção 
diferente das relações familiares e do lugar da fecundidade 
na vida familiar e social. A preocupação de garantir uma 
transmissão integral das vantagens econômicas e sociais 
adquiridas tem como resultado uma ação voluntária de 
limitação do número de nascimentos. 
GEORGE, P. Panorama do mundo atual . São Paulo: Difusão Europeia do Livro, 1968 (adaptado). 
Em meados do século XX, o fenômeno social descrito 
contribuiu para o processo europeu de`,
    alternatives: [
      { id: 'A', type: 'text', value: `estabilização da pirâmide etária.` },
      { id: 'B', type: 'text', value: `conclusão da transição demográfica.` },
      { id: 'C', type: 'text', value: `contenção da entrada de imigrantes.` },
      { id: 'D', type: 'text', value: `elevação do crescimento vegetativo.` },
      { id: 'E', type: 'text', value: `formação de espaços superpovoados.` },
    ],
    correct: 'B',
    explanation: `O texto associa, nos países industriais de meados do século XX, a limitação voluntária do número de nascimentos à preocupação de preservar vantagens econômicas e sociais da família. Esse comportamento de redução da natalidade contribuiu para a conclusão da transição demográfica, fase em que baixas taxas de natalidade e de mortalidade estabilizam o crescimento populacional, conforme a alternativa B. A contenção de imigrantes (C) e a formação de espaços superpovoados (E) não decorrem da queda da fecundidade. A elevação do crescimento vegetativo (D) é o oposto do descrito, e a estabilização da pirâmide etária (A) é efeito vago que não nomeia o processo demográfico em curso.`,
    subject: ['geo'],
    topics: ['Demografia', 'Questões aleatórias'],
  },
  {
    id: 76,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Código Penal dos Estados Unidos do Brasil, 1890 
Dos crimes contra a saúde pública 
Art. 156. Exercer a medicina em qualquer dos seus 
ramos, a arte dentária ou a farmácia; praticar a homeopatia, 
a dosimetria, o hipnotismo ou magnetismo animal, sem 
estar habilitado segundo as leis e regulamentos. 
Art. 158. Ministrar, ou simplesmente prescrever, 
como meio curativo para uso interno ou externo, e sob 
qualquer forma preparada, substância de qualquer dos 
reinos da natureza, fazendo, ou exercendo assim, o ofício 
denominado curandeiro. 
Disponível em: http://legis.senado.gov.br. Acesso em: 21 dez. 2014 (adaptado). 
No início da Primeira República, a legislação penal vigente 
evidenciava o(a)`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `negligência das religiões cristãs sobre as moléstias.` },
      { id: 'B', type: 'text', value: `desconhecimento das origens das crenças tradicionais.` },
      { id: 'C', type: 'text', value: `preferência da população pelos tratamentos alopáticos.` },
      { id: 'D', type: 'text', value: `abandono pela comunidade das práticas terapêuticas de magia.` },
      { id: 'E', type: 'text', value: `condenação pela ciência dos conhecimentos populares de cura.` },
    ],
    correct: 'E',
    explanation: `O Código Penal de 1890 criminalizava o curandeirismo, a magia e práticas terapêuticas não autorizadas, refletindo o projeto de afirmação da medicina científica oficial no início da República. A legislação evidenciava, assim, a condenação pela ciência dos conhecimentos populares de cura, conforme a alternativa E. A negligência das religiões cristãs (A) e o desconhecimento das crenças tradicionais (B) não são o que a lei expressa. A preferência da população pela alopatia (C) é contrariada pela persistência dessas práticas, e o abandono da magia pela comunidade (D) também não se sustenta, pois era justamente a difusão desses costumes que a lei procurava reprimir.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 77,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `A presunção de que a superfície das chapadas 
e chapadões representa uma velha peneplanície é 
corroborada pelo fato de que ela é coberta por acumulações 
superficiais, tais como massas de areia, camadas de 
cascalhos e seixos e pela ocorrência generalizada de 
concreções ferruginosas que formam uma crosta laterítica, 
denominada “canga”. 
WEIBEL, L. Disponível em: http://biblioteca.ibge.gov.br. Acesso em: 8 jul. 2015 (adaptado). 
Qual tipo climático favorece o processo de alteração do 
solo descrito no texto?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Árido, com déficit hídrico.` },
      { id: 'B', type: 'text', value: `Subtropical, com baixas temperaturas.` },
      { id: 'C', type: 'text', value: `Temperado, com invernos frios e secos.` },
      { id: 'D', type: 'text', value: `Tropical, com sazonalidade das chuvas.` },
      { id: 'E', type: 'text', value: `Equatorial, com pluviosidade abundante.` },
    ],
    correct: 'D',
    explanation: `A formação de crostas lateríticas, ou canga, sobre as chapadas resulta de intensa alteração química do solo, favorecida pela alternância entre períodos úmidos e secos que concentra óxidos de ferro e alumínio. Esse processo é típico do clima tropical com sazonalidade das chuvas, conforme a alternativa D. O clima árido com déficit hídrico (A) não oferece água suficiente para a laterização. Os climas subtropical (B) e temperado (C), com baixas temperaturas, não favorecem a intensidade dessas reações, e o clima equatorial com pluviosidade abundante e constante (E) não apresenta a estação seca marcada que é essencial à formação da canga.`,
    subject: ['geo'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 78,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `O marco inicial das discussões parlamentares 
em torno do direito do voto feminino são os debates 
que antecederam a Constituição de 1824, que não 
trazia qualquer impedimento ao exercício dos direitos 
políticos por mulheres, mas, por outro lado, também 
não era explícita quanto à possibilidade desse 
exercício. Foi somente em 1932, dois anos antes de 
estabelecido o voto aos 18 anos, que as mulheres 
obtiveram o direito de votar, o que veio a se concretizar 
no ano seguinte. Isso ocorreu a partir da aprovação do 
Código Eleitoral de 1932. 
Disponível em: http://tse.jusbrasil.com.br. Acesso em: 14 maio 2018. 
Um dos fatores que contribuíram para a efetivação da 
medida mencionada no texto foi a`,
    alternatives: [
      { id: 'A', type: 'text', value: `superação da cultura patriarcal.` },
      { id: 'B', type: 'text', value: `influência de igrejas protestantes.` },
      { id: 'C', type: 'text', value: `pressão do governo revolucionário.` },
      { id: 'D', type: 'text', value: `fragilidade das oligarquias regionais.` },
      { id: 'E', type: 'text', value: `campanha de extensão da cidadania.` },
    ],
    correct: 'E',
    explanation: `A conquista do direito de voto feminino, consolidada no Código Eleitoral de 1932, inseriu-se em um movimento mais amplo de ampliação da participação política, impulsionado pela campanha sufragista pela extensão da cidadania às mulheres. Por isso, um fator que contribuiu para a medida foi a campanha de extensão da cidadania, conforme a alternativa E. A superação da cultura patriarcal (A) é exagerada, pois o patriarcalismo persistiu mesmo após a conquista do voto. A influência de igrejas protestantes (B), a pressão de um governo revolucionário (C) e a fragilidade das oligarquias regionais (D) não são apontadas como causas diretas da efetivação do sufrágio feminino.`,
    subject: ['his'],
    topics: ['Brasil República', 'Movimentos sociais', 'Questões aleatórias'],
  },
  {
    id: 79,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `A quem não basta pouco, nada basta. 
EPICURO. Os pensadores . São Paulo: Abril Cultural, 1985. 
Remanescente do período helenístico, a máxima 
apresentada valoriza a seguinte virtude:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Esperança, tida como confiança no porvir.` },
      { id: 'B', type: 'text', value: `Justiça, interpretada como retidão de caráter.` },
      { id: 'C', type: 'text', value: `Temperança, marcada pelo domínio da vontade.` },
      { id: 'D', type: 'text', value: `Coragem, definida como fortitude na dificuldade.` },
      { id: 'E', type: 'text', value: `Prudência, caracterizada pelo correto uso da razão.` },
    ],
    correct: 'C',
    explanation: `A máxima de Epicuro, segundo a qual a quem não basta pouco nada basta, valoriza a moderação dos desejos e o contentamento com o necessário, atitude própria da temperança, entendida como domínio da vontade sobre os apetites. Isso corresponde à alternativa C. A esperança como confiança no porvir (A) e a justiça como retidão de caráter (B) não se relacionam ao controle do desejo. A coragem diante da dificuldade (D) e a prudência como uso correto da razão (E) são virtudes distintas, que não traduzem a ideia central de autossuficiência e limitação dos apetites expressa pela sentença epicurista.`,
    subject: ['fil'],
    topics: ['Filosofia Antiga (Sócrates, Platão, Aristóteles)', 'Ética e moral', 'Questões aleatórias'],
  },
  {
    id: 80,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Em algumas línguas de Moçambique não existe 
a palavra “pobre”. O indivíduo é pobre quando não 
tem parentes. A pobreza é a solidão, a ruptura das 
relações familiares que, na sociedade rural, servem de 
apoio à sobrevivência. Os consultores internacionais, 
especialistas em elaborar relatórios sobre a miséria, 
talvez não tenham em conta o impacto dramático da 
destruição dos laços familiares e das relações de 
entreajuda. Nações inteiras estão tornando-se “órfãs”, 
e a mendicidade parece ser a única via de uma 
agonizante sobrevivência. 
COUTO, M. E se Obama fosse africano? & outras intervenções. 
Portugal: Caminho, 2009 (adaptado). 
Em uma leitura que extrapola a esfera econômica, o 
autor associa o acirramento da pobreza à`,
    alternatives: [
      { id: 'A', type: 'text', value: `afirmação das origens ancestrais.` },
      { id: 'B', type: 'text', value: `fragilização das redes de sociabilidade.` },
      { id: 'C', type: 'text', value: `padronização das políticas educacionais.` },
      { id: 'D', type: 'text', value: `fragmentação das propriedades agrícolas.` },
      { id: 'E', type: 'text', value: `globalização das tecnologias de comunicação.` },
    ],
    correct: 'B',
    explanation: `Mia Couto mostra que, em algumas línguas moçambicanas, ser pobre equivale a não ter parentes, pois a pobreza é vivida como solidão e ruptura das relações familiares que sustentam a sobrevivência. Ao extrapolar a esfera econômica, o autor associa o acirramento da pobreza à fragilização das redes de sociabilidade, conforme a alternativa B. A afirmação das origens ancestrais (A) e a padronização das políticas educacionais (C) não captam a dimensão relacional destacada. A fragmentação das propriedades agrícolas (D) e a globalização das tecnologias de comunicação (E) tratam de aspectos materiais ou técnicos alheios ao sentido de pobreza como perda de laços comunitários.`,
    subject: ['soc'],
    topics: ['Desigualdade social', 'Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 81,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `TEXTO I 
As fronteiras, ao mesmo tempo que se separam, unem 
e articulam, por elas passando discursos de legitimação 
da ordem social tanto quanto do conflito. 
CUNHA, L. Terras lusitanas e gentes dos brasis: a nação e o seu retrato literário. 
Revista Ciências Sociais , n. 2, 2009. 
TEXTO II 
As últimas barreiras ao livre movimento do dinheiro 
e das mercadorias e informação que rendem dinheiro 
andam de mãos dadas com a pressão para cavar novos 
fossos e erigir novas muralhas que barrem o movimento 
daqueles que em consequência perdem, física ou 
espiritualmente, suas raízes. 
BAUMAN, Z. Globalização : as consequências humanas. 
Rio de Janeiro: Jorge Zahar, 1999. 
A ressignificação contemporânea da ideia de fronteira 
compreende a`,
    alternatives: [
      { id: 'A', type: 'text', value: `liberação da circulação de pessoas.` },
      { id: 'B', type: 'text', value: `preponderância dos limites naturais.` },
      { id: 'C', type: 'text', value: `supressão dos obstáculos aduaneiros.` },
      { id: 'D', type: 'text', value: `desvalorização da noção de nacionalismo.` },
      { id: 'E', type: 'text', value: `seletividade dos mecanismos segregadores.` },
    ],
    correct: 'E',
    explanation: `Os textos de Cunha e Bauman mostram que a fronteira contemporânea, ao mesmo tempo que separa e articula, acompanha uma globalização que libera a circulação de dinheiro, mercadorias e informação enquanto ergue muralhas contra o deslocamento de pessoas. Essa ressignificação compreende a seletividade dos mecanismos segregadores, que facilitam certos fluxos e barram outros, conforme a alternativa E. A liberação da circulação de pessoas (A) é justamente o que se restringe. A preponderância dos limites naturais (B) não é o tema, a supressão dos obstáculos aduaneiros (C) vale só para capitais e bens, e a desvalorização do nacionalismo (D) contraria as novas barreiras erguidas.`,
    subject: ['geo'],
    topics: ['Globalização', 'Geopolítica', 'Questões aleatórias'],
  },
  {
    id: 82,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `TEXTO I Há mais de duas décadas, os cientistas e
ambientalistas têm alertado para o fato de a água doce ser um
recurso escasso em nosso planeta. Desde o começo de 2014, o
Sudeste do Brasil adquiriu uma clara percepção dessa realidade
em função da seca. TEXTO II Dinâmicas atmosféricas no Brasil
Elementos relevantes ao transporte de umidade na América do
Sul a leste dos Andes pelos Jatos de Baixos Níveis (JBN),
Frentes Frias (FF) e transporte de umidade do Atlântico Sul,
assim como a presença da Zona de Convergência do Atlântico Sul
(ZCAS), para um verão normal e para o verão seco de 2014. “A”
representa o centro da anomalia de alta pressão atmosférica.
Amazônia Verão normal JBN 0° Fluxo do Oceano Atlântico Solo
úmido ZCAS 20° S FF 40° S 60° W MARENGO, J. A. et al. A seca e
a crise hídrica de 2014-2015 em São Paulo. Revista USP, n.
106, 2015 (adaptado). De acordo com as informações
apresentadas, a seca de 2014, no Sudeste, teve como causa
natural o(a)`,
    images: ['/enem/2018/images/enem_2018_d1_q82.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `constituição de frentes quentes barrando as chuvas convectivas.` },
      { id: 'B', type: 'text', value: `formação de anticiclone impedindo a entrada de umidade.` },
      { id: 'C', type: 'text', value: `presença de nebulosidade na região de cordilheira.` },
      { id: 'D', type: 'text', value: `avanço de massas polares para o continente.` },
      { id: 'E', type: 'text', value: `baixa pressão atmosférica no litoral.` },
    ],
    correct: 'B',
    explanation: `O texto explica que a seca de 2014 no Sudeste associou-se a uma anomalia de alta pressão atmosférica que desorganizou a Zona de Convergência do Atlântico Sul e bloqueou o transporte de umidade pelos jatos de baixos níveis. Essa causa natural corresponde à formação de um anticiclone impedindo a entrada de umidade, conforme a alternativa B. A constituição de frentes quentes (A) e o avanço de massas polares (D) não explicam o bloqueio da umidade descrito. A nebulosidade na cordilheira (C) não é o fator apontado, e a baixa pressão no litoral (E) contraria o quadro, já que a anomalia registrada era de alta pressão.`,
    subject: ['geo'],
    topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
  },
  {
    id: 83,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Não é verdade que estão ainda cheios de velhice espiritual aqueles que nos dizem: "Que fazia Deus antes de criar
o céu e a terra? Se estava ocioso e nada realizava", dizem eles, "por que não ficou sempre assim no decurso dos
séculos, abstendo-se, como antes, de toda ação? Se existiu em Deus um novo movimento, uma vontade nova para
dar o ser a criaturas que nunca antes criara, como pode haver verdadeira eternidade, se n'Ele aparece uma vontade
que antes não existia?"
AGOSTINHO. Confissões. São Paulo: Abril Cultural, 1984.
A questão da eternidade, tal como abordada pelo autor, é um exemplo da reflexão filosófica sobre a(s)`,
    alternatives: [
      { id: 'A', type: 'text', value: `essência da ética cristã.` },
      { id: 'B', type: 'text', value: `natureza universal da tradição.` },
      { id: 'C', type: 'text', value: `certezas inabaláveis da experiência.` },
      { id: 'D', type: 'text', value: `abrangência da compreensão humana.` },
      { id: 'E', type: 'text', value: `interpretações da realidade circundante.` },

    ],
    correct: 'D',
    explanation: `Agostinho discute as objeções sobre o que Deus faria antes de criar o céu e a terra e sobre a existência de uma vontade nova em um ser eterno, expondo a dificuldade de pensar a eternidade divina com as categorias temporais humanas. A reflexão é, assim, um exemplo do questionamento sobre a abrangência da compreensão humana, conforme a alternativa D. A essência da ética cristã (A) e a natureza universal da tradição (B) não são o eixo do trecho. As certezas inabaláveis da experiência (C) contrariam o caráter problematizador do texto, e as interpretações da realidade circundante (E) deslocam a questão do plano metafísico da eternidade para o mundo sensível.`,
    subject: ['fil'],
    topics: ['Filosofia Medieval', 'Teoria do conhecimento', 'Questões aleatórias'],
  },
  {
    id: 84,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Rodrigo havia sido indicado pela oposição para fiscal 
duma das mesas eleitorais. Pôs o revólver na cintura, 
uma caixa de balas no bolso e encaminhou-se para 
seu posto. A chamada dos eleitores começou às sete 
da manhã. Plantados junto da porta, os capangas do 
Trindade ofereciam cédulas com o nome dos candidatos 
oficiais a todos os eleitores que entravam. Estes, em sua 
quase totalidade, tomavam docilmente dos papeluchos e 
depositavam-nos na urna, depois de assinar a autêntica. 
Os que se recusavam a isso tinham seus nomes 
acintosamente anotados. 
VERÍSSIMO, E. O tempo e o vento . São Paulo: Globo, 2003 (adaptado). 
Erico Veríssimo tematiza em obra ficcional o seguinte 
aspecto característico da vida política durante a 
Primeira República:`,
    alternatives: [
      { id: 'A', type: 'text', value: `Identificação forçada de homens analfabetos.` },
      { id: 'B', type: 'text', value: `Monitoramento legal dos pleitos legislativos.` },
      { id: 'C', type: 'text', value: `Repressão explícita ao exercício de direito.` },
      { id: 'D', type: 'text', value: `Propaganda direcionada à população do campo.` },
      { id: 'E', type: 'text', value: `Cerceamento policial dos operários sindicalizados.` },
    ],
    correct: 'C',
    explanation: `No romance de Erico Veríssimo, capangas armados oferecem cédulas com os nomes dos candidatos oficiais, anotam os nomes de quem recusa e intimidam os eleitores, retratando o voto de cabresto e a fraude típicos da Primeira República. O trecho tematiza, portanto, a repressão explícita ao exercício de um direito, conforme a alternativa C. A identificação forçada de analfabetos (A) não é o ponto central, pois estes nem votavam. O monitoramento legal dos pleitos (B) é contrariado pela coação ilegal descrita. A propaganda direcionada ao campo (D) e o cerceamento de operários sindicalizados (E) não correspondem à cena de intimidação eleitoral narrada.`,
    subject: ['his'],
    topics: ['Brasil República', 'Questões aleatórias'],
  },
  {
    id: 85,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Então disse: “Este é o local onde construirei. Tudo 
pode chegar aqui pelo Eufrates, o Tigre e uma rede de 
canais. Só um lugar como este sustentará o exército e a 
população geral”. Assim ele traçou e destinou as verbas 
para a sua construção, e deitou o primeiro tijolo com sua 
própria mão, dizendo: “Em nome de Deus, e em louvor 
a Ele. Construí, e que Deus vos abençoe”. 
AL-TABARI, M. Uma história dos povos árabes . 
São Paulo: Cia. das Letras, 1995 (adaptado). 
A decisão do califa Al-Mansur (754-775) de construir 
Bagdá nesse local orientou-se pela`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `disponibilidade de rotas e terras férteis como base da dominação política.` },
      { id: 'B', type: 'text', value: `proximidade de áreas populosas como afirmação da superioridade bélica.` },
      { id: 'C', type: 'text', value: `submissão à hierarquia e à lei islâmica como controle do poder real.` },
      { id: 'D', type: 'text', value: `fuga da península arábica como afastamento dos conflitos sucessórios.` },
      { id: 'E', type: 'text', value: `ocupação de região fronteiriça como contenção do avanço mongol.` },
    ],
    correct: 'A',
    explanation: `A escolha de Bagdá por Al-Mansur baseou-se na posição estratégica junto ao Eufrates, ao Tigre e a uma rede de canais, que permitiria abastecer o exército e a população e escoar mercadorias, consolidando o poder do califado abássida. A decisão orientou-se, assim, pela disponibilidade de rotas e terras férteis como base da dominação política, conforme a alternativa A. A proximidade de áreas populosas como afirmação bélica (B) e a submissão à lei islâmica (C) não são o critério enfatizado no texto. A fuga da península arábica (D) não é mencionada, e a contenção do avanço mongol (E) é anacrônica, pois os mongóis só ameaçariam a região séculos depois.`,
    subject: ['his'],
    topics: ['História Geral Antiga e Medieval', 'Questões aleatórias'],
  },
  {
    id: 86,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `A agricultura ecológica e a produção orgânica de 
alimentos estão ganhando relevância em diferentes 
partes do mundo. No campo brasileiro, também 
acontece o mesmo. Impulsionado especialmente pela 
expansão da demanda de alimentos saudáveis, o setor 
cresce a cada ano, embora permaneça relativamente 
marginalizado na agenda de prioridades da política 
agrícola praticada no país. 
AQUINO, J. R.; GAZOLLA, M.; SCHNEIDER, S. In: SAMBUICHI, R. H. R. et al. (Org.). 
A política nacional de agroecologia e produção orgânica no Brasil : uma trajetória de 
luta pelo desenvolvimento rural sustentável. Brasília: Ipea, 2017 (adaptado). 
Que tipo de intervenção do poder público no espaço 
rural é capaz de reduzir a marginalização produtiva 
apresentada no texto?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Subsidiar os cultivos de base familiar.` },
      { id: 'B', type: 'text', value: `Favorecer as práticas de fertilização química.` },
      { id: 'C', type: 'text', value: `Restringir o emprego de maquinário moderno.` },
      { id: 'D', type: 'text', value: `Controlar a expansão de sistemas de irrigação.` },
      { id: 'E', type: 'text', value: `Regulamentar o uso de sementes selecionadas.` },
    ],
    correct: 'A',
    explanation: `O texto aponta que a agricultura ecológica e a produção orgânica, embora crescentes, permanecem marginalizadas na política agrícola brasileira, voltada sobretudo ao agronegócio. Como esse tipo de produção está fortemente ligado à agricultura familiar, a intervenção pública capaz de reduzir a marginalização é subsidiar os cultivos de base familiar, conforme a alternativa A. Favorecer a fertilização química (B) contraria a lógica da produção orgânica. Restringir o maquinário moderno (C) e controlar a expansão da irrigação (D) não combatem a marginalização produtiva, e regulamentar o uso de sementes selecionadas (E) não corresponde ao apoio à produção agroecológica familiar.`,
    subject: ['geo'],
    topics: ['Agricultura e pecuária', 'Questões aleatórias'],
  },
  {
    id: 87,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Tônico para a saúde da mulher . Disponível em: www.propagandashistoricas.com.br. 
Acesso em: 28 nov. 2017. 
O anúncio publicitário da década de 1940 reforça os 
seguintes estereótipos atribuídos historicamente a uma 
suposta natureza feminina:`,
    images: ['/enem/2018/images/enem_2018_d1_q87.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Pudor inato e instinto maternal.` },
      { id: 'B', type: 'text', value: `Fragilidade física e necessidade de aceitação.` },
      { id: 'C', type: 'text', value: `Isolamento social e procura de autoconhecimento.` },
      { id: 'D', type: 'text', value: `Dependência econômica e desejo de ostentação.` },
      { id: 'E', type: 'text', value: `Mentalidade fútil e conduta hedonista.` },
    ],
    correct: 'B',
    explanation: `O anúncio de um tônico para a saúde da mulher, veiculado na década de 1940, apoiava-se em estereótipos de uma suposta natureza feminina, apresentando a mulher como fisicamente frágil e dependente de aprovação e cuidado. Por isso, reforçava os estereótipos de fragilidade física e necessidade de aceitação, conforme a alternativa B. O pudor inato e o instinto maternal (A) não são o apelo central de um produto que promete vigor e bem-estar. O isolamento social com autoconhecimento (C), a dependência econômica com ostentação (D) e a mentalidade fútil e hedonista (E) não correspondem à imagem de debilidade e busca de aceitação explorada pela propaganda.`,
    subject: ['soc'],
    topics: ['Cultura e identidade', 'Questões aleatórias'],
  },
  {
    id: 88,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: ``,
    images: ['/enem/2018/images/enem_2018_d1_q88.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `conservação do bioma nativo.` },
      { id: 'B', type: 'text', value: `estagnação do setor primário.` },
      { id: 'C', type: 'text', value: `utilização de madeira de reflorestamento.` },
      { id: 'D', type: 'text', value: `redução da produção de móveis.` },
      { id: 'E', type: 'text', value: `retração da indústria alimentícia.` },
    ],
    correct: 'C',
    explanation: `O gráfico indica uma tendência de crescimento da participação da silvicultura e de queda do extrativismo vegetal no valor da produção florestal, refletindo a maior exploração de florestas plantadas em lugar da coleta em matas nativas. Essa variação foi influenciada pela tendência de utilização de madeira de reflorestamento, conforme a alternativa C. A conservação do bioma nativo (A) e a estagnação do setor primário (B) não explicam o avanço da silvicultura. A redução da produção de móveis (D) e a retração da indústria alimentícia (E) não decorrem dos dados, que tratam da origem da madeira e não do consumo final dos produtos florestais.`,
    subject: ['geo'],
    topics: ['Agricultura e pecuária', 'Questões aleatórias'],
  },
  {
    id: 89,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `No início da década de 1990, dois biólogos importantes, Redford e Robinson, produziram um modelo largamente 
aceito de “produção sustentável” que previa quantos indivíduos de cada espécie poderiam ser caçados de forma 
sustentável baseado nas suas taxas de reprodução. Os seringueiros do Alto Juruá tinham um modelo diferente: a 
quem lhes afirmava que estavam caçando acima do sustentável (dentro do modelo), eles diziam que não, que o nível 
da caça dependia da existência de áreas de refúgio em que ninguém caçava. Ora, esse acabou sendo o modelo 
batizado de “fonte-ralo” proposto dez anos após o primeiro por Novaro, Bodmer e o próprio Redford e que suplantou 
o modelo anterior. 
CUNHA, M. C. Revista USP , n. 75, set.-nov. 2007. 
No contexto da produção científica, a necessidade de reconstrução desse modelo, conforme exposto no texto, foi 
determinada pelo confronto com um(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `conclusão operacional obtida por lógica dedutiva.` },
      { id: 'B', type: 'text', value: `visão de mundo marcada por preconceitos morais.` },
      { id: 'C', type: 'text', value: `hábito social condicionado pela religiosidade popular.` },
      { id: 'D', type: 'text', value: `conhecimento empírico apropriado pelo senso comum.` },
      { id: 'E', type: 'text', value: `padrão de preservação construído por experimentação dirigida.` },
    ],
    correct: 'D',
    explanation: `O texto relata que o modelo científico de caça sustentável foi reconstruído após o confronto com o saber prático dos seringueiros do Alto Juruá, cuja noção de áreas de refúgio acabou incorporada ao modelo fonte-ralo. A reformulação foi determinada pelo embate com um conhecimento empírico apropriado pelo senso comum, conforme a alternativa D. A conclusão obtida por lógica dedutiva (A) e o padrão construído por experimentação dirigida (E) descrevem o método científico anterior, não o saber que o corrigiu. A visão marcada por preconceitos morais (B) e o hábito condicionado pela religiosidade (C) não correspondem ao conhecimento prático e observacional dos seringueiros.`,
    subject: ['fil'],
    topics: ['Teoria do conhecimento', 'Questões aleatórias'],
  },
  {
    id: 90,
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Um dos teóricos da democracia moderna, Hans Kelsen, considera elemento essencial da democracia real (não 
da democracia ideal, que não existe em lugar algum) o método da seleção dos líderes, ou seja, a eleição. Exemplar, 
neste sentido, é a afirmação de um juiz da Corte Suprema dos Estados Unidos, por ocasião de uma eleição de 1902: 
“A cabine eleitoral é o templo das instituições americanas, onde cada um de nós é um sacerdote, ao qual é confiada a 
guarda da arca da aliança e cada um oficia do seu próprio altar”. 
BOBBIO, N. Teoria geral da política. Rio de Janeiro: Elsevier, 2000 (adaptado). 
As metáforas utilizadas no texto referem-se a uma concepção de democracia fundamentada no(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `justificação teísta do direito.` },
      { id: 'B', type: 'text', value: `rigidez da hierarquia de classe.` },
      { id: 'C', type: 'text', value: `ênfase formalista na administração.` },
      { id: 'D', type: 'text', value: `protagonismo do Executivo no poder.` },
      { id: 'E', type: 'text', value: `centralidade do indivíduo na sociedade.` },
    ],
    correct: 'E',
    explanation: `Ao citar Kelsen e a metáfora da cabine eleitoral como templo em que cada eleitor é um sacerdote em seu próprio altar, o texto define a democracia real pelo método da eleição, destacando o papel decisivo de cada cidadão. Essa concepção fundamenta-se na centralidade do indivíduo na sociedade, conforme a alternativa E. A justificação teísta do direito (A) toma literalmente uma linguagem apenas figurada. A rigidez da hierarquia de classe (B) contraria a igualdade do voto. A ênfase formalista na administração (C) e o protagonismo do Executivo (D) deslocam o foco do eleitor individual, que é o fundamento da democracia descrita.`,
    subject: ['fil'],
    topics: ['Política e Estado', 'Questões aleatórias'],
  },

  {
    id: 5,
    language: 'en',
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `1984 (excerpt)
'Is it your opinion, Winston, that the past has real existence?' [...] O'Brien smiled faintly. 'I will put it more precisely. Does the past exist concretely, in space? Is there somewhere or other a place, a world of solid objects, where the past is still happening?'
'No.'
'Then where does the past exist, if at all?'
'In records. It is written down.'
'In records. And-?'
'In the mind. In human memories.'
'In memory. Very well, then. We, the Party, control all records, and we control all memories. Then we control the past, do we not?'
ORWELL, G. Nineteen Eighty-Four. New York: Signet Classics, 1977.
O romance 1984 descreve os perigos de um Estado totalitário. A ideia evidenciada nessa passagem é que o controle do Estado se dá por meio do(a)`,
    alternatives: [
      { id: 'A', type: 'text', value: `boicote a ideais libertários.` },
      { id: 'B', type: 'text', value: `veto ao culto das tradições.` },
      { id: 'C', type: 'text', value: `poder sobre memórias e registros.` },
      { id: 'D', type: 'text', value: `censura a produções orais e escritas.` },
      { id: 'E', type: 'text', value: `manipulação de pensamentos individuais.` },
    ],
    correct: 'C',
    explanation: `Resposta correta: C. No diálogo de 1984, O'Brien conclui que, como o passado só existe em registros escritos e na memória humana, e o Partido controla tanto os registros quanto as memórias, ele controla o passado. A passagem evidencia, assim, que o controle do Estado se dá pelo poder sobre memórias e registros (alternativa C). A alternativa A fala em boicote a ideais libertários; B, em veto às tradições; D, em censura a produções orais e escritas; e E, em manipulação de pensamentos individuais — aspectos próximos do universo da obra, mas que não são o mecanismo destacado neste trecho, centrado em registros e memória.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 2,
    language: 'en',
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Cartum
"WHEN I WAS 5 EVERYONE TOLD ME TO BE A BIG BOY. WHEN I WAS 10 THEY TOLD ME I SHOULD BE MORE MATURE. NOW THEY SAY IT'S TIME TO START ACTING LIKE AN ADULT. AT THIS RATE, I'LL BE ELIGIBLE FOR SOCIAL SECURITY BEFORE I GRADUATE FROM HIGH SCHOOL!"
GLASBERGEN, R. Disponível em: www.glasbergen.com. Acesso em: 3 jul. 2015 (adaptado).
No cartum, a crítica está no fato de a sociedade exigir do adolescente que`,
    images: ['/enem/2018/images/enem_2018_d1_q92.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `se aposente prematuramente.` },
      { id: 'B', type: 'text', value: `amadureça precocemente.` },
      { id: 'C', type: 'text', value: `estude aplicadamente.` },
      { id: 'D', type: 'text', value: `se forme rapidamente.` },
      { id: 'E', type: 'text', value: `ouça atentamente.` },
    ],
    correct: 'B',
    explanation: `Resposta correta: B. No cartum, o personagem reclama que, desde os 5 anos, sempre lhe pedem que seja 'crescido', 'maduro' e que 'aja como adulto', a ponto de ele brincar que se aposentará antes de terminar o colégio. A crítica está na exigência de que o adolescente amadureça precocemente (alternativa B). A alternativa A toma ao pé da letra a menção à aposentadoria; C fala em estudar aplicadamente; D, em formar-se rapidamente; e E, em ouvir atentamente — ações que não correspondem à cobrança social satirizada, que é o apressamento do amadurecimento.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 4,
    language: 'en',
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Khan Academy
TEXTO I - A Free World-class Education for Anyone Anywhere
The Khan Academy is an organization on a mission. We're a not-for-profit with the goal of changing education for the better by providing a free world-class education to anyone anywhere. All of the site's resources are available to anyone. The Khan Academy's materials and resources are available to you completely free of charge.
Disponível em: www.khanacademy.org. Acesso em: 24 fev. 2012 (adaptado).
TEXTO II
I didn't have a problem with Khan Academy site until very recently. For me, the problem is the way Khan Academy is being promoted. The way the media sees it as "revolutionizing education". The way people with power and money view education as simply "sit-and-get". If your philosophy of education is "sit-and-get", i.e., teaching is telling and learning is listening, then Khan Academy is way more efficient than classroom lecturing. Khan Academy does it better. But TRUE progressive educators, TRUE education visionaries and revolutionaries don't want to do these things better. We want to DO BETTER THINGS.
Disponível em: http://fnoschese.wordpress.com. Acesso em: 2 mar. 2012.
Com o impacto das tecnologias e a ampliação das redes sociais, consumidores encontram na internet possibilidades de opinar sobre serviços oferecidos. Nesse sentido, o segundo texto, que é um comentário sobre o site divulgado no primeiro, apresenta a intenção do autor de`,
    alternatives: [
      { id: 'A', type: 'text', value: `elogiar o trabalho proposto para a educação nessa era tecnológica.` },
      { id: 'B', type: 'text', value: `reforçar como a mídia pode contribuir para revolucionar a educação.` },
      { id: 'C', type: 'text', value: `chamar a atenção das pessoas influentes para o significado da educação.` },
      { id: 'D', type: 'text', value: `destacar que o site tem melhores resultados do que a educação tradicional.` },
      { id: 'E', type: 'text', value: `criticar a concepção de educação em que se baseia a organização.` },
    ],
    correct: 'E',
    explanation: `Resposta correta: E. O Texto II comenta o site do Texto I e, embora reconheça sua eficiência, critica a concepção de educação em que a Khan Academy se baseia — o modelo 'sit-and-get', em que ensinar é apenas transmitir e aprender é apenas ouvir. A intenção do autor é, portanto, criticar essa concepção de educação (alternativa E), pois ele diz querer 'fazer coisas melhores', e não apenas fazer melhor o mesmo. A alternativa A diz que ele elogia a proposta; B, que reforça o papel revolucionário da mídia; C, que chama a atenção de pessoas influentes; e D, que destaca a superioridade do site — todas contrárias ao tom crítico do comentário.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 3,
    language: 'en',
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Don't write in English, they said,
English is not your mother tongue...
...The language I speak
Becomes mine, its distortions, its queerness
All mine, mine alone, it is half English, half Indian, funny perhaps,
but it is honest,
It is as human as I am human...
...It voices my joys, my longings my
Hopes...
(Kamala Das, 1965:10) apud GARGESH, R. South Asian Englishes. In: KACHRU, B. B.; KACHRU, Y.; NÉLSON, C. L. (Eds.). The Handbook of World Englishes. Singapore: Blackwell, 2006.
A poetisa Kamala Das, como muitos escritores indianos, escreve suas obras em inglês, apesar de essa não ser sua primeira língua. Nesses versos, ela`,
    alternatives: [
      { id: 'A', type: 'text', value: `usa a língua inglesa com efeito humorístico.` },
      { id: 'B', type: 'text', value: `recorre a vozes de vários escritores ingleses.` },
      { id: 'C', type: 'text', value: `adverte sobre o uso distorcido da língua inglesa.` },
      { id: 'D', type: 'text', value: `demonstra consciência de sua identidade linguística.` },
      { id: 'E', type: 'text', value: `reconhece a incompreensão na sua maneira de falar inglês.` },
    ],
    correct: 'D',
    explanation: `Resposta correta: D. Nos versos, Kamala Das afirma que a língua inglesa que fala tornou-se sua, com suas distorções e particularidades, sendo 'meio inglesa, meio indiana', mas honesta e tão humana quanto ela. A poetisa demonstra consciência de sua identidade linguística (alternativa D), assumindo o inglês como expressão legítima de suas alegrias e esperanças. A alternativa A reduz os versos a um efeito humorístico; B fala em vozes de vários escritores ingleses; C, em advertência contra o uso distorcido; e E, em reconhecimento de incompreensão — leituras que contrariam a afirmação positiva da autora sobre a própria voz.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 1,
    language: 'en',
    exam: 'enem',
    year: 2018,
    day: 1,
    text: `Lava Mae: Creating Showers on Wheels for the Homeless
San Francisco, according to recent city numbers, has 4,300 people living on the streets. Among the many problems the homeless face is little or no access to showers. San Francisco only has about 16 to 20 shower stalls to accommodate them.
But Doniece Sandoval has made it her mission to change that. The 51-year-old former marketing executive started Lava Mae, a sort of showers on wheels, a new project that aims to turn decommissioned city buses into shower stations for the homeless. Each bus will have two shower stations and Sandoval expects that they'll be able to provide 2,000 showers a week.
ANDREANO, C. Disponível em: http://abcnews.go.com. Acesso em: 26 jun. 2015 (adaptado).
A relação dos vocábulos shower, bus e homeless, no texto, refere-se a`,
    alternatives: [
      { id: 'A', type: 'text', value: `empregar moradores de rua em lava a jatos para ônibus.` },
      { id: 'B', type: 'text', value: `criar acesso a banhos gratuitos para moradores de rua.` },
      { id: 'C', type: 'text', value: `comissionar sem-teto para dirigir os ônibus da cidade.` },
      { id: 'D', type: 'text', value: `exigir das autoridades que os ônibus municipais tenham banheiros.` },
      { id: 'E', type: 'text', value: `abrigar dois mil moradores de rua em ônibus que foram adaptados.` },
    ],
    correct: 'B',
    explanation: `Resposta correta: B. O texto relaciona as palavras shower, bus e homeless ao projeto Lava Mae, que transforma ônibus desativados em estações de banho para moradores de rua de São Francisco. A associação refere-se, portanto, a criar acesso a banhos gratuitos para moradores de rua (alternativa B). A alternativa A fala em empregá-los em lava a jato; C, em contratá-los para dirigir ônibus; D, em exigir banheiros nos ônibus municipais; e E, em abrigar dois mil moradores em ônibus adaptados — interpretações equivocadas, pois o número 2 000 se refere a banhos por semana, não a pessoas abrigadas.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Vocabulário', 'Questões aleatórias'],
  },
];

export default ENEM_2018_D1;
