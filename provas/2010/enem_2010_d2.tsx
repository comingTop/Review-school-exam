import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2010_D2: QuizQuestion[] = [
  {
    id: 91,
    language: 'es',
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Los animales
En la Unión Europea desde el 1º de octubre de 2004 el
uso de un pasaporte es obligatorio para los animales que
viajan con su dueño en cualquier compañía.
AVISO ESPECIAL: en España los animales deben
haber sido vacunados contra la rabia antes de su dueño
solicitar la documentación. Consultar a un veterinario.
De acordo com as informações sobre aeroportos e
estações ferroviárias na Europa, uma pessoa que more
na Espanha e queira viajar para a Alemanha com o seu
cachorro deve`,
    images: ['/enem/2010/images/enem_2010_d2_q91.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `consultar as autoridades para verificar a possibilidade de viagem.` },
      { id: 'B', type: 'text', value: `ter um certificado especial tirado em outubro de 2004.` },
      { id: 'C', type: 'text', value: `tirar o passaporte do animal e logo vaciná-lo.` },
      { id: 'D', type: 'text', value: `vacinar o animal contra todas as doenças.` },
      { id: 'E', type: 'text', value: `vacinar o animal e depois solicitar o passaporte dele.` },
    ],
    correct: 'E',
    explanation: `Resposta correta: E. O texto informa que, na União Europeia, o passaporte para animais é obrigatório desde outubro de 2004 e que, na Espanha, o animal precisa ser vacinado contra a raiva antes que o dono solicite a documentação. Logo, quem vive na Espanha e quer viajar com o cachorro para a Alemanha deve primeiro vacinar o animal e só depois solicitar o passaporte, exatamente a ordem descrita na alternativa E. A alternativa C inverte essa sequência (tirar o passaporte e depois vacinar), e a D extrapola ao exigir vacina contra todas as doenças, quando o texto menciona apenas a raiva. A alternativa B confunde a data: outubro de 2004 marca o início da obrigatoriedade do passaporte, não a emissão de um certificado especial, e a A sugere uma consulta às autoridades que o texto não exige.`,
    subject: ['esp'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 92,
    language: 'es',
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Bilingüismo en la Educación Media
Continuidad, no continuismo
Aun sin escuela e incluso a pesar de la escuela, paraguayos
y paraguayas se están comunicando en guaraní. La
comunidad paraguaya ha encontrado en la lengua guaraní
una funcionalidad real que asegura su reproducción y
continuidad. Esto, sin embargo, no basta. La inclusión de la
lengua guaraní en el proceso de educación escolar fue sin
duda un avance de la Reforma Educativa.
Gracias precisamente a los programas escolares,
aun en contextos urbanos, el bilingüismo ha sido
potenciado. Los guaraníhablantes se han acercado
con mayor fuerza a la adquisición del castellano, y
algunos castellanohablantes perdieron el miedo al
guaraní y superaron los prejuicios en contra de él.
Dejar fuera de la Educación Media al guaraní sería
echar por la borda tanto trabajo realizado, tanta
esperanza acumulada.
Cualquier intento de marginación del guaraní en la
educación paraguaya merece la más viva y decidida
protesta, pero esta postura ética no puede encubrir el
continuismo de una forma de enseñanza del guaraní
que ya ha causado demasiados estragos contra la
lengua, contra la cultura y aun contra la lealtad que
las paraguayas y paraguayos sienten por su querida
lengua. El guaraní, lengua de comunicación sí y mil
veces sí; lengua de imposición, no.
MELIÀ, B. Disponível em: http://www.staff.uni-mainz.de. Acesso em: 27 abr. 2010 (adaptado).
No último parágrafo do fragmento sobre o bilinguismo no Paraguai, o autor afirma que a língua guarani, nas escolas, deve ser tratada como língua de comunicação e não de imposição. Qual dos argumentos abaixo foi usado pelo autor para defender essa ideia?`,
    alternatives: [
      { id: 'A', type: 'text', value: `O guarani continua sendo usado pelos paraguaios, mesmo sem a escola e apesar dela.` },
      { id: 'B', type: 'text', value: `O ensino médio no Paraguai, sem o guarani, desmereceria todo o trabalho realizado e as esperanças acumuladas.` },
      { id: 'C', type: 'text', value: `A língua guarani encontrou uma funcionalidade real que assegura sua reprodução e continuidade, mas só isso não basta.` },
      { id: 'D', type: 'text', value: `A introdução do guarani nas escolas potencializou a difusão da língua, mas é necessário que haja uma postura ética em seu ensino.` },
      { id: 'E', type: 'text', value: `O bilinguismo na maneira de ensinar o guarani tem causado estragos contra a língua, a cultura e a lealdade dos paraguaios ao guarani.` },
    ],
    correct: 'D',
    explanation: `Resposta correta: D. A pergunta cobra o argumento usado no último parágrafo para defender que o guarani seja língua de comunicação, e não de imposição. O trecho reconhece que a inclusão do guarani nas escolas, graças aos programas educativos, potencializou a difusão da língua, mas ressalta que é preciso uma postura ética em seu ensino, rejeitando o 'continuísmo' que prejudica a própria língua e cultura, o que corresponde à alternativa D. A alternativa A retoma uma ideia de outro parágrafo (o guarani persiste apesar da escola) e não é o argumento central do fecho. A alternativa E distorce o texto, pois quem causou estragos foi o continuísmo de uma forma de ensino, e não o bilinguismo em si.`,
    subject: ['esp'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 93,
    language: 'es',
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Bilingüismo en la Educación Media
Continuidad, no continuismo
Aun sin escuela e incluso a pesar de la escuela, paraguayos
y paraguayas se están comunicando en guaraní. La
comunidad paraguaya ha encontrado en la lengua guaraní
una funcionalidad real que asegura su reproducción y
continuidad. Esto, sin embargo, no basta. La inclusión de la
lengua guaraní en el proceso de educación escolar fue sin
duda un avance de la Reforma Educativa.
Gracias precisamente a los programas escolares,
aun en contextos urbanos, el bilingüismo ha sido
potenciado. Los guaraníhablantes se han acercado
con mayor fuerza a la adquisición del castellano, y
algunos castellanohablantes perdieron el miedo al
guaraní y superaron los prejuicios en contra de él.
Dejar fuera de la Educación Media al guaraní sería
echar por la borda tanto trabajo realizado, tanta
esperanza acumulada.
Cualquier intento de marginación del guaraní en la
educación paraguaya merece la más viva y decidida
protesta, pero esta postura ética no puede encubrir el
continuismo de una forma de enseñanza del guaraní
que ya ha causado demasiados estragos contra la
lengua, contra la cultura y aun contra la lealtad que
las paraguayas y paraguayos sienten por su querida
lengua. El guaraní, lengua de comunicación sí y mil
veces sí; lengua de imposición, no.
MELIÀ, B. Disponível em: http://www.staff.uni-mainz.de. Acesso em: 27 abr. 2010 (adaptado).
Em alguns países bilíngues, o uso de uma língua pode se sobrepor à outra, gerando uma mobilização social em prol da valorização da menos proeminente. De acordo com o texto, no caso do Paraguai, esse processo se deu pelo(a)`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `falta de continuidade do ensino do guarani nos programas escolares.` },
      { id: 'B', type: 'text', value: `preconceito existente contra o guarani principalmente nas escolas.` },
      { id: 'C', type: 'text', value: `esperança acumulada na reforma educativa da educação média.` },
      { id: 'D', type: 'text', value: `inclusão e permanência do ensino do guarani nas escolas.` },
      { id: 'E', type: 'text', value: `continuísmo do ensino do castelhano nos centros urbanos.` },
    ],
    correct: 'D',
    explanation: `Resposta correta: D. O enunciado trata da mobilização social em favor da língua menos proeminente; no caso do Paraguai, o texto mostra que esse processo ocorreu pela inclusão e permanência do ensino do guarani nas escolas, apontada como um avanço da Reforma Educativa, o que valida a alternativa D. As alternativas A e B afirmam o oposto do texto, que não fala em falta de continuidade nem em preconceito escolar como motor do processo. A C e a E deslocam o foco: a esperança acumulada e o continuísmo do castelhano não são apontados como a causa da valorização do guarani.`,
    subject: ['esp'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 94,
    language: 'es',
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Dejar de fumar engorda, pero seguir haciéndolo, también. Esa es la conclusión a la que han llegado investigadores de la Universidad de Navarra que han hecho un seguimiento de 7.565 personas durante 50 meses. Los datos “se han ajustado por edad, sexo, índice de masa corporal inicial y estilo de vida”, ha explicado el director del ensayo, Javier Basterra-Gortari, por lo que “el único factor que queda es el tabaquismo”. El estúdio se ha publicado en la Revista Española de Cardiología. “El tabaco es un anorexígeno [quita el apetito], y por eso las personas que dejan de fumar engordan”, añade Basterra-Gortari. Eso hace mucho más relevante el hallazgo del estúdio. Puesto en orden, los que más peso ganan son los que dejan de fumar, luego, los que siguen haciéndolo, y, por último, los que nunca han fumado, indica el investigador. “Por eso lo mejor para mantener una vida saludable es no fumar nunca”, añade. BENITO, E. Disponível em: http://www.elpais.com/articulo/sociedad. Acesso em: 23 abr. 2010 (fragmento). O texto jornalístico caracteriza-se basicamente por apresentar informações a respeito dos mais variados assuntos, e seu título antecipa o tema que será tratado. Tomando como base o fragmento, qual proposição identifica o tema central e poderia ser usada como título?`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `Estilo de vida interfere no ganho de peso.` },
      { id: 'B', type: 'text', value: `Estudo mostra expectativa de vida dos fumantes.` },
      { id: 'C', type: 'text', value: `Pessoas que fumam podem se tornar anoréxicas.` },
      { id: 'D', type: 'text', value: `Fumantes engordam mais que não fumantes.` },
      { id: 'E', type: 'text', value: `Tabagismo como fator de emagrecimento.` },
    ],
    correct: 'D',
    explanation: `Resposta correta: D. O texto jornalístico tem como tema central a relação entre fumar e o ganho de peso, mostrando que quem mais engorda são os que param de fumar, seguidos dos que continuam fumando e, por último, dos que nunca fumaram. Como título que antecipa esse tema, a alternativa D ('Fumantes engordam mais que não fumantes') resume a comparação feita no estudo. A alternativa E inverte a conclusão, pois o texto não trata o tabagismo como fator de emagrecimento, e sim mostra ganho de peso. A A é genérica demais (o estudo justamente isola o tabagismo de outros fatores de estilo de vida), a B fala em expectativa de vida, assunto ausente, e a C generaliza indevidamente ao falar em anorexia.`,
    subject: ['esp'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 95,
    language: 'es',
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `¡BRINCANDO! KangaROOS llega a México con diseños atléticos, pero muy fashion . Tienen un toque vintage con diferentes formas y combinaciones de colores. Lo más cool de estos tênis es que tienen bolsas para guardar llaves o dinero. Son ideales para hacer ejercicio y con unos jeans obtendrás un look urbano. www.kangaroos.com Revista Glamour Latinoamérica. México, mar. 2010. O texto publicitário utiliza diversas estratégias para enfatizar as características do produto que pretende vender. Assim, no texto, o uso de vários termos de outras línguas, que não a espanhola, tem a intenção de`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `atrair a atenção do público alvo dessa propaganda.` },
      { id: 'B', type: 'text', value: `popularizar a prática de exercícios esportivos.` },
      { id: 'C', type: 'text', value: `agradar aos compradores ingleses desse tênis.` },
      { id: 'D', type: 'text', value: `incentivar os espanhóis a falarem outras línguas.` },
      { id: 'E', type: 'text', value: `enfatizar o conhecimento de mundo do autor do texto.` },
    ],
    correct: 'A',
    explanation: `Resposta correta: A. O anúncio do tênis KangaROOS emprega vários termos estrangeiros à língua espanhola (fashion, vintage, cool, look, jeans) como estratégia de persuasão. O uso desses estrangeirismos, associados a modernidade e ao universo jovem, tem a intenção de atrair a atenção do público-alvo da propaganda, o que corresponde à alternativa A. A B foge do objetivo, que é vender o produto, não popularizar esportes; a C erra ao supor compradores ingleses, quando o público é hispano-americano; a D não trata de incentivar o aprendizado de línguas; e a E não condiz com o caráter publicitário do texto.`,
    subject: ['esp'],
    topics: ['Interpretação de texto', 'Vocabulário', 'Questões aleatórias'],
  },
  {
    id: 96,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `As diferentes esferas sociais de uso da língua obrigam o falante a adaptá-la às variadas situações de comunicação. Uma das marcas linguísticas que configuram a linguagem oral informal usada entre avô e neto neste texto é`,
    images: ['/enem/2010/images/enem_2010_d2_q96.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a opção pelo emprego da forma verbal "era" em lugar de "foi".` },
      { id: 'B', type: 'text', value: `a ausência de artigo antes da palavra "árvore".` },
      { id: 'C', type: 'text', value: `o emprego da redução "tá" em lugar da forma verbal "está".` },
      { id: 'D', type: 'text', value: `o uso da contração "desse" em lugar da expressão "de esse".` },
      { id: 'E', type: 'text', value: `a utilização do pronome "que" em início de frase exclamativa.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. A charge coloca em cena uma conversa informal entre avô e neto, e a questão pede uma marca típica da linguagem oral informal. A forma reduzida "tá" no lugar de "está" é característica da fala coloquial e espontânea, o que justifica a alternativa C. As demais falham porque descrevem fenômenos que não configuram informalidade oral: "era" (A) é apenas o pretérito imperfeito, aceito na norma culta; a ausência de artigo (B), a contração "desse" (D) e o "que" em frase exclamativa (E) são construções normais, não marcas de oralidade informal.`,
    subject: ['por'],
    topics: ['Variação linguística', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 97,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `A biosfera, que reúne todos os ambientes onde se
desenvolvem os seres vivos, se divide em unidades
menores chamadas ecossistemas, que podem ser uma
floresta, um deserto e até um lago. Um ecossistema
tem múltiplos mecanismos que regulam o número de
organismos dentro dele, controlando sua reprodução,
crescimento e migraçõe.
Predomina no texto a função da linguagem`,
    alternatives: [
      { id: 'A', type: 'text', value: `emotiva, porque o autor expressa seu sentimento em relação à ecologia.` },
      { id: 'B', type: 'text', value: `fática, porque o texto testa o funcionamento do canal de comunicação.` },
      { id: 'C', type: 'text', value: `poética, porque o texto chama a atenção para os recursos de linguagem.` },
      { id: 'D', type: 'text', value: `conativa, porque o texto procura orientar comportamentos do leitor.` },
      { id: 'E', type: 'text', value: `referencial, porque o texto trata de noções e informações conceituais.` },
    ],
    correct: 'E',
    explanation: `Gabarito: E. O texto apenas define e expõe conceitos de biologia (biosfera, ecossistema, mecanismos de regulação), transmitindo informações objetivas sobre o referente. Essa centralidade na informação conceitual caracteriza a função referencial (ou denotativa) da linguagem, como diz a alternativa E. As outras não se sustentam: não há expressão de sentimentos (emotiva, A), não se testa o canal de comunicação (fática, B), não há preocupação com a forma/recursos do enunciado (poética, C) nem intenção de orientar o comportamento do leitor (conativa, D).`,
    subject: ['por'],
    topics: ['Funções da linguagem', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 98,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Câncer 21/06 a 21/07 O eclipse em seu signo vai desencadear mudanças na sua autoestima e no seu modo de agir. O corpo indicará onde você falha - se anda engolindo sapos, a área gástrica se ressentirá. O que ficou guardado virá à tona para ser transformado, pois este novo ciclo exige uma “desintoxicação”. Seja comedida em suas ações, já que precisará de energia para se recompor. Há preocupação com a família, e a comunicação entre os irmãos trava. Lembre-se: palavra preciosa é palavra dita na hora certa. Isso ajuda também na vida amorosa, que será testada. Melhor conter as expectativas e ter calma, avaliando as próprias carências de modo maduro. Sentirá vontade de olhar além das questões materiais - sua confiança virá da intimidade com os assuntos da alma. Revista Cláudia. nº 7, ano 48, jul. 2009. O reconhecimento dos diferentes gêneros textuais, seu contexto de uso, sua função social específica, seu objetivo comunicativo e seu formato mais comum relacionam- se aos conhecimentos construídos socioculturalmente. A análise dos elementos constitutivos desse texto demonstra que sua função é`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `vender um produto anunciado.` },
      { id: 'B', type: 'text', value: `informar sobre astronomia.` },
      { id: 'C', type: 'text', value: `ensinar os cuidados com a saúde.` },
      { id: 'D', type: 'text', value: `expor a opinião de leitores em um jornal.` },
      { id: 'E', type: 'text', value: `aconselhar sobre amor, família, saúde, trabalho.` },
    ],
    correct: 'E',
    explanation: `Gabarito: E. O texto é um horóscopo do signo de Câncer, gênero que orienta o leitor sobre diversos aspectos da vida. Ele dá conselhos a respeito de autoestima, família, comunicação, vida amorosa e saúde, o que corresponde exatamente à alternativa E. As distratoras erram ao restringir ou desviar a função: não vende produto (A), não trata de astronomia científica, e sim de astrologia (B), não se limita a cuidados com a saúde (C) nem expressa a opinião de leitores em jornal (D).`,
    subject: ['por'],
    topics: ['Gêneros textuais', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 99,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `S.O.S Português Por que pronunciamos muitas palavras de um jeito diferente da escrita? Pode-se refletir sobre esse aspecto da língua com base em duas perspectivas. Na primeira delas, fala e escrita são dicotômicas, o que restringe o ensino da língua ao código. Daí vem o entendimento de que a escrita é mais complexa que a fala, e seu ensino restringe-se ao conhecimento das regras gramaticais, sem a preocupação com situações de uso. Outra abordagem permite encarar as diferenças como um produto distinto de duas modalidades da língua: a oral e a escrita. A questão é que nem sempre nos damos conta disso. S.O.S Português. Nova Escola. São Paulo: Abril, Ano XXV, nº 231, abr. 2010 (fragmento adaptado). O assunto tratado no fragmento é relativo à língua portuguesa e foi publicado em uma revista destinada a professores. Entre as características próprias desse tipo de texto, identificam-se as marcas linguísticas próprias do uso`,
    alternatives: [
      { id: 'A', type: 'text', value: `regional, pela presença de léxico de determinada região do Brasil.` },
      { id: 'B', type: 'text', value: `literário, pela conformidade com as normas da gramática.` },
      { id: 'C', type: 'text', value: `técnico, por meio de expressões próprias de textos científicos.` },
      { id: 'D', type: 'text', value: `coloquial, por meio do registro de informalidade.` },
      { id: 'E', type: 'text', value: `oral, por meio do uso de expressões típicas da oralidade.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. O fragmento foi publicado em revista voltada a professores e discute o ensino de língua com vocabulário especializado, empregando termos como "dicotômicas", "código", "modalidades da língua" e "situações de uso". Esse emprego de expressões próprias de textos técnico-científicos justifica a alternativa C. As demais não se aplicam: não há léxico regional (A), não é linguagem literária (B), nem registro coloquial (D) ou marcas típicas da oralidade (E).`,
    subject: ['por'],
    topics: ['Variação linguística', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 100,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Na busca constante pela sua evolução, o ser humano vem alternando a sua maneira de pensar, de sentir e de criar. Nas últimas décadas do século XVIII e no início do século XIX, os artistas criaram obras em que predominam o equilíbrio e a simetria de formas e cores, imprimindo um estilo caracterizado pela imagem da respeitabilidade, da sobriedade, do concreto e do civismo. Esses artistas misturaram o passado ao presente, retratando os personagens da nobreza e da burguesia, além de cenas míticas e histórias cheias de vigor. RAZOUK, J. J. (Org.). Histórias reais e belas nas telas. Posigraf: 2003. Atualmente, os artistas apropriam-se de desenhos, charges, grafismo e ate de ilustrações de livros para compor obras em que se misturam personagens de diferentes épocas, como na seguinte imagem: Romero Brito.“Gisele e Tom”. Andy Warhol. “Michael Jackson”. Funny Filez.“Monabean”. Andy Warhol.`,
    images: ['/enem/2010/images/enem_2010_d2_q100_A.jpg', '/enem/2010/images/enem_2010_d2_q100_B.jpg', '/enem/2010/images/enem_2010_d2_q100_C.jpg', '/enem/2010/images/enem_2010_d2_q100_D.jpg', '/enem/2010/images/enem_2010_d2_q100_E.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. O enunciado afirma que artistas atuais se apropriam de imagens misturando personagens de épocas diferentes. A obra "Monabean", de Funny Filez, funde a Mona Lisa renascentista com o personagem contemporâneo Mr. Bean, combinando figuras de tempos distintos, o que atende ao critério da questão (C). As outras imagens não promovem esse cruzamento temporal: "Gisele e Tom", "Michael Jackson" e "Marilyn Monroe" retratam figuras contemporâneas, e o "Retrato de Jaqueline", de Picasso, pertence a uma mesma época.`,
    subject: ['por'],
    topics: ['Intertextualidade', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 101,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `MOSTRE QUE SUA MEMÓRIA É MELHOR DO QUE A DE COMPUTADOR E GUARDE ESTA CONDIÇÃO: 12X SEM JUROS. Campanha publicitária de loja de eletroeletrônicos. Revista Época. N° 424, 03 jul. 2006. Ao circularem socialmente, os textos realizam-se como práticas de linguagem, assumindo configurações específicas, formais e de conteúdo. Considerando o contexto em que circula o texto publicitário, seu objetivo básico é influenciar o comportamento do leitor, por meio de apelos que visam à adesão ao consumo. definir regras de comportamento social pautadas no combate ao consumismo exagerado. defender a importância do conhecimento de`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `influenciar o comportamento do leitor, por meio de apelos que visam à adesão ao consumo.` },
      { id: 'B', type: 'text', value: `definir regras de comportamento social pautadas no combate ao consumismo exagerado.` },
      { id: 'C', type: 'text', value: `defender a importância do conhecimento de informática pela população de baixo poder aquisitivo.` },
      { id: 'D', type: 'text', value: `facilitar o uso de equipamentos de informática pelas classes sociais economicamente desfavorecidas.` },
      { id: 'E', type: 'text', value: `questionar o fato de o homem ser mais inteligente que a máquina, mesmo a mais moderna.` },
    ],
    correct: 'A',
    explanation: `Gabarito: A. O texto é publicitário de uma loja de eletroeletrônicos e usa o trocadilho sobre memória para chamar atenção e vender em parcelas. O objetivo básico de um anúncio nesse contexto é influenciar o comportamento do leitor com apelos que estimulam o consumo, como diz a alternativa A. As demais contrariam a função persuasiva: não combate o consumismo (B), não defende o conhecimento de informática (C), não facilita o uso de equipamentos por classes desfavorecidas (D) nem questiona a inteligência humana frente à máquina (E).`,
    subject: ['por'],
    topics: ['Gêneros textuais', 'Funções da linguagem', 'Questões aleatórias'],
  },
  {
    id: 102,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Testes Dia desses resolvi fazer um teste proposto por um site da internet. O nome do teste era tentador: “O que Freud diria de você”. Uau. Respondi a todas as perguntas e o resultado foi o seguinte: “Os acontecimentos da sua infância a marcaram até os doze anos, depois disso você buscou conhecimento intelectual para seu amadurecimento”. Perfeito! Foi exatamente o que aconteceu comigo. Fiquei radiante: eu havia realizado uma consulta paranormal com o pai da psicanálise, e ele acertou na mosca. Estava com tempo sobrando, e curiosidade é algo que não me falta, então resolvi voltar ao teste e responder tudo diferente do que havia respondido antes. Marquei umas alternativas esdrúxulas, que nada tinham a ver com minha personalidade. E fui conferir o resultado, que dizia o seguinte: “Os acontecimentos da sua infância a marcaram até os 12 anos, depois disso você buscou conhecimento intelectual para seu amadurecimento”. MEDEIROS, M. Doidas e santas. Porto Alegre, 2008 (adaptado). Quanto às influências que a internet pode exercer sobre os usuários, a autora expressa uma reação irônica no trecho: “Marquei umas alternativas esdrúxulas, que nada tinham a ver”. “Os acontecimentos da sua infância a marcaram até os doze anos”. “Dia desses resolvi fazer um teste proposto por um`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `“Marquei umas alternativas esdrúxulas, que nada tinham a ver”.` },
      { id: 'B', type: 'text', value: `“Os acontecimentos da sua infância a marcaram até os doze anos”.` },
      { id: 'C', type: 'text', value: `“Dia desses resolvi fazer um teste proposto por um site da internet”.` },
      { id: 'D', type: 'text', value: `“Respondi a todas as perguntas e o resultado foi o seguinte”.` },
      { id: 'E', type: 'text', value: `“Fiquei radiante: eu havia realizado uma consulta paranormal com o pai da psicanálise”.` },
    ],
    correct: 'E',
    explanation: `Gabarito: E. A crônica narra a experiência da autora com um teste de internet e a questão pede o trecho em que ela reage com ironia. Ao dizer que ficou "radiante" por ter feito "uma consulta paranormal com o pai da psicanálise" que "acertou na mosca", a autora ridiculariza, de modo irônico, a suposta seriedade do teste virtual, justificando E. Os demais trechos são apenas descritivos ou relatam fatos, sem a carga de ironia exigida pelo enunciado.`,
    subject: ['por'],
    topics: ['Figuras de linguagem', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 103,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Transtorno do comer compulsivo O transtorno do comer compulsivo vem sendo reconhecido, nos últimos anos, como uma síndrome caracterizada por episódios de ingestão exagerada e compulsiva de alimentos, porém, diferentemente da bulimia nervosa, essas pessoas não tentam evitar ganho de peso com os métodos compensatórios. Os episódios vêm acompanhados de uma sensação de falta de controle sobre o ato de comer, sentimentos de culpa e de vergonha. Muitas pessoas com essa síndrome são obesas, apresentando uma história de variação de peso, pois a comida é usada para lidar com problemas psicológicos. O transtorno do comer compulsivo é encontrado em cerca de 2% da população em geral, mais frequentemente acometendo mulheres entre 20 e 30 anos de idade. Pesquisas demonstram que 30% das pessoas que procuram tratamento para obesidade ou para perda de peso são portadoras de transtorno do comer compulsivo. Disponível em: http://www.abcdasaude.com.br. Acesso em: 1 maio 2009 (adaptado). Considerando as ideias desenvolvidas pelo autor, conclui-se que o texto tem a finalidade de descrever e fornecer orientações sobre a síndrome da compulsão alimentícia. narrar a vida das pessoas que têm o transtorno do comer compulsivo. aconselhar as pessoas obesas a perder peso com`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `descrever e fornecer orientações sobre a síndrome da compulsão alimentícia.` },
      { id: 'B', type: 'text', value: `narrar a vida das pessoas que têm o transtorno do comer compulsivo.` },
      { id: 'C', type: 'text', value: `aconselhar as pessoas obesas a perder peso com métodos simples.` },
      { id: 'D', type: 'text', value: `expor de forma geral o transtorno compulsivo por alimentação.` },
      { id: 'E', type: 'text', value: `encaminhar as pessoas para a mudança de hábitos alimentícios.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. O texto apresenta de forma geral o transtorno do comer compulsivo: define a síndrome, descreve sintomas, dados de prevalência e diferenças em relação à bulimia, sem assumir caráter instrutivo ou prescritivo. Essa exposição informativa e geral corresponde à alternativa D. A alternativa A falha porque o texto não fornece "orientações"; B erra por não narrar vidas; C e E não se sustentam, pois o texto não aconselha a perder peso nem encaminha à mudança de hábitos.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 104,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `A gentileza é algo difícil de ser ensinado e vai muito além da palavra educação. Ela é difícil de ser encontrada, mas fácil de ser identificada, e acompanha pessoas generosas e desprendidas, que se interessam em contribuir para o bem do outro e da sociedade. É uma atitude desobrigada, que se manifesta nas situações cotidianas e das maneiras mais prosaicas. SIMURRO, S. A. B. Ser gentil é ser saudável. Disponível em: http://www.abqv.org.br. Acesso em: 22 jun. 2006 (adaptado). No texto, menciona-se que a gentileza extrapola as regras de boa educação. A argumentação construída`,
    alternatives: [
      { id: 'A', type: 'text', value: `apresenta fatos que estabelecem entre si relações de causa e de consequência.` },
      { id: 'B', type: 'text', value: `descreve condições para a ocorrência de atitudes educadas.` },
      { id: 'C', type: 'text', value: `indica a finalidade pela qual a gentileza pode ser praticada.` },
      { id: 'D', type: 'text', value: `enumera fatos sucessivos em uma relação temporal.` },
      { id: 'E', type: 'text', value: `mostra oposição e acrescenta ideias. IT_070005` },
    ],
    correct: 'E',
    explanation: `Gabarito: E. O texto define gentileza e constrói a argumentação articulando ideias contrárias e complementares: afirma que a gentileza vai "muito além" da educação, que é "difícil de ser encontrada, mas" acompanha pessoas generosas, acrescentando novas características. Esse jogo de oposição e acréscimo de ideias justifica a alternativa E. As demais descrevem relações que não organizam o texto: causa e consequência (A), condições (B), finalidade (C) ou sucessão temporal de fatos (D).`,
    subject: ['por'],
    topics: ['Redação (estrutura e argumentação)', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 105,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `MONET,C. Mulher com sombrinha. 1875, 100x81cm. In: BECKETT, W. História da Pintura. São Paulo: Ática, 1997. Em busca de maior naturalismo em suas obras e fundamentando-se em novo conceito estético, Monet, Degas, Renoir e outros artistas passaram a explorar novas formas de composição artística, que resultaram no estilo denominado Impressionismo. Observadores atentos da natureza, esses artistas passaram a`,
    images: ['/enem/2010/images/enem_2010_d2_q105.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `retratar, em suas obras, as cores que idealizavam de acordo com o reflexo da luz solar nos objetos.` },
      { id: 'B', type: 'text', value: `usar mais a cor preta, fazendo contornos nítidos, que melhor definiam as imagens e as cores do objeto representado.` },
      { id: 'C', type: 'text', value: `retratar paisagens em diferentes horas do dia, recriando, em suas telas, as imagens por eles idealizadas.` },
      { id: 'D', type: 'text', value: `usar pinceladas rápidas de cores puras e dissociadas diretamente na tela, sem misturá-las antes na paleta.` },
      { id: 'E', type: 'text', value: `usar as sombras em tons de cinza e preto e com efeitos esfumaçados, tal como eram realizadas no Renascimento.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. A obra de Monet ilustra o Impressionismo, movimento que buscava registrar a impressão da luz por meio de pinceladas rápidas e cores puras aplicadas diretamente na tela, sem misturá-las previamente na paleta, o que corresponde à alternativa D. As outras descrevem o oposto do procedimento impressionista: não idealizavam as cores (A), não usavam preto com contornos nítidos (B), não retratavam paisagens idealizadas (C) nem empregavam sombras acinzentadas ao modo renascentista (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 106,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `O folclore é o retrato da cultura de um povo. A dança popular e folclórica é uma forma de representar a cultura regional, pois retrata seus valores, crenças, trabalho e significados. Dançar a cultura de outras regiões é conhecê-la, é de alguma forma se apropriar dela, é enriquecer a própria cultura. BREGOLATO, R. A. Cultura Corporal da Dança. São Paulo: Ícone, 2007. As manifestações folclóricas perpetuam uma tradição cultural, é obra de um povo que a cria, recria e a perpetua. Sob essa abordagem deixa-se de identificar como dança folclórica brasileira o Bumba-meu-boi, que é uma dança teatral onde personagens contam uma história envolvendo crítica social, morte e ressurreição. a Quadrilha das festas juninas, que associam festejos religiosos a celebrações de origens pagãs envolvendo as colheitas e a fogueira. o Congado, que é uma representação de um reinado africano onde se homenageia santos através de música, cantos e dança. o Balé, em que se utilizam músicos, bailarinos e`,
    alternatives: [
      { id: 'A', type: 'text', value: `o Bumba-meu-boi, que é uma dança teatral onde personagens contam uma história envolvendo crítica social, morte e ressurreição.` },
      { id: 'B', type: 'text', value: `a Quadrilha das festas juninas, que associam festejos religiosos a celebrações de origens pagãs envolvendo as colheitas e a fogueira.` },
      { id: 'C', type: 'text', value: `o Congado, que é uma representação de um reinado africano onde se homenageia santos através de música, cantos e dança.` },
      { id: 'D', type: 'text', value: `o Balé, em que se utilizam músicos, bailarinos e vários outros profissionais para contar uma história em forma de espetáculo.` },
      { id: 'E', type: 'text', value: `o Carnaval, em que o samba derivado do batuque africano é utilizado como objetivo de contar ou recriar uma histó ria nos desfiles.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. O texto trata das danças populares e folclóricas como expressão da cultura de um povo, e a questão pede a manifestação que NÃO se identifica como dança folclórica brasileira. O Balé é uma dança erudita, de espetáculo, sem vínculo com a tradição popular nacional, por isso é a resposta (D). Bumba-meu-boi (A), Quadrilha junina (B), Congado (C) e Carnaval/samba (E) são, todas, manifestações folclóricas brasileiras, criadas e recriadas pela cultura popular.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 107,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Carnavália
Repique tocou
O surdo escutou
E o meu corasamborim
Cuíca gemeu, será que era meu, quando ela passou por mim?
[...]
ANTUNES, A.; BROWN, C.; MONTE, M. Tribalistas, 2002 (fragmento).
No terceiro verso, o vocábulo “corasamborim”, que
é a junção coração + samba + tamborim, refere-se,
ao mesmo tempo, a elementos que compõem uma
escola de samba e à situação emocional em que se
encontra o autor da mensagem, com o coração no
ritmo da percussão.
Essa palavra corresponde a um(a)`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `estrangeirismo, uso de elementos linguísticos originados em outras línguas e representativos de outras culturas.` },
      { id: 'B', type: 'text', value: `neologismo, criação de novos itens linguísticos, pelos mecanismos que o sistema da língua disponibiliza.` },
      { id: 'C', type: 'text', value: `gíria, que compõe uma linguagem originada em determinado grupo social e que pode vir a se disseminar em uma comunidade mais ampla.` },
      { id: 'D', type: 'text', value: `regionalismo, por ser palavra característica de determinada área geográfica.` },
      { id: 'E', type: 'text', value: `termo técnico, dado que designa elemento de área específica de atividade.` },

    ],
    correct: 'B',
    explanation: `Gabarito: B. No verso de "Carnavália", o vocábulo "corasamborim" resulta da junção de coração + samba + tamborim, formando uma palavra nova que antes não existia na língua. Essa criação de um novo item lexical pelos mecanismos do próprio idioma caracteriza o neologismo, justificando B. Não é estrangeirismo (A), pois não vem de outra língua; não é gíria (C), regionalismo (D) nem termo técnico (E), já que não se trata de uso restrito a um grupo, região ou área de atividade.`,
    subject: ['por'],
    topics: ['Gramática (sintaxe, morfologia, semântica)', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 108,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Texto I Época . 12 out. 2009 (adaptado). Texto II CONEXÃO SEM FIO NO BRASIL Onde haverá cobertura de telefonia celular para baixar publicações para o Kindle Época . 12 out. 2009. A capa da revista Época de 12 de outubro de 2009 traz um anúncio sobre o lançamento do livro digital no Brasil. Já o texto II traz informações referentes à abrangência de acessibilidade das tecnologias de comunicação e informação nas diferentes regiões do país. A partir da leitura dos dois textos, infere-se que o advento do livro digital no Brasil possibilitará o acesso das diferentes regiões do país às informações antes restritas, uma vez que eliminará as distâncias, por meio da distribuição virtual. criará a expectativa de viabilizar a democratização da leitura, porém, esbarra na insuficiência do acesso à internet por meio da telefonia celular, ainda deficiente no país. fará com que os livros impressos tornem-se obsoletos, em razão da diminuição dos gastos com os produtos digitais gratuitamente distribuídos pela internet. garantirá a democratização dos usos da tecnologia no país, levando em consideração as características de cada região no que se refere aos hábitos de`,
    images: ['/enem/2010/images/enem_2010_d2_q108.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `possibilitará o acesso das diferentes regiões do país às informações antes restritas, uma vez que eliminará as distâncias, por meio da distribuição virtual.` },
      { id: 'B', type: 'text', value: `criará a expectativa de viabilizar a democratização da leitura, porém, esbarra na insuficiência do acesso à internet por meio da telefonia celular, ainda deficiente no país.` },
      { id: 'C', type: 'text', value: `fará com que os livros impressos tornem-se obsoletos, em razão da diminuição dos gastos com os produtos digitais gratuitamente distribuídos pela internet.` },
      { id: 'D', type: 'text', value: `garantirá a democratização dos usos da tecnologia no país, levando em consideração as características de cada região no que se refere aos hábitos de leitura e acesso à informação.` },
      { id: 'E', type: 'text', value: `impulsionará o crescimento da qualidade da leitura dos brasileiros, uma vez que as características do produto permitem que a leitura aconteça a despeito das adversidades geopolíticas.` },
    ],
    correct: 'B',
    explanation: `Gabarito: B. O Texto I anuncia o lançamento do livro digital no Brasil e o Texto II, por meio do mapa, mostra que a cobertura de telefonia celular para baixar publicações é desigual e deficiente em grande parte do país. Articulando os dois, infere-se que o livro digital cria a expectativa de democratizar a leitura, mas esbarra na insuficiência do acesso à internet, como diz B. As demais são absolutas ou falsas: eliminar distâncias (A), tornar os impressos obsoletos (C), garantir a democratização (D) e superar as adversidades geopolíticas (E) ignoram a limitação revelada pelo mapa.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 109,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `O Chat e sua linguagem virtual O significado da palavra chat vem do inglês e quer dizer “conversa”. Essa conversa acontece em tempo real, e, para isso, é necessário que duas ou mais pessoas estejam conectadas ao mesmo tempo, o que chamamos de comunicação síncrona. São muitos os sites que oferecem a opção de bate-papo na internet, basta escolher a sala que deseja “entrar”, se identificar e iniciar a conversa. Geralmente, as - salas são divididas por assuntos, como educação, cinema, esporte, música, sexo, entre outros. Para entrar, é necessário escolher um nick , uma espécie de apelido que identificará o participante durante a conversa. Algumas salas restringem a idade, mas não existe nenhum controle para verificar se a idade informada é realmente a idade de quem está acessando, facilitando que crianças e adolescentes acessem salas com conteúdos inadequados para sua faixa etária. AMARAL, S. F. Internet: novos valores e novos comportamentos. In: SILVA, E. T. (Coord.). A leitura nos oceanos da internet . São Paulo: Cortez, 2003. (adaptado). Segundo o texto, o chat proporciona a ocorrência de diálogos instantâneos com linguagem específica, uma vez que nesses ambientes interativos faz-se uso de protocolos diferenciados de interação. O chat , nessa perspectiva, cria uma nova forma de comunicação porque`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `possibilita que ocorra diálogo sem a exposição da identidade real dos indivíduos, que podem recorrer a apelidos fictícios sem comprometer o fluxo da comunicação em tempo real.` },
      { id: 'B', type: 'text', value: `disponibiliza salas de bate-papo sobre diferentes assuntos com pessoas pré-selecionadas por meio de um sistema de busca monitorado e atualizado por autoridades no assunto.` },
      { id: 'C', type: 'text', value: `seleciona previamente conteúdos adequados à faixa etária dos usuários que serão distribuídos nas faixas de idade organizadas pelo site que disponibiliza a ferramenta.` },
      { id: 'D', type: 'text', value: `garante a gravação das conversas, o que possibilita que um diálogo permaneça aberto, independente da disposição de cada participante.` },
      { id: 'E', type: 'text', value: `limita a quantidade de participantes conectados nas salas de bate-papo, a fim de garantir a qualidade e eficiência dos diálogos, evitando mal-entendidos.` },
    ],
    correct: 'A',
    explanation: `Gabarito: A. Segundo o texto, o chat é comunicação síncrona em que o participante escolhe um nick (apelido) para se identificar durante a conversa em tempo real. Assim, ele cria uma nova forma de comunicação porque permite o diálogo sem a exposição da identidade real, com apelidos fictícios, sem comprometer o fluxo da interação, o que corresponde a A. As outras trazem afirmações falsas: as pessoas não são pré-selecionadas por autoridades (B), não há filtragem de conteúdo por faixa etária (C), não se garante a gravação das conversas (D) nem se limita o número de participantes (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Variação linguística', 'Questões aleatórias'],
  },
  {
    id: 110,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Disponível em: http://algarveturistico.com/wp- content/uploads/2009/04/ptm-ginastica- rítmica-01.jpg. Acesso em: 01 set. 2010. O desenvolvimento das capacidades físicas (qualidades motoras passíveis de treinamento) ajuda na tomada de decisões em relação à melhor execução do movimento. A capacidade física predominante no movimento representado na imagem é`,
    images: ['/enem/2010/images/enem_2010_d2_q110.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a velocidade, que permite ao músculo executar uma sucessão rápida de gestos em movimentação de intensidade máxima.` },
      { id: 'B', type: 'text', value: `a resistência, que admite a realização de movimentos durante considerável período de tempo, sem perda da qualidade da execução.` },
      { id: 'C', type: 'text', value: `a flexibilidade, que permite a amplitude máxima de um movimento, em uma ou mais articulações, sem causar lesões.` },
      { id: 'D', type: 'text', value: `a agilidade, que possibilita a execução de movimentos rápidos e ligeiros com mudanças de direção.` },
      { id: 'E', type: 'text', value: `o equilíbrio, que permite a realização dos mais variados movimentos, com o objetivo de sustentar o corpo sobre uma base.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. A imagem mostra uma praticante executando um movimento de grande amplitude articular (espacate junto ao espaldar), posição que exige o máximo alongamento sem lesão. A capacidade física predominante nesse movimento é a flexibilidade, definida justamente como a amplitude máxima de um movimento em uma ou mais articulações, o que corresponde a C. Velocidade (A), resistência (B), agilidade (D) e equilíbrio (E) não descrevem a qualidade motora central na postura representada.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 111,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Texto I Sob o olhar do Twitter Vivemos a era da exposição e do compartilhamento. Público e privado começam a se confundir. A ideia de privacidade vai mudar ou desaparecer. O trecho acima tem 140 caracteres exatos. É uma mensagem curta que tenta encapsular uma ideia complexa. Não é fácil esse tipo de síntese, mas dezenas de milhões de pessoas o praticam diariamente. No mundo todo, são disparados 2,4 trilhões de SMS por mês, e neles cabem 140 toques, ou pouco mais. Também é comum enviar e-mails , deixar recados no Orkut, falar com as pessoas pelo MSN, tagarelar no celular, receber chamados em qualquer parte, a qualquer hora. Estamos conectados. Superconectados, na verdade, de várias formas. [...] O mais recente exemplo de demanda por total conexão e de uma nova sintaxe social é o Twitter , o novo serviço de troca de mensagens pela internet. O Twitter pode ser entendido como uma mistura de blog e celular. As mensagens são de 140 toques, como os torpedos dos celulares, mas circulam pela internet como os textos , de blogs. Em vez de seguir para apenas uma pessoa, como no celular ou no MSN, a mensagem do Twitter vai para todos os “seguidores” - gente que acompanha o emissor. Podem ser 30, 300 ou 409 mil seguidores. MARTINS, I.; LEAL, R. Época . 16 mar.2009 (fragmento adaptado). Texto II MARTINS, I.; LEAL, R. Época . 16 mar. 2009. 2010 Da comparação entre os textos, depreende-se que o texto II constitui um passo a passo para interferir no comportamento dos usuários, dirigindo-se diretamente aos leitores, e o texto I adverte os leitores de que a internet pode transformar-se em um problema porque expõe a vida dos usuários e, por isso, precisa ser investigada. ensina aos leitores os procedimentos necessários para que as pessoas conheçam, em profundidade, os principais meios de comunicação da atualidade. exemplifica e explica o novo serviço global de mensagens rápidas que desafia os hábitos de comunicação e reinventa o conceito de privacidade. procura esclarecer os leitores a respeito dos`,
    images: ['/enem/2010/images/enem_2010_d2_q111.png'],
    alternatives: [
      { id: 'A', type: 'text', value: `adverte os leitores de que a internet pode transformar-se em um problema porque expõe a vida dos usuários e, por isso, precisa ser investigada.` },
      { id: 'B', type: 'text', value: `ensina aos leitores os procedimentos necessários para que as pessoas conheçam, em profundidade, os principais meios de comunicação da atualidade.` },
      { id: 'C', type: 'text', value: `exemplifica e explica o novo serviço global de mensagens rápidas que desafia os hábitos de comunicação e reinventa o conceito de privacidade.` },
      { id: 'D', type: 'text', value: `procura esclarecer os leitores a respeito dos perigos que o uso do Twitter pode representar nas relações de trabalho e também no plano pessoal.` },
      { id: 'E', type: 'text', value: `apresenta uma enquete sobre as redes sociais mais usadas na atualidade e mostra que o Twitter é preferido entre a maioria dos internautas.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. O Texto II é um passo a passo de dicas dirigido ao usuário do Twitter; já o Texto I apresenta e discute o serviço de forma expositiva. O Texto I exemplifica e explica esse novo serviço global de mensagens rápidas, que desafia os hábitos de comunicação e reinventa o conceito de privacidade, como afirma C. As demais não cabem: não adverte sobre perigos que exijam investigação (A), não ensina procedimentos, função do Texto II (B), nem alerta sobre perigos no trabalho (D) ou apresenta enquete (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 112,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `O dia em que o peixe saiu de graça Uma operação do Ibama para combater a pesca ilegal na divisa entre os Estados do Pará, Maranhão e Tocantins incinerou 110 quilômetros de redes usadas por pescadores durante o período em que os peixes se reproduzem. Embora tenha um impacto temporário na atividade econômica da região, a medida visa preservá-la ao longo prazo, evitando o risco de extinção dos animais. Cerca de 15 toneladas de peixes foram apreendidas e doadas para instituições de caridade. Época . 23 mar. 2009 (adaptado). A notícia, do ponto de vista de seus elementos constitutivos, apresenta argumentos contrários à pesca ilegal. tem um título que resume o conteúdo do texto. informa sobre uma ação, a finalidade que a motivou`,
    alternatives: [
      { id: 'A', type: 'text', value: `apresenta argumentos contrários à pesca ilegal.` },
      { id: 'B', type: 'text', value: `tem um título que resume o conteúdo do texto.` },
      { id: 'C', type: 'text', value: `informa sobre uma ação, a finalidade que a motivou e o resultado dessa ação.` },
      { id: 'D', type: 'text', value: `dirige-se aos órgãos governamentais dos estados envolvidos na referida operação do Ibama.` },
      { id: 'E', type: 'text', value: `introduz um fato com a finalidade de incentivar movimentos sociais em defesa do meio ambiente.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. O texto é uma notícia que relata uma operação do Ibama: informa a ação (incineração de redes de pesca ilegal), a finalidade que a motivou (preservar os peixes no período de reprodução, evitando extinção) e o resultado (toneladas de peixes apreendidas e doadas). Essa estrutura corresponde exatamente a C. As outras erram: não apresenta argumentos de opinião (A), o título é figurado e não resume o conteúdo (B), não se dirige a órgãos governamentais (D) nem visa incentivar movimentos sociais (E).`,
    subject: ['por'],
    topics: ['Gêneros textuais', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 113,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Os filhos de Ana eram bons, uma coisa verdadeira e sumarenta. Cresciam, tomavam banho, exigiam para si, malcriados, instantes cada vez mais completos. A cozinha era enfim espaçosa, o fogão enguiçado dava estouros. O calor era forte no apartamento que estavam aos poucos pagando. Mas o vento batendo nas cortinas que ela mesma cortara lembrava-lhe que se quisesse podia parar e enxugar a testa, olhando o calmo horizonte. Como um lavrador. Ela plantara as sementes que tinha na mão, não outras, mas essas apenas. LISPECTOR, C. Laços de família . Rio de Janeiro: Rocco, 1998. A autora emprega por duas vezes o conectivo mas no fragmento apresentado. Observando aspectos da organização, estruturação e funcionalidade dos elementos que articulam o texto, o conectivo mas`,
    alternatives: [
      { id: 'A', type: 'text', value: `expressa o mesmo conteúdo nas duas situações em que aparece no texto.` },
      { id: 'B', type: 'text', value: `quebra a fluidez do texto e prejudica a compreensão, se usado no início da frase.` },
      { id: 'C', type: 'text', value: `ocupa posição fixa, sendo inadequado seu uso na abertura da frase.` },
      { id: 'D', type: 'text', value: `contém uma ideia de sequência temporal que direciona a conclusão do leitor.` },
      { id: 'E', type: 'text', value: `assume funções discursivas distintas nos dois contextos de uso.` },
    ],
    correct: 'E',
    explanation: `Gabarito: E. No fragmento de Clarice Lispector, o conectivo "mas" aparece duas vezes exercendo papéis discursivos diferentes conforme o contexto, não se restringindo a uma única ideia de oposição. Por isso, a alternativa correta é E: o conectivo assume funções discursivas distintas nos dois usos. As demais são incorretas: não expressa o mesmo conteúdo (A), não quebra a fluidez nem prejudica a compreensão (B), não ocupa posição fixa, podendo iniciar frase (C), e não indica sequência temporal rumo a uma conclusão (D).`,
    subject: ['por'],
    topics: ['Gramática (sintaxe, morfologia, semântica)', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 114,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `A Herança Cultural da Inquisição A Inquisição gerou uma série de comportamentos humanos defensivos na população da época, especialmente por ter perdurado na Espanha e em Portugal durante quase 300 anos, ou no mínimo quinze gerações. Embora a Inquisição tenha terminado há mais de um século, a pergunta que fiz a vários sociólogos, historiadores e psicólogos era se alguns desses comportamentos culturais não poderiam ter-se perpetuado entre nós. Na maioria, as respostas foram negativas, ou seja, embora alterasse sem dúvida o comportamento da época, nenhum comportamento permanece tanto tempo depois, sem reforço ou estímulo continuado. Não sou psicólogo nem sociólogo para discordar, mas tenho a impressão de que existem alguns comportamentos estranhos na sociedade brasileira, e que fazem sentido se você os considerar resquícios da era da Inquisição. [...] KANITZ, S. A Herança Cultural da Inquisição. In: Revista Veja . Ano 38, nº 5, 2 fev. 2005 (fragmento). Considerando-se o posicionamento do autor do fragmento a respeito de comportamentos humanos, o texto`,
    alternatives: [
      { id: 'A', type: 'text', value: `enfatiza a herança da Inquisição em comportamentos culturais observados em Portugal e na Espanha.` },
      { id: 'B', type: 'text', value: `contesta sociólogos, psicólogos e historiadores sobre a manutenção de comportamentos gerados pela Inquisição.` },
      { id: 'C', type: 'text', value: `contrapõe argumentos de historiadores e sociólogos a respeito de comportamentos culturais inquisidores.` },
      { id: 'D', type: 'text', value: `relativiza comportamentos originados na Inquisição e observados na sociedade brasileira.` },
      { id: 'E', type: 'text', value: `questiona a existência de comportamentos culturais brasileiros marcados pela herança da Inquisição.` },
    ],
    correct: 'B',
    explanation: `Gabarito: B. O autor relata que consultou sociólogos, historiadores e psicólogos sobre a persistência de comportamentos ligados à Inquisição e que a maioria respondeu negativamente; ele, porém, discorda, afirmando perceber resquícios desses comportamentos na sociedade brasileira. Ao se opor à posição desses especialistas, o texto contesta sociólogos, psicólogos e historiadores quanto à manutenção desses comportamentos, como diz B. As outras não traduzem o posicionamento: não enfatiza Portugal e Espanha (A), não contrapõe argumentos entre si (C), não relativiza (D) nem nega a existência dos comportamentos, que ele afirma existir (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Redação (estrutura e argumentação)', 'Questões aleatórias'],
  },
  {
    id: 115,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Resta saber o que ficou das línguas indígenas no português do Brasil. Serafim da Silva Neto afirma: “No português brasileiro não há, positivamente, influência das línguas africanas ou ameríndias”. Todavia, é difícil de aceitar que um longo período de bilinguismo de dois séculos não deixasse marcas no português do Brasil. ELIA, S. Fundamentos Histórico-Linguísticos do Português do Brasil . Rio de Janeiro: Lucerna, 2003 (adaptado). No final do século XVIII, no norte do Egito, foi descoberta a Pedra de Roseta, que continha um texto escrito em egípcio antigo, uma versão desse texto chamada “demótico”, e o mesmo texto escrito em grego. Até então, a antiga escrita egípcia não estava decifrada. O inglês Thomas Young estudou o objeto e fez algumas descobertas como, por exemplo, a direção em que a leitura deveria ser feita. Mais tarde, o francês Jean- François Champollion voltou a estudá-la e conseguiu decifrar a antiga escrita egípcia a partir do grego, provando que, na verdade, o grego era a língua original do texto e que o egípcio era uma tradução. Com base na leitura dos textos conclui-se, sobre as línguas, que cada língua é única e intraduzível. elementos de uma língua são preservados, ainda que não haja mais falantes dessa língua. a língua escrita de determinado grupo desaparece quando a sociedade que a produzia é extinta. o egípcio antigo e o grego apresentam a mesma estrutura gramatical, assim como as línguas`,
    alternatives: [
      { id: 'A', type: 'text', value: `cada língua é única e intraduzível.` },
      { id: 'B', type: 'text', value: `elementos de uma língua são preservados, ainda que não haja mais falantes dessa língua.` },
      { id: 'C', type: 'text', value: `a língua escrita de determinado grupo desaparece quando a sociedade que a produzia é extinta.` },
      { id: 'D', type: 'text', value: `o egípcio antigo e o grego apresentam a mesma estrutura gramatical, assim como as línguas indígenas brasileiras e o português do Brasil.` },
      { id: 'E', type: 'text', value: `o egípcio e o grego apresentavam letras e palavras similares, o que possibilitou a comparação linguística, o mesmo que aconteceu com as línguas indígenas brasileiras e o português do Brasil.` },
    ],
    correct: 'B',
    explanation: `Gabarito: B. O texto sobre a Pedra de Roseta mostra que elementos do egípcio antigo permaneceram registrados e puderam ser estudados mesmo sem falantes dessa língua; por analogia, as línguas indígenas teriam deixado marcas no português do Brasil. Conclui-se, portanto, que elementos de uma língua são preservados ainda que não haja mais falantes dela (B). As demais não se sustentam: a tradução da Pedra de Roseta contraria a ideia de língua única e intraduzível (A); não se afirma desaparecimento total da escrita (C), nem identidade de estrutura gramatical (D) ou semelhança de letras como base da comparação (E).`,
    subject: ['por'],
    topics: ['Variação linguística', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 116,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Machado de Assis Joaquim Maria Machado de Assis , cronista, contista, dramaturgo, jornalista, poeta, novelista, romancista, crítico e ensaísta, nasceu na cidade do Rio de Janeiro em 21 de junho de 1839. Filho de um operário mestiço de negro e português, Francisco José de Assis, e de D. Maria Leopoldina Machado de Assis, aquele que viria a tornar-se o maior escritor do país e um mestre da língua, perde a mãe muito cedo e é criado pela madrasta, Maria Inês, também mulata, que se dedica ao menino e o matricula na escola pública, única que frequentou o autodidata Machado de Assis. Disponível em: http://www.passeiweb.com. Acesso em: 1 maio 2009. Considerando os seus conhecimentos sobre os gêneros textuais, o texto citado constitui-se de`,
    alternatives: [
      { id: 'A', type: 'text', value: `fatos ficcionais, relacionados a outros de caráter realista, relativos à vida de um renomado escritor.` },
      { id: 'B', type: 'text', value: `representações generalizadas acerca da vida de membros da sociedade por seus trabalhos e vida cotidiana.` },
      { id: 'C', type: 'text', value: `explicações da vida de um renomado escritor, com estrutura argumentativa, destacando como tema seus principais feitos.` },
      { id: 'D', type: 'text', value: `questões controversas e fatos diversos da vida de personalidade histórica, ressaltando sua intimidade familiar em detrimento de seus feitos públicos.` },
      { id: 'E', type: 'text', value: `apresentação da vida de uma personalidade, organizada sobretudo pela ordem tipológica da narração, com um estilo marcado por linguagem objetiva.` },
    ],
    correct: 'E',
    explanation: `Gabarito: E. O texto citado é uma biografia de Machado de Assis: apresenta a vida do escritor (nascimento, origem, formação) em ordem predominantemente narrativa e com linguagem objetiva. Isso corresponde à alternativa E. As outras não caracterizam o gênero: não há fatos ficcionais (A), nem representações generalizadas de membros da sociedade (B); não é texto de estrutura argumentativa (C) nem foca questões controversas da intimidade em detrimento dos feitos públicos (D).`,
    subject: ['por'],
    topics: ['Gêneros textuais', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 117,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Soneto Já da morte o palor me cobre o rosto, Nos lábios meus o alento desfalece, Surda agonia o coração fenece, E devora meu ser mortal desgosto! Do leito embalde no macio encosto Tento o sono reter!... já esmorece O corpo exausto que o repouso esquece... Eis o estado em que a mágoa me tem posto! O adeus, o teu adeus, minha saudade, Fazem que insano do viver me prive E tenha os olhos meus na escuridade. Dá-me a esperança com que o ser mantive! Volve ao amante os olhos por piedade, Olhos por quem viveu quem já não vive! AZEVEDO, A. Obra completa . Rio de Janeiro: Nova Aguilar, 2000. O núcleo temático do soneto citado é típico da segunda geração romântica, porém configura um lirismo que o projeta para além desse momento específico. O fundamento desse lirismo é`,
    alternatives: [
      { id: 'A', type: 'text', value: `a angústia alimentada pela constatação da irreversibilidade da morte.` },
      { id: 'B', type: 'text', value: `a melancolia que frustra a possibilidade de reação diante da perda.` },
      { id: 'C', type: 'text', value: `o descontrole das emoções provocado pela autopiedade.` },
      { id: 'D', type: 'text', value: `o desejo de morrer como alívio para a desilusão amorosa.` },
      { id: 'E', type: 'text', value: `o gosto pela escuridão como solução para o sofrimento.` },
    ],
    correct: 'B',
    explanation: `Gabarito: B. O soneto, típico da segunda geração romântica, expressa um eu lírico tomado pela dor, pela saudade e pela proximidade da morte diante da perda amorosa. O fundamento desse lirismo é a melancolia que o paralisa, frustrando qualquer possibilidade de reação diante da perda, conforme a alternativa B. As demais deslocam o foco: não é a constatação da irreversibilidade da morte (A), nem o descontrole por autopiedade (C); não há desejo da morte como alívio da desilusão (D) nem gosto pela escuridão como solução (E).`,
    subject: ['lit'],
    topics: ['Escolas literárias', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 118,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Texto I
Logo depois transferiram para o trapiche o depósito
dos objetos que o trabalho do dia lhes proporcionava.
Estranhas coisas entraram então para o trapiche. Não
mais estranhas, porém, que aqueles meninos, moleques
de todas as cores e de idades as mais variadas, desde
as nove aos dezesseis anos, que à noite se estendiam pelo
assoalho e por debaixo da ponte e dormiam, indiferentes
ao vento que circundava o casarão uivando, indiferentes
à chuva que muitas vezes os lavava, mas com os olhos
puxados para as luzes dos navios, com os ouvidos
presos às canções que vinham das embarcações...
AMADO, J. Capitães da Areia. São Paulo: Companhia das Letras, 2008 (fragmento).
Texto II
À margem esquerda do rio Belém, nos fundos do mercado
de peixe, ergue-se o velho ingazeiro – ali os bêbados
são felizes. Curitiba os considera animais sagrados,
provê as suas necessidades de cachaça e pirão. No
trivial contentavam-se com as sobras do mercado.
TREVISAN, D. 35 noites de paixão: contos escolhidos. Rio de Janeiro: BestBolso, 2009 (fragmento).
Sob diferentes perspectivas, os fragmentos citados são
exemplos de uma abordagem literária recorrente na
literatura brasileira do século XX. Em ambos os textos,`,
    alternatives: [
      { id: 'A', type: 'text', value: `a linguagem afetiva aproxima os narradores dos personagens marginalizados.` },
      { id: 'B', type: 'text', value: `a ironia marca o distanciamento dos narradores em relação aos personagens.` },
      { id: 'C', type: 'text', value: `o detalhamento do cotidiano dos personagens revela a sua origem social.` },
      { id: 'D', type: 'text', value: `o espaço onde vivem os personagens é uma das marcas de sua exclusão.` },
      { id: 'E', type: 'text', value: `a crítica à indiferença da sociedade pelos marginalizados é direta.` },

    ],
    correct: 'D',
    explanation: `Gabarito: D. Tanto o fragmento de Jorge Amado (meninos de rua no trapiche, sob a ponte) quanto o de Trevisan (bêbados à margem do mercado) focalizam personagens marginalizados. A abordagem literária comum é mostrar que o espaço onde essas personagens vivem funciona como marca de sua exclusão social, o que corresponde a D. As outras não se aplicam a ambos: a linguagem não aproxima afetivamente narrador e personagens (A), não há ironia de distanciamento (B), o detalhamento do cotidiano não é o eixo (C) e não há crítica direta à sociedade (E).`,
    subject: ['lit'],
    topics: ['Literatura brasileira', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 119,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `A Internet que você faz Uma pequena invenção, a Wikipédia , mudou o jeito de lidarmos com informações na rede. Trata-se de uma enciclopédia virtual colaborativa, que é feita e atualizada por qualquer internauta que tenha algo a contribuir. Em resumo: é como se você imprimisse uma nova página para a publicação desatualizada que encontrou na biblioteca. Antigamente, quando precisávamos de alguma informação confiável, tínhamos a enciclopédia como fonte segura de pesquisa para trabalhos, estudos e pesquisa em geral. Contudo, a novidade trazida pela Wikipédia nos coloca em uma nova circunstância, em que não podemos confiar integralmente no que lemos. Por ter como lema principal a escritura coletiva, seus textos trazem informações que podem ser editadas e reeditadas por pessoas do mundo inteiro. Ou seja, a relevância da informação não é determinada pela tradição cultural, como nas antigas enciclopédias, mas pela dinâmica da mídia. Assim, questiona-se a possibilidade de serem encontradas informações corretas entre sabotagens deliberadas e contribuições erradas. NÉO, A. et al. A Internet que você faz. In: Revista PENSE ! Secretaria de Educação do Estado do Ceará. Ano 2, n°. 3, mar.-abr. 2010 (adaptado). As novas Tecnologias de Informação e Comunicação, como a Wikipédia , têm trazido inovações que impactaram significativamente a sociedade. A respeito desse assunto, o texto apresentado mostra que a falta de confiança na veracidade dos conteúdos registrados na Wikipédia acontece pelo fato de sua construção coletiva possibilitar a edição e reedição das informações por qualquer pessoa no mundo inteiro.`,
    alternatives: [
      { id: 'A', type: 'text', value: `acontece pelo fato de sua construção coletiva possibilitar a edição e reedição das informações por qualquer pessoa no mundo inteiro.` },
      { id: 'B', type: 'text', value: `limita a disseminação do saber, apesar do crescente número de acessos ao site que a abriga, por falta de legitimidade` },
      { id: 'C', type: 'text', value: `ocorre pela facilidade de acesso à página, o que torna a informação vulnerável, ou seja, pela dinâmica da mídia.` },
      { id: 'D', type: 'text', value: `ressalta a crescente busca das enciclopédias impressas para as pesquisas escolares.` },
      { id: 'E', type: 'text', value: `revela o desconhecimento do usuário, impedindo-o de formar um juízo de valor sobre as informações.` },
    ],
    correct: 'A',
    explanation: `Gabarito: A. O texto mostra que a Wikipédia é uma enciclopédia colaborativa, cujos conteúdos podem ser editados e reeditados por qualquer internauta do mundo. É justamente essa construção coletiva, aberta a alterações por qualquer pessoa, que gera a falta de confiança na veracidade das informações, como afirma A. As demais contrariam o texto: a Wikipédia amplia, e não limita, a disseminação do saber (B); o problema não está na facilidade de acesso (C); o texto não ressalta busca por enciclopédias impressas (D) nem atribui a questão ao desconhecimento do usuário (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 120,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `O voleibol é um dos esportes mais praticados na atualidade. Esta presente nas competições esportivas, nos jogos escolares e na recreação. Nesse esporte, os praticantes utilizam alguns movimentos específicos como: saque, manchete, bloqueio, levantamento, toque, entre outros. Na sequencia de imagens, identificam-se os movimentos de`,
    images: ['/enem/2010/images/enem_2010_d2_q120.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `sacar e colocar a bola em jogo, defender a bola e realizar a cortada como forma de ataque.` },
      { id: 'B', type: 'text', value: `arremessar a bola, tocar para passar a bola ao levantador e bloquear como forma de ataque.` },
      { id: 'C', type: 'text', value: `tocar e colocar a bola em jogo, cortar para defender e levantar a bola para atacar.` },
      { id: 'D', type: 'text', value: `passar a bola e iniciar a partida, lançar a bola ao levantador e realizar a manchete para defender.` },
      { id: 'E', type: 'text', value: `cortar como forma de ataque, passar a bola para defender e bloquear como forma de ataque.` },
    ],
    correct: 'A',
    explanation: `Gabarito: A. A sequência de imagens do voleibol representa, na ordem, o saque (colocar a bola em jogo), a defesa da bola (recepção/manchete) e a cortada como forma de ataque junto à rede. Essa correspondência confirma a alternativa A. As demais descrevem os movimentos de modo trocado ou impreciso: não há arremesso (B), a ordem de "tocar, cortar para defender" está invertida (C), e as sequências de D e E não correspondem aos gestos técnicos mostrados nas figuras.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 121,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `O presidente Lula assinou, em 29 de setembro de 2008, decreto sobre o Novo Acordo Ortográfico da Língua Portuguesa. As novas regras afetam principalmente o uso dos acentos agudo e circunflexo, do trema e do hífen. Longe de um consenso, muita polêmica tem-se levantado em Macau e nos oito países de língua portuguesa: Brasil, Angola, Cabo Verde, Guiné-Bissau, Moçambique, Portugal, São Tomé e Príncipe e Timor Leste. Comparando as diferentes opiniões sobre a validade de se estabelecer o acordo para fins de unificação, o argumento que, em grande parte, foge a essa discussão é “A Academia (Brasileira de Letras) encara essa aprovação como um marco histórico. Inscreve-se, finalmente, a Língua Portuguesa no rol daquelas que conseguiram beneficiar-se há mais tempo da unificação de seu sistema de grafar, numa demonstração de consciência da política do idioma e de maturidade na defesa, difusão e ilustração da língua da Lusofonia.” SANDRONI, C. Presidente da ABL. Disponível em: http://www.academia.org.br. Acesso em: 10 nov. 2008. “Acordo ortográfico? Não, obrigado. Sou contra. Visceralmente contra. Filosoficamente contra. Linguisticamente contra. Eu gosto do “c” do “actor” e o “p” de “cepticismo”. Representam um património, uma pegada etimológica que faz parte de uma identidade cultural. A pluralidade é um valor que deve ser estudado e respeitado. Aceitar essa aberração significa apenas que a irmandade entre Portugal e o Brasil continua a ser a irmandade do atraso.” COUTINHO, J. P. Folha de São Paulo. Ilustrada. 28 set.2008, E1 (adaptado). “Há um conjunto de necessidades políticas e econômicas com vista à internacionalização do português como identidade e marca econômica.” “É possível que o (Fernando) Pessoa, como produto de exportação, valha mais do que a PT (Portugal Telecom). Tem um valor econômico único.” RIBEIRO, J. A. P. Ministro da Cultura de Portugal. Disponível em: http://ultimahora.publico.clix.pt. Acesso em: 10 nov. 2008. “É um acto cívico batermo-nos contra o Acordo Ortográfico.” “O acordo não leva a unidade nenhuma.” “Não se pode aplicar na ordem interna um instrumento que não está aceito internacionalmente” e nem assegura “a defesa da língua como património, como prevê a Constituição nos artigos 9º e 68º.” MOURA, V. G. Escritor e eurodeputado. Disponível em: www.mundoportugues.org. Acesso em: 10 nov. 2008. “Se é para ter uma lusofonia, o conceito [unificação da língua] deve ser mais abrangente e temos de estar em paridade. Unidade não significa que temos que andar todos ao mesmo passo. Não é necessário que nos tornemos homogéneos. Até porque o que enriquece a língua portuguesa são as diversas literaturas e formas de utilização.” RODRIGUES, M. H. Presidente do Instituto Português do Oriente, sediado em Macau. Disponível em: http://taichungpou.blogspot.com. Acesso em: 10 nov. 2008 (adaptado).`,
    alternatives: [
      { id: 'A', type: 'text', value: `“A Academia (Brasileira de Letras) encara essa aprovação como um marco histórico. Inscreve-se, finalmente, a Língua Portuguesa no rol daquelas que conseguiram beneficiar-se há mais tempo da unificação de seu sistema de grafar, numa demonstração de consciência da política do idioma e de maturidade na defesa, difusão e ilustração da língua da Lusofonia.” SANDRONI, C. Presidente da ABL.` },
      { id: 'B', type: 'text', value: `“Acordo ortográfico? Não, obrigado. Sou contra. Visceralmente contra. Filosoficamente contra. Linguisticamente contra. Eu gosto do “c” do “actor” e o “p” de “cepticismo”. Representam um património, uma pegada etimológica que faz parte de uma identidade cultural. A pluralidade é um valor que deve ser estudado e respeitado. Aceitar essa aberração significa apenas que a irmandade entre Portugal e o Brasil continua a ser a irmandade do atraso.” COUTINHO, J. P. Folha de São Paulo.` },
      { id: 'C', type: 'text', value: `“Há um conjunto de necessidades políticas e econômicas com vista à internacionalização do português como identidade e marca econômica.” “É possível que o (Fernando) Pessoa, como produto de exportação, valha mais do que a PT (Portugal Telecom). Tem um valor econômico único.” RIBEIRO, J. A. P. Ministro da Cultura de Portugal.` },
      { id: 'D', type: 'text', value: `“É um acto cívico batermo-nos contra o Acordo Ortográfico.” “O acordo não leva a unidade nenhuma.” “Não se pode aplicar na ordem interna um instrumento que não está aceito internacionalmente” e nem assegura “a defesa da língua como património, como prevê a Constituição nos artigos 9º e 68º.” MOURA, V. G. Escritor e eurodeputado.` },
      { id: 'E', type: 'text', value: `“Se é para ter uma lusofonia, o conceito [unificação da língua] deve ser mais abrangente e temos de estar em paridade. Unidade não significa que temos que andar todos ao mesmo passo. Não é necessário que nos tornemos homogéneos. Até porque o que enriquece a língua portuguesa são as diversas literaturas e formas de utilização.” RODRIGUES, M. H. Presidente do Instituto Português do Oriente, sediado em Macau.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. A questão pede o argumento que, ao discutir o Acordo Ortográfico, foge ao tema da validade da unificação da língua. A fala atribuída a Ribeiro trata das necessidades políticas e econômicas de internacionalização do português como marca econômica e valor de exportação, deslocando-se da discussão ortográfica, o que justifica C. As demais permanecem no tema da unificação: a ABL a vê como marco (A), Coutinho é contra em nome do patrimônio etimológico (B), Moura questiona a unidade (D) e Rodrigues defende uma lusofonia que respeite a diversidade (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Redação (estrutura e argumentação)', 'Questões aleatórias'],
  },
  {
    id: 122,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Texto I O chamado “fumante passivo” é aquele indivíduo que não fuma, mas acaba respirando a fumaça dos cigarros fumados ao seu redor. Até hoje, discutem-se muito os efeitos do fumo passivo, mas uma coisa é certa: quem não fuma não é obrigado a respirar a fumaça dos outros. O fumo passivo é um problema de saúde pública em todos os países do mundo. Na Europa, estima-se que 79% das pessoas estão expostas à fumaça “de segunda mão”, enquanto, nos Estados Unidos, 88% dos não fumantes acabam fumando passivamente. A Sociedade do Câncer da Nova Zelândia informa que o fumo passivo é a terceira entre as principais causas de morte no país, depois do fumo ativo e do uso de álcool. Disponível em: www.terra.com.br. Acesso em: 27 abr. 2010 (fragmento). Texto II Disponível em:http://rickjaimecomics.blogspot.com. Acesso em: 27 abr.2010. Ao abordar a questão do tabagismo, os textos I e II procuram demonstrar que`,
    images: ['/enem/2010/images/enem_2010_d2_q122.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a quantidade de cigarros consumidos por pessoa, diariamente, excede o máximo de nicotina recomendado para os indivíduos, inclusive para os não fumantes.` },
      { id: 'B', type: 'text', value: `para garantir o prazer que o indivíduo tem ao fumar, será necessário aumentar as estatísticas de fumo passivo.` },
      { id: 'C', type: 'text', value: `a conscientização dos fumantes passivos é uma maneira de manter a privacidade de cada indivíduo e garantir a saúde de todos.` },
      { id: 'D', type: 'text', value: `os não fumantes precisam ser respeitados e poupados, pois estes também estão sujeitos às doenças causadas pelo tabagismo.` },
      { id: 'E', type: 'text', value: `o fumante passivo não é obrigado a inalar as mesmas toxinas que um fumante, portanto depende dele evitar ou não a contaminação proveniente da exposição ao fumo.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. O Texto I informa que o fumo passivo é problema de saúde pública e causa de mortes, e a charge do Texto II mostra o incômodo de quem não fuma diante da fumaça alheia. Juntos, os textos procuram demonstrar que os não fumantes precisam ser respeitados e poupados, pois também estão sujeitos às doenças do tabagismo, como diz D. As outras não traduzem o propósito comum: não tratam de quantidade máxima de nicotina (A), de aumentar estatísticas (B), de privacidade (C) nem de depender do próprio não fumante evitar a exposição (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Intertextualidade', 'Questões aleatórias'],
  },
  {
    id: 123,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `“Todas as manhãs quando acordo, experimento um prazer supremo: o de ser Salvador Dalí.” NÉRET, G. Salvador Dali . Taschen, 1996. Assim escreveu o pintor dos “relógios moles” e das “girafas em chamas” em 1931. Esse artista excêntrico deu apoio ao general Franco durante a Guerra Civil Espanhola e, por esse motivo, foi afastado do movimento surrealista por seu líder, André Breton. Dessa forma, Dalí criou seu próprio estilo, baseado na interpretação dos sonhos e nos estudos de Sigmund Freud, denominado “método de interpretação paranoico”. Esse método era constituído por textos visuais que demonstram imagens do fantástico, impregnado de civismo pelo governo espanhol, em que a busca pela emoção e pela dramaticidade desenvolveram um estilo incomparável. do onírico, que misturava sonho com realidade e interagia refletindo a unidade entre o consciente e o inconsciente como um universo único ou pessoal. da linha inflexível da razão, dando vazão a uma forma de produção despojada no traço, na temática e nas formas vinculadas ao real. do reflexo que, apesar do termo “paranoico”, possui`,
    alternatives: [
      { id: 'A', type: 'text', value: `do fantástico, impregnado de civismo pelo governo espanhol, em que a busca pela emoção e pela dramaticidade desenvolveram um estilo incomparável.` },
      { id: 'B', type: 'text', value: `do onírico, que misturava sonho com realidade e interagia refletindo a unidade entre o consciente e o inconsciente como um universo único ou pessoal.` },
      { id: 'C', type: 'text', value: `da linha inflexível da razão, dando vazão a uma forma de produção despojada no traço, na temática e nas formas vinculadas ao real.` },
      { id: 'D', type: 'text', value: `do reflexo que, apesar do termo “paranoico”, possui sobriedade e elegância advindas de uma técnica de cores discretas e desenhos precisos.` },
      { id: 'E', type: 'text', value: `da expressão e intensidade entre o consciente e a liberdade, declarando o amor pela forma de conduzir o enredo histórico dos personagens retratados.` },
    ],
    correct: 'B',
    explanation: `Gabarito: B. O texto descreve o método paranoico-crítico de Salvador Dalí, ligado ao Surrealismo, aos sonhos e aos estudos de Freud, criando imagens que misturam sonho e realidade. Essas imagens são do onírico, que funde sonho e realidade refletindo a unidade entre consciente e inconsciente como um universo pessoal, o que corresponde a B. As demais destoam do surrealismo daliniano: não há civismo a serviço do governo (A), nem linha racional e inflexível (C); não se trata de sobriedade e cores discretas (D) nem de amor à forma histórica dos personagens (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 124,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Choque a 36 000 km/h A faixa que vai de 160 quilômetros de altitude em volta da terra assemelha-se a uma avenida congestionada onde orbitam 3 000 satélites ativos. Eles disputam espaço com 17 000 fragmentos de artefatos lançados pela Terra e que se desmancharam - foguetes, satélites desativados e até ferramentas perdidas por astronautas. Com um tráfego celeste tão intenso, era questão de tempo para que acontecesse um acidente de grandes proporções, como o da semana passada. Na terça-feira, dois satélites em órbita desde os anos 90 colidiram em um ponto 790 quilômetros acima da Sibéria. A trombada dos satélites chama a atenção para os riscos que oferece a montanha de lixo espacial em órbita. Como os objetos viajam a grande velocidade, mesmo um pequeno fragmento de 10 centímetros poderia causar estragos consideráveis no telescópio Hubble ou na estação espacial Internacional - nesse caso pondo em risco a vida dos astronautas que lá trabalham. Revista Veja . 18 set. 2009 (adaptado). Levando-se em consideração os elementos constitutivos de um texto jornalístico, infere-se que o autor teve como objetivo exaltar o emprego da linguagem figurada. criar suspense e despertar temor no leitor. influenciar a opinião dos leitores sobre o tema, com as marcas argumentativas de seu posicionamento. induzir o leitor a pensar que os satélites artificiais representam um grande perigo para toda a humanidade. exercitar a ironia ao empregar “avenida congestionada”; “tráfego celeste tão intenso”; “montanha de lixo”. Texto para as questões 125 e 126 A carreira do crime Estudo feito por pesquisadores da Fundação Oswaldo Cruz sobre adolescentes recrutados pelo tráfico de drogas nas favelas cariocas expõe as bases sociais dessas quadrilhas, contribuindo para explicar as dificuldades que o Estado enfrenta no combate ao crime organizado. O tráfico oferece aos jovens de escolaridade precária (nenhum dos entrevistados havia completado o ensino fundamental) um plano de carreira bem estruturado, com salários que variam de R$ 400,00 a R$ 12.000 mensais. Para uma base de comparação, convém notar que, segundo dados do IBGE de 2001, 59% da população brasileira com mais de dez anos que declara ter uma atividade remunerada ganha no máximo o ‘piso salarial’ oferecido pelo crime. Dos traficantes ouvidos pela pesquisa, 25% recebiam mais de R$ 2.000 mensais; já na população brasileira essa taxa não ultrapassa 6%. Tais rendimentos mostram que as políticas sociais compensatórias, como o Bolsa-Escola (que paga R$ 15 mensais por aluno matriculado), são por si só incapazes de impedir que o narcotráfico continue aliciando crianças provenientes de estratos de baixa renda: tais políticas aliviam um pouco o orçamento familiar e incentivam os pais a manterem os filhos estudando, o que de modo algum impossibilita a opção pela deliquência. No mesmo sentido, os programas voltados aos jovens vulneráveis ao crime organizado (circo-escolas, oficinas de cultura, escolinhas de futebol) são importantes, mas não resolvem o problema. A única maneira de reduzir a atração exercida pelo tráfico é a repressão, que aumenta os riscos para os que escolhem esse caminho. Os rendimentos pagos aos adolescentes provam isso: eles são elevados precisamente porque a possibilidade de ser preso não`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `exaltar o emprego da linguagem figurada.` },
      { id: 'B', type: 'text', value: `criar suspense e despertar temor no leitor.` },
      { id: 'C', type: 'text', value: `influenciar a opinião dos leitores sobre o tema, com as marcas argumentativas de seu posicionamento.` },
      { id: 'D', type: 'text', value: `induzir o leitor a pensar que os satélites artificiais representam um grande perigo para toda a humanidade.` },
      { id: 'E', type: 'text', value: `exercitar a ironia ao empregar “avenida congestionada”; “tráfego celeste tão intenso”; “montanha de lixo”.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. A reportagem sobre o lixo espacial emprega expressões figuradas e avaliativas — "avenida congestionada", "tráfego celeste tão intenso", "montanha de lixo" — que revelam o posicionamento do autor sobre o risco dos detritos em órbita. Esse uso de marcas argumentativas indica que o objetivo é influenciar a opinião dos leitores sobre o tema, como afirma C. As outras são parciais ou equivocadas: não se limita a exaltar a linguagem figurada (A), a criar suspense (B), a induzir uma única conclusão sobre satélites artificiais (D) ou a exercitar ironia (E), que não é o foco do texto.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 125,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Texto para as questões 125 e 126
A carreira do crime
Estudo feito por pesquisadores da Fundação Oswaldo Cruz sobre adolescentes recrutados pelo tráfico de drogas nas favelas cariocas expõe as bases sociais dessas quadrilhas, contribuindo para explicar as dificuldades que o Estado enfrenta no combate ao crime organizado.
O tráfico oferece aos jovens de escolaridade precária (nenhum dos entrevistados havia completado o ensino fundamental) um plano de carreira bem estruturado, com salários que variam de R$ 400,00 a R$ 12.000 mensais. Para uma base de comparação, convém notar que, segundo dados do IBGE de 2001, 59% da população brasileira com mais de dez anos que declara ter uma atividade remunerada ganha no máximo o 'piso salarial' oferecido pelo crime. Dos traficantes ouvidos pela pesquisa, 25% recebiam mais de R$ 2.000 mensais; já na população brasileira essa taxa não ultrapassa 6%.
Tais rendimentos mostram que as políticas sociais compensatórias, como o Bolsa-Escola (que paga R$ 15 mensais por aluno matriculado), são por si só incapazes de impedir que o narcotráfico continue aliciando crianças provenientes de estratos de baixa renda: tais políticas aliviam um pouco o orçamento familiar e incentivam os pais a manterem os filhos estudando, o que de modo algum impossibilita a opção pela delinquência. No mesmo sentido, os programas voltados aos jovens vulneráveis ao crime organizado (circo-escolas, oficinas de cultura, escolinhas de futebol) são importantes, mas não resolvem o problema.
A única maneira de reduzir a atração exercida pelo tráfico é a repressão, que aumenta os riscos para os que escolhem esse caminho. Os rendimentos pagos aos adolescentes provam isso: eles são elevados precisamente porque a possibilidade de ser preso não é desprezível. É preciso que o Executivo federal e os estaduais desmontem as organizações paralelas erguidas pelas quadrilhas, para que a certeza de punição elimine o fascínio dos salários do crime.
Editorial. Folha de São Paulo. 15 jan. 2003.
Com base nos argumentos do autor, o texto aponta para`,
    alternatives: [
      { id: 'A', type: 'text', value: `uma denúncia de quadrilhas que se organizam em torno do narcotráfico.` },
      { id: 'B', type: 'text', value: `a constatação de que o narcotráfico restringe-se aos centros urbanos.` },
      { id: 'C', type: 'text', value: `a informação de que as políticas sociais compensatórias eliminarão a atividade criminosa a longo prazo.` },
      { id: 'D', type: 'text', value: `o convencimento do leitor de que para haver a superação do problema do narcotráfico é preciso aumentar a ação policial.` },
      { id: 'E', type: 'text', value: `uma exposição numérica realizada com o fim de mostrar que o negócio do narcotráfico é vantajoso e sem riscos.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. O editorial argumenta que os altos salários do tráfico tornam as políticas sociais compensatórias insuficientes e conclui que a única forma de reduzir a atração do crime é a repressão, que aumenta os riscos de quem o escolhe. Assim, o texto busca convencer o leitor de que a superação do problema exige o aumento da ação policial, como diz D. As demais não captam a tese: não é simples denúncia de quadrilhas (A), não restringe o tráfico aos centros urbanos (B), não afirma que as políticas sociais eliminarão o crime (C) e a exposição numérica é meio, não o ponto central (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Redação (estrutura e argumentação)', 'Questões aleatórias'],
  },
  {
    id: 126,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Texto para as questões 125 e 126
A carreira do crime
Estudo feito por pesquisadores da Fundação Oswaldo Cruz sobre adolescentes recrutados pelo tráfico de drogas nas favelas cariocas expõe as bases sociais dessas quadrilhas, contribuindo para explicar as dificuldades que o Estado enfrenta no combate ao crime organizado.
O tráfico oferece aos jovens de escolaridade precária (nenhum dos entrevistados havia completado o ensino fundamental) um plano de carreira bem estruturado, com salários que variam de R$ 400,00 a R$ 12.000 mensais. Para uma base de comparação, convém notar que, segundo dados do IBGE de 2001, 59% da população brasileira com mais de dez anos que declara ter uma atividade remunerada ganha no máximo o 'piso salarial' oferecido pelo crime. Dos traficantes ouvidos pela pesquisa, 25% recebiam mais de R$ 2.000 mensais; já na população brasileira essa taxa não ultrapassa 6%.
Tais rendimentos mostram que as políticas sociais compensatórias, como o Bolsa-Escola (que paga R$ 15 mensais por aluno matriculado), são por si só incapazes de impedir que o narcotráfico continue aliciando crianças provenientes de estratos de baixa renda: tais políticas aliviam um pouco o orçamento familiar e incentivam os pais a manterem os filhos estudando, o que de modo algum impossibilita a opção pela delinquência. No mesmo sentido, os programas voltados aos jovens vulneráveis ao crime organizado (circo-escolas, oficinas de cultura, escolinhas de futebol) são importantes, mas não resolvem o problema.
A única maneira de reduzir a atração exercida pelo tráfico é a repressão, que aumenta os riscos para os que escolhem esse caminho. Os rendimentos pagos aos adolescentes provam isso: eles são elevados precisamente porque a possibilidade de ser preso não é desprezível. É preciso que o Executivo federal e os estaduais desmontem as organizações paralelas erguidas pelas quadrilhas, para que a certeza de punição elimine o fascínio dos salários do crime.
Editorial. Folha de São Paulo. 15 jan. 2003.
No Editorial, o autor defende a tese de que “as políticas sociais que procuram evitar a entrada dos jovens no tráfico não terão chance de sucesso enquanto a remuneração oferecida pelos traficantes for tão mais compensatória que aquela oferecida pelos programas do governo”. Para comprovar sua tese, o autor apresenta`,
    alternatives: [
      { id: 'A', type: 'text', value: `instituições que divulgam o crescimento de jovens no crime organizado.` },
      { id: 'B', type: 'text', value: `sugestões que ajudam a reduzir a atração exercida pelo crime organizado.` },
      { id: 'C', type: 'text', value: `políticas sociais que impedem o aliciamento de crianças no crime organizado.` },
      { id: 'D', type: 'text', value: `pesquisadores que se preocupam com os jovens envolvidos no crime organizado.` },
      { id: 'E', type: 'text', value: `números que comparam os valores pagos entre os programas de governo e o crime organizado.` },
    ],
    correct: 'E',
    explanation: `Gabarito: E. Para sustentar a tese de que as políticas sociais fracassam enquanto a remuneração do tráfico for mais vantajosa, o autor recorre a dados que comparam valores: salários de R$ 400 a R$ 12.000 no tráfico frente aos R$ 15 do Bolsa-Escola, além de percentuais de renda da população. Esse confronto de números entre os programas de governo e o crime organizado comprova a tese, justificando E. As demais não correspondem ao recurso usado: não cita instituições de divulgação (A), não oferece sugestões (B), não aponta políticas que impedem o aliciamento (C) nem recorre à preocupação de pesquisadores como prova (D).`,
    subject: ['por'],
    topics: ['Redação (estrutura e argumentação)', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 127,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Venho solicitar a clarividente atenção de Vossa Excelência para que seja conjurada uma calamidade que está prestes a desabar em cima da juventude feminina do Brasil. Refiro-me, senhor presidente, ao movimento entusiasta que está empolgando centenas de moças, atraindo-as para se transformarem em jogadoras de futebol, sem se levar em conta que a mulher não poderá praticar este esporte violento sem afetar, seriamente, o equilíbrio fisiológico das suas funções orgânicas, devido à natureza que dispôs a ser mãe. Ao que dizem os jornais, no Rio de Janeiro, já estão formados nada menos de dez quadros femininos. Em São Paulo e Belo Horizonte também já estão se constituindo outros. E, neste crescendo, dentro de um ano, é provável que em todo o Brasil estejam organizados uns 200 clubes femininos de futebol: ou seja: 200 núcleos destroçados da saúde de 2,2 mil futuras mães, que, além do mais, ficarão presas a uma mentalidade depressiva e propensa aos exibicionismos rudes e extravagantes. Coluna Pênalti. Carta Capital . 28 abr. 2010. O trecho é parte de uma carta de um cidadão brasileiro, José Fuzeira, encaminhada, em abril de 1940, ao então presidente da República Getúlio Vargas. As opções linguísticas de mostram que seu texto foi elaborado em linguagem Fuzeira regional, adequada à troca de informações na situação apresentada. jurídica, exigida pelo tema relacionado ao domínio do futebol. coloquial, considerando-se que ele era um cidadão`,
    alternatives: [
      { id: 'A', type: 'text', value: `regional, adequada à troca de informações na situação apresentada.` },
      { id: 'B', type: 'text', value: `jurídica, exigida pelo tema relacionado ao domínio do futebol.` },
      { id: 'C', type: 'text', value: `coloquial, considerando-se que ele era um cidadão brasileiro comum.` },
      { id: 'D', type: 'text', value: `culta, adequando-se ao seu interlocutor e à situação de comunicação.` },
      { id: 'E', type: 'text', value: `informal, pressupondo o grau de escolaridade de seu interlocutor.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. O trecho é parte de uma carta formal dirigida, em 1940, ao presidente Getúlio Vargas, com vocabulário rebuscado e tom solene ("clarividente atenção de Vossa Excelência"). As escolhas linguísticas de Fuzeira revelam linguagem culta, adequada ao interlocutor e à situação de comunicação, o que corresponde a D. As outras não se aplicam: não é linguagem regional (A), jurídica (B), coloquial (C) nem informal (E), registros incompatíveis com a formalidade exigida ao se dirigir ao chefe de Estado.`,
    subject: ['por'],
    topics: ['Variação linguística', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 128,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Capítulo III Um criado trouxe o café. Rubião pegou na xícara e, enquanto lhe deitava açúcar, ia disfarçadamente mirando a bandeja, que era de prata lavrada. Prata, ouro, eram os metais que amava de coração; não gostava de bronze, mas o amigo Palha disse-lhe que era matéria de preço, e assim se explica este par de figuras que aqui está na sala: um Mefistófeles e um Fausto. Tivesse, porém, de escolher, escolheria a bandeja, - primor de argentaria, execução fina e acabada. O criado esperava teso e sério. Era espanhol; e não foi sem resistência que Rubião o aceitou das mãos de Cristiano; por mais que lhe dissesse que estava acostumado aos seus crioulos de Minas, e não queria línguas estrangeiras em casa, o amigo Palha insistiu, demonstrando-lhe a necessidade de ter criados brancos. Rubião cedeu com pena. O seu bom pajem, que ele queria pôr na sala, como um pedaço da província, nem o pôde deixar na cozinha, onde reinava um francês, Jean; foi degradado a outros serviços. ASSIS, M. Quincas Borba. In: Obra completa. V.1. Rio de Janeiro: Nova Aguilar, 1993 (fragmento). Quincas Borba situa-se entre as obras-primas do autor e da literatura brasileira. No fragmento apresentado, a peculiaridade do texto que garante a universalização de sua abordagem reside`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `no conflito entre o passado pobre e o presente rico, que simboliza o triunfo da aparência sobre a essência.` },
      { id: 'B', type: 'text', value: `no sentimento de nostalgia do passado devido à substituição da mão de obra escrava pela dos imigrantes.` },
      { id: 'C', type: 'text', value: `na referência a Fausto e Mefistófeles, que representam o desejo de eternização de Rubião.` },
      { id: 'D', type: 'text', value: `na admiração dos metais por parte de Rubião, que metaforicamente representam a durabilidade dos bens produzidos pelo trabalho.` },
      { id: 'E', type: 'text', value: `na resistência de Rubião aos criados estrangeiros, que reproduz o sentimento de xenofobia.` },
    ],
    correct: 'A',
    explanation: `Gabarito: A. No fragmento de "Quincas Borba", Rubião, recém-enriquecido, valoriza os metais preciosos e as aparências, revelando a oposição entre seu passado pobre e o presente rico. A peculiaridade que universaliza a abordagem está nesse conflito, que simboliza o triunfo da aparência sobre a essência, tema humano e atemporal, conforme A. As demais são aspectos secundários ou incorretos: não há nostalgia pela mão de obra escrava (B); a referência a Fausto e Mefistófeles não garante a universalização (C); e não se trata de valorização dos metais como durabilidade do trabalho (D) nem de xenofobia (E).`,
    subject: ['lit'],
    topics: ['Literatura brasileira', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 129,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Negrinha
Negrinha era uma pobre órfã de sete anos. Preta? Não; fusca, mulatinha escura, de cabelos ruços e olhos assustados.
Nascera na senzala, de mãe escrava, e seus primeiros anos vivera-os pelos cantos escuros da cozinha, sobre
velha esteira e trapos imundos. Sempre escondida, que a patroa não gostava de crianças.
Excelente senhora, a patroa. Gorda, rica, dona do mundo, amimada dos padres, com lugar certo na igreja
e camarote de luxo reservado no céu. Entaladas as banhas no trono (uma cadeira de balanço na sala de
jantar), ali bordava, recebia as amigas e o vigário, dando audiências, discutindo o tempo. Uma virtuosa senhora
em suma – "dama de grandes virtudes apostólicas, esteio da religião e da moral", dizia o reverendo.
Ótima, a dona Inácia.
Mas não admitia choro de criança. Ai! Punha-lhe os nervos em carne viva.
[...]
A excelente dona Inácia era mestra na arte de judiar de crianças. Vinha da escravidão, fora senhora de escravos
– e daquelas ferozes, amigas de ouvir cantar o bolo e estalar o bacalhau. Nunca se afizera ao regime novo –
essa indecência de negro igual.
LOBATO, M. Negrinha. In: MORICONE, I. Os cem melhores contos brasileiros do século.
Rio de Janeiro: Objetiva, 2000 (fragmento).
A narrativa focaliza um momento histórico-social de valores contraditórios. Essa contradição infere-se, no
contexto, pela`,
    alternatives: [
      { id: 'A', type: 'text', value: `falta de aproximação entre a menina e a senhora, preocupada com as amigas.` },
      { id: 'B', type: 'text', value: `receptividade da senhora para com os padres, mas deselegante para com as beatas.` },
      { id: 'C', type: 'text', value: `ironia do padre a respeito da senhora, que era perversa com as crianças.` },
      { id: 'D', type: 'text', value: `resistência da senhora em aceitar a liberdade dos negros, evidenciada no final do texto.` },
      { id: 'E', type: 'text', value: `rejeição aos criados por parte da senhora, que preferia tratá-los com castigos.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. O conto "Negrinha", de Monteiro Lobato, situa-se no período pós-abolição e expõe a contradição entre a devoção religiosa da senhora e sua crueldade com a menina negra. Essa contradição histórico-social se evidencia na resistência de dona Inácia em aceitar a liberdade dos negros, explicitada no fim do fragmento ("nunca se afizera ao regime novo – essa indecência de negro igual"), o que corresponde a D. As outras não apontam o cerne da contradição: aproximação entre menina e senhora (A), relação com padres e beatas (B), ironia do padre (C) ou mera rejeição aos criados (E).`,
    subject: ['lit'],
    topics: ['Literatura brasileira', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 130,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `O Flamengo começou a partida no ataque, enquanto o Botafogo procurava fazer uma forte marcação no meio campo e tentar lançamentos para Victor Simões, isolado entre os zagueiros rubro-negros. Mesmo com mais posse de bola, o time dirigido por Cuca tinha grande dificuldade de chegar à área alvinegra por causa do bloqueio montado pelo Botafogo na frente da sua área.
No entanto, na primeira chance rubro-negra, saiu o gol. Após cruzamento da direita de Ibson, a zaga alvinegra rebateu a bola de cabeça para o meio da área. Kléberson apareceu na jogada e cabeceou por cima do goleiro Renan. Ronaldo Angelim apareceu nas costas da defesa e empurrou para o fundo da rede quase que em cima da linha: Flamengo 1 a 0.
Disponível em: http://momentodofutebol.blogspot.com (adaptado).
O texto, que narra uma parte do jogo final do Campeonato Carioca de futebol, realizado em 2009, contém vários conectivos, sendo que`,
    alternatives: [
      { id: 'A', type: 'text', value: `após é conectivo de causa, já que apresenta o motivo de a zaga alvinegra ter rebatido a bola de cabeça.` },
      { id: 'B', type: 'text', value: `enquanto tem um significado alternativo, porque conecta duas opções possíveis para serem aplicadas no jogo.` },
      { id: 'C', type: 'text', value: `no entanto tem significado de tempo, porque ordena os fatos observados no jogo em ordem cronológica de ocorrência.` },
      { id: 'D', type: 'text', value: `mesmo traz ideia de concessão, já que “com mais posse de bola”, ter dificuldade não é algo naturalmente esperado.` },
      { id: 'E', type: 'text', value: `por causa de indica consequência, porque as tentativas de ataque do Flamengo motivaram o Botafogo a fazer um bloqueio.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. O texto narra um jogo de futebol usando vários conectivos, e a questão pede a análise correta de um deles. Em "Mesmo com mais posse de bola, o time tinha grande dificuldade", "mesmo" expressa concessão, pois ter mais posse de bola não torna esperada a dificuldade, confirmando D. As outras análises estão erradas: "após" indica tempo, não causa (A); "enquanto" marca simultaneidade, não alternância (B); "no entanto" exprime oposição, não tempo (C); e "por causa de" indica causa, não consequência (E).`,
    subject: ['por'],
    topics: ['Gramática (sintaxe, morfologia, semântica)', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 131,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Após estudar na Europa, Anita Malfatti retornou ao Brasil com uma mostra que abalou a cultura nacional do início do
século XX. Elogiada por seus mestres na Europa, Anita se considerava pronta para mostrar seu trabalho no Brasil, mas
enfrentou as duras críticas de Monteiro Lobato. Com a intenção de criar uma arte que valorizasse a cultura brasileira,
Anita Malfatti e outros artistas modernistas`,
    alternatives: [
      { id: 'A', type: 'text', value: `buscaram libertar a arte brasileira das normas acadêmicas europeias, valorizando as cores, a originalidade e os
temas nacionais.` },
      { id: 'B', type: 'text', value: `defenderam a liberdade limitada de uso da cor, até então utilizada de forma irrestrita, afetando a criação artística
nacional.` },
      { id: 'C', type: 'text', value: `representaram a ideia de que a arte deveria copiar fielmente a natureza, tendo como finalidade a prática educativa.` },
      { id: 'D', type: 'text', value: `mantiveram de forma fiel a realidade nas figuras retratadas, defendendo uma liberdade artística ligada à tradição
acadêmica.` },
      { id: 'E', type: 'text', value: `buscaram a liberdade na composição de suas figuras, respeitando limites de temas abordados.` },

    ],
    correct: 'A',
    explanation: `Gabarito: A. O enunciado situa Anita Malfatti e o Modernismo brasileiro, que reagiu às críticas conservadoras e buscou renovar a arte nacional. Os modernistas procuraram libertar a arte brasileira das normas acadêmicas europeias, valorizando as cores, a originalidade e os temas nacionais, como afirma A. As demais contrariam o ideário modernista: não defendiam liberdade limitada da cor (B), não pregavam a cópia fiel da natureza (C), não mantinham fidelidade à tradição acadêmica (D) nem aceitavam limites rígidos de temas (E).`,
    subject: ['lit'],
    topics: ['Escolas literárias', 'Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 132,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Segundo pesquisas recentes, é irrelevante a diferença entre sexos para se avaliar a inteligência. Com relação às tendências para áreas do conhecimento, por sexo, levando em conta a matrícula em cursos universitários brasileiros, as informações do gráfico asseguram que os homens estão matriculados em menor proporção em cursos de Matemática que em Medicina por lidarem melhor com pessoas. as mulheres estão matriculadas em maior percentual em cursos que exigem capacidade de compreensão dos seres humanos. as mulheres estão matriculadas em percentual maior em Física que em Mineração por tenderem a trabalhar melhor com abstrações. as homens e as mulheres estão matriculados na mesma proporção em cursos que exigem habilidades semelhantes`,
    images: ['/enem/2010/images/enem_2010_d2_q132.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `os homens estão matriculados em menor proporção em melhor com pessoas.` },
      { id: 'B', type: 'text', value: `as mulheres estão matriculadas em maior percentual em seres humanos.` },
      { id: 'C', type: 'text', value: `as mulheres estão matriculadas em percentual maior em Física com abstrações.` },
      { id: 'D', type: 'text', value: `as homens e as mulheres estão matriculados na mesma proporção na mesma área.` },
      { id: 'E', type: 'text', value: `as mulheres estão matriculadas em menor número em Psicologia que com sujeitos.` },
    ],
    correct: 'B',
    explanation: `Gabarito: B. O gráfico mostra que as mulheres são maioria em cursos voltados a pessoas (Psicologia, Humanas-artes, Educação, Medicina) e minoria nas áreas de exatas. A leitura correta, sem estabelecer relações causais indevidas, é a de que as mulheres estão matriculadas em maior percentual em cursos que exigem capacidade de compreensão dos seres humanos, conforme B. As outras inserem causas falsas ou invertem os dados: a suposta razão para os homens em Matemática (A), o percentual de mulheres em Física maior que em Mineração (C), a igualdade de proporção (D) e a justificativa para Psicologia (E) não se sustentam no gráfico.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 133,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `É muito raro que um novo modo de comunicação ou de expressão suplante completamente os anteriores. Fala- se menos desde que a escrita foi inventada? Claro que não. Contudo, a função da palavra viva mudou, uma parte de suas missões nas culturas puramente orais tendo sido preenchida pela escrita: transmissão dos conhecimentos e das narrativas, estabelecimento de contratos, realização dos principais atos rituais ou sociais etc. Novos estilos de conhecimento (o conhecimento “teórico”, por exemplo) e novos gêneros (o código de leis, o romance etc.) surgiram. A escrita não fez com que a palavra desaparecesse, ela complexificou e reorganizou o sistema da comunicação e da memória social. A fotografia substituiu a pintura? Não, ainda há pintores ativos. As pessoas continuam, mais do que nunca, a visitar museus, exposições e galerias, compram as obras dos artistas para pendurá-las em casa. Em contrapartida, é verdade que os pintores, os desenhistas, os gravadores, os escultores não são mais - como foram até o século XIX - os únicos produtores de imagens. LÉVY, P. Cibercultura . São Paulo: Ed. 34, 1999 (fragmento). A substituição pura e simples do antigo pelo novo ou do natural pelo técnico tem sido motivo de preocupação de muita gente. O texto encaminha uma discussão em torno desse temor ao considerar as relações entre o conhecimento teórico e o conhecimento empírico e acrescenta que novos gêneros textuais surgiram com o progresso. observar que a língua escrita não é uma transcrição fiel da língua oral e explica que as palavras antigas devem ser utilizadas para preservar a tradição. perguntar sobre a razão das pessoas visitarem museus, exposições etc., e reafirma que os fotógrafos são os únicos responsáveis pela produção de obras de arte. reconhecer que as pessoas temem que o avanço dos`,
    alternatives: [
      { id: 'A', type: 'text', value: `considerar as relações entre o conhecimento teórico e o conhecimento empírico e acrescenta que novos gêneros textuais surgiram com o progresso.` },
      { id: 'B', type: 'text', value: `observar que a língua escrita não é uma transcrição fiel da língua oral e explica que as palavras antigas devem ser utilizadas para preservar a tradição.` },
      { id: 'C', type: 'text', value: `perguntar sobre a razão das pessoas visitarem museus, exposições etc., e reafirma que os fotógrafos são os únicos responsáveis pela produção de obras de arte.` },
      { id: 'D', type: 'text', value: `reconhecer que as pessoas temem que o avanço dos meios de comunicação, inclusive on-line, substitua o homem e leve alguns profissionais ao esquecimento.` },
      { id: 'E', type: 'text', value: `revelar o receio das pessoas em experimentar novos meios de comunicação, com medo de sentirem retrógradas.` },
    ],
    correct: 'A',
    explanation: `Gabarito: A. O texto de Pierre Lévy rebate o temor de que o novo substitua simplesmente o antigo, mostrando que a escrita não eliminou a fala e a fotografia não extinguiu a pintura. Ele encaminha a discussão ao tratar das relações entre o conhecimento teórico e o empírico e ao acrescentar que novos gêneros (como o código de leis e o romance) surgiram com o progresso, o que corresponde a A. As demais não refletem o argumento: não discute fidelidade entre escrita e oralidade (B), não afirma que fotógrafos são os únicos produtores de arte (C), nem foca a substituição do homem (D) ou o receio de experimentar novos meios (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 134,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Texto I Eu amo a rua. Esse sentimento de natureza toda íntima não vos seria revelado por mim se não julgasse, e razões não tivesse para julgar, que este amor assim absoluto e assim exagerado é partilhado por todos vós. Nós somos irmãos, nós nos sentimos parecidos e iguais; nas cidades, nas aldeias, nos povoados, não porque soframos, com a dor e os desprazeres, a lei e a polícia, mas porque nos une, nivela e agremia o amor da rua. É este mesmo o sentimento imperturbável e indissolúvel, o único que, como a própria vida, resiste às idades e às épocas. RIO, J. A rua. In: A alma encantadora das ruas . São Paulo: Companhia das Letras, 2008 (fragmento). 2010 Texto II A rua dava-lhe uma força de fisionomia, mais consciência dela. Como se sentia estar no seu reino, na região em que era rainha e imperatriz. O olhar cobiçoso dos homens e o de inveja das mulheres acabavam o sentimento de sua personalidade, exaltavam-no até. Dirigiu-se para a rua do Catete com o seu passo miúdo e sólido. [...] No caminho trocou cumprimento com as raparigas pobres de uma casa de cômodos da vizinhança. [...] E debaixo dos olhares maravilhados das pobres raparigas, ela continuou o seu caminho, arrepanhando a saia, satisfeita que nem uma duquesa atravessando os seus domínios. BARRETO, L. Um e outro. In: Clara dos anjos . Rio de Janeiro: Editora Mérito (fragmento). A experiência urbana é um tema recorrente em crônicas, contos e romances do final do século XIX e início do XX, muitos dos quais elegem a rua para explorar essa experiência. Nos fragmentos I e II, a rua é vista, respectivamente, como lugar que desperta sensações contraditórias e desejo de reconhecimento. favorece o cultivo da intimidade e a exposição dos`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `dotes físicos.` },
      { id: 'B', type: 'text', value: `possibilita vínculos pessoais duradouros e encontros` },
      { id: 'C', type: 'text', value: `casuais.` },
      { id: 'D', type: 'text', value: `propicia o sentido de comunidade e a exibição pessoal.` },
      { id: 'E', type: 'text', value: `promove o anonimato e a segregação social.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. A questão pede como a rua é vista, respectivamente, em cada texto. No Texto I, de João do Rio, a rua é lugar que propicia o sentido de comunidade e irmandade ("nós somos irmãos... o amor da rua"); no Texto II, de Lima Barreto, a rua é espaço de exibição pessoal, onde a personagem se sente observada e exaltada em sua aparência. Essa combinação corresponde a D. As demais não traduzem os dois sentidos: sensações contraditórias (A), intimidade e dotes físicos (B), vínculos duradouros e encontros casuais (C) ou anonimato e segregação (E).`,
    subject: ['lit'],
    topics: ['Literatura brasileira', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 135,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Fora da ordem Em 1588, o engenheiro militar italiano Agostinho Romelli publicou Le Diverse et Artificiose Machine , no qual descrevia uma máquina de ler livros. Montada para girar verticalmente, como uma roda de hamster, a invenção permitia que o leitor fosse de um texto ao outro sem se levantar de sua cadeira. Hoje podemos alternar entre documentos com muito mais facilidade - um clique no mouse é suficiente para acessarmos imagens, textos, vídeos e sons instantaneamente. Para isso, usamos o computador, e principalmente a internet - tecnologias que não estavam disponíveis no Renascimento, época em que Romelli viveu. BERCITTO, D. Revista Língua Portuguesa . Ano II. N°14. O inventor italiano antecipou, no século XVI, um dos princípios definidores do hipertexto: a quebra de linearidade na leitura e a possibilidade de acesso ao texto conforme o interesse do leitor. Além de ser característica essencial da internet, do ponto de vista da produção do texto, a hipertextualidade se manifesta também em textos impressos, como dicionários, pois a forma do texto dá liberdade de acesso à informação. documentários, pois o autor faz uma seleção dos fatos e das imagens. relatos pessoais, pois o narrador apresenta sua percepção dos fatos. editoriais, pois o editorialista faz uma abordagem`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `detalhada dos fatos.` },
      { id: 'B', type: 'text', value: `romances românticos, pois os eventos ocorrem em` },
      { id: 'C', type: 'text', value: `diversos cenários.` },
      { id: 'D', type: 'text', value: `editoriais, pois o editorialista faz uma abordagem detalhada dos fatos.` },
      { id: 'E', type: 'text', value: `romances românticos, pois os eventos ocorrem em diversos cenários.` },
    ],
    correct: 'A',
    explanation: `Gabarito: A. O texto mostra que a máquina de Romelli antecipou um princípio do hipertexto — a quebra da linearidade e o acesso ao texto conforme o interesse do leitor — e pede um exemplo de hipertextualidade em texto impresso. O dicionário atende a isso, pois sua forma permite acesso não linear e livre à informação procurada, justificando A. As demais não expressam essa característica: documentários (B), relatos pessoais (C), editoriais (D) e romances românticos (E) organizam-se de modo linear, conforme a seleção ou o ponto de vista do autor.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 136,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Um professor dividiu a lousa da sala de aula em quatro partes iguais. Em seguida, preencheu 75% dela com conceitos e explicações, conforme a figura seguinte. Xxxxxxxxx xxxxxxxxxxx Xxxxxxxxx xxxxxxxxxxx Xxxxxxxxx xxxxxxxxxxx xxxx xxxx xxxx xxx x x xxxx xxxx xxxx xxx x x xxxx xxxx xxxx xxx x x x xxxxxxx xxxxxx xxxxx x xxxxxxx xxxxxx xxxxx x xxxxxxx xxxxxx xxxxx xxxxxx xxxxx xxxxxxxx xxxxxx xxxxx xxxxxxxx xxxxxx xxxxx xxxxxxxx xxxxx xxx xxxx xxxx xxxxx xxx xxxx xxxx xxxxx xxx xxxx xxxx xxxx xxxx xxxx xxx . xxxx xxxx xxxx xxx. xxxx xxxx xxxx xxx. Algum tempo depois, o professor apagou a lousa por completo e, adotando um procedimento semelhante ao anterior, voltou a preenche-la, mas, dessa vez, utilizando 40% do espaço dela. Uma representação possível para essa segunda situação é Xxxxxxxxx xxxxxxxxxxx xxxx xxxx xxxx xxx x x x xxxxxxx xxxxxx xxxxx xxxxxx xxxxx xxxxxxxx xxxxx xxx xxxx xxxx xxxx xxxx xxxx xxx . Xxxxxxxxx xxxxxxxxxxx Xxxxxxxxx xxxxxxxxxxx xxxx xxxx xxxx xxx x x xxxx xxxx xxxx xxx x x x xxxxxxx xxxxxx xxxxx x xxxxxxx xxxxxx xxxxx xxxxxx xxxxx xxxxxxxx xxxxxx xxxxx xxxxxxxx xxxxx xxx xxxx xxxx xxxxx xxx xxxx xxxx xxxx xxxx xxxx xxx . xxxx xxxx xxxx xxx. Xxxxxxxxxxx Xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxx xxxxxx xxxx xxxxxx xxxxx xxxxxx xxxxx xxxxxx xxxxx xxxxxxxx xxxxx xxxxxxxx xxxxx xxx xxxx xxxxx xxx xxxx xxxx xxxx xxx xxxx xxxx xxx Xxxxxxxxxxx Xxxxxxxxxxx Xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxx xxxxxx xxxx xxxxxx xxxx xxxxxx xxxxx xxxxxx xxxxx xxxxxx xxxxx xxxxxx xxxxx xxxxxxxx xxxxx xxxxxxxx xxxxx xxxxxxxx xxxxx xxx xxxx xxxxx xxx xxxx xxxxx xxx xxxx xxxx xxxx xxx xxxx xxxx xxx xxxx xxxx xxx Xxxxxxxxxxx Xxxxxxxxxxx Xxxxxxxxxxx Xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxxxxxxxxx xxxx xxxxxx xxxx xxxxxx xxxx xxxxxx xxxx xxxxxx xxxxx xxxxxx xxxxx xxxxxx xxxxx xxxxxx xxxxx xxxxxx xxxxx xxxxxxxx xxxxx xxxxxxxx xxxxx xxxxxxxx xxxxx xxxxxxxx xxxxx xxx xxxx xxxxx xxx xxxx xxxxx xxx xxxx`,
    images: ['/enem/2010/images/enem_2010_d2_q136.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'C',
    explanation: `A lousa foi dividida em 4 partes iguais e 75% dela foi preenchida, ou seja, 3 das 4 partes (3/4 = 75%). Na segunda situação preencheu-se 40% do espaço. Como 40% = 2/5, é menos da metade da lousa. A representação correta deve mostrar um pouco menos da metade da área total preenchida, o que corresponde à figura da alternativa C. Resposta: C.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 137,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `No monte de Cerro Armazones, no deserto de Atacama, no Chile, ficará o maior telescópio da superfície terrestre, o Telescópio Europeu Extremamente Grande (E-ELT). O E-ELT terá um espelho primário de 42 m de diâmetro, “o maior olho do mundo voltado para o céu”. Disponível em: http://www.estadão.com.br. Acesso em: 27 abr. 2010 (adaptado). Ao ler esse texto em uma sala de aula, uma professora fez uma suposição de que o diâmetro do olho humano mede aproximadamente 2,1 cm. Qual a razão entre o diâmetro aproximado do olho humano, suposto pela professora, e o diâmetro do espelho primário do telescópio citado?`,
    alternatives: [
      { id: 'A', type: 'text', value: `1 : 20` },
      { id: 'B', type: 'text', value: `1 : 100` },
      { id: 'C', type: 'text', value: `1 : 200` },
      { id: 'D', type: 'text', value: `1 : 1 000` },
      { id: 'E', type: 'text', value: `1 : 2 000` },
    ],
    correct: 'E',
    explanation: `A razão pedida é entre o diâmetro do olho (2,1 cm) e o diâmetro do espelho (42 m). Convertendo: 42 m = 4 200 cm. Logo a razão é 2,1/4 200. Dividindo: 2,1/4 200 = 1/2 000. Portanto a razão é 1 : 2 000. Resposta: E.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 138,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Alguns testes de preferência por bebedouros de água foram realizados com bovinos, envolvendo três tipos de bebedouros, de formatos e tamanhos diferentes. Os bebedouros 1 e 2 têm a forma de um tronco de cone circular reto, de altura igual a 60 cm, e diâmetro da base superior igual a 120 cm e 60 cm, respectivamente. O bebedouro 3 é um semicilindro, com 30 cm de altura, 100 cm de comprimento e 60 cm de largura. Os três estão ilustrados na figura.`,
    images: ['/enem/2010/images/enem_2010_d2_q138.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'E',
    explanation: `O bebedouro 3 é um semicilindro de 30 cm de altura (raio), 100 cm de comprimento e 60 cm de largura (diâmetro). Sua planificação, sem tampa, é formada por: um retângulo (a superfície lateral curva aberta) de comprimento 100 cm por 60·π/... na verdade o retângulo lateral medindo 100 cm por o semiperímetro, mais os dois semicírculos (meias-luas) das extremidades de diâmetro 60 cm. A figura que apresenta o retângulo de 100 cm acompanhado dos dois semicírculos nas pontas é a alternativa E. Resposta: E.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 139,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Uma fábrica produz barras de chocolates no formato de paralelepípedos e de cubos, com o mesmo volume. As arestas da barra de chocolate no formato de paralelepípedo medem 3 cm de largura, 18 cm de comprimento e 4 cm de espessura. Analisando as características das figuras geométricas descritas, a medida das arestas dos chocolates que têm o formato de cubo é igual a`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `5 cm.` },
      { id: 'B', type: 'text', value: `6 cm.` },
      { id: 'C', type: 'text', value: `12 cm.` },
      { id: 'D', type: 'text', value: `24 cm.` },
      { id: 'E', type: 'text', value: `25 cm.` },
    ],
    correct: 'B',
    explanation: `A barra em paralelepípedo tem dimensões 3 cm, 18 cm e 4 cm, logo volume V = 3·18·4 = 216 cm³. O cubo de mesmo volume satisfaz a³ = 216, portanto a = ∛216 = 6 cm. Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 140,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `A classificação de um país no quadro de medalhas nos Jogos Olímpicos depende do número de medalhas de ouro que obteve na competição, tendo como critérios de desempate o número de medalhas de prata seguido do número de medalhas de bronze conquistados. Nas Olimpíadas de 2004, o Brasil foi o décimo sexto colocado no quadro de medalhas, tendo obtido 5 medalhas de ouro, 2 de prata e 3 de bronze. Parte desse quadro de medalhas é reproduzida a seguir. Disponível em: http://www.quadroademedalhas.com.br. Acesso em: 05 abr. 2010 (adaptado). Se o Brasil tivesse obtido mais 4 medalhas de ouro, 4 de prata e 10 de bronze, sem alteração no número de medalhas dos demais países mostrados no quadro, qual teria sido a classificação brasileira no quadro de medalhas das limpiadas de 2004? O`,
    images: ['/enem/2010/images/enem_2010_d2_q140.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `13º` },
      { id: 'B', type: 'text', value: `12º` },
      { id: 'C', type: 'text', value: `11º` },
      { id: 'D', type: 'text', value: `10º` },
      { id: 'E', type: 'text', value: `9º` },
    ],
    correct: 'B',
    explanation: `Somando as medalhas extras ao Brasil: ouro 5+4 = 9, prata 2+4 = 6, bronze 3+10 = 13. Com 9 ouros, o Brasil entra no grupo dos países com 9 ouros, desempatado pela prata. Ordenando por prata: Coreia do Sul (12), Grã-Bretanha (9), Cuba (7), Brasil (6), Ucrânia (5). Acima deles está a Itália (10 ouros, 8º). Assim: 9º Coreia, 10º Grã-Bretanha, 11º Cuba, 12º Brasil. Resposta: B.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 141,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Os dados do gráfico foram coletados por meio da Pesquisa Nacional por Amostra de Domicílios. Estudantes que possuem telefone móvel celular com idade de 10 anos ou mais 63 64 56 62 58 0 10 20 30 40 50 60 70 Porcentagem (%) 44 38 42 37 36 Possuíam Norte Sudeste Sul Nordeste Centro- este Não Possuíam 0 Regiões brasileiras Fonte: IBGE.Disponível em: http://www.ibge.gov.br. Acesso em: 28 abr. 2010 (adaptado). Supondo-se que, no Sudeste, 14 900 estudantes foram entrevistados nessa pesquisa, quantos deles possuíam telefone móvel celular?`,
    images: ['/enem/2010/images/enem_2010_d2_q141.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `5 513` },
      { id: 'B', type: 'text', value: `6 556` },
      { id: 'C', type: 'text', value: `7 450` },
      { id: 'D', type: 'text', value: `8 344` },
      { id: 'E', type: 'text', value: `9 536` },
    ],
    correct: 'D',
    explanation: `No Sudeste, 56% dos estudantes possuíam telefone móvel celular. De 14 900 entrevistados: 14 900 · 0,56 = 8 344 estudantes. Resposta: D.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 142,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Acompanhando o crescimento do filho, um casal constatou que, de 0 a 10 anos, a variação da sua altura se dava de forma mais rápida do que dos 10 aos 17 anos e, a partir de 17 anos, essa variação passava a ser cada
vez menor, até se tornar imperceptível. Para ilustrar
essa situação, esse casal fez um gráfico relacionando
as alturas do filho nas idades consideradas.
Que gráfico melhor representa a altura do filho desse
casal em função da idade?`,
    images: ['/enem/2010/images/enem_2010_d2_q142_A.jpg', '/enem/2010/images/enem_2010_d2_q142_B.jpg', '/enem/2010/images/enem_2010_d2_q142_C.jpg', '/enem/2010/images/enem_2010_d2_q142_D.jpg', '/enem/2010/images/enem_2010_d2_q142_E.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'A',
    explanation: `De 0 a 10 anos a altura cresce rapidamente (curva íngreme); de 10 a 17 anos cresce mais devagar (curva se suaviza); após 17 anos a variação torna-se imperceptível (a curva fica praticamente horizontal, estabilizando em torno de 180 cm). O gráfico contínuo e crescente, com concavidade voltada para baixo, que estabiliza após os 17 anos é o da alternativa A. Resposta: A.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 143,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Em sete de abril de 2004, um jornal publicou o ranking de desmatamento, conforme gráfico, da chamada Amazônia Legal, integrada por nove estados. Ranking do Desmatamento em km² 9º Amapá 4 8º Tocantins 136 7º Roraima 326 6º Acre 549 5º Maranhão 766 797 4º Amazonas 3º Rondônia 3463 2º Pará 7293 1º Mato Grosso 10416 Disponível em: www.folhaonline.com.br. Acesso em: 30 abr. 2010 (adaptado). Considerando-se que até 2009 o desmatamento cresceu 10,5% em relação aos dados de 2004, o desmatamento médio por estado em 2009 está entre`,
    images: ['/enem/2010/images/enem_2010_d2_q143.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `100 km² e 900 km² .` },
      { id: 'B', type: 'text', value: `1 000 km² e 2 700 km² .` },
      { id: 'C', type: 'text', value: `2 800 km² e 3 200 km² .` },
      { id: 'D', type: 'text', value: `3 300 km² e 4 000 km² .` },
      { id: 'E', type: 'text', value: `4 100 km² e 5 800 km² .` },
    ],
    correct: 'C',
    explanation: `Total desmatado em 2004 (soma dos 9 estados): 10 416 + 7 293 + 3 463 + 797 + 766 + 549 + 326 + 136 + 4 = 23 750 km². Com crescimento de 10,5% até 2009: 23 750 · 1,105 = 26 243,75 km². Média por estado: 26 243,75 / 9 ≈ 2 915,9 km², valor entre 2 800 km² e 3 200 km². Resposta: C.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 144,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `A resistência elétrica e as dimensões do condutor A relação da resistência elétrica com as dimensões do condutor foi estudada por um grupo de cientistas por meio de vários experimentos de eletricidade. Eles verificaram que existe proporcionalidade entre: • resistência (R) e comprimento (ℓ), dada a mesma Rascunho se cao transversal (A); c • resistência (R) e área da secção transversal (A), dado o mesmo comprimento (ℓ) e • comprimento (ℓ) e área da , se cao transversal (A) c dada a mesma resistência (R). Considerando os resistores como fios, pode-se exemplificar o estudo das grandezas que influem na resistência elétrica utilizando as figuras seguintes. Disponível em: http://www.efeitojoule.com. Acesso em: abr. 2010 (adaptado). 2010 As figuras mostram que as proporcionalidades existentes entre resistência (R) e comprimento (ℓ), resistência (R) e área da secção transversal (A), e entre comprimento (ℓ) e área da secção transversal (A) são, respectivamente,`,
    images: ['/enem/2010/images/enem_2010_d2_q144.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `direta, direta e direta.` },
      { id: 'B', type: 'text', value: `direta, direta e inversa.` },
      { id: 'C', type: 'text', value: `direta, inversa e direta.` },
      { id: 'D', type: 'text', value: `inversa, direta e direta.` },
      { id: 'E', type: 'text', value: `inversa, direta e inversa.` },
    ],
    correct: 'C',
    explanation: `Dos experimentos: dobrando o comprimento (de ℓ para 2ℓ, mesma área), a resistência passa de R para 2R → R e ℓ são diretamente proporcionais. Dobrando a área (de A para 2A, mesmo ℓ), a resistência cai de R para R/2 → R e A são inversamente proporcionais. Para manter a mesma resistência R ao dobrar a área (2A), o comprimento também dobra (2ℓ) → ℓ e A são diretamente proporcionais. Logo: direta, inversa e direta. Resposta: C.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 145,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Os dados do gráfico seguinte foram gerados a partir de dados colhidos no conjunto de seis regiões metropolitanas pelo Departamento Intersindical de Estatística e Estudos Socioeconômicos (Dieese). Taxas de desemprego nas regiões metropolitanas março/2010 São Paulo 13,1 Salvador 19,9 Recife 19,3 Porto Alegre 9,8 Belo Horizonte 10,2 Distrito Federal 14,7 0 5 10 15 20 25 Disponível em: http://g1.globo.com. Acesso em: 28 abr. 2010 (adaptado). Supondo que o total de pessoas pesquisadas na região metropolitana de Porto Alegre equivale a 250 000, o número de desempregados em março de 2010, nessa região, foi de`,
    images: ['/enem/2010/images/enem_2010_d2_q145.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `24 500.` },
      { id: 'B', type: 'text', value: `25 000.` },
      { id: 'C', type: 'text', value: `220 500.` },
      { id: 'D', type: 'text', value: `223 000.` },
      { id: 'E', type: 'text', value: `227 500.` },
    ],
    correct: 'A',
    explanation: `Em Porto Alegre a taxa de desemprego em março/2010 era 9,8%. Com total de 250 000 pessoas: 250 000 · 0,098 = 24 500 desempregados. Resposta: A.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 146,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `A siderúrgica “Metal Nobre” produz diversos objetos maciços utilizando o ferro. Um tipo especial de peca feita nessa companhia tem o formato de um paralelepípedo retangular, de acordo com as dimensões indicadas na figura que segue. O produto das três dimensões indicadas na peça resultaria na medida da grandeza`,
    images: ['/enem/2010/images/enem_2010_d2_q146.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `massa.` },
      { id: 'B', type: 'text', value: `volume.` },
      { id: 'C', type: 'text', value: `superfície.` },
      { id: 'D', type: 'text', value: `capacidade.` },
      { id: 'E', type: 'text', value: `comprimento.` },
    ],
    correct: 'B',
    explanation: `A peça é um paralelepípedo retângulo com dimensões 2,5 m, 0,5 m e 1,3 m. O produto das três dimensões (comprimento × largura × altura) fornece o volume do sólido. Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 147,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `A figura I abaixo mostra um esquema das principais vias que interligam a cidade A com a cidade B. Cada número indicado na figura II representa a probabilidade de pegar um engarrafamento quando se passa na via indicada. Assim, há uma probabilidade de 30% de se pegar engarrafamento no deslocamento do ponto C ao o ponto B, passando pela estrada E4, e de 50%, quando se passa por E3. Essas probabilidades são independentes umas das outras. Paula deseja se deslocar da cidade A para a cidade B usando exatamente duas das vias indicadas, percorrendo um trajeto com a menor probabilidade de engarrafamento possível. O melhor trajeto para Paula é`,
    images: ['/enem/2010/images/enem_2010_d2_q147.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `E1E3.` },
      { id: 'B', type: 'text', value: `E1E4.` },
      { id: 'C', type: 'text', value: `E2E4.` },
      { id: 'D', type: 'text', value: `E2E5.` },
      { id: 'E', type: 'text', value: `E2E6.` },
    ],
    correct: 'D',
    explanation: `Deseja-se o trajeto A→B (duas vias) com menor probabilidade de engarrafamento. Probabilidades: E1(C-A)=0,8; E2(D-A)=0,7; E3(C-B)=0,5; E4(C-B)=0,3; E5(B-D)=0,4; E6(B-D)=0,6. A probabilidade de pegar engarrafamento no trajeto é 1−(1−p1)(1−p2). Via A-C-B com E1E4: 1−0,2·0,7 = 0,86. Via A-D-B com E2E5: 1−0,3·0,6 = 0,82 (a menor). As demais são maiores (E1E3 = 0,90; E2E6 = 0,88). Melhor trajeto: E2E5. Resposta: D.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 148,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `O gráfico a seguir apresenta o gasto militar dos Estados Unidos, no período de 1988 a 2006. Almanaque Abril 2008 . Editora Abril. Com base no gráfico, o gasto militar no início da guerra no Iraque foi de`,
    images: ['/enem/2010/images/enem_2010_d2_q148.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `U$ 4.174.000,00.` },
      { id: 'B', type: 'text', value: `U$ 41.740.000,00.` },
      { id: 'C', type: 'text', value: `U$ 417.400.000,00.` },
      { id: 'D', type: 'text', value: `U$ 41.740.000.000,00.` },
      { id: 'E', type: 'text', value: `U$ 417.400.000.000,00.` },
    ],
    correct: 'E',
    explanation: `A guerra no Iraque teve início em 2003. No gráfico, o gasto militar dos EUA nesse ano é de 417,4 bilhões de dólares. Em algarismos: 417,4 × 10⁹ = U$ 417.400.000.000,00. Resposta: E.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 149,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Uma professora realizou uma atividade com seus alunos utilizando canudos de refrigerante para montar figuras, onde cada lado foi representado por um canudo. A quantidade de canudos (C) de cada figura depende da quantidade de quadrados (Q) que formam cada figura. A estrutura de formação das figuras está representada a seguir. Que expressão fornece a quantidade de canudos em função da quantidade de quadrados de cada figura?`,
    images: ['/enem/2010/images/enem_2010_d2_q149.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `C = 4Q` },
      { id: 'B', type: 'text', value: `C = 3Q + 1` },
      { id: 'C', type: 'text', value: `C = 4Q - 1` },
      { id: 'D', type: 'text', value: `C = Q + 3` },
      { id: 'E', type: 'text', value: `C = 4Q - 2` },
    ],
    correct: 'B',
    explanation: `Contando os canudos: Figura I (1 quadrado) usa 4 canudos; Figura II (2 quadrados) usa 7; Figura III (3 quadrados) usa 10. A cada quadrado novo acrescentam-se 3 canudos, partindo de 4 no primeiro: C = 4 + 3(Q−1) = 3Q + 1. Resposta: B.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 150,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `A loja Telas & Molduras cobra 20 reais por metro quadrado de tela, 15 reais por metro linear de moldura, mais uma taxa fixa de entrega de 10 reais. Uma artista plástica precisa encomendar telas e molduras a essa loja, suficientes para 8 quadros retangulares (25 cm × 50 cm). Em seguida, fez uma segunda encomenda, mas agora para 8 quadros retangulares (50 cm × 100 cm). O valor da segunda encomenda será o dobro do valor da primeira encomenda, porque a altura e a largura dos quadros dobraram. maior do que o valor da primeira encomenda, mas não o dobro. a metade do valor da primeira encomenda, porque a`,
    images: ['/enem/2010/images/enem_2010_d2_q150.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `o dobro do valor da primeira encomenda, porque a altura e a largura dos quadros dobraram.` },
      { id: 'B', type: 'text', value: `maior do que o valor da primeira encomenda, mas não o dobro.` },
      { id: 'C', type: 'text', value: `a metade do valor da primeira encomenda, porque a altura e a largura dos quadros dobraram.` },
      { id: 'D', type: 'text', value: `menor do que o valor da primeira encomenda, mas 8 não a metade.` },
      { id: 'E', type: 'text', value: `igual ao valor da primeira encomenda, porque o 10 custo de entrega será o mesmo.` },
    ],
    correct: 'B',
    explanation: `Primeira encomenda (8 quadros 25 cm × 50 cm): tela = 8·(0,25·0,50) = 1 m² → 20·1 = R$ 20; moldura = 8·2·(0,25+0,50) = 12 m → 15·12 = R$ 180; entrega R$ 10. Total = 210. Segunda (8 quadros 50 cm × 100 cm): tela = 8·(0,50·1,00) = 4 m² → 80; moldura = 8·2·(0,50+1,00) = 24 m → 360; entrega 10. Total = 450. Como a área quadruplica e o perímetro só dobra, 450 é maior que 210, mas não é o dobro (que seria 420). Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 151,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Dona Maria, diarista na casa da família Teixeira, precisa fazer café para servir as vinte pessoas que se encontram numa reunião na sala. Para fazer o café, Dona Maria dispõe de uma leiteira cilíndrica e copinhos plásticos, também cilíndricos. Com o objetivo de não desperdiçar café, a diarista deseja colocar a quantidade mínima de água na leiteira para encher os vinte copinhos pela metade. Para que isso ocorra, Dona Maria deverá encher a leiteira até a metade, pois ela tem um volume 20 vezes maior que o volume do copo. encher a leiteira toda de água, pois ela tem um volume 20 vezes maior que o volume do copo. encher a leiteira toda de água, pois ela tem um`,
    images: ['/enem/2010/images/enem_2010_d2_q151.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `encher a leiteira até a metade, pois ela tem um volume 20 vezes maior que o volume do copo.` },
      { id: 'B', type: 'text', value: `encher a leiteira toda de água, pois ela tem um volume 20 vezes maior que o volume do copo.` },
      { id: 'C', type: 'text', value: `encher a leiteira toda de água, pois ela tem um volume 10 vezes maior que o volume do copo.` },
      { id: 'D', type: 'text', value: `encher duas leiteiras de água, pois ela tem um volume 10 vezes maior que o volume do copo.` },
      { id: 'E', type: 'text', value: `encher cinco leiteiras de água, pois ela tem um volume 10 vezes maior que o volume do copo.` },
    ],
    correct: 'A',
    explanation: `Leiteira: raio 4 cm, altura 20 cm → V = π·4²·20 = 320π cm³. Copinho: raio 2 cm, altura 4 cm → V = π·2²·4 = 16π cm³. Logo a leiteira tem volume 320π/16π = 20 vezes o do copo. Encher 20 copinhos pela metade exige 20·(16π/2) = 160π cm³, exatamente metade de 320π. Portanto deve encher a leiteira até a metade, pois ela tem volume 20 vezes maior que o copo. Resposta: A.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 152,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Um satélite de telecomunicações, t minutos após ter atingido sua órbita, está a r quilômetros de distância do centro da Terra. Quando r assume seus valores máximo e mínimo, diz-se que o satélite atingiu o apogeu e o perigeu, respectivamente. Suponha que, para esse satélite, o valor de r em função de t seja dado por r(t) = 5 865 / (1 + 0,15 × cos(0,06t)) Um cientista monitora o movimento desse satélite para controlar o seu afastamento do centro da Terra. Para isso, ele precisa calcular a soma dos valores de r, no apogeu e no perigeu, representada por S. O cientista deveria concluir que, periodicamente, S atinge o valor de`,
    alternatives: [
      { id: 'A', type: 'text', value: `12 765 km.` },
      { id: 'B', type: 'text', value: `12 000 km.` },
      { id: 'C', type: 'text', value: `11 730 km.` },
      { id: 'D', type: 'text', value: `10 965 km.` },
      { id: 'E', type: 'text', value: `5 865 km.` },
    ],
    correct: 'B',
    explanation: `Em r(t) = 5865/(1 + 0,15·cos(0,06t)): o apogeu (r máximo) ocorre quando cos = −1, dando r = 5865/(1−0,15) = 5865/0,85 = 6900 km; o perigeu (r mínimo) quando cos = +1, dando r = 5865/(1+0,15) = 5865/1,15 = 5100 km. Soma S = 6900 + 5100 = 12 000 km. Resposta: B.`,
    subject: ['mat'],
    topics: ['Trigonometria', 'Funções', 'Questões aleatórias'],
  },
  {
    id: 153,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Uma empresa vende tanques de combustíveis de
formato cilíndrico, em três tamanhos, com medidas
indicadas nas figuras. O preço do tanque é diretamente
proporcional à medida da área da superfície lateral do
tanque. O dono de um posto de combustível deseja
encomendar um tanque com menor custo por metro
cúbico de capacidade de armazenamento.
Qual dos tanques deverá ser escolhido pelo dono do
posto? (Considere π ≅ 3)`,
    images: ['/enem/2010/images/enem_2010_d2_q153.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `I, pela relação área/capacidade de armazenamento de 1/3.` },
      { id: 'B', type: 'text', value: `I, pela relação área/capacidade de armazenamento de 4/3.` },
      { id: 'C', type: 'text', value: `II, pela relação área/capacidade de armazenamento de 3/4.` },
      { id: 'D', type: 'text', value: `III, pela relação área/capacidade de armazenamento de 2/3.` },
      { id: 'E', type: 'text', value: `III, pela relação área/capacidade de armazenamento de 7/12.` },

    ],
    correct: 'D',
    explanation: `Preço ∝ área lateral; busca-se menor custo por capacidade, ou seja, menor razão (área lateral)/(volume). Para um cilindro: A_lat/V = 2πrh/(πr²h) = 2/r = 4/d, que só depende do diâmetro (quanto maior d, menor a razão). O tanque III tem o maior diâmetro (6 m). Com π≈3: A_lat = 2·3·3·8 = 144 m²; V = 3·3²·8 = 216 m³; razão = 144/216 = 2/3. Resposta: D.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 154,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Uma empresa possui um sistema de controle de qualidade que classifica o seu desempenho financeiro anual, tendo como base o do ano anterior. Os conceitos são: insuficiente , quando o crescimento é menor que 1%; regular , quando o crescimento é maior ou igual a 1% e menor que 5%; bom , quando o crescimento é maior ou igual a 5% e menor que 10%; ótimo , quando é maior ou igual a 10% e menor que 20%; e excelente , quando é maior ou igual a 20%. Essa empresa apresentou lucro de R$ 132 000,00 em 2008 e de R$ 145 000,00 em 2009. De acordo com esse sistema de controle de qualidade, o desempenho financeiro dessa empresa no ano de 2009 deve ser considerado`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `insuficiente.` },
      { id: 'B', type: 'text', value: `regular.` },
      { id: 'C', type: 'text', value: `bom.` },
      { id: 'D', type: 'text', value: `ótimo.` },
      { id: 'E', type: 'text', value: `excelente.` },
    ],
    correct: 'C',
    explanation: `Crescimento de 2008 para 2009: (145 000 − 132 000)/132 000 = 13 000/132 000 ≈ 0,0985 = 9,85%. Esse valor é maior ou igual a 5% e menor que 10%, o que classifica o desempenho como "bom". Resposta: C.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 155,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Uma escola recebeu do governo uma verba de R$ 1000,00 para enviar dois tipos de folhetos pelo correio. O diretor da escola pesquisou que tipos de selos deveriam ser utilizados. Concluiu que, para o primeiro tipo de folheto, bastava um selo de R$ 0,65 enquanto para folhetos do segundo tipo seriam necessários três selos, um de R$ 0,65, um de R$ 0,60 e um de R$ 0,20. O diretor solicitou que se comprassem selos de modo que fossem postados exatamente 500 folhetos do segundo tipo e uma quantidade restante de selos que permitisse o envio do máximo possível de folhetos do primeiro tipo. Quantos selos de R$ 0,65 foram comprados?`,
    alternatives: [
      { id: 'A', type: 'text', value: `476` },
      { id: 'B', type: 'text', value: `675` },
      { id: 'C', type: 'text', value: `923` },
      { id: 'D', type: 'text', value: `965` },
      { id: 'E', type: 'text', value: `1 538` },
    ],
    correct: 'C',
    explanation: `Cada folheto do 2º tipo usa 3 selos: 0,65 + 0,60 + 0,20 = R$ 1,45. Para 500 folhetos do 2º tipo: 500·1,45 = R$ 725,00 (incluindo 500 selos de 0,65). Sobram 1000 − 725 = R$ 275,00 para o 1º tipo, que usa 1 selo de 0,65 por folheto: 275/0,65 ≈ 423,07, logo 423 folhetos (e 423 selos de 0,65). Total de selos de 0,65 = 500 + 423 = 923. Resposta: C.`,
    subject: ['mat'],
    topics: ['Equações e inequações', 'Questões aleatórias'],
  },
  {
    id: 156,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `A figura a seguir é a representação de uma região por meio de curvas de nível, que são curvas fechadas representando a altitude da região, com relação ao nível do mar. As coordenadas estão expressas em graus de acordo com a longitude, no eixo horizontal, e a latitude, no eixo vertical. A escala em tons de cinza desenhada à direita está associada à altitude da região. Um pequeno helicóptero usado para reconhecimento sobrevoa a região a partir do ponto X = (20; 60). O helicóptero segue o percurso: 0,8° L → 0,5° N → 0,2° O → 0,1° S → 0,4° N → 0,3° L. Ao final, desce verticalmente até pousar no solo. De acordo com as orientações, o helicóptero pousou em um local cuja altitude é`,
    images: ['/enem/2010/images/enem_2010_d2_q156.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `menor ou igual a 200 m.` },
      { id: 'B', type: 'text', value: `maior que 200 m e menor ou igual a 400 m.` },
      { id: 'C', type: 'text', value: `maior que 400 m e menor ou igual a 600 m.` },
      { id: 'D', type: 'text', value: `maior que 600 m e menor ou igual a 800 m.` },
      { id: 'E', type: 'text', value: `maior que 800 m.` },
    ],
    correct: 'A',
    explanation: `Partindo de X = (longitude 20; latitude 60) e aplicando o percurso: 0,8° L → long 20,8; 0,5° N → lat 60,5; 0,2° O → long 20,6; 0,1° S → lat 60,4; 0,4° N → lat 60,8; 0,3° L → long 20,9. O ponto final (20,9; 60,8) localiza-se, na escala de tons do mapa, em região de tonalidade escura correspondente à menor altitude, ou seja, altitude menor ou igual a 200 m. Resposta: A.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 157,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Para construir uma manilha de esgoto, um cilindro com 2 m de diâmetro e 4 m de altura (de espessura desprezível), foi envolvido homogeneamente por uma camada de concreto, contendo 20 cm de espessura. Supondo que cada metro cúbico de concreto custe R$ 10,00 e tomando 3,1 como valor aproximado de π , então o preço dessa manilha é igual a`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `R$ 230,40.` },
      { id: 'B', type: 'text', value: `R$ 124,00.` },
      { id: 'C', type: 'text', value: `R$ 104,16.` },
      { id: 'D', type: 'text', value: `R$ 54,56.` },
      { id: 'E', type: 'text', value: `R$ 49,60.` },
    ],
    correct: 'D',
    explanation: `A camada de concreto é uma coroa cilíndrica: raio interno 1 m (diâmetro 2 m) e raio externo 1 + 0,20 = 1,2 m, altura 4 m. Volume = π(R² − r²)·h = π(1,2² − 1²)·4 = π·0,44·4 = 1,76π. Com π = 3,1: 1,76·3,1 = 5,456 m³. Custo = 5,456·10 = R$ 54,56. Resposta: D.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 158,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `No manejo sustentável de florestas, é preciso muitas vezes obter o volume da tora que pode ser obtida a partir de uma árvore. Para isso, existe um método prático, em que se mede a circunferência da árvore à altura do peito de um homem (1,30 m), conforme indicado na figura. A essa medida denomina-se “rodo” da árvore. O quadro a seguir indica a fórmula para se cubar , ou seja, obter o volume da tora em m³ a partir da medida do rodo e da altura da árvore. O volume da tora em m³ é dado por V = rodo 2 × altura × 0,06 O rodo e a altura da árvore devem ser medidos em metros. O coeficiente 0,06 foi obtido experimentalmente. Um técnico em manejo florestal recebeu a missão de cubar, abater e transportar cinco toras de madeira, de duas espécies diferentes, sendo • 3 toras da espécie I, com 3 m de rodo, 12 m de comprimento e densidade 0,77 toneladas/m³ ; • 2 toras da espécie II, com 4 m de rodo, 10 m de comprimento e densidade 0,78 toneladas/m³ . Após realizar seus cálculos, o técnico solicitou que enviassem caminhões para transportar uma carga de, aproximadamente,`,
    images: ['/enem/2010/images/enem_2010_d2_q158.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `29,9 toneladas.` },
      { id: 'B', type: 'text', value: `31,1 toneladas.` },
      { id: 'C', type: 'text', value: `32,4 toneladas.` },
      { id: 'D', type: 'text', value: `35,3 toneladas.` },
      { id: 'E', type: 'text', value: `41,8 toneladas.` },
    ],
    correct: 'A',
    explanation: `Volume V = rodo²·altura·0,06. Espécie I (3 toras, rodo 3 m, 12 m): V = 9·12·0,06 = 6,48 m³; massa = 6,48·0,77 ≈ 4,99 t; ×3 ≈ 14,97 t. Espécie II (2 toras, rodo 4 m, 10 m): V = 16·10·0,06 = 9,6 m³; massa = 9,6·0,78 = 7,488 t; ×2 ≈ 14,98 t. Total ≈ 14,97 + 14,98 ≈ 29,9 toneladas. Resposta: A.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 159,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Embora o Índice de Massa Corporal (IMC) seja amplamente utilizado, existem ainda inúmeras restrições teóricas ao uso e às faixas de normalidade preconizadas. O Recíproco do Índice Ponderal (RIP), de acordo com o modelo alométrico, possui uma melhor fundamentação matemática, ja que a massa e uma variável de dimensões cúbicas e a altura, uma variável de dimensões lineares. As fórmulas que determinam esses índices são: 2 ) ( m altura kg massa IMC = cm altura RIP = massa ) ( ( ) [ ] 3 ) ( kg ARAÚJO, C. G. S.; RICARDO, D. R. Índice de Massa Corporal: Um Questionamento Científico Baseado em Evidencias . Arq. Bras. Cardiologia, volume 79, nº 1, 2002 (adaptado). Se uma menina, com 64 kg de massa, apresenta IMC igual a 25 kg/m² , então ela possui RIP igual a`,
    images: ['/enem/2010/images/enem_2010_d2_q159.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `0,4 cm/kg 1/3 .` },
      { id: 'B', type: 'text', value: `2,5 cm/kg 1/3 .` },
      { id: 'C', type: 'text', value: `8 cm/kg 1/3 .` },
      { id: 'D', type: 'text', value: `20 cm/kg 1/3 .` },
      { id: 'E', type: 'text', value: `40 cm/kg 1/3 .` },
    ],
    correct: 'E',
    explanation: `IMC = massa/altura² = 25 → 64/altura² = 25 → altura² = 64/25 = 2,56 → altura = 1,6 m = 160 cm. RIP = altura(cm)/∛massa(kg) = 160/∛64 = 160/4 = 40 cm/kg^(1/3). Resposta: E.`,
    subject: ['mat'],
    topics: ['Equações e inequações', 'Questões aleatórias'],
  },
  {
    id: 160,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Um balão atmosférico, lançado em Bauru (343 quilômetros a Noroeste de São Paulo), na noite do último domingo, caiu nesta segunda-feira em Cuiabá Paulista, na região de Presidente Prudente, assustando agricultores da região. O artefato faz parte do programa Projeto Hibiscus, desenvolvido por Brasil, França, Argentina, Inglaterra e Itália, para a medição do comportamento da camada de ozônio, e sua descida se deu após o cumprimento do tempo previsto de medição. Disponível em: http://www.correiodobrasil.com.br. Acesso em: 02 maio 2010. Na data do acontecido, duas pessoas avistaram o balão. Uma estava a 1,8 km da posição vertical do balão e o avistou sob um ângulo de 60°; a outra estava a 5,5 km da posição vertical do balão, alinhada com a primeira, e no mesmo sentido, conforme se vê na figura, e o avistou sob um ângulo de 30°. Qual a altura aproximada em que se encontrava o balão?`,
    images: ['/enem/2010/images/enem_2010_d2_q160.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1,8 km` },
      { id: 'B', type: 'text', value: `1,9 km` },
      { id: 'C', type: 'text', value: `3,1 km` },
      { id: 'D', type: 'text', value: `3,7 km` },
      { id: 'E', type: 'text', value: `5,5 km` },
    ],
    correct: 'C',
    explanation: `A pessoa a 1,8 km da projeção vertical do balão o vê sob 60°. No triângulo retângulo: tan 60° = altura/1,8, logo altura = 1,8·tan 60° = 1,8·√3 ≈ 1,8·1,73 ≈ 3,1 km. (Confere com o outro observador a 5,5 km sob 30°: 5,5·tan 30° ≈ 5,5·0,577 ≈ 3,17 km.) Altura aproximada ≈ 3,1 km. Resposta: C.`,
    subject: ['mat'],
    topics: ['Trigonometria', 'Questões aleatórias'],
  },
  {
    id: 161,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Em canteiros de obras de construção civil é comum perceber trabalhadores realizando medidas de comprimento e de ângulos e fazendo demarcações por onde a obra deve começar ou se erguer. Em um desses canteiros foram feitas algumas marcas no chão plano. Foi possível perceber que, das seis estacas colocadas, três eram vértices de um triângulo retângulo e as outras três eram os pontos médios dos lados desse triângulo, conforme pode ser visto na figura, em que as estacas foram indicadas por letras. A região demarcada pelas estacas A, B, M e N deveria ser calçada com concreto. Nessas condições, a área a ser calçada corresponde`,
    images: ['/enem/2010/images/enem_2010_d2_q161.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `à mesma área do triângulo AMC.` },
      { id: 'B', type: 'text', value: `à mesma área do triângulo BNC.` },
      { id: 'C', type: 'text', value: `à metade da área formada pelo triângulo ABC.` },
      { id: 'D', type: 'text', value: `ao dobro da área do triângulo MNC.` },
      { id: 'E', type: 'text', value: `ao triplo da área do triângulo MNC.` },
    ],
    correct: 'E',
    explanation: `Seja o triângulo retângulo com A na origem, B = (0, b) e C = (c, 0); P, M, N são pontos médios de AB, BC e AC. Então P=(0, b/2), N=(c/2, 0), M=(c/2, b/2). A região ABMN tem vértices A(0,0), B(0,b), M(c/2,b/2), N(c/2,0); por cálculo de área (Shoelace) resulta 3bc/8. O triângulo MNC tem área bc/8. Logo a área calçada (ABMN) é 3·(bc/8), ou seja, o triplo da área do triângulo MNC. Resposta: E.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 162,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `O jornal de certa cidade publicou em uma página inteira a seguinte divulgação de seu caderno de classificados. Para que a propaganda seja fidedigna à porcentagem da área que aparece na divulgação, a medida do lado do retângulo que representa os 4%, deve ser de aproximadamente`,
    images: ['/enem/2010/images/enem_2010_d2_q162.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 mm.` },
      { id: 'B', type: 'text', value: `10 mm.` },
      { id: 'C', type: 'text', value: `17 mm.` },
      { id: 'D', type: 'text', value: `160 mm.` },
      { id: 'E', type: 'text', value: `167 mm.` },
    ],
    correct: 'D',
    explanation: `O retângulo total mede 260 mm × 400 mm, área = 104 000 mm². Para ser fiel, a faixa dos 4% deve ter área = 0,04·104 000 = 4 160 mm². Essa faixa é um retângulo de 26 mm de largura por x mm: 26·x = 4 160 → x = 160 mm. Resposta: D.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 163,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `A ideia de usar rolos circulares para deslocar objetos pesados provavelmente surgiu com os antigos egípcios ao construírem as pirâmides. R BOLT, Brian. Atividades matemáticas .Ed.Gradiva. Representando por R o raio da base dos rolos cilíndricos, em metros, a expressão do deslocamento horizontal y do bloco de pedra em função de R, após o rolo ter dado uma volta completa sem deslizar, é`,
    images: ['/enem/2010/images/enem_2010_d2_q163.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `y = R.` },
      { id: 'B', type: 'text', value: `y = 2R.` },
      { id: 'C', type: 'text', value: `y = π R.` },
      { id: 'D', type: 'text', value: `y = 2 π R.` },
      { id: 'E', type: 'text', value: `y = 4 π R.` },
    ],
    correct: 'E',
    explanation: `Ao dar uma volta completa sem deslizar, o centro do rolo avança uma distância igual à circunferência, 2πR. Mas o bloco de pedra apoia-se sobre o topo dos rolos, e o ponto do alto de um cilindro que rola tem velocidade (e deslocamento) igual ao dobro do centro. Logo o bloco desloca-se y = 2·(2πR) = 4πR. Resposta: E.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 164,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Uma metalúrgica recebeu uma encomenda para fabricar, em grande quantidade, uma peça com o formato de um prisma reto com base triangular, cujas dimensões da base são 6 cm, 8 cm e 10 cm e cuja altura é 10 cm. Tal peça deve ser vazada de tal maneira que a perfuração na forma de um cilindro circular reto seja tangente às suas faces laterais, conforme mostra a figura. O raio da perfuração da peça é igual a`,
    images: ['/enem/2010/images/enem_2010_d2_q164.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 cm.` },
      { id: 'B', type: 'text', value: `2 cm.` },
      { id: 'C', type: 'text', value: `3 cm.` },
      { id: 'D', type: 'text', value: `4 cm.` },
      { id: 'E', type: 'text', value: `5 cm.` },
    ],
    correct: 'B',
    explanation: `A base é um triângulo de lados 6, 8 e 10 (retângulo, pois 6²+8²=10²). O cilindro tangente às faces laterais tem raio igual ao raio da circunferência inscrita na base. Área do triângulo = (6·8)/2 = 24; semiperímetro s = (6+8+10)/2 = 12. Raio inscrito r = Área/s = 24/12 = 2 cm. Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 165,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Nos processos industriais, como na indústria de cerâmica, é necessário o uso de fornos capazes de produzir elevadas temperaturas e, em muitas situações, o tempo de elevação dessa temperatura deve ser controlado, para garantir a qualidade do produto final e a economia no processo. Em uma indústria de cerâmica, o forno é programado para elevar a temperatura ao longo do tempo de acordo com a função em que T é o valor da temperatura atingida pelo forno, em graus Celsius, e t é o tempo, em minutos, decorrido desde o instante em que o forno é ligado. Uma peça deve ser colocada nesse forno quando a temperatura for 48 °C e retirada quando a temperatura for 200 °C. O tempo de permanência dessa peça no forno é, em minutos, igual a`,
    images: ['/enem/2010/images/enem_2010_d2_q165.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `100.` },
      { id: 'B', type: 'text', value: `108.` },
      { id: 'C', type: 'text', value: `128.` },
      { id: 'D', type: 'text', value: `130.` },
      { id: 'E', type: 'text', value: `150.` },
    ],
    correct: 'D',
    explanation: `Entrada a 48 °C (0 ≤ t < 100): 48 = (7/5)t + 20 → (7/5)t = 28 → t = 20 min. Como em t=100 a temperatura é 160 °C, os 200 °C ocorrem no 2º ramo: (2/125)t² − (16/5)t + 320 = 200 → t² − 200t + 7500 = 0 → t = (200 ± 100)/2 = 50 ou 150; como t ≥ 100, t = 150 min. Permanência = 150 − 20 = 130 minutos. Resposta: D.`,
    subject: ['mat'],
    topics: ['Funções', 'Equações e inequações', 'Questões aleatórias'],
  },
  {
    id: 166,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `O gráfico mostra o número de favelas no município do Rio de Janeiro entre 1980 e 2004, considerando que a variação nesse número entre os anos considerados é linear. Favela Tem Memória. Época . Nº 621, 12 abr. 2010 (adaptado). Se o padrão na variação do período 2004/2010 se mantiver nos próximos 6 anos, e sabendo que o número de favelas em 2010 é 968, então o número de favelas em 2016 será`,
    images: ['/enem/2010/images/enem_2010_d2_q166.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `menor que 1 150.` },
      { id: 'B', type: 'text', value: `218 unidades maior que em 2004.` },
      { id: 'C', type: 'text', value: `maior que 1 150 e menor que 1 200.` },
      { id: 'D', type: 'text', value: `177 unidades maior que em 2010.` },
      { id: 'E', type: 'text', value: `maior que 1 200.` },
    ],
    correct: 'C',
    explanation: `A variação de favelas de 2004 (750) a 2010 (968) foi de 968 − 750 = 218 em 6 anos. Mantendo o mesmo padrão linear nos 6 anos seguintes (2010 a 2016), o acréscimo será igual: 968 + 218 = 1 186. Esse valor é maior que 1 150 e menor que 1 200. Resposta: C.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 167,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `O gráfico apresenta a quantidade de gols marcados pelos artilheiros das Copas do Mundo desde a Copa de 1930 até a de 2006. Quantidades de Gols dos Artilheiros das Copas do Mundo Disponível em: http://www.suapesquisa.com. Acesso em: 23 abr. 2010 (adaptado). A partir dos dados apresentados, qual a mediana das quantidades de gols marcados pelos artilheiros das Copas do Mundo?`,
    images: ['/enem/2010/images/enem_2010_d2_q167.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `6 gols` },
      { id: 'B', type: 'text', value: `6,5 gols` },
      { id: 'C', type: 'text', value: `7 gols` },
      { id: 'D', type: 'text', value: `7,3 gols` },
      { id: 'E', type: 'text', value: `8,5 gols` },
    ],
    correct: 'B',
    explanation: `São 18 Copas (dados pontuais no gráfico). Ordenando as quantidades de gols e sendo par o número de valores, a mediana é a média dos 9º e 10º termos. Esses valores centrais são 6 e 7, logo a mediana = (6 + 7)/2 = 6,5 gols. Resposta: B.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 168,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Em um casamento, os donos da festa serviam champanhe aos seus convidados em taças com formato de um hemisfério (Figura 1), porém um acidente na cozinha culminou na quebra de grande parte desses recipientes. Para substituir as taças quebradas, utilizou-se um outro tipo com formato de cone (Figura 2). No entanto, os noivos solicitaram que o volume de champanhe nos dois tipos de taças fosse igual. Considere: Sabendo que a taça com o formato de hemisfério é servida completamente cheia, a altura do volume de champanhe que deve ser colocado na outra taça, em centímetros, é de`,
    images: ['/enem/2010/images/enem_2010_d2_q168.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1,33.` },
      { id: 'B', type: 'text', value: `6,00.` },
      { id: 'C', type: 'text', value: `12,00.` },
      { id: 'D', type: 'text', value: `56,52.` },
      { id: 'E', type: 'text', value: `113,04.` },
    ],
    correct: 'B',
    explanation: `Taça hemisfério (R = 3) cheia: V = (1/2)·(4/3)πR³ = (2/3)π·27 = 18π cm³. Taça cone (R = 3, altura h): V = (1/3)πR²h = (1/3)π·9·h = 3πh. Igualando os volumes: 3πh = 18π → h = 6 cm. Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 169,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `O Salto Triplo e uma modalidade do atletismo em que o atleta da um salto em um só pé, uma passada e um salto, nessa ordem. Sendo que o salto com impulsão em um só pé será feito de modo que o atleta caia primeiro sobre o mesmo pé que deu a impulsão; na passada ele cairá com o outro pé, do qual o salto é realizado. Disponível em: www.cbat.org.br (adaptado). Um atleta da modalidade Salto Triplo, depois de estudar seus movimentos, percebeu que, do segundo para o primeiro salto, o alcance diminuía em 1,2 m, e, do terceiro para o segundo salto, o alcance diminuía 1,5 m. Querendo atingir a meta de 17,4 m nessa prova e considerando os seus estudos, a distância alcançada no primeiro salto teria de estar entre`,
    images: ['/enem/2010/images/enem_2010_d2_q169.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `4,0 m e 5,0 m.` },
      { id: 'B', type: 'text', value: `5,0 m e 6,0 m.` },
      { id: 'C', type: 'text', value: `6,0 m e 7,0 m.` },
      { id: 'D', type: 'text', value: `7,0 m e 8,0 m.` },
      { id: 'E', type: 'text', value: `8,0 m e 9,0 m.` },
    ],
    correct: 'D',
    explanation: `Sejam os saltos x (1º), x−1,2 (2º, pois diminui 1,2 m) e (x−1,2)−1,5 = x−2,7 (3º). Soma = 17,4: x + (x−1,2) + (x−2,7) = 3x − 3,9 = 17,4 → 3x = 21,3 → x = 7,1 m. Logo o 1º salto estaria entre 7,0 m e 8,0 m. Resposta: D.`,
    subject: ['mat'],
    topics: ['Equações e inequações', 'Questões aleatórias'],
  },
  {
    id: 170,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Marco e Paulo foram classificados em um concurso. Para classificação no concurso o candidato deveria obter média aritmética na pontuação igual ou superior a 14. Em caso de empate na média, o desempate seria em favor da pontuação mais regular. No quadro a seguir são apresentados os pontos obtidos nas provas de Matemática, Português e Conhecimentos Gerais, a média, a mediana e o desvio padrão dos dois candidatos. Dados dos candidatos no concurso Matemática Português Conhecimentos O candidato com pontuação mais regular, portanto mais bem classificado no concurso, é Marco, pois a média e a mediana são iguais.`,
    images: ['/enem/2010/images/enem_2010_d2_q170.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Marco, pois obteve menor desvio padrão.` },
      { id: 'B', type: 'text', value: `Paulo, pois obteve a maior pontuação da tabela, 19` },
      { id: 'C', type: 'text', value: `em Português.` },
      { id: 'D', type: 'text', value: `Paulo, pois obteve maior mediana.` },
      { id: 'E', type: 'text', value: `Paulo, pois obteve maior desvio padrão.` },
    ],
    correct: 'B',
    explanation: `Ambos têm média 15 (≥ 14), havendo empate. O desempate é a favor da pontuação mais regular, isto é, de menor desvio padrão. Marco tem desvio 0,32 e Paulo 4,97; como 0,32 < 4,97, Marco é mais regular e fica mais bem classificado por ter menor desvio padrão. Resposta: B.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 171,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Um grupo de pacientes com Hepatite C foi submetido a um tratamento tradicional em que 40% desses pacientes foram completamente curados. Os pacientes que não obtiveram cura foram distribuídos em dois grupos de mesma quantidade e submetidos a dois tratamentos inovadores. No primeiro tratamento inovador, 35% dos pacientes foram curados e, no segundo, 45%. Em relação aos pacientes submetidos inicialmente, os tratamentos inovadores proporcionaram cura de`,
    alternatives: [
      { id: 'A', type: 'text', value: `16%.` },
      { id: 'B', type: 'text', value: `24%.` },
      { id: 'C', type: 'text', value: `32%.` },
      { id: 'D', type: 'text', value: `48%.` },
      { id: 'E', type: 'text', value: `64%.` },
    ],
    correct: 'B',
    explanation: `Dos pacientes, 40% foram curados no tratamento tradicional, restando 60% não curados, divididos em dois grupos iguais de 30% cada. No 1º tratamento inovador cura-se 35% de 30% = 10,5%; no 2º, 45% de 30% = 13,5%. Em relação ao total inicial, os inovadores curaram 10,5% + 13,5% = 24%. Resposta: B.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 172,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Em 2006, a produção mundial de etanol foi de 40 bilhões de litros e a de biodiesel, de 6,5 bilhões. Neste mesmo ano, a produção brasileira de etanol correspondeu a 43 % da produção mundial, ao passo que a produção dos Estados Unidos da América, usando milho, foi de 45%. Disponível em: planetasustentavel.abril.com.br. Acesso em: 02 maio 2009. Considerando que, em 2009, a produção mundial de etanol seja a mesma de 2006 e que os Estados Unidos produzirão somente a metade de sua produção de 2006, para que o total produzido pelo Brasil e pelos Estados Unidos continue correspondendo a 88% da produção mundial, o Brasil deve aumentar sua produção em, aproximadamente,`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `22,5%.` },
      { id: 'B', type: 'text', value: `50,0%.` },
      { id: 'C', type: 'text', value: `52,3%.` },
      { id: 'D', type: 'text', value: `65,5%.` },
      { id: 'E', type: 'text', value: `77,5%.` },
    ],
    correct: 'C',
    explanation: `Produção mundial de etanol: 40 bilhões. Em 2006, Brasil = 43% de 40 = 17,2; EUA = 45% de 40 = 18. Em 2009 os EUA produzem a metade: 9 bilhões. Para Brasil + EUA = 88% de 40 = 35,2, o Brasil deve produzir 35,2 − 9 = 26,2 bilhões. Aumento = 26,2 − 17,2 = 9, que sobre 17,2 dá 9/17,2 ≈ 0,523 = 52,3%. Resposta: C.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 173,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `João mora na cidade A e precisa visitar cinco clientes, localizados em cidades diferentes da sua. Cada trajeto possível pode ser representado por uma sequência de 7 letras. Por exemplo, o trajeto ABCDEFA, informa que ele sairá da cidade A, visitando as cidades B, C, D, E e F nesta ordem, voltando para a cidade A. Além disso, o número indicado entre as letras informa o custo do deslocamento entre as cidades. A figura mostra o custo de deslocamento entre cada uma das cidades. Como João quer economizar, ele precisa determinar qual o trajeto de menor custo para visitar os cinco clientes. Examinando a figura, percebe que precisa considerar somente parte das sequências, pois os trajetos ABCDEFA e AFEDCBA têm o mesmo custo. Ele gasta 1min30s para examinar uma sequência e descartar sua simétrica, conforme apresentado. O tempo mínimo necessário para João verificar todas as sequências possíveis no problema é de`,
    images: ['/enem/2010/images/enem_2010_d2_q173.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `60 min.` },
      { id: 'B', type: 'text', value: `90 min.` },
      { id: 'C', type: 'text', value: `120 min.` },
      { id: 'D', type: 'text', value: `180 min.` },
      { id: 'E', type: 'text', value: `360 min.` },
    ],
    correct: 'B',
    explanation: `João visita 5 clientes (B, C, D, E, F) saindo e voltando a A, logo há 5! = 120 sequências possíveis. Como cada trajeto e sua simétrica (inversa) têm o mesmo custo, basta examinar metade: 120/2 = 60 sequências. Cada verificação leva 1 min 30 s = 1,5 min, então 60·1,5 = 90 minutos. Resposta: B.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 174,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `O diretor de um colégio leu numa revista que os pés das mulheres estavam aumentando. Há alguns anos, a média do tamanho dos calçados das mulheres era de 35,5 e, hoje, é de 37,0. Embora não fosse uma informação científica, ele ficou curioso e fez uma pesquisa com as funcionárias do seu colégio, obtendo o quadro a seguir: Escolhendo uma funcionária ao acaso e sabendo que ela tem calçado maior que 36,0, a probabilidade de ela calçar 38,0 é 1 3 1 5 2`,
    images: ['/enem/2010/images/enem_2010_d2_q174.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1/3` },
      { id: 'B', type: 'text', value: `1/5` },
      { id: 'C', type: 'text', value: `2/5` },
      { id: 'D', type: 'text', value: `5/7` },
      { id: 'E', type: 'text', value: `5/14` },
    ],
    correct: 'D',
    explanation: `Calçados maiores que 36,0 são 37,0; 38,0 e 39,0, com 3 + 10 + 1 = 14 funcionárias (espaço reduzido). A probabilidade condicional de calçar 38,0 dado que é maior que 36,0 é 10/14 = 5/7. Resposta: D.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 175,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `O quadro seguinte mostra o desempenho de um time de futebol no último campeonato. A coluna da esquerda mostra o número de gols marcados e a coluna da direita informa em quantos jogos o time marcou aquele número de gols. Se X, Y e Z são, respectivamente, a média, a mediana e a moda desta distribuição, então`,
    images: ['/enem/2010/images/enem_2010_d2_q175.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `X = Y < Z.` },
      { id: 'B', type: 'text', value: `Z < X = Y.` },
      { id: 'C', type: 'text', value: `Y < Z < X.` },
      { id: 'D', type: 'text', value: `Z < X < Y.` },
      { id: 'E', type: 'text', value: `Z < Y < X.` },
    ],
    correct: 'E',
    explanation: `Total de partidas = 5+3+4+3+2+2+1 = 20. Média X = (0·5+1·3+2·4+3·3+4·2+5·2+7·1)/20 = 45/20 = 2,25. Mediana Y: com 20 valores, os 10º e 11º termos são ambos 2, logo Y = 2. Moda Z = 0 (valor mais frequente, 5 partidas). Assim Z (0) < Y (2) < X (2,25). Resposta: E.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 176,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `A disparidade de volume entre os planetas é tão grande que seria possível colocá-los uns dentro dos outros. O planeta Mercúrio é o menor de todos. Marte é o segundo menor: dentro dele cabem três Mercúrios. Terra é o único com vida: dentro dela cabem sete Martes. Netuno é o quarto maior: dentro dele cabem 58 Terras. Júpiter é o maior dos planetas: dentro dele cabem 23 Netunos. Revista Veja . Ano 41, nº 25, 25 jun. 2008 (adaptado). Seguindo o raciocínio proposto, quantas Terras cabem dentro de Júpiter?`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `406` },
      { id: 'B', type: 'text', value: `1 334` },
      { id: 'C', type: 'text', value: `4 002` },
      { id: 'D', type: 'text', value: `9 338` },
      { id: 'E', type: 'text', value: `28 014` },
    ],
    correct: 'B',
    explanation: `Dentro de Júpiter cabem 23 Netunos, e dentro de cada Netuno cabem 58 Terras. Logo o número de Terras em Júpiter é 23·58 = 1 334. Resposta: B.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 177,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Um dos grandes problemas da poluição dos mananciais (rios, córregos e outros) ocorre pelo hábito de jogar óleo utilizado em frituras nos encanamentos que estão interligados com o sistema de esgoto. Se isso ocorrer, cada 10 litros de óleo poderão contaminar 10 milhões (10⁷) de litros de água potável. Manual de etiqueta. Parte integrante das revistas Veja (ed. 2055), Cláudia (ed. 555), National Geographic (ed. 93) e Nova Escola (ed. 208) (adaptado). Suponha que todas as famílias de uma cidade descartem os óleos de frituras através dos encanamentos e consomem 1 000 litros de óleo em frituras por semana. Qual seria, em litros, a quantidade de água potável contaminada por semana nessa cidade?`,
    alternatives: [
      { id: 'A', type: 'text', value: `10⁻²` },
      { id: 'B', type: 'text', value: `10³` },
      { id: 'C', type: 'text', value: `10⁴` },
      { id: 'D', type: 'text', value: `10⁶` },
      { id: 'E', type: 'text', value: `10⁹` },
    ],
    correct: 'E',
    explanation: `Cada 10 litros de óleo contaminam 10 milhões (10⁷) de litros de água, ou seja, 1 litro de óleo contamina 10⁶ litros de água. Com 1 000 litros de óleo por semana: 1 000·10⁶ = 10³·10⁶ = 10⁹ litros de água contaminada. Resposta: E.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 178,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Um porta-lápis de madeira foi construído no formato cúbico, seguindo o modelo ilustrado a seguir. O cubo de dentro é vazio. A aresta do cubo maior mede 12 cm e a do cubo menor, que é interno, mede 8 cm. O volume de madeira utilizado na confecção desse objeto foi de`,
    images: ['/enem/2010/images/enem_2010_d2_q178.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `12 cm³.` },
      { id: 'B', type: 'text', value: `64 cm³.` },
      { id: 'C', type: 'text', value: `96 cm³.` },
      { id: 'D', type: 'text', value: `1 216 cm³.` },
      { id: 'E', type: 'text', value: `1 728 cm³.` },
    ],
    correct: 'D',
    explanation: `Cubo maior: aresta 12 cm → volume 12³ = 1 728 cm³. Cubo interno vazio: aresta 8 cm → volume 8³ = 512 cm³. O volume de madeira é a diferença: 1 728 − 512 = 1 216 cm³. Resposta: D.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 179,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Ronaldo é um garoto que adora brincar com números. Numa dessas brincadeiras, empilhou caixas numeradas de acordo com a sequência conforme mostrada no esquema a seguir. 1 1 2 1 1 2 3 2 1 1 2 3 4 3 2 1 ... Ele percebeu que a soma dos números em cada linha tinha uma propriedade e que, por meio dessa propriedade, era possível prever a soma de qualquer linha posterior às já construídas. A partir dessa propriedade, qual será a soma da 9ª linha da sequência de caixas empilhadas por Ronaldo?`,
    images: ['/enem/2010/images/enem_2010_d2_q179.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `9` },
      { id: 'B', type: 'text', value: `45` },
      { id: 'C', type: 'text', value: `64` },
      { id: 'D', type: 'text', value: `81` },
      { id: 'E', type: 'text', value: `285` },
    ],
    correct: 'D',
    explanation: `As somas das linhas são: linha 1 = 1; linha 2 = 1+2+1 = 4; linha 3 = 1+2+3+2+1 = 9; linha 4 = 1+2+3+4+3+2+1 = 16. O padrão é a soma da linha n igual a n². Para a 9ª linha: 9² = 81. Resposta: D.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Questões aleatórias'],
  },
  {
    id: 180,
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Para conseguir chegar a um número recorde de produção de ovos de Páscoa, as empresas brasileiras começam a se planejar para esse período com um ano de antecedência. O gráfico a seguir mostra o número de ovos de Páscoa produzidos no Brasil no período de 2005 a 2009. Revista Veja . São Paulo: Abril, ed. 2107, nº 14, ano 42. De acordo com o gráfico, o biênio que apresentou maior produção acumulada foi`,
    images: ['/enem/2010/images/enem_2010_d2_q180.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `2004-2005.` },
      { id: 'B', type: 'text', value: `2005-2006.` },
      { id: 'C', type: 'text', value: `2006-2007.` },
      { id: 'D', type: 'text', value: `2007-2008.` },
      { id: 'E', type: 'text', value: `2008-2009.` },
    ],
    correct: 'E',
    explanation: `Produções (milhões): 2005=90, 2006=94, 2007=99, 2008=107, 2009=113. Soma acumulada por biênio: 2005-2006 = 184; 2006-2007 = 193; 2007-2008 = 206; 2008-2009 = 220. O maior acumulado é o do biênio 2008-2009 (220 milhões). Resposta: E.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 181,
    displayId: 91,
    language: 'en',
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `THE DEATH OF THE PC
The days of paying for costly software
upgrades are numbered. The PC will
soon be obsolete. And BusinessWeek
reports 70% of Americans are
already using the technology that
will replace it. Merrill Lynch calls it
“a $160 billion tsunami.” Computing
giants including IBM, Yahoo!, and
Amazon are racing to be the first to
cash in on this PC-killing revolution.
Yet, two little-known companies have
a huge head start. Get their names
in a free report from The Motley Fool
called, “The Two Words Bill Gates
Doesn´t Want You to Hear...”
Click here for instant access to this FREE report!
BROUGHT TO YOU BY THE MOTLEY FOOL
Disponível em: http://www.fool.com. Acesso em: 21 jul. 2010.
Ao optar por ler a reportagem completa sobre o assunto
anunciado, tem-se acesso a duas palavras que Bill Gates
não quer que o leitor conheça e que se referem`,
    alternatives: [
      { id: 'A', type: 'text', value: `aos responsáveis pela divulgação desta informação
na internet.` },
      { id: 'B', type: 'text', value: `às marcas mais importantes de microcomputadores
do mercado.` },
      { id: 'C', type: 'text', value: `aos nomes dos americanos que inventaram a
suposta tecnologia.` },
      { id: 'D', type: 'text', value: `aos sites da internet pelos quais o produto já pode
ser conhecido.` },
      { id: 'E', type: 'text', value: `às empresas que levam vantagem para serem suas
concorrentes.` },
    ],
    correct: 'E',
    explanation: `Resposta correta: E. O anúncio 'The Death of the PC' promete revelar, no relatório gratuito, 'duas palavras que Bill Gates não quer que você conheça'. O próprio texto antecipa que se trata dos nomes de duas empresas pouco conhecidas que largaram na frente ('a huge head start'), ou seja, companhias em vantagem para concorrer no novo mercado tecnológico, o que corresponde à alternativa E. A C erra ao falar em inventores da tecnologia, e não em empresas; a B e a D se referem a marcas de microcomputadores e a sites de venda, ideias que o texto não apresenta; e a A inventa responsáveis pela divulgação da informação.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 182,
    displayId: 92,
    language: 'en',
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Viva la Vida
I used to rule the world
Seas would rise when I gave the word
Now in the morning and I sleep alone
Sweep the streets I used to own
I used to roll the dice
Feel the fear in my enemy's eyes
Listen as the crowd would sing
“Now the old king is dead! Long live the king!”
One minute I held the key
Next the walls were closed on me
And I discovered that my castles stand
Upon pillars of salt and pillars of sand
[…]
MARTIN, C. Viva la vida, Coldplay. In: Viva la vida or Death and all his friends. Parlophone, 2008.
Letras de músicas abordam temas que, de certa forma,
podem ser reforçados pela repetição de trechos ou
palavras. O fragmento da canção Viva la vida, por
exemplo, permite conhecer o relato de alguém que`,
    alternatives: [
      { id: 'A', type: 'text', value: `costumava ter o mundo aos seus pés e, de repente,
se viu sem nada.` },
      { id: 'B', type: 'text', value: `almeja o título de rei e, por ele, tem enfrentado
inúmeros inimigos.` },
      { id: 'C', type: 'text', value: `causa pouco temor a seus inimigos, embora tenha
muito poder.` },
      { id: 'D', type: 'text', value: `limpava as ruas e, com seu esforço, tornou-se rei de
seu povo.` },
      { id: 'E', type: 'text', value: `tinha a chave para todos os castelos nos quais
desejava morar.` },
    ],
    correct: 'A',
    explanation: `Resposta correta: A. O fragmento da canção 'Viva la Vida' constrói a voz de alguém que outrora governava o mundo ('I used to rule the world') e que, de repente, perdeu tudo, passando a dormir sozinho e a varrer as ruas que um dia possuiu. Essa trajetória de queda, de quem tinha o mundo aos seus pés e se viu sem nada, corresponde à alternativa A. A D inverte a história (o eu lírico não ascendeu pelo esforço, mas decaiu), e a E interpreta mal o verso sobre segurar a chave, pois logo em seguida as paredes se fecham sobre ele. A B e a C não se sustentam, já que o personagem já havia sido rei e perdeu o poder, não aspira a ele.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 183,
    displayId: 93,
    language: 'en',
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `THE WEATHER MAN
They say that the British love talking about the weather. For
other nationalities this can be a banal and boring subject
of conversation, something that people talk about when
they have nothing else to say to each other. And yet the
weather is a very important part of our lives. That at least
is the opinion of Barry Gromett, press officer for The Met
Office. This is located in Exeter, a pretty cathedral city in the
southwest of England. Here employees – and computers –
supply weather forecasts for much of the world.
Speak Up. Ano XXIII, nº 275.
Ao conversar sobre a previsão do tempo, o texto mostra`,
    alternatives: [
      { id: 'A', type: 'text', value: `o aborrecimento do cidadão britânico ao falar sobre
banalidades.` },
      { id: 'B', type: 'text', value: `a falta de ter o que falar em situações de avaliação
de línguas.` },
      { id: 'C', type: 'text', value: `a importância de se entender sobre meteorologia
para falar inglês.` },
      { id: 'D', type: 'text', value: `as diferenças e as particularidades culturais no uso
de uma língua.` },
      { id: 'E', type: 'text', value: `o conflito entre diferentes ideias e opiniões ao se
comunicar em inglês.` },
    ],
    correct: 'D',
    explanation: `Resposta correta: D. O texto 'The Weather Man' contrasta o gosto britânico por conversar sobre o tempo com a visão de outras nacionalidades, que consideram o assunto banal e entediante. Esse contraste evidencia as diferenças e particularidades culturais que marcam o uso de uma língua, ideia da alternativa D. A A está errada porque o texto afirma justamente que os britânicos gostam do tema, não que se aborrecem. As alternativas B, C e E deslocam o foco para avaliações de línguas, meteorologia e conflitos de opinião, aspectos que o texto não destaca como centrais.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 184,
    displayId: 94,
    language: 'en',
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `MILLENIUM GOALS
Disponível em: http://www.chris-alexander.co.uk/1191. Acesso em: 28 jul. 2010 (adaptado).
Definidas pelos países membros da Organização das Nações Unidas e por organizações internacionais, as metas de
desenvolvimento do milênio envolvem oito objetivos a serem alcançados até 2015. Apesar da diversidade cultural,
esses objetivos, mostrados na imagem, são comuns ao mundo todo, sendo dois deles:`,
    images: ['/enem/2010/images/enem_2010_d2_q184.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `O combate à AIDS e a melhoria do ensino universitário.` },
      { id: 'B', type: 'text', value: `A redução da mortalidade adulta e a criação de parcerias globais.` },
      { id: 'C', type: 'text', value: `A promoção da igualdade de gêneros e a erradicação da pobreza.` },
      { id: 'D', type: 'text', value: `A parceria global para o desenvolvimento e a valorização das crianças.` },
      { id: 'E', type: 'text', value: `A garantia da sustentabilidade ambiental e o combate ao trabalho infantil.` },
    ],
    correct: 'C',
    explanation: `Resposta correta: C. A imagem apresenta os oito Objetivos de Desenvolvimento do Milênio da ONU, e o enunciado pede dois deles. A alternativa C reúne a promoção da igualdade de gêneros (objetivo 3) e a erradicação da pobreza extrema e da fome (objetivo 1), ambos efetivamente listados. A A erra ao citar ensino universitário, pois o objetivo 2 trata do ensino primário; a B fala em mortalidade adulta, enquanto o objetivo 4 é a mortalidade infantil; a D menciona valorização das crianças, que não é uma das metas; e a E inclui combate ao trabalho infantil, também ausente da lista.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Vocabulário', 'Questões aleatórias'],
  },
  {
    id: 185,
    displayId: 95,
    language: 'en',
    exam: 'enem',
    year: 2010,
    day: 2,
    text: `Os cartões-postais costumam ser
utilizados por viajantes que desejam
enviar notícias dos lugares que visitam
a parentes e amigos. Publicado no
site do projeto ANDRILL, o texto
em formato de cartão-postal tem o
propósito de
Disponível em: http://www.meganbergdesigns.com/andrill/iceberg07/postcards/index.html.
Acesso em: 29 jul. 2010 (adaptado).`,
    images: ['/enem/2010/images/enem_2010_d2_q185.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `comunicar o endereço da nova sede do projeto nos Estados Unidos.` },
      { id: 'B', type: 'text', value: `convidar colecionadores de cartões-postais a se reunirem em um evento.` },
      { id: 'C', type: 'text', value: `anunciar uma nova coleção de selos para angariar fundos para a Antártica.` },
      { id: 'D', type: 'text', value: `divulgar às pessoas a possibilidade de receberem um cartão-postal da Antártica.` },
      { id: 'E', type: 'text', value: `solicitar que as pessoas visitem o site do mencionado projeto com maior frequência.` },
    ],
    correct: 'D',
    explanation: `Resposta correta: D. O texto em formato de cartão-postal do projeto ANDRILL convida o leitor a enviar um envelope com seus dados e um selo para que, em troca, receba um cartão-postal vindo da Antártica ('a postcard to you from the ice'). Assim, seu propósito é divulgar às pessoas a possibilidade de receberem um cartão-postal da Antártica, como afirma a alternativa D. A A e a C erram ao falar em endereço de nova sede e em coleção de selos para arrecadar fundos, informações inexistentes; a B restringe o público a colecionadores reunidos em evento; e a E reduz o objetivo a aumentar as visitas ao site, o que não é o foco do texto.`,
    subject: ['ing'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
];

export default ENEM_2010_D2;
