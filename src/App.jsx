// src/App.jsx
import styled from "@emotion/styled";
import CardProduto from "./components/CardProduto";
import camisa from "./assets/camisa.jpg";
import caneca from "./assets/caneca.jpg";
import mouse from "./assets/mouse.jpg";
import teclado from "./assets/teclado.jpg";

// ===== Estilos =====
const Container = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Titulo = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
  color: #333;
`;

const GridProdutos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1000px;
`;

// ===== Lista de Produtos (dados estáticos) =====
const produtos = [
  { id: 1, nome: "Camisa Anime", preco: 99.9, imagem: camisa },
  { id: 2, nome: "Caneca Programador", preco: 49.9, imagem: caneca },
  { id: 3, nome: "Mouse Gamer RGB", preco: 159.9, imagem: mouse },
  { id: 4, nome: "Teclado Mecânico RGB", preco: 299.9, imagem: teclado },
];

// ===== Componente Principal =====
function App() {
  return (
    <Container>
      <Titulo> Catálogo de Produtos</Titulo>
      <GridProdutos>
        {produtos.map((p) => (
          <CardProduto
            key={p.id}
            nome={p.nome}
            preco={p.preco}
            imagem={p.imagem}
          />
        ))}
      </GridProdutos>
    </Container>
  );
}

export default App;
