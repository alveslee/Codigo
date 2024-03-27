import './SiteInicio.css';

const SiteInicio = () => {
    return (
        <> 

            <div className="logo">
            <div className="menu">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
    </div> 
                <img src="src/assets/logo.png" alt="logo" />
            <div className='caixa'>
                <input type="text" />
                <button>Procurar</button>
            </div>
            </div>
            <main>
                <section className="receitas">
                    <div className="receita1">
                        <h2>Lasanha à Bolonhesa</h2>
                        <img src="src/assets/lasanha-bolonhesa.jpg"/>
                        <p>Deliciosa lasanha caseira com molho bolonhesa, queijo e massa fresca.</p>
                    </div>
                    <div className="receita2">
                        <h2>Frango Assado com Batatas</h2>
                        <img src="src/assets/frango-com-batatas.png"/>
                        <p>Refeição simples e reconfortante com frango suculento assado e batatas douradas.</p>
                    </div>
                    <div className="receita3">
                        <h2>Sopa de Tomate e Manjericão</h2>
                        <img src="src/assets/sopa-de-tomate.jpg"/>
                        <p>Sopa clássica de tomate com um toque de manjericão fresco, perfeita para dias frios.</p>
                    </div>
                    <div className="receita4">
                        <h2>Bolo de Chocolate</h2>
                        <img src="src/assets/bolo-de-chocolate.jpg  "/>
                        <p>Bolo de chocolate úmido, feito com cacau em pó e com uma ganache de chocolate.</p>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Sobre Nós</h4>
                            <p>Explore uma variedade de receitas deliciosas e inspire-se na cozinha com o nosso site. Descubra novas maneiras de preparar pratos incríveis e compartilhe suas próprias criações culinárias.</p>
                        </div>
                        <div className="col-md-4">
                            <h4>Links Úteis</h4>
                            <ul className="list-unstyled">
                                <li><a href="#">Receitas</a></li>
                                <li><a href="#">Sobre</a></li>
                                <li><a href="#">Contato</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h4>Conecte-se Conosco</h4>
                            <ul className="list-inline">
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twitter</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">Pinterest</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    &copy; 2024 Panela criativa. Todos os direitos reservados.
                </div>
            </footer>
        </>
    );
};

export default SiteInicio;
