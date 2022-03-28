<template>
    <div class="block bg-white">
        <ContentTitle>
            <template v-slot:title>
                Играйте вместе с друзьями и зарабатывайте еще больше!
            </template>
            <template v-slot:content>
                Каждый раз, когда ваш приведенный друг по реферальной ссылке будет совершать депозит, вы будете получать дополнительный бонус на счет. Это правило также распространяется на рефералов ваших друзей, которых привели в
                игру вы.
            </template>
        </ContentTitle>
        <InputTitleButton title="Ваша реферальная ссылка:" disabled @button-action="copyRefLink"
                          button-text="Скопировать" :input-text="user_ref_link"
                          input-id="user-ref-field"/>
        <InputTitleButton title="Ваш доход" disabled @button-action="earnRefAward"
                          button-text="Забрать" :input-text="user_ref_money"
                          input-id="user-money-field"/>
        <ContentTitle>

            <template v-slot:title>
                Как это работает?
            </template>
            <template v-slot:content>
                Все ваши рефералы станут для вас рефералами 1-го у
                ровня и будут приносить вам 10% от депозитов.<br>Рефералы ваших рефералов
                (1-го уровня) станут для вас рефералами 2-го уровня и будут приносить 3%
                от депозитов.<br>Рефералы 2-го уровня станут для вас рефералами 3-го уровня и
                будут вам приносить 2% от депозитов.
            </template>
        </ContentTitle>
        <ContentTitle>
            <template v-slot:title>
                Условиями работы партнерской программы запрещено:
            </template>
            <template v-slot:content>
                Привлечение рефералов с помощью спама!
                <br>Использование собственных или специально зарегистрированных аккаунтов.<br>
                Привлечение рефералов путем обмана.<br>
                Нарушители будут оштрафованы или заблокированы в партнерской программе.
            </template>
        </ContentTitle>
    </div>
</template>

<script>
    import User from "../../utils/user";
    import {ref} from 'vue';
    import InputTitleButton from "../ui/InputTitleButton";
    import ContentTitle from "../ui/ContentTitle";
    import Browser from "../../utils/browser";

    export default {
        name: "Ref",
        components: {InputTitleButton: InputTitleButton,ContentTitle:ContentTitle},
        inject:["addToast"],
        data(){
            return {
                user_ref_link: ref(""),
                user_ref_money: ref("")
            }
        },
        methods:{
            ...User.methods,
            copyRefLink() {
                Browser.methods.copyToClipboard(this.user_ref_link);
            },
            earnRefAward(){
                User.methods.earnRefAward();
                this.addToast("Успех","Вам начислена прибыль от рефералов!","success");
            }
        },
        created() {
            this.user_ref_link = User.methods.getRefLink();
            this.user_ref_money = User.methods.getRefAward();
        }
    }
</script>
