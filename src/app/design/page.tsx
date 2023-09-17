export default function Design () {
    return (
        <main>
            <h1>This is an example of some text that is surrounded by an H1 tag.</h1>
            <p>Search engines look for H1s to determine a page&#39;s title and use that in the weighting of the page in their rankings. Consequently, you never want to actually use the H1 in the content of a page because we automatically generate the H1 from the Page Name and Google would ding you for trying to game their algorithm if you had more than one on a page.</p>
            <h2>This is an example of an H2</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>
            <h3>This is an example of an H3</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>
            <h4>This is an example of an H4</h4>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>
            <h5>This is an example of an H5</h5>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>
            <h6>This is an example of an H6</h6>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>

            This is what a bunch of text looks like without the &quot;p tag&quot;. If you were to look at the HTML version of this page, you would notice that this grouping of text does not have any sort of tag (denoted by &lt;&gt; preceding it and following it to close the tag). That is why this text is pretty generic and lacking any style. Chances are that the leading between the lines is a lot closer than the ideal as well.

            <p>This, on the other hand is what text looks like when it is surrounded by &quot;p tags&quot;. In case it is not apparent at this point, &quot;p&quot; stands for paragraph. It is the p tags that alert the CMS to the fact that this text needs to have certain styling applied to it. That is why this text probably looks a good deal different than the paragraph above. If you were to look at this text in the HTML, you would see a</p>

            <p>just before the first word to open the tag and a

            just after this sentence to close it.</p>

            <p>And now for some lists...we&#39;ll start with bullets</p>
            <ul>
                <li>First bullet</li>
                <li>Second bullet</li>
                <li>Third bullet
                <ul>
                    <li>Indented bullet
                    <ul>
                        <li>Twice indented bullet</li>
                    </ul>
                    </li>
                </ul>
                </li>
            </ul>

            <p>Or if you prefer an ordered lis, as opposed to an unorded bullet list:</p>

            <ol>
                <li>First item</li>
                <li>Second item</li>
                <li>Third item
                <ol>
                    <li>Once indented
                    <ol>
                        <li>Twice indented</li>
                    </ol>
                    </li>
                </ol>
                </li>
            </ol>

            <p>And finally, we&#39;ll wrap this page up with some common text styling:</p>

            <p><b>Here&#39;s an example of what bold text looks like</b></p>

            <p><i>And here&#39;s italicized text</i></p>

            <p><u>How about some underlining?</u></p>

            <p>Here&#39;s and example of <sub>subscript</sub></p>

            <p>Or how about some <sup>superscript</sup>?</p>

            <p>And last but certainly not least, here&#39;s what a <a href="http://www.google.com" target="_blank">hyperlink</a> looks like on this site.</p>
        </main>
    )
}