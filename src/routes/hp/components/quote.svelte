<li class="quote">
    <blockquote>
        <p class="quote">
            <span class="quotation-mark">“</span>
            <slot>

            </slot>
            <span class="quotation-mark"> &nbsp;”</span>
        </p>
        <footer>
            <slot name="quoted">

            </slot>
        </footer>
    </blockquote>
</li>

<style lang="less">
    .quote {
        font-size: 20px;
        margin-bottom: 2.3em;
    }
    .quotation-mark {
        display: inline-block;
        transform: scale(2,2);
        position: relative;
        top: .4em;
        left: -.2em;
        font-family: serif;
    }
</style>
