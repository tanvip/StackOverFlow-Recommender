var qList = [
  {
    "index": 3,
    "votes": 0,
    "tags": [
      "java",
      "web-services",
      "security",
      "tomcat",
      "ssl"
    ],
    "timestamp": 1419983244,
    "question": "Tomcat - From HTTPS page to HTTP",
    "answers": 0,
    "content": "<p>In Tomcat 8  I enabled TLS connector for secure data transmission  and I created a security constraint in my web.xml. Through the site menu  the user can go to a login page  or to the home page. Upon arriving at the login page  as I have set the security constraint  the user's browser starts a TLS communication. If the user clicks on the index menu (home)  he returns to the home page  but remains an HTTPS communication. And I do not know for what reason this is happening. </p>\\n\\n<p>Could someone tell me if this is a normal behavior of Tomcat  and if there is any possibility (not mentioned in the <a href=\\http://stackoverflow.com/a/15569938/2910546\\\">other answer</a> of another user - 2013) today (almost 2015) for this to be changed and the user returns to communicate via HTTP? For what reason redirect HTTPS to HTTP is a costly process? There is another way?</p>\\n\\n<p>All that I find on the internet is about changing an HTTP communication to HTTPS  but that's not what I'm looking for. I already know how to do that. I'm just avoiding that when communication change from HTTP to HTTPS it stays in HTTPS even if the user try to access all the other pages of my application. I do not want that. It makes no sense for the user to access the home page with a HTTPS communication.</p>\\n\\n<p>For me  it makes little sense Tomcat react that way. For what reason Tomcat do that? Moreover  even if things are so  for what reason Tomcat developers limit it at this point? Do the web sites today do not allow it?</p>\\n\\n<p><strong>NOTE</strong>: I am currently using Spring MVC  Tomcat 8.0.15  and Eclipse Luna Service.</p>\\n\\n<p>Thank you for your time and attention.</p>\\n\\n<hr>\\n\\n<p>I know that something very similar has already been asked here before:</p>\\n\\n<p><a href=\\\"http://stackoverflow.com/questions/15564641/tomcat-can-i-force-non-https\\\">Tomcat - can i force NON https?</a></p>\\n\\n<p><strong>Please</strong>: Notice that there are differences in my question. I ask the moderators to read it and interpret it before simply click the close button. Furthermore  face the text as a whole  as all being the question. Do not try to go out searching for the question mark (?). I'm showing a situation.</p>\\n\"",
    "recos": [
      201324,
      71956,
      164487,
      76554
    ]
  },
  {
    "index": 4,
    "votes": 50,
    "tags": [
      "java",
      "arrays"
    ],
    "timestamp": 1419982848,
    "question": "Separating array in other arrays",
    "answers": 20,
    "content": "<p>I have an array that I need to split in different arrays. I have an array of Strings and need to split it in different pages (different arrays).</p>\\n\\n<p>At first  I get the length of the array  using</p>\\n\\n<pre><code>int size = array.length;\\n</code></pre>\\n\\n<p>And then  I get the number of pages I need  knowing that each page should only have 10 Strings</p>\\n\\n<pre><code>int numberOfPages = (int) Math.floor(size/10);\\n</code></pre>\\n\\n<p>The user then select which page he wants to see</p>\\n\\n<pre><code>int pageSelected = 2;\\n</code></pre>\\n\\n<p>After that  I tried to split the array  but got some exceptions. I tried:</p>\\n\\n<pre><code>Arrays.copyOfRange(array (0+10*(pageSelected-1) 10*10+(pageSelected-1)));\\n</code></pre>\\n\\n<p>I get an exception when I try to print the values of the new array.</p>\\n\\n<p>Is there anyway to split an array in 'pages'  and display these 'pages' as requestes?</p>\\n\\n<p>@Edit1\\nI get a Nullpointer Exception</p>\\n",
    "recos": [
      89152,
      58668,
      35558,
      72704
    ]
  },
  {
    "index": 5,
    "votes": 0,
    "tags": [
      "java",
      "hibernate",
      "postgresql"
    ],
    "timestamp": 1419982310,
    "question": "Hibernate HQL Join with composite Key",
    "answers": 1,
    "content": "<p>i'm having some problems trying to write a HQL query to \\njoin two entities/tables as below defined</p>\\n\\n<p>CustomersDAO.java\\n</p>\\n\\n<pre><code>@Entity\\n@Table(name=\\customers\\\")\\npublic class CustomerDAO implements Serializable {\\n\\nprivate static final long serialVersionUID = 1L;\\n\\n@EmbeddedId \\nprivate CustomerNaming name;\\n\\n@ManyToOne\\n@Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE) \\n@JoinColumns({ @JoinColumn (name=\\\"city\\\")  @JoinColumn(name=\\\"state\\\") @JoinColumn(name=\\\"via\\\") })\\nprivate Address indirizzo;\\n\\n@Column (name=\\\"email\\\")\\nprivate String email;\\n\\n@Column (name=\\\"mailinglist\\\")\\nprivate boolean mailinglist;\\n\\n@Column (name=\\\"sex\\\")\\nprivate String sex;\\n\\npublic CustomerDAO()\\n{\\n    indirizzo=new Address();\\n    name=new CustomerNaming();\\n}\\n\\n\\n\\npublic CustomerNaming getNome() {\\n    return name;\\n}\\npublic void setNome(CustomerNaming nome) {\\n    this.name = nome;\\n}\\n\\npublic Address getIndirizzo() {\\n    return indirizzo;\\n}\\npublic void setIndirizzo(Address indirizzo) {\\n    this.indirizzo = indirizzo;\\n}\\npublic String getEmail() {\\n    return email;\\n}\\npublic void setEmail(String email) {\\n    this.email = email;\\n}\\npublic boolean isMailinglist() {\\n    return mailinglist;\\n}\\npublic void setMailinglist(boolean mailinglist) {\\n    this.mailinglist = mailinglist;\\n}\\npublic String getSex() {\\n    return sex;\\n}\\npublic void setSex(String sex) {\\n    this.sex = sex;\\n}\\n\\n@Override\\npublic String toString() {\\n    return \\\"Customer :  [nome=\\\" + name.getNome()\\n            + \\\"  cognome=\\\" + name.getCognome() + \\\"  indirizzo=\\\" + indirizzo\\n            + \\\"  email=\\\" + email + \\\"  mailinglist=\\\" + mailinglist\\n            + \\\"  sex=\\\" + sex + \\\"]\\\";\\n}\\n\\n\\n}\\n</code></pre>\\n\\n<p>CustomerNaming.java</p>\\n\\n<pre class=\\\"lang-java prettyprint-override\\\"><code>@Embeddable\\npublic class CustomerNaming implements Serializable {\\n\\n/**\\n * \\n */\\nprivate static final long serialVersionUID = 1L;\\n\\n@Column (name=\\\"nome\\\")\\nprivate String nome;\\n\\n@Column (name=\\\"cognome\\\")\\nprivate String cognome;\\n\\npublic String getNome() {\\n    return nome;\\n}\\npublic void setNome(String nome) {\\n    this.nome = nome;\\n}\\npublic String getCognome() {\\n    return cognome;\\n}\\npublic void setCognome(String cognome) {\\n    this.cognome = cognome;\\n}\\n\\n\\n\\n}\\n</code></pre>\\n\\n<p>Address.java\\n</p>\\n\\n<pre><code>@Entity\\n@Table(name=\\\"indirizzi\\\")\\npublic class Address implements Serializable {\\n/**\\n * \\n */\\nprivate static final long serialVersionUID = 1L;\\n\\n@EmbeddedId\\nprivate AddressKey key;\\n\\n@Column (name=\\\"cap\\\")\\nprivate String cap;\\n//private ArrayList&lt;State&gt; state=new ArrayList&lt;State&gt;();\\n\\npublic Address(){\\n    key=new AddressKey();\\n}\\n\\npublic AddressKey getKey() {\\n    return key;\\n}\\n\\npublic void setKey(AddressKey key) {\\n    this.key = key;\\n}\\n\\npublic String getCap() {\\n    return cap;\\n}\\npublic void setCap(String cap) {\\n    this.cap = cap;\\n}\\n\\n\\n}\\n</code></pre>\\n\\n<p>AddressKey.java</p>\\n\\n<pre class=\\\"lang-java prettyprint-override\\\"><code>@Embeddable\\npublic class AddressKey implements Serializable{\\n\\n/**\\n * \\n */\\nprivate static final long serialVersionUID = 1L;\\n\\n@Column(name=\\\"via\\\"  nullable=false)\\nprivate String via;\\n@Column (name=\\\"city\\\"  nullable=false)\\nprivate String city;\\n@Column (name=\\\"state\\\"  nullable=false)\\nprivate String state;\\n\\npublic String getState() {\\n    return state;\\n}\\npublic void setState(String state) {\\n    this.state = state;\\n}\\npublic String getVia() {\\n    return via;\\n}\\npublic void setVia(String via) {\\n    this.via = via;\\n}\\npublic String getCity() {\\n    return city;\\n}\\npublic void setCity(String city) {\\n    this.city = city;\\n}\\n\\n}\\n</code></pre>\\n\\n<p>As you can see i have (to try this...i'm still learning hibernate...)\\ncreate a composite PK in address  mapped by AddressKey</p>\\n\\n<p>so i have to create a composite join to do the search  but without success</p>\\n\\n<p>this is my last (not best...lol) try...</p>\\n\\n<pre><code>        Query q=s.createQuery(\\\"FROM CustomerDAO cust JOIN (cust.indirizzo.key.via   cust.indirizzo.key.city    cust.indirizzo.key.state) as indirizzo WHERE  cust.name.nome=:nome and cust.name.cognome like :cognome and cust.indirizzo.key.via like :via and cust.indirizzo.key.city like :city and cust.indirizzo.cap like :cap and cust.indirizzo.key.state like :state and cust.sex like :sex and c.email like :mail and cust.mailinglist like :mailinglist\\\")\\n                .setString(\\\"nome\\\" \\\"\\\\'%\\\"+c.getNome().getNome()+\\\"%\\\\'\\\")\\n                .setString(\\\"cognome\\\"  c.getNome().getCognome())\\n                .setString(\\\"via\\\"  c.getIndirizzo().getKey().getVia())\\n                .setString(\\\"city\\\"  c.getIndirizzo().getKey().getCity())\\n                .setString(\\\"cap\\\"  c.getIndirizzo().getCap())\\n                .setString(\\\"state\\\"  c.getIndirizzo().getKey().getState())\\n                .setString(\\\"sex\\\"  c.getSex())\\n                .setString(\\\"mail\\\" c.getEmail());\\n        if(q!=null)\\n            customers=(List&lt;Object[]&gt;)q.list();\\n</code></pre>\\n\\n<p>In some case i've received a null Query from createQuery...</p>\\n\\n<p>in this case...it simply can't recognise the query</p>\\n\\n<pre><code> org.hibernate.hql.ast.QuerySyntaxException: unexpected token: ( near line 1  column 43 [FROM myapp.customer.CustomerDAO cust JOIN (cust.indirizzo.key.via   cust.indirizzo.key.city    cust.indirizzo.key.state) as indirizzo WHERE  cust.name.nome=:nome and cust.name.cognome like :cognome and cust.indirizzo.key.via like :via and cust.indirizzo.key.city like :city and cust.indirizzo.cap like :cap and cust.indirizzo.key.state like :state and cust.sex like :sex and c.email like :mail and cust.mailinglist like :mailinglist]\\n</code></pre>\\n\\n<p>note than a simpler search as below written works perfectly...</p>\\n\\n<pre><code>List&lt;CustomerDAO&gt; customers=(List&lt;CustomerDAO&gt;)(s.createQuery(\\\"from CustomerDAO where nome=:nome and cognome=:cognome\\\").setString(\\\"nome\\\"  nome).setString(\\\"cognome\\\"  cognome)).list();\\n</code></pre>\\n\\n<p>thanks for any help</p>\\n\\n<p>regards\\nUmberto</p>\\n\"",
    "recos": [
      205224,
      165153,
      183309,
      17222
    ]
  },
  {
    "index": 6,
    "votes": 0,
    "tags": [
      "java",
      "swing"
    ],
    "timestamp": 1419981996,
    "question": "Add JTree to JPanel in a ActionPerformed",
    "answers": 1,
    "content": "<p>Here is the Complete Verifiable Minimal Example of my problem  I believe and hope.\\nIf the JTree created with a DefaultMutableTreeNode added directly from the initialize () method adds me correctly (The line annotated code). But if I try from ActionPerformed method for you to operate a button  the JTree does not appear.</p>\\n\\n<pre><code>public class Window {\\nprivate JFrame frame;\\n\\n/**\\n * Launch the application.\\n */\\npublic static void main(String[] args) {\\n    EventQueue.invokeLater(new Runnable() {\\n        public void run() {\\n            try {\\n                Window window = new Window();\\n                window.frame.setVisible(true);\\n            } catch (Exception e) {\\n                e.printStackTrace();\\n            }\\n        }\\n    });\\n}\\n\\n/**\\n * Create the application.\\n */\\npublic Window() {\\n    initialize();\\n}\\n\\n/**\\n * Initialize the contents of the frame.\\n */\\nprivate void initialize() {\\n    frame = new JFrame();\\n    frame.setBounds(100  100  450  300);\\n    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);\\n\\n    JMenuBar menuBar = new JMenuBar();\\n    frame.getContentPane().add(menuBar  BorderLayout.NORTH);\\n\\n    JMenu mnAbrir = new JMenu(\\Open\\\");\\n    menuBar.add(mnAbrir);\\n\\n    JMenuItem mntmAbrirXml = new JMenuItem(\\\"Open JTree\\\");\\n    mntmAbrirXml.addActionListener(new ActionListener() {\\n\\n        @Override\\n        public void actionPerformed(ActionEvent e) {\\n            DefaultMutableTreeNode mutable = new DefaultMutableTreeNode();\\n            JTree tree = new JTree(mutable);\\n            JPanel panel = new JPanel();\\n            panel.setLayout(new BorderLayout());\\n            panel.add(tree);\\n            frame.getContentPane().add(panel  BorderLayout.CENTER);\\n            //System.out.println(\\\"Is into ActionPerformed\\\");\\n\\n        }\\n    });\\n    mnAbrir.add(mntmAbrirXml);\\n    //JTree treeOut = new JTree(new DefaultMutableTreeNode());\\n    //frame.getContentPane().add(treeOut  BorderLayout.CENTER);\\n}\\n\\n}\\n</code></pre>\\n\\n<p>Thanks again  Topo.</p>\\n\"",
    "recos": [
      163918,
      114039,
      169811,
      11967
    ]
  },
  {
    "index": 7,
    "votes": 0,
    "tags": [
      "java",
      "jtable",
      "listselectionlistener"
    ],
    "timestamp": 1419981986,
    "question": "java how to stop ListSelectionListener?",
    "answers": 0,
    "content": "<p>I created a button to activate the ListSelectionListener using this code</p>\\n\\n<pre><code>ListSelectionModel sm = table.getSelectionModel();\\nsm.addListSelectionListener(new RowListener(this));\\n</code></pre>\\n\\n<p>then created another button to remove the ListSelectionListener using this code</p>\\n\\n<pre><code>ListSelectionModel sm = table.getSelectionModel();\\nsm.removeListSelectionListener(table);\\n</code></pre>\\n\\n<p>but the listener still working  how to stop it?\\nthanks</p>\\n",
    "recos": [
      99706,
      13919,
      172134,
      55836
    ]
  }
]
