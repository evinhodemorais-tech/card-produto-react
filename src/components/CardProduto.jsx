// src/components/CardProduto.jsx
import React, { useState } from "react";
import styled from "@emotion/styled";

// ===== Estilos =====
const CardContainer = styled.div`
  width: 250px;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImagemProduto = styled.img`
  width: 100%;
  height: 200px;          /* altura fixa */
  object-fit: contain;    /* mostra a imagem inteira */
  background-color: #030303ff; /* fundo neutro para imagens menores */
  border-radius: 8px;
  margin-bottom: 12px;
`;

const NomeProduto = styled.h2`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 8px;
`;

const Preco = styled.p`
  font-size: 1rem;
  color: #198754;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Botao = styled.button`
  background-color: ${({ adicionado }) => (adicionado ? "#198754" : "#6c757d")};
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

// ===== Componente =====
const CardProduto = ({ nome, preco, imagem }) => {
  const [adicionado, setAdicionado] = useState(false);

  return (
    <CardContainer>
      <ImagemProduto src={imagem} alt={nome} />
      <NomeProduto>{nome}</NomeProduto>
      <Preco>R$ {preco.toFixed(2)}</Preco>
      <Botao adicionado={adicionado} onClick={() => setAdicionado(!adicionado)}>
        {adicionado ? "Adicionado!" : "Adicionar ao carrinho"}
      </Botao>
    </CardContainer>
  );
};

export default CardProduto;
