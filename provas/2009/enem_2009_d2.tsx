import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2009_D2: QuizQuestion[] = [
  {
    id: 91,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Os melhores críticos da cultura brasileira trataram-
na sempre no plural, isto é, enfatizando a coexistência no 
Brasil de diversas culturas. Arthur Ramos distingue as 
culturas não europeias (indígenas, negras) das europeias 
(portuguesa, italiana, alemã etc.), e Darcy Ribeiro fala de 
diversos Brasis: crioulo, caboclo, sertanejo, caipira e de 
Brasis sulinos, a cada um deles correspondendo uma 
cultura específica. 
MORAIS, F. O Brasil na visão do artista: o país e sua cultura. 
São Paulo: Sudameris, 2003. 
Considerando a hipótese de Darcy Ribeiro de que há 
vários Brasis, a opção em que a obra mostrada representa 
a arte brasileira de origem negro-africana é:`,
    alternatives: [
      { id: 'A', type: 'image', value: `/enem/2009/images/enem_2009_d2_q91_A.jpg` },
      { id: 'B', type: 'image', value: `/enem/2009/images/enem_2009_d2_q91_B.jpg` },
      { id: 'C', type: 'image', value: `/enem/2009/images/enem_2009_d2_q91_C.jpg` },
      { id: 'D', type: 'image', value: `/enem/2009/images/enem_2009_d2_q91_D.jpg` },
      { id: 'E', type: 'image', value: `/enem/2009/images/enem_2009_d2_q91_E.jpg` },
    ],
    correct: 'A',
    explanation: `Gabarito: A. A questão parte da hipótese de Darcy Ribeiro de que existem vários "Brasis" culturais e pede a obra que representa a matriz negro-africana. A alternativa A (Rubem Valentim) é correta porque o artista constrói sua obra a partir de signos geométricos inspirados nos símbolos e emblemas das religiões afro-brasileiras, remetendo diretamente à herança africana. As demais falham por representarem outras matrizes ou linguagens: o trabalho de Athos Bulcão (B) é abstração geométrica modernista, o de Gerchman (C) liga-se à arte urbana pop, o de Vasarely (D) é op-art europeia e o mosaico de Gougon (E) remete à tradição greco-romana, nenhum deles ancorado na cultura negro-africana.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 92,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Gerente - Boa tarde. Em que eu posso ajudá-lo? 
Cliente - Estou interessado em financiamento para compra 
de veículo. 
Gerente - Nós dispomos de várias modalidades de crédito. 
O senhor é nosso cliente? 
Cliente - Sou Júlio César Fontoura, também sou 
funcionário do banco. 
Gerente - Julinho, é você, cara? Aqui é a Helena! Cê tá 
em Brasília? Pensei que você inda tivesse na agência de 
Uberlândia! Passa aqui pra gente conversar com calma. 
BORTONI-RICARDO, S. M. Educação em língua materna. 
São Paulo: Parábola, 2004 (adaptado). 
Na representação escrita da conversa telefônica entre a 
gerente do banco e o cliente, observa-se que a maneira de 
falar da gerente foi alterada de repente devido`,
    alternatives: [
      { id: 'A', type: 'text', value: `à adequação de sua fala à conversa com um amigo, 
caracterizada pela informalidade.` },
      { id: 'B', type: 'text', value: `à iniciativa do cliente em se apresentar como 
funcionário do banco.` },
      { id: 'C', type: 'text', value: `ao fato de ambos terem nascido em Uberlândia (Minas 
Gerais).` },
      { id: 'D', type: 'text', value: `à intimidade forçada pelo cliente ao fornecer seu nome 
completo.` },
      { id: 'E', type: 'text', value: `ao seu interesse profissional em financiar o veículo de 
Júlio.` },
    ],
    correct: 'A',
    explanation: `Gabarito: A. O texto reproduz uma conversa telefônica que começa em registro formal (tratamento por "o senhor") e muda bruscamente quando a gerente reconhece o cliente como um conhecido ("Julinho, é você, cara?"). Essa mudança ocorre porque a identificação de um amigo leva a gerente a adequar sua fala a uma situação de intimidade, adotando um registro informal e espontâneo, o que corresponde à alternativa A. As demais falham: a mudança não decorre de o cliente ser funcionário do banco (B) nem de ambos terem nascido em Uberlândia (C); não há intimidade "forçada" pelo cliente (D), e o interesse profissional (E) marcaria justamente a formalidade, não a quebra dela.`,
    subject: ['por'],
    topics: ['Variação linguística', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 93,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Analise as seguintes avaliações de possíveis resultados de 
um teste na Internet. 
 
 
Veja. 8 jul. 2009. p.102 (adaptado). 
Depreende-se, a partir desse conjunto de informações, que 
o teste que deu origem a esses resultados, além de 
estabelecer um perfil para o usuário de sites de 
relacionamento, apresenta preocupação com hábitos e 
propõe mudanças de comportamento direcionadas`,
    images: ['/enem/2009/images/enem_2009_d2_q93.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `ao adolescente que acessa sites de entretenimento.` },
      { id: 'B', type: 'text', value: `ao 
profissional 
interessado 
em 
aperfeiçoamento 
tecnológico.` },
      { id: 'C', type: 'text', value: `à pessoa que usa os sites de relacionamento para 
complementar seu círculo de amizades.` },
      { id: 'D', type: 'text', value: `ao usuário que reserva mais tempo aos sites de 
relacionamento do que ao convívio pessoal com os 
amigos.` },
      { id: 'E', type: 'text', value: `ao leitor que se interessa em aprender sobre o 
funcionamento 
de 
diversos 
tipos 
de 
sites 
de 
relacionamento.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. O teste descrito classifica o usuário de redes sociais em perfis (pragmático, fanático, aprendiz) e, ao comentar o perfil "fanático", recomenda ao internauta sair mais de casa e reencontrar os amigos pessoalmente. Logo, a preocupação e a proposta de mudança de comportamento dirigem-se ao usuário que dedica mais tempo aos sites de relacionamento do que ao convívio pessoal, como afirma a alternativa D. As demais falham por desviarem o foco: não se trata de sites de entretenimento (A), de aperfeiçoamento tecnológico (B), de quem usa as redes apenas como complemento das amizades (C) nem de ensinar o funcionamento dos sites (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 94,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `A música pode ser definida como a combinação 
de sons ao longo do tempo. Cada produto final oriundo da 
infinidade de combinações possíveis será diferente, 
dependendo da escolha das notas, de suas durações, dos 
instrumentos 
utilizados, do estilo de música, da nacionalidade do compositor e do período em que as obras 
foram compostas. 
 `,
    images: ['/enem/2009/images/enem_2009_d2_q94.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 executa um gênero característico da música 
brasileira, conhecido como chorinho.` },
      { id: 'B', type: 'text', value: `2 executa um gênero característico da música 
clássica, cujo compositor mais conhecido é Tom 
Jobim.` },
      { id: 'C', type: 'text', value: `3 executa um gênero característico da música 
europeia, que tem como representantes Beethoven e 
Mozart.` },
      { id: 'D', type: 'text', value: `4 executa um tipo de música caracterizada pelos 
instrumentos acústicos, cuja intensidade e nível de 
ruído permanecem na faixa dos 30 aos 40 decibéis.` },
      { id: 'E', type: 'text', value: `1 a 4 apresentam um produto final bastante 
semelhante, uma vez que as possibilidades de 
combinações sonoras ao longo do tempo são 
limitadas.` },
    ],
    correct: 'A',
    explanation: `Gabarito: A. O texto afirma que a música resulta de combinações de sons que variam conforme instrumentos, estilo e época, e a questão pede a conclusão correta sobre os grupos das figuras. A alternativa A é adequada porque a figura 1 mostra um conjunto com instrumentos típicos (violão, cavaquinho, flauta) de um gênero genuinamente brasileiro, o chorinho. As demais erram nas associações: a figura 2 não executa música clássica de Tom Jobim (B); a figura 3 não representa o repertório europeu de Beethoven e Mozart (C); a figura 4, de uma banda de rock, não se caracteriza por intensidade baixa de 30 a 40 decibéis (D); e as possibilidades sonoras não são limitadas, tampouco os produtos finais são semelhantes (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 95,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `No programa do balé Parade, apresentado em 18 
de maio de 1917, foi empregada publicamente, pela 
primeira vez, a palavra sur-realisme. Pablo Picasso 
desenhou o cenário e a indumentária, cujo efeito foi tão 
surpreendente que se sobrepôs à coreografia. A música de 
Erik Satie era uma mistura de jazz, música popular e sons 
reais tais como tiros de pistola, combinados com as 
imagens do balé de Charlie Chaplin, caubóis e vilões, 
mágica chinesa e Ragtime. Os tempos não eram propícios 
para receber a nova mensagem cênica demasiado 
provocativa devido ao repicar da máquina de escrever, aos 
zumbidos de sirene e dínamo e aos rumores de aeroplano 
previstos por Cocteau para a partitura de Satie. Já a ação 
coreográfica confirmava a tendência marcadamente teatral 
da gestualidade cênica, dada pela justaposição, colagem 
de ações isoladas seguindo um estímulo musical. 
SILVA, S. M. O surrealismo e a dança. GUINSBURG, J.; LEIRNER (Org.). O surrealismo. 
São Paulo: Perspectiva, 2008 (adaptado). 
As manifestações corporais na história das artes da cena 
muitas vezes demonstram as condições cotidianas de um 
determinado grupo social, como se pode observar na 
descrição acima do balé Parade, o qual reflete`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a falta de diversidade cultural na sua proposta estética.` },
      { id: 'B', type: 'text', value: `a alienação dos artistas em relação às tensões da 
Segunda Guerra Mundial.` },
      { id: 'C', type: 'text', value: `uma disputa cênica entre as linguagens das artes 
visuais, do figurino e da música.` },
      { id: 'D', type: 'text', value: `as inovações tecnológicas nas partes cênicas, 
musicais, coreográficas e de figurino.` },
      { id: 'E', type: 'text', value: `uma narrativa com encadeamentos claramente lógicos 
e lineares.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. O texto descreve o balé Parade (1917) como espetáculo de vanguarda em que se combinam cenário e figurino de Picasso, música de Satie mesclada a ruídos (máquina de escrever, sirene, dínamo, aeroplano) e gestualidade teatral justaposta. Essa descrição revela a reunião e a inovação integrada das diferentes linguagens da cena — partes cênicas, musicais, coreográficas e de figurino —, o que corresponde à alternativa D. As demais falham: o balé exibe grande diversidade cultural, não falta dela (A); a obra é engajada e provocativa, não alienada (B); há convergência e não disputa entre as linguagens (C); e a estrutura é de justaposição e colagem, não uma narrativa lógica e linear (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 96,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Os principais recursos utilizados para envolvimento e 
adesão do leitor à campanha institucional incluem`,
    images: ['/enem/2009/images/enem_2009_d2_q96.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `o emprego de enumeração de itens e apresentação de 
títulos expressivos.` },
      { id: 'B', type: 'text', value: `o uso de orações subordinadas condicionais e 
temporais.` },
      { id: 'C', type: 'text', value: `o emprego de pronomes como “você” e “sua” e o uso 
do imperativo.` },
      { id: 'D', type: 'text', value: `a construção de figuras metafóricas e o uso de 
repetição.` },
      { id: 'E', type: 'text', value: `o fornecimento de número de telefone gratuito para 
contato.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. A campanha institucional sobre a Influenza A busca envolver o leitor e levá-lo à ação, e a questão pede os recursos linguísticos que produzem esse engajamento. A alternativa C é correta porque o texto se dirige diretamente ao interlocutor com pronomes de segunda pessoa ("você", "sua") e emprega verbos no imperativo ("evite", "entre em contato", "lave"), recursos típicos da função apelativa que convocam o leitor a agir. As demais falham: a simples enumeração de itens (A), as orações condicionais e temporais (B), as figuras metafóricas (D) e o número de telefone (E) não são os principais responsáveis pela adesão e pelo envolvimento do destinatário.`,
    subject: ['por'],
    topics: ['Funções da linguagem', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 97,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `O texto tem o objetivo de solucionar um problema social,`,
    images: ['/enem/2009/images/enem_2009_d2_q97.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `descrevendo a situação do país em relação à gripe 
suína.` },
      { id: 'B', type: 'text', value: `alertando a população para o risco de morte pela 
Influenza A.` },
      { id: 'C', type: 'text', value: `informando a população sobre a iminência de uma 
pandemia de Influenza A.` },
      { id: 'D', type: 'text', value: `orientando a população sobre os sintomas da gripe 
suína e procedimentos para evitar a contaminação.` },
      { id: 'E', type: 'text', value: `convocando toda a população para se submeter a 
exames de detecção da gripe suína.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. O cartaz do Ministério da Saúde apresenta os sintomas da gripe suína e lista medidas para evitar a contaminação, caracterizando um texto de função instrucional e preventiva. Seu objetivo, portanto, é orientar a população sobre os sintomas da doença e os procedimentos para evitar o contágio, como afirma a alternativa D. As demais falham por reduzir ou distorcer essa finalidade: o texto não descreve a situação do país (A), não tem como foco alertar sobre risco de morte (B), não informa sobre a iminência de uma pandemia (C) nem convoca todos a se submeterem a exames (E).`,
    subject: ['por'],
    topics: ['Gêneros textuais', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 98,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `
Para o Mano Caetano 
 
O que fazer do ouro de tolo 
Quando um doce bardo brada a toda brida, 
Em velas pandas, suas esquisitas rimas? 
Geografia de verdades, Guanabaras postiças 
Saudades banguelas, tropicais preguiças? 
 
A boca cheia de dentes 
De um implacável sorriso 
Morre a cada instante 
Que devora a voz do morto, e com isso, 
Ressuscita vampira, sem o menor aviso 
 
[...] 
E eu soy lobo-bolo? lobo-bolo 
Tipo pra rimar com ouro de tolo? 
Oh, Narciso Peixe Ornamental! 
Tease me, tease me outra vez 1 
Ou em banto baiano
Ou em português de Portugal
Se quiser, até mesmo em americano
De Natal
[...] 
 
1 Tease me (caçoe de mim, importune-me). 
LOBÃO. Disponível em: http://vagalume.uol.com.br.
Acesso em: 14 ago. 2009 (adaptado).
Na letra da canção apresentada, o compositor Lobão 
explora vários recursos da língua portuguesa, a fim de 
conseguir efeitos estéticos ou de sentido. Nessa letra, o 
autor explora o extrato sonoro do idioma e o uso de termos 
coloquiais na seguinte passagem:`,
    alternatives: [
      { id: 'A', type: 'text', value: `“Quando um doce bardo brada a toda brida” (v. 2)` },
      { id: 'B', type: 'text', value: `“Em velas pandas, suas esquisitas rimas?” (v. 3)` },
      { id: 'C', type: 'text', value: `“Que devora a voz do morto” (v. 9)` },
      { id: 'D', type: 'text', value: `“lobo-bolo//Tipo pra rimar com ouro de tolo? (v. 11-12)` },
      { id: 'E', type: 'text', value: `“Tease me, tease me outra vez” (v. 14) ` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. A questão pede a passagem em que Lobão explora ao mesmo tempo o extrato sonoro do idioma e o uso de termos coloquiais. A alternativa D ("lobo-bolo // Tipo pra rimar com ouro de tolo") atende às duas exigências: "lobo-bolo" é um jogo sonoro criado pela semelhança fônica entre as palavras, e "Tipo" é uma marca típica da linguagem coloquial brasileira. As demais falham porque exploram sobretudo a sonoridade ou o sentido, sem a combinação com o coloquialismo: os versos 2, 3 e 9 (A, B, C) trabalham ritmo e metáfora na norma culta, e o verso 14 (E) está em inglês, não em registro coloquial do português.`,
    subject: ['por'],
    topics: ['Figuras de linguagem', 'Variação linguística', 'Questões aleatórias'],
  },
  {
    id: 99,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Cárcere das almas 
 
Ah! Toda a alma num cárcere anda presa, 
Soluçando nas trevas, entre as grades 
Do calabouço olhando imensidades, 
Mares, estrelas, tardes, natureza. 
Tudo se veste de uma igual grandeza 
Quando a alma entre grilhões as liberdades 
Sonha e, sonhando, as imortalidades 
Rasga no etéreo o Espaço da Pureza. 
Ó almas presas, mudas e fechadas 
Nas prisões colossais e abandonadas, 
Da Dor no calabouço, atroz, funéreo! 
Nesses silêncios solitários, graves, 
que chaveiro do Céu possui as chaves 
para abrir-vos as portas do Mistério?! 
CRUZ E SOUSA, J. Poesia completa. Florianópolis: Fundação Catarinense de Cultura / 
Fundação Banco do Brasil, 1993. 
Os elementos formais e temáticos relacionados ao 
contexto cultural do Simbolismo encontrados no poema 
Cárcere das almas, de Cruz e Sousa, são`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `a opção pela abordagem, em linguagem simples e 
direta, de temas filosóficos.` },
      { id: 'B', type: 'text', value: `a prevalência do lirismo amoroso e intimista em 
relação à temática nacionalista.` },
      { id: 'C', type: 'text', value: `o refinamento estético da forma poética e o tratamento 
metafísico de temas universais.` },
      { id: 'D', type: 'text', value: `a evidente preocupação do eu lírico com a realidade 
social expressa em imagens poéticas inovadoras.` },
      { id: 'E', type: 'text', value: `a liberdade formal da estrutura poética que dispensa a 
rima e a métrica tradicionais em favor de temas do 
cotidiano.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. O poema "Cárcere das almas", de Cruz e Sousa, é representativo do Simbolismo, e a questão pede os elementos formais e temáticos ligados a essa escola. A alternativa C é correta porque o poema revela o apuro estético da forma (soneto, musicalidade, vocabulário sugestivo e maiúsculas alegóricas como "Espaço da Pureza" e "Mistério") associado ao tratamento metafísico e espiritualista de temas universais, como a prisão da alma e a transcendência. As demais falham por contrariarem o Simbolismo: não há linguagem simples e direta nem temas meramente filosóficos (A), nem lirismo amoroso intimista (B); a preocupação social realista (D) e o abandono da rima e da métrica em favor do cotidiano (E) são alheios à estética simbolista.`,
    subject: ['lit'],
    topics: ['Escolas literárias', 'Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 100,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Tendo em vista a segunda fala do personagem 
entrevistado, constata-se que`,
    images: ['/enem/2009/images/enem_2009_d2_q100.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `o entrevistado deseja convencer o jornalista a não 
publicar um livro.` },
      { id: 'B', type: 'text', value: `o principal objetivo do entrevistado é explicar o 
significado da palavra motivação.` },
      { id: 'C', type: 'text', value: `são utilizados diversos recursos da linguagem literária, 
tais como a metáfora e a metonímia.` },
      { id: 'D', type: 'text', value: `o entrevistado deseja informar de modo objetivo o 
jornalista sobre as etapas de produção de um livro.` },
      { id: 'E', type: 'text', value: `o principal objetivo do entrevistado é evidenciar seu 
sentimento com relação ao processo de produção de 
um livro.` },
    ],
    correct: 'E',
    explanation: `Gabarito: E. A segunda fala do escritor entrevistado responde à pergunta sobre a motivação para publicar o livro declarando, de modo hiperbólico, que publicou "para parar de escrevê-lo", pois não aguentava mais revisar e reescrever. Essa resposta não transmite informação objetiva, mas exprime o cansaço e a angústia do autor diante do processo de criação, de modo que o objetivo da fala é evidenciar seu sentimento em relação à produção do livro, como diz a alternativa E. As demais falham: ele não quer convencer o jornalista a não publicar (A), não busca explicar o significado de "motivação" (B), não emprega metáfora e metonímia como foco (C) nem informa objetivamente as etapas de produção (D).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 101,
    annulled: true,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Quanto às variantes linguísticas presentes no texto, a 
norma padrão da língua portuguesa é rigorosamente 
obedecida por meio`,
    images: ['/enem/2009/images/enem_2009_d2_q101.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `do emprego do pronome demonstrativo “esse” em “Por 
que o senhor publicou esse livro?”.` },
      { id: 'B', type: 'text', value: `do emprego do pronome pessoal oblíquo em “Meu 
filho, um escritor publica um livro para parar de 
escrevê-lo!”.` },
      { id: 'C', type: 'text', value: `do emprego do pronome possessivo “sua” em “Qual foi 
sua maior motivação?”.` },
      { id: 'D', type: 'text', value: `do emprego do vocativo “Meu filho”, que confere à fala 
distanciamento do interlocutor.` },
      { id: 'E', type: 'text', value: `da necessária repetição do conectivo no último 
quadrinho.` },
    ],
    correct: 'A',
    explanation: `Questão anulada pelo INEP.`,
    subject: ['por'],
    topics: ['Variação linguística', 'Gramática (sintaxe, morfologia, semântica)', 'Questões aleatórias'],
  },
  {
    id: 102,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Gênero dramático é aquele em que o artista usa 
como intermediária entre si e o público a representação. A 
palavra vem do grego drao (fazer) e quer dizer ação. A 
peça teatral é, pois, uma composição literária destinada à 
apresentação por atores em um palco, atuando e 
dialogando entre si. O texto dramático é complementado 
pela atuação dos atores no espetáculo teatral e possui 
uma estrutura específica, caracterizada: 1) pela presença 
de personagens que devem estar ligados com lógica uns 
aos outros e à ação; 2) pela ação dramática (trama, 
enredo), que é o conjunto de atos dramáticos, maneiras de 
ser e de agir das personagens encadeadas à unidade do 
efeito e segundo uma ordem composta de exposição, 
conflito, complicação, clímax e desfecho; 3) pela situação 
ou ambiente, que é o conjunto de circunstâncias físicas, 
sociais, espirituais em que se situa a ação; 4) pelo tema, 
ou seja, a ideia que o autor (dramaturgo) deseja expor, ou 
sua interpretação real por meio da representação. 
COUTINHO, A. Notas de teoria literária. Rio de Janeiro: 
Civilização Brasileira, 1973 (adaptado). 
Considerando o texto e analisando os elementos que 
constituem um espetáculo teatral, conclui-se que`,
    alternatives: [
      { id: 'A', type: 'text', value: `a criação do espetáculo teatral apresenta-se como um 
fenômeno de ordem individual, pois não é possível sua 
concepção de forma coletiva.` },
      { id: 'B', type: 'text', value: `o cenário onde se desenrola a ação cênica é 
concebido e construído pelo cenógrafo de modo 
autônomo e independente do tema da peça e do 
trabalho interpretativo dos atores.` },
      { id: 'C', type: 'text', value: `o texto cênico pode originar-se dos mais variados 
gêneros textuais, como contos, lendas, romances, 
poesias, crônicas, notícias, imagens e fragmentos 
textuais, entre outros.` },
      { id: 'D', type: 'text', value: `o corpo do ator na cena tem pouca importância na 
comunicação teatral, visto que o mais importante é a 
expressão verbal, base da comunicação cênica em 
toda a trajetória do teatro até os dias atuais.` },
      { id: 'E', type: 'text', value: `a iluminação e o som de um espetáculo cênico 
independem do processo de produção/recepção do 
espetáculo teatral, já que se trata de linguagens 
artísticas diferentes, agregadas posteriormente à cena 
teatral.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. O texto define o gênero dramático e descreve a estrutura do texto teatral, e a questão pede a conclusão correta sobre o espetáculo. A alternativa C é adequada porque, na montagem cênica, o texto que origina a encenação pode provir dos mais variados gêneros textuais — contos, lendas, romances, poesias, crônicas, notícias, imagens e fragmentos —, e não apenas do texto dramático tradicional. As demais falham: o espetáculo é criação coletiva, não individual (A); o cenário é concebido em função do tema e do trabalho dos atores, não de forma autônoma (B); o corpo do ator é essencial à comunicação cênica, não secundário (D); e a iluminação e o som integram o processo de produção do espetáculo (E).`,
    subject: ['por'],
    topics: ['Gêneros textuais', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 103,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Saúde, no modelo atual de qualidade de vida, é o 
resultado das condições de alimentação, habitação, 
educação, renda, trabalho, transporte, lazer, serviços 
médicos e acesso à atividade física regular. Quanto ao 
acesso à atividade física, um dos elementos essenciais é a 
aptidão física, entendida como a capacidade de a pessoa 
utilizar seu corpo - incluindo músculos, esqueleto, 
coração, enfim, todas as partes -, de forma eficiente em 
suas atividades cotidianas; logo, quando se avalia a saúde 
de uma pessoa, a aptidão física deve ser levada em conta. 
A partir desse contexto, considera-se que uma pessoa tem 
boa aptidão física quando`,
    alternatives: [
      { id: 'A', type: 'text', value: `apresenta uma postura regular.` },
      { id: 'B', type: 'text', value: `pode se exercitar por períodos curtos de tempo.` },
      { id: 'C', type: 'text', value: `pode desenvolver as atividades físicas do dia-a-dia, 
independentemente de sua idade.` },
      { id: 'D', type: 'text', value: `pode executar suas atividades do dia a dia com vigor, 
atenção e uma fadiga de moderada a intensa.` },
      { id: 'E', type: 'text', value: `pode exercer atividades físicas no final do dia, mas 
suas reservas de energia são insuficientes para 
atividades intelectuais.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. O texto define aptidão física como a capacidade de a pessoa utilizar o corpo de forma eficiente nas atividades cotidianas, afirmando que ela deve ser considerada na avaliação da saúde. Assim, uma pessoa tem boa aptidão física quando consegue desenvolver as atividades físicas do dia a dia com eficiência, independentemente de sua idade, o que corresponde à alternativa C. As demais falham por não traduzir essa capacidade funcional cotidiana: a postura regular (A) e o exercício por períodos curtos (B) não a definem; executar as atividades com fadiga de moderada a intensa (D) contraria a ideia de eficiência; e ter reservas insuficientes para atividades intelectuais (E) não decorre do texto.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 104,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Diferentemente do texto escrito, que em geral 
compele os leitores a lerem numa onda linear - da 
esquerda para a direita e de cima para baixo, na página 
impressa - hipertextos encorajam os leitores a moverem-
se de um bloco de texto a outro, rapidamente e não 
sequencialmente. Considerando que o hipertexto oferece 
uma multiplicidade de caminhos a seguir, podendo ainda o 
leitor incorporar seus caminhos e suas decisões como 
novos caminhos, inserindo informações novas, o leitor-
navegador passa a ter um papel mais ativo e uma 
oportunidade diferente da de um leitor de texto impresso. 
Dificilmente dois leitores de hipertextos farão os mesmos 
caminhos e tomarão as mesmas decisões. 
MARCUSCHI, L. A. Cognição, linguagem e práticas interacionais. 
Rio: Lucerna, 2007. 
No que diz respeito à relação entre o hipertexto e o 
conhecimento por ele produzido, o texto apresentado deixa 
claro que o hipertexto muda a noção tradicional de autoria, 
porque`,
    alternatives: [
      { id: 'A', type: 'text', value: `é o leitor que constrói a versão final do texto.` },
      { id: 'B', type: 'text', value: `o autor detém o controle absoluto do que escreve.` },
      { id: 'C', type: 'text', value: `aclara os limites entre o leitor e o autor.` },
      { id: 'D', type: 'text', value: `propicia um evento textual-interativo em que apenas o 
autor é ativo.` },
      { id: 'E', type: 'text', value: `só o autor conhece o que eletronicamente se dispõe 
para o leitor.` },
    ],
    correct: 'A',
    explanation: `Gabarito: A. O texto de Marcuschi contrasta a leitura linear do texto impresso com a navegação não sequencial do hipertexto, em que o leitor escolhe caminhos, insere informações e incorpora suas decisões ao próprio texto. Por isso, o hipertexto altera a noção tradicional de autoria: é o leitor-navegador que, ao construir seu percurso, constrói a versão final do texto, como afirma a alternativa A. As demais falham por contrariar o texto: o autor não detém controle absoluto (B); o hipertexto borra, mas não esclarece, os limites entre leitor e autor (C); o leitor é ativo, não apenas o autor (D); e o que se dispõe ao leitor não é conhecido só pelo autor (E).`,
    subject: ['por'],
    topics: ['Gêneros textuais', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 105,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `La Vie en Rose 
 
 
 
 
 
ITURRUSGARAI, A. La Vie en Rose. Folha de S.Paulo, 
11 ago. 2007. 
 
Os quadrinhos exemplificam que as Histórias em 
Quadrinhos constituem um gênero textual`,
    images: ['/enem/2009/images/enem_2009_d2_q105.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `em que a imagem pouco contribui para facilitar a 
interpretação da mensagem contida no texto, como 
pode ser constatado no primeiro quadrinho.` },
      { id: 'B', type: 'text', value: `cuja linguagem se caracteriza por ser rápida e clara, 
que facilita a compreensão, como se percebe na fala 
do segundo quadrinho: “</DIV> </SPAN> <BR CLEAR 
= ALL> < BR> <BR> <SCRIPT>”.` },
      { id: 'C', type: 'text', value: `em que o uso de letras com espessuras diversas está 
ligado a sentimentos expressos pelos personagens, 
como pode ser percebido no último quadrinho.` },
      { id: 'D', type: 'text', value: `que possui em seu texto escrito características 
próximas a uma conversação face a face, como pode 
ser percebido no segundo quadrinho.` },
      { id: 'E', type: 'text', value: `que a localização casual dos balões nos quadrinhos 
expressa com clareza a sucessão cronológica da 
história, como pode ser percebido no segundo 
quadrinho.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. Os quadrinhos de "La Vie en Rose" personificam a linguagem HTML em um diálogo informal, e a questão pede o que eles exemplificam sobre a HQ como gênero textual. A alternativa D é correta porque a fala do segundo quadrinho reproduz a estrutura de uma conversa face a face (saudação, pergunta "como vão as coisas?" e resposta), mostrando que o texto escrito das histórias em quadrinhos incorpora características da interação oral espontânea. As demais falham: a imagem contribui, e muito, para a interpretação (A); a linguagem com código HTML não é clara nem facilita a compreensão (B); a espessura das letras não é o recurso em foco (C); e a sucessão dos balões não é casual, pois segue a ordem de leitura (E).`,
    subject: ['por'],
    topics: ['Gêneros textuais', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 106,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `A partir da metade do século XX, ocorreu um 
conjunto de transformações econômicas e sociais cuja 
dimensão é difícil de ser mensurada: a chamada explosão 
da informação. Embora essa expressão tenha surgido no 
contexto da informação científica e tecnológica, seu 
significado, hoje, em um contexto mais geral, atinge 
proporções gigantescas. 
 
Por estabelecerem novas formas de pensamento 
e mesmo de lógica, a informática e a Internet vêm gerando 
impactos sociais e culturais importantes. A disseminação 
do microcomputador e a expansão da Internet vêm 
acelerando o processo de globalização tanto no sentido do 
mercado quanto no sentido das trocas simbólicas possíveis 
entre sociedades e culturas diferentes, o que tem 
provocado e acelerado o fenômeno de hibridização 
amplamente 
caracterizado 
como 
próprio 
da 
pós-
modernidade. 
FERNANDES, M. F.; PARÁ, T. A contribuição das novas tecnologias da informação na 
geração de conhecimento. Disponível em: http://www.coep.ufrj.br. 
Acesso em: 11 ago. 2009 (adaptado). 
Considerando-se o novo contexto social e econômico 
aludido no texto apresentado, as novas tecnologias de 
informação e comunicação`,
    alternatives: [
      { id: 'A', type: 'text', value: `desempenham importante papel, porque sem elas não 
seria possível registrar os acontecimentos históricos.` },
      { id: 'B', type: 'text', value: `facilitam os processos educacionais para ensino de 
tecnologia, mas não exercem influência nas ciências 
humanas.` },
      { id: 'C', type: 'text', value: `limitam-se a dar suporte aos meios de comunicação, 
facilitando sobretudo os trabalhos jornalísticos.` },
      { id: 'D', type: 'text', value: `contribuem para o desenvolvimento social, pois 
permitem 
o 
registro 
e 
a 
disseminação 
do 
conhecimento de forma mais democrática e interativa.` },
      { id: 'E', type: 'text', value: `estão em estágio experimental, particularmente na 
educação, área em que ainda não demonstraram 
potencial produtivo.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. O texto trata da "explosão da informação" e dos impactos sociais e culturais da informática e da internet, que aceleram a globalização e as trocas simbólicas entre sociedades. A conclusão correta é que as novas tecnologias de informação e comunicação contribuem para o desenvolvimento social, pois permitem o registro e a disseminação do conhecimento de forma mais democrática e interativa, como diz a alternativa D. As demais falham: o registro dos acontecimentos históricos não depende exclusivamente delas (A); elas também influenciam as ciências humanas (B); não se limitam a dar suporte aos meios de comunicação (C); e não estão restritas a um estágio experimental sem potencial produtivo (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 107,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Texto I
É praticamente impossível imaginarmos nossas
vidas sem o plástico. Ele está presente em embalagens de
alimentos, bebidas e remédios, além de eletrodomésticos,
automóveis etc. Esse uso ocorre devido à sua atoxicidade
e à inércia, isto é: quando em contato com outras
substâncias, o plástico não as contamina; ao contrário,
protege o produto embalado. Outras duas grandes
vantagens garantem o uso dos plásticos em larga escala:
são leves, quase não alteram o peso do material
embalado, e são 100% recicláveis, fato que, infelizmente,
não é aproveitado, visto que, em todo o mundo, a
percentagem de plástico reciclado, quando comparado ao
total produzido, ainda é irrelevante.
Revista Mãe Terra. Minuano, ano I, n. 6 (adaptado).
Texto II
Sacolas plásticas são leves e voam ao vento. Por
isso, elas entopem esgotos e bueiros, causando
enchentes. São encontradas até no estômago de
tartarugas marinhas, baleias, focas e golfinhos, mortos por
sufocamento.
Sacolas plásticas descartáveis são gratuitas para
os consumidores, mas têm um custo incalculável para o
meio ambiente.
Veja, 8 jul. 2009. Fragmentos de texto publicitário do
Instituto Akatu pelo Consumo Consciente.
Em contraste com o texto I, no texto II são empregadas,
predominantemente, estratégias argumentativas que`,
    alternatives: [
      { id: 'A', type: 'text', value: `atraem o leitor por meio de previsões para o futuro.` },
      { id: 'B', type: 'text', value: `apelam à emoção do leitor, mencionando a morte de 
animais.` },
      { id: 'C', type: 'text', value: `orientam o leitor a respeito dos modos de usar 
conscientemente as sacolas plásticas.` },
      { id: 'D', type: 'text', value: `intimidam o leitor com as nocivas consequências do 
uso indiscriminado de sacolas plásticas.` },
      { id: 'E', type: 'text', value: `recorrem à informação, por meio de constatações, 
para convencer o leitor a evitar o uso de sacolas 
plásticas.` },
    ],
    correct: 'E',
    explanation: `Gabarito: E. A questão compara as estratégias argumentativas dos dois textos sobre o plástico. No texto II predomina o recurso à informação por meio de constatações — as sacolas são leves e voam ao vento, entopem esgotos e bueiros causando enchentes, são encontradas no estômago de animais marinhos e têm custo incalculável para o meio ambiente —, dados apresentados como fatos para convencer o leitor a evitar o uso das sacolas plásticas, o que corresponde à alternativa E. As demais falham: o texto II não se vale de previsões para o futuro (A); embora cite a morte de animais, o apelo emocional não é a estratégia predominante nem o eixo argumentativo central (B); não orienta sobre o uso consciente das sacolas (C); e não se limita a intimidar o leitor (D), mas o convence pela exposição de constatações.`,
    subject: ['por'],
    topics: ['Redação (estrutura e argumentação)', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 108,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Texto I
É praticamente impossível imaginarmos nossas
vidas sem o plástico. Ele está presente em embalagens de
alimentos, bebidas e remédios, além de eletrodomésticos,
automóveis etc. Esse uso ocorre devido à sua atoxicidade
e à inércia, isto é: quando em contato com outras
substâncias, o plástico não as contamina; ao contrário,
protege o produto embalado. Outras duas grandes
vantagens garantem o uso dos plásticos em larga escala:
são leves, quase não alteram o peso do material
embalado, e são 100% recicláveis, fato que, infelizmente,
não é aproveitado, visto que, em todo o mundo, a
percentagem de plástico reciclado, quando comparado ao
total produzido, ainda é irrelevante.
Revista Mãe Terra. Minuano, ano I, n. 6 (adaptado).
Texto II
Sacolas plásticas são leves e voam ao vento. Por
isso, elas entopem esgotos e bueiros, causando
enchentes. São encontradas até no estômago de
tartarugas marinhas, baleias, focas e golfinhos, mortos por
sufocamento.
Sacolas plásticas descartáveis são gratuitas para
os consumidores, mas têm um custo incalculável para o
meio ambiente.
Veja, 8 jul. 2009. Fragmentos de texto publicitário do
Instituto Akatu pelo Consumo Consciente.
Na comparação dos textos, observa-se que`,
    alternatives: [
      { id: 'A', type: 'text', value: `o texto I apresenta um alerta a respeito do efeito da 
reciclagem de materiais plásticos; o texto II justifica o 
uso desse material reciclado.` },
      { id: 'B', type: 'text', value: `o texto I tem como objetivo precípuo apresentar a 
versatilidade e as vantagens do uso do plástico na 
contemporaneidade; o texto II objetiva alertar os 
consumidores 
sobre 
os 
problemas 
ambientais 
decorrentes de embalagens plásticas não recicladas.` },
      { id: 'C', type: 'text', value: `o texto I expõe vantagens, sem qualquer ressalva, do 
uso do plástico; o texto II busca convencer o leitor a 
evitar o uso de embalagens plásticas.` },
      { id: 'D', type: 'text', value: `o texto I ilustra o posicionamento de fabricantes de 
embalagens plásticas, mostrando por que elas devem 
ser usadas; o texto II ilustra o posicionamento de 
consumidores comuns, que buscam praticidade e 
conforto.` },
      { id: 'E', type: 'text', value: `o texto I apresenta um alerta a respeito da 
possibilidade de contaminação de produtos orgânicos 
e industrializados decorrente do uso de plástico em 
suas embalagens; o texto II apresenta vantagens do 
consumo de sacolas plásticas: leves, descartáveis e 
gratuitas.` },
    ],
    correct: 'B',
    explanation: `Gabarito: B. A questão pede a comparação correta entre os dois textos sobre o plástico. A alternativa B é adequada porque o texto I tem como objetivo principal apresentar a versatilidade e as vantagens do plástico na vida contemporânea, enquanto o texto II objetiva alertar os consumidores sobre os problemas ambientais causados pelas embalagens plásticas não recicladas. As demais falham por inverter ou confundir os propósitos: o texto I não alerta sobre a reciclagem para que o texto II a justifique (A); o texto I não expõe vantagens "sem qualquer ressalva", pois menciona a baixa reciclagem (C); os textos não ilustram posicionamentos de fabricantes e consumidores (D); e o texto II não apresenta o consumo de sacolas como vantagem (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 109,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `BROWNE, C. Hagar, o horrível. Jornal O GLOBO, 
Segundo Caderno. 20 fev. 2009. 
A linguagem da tirinha revela`,
    images: ['/enem/2009/images/enem_2009_d2_q109.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `o uso de expressões linguísticas e vocabulário 
próprios de épocas antigas.` },
      { id: 'B', type: 'text', value: `o uso de expressões linguísticas inseridas no registro 
mais formal da língua.` },
      { id: 'C', type: 'text', value: `o caráter coloquial expresso pelo uso do tempo verbal 
no segundo quadrinho.` },
      { id: 'D', type: 'text', value: `o uso de um vocabulário específico para situações 
comunicativas de emergência.` },
      { id: 'E', type: 'text', value: `a intenção comunicativa dos personagens: a de 
estabelecer a hierarquia entre eles.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. A tirinha do Hagar encena um diálogo cotidiano, e a questão pede o que a linguagem revela. A alternativa C é correta porque o caráter coloquial do texto se manifesta no uso do tempo verbal no segundo quadrinho ("Pensei que você tinha consertado!"), construção típica da fala espontânea do dia a dia. As demais falham: não há expressões próprias de épocas antigas (A); a linguagem não está em registro mais formal (B); não se trata de vocabulário específico de situações de emergência (D); e a intenção comunicativa não é estabelecer hierarquia entre os personagens (E).`,
    subject: ['por'],
    topics: ['Variação linguística', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 110,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `O "Portal Domínio Público", lançado em novembro 
de 2004, propõe o compartilhamento de conhecimentos de 
forma equânime e gratuita, colocando à disposição de 
todos os usuários da Internet, uma biblioteca virtual que 
deverá constituir referência para professores, alunos, 
pesquisadores e para a população em geral. 
 
Esse portal constitui um ambiente virtual que 
permite a coleta, a integração, a preservação e o 
compartilhamento de conhecimentos, sendo seu principal 
objetivo o de promover o amplo acesso às obras literárias, 
artísticas e científicas (na forma de textos, sons, imagens e 
vídeos), já em domínio público ou que tenham a sua 
divulgação devidamente autorizada. 
BRASIL. Ministério da Educação. Disponível em: http://www.dominiopublico.gov.br. 
Acesso em: 29 jul. 2009 (adaptado). 
Considerando a função social das informações geradas 
nos sistemas de comunicação e informação, o ambiente 
virtual descrito no texto exemplifica`,
    alternatives: [
      { id: 'A', type: 'text', value: `a dependência das escolas públicas quanto ao uso de 
sistemas de informação.` },
      { id: 'B', type: 'text', value: `a ampliação do grau de interação entre as pessoas, a 
partir de tecnologia convencional.` },
      { id: 'C', type: 'text', value: `a democratização da informação, por meio da 
disponibilização de conteúdo cultural e científico à 
sociedade.` },
      { id: 'D', type: 'text', value: `a comercialização do acesso a diversas produções 
culturais nacionais e estrangeiras via tecnologia da 
informação e da comunicação.` },
      { id: 'E', type: 'text', value: `a produção de repertório cultural direcionado a 
acadêmicos e educadores.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. O texto descreve o Portal Domínio Público como biblioteca virtual gratuita que reúne e compartilha obras literárias, artísticas e científicas com todos os usuários da internet. Considerando a função social dos sistemas de informação, esse ambiente exemplifica a democratização da informação, pela disponibilização de conteúdo cultural e científico à sociedade, como afirma a alternativa C. As demais falham: o portal não evidencia a dependência das escolas públicas em relação a sistemas de informação (A); seu foco não é a interação entre pessoas por tecnologia convencional (B); o acesso é gratuito, não comercializado (D); e o repertório é dirigido à população em geral, não apenas a acadêmicos e educadores (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 111,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Cuitelinho 
 
Cheguei na bera do porto 
Onde as onda se espaia. 
As garça dá meia volta, 
Senta na bera da praia. 
E o cuitelinho não gosta 
Que o botão da rosa caia. 
 
Quando eu vim da minha terra, 
Despedi da parentaia. 
Eu entrei em Mato Grosso, 
Dei em terras paraguaia. 
Lá tinha revolução, 
Enfrentei fortes bataia. 
 
A tua saudade corta 
Como o aço de navaia. 
O coração fica aflito, 
Bate uma e outra faia. 
E os oio se enche d´água 
Que até a vista se atrapaia. 
Folclore recolhido por Paulo Vanzolini e Antônio Xandó. 
BORTONI-RICARDO, S. M. Educação em língua materna. São Paulo: Parábola, 2004. 
Transmitida por gerações, a canção Cuitelinho manifesta 
aspectos culturais de um povo, nos quais se inclui sua 
forma de falar, além de registrar um momento histórico. 
Depreende-se disso que a importância em preservar a 
produção cultural de uma nação consiste no fato de que 
produções como a canção Cuitelinho evidenciam a`,
    alternatives: [
      { id: 'A', type: 'text', value: `recriação da realidade brasileira de forma ficcional.` },
      { id: 'B', type: 'text', value: `criação neológica na língua portuguesa.` },
      { id: 'C', type: 'text', value: `formação da identidade nacional por meio da tradição 
oral.` },
      { id: 'D', type: 'text', value: `incorreção da língua portuguesa que é falada por 
pessoas do interior do Brasil.` },
      { id: 'E', type: 'text', value: `padronização de palavras que variam regionalmente, 
mas possuem mesmo significado.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. A canção folclórica "Cuitelinho", transmitida oralmente por gerações, registra a fala popular ("bera", "oio", "navaia") e evoca um momento histórico, e a questão conclui sobre o valor de preservar essa produção cultural. A alternativa C é correta porque canções como essa evidenciam a formação da identidade nacional por meio da tradição oral, que preserva a memória e a cultura de um povo. As demais falham: a canção recria a realidade, mas não se trata de criação ficcional individual (A); não há criação de neologismos como foco (B); as formas regionais não configuram "incorreção" da língua (D); e o traço relevante é a tradição oral identitária, não a padronização de palavras (E).`,
    subject: ['por'],
    topics: ['Variação linguística', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 112,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `ECKHOUT, A. “Índio Tapuia” (1610-1666). Disponível em: http://www.diaadia.pr.gov.br. 
Acesso em: 9 jul. 2009. 
 
A 
feição 
deles 
é 
serem 
pardos, 
maneira 
d’avermelhados, de bons rostos e bons narizes, bem feitos. 
Andam nus, sem nenhuma cobertura, nem estimam 
nenhuma cousa cobrir, nem mostrar suas vergonhas. E 
estão acerca disso com tanta inocência como têm em 
mostrar o rosto. 
CAMINHA, P. V. A carta. Disponível em: www.dominiopublico.gov.br. 
Acesso em: 12 ago. 2009. 
Ao se estabelecer uma relação entre a obra de Eckhout e o 
trecho do texto de Caminha, conclui-se que`,
    images: ['/enem/2009/images/enem_2009_d2_q112.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `ambos se identificam pelas características estéticas 
marcantes, como tristeza e melancolia, do movimento 
romântico das artes plásticas.` },
      { id: 'B', type: 'text', value: `o artista, na pintura, foi fiel ao seu objeto, 
representando-o de maneira realista, ao passo que o 
texto é apenas fantasioso.` },
      { id: 'C', type: 'text', value: `a pintura e o texto têm uma característica em comum, 
que é representar o habitante das terras que sofreriam 
processo colonizador.` },
      { id: 'D', type: 'text', value: `o texto e a pintura são baseados no contraste entre a 
cultura europeia e a cultura indígena.` },
      { id: 'E', type: 'text', value: `há forte direcionamento religioso no texto e na pintura, 
uma vez que o índio representado é objeto da 
catequização jesuítica.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. A questão relaciona a pintura "Índio Tapuia", de Eckhout, ao trecho da Carta de Caminha, ambos voltados à representação do indígena brasileiro. A alternativa C é correta porque pintura e texto têm em comum o fato de representarem o habitante das terras que viriam a sofrer o processo de colonização, registrando a imagem do índio no período do contato. As demais falham: não há identificação com a estética romântica de tristeza e melancolia (A); não cabe dizer que a pintura é realista e o texto, fantasioso (B); a oposição entre as culturas não é o eixo comum apontado (D); e não há forte direcionamento religioso de catequese nem no texto nem na pintura (E).`,
    subject: ['por'],
    topics: ['Intertextualidade', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 113,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `As tecnologias de informação e comunicação (TIC) vieram 
aprimorar ou substituir meios tradicionais de comunicação 
e armazenamento de informações, tais como o rádio e a 
TV analógicos, os livros, os telégrafos, o fax etc. As novas 
bases tecnológicas são mais poderosas e versáteis, 
introduziram fortemente a possibilidade de comunicação 
interativa e estão presentes em todos os meios produtivos 
da atualidade. As novas TIC vieram acompanhadas da 
chamada Digital Divide, Digital Gap ou Digital Exclusion, 
traduzidas para o português como Divisão Digital ou 
Exclusão Digital, sendo, às vezes, também usados os 
termos Brecha Digital ou Abismo Digital. Nesse contexto, a 
expressão Divisão Digital refere-se a`,
    alternatives: [
      { id: 'A', type: 'text', value: `uma classificação que caracteriza cada uma das áreas 
nas quais as novas TIC podem ser aplicadas, 
relacionando 
os 
padrões 
de 
utilização 
e 
exemplificando o uso dessas TIC no mundo moderno.` },
      { id: 'B', type: 'text', value: `uma relação das áreas ou subáreas de conhecimento 
que ainda não foram contempladas com o uso das 
novas tecnologias digitais, o que caracteriza uma 
brecha tecnológica que precisa ser minimizada.` },
      { id: 'C', type: 'text', value: `uma enorme diferença de desempenho entre os 
empreendimentos que utilizam as tecnologias digitais 
e aqueles que permaneceram usando métodos e 
técnicas analógicas.` },
      { id: 'D', type: 'text', value: `um 
aprofundamento 
das 
diferenças 
sociais 
já 
existentes, uma vez que se torna difícil a aquisição de 
conhecimentos e habilidades fundamentais pelas 
populações menos favorecidas nos novos meios 
produtivos.` },
      { id: 'E', type: 'text', value: `uma proposta de educação para o uso de novas 
pedagogias com a finalidade de acompanhar a 
evolução das mídias e orientar a produção de material 
pedagógico com apoio de computadores e outras 
técnicas digitais.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. O texto apresenta as sinônimas "Divisão Digital", "Exclusão Digital" e "Brecha Digital" e pede o sentido da expressão. A alternativa D é correta porque a Divisão Digital designa o aprofundamento das diferenças sociais já existentes, uma vez que as populações menos favorecidas têm dificuldade de adquirir os conhecimentos e habilidades exigidos pelos novos meios produtivos, ficando à margem das tecnologias. As demais falham: a expressão não nomeia uma classificação das áreas de aplicação das TIC (A), nem uma lista de áreas ainda não contempladas (B); não se reduz a diferença de desempenho entre empreendimentos (C), e não designa uma proposta de educação para novas pedagogias (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 114,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Você sabia que as metrópoles são as grandes 
consumidoras dos produtos feitos com recursos naturais 
da Amazônia? Você pode diminuir os impactos à floresta 
adquirindo produtos com selos de certificação. Eles são 
encontrados em itens que vão desde lápis e embalagens 
de papelão até móveis, cosméticos e materiais de 
construção. Para receber os selos esses produtos devem 
ser fabricados sob 10 princípios éticos, entre eles o 
respeito à legislação ambiental e aos direitos de povos 
indígenas e populações que vivem em nossas matas 
nativas. 
Vida simples. Ed. 74, dez. 2008. 
O texto e a imagem têm por finalidade induzir o leitor a 
uma mudança de comportamento a partir do(a)`,
    images: ['/enem/2009/images/enem_2009_d2_q114.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `consumo de produtos naturais provindos da Amazônia.` },
      { id: 'B', type: 'text', value: `cuidado na hora de comprar produtos alimentícios.` },
      { id: 'C', type: 'text', value: `verificação da existência do selo de padronização de 
produtos industriais.` },
      { id: 'D', type: 'text', value: `certificação de que o produto foi fabricado de acordo 
com os princípios éticos.` },
      { id: 'E', type: 'text', value: `verificação da garantia de tratamento dos recursos 
naturais utilizados em cada produto.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. O texto e a imagem, com os selos de certificação, buscam induzir o consumidor a mudar de comportamento na hora da compra. A alternativa D é correta porque a mudança proposta se dá a partir da certificação de que o produto foi fabricado de acordo com princípios éticos — respeito à legislação ambiental e aos direitos das populações indígenas e das matas nativas —, atestada pelos selos. As demais falham: não se incentiva simplesmente o consumo de produtos da Amazônia (A), nem o cuidado restrito a alimentos (B); não se trata de selo de padronização industrial (C), e a finalidade não é a garantia isolada do tratamento dos recursos naturais em cada produto (E), mas o conjunto de princípios éticos certificados.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 115,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `A dança é importante para o índio preparar o 
corpo e a garganta e significa energia para o corpo, que 
fica robusto. Na aldeia, para preparo físico, dançamos 
desde cinco horas da manhã até seis horas da tarde, 
passa-se o dia inteiro dançando quando os padrinhos 
planejam a dança dos adolescentes. O padrinho é como 
um professor, um preparador físico dos adolescentes. Por 
exemplo, o padrinho sonha com um determinado canto e 
planeja para todos entoarem. Todos os tipos de dança 
vêm dos primeiros xavantes: Wamarĩdzadadzeiwawẽ, 
Butséwawẽ, 
Tseretomodzatsewawẽ, 
que 
foram 
descobrindo através da sabedoria como iria ser a cultura 
Xavante. Até hoje existe essa cultura, essa celebração. 
Quando o adolescente fura a orelha é obrigatório ele 
dançar toda a noite, tem de acordar meia-noite para dançar 
e cantar, é obrigatório, eles vão chamando um ao outro 
com um grito especial. 
WÉRÉ' É TSI'RÓBÓ, E. A dança e o canto-celebração da existência xavante. VIS-Revista do 
Programa de Pós-Graduação em Arte da UnB. V. 5, n. 2, dez. 2006. 
A partir das informações sobre a dança Xavante, conclui-
se que o valor da diversidade artística e da tradição cultural 
apresentados originam-se da`,
    alternatives: [
      { id: 'A', type: 'text', value: `iniciativa individual do indígena para a prática da 
dança e do canto.` },
      { id: 'B', type: 'text', value: `excelente forma física apresentada pelo povo Xavante.` },
      { id: 'C', type: 'text', value: `multiculturalidade presente na sua manifestação 
cênica.` },
      { id: 'D', type: 'text', value: `inexistência de um planejamento da estética da dança, 
caracterizada pelo ineditismo.` },
      { id: 'E', type: 'text', value: `preservação de uma identidade entre a gestualidade 
ancestral e a novidade dos cantos a serem entoados.` },
    ],
    correct: 'E',
    explanation: `Gabarito: E. O texto descreve a dança Xavante como preparação do corpo, prática ritual coletiva e transmissão cultural ligada aos cantos sonhados pelos padrinhos, e a questão conclui sobre o valor da diversidade artística e da tradição cultural. A alternativa E é correta porque esse valor se origina da preservação de uma identidade que une a gestualidade ancestral à novidade dos cantos a serem entoados, conjugando tradição e renovação. As demais falham: a dança é prática coletiva, não iniciativa individual (A); o foco não é a boa forma física do povo (B); não se trata apenas de multiculturalidade cênica genérica (C); e há planejamento ritual, de modo que não se caracteriza por ineditismo sem estética (D).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 116,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Canção do vento e da minha vida
O vento varria as folhas,
O vento varria os frutos,
O vento varria as flores...
E a minha vida ficava
Cada vez mais cheia
De frutos, de flores, de folhas.
[...]
O vento varria os sonhos
E varria as amizades...
O vento varria as mulheres...
E a minha vida ficava
Cada vez mais cheia
De afetos e de mulheres.
O vento varria os meses
E varria os teus sorrisos...
O vento varria tudo!
E a minha vida ficava
Cada vez mais cheia
De tudo.
BANDEIRA, M. Poesia completa e prosa. Rio de Janeiro: José Aguilar, 1967.
Predomina no texto a função da linguagem`,
    alternatives: [
      { id: 'A', type: 'text', value: `fática, porque o autor procura testar o canal de 
comunicação.` },
      { id: 'B', type: 'text', value: `metalinguística, porque há explicação do significado 
das expressões.` },
      { id: 'C', type: 'text', value: `conativa, uma vez que o leitor é provocado a participar 
de uma ação.` },
      { id: 'D', type: 'text', value: `referencial, já que são apresentadas informações 
sobre acontecimentos e fatos reais.` },
      { id: 'E', type: 'text', value: `poética, pois chama-se a atenção para a elaboração 
especial e artística da estrutura do texto.` },
    ],
    correct: 'E',
    explanation: `Gabarito: E. A questão pede a função da linguagem predominante no poema "Canção do vento e da minha vida", de Manuel Bandeira. A alternativa E é correta porque o texto se organiza com apuro estético — repetições, paralelismos, ritmo e seleção vocabular —, chamando a atenção para a própria elaboração artística da mensagem, o que caracteriza a função poética da linguagem. As demais falham: não há teste do canal de comunicação, próprio da função fática (A); não se explica o significado dos termos, função metalinguística (B); o leitor não é convocado a agir, função conativa (C); e o texto não se limita a informar fatos reais, função referencial (D).`,
    subject: ['por'],
    topics: ['Funções da linguagem', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 117,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Canção do vento e da minha vida
O vento varria as folhas,
O vento varria os frutos,
O vento varria as flores...
E a minha vida ficava
Cada vez mais cheia
De frutos, de flores, de folhas.
[...]
O vento varria os sonhos
E varria as amizades...
O vento varria as mulheres...
E a minha vida ficava
Cada vez mais cheia
De afetos e de mulheres.
O vento varria os meses
E varria os teus sorrisos...
O vento varria tudo!
E a minha vida ficava
Cada vez mais cheia
De tudo.
BANDEIRA, M. Poesia completa e prosa. Rio de Janeiro: José Aguilar, 1967.
Na estruturação do texto, destaca-se`,
    alternatives: [
      { id: 'A', type: 'text', value: `a construção de oposições semânticas.` },
      { id: 'B', type: 'text', value: `a apresentação de ideias de forma objetiva.` },
      { id: 'C', type: 'text', value: `o emprego recorrente de figuras de linguagem, como o 
eufemismo.` },
      { id: 'D', type: 'text', value: `a repetição de sons e de construções sintáticas 
semelhantes.` },
      { id: 'E', type: 'text', value: `a inversão da ordem sintática das palavras.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. A questão pede o traço que se destaca na estruturação do poema de Bandeira. A alternativa D é correta porque o texto se organiza pela repetição de sons e de construções sintáticas semelhantes, com o verso "O vento varria..." e o refrão "E a minha vida ficava / Cada vez mais cheia" retomados em paralelismo ao longo das estrofes. As demais falham: não há propriamente construção de oposições semânticas como eixo (A); as ideias não são apresentadas de forma objetiva (B); o eufemismo não é a figura recorrente em destaque (C); e não é a inversão sintática que estrutura o poema (E).`,
    subject: ['por'],
    topics: ['Figuras de linguagem', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 118,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Teatro do Oprimido é um método teatral que 
sistematiza exercícios, jogos e técnicas teatrais elaboradas 
pelo teatrólogo brasileiro Augusto Boal, recentemente 
falecido, que visa à desmecanização física e intelectual de 
seus praticantes. Partindo do princípio de que a linguagem 
teatral não deve ser diferenciada da que é usada 
cotidianamente pelo cidadão comum (oprimido), ele propõe 
condições práticas para que o oprimido se aproprie dos 
meios do fazer teatral e, assim, amplie suas possibilidades 
de expressão. Nesse sentido, todos podem desenvolver 
essa linguagem e, consequentemente, fazer teatro. Trata-
se de um teatro em que o espectador é convidado a 
substituir o protagonista e mudar a condução ou mesmo o 
fim da história, conforme o olhar interpretativo e 
contextualizado do receptor. 
Companhia Teatro do Oprimido. Disponível em: www.ctorio.org.br. 
Acesso em: 1 jul. 2009 (adaptado). 
Considerando-se as características do Teatro do Oprimido 
apresentadas, conclui-se que`,
    alternatives: [
      { id: 'A', type: 'text', value: `esse modelo teatral é um método tradicional de fazer 
teatro que usa, nas suas ações cênicas, a linguagem 
rebuscada e hermética falada normalmente pelo 
cidadão comum.` },
      { id: 'B', type: 'text', value: `a forma de recepção desse modelo teatral se destaca 
pela separação entre atores e público, na qual os 
atores representam seus personagens e a plateia 
assiste passivamente ao espetáculo.` },
      { id: 'C', type: 'text', value: `sua linguagem teatral pode ser democratizada e 
apropriada pelo cidadão comum, no sentido de 
proporcionar-lhe autonomia crítica para compreensão 
e interpretação do mundo em que vive.` },
      { id: 'D', type: 'text', value: `o convite ao espectador para substituir o protagonista 
e mudar o fim da história evidencia que a proposta de 
Boal se aproxima das regras do teatro tradicional para 
a preparação de atores.` },
      { id: 'E', type: 'text', value: `a metodologia teatral do Teatro do Oprimido segue a 
concepção do teatro clássico aristotélico, que visa à 
desautomação física e intelectual de seus praticantes.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. O texto descreve o Teatro do Oprimido, de Augusto Boal, como método que aproxima a linguagem teatral da linguagem cotidiana e convida o espectador a intervir na cena. A conclusão correta é a da alternativa C: sua linguagem teatral pode ser democratizada e apropriada pelo cidadão comum, no sentido de lhe proporcionar autonomia crítica para compreender e interpretar o mundo em que vive. As demais falham: o método não usa linguagem rebuscada e hermética (A); ele rompe a separação entre atores e público, não a reforça (B); o convite ao espectador afasta-se do teatro tradicional, não o aproxima (D); e a metodologia não segue a concepção do teatro clássico aristotélico (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Gêneros textuais', 'Questões aleatórias'],
  },
  {
    id: 119,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Texto I 
O professor deve ser um guia seguro, muito 
senhor de sua língua; se outra for a orientação, vamos cair 
na “língua brasileira”, refúgio nefasto e confissão nojenta 
de ignorância do idioma pátrio, recurso vergonhoso de 
homens de cultura falsa e de falso patriotismo. Como 
havemos de querer que respeitem a nossa nacionalidade 
se somos os primeiros a descuidar daquilo que exprime e 
representa o idioma pátrio? 
ALMEIDA, N. M. Gramática metódica da língua portuguesa. 
Prefácio. São Paulo: Saraiva, 1999 (adaptado). 
Texto II 
Alguns leitores poderão achar que a linguagem 
desta Gramática se afasta do padrão estrito usual neste 
tipo de livro. Assim, o autor escreve tenho que reformular, 
e não tenho de reformular; pode-se colocar dois 
constituintes, e não podem-se colocar dois constituintes; e 
assim por diante. Isso foi feito de caso pensado, com a 
preocupação de aproximar a linguagem da gramática do 
padrão atual brasileiro presente nos textos técnicos e 
jornalísticos de nossa época. 
REIS, N. Nota do editor. PERINI, M. A. Gramática descritiva 
do português. São Paulo: Ática, 1996. 
Confrontando-se as opiniões defendidas nos dois textos, 
conclui-se que`,
    alternatives: [
      { id: 'A', type: 'text', value: `ambos os textos tratam da questão do uso da língua 
com o objetivo de criticar a linguagem do brasileiro.` },
      { id: 'B', type: 'text', value: `os dois textos defendem a ideia de que o estudo da 
gramática deve ter o objetivo de ensinar as regras 
prescritivas da língua.` },
      { id: 'C', type: 'text', value: `a questão do português falado no Brasil é abordada 
nos dois textos, que procuram justificar como é correto 
e aceitável o uso coloquial do idioma.` },
      { id: 'D', type: 'text', value: `o primeiro texto enaltece o padrão estrito da língua, ao 
passo que o segundo defende que a linguagem 
jornalística deve criar suas próprias regras gramaticais.` },
      { id: 'E', type: 'text', value: `o primeiro texto prega a rigidez gramatical no uso da 
língua, enquanto o segundo defende uma adequação 
da língua escrita ao padrão atual brasileiro.` },
    ],
    correct: 'E',
    explanation: `Gabarito: E. A questão confronta dois textos sobre o uso da língua: o texto I condena a "língua brasileira" e defende o padrão estrito do idioma pátrio, enquanto o texto II justifica aproximar a linguagem da gramática do padrão atual brasileiro presente nos textos técnicos e jornalísticos. A alternativa E é correta porque o primeiro texto prega a rigidez gramatical, ao passo que o segundo defende a adequação da língua escrita ao padrão atual do Brasil. As demais falham: os textos não convergem em criticar o brasileiro (A), nem ambos defendem o ensino prescritivo (B); não justificam o uso coloquial como correto (C); e o texto II não prega regras próprias para a linguagem jornalística em oposição ao padrão (D).`,
    subject: ['por'],
    topics: ['Variação linguística', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 120,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `No decênio de 1870, Franklin Távora defendeu a 
tese de que no Brasil havia duas literaturas independentes 
dentro da mesma língua: uma do Norte e outra do Sul, 
regiões segundo ele muito diferentes por formação 
histórica, 
composição 
étnica, 
costumes, 
modismos 
linguísticos etc. Por isso, deu aos romances regionais que 
publicou o título geral de Literatura do Norte. Em nossos 
dias, um escritor gaúcho, Viana Moog, procurou mostrar 
com bastante engenho que no Brasil há, em verdade, 
literaturas setoriais diversas, refletindo as características 
locais. 
CÂNDIDO, A. A nova narrativa. A educação pela noite e 
outros ensaios. São Paulo: Ática, 2003. 
Com relação à valorização, no romance regionalista 
brasileiro, do homem e da paisagem de determinadas 
regiões nacionais, sabe-se que`,
    alternatives: [
      { id: 'A', type: 'text', value: `o romance do Sul do Brasil se caracteriza pela 
temática essencialmente urbana, colocando em relevo 
a formação do homem por meio da mescla de 
características locais e dos aspectos culturais trazidos 
de fora pela imigração europeia.` },
      { id: 'B', type: 'text', value: `José de Alencar, representante, sobretudo, do 
romance urbano, retrata a temática da urbanização 
das cidades brasileiras e das relações conflituosas 
entre as raças.` },
      { id: 'C', type: 'text', value: `o romance do Nordeste caracteriza-se pelo acentuado 
realismo no uso do vocabulário, pelo temário local, 
expressando a vida do homem em face da natureza 
agreste, e assume frequentemente o ponto de vista 
dos menos favorecidos.` },
      { id: 'D', type: 'text', value: `a literatura urbana brasileira, da qual um dos 
expoentes é Machado de Assis, põe em relevo a 
formação do homem brasileiro, o sincretismo religioso, 
as raízes africanas e indígenas que caracterizam o 
nosso povo.` },
      { id: 'E', type: 'text', value: `Érico Veríssimo, Rachel de Queiroz, Simões Lopes 
Neto e Jorge Amado são romancistas das décadas de 
30 e 40 do século XX, cuja obra retrata a problemática 
do homem urbano em confronto com a modernização 
do país promovida pelo Estado Novo.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. A questão trata da valorização do homem e da paisagem regionais no romance brasileiro. A alternativa C é correta porque o romance do Nordeste caracteriza-se pelo acentuado realismo no uso do vocabulário e pelo temário local, expressando a vida do homem diante da natureza agreste e assumindo, com frequência, o ponto de vista dos menos favorecidos — traços do regionalismo nordestino. As demais falham: o romance do Sul não tem temática essencialmente urbana (A); José de Alencar é representante do romance romântico, não do urbano sobre conflitos raciais (B); Machado de Assis não tem por foco o sincretismo e as raízes africanas e indígenas (D); e Érico Veríssimo, Rachel de Queiroz, Simões Lopes Neto e Jorge Amado não retratam predominantemente a problemática do homem urbano (E).`,
    subject: ['lit'],
    topics: ['Literatura brasileira', 'Escolas literárias', 'Questões aleatórias'],
  },
  {
    id: 121,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Quando eu falo com vocês, procuro usar o código
de vocês. A figura do índio no Brasil de hoje não pode ser
aquela de 500 anos atrás, do passado, que representa
aquele primeiro contato. Da mesma forma que o Brasil de
hoje não é o Brasil de ontem, tem 160 milhões de pessoas
com diferentes sobrenomes. Vieram para cá asiáticos,
europeus, africanos, e todo mundo quer ser brasileiro. A
importante pergunta que nós fazemos é: qual é o pedaço
de índio que vocês têm? O seu cabelo? São seus olhos?
Ou é o nome da sua rua? O nome da sua praça? Enfim,
vocês devem ter um pedaço de índio dentro de vocês.
Para nós, o importante é que vocês olhem para a gente
como seres humanos, como pessoas que nem precisam
de paternalismos, nem precisam ser tratadas com
privilégios. Nós não queremos tomar o Brasil de vocês, nós
queremos compartilhar esse Brasil com vocês.
TERENA, M. Debate. MORIN, E. Saberes globais e saberes locais.
Rio de Janeiro: Garamond, 2000 (adaptado).
Os procedimentos argumentativos utilizados no texto
permitem inferir que o ouvinte/leitor, no qual o emissor foca
o seu discurso, pertence`,
    alternatives: [
      { id: 'A', type: 'text', value: `ao mesmo grupo social do falante/autor.` },
      { id: 'B', type: 'text', value: `a um grupo de brasileiros considerados como não 
índios.` },
      { id: 'C', type: 'text', value: `a um grupo étnico que representa a maioria europeia 
que vive no país.` },
      { id: 'D', type: 'text', value: `a um grupo formado por estrangeiros que falam 
português.` },
      { id: 'E', type: 'text', value: `a um grupo sociocultural formado por brasileiros 
naturalizados e imigrantes.` },
    ],
    correct: 'B',
    explanation: `Gabarito: B. No texto, Marcos Terena dirige-se a um interlocutor distinto de seu próprio grupo, usando "vocês" em oposição a "nós" e perguntando que "pedaço de índio" cada um carrega. Os procedimentos argumentativos permitem inferir que esse ouvinte/leitor pertence a um grupo de brasileiros considerados não índios, a quem o emissor indígena se dirige, como afirma a alternativa B. As demais falham: o interlocutor não pertence ao mesmo grupo social do falante (A); não é definido como grupo étnico de maioria europeia (C), nem como estrangeiros que falam português (D); e não se trata de brasileiros naturalizados e imigrantes (E).`,
    subject: ['por'],
    topics: ['Redação (estrutura e argumentação)', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 122,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Quando eu falo com vocês, procuro usar o código
de vocês. A figura do índio no Brasil de hoje não pode ser
aquela de 500 anos atrás, do passado, que representa
aquele primeiro contato. Da mesma forma que o Brasil de
hoje não é o Brasil de ontem, tem 160 milhões de pessoas
com diferentes sobrenomes. Vieram para cá asiáticos,
europeus, africanos, e todo mundo quer ser brasileiro. A
importante pergunta que nós fazemos é: qual é o pedaço
de índio que vocês têm? O seu cabelo? São seus olhos?
Ou é o nome da sua rua? O nome da sua praça? Enfim,
vocês devem ter um pedaço de índio dentro de vocês.
Para nós, o importante é que vocês olhem para a gente
como seres humanos, como pessoas que nem precisam
de paternalismos, nem precisam ser tratadas com
privilégios. Nós não queremos tomar o Brasil de vocês, nós
queremos compartilhar esse Brasil com vocês.
TERENA, M. Debate. MORIN, E. Saberes globais e saberes locais.
Rio de Janeiro: Garamond, 2000 (adaptado).
Na situação de comunicação da qual o texto foi retirado, a
norma padrão da língua portuguesa é empregada com a
finalidade de`,
    alternatives: [
      { id: 'A', type: 'text', value: `demonstrar a clareza e a complexidade da nossa 
língua materna.` },
      { id: 'B', type: 'text', value: `situar os dois lados da interlocução em posições 
simétricas.` },
      { id: 'C', type: 'text', value: `comprovar a importância da correção gramatical nos 
diálogos cotidianos.` },
      { id: 'D', type: 'text', value: `mostrar como as línguas indígenas foram incorporadas 
à língua portuguesa.` },
      { id: 'E', type: 'text', value: `ressaltar a importância do código linguístico que 
adotamos como língua nacional.` },
    ],
    correct: 'B',
    explanation: `Gabarito: B. A questão pede a finalidade do emprego da norma padrão na situação comunicativa do texto de Terena. A alternativa B é correta porque, ao recorrer à norma padrão num debate, o emissor indígena coloca-se em pé de igualdade com o interlocutor não índio, situando os dois lados da interlocução em posições simétricas e afirmando-se como sujeito do mesmo nível. As demais falham: o objetivo não é demonstrar a clareza e a complexidade da língua materna (A), nem comprovar a importância da correção gramatical nos diálogos cotidianos (C); o texto não trata da incorporação de línguas indígenas ao português (D), nem tem por fim ressaltar o código linguístico nacional (E).`,
    subject: ['por'],
    topics: ['Variação linguística', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 123,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Se os tubarões fossem homens 
 
 
Se os tubarões fossem homens, eles seriam mais 
gentis com os peixes pequenos? 
 
Certamente, se os tubarões fossem homens, 
fariam construir resistentes gaiolas no mar para os peixes 
pequenos, com todo o tipo de alimento, tanto animal como 
vegetal. Cuidariam para que as gaiolas tivessem sempre 
água fresca e adotariam todas as providências sanitárias. 
 
Naturalmente 
haveria 
também 
escolas 
nas 
gaiolas. Nas aulas, os peixinhos aprenderiam como nadar 
para a goela dos tubarões. Eles aprenderiam, por exemplo, 
a usar a geografia para localizar os grandes tubarões 
deitados preguiçosamente por aí. A aula principal seria, 
naturalmente, a formação moral dos peixinhos. A eles seria 
ensinado que o ato mais grandioso e mais sublime é o 
sacrifício alegre de um peixinho e que todos deveriam 
acreditar nos tubarões, sobretudo quando estes dissessem 
que cuidavam de sua felicidade futura. Os peixinhos 
saberiam que este futuro só estaria garantido se 
aprendessem a obediência. 
 
Cada peixinho que na guerra matasse alguns 
peixinhos inimigos seria condecorado com uma pequena 
Ordem das Algas e receberia o título de herói. 
BRECHT, B. Histórias do Sr. Keuner. São Paulo: Ed. 34, 2006 (adaptado). 
Como produção humana, a literatura veicula valores que 
nem sempre estão representados diretamente no texto, 
mas são transfigurados pela linguagem literária e podem 
até entrar em contradição com as convenções sociais e 
revelar o quanto a sociedade perverteu os valores 
humanos que ela própria criou. É o que ocorre na narrativa 
do dramaturgo alemão Bertolt Brecht mostrada. Por meio 
da hipótese apresentada, o autor`,
    alternatives: [
      { id: 'A', type: 'text', value: `demonstra o quanto a literatura pode ser alienadora ao 
retratar, de modo positivo, as relações de opressão 
existentes na sociedade.` },
      { id: 'B', type: 'text', value: `revela a ação predatória do homem no mar, 
questionando a utilização dos recursos naturais pelo 
homem ocidental.` },
      { id: 'C', type: 'text', value: `defende que a força colonizadora e civilizatória do 
homem 
ocidental 
valorizou 
a 
organização 
das 
sociedades africanas e asiáticas, elevando-as ao 
modo de organização cultural e social da sociedade 
moderna.` },
      { id: 'D', type: 'text', value: `questiona o modo de organização das sociedades 
ocidentais 
capitalistas, 
que 
se 
desenvolveram 
fundamentadas nas relações de opressão em que os 
mais fortes exploram os mais fracos.` },
      { id: 'E', type: 'text', value: `evidencia a dinâmica social do trabalho coletivo em 
que os mais fortes colaboram com os mais fracos, de 
modo a guiá-los na realização de tarefas.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. Na parábola de Brecht "Se os tubarões fossem homens", a hipótese de que os tubarões, se fossem homens, organizariam os peixes pequenos com escolas, moral da obediência e condecorações funciona como alegoria crítica. Por meio dela, o autor questiona o modo de organização das sociedades ocidentais capitalistas, que se desenvolveram fundamentadas em relações de opressão nas quais os mais fortes exploram os mais fracos, como afirma a alternativa D. As demais falham: o texto não retrata de modo positivo as relações de opressão (A); não questiona a exploração dos recursos naturais do mar (B); não defende a força colonizadora ocidental (C); e não evidencia um trabalho coletivo solidário entre fortes e fracos (E).`,
    subject: ['lit'],
    topics: ['Análise de obras', 'Questões aleatórias'],
  },
  {
    id: 124,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Oximoro, ou paradoxismo, é uma figura de retórica em que 
se combinam palavras de sentido oposto que parecem 
excluir-se mutuamente, mas que, no contexto, reforçam a 
expressão. 
Dicionário Eletrônico Houaiss da Língua Portuguesa. 
Considerando a definição apresentada, o fragmento 
poético da obra Cantares, de Hilda Hilst, publicada em 
2004, em que pode ser encontrada a referida figura de 
retórica é:`,
    alternatives: [
      { id: 'A', type: 'text', value: `“Dos dois contemplo 
rigor e fixidez. 
Passado e sentimento 
me contemplam” (p. 91).` },
      { id: 'B', type: 'text', value: `“De sol e lua 
De fogo e vento 
Te enlaço” (p. 101).` },
      { id: 'C', type: 'text', value: `“Areia, vou sorvendo 
A água do teu rio” (p. 93).` },
      { id: 'D', type: 'text', value: `“Ritualiza a matança 
de quem só te deu vida.` },
      { id: 'E', type: 'text', value: `me deixa viver 
nessa que morre” (p. 62). 
E “O bisturi e o verso. 
Dois instrumentos 
entre as minhas mãos” (p. 95).` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. A questão define o oximoro (paradoxismo) como a combinação de palavras de sentido oposto e pede o fragmento de Hilda Hilst em que a figura aparece. A alternativa D é correta porque os versos reúnem termos contraditórios — "Ritualiza a matança / de quem só te deu vida" e "E me deixa viver / nessa que morre" —, conciliando morte e vida, o que configura o oximoro. As demais falham por não apresentarem essa contradição interna de sentidos opostos: os fragmentos A, B, C e E exploram imagens, antíteses brandas ou metáforas, mas não a fusão paradoxal de termos que se excluem mutuamente.`,
    subject: ['por'],
    topics: ['Figuras de linguagem', 'Questões aleatórias'],
  },
  {
    id: 125,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Veja, 7 maio 1997. 
Na parte superior do anúncio, há um comentário escrito à 
mão que aborda a questão das atividades linguísticas e 
sua relação com as modalidades oral e escrita da língua. 
Esse comentário deixa evidente uma posição crítica quanto 
a usos que se fazem da linguagem, enfatizando ser 
necessário`,
    images: ['/enem/2009/images/enem_2009_d2_q125.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `implementar a fala, tendo em vista maior desenvoltura, 
naturalidade e segurança no uso da língua .` },
      { id: 'B', type: 'text', value: `conhecer gêneros mais formais da modalidade oral 
para a obtenção de clareza na comunicação oral e 
escrita.` },
      { id: 'C', type: 'text', value: `dominar as diferentes variedades do registro oral da 
língua portuguesa para escrever com adequação, 
eficiência e correção.` },
      { id: 'D', type: 'text', value: `empregar vocabulário adequado e usar regras da 
norma padrão da língua em se tratando da modalidade 
escrita.` },
      { id: 'E', type: 'text', value: `utilizar 
recursos 
mais 
expressivos 
e 
menos 
desgastados da variedade padrão da língua para se 
expressar com alguma segurança e sucesso.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. O anúncio traz um comentário manuscrito que critica, de modo informal, o fato de alguém "escrever como fala", sugerindo que isso compromete o texto. Esse comentário deixa evidente a posição de que, na modalidade escrita, é necessário empregar vocabulário adequado e seguir as regras da norma padrão da língua, como afirma a alternativa D. As demais falham: a crítica não visa desenvolver a fala com mais desenvoltura (A), nem defende conhecer gêneros formais da modalidade oral (B); não propõe dominar as variedades do registro oral para escrever (C); e não trata de usar recursos mais expressivos da variedade padrão (E), mas sim da adequação da escrita à norma.`,
    subject: ['por'],
    topics: ['Variação linguística', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 126,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `O texto exemplifica um gênero textual híbrido entre carta e 
publicidade oficial. Em seu conteúdo, é possível perceber 
aspectos relacionados a gêneros digitais. Considerando-se 
a função social das informações geradas nos sistemas de 
comunicação e informação presentes no texto, infere-se 
que`,
    images: ['/enem/2009/images/enem_2009_d2_q126.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `a utilização do termo download indica restrição de 
leitura de informações a respeito de formas de 
combate à dengue.` },
      { id: 'B', type: 'text', value: `a 
diversidade 
dos 
sistemas 
de 
comunicação 
empregados e mencionados reduz a possibilidade de 
acesso às informações a respeito do combate à 
dengue.` },
      { id: 'C', type: 'text', value: `a utilização do material disponibilizado para download
no site www.combatadengue.com.br restringe-se ao
receptor da publicidade.` },
      { id: 'D', type: 'text', value: `a necessidade de atingir públicos distintos se revela 
por meio da estratégia de disponibilização de 
informações empregada pelo emissor.` },
      { id: 'E', type: 'text', value: `a utilização desse gênero textual compreende, no 
próprio texto, o detalhamento de informações a 
respeito de formas de combate à dengue.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. O texto da campanha contra a dengue é um gênero híbrido entre carta e publicidade oficial, que remete a gêneros digitais ao indicar um site com materiais para download. A alternativa D é correta porque a necessidade de atingir públicos distintos se revela na estratégia do emissor de disponibilizar informações por diferentes meios (o próprio texto impresso e o conteúdo on-line). As demais falham: o termo "download" não indica restrição de leitura das informações (A); a diversidade de sistemas amplia, não reduz, o acesso (B); o material on-line não se restringe ao receptor da publicidade (C); e o gênero não compreende, no próprio texto, o detalhamento completo das formas de combate à dengue (E), que remete ao site.`,
    subject: ['por'],
    topics: ['Gêneros textuais', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 127,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Diante dos recursos argumentativos utilizados, depreende-
se que o texto apresentado`,
    images: ['/enem/2009/images/enem_2009_d2_q127.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `se dirige aos líderes comunitários para tomarem a 
iniciativa de combater a dengue.` },
      { id: 'B', type: 'text', value: `conclama 
toda 
a 
população 
a 
participar 
das 
estratégias de combate ao mosquito da dengue.` },
      { id: 'C', type: 'text', value: `se dirige aos prefeitos, conclamando-os a organizarem 
iniciativas de combate à dengue.` },
      { id: 'D', type: 'text', value: `tem como objetivo ensinar os procedimentos técnicos 
necessários para o combate ao mosquito da dengue.` },
      { id: 'E', type: 'text', value: `apela ao governo federal, para que dê apoio aos 
governos estaduais e municipais no combate ao 
mosquito da dengue.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. O texto da campanha é encabeçado pelo apelo "Sr. Prefeito, junte-se a nós na luta contra a dengue" e conclama a autoridade municipal a organizar mutirões e envolver líderes comunitários. Pelos recursos argumentativos empregados, depreende-se que o texto se dirige aos prefeitos, conclamando-os a organizar iniciativas de combate à dengue, como afirma a alternativa C. As demais falham: o destinatário não são os líderes comunitários (A), nem a população em geral (B); o objetivo não é ensinar procedimentos técnicos de combate ao mosquito (D); e o apelo não se volta ao governo federal (E), mas ao gestor municipal.`,
    subject: ['por'],
    topics: ['Redação (estrutura e argumentação)', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 128,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `A partida 
1 
 
 
4 
 
 
7 
 
 
10 
 
 
13 
 
 
16 
 
Acordei pela madrugada. A princípio com 
tranquilidade, e logo com obstinação, quis novamente 
dormir. Inútil, o sono esgotara-se. Com precaução, 
acendi um fósforo: passava das três. Restava-me, 
portanto, menos de duas horas, pois o trem chegaria 
às cinco. Veio-me então o desejo de não passar mais 
nem uma hora naquela casa. Partir, sem dizer nada, 
deixar quanto antes minhas cadeias de disciplina e de 
amor. 
 
Com receio de fazer barulho, dirigi-me à 
cozinha, lavei o rosto, os dentes, penteei-me e, 
voltando ao meu quarto, vesti-me. Calcei os sapatos, 
sentei-me um instante à beira da cama. Minha avó 
continuava dormindo. Deveria fugir ou falar com ela? 
Ora, algumas palavras... Que me custava acordá-la, 
dizer-lhe adeus? 
LINS, O. A partida. Melhores contos. Seleção e prefácio de 
Sandra Nitrini. São Paulo: Global, 2003. 
No texto, o personagem narrador, na iminência da partida, 
descreve a sua hesitação em separar-se da avó. Esse 
sentimento contraditório fica claramente expresso no 
trecho:`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `“A princípio com tranquilidade, e logo com obstinação, 
quis novamente dormir” (ℓ. 1-3).` },
      { id: 'B', type: 'text', value: `“Restava-me, portanto, menos de duas horas, pois o 
trem chegaria às cinco” (ℓ. 4-6).` },
      { id: 'C', type: 'text', value: `“Calcei os sapatos, sentei-me um instante à beira da 
cama” (ℓ. 12-13).` },
      { id: 'D', type: 'text', value: `“Partir, sem dizer nada, deixar quanto antes minhas 
cadeias de disciplina e amor” (ℓ. 7-9).` },
      { id: 'E', type: 'text', value: `“Deveria fugir ou falar com ela? Ora, algumas 
palavras...” (ℓ. 14-15).` },
    ],
    correct: 'E',
    explanation: `Gabarito: E. No conto "A partida", de Osman Lins, o narrador descreve sua hesitação diante da avó adormecida na iminência de ir embora, e a questão pede o trecho em que esse sentimento contraditório fica expresso. A alternativa E é correta porque em "Deveria fugir ou falar com ela? Ora, algumas palavras..." o narrador oscila entre partir em silêncio e despedir-se, revelando com clareza a dúvida e o conflito interno. As demais falham: os trechos A, B, C e D relatam ações, cálculos de tempo ou a disposição de partir, mas não expressam diretamente a hesitação afetiva entre ficar e ir que marca o sentimento contraditório.`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 129,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Serafim da Silva Neto defendia a tese da unidade 
da língua portuguesa no Brasil, entrevendo que no Brasil 
as delimitações dialetais espaciais não eram tão marcadas 
como as isoglossas1 da România Antiga. Mas Paul 
Teyssier, na sua História da Língua Portuguesa, 
reconhece que na diversidade socioletal essa pretensa 
unidade se desfaz. Diz Teyssier: 
 
“A realidade, porém, é que as divisões ‘dialetais’ 
no Brasil são menos geográficas que socioculturais. As 
diferenças na maneira de falar são maiores, num 
determinado lugar, entre um homem culto e o vizinho 
analfabeto que entre dois brasileiros do mesmo nível 
cultural originários de duas regiões distantes uma da 
outra.” 
SILVA, R. V. M. O português brasileiro e o português europeu 
contemporâneo: alguns aspectos da diferença. Disponível em: 
 www.uniroma.it. Acesso em: 23 jun. 2008. 
1 isoglossa - linha imaginária que, em um mapa, une os 
pontos de ocorrência de traços e fenômenos linguísticos 
idênticos. 
FERREIRA, A. B. H. Novo dicionário Aurélio da língua portuguesa. 
Rio de Janeiro: Nova Fronteira, 1986. 
De acordo com as informações presentes no texto, os 
pontos de vista de Serafim da Silva Neto e de Paul 
Teyssier convergem em relação`,
    alternatives: [
      { id: 'A', type: 'text', value: `à influência dos aspectos socioculturais nas diferenças 
dos falares entre indivíduos, pois ambos consideram 
que pessoas de mesmo nível sociocultural falam de 
forma semelhante.` },
      { id: 'B', type: 'text', value: `à delimitação dialetal no Brasil assemelhar-se ao que 
ocorria na România Antiga, pois ambos consideram a 
variação linguística no Brasil como decorrente de 
aspectos geográficos.` },
      { id: 'C', type: 'text', value: `à variação sociocultural entre brasileiros de diferentes 
regiões, pois ambos consideram o fator sociocultural 
de bastante peso na constituição das variedades 
linguísticas no Brasil.` },
      { id: 'D', type: 'text', value: `à diversidade da língua portuguesa na România 
Antiga, que até hoje continua a existir, manifestando-
se nas variantes linguísticas do português atual no 
Brasil.` },
      { id: 'E', type: 'text', value: `à existência de delimitações dialetais geográficas 
pouco marcadas no Brasil, embora cada um enfatize 
aspectos diferentes da questão.` },
    ],
    correct: 'E',
    explanation: `Gabarito: E. O texto opõe a tese de Serafim da Silva Neto, favorável à unidade da língua portuguesa no Brasil, à de Paul Teyssier, que vê essa unidade desfeita na diversidade socioletal, afirmando que as diferenças de fala são maiores entre um homem culto e um analfabeto vizinhos do que entre brasileiros de regiões distantes. A alternativa E é correta porque os dois pontos de vista convergem ao reconhecer a variação sociocultural como fator de grande peso na constituição das variedades linguísticas do Brasil. As demais falham: eles não concordam que pessoas de mesmo nível sociocultural falem sempre de forma semelhante (A); não equiparam a situação brasileira à da Romênia Antiga por fatores geográficos (B); não enfatizam a diversidade da Romênia Antiga (D); e não convergem apenas em torno de delimitações dialetais geográficas pouco marcadas (C).`,
    subject: ['por'],
    topics: ['Variação linguística', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 130,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Nestes últimos anos, a situação mudou bastante e 
o Brasil, normalizado, já não nos parece tão mítico, no bem 
e no mal. Houve um mútuo reconhecimento entre os dois 
países de expressão portuguesa de um lado e do outro do 
Atlântico: o Brasil descobriu Portugal e Portugal, em um 
retorno das caravelas, voltou a descobrir o Brasil e a ser, 
por seu lado, colonizado por expressões linguísticas, as 
telenovelas, os romances, a poesia, a comida e as formas 
de tratamento brasileiros. O mesmo, embora em nível 
superficial, dele excluído o plano da língua, aconteceu com 
a Europa, que, depois da diáspora dos anos 70, depois da 
inserção na cultura da bossa-nova e da música popular 
brasileira, 
da 
problemática 
ecológica 
centrada 
na 
Amazônia, ou da problemática social emergente do 
fenômeno dos meninos de rua, e até do álibi ocultista dos 
romances de Paulo Coelho, continua todos os dias a 
descobrir, no bem e no mal, o novo Brasil. Se, no fim do 
século XIX, Sílvio Romero definia a literatura brasileira 
como manifestação de um país mestiço, será fácil para nós 
defini-la como expressão de um país polifônico: em que já 
não é determinante o eixo Rio-São Paulo, mas que, em 
cada região, desenvolve originalmente a sua unitária e 
particular tradição cultural. É esse, para nós, no início do 
século XXI, o novo estilo brasileiro. 
STEGAGNO-PICCHIO, L. História da literatura brasileira. 
Rio de Janeiro: Nova Aguilar, 2004 (adaptado). 
No texto, a autora mostra como o Brasil, ao longo de sua 
história, foi, aos poucos, construindo uma identidade 
cultural e literária relativamente autônoma frente à 
identidade europeia, em geral, e à portuguesa em 
particular. Sua análise pressupõe, de modo especial, o 
papel do patrimônio literário e linguístico, que favoreceu o 
surgimento daquilo que ela chama de “estilo brasileiro”. 
Diante desse pressuposto, e levando em consideração o 
texto e as diferentes etapas de consolidação da cultura 
brasileira, constata-se que`,
    alternatives: [
      { id: 'A', type: 'text', value: `o Brasil redescobriu a cultura portuguesa no século 
XIX, o que o fez assimilar novos gêneros artísticos e 
culturais, assim como usos originais do idioma, 
conforme ilustra o caso do escritor Machado de Assis.` },
      { id: 'B', type: 'text', value: `a Europa reconheceu a importância da língua 
portuguesa no mundo, a partir da projeção que poetas 
brasileiros ganharam naqueles países, a partir do 
século XX.` },
      { id: 'C', type: 'text', value: `ocorre, no início do século XXI, promovido pela 
solidificação 
da 
cultura 
nacional, 
maior 
reconhecimento do Brasil por ele mesmo, tanto nos 
aspectos positivos quanto nos negativos.` },
      { id: 'D', type: 'text', value: `o Brasil continua sendo, como no século XIX, uma 
nação culturalmente mestiça, embora a expressão 
dominante seja aquela produzida no eixo Rio-São 
Paulo, em especial aquela ligada às telenovelas.` },
      { id: 'E', type: 'text', value: `o novo estilo cultural brasileiro se caracteriza por uma 
união bastante significativa entre as diversas matrizes 
culturais advindas das várias regiões do país, como se 
pode comprovar na obra de Paulo Coelho.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. O texto de Stegagno-Picchio descreve como o Brasil, ao longo de sua história, construiu uma identidade cultural e literária autônoma frente à europeia, culminando num "estilo brasileiro" polifônico no início do século XXI. A alternativa C é correta porque, segundo o texto, ocorre, nesse período, promovido pela solidificação da cultura nacional, um maior reconhecimento do Brasil por ele mesmo, tanto em seus aspectos positivos quanto negativos. As demais falham: a redescoberta da cultura portuguesa não se dá no século XIX pelo caso de Machado (A); a Europa não reconhece a língua a partir da projeção de poetas brasileiros no século XX (B); o texto não reduz o Brasil a nação mestiça dominada pelo eixo Rio-São Paulo (D); e não exemplifica a união das matrizes culturais pela obra de Paulo Coelho (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 131,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Compare os textos I e II a seguir, que tratam de aspectos 
ligados a variedades da língua portuguesa no mundo e no 
Brasil. 
 
Texto I 
 
Acompanhando os navegadores, colonizadores e 
comerciantes portugueses em todas as suas incríveis 
viagens, a partir do século XV, o português se transformou 
na língua de um império. Nesse processo, entrou em 
contato - forçado, o mais das vezes; amigável, em alguns 
casos - com as mais diversas línguas, passando por 
processos de variação e de mudança linguística. Assim, 
contar a história do português do Brasil é mergulhar na sua 
história colonial e de país independente, já que as línguas 
não são mecanismos desgarrados dos povos que as 
utilizam. Nesse cenário, são muitos os aspectos da 
estrutura linguística que não só expressam a diferença 
entre Portugal e Brasil como também definem, no Brasil, 
diferenças regionais e sociais. 
PAGOTTO, E. P. Línguas do Brasil. Disponível em: http://cienciaecultura.bvs.br. 
Acesso em: 5 jul. 2009 (adaptado). 
Texto II 
 
Barbarismo é vício que se comete na escritura de 
cada uma das partes da construção ou na pronunciação. E 
em nenhuma parte da Terra se comete mais essa figura da 
pronunciação que nestes reinos, por causa das muitas 
nações que trouxemos ao jugo do nosso serviço. Porque 
bem como os Gregos e Romanos haviam por bárbaras 
todas as outras nações estranhas a eles, por não poderem 
formar sua linguagem, assim nós podemos dizer que as 
nações de África, Guiné, Ásia, Brasil barbarizam quando 
querem imitar a nossa. 
BARROS, J. Gramática da língua portuguesa. Porto: Porto Editora, 1957 (adaptado). 
Os textos abordam o contato da língua portuguesa com 
outras línguas e processos de variação e de mudança 
decorridos desse contato. Da comparação entre os textos, 
conclui-se que a posição de João de Barros (Texto II), em 
relação aos usos sociais da linguagem, revela`,
    alternatives: [
      { id: 'A', type: 'text', value: `atitude crítica do autor quanto à gramática que as 
nações a serviço de Portugal possuíam e, ao mesmo 
tempo, de benevolência quanto ao conhecimento que 
os povos tinham de suas línguas.` },
      { id: 'B', type: 'text', value: `atitude preconceituosa relativa a vícios culturais das 
nações sob domínio português, dado o interesse dos 
falantes dessa línguas em copiar a língua do império, 
o que implicou a falência do idioma falado em 
Portugal.` },
      { id: 'C', type: 'text', value: `o desejo de conservar, em Portugal, as estruturas da 
variante padrão da língua grega - em oposição às 
consideradas bárbaras -, em vista da necessidade de 
preservação do padrão de correção dessa língua à 
época.` },
      { id: 'D', type: 'text', value: `adesão à concepção de língua como entidade 
homogênea e invariável, e negação da ideia de que a 
língua portuguesa pertence a outros povos.` },
      { id: 'E', type: 'text', value: `atitude crítica, que se estende à própria língua portuguesa, por se tratar de sistema que não disporia de elementos necessários para a plena inserção sociocultural de falantes não nativos do português.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. A questão compara a visão moderna da variação linguística (texto I) à concepção de João de Barros (texto II), que, em sua gramática, classifica como "barbarismo" a pronúncia das nações submetidas a Portugal, tomando como "bárbaras" as línguas que imitam mal a do império. A alternativa D é correta porque essa posição revela a adesão à concepção de língua como entidade homogênea e invariável e a negação de que a língua portuguesa pertença também a outros povos. As demais falham: não há benevolência quanto ao conhecimento dos povos submetidos (A); o texto não trata da falência do idioma em Portugal (B), nem da preservação do padrão da língua grega (C); e a crítica não se estende à própria língua portuguesa por insuficiência de elementos (E).`,
    subject: ['por'],
    topics: ['Variação linguística', 'Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 132,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Texto I
[...] já foi o tempo em que via a convivência como
viável, só exigindo deste bem comum, piedosamente, o
meu quinhão, já foi o tempo em que consentia num
contrato, deixando muitas coisas de fora sem ceder
contudo no que me era vital, já foi o tempo em que
reconhecia a existência escandalosa de imaginados
valores, coluna vertebral de toda ‘ordem’; mas não tive
sequer o sopro necessário, e, negado o respiro, me foi
imposto o sufoco; é esta consciência que me libera, é ela
hoje que me empurra, são outras agora minhas
preocupações, é hoje outro o meu universo de problemas;
num mundo estapafúrdio — definitivamente fora de foco —
cedo ou tarde tudo acaba se reduzindo a um ponto de
vista, e você que vive paparicando as ciências humanas,
nem suspeita que paparica uma piada: impossível ordenar
o mundo dos valores, ninguém arruma a casa do capeta;
me recuso pois a pensar naquilo em que não mais
acredito, seja o amor, a amizade, a família, a igreja, a
humanidade; me lixo com tudo isso! me apavora ainda a
existência, mas não tenho medo de ficar sozinho, foi
conscientemente que escolhi o exílio, me bastando hoje o
cinismo dos grandes indiferentes [...].
NASSAR, R. Um copo de cólera. São Paulo:
Companhia das Letras, 1992.
Texto II
Raduan Nassar lançou a novela Um Copo de
Cólera em 1978, fervilhante narrativa de um confronto
verbal entre amantes, em que a fúria das palavras
cortantes se estilhaçava no ar. O embate conjugal ecoava
o autoritário discurso do poder e da submissão de um
Brasil que vivia sob o jugo da ditadura militar.
COMODO, R. Um silêncio inquietante. IstoÉ. Disponível em:
http://www.terra.com.br. Acesso em: 15 jul. 2009.
Na novela Um Copo de Cólera, o autor lança mão de
recursos estilísticos e expressivos típicos da literatura
produzida na década de 70 do século passado no Brasil,
que, nas palavras do crítico Antônio Cândido, aliam
“vanguarda estética e amargura política”. Com relação à
temática abordada e à concepção narrativa da novela, o
texto I`,
    alternatives: [
      { id: 'A', type: 'text', value: `é escrito em terceira pessoa, com narrador onisciente, 
apresentando a disputa entre um homem e uma 
mulher em linguagem sóbria, condizente com a 
seriedade da temática político-social do período da 
ditadura militar.` },
      { id: 'B', type: 'text', value: `articula o discurso dos interlocutores em torno de uma 
luta verbal, veiculada por meio de linguagem simples e 
objetiva, que busca traduzir a situação de exclusão 
social do narrador.` },
      { id: 'C', type: 'text', value: `representa a literatura dos anos 70 do século XX e 
aborda, por meio de expressão clara e objetiva e de 
ponto 
de 
vista 
distanciado, 
os 
problemas 
da 
urbanização das grandes metrópoles brasileiras.` },
      { id: 'D', type: 'text', value: `evidencia uma crítica à sociedade em que vivem os 
personagens, por meio de fluxo verbal contínuo de tom 
agressivo.` },
      { id: 'E', type: 'text', value: `traduz, em linguagem subjetiva e intimista, a partir do 
ponto de vista interno, os dramas psicológicos da 
mulher moderna, às voltas com a questão da 
priorização do trabalho em detrimento da vida familiar 
e amorosa.` },
    ],
    correct: 'D',
    explanation: `Gabarito: D. A novela "Um Copo de Cólera", de Raduan Nassar, emprega recursos estilísticos típicos da literatura brasileira dos anos 1970, aliando, nas palavras de Antonio Candido, "vanguarda estética e amargura política". A alternativa D é correta porque o texto evidencia uma crítica à sociedade em que vivem os personagens, construída por meio de um fluxo verbal contínuo e de tom agressivo, característico do embate entre os amantes. As demais falham: a narrativa é em primeira pessoa e de linguagem torrencial, não sóbria e em terceira pessoa (A); a linguagem não é simples e objetiva voltada à exclusão social do narrador (B); não há ponto de vista distanciado sobre a urbanização (C); e o foco não é o drama psicológico da mulher moderna dividida entre trabalho e vida afetiva (E).`,
    subject: ['lit'],
    topics: ['Análise de obras', 'Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 133,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Texto I
[...] já foi o tempo em que via a convivência como
viável, só exigindo deste bem comum, piedosamente, o
meu quinhão, já foi o tempo em que consentia num
contrato, deixando muitas coisas de fora sem ceder
contudo no que me era vital, já foi o tempo em que
reconhecia a existência escandalosa de imaginados
valores, coluna vertebral de toda ‘ordem’; mas não tive
sequer o sopro necessário, e, negado o respiro, me foi
imposto o sufoco; é esta consciência que me libera, é ela
hoje que me empurra, são outras agora minhas
preocupações, é hoje outro o meu universo de problemas;
num mundo estapafúrdio — definitivamente fora de foco —
cedo ou tarde tudo acaba se reduzindo a um ponto de
vista, e você que vive paparicando as ciências humanas,
nem suspeita que paparica uma piada: impossível ordenar
o mundo dos valores, ninguém arruma a casa do capeta;
me recuso pois a pensar naquilo em que não mais
acredito, seja o amor, a amizade, a família, a igreja, a
humanidade; me lixo com tudo isso! me apavora ainda a
existência, mas não tenho medo de ficar sozinho, foi
conscientemente que escolhi o exílio, me bastando hoje o
cinismo dos grandes indiferentes [...].
NASSAR, R. Um copo de cólera. São Paulo:
Companhia das Letras, 1992.
Texto II
Raduan Nassar lançou a novela Um Copo de
Cólera em 1978, fervilhante narrativa de um confronto
verbal entre amantes, em que a fúria das palavras
cortantes se estilhaçava no ar. O embate conjugal ecoava
o autoritário discurso do poder e da submissão de um
Brasil que vivia sob o jugo da ditadura militar.
COMODO, R. Um silêncio inquietante. IstoÉ. Disponível em:
http://www.terra.com.br. Acesso em: 15 jul. 2009.
Considerando-se os textos apresentados e o contexto
político e social no qual foi produzida a obra Um Copo de
Cólera, verifica-se que o narrador, ao dirigir-se à sua
parceira, nessa novela, tece um discurso`,
    alternatives: [
      { id: 'A', type: 'text', value: `conformista, que procura defender as instituições nas 
quais repousava a autoridade do regime militar no 
Brasil, a saber: a Igreja, a família e o Estado.` },
      { id: 'B', type: 'text', value: `pacifista, que procura defender os ideais libertários 
representativos da intelectualidade brasileira opositora 
à ditadura militar na década de 70 do século passado.` },
      { id: 'C', type: 'text', value: `desmistificador, escrito em um discurso ágil e 
contundente, 
que 
critica 
os 
grandes 
princípios 
humanitários 
supostamente 
defendidos 
por 
sua 
interlocutora.` },
      { id: 'D', type: 'text', value: `politizado, pois apela para o engajamento nas causas 
sociais e para a defesa dos direitos humanos como 
uma única forma de salvamento para a humanidade.` },
      { id: 'E', type: 'text', value: `contraditório, ao acusar a sua interlocutora de 
compactuar com o regime repressor da ditadura 
militar, por meio da defesa de instituições como a 
família e a Igreja.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. Considerando o contexto político da ditadura militar em que foi produzida "Um Copo de Cólera", a questão analisa o discurso do narrador ao dirigir-se à sua parceira. A alternativa C é correta porque esse discurso é desmistificador, ágil e contundente, criticando os grandes princípios humanitários supostamente defendidos pela interlocutora e desnudando as contradições do embate. As demais falham: o narrador não é conformista a ponto de defender as instituições do regime militar (A); não é pacifista ligado à intelectualidade opositora (B); não é um discurso politizado que apela ao engajamento como única salvação da humanidade (D); e não acusa a interlocutora de compactuar com o regime repressor por defender a família e a Igreja (E).`,
    subject: ['lit'],
    topics: ['Análise de obras', 'Literatura brasileira', 'Questões aleatórias'],
  },
  {
    id: 134,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Nunca se falou e se preocupou tanto com o corpo 
como nos dias atuais. É comum ouvirmos anúncios de uma 
nova academia de ginástica, de uma nova forma de dieta, 
de uma nova técnica de autoconhecimento e outras 
práticas de saúde alternativa, em síntese, vivemos nos 
últimos anos a redescoberta do prazer, voltando nossas 
atenções ao nosso próprio corpo. Essa valorização do 
prazer individualizante se estrutura em um verdadeiro culto 
ao corpo, em analogia a uma religião, assistimos hoje ao 
surgimento de novo universo: a corpolatria. 
CODO, W.; SENNE, W. O que é corpo(latria). Coleção 
Primeiros Passos. Brasiliense, 1985 (adaptado). 
Sobre esse fenômeno do homem contemporâneo presente 
nas classes sociais brasileiras, principalmente, na classe 
média, a corpolatria`,
    alternatives: [
      { id: 'A', type: 'text', value: `é uma religião pelo avesso, por isso outra religião; 
inverteram-se os sinais, a busca da felicidade eterna 
antes carregava em si a destruição do prazer, hoje 
implica o seu culto.` },
      { id: 'B', type: 'text', value: `criou outro ópio do povo, levando as pessoas a 
buscarem cada vez mais grupos igualitários de 
integração social.` },
      { id: 'C', type: 'text', value: `é 
uma 
tradução 
dos 
valores 
das 
sociedades 
subdesenvolvidas, mas em países considerados do 
primeiro mundo ela não consegue se manifestar 
porque a população tem melhor educação e senso 
crítico.` },
      { id: 'D', type: 'text', value: `tem como um de seus dogmas o narcisismo, 
significando o “amar o próximo como se ama a si 
mesmo”.` },
      { id: 'E', type: 'text', value: `existe 
desde 
a 
Idade 
Média, 
entretanto 
esse 
acontecimento se intensificou a partir da Revolução 
Industrial no século XIX e se estendeu até os nossos 
dias.` },
    ],
    correct: 'A',
    explanation: `Gabarito: A. O texto apresenta a "corpolatria" como culto contemporâneo ao corpo, estruturado em analogia a uma religião, fruto da redescoberta individualizante do prazer. A alternativa A é correta porque a corpolatria é descrita como uma religião pelo avesso, uma outra religião em que se inverteram os sinais: enquanto a busca tradicional da felicidade eterna implicava a renúncia ao prazer, agora a felicidade passa justamente pelo culto ao prazer e ao corpo. As demais falham: a corpolatria não cria grupos igualitários de integração social (B); não é tradução dos valores de sociedades subdesenvolvidas (C); seu dogma não é o amor ao próximo (D); e o texto a situa como fenômeno dos últimos anos, não desde a Idade Média (E).`,
    subject: ['por'],
    topics: ['Interpretação de texto', 'Questões aleatórias'],
  },
  {
    id: 135,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Confidência do Itabirano 
 
Alguns anos vivi em Itabira. 
Principalmente nasci em Itabira. 
Por isso sou triste, orgulhoso: de ferro. 
Noventa por cento de ferro nas calçadas. 
Oitenta por cento de ferro nas almas. 
E esse alheamento do que na vida é porosidade e 
[comunicação. 
 
A vontade de amar, que me paralisa o trabalho, 
vem de Itabira, de suas noites brancas, sem mulheres e 
[sem horizontes. 
E o hábito de sofrer, que tanto me diverte, 
é doce herança itabirana. 
 
De Itabira trouxe prendas diversas que ora te ofereço: 
esta pedra de ferro, futuro aço do Brasil, 
este São Benedito do velho santeiro Alfredo Duval; 
este couro de anta, estendido no sofá da sala de visitas; 
este orgulho, esta cabeça baixa... 
 
Tive ouro, tive gado, tive fazendas. 
Hoje sou funcionário público. 
Itabira é apenas uma fotografia na parede. 
Mas como dói! 
ANDRADE, C. D. Poesia completa. 
Rio de Janeiro: Nova Aguilar, 2003. 
Carlos Drummond de Andrade é um dos expoentes do 
movimento modernista brasileiro. Com seus poemas, 
penetrou fundo na alma do Brasil e trabalhou poeticamente 
as inquietudes e os dilemas humanos. Sua poesia é feita 
de uma relação tensa entre o universal e o particular, como 
se 
percebe 
claramente 
na 
construção 
do 
poema 
Confidência 
do 
Itabirano. 
Tendo 
em 
vista 
os 
procedimentos de construção do texto literário e as 
concepções artísticas modernistas, conclui-se que o 
poema acima`,
    alternatives: [
      { id: 'A', type: 'text', value: `representa a fase heroica do modernismo, devido ao 
tom contestatório e à utilização de expressões e usos 
linguísticos típicos da oralidade.` },
      { id: 'B', type: 'text', value: `apresenta uma característica importante do gênero 
lírico, que é a apresentação objetiva de fatos e dados 
históricos.` },
      { id: 'C', type: 'text', value: `evidencia uma tensão histórica entre o “eu” e a sua 
comunidade, 
por 
intermédio 
de 
imagens 
que 
representam a forma como a sociedade e o mundo 
colaboram para a constituição do indivíduo.` },
      { id: 'D', type: 'text', value: `critica, por meio de um discurso irônico, a posição de 
inutilidade do poeta e da poesia em comparação com 
as prendas resgatadas de Itabira.` },
      { id: 'E', type: 'text', value: `apresenta influências românticas, uma vez que trata 
da individualidade, da saudade da infância e do amor 
pela terra natal, por meio de recursos retóricos 
pomposos.` },
    ],
    correct: 'C',
    explanation: `Gabarito: C. No poema "Confidência do Itabirano", de Carlos Drummond de Andrade, o eu lírico relaciona sua formação pessoal à cidade natal, Itabira, feita de ferro, orgulho e dor. A alternativa C é correta porque o poema evidencia uma tensão histórica entre o "eu" e sua comunidade, por meio de imagens (o ferro, as prendas trazidas de Itabira) que representam o modo como a sociedade e o lugar de origem colaboram para a constituição do indivíduo. As demais falham: o poema não representa a fase heroica do modernismo com tom contestatório e oralidade (A); o lírico não se define pela apresentação objetiva de fatos históricos (B); não há ironia que critique a inutilidade do poeta (D); e, embora trate da terra natal, não se filia a influências românticas por meio de recursos retóricos pomposos (E).`,
    subject: ['lit'],
    topics: ['Literatura brasileira', 'Escolas literárias', 'Questões aleatórias'],
  },
  {
    id: 136,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Dados da Associação Nacional de Empresas 
de Transportes Urbanos (ANTU) mostram que o 
número de passageiros transportados mensalmente nas 
principais regiões metropolitanas do país vem caindo 
sistematicamente. Eram 476,7 milhões de passageiros em 
1995, e esse número caiu para 321,9 milhões em abril de 
2001. Nesse período, o tamanho da frota de veículos 
mudou pouco, tendo no final de 2008 praticamente o 
mesmo tamanho que tinha em 2001. 
 
O gráfico a seguir mostra um índice de 
produtividade utilizado pelas empresas do setor, que é a 
razão entre o total de passageiros transportados por dia e 
o tamanho da frota de veículos. 
 
 
Disponível em: http://www.ntu.org.br. Acesso em 16 jul. 2009 (adaptado). 
Supondo que as frotas totais de veículos naquelas regiões 
metropolitanas em abril de 2001 e em outubro de 2008 
eram do mesmo tamanho, os dados do gráfico permitem 
inferir que o total de passageiros transportados no mês de 
outubro de 2008 foi aproximadamente igual a`,
    images: ['/enem/2009/images/enem_2009_d2_q136.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `355 milhões.` },
      { id: 'B', type: 'text', value: `400 milhões.` },
      { id: 'C', type: 'text', value: `426 milhões.` },
      { id: 'D', type: 'text', value: `441 milhões.` },
      { id: 'E', type: 'text', value: `477 milhões.` },
    ],
    correct: 'A',
    explanation: `O índice do gráfico é a razão passageiros/veículo·dia, e a frota de abril/2001 é igual à de outubro/2008. Como total = índice × frota × 25, para a mesma frota vale total₂₀₀₈/total₂₀₀₁ = índice₂₀₀₈/índice₂₀₀₁. No gráfico, índice de abr/01 ≈ 400 e de out/08 = 441. Em abr/01 o total foi 321,9 milhões. Logo total₂₀₀₈ = 321,9 × (441/400) = 321,9 × 1,1025 ≈ 354,9 milhões ≈ 355 milhões. Resposta: A.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 137,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `O mapa ao lado representa um 
bairro de determinada cidade, 
no qual as flechas indicam o 
sentido das mãos do tráfego. 
Sabe-se que esse bairro foi 
planejado e que cada quadra 
representada na figura é um 
terreno quadrado, de lado igual 
a 200 metros. 
 
Desconsiderando-se a largura das ruas, qual seria o 
tempo, em minutos, que um ônibus, em velocidade 
constante e igual a 40 km/h, partindo do ponto X, 
demoraria para chegar até o ponto Y?`,
    images: ['/enem/2009/images/enem_2009_d2_q137.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `25 min.` },
      { id: 'B', type: 'text', value: `15 min.` },
      { id: 'C', type: 'text', value: `2,5 min.` },
      { id: 'D', type: 'text', value: `1,5 min.` },
      { id: 'E', type: 'text', value: `0,15 min.` },
    ],
    correct: 'D',
    explanation: `Cada quadra tem 200 m de lado. Seguindo o sentido das mãos de tráfego de X até Y, o ônibus percorre 5 quadras, isto é, 5 × 200 = 1 000 m = 1 km. A 40 km/h, o tempo é t = distância/velocidade = 1/40 h = 1/40 × 60 min = 1,5 min. Resposta: D.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 138,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Suponha que o modelo exponencial y = 363e0,03x, em que 
x = 0 corresponde ao ano 2000, x = 1 corresponde ao ano 
2001, e assim sucessivamente, e que y é a população em 
milhões de habitantes no ano x, seja usado para estimar 
essa população com 60 anos ou mais de idade nos países 
em desenvolvimento entre 2010 e 2050. Desse modo, 
considerando e0,3 = 1,35, estima-se que a população com 
60 anos ou mais estará, em 2030, entre`,
    images: ['/enem/2009/images/enem_2009_d2_q138.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `490 e 510 milhões.` },
      { id: 'B', type: 'text', value: `550 e 620 milhões.` },
      { id: 'C', type: 'text', value: `780 e 800 milhões.` },
      { id: 'D', type: 'text', value: `810 e 860 milhões.` },
      { id: 'E', type: 'text', value: `870 e 910 milhões.` },
    ],
    correct: 'E',
    explanation: `O modelo é y = 363·e^{0,03x}, com x = 0 em 2000. Para 2030, x = 30, logo y = 363·e^{0,03·30} = 363·e^{0,9}. Como e^{0,9} = (e^{0,3})³ = 1,35³ = 2,460, tem-se y = 363 × 2,460 ≈ 893 milhões. Esse valor está entre 870 e 910 milhões. Resposta: E.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 139,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Em 2050, a probabilidade de se escolher, aleatoriamente, 
uma pessoa com 60 anos ou mais de idade, na população 
dos países desenvolvidos, será um número mais próximo 
de`,
    images: ['/enem/2009/images/enem_2009_d2_q139.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `2
1 .` },
      { id: 'B', type: 'text', value: `20
7 .` },
      { id: 'C', type: 'text', value: `25
8 .` },
      { id: 'D', type: 'text', value: `5
1 .` },
      { id: 'E', type: 'text', value: `25
3 .` },
    ],
    correct: 'C',
    explanation: `Em 2050, nos países desenvolvidos há 461 milhões de pessoas com 60 anos ou mais, correspondendo, pela escala à direita do gráfico, a cerca de 32% da população total desse grupo. A probabilidade de escolher ao acaso uma pessoa com 60+ é, então, ≈ 0,32 = 8/25. Resposta: C.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 140,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `O governo cedeu terrenos para que famílias 
construíssem suas residências com a condição de que no 
mínimo 94% da área do terreno fosse mantida como área 
de preservação ambiental. Ao receber o terreno retangular 
ABCD, em que 
2
BC
AB =
, Antônio demarcou uma área 
quadrada no vértice A, para a construção de sua 
residência, de acordo com o desenho, no qual 
5
AB
AE =
 é 
lado do quadrado. 
 
 
 
Nesse caso, a área definida por Antônio atingiria 
exatamente o limite determinado pela condição se ele`,
    images: ['/enem/2009/images/enem_2009_d2_q140.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `duplicasse a medida do lado do quadrado.` },
      { id: 'B', type: 'text', value: `triplicasse a medida do lado do quadrado.` },
      { id: 'C', type: 'text', value: `triplicasse a área do quadrado.` },
      { id: 'D', type: 'text', value: `ampliasse a medida do lado do quadrado em 4%.` },
      { id: 'E', type: 'text', value: `ampliasse a área do quadrado em 4%.` },
    ],
    correct: 'C',
    explanation: `Como AB = BC/2, o terreno tem área AB × BC = AB × 2AB = 2·AB². O lado do quadrado é AE = AB/5, de área (AB/5)² = AB²/25. A fração ocupada é (AB²/25)/(2·AB²) = 1/50 = 2%. O limite permitido para construção é 6% (preservar 94%). Como 6% = 3 × 2%, basta triplicar a área do quadrado para atingir exatamente o limite (alternativa que propõe triplicar a área do quadrado). Resposta: C.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 141,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Uma resolução do Conselho Nacional de Política 
Energética (CNPE) estabeleceu a obrigatoriedade de 
adição de biodísel ao óleo dísel comercializado nos postos. 
A exigência é que, a partir de 1.º de julho de 2009, 4% do 
volume da mistura final seja formada por biodísel. Até 
junho de 2009, esse percentual era de 3%. Essa medida 
estimula a demanda de biodísel, bem como possibilita a 
redução da importação de dísel de petróleo. 
Disponível em: http://www1.folha.uol.com.br. 
Acesso em: 12 jul. 2009 (adaptado). 
Estimativas indicam que, com a adição de 4% de biodísel 
ao dísel, serão consumidos 925 milhões de litros de 
biodísel no segundo semestre de 2009. Considerando-se 
essa estimativa, para o mesmo volume da mistura final 
dísel/biodísel consumida no segundo semestre de 2009, 
qual seria o consumo de biodísel com a adição de 3%?`,
    alternatives: [
      { id: 'A', type: 'text', value: `27,75 milhões de litros.` },
      { id: 'B', type: 'text', value: `37,00 milhões de litros.` },
      { id: 'C', type: 'text', value: `231,25 milhões de litros.` },
      { id: 'D', type: 'text', value: `693,75 milhões de litros.` },
      { id: 'E', type: 'text', value: `888,00 milhões de litros.` },
    ],
    correct: 'D',
    explanation: `Com 4% de biodiesel, o consumo é de 925 milhões de litros, que representam 4% do volume total da mistura. Logo o volume total = 925/0,04 = 23 125 milhões de litros. Com 3%, o consumo de biodiesel seria 0,03 × 23 125 = 693,75 milhões de litros. Resposta: D.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 142,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `A suspeita de que haveria uma relação causal 
entre tabagismo e câncer de pulmão foi levantada pela 
primeira vez a partir de observações clínicas. Para testar 
essa possível associação, foram conduzidos inúmeros 
estudos epidemiológicos. Dentre esses, houve o estudo do 
número de casos de câncer em relação ao número de 
cigarros consumidos por dia, cujos resultados são 
mostrados no gráfico a seguir. 
 
 
Centers for Disease Control and Prevention CDC-EIS 
Summer Course - 1992 (adaptado). 
De acordo com as informações do gráfico,`,
    images: ['/enem/2009/images/enem_2009_d2_q142.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `o consumo diário de cigarros e o número de casos de 
câncer de pulmão são grandezas inversamente 
proporcionais.` },
      { id: 'B', type: 'text', value: `o consumo diário de cigarros e o número de casos de 
câncer de pulmão são grandezas que não se 
relacionam.` },
      { id: 'C', type: 'text', value: `o consumo diário de cigarros e o número de casos de 
câncer 
de 
pulmão 
são 
grandezas 
diretamente 
proporcionais.` },
      { id: 'D', type: 'text', value: `uma pessoa não fumante certamente nunca será 
diagnosticada com câncer de pulmão.` },
      { id: 'E', type: 'text', value: `o consumo diário de cigarros e o número de casos de 
câncer 
de 
pulmão 
são 
grandezas 
que 
estão 
relacionadas, mas sem proporcionalidade.` },
    ],
    correct: 'E',
    explanation: `O gráfico mostra os casos de câncer praticamente constantes (≈20) de 1 a 14 cigarros e um salto para ≈50, mantendo-se constante, de 15 a 25 cigarros. Como o número de casos cresce com o consumo (não é independente), mas não o faz de forma proporcional (não há razão constante nem reta pela origem), as grandezas estão relacionadas, porém sem proporcionalidade. Resposta: E.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 143,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `O gráfico a seguir mostra a evolução, de abril de 2008 a 
maio de 2009, da população economicamente ativa para 
seis Regiões Metropolitanas pesquisadas. 
 
 
Disponível em: www.ibge.gov.br. 
Considerando que a taxa de crescimento da população 
economicamente ativa, entre 05/09 e 06/09, seja de 4%, 
então o número de pessoas economicamente ativas em 
06/09 será igual a`,
    images: ['/enem/2009/images/enem_2009_d2_q143.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `23.940.` },
      { id: 'B', type: 'text', value: `32.228.` },
      { id: 'C', type: 'text', value: `920.800.` },
      { id: 'D', type: 'text', value: `23.940.800.` },
      { id: 'E', type: 'text', value: `32.228.000.` },
    ],
    correct: 'D',
    explanation: `No gráfico, a população economicamente ativa em 05/09 é 23 020 (mil pessoas). Com crescimento de 4% até 06/09: 23 020 × 1,04 = 23 940,8 mil pessoas, ou seja, 23 940 800 pessoas. Resposta: D.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 144,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `A música e a matemática se encontram na representação 
dos tempos das notas musicais, conforme a figura 
seguinte. 
 
Um compasso é uma unidade musical composta por 
determinada quantidade de notas musicais em que a soma 
das durações coincide com a fração indicada como fórmula 
do compasso. Por exemplo, se a fórmula de compasso for 
2
1 , poderia ter um compasso ou com duas semínimas ou 
uma mínima ou quatro colcheias, sendo possível a 
combinação de diferentes figuras. 
Um trecho musical de oito compassos, cuja fórmula é 4
3 , 
poderia ser preenchido com`,
    images: ['/enem/2009/images/enem_2009_d2_q144.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `24 fusas.` },
      { id: 'B', type: 'text', value: `3 semínimas.` },
      { id: 'C', type: 'text', value: `8 semínimas.` },
      { id: 'D', type: 'text', value: `24 colcheias e 12 semínimas.` },
      { id: 'E', type: 'text', value: `16 semínimas e 8 semicolcheias.` },
    ],
    correct: 'D',
    explanation: `A fórmula 3/4 indica que cada compasso soma 3/4; em 8 compassos a soma total é 8 × 3/4 = 6. Testando a alternativa D: 24 colcheias valem 24 × 1/8 = 3 e 12 semínimas valem 12 × 1/4 = 3, somando 3 + 3 = 6. As demais não resultam em 6 (A: 0,75; B: 0,75; C: 2; E: 4,5). Resposta: D.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 145,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `O controle de qualidade de uma empresa 
fabricante 
de 
telefones 
celulares 
aponta 
que 
a 
probabilidade de um aparelho de determinado modelo 
apresentar defeito de fabricação é de 0,2%. Se uma loja 
acaba de vender 4 aparelhos desse modelo para um 
cliente, qual é a probabilidade de esse cliente sair da loja 
com exatamente dois aparelhos defeituosos?`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `2 × (0,2%)4.` },
      { id: 'B', type: 'text', value: `4 × (0,2%)2.` },
      { id: 'C', type: 'text', value: `6 × (0,2%)2 × (99,8%)2.` },
      { id: 'D', type: 'text', value: `4 × (0,2%).` },
      { id: 'E', type: 'text', value: `6 × (0,2%) × (99,8%).` },
    ],
    correct: 'C',
    explanation: `A probabilidade de um aparelho ter defeito é 0,2% e de não ter é 99,8%. Para exatamente 2 defeituosos entre 4 vendidos, usa-se a distribuição binomial: C(4,2) × (0,2%)² × (99,8%)² = 6 × (0,2%)² × (99,8%)². Resposta: C.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 146,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Uma pousada oferece pacotes promocionais para 
atrair casais a se hospedarem por até oito dias. A 
hospedagem seria em apartamento de luxo e, nos três 
primeiros dias, a diária custaria R$ 150,00, preço da diária 
fora da promoção. Nos três dias seguintes, seria aplicada 
uma redução no valor da diária, cuja taxa média de 
variação, a cada dia, seria de R$ 20,00. Nos dois dias 
restantes, seria mantido o preço do sexto dia. Nessas 
condições, um modelo para a promoção idealizada é 
apresentado no gráfico a seguir, no qual o valor da diária é 
função do tempo medido em número de dias. 
 
 
 
De acordo com os dados e com o modelo, comparando o 
preço que um casal pagaria pela hospedagem por 
sete dias fora da promoção, um casal que adquirir o pacote 
promocional por oito dias fará uma economia de`,
    images: ['/enem/2009/images/enem_2009_d2_q146.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `R$ 90,00.` },
      { id: 'B', type: 'text', value: `R$ 110,00.` },
      { id: 'C', type: 'text', value: `R$ 130,00.` },
      { id: 'D', type: 'text', value: `R$ 150,00.` },
      { id: 'E', type: 'text', value: `R$ 170,00.` },
    ],
    correct: 'A',
    explanation: `Fora da promoção a diária é R$ 150,00. Na promoção: dias 1 a 3 → 150 cada; dias 4, 5 e 6 → redução média de R$ 20/dia, formando a PA 130, 110, 90; dias 7 e 8 → mantém o valor do 6º dia (90). Total promocional (8 dias) = 3×150 + (130+110+90) + 2×90 = 450 + 330 + 180 = 960. Fora da promoção (7 dias) = 7×150 = 1 050. Economia = 1 050 − 960 = R$ 90,00. Resposta: A.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Questões aleatórias'],
  },
  {
    id: 147,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `As figuras a seguir exibem um trecho de um quebra-
cabeças que está sendo montado. Observe que as peças 
são quadradas e há 8 peças no tabuleiro da figura A e 8 
peças no tabuleiro da figura B. As peças são retiradas do 
tabuleiro da figura B e colocadas no tabuleiro da figura A 
na posição correta, isto é, de modo a completar os 
desenhos. 
 
 
 
 
 
 
 
Disponível em: http://pt.eternityii.com. Acesso em: 14 jul. 2009. 
É possível preencher corretamente o espaço indicado pela 
seta no tabuleiro da figura A colocando a peça`,
    images: ['/enem/2009/images/enem_2009_d2_q147.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1 após girá-la 90° no sentido horário.` },
      { id: 'B', type: 'text', value: `1 após girá-la 180° no sentido anti-horário.` },
      { id: 'C', type: 'text', value: `2 após girá-la 90° no sentido anti-horário.` },
      { id: 'D', type: 'text', value: `2 após girá-la 180° no sentido horário.` },
      { id: 'E', type: 'text', value: `2 após girá-la 270° no sentido anti-horário.` },
    ],
    correct: 'C',
    explanation: `O espaço indicado pela seta no tabuleiro A precisa receber a peça cujo desenho, após rotação, encaixe no padrão. Comparando as peças retiradas do tabuleiro B com a posição a preencher, a peça 2, girada 90° no sentido anti-horário, completa corretamente o desenho. Resposta: C.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 148,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `A tabela mostra alguns dados da emissão de dióxido de 
carbono de uma fábrica, em função do número de 
toneladas produzidas. 
 
 
Cadernos do Gestar II, Matemática TP3. 
Disponível em: www.mec.gov.br. Acesso em: 14 jul. 2009. 
Os dados na tabela indicam que a taxa média de variação 
entre a emissão de dióxido de carbono (em ppm) e a 
produção (em toneladas) é`,
    images: ['/enem/2009/images/enem_2009_d2_q148.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `inferior a 0,18.` },
      { id: 'B', type: 'text', value: `superior a 0,18 e inferior a 0,50.` },
      { id: 'C', type: 'text', value: `superior a 0,50 e inferior a 1,50.` },
      { id: 'D', type: 'text', value: `superior a 1,50 e inferior a 2,80.` },
      { id: 'E', type: 'text', value: `superior a 2,80.` },
    ],
    correct: 'D',
    explanation: `A taxa média de variação é a razão entre a variação da emissão e a variação da produção no intervalo da tabela. De 1,1 a 2,0 toneladas a produção varia 0,9; a emissão varia de 2,14 a 4,00 ppm, ou seja, 1,86 ppm. Taxa = 1,86/0,9 ≈ 2,07, valor superior a 1,50 e inferior a 2,80. Resposta: D.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Funções', 'Questões aleatórias'],
  },
  {
    id: 149,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Em Florença, Itália, na Igreja de Santa Croce, é 
possível encontrar um portão em que aparecem os anéis 
de Borromeo. Alguns historiadores acreditavam que os 
círculos representavam as três artes: escultura, pintura e 
arquitetura, 
pois 
elas 
eram 
tão 
próximas 
quanto 
inseparáveis. 
 
 
Scientific American, ago. 2008. 
Qual dos esboços a seguir melhor representa os anéis de 
Borromeo?`,
    images: ['/enem/2009/images/enem_2009_d2_q149.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'E',
    explanation: `Nos anéis de Borromeo, os três círculos estão entrelaçados de modo que, retirado qualquer um deles, os outros dois se separam (nenhum par está diretamente ligado). O esboço que representa esse entrelaçamento característico, em que os três se prendem apenas em conjunto, é o da alternativa E. Resposta: E.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 150,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Brasil e França têm relações comerciais há mais 
de 200 anos. Enquanto a França é a 5.ª nação mais rica do 
planeta, o Brasil é a 10.ª, e ambas se destacam na 
economia mundial. No entanto, devido a uma série de 
restrições, o comércio entre esses dois países ainda não é 
adequadamente 
explorado, 
como 
mostra 
a 
tabela 
seguinte, referente ao período 2003-2007. 
 
 
Disponível em: www.cartacapital.com.br. Acesso em: 7 jul. 2009. 
 
Os dados da tabela mostram que, no período considerado, 
os valores médios dos investimentos da França no Brasil 
foram maiores que os investimentos do Brasil na França 
em um valor`,
    images: ['/enem/2009/images/enem_2009_d2_q150.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `inferior a 300 milhões de dólares.` },
      { id: 'B', type: 'text', value: `superior a 300 milhões de dólares, mas inferior a 
400 milhões de dólares.` },
      { id: 'C', type: 'text', value: `superior a 400 milhões de dólares, mas inferior a 
500 milhões de dólares.` },
      { id: 'D', type: 'text', value: `superior a 500 milhões de dólares, mas inferior a 
600 milhões de dólares.` },
      { id: 'E', type: 'text', value: `superior a 600 milhões de dólares.` },
    ],
    correct: 'D',
    explanation: `Média de Brasil na França: (367+357+354+539+280)/5 = 1 897/5 = 379,4 milhões. Média de França no Brasil: (825+485+1458+744+1214)/5 = 4 726/5 = 945,2 milhões. A diferença é 945,2 − 379,4 = 565,8 milhões, valor superior a 500 e inferior a 600 milhões de dólares. Resposta: D.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 151,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Um grupo de 50 pessoas fez um orçamento inicial 
para organizar uma festa, que seria dividido entre elas em 
cotas iguais. Verificou-se ao final que, para arcar com 
todas as despesas, faltavam R$ 510,00, e que 5 novas 
pessoas haviam ingressado no grupo. No acerto foi 
decidido que a despesa total seria dividida em partes 
iguais pelas 55 pessoas. Quem não havia ainda 
contribuído pagaria a sua parte, e cada uma das 50 
pessoas do grupo inicial deveria contribuir com mais 
R$ 7,00. 
 
De acordo com essas informações, qual foi o valor da cota 
calculada no acerto final para cada uma das 55 pessoas?`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `R$ 14,00.` },
      { id: 'B', type: 'text', value: `R$ 17,00.` },
      { id: 'C', type: 'text', value: `R$ 22,00.` },
      { id: 'D', type: 'text', value: `R$ 32,00.` },
      { id: 'E', type: 'text', value: `R$ 57,00.` },
    ],
    correct: 'D',
    explanation: `Seja c a cota inicial (entre as 50 pessoas); o orçamento inicial é 50c e a despesa total é 50c + 510. No acerto a despesa é dividida por 55, e cada uma das 50 pessoas iniciais paga R$ 7,00 a mais: (50c + 510)/55 = c + 7. Então 50c + 510 = 55c + 385 → 5c = 125 → c = 25. A cota final é 25 + 7 = R$ 32,00. Resposta: D.`,
    subject: ['mat'],
    topics: ['Equações e inequações', 'Questões aleatórias'],
  },
  {
    id: 152,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Técnicos concluem mapeamento do aquífero Guarani 
 
 
O aquífero Guarani localiza-se no subterrâneo dos 
territórios da Argentina, Brasil, Paraguai e Uruguai, com 
extensão total de 1.200.000 quilômetros quadrados, dos 
quais 840.000 quilômetros quadrados estão no Brasil. O 
aquífero armazena cerca de 30 mil quilômetros cúbicos de 
água e é considerado um dos maiores do mundo. 
 
Na maioria das vezes em que são feitas 
referências à água, são usadas as unidades metro cúbico 
e litro, e não as unidades já descritas. A Companhia de 
Saneamento Básico do Estado de São Paulo (SABESP) 
divulgou, por exemplo, um novo reservatório cuja 
capacidade de armazenagem é de 20 milhões de litros. 
Disponível em: http://noticias.terra.com.br. Acesso em: 10 jul. 2009 (adaptado). 
Comparando as capacidades do aquífero Guarani e desse 
novo reservatório da SABESP, a capacidade do aquífero 
Guarani é`,
    alternatives: [
      { id: 'A', type: 'text', value: `1,5 x 102 vezes a capacidade do reservatório novo.` },
      { id: 'B', type: 'text', value: `1,5 x 103 vezes a capacidade do reservatório novo.` },
      { id: 'C', type: 'text', value: `1,5 x 106 vezes a capacidade do reservatório novo.` },
      { id: 'D', type: 'text', value: `1,5 x 108 vezes a capacidade do reservatório novo.` },
      { id: 'E', type: 'text', value: `1,5 x 109 vezes a capacidade do reservatório novo.` },
    ],
    correct: 'E',
    explanation: `O aquífero armazena 30 mil km³ = 30 000 km³ de água. Como 1 km³ = 10¹² litros, isso equivale a 30 000 × 10¹² = 3 × 10¹⁶ litros. O reservatório novo tem 20 milhões = 2 × 10⁷ litros. A razão é (3 × 10¹⁶)/(2 × 10⁷) = 1,5 × 10⁹. Resposta: E.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 153,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Suponha que, na escultura do artista Emanoel 
Araújo, mostrada na figura a seguir, todos os prismas 
numerados em algarismos romanos são retos, com bases 
triangulares, e que as faces laterais do poliedro II são 
perpendiculares à sua própria face superior, que, por sua 
vez, é um triângulo congruente ao triângulo base dos 
prismas. Além disso, considere que os prismas I e III são 
perpendiculares ao prisma IV e ao poliedro II. 
 
Disponível em: www.escritosriodearte.com.br. Acesso em: 28 jul. 2009. 
Imagine um plano paralelo à face α do prisma I, mas que 
passe pelo ponto P pertencente à aresta do poliedro II, 
indicado na figura. A interseção desse plano imaginário 
com a escultura contém`,
    images: ['/enem/2009/images/enem_2009_d2_q153.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `dois 
triângulos 
congruentes 
com 
lados 
correspondentes paralelos.` },
      { id: 'B', type: 'text', value: `dois 
retângulos 
congruentes 
e 
com 
lados 
correspondentes paralelos.` },
      { id: 'C', type: 'text', value: `dois 
trapézios 
congruentes 
com 
lados 
correspondentes perpendiculares.` },
      { id: 'D', type: 'text', value: `dois 
paralelogramos 
congruentes 
com 
lados 
correspondentes paralelos.` },
      { id: 'E', type: 'text', value: `dois 
quadriláteros 
congruentes 
com 
lados 
correspondentes perpendiculares.` },
    ],
    correct: 'A',
    explanation: `O plano é paralelo à face α do prisma I e passa por P. Como os prismas são retos de bases triangulares e o plano corta duas partes congruentes da escultura mantendo o paralelismo das faces, a interseção contém dois triângulos congruentes com lados correspondentes paralelos. Resposta: A.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 154,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `A rampa de um hospital tem na sua parte mais elevada uma altura de 2,2 metros. Um paciente ao caminhar sobre a rampa percebe que se deslocou 3,2 metros e alcançou uma altura de 0,8 metro. A distância em metros que o paciente ainda deve caminhar para atingir o ponto mais alto da rampa é`,
    alternatives: [
      { id: 'A', type: 'text', value: `1,16 metros.` },
      { id: 'B', type: 'text', value: `3,0 metros.` },
      { id: 'C', type: 'text', value: `5,4 metros.` },
      { id: 'D', type: 'text', value: `5,6 metros.` },
      { id: 'E', type: 'text', value: `7,04 metros.` },
    ],
    correct: 'D',
    explanation: `Ao caminhar 3,2 m sobre a rampa o paciente sobe 0,8 m. Por semelhança (proporção constante entre deslocamento na rampa e altura ganha), para a altura total de 2,2 m o comprimento total da rampa é L = 3,2 × (2,2/0,8) = 3,2 × 2,75 = 8,8 m. Já percorreu 3,2 m, faltando 8,8 − 3,2 = 5,6 m. Resposta: D.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 155,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Um posto de combustível vende 10.000 litros de 
álcool por dia a R$ 1,50 cada litro. Seu proprietário 
percebeu que, para cada centavo de desconto que 
concedia por litro, eram vendidos 100 litros a mais por dia. 
Por exemplo, no dia em que o preço do álcool foi R$ 1,48, 
foram vendidos 10.200 litros. 
 
Considerando x o valor, em centavos, do desconto dado 
no preço de cada litro, e V o valor, em R$, arrecadado por 
dia com a venda do álcool, então a expressão que 
relaciona V e x é`,
    alternatives: [
      { id: 'A', type: 'text', value: `V = 10.000 + 50x - x2.` },
      { id: 'B', type: 'text', value: `V = 10.000 + 50x + x2.` },
      { id: 'C', type: 'text', value: `V = 15.000 - 50x - x2.` },
      { id: 'D', type: 'text', value: `V = 15.000 + 50x - x2.` },
      { id: 'E', type: 'text', value: `V = 15.000 - 50x + x2.` },
    ],
    correct: 'D',
    explanation: `Com x centavos de desconto, o preço por litro é (1,50 − 0,01x) reais e a quantidade vendida é (10 000 + 100x) litros. Então V = (1,50 − 0,01x)(10 000 + 100x) = 15 000 + 150x − 100x − x² = 15 000 + 50x − x². Resposta: D.`,
    subject: ['mat'],
    topics: ['Funções', 'Equações e inequações', 'Questões aleatórias'],
  },
  {
    id: 156,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Para cada indivíduo, a sua inscrição no Cadastro 
de Pessoas Físicas (CPF) é composto por um número de 9 
algarismos e outro número de 2 algarismos, na forma d1d2, 
em que os dígitos d1 e d2 são denominados dígitos 
verificadores. Os dígitos verificadores são calculados, a 
partir da esquerda, da seguinte maneira: os 9 primeiros 
algarismos 
são 
multiplicados 
pela 
sequência 
10, 9, 8, 7, 6, 5, 4, 3, 2 (o primeiro por 10, o segundo por 9, 
e assim sucessivamente); em seguida, calcula-se o resto r 
da divisão da soma dos resultados das multiplicações por 
11, e se esse resto r for 0 ou 1, d1 é zero, caso contrário 
d1 = (11 - r). O dígito d2 é calculado pela mesma regra, na 
qual os números a serem multiplicados pela sequência 
dada são contados a partir do segundo algarismo, sendo 
d1 o último algarismo, isto é, d2 é zero se o resto s da 
divisão por 11 das somas das multiplicações for 0 ou 1, 
caso contrário, d2 = (11 - s). 
 
Suponha que João tenha perdido seus documentos, 
inclusive o cartão de CPF e, ao dar queixa da perda na 
delegacia, não conseguisse lembrar quais eram os dígitos 
verificadores, recordando-se apenas que os nove primeiros 
algarismos eram 123.456.789. Neste caso, os dígitos 
verificadores d1 e d2 esquecidos são, respectivamente,`,
    images: null,
    alternatives: [
      { id: 'A', type: 'text', value: `0 e 9.` },
      { id: 'B', type: 'text', value: `1 e 4.` },
      { id: 'C', type: 'text', value: `1 e 7.` },
      { id: 'D', type: 'text', value: `9 e 1.` },
      { id: 'E', type: 'text', value: `0 e 1.` },
    ],
    correct: 'A',
    explanation: `d₁: somando os produtos dos 9 primeiros dígitos por 10,9,…,2: 1·10+2·9+3·8+4·7+5·6+6·5+7·4+8·3+9·2 = 210. Resto de 210 por 11 é 1; como é 0 ou 1, d₁ = 0. d₂: aplicando a sequência 10,…,2 aos dígitos a partir do 2º, com d₁ ao final (2,3,4,5,6,7,8,9,0): 2·10+3·9+4·8+5·7+6·6+7·5+8·4+9·3+0·2 = 244. Resto de 244 por 11 é 2; d₂ = 11 − 2 = 9. Logo d₁d₂ = 0 e 9. Resposta: A.`,
    subject: ['mat'],
    topics: ['Progressões (PA e PG)', 'Questões aleatórias'],
  },
  {
    id: 157,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Uma empresa que fabrica esferas de aço, de 
6 cm de raio, utiliza caixas de madeira, na forma de um 
cubo, para transportá-las. 
 
Sabendo que a capacidade da caixa é de 13.824 cm³, 
então o número máximo de esferas que podem ser 
transportadas em uma caixa é igual a`,
    alternatives: [
      { id: 'A', type: 'text', value: `4.` },
      { id: 'B', type: 'text', value: `8.` },
      { id: 'C', type: 'text', value: `16.` },
      { id: 'D', type: 'text', value: `24.` },
      { id: 'E', type: 'text', value: `32.` },
    ],
    correct: 'B',
    explanation: `A capacidade da caixa cúbica é 13 824 cm³, logo a aresta é ∛13 824 = 24 cm. Cada esfera tem raio 6 cm, portanto diâmetro 12 cm. Ao longo de cada aresta cabem 24/12 = 2 esferas, totalizando 2 × 2 × 2 = 8 esferas. Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 158,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `A figura a seguir mostra as medidas reais de uma 
aeronave 
que 
será 
fabricada 
para 
utilização 
por 
companhias de transporte aéreo. Um engenheiro precisa 
fazer o desenho desse avião em escala de 1:150. 
 
 
 
Para o engenheiro fazer esse desenho em uma folha de 
papel, deixando uma margem de 1 cm em relação às 
bordas da folha, quais as dimensões mínimas, em 
centímetros, que essa folha deverá ter?`,
    images: ['/enem/2009/images/enem_2009_d2_q158.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `2,9 cm × 3,4 cm.` },
      { id: 'B', type: 'text', value: `3,9 cm × 4,4 cm.` },
      { id: 'C', type: 'text', value: `20 cm × 25 cm.` },
      { id: 'D', type: 'text', value: `21 cm × 26 cm.` },
      { id: 'E', type: 'text', value: `192 cm × 242 cm.` },
    ],
    correct: 'D',
    explanation: `Na escala 1:150, cada medida real é dividida por 150. 28,5 m → 2 850 cm/150 = 19 cm; 36 m → 3 600 cm/150 = 24 cm. Acrescentando 1 cm de margem em cada borda (2 cm por dimensão): 19 + 2 = 21 cm e 24 + 2 = 26 cm. A folha deve ter no mínimo 21 cm × 26 cm. Resposta: D.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 159,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Um experimento consiste em colocar certa 
quantidade de bolas de vidro idênticas em um copo com 
água até certo nível e medir o nível da água, conforme 
ilustrado 
na 
figura 
a 
seguir. 
Como 
resultado 
do 
experimento, concluiu-se que o nível da água é função do 
número de bolas de vidro que são colocadas dentro do 
copo. 
 
O quadro a seguir mostra alguns resultados do 
experimento realizado. 
 
 
Disponível em: www.penta.ufrgs.br. 
Acesso em: 13 jan. 2009 (adaptado). 
Qual a expressão algébrica que permite calcular o nível da 
água (y) em função do número de bolas (x)?`,
    images: ['/enem/2009/images/enem_2009_d2_q159_1.jpg', '/enem/2009/images/enem_2009_d2_q159_2.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `y = 30x.` },
      { id: 'B', type: 'text', value: `y = 25x + 20,2.` },
      { id: 'C', type: 'text', value: `y = 1,27x.` },
      { id: 'D', type: 'text', value: `y = 0,7x.` },
      { id: 'E', type: 'text', value: `y = 0,07x + 6.` },
    ],
    correct: 'E',
    explanation: `Os pontos (5; 6,35), (10; 6,70) e (15; 7,05) alinham-se. A taxa (coeficiente angular) é (6,70 − 6,35)/(10 − 5) = 0,35/5 = 0,07. Com y = 0,07x + b e o ponto (5; 6,35): 6,35 = 0,07·5 + b = 0,35 + b → b = 6. Logo y = 0,07x + 6. Resposta: E.`,
    subject: ['mat'],
    topics: ['Funções', 'Questões aleatórias'],
  },
  {
    id: 160,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Uma cooperativa de colheita propôs a um 
fazendeiro um contrato de trabalho nos seguintes termos: a 
cooperativa forneceria 12 trabalhadores e 4 máquinas, em 
um regime de trabalho de 6 horas diárias, capazes de 
colher 20 hectares de milho por dia, ao custo de R$ 10,00 
por trabalhador por dia de trabalho, e R$ 1.000,00 pelo 
aluguel diário de cada máquina. O fazendeiro argumentou 
que fecharia contrato se a cooperativa colhesse 180 
hectares de milho em 6 dias, com gasto inferior a 
R$ 25.000,00. 
 
Para atender às exigências do fazendeiro e supondo que o 
ritmo dos trabalhadores e das máquinas seja constante, a 
cooperativa deveria`,
    alternatives: [
      { id: 'A', type: 'text', value: `manter sua proposta.` },
      { id: 'B', type: 'text', value: `oferecer 4 máquinas a mais.` },
      { id: 'C', type: 'text', value: `oferecer 6 trabalhadores a mais.` },
      { id: 'D', type: 'text', value: `aumentar a jornada de trabalho para 9 horas diárias.` },
      { id: 'E', type: 'text', value: `reduzir em R$ 400,00 o valor do aluguel diário de uma 
máquina.` },
    ],
    correct: 'D',
    explanation: `Ritmo de colheita é proporcional a (trabalhadores × horas). Atual: 12 × 6 h → 20 ha/dia; em 6 dias colhe 120 ha, mas são exigidos 180 ha (30 ha/dia, 1,5 vez mais). Aumentando a jornada de 6 h para 9 h (fator 1,5), passa-se a 30 ha/dia → 180 ha em 6 dias. O custo (R$ 10 por trabalhador·dia e R$ 1 000 por máquina·dia) permanece: 12·10·6 + 4·1000·6 = 720 + 24 000 = R$ 24 720 < R$ 25 000. Resposta: D.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 161,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Suponha que a etapa final de uma gincana escolar 
consista em um desafio de conhecimentos. Cada equipe 
escolheria 10 alunos para realizar uma prova objetiva, e a 
pontuação da equipe seria dada pela mediana das notas 
obtidas pelos alunos. As provas valiam, no máximo, 
10 pontos cada. Ao final, a vencedora foi a equipe Ômega, 
com 7,8 pontos, seguida pela equipe Delta, com 
7,6 pontos. Um dos alunos da equipe Gama, a qual ficou 
na terceira e última colocação, não pôde comparecer, 
tendo recebido nota zero na prova. As notas obtidas pelos 
10 alunos da equipe Gama foram 10; 6,5; 8; 10; 7; 6,5; 7; 
8; 6; 0. 
 
Se o aluno da equipe Gama que faltou tivesse 
comparecido, essa equipe`,
    alternatives: [
      { id: 'A', type: 'text', value: `teria a pontuação igual a 6,5 se ele obtivesse nota 0.` },
      { id: 'B', type: 'text', value: `seria a vencedora se ele obtivesse nota 10.` },
      { id: 'C', type: 'text', value: `seria a segunda colocada se ele obtivesse nota 8.` },
      { id: 'D', type: 'text', value: `permaneceria na terceira posição, independentemente 
da nota obtida pelo aluno.` },
      { id: 'E', type: 'text', value: `empataria com a equipe Ômega na primeira colocação 
se o aluno obtivesse nota 9.` },
    ],
    correct: 'D',
    explanation: `As notas da equipe Gama (com o faltoso = 0) ordenadas: 0; 6; 6,5; 6,5; 7; 7; 8; 8; 10; 10 → mediana = (7+7)/2 = 7. Se o faltoso comparecesse, substituiríamos o 0 por uma nota x (0 a 10). A mediana (média do 5º e 6º valores) varia de 7 (x baixo) a no máximo 7,5 (x = 10). Em qualquer caso fica abaixo de 7,6 (Delta) e 7,8 (Ômega), então Gama permaneceria em 3º lugar, independentemente da nota. Resposta: D.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 162,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Uma escola lançou uma campanha para seus 
alunos arrecadarem, durante 30 dias, alimentos não 
perecíveis para doar a uma comunidade carente da região. 
Vinte alunos aceitaram a tarefa e nos primeiros 10 dias 
trabalharam 3 horas diárias, arrecadando 12 kg de 
alimentos por dia. Animados com os resultados, 30 novos 
alunos somaram-se ao grupo, e passaram a trabalhar 
4 horas por dia nos dias seguintes até o término da 
campanha. 
 
Admitindo-se que o ritmo de coleta tenha se mantido 
constante, a quantidade de alimentos arrecadados ao final 
do prazo estipulado seria de`,
    alternatives: [
      { id: 'A', type: 'text', value: `920 kg.` },
      { id: 'B', type: 'text', value: `800 kg.` },
      { id: 'C', type: 'text', value: `720 kg.` },
      { id: 'D', type: 'text', value: `600 kg.` },
      { id: 'E', type: 'text', value: `570 kg.` },
    ],
    correct: 'A',
    explanation: `A arrecadação é proporcional a (alunos × horas). Nos 10 primeiros dias: 20 × 3 h → 12 kg/dia, logo 0,2 kg por aluno·hora. Nos 20 dias seguintes: 50 alunos × 4 h = 200 aluno·horas → 200 × 0,2 = 40 kg/dia. Total = 10 dias × 12 + 20 dias × 40 = 120 + 800 = 920 kg. Resposta: A.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 163,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Segundo as regras da Fórmula 1, o peso mínimo 
do carro, de tanque vazio, com o piloto, é de 605 kg, e a 
gasolina deve ter densidade entre 725 e 780 gramas por 
litro. Entre os circuitos nos quais ocorrem competições 
dessa categoria, o mais longo é Spa-Francorchamps, na 
Bélgica, cujo traçado tem 7 km de extensão. O consumo 
médio de um carro da Fórmula 1 é de 75 litros para cada 
100 km. 
 
Suponha que um piloto de uma equipe específica, que 
utiliza um tipo de gasolina com densidade de 750 g/L, 
esteja no circuito de Spa-Francorchamps, parado no box 
para reabastecimento. Caso ele pretenda dar mais 16 
voltas, ao ser liberado para retornar à pista, seu carro 
deverá pesar, no mínimo,`,
    alternatives: [
      { id: 'A', type: 'text', value: `617 kg.` },
      { id: 'B', type: 'text', value: `668 kg.` },
      { id: 'C', type: 'text', value: `680 kg.` },
      { id: 'D', type: 'text', value: `689 kg.` },
      { id: 'E', type: 'text', value: `717 kg.` },
    ],
    correct: 'B',
    explanation: `Spa-Francorchamps tem 7 km; 16 voltas = 112 km. O consumo é 75 L por 100 km, então são 75 × 112/100 = 84 L de gasolina. Com densidade 750 g/L, a massa é 84 × 750 = 63 000 g = 63 kg. Somando ao peso mínimo de 605 kg (carro + piloto, tanque vazio): 605 + 63 = 668 kg. Resposta: B.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 164,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Ao morrer, o pai de João, Pedro e José deixou como 
herança um terreno retangular de 3 km x 2 km que contém 
uma área de extração de ouro delimitada por um quarto de 
círculo de raio 1 km a partir do canto inferior esquerdo da 
propriedade. Dado o maior valor da área de extração de 
ouro, os irmãos acordaram em repartir a propriedade de 
modo que cada um ficasse com a terça parte da área de 
extração, conforme mostra a figura. 
 
Em relação à partilha proposta, constata-se que a 
porcentagem da área do terreno que coube a João 
corresponde, aproximadamente, a 
(considere 
0,58
3
3 =
)`,
    images: ['/enem/2009/images/enem_2009_d2_q164.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `50%.` },
      { id: 'B', type: 'text', value: `43%.` },
      { id: 'C', type: 'text', value: `37%.` },
      { id: 'D', type: 'text', value: `33%.` },
      { id: 'E', type: 'text', value: `19%.` },
    ],
    correct: 'E',
    explanation: `A área de extração é um quarto de círculo de raio 1 km, dividido em 3 setores iguais de 30° por retas a partir do canto. João fica com o setor superior (entre 60° e 90°). Sua região no terreno é o triângulo de vértices (0,0), (0,2) e (2/√3, 2): área = ½ · (2/√3) · 2 = 2/√3 = 2·(√3/3) = 2·0,58 = 1,16 km². O terreno tem 3 × 2 = 6 km². Porcentagem = 1,16/6 ≈ 0,19 = 19%. Resposta: E.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Porcentagem', 'Questões aleatórias'],
  },
  {
    id: 165,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Doze times se inscreveram em um torneio de 
futebol amador. O jogo de abertura do torneio foi escolhido 
da seguinte forma: primeiro foram sorteados 4 times para 
compor o Grupo A. Em seguida, entre os times do Grupo 
A, foram sorteados 2 times para realizar o jogo de abertura 
do torneio, sendo que o primeiro deles jogaria em seu 
próprio campo, e o segundo seria o time visitante. 
 
A quantidade total de escolhas possíveis para o Grupo A e 
a quantidade total de escolhas dos times do jogo de 
abertura podem ser calculadas através de`,
    alternatives: [
      { id: 'A', type: 'text', value: `uma combinação e um arranjo, respectivamente.` },
      { id: 'B', type: 'text', value: `um arranjo e uma combinação, respectivamente.` },
      { id: 'C', type: 'text', value: `um arranjo e uma permutação, respectivamente.` },
      { id: 'D', type: 'text', value: `duas combinações.` },
      { id: 'E', type: 'text', value: `dois arranjos.` },
    ],
    correct: 'A',
    explanation: `Escolher 4 times entre 12 para o Grupo A, sem importar a ordem, é uma combinação C(12,4). Escolher 2 times do Grupo A para o jogo de abertura, importando a ordem (o 1º joga em casa e o 2º é visitante), é um arranjo A(4,2). Portanto, uma combinação e um arranjo, respectivamente. Resposta: A.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Questões aleatórias'],
  },
  {
    id: 166,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Rotas aéreas são como pontes que ligam cidades, 
estados ou países. O mapa a seguir mostra os estados 
brasileiros e a localização de algumas capitais identificadas 
pelos números. Considere que a direção seguida por um 
avião AI que partiu de Brasília - DF, sem escalas, para 
Belém, no Pará, seja um segmento de reta com 
extremidades em DF e em 4. 
 
SIQUEIRA, S. Brasil Regiões. Disponível em: www.santiagosiqueira.pro.br. 
Acesso em: 28 jul. 2009 (adaptado). 
Suponha que um passageiro de nome Carlos pegou um 
avião AII, que seguiu a direção que forma um ângulo de 
135o graus no sentido horário com a rota Brasília - Belém 
e pousou em alguma das capitais brasileiras. Ao 
desembarcar, Carlos fez uma conexão e embarcou em um 
avião AIII, que seguiu a direção que forma um ângulo reto, 
no sentido anti-horário, com a direção seguida pelo avião 
AII ao partir de Brasília-DF. Considerando que a direção 
seguida por um avião é sempre dada pela semirreta com 
origem na cidade de partida e que passa pela cidade 
destino do avião, pela descrição dada, o passageiro Carlos 
fez uma conexão em`,
    images: ['/enem/2009/images/enem_2009_d2_q166.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `Belo Horizonte, e em seguida embarcou para Curitiba.` },
      { id: 'B', type: 'text', value: `Belo Horizonte, e em seguida embarcou para 
Salvador.` },
      { id: 'C', type: 'text', value: `Boa Vista, e em seguida embarcou para Porto Velho.` },
      { id: 'D', type: 'text', value: `Goiânia, e em seguida embarcou para o Rio de 
Janeiro.` },
      { id: 'E', type: 'text', value: `Goiânia, e em seguida embarcou para Manaus.` },
    ],
    correct: 'B',
    explanation: `A rota Brasília(DF)–Belém(4) é a referência. O avião AII forma 135° no sentido horário com essa rota e pousa numa capital: essa direção leva a Belo Horizonte (13). Em seguida, o avião AIII forma ângulo reto (90°) no sentido anti-horário com a direção de AII, partindo de Brasília: essa semirreta leva a Salvador (9). Logo, Carlos fez conexão em Belo Horizonte e embarcou para Salvador. Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Questões aleatórias'],
  },
  {
    id: 167,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `O 
quadro 
apresenta 
informações 
da 
área 
aproximada de cada bioma brasileiro. 
 
 
 
Disponível em: www.ibge.gov.br. Acesso em: 10 jul. 2009 (adaptado). 
É comum em conversas informais, ou mesmo em 
noticiários, o uso de múltiplos da área de um campo de 
futebol (com as medidas de 120 m x 90 m) para auxiliar a 
visualização de áreas consideradas extensas. Nesse caso, 
qual é o número de campos de futebol correspondente à 
área aproximada do bioma Pantanal?`,
    images: ['/enem/2009/images/enem_2009_d2_q167.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `1.400` },
      { id: 'B', type: 'text', value: `14.000` },
      { id: 'C', type: 'text', value: `140.000` },
      { id: 'D', type: 'text', value: `1.400.000` },
      { id: 'E', type: 'text', value: `14.000.000` },
    ],
    correct: 'E',
    explanation: `A área do Pantanal é 150 355 km². Um campo de futebol de 120 m × 90 m tem 10 800 m² = 0,0108 km². O número de campos é 150 355 / 0,0108 ≈ 13 921 759 ≈ 14 000 000. Resposta: E.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 168,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Na tabela, são apresentados dados da cotação 
mensal do ovo extra branco vendido no atacado, em 
Brasília, em reais, por caixa de 30 dúzias de ovos, em 
alguns meses dos anos 2007 e 
2008 
 
De acordo com esses dados, o valor da mediana das 
cotações mensais do ovo extra branco nesse período era 
igual a`,
    images: ['/enem/2009/images/enem_2009_d2_q168.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `R$ 73,10.` },
      { id: 'B', type: 'text', value: `R$ 81,50.` },
      { id: 'C', type: 'text', value: `R$ 82,00.` },
      { id: 'D', type: 'text', value: `R$ 83,00.` },
      { id: 'E', type: 'text', value: `R$ 85,30.` },
    ],
    correct: 'D',
    explanation: `As 7 cotações ordenadas: 73,10; 81,60; 82,00; 83,00; 84,00; 84,60; 85,30. Com número ímpar de valores, a mediana é o 4º termo: R$ 83,00. Resposta: D.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 169,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `A vazão do rio Tietê, em São Paulo, constitui preocupação constante nos períodos chuvosos. Em alguns trechos, são construídas canaletas para controlar o fluxo de água. Uma dessas canaletas, cujo corte vertical determina a forma de um trapézio isósceles, tem as medidas especificadas na figura I. Neste caso, a vazão da 3 3 água é de 1.050 m /s. O cálculo da vazão, Q em m /s, envolve o produto da área A do setor transversal (por onde 2 passa a água), em m , pela velocidade da água no local, v, em m/s, ou seja, Q = Av. Planeja-se uma reforma na canaleta, com as dimensões especificadas na figura II, para evitar a ocorrência de enchentes. Disponível em: www2.uel.br. Na suposição de que a velocidade da água não se alterará, qual a vazão esperada para depois da reforma na canaleta?`,
    images: ['/enem/2009/images/enem_2009_d2_q169.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `90 m3/s.` },
      { id: 'B', type: 'text', value: `750 m3/s.` },
      { id: 'C', type: 'text', value: `1.050 m3/s.` },
      { id: 'D', type: 'text', value: `1.512 m3/s.` },
      { id: 'E', type: 'text', value: `2.009 m3/s.` },
    ],
    correct: 'D',
    explanation: `A vazão é Q = A·v. Na figura I (trapézio de bases 30 m e 20 m, altura 2,5 m): A₁ = (30+20)/2 · 2,5 = 62,5 m²; com Q = 1 050 m³/s, v = 1 050/62,5 = 16,8 m/s. Na figura II (bases 49 m e 41 m, altura 2,0 m): A₂ = (49+41)/2 · 2,0 = 90 m². Mantendo v, Q₂ = 90 × 16,8 = 1 512 m³/s. Resposta: D.`,
    subject: ['mat'],
    topics: ['Geometria plana', 'Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 170,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `A resolução das câmeras digitais modernas é 
dada em megapixels, unidade de medida que representa 
um milhão de pontos. As informações sobre cada um 
desses pontos são armazenadas, em geral, em 3 bytes. 
Porém, para evitar que as imagens ocupem muito espaço, 
elas são submetidas a algoritmos de compressão, que 
reduzem em até 95% a quantidade de bytes necessários 
para armazená-las. Considere 1 KB = 1.000 bytes, 
1 MB = 1.000 KB, 1 GB = 1.000 MB. 
 
Utilizando uma câmera de 2.0 megapixels cujo algoritmo 
de compressão é de 95%, João fotografou 150 imagens 
para seu trabalho escolar. Se ele deseja armazená-las de 
modo que o espaço restante no dispositivo seja o menor 
espaço possível, ele deve utilizar`,
    alternatives: [
      { id: 'A', type: 'text', value: `um CD de 700 MB.` },
      { id: 'B', type: 'text', value: `um pendrive de 1 GB.` },
      { id: 'C', type: 'text', value: `um HD externo de 16 GB.` },
      { id: 'D', type: 'text', value: `um memory stick de 16 MB.` },
      { id: 'E', type: 'text', value: `um cartão de memória de 64 MB.` },
    ],
    correct: 'E',
    explanation: `Uma câmera de 2,0 megapixels gera 2 000 000 pontos; a 3 bytes cada, são 6 000 000 bytes = 6 MB por imagem. A compressão de 95% deixa 5%: 0,05 × 6 = 0,3 MB por imagem. Para 150 imagens: 150 × 0,3 = 45 MB. Para deixar o menor espaço restante, escolhe-se o menor dispositivo que comporte 45 MB: o cartão de 64 MB (o de 16 MB não cabe). Resposta: E.`,
    subject: ['mat'],
    topics: ['Porcentagem', 'Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 171,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `A 
população 
brasileira 
sabe, 
pelo 
menos 
intuitivamente, que a probabilidade de acertar as 
seis dezenas da mega sena não é zero, mas é quase. 
Mesmo assim, milhões de pessoas são atraídas por essa 
loteria, especialmente quando o prêmio se acumula em 
valores altos. Até junho de 2009, cada aposta de 
seis dezenas, pertencentes ao conjunto {01, 02, 03, ..., 59, 
60}, custava R$ 1,50. 
Disponível em: www.caixa.gov.br. Acesso em: 7 jul. 2009. 
Considere que uma pessoa decida apostar exatamente 
R$ 126,00 e que esteja mais interessada em acertar 
apenas cinco das seis dezenas da mega sena, justamente 
pela dificuldade desta última. Nesse caso, é melhor que 
essa pessoa faça 84 apostas de seis dezenas diferentes, 
que não tenham cinco números em comum, do que uma 
única aposta com nove dezenas, porque a probabilidade 
de acertar a quina no segundo caso em relação ao 
primeiro é, aproximadamente,`,
    alternatives: [
      { id: 'A', type: 'text', value: `2
1
1
vez menor.` },
      { id: 'B', type: 'text', value: `2
1
2
 vezes menor.` },
      { id: 'C', type: 'text', value: `4 vezes menor.` },
      { id: 'D', type: 'text', value: `9 vezes menor.` },
      { id: 'E', type: 'text', value: `14 vezes menor.` },
    ],
    correct: 'C',
    explanation: `Com R$ 126,00 fazem-se 84 apostas de 6 dezenas (ou uma aposta de 9 dezenas, pois C(9,6)=84). Casos favoráveis à quina sobre C(60,6): com 84 apostas de 6 dezenas → 84·C(6,5)·54 = 84·6·54 = 27 216; com a aposta de 9 dezenas → C(9,5)·51 = 126·51 = 6 426. A razão entre as probabilidades (9 dezenas em relação a 84 apostas) é 6 426/27 216 ≈ 0,236 ≈ 1/4, ou seja, cerca de 4 vezes menor. Resposta: C.`,
    subject: ['mat'],
    topics: ['Análise combinatória', 'Estatística e probabilidade', 'Questões aleatórias'],
  },
  {
    id: 172,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Nos últimos anos, o volume de petróleo exportado 
pelo Brasil tem mostrado expressiva tendência de 
crescimento, ultrapassando as importações em 2008. 
Entretanto, apesar de as importações terem se mantido 
praticamente no mesmo patamar desde 2001, os recursos 
gerados com as exportações ainda são inferiores àqueles 
despendidos com as importações, uma vez que o preço 
médio por metro cúbico do petróleo importado é superior 
ao do petróleo nacional. Nos primeiros cinco meses de 
2009, foram gastos 2,84 bilhões de dólares com 
importações e gerada uma receita de 2,24 bilhões de 
dólares com as exportações. O preço médio por metro 
cúbico em maio de 2009 foi de 340 dólares para o petróleo 
importado e de 230 dólares para o petróleo exportado. 
O quadro a seguir mostra os dados consolidados de 2001 
a 2008 e dos primeiros cinco meses de 2009. 
 
Comércio exterior de petróleo 
(milhões de metros cúbicos) 
 
*Valores apurados de janeiro a maio de 2009. 
Disponível em: http://www.anp.gov.br. 
Acesso em: 15 jul. 2009 (adaptado). 
 
Considere que as importações e exportações de petróleo 
de junho a dezembro de 2009 sejam iguais a 7/5 das
importações e exportações, respectivamente, ocorridas de
janeiro a maio de 2009. Nesse caso, supondo que os 
preços para importação e exportação não sofram 
alterações, qual seria o valor mais aproximado da 
diferença 
entre 
os 
recursos 
despendidos 
com 
as 
importações e os recursos gerados com as exportações 
em 2009?`,
    images: ['/enem/2009/images/enem_2009_d2_q172.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `600 milhões de dólares.` },
      { id: 'B', type: 'text', value: `840 milhões de dólares.` },
      { id: 'C', type: 'text', value: `1,34 bilhão de dólares.` },
      { id: 'D', type: 'text', value: `1,44 bilhão de dólares.` },
      { id: 'E', type: 'text', value: `2,00 bilhões de dólares.` },
    ],
    correct: 'C',
    explanation: `Volumes jan–mai/2009 (tabela): importação 9,00 e exportação 11,00 milhões de m³. Jun–dez = 7/5 desses: importação 12,6 e exportação 15,4 milhões de m³. Recursos jun–dez: importação 12,6·340 = 4 284 milhões; exportação 15,4·230 = 3 542 milhões. Somando jan–mai (gasto 2,84 bi; receita 2,24 bi): gasto total = 2,84 + 4,284 = 7,124 bi; receita total = 2,24 + 3,542 = 5,782 bi. Diferença ≈ 7,124 − 5,782 = 1,342 bilhão de dólares. Resposta: C.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 173,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Uma fábrica produz velas de 
parafina 
em 
forma 
de 
pirâmide 
quadrangular regular com 19 cm de 
altura e 6 cm de aresta da base. Essas 
velas são formadas por 4 blocos de 
mesma altura - 3 troncos de pirâmide 
de bases paralelas e 1 pirâmide na 
parte superior -, espaçados de 1 cm 
entre eles, sendo que a base superior 
de cada bloco é igual à base inferior do 
bloco sobreposto, com uma haste de ferro passando pelo 
centro de cada bloco, unindo-os, conforme a figura. 
 
Se o dono da fábrica resolver diversificar o modelo, 
retirando a pirâmide da parte superior, que tem 1,5 cm de 
aresta na base, mas mantendo o mesmo molde, quanto ele 
passará a gastar com parafina para fabricar uma vela?`,
    images: ['/enem/2009/images/enem_2009_d2_q173.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `156 cm3.` },
      { id: 'B', type: 'text', value: `189 cm3.` },
      { id: 'C', type: 'text', value: `192 cm3.` },
      { id: 'D', type: 'text', value: `216 cm3.` },
      { id: 'E', type: 'text', value: `540 cm3.` },
    ],
    correct: 'B',
    explanation: `A vela é uma pirâmide de altura 19 cm e aresta 6 cm, formada por 4 blocos de mesma altura separados por 3 espaços de 1 cm: altura útil = 19 − 3 = 16 cm, cada bloco 4 cm. A aresta diminui 6/16 = 0,375 por cm, logo as arestas das seções são 6; 4,5; 3; 1,5. Volumes (base quadrada): tronco inferior V₁ = (4/3)(36+20,25+27) = 111; V₂ = (4/3)(20,25+9+13,5) = 57; V₃ = (4/3)(9+2,25+4,5) = 21; pirâmide do topo V₄ = (1/3)·2,25·4 = 3. Retirando a pirâmide (aresta 1,5 cm) sobram os 3 troncos: 111 + 57 + 21 = 189 cm³. Resposta: B.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 174,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Considere um ponto P em uma circunferência de raio r no 
plano cartesiano. Seja Q a projeção ortogonal de P sobre o 
eixo x, como mostra a figura, e suponha que o ponto P 
percorra, no sentido anti-horário, uma distância d ≤ r sobre 
a circunferência. 
 
Então, o ponto Q percorrerá, no eixo x, uma distância dada 
por`,
    images: ['/enem/2009/images/enem_2009_d2_q174.jpg'],
    alternatives: [
      { id: 'A', type: 'text', value: `A` },
      { id: 'B', type: 'text', value: `B` },
      { id: 'C', type: 'text', value: `C` },
      { id: 'D', type: 'text', value: `D` },
      { id: 'E', type: 'text', value: `E` },
    ],
    correct: 'B',
    explanation: `Ao percorrer o arco de comprimento d num círculo de raio r, o ponto P gira um ângulo θ = d/r. A projeção Q sobre o eixo x desloca-se horizontalmente o mesmo que a componente horizontal de P, que varia de r·cos0 para r·cosθ. O deslocamento é r − r·cos(d/r) = r[1 − cos(d/r)]. Resposta: B.`,
    subject: ['mat'],
    topics: ['Trigonometria', 'Questões aleatórias'],
  },
  {
    id: 175,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `O Indicador do CadÚnico (ICadÚnico), que 
compõe o cálculo do Índice de Gestão Descentralizada do 
Programa Bolsa Família (IGD), é obtido por meio da média 
aritmética entre a taxa de cobertura qualificada de 
cadastros (TC) e a taxa de atualização de cadastros (TA), 
em que 
,
,
NV
NA
TA
NF
NV
TC
=
=
 NV é o número de 
cadastros domiciliares válidos no perfil do CadÚnico, NF é 
o número de famílias estimadas como público alvo do 
CadÚnico e NA é o número de cadastros domiciliares 
atualizados no perfil do CadÚnico. 
Portaria n° 148 de 27 de abril de 2006 (adaptado). 
Suponha que o IcadÚnico de um município específico é 
0,6. Porém, dobrando NF o IcadÚnico cairá para 0,5. Se 
NA + NV = 3.600, então NF é igual a`,
    alternatives: [
      { id: 'A', type: 'text', value: `10.000.` },
      { id: 'B', type: 'text', value: `7.500.` },
      { id: 'C', type: 'text', value: `5.000.` },
      { id: 'D', type: 'text', value: `4.500.` },
      { id: 'E', type: 'text', value: `3.000.` },
    ],
    correct: 'C',
    explanation: `ICad = (TC + TA)/2 = (NV/NF + NA/NV)/2 = 0,6. Dobrando NF: (NV/2NF + NA/NV)/2 = 0,5. Subtraindo: a diferença vem só do termo com NF: (NV/NF − NV/2NF)/2 = NV/(4NF) = 0,1 → NV/NF = 0,4. Da 1ª equação: 0,4 + NA/NV = 1,2 → NA/NV = 0,8 → NA = 0,8·NV = 0,32·NF. Como NA + NV = 3 600: 0,32·NF + 0,4·NF = 0,72·NF = 3 600 → NF = 5 000. Resposta: C.`,
    subject: ['mat'],
    topics: ['Equações e inequações', 'Questões aleatórias'],
  },
  {
    id: 176,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Joana frequenta uma academia de ginástica onde 
faz exercícios de musculação. O programa de Joana 
requer que ela faça 3 séries de exercícios em 6 aparelhos 
diferentes, gastando 30 segundos em cada série. No 
aquecimento, ela caminha durante 10 minutos na esteira 
e descansa durante 60 segundos para começar o 
primeiro exercício no primeiro aparelho. Entre uma série e 
outra, assim como ao mudar de aparelho, Joana 
descansa por 60 segundos. 
 
Suponha que, em determinado dia, Joana tenha iniciado 
seus exercícios às 10h30min e finalizado às 11h7min. 
Nesse dia e nesse tempo, Joana`,
    alternatives: [
      { id: 'A', type: 'text', value: `não poderia fazer sequer a metade dos exercícios e 
dispor dos períodos de descanso especificados em 
seu programa.` },
      { id: 'B', type: 'text', value: `poderia ter feito todos os exercícios e cumprido 
rigorosamente os períodos de descanso especificados 
em seu programa.` },
      { id: 'C', type: 'text', value: `poderia ter feito todos os exercícios, mas teria de ter 
deixado de cumprir um dos períodos de descanso 
especificados em seu programa.` },
      { id: 'D', type: 'text', value: `conseguiria fazer todos os exercícios e cumpriria todos 
os períodos de descanso especificados em seu 
programa, e ainda se permitiria uma pausa de 7 min.` },
      { id: 'E', type: 'text', value: `não poderia fazer todas as 3 séries dos exercícios 
especificados em seu programa; em alguma dessas 
séries deveria ter feito uma série a menos e não 
deveria ter cumprido um dos períodos de descanso.` },
    ],
    correct: 'B',
    explanation: `Tempo necessário: aquecimento 10 min; descanso inicial de 60 s = 1 min; 3 séries × 6 aparelhos = 18 séries de 30 s = 9 min; entre as 18 séries há 17 descansos de 60 s = 17 min. Total = 10 + 1 + 9 + 17 = 37 min. O intervalo das 10h30 às 11h07 também é de 37 min. Logo ela poderia fazer todos os exercícios e cumprir rigorosamente todos os descansos previstos. Resposta: B.`,
    subject: ['mat'],
    topics: ['Equações e inequações', 'Questões aleatórias'],
  },
  {
    id: 177,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Um artesão construiu peças de artesanato 
interceptando uma pirâmide de base quadrada com um 
plano. Após fazer um estudo das diferentes peças que 
poderia obter, ele concluiu que uma delas poderia ter uma 
das faces pentagonal. 
 
Qual dos argumentos a seguir justifica a conclusão do 
artesão?`,
    alternatives: [
      { id: 'A', type: 'text', value: `Uma pirâmide de base quadrada tem 4 arestas laterais 
e a interseção de um plano com a pirâmide intercepta 
suas arestas laterais. Assim, esses pontos formam um 
polígono de 4 lados.` },
      { id: 'B', type: 'text', value: `Uma pirâmide de base quadrada tem 4 faces 
triangulares e, quando um plano intercepta essa 
pirâmide, divide cada face em um triângulo e um 
trapézio. Logo, um dos polígonos tem 4 lados.` },
      { id: 'C', type: 'text', value: `Uma pirâmide de base quadrada tem 5 faces e a 
interseção de uma face com um plano é um segmento 
de reta. Assim, se o plano interceptar todas as faces, o 
polígono obtido nessa interseção tem 5 lados.` },
      { id: 'D', type: 'text', value: `O número de lados de qualquer polígono obtido como 
interseção de uma pirâmide com um plano é igual ao 
número de faces da pirâmide. Como a pirâmide tem 5 
faces, o polígono tem 5 lados.` },
      { id: 'E', type: 'text', value: `O número de lados de qualquer polígono obtido 
interceptando-se uma pirâmide por um plano é igual 
ao número de arestas laterais da pirâmide. Como a 
pirâmide tem 4 arestas laterais, o polígono tem 4 
lados.` },
    ],
    correct: 'C',
    explanation: `Numa pirâmide de base quadrada há 5 faces (4 triangulares + a base). A interseção de cada face com um plano é um segmento de reta. Se o plano cortar todas as 5 faces, obtêm-se 5 segmentos, formando um polígono de 5 lados (pentágono). Esse é o argumento que justifica a face pentagonal. Resposta: C.`,
    subject: ['mat'],
    topics: ['Geometria espacial', 'Questões aleatórias'],
  },
  {
    id: 178,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `João deve 12 parcelas de R$ 150,00 referentes ao 
cheque especial de seu banco e cinco parcelas de 
R$ 80,00 referentes ao cartão de crédito. O gerente do 
banco lhe ofereceu duas parcelas de desconto no cheque 
especial, caso João quitasse esta dívida imediatamente ou, 
na mesma condição, isto é, quitação imediata, com 25% de 
desconto na dívida do cartão. João também poderia 
renegociar suas dívidas em 18 parcelas mensais de R$ 
125,00. Sabendo desses termos, José, amigo de João, 
ofereceu-lhe emprestar o dinheiro que julgasse necessário 
pelo tempo de 18 meses, com juros de 25% sobre o total 
emprestado. 
 
A opção que dá a João o menor gasto seria`,
    alternatives: [
      { id: 'A', type: 'text', value: `renegociar suas dívidas com o banco.` },
      { id: 'B', type: 'text', value: `pegar emprestado de José o dinheiro referente à 
quitação das duas dívidas.` },
      { id: 'C', type: 'text', value: `recusar o empréstimo de José e pagar todas as 
parcelas pendentes nos devidos prazos.` },
      { id: 'D', type: 'text', value: `pegar emprestado de José o dinheiro referente à 
quitação do cheque especial e pagar as parcelas do 
cartão de crédito.` },
      { id: 'E', type: 'text', value: `pegar emprestado de José o dinheiro referente à 
quitação do cartão de crédito e pagar as parcelas do 
cheque especial.` },
    ],
    correct: 'E',
    explanation: `Com quitação imediata, a dívida do cheque especial cai 2 parcelas: 10×150 = R$ 1 500; a do cartão tem 25% de desconto: 0,75×(5×80) = R$ 300. Opções: (A) renegociar = 18×125 = 2 250; (B) emprestar de José as duas quitações = (1 500+300)×1,25 = 2 250; (C) pagar tudo nos prazos = 1 800 + 400 = 2 200; (D) emprestar p/ cheque (1 500×1,25=1 875) + cartão em parcelas (400) = 2 275; (E) emprestar p/ cartão (300×1,25=375) + cheque em parcelas (1 800) = 2 175. O menor gasto é R$ 2 175 (opção E). Resposta: E.`,
    subject: ['mat'],
    topics: ['Matemática financeira', 'Questões aleatórias'],
  },
  {
    id: 179,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `A 
cisterna 
é 
um 
recipiente 
utilizado 
para 
armazenar água da chuva. Os principais critérios a serem 
observados para captação e armazenagem de água da 
chuva são: a demanda diária de água na propriedade; o 
índice médio de precipitação (chuva), por região, em cada 
período do ano; o tempo necessário para armazenagem; e 
a área de telhado necessária ou disponível para captação. 
Para fazer o cálculo do volume de uma cisterna, deve-se 
acrescentar um adicional relativo ao coeficiente de 
evaporação. Na dificuldade em se estabelecer um 
coeficiente confiável, a Empresa Brasileira de Pesquisa 
Agropecuária (EMBRAPA) sugere que sejam adicionados 
10% ao volume calculado de água. 
 
Desse modo, o volume, em m³, de uma cisterna é 
calculado por V c = V d × N dia , em que V d = volume de 
demanda da água diária (m³), N dia = número de dias de 
armazenagem, e este resultado deve ser acrescido de 
10%. 
 
Para melhorar a qualidade da água, recomenda-se 
que a captação seja feita somente nos telhados das 
edificações. 
 
Considerando que a precipitação de chuva de 
1 mm sobre uma área de 1 m2 produz 1 litro de água, 
pode-se calcular a área de um telhado a fim de atender a 
necessidade de armazenagem da seguinte maneira: área 
do 
telhado 
(em 
m2) = volume da cisterna (em 
litros)/precipitação.  
Para atender a uma demanda diária de 2.000 litros de 
água, com período de armazenagem de 15 dias e 
precipitação média de 110 mm, o telhado, retangular, 
deverá ter as dimensões mínimas de`,
    alternatives: [
      { id: 'A', type: 'text', value: `6 metros por 5 metros, pois assim teria uma área de 
30 m2.` },
      { id: 'B', type: 'text', value: `15 metros por 20 metros, pois assim teria uma área de 
300 m2.` },
      { id: 'C', type: 'text', value: `50 metros por 60 metros, pois assim teria uma área de 
3.000 m2.` },
      { id: 'D', type: 'text', value: `91 metros por 30 metros, pois assim teria uma área de 
2.730 m2.` },
      { id: 'E', type: 'text', value: `110 metros por 30 metros, pois assim teria uma área 
de 3.300 m2.` },
    ],
    correct: 'B',
    explanation: `O volume da cisterna é Vc = Vd × N_dia = 2 000 × 15 = 30 000 L, acrescido de 10%: 30 000 × 1,1 = 33 000 L. A área do telhado = volume (L)/precipitação (mm) = 33 000/110 = 300 m². Entre as opções, 15 m × 20 m fornece exatamente 300 m². Resposta: B.`,
    subject: ['mat'],
    topics: ['Razão e proporção', 'Questões aleatórias'],
  },
  {
    id: 180,
    exam: 'enem',
    year: 2009,
    day: 2,
    text: `Um médico está estudando um novo medicamento 
que combate um tipo de câncer em estágios avançados. 
Porém, devido ao forte efeito dos seus componentes, a 
cada dose administrada há uma chance de 10% de que o 
paciente sofra algum dos efeitos colaterais observados no 
estudo, tais como dores de cabeça, vômitos ou mesmo 
agravamento dos sintomas da doença. O médico oferece 
tratamentos compostos por 3, 4, 6, 8 ou 10 doses do 
medicamento, de acordo com o risco que o paciente 
pretende assumir. 
 
Se um paciente considera aceitável um risco de até 35% 
de chances de que ocorra algum dos efeitos colaterais 
durante o tratamento, qual é o maior número admissível de 
doses para esse paciente?`,
    alternatives: [
      { id: 'A', type: 'text', value: `3 doses.` },
      { id: 'B', type: 'text', value: `4 doses.` },
      { id: 'C', type: 'text', value: `6 doses.` },
      { id: 'D', type: 'text', value: `8 doses.` },
      { id: 'E', type: 'text', value: `10 doses.` },
    ],
    correct: 'B',
    explanation: `Cada dose tem 10% de chance de efeito colateral; a chance de não ocorrer é 90% = 0,9. Em n doses, o risco de ocorrer algum efeito é 1 − (0,9)ⁿ. Impondo ≤ 35%: (0,9)ⁿ ≥ 0,65. Para n = 4: 0,9⁴ = 0,6561 → risco 34,39% ≤ 35% (ok). Para n = 6: 0,9⁶ ≈ 0,531 → risco ≈ 46,9% > 35%. O maior número admissível de doses é 4. Resposta: B.`,
    subject: ['mat'],
    topics: ['Estatística e probabilidade', 'Questões aleatórias'],
  },
];

export default ENEM_2009_D2;
