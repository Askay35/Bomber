<template>
    <div class="block-white">
        <TextTitle text="Каждый раз, когда ваш приведенный друг по реферальной ссылке будет совершать депозит, вы будете получать дополнительный бонус на счет. Это правило также распространяется на рефералов ваших друзей, которых привели в
        игру вы." title="Играйте вместе с друзьями и зарабатывайте еще больше!"/>
        <InputTitleButton title="Ваша реферальная ссылка:" disabled @button-action="copyRefLink"
                          button-text="Скопировать" :input-text="user_ref_link"
                          input-id="user-ref-field"/>
        <InputTitleButton title="Ваш доход" disabled @button-action="getRefAward"
                          button-text="Забрать" :input-text="user_ref_money"
                          input-id="user-money-field"/>
        <TextTitle title="Как это работает?" text="Все ваши рефералы станут для вас рефералами 1-го у
        ровня и будут приносить вам 10% от депозитов.<br>Рефералы ваших рефералов
         (1-го уровня) станут для вас рефералами 2-го уровня и будут приносить 3%
          от депозитов.<br>Рефералы 2-го уровня станут для вас рефералами 3-го уровня и
           будут вам приносить 2% от депозитов."/>
        <TextTitle title="Условиями работы партнерской программы запрещено:" text="Привлечение рефералов с помощью спама!
        <br>Использование собственных или специально зарегистрированных аккаунтов.<br>
        Привлечение рефералов путем обмана.<br>
        Нарушители будут оштрафованы или заблокированы в партнерской программе."/>
    </div>

    <div class="position-fixed bottom-0 end-0 p-3" style="z-index:11">
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">Успешна</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                Ваша реферальная ссылка скопированна!
            </div>
        </div>
    </div>
</template>

<script>
    import {User} from "../../utils/user";
    import {ref} from 'vue';
    import InputTitleButton from "../ui/InputTitleButton";
    import TextTitle from "../ui/TextTitle";
    import {Browser} from "../../utils/browser";

    export default {
        name: "Ref",
        components: {InputTitleButton: InputTitleButton,TextTitle:TextTitle},
        data(){
            return {
                user_ref_link: ref(""),
                user_ref_money: ref("")
            }
        },
        methods:{
            copyRefLink() {
                Browser.copyToClipboard(this.user_ref_link);
            },
            getRefAward(){
                User.getUserRefAward();
            }
        },
        created() {
            this.user_ref_link = User.getUserRefLink();
            this.user_ref_money = User.getUserRefAward();
        }
    }
</script>
<style>

</style>
