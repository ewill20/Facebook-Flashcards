function determineDisplay() {
    const display = () => {
    if (".btn-arrow-left") {
    return (`
        <div class="back">
        <div class="panel panel-default backside-hints">
            <div class="panel panel-header hints">
                Hints
            </div>
            <div class="panel panel-body hints">
                <p class="different-hints align-center">
                    <input type="text"><br>
                    2. What Is Your Friend's Hometown? <br>
                    <input type="text"><br>
                    3. Where Does Your Friend Live Now? <br>
                    <input type="text">
                </p>
            </div>
        </div>
    </div>`);
} else {
    return (`
        <div class="back2">
                <div class="panel panel-default backside-defriend">
                    <div class="panel panel-header defriend">
                        defriend Options
                    </div>
                    <div class="panel panel-body defriend-Options">
                        <p class="different-Options align-center">
                            1. Would You Like To Add This Friend To Your "defriend" List? <br>                                  
                            <input type="text"><br>
                            2. Would You Like To Add This Friend To Your "Block" List? <br>
                            <input type="text"><br>
                            3. Skip This Friend For Now <br>
                            <button type="button">
                        </p>
                    </div>
                </div>
            </div>`);
        };
    };
}

$(".hints").html(display);