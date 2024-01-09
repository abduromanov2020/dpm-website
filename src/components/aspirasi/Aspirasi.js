import React, { useState } from "react";

import Select from "react-select";

import Button from "../ui/button/Button";
import Container from "../ui/container/Container";
import Form from "../ui/form/Form";
import Label from "../ui/label/Label";
import Subtitle from "../ui/subtitle/Subtitle";
import Title from "../ui/title/Title";
import Wrapper from "../ui/wrapper/Wrapper";

import StyledAspirasi from "./Aspirasi.styled";

import aspirasiImg from "../../assets/aspirasi.svg";
import { useFirestore } from "../../hooks/useFirestore";

const jurusanList = [
  { value: "Teknik Informatika", label: "Teknik Informatika" },
  { value: "Sistem Informasi", label: "Sistem Informasi" },
  { value: "Bisnis Digital", label: "Bisnis Digital" },
];

const angkatanList = [
  { value: "2018", label: "2018" },
  { value: "2019", label: "2019" },
  { value: "2020", label: "2020" },
  { value: "2021", label: "2021" },
  { value: "2022", label: "2022" },
];

function Aspirasi() {
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [noTelpon, setNoTelpon] = useState("");
  const [nim, setNim] = useState("");
  const [angkatan, setAngkatan] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [aspirasi, setAspirasi] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { addDocument, response } = useFirestore("aspirasi");

  const formReset = () => {
    setEmail("");
    setNama("");
    setNoTelpon("");
    setNim("");
    setAngkatan("");
    setJurusan("");
    setAspirasi("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const data = {
      email,
      nama,
      noTelpon,
      nim,
      angkatan,
      jurusan,
      aspirasi,
    };

    if (jurusan === "" || !angkatan === "") {
      return setError("Form tidak boleh ada yang kosong !");
    }

    await addDocument(data);

    if (!response.error) {
      setSuccess("Aspirasi kamu telah terkirim");
      formReset();
    } else {
      setError("Terjadi kesalahan pada server");
    }
  };

  return (
    <Wrapper name="aspirasi" padding="7rem 2rem">
      <Title>Kirim Aspirasi mu Disini</Title>
      <Subtitle>Jangan lupa isi aspirasi hari ini</Subtitle>
      <StyledAspirasi>
        <Form onSubmit={handleSubmit}>
          <Container className="inputGroup">
            <Label>
              <span>Email</span>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </Label>
            <Label>
              <span>Nama</span>
              <input
                type="text"
                onChange={(e) => setNama(e.target.value)}
                value={nama}
                required
              />
            </Label>
          </Container>
          <Container className="inputGroup">
            <Label>
              <span>No. Telpon</span>
              <input
                type="text"
                onChange={(e) => setNoTelpon(e.target.value)}
                value={noTelpon}
                required
              />
            </Label>
            <Label>
              <span>NIM</span>
              <input
                type="text"
                onChange={(e) => setNim(e.target.value)}
                value={nim}
                required
              />
            </Label>
          </Container>
          <Container className="inputGroup">
            <Label>
              <span>Angkatan</span>
              <Select
                options={angkatanList}
                onChange={(option) => setAngkatan(option.value)}
                required
              />
            </Label>
            <Label>
              <span>Jurusan</span>
              <Select
                options={jurusanList}
                onChange={(option) => setJurusan(option.value)}
                required
              />
            </Label>
          </Container>
          <Label>
            <span>Aspirasi</span>
            <textarea
              onChange={(e) => setAspirasi(e.target.value)}
              value={aspirasi}
              required
            />
          </Label>
          <Button>Kirim Aspirasi</Button>
          {success && <div className="success">{success}</div>}
          {error && <div className="error">{error}</div>}
        </Form>
        <Container>
          <img src={aspirasiImg} alt="" />
        </Container>
      </StyledAspirasi>
    </Wrapper>
  );
}

export default Aspirasi;
