/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.gradiant.fgttrainer.conf;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.NotEmpty;

/**
 *
 * @author Fran Abril
 */
public class WebViewsConf {

    @NotEmpty
    private String className;

    @JsonProperty
    public String getClassName() {
        return this.className;
    }

}
