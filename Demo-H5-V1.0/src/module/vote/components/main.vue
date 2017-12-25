<template>
<div class="module-vote">
   <section class="vote">
        <ul>
            <li class="vote-item">               
                <div class="avar" v-on:click="points0 += 1">
                    <img class="photo" src="../img/1.png" width="20">
                    <div class="mask">
                        <img src="../img/xin.png">
                        <span>{{points0}}</span>
                    </div>
                </div>
                <div class="remark">
                    <router-link to="/vote/detail" v-tap></router-link>
                    <p class="name">Lisa</p>
                    <p>Female 34</p>
                    <p>Michigan, EE & CS,Associate Professor</p>
                    <p>&nbsp;</p>
                    <p class="purpose">Purpose:fund my student for a innovating program about educating</p>
                </div>
            </li>
            <li class="vote-item">
                <div class="avar" v-on:click="points1 += 1">
                    <img class="photo" src="../img/2.png" width="20">
                    <div class="mask">
                        <img src="../img/xin.png">
                        <span>{{points1}}</span>
                    </div>
                </div>
                <div class="remark">
                    <router-link to="/vote/detail" v-tap></router-link>
                    <p class="name">Ella</p>
                    <p>Female 28</p>
                    <p>Michigan, EE & CS,Coach</p>
                    <p>&nbsp;</p>
                    <p class="purpose">Purpose:fund my student for a innovating program about educating</p>
                </div>
            </li>
            <li class="vote-item">
                <div class="avar" v-on:click="points2 += 1">
                    <img class="photo" src="../img/3.png" width="20">
                    <div class="mask">
                        <img src="../img/xin.png">
                        <span>{{points2}}</span>
                    </div>
                </div>
                <div class="remark">
                    <router-link to="/vote/detail" v-tap></router-link>
                    <p class="name">Frank</p>
                    <p>Male 40</p>
                    <p>Michigan, EE & CS,Chinese Teacher</p>
                    <p>&nbsp;</p>
                    <p class="purpose">Purpose:fund my student for a innovating program about educating</p>
                </div>
            </li>
            <li class="vote-item">
                <div class="avar" v-on:click="points3 += 1">
                    <img class="photo" src="../img/4.png" width="20">
                    <div class="mask">
                        <img src="../img/xin.png">
                        <span>{{points3}}</span>
                    </div>
                </div>
                <div class="remark">
                    <router-link to="/vote/detail" v-tap></router-link>
                    <p class="name">Alic</p>
                    <p>Female 20</p>
                    <p>Tsinghua, EE & CS,Student</p>
                    <p>&nbsp;</p>
                    <p class="purpose">Purpose:fund my student for a innovating program about educating</p>
                </div>
            </li>
        </ul>
    </section>
</div>
</template>

<script>
    export default {
        data() {
            return {
                points0:188,
                points1:99,
                points2:68,
                points3:55,
            };
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                document.title="votes";
            });
        },
        methods:{

        }

    }
</script>
