/*
 * Copyright 2022 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.alibaba.initializer.generation.condition;

import com.alibaba.initializer.metadata.Module;
import io.spring.initializr.generator.condition.ProjectGenerationCondition;
import io.spring.initializr.generator.project.ProjectDescription;

import org.springframework.context.annotation.ConditionContext;
import org.springframework.core.annotation.AnnotationAttributes;
import org.springframework.core.type.AnnotatedTypeMetadata;

/**
 * @author <a href="mailto:chenxilzx1@gmail.com">theonefx</a>
 */
public class OnModuleCondition extends ProjectGenerationCondition {

    @Override
    protected boolean matches(ProjectDescription description, ConditionContext context, AnnotatedTypeMetadata metadata) {

        Module module = context.getBeanFactory().getBean(Module.class);

        AnnotationAttributes attributes = AnnotationAttributes
                .fromMap(metadata.getAnnotationAttributes(ConditionalOnModule.class.getName(), true));

        boolean root = attributes.getBoolean("root");
        boolean main = attributes.getBoolean("main");
        boolean others = attributes.getBoolean("others");

        if (root) {
            return module.isRoot();
        }

        if (main) {
            return module.isMain();
        }

        if (others) {
            return !module.isMain() && !module.isRoot();
        }

        return false;
    }

}
