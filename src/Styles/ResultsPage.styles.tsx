import styled from 'styled-components';

export const Loading = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    padding: 20px;
    margin: 0 auto;
    font-family: 'Montserrat', sans-serif;

        @media (max-width: 1000px){
            width: 90%;
        }
`

export const Logo = styled.div`
    display: flex;
    width: 100%;
    padding: 10px;
    margin: 0;

    img{
        width: 30%;
        height: auto;
        display: block;
    }
`


export const WrapStyleSearchBar = styled.div`
        width: 100%;
`

export const StyleSearchBar = styled.div`
    text-align: left;
    margin: 0 0 20px 0;
    position: relative;

        input {
            position: relative;
            font-weight: 400;
            width: 100%;
            padding: 15px;
            transition: .3s ease;
            font-size: calc(16px + 2 * ((100vw - 320px) / 680));
            border-width: 0 0 2px 0;
            border-style: solid;
            border-color: rgba(0,0,0,.2);
            outline: none;
            margin-top: 10px;
            background: transparent;


                &::placeholder {
                    font-size: calc(16px + 2 * ((100vw - 320px) / 680));
                    font-weight: 100;
                    color: #353535;
                    font-family: 'Montserrat', sans-serif;
                    transition: .3s ease;
                    opacity: 1;
                }

                &:hover {
                    border-color: rgba(0,0,0,.4);
                }
                
                &:Focus, &:focus-within {
                    border-color: rgba(0,0,0,.4);
                    outline:none;

                    &::placeholder {
                        opacity: 0;
                    }
                }
        }
        button {
            position: absolute;
            top: 15px;
            right: 40px;
            z-index: 14;
            background-color: rgba(255,255,255,.5);
            color: #adadad;
            border: 1px solid rgba(255,255,255,.5);
            border-radius: 30px;
            font-size: calc(12px + 2 * ((100vw - 320px) / 680));
            font-weight: 600;
            text-transform: uppercase;
            padding: 8px 20px;
            text-align: center;
            text-decoration: none #D1D5DB solid;
            text-decoration-thickness: auto;
            box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0);
            cursor: pointer;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            transition: .3s ease;

                img {
                    z-index: 10;
                    width: 23px;
                    opacity: .3;
                    vertical-align: middle;
                }

                &:hover {
                    background-color: rgba(255,255,255,1);
                    border: 1px solid rgba(255,255,255,1);
                }
            }
`
export const AboveResults = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin: 20px 0 0 0;
`

export const ResultsTitle = styled.h1`
    text-align: left;
    font-weight: 600;
    font-size: calc(14px + 2 * ((100vw - 320px) / 680));

        span {
            font-weight: 600;
        }
`

export const ResultsContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-width: 6px 0 0 0;
    border-style: solid;
    border-color: #ddd;
    width: 100%;
    margin: 10px auto;
    box-shadow: 1px 1px 14px 1px rgba(0,0,0,.10);
    background: rgba(255, 255, 255, 0.66);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.6px);
    -webkit-backdrop-filter: blur(9.6px);


        ul {
            list-style: none;
            width: 100%;
            padding: 0;
            margin: 0;

            li {
                display: flex;
                flex-direction: row;
                align-items: center;
                align-content: flex-end;
                justify-content: space-between;
                padding: 20px;
                background-color: rgba(255, 255, 255, 0);
                transition: .3s ease;
                color: #333;
                border-width: 1px 0 0 0;
                border-style: solid;
                border-color: #ccc;
                font-size: calc(14px + 2 * ((100vw - 320px) / 680));
                box-shadow: 1px 1px 1x 1px rgba(0,0,0,0);
                cursor: pointer;
                cursor: hand;

                    &:hover {
                        color: #000;
                        background-color: rgba(255, 255, 255, .75);
                        box-shadow: 1px 1px 8px 1px rgba(0,0,0,.10);
                        position: relative;
                        z-index: 2;

                        span {
                        opacity: 1;
                        transform: translateX(-10px);
                        }

                        p {
                            img {
                                vertical-align: text-bottom;
                                transition: .3s ease;
                                opacity: .8;
                                font-size: calc(16px + 2 * ((100vw - 320px) / 680));
                             }
                        }
                    }

                    span {
                        opacity: 0;
                        font-size: calc(11px + 2 * ((100vw - 320px) / 680));
                        transition: .3s ease;
                        font-weight: 600;
                        transform: translateX(-20px);
                    }

                    p {
                        img {
                            vertical-align: text-bottom;
                            opacity: .3;
                            font-size: calc(16px + 2 * ((100vw - 320px) / 680));
                        }
                    }
                }
        }
`

export const WrapResultsBtns = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: flex-end;
`

export const ResultsBtns = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: flex-end;


    p {
        color: #999;
        margin: 0 10px;
    }

    button {
        background-color: #eee;
        border: 1px solid rgba(0,0,0,0);
        border-radius: 0.5rem;
        font-size: .875rem;
        font-weight: 600;
        padding: 3px;
        text-align: center;
        text-decoration: none #D1D5DB solid;
        text-decoration-thickness: auto;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0);
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        transition: .3s ease;

            :disabled {
                pointer-events: none;
                opacity: .3;
            }

            img {
                vertical-align: bottom;
                opacity: .25;
            }

            &:hover {
                background-color: #fff;


                img {
                    opacity: .5;
                 }
            }
    }

        
`

