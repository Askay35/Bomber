<template>
    <div class="block bg-white mines">
        <div class="col-4">

        </div>
        <div class="mines-field">
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
            <div class="mine"></div>
        </div>
        <div class="col-2 d-flex flex-column">
            <ContentTitle class="w-100 mb-3">
                <template v-slot:title>
                    Количество бомб
                </template>
                <template v-slot:content>
                    <div class="b-group mines-numbers">
                        <div class="mines-number" @click="setMinesNumber">3</div>
                        <div class="mines-number" @click="setMinesNumber">5</div>
                        <div class="mines-number" @click="setMinesNumber">10</div>
                        <div class="mines-number" @click="setMinesNumber">24</div>
                    </div>
                </template>
            </ContentTitle>
            <ContentTitle class="w-100 mb-4">
                <template v-slot:title>
                    Сумма игры
                </template>
                <template v-slot:content>
                    <div class="b-group bet-size-wrapper">
                        <div class="bet-size" @click="bet=0.00">Min</div>
                        <div class="bet-size" @click="bet*=2">x/2</div>
                        <div class="bet-size">1.0</div>
                        <div class="bet-size" @click="bet">x2</div>
                        <div class="bet-size">Max</div>
                    </div>
                </template>
            </ContentTitle>
            <div class="b-btn-blue p-3 fs-3">
                Начать игру
            </div>
        </div>
    </div>
</template>

<script>
    import ContentTitle from "../ui/ContentTitle";
    import {ref} from 'vue';

    let mines_number_btns=document.getElementsByClassName('mines-number');

    export default {
        name: "Mines",
        data(){
          return{
              bet: ref(0.00),
              mines_number:ref(3),
          }
        },
        mounted(){
            let mines_btns = document.getElementsByClassName('mine');
            for (let mine of mines_btns) {
                mine.onclick=()=>{
                    mine.classList.toggle('lose');
                };
            }
        },
        methods:{
          setMinesNumber(e){
            this.mines_number=Number.parseInt(e.target.textContent);
            for (let mnb of mines_number_btns){
                mnb.classList.remove('active');
            }
            e.target.classList.add('active');
          }
        },
        components:{ContentTitle:ContentTitle}
    }
</script>

<style lang="scss">
    .mine.win{
        background-color: #95dfbc;
        background-image: url(/images/games/mines/win.svg);
        border-color: #89cbb0;
    }
    .mine.lose{
        background-color: #febcbd;
        border-color: #d89e9c;
        background-image: url(/images/games/mines/lose.svg);
    }
    .mine.opacity{
        opacity: .4;
    }
    #change-mn{
        flex: 2;
    }
    #custom-mn-inp{
        display: flex;
        justify-content: space-between;
        .b-btn{
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            &:first-child{
                border-top-right-radius: 5px;
            }
            &:last-child{
                border-bottom-right-radius: 5px;
            }
        }
    }

    .mines-number,.bet-size{
        transition: all .4s ease;
        &,& > *{
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px!important;
        }
        cursor: pointer;
        padding: 8px 5px;
        flex: 1;
    }
    .mines-number.active,.bet-size.active,.mines-number:hover,.bet-size:hover{
        background:#dce0ed;
    }
    .mines-numbers{
        width: 100%;
        #change-mn > *{
            width: 100%;
            height: 100%;
        }
    }
    .mines-field {
        padding: 40px;
        width: 400px;
        height: 400px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 2px;
    }

    .mine {
        &:not(.win,.lose):hover{
            background-color: #f4f5f8;
            cursor: pointer;
        }
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: 50%;
        margin: 2px;
        min-width: 55px;
        min-height: 55px;
        background-color: #fff;
        border-radius: 6px;
        border: 1px solid #ced4da;
    }

    .mines {
        flex-grow: 1;
        align-items: center;
        & > *[class^="col-"] {
            width: 100%;
            display: flex;
        }
    }

</style>
