import styled from "styled-components";

export const Styles = {
	  style: {
		    fontFamily: "Inter",
		    color: "black",
		    position: 'absolute',
		    top: '50%',
		    left: '50%',
		    borderRadius: "1em",
		    border: '2px solid darkgray',
		    transform: 'translate(-50%, -50%)',
		    width: 400,
		    bgcolor: 'background.paper',
		    border: '2px solid #000',
		    boxShadow: 24,
		    p: 4,
	  }

	  ,select: {
		    width: "10rem",
		    height: 32,
		    color: '#323232',
		    bgcolor: '#ccc',
	  }

	  ,label: {
		    color: "black",
		    fontWeight: 500,
		    fontFamily: "Inter",
		    fontSize: 16,
		    marginTop:".8rem"
	  }

	  ,button: {
		    border: "none",
		    borderRadius: "2em",
		    padding: ".2em",
		    fontSize: 16,
		    fontFamily: "Inter",
		    fontWeight: 600,
		    width: "8em",
		    height: "2em",
		    marginTop: "1.4em",
		    cursor: "pointer"
	  }
	  ,input: {
		    border: "2px solid black",
		    borderRadius: ".5em",
		    padding: ".2em",
		    fontSize: 14,
		    width: "80%",
		    height: "2em",
		    cursor: "pointer"
	  }

	  ,textArea: {
		    width: "100%",
		    borderRadius: "1rem",
		    border: "2px solid dargray",
		    height: "4rem",
		    resize: "none",
	  }
}

export const Geral = styled.div`
margin-left: 5%;
font-family: 'Inter';

.box-item{
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  width: 100px;
	  height:100px;
	  text-align: center;

}
	  .box-item > img{
		    margin-bottom: 10px;
	  }
`
export const Img = styled.img`
width: 2.5em;
height: 2.5rem;
:hover{
	  cursor: pointer;
}
` 
export const Perfil = styled.img`
width: 4rem;
height: 4rem;
border-radius: 5rem;
:hover{
	  cursor: pointer;
}
`
