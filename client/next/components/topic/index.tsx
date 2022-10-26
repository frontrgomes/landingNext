import * as C from './styled';

type Props = {
    icon: string;
    title: string;
    subtitle:string;
}

export const Topic = ({icon, title, subtitle}: Props) => {
    return(
        <C.Container>
            <C.boxTopic>
                <C.boxContent>
                    <C.boxIcon>
                        <C.boxImg src={icon}/>
                    </C.boxIcon> 
                    <C.boxDescription>
                        <C.boxTitle>{title}</C.boxTitle>
                        <C.boxText>{subtitle}</C.boxText>
                    </C.boxDescription> 
                </C.boxContent>
            </C.boxTopic>
        </C.Container>
    );
}

export const getStaticProps = () => {
    const res = await fetch('');
    const req = await res.json();
    return {
        props:{
            icon: 'asdsad',
            title: 'Esquenta<br>Black Friday',
            subtitle: 'Rápido e seguro. Clique e saiba mais!'
        },
        revalidate: 7200 //depois de duas horas ele faz a requisição
    }
}

