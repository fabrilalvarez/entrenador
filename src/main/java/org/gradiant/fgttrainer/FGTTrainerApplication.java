package org.gradiant.fgttrainer;

import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import io.dropwizard.views.ViewBundle;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Map;
import org.eclipse.jetty.server.session.SessionHandler;
import org.gradiant.fgttrainer.conf.WebViewsConf;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 *
 * @author Fran Abril
 */
public class FGTTrainerApplication extends Application<FGTTrainerConfiguration> {

    final static Logger logger = LoggerFactory.getLogger(FGTTrainerApplication.class);

    public static void main(final String[] args) throws Exception {
        new FGTTrainerApplication().run(args);
    }

    @Override
    public String getName() {
        return "FGTTrainer";
    }

    @Override
    public void initialize(Bootstrap<FGTTrainerConfiguration> bootstrap) {
        bootstrap.addBundle(new AssetsBundle());

        bootstrap.addBundle(new ViewBundle<FGTTrainerConfiguration>() {
            @Override
            public Map<String, Map<String, String>> getViewConfiguration(FGTTrainerConfiguration configuration) {
                return configuration.getViewRendererConfiguration();
            }
        });
    }

    @Override
    public void run(FGTTrainerConfiguration configuration, Environment environment) {
        // TODO: implement application.
        // Se extraen las vistas desde la configuración
        ArrayList<WebViewsConf> views = configuration.getWebViews();
        for (Iterator<WebViewsConf> it = views.iterator(); it.hasNext();) {
            WebViewsConf view = it.next();
            if (view.getClassName() == null) {
                continue;
            }
            try {
                Object object = Class.forName(view.getClassName()).newInstance();
                environment.jersey().register(object);
            } catch (ClassNotFoundException | InstantiationException | IllegalAccessException ex) {
                logger.error("Failed to instantiate Web View Class (" + view.getClassName() + ")");
            }
        }

        // Web session enabler
        environment.getApplicationContext().setSessionHandler(new SessionHandler());
    }

}
