import { QuizQuestion } from '@/lib/quiz-questions';

const ENEM_2024_D2: QuizQuestion[] = [
 {
 id: 91,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Muitas pessoas ainda se espantam com o fato de um 
passageiro sair ileso de um acidente de carro enquanto 
o veículo onde estava teve perda total. Essas pessoas 
talvez considerem, equivocadamente, que os carros mais 
seguros são os que têm as estruturas mais rígidas, ou seja, 
estruturas, que durante uma colisão, apresentam menor 
deformação. Na verdade, o que ocorre é o contrário. Por isso, 
a partir de 1958, passaram a ser produzidos carros com partes 
que se deformam facilmente. 
DAY, C. Crumple Zones . Disponível em: https://pubs.aip.org. 
Acesso em: 2 jul. 2024 (adaptado). 
Assim, além dos cintos de segurança e dos airbags, 
os carros modernos passaram a contar com o dispositivo 
de segurança conhecido como crumple zone (região 
deformável, em inglês), conforme a figura. 
Momentum and Car safety . GCSE Physics Revision. 
Disponível em: www.shalom-education.com. 
Acesso em: 5 jul. 2024 (adaptado). 
Considerando o carro, seus ocupantes e o muro da figura 
como um sistema isolado, o crumple zone aumenta a 
segurança dos passageiros porque, durante uma colisão, 
a deformação da estrutura do carro`,
 images: ['/enem/2024/images/enem_2024_d2_q91.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`aciona os airbags do veículo.`},
 { id: 'B', type: 'text', value:`absorve a energia cinética do sistema.`},
 { id: 'C', type: 'text', value:`consome a quantidade de movimento do sistema.`},
 { id: 'D', type: 'text', value:`cria uma barreira de proteção para seus ocupantes.`},
 { id: 'E', type: 'text', value:`diminui a velocidade do centro de massa do sistema.`},
 ],
 correct: 'B',
 explanation:`A crumple zone é projetada para absorver a energia cinética de uma colisão, deformando-se de forma controlada. Isso reduz o impacto sobre os ocupantes, aumentando sua segurança. Durante uma colisão, a crumple zone absorve parte da energia cinética do sistema (carro e ocupantes), reduzindo a força transmitida aos passageiros.`,
 subject: ['bio'],
 topics: ['Genética', 'Questões aleatórias'],
 },
 {
 id: 92,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Células a combustível microbianas (CCM) são capazes 
de gerar eletricidade a partir de águas residuárias urbanas e 
agroindustriais. As CCM são compostas de duas câmaras. 
Numa delas, onde ocorre o tratamento da matéria orgânica, 
as bactérias eletrogênicas crescem formando um biofilme 
e se alimentam dos poluentes presentes no efluente. Ao se 
alimentarem, essas bactérias geram uma corrente elétrica 
que percorre o material sobre o qual elas formaram o biofilme. 
Um fio condutor externo possibilita a migração dessa corrente 
para uma segunda câmara, promovendo uma reação química. 
A figura esquematiza uma CCM e as reações envolvidas. 
CH₃COO⁻ (aq) + 2 H₂O (l) → 2 CO₂ (g) + 7 H⁺ (aq) + 8 e⁻
4 H⁺ (aq) + O₂ (g) + 4 e⁻ → 2 H₂O (l)
QUINTO, A. C. Biobaterias geram eletricidade a partir de 
esgoto sanitário e efluentes agroindustriais . Disponível em: 
https://jornal.usp.br. Acesso em: 1 dez. 2021 (adaptado). 
Qual das equações representa a reação global que ocorre 
durante o funcionamento dessa CCM?`,
 images: ['/enem/2024/images/enem_2024_d2_q92.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`CH₃COO⁻ (aq) + O₂ (g) → 2 CO₂ (g) + 3 H⁺ (aq)`},
 { id: 'B', type: 'text', value:`CO₂ (g) + O₂ (g) + H⁺ (aq) → H₂O (l) + CH₃COO⁻ (aq)`},
 { id: 'C', type: 'text', value:`CH₃COO⁻ (aq) + H⁺ (aq) + 2 O₂ (g) → 2 CO₂ (g) + 2 H₂O (l)`},
 { id: 'D', type: 'text', value:`CH₃COO⁻ (aq) + 6 H₂O (l) → 2 CO₂ (g) + 2 O₂ (g) + 15 H⁺ (aq)`},
 { id: 'E', type: 'text', value:`2 CO₂ (g) + 11 H⁺ (aq) + O₂ (g) → CH₃COO⁻ (aq) + 4 H₂O (l)`},
 ],
 correct: 'C',
 explanation:`As reações fornecidas são: CH3COO- + 2 H2O → 2 CO₂ + 7 H+ + 8 e- 4H+ + O₂ + 4e- → 2H2O Multiplicando a segunda reação por dois, para igualar os elétrons, temos: CH3COO- + 2 H2O → 2 CO₂ + 7 H+ + 8 e- 8H+ + 2 O₂ + 8e- → 4H2O Cortando reagentes e produtos iguais em reações diferentes, temos: CH3COO- +2 O₂ + H+ → 2 CO₂ + 2 H2O`,
 subject: ['qui'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 93,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`No senso comum, considera-se, ainda hoje, que 
compostos orgânicos são substâncias presentes nos seres 
vivos. Na Química, a expressão “compostos orgânicos” tem 
um uso histórico de mais de 200 anos, adquirindo diferentes 
conotações ao longo do desenvolvimento dessa ciência. 
Atualmente, atribui-se a essa expressão outro significado. 
A concepção científica atual define esses compostos 
como substâncias`,
 alternatives: [
 { id: 'A', type: 'text', value:`benéficas à saúde humana.`},
 { id: 'B', type: 'text', value:`capazes de serem biodegradadas.`},
 { id: 'C', type: 'text', value:`formadas a partir de gás carbônico.`},
 { id: 'D', type: 'text', value:`produzidas sem o uso de agrotóxicos.`},
 { id: 'E', type: 'text', value:`contendo carbono como elemento principal.`},
 ],
 correct: 'E',
 explanation:`A questão aborda a definição científica atual de compostos orgânicos. A concepção científica define compostos orgânicos como substâncias que contêm carbono como elemento principal.`,
 subject: ['qui'],
 topics: ['Química Geral', 'Questões aleatórias'],
 },
 {
 id: 94,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A nimesulida é um fármaco pouco solúvel em água, 
utilizado como anti-inflamatório, analgésico e antitérmico. 
Essa substância pode ser convertida em uma espécie 
eletricamente carregada, de maior solubilidade em água, 
mediante o tratamento com uma base de Brönsted-Lowry, 
isto é, uma espécie química capaz de capturar um próton 
(H⁺). Na figura são apresentados os grupamentos presentes
na estrutura química da nimesulida. 
Nimesulida 
GONÇALVES, A. A. et al. Contextualizando reações ácido-base 
de acordo com a teoria protônica de Brönsted-Lowry 
usando comprimidos de propranolol e nimesulida. 
Química Nova , n. 3, 2013 (adaptado). 
Na estrutura desse fármaco, o grupamento capaz de 
reagir com a base de Brönsted-Lowry é o grupo`,
 images: ['/enem/2024/images/enem_2024_d2_q94.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`sulfonamida.`},
 { id: 'B', type: 'text', value:`metila.`},
 { id: 'C', type: 'text', value:`fenila.`},
 { id: 'D', type: 'text', value:`nitro.`},
 { id: 'E', type: 'text', value:`éter.`},
 ],
 correct: 'A',
 explanation:`A questão solicita encontrar o grupamento capaz de agir como um ácido de Bronsted-Lowry, ou seja, uma espécie capaz de doar prótons (H+). Dos grupamentos, o que apresenta H+ disponível é a sulfonamida, que apresenta caráter levemente ácido por conta da presença do enxofre.`,
 subject: ['bio'],
 topics: ['Genética', 'Questões aleatórias'],
 },
 {
 id: 95,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O desenvolvimento da biotecnologia e da clonagem 
gênica em procariotos fez com que a produção de proteínas 
se tornasse mais intensa, rápida e econômica. Para a 
produção de hormônios, enzimas e proteínas de resistência 
a drogas, uma variação da técnica de reação em cadeia 
pela polimerase (PCR, na sigla em inglês) utiliza a enzima 
transcriptase reversa (RT-PCR), que sintetiza moléculas 
de DNA complementares a partir de fitas de RNA. 
Nesse contexto, essa técnica é importante para detectar 
genes`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`expressos.`},
 { id: 'B', type: 'text', value:`plasmidiais.`},
 { id: 'C', type: 'text', value:`bacterianos.`},
 { id: 'D', type: 'text', value:`dominantes.`},
 { id: 'E', type: 'text', value:`autossômicos.`},
 ],
 correct: 'A',
 explanation:`A obtenção de cDNA a partir dos RNAs de uma célula permite descobrir quais genes foram expressos na célula, ou seja, quais genes foram transcritos.`,
 subject: ['fis'],
 topics: ['Cinemática', 'Questões aleatórias'],
 },
 {
 id: 96,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Nos automóveis, é importante garantir que o centro de 
massa ( CM ) de cada conjunto roda/pneu coincida com o 
seu centro geométrico. Esse processo é realizado em uma 
máquina de balanceamento, na qual o conjunto roda e pneu 
é colocado para girar a uma velocidade de valor constante. 
Com base nas oscilações medidas, a máquina indica a 
posição do centro de massa do conjunto, e pequenas 
peças de chumbo são fixadas em lugares específicos da 
roda até que as vibrações diminuam. Durante o treinamento 
de sua equipe, a fim de corrigir a posição do centro de 
massa indicada pela máquina, um mecânico apresenta 
o esquema a seguir, com cinco possíveis pontos da roda 
para posicionar uma peça de chumbo. 
Em qual ponto deve ser fixada a peça de chumbo para corrigir 
a posição do centro de massa desse conjunto roda/pneu?`,
 images: ['/enem/2024/images/enem_2024_d2_q96.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`1`},
 { id: 'B', type: 'text', value:`2`},
 { id: 'C', type: 'text', value:`3`},
 { id: 'D', type: 'text', value:`4`},
 { id: 'E', type: 'text', value:`5`},
 ],
 correct: 'C',
 explanation:`Na figura percebemos que o centro de massa (CM) se encontra acima do centro e para a sua direita. Para que o centro de massa retorne ao centro da figura será necessário compensar com um contrapeso abaixo e à esquerda do centro da figura, adicionando mais massa e deslocando o ponto de CM.`,
 subject: ['qui'],
 topics: ['Química Geral', 'Questões aleatórias'],
 },
 {
 id: 97,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O soro caseiro serve para combater a desidratação por 
meio da reposição da água e sais minerais perdidos, 
por exemplo, por diarreia. Uma receita simples para a sua 
preparação consiste em utilizar duas colheres grandes 
(de sopa) de açúcar e duas colheres pequenas (de café) 
de sal de cozinha, dissolvidos em 2 L de água fervida, 
obtendo-se uma solução com concentração de íon sódio 
de 1,4 mg/mL. 
Considere as massas molares: NaCl = 58,5 g/mol; 
Na = 23 g/mol. 
Qual é o valor mais próximo da massa, em grama, de 
cloreto de sódio presente em uma única colher pequena?`,
 alternatives: [
 { id: 'A', type: 'text', value:`0,7 g`},
 { id: 'B', type: 'text', value:`1,8 g`},
 { id: 'C', type: 'text', value:`2,8 g`},
 { id: 'D', type: 'text', value:`3,6 g`},
 { id: 'E', type: 'text', value:`7,0 g`},
 ],
 correct: 'D',
 explanation:`A dissolução do cloreto de sódio em água é dada por: NaCl(s) → Na+ + Cl- O que mostra que há o mesmo número de mols para todos os envolvidos no processo. Pela concentração, temos que: 1,4 mg —&#8212; 1 ml x —&#8212; 2000 mL x = 2800 mg = 2,8 g de Na Como, a equação é de 1 mol de NaCl para 1 mol de Na+, podemos dizer que: 58,5 g —&#8212;&#8212; 23 g y —&#8212;&#8212; 2,8 g y = (58,5 . 2,8) / 23 y = 7,12 g Como esta é a quantidade de NaCl em duas colheres, em uma colher temos aproximadamente 3,6 g.`,
 subject: ['qui'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 98,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Apesar de os animais representados no cladograma 
compartilharem um mesmo ancestral, eles se caracterizam 
por distintos padrões de reprodução ou de nutrição dos 
embriões e descendentes. 
DIXSON, A. F. Mammalian Sexuality : The Act of Mating and the 
Evolution of Reproduction. Disponível em: www.cambridge.org. 
Acesso em: 2 jul. 2024 (adaptado). 
Ao longo do processo evolutivo, percebem-se, entre 
esses animais, perdas e ganhos nos padrões citados que 
envolvem o(a)`,
 images: ['/enem/2024/images/enem_2024_d2_q98.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`aumento no número de descendentes por ninhada.`},
 { id: 'B', type: 'text', value:`mudança no tipo de fecundação de externa para interna.`},
 { id: 'C', type: 'text', value:`redução da versatilidade de reprodução, que se torna 
unicamente sexuada.`},
 { id: 'D', type: 'text', value:`desenvolvimento embrionário, que passa do meio 
aquático para o terrestre.`},
 { id: 'E', type: 'text', value:`diminuição da vesícula vitelínica, associada ao 
desenvolvimento da lactação.`},
 ],
 correct: 'E',
 explanation:`Ao longo da evolução dos mamíferos há a transição do hábito ovíparo para o vivíparo, concomitante a esse processo observa-se um aumento da placenta bem como a redução do saco vitelínico.`,
 subject: ['bio'],
 topics: ['Genética', 'Questões aleatórias'],
 },
 {
 id: 99,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma ambulância em alta velocidade com a sirene ligada
desloca-se em direção a um radar operado por uma pessoa.
O radar emite ondas de rádio com frequência f₀ que são
refletidas pela dianteira da ambulância, retornando para
o detector com frequência fᵣ. A percepção do operador do
radar, em relação ao som emitido pela sirene, é de que
este se altera à medida que a ambulância se aproxima
ou se afasta.
Durante a aproximação, como o operador percebe o som
da sirene e qual é a relação entre as frequências fᵣ e f₀
medidas pelo radar?`,
 alternatives: [
 { id: 'A', type: 'text', value:`Mais grave do que o som emitido e fᵣ < f₀.`},
 { id: 'B', type: 'text', value:`Mais agudo do que o som emitido e fᵣ < f₀.`},
 { id: 'C', type: 'text', value:`Mais agudo do que o som emitido e fᵣ = f₀.`},
 { id: 'D', type: 'text', value:`Mais agudo do que o som emitido e fᵣ > f₀.`},
 { id: 'E', type: 'text', value:`Mais grave do que o som emitido e fᵣ > f₀.`},
 ],
 correct: 'D',
 explanation:`O efeito Doppler é um fenômeno que se dá devido a movimentação da fonte em relação a um observador. No caso, a ambulância está se aproximando do radar, portanto temos um aumento da frequência percebida fr &gt; fo e um som mais agudo.`,
 subject: ['fis'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 100,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Mirascópio 3D: produtor de ilusão instantânea 
O equipamento ilustrado na figura, de dimensões 
apresentadas no esquema, é composto por dois espelhos 
côncavos E 1 e E 2 , apoiados um sobre o outro por suas 
bordas, de tal forma que o vértice de E 1 coincide com 
o foco de E 2 e vice-versa. Na abertura circular de 
E 2 , é formada uma imagem tridimensional de um objeto 
posicionado sobre o vértice de E 1 . Essa imagem é 
formada a partir dos raios procedentes do objeto, refletidos 
por E 2 e E 1 , respectivamente, conforme o esquema. 
Os observadores julgam visualizar o objeto quando estão, 
de fato, visualizando sua imagem. O efeito só é possível 
porque as superfícies de ambos os espelhos são de 
extrema qualidade. 
SALZMANN, W. Disponível em: https://wissenstexte.de. 
Acesso em: 27 jun. 2024 (adaptado). 
A natureza da imagem formada e a distância vertical entre 
cada ponto objeto e seu correspondente ponto imagem são`,
 images: ['/enem/2024/images/enem_2024_d2_q100.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`real e 5 cm.`},
 { id: 'B', type: 'text', value:`real e 3,8 cm.`},
 { id: 'C', type: 'text', value:`real e 7,6 cm.`},
 { id: 'D', type: 'text', value:`virtual e 7,6 cm.`},
 { id: 'E', type: 'text', value:`virtual e 3,8 cm.`},
 ],
 correct: 'C',
 explanation:`Percebemos na construção da imagem que ela é formada pelo cruzamento de raios refletidos (não pelo prolongamento) e isto caracteriza a imagem como real (na frente de seu espelho). A distância é medida pela própria figura. Nota-se que a distância entre o objeto e o ponto de encontro dos raios (logo acima dele) dista 3,8 + 3,8 = 7,6 cm.`,
 subject: ['fis'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 101,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A saúde do professor: acústica arquitetônica 
Dentre os parâmetros acústicos que afetam a 
inteligibilidade dos sons emitidos em ambientes fechados, 
destacam-se o ruído de fundo do ambiente e o decréscimo 
do nível sonoro com a distância da fonte emissora. Assim, 
sentar-se no fundo da sala de aula pode prejudicar a 
aprendizagem dos estudantes, por impedir que eles 
distingam, com precisão, os sons emitidos, diminuindo a 
inteligibilidade da fala de seus professores. Considere a 
situação exemplificada pelo infográfico: à distância de 
1 metro, o nível sonoro da fala de um professor é de 
60 dB e diminui com a distância. Considere, ainda, que o 
ruído de fundo nessa sala de aula pode chegar a 45 dB 
e que, para ser compreendida, o nível sonoro da fala do 
professor deve estar 5 dB acima desse ruído. 
Disponível em: www.ufrrj.br. Acesso em: 2 dez. 2021 (adaptado). 
Para um valor máximo do ruído de fundo, a maior distância 
que um estudante pode estar do professor para que ainda 
consiga compreender sua fala é mais próxima de`,
 images: ['/enem/2024/images/enem_2024_d2_q101.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`3,0 m.`},
 { id: 'B', type: 'text', value:`4,5 m.`},
 { id: 'C', type: 'text', value:`6,5 m.`},
 { id: 'D', type: 'text', value:`8,0 m.`},
 { id: 'E', type: 'text', value:`9,5 m.`},
 ],
 correct: 'A',
 explanation:`A questão se tratava de interpretação de gráficos e tabelas. De acordo com o enunciado, é necessário que o nível sonoro seja 50 dB. Isso se justifica por que o nível sonoro do som do professor precisa ser 5 dB maior que o ruido de 45 dB. 45 + 5 = 50 dB. Analisando o gráfico fornecido, precisamos de uma distância de até 3,0 m para garantir esse nível sonoro. Distâncias maiores que 3,0 m apresentam intensidade sonora inferior a 50 dB e dificulta o entendimento dos estudantes.`,
 subject: ['fis'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 102,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma agricultora, com a intenção de comercializar o 
milho recém-colhido, testou uma forma de preservar o 
sabor adocicado do seu produto. O melhor resultado foi 
obtido quando ela imergiu as espigas em água fervente 
durante alguns minutos e, em seguida, em água gelada. 
Com esse procedimento, parte da glicose do milho não foi 
transformada em amido, mantendo o seu sabor adocicado. 
Utilizando esse procedimento, o sabor foi conservado 
porque houve`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`desnaturação enzimática pela alta temperatura.`},
 { id: 'B', type: 'text', value:`conversão de nutrientes pela redução de temperatura.`},
 { id: 'C', type: 'text', value:`degradação das reservas nutritivas pelo choque térmico.`},
 { id: 'D', type: 'text', value:`impedimento da entrada de oxigênio pela fervura da água.`},
 { id: 'E', type: 'text', value:`desidratação dos grãos por causa da alteração da
temperatura.`},
 ],
 correct: 'A',
 explanation:`O mergulho da espiga de milho na água fervente promove a desnaturação das enzimas que convertem glicose em amido, mantendo-se assim seu sabor adocicado.`,
 subject: ['fis'],
 topics: ['Termologia', 'Questões aleatórias'],
 },
 {
 id: 103,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Aquecedores solares são equipamentos utilizados para 
o aquecimento de água pelo calor do Sol. São compostos 
por coletores solares, nos quais ocorre o aquecimento da 
água, e por um reservatório térmico, em que é armazenada 
a água quente para ser utilizada posteriormente. A figura 
ilustra esquematicamente como funciona esse equipamento. 
5 dicas de instalação de aquecedor solar . Disponível em: 
https://instaline.com.br. Acesso em: 3 nov. 2023 (adaptado). 
O processo pelo qual ocorre transferência de calor dos 
coletores solares para o reservatório térmico é a`,
 images: ['/enem/2024/images/enem_2024_d2_q103.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`difusão.`},
 { id: 'B', type: 'text', value:`absorção.`},
 { id: 'C', type: 'text', value:`condução.`},
 { id: 'D', type: 'text', value:`irradiação.`},
 { id: 'E', type: 'text', value:`convecção.`},
 ],
 correct: 'E',
 explanation:`A figura mostra a radiação chegando no coletor e as trocas de calor por convecção – diferença de densidade. Isso pode ser notado porque a comunicação entre o coletor solar e o reservatório de água apresenta movimentação de água quente e água fria. Transmissão de Calor feita por fluidos são casos de convecção.`,
 subject: ['bio'],
 topics: ['Genética', 'Questões aleatórias'],
 },
 {
 id: 104,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`As autoridades sanitárias brasileiras têm se preocupado 
muito nos últimos anos com o aumento da ocorrência 
de doenças transmitidas por mosquitos, principalmente 
arboviroses como chikungunya e zika, que se tornaram 
epidêmicas ou endêmicas em áreas urbanas. Parte de 
uma análise da relação entre a urbanização e a incidência 
dessas doenças está representada no fluxograma. 
ALMEIDA, L. S.; COTA, A. L. S.; RODRIGUES, D. F. Saneamento, 
arboviroses e determinantes ambientais: impactos na saúde urbana. 
Ciência & Saúde Coletiva , v. 25, n. 10, 2020 (adaptado). 
Nesse contexto, como a urbanização está causando 
riscos à saúde humana?`,
 images: ['/enem/2024/images/enem_2024_d2_q104.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`Disseminando verminoses.`},
 { id: 'B', type: 'text', value:`Causando a eutrofização de lagoas.`},
 { id: 'C', type: 'text', value:`Aumentando a chance de contato com coliformes.`},
 { id: 'D', type: 'text', value:`Diminuindo a população de predadores aquáticos.`},
 { id: 'E', type: 'text', value:`Aproximando as pessoas das áreas de ocorrência de 
mosquitos.`},
 ],
 correct: 'D',
 explanation:`A redução da biodiversidade aquática é a causa direta do aumento dos riscos à saúde, indicando que, dessa forma, a falta de inimigos naturais dos vetores das arboviroses (ex. predadores), promove o aumento dessas doenças.`,
 subject: ['bio'],
 topics: ['Histologia básica (tecidos – leitura de figura)', 'Questões aleatórias'],
 },
 {
 id: 105,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Impactos do microplástico 
A ação de fatores abióticos aliada à biodeterioração 
contribuem para a formação de microplásticos, os quais se 
aderem a outros poluentes orgânicos apolares persistentes, 
como os derivados de pesticidas lipossolúveis. Há uma 
proporcionalidade direta entre a solubilidade desses tipos de 
poluentes e sua concentração nos tecidos dos organismos 
expostos a eles. 
Disponível em: www.ecycle.com.br. 
Acesso em: 9 dez. 2021 (adaptado). 
Em animais vertebrados, essa associação de poluentes 
será preferencialmente acumulada no tecido`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`ósseo.`},
 { id: 'B', type: 'text', value:`nervoso.`},
 { id: 'C', type: 'text', value:`epitelial.`},
 { id: 'D', type: 'text', value:`adiposo.`},
 { id: 'E', type: 'text', value:`sanguíneo.`},
 ],
 correct: 'D',
 explanation:`O tecido adiposo tem a função de acúmulo de lipídios. Como os microplásticos associados a compostos orgânicos têm natureza apolar, eles devem se acumular no tecido em questão.`,
 subject: ['qui'],
 topics: ['Química Orgânica', 'Questões aleatórias'],
 },
 {
 id: 106,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Em aeroportos, por razões de segurança, os 
passageiros devem ter suas bagagens de mão examinadas 
antes do embarque, passando-as em esteiras para sua 
inspeção por aparelhos de raios X. Nessas inspeções, os 
passageiros são orientados a retirar seus computadores 
portáteis (notebooks ou laptops) de malas, mochilas ou 
bolsas para passá-los isoladamente pela esteira. 
Que explicação física justifica esse procedimento?`,
 alternatives: [
 { id: 'A', type: 'text', value:`Os raios X não interagem com os componentes 
metálicos do computador, o que impede a formação 
de imagens.`},
 { id: 'B', type: 'text', value:`Os raios X desmagnetizam o disco rígido do 
computador, quando refratados pelos componentes 
metálicos das bagagens de mão.`},
 { id: 'C', type: 'text', value:`Os raios X aquecem os materiais metálicos encontrados 
em bagagens de mão, quando refletidos pelos 
componentes do computador.`},
 { id: 'D', type: 'text', value:`Os raios X não atravessam os componentes densos do 
computador, o que impede a visualização de objetos 
que estão à frente ou atrás deles.`},
 { id: 'E', type: 'text', value:`Os raios X ionizam os materiais metálicos normalmente
encontrados em bagagens de mão, quando difratados
pelos componentes do computador.`},
 ],
 correct: 'D',
 explanation:`O raio X é uma radiação de pequeno comprimento de onda, portanto consegue penetrar em materiais que não tenham densidade suficiente para que a radiação seja barrada. As paredes de chumbo ou materiais mais densos são capazes de não serem penetradas pelo raio-X. Isso contribui para notebooks e laptops funcionarem como barreiras para objetos. Por motivos de segurança, os aeroportos optam por retirar esses objetos para garantir total visualização das malas.`,
 subject: ['qui'],
 topics: ['Química Orgânica', 'Questões aleatórias'],
 },
 {
 id: 107,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Com base em testes realizados em ratos, concluiu-se 
que os compostos nitrosos são substâncias mutagênicas, 
ou seja, produzem mutações nas células e possivelmente 
câncer. Esses compostos podem ser obtidos pela reação 
entre o nitrito de sódio, que é um conservante adicionado 
às carnes, e o ácido clorídrico. O ácido nitroso produzido 
irá reagir com compostos nitrogenados, como as aminas, 
dando origem aos compostos nitrosos. 
Em qual órgão esse processo será iniciado?`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`Rim.`},
 { id: 'B', type: 'text', value:`Fígado.`},
 { id: 'C', type: 'text', value:`Intestino.`},
 { id: 'D', type: 'text', value:`Pâncreas.`},
 { id: 'E', type: 'text', value:`Estômago.`},
 ],
 correct: 'E',
 explanation:`A questão pergunta em qual órgão o processo de formação de compostos nitrosos, que são substâncias mutagênicas, será iniciado. Esses compostos podem se formar pela reação entre nitrito de sódio e ácido clorídrico, que é um ácido presente no sistema digestivo.`,
 subject: ['bio'],
 topics: ['Genética', 'Questões aleatórias'],
 },
 {
 id: 108,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Sistemas agroflorestais (SAFs) 
Os sistemas agroflorestais alinham os interesses 
econômicos aos ecológicos. Esses sistemas podem ser 
usados na recuperação ambiental de áreas degradadas que 
se tornaram pouco produtivas, como as utilizadas por muito 
tempo para pastagem. Para isso, num primeiro momento, 
as árvores nativas são plantadas em conjunto com culturas 
agrícolas anuais, como feijão, mandioca, milho e abóbora, 
que geram renda para os proprietários da terra e incentivam 
a manutenção do sistema. Em um segundo momento, são 
introduzidas outras espécies, como trepadeiras e arbustos, de 
acordo com um arranjo espacial e temporal preestabelecido. 
Nesse processo, ocorrerão mudanças graduais na estrutura 
e composição das comunidades vegetais ao longo do tempo, 
que culminarão no aumento da diversidade do ambiente. 
Disponível em: www.embrapa.br. Acesso em: 9 dez. 2021 (adaptado). 
O conjunto dessas mudanças graduais é análogo ao 
processo natural denominado`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`rotação de culturas.`},
 { id: 'B', type: 'text', value:`sucessão ecológica.`},
 { id: 'C', type: 'text', value:`coevolução específica.`},
 { id: 'D', type: 'text', value:`adaptação por seleção.`},
 { id: 'E', type: 'text', value:`convergência adaptativa.`},
 ],
 correct: 'B',
 explanation:`A formação de uma agrofloresta corresponde a alteração temporal de uma comunidade, processo denominado sucessão ecológica.`,
 subject: ['bio'],
 topics: ['Geometria espacial', 'Questões aleatórias'],
 },
 {
 id: 109,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`As fibras musculares esqueléticas não são todas 
iguais. As fibras lentas, também conhecidas como fibras 
vermelhas, apresentam muitas mitocôndrias e são bem 
supridas por vasos sanguíneos. Já as fibras rápidas, ou 
fibras brancas, apresentam poucas mitocôndrias e recebem 
menor suprimento sanguíneo. Dessa forma, a distribuição 
das fibras nos músculos esqueléticos do corpo auxilia de 
forma diferenciada no desempenho físico de um atleta. 
SADAVA, D. et al. Vida: a ciência da biologia - volume III: 
plantas e animais. Porto Alegre: Artmed, 2009 (adaptado). 
Um atleta que sonha em disputar os Jogos Olímpicos e 
tem uma maior proporção de fibras brancas que fibras 
vermelhas teria mais vantagens na realização da prova de:`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`Triatlo.`},
 { id: 'B', type: 'text', value:`Salto em altura.`},
 { id: 'C', type: 'text', value:`Marcha atlética.`},
 { id: 'D', type: 'text', value:`Maratona aquática.`},
 { id: 'E', type: 'text', value:`Ciclismo em estrada.`},
 ],
 correct: 'B',
 explanation:`Fibras claras possuem poucas mitocôndrias e atividade predominantemente anaeróbica (fermentativa), isso favorece a obtenção rápida de energia para práticas de atividades físicas de explosão – como o salto em altura.`,
 subject: ['bio'],
 topics: ['Geopolítica', 'Questões aleatórias'],
 },
 {
 id: 110,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O Cerrado e a Amazônia abrigam grande número de 
serpentes popularmente conhecidas como cobras-corais. 
Na Amazônia predominam as corais-verdadeiras, que 
são peçonhentas, enquanto no Cerrado prevalecem as 
falsas-corais, que não possuem peçonha. Essas espécies 
apresentam um padrão de coloração muito semelhante. 
Essa similaridade traz uma vantagem tanto para as corais 
falsas como para as verdadeiras. 
FRANÇA, F. G. R. [...] serpentes corais em ambientes 
campestres, savânicos e florestais da América do Sul . 
Brasília: UnB, 2008 (adaptado). 
Nas fotografias, são apresentados exemplos dessas 
serpentes: uma coral-verdadeira e uma falsa-coral. 
SILVA, L. C.; COTTA, G. A.; RESENDE, F. C. Cobra-coral: aplicativo 
educativo para reconhecimento das cobras-corais do estado de 
Minas Gerais, Brasil. Herpetologia Brasileira , 
n. 1, 2021 (adaptado). 
Qual é a vantagem dessa similaridade para as falsas-corais?`,
 images: ['/enem/2024/images/enem_2024_d2_q110.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`Facilita a captura de presas.`},
 { id: 'B', type: 'text', value:`Diminui a competição por recursos.`},
 { id: 'C', type: 'text', value:`Possibilita a geração de indivíduos híbridos.`},
 { id: 'D', type: 'text', value:`Reduz a possibilidade de sofrerem predação.`},
 { id: 'E', type: 'text', value:`Otimiza o encontro de parceiros reprodutivos.`},
 ],
 correct: 'D',
 explanation:`O mimetismo da cobra falsa-coral faz com que os predadores evitem atacá-la devido a sua semelhança com a cobra coral verdadeira.`,
 subject: ['bio'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 111,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O exoesqueleto dos crustáceos é formado por quitina 
e impregnações de sais calcários e, por isso, é mais 
duro quando comparado com o exoesqueleto de outros 
artrópodes. Esse revestimento externo confere proteção, 
mas, por ser duro, limita o crescimento desses animais. 
Para superar essa limitação, o exoesqueleto deve ser`,
 alternatives: [
 { id: 'A', type: 'text', value:`formado somente na fase adulta do animal.`},
 { id: 'B', type: 'text', value:`fragmentado para expansão nas áreas de articulação.`},
 { id: 'C', type: 'text', value:`modelado continuamente para ajuste ao tamanho do corpo.`},
 { id: 'D', type: 'text', value:`substituído por meio de mudas que ocorrem periodicamente.`},
 { id: 'E', type: 'text', value:`impregnado por pequena quantidade de sais para sua
distensão.`},
 ],
 correct: 'D',
 explanation:`A presença de exoesqueleto rígido limita o crescimento do animal, dessa forma para que este ocorra, são necessárias trocas periódicas do exoesqueleto através do fenômeno das mudas ou ecdises.`,
 subject: ['bio'],
 topics: ['Genética', 'Questões aleatórias'],
 },
 {
 id: 112,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um dos exemplos mais conhecidos de herança 
recessiva ligada ao cromossomo X é o daltonismo. 
Como em qualquer distúrbio recessivo ligado ao 
cromossomo X, existem muito mais homens apresentando 
o fenótipo com esse tipo de daltonismo do que mulheres. 
Um casal formado por um homem não daltônico e por uma 
mulher gestante também não daltônica, mas portadora 
do gene recessivo para esse tipo de daltonismo, está 
esperando um bebê. Em uma das consultas de pré-natal, 
o casal recebeu um heredograma que contém todas as 
possibilidades de genótipo para esse bebê. 
Considere a legenda: 
Mulher heterozigota portadora 
do gene para daltonismo 
Mulher não daltônica 
Mulher daltônica 
Homem não daltônico 
Homem daltônico 
GRIFFITHS, A. et al. Introdução à genética . Rio de Janeiro: 
Guanabara Koogan, 2016 (adaptado). 
Qual heredograma foi recebido pelo casal?`,
 images: ['/enem/2024/images/enem_2024_d2_q112.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value: `A` },
 { id: 'B', type: 'text', value: `B` },
 { id: 'C', type: 'text', value: `C` },
 { id: 'D', type: 'text', value: `D` },
 { id: 'E', type: 'text', value: `E` },
 ],
 correct: 'B',
 explanation:`Sendo a mulher heterozigota para o daltonismo seu genótipo é XDXd e seu marido sendo normal é XDY, logo as combinações possíveis de seus filhos serão: XDXd x XDY XDXD , XDXd, XDY , XdY`,
 subject: ['bio'],
 topics: ['Ecologia', 'Questões aleatórias'],
 },
 {
 id: 113,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Metabolismo de procariontes 
O esquema representa a ação de organismos no 
ciclo do nitrogênio e no ciclo do carbono. Os números 
correspondem a algumas etapas dos dois ciclos distintos. 
Disponível em: https://pt.khanacademy.org. 
Acesso em: 27 jun. 2024 (adaptado). 
Em qual etapa numerada ocorre uma transformação redox 
como a que ocorre nos procariontes nitrificantes?`,
 images: ['/enem/2024/images/enem_2024_d2_q113.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`1`},
 { id: 'B', type: 'text', value:`2`},
 { id: 'C', type: 'text', value:`3`},
 { id: 'D', type: 'text', value:`4`},
 { id: 'E', type: 'text', value:`5`},
 ],
 correct: 'E',
 explanation:`Os procariontes nitrificantes convertem amônia (NH₃) em nitritos (NO₂⁻) e, posteriormente, em nitratos (NO₃⁻). Na amônia, o número de oxidação do nitrogênio é -3 enquanto no nitrito é +3 e no nitrato é +5. Sendo assim, nesta etapa, ocorre oxidação, percebida pelo aumento no NOx. Desejamos localizar outra etapa na qual ocorre aumento do NOx, sendo ela, a etapa cinco, na qual o Carbono fixado (C, NOx = 0) se converte em CO₂ (NOx do carbono +4).`,
 subject: ['qui'],
 topics: ['Química Orgânica', 'Questões aleatórias'],
 },
 {
 id: 114,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um dos agentes que mais contribui para a poluição 
do ar é o automóvel a combustão interna. Em áreas 
urbanas, isso é demonstrado dramaticamente pela 
fumaça fotoquímica, resultante da interação entre óxidos 
de nitrogênio, hidrocarbonetos e luz solar, para formar 
produtos de oxidação, que causam irritação aos olhos, ao 
aparelho respiratório e danos às plantas. As condições de 
operação de motores a combustão, como a razão da mistura 
ar/combustível no cilindro, influenciam na composição 
dos gases lançados pelo escapamento na atmosfera. 
O gráfico ilustra a variação nas composições dos principais 
gases, dióxido de carbono (CO 2 ), hidrocarbonetos (HC), 
monóxido de carbono (CO), monóxido de nitrogênio (NO) e 
oxigênio molecular (O 2 ), emitidos por um motor a gasolina, 
em diferentes razões ar/combustível, em massa. 
RANGEL, M. C.; CARVALHO, M. F. A. Impacto dos catalisadores automotivos 
 no controle da qualidade do ar. Química Nova , v. 26, 2003 (adaptado). 
Na condição de razão ar/combustível igual a 18, haverá 
uma emissão`,
 images: ['/enem/2024/images/enem_2024_d2_q114.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`baixa de O 2 e alta de NO.`},
 { id: 'B', type: 'text', value:`baixa de NO e alta de HC.`},
 { id: 'C', type: 'text', value:`baixa de CO e alta de CO 2 .`},
 { id: 'D', type: 'text', value:`baixa de HC e alta de CO.`},
 { id: 'E', type: 'text', value:`baixa de CO 2 e alta de HC.`},
 ],
 correct: 'C',
 explanation:`A questão pede para analisar o gráfico e determinar quais serão as emissões para uma razão ar/combustível igual a 18. Para uma razão ar/combustível de 18, observamos no gráfico que: A emissão de monóxido de carbono (CO) é baixa. A emissão de gás carbônico (CO2) é alta.`,
 subject: ['bio'],
 topics: ['Genética', 'Questões aleatórias'],
 },
 {
 id: 115,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O esquema representa um experimento feito com 
células do protozoário Amoeba proteus . Nele, um grupo 
de células foi tratado com a droga citocalasina B, enquanto 
outro grupo não foi tratado, servindo como controle. 
O formato e o movimento das células tratadas foram 
comprometidos. 
SADAVA, D. et al. Vida: a ciência da biologia - volume I: célula e 
hereditariedade. Porto Alegre: Artmed, 2009 (adaptado). 
Qual componente celular foi afetado pela droga utilizada 
no experimento?`,
 images: ['/enem/2024/images/enem_2024_d2_q115_1.jpg', '/enem/2024/images/enem_2024_d2_q115_2.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`Vacúolos.`},
 { id: 'B', type: 'text', value:`Mitocôndrias.`},
 { id: 'C', type: 'text', value:`Microfilamentos.`},
 { id: 'D', type: 'text', value:`Material genético.`},
 { id: 'E', type: 'text', value:`Membrana plasmática.`},
 ],
 correct: 'C',
 explanation:`Os microfilamentos se localizam na periferia do citosol garantindo a sustentação da membrana bem como a formação de pseudópodes. O Grupo B não teve a formação dos pseudópodes devido a ação inibitória da droga sobre essa função.`,
 subject: ['qui'],
 topics: ['Química Geral', 'Questões aleatórias'],
 },
 {
 id: 116,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O magnésio metálico utilizado em ligas leves é 
produzido em um processo que envolve várias etapas e 
utiliza água do mar como matéria-prima. A primeira etapa 
desse processo consiste na reação entre o íon Mg²⁺ e
hidróxido de cálcio, Ca(OH)₂ , obtendo uma mistura que 
contém hidróxido de magnésio, pouco solúvel, e íons Ca²⁺ , 
de acordo com a equação química: 
Mg²⁺ (aq) + Ca(OH)₂ (aq) → Mg(OH)₂ (s) + Ca²⁺ (aq) 
O método adequado para separar o Mg(OH)₂ dessa 
mistura é a`,
 alternatives: [
 { id: 'A', type: 'text', value:`filtração.`},
 { id: 'B', type: 'text', value:`catação.`},
 { id: 'C', type: 'text', value:`destilação.`},
 { id: 'D', type: 'text', value:`dissolução.`},
 { id: 'E', type: 'text', value:`evaporação.`},
 ],
 correct: 'A',
 explanation:`A questão descreve um processo onde o hidróxido de magnésio (Mg(OH)₂) é formado como um sólido em uma mistura aquosa. Para separar o Mg(OH)₂, que é pouco solúvel e precipita, o método mais adequado é a filtração, pois permite separar o sólido do líquido.`,
 subject: ['qui'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 117,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Moradores do Brooklin, bairro de São Paulo, perdem o 
sono com um som alto, constante e estridente. O barulho é 
causado por anfíbios anuros trazidos do Caribe, da espécie 
Eleutherodactylus jahnstonei , que têm tamanho um pouco 
maior que o de um grão de feijão e que encontraram na 
capital um ambiente favorável. Cientistas foram até o local 
e encontraram esses animais nos jardins das casas. 
Pererecas-assobiadoras tiram o sono de moradores do 
Brooklin . Disponível em: http://g1.globo.com. 
Acesso em: 26 mar. 2015 (adaptado). 
Ao emitirem o som estridente, esses anfíbios`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`indicam que estão fora de seu hábitat natural.`},
 { id: 'B', type: 'text', value:`alertam para a presença de poluição urbana.`},
 { id: 'C', type: 'text', value:`sinalizam a existência de superpopulação.`},
 { id: 'D', type: 'text', value:`direcionam insetos para sua alimentação.`},
 { id: 'E', type: 'text', value:`atraem fêmeas para o acasalamento.`},
 ],
 correct: 'E',
 explanation:`A vocalização nos anuros é um comportamento de atração de parceiros sexuais.`,
 subject: ['qui'],
 topics: ['Química Geral', 'Questões aleatórias'],
 },
 {
 id: 118,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A hidroxiapatita, Ca₅(PO₄)₃OH, é um mineral
constituinte do esmalte dos dentes. Entre as diversas
reações que ocorrem no meio bucal, encontram-se em
equilíbrio as reações de desmineralização e mineralização
da hidroxiapatita em meio aquoso, ilustradas a seguir.
A desmineralização está associada à fragilização do esmalte
do dente e à formação de cáries.
5 Ca²⁺ (aq) + 3 PO₄³⁻ (aq) + H₂O (l) ⇌ Ca₅(PO₄)₃OH (s) + H⁺ (aq)
Desmineralizacao
Mineralizacao
O uso de creme dental pode minimizar a perda da
hidroxiapatita. O quadro apresenta o agente de polimento 
e o pH de alguns cremes dentais comerciais. 
 
STORGATTO, G. A.; BRAIBANTE, M. E. F.; BRAIBANTE, H. T. S. 
A química na odontologia. Química Nova na Escola , 
v. 39, fev. 2017 (adaptado). 
Considerando o equilíbrio químico envolvido, qual creme dental 
promove a maior desmineralização do esmalte do dente?`,
 images: ['/enem/2024/images/enem_2024_d2_q118_1.jpg', '/enem/2024/images/enem_2024_d2_q118_2.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`I`},
 { id: 'B', type: 'text', value:`II`},
 { id: 'C', type: 'text', value:`III`},
 { id: 'D', type: 'text', value:`IV`},
 { id: 'E', type: 'text', value:`V`},
 ],
 correct: 'D',
 explanation:`Para minimizar a desmineralização do esmalte dental, é importante manter um pH mais alto no meio bucal, pois um pH mais baixo indica uma maior concentração de cátion H+. O que resulta em um deslocamento da reação no sentido direto. Analisando os cremes dentais apresentados: O creme dental IV (Dióxido de silício) possui o pH mais baixo, de 6,9. Esse pH baixo ajuda a desmineralizar o esmalte do dente.`,
 subject: ['fis'],
 topics: ['Eletrodinâmica', 'Questões aleatórias'],
 },
 {
 id: 119,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Para os circuitos de maratonas aquáticas realizadas em 
mares calmos e próximos à praia, é montado um sistema 
de boias que determinam o trajeto a ser seguido pelos 
nadadores. Uma das dificuldades desse tipo de circuito 
é compensar os efeitos da corrente marinha. O diagrama 
contém o circuito em que deve ser realizada uma volta no 
sentido anti-horário. As quatro boias estão numeradas de 
1 a 4. Existe uma corrente marinha de velocidade υ c 
→ , cujo 
módulo é 30 metros por minuto, paralela à praia em toda 
a área do circuito. Nas arestas mais longas, o nadador 
precisará nadar na direção apontada pelos vetores υ n 
→ dos 
pontos 1 até 2 e de 3 até 4. Considere que a velocidade 
do nadador é de 50 metros por minuto, em relação à água, 
durante todo o circuito. 
Nessa situação, em quantos minutos o nadador completará 
a prova?`,
 images: ['/enem/2024/images/enem_2024_d2_q119.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`42`},
 { id: 'B', type: 'text', value:`65`},
 { id: 'C', type: 'text', value:`72`},
 { id: 'D', type: 'text', value:`105`},
 { id: 'E', type: 'text', value:`120`},
 ],
 correct: 'B',
 explanation:`Segundo o texto, a velocidade do nadador em relação à água é de 50m/min. Na parte 1-2, esta é a velocidade resultante, o que significa dizer que uma componente deste vetor está pra cima anulando a corrente pra baixo – e por isso ele precisa valer 30m/min – e o outro na direção do movimento com intensidade de 40m/min Com isso, o tempo de travessia dos 800m entre 1 e 2 vai ser: Na etapa 2-3 temos o nadador nadando contra a correnteza, portanto a velocidade em relação ao fundo será Com isso, vamos calcular o tempo Na etapa 3-4, temos a mesma situação que a etapa 1-2, mas no sentido oposto Na etapa 4-1, temos a correnteza a favor do nadador, portanto a Com isso, vamos calcular o último tempo. Somando todos os tempos das etapas, o tempo total será de 65 minutos.`,
 subject: ['bio'],
 topics: ['Saúde pública & parasitologia (doenças, vetores, prevenção)', 'Questões aleatórias'],
 },
 {
 id: 120,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O vírus linfotrópico de células T humanas tipo 1 
(HTLV-1) é um retrovírus do mesmo grupo do vírus da 
imunodeficiência humana (HIV). Ambos são transmitidos 
da mesma forma e infectam as mesmas células de defesa 
do organismo, os linfócitos T. A diferença entre eles é que o 
HTLV-1 estimula o aumento da produção desses linfócitos, 
enquanto o HIV causa destruição dessas células. 
ROMANELLI, L. C. F.; CARAMELLI, P.; PROIETTI, A. B. F. C. O vírus 
linfotrópico de células T humanas tipo 1 (HTLV-1): quando 
suspeitar da infecção? Revista da Associação 
Médica Brasileira , v. 56, 2010 (adaptado). 
Uma possível consequência da infecção por HTLV-1 é o 
desenvolvimento de`,
 alternatives: [
 { id: 'A', type: 'text', value:`aids.`},
 { id: 'B', type: 'text', value:`câncer.`},
 { id: 'C', type: 'text', value:`diabetes.`},
 { id: 'D', type: 'text', value:`hepatite B.`},
 { id: 'E', type: 'text', value:`hemorragia.`},
 ],
 correct: 'B',
 explanation:`A multiplicação excessiva dos linfócitos T causada pelo HTLV-1 pode causar câncer.`,
 subject: ['fis'],
 topics: ['Cinemática', 'Questões aleatórias'],
 },
 {
 id: 121,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Na tirinha, Calvin se divertia em um balanço antes de 
soltar-se dele e cair ao chão. Em sua fala, ele demonstra ter 
imaginado que permaneceria em movimento circular. Porém, 
a força gravitacional, que permanece atuando no garoto, 
modifica a direção de sua velocidade, fazendo com que ele 
chegue ao chão da maneira ilustrada no último quadrinho. 
WATTERSON, B. Disponível em: https://tiras-do-calvin.tumblr.com. 
Acesso em: 19 nov. 2021 (adaptado). 
Qual vetor representa a força resultante exercida pelo chão 
sobre Calvin no exato momento em que ele toca o chão?`,
 images: ['/enem/2024/images/enem_2024_d2_q121.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value: `A` },
 { id: 'B', type: 'text', value: `B` },
 { id: 'C', type: 'text', value: `C` },
 { id: 'D', type: 'text', value: `D` },
 { id: 'E', type: 'text', value: `E` },
 ],
 correct: 'A',
 explanation:`Quando o Calvin é lançado do balanço, ele sai em um movimento parabólico e chega ao solo com uma componente horizontal e outra vertical. Com isso, a força que o Calvin deve sofrer do solo deve ser a resultante entre a Normal (pra cima) e a fat (contrária ao movimento – para direita)`,
 subject: ['fis'],
 topics: ['Indústria e comércio', 'Questões aleatórias'],
 },
 {
 id: 122,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A tirinha ilustra esquimós dentro de um iglu, habitação 
de formato hemisférico construída durante o inverno a partir de 
neve ou blocos de gelo. Essa estrutura de construção se justifica 
pelo fato de esse povo habitar as regiões mais setentrionais 
da Groenlândia, Canadá e Alasca. 
LAERTE. Disponível em: https://artedafisicapibid.blogspot.com. 
Acesso em: 4 dez. 2021 (adaptado). 
Na tirinha, a geladeira é necessária para fazer gelo porque`,
 images: ['/enem/2024/images/enem_2024_d2_q122.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`a temperatura interna do iglu é maior que a de 
solidificação da água.`},
 { id: 'B', type: 'text', value:`a umidade dentro do iglu dificulta o processo de 
mudança de fase da água.`},
 { id: 'C', type: 'text', value:`o ar dentro do iglu é isolante térmico, dificultando a 
perda de calor pela água.`},
 { id: 'D', type: 'text', value:`a temperatura uniforme no interior do iglu impede as 
correntes de convecção.`},
 { id: 'E', type: 'text', value:`a pressão do ar no interior do iglu é baixa, dificultando
a solidificação da água.`},
 ],
 correct: 'A',
 explanation:`O ambiente dentro do iglu, por conta das paredes grossas de gelo, promove um isolamento entre o ambiente interno e o externo ao iglu. Isolantes térmicos são corpos que apresentam dificuldade de transferência de calor, seja para “ganho” ou para “perda”. Por isso, a geladeira é necessária para fazer a água no estado sólido perder calor para transformar-se em gelo.`,
 subject: ['bio'],
 topics: ['Agricultura e pecuária', 'Questões aleatórias'],
 },
 {
 id: 123,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Os pesticidas naturais vêm sendo utilizados no controle 
de pragas e doenças agrícolas como substituintes de 
pesticidas sintéticos tradicionais, por serem menos nocivos 
ao ambiente, biodegradáveis e minimizarem custos e riscos 
relativos à lavoura. Por exemplo, os compostos 1 e 2 estão 
envolvidos nas respostas de defesa das plantas. Os grupos 
funcionais presentes nesses compostos são importantes 
para suas propriedades no controle de pragas. 
PINTO-ZEVALLOS, D. M.; ZARBIN, P. H. G. A química na agricultura: 
perspectivas para o desenvolvimento de tecnologias sustentáveis. 
Química Nova , n. 10, 2013 (adaptado). 
Qual é a função orgânica correspondente ao grupo funcional 
comum presente nesses dois compostos?`,
 images: ['/enem/2024/images/enem_2024_d2_q123.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`Ácido carboxílico.`},
 { id: 'B', type: 'text', value:`Cetona.`},
 { id: 'C', type: 'text', value:`Alceno.`},
 { id: 'D', type: 'text', value:`Álcool.`},
 { id: 'E', type: 'text', value:`Fenol.`},
 ],
 correct: 'A',
 explanation:`Analisando as estruturas dos compostos 1 e 2, ambos apresentam um grupo carboxila (-COOH) o que caracteriza a função ácido carboxílico.`,
 subject: ['bio'],
 topics: ['Zoologia', 'Questões aleatórias'],
 },
 {
 id: 124,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Utilizando-se um mesmo meio nutritivo, três gêneros 
bacterianos diferentes foram submetidos ao cultivo em 
tubos de ensaio. Após certo período de crescimento da 
cultura bacteriana em condições físico-químicas ideais, 
observou-se que o padrão de distribuição das células 
(representadas por pontos na figura) ao longo dos tubos 
era diferente em cada um dos casos. 
Em relação ao metabolismo energético, os microrganismos 
presentes nos tubos 1, 2 e 3 são classificados, 
respectivamente, como`,
 images: ['/enem/2024/images/enem_2024_d2_q124.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`anaeróbio facultativo, anaeróbio estrito e aeróbio estrito.`},
 { id: 'B', type: 'text', value:`anaeróbio facultativo, aeróbio estrito e anaeróbio estrito.`},
 { id: 'C', type: 'text', value:`aeróbio estrito, anaeróbio estrito e anaeróbio facultativo.`},
 { id: 'D', type: 'text', value:`anaeróbio estrito, aeróbio estrito e anaeróbio facultativo.`},
 { id: 'E', type: 'text', value:`aeróbio estrito, anaeróbio facultativo e anaeróbio estrito.`},
 ],
 correct: 'C',
 explanation:`Os microrganismos do tubo A localizam-se na superfície do tubo, local mais oxigenado, indicando seu metabolismo dependente do gás oxigênio (aeróbico estrito). Os microrganismos do tubo B localizam-se somente no fundo do tubo, local menos oxigenado, indicando seu metabolismo anaeróbio estrito – morre em contato com o gás oxigênio. Os microrganismos do tubo C localizam-se no tubo inteiro, mas preferencialmente na superfície do tubo, indicando seu metabolismo anaeróbico facultativo – tanto aeróbico quanto anaeróbico.`,
 subject: ['bio'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 125,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`As placas que indicam saída de emergência brilham no 
escuro, pois apresentam substâncias que fosforecem na 
cor amarelo-esverdeada após exposição à luz ambiente, 
conforme a figura. 
Esse fenômeno ocorre pela presença do sulfeto de 
zinco (ZnS), dopado com prata ou cobre, na superfície 
da placa. 
Zinc Sulphide Phosphorescence . Disponível em: 
https://physicsopenlab.org. Acesso em: 8 nov. 2023 (adaptado). 
O aparecimento do brilho nessas condições ocorre como 
consequência de`,
 images: ['/enem/2024/images/enem_2024_d2_q125.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`colisões interatômicas.`},
 { id: 'B', type: 'text', value:`coloração dos átomos.`},
 { id: 'C', type: 'text', value:`transições eletrônicas.`},
 { id: 'D', type: 'text', value:`reações nucleares.`},
 { id: 'E', type: 'text', value:`reflexão da luz.`},
 ],
 correct: 'C',
 explanation:`O fenômeno descrito na questão, em que placas indicativas brilham no escuro após exposição à luz, ocorre devido à fosforescência do sulfeto de zinco (ZnS) dopado com prata ou cobre. Esse processo é caracterizado pela liberação gradual de energia absorvida anteriormente, que ocorre após a excitação dos átomos pela luz ambiente. Esse brilho é uma consequência da excitação dos átomos no material, que retêm energia e liberam-na lentamente como luz visível.`,
 subject: ['bio'],
 topics: ['Citologia', 'Questões aleatórias'],
 },
 {
 id: 126,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Indústrias farmacêuticas e instituições científicas têm 
trabalhado no desenvolvimento de diferentes vacinas 
contra a covid-19. Em algumas dessas vacinas, a principal 
estrutura antigênica é uma proteína de superfície viral 
chamada espícula ( spike , em inglês). Essa proteína só 
existe em coronavírus, incluindo o SARS-CoV-2. Ela se 
liga a receptores de membrana específicos das células 
humanas por um mecanismo do tipo “chave-fechadura”. 
Dessa forma, os vírus entram nas células, podendo se 
multiplicar e acarretar a doença. 
O que são vacinas? Disponível em: www.cienciaviva.pt. 
Acesso em: 30 nov. 2021 (adaptado). 
Nessas vacinas, essa proteína viral induz a`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`produção de anticorpos específicos contra os vírus.`},
 { id: 'B', type: 'text', value:`imunidade passiva contra o desenvolvimento da doença.`},
 { id: 'C', type: 'text', value:`alteração genômica para formação da memória 
imunológica.`},
 { id: 'D', type: 'text', value:`neutralização direta dos vírus presentes na circulação 
sanguínea.`},
 { id: 'E', type: 'text', value:`modificação dos receptores de membrana específicos
para o vírus.`},
 ],
 correct: 'A',
 explanation:`Vacinas são formadas por antígenos que estimulam a produção de anticorpos específicos contra o vírus.`,
 subject: ['bio'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 127,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Em um experimento de laboratório, duas barras 
metálicas,`,
 images: ['/enem/2024/images/enem_2024_d2_q127.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value: `A` },
 { id: 'B', type: 'text', value: `B` },
 { id: 'C', type: 'text', value: `C` },
 { id: 'D', type: 'text', value: `D` },
 { id: 'E', type: 'text', value: `E` },
 ],
 correct: 'E',
 explanation:`​​A questão traz uma distribuição das linhas de campo elétrico formada por um par de placas planas e paralelas que formam um campo elétrico uniforme. Em seguida é introduzido no interior das placas um condutor e as linhas são novamente formadas. No interior de um condutor em equilíbrio sabemos que o campo elétrico resultante é nulo, portanto não teremos linhas de campo no interior do condutor`,
 subject: ['bio'],
 topics: ['Genética', 'Questões aleatórias'],
 },
 {
 id: 128,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Placas solares comuns dependem de dias ensolarados 
para gerar energia. Mas podemos gerar eletricidade com 
a ajuda de gotas de chuva, revestindo placas solares 
com uma fina camada de grafeno. Os íons dissociados a 
partir da água da chuva (A m + e B n − ) tornam a combinação 
grafeno e água da chuva um par perfeito para geração 
de energia. O processo requer apenas uma camada de 
grafeno para que grande quantidade de elétrons (e⁻)
se movimente ao longo da superfície. 
TANG, Q. et al. A Solar Cell that is Triggered by Sun and Rain. 
Angewandte Chemie International Edition , n. 55, 2016 (adaptado). 
Ao produzir eletricidade em dias chuvosos, o grafeno`,
 images: ['/enem/2024/images/enem_2024_d2_q128.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`oxida os cátions dissolvidos na água da chuva.`},
 { id: 'B', type: 'text', value:`impede a difusão da água através das placas solares.`},
 { id: 'C', type: 'text', value:`diminui a energia de ativação da reação no pseudocapacitor.`},
 { id: 'D', type: 'text', value:`forma um compósito não metálico com os íons na água 
da chuva.`},
 { id: 'E', type: 'text', value:`gera uma diferença de potencial pela interação dos 
elétrons com os cátions.`},
 ],
 correct: 'E',
 explanation:`A questão descreve uma tecnologia em que placas solares revestidas com grafeno podem gerar eletricidade não apenas a partir da luz solar, mas também da interação com gotas de chuva. O grafeno permite essa geração de energia devido à criação de uma diferença de potencial elétrico entre os íons presentes na água da chuva e o grafeno. Essa diferença de potencial é causada pela interação entre os íons presentes na água da chuva e a camada de grafeno, permitindo a geração de eletricidade.`,
 subject: ['fis'],
 topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
 },
 {
 id: 129,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um estudante comprou uma cafeteira elétrica de 700 W 
de potência e com capacidade de 0,5 L de água (500 g). 
Enquanto o café estava em preparação na capacidade 
máxima da cafeteira, ele marcou que demorou 3 minutos 
para a cafeteira ferver toda a água (100 ° C) a partir da 
temperatura ambiente de 20 ° C. Em seguida, para avaliar a 
eficiência da cafeteira, ele calculou esse tempo desprezando 
quaisquer perdas energéticas. É necessária 1 cal (4,2 J) 
para elevar em 1 ° C a temperatura de 1 grama de água. 
Qual a eficiência energética calculada pelo estudante?`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`100%`},
 { id: 'B', type: 'text', value:`75%`},
 { id: 'C', type: 'text', value:`60%`},
 { id: 'D', type: 'text', value:`7,5%`},
 { id: 'E', type: 'text', value:`5,1%`},
 ],
 correct: 'A',
 annulled: true,
 explanation:`Vamos calcular a potência útil da cafeteira baseada no procedimento que ela executa. Como a potência da cafeteira é de 700 W, temos que a razão entre as duas é OBS: Nesta questão, sabemos que a o rendimento é sempre calculado pela potência útil sobre a total. No caso da questão, a potência útil (calculada) é maior que a total (700W), portanto era para o rendimento calculado ser maior do que 1.`,
 subject: ['bio'],
 topics: ['Ecologia', 'Questões aleatórias'],
 },
 {
 id: 130,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O diagrama P-V a seguir representa o ciclo de Otto 
para um motor de combustão interna, como os motores a 
gasolina ou a etanol, utilizados nos automóveis. 
As etapas representadas no diagrama estão descritas 
no quadro. 
 
Disponível em: www.mspc.eng.br. 
Acesso em: 24 fev. 2013 (adaptado). 
A transformação da energia térmica em energia útil ocorre 
na etapa`,
 images: ['/enem/2024/images/enem_2024_d2_q130_1.jpg', '/enem/2024/images/enem_2024_d2_q130_2.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`II.`},
 { id: 'B', type: 'text', value:`III.`},
 { id: 'C', type: 'text', value:`IV.`},
 { id: 'D', type: 'text', value:`V.`},
 { id: 'E', type: 'text', value:`VI.`},
 ],
 correct: 'C',
 explanation:`O ciclo Otto é composto por 4 etapas: admissão, compressão, explosão/expansão e escape. A questão perguntava o momento que a energia térmica era transformada em útil e isso ocorre na etapa explosão/expansão. Nesta etapa, uma centelha promove a explosão da mistura ar-combustível e em seguida, na mesma fase, ocorre a expansão, que é o trabalho realizado pelo gás.`,
 subject: ['fis'],
 topics: ['Eletrodinâmica', 'Questões aleatórias'],
 },
 {
 id: 131,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O LED é um dispositivo eletrônico que conduz corrente 
elétrica em um único sentido, sendo caracterizado por uma 
tensão e uma corrente máxima de funcionamento, I max . Um LED 
acende apenas se a corrente que o percorre está no sentido 
permitido e se a diferença de potencial à qual está submetido 
é igual ou superior à sua tensão de funcionamento. A figura 
ilustra o símbolo do LED usado na representação de circuitos. 
Um estudante de física analisa as propriedades do LED 
em um circuito simples de corrente contínua. Ele dispõe dos 
seguintes materiais: uma bateria ideal de 4,5 V; dois LEDs 
de tensão 3,0 V e I max = 1,0 mA cada; e dois resistores de 
1,5 kΩ cada. 
O circuito que o estudante pode montar, para que ambos os 
LEDs fiquem acesos e cada um seja percorrido por I max , é`,
    images: ['/enem/2024/images/enem_2024_d2_q131.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value: `A` },
 { id: 'B', type: 'text', value: `B` },
 { id: 'C', type: 'text', value: `C` },
 { id: 'D', type: 'text', value: `D` },
 { id: 'E', type: 'text', value: `E` },
 ],
 correct: 'B',
 explanation:`Para o funcionamento adequado do LED precisamos que ele receba 3,0 volts de tensão e a corrente que passa por ele precisa ser de 1mA. Como a fonte geradora apresenta 4,5 V, precisamos de uma queda de tensão de 1,5 V para que a tensão fique ajustada. Como os resistores são de 1,5 kΩ, vamos descobrir quando de tensão eles conseguem com a corrente máxima. Com isso, sabemos que o resistor é capaz de provocar a queda de tensão que precisamos. A queda de tensão é feita quando o resistor é colocado em série com o LED, logo, vamos buscar uma alternativa com LEDs em série com resistores. A melhor alternativa encontra-se na letra B, onde não só garantimos a associação em série entre as resistências e os LEDs como também garantimos que a corrente para cada LED seja de 1 mA. OBS: Essa alternativa levou em consideração o sentido convencional (polo positivo para negativo) da corrente, alinhado a corrente com o sentido requisitado pelo LED. Caso a seja adotado o sentido real (polo negativo para positivo) o gabarito torna-se letra C. Como o enunciado não especificou qual sentido deve ser adotado, optamos pelo sentido amplamente adotado em vestibulares.`,
 subject: ['bio'],
 topics: ['Genética', 'Questões aleatórias'],
 },
 {
 id: 132,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma caixa decorativa utiliza duas pequenas lâmpadas,
L1 (6 V – 9 W) e L2 (12 V – 18 W), ligadas em série a
uma bateria de tensão VQR. Um fio resistivo QR, de
48 centímetros, está ligado em paralelo à bateria. Cinco
pontos, A, B, C, D e E, dividem o fio QR em seis segmentos
de comprimentos iguais. O circuito também tem um
amperímetro com dois terminais. Um dos terminais (P) está
ligado ao fio entre as duas lâmpadas. O outro terminal (S)
está livre e será ligado ao fio QR. Dependendo do ponto em
que esse terminal livre for conectado, ocorrerá a mudança
na tensão à qual as lâmpadas são submetidas. Os demais
fios do circuito têm resistências elétricas desprezíveis.
A figura ilustra esse circuito.
Em qual desses pontos o amperímetro deve ser conectado
para que as lâmpadas acendam exatamente segundo as
especificações de tensão e potência elétricas fornecidas?`,
 images: ['/enem/2024/images/enem_2024_d2_q132.jpg'],
 alternatives: [
      { id: 'A', type: 'text', value:`A`},
      { id: 'B', type: 'text', value:`B`},
      { id: 'C', type: 'text', value:`C`},
      { id: 'D', type: 'text', value:`D`},
      { id: 'E', type: 'text', value:`E`},

 ],
 correct: 'B',
 explanation:`O circuito elétrico apresenta um fio com espaçamentos iguais. O local que será conectado o amperímetro define a resistência para cada um dos lados. Como as duas lâmpadas estão em série, e essa dupla de lâmpadas esta em paralelo com a bateria, podemos dizer que a tensão da bateria é a soma das tensões. Não só a associação de lâmpadas tem tensão total de 18 V como o fio de 48 cm também. Como cada pedaço do fio divide a resistência igualmente, vamos calcular quanto de tensão temos por cm do fio. Como cada pedaço igualmente separado tem 8 cm Sabendo que cada pedaço tem 3 V, precisamos de 6 V para a lâmpada L1 e 12 V para L2. Isso é alcançado quando o amperímetro é ligado no ponto B.`,
 subject: ['fis'],
 topics: ['Geometria espacial', 'Questões aleatórias'],
 },
 {
 id: 133,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O biogás é uma alternativa energética muito importante, 
pois, além de reduzir a dependência por combustíveis 
fósseis, sua obtenção pode ser realizada a partir de 
resíduos da produção agroindustrial. Considere que o 
biogás produzido em um empreendimento de suinocultura 
contém 70% em volume de metano (massa molar 16 g/mol; 
volume molar 22 L/mol). Ele será utilizado para geração de 
energia em substituição ao etanol (massa molar 46 g/mol) 
em um gerador no qual 1 m³ de biogás de origem suína 
substitui 0,59 L de etanol anidro (densidade 0,78 g/mL). 
Nessas condições, a massa de metano necessária para 
substituir 10 mol de etanol na produção de energia é mais 
próxima de`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`300 g.`},
 { id: 'B', type: 'text', value:`400 g.`},
 { id: 'C', type: 'text', value:`510 g.`},
 { id: 'D', type: 'text', value:`590 g.`},
 { id: 'E', type: 'text', value:`720 g.`},
 ],
 correct: 'C',
 explanation:`Cálculo do volume de etanol 1 mol &#8212;&#8212; 46 g 10 mol &#8212;&#8211; X X = 460 g de etanol Usando a densidade para calcular o volume de etanol: d = m/V → 0,78 = 460/V → V = 589,7 mL = 0,5897 L ∼ 0,59L Cálculo do volume de de biogás: 1 m3 &#8212;&#8212;- 0,59 L Y &#8212;&#8212;&#8212;&#8212; 0,59 L Y = 1 m3 = 1000 L de biogás Cálculo do volume de metano 1000 L . 0,7 = 700 L de metano Cálculo da massa de metano 1 mol metano &#8212;&#8212;- 16 g &#8212;&#8212;&#8211; 22 L Sendo assim: 16 g &#8212;&#8212;&#8211; 22 L Z &#8212;&#8212;&#8212;&#8212; 700 L Z = 509,09 g ∼ 509 g`,
 subject: ['bio'],
 topics: ['Ecologia', 'Questões aleatórias'],
 },
 {
 id: 134,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A fitorremediação é uma técnica que utiliza plantas para a remediação de ambientes contaminados. A descontaminação 
de solos pode ocorrer por descarte, absorção e metabolização, imobilização, extração ou volatilização do poluente, 
conforme representado na figura. 
LUIZ, E. P. Avaliação dos métodos de fitorremediação [...] na remoção de chumbo, cobre e zinco . São Paulo: UFABC, 2016 (adaptado). 
O método que retira o mercúrio de uma área contaminada, impedindo sua entrada na cadeia alimentar, é a`,
 images: ['/enem/2024/images/enem_2024_d2_q134.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`fitoestabilização, ficando o mercúrio disponível sob a superfície das raízes das plantas.`},
 { id: 'B', type: 'text', value:`fitovolatilização, permitindo a retirada do mercúrio por plantas e a sua transferência para uma forma volátil.`},
 { id: 'C', type: 'text', value:`fitodegradação, com a degradação do mercúrio promovida por enzimas, contidas nas raízes, formando espécies 
menos tóxicas.`},
 { id: 'D', type: 'text', value:`fitoestimulação, com a remoção do mercúrio pela ação de microrganismos presentes nas raízes que absorvem e 
imobilizam o metal.`},
 { id: 'E', type: 'text', value:`fitoextração, em que as plantas que acumulam o mercúrio são cultivadas nesses locais, e a biomassa rica no metal 
é retirada após o crescimento.`},
 ],
 correct: 'E',
 explanation:`Sendo o mercúrio um poluente não biodegradável, as plantas promoverão sua fitoextração, absorvendo esse metal e acumulando em seus tecidos.`,
 subject: ['fis'],
 topics: ['Cinemática', 'Questões aleatórias'],
 },
 {
 id: 135,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Brasil fecha 2020 entre os maiores recicladores de latas de alumínio 
A bauxita contém alumina (Al 2 O 3 ), que é a matéria-prima para produção do alumínio (Al). De forma geral, são 
necessários 50 kg de bauxita para produzir 10 kg de alumínio. O Brasil fechou 2020 como um dos principais líderes 
mundiais em reciclagem de latas de alumínio. De acordo com levantamento da Associação Brasileira dos Fabricantes 
de Latas de Alumínio (Abralatas), o país obteve um índice de reciclagem de 97,4%, de um total de 4,0 × 10⁵ toneladas 
de latas vendidas. Considere que a lata é constituída de alumínio puro. 
Disponível em: https://agenciabrasil.ebc.com.br. Acesso em: 30 nov. 2021 (adaptado). 
Levando em conta apenas a reciclagem de latas, qual é o valor mais próximo da massa de bauxita, em tonelada, que 
deixou de ser extraída da natureza em 2020 no Brasil?`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`1,0 × 10⁴ ton`},
 { id: 'B', type: 'text', value:`3,9 × 10⁵ ton`},
 { id: 'C', type: 'text', value:`5,0 × 10⁵ ton`},
 { id: 'D', type: 'text', value:`1,9 × 10⁶ ton`},
 { id: 'E', type: 'text', value:`2,0 × 10⁷ ton`},
 ],
 correct: 'D',
 explanation:`Cálculo da massa de Alumínio reciclado: 4,0 . 105 toneladas x 0,974 = 3,896 . 105 toneladas Cálculo da massa de bauxita 50 kg bauxita &#8212;&#8212;&#8212;&#8212; 10 kg Alumínio X &#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212;&#8212; 3,896 . 105 toneladas X = 19,48 . 105 toneladas = 1,9 . 106 toneladas`,
 subject: ['fis'],
 topics: ['Óptica', 'Questões aleatórias'],
 },
 {
 id: 136,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O tamanho mínimo que a visão humana é capaz de 
visualizar sem o uso de equipamento auxiliar é equivalente 
a 100 micrômetros (1 micrômetro = 10 - 3 milímetros). 
Uma estudante pretende visualizar e analisar hemácias 
do sangue humano, que medem 0,007 mm de diâmetro. 
Ela adquiriu um microscópio óptico que tem uma lente 
ocular que amplia em 10 vezes a imagem do objeto em 
observação, e um conjunto de lentes objetivas com estas 
capacidades de ampliação: 
• lente I: 2 vezes; 
• lente II: 10 vezes; 
• lente III: 15 vezes; 
• lente IV: 1,1 vez; 
• lente V: 1,4 vez. 
O funcionamento desse microscópio permite o uso da 
lente ocular sozinha ou a combinação dela com uma 
de suas lentes objetivas, proporcionando, nesse caso, 
um aumento de sua capacidade de ampliação final, que é 
dada pelo produto entre as capacidades de ampliação da 
ocular e da objetiva. 
Essa estudante pretende selecionar a lente objetiva de 
menor capacidade de ampliação que permita, na combinação 
com a ocular, visualizar hemácias do sangue humano. 
A lente objetiva a ser selecionada pela estudante é a`,
 images: ['/enem/2024/images/enem_2024_d2_q136.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`I.`},
 { id: 'B', type: 'text', value:`II.`},
 { id: 'C', type: 'text', value:`III.`},
 { id: 'D', type: 'text', value:`IV.`},
 { id: 'E', type: 'text', value:`V.`},
 ],
 correct: 'A',
 explanation:`Para visualizar hemácias de diâmetro igual a 0,007 mm, é necessário multiplicar esse valor pela capacidade de ampliação da lente ocular (α) e da lente objetiva (β) até atingir o tamanho mínimo que a visão humana é capaz de perceber, que é 100 μm (0,1 mm). A relação para calcular a ampliação é: 0,007 . α . β = 0,1, onde a ampliação da lente ocular (α) é 10 vezes. Substituímos α = 10: 0,007 . 10 . β = 0,1 Simplificando: 0,07 . β = 0,1 -&gt; β = 0,1 / 0,07 = 1,4286 Portanto, a lente objetiva escolhida deve ter capacidade de ampliação maior ou igual a 1,4286 vezes. Entre as opções disponíveis, a lente V não atende, pois tem uma ampliação de 1,4 vezes, que é insuficiente. A única alternativa válida é a lente I , que possui capacidade de ampliação de 2 vezes. &nbsp;`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 137,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Ao calcular a média de suas notas em 4 provas, um 
estudante dividiu, por engano, a soma das notas por 5. 
Com isso, a média obtida foi 1 unidade menor do que 
deveria ser, caso fosse calculada corretamente. 
O valor correto da média das notas desse estudante é`,
 alternatives: [
 { id: 'A', type: 'text', value:`4.`},
 { id: 'B', type: 'text', value:`5.`},
 { id: 'C', type: 'text', value:`6.`},
 { id: 'D', type: 'text', value:`19.`},
 { id: 'E', type: 'text', value:`21.`},
 ],
 correct: 'B',
 explanation:`Sabemos que, ao dividir a soma das notas (S) por 5, o estudante encontrou uma média que era 1 unidade menor do que a média correta (M). Assim, podemos escrever: &nbsp; &nbsp; Por outro lado, a média correta é dada por: Substituímos S = 5M − 5 na segunda equação: Multiplicamos tudo por 4: Isolamos M:`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 138,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Para abrir a porta de uma empresa, cada funcionário 
deve cadastrar uma senha utilizando um teclado 
alfanumérico como o representado na figura. 
Por exemplo: a tecla que contém o número 2 traz as 
letras correlacionadas A, B e C. Cada toque nessa tecla 
mostra, sequencialmente, os seguintes caracteres: 2, A, B 
e C. Para os próximos toques, essa sequência se repete. 
As demais teclas funcionam da mesma maneira. 
As senhas a serem cadastradas pelos funcionários 
devem conter 5 caracteres, sendo 2 algarismos distintos 
seguidos de 3 letras diferentes, nessa ordem. Um funcionário 
irá cadastrar a sua primeira senha, podendo escolher entre 
as teclas que apresentam os números 1, 2, 5, 7 e 0 e as 
respectivas letras correlacionadas, quando houver. 
O número de possibilidades diferentes que esse 
funcionário tem para cadastrar sua senha é`,
 images: ['/enem/2024/images/enem_2024_d2_q138.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`11 520.`},
 { id: 'B', type: 'text', value:`14 400.`},
 { id: 'C', type: 'text', value:`18 000.`},
 { id: 'D', type: 'text', value:`312 000.`},
 { id: 'E', type: 'text', value:`390 000.`},
 ],
 correct: 'B',
 explanation:`A senha deve ser composta por 2 números diferentes (escolhidos entre 1, 2, 5, 7 e 0) e 3 letras diferentes (escolhidas das teclas que possuem letras, totalizando 10 opções). Vamos resolver utilizando o Princípio Fundamental da Contagem. Para os 2 números , temos: 5 opções para o primeiro número. 4 opções para o segundo número (sem repetição). Para as 3 letras , temos: 10 opções para a primeira letra. 9 opções para a segunda letra (sem repetição). 8 opções para a terceira letra. Multiplicamos as possibilidades: O número de possibilidades para a senha é 14.400 , o que corresponde à alternativa B .`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 139,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um artesão utiliza dois tipos de componentes, X e 
Y, nos enfeites que produz. Ele sempre compra todos os 
componentes em uma mesma loja. O quadro apresenta 
os preços dos dois tipos de componentes nas lojas I e II. 
 
Ele confeccionará enfeites formados por duas unidades 
do componente X e uma unidade do componente Y e 
efetuará a compra na loja que oferecer o menor valor total 
para a confecção de um enfeite. 
O artesão efetuará a compra na loja`,
    images: ['/enem/2024/images/enem_2024_d2_q139.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`I, pois o valor é R$ 7,00.`},
 { id: 'B', type: 'text', value:`I, pois o valor é R$ 4,00.`},
 { id: 'C', type: 'text', value:`II, pois o valor é R$ 6,00.`},
 { id: 'D', type: 'text', value:`I, pois anuncia o componente com o menor preço.`},
 { id: 'E', type: 'text', value:`II, pois o componente X, que é o mais utilizado, tem 
menor preço.`},
 ],
 correct: 'A',
 explanation:`O artesão precisa de duas unidades do componente X e uma unidade do componente Y para confeccionar um enfeite. Vamos calcular o custo total em cada loja para identificar qual delas oferece o menor valor. Na Loja I , o preço do componente X é R$3,00 e o preço do componente Y é R$1,00. O custo total será: 2 . 3,00 + 1 . 1,00 = 6,00 + 1,00 = R$ 7,00 Na Loja II , o preço do componente X é R$2,00 e o preço do componente Y é R$4,00. O custo total será: 2 . 2,00 + 1 . 4,00 = 4,00 + 4,00 = R$ 8,00 Portanto, o menor custo total é de R$7,00 , e a compra deve ser feita na Loja I . A resposta correta é: Alternativa (a).`,
 subject: ['mat'],
 topics: ['Porcentagem', 'Questões aleatórias'],
 },
 {
 id: 140,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`João e Felipe participaram, na escola, de uma maratona 
de matemática na qual, durante uma semana, resolveram 
200 questões cada. Nessa maratona, a porcentagem P de 
acertos de cada participante é convertida em um conceito: 
• insatisfatório: se 0 ≤ P < 50; 
• regular: se 50 ≤ P < 60; 
• bom: se 60 ≤ P < 75; 
• muito bom: se 75 ≤ P < 90; 
• excelente: se 90 ≤ P ≤ 100. 
João acertou 75% das questões da maratona e Felipe 
acertou 30% a menos que a quantidade de questões que 
João acertou. 
Os conceitos de João e Felipe foram, respectivamente,`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`muito bom e bom.`},
 { id: 'B', type: 'text', value:`muito bom e regular.`},
 { id: 'C', type: 'text', value:`muito bom e insatisfatório.`},
 { id: 'D', type: 'text', value:`bom e regular.`},
 { id: 'E', type: 'text', value:`bom e insatisfatório.`},
 ],
 correct: 'B',
 explanation:`João acertou 75% das questões. Sabemos que ele resolveu um total de 200 questões, então o número de questões que João acertou é: 0,75 . 200 = 150 questões. Felipe acertou 30% a menos do que João, então o número de questões que Felipe acertou é: 150 &#8211; 0,3 . 150 = 150 &#8211; 45 = 105 questões. Agora calculamos o percentual de acertos de Felipe em relação ao total de 200 questões: (105 / 200) . 100 = 52,5% Agora classificamos os conceitos com base nos intervalos fornecidos: João acertou 75% , o que corresponde ao conceito muito bom. Felipe acertou 52,5% , o que corresponde ao conceito regular.`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 141,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Três grandezas (I, II e III) se relacionam entre si. 
Os gráficos a seguir, formados por segmentos de reta, 
descrevem as relações de dependência existentes entre 
as grandezas I e II, e entre as grandezas II e III. 
O valor máximo assumido pela grandeza III, quando a 
grandeza I varia de 1 a 3, é`,
 images: ['/enem/2024/images/enem_2024_d2_q141.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`1,0.`},
 { id: 'B', type: 'text', value:`2,5.`},
 { id: 'C', type: 'text', value:`3,0.`},
 { id: 'D', type: 'text', value:`3,5.`},
 { id: 'E', type: 'text', value:`4,0.`},
 ],
 correct: 'B',
 explanation:`Queremos determinar o valor máximo da grandeza III quando a grandeza I varia de 1 a 3. Para isso, analisamos as relações entre as grandezas I, II, e III, utilizando os dois gráficos fornecidos. Do gráfico da relação entre I e II: Para I =1, II = 1,5. Para I = 3, II = 3,5. Do gráfico da relação entre II e III: Para II =1,5, III = 2,5. Para II = 3,5, III = 2 Entre esses valores, o valor máximo de III ocorre quando II = 1,5, com III = 2,5.`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 142,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma criança, utilizando um aplicativo, escreveu uma 
mensagem para enviar a um amigo. Essa mensagem foi 
escrita seguindo estas etapas: 
Etapas 
Visor de escrita 
1 ª etapa: inseriu três fi guras 
do tipo 
 no visor de 
escrita da mensagem; 
2 ª etapa: copiou o que havia 
inserido anteriormente e 
colou (inseriu o que havia 
copiado) ao lado; 
3 ª etapa: copiou o que tinha 
no visor na 2 ª etapa e colou 
ao lado. 
A criança seguiu copiando e colando, em cada etapa, 
o que tinha no visor na etapa imediatamente anterior, até 
concluir a 20 ª etapa. Em seguida, enviou a mensagem. 
Qual foi o total de figuras contidas na mensagem enviada?`,
 images: ['/enem/2024/images/enem_2024_d2_q142.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`3 × 2 19`},
 { id: 'B', type: 'text', value:`3 × 2 20`},
 { id: 'C', type: 'text', value:`3 × 2 21`},
 { id: 'D', type: 'text', value:`3 × 2 20 − 1`},
 { id: 'E', type: 'text', value:`3 × 2 20 − 3`},
 ],
 correct: 'A',
 explanation:`Para resolver esta questão, precisamos entender o padrão de crescimento das figuras no visor. A cada etapa, o total de figuras segue uma progressão geométrica (PG), onde o número de figuras dobra em relação à etapa anterior, começando com 3 figuras. Na 1ª etapa, a criança insere 3 figuras, que é o primeiro termo da PG (a1 = 3). Na 2ª etapa, ela copia as 3 figuras e adiciona ao lado, totalizando 666 figuras, que equivale ao segundo termo da PG. Na 3ª etapa, o mesmo processo acontece: ela copia as 6 figuras e adiciona ao lado, totalizando 12 figuras, que corresponde ao terceiro termo. Esse padrão se repete até a 20ª etapa. A fórmula geral da PG é: onde: an​ é o total de figuras na n-ésima etapa, a1 = 3 (o número inicial de figuras), q = 2 (a razão, pois as figuras dobram a cada etapa), n é o número da etapa. Para calcular o total de figuras na 20ª etapa (n = 20), aplicamos a fórmula: Portanto, o total de figuras enviadas na mensagem ao final do processo é , que corresponde à alternativa A . Esse método demonstra como a progressão geométrica simplifica o cálculo e ajuda a identificar padrões de crescimento em problemas similares.`,
 subject: ['mat'],
 topics: ['Porcentagem', 'Questões aleatórias'],
 },
 {
 id: 143,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma casa de shows terá um evento cujo custo total 
de produção é de R$ 34 350,00, sendo que comporta 
500 pessoas. O preço do ingresso será de R$ 130,00 e, 
normalmente, 60% das pessoas adquirem meia-entrada, 
pagando R$ 65,00 pelo ingresso. Além do faturamento 
proveniente da venda de ingressos, a casa de shows 
vende, com 60% de lucro, bebidas e petiscos ao público 
no dia do evento. 
Após ter vendido todos os 500 ingressos, constatou-se 
que a quantidade de meias-entradas vendidas superou 
em 50% o que estava previsto, impactando o faturamento 
estimado com a venda de ingressos. 
No dia do evento, decidiu-se manter o percentual 
de 60% de lucro sobre as bebidas e petiscos, pois todo 
o público que comprou ingresso compareceu ao 
show. Com isso, espera-se ter lucro de R$ 17 000,00 
nesse evento. 
Para que se alcance o lucro esperado, o gasto médio por 
pessoa com bebidas e petiscos, em real, deverá ser de`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`19,50.`},
 { id: 'B', type: 'text', value:`28,80.`},
 { id: 'C', type: 'text', value:`34,00.`},
 { id: 'D', type: 'text', value:`52,00.`},
 { id: 'E', type: 'text', value:`68,70.`},
 ],
 correct: 'D',
 explanation:`Primeiro, calculamos a quantidade de ingressos vendidos como meia-entrada e como inteira. A questão informa que 60% dos ingressos normalmente são meia-entrada . Assim, inicialmente era esperado que: 60% . 500 = 300 (meia-entrada). Com o aumento de 50% em relação ao esperado , a quantidade de meias-entradas vendidas passou para: 300 + 0,5 . 300 = 450 (meia-entrada). O restante dos ingressos, sendo vendidos como inteira, foi: 500 &#8211; 450 = 50 (inteira). Agora, calculamos o faturamento com os ingressos: Faturamento com meia-entrada : 450 . 65 = R$ 29.250,00. Faturamento com inteira : 50 . 130 = R$ 6.500,00 Faturamento total com ingressos : 29.250 + 6.500 = R$ 35.750,00 O custo total do evento é R$34.350,00. Subtraímos esse valor do faturamento com ingressos para determinar o lucro obtido apenas com os ingressos: 35.750 &#8211; 34.350 = R$ 1.400,00 O lucro esperado total é R$17.000,00, portanto, o valor que ainda precisa ser arrecadado com bebidas e petiscos é: 17.000 &#8211; 1.400 = R$ 15.600,00 Agora, sabemos que o faturamento necessário com bebidas e petiscos será: 15.600 / 0,6 = R$ 26.000,00 (onde 15.600 é o lucro desejado e 0,60 representa 60% do total arrecadado, que corresponde ao lucro). Com 500 pessoas, o gasto médio necessário por pessoa com bebidas e petiscos é: 26.00 / 500 = R$ 52,00 O gasto médio necessário para alcançar o lucro esperado de R$17.000,00 será de R$52,00 , o que corresponde à alternativa D .`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 144,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Para obter um sólido de revolução (rotação de 360 ° 
em torno de um eixo fixo), uma professora realizou as 
seguintes etapas: 
• recortou o trapézio retângulo PQRS de um 
material rígido; 
• afixou o lado PS do trapézio em uma vareta fixa 
retilínea (eixo de rotação); 
• girou o trapézio 360 ° em torno da vareta e obteve 
um sólido de revolução. 
Observe a figura que apresenta o trapézio afixado na 
vareta e o sentido de giro. 
O sólido obtido foi um(a)`,
 images: ['/enem/2024/images/enem_2024_d2_q144.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`cone.`},
 { id: 'B', type: 'text', value:`cilindro.`},
 { id: 'C', type: 'text', value:`pirâmide.`},
 { id: 'D', type: 'text', value:`tronco de cone.`},
 { id: 'E', type: 'text', value:`tronco de pirâmide.`},
 ],
 correct: 'D',
 explanation:`Quando o trapézio retângulo PQRS é girado em torno do lado PS, ele gera um sólido de revolução com duas bases circulares paralelas, de raios diferentes (provenientes dos lados QR e RS), e uma superfície lateral curva conectando essas bases. Esse sólido formado é um tronco de cone , o que corresponde à alternativa D .`,
 subject: ['mat'],
 topics: ['Geometria plana', 'Questões aleatórias'],
 },
 {
 id: 145,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O estádio do Maracanã passou por algumas 
modificações estruturais para a realização da Copa do 
Mundo de 2014, como, por exemplo, as dimensões do 
campo retangular. Para se adaptar aos padrões da Fifa, 
as dimensões do campo foram reduzidas de 110 m × 75 m 
para 105 m × 68 m. 
Disponível em: http://virgula.uol.com.br. 
Acesso em: 14 ago. 2013 (adaptado). 
Em quantos metros quadrados a área do campo do 
Maracanã foi reduzida?`,
 alternatives: [
 { id: 'A', type: 'text', value:`24`},
 { id: 'B', type: 'text', value:`35`},
 { id: 'C', type: 'text', value:`555`},
 { id: 'D', type: 'text', value:`1 110`},
 { id: 'E', type: 'text', value:`1 145`},
 ],
 correct: 'D',
 explanation:`O campo retangular teve suas dimensões alteradas de 110 m × 75 m para 105 m × 68 m. Para calcular a redução da área, determinamos primeiro as áreas antes e depois da mudança. Área original: A (original) = 110 . 75 = 8.250 m² Área após a redução: A (nova) = 105 . 68 = 7.140 m² Redução da área: Redução = A (original) &#8211; A (nova) = 8.250 &#8211; 7.140 = 1110 m² A área do campo foi reduzida em 1110 m² , o que corresponde à alternativa D .`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 146,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um fazendeiro pretende construir um galinheiro 
ocupando uma região plana de formato retangular, com 
lados de comprimentos L metro e C metro. Os lados serão 
cercados por telas de tipos diferentes. Nos lados de 
comprimento L metro, será utilizada uma tela cujo metro 
linear custa R$ 20,00, enquanto, nos outros dois lados, 
uma que custa R$ 15,00. O fazendeiro quer gastar, no 
máximo, R$ 6 000,00 na compra de toda a tela necessária 
para o galinheiro, e deseja que o galinheiro tenha a maior 
área possível. 
Qual será a medida, em metro, do maior lado do galinheiro?`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`85`},
 { id: 'B', type: 'text', value:`100`},
 { id: 'C', type: 'text', value:`175`},
 { id: 'D', type: 'text', value:`200`},
 { id: 'E', type: 'text', value:`350`},
 ],
 correct: 'B',
 explanation:`O objetivo é determinar a medida do maior lado (C) de um galinheiro retangular, maximizando a área (A), com um orçamento de R$6.000,00 para as telas. Os custos das telas são: R$20,00/m para os lados de comprimento L, R$15,00/m para os lados de comprimento C. O custo total da tela é dado por: Simplificando: Dividindo por 10: Da equação (2), isolamos C: A área (A) do galinheiro é dada por: Substituindo C, teremos: Simplificando: O valor de L que maximiza a área está no vértice da parábola e é dado pelo x do vértice. Agora substituiremos C na equação para encontrar o comprimento C que maximiza a área. Substituímos L = 75 na equação que encontramos anteriormente: Com L = 75 mL e C = 100 , o maior lado do galinheiro é 100m. &nbsp; &nbsp;`,
 subject: ['mat'],
 topics: ['Cinemática', 'Questões aleatórias'],
 },
 {
 id: 147,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma professora de matemática utiliza em suas 
aulas uma “máquina caça-números” para verificar os 
conhecimentos de seus estudantes sobre representações 
de números racionais. Essa máquina tem um visor dividido 
em seis compartimentos e, na lateral, uma alavanca. Cada 
estudante puxa a alavanca e espera que os compartimentos 
parem de girar. A partir daí, precisa responder para a 
professora em quais posições se encontram os números 
que representam a mesma quantidade. 
Um estudante puxou a alavanca, aguardou que os 
compartimentos parassem de girar e observou os números 
apresentados no visor. A configuração da máquina naquele 
instante está apresentada na imagem. 
Esse estudante respondeu corretamente à pergunta 
da professora. 
As posições indicadas pelo estudante foram`,
 images: ['/enem/2024/images/enem_2024_d2_q147.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`I, II e IV.`},
 { id: 'B', type: 'text', value:`II, IV e V.`},
 { id: 'C', type: 'text', value:`II, III e V.`},
 { id: 'D', type: 'text', value:`III, V e VI.`},
 { id: 'E', type: 'text', value:`III, IV e VI.`},
 ],
 correct: 'B',
 explanation:`Para resolver a questão, vamos reescrever os números de cada compartimento na forma decimal ou equivalente, de forma que seja possível compará-los diretamente. Em seguida, identificaremos quais compartimentos possuem valores iguais. Portanto, os compartimentos II , IV e V representam o mesmo valor.`,
 subject: ['mat'],
 topics: ['Geografia física (clima, relevo, hidrografia)', 'Questões aleatórias'],
 },
 {
 id: 148,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma caneca com água fervendo é retirada de um 
forno de micro-ondas. A temperatura T , em grau Celsius, 
da caneca, em função do tempo t , em minuto, pode ser 
modelada pela função T ( t ) = a + 80 b t , representada no 
gráfico a seguir. 
Os valores das constantes a e b são`,
 images: ['/enem/2024/images/enem_2024_d2_q148.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`a = 20; b = log(0,5)`},
 { id: 'B', type: 'text', value:`a = 100; b = 0,5 
1 
10 
; 
( , )`},
 { id: 'C', type: 'text', value:`a 
b 
= 
= 
20 
0 5 
1 
10 
; 
( 
)`},
 { id: 'D', type: 'text', value:`a 
b 
= 
= 
20 
40 
80`},
 { id: 'E', type: 'text', value:`a = 20; b = 40`},
 ],
 correct: 'C',
 explanation:`Para resolver a questão, determinaremos os valores de a e b na equação dada, utilizando os pontos fornecidos no gráfico (0, 100) e (20, 40). No ponto t= 0, T(0) = 100. Substituímos na equação: como , então No ponto t= 20, T(20) = 40. Substituímos na equação: Sabemos que a = 20, então: Reescrevendo b: Concluímos que os valores das constantes são: Logo a alternativa correta é a c).`,
 subject: ['mat'],
 topics: ['Geometria espacial', 'Questões aleatórias'],
 },
 {
 id: 149,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Em uma empresa é comercializado um produto em 
embalagens em formato de cilindro circular reto, com raio 
medindo 3 cm, e altura medindo 15 cm. Essa empresa 
planeja comercializar o mesmo produto em embalagens 
em formato de cubo, com capacidade igual a 80% da 
capacidade da embalagem cilíndrica utilizada atualmente. 
Use 3 como valor aproximado para π . 
A medida da aresta da nova embalagem, em centímetro, 
deve ser`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`6`},
 { id: 'B', type: 'text', value:`18`},
 { id: 'C', type: 'text', value:`6 6`},
 { id: 'D', type: 'text', value:`6 6 
3`},
 { id: 'E', type: 'text', value:`3 12 
3`},
 ],
 correct: 'E',
 explanation:`A fórmula do volume do cilindro é: Substituímos os valores: O volume da nova embalagem cúbica será igual a 80% do volume do cilindro : O volume de um cubo é dado por: onde aaa é a aresta do cubo. Sabemos que: FATORANDO: Reescrevemos 324 como: Gabarito: e) &nbsp;`,
 subject: ['mat'],
 topics: ['Química Geral', 'Questões aleatórias'],
 },
 {
 id: 150,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma sala com piso no formato retangular, com lados 
de medidas 3 m e 6 m, será dividida em dois ambientes. 
Para isso, serão utilizadas colunas em formato cilíndrico, 
dispostas perpendicularmente ao piso e representadas na 
figura pelos círculos de cor azul. Os centros desses círculos 
estarão sobre uma reta paralela aos lados de menor medida 
do piso da sala. Os vãos entre duas colunas e entre uma 
coluna e a parede não poderão ser superiores a 15 cm. 
Para efetuar a compra dessas colunas, foram feitos 
orçamentos com base em dados fornecidos por cinco lojas. 
 
A compra será realizada na loja cujo orçamento resulte 
no menor valor total possível. 
A compra será realizada na loja`,
 images: ['/enem/2024/images/enem_2024_d2_q150_1.jpg', '/enem/2024/images/enem_2024_d2_q150_2.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`I.`},
 { id: 'B', type: 'text', value:`II.`},
 { id: 'C', type: 'text', value:`III.`},
 { id: 'D', type: 'text', value:`IV.`},
 { id: 'E', type: 'text', value:`V.`},
 ],
 correct: 'C',
 explanation:`Para resolver essa questão, usamos a fórmula: porque cada coluna ocupa um espaço igual ao seu diâmetro (d), enquanto o espaçamento entre as colunas e as paredes é 15 cm. O termo 15⋅(x+1) considera os espaçamentos entre as x colunas e as duas paredes, totalizando a largura de 300 cm. A fórmula reorganizada para o número de colunas (x) é: Substituímos d (diâmetro) para cada loja e calculamos o custo total diretamente. Aqui estão os resultados: A loja com o menor custo total é a Loja III , com R$ 525 . &nbsp;`,
 subject: ['mat'],
 topics: ['Geometria plana', 'Questões aleatórias'],
 },
 {
 id: 151,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O arquiteto Renzo Piano exibiu a maquete da nova 
sede do Museu Whitney de Arte Americana, um prédio 
assimétrico que tem um vão aberto para a galeria principal, 
cuja medida da área é 1 672 m² . 
Considere que a escala da maquete exibida é 1 : 200. 
Época , n. 682, jun. 2011 (adaptado). 
A medida da área do vão aberto nessa maquete, em 
centímetro quadrado, é`,
 alternatives: [
 { id: 'A', type: 'text', value:`4,18.`},
 { id: 'B', type: 'text', value:`8,36.`},
 { id: 'C', type: 'text', value:`41,80.`},
 { id: 'D', type: 'text', value:`83,60.`},
 { id: 'E', type: 'text', value:`418,00.`},
 ],
 correct: 'E',
 explanation:`A escala linear 1:200 significa que cada dimensão da maquete é 1/200 da dimensão real. Como a área é proporcional ao quadrado das dimensões, a escala de área será reduzida por 200² = 40000. A área real do vão é 1672 m² = 16720000 cm. Dividindo pela escala de área:`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 152,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O gráfico apresenta o valor total de exportações e o 
valor total de importações, ao longo de um período, em 
bilhão de dólares. O saldo da balança comercial brasileira 
é dado pelo valor total de exportações menos o valor total 
de importações num mesmo período. 
Valor total de exportações e importações 
Disponível em: http://blogs.estadão.com.br. 
Acesso em: 20 fev. 2013 (adaptado). 
Considere que os saldos da balança comercial 
brasileira, nos três meses destacados no gráfico, sejam 
representados por: 
• S 1 : saldo em junho de 2009; 
• S 2 : saldo em janeiro de 2010; 
• S 3 : saldo em junho de 2010. 
A ordenação dos saldos S 1 , S 2 e S 3 , do maior para o menor, é`,
 images: ['/enem/2024/images/enem_2024_d2_q152.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`S 1 , S 3 e S 2 .`},
 { id: 'B', type: 'text', value:`S 2 , S 1 e S 3 .`},
 { id: 'C', type: 'text', value:`S 2 , S 3 e S 1 .`},
 { id: 'D', type: 'text', value:`S 3 , S 1 e S 2 .`},
 { id: 'E', type: 'text', value:`S 3 , S 2 e S 1 .`},
 ],
 correct: 'A',
 explanation:`Para resolver a questão, analisaremos o saldo da balança comercial com base na distância entre as linhas de exportações e importações , que indica a diferença entre os valores. Em seguida, ordenaremos os saldos de acordo com essa diferença, do maior para o menor. Junho de 2009 (S1​) : A diferença entre exportações e importações é a maior no gráfico. Junho de 2010 (S3) : A diferença é menor que a de 2009, mas ainda relevante. Janeiro de 2010 (S2​) : A diferença entre exportações e importações é quase nula. Com base na análise, os saldos em ordem decrescente são: Alternativa correta: A) S1​, S3​, S2​.`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 153,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um instituto de pesquisa constatou que, nos últimos 
dez anos, o crescimento populacional de uma cidade foi 
de 135,25%. 
Qual é a representação decimal da taxa percentual desse 
crescimento populacional?`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`13 525,0`},
 { id: 'B', type: 'text', value:`135,25`},
 { id: 'C', type: 'text', value:`13,525`},
 { id: 'D', type: 'text', value:`1,3525`},
 { id: 'E', type: 'text', value:`0,13525`},
 ],
 correct: 'D',
 explanation:`Queremos transformar a porcentagem 135,25% em sua representação decimal. Para isso, dividimos o valor percentual por 100, pois 1% = 0,01 .`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 154,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Contratos de vários serviços disponíveis na internet
apresentam uma quantidade excessiva de informações.
Isso faz com que o tempo necessário para a leitura desses
contratos possa ser longo.
O quadro apresenta uma amostra do tempo considerado
necessário para a leitura completa do contrato de alguns
serviços digitais.
Tipo de serviço — Tempo necessário para a leitura completa do contrato (em minuto)
A — 36
B — 17
C — 27
D — 13
E — 13
F — 13
ROMERO, L. Não li e concordo. Superinteressante,
n. 307, ago. 2012 (adaptado).
O tempo médio, em minuto, necessário para a leitura
completa de um contrato de serviço dentre os listados
no quadro é, com uma casa decimal, aproximadamente,`,
    images: ['/enem/2024/images/enem_2024_d2_q154.jpg'],
 alternatives: [
      { id: 'A', type: 'text', value:`13,0.`},
      { id: 'B', type: 'text', value:`15,0.`},
      { id: 'C', type: 'text', value:`19,8.`},
      { id: 'D', type: 'text', value:`20,0.`},
      { id: 'E', type: 'text', value:`23,3.`},

 ],
 correct: 'C',
 explanation:`Vamos calcular a média aritmética do tempo necessário para leitura dos contratos. Os tempos são: Resposta: (C) 19,8 minutos.`,
 subject: ['mat'],
 topics: ['Movimentos sociais', 'Questões aleatórias'],
 },
 {
 id: 155,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um proprietário pretende instalar um sensor de 
presença para a proteção de seu imóvel. O sensor 
deverá detectar movimentos de objetos e pessoas numa 
determinada região plana. A figura ilustra a vista superior 
da área de cobertura (setor circular em azul) de um sensor 
colocado no ponto S . Essa área depende da medida do 
ângulo α , em grau, e do raio R , em metro. 
Ao aumentar o ângulo α ou o raio R aumenta-se a 
área de cobertura do sensor. Entretanto, quanto maior 
essa área, maior o preço do sensor. 
Para esse fim, há cinco tipos de sensores disponíveis 
no mercado, cada um com as seguintes características: 
• tipo I: α = 15 ° e R = 20 m; 
• tipo II: α = 30 ° e R = 22 m; 
• tipo III: α = 40 ° e R = 12 m; 
• tipo IV: α = 60 ° e R = 16 m; 
• tipo V: α = 90 ° e R = 10 m. 
Esse proprietário pretende adquirir um desses sensores 
que seja capaz de cobrir, no mínimo, uma área de medida 
70 m² , com o menor preço possível. 
Use 3 como valor aproximado para π . 
O proprietário do imóvel deverá adquirir o sensor do tipo`,
 images: ['/enem/2024/images/enem_2024_d2_q155.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`I.`},
 { id: 'B', type: 'text', value:`II.`},
 { id: 'C', type: 'text', value:`III.`},
 { id: 'D', type: 'text', value:`IV.`},
 { id: 'E', type: 'text', value:`V.`},
 ],
 correct: 'E',
 explanation:`A área de cobertura é um setor circular e é dada por:`,
 subject: ['mat'],
 topics: ['Genética', 'Questões aleatórias'],
 },
 {
 id: 156,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`O uso de aplicativos de transporte tem sido uma 
alternativa à população que busca preços mais competitivos 
para se locomover, principalmente nas grandes cidades. 
As formas usadas para determinar o valor cobrado por 
cada viagem variam de um aplicativo para outro, mas, em 
geral, o valor V a ser pago, em real, varia em função de: 
• tarifa base F : valor fixo, em real, cobrado no início 
da viagem; 
• tempo T : tempo, em minuto, de duração da viagem; 
• distância D : distância percorrida, em quilômetro. 
Um desses aplicativos cobra R$ 2,00 de valor fixo, 
acrescido de R$ 0,26 por minuto de viagem e de R$ 1,40 
por quilômetro rodado. 
Nessas condições, a expressão que fornece o valor V a 
ser pago por uma viagem desse aplicativo é`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`2,00 F + 0,26 T + 1,40 D`},
 { id: 'B', type: 'text', value:`2,00 + 0,26 T + 1,40 D`},
 { id: 'C', type: 'text', value:`2,00 + 0,26 T + D 
D 0,26 T + 1,40`},
 { id: 'D', type: 'text', value:`0,26T + 1,40D`},
 { id: 'E', type: 'text', value:`F + T + D`},
 ],
 correct: 'B',
 explanation:`Tarifa fixa F = R$2,00. Valor por minuto T = 0,26, onde T é o tempo em minutos. Valor por quilômetro D = 1,40, onde D é a distância percorrida em quilômetros. A fórmula do valor total V é a soma dos três componentes: Substituindo os valores:`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 157,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma doceira vende e entrega, em seu bairro, porções 
de 100 g de docinhos de aniversário. Atualmente, a taxa 
única de entrega é R$ 10,00, e o valor cobrado por uma 
porção é R$ 25,00. Por uma estratégia de vendas, a partir 
da próxima semana, a taxa única de entrega será R$ 15,00, 
e um novo valor será cobrado por uma porção, de maneira 
que o valor total a ser pago por um cliente na compra de 
5 porções permaneça o mesmo. 
A partir da próxima semana, qual será o novo valor 
cobrado, em real, por uma porção?`,
 alternatives: [
 { id: 'A', type: 'text', value:`12,50`},
 { id: 'B', type: 'text', value:`20,00`},
 { id: 'C', type: 'text', value:`24,00`},
 { id: 'D', type: 'text', value:`30,00`},
 { id: 'E', type: 'text', value:`37,50`},
 ],
 correct: 'C',
 explanation:`Atualmente, o valor total pago por 5 porções mais a taxa de entrega é: A partir da próxima semana, a taxa de entrega será de R$15,00 , mas o valor total deve permanecer R$135,00 . Portanto, o valor total das porções será: O novo valor por porção será:`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 158,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Em uma loja de defensivos agrícolas, os preços de 
alguns produtos foram divulgados em um cartaz. 
Sabe-se que 1 litro de defensivo do Tipo A é suficiente 
para aplicação em 0,5 hectare (ha), enquanto que 1 litro de 
defensivo do Tipo B é suficiente para aplicação em 0,4 ha. 
Um agricultor precisa comprar, nessa loja, uma quantidade 
de litros de defensivo suficiente para aplicar em uma área 
de 20 ha, além de levar uma máscara para aplicação. 
O valor mínimo, em real, a ser gasto pelo agricultor é`,
 images: ['/enem/2024/images/enem_2024_d2_q158.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`147,00.`},
 { id: 'B', type: 'text', value:`150,00.`},
 { id: 'C', type: 'text', value:`162,50.`},
 { id: 'D', type: 'text', value:`165,75.`},
 { id: 'E', type: 'text', value:`168,00.`},
 ],
 correct: 'C',
 explanation:`Para determinar o menor custo para o agricultor, precisamos calcular a quantidade de defensivo necessária para cobrir os 20 hectares e comparar os custos considerando as condições da promoção. Sabemos que 1 litro do defensivo tipo A cobre 0,5 hectares, enquanto 1 litro do defensivo tipo B cobre 0,4 hectares. Primeiramente, para o defensivo tipo A , a quantidade necessária para cobrir 20 hectares é calculada como 20 ÷ 0,5 = 40 litros. Com a compra de 40 litros, o agricultor já atende à condição da promoção (35 litros ou mais), ganhando a máscara de aplicação sem custo adicional. O custo total será apenas o valor dos 40 litros de defensivo tipo A: Agora, para o defensivo tipo B , a quantidade necessária para cobrir os mesmos 20 hectares é 20 ÷ 0,4 = 50 litros. Embora a quantidade exceda o necessário para a promoção, o tipo B não está incluído na oferta da máscara. Assim, além do custo dos 50 litros, o agricultor precisará adquirir a máscara por R$12,50. O custo total será Portanto, o menor custo é alcançado com o defensivo tipo B, totalizando R$162,50 .`,
 subject: ['mat'],
 topics: ['Geometria espacial', 'Questões aleatórias'],
 },
 {
 id: 159,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma tubulação despeja sempre o mesmo volume de 
água por unidade de tempo em uma caixa-d’água, o que 
significa dizer que a vazão de água nessa tubulação é 
constante. Na junção dessa tubulação com a caixa-d’água, 
está instalada uma membrana de filtragem cujo objetivo é 
filtrar eventuais impurezas presentes na água, combinado 
a um bom fluxo de água. O fluxo ( φ ) de água através 
da superfície da membrana é diretamente proporcional 
à vazão de água na tubulação, medida em mililitro por 
segundo, e inversamente proporcional à área da superfície 
da membrana, medida em centímetro quadrado. 
A unidade de medida adequada para descrever o fluxo 
( φ ) de água que atravessa a superfície da membrana é`,
 alternatives: [
 { id: 'A', type: 'text', value: `mL · s · cm²` },
 { id: 'B', type: 'text', value: `(mL/s) · cm²` },
 { id: 'C', type: 'text', value: `mL/(cm² · s)` },
 { id: 'D', type: 'text', value: `(cm² · s)/mL` },
 { id: 'E', type: 'text', value: `cm²/(mL · s)` },
 ],
 correct: 'C',
 explanation:`O fluxo de água (ϕ) que atravessa a superfície da membrana é: Diretamente proporcional à vazão de água na tubulação Inversamente proporcional à área da superfície da membrana Temos que as unidades são: Vazão: mL/s. Área: cm². A unidade de ϕ será: E isso corresponde à alternativa C.`,
 subject: ['mat'],
 topics: ['Porcentagem', 'Questões aleatórias'],
 },
 {
 id: 160,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma piscina tem capacidade de 2 500 000 litros. 
Seu sistema de abastecimento foi regulado para ter 
uma vazão constante de 6 000 litros de água por minuto. 
O mesmo sistema foi instalado em uma segunda 
piscina, com capacidade de 2 750 000 litros, e regulado 
para ter uma vazão, também constante, capaz de enchê-la 
em um tempo 20% maior que o gasto para encher 
a primeira piscina. 
A vazão do sistema de abastecimento da segunda piscina, 
em litro por minuto, é`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`8 250.`},
 { id: 'B', type: 'text', value:`7 920.`},
 { id: 'C', type: 'text', value:`6 545.`},
 { id: 'D', type: 'text', value:`5 500.`},
 { id: 'E', type: 'text', value:`5 280.`},
 ],
 correct: 'D',
 explanation:`A primeira piscina tem capacidade de 2.500.000 litros e é abastecida com uma vazão de 6.000 litros/minuto. O tempo para encher a primeira piscina é dado por: A segunda piscina tem capacidade de 2.750.000 litros e leva 20% mais tempo para ser preenchida. O tempo para encher a segunda piscina (t2​) é: A vazão (v2​) da segunda piscina é: A vazão do sistema de abastecimento da segunda piscina é 5.500 litros por minuto , correspondente à alternativa D .`,
 subject: ['mat'],
 topics: ['Histologia básica (tecidos – leitura de figura)', 'Questões aleatórias'],
 },
 {
 id: 161,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um tanque, em formato de paralelepípedo reto retângulo, tem em seu interior dois anteparos verticais, fixados na 
sua base e em duas paredes opostas, sendo perpendiculares a elas, conforme a figura. 
Esses anteparos, de espessuras desprezíveis, estão instalados de maneira a dividir a base do tanque em três 
retângulos congruentes, tendo suas alturas iguais à metade e a um quarto da altura do tanque. O tanque é abastecido 
por uma entrada situada no teto, através de um duto que despeja água a uma vazão constante, sendo necessárias 
12 horas para finalizar o seu enchimento. 
O gráfico que descreve, em cada instante, a maior altura de coluna de água, dentre aquelas que vão sendo formadas 
ao longo do enchimento do tanque, é`,
 images: ['/enem/2024/images/enem_2024_d2_q161.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value: `A` },
 { id: 'B', type: 'text', value: `B` },
 { id: 'C', type: 'text', value: `C` },
 { id: 'D', type: 'text', value: `D` },
 { id: 'E', type: 'text', value: `E` },
 ],
 correct: 'B',
 explanation:``,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 162,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma imobiliária iniciou uma campanha de divulgação 
para promover a venda de apartamentos que podem ser 
pagos em 100 parcelas mensais. O valor da primeira delas 
é fixado no momento da compra, com o pagamento dessa 
primeira parcela. A partir da segunda parcela, o valor é 
determinado pela aplicação de um acréscimo percentual 
fixo ao valor da parcela anterior. Como atrativo, a imobiliária 
fará o pagamento de todas as parcelas correspondentes 
ao mês de aniversário do comprador. 
Um cliente, que faz aniversário no mês de maio, 
decidiu comprar um desses apartamentos por meio do 
financiamento oferecido pela imobiliária, e pretende escolher 
o mês mais adequado para realizar essa compra, de modo 
que o valor total dos pagamentos seja o menor possível. 
Qual é o mês que esse cliente deverá escolher para 
realizar a compra do apartamento?`,
 alternatives: [
 { id: 'A', type: 'text', value:`Fevereiro.`},
 { id: 'B', type: 'text', value:`Abril.`},
 { id: 'C', type: 'text', value:`Maio.`},
 { id: 'D', type: 'text', value:`Junho.`},
 { id: 'E', type: 'text', value:`Agosto.`},
 ],
 correct: 'A',
 explanation:`Para pagar o menor valor total, o cliente deve fazer com que a última parcela do financiamento coincida com o mês de maio, já que as parcelas desse mês serão cobertas pela imobiliária. Como o financiamento é dividido em 100 parcelas, isso equivale a 8 anos e 4 meses (100 ÷ 12 = 8 anos completos e 4 meses adicionais). Assim, o primeiro mês de pagamento será 4 meses antes de maio no ciclo final. Portanto, o cliente deve iniciar o pagamento em fevereiro , garantindo que a última parcela caia em maio e, assim, reduza o valor total pago ao máximo`,
 subject: ['mat'],
 topics: ['Trigonometria', 'Questões aleatórias'],
 },
 {
 id: 163,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um sistema de polias circulares e correias é um dos 
mecanismos responsáveis pela transmissão de movimento 
em máquinas rotativas. O manual de um motor traz uma 
figura representando um sistema composto por duas polias 
e uma correia de transmissão, tensionada e perfeitamente 
ajustada sobre as polias, de modo a não apresentar folgas 
nos contatos com as polias. Considere que as partes 
dessa correia que não ficam em contato com as polias são 
representadas por segmentos de reta tangentes às polias. 
Para substituição dessa correia, é necessária a 
especificação de seu comprimento. 
Considere 3 como valor aproximado para π . 
A medida do comprimento dessa correia, em centímetro, é`,
 images: ['/enem/2024/images/enem_2024_d2_q163.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`54.`},
 { id: 'B', type: 'text', value:`60.`},
 { id: 'C', type: 'text', value:`66.`},
 { id: 'D', type: 'text', value:`68.`},
 { id: 'E', type: 'text', value:`72.`},
 ],
 correct: 'D',
 explanation:`Para resolver a questão, precisamos calcular o comprimento total da correia. A correia passa por dois arcos circulares e dois segmentos retos que tangenciam as polias. Arco menor : O arco menor, que corresponde a 150° do círculo da polia menor, tem um raio de 4 cm. Utilizamos a fórmula do comprimento do arco C = θ/360 × 2πr. Substituindo os valores: C = (150/360) . 2 . 3 . 4 = 10 cm. Arco maior : O arco maior, que corresponde a 210° do círculo da polia maior, tem um raio de 8 cm. Aplicamos a mesma fórmula: C = (210//360) . 2 . 3 . 8 = 28 cm. Segmentos retos : Os segmentos retos que ligam as tangentes às polias têm comprimento de 15 cm cada, conforme dado no enunciado. Comprimento total da correia : Somamos os comprimentos dos dois arcos e dos dois segmentos: 15 + 15 + 10 + 28 = 68cm. Portanto, o comprimento da correia é 68 cm .`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 164,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A prefeitura de uma cidade planeja construir três postos 
de saúde. Esses postos devem ser construídos em locais 
equidistantes entre si e de forma que as distâncias desses 
três postos ao hospital dessa cidade sejam iguais. Foram 
conseguidos três locais para a construção dos postos de 
saúde que apresentam as características desejadas, e 
que distam 10 km entre si, conforme o esquema, no qual o 
ponto H representa o local onde está construído o hospital; 
os pontos P 1 , P 2 e P 3 , os postos de saúde; e esses quatro 
pontos estão em um mesmo plano. 
A distância, em quilômetro, entre o hospital e cada um dos 
postos de saúde, é um valor entre`,
 images: ['/enem/2024/images/enem_2024_d2_q164.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`2 e 3.`},
 { id: 'B', type: 'text', value:`4 e 5.`},
 { id: 'C', type: 'text', value:`5 e 6.`},
 { id: 'D', type: 'text', value:`7 e 8.`},
 { id: 'E', type: 'text', value:`8 e 9.`},
 ],
 correct: 'C',
 explanation:`Para resolver essa questão, consideramos que o ponto HHH, onde será construído o hospital, é o centróide do triângulo equilátero P1, P2, P3​. O centróide divide a altura do triângulo em uma proporção de 2:1, sendo 2/3 da altura entre o vértice e o centróide, e 1/3 entre o centróide e o lado oposto. Altura do triângulo equilátero : A altura hhh de um triângulo equilátero com lado a = 10 km é calculada pela fórmula: Substituindo a = 10: Distância do centróide ao vértice : O ponto H divide a altura h na proporção 2:1. Assim, a distância do centróide ao vértice é: Aproximação numérica : Usando √3 ≈ 1,73, temos: A distância entre o hospital e cada um dos postos de saúde é aproximadamente 5,8 km , correspondendo à alternativa C (entre 5 e 6 km) .`,
 subject: ['mat'],
 topics: ['Estatística e probabilidade', 'Questões aleatórias'],
 },
 {
 id: 165,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Para melhorar o fluxo de ônibus em uma avenida que 
tem dois semáforos, a prefeitura reduzirá o tempo em 
que cada sinal ficará vermelho, que atualmente é de 15 
segundos a cada 60 segundos. Admita que o instante de 
chegada de um ônibus a cada semáforo é aleatório. 
O engenheiro de tráfego da prefeitura calculou a 
probabilidade de um ônibus encontrar cada um deles 
vermelho, obtendo 15 
60 
. A partir daí, estabeleceu uma 
mesma redução na quantidade do tempo, em segundo, 
em que cada sinal ficará vermelho, de maneira que 
a probabilidade de um ônibus encontrar ambos os 
sinais vermelhos numa mesma viagem seja igual a 
4 
100 , 
considerando os eventos independentes. 
Para isso, a redução do tempo em que o sinal ficará 
vermelho, em segundo, estabelecida pelo engenheiro foi de`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`1,35.`},
 { id: 'B', type: 'text', value:`3,00.`},
 { id: 'C', type: 'text', value:`9,00.`},
 { id: 'D', type: 'text', value:`12,60.`},
 { id: 'E', type: 'text', value:`13,80.`},
 ],
 correct: 'B',
 explanation:`Inicialmente, a probabilidade de o sinal ficar vermelho era 15/60. Após a mudança, a probabilidade de dois sinais ficarem vermelhos é 4/100​. Para que isso ocorra, a probabilidade de um único sinal ficar vermelho deve ser 2/10​, já que 2/10 ⋅ 2/10 = 4/100​. Convertendo 2/10 para o tempo em que o sinal fica vermelho, temos: Ou seja, o sinal ficará vermelho por 12 segundos. A redução no tempo foi de: Logo, a redução foi de 3 segundos , e a resposta correta é alternativa B . &nbsp;`,
 subject: ['mat'],
 topics: ['Geometria plana', 'Questões aleatórias'],
 },
 {
 id: 166,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A densidade demográfica de uma região é definida 
como sendo a razão entre o número de habitantes dessa 
região e sua área, expressa na unidade habitantes por 
quilômetro quadrado. 
Uma região R é subdividida em várias outras, sendo 
uma delas a região Q . A área de Q é igual a três quartos da 
área de R, e o número de habitantes de Q é igual à metade 
do número de habitantes de R. As densidades demográficas 
correspondentes a essas regiões são denotadas por d ( Q ) 
e d ( R ). 
A expressão que relaciona d ( Q ) e d ( R ) é`,
 alternatives: [
 { id: 'A', type: 'text', value: `d Q d R` },
 { id: 'B', type: 'text', value: `d Q d R E N E` },
 { id: 'C', type: 'text', value: `d Q d R M E N E 4` },
 { id: 'D', type: 'text', value: `E d Q d R N E` },
 { id: 'E', type: 'text', value: `d Q d R M E N E` },
 ],
 correct: 'E',
 explanation:`A densidade demográfica é definida como d = H/A​. Sabemos que: Substituímos na fórmula da densidade para Q:`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 167,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Atualmente, há telefones celulares com telas de 
diversos tamanhos e em formatos retangulares. Alguns 
deles apresentam telas medindo 3 1 
2 
 polegadas, com 
determinadas especificações técnicas. Além disso, em 
muitos modelos, com a inclusão de novas funções no 
celular, suas telas ficaram maiores, sendo muito comum 
encontrarmos atualmente telas medindo 4 5 
6 polegadas, 
conforme a figura. 
Disponível em: www.tecmundo.com.br. 
Acesso em: 5 nov. 2014 (adaptado). 
A diferença de tamanho, em valor absoluto, entre as 
medidas, em polegada, das telas do celular 2 e do celular 1, 
representada apenas com uma casa decimal, é`,
 images: ['/enem/2024/images/enem_2024_d2_q167.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`0,1.`},
 { id: 'B', type: 'text', value:`0,5.`},
 { id: 'C', type: 'text', value:`1,0.`},
 { id: 'D', type: 'text', value:`1,3.`},
 { id: 'E', type: 'text', value:`1,8.`},
 ],
 correct: 'D',
 explanation:`Para resolver a diferença entre os tamanhos das telas: Celular 1: polegadas Celular 2: polegadas Convertendo para números decimais: Agora, calculamos a diferença: Arredondando para uma casa decimal, temos 1,3 polegadas .`,
 subject: ['mat'],
 topics: ['Ondulatória', 'Questões aleatórias'],
 },
 {
 id: 168,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Projetistas de uma fábrica de amortecedores realizaram uma serie de experimentos que produziram oscilacoes 
semelhantes ao comportamento do gráfico de uma senoide, para qualquer tipo de estrada. Cada experimento teve 
duração de 20 minutos, sendo os 9 primeiros minutos em superfície que simula uma rodovia asfaltada, e os 11 minutos 
restantes em superfície que simula uma estrada de chão. 
Para os amortecedores serem aprovados no experimento, exige-se que as amplitudes das ondas oscilatorias, em 
cada tipo de superfície, sejam constantes e, ainda, que a amplitude da oscilacao do amortecedor no asfalto seja menor 
do que sua amplitude da oscilação na estrada de chão. 
O tipo de gráfico que descreve o comportamento oscilatório de um amortecedor aprovado nesse experimento é`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value: `A` },
 { id: 'B', type: 'text', value: `B` },
 { id: 'C', type: 'text', value: `C` },
 { id: 'D', type: 'text', value: `D` },
 { id: 'E', type: 'text', value: `E` },
 ],
 correct: 'A',
 explanation:`Quando a amplitude aumenta, no gráfico, a “altura” da função também aumenta, tanto para os valores positivos quanto para os negativos (observados no eixo y). A questão estabelece que a amplitude inicial, durante os primeiros 9 minutos (no asfalto), deve ser menor que a amplitude a partir dos 9 minutos (na estrada de chão) e que ambas devem permanecer constantes em seus respectivos intervalos. Assim, buscamos um gráfico onde a &#8220;altura&#8221; no eixo y seja menor no início e aumente de forma clara após os 9 minutos, mantendo-se constante em cada intervalo. O gráfico que apresenta essas características é o da alternativa A , pois atende perfeitamente às condições descritas.`,
 subject: ['mat'],
 topics: ['Zoologia', 'Questões aleatórias'],
 },
 {
 id: 169,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A criptografia refere-se à construção e análise de protocolos que impedem terceiros de lerem mensagens privadas. 
Júlio César, imperador romano, utilizava um código para proteger as mensagens enviadas a seus generais. Assim, 
se a mensagem caísse em mãos inimigas, a informação não poderia ser compreendida. Nesse código, cada letra do 
alfabeto era substituída pela letra três posições à frente, ou seja, o “A” era substituido pelo “D”, o “B” pelo “E”, o “C” 
pelo “F”, e assim sucessivamente.`,
 images: ['/enem/2024/images/enem_2024_d2_q169.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value: `25 25 25 24 23 1 + +` },
 { id: 'B', type: 'text', value: `25 24 23 1 1 1 × ×` },
 { id: 'C', type: 'text', value: `25 24 23 24 23 1 × ×` },
 { id: 'D', type: 'text', value: `25 25 25 24 23 1 × ×` },
 { id: 'E', type: 'text', value: `25 24 23` },
 ],
 correct: 'E',
 explanation:`Considerando 26 letras no alfabeto, o código criptografado tem 25 possibilidades diferentes (excluindo a possibilidade de associar uma letra a ela mesma). Para que o padrão seja descoberto apenas na terceira tentativa, é necessário errar nas duas primeiras e acertar na terceira. Dentre as 25 possibilidades, 24 são incorretas e 1 é correta. A probabilidade de errar na primeira tentativa é 24/25​. Na segunda tentativa, restam 24 opções, das quais 23 são incorretas, então a probabilidade é 23/24​. Na terceira tentativa, sobra apenas a opção correta, com probabilidade 1/23​. Logo, a probabilidade desejada é: Portanto, a resposta é a alternativa D.`,
 subject: ['mat'],
 topics: ['Energia e recursos naturais', 'Questões aleatórias'],
 },
 {
 id: 170,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Em uma região com grande incidência de terremotos, observou-se que dois terremotos ocorridos apresentaram 
magnitudes M 1 e M 2 , medidos segundo a escala Richter, e liberaram energias iguais a E 1 e E 2 , respectivamente. Entre 
os estudiosos do assunto, é conhecida uma expressão algébrica relacionando esses valores dada por 
2 
3 
 
 
 
M 
M 
E 
E 
2 
1 
2 
Estudos mais abrangentes observaram que o primeiro terremoto apresentou a magnitude M 1 = 6,9 e a energia 
liberada foi um décimo da observada no segundo terremoto. 
O valor aproximado da magnitude M 2 do segundo terremoto, expresso com uma casa decimal, e igual a`,
 alternatives: [
 { id: 'A', type: 'text', value: `5,4.` },
 { id: 'B', type: 'text', value: `6,2.` },
 { id: 'C', type: 'text', value: `7,6.` },
 { id: 'D', type: 'text', value: `8,2.` },
 { id: 'E', type: 'text', value: `8,4.` },
 ],
 correct: 'C',
 explanation:`A fórmula da escala Richter é: Com M1 = 6,9 e E2/E1 = 10, substituímos: Sabendo que log⁡(10) = 1, temos:`,
 subject: ['mat'],
 topics: ['Genética', 'Questões aleatórias'],
 },
 {
 id: 171,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um jardineiro dispõe de k metros lineares de cerca baixa para fazer um jardim ornamental. O jardim, delimitado 
por essa cerca, deve ter a forma de um triângulo equilatero, um quadrado ou um hexágono regular. A escolha sera 
pela forma que resulte na maior área. 
O jardineiro escolherá a forma de`,
 alternatives: [
      { id: 'A', type: 'text', value: `hexágono regular, pois a área do jardim, em metro quadrado, será k²√3/24.` },
      { id: 'B', type: 'text', value: `hexágono regular, pois a área do jardim, em metro quadrado, será 3k²√3/2.` },
      { id: 'C', type: 'text', value: `quadrado, pois a área do jardim, em metro quadrado, será k²/16.` },
      { id: 'D', type: 'text', value: `triângulo equilátero, pois a área do jardim, em metro quadrado, será k²√3/36.` },
      { id: 'E', type: 'text', value: `triângulo equilátero, pois a área do jardim, em metro quadrado, será k²√3/4.` },

 ],
 correct: 'A',
 explanation:`Triângulo equilátero A área do triângulo é dada por: Como o lado é k/3, substituímos: Quadrado A área do quadrado é dada por: Como o lado é k/4, substituímos: Hexágono regular A área do hexágono é dada por: Como o lado é k/6, substituímos: Simplificando: A forma com a maior área é o hexágono regular, pois sua área é maior em comparação com as outras figuras. A resposta correta é a alternativa A .`,
 subject: ['mat'],
 topics: ['Cinemática', 'Questões aleatórias'],
 },
 {
 id: 172,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um aeroporto disponibiliza o serviço de transporte gratuito entre seus dois terminais utilizando os ônibus A e B, que
partem simultaneamente, de hora em hora, de terminais diferentes. A distância entre os terminais é de 9 000 metros,
e o percurso total dos ônibus, de um terminal ao outro, é monitorado por um sistema de cinco câmeras que cobrem
diferentes partes do trecho, conforme o esquema.
O alcance de cada uma das cinco câmeras é:
• câmera I: 1/5 do percurso;
• câmera II: 3/10 do percurso;
• câmera III: 1/10 do percurso;
• câmera IV: 1/10 do percurso;
• câmera V: 3/10 do percurso.
Em determinado horário, o ônibus A parte do terminal 1 e realiza o percurso total com velocidade constante de
250 m/min; enquanto o ônibus B, que parte do terminal 2, realiza o percurso total com velocidade constante de 150 m/min.
Qual câmera registra o momento em que os ônibus A e B se encontram?`,
 images: ['/enem/2024/images/enem_2024_d2_q172.jpg'],
 alternatives: [
      { id: 'A', type: 'text', value:`I`},
      { id: 'B', type: 'text', value:`II`},
      { id: 'C', type: 'text', value:`III`},
      { id: 'D', type: 'text', value:`IV`},
      { id: 'E', type: 'text', value:`V`},

 ],
 correct: 'D',
 explanation:`Os ônibus A e B partem simultaneamente em sentidos opostos, com velocidades de 250 m/min e 150 m/min, respectivamente. A distância total é 9000 metros, e a taxa de aproximação combinada é 250 + 150 = 400 m/min. O tempo para o encontro será: O ônibus A percorre 250⋅22,5=5625 metros e o ônibus B percorre 150⋅22,5=3375 metros. O ônibus A, que parte do Terminal 1, percorreu 5625 metros. Verificando os alcances das câmeras: Câmera III termina em 5400 metros, Câmera IV termina em 6300 metros. Logo, o encontro ocorre no trecho da Câmera IV .`,
 subject: ['mat'],
 topics: ['Estatística e probabilidade', 'Questões aleatórias'],
 },
 {
 id: 173,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma empresa tem 400 funcionários, distribuídos em 
três setores: administrativo, logística e produção. O gráfico 
apresenta a distribuição quantitativa desses funcionários, 
por setor e por faixa etária. 
Uma viagem de férias será sorteada entre esses 
funcionários, de forma que todos terão igual probabilidade 
de serem sorteados. 
A maior probabilidade é que o funcionário sorteado esteja 
na faixa etária`,
 images: ['/enem/2024/images/enem_2024_d2_q173.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`entre 25 e 45 anos, pois é a faixa etária com maior 
quantidade de funcionários.`},
 { id: 'B', type: 'text', value:`entre 25 e 45 anos, pois é a única faixa etária cujas 
porcentagens são maiores do que as porcentagens 
mínimas de cada setor.`},
 { id: 'C', type: 'text', value:`até 25 anos, pois é a única faixa etária cujos percentuais 
associados aos setores aumentam com o aumento da 
quantidade de funcionários por setor.`},
 { id: 'D', type: 'text', value:`até 25 anos, pois é a faixa etária que apresenta maior 
quantidade de funcionários no setor de produção, 
que é o setor que emprega metade dos funcionários 
dessa empresa.`},
 { id: 'E', type: 'text', value:`a partir de 45 anos, pois a soma das porcentagens
associadas a essa faixa etária é 110%, que é maior do
que as respectivas somas associadas às outras faixas
etárias, que são 105% e 85%.`},
 ],
 correct: 'A',
 explanation:`A empresa tem 400 funcionários , distribuídos da seguinte forma: Administrativo: 80 funcionários. Logística: 120 funcionários. Produção: 200 funcionários. As porcentagens em cada setor são: Administrativo: 50% a partir de 45 anos, 30% entre 25 e 45 anos, 20% até 25 anos. Logística: 35% a partir de 45 anos, 40% entre 25 e 45 anos, 25% até 25 anos. Produção: 25% a partir de 45 anos, 35% entre 25 e 45 anos, 40% até 25 anos. Administrativo : Total de 80 funcionários. A partir de 45 anos: 50% ⋅ 80 = 40. Entre 25 e 45 anos: 30% ⋅ 80 = 24. Até 25 anos: 20% ⋅ 80 = 16. Logística : Total de 120 funcionários. A partir de 45 anos: 35% ⋅ 120 = 42. Entre 25 e 45 anos: 40% ⋅ 120 = 48. Até 25 anos: 25% ⋅ 120 = 30. Produção : Total de 200 funcionários. A partir de 45 anos: 25% ⋅ 200 = 50. Entre 25 e 45 anos: 35% ⋅ 200 = 70. Até 25 anos: 40% ⋅ 200 = 80. A partir de 45 anos : 40 + 42 + 50 = 132. Entre 25 e 45 anos : 24 + 48 + 70 = 142. Até 25 anos : 16 + 30 + 80 = 126. A faixa etária entre 25 e 45 anos apresenta a maior quantidade de funcionários somando os três setores. Assim, a probabilidade de o funcionário sorteado pertencer a essa faixa etária é a maior.`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 174,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Em um jogo virtual para celular, um personagem pode 
percorrer trajetórias retilíneas voando ou se deslocando ao 
longo de paredes. Considere que o personagem descreve 
a trajetória ABCDEF , em que os pontos`,
 images: ['/enem/2024/images/enem_2024_d2_q174.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value: `A` },
 { id: 'B', type: 'text', value: `B` },
 { id: 'C', type: 'text', value: `C` },
 { id: 'D', type: 'text', value: `D` },
 { id: 'E', type: 'text', value: `E` },
 ],
 correct: 'C',
 explanation:`A projeção ortogonal, sobre o plano da base, da trajetória ABCDEF descrita pelo personagem é dada por: (observe a projeção no plano da base na cor preta na figura da esquerda e na cor vermelha, como nas alternativas, na figura da direita).`,
 subject: ['mat'],
 topics: ['Geometria espacial', 'Questões aleatórias'],
 },
 {
 id: 175,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma indústria faz uma parceria com uma distribuidora 
de sucos para lançar no mercado dois tipos de 
embalagens. Para a fabricação dessas embalagens, 
a indústria dispõe de folhas de alumínio retangulares, 
de dimensões 10 cm por 20 cm. Cada uma dessas 
folhas é utilizada para formar a superfície lateral da 
embalagem, em formato de cilindro circular reto, que 
posteriormente recebe fundo e tampa circulares. A figura 
ilustra, dependendo de qual das duas extensões será 
utilizada como altura, as duas opções para formar a 
possível embalagem. 
Dentre essas duas embalagens, a de maior capacidade 
apresentará volume, em centímetro cúbico, igual a`,
    images: ['/enem/2024/images/enem_2024_d2_q175.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`4 000 π`},
 { id: 'B', type: 'text', value:`2 000 π
4 000`},
 { id: 'C', type: 'text', value:`4 000 
π`},
 { id: 'D', type: 'text', value:`1000 
π`},
 { id: 'E', type: 'text', value:`500 
π`},
 ],
 correct: 'D',
 explanation:`Na embalagem 1, a folha de alumínio tem 10 cm como comprimento da circunferência e 20 cm como altura. Assim, a circunferência da base é: Agora, calculamos o volume: Simplificando: Na embalagem 2, a folha de alumínio tem 20 cm como comprimento da circunferência e 10 cm como altura. Assim, a circunferência da base é: Agora, calculamos o volume: Simplificando: Comparando os volumes, temos Portanto, o volume da embalagem 2 é maior. &nbsp;`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 176,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`As receitas anuais obtidas por uma indústria no período 
de 2014 a 2021, em milhão de reais, foram registradas, por 
pontos, em um gráfico. Nele, também está representada a 
reta que descreve a tendência de evolução das receitas. 
Essa reta pode ser utilizada para estimar as receitas dos 
anos seguintes. 
A estimativa da receita, em milhão de reais, dessa 
indústria, para o ano de 2026, obtida a partir dessa reta 
de tendência, é`,
 images: ['/enem/2024/images/enem_2024_d2_q176.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`7.`},
 { id: 'B', type: 'text', value:`8.`},
 { id: 'C', type: 'text', value:`9.`},
 { id: 'D', type: 'text', value:`10.`},
 { id: 'E', type: 'text', value:`11.`},
 ],
 correct: 'B',
 explanation:`Analisando o gráfico, observamos que: Em 2014, a receita foi de 4 milhões de reais. De 2014 a 2017, a receita aumentou de 4 milhões para 5 milhões, ou seja, variou 1 milhão em 3 anos. De 2017 a 2020, a receita aumentou novamente 1 milhão, atingindo 6 milhões. A tendência mostra que a receita aumenta 1 milhão a cada 3 anos . Seguindo essa lógica: Em 2023, a receita será 7 milhões. Em 2026, a receita será 8 milhões. A estimativa da receita para o ano de 2026 é 8 milhões, correspondente à alternativa B .`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 177,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma empresa produz mochilas escolares sob 
encomenda. Essa empresa tem um custo total de produção, 
composto por um custo fixo, que não depende do número 
de mochilas, mais um custo variável, que é proporcional 
ao número de mochilas produzidas. O custo total cresce 
de forma linear, e a tabela apresenta esse custo para três 
quantidades de mochilas produzidas. 
 
O custo total, em real, para a produção de 80 mochilas será`,
    images: ['/enem/2024/images/enem_2024_d2_q177.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`2 400,00.`},
 { id: 'B', type: 'text', value:`2 520,00.`},
 { id: 'C', type: 'text', value:`2 550,00.`},
 { id: 'D', type: 'text', value:`2 700,00.`},
 { id: 'E', type: 'text', value:`2 800,00.`},
 ],
 correct: 'C',
 explanation:`Podemos resolver esta questão observando a variação do custo total em relação à quantidade de mochilas produzidas. Quando a produção aumenta em 20 unidades (de 30 para 50 mochilas), o custo total aumenta em R$600,00 (de R$1050,00 para R$1650,00). Assim, deduzimos que, para um aumento de 10 unidades, o custo varia em R$300,00. Se queremos calcular o custo de produção para 80 mochilas, devemos considerar um aumento de 30 unidades em relação às 50 mochilas. Como 10 unidades equivalem a um aumento de R$300,00, 30 unidades resultam em um aumento de R$900,00. Somando esse valor ao custo total de 50 mochilas, temos: 1650 + 900 = 2550,00. O custo total para a produção de 80 mochilas será, portanto, R$2550,00 .`,
 subject: ['mat'],
 topics: ['Estatística e probabilidade', 'Questões aleatórias'],
 },
 {
 id: 178,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`A umidade relativa do ar é um dos indicadores utilizados 
na meteorologia para fazer previsões sobre o clima. 
O quadro apresenta as médias mensais, em porcentagem, 
da umidade relativa do ar em um período de seis meses 
consecutivos em uma cidade. 
 (%) 
Nessa cidade, a mediana desses dados, em porcentagem, 
da umidade relativa do ar no período considerado foi`,
    images: ['/enem/2024/images/enem_2024_d2_q178.jpg'],
 alternatives: [
 { id: 'A', type: 'text', value:`56.`},
 { id: 'B', type: 'text', value:`58.`},
 { id: 'C', type: 'text', value:`59.`},
 { id: 'D', type: 'text', value:`60.`},
 { id: 'E', type: 'text', value:`62.`},
 ],
 correct: 'E',
 explanation:`A mediana é o valor central de um conjunto de dados organizados em ordem crescente ou decrescente. Para um número par de dados, a mediana é a média aritmética dos dois valores centrais. Os valores da umidade relativa do ar são: Organizamos os valores em ordem crescente: Como temos 6 valores , a mediana será a média dos dois valores centrais, que são 60 e 64.:`,
 subject: ['mat'],
 topics: ['Genética', 'Questões aleatórias'],
 },
 {
 id: 179,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Uma empresa de engenharia foi contratada para 
realizar um serviço no valor de R$ 71 250,00. Os sócios da 
empresa decidiram que 40% desse valor seria destinado ao 
pagamento de três engenheiros que gerenciaram o serviço. 
O pagamento para cada um deles será feito de forma 
diretamente proporcional ao total de horas trabalhadas. 
O número de dias e o número de horas diárias 
trabalhadas pelos engenheiros foram, respectivamente: 
• engenheiro I: 4 dias, numa jornada de 5 horas e 
meia por dia; 
• engenheiro II: 5 dias, numa jornada de 4 horas por dia; 
• engenheiro III: 6 dias, numa jornada de 2 horas e 
meia por dia. 
Qual a maior diferença, em real, entre os valores recebidos 
por esse serviço entre dois desses engenheiros?`,
 images: null,
 alternatives: [
 { id: 'A', type: 'text', value:`1 000`},
 { id: 'B', type: 'text', value:`1 500`},
 { id: 'C', type: 'text', value:`3 500`},
 { id: 'D', type: 'text', value:`3 800`},
 { id: 'E', type: 'text', value:`5 250`},
 ],
 correct: 'C',
 explanation:`Primeiro, calculamos o valor total destinado aos engenheiros. Sabemos que 40% do valor total do serviço, R$71.250,00, será destinado aos engenheiros: Agora, determinamos o total de horas trabalhadas pelos três engenheiros: Engenheiro I : 4 ⋅ 5,5 = 22 horas Engenheiro II : 5 ⋅ 4 = 20 horas Engenheiro III : 6 ⋅ 2,5 = 15 horas O total de horas trabalhadas pelos engenheiros é:22 + 20 + 15 = 57 horas. Agora, calculamos o valor recebido por hora: Sabendo o valor por hora, calculamos o valor recebido por cada engenheiro. Abaixo, organizamos essas informações em uma tabela: Por fim, calculamos a maior diferença entre os valores recebidos. Ela ocorre entre o Engenheiro I (R$11.000,00) e o Engenheiro III (R$7.500,00): A maior diferença nos valores recebidos é R$3.500,00 , correspondente à alternativa C .`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
 {
 id: 180,
 exam: 'enem',
 year: 2024,
 day: 2,
 text:`Um hospital tem 7 médicos cardiologistas e 6 médicos 
neurologistas em seu quadro de funcionários. Para 
executar determinada atividade, a direção desse hospital 
formará uma equipe com 5 médicos, sendo, pelo menos, 
3 cardiologistas. 
A expressão numérica que representa o número máximo 
de maneiras distintas de formar essa equipe é`,
 alternatives: [
 { id: 'A', type: 'text', value: `A` },
 { id: 'B', type: 'text', value: `B` },
 { id: 'C', type: 'text', value: `C` },
 { id: 'D', type: 'text', value: `D` },
 { id: 'E', type: 'text', value: `E` },
 ],
 correct: 'E',
 explanation:`O hospital precisa formar uma equipe de 5 médicos, sendo pelo menos 3 cardiologistas . Isso significa que a equipe pode ter: 3 cardiologistas e 2 neurologistas; 4 cardiologistas e 1 neurologista; 5 cardiologistas. Para cada caso, calculamos o número de combinações possíveis e somamos. A combinação é dada por: onde n é o total de médicos no grupo e k é o número de médicos escolhidos. 3 cardiologistas e 2 neurologistas : 4 cardiologistas e 1 neurologista : cardiologistas : Expressão total: Essa é a expressão detalhada, e ela está representada corretamente na alternativa E`,
 subject: ['mat'],
 topics: ['Interpretação de texto', 'Questões aleatórias'],
 },
];

export default ENEM_2024_D2;
