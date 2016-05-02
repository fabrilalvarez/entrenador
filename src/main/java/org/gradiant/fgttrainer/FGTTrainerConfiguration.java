package org.gradiant.fgttrainer;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.google.common.collect.ImmutableMap;
import io.dropwizard.Configuration;
import java.util.ArrayList;
import java.util.Map;
import javax.validation.constraints.NotNull;
import org.gradiant.fgttrainer.conf.WebViewsConf;

/**
 *
 * @author Fran Abril
 */
public class FGTTrainerConfiguration extends Configuration {
    // TODO: implement service configuration

    @NotNull
    @JsonProperty("WebViews")
    private ArrayList<WebViewsConf> webViews;

    @JsonProperty
    public ArrayList<WebViewsConf> getWebViews() {
        return webViews;
    }

    @JsonProperty
    public void setWebViews(ArrayList<WebViewsConf> webViews) {
        this.webViews = webViews;
    }

    @NotNull
    private Map<String, Map<String, String>> viewRendererConfiguration = ImmutableMap.of();

    @JsonProperty("viewRendererConfiguration")
    public Map<String, Map<String, String>> getViewRendererConfiguration() {
		return viewRendererConfiguration;
	}

    @JsonProperty("viewRendererConfiguration")
    public void setViewRendererConfiguration(Map<String, Map<String, String>> viewRendererConfiguration) {
		ImmutableMap.Builder<String, Map<String, String>> builder = ImmutableMap.builder();
		for (Map.Entry<String, Map<String, String>> entry : viewRendererConfiguration.entrySet()) {
			builder.put(entry.getKey(), ImmutableMap.copyOf(entry.getValue()));
		}
//		Map <String, String> shiro = new HashMap<String, String>();
//		shiro.put("shiro", ShiroTags.class.getCanonicalName());
//		builder.put("sharedVariable", ImmutableMap.copyOf(shiro));
		this.viewRendererConfiguration = builder.build();
	}

}
