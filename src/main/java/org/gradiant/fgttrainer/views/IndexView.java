/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.gradiant.fgttrainer.views;

import io.dropwizard.views.View;

/**
 *
 * @author Fran Abril
 */
public class IndexView extends View {

    private String msg = "";

    public IndexView(String msg) {
        this();
        this.msg = msg;
    }

    public IndexView() {
        super("index.ftl");
    }

    public void setMsg(String msg) {
            this.msg = msg;
    }

    public String getMsg() {
            return this.msg;
    }

}
