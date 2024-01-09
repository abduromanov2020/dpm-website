import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Container from "../../components/ui/container/Container";
import DescBox from "../../components/ui/descBox/DescBox";
import Title from "../../components/ui/title/Title";
import Wrapper from "../../components/ui/wrapper/Wrapper";
import { useCollection } from "../../hooks/useCollection";
import StyledDashboard from "./Dashborad.styled";

import { GrContactInfo } from "react-icons/gr";

import { MdDeleteSweep } from "react-icons/md";
import { useFirestore } from "../../hooks/useFirestore";
import Subtitle from "../../components/ui/subtitle/Subtitle";

function Dashboard() {
  const { documents, error } = useCollection("aspirasi", "", [
    "createdAt",
    "desc",
  ]);

  const { deleteDocument } = useFirestore("aspirasi");

  const handleClick = (id) => {
    if (window.confirm("Yakin ingin menghapus Aspirasi ini ?")) {
      deleteDocument(id);
    }
  };

  return (
    <div>
      <Navbar isLoginPage={true} />
      <Wrapper padding="3rem 0">
        <Title>Dashboard Aspirasi</Title>
        <StyledDashboard>
          {error && <div className="error">{error}</div>}
          {documents && (
            <>
              {documents.length === 0 && <h2>Tidak ada aspirasi</h2>}
              {documents.map((document) => (
                <DescBox>
                  <Container className="title">
                    <h3>{document.nama}</h3>
                  </Container>
                  <Subtitle>
                    {document.nim} {document.jurusan} {document.angkatan}
                  </Subtitle>
                  <Container className="contact">
                    <p>
                      {document.email}
                      {" - "} {document.noTelpon}
                    </p>
                  </Container>
                  <p className="aspirasi">{document.aspirasi}</p>
                  <span
                    onClick={() => handleClick(document.id)}
                    className="delete"
                  >
                    <MdDeleteSweep />
                  </span>
                </DescBox>
              ))}
            </>
          )}
        </StyledDashboard>
      </Wrapper>
    </div>
  );
}

export default Dashboard;
